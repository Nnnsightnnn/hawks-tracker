// built by nnnsightnnn — signal from noise
import {
  useState, useMemo, useEffect, useRef, createContext, useContext,
} from "react";
import {
  PLAYERS, RESULTS, NEXT_GAME, NEWS_DIGEST, EAST_STANDINGS,
} from "./playerData.js";
import BrandCredit from "./components/BrandCredit.jsx";

// ─── Theme tokens ───────────────────────────────────────────────
export const C = {
  bg: "#0B0B0E",
  panel: "#16161A",
  panel2: "#1E1E22",
  red: "#E03A3E",
  volt: "#C8FB37",
  ivory: "#F5F1E8",
  green: "#3FCF8E",
  amber: "#F4B740",
  hair: "#27272C",
  mute: "#7A7A82",
};

// ─── Section registry ───────────────────────────────────────────
const SECTIONS = [
  { code: "COV",  id: "cov",  page:  1, label: "COVER" },
  { code: "IDX",  id: "idx",  page:  4, label: "INDEX" },
  { code: "PRE",  id: "pre",  page:  6, label: "PREVIEW" },
  { code: "HRDW", id: "hrdw", page:  8, label: "HARDWARE" },
  { code: "STRY", id: "stry", page: 18, label: "STORY" },
  { code: "PORT", id: "port", page: 32, label: "PORTFOLIO" },
  { code: "TACT", id: "tact", page: 46, label: "TACTICS" },
  { code: "NUM",  id: "num",  page: 54, label: "NUMBERS" },
  { code: "LDGR", id: "ldgr", page: 62, label: "LEDGER" },
  { code: "WIRE", id: "wire", page: 68, label: "WIRE" },
  { code: "BACK", id: "back", page: 80, label: "BACK" },
];

const TEAM_ABBR = {
  "Atlanta Hawks": "ATL", "Cleveland Cavaliers": "CLE", "Boston Celtics": "BOS",
  "New York Knicks": "NYK", "Milwaukee Bucks": "MIL", "Orlando Magic": "ORL",
  "Detroit Pistons": "DET", "Miami Heat": "MIA", "Brooklyn Nets": "BKN",
  "Sacramento Kings": "SAC", "Golden State Warriors": "GSW",
  "Houston Rockets": "HOU", "Dallas Mavericks": "DAL", "Memphis Grizzlies": "MEM",
};
const COUNTRY_SHORT = {
  USA: "USA", Australia: "AUS", Canada: "CAN", Bahamas: "BHS",
  France: "FRA", Senegal: "SEN", "DR Congo": "COD",
};
function abbr(team) {
  return TEAM_ABBR[team] || team.split(" ").pop().slice(0, 3).toUpperCase();
}
function countryName(p) {
  return (p.nationality || "USA").replace(/[^\x00-\x7F]+/g, "").trim();
}
function countryShort(p) {
  const n = countryName(p);
  return COUNTRY_SHORT[n] || n.slice(0, 3).toUpperCase();
}

// ─── Hooks ──────────────────────────────────────────────────────
export function useIsMobile(bp = 900) {
  const [m, setM] = useState(
    typeof window !== "undefined" ? window.innerWidth <= bp : false
  );
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${bp}px)`);
    const on = (e) => setM(e.matches);
    setM(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, [bp]);
  return m;
}

function useCountUp(target, dur = 900) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let raf, t0;
    const step = (t) => {
      if (!t0) t0 = t;
      const p = Math.min((t - t0) / dur, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setN(target * e);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, dur]);
  return n;
}

function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [ids.join(",")]);
  return active;
}

// ─── Tweaks context ─────────────────────────────────────────────
const TweaksContext = createContext({
  bw: true, rail: true, setBw: () => {}, setRail: () => {},
});
export function useTweaks() { return useContext(TweaksContext); }

function TweaksProvider({ children }) {
  const [bw, setBw] = useState(true);
  const [rail, setRail] = useState(true);
  return (
    <TweaksContext.Provider value={{ bw, setBw, rail, setRail }}>
      {children}
    </TweaksContext.Provider>
  );
}

const bwFilter = (on) => (on ? "grayscale(1) contrast(1.06)" : "none");

// ─── Primitives ─────────────────────────────────────────────────
export function Vlink({ children, onClick, active, color = C.volt, size = 12 }) {
  const [h, setH] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        background: "transparent", border: "none", padding: "4px 0",
        cursor: "pointer",
        color: active ? "#fff" : (h ? "#fff" : C.mute),
        fontFamily: "Inter, sans-serif", fontSize: size, fontWeight: 600,
        textTransform: "uppercase", letterSpacing: 1.4, position: "relative",
      }}
    >
      {children}
      <span style={{
        position: "absolute", left: 0, bottom: 0, height: 2,
        width: (active || h) ? "100%" : "0%",
        background: color, transition: "width .18s cubic-bezier(.7,0,.3,1)",
      }}/>
    </button>
  );
}

export function Status({ s }) {
  const map = {
    active: { c: C.green, l: "ACTIVE" },
    "day-to-day": { c: C.amber, l: "DTD" },
    questionable: { c: C.amber, l: "GTD" },
    doubtful: { c: C.amber, l: "DOUBT" },
    out: { c: C.red, l: "OUT" },
    suspended: { c: C.mute, l: "SUS" },
  };
  const m = map[s] || map.active;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      fontFamily: "'JetBrains Mono', monospace", fontSize: 9, fontWeight: 600,
      letterSpacing: 1.5, color: m.c, textTransform: "uppercase",
    }}>
      <span style={{ width: 7, height: 7, background: m.c, display: "inline-block" }}/>
      {m.l}
    </span>
  );
}

export function SectionHeader({ code, page, kicker, title, right }) {
  const m = useIsMobile();
  return (
    <div style={{ marginBottom: m ? 24 : 36 }}>
      <Folio code={code} page={page} kicker={kicker}/>
      <div style={{
        marginTop: m ? 14 : 22,
        display: "flex", alignItems: "flex-end", justifyContent: "space-between",
        gap: m ? 16 : 24, flexWrap: "wrap",
      }}>
        <h2 style={{
          fontFamily: "'Anton', sans-serif",
          fontSize: m ? "clamp(40px, 11vw, 64px)" : "clamp(56px, 7vw, 116px)",
          color: C.ivory, textTransform: "uppercase",
          lineHeight: 0.85, margin: 0, letterSpacing: "-0.018em",
        }}>{title}</h2>
        {right}
      </div>
    </div>
  );
}

function Folio({ code, page, kicker }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 12,
      fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
      color: C.mute, letterSpacing: 2.2,
    }}>
      {code && <span style={{ color: C.red, fontWeight: 700 }}>// {code}</span>}
      {page != null && <span style={{ color: C.volt }}>P.{String(page).padStart(3, "0")}</span>}
      {kicker && <>
        <span style={{ flex: 1, maxWidth: 80, height: 1, background: C.hair }}/>
        <span>{kicker}</span>
      </>}
    </div>
  );
}

// ─── Shell: Masthead ────────────────────────────────────────────
function Masthead() {
  const m = useIsMobile();
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 60,
      background: C.bg, borderBottom: `1px solid ${C.hair}`,
      boxShadow: "0 2px 14px rgba(0,0,0,0.65)",
      padding: m ? "10px 14px" : "14px 28px",
      display: "grid",
      gridTemplateColumns: m ? "1fr auto" : "1fr 2fr 1fr",
      alignItems: "center", gap: m ? 12 : 24,
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: m ? 10 : 11, letterSpacing: 2,
      color: C.mute,
    }}>
      <div style={{ color: C.ivory, fontWeight: 700 }}>
        HAWKS<span style={{ color: C.red }}>/</span>26
        {!m && <span style={{ color: C.mute, fontWeight: 400, marginLeft: 12 }}>· THE MAGAZINE</span>}
      </div>
      {!m && (
        <div style={{ textAlign: "center" }}>
          VOL <span style={{ color: C.ivory }}>XXVI</span>
          {" "}· ISSUE NO. <span style={{ color: C.ivory }}>06</span>
          {" "}· MAY <span style={{ color: C.ivory }}>2026</span>
          {" "}· ATL · USA
        </div>
      )}
      <div style={{ textAlign: "right" }}>
        <span style={{ color: C.volt }}>$0.00</span>
        {!m && <span> · COMPLIMENTARY</span>}
      </div>
    </header>
  );
}

// ─── Shell: Left rail (section codes, scroll-spy) ───────────────
function LeftRail({ active }) {
  return (
    <aside style={{
      position: "sticky", top: 56, alignSelf: "start",
      height: "calc(100vh - 56px)",
      borderRight: `1px solid ${C.hair}`,
      background: C.bg,
      display: "flex", flexDirection: "column", justifyContent: "space-between",
      padding: "20px 0", zIndex: 40,
    }}>
      {/* top vertical wordmark */}
      <div style={{
        writingMode: "vertical-rl", transform: "rotate(180deg)",
        textAlign: "center",
        fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
        color: C.ivory, fontWeight: 700, letterSpacing: 4,
        alignSelf: "center", padding: "8px 0",
      }}>
        HAWKS<span style={{ color: C.red }}>/</span>26
      </div>

      {/* code stack */}
      <nav style={{
        display: "flex", flexDirection: "column", alignItems: "center",
        gap: 14, padding: "12px 0",
      }}>
        {SECTIONS.map((s) => {
          const isActive = active === s.id;
          return (
            <a key={s.code} href={`#${s.id}`}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10, letterSpacing: 2,
                color: isActive ? C.volt : C.mute,
                fontWeight: isActive ? 700 : 500,
                textDecoration: "none",
                padding: "3px 6px",
                borderLeft: isActive ? `2px solid ${C.volt}` : `2px solid transparent`,
                transition: "color .15s",
              }}
              onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = C.ivory; }}
              onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = C.mute; }}
            >{s.code}</a>
          );
        })}
      </nav>

      {/* bottom rotated meta */}
      <div style={{
        writingMode: "vertical-rl", transform: "rotate(180deg)",
        fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
        color: C.mute, letterSpacing: 3,
        alignSelf: "center", padding: "8px 0",
      }}>
        ISSUE 06 · MAY 26
      </div>
    </aside>
  );
}

// ─── Shell: Right rail (rotated tagline) ────────────────────────
function RightRail() {
  return (
    <aside style={{
      position: "sticky", top: 56, alignSelf: "start",
      height: "calc(100vh - 56px)",
      borderLeft: `1px solid ${C.hair}`,
      background: C.bg,
      display: "flex", alignItems: "center", justifyContent: "center",
      zIndex: 40,
    }}>
      <div style={{
        writingMode: "vertical-rl",
        fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
        color: C.mute, letterSpacing: 4, fontWeight: 500,
        textTransform: "uppercase",
      }}>
        The <span style={{ color: C.ivory }}>Official</span> Hawks Tracker Magazine
        {" "}· Atlanta · May 26
      </div>
    </aside>
  );
}

// ─── Shell: Tweaks panel ────────────────────────────────────────
function Toggle({ on, onChange }) {
  return (
    <button onClick={() => onChange(!on)} style={{
      width: 38, height: 22, borderRadius: 11,
      background: on ? "#3ECF8E" : "#3a3a40",
      border: "none", cursor: "pointer", padding: 0,
      position: "relative", transition: "background .15s",
      flexShrink: 0,
    }}>
      <span style={{
        position: "absolute", top: 2, left: on ? 18 : 2,
        width: 18, height: 18, borderRadius: "50%",
        background: "#fff", transition: "left .15s",
        boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
      }}/>
    </button>
  );
}

function TweaksPanel() {
  const { bw, setBw, rail, setRail } = useTweaks();
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* trigger */}
      <button onClick={() => setOpen((o) => !o)} style={{
        position: "fixed", bottom: 18, right: 18, zIndex: 80,
        width: 44, height: 44, borderRadius: "50%",
        background: open ? C.volt : C.panel,
        color: open ? "#000" : C.ivory,
        border: `1px solid ${open ? C.volt : C.hair}`,
        cursor: "pointer", fontFamily: "'JetBrains Mono', monospace",
        fontSize: 18, fontWeight: 700, letterSpacing: 0,
        boxShadow: "0 6px 20px rgba(0,0,0,0.5)",
        display: "inline-flex", alignItems: "center", justifyContent: "center",
      }}>
        {open ? "×" : "⚙"}
      </button>

      {/* panel */}
      {open && (
        <div style={{
          position: "fixed", bottom: 74, right: 18, zIndex: 80,
          width: 280, background: "#1d1d22",
          border: `1px solid ${C.hair}`, padding: "14px 16px",
          borderRadius: 6,
          fontFamily: "Inter, sans-serif",
          boxShadow: "0 16px 40px rgba(0,0,0,0.5)",
        }}>
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "baseline",
            marginBottom: 14,
          }}>
            <span style={{
              fontSize: 15, fontWeight: 700, color: C.ivory,
            }}>Tweaks</span>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: 9,
              color: C.mute, letterSpacing: 1.5,
            }}>// SETTINGS</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <label style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              gap: 14, fontSize: 13, color: C.ivory, cursor: "pointer",
            }}>
              <span>Black &amp; white portraits</span>
              <Toggle on={bw} onChange={setBw}/>
            </label>
            <label style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              gap: 14, fontSize: 13, color: C.ivory, cursor: "pointer",
            }}>
              <span>Issue rail (left)</span>
              <Toggle on={rail} onChange={setRail}/>
            </label>
          </div>

          <div style={{
            marginTop: 14, paddingTop: 12, borderTop: `1px solid ${C.hair}`,
            fontFamily: "'JetBrains Mono', monospace", fontSize: 9,
            color: C.mute, letterSpacing: 1.5,
          }}>HAWKS/26 · TWEAKS v1</div>
        </div>
      )}
    </>
  );
}

// ─── Cover (COV + IDX combined spread) ──────────────────────────
function Cover() {
  const m = useIsMobile();
  const { bw } = useTweaks();
  const star = PLAYERS.find((p) => p.id === 1) || PLAYERS[0];

  const toc = [
    { kicker: "FEATURE",   page: 18, t: "Jalen Johnson on the night the season ended" },
    { kicker: "PORTFOLIO", page: 32, t: "The Fifteen — A Roster, in Portraits" },
    { kicker: "REPORT",    page: 46, t: "MIP No. 2 — Alexander-Walker's 251 threes" },
    { kicker: "COLUMN",    page: 54, t: "Why Atlanta should keep CJ McCollum" },
    { kicker: "WIRE",      page: 62, t: "Saleh-to-Philly · Day 8 · The League bets no" },
  ];

  return (
    <section id="cov" style={{
      position: "relative", borderBottom: `1px solid ${C.hair}`,
      background: C.bg, overflow: "hidden",
      minHeight: m ? "auto" : "calc(100vh - 54px)",
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: m ? "1fr" : "minmax(280px, 1.05fr) 2.2fr",
        gap: 0, minHeight: m ? "auto" : "calc(100vh - 54px)",
      }}>
        {/* IDX panel */}
        <div id="idx" style={{
          padding: m ? "28px 20px 24px" : "40px 36px 32px",
          borderRight: m ? "none" : `1px solid ${C.hair}`,
          borderBottom: m ? `1px solid ${C.hair}` : "none",
          display: "flex", flexDirection: "column", gap: 0,
        }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
            color: C.volt, letterSpacing: 3, marginBottom: 14,
          }}>// INSIDE THIS ISSUE</div>
          <div style={{ height: 1, background: C.hair, marginBottom: m ? 18 : 26 }}/>

          {toc.map((e, i) => (
            <a key={e.page} href={`#${
              ["stry", "port", "hrdw", "stry", "wire"][i] || "stry"
            }`} style={{
              display: "block", textDecoration: "none",
              padding: m ? "12px 0" : "16px 0",
              borderBottom: i < toc.length - 1 ? `1px solid ${C.hair}80` : "none",
            }}>
              <div style={{
                display: "flex", alignItems: "baseline", gap: 10,
                fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
                color: C.red, letterSpacing: 2.5, marginBottom: 6,
              }}>
                <span>{e.kicker}</span>
                <span style={{ color: C.mute }}>· P.{e.page}</span>
              </div>
              <div style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: m ? 19 : 22, lineHeight: 1.04,
                color: C.ivory, textTransform: "uppercase",
                letterSpacing: "-0.015em",
                display: "-webkit-box", WebkitBoxOrient: "vertical",
                WebkitLineClamp: 3, overflow: "hidden",
              }}>{e.t}</div>
            </a>
          ))}
        </div>

        {/* Cover image area: huge HAWK + portrait + ribbon */}
        <div style={{
          position: "relative", overflow: "hidden",
          minHeight: m ? 480 : "auto", background: C.bg,
        }}>
          {/* film grain */}
          <div style={{
            position: "absolute", inset: 0, opacity: 0.05,
            pointerEvents: "none", zIndex: 1,
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.9 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          }}/>

          {/* HAWK wordmark — chunky blocky sans, top, clips off right */}
          <div style={{
            position: "absolute",
            top: m ? 4 : 14, left: m ? -14 : -36,
            right: m ? -20 : -40,
            fontFamily: '"Inter", "Arial Black", "Helvetica Neue", sans-serif',
            fontSize: m ? "clamp(140px, 44vw, 260px)" : "clamp(340px, 34vw, 560px)",
            lineHeight: 0.82, color: C.ivory,
            textTransform: "uppercase", letterSpacing: "-0.055em",
            whiteSpace: "nowrap", zIndex: 2, pointerEvents: "none",
            fontWeight: 900,
          }}>HAWK</div>

          {/* Vertical "ER/" — wordmark tail (smaller, reads as continuation) */}
          {!m && (
            <div style={{
              position: "absolute", right: 14, top: "38%",
              writingMode: "vertical-rl",
              fontFamily: '"Inter", "Arial Black", "Helvetica Neue", sans-serif',
              fontSize: "clamp(54px, 5vw, 90px)",
              color: C.volt, lineHeight: 0.85,
              textTransform: "uppercase", letterSpacing: "-0.04em",
              zIndex: 3, pointerEvents: "none",
              fontWeight: 900,
            }}>ER<span style={{ color: C.red }}>/</span></div>
          )}

          {/* Portrait — bottom-aligned, B&W per tweak */}
          <img src={star.image} alt={star.name} style={{
            position: "absolute", bottom: 0, left: "50%",
            transform: "translateX(-50%)",
            height: m ? "82%" : "92%",
            maxHeight: m ? 440 : 760,
            objectFit: "contain", objectPosition: "center bottom",
            filter: bwFilter(bw),
            zIndex: 4,
          }} onError={(e) => { e.target.style.opacity = 0.2; }}/>

          {/* Red cover-star ribbon */}
          <div style={{
            position: "absolute",
            bottom: m ? 36 : 64, left: "50%",
            transform: "translateX(-50%)",
            zIndex: 5, background: C.red, color: "#fff",
            padding: m ? "12px 16px" : "16px 26px",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: m ? 11 : 13, fontWeight: 700,
            letterSpacing: m ? 2 : 3.5,
            textAlign: "center", lineHeight: 1.35,
            boxShadow: "0 0 40px rgba(224,58,62,0.55), 0 8px 22px rgba(224,58,62,0.35)",
            maxWidth: m ? "calc(100% - 32px)" : "auto",
            whiteSpace: m ? "normal" : "nowrap",
          }}>
            EXCLUSIVE · COVER STAR · JALEN JOHNSON
          </div>

          {/* corner meta */}
          <div style={{
            position: "absolute", top: m ? 10 : 18, right: m ? 10 : 18,
            fontFamily: "'JetBrains Mono', monospace", fontSize: 9,
            color: C.mute, letterSpacing: 2, zIndex: 6, textAlign: "right",
          }}>
            <span style={{ color: C.red }}>●</span> SEASON OVER
            <br/>ELIMINATED · R1 · 2–4 NYK
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Editor's Letter (PRE) ──────────────────────────────────────
function EditorsLetter() {
  const m = useIsMobile();
  return (
    <section id="pre" style={{
      padding: m ? "44px 16px" : "72px 56px",
      borderBottom: `1px solid ${C.hair}`, background: C.bg,
    }}>
      <Folio code="PRE" page={6} kicker="EDITOR'S LETTER"/>
      <div style={{
        marginTop: m ? 22 : 36,
        display: "grid",
        gridTemplateColumns: m ? "1fr" : "1.3fr 1fr",
        gap: m ? 24 : 56,
      }}>
        <div>
          <h2 style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: m ? "clamp(42px, 12vw, 60px)" : "clamp(64px, 7vw, 130px)",
            color: C.ivory, textTransform: "uppercase",
            lineHeight: 0.85, margin: 0, letterSpacing: "-0.022em",
          }}>The work<br/>doesn't end<br/>at <span style={{ color: C.red }}>89</span>.</h2>
        </div>
        <div style={{
          paddingTop: m ? 0 : 12,
          borderLeft: m ? "none" : `1px solid ${C.hair}`,
          paddingLeft: m ? 0 : 28,
        }}>
          <p style={{
            margin: 0, fontFamily: "Inter, sans-serif",
            fontSize: m ? 14 : 16, color: "#c5c5cc", lineHeight: 1.7,
            maxWidth: 540,
          }}>
            <span style={{
              float: "left", fontFamily: "'Anton', sans-serif",
              fontSize: m ? 56 : 84, lineHeight: 0.82,
              color: C.red, marginRight: 10, marginTop: 4,
              letterSpacing: "-0.02em",
            }}>F</span>
            orty-six wins. A Southeast banner. Back-to-back Most Improved
            Players. And then — eighty-nine. The final score of the worst
            night, set against the franchise's loudest spring in a decade.
            This issue holds both at once: the dossier on what just
            happened, and the road map for what's already underway. Lottery
            slot at No. 8. McCollum back. Snyder extended. Saleh staying.
          </p>
          <div style={{
            marginTop: 22, display: "flex", gap: 18,
            fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
            color: C.mute, letterSpacing: 2, flexWrap: "wrap",
          }}>
            <span style={{ color: C.volt }}>— THE EDITORS</span>
            <span>·</span><span>ATLANTA</span>
            <span>·</span><span>MAY 20, 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Hardware (HRDW · awards) ───────────────────────────────────
function AwardCard({ it, i, m }) {
  const [h, setH] = useState(false);
  const tc = it.tone === "volt" ? C.volt : it.tone === "red" ? C.red : C.ivory;
  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        padding: m ? "26px 20px" : "36px 32px",
        background: h ? C.panel2 : C.bg,
        position: "relative", overflow: "hidden",
        minHeight: m ? 200 : 280,
        transform: h ? "translateY(-3px)" : "none",
        transition: "transform .22s ease, background .22s ease",
      }}
    >
      <div style={{
        position: "absolute", top: m ? -16 : -48, right: m ? -8 : -24,
        fontFamily: "'Anton', sans-serif",
        fontSize: m ? 130 : 240, color: "#1c1c20",
        lineHeight: 0.78, letterSpacing: "-0.04em",
        pointerEvents: "none", fontWeight: 700,
      }}>{String(i + 1).padStart(2, "0")}</div>
      <div style={{ position: "relative", zIndex: 2 }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
          color: tc, letterSpacing: 2.5, marginBottom: m ? 12 : 16,
        }}>// {it.kicker}</div>
        <div style={{
          fontFamily: "'Anton', sans-serif",
          fontSize: m ? 32 : 54, color: C.ivory,
          textTransform: "uppercase", lineHeight: 0.92,
          letterSpacing: "-0.018em",
        }}>{it.title}</div>
        <div style={{
          marginTop: m ? 14 : 20, fontFamily: "Inter, sans-serif",
          fontSize: m ? 13 : 14, fontWeight: 700, color: tc,
        }}>{it.who}</div>
        <div style={{
          marginTop: 8, fontSize: m ? 12 : 13,
          color: C.mute, lineHeight: 1.55,
        }}>{it.detail}</div>
      </div>
      <div style={{
        position: "absolute", left: 0, right: 0, bottom: 0,
        height: m ? 4 : 3, background: tc,
      }}/>
    </div>
  );
}

function Hardware() {
  const m = useIsMobile();
  const items = [
    {
      kicker: "2025–26 NBA", title: "MOST IMPROVED PLAYER",
      who: "Nickeil Alexander-Walker",
      detail: "Back-to-back MIPs for the franchise · 251 threes (franchise record)",
      tone: "volt",
    },
    {
      kicker: "SOUTHEAST", title: "DIVISION CHAMPS",
      who: "Atlanta Hawks · 46–36",
      detail: "First SE crown since 2014–15",
      tone: "red",
    },
    {
      kicker: "BREAKOUT", title: "JJ ALL-STAR LEAP",
      who: "Jalen Johnson · 22.5 / 10.3 / 7.9",
      detail: "First All-Star nod · ESPN's Bontemps had him 2nd-team All-NBA",
      tone: "ivory",
    },
  ];
  return (
    <section id="hrdw" style={{
      padding: m ? "44px 16px" : "72px 56px",
      borderBottom: `1px solid ${C.hair}`, background: C.panel,
    }}>
      <SectionHeader code="HRDW" page={8} kicker="HARDWARE · 2025–26"
        title={<>BRIGHT<br/>SPOTS<span style={{ color: C.volt }}>.</span></>}/>
      <div style={{
        display: "grid",
        gridTemplateColumns: m ? "1fr" : "repeat(3, 1fr)",
        gap: 1, background: C.hair,
      }}>
        {items.map((it, i) => <AwardCard key={i} it={it} i={i} m={m}/>)}
      </div>
    </section>
  );
}

// ─── Story (STRY · feature article) ─────────────────────────────
function Story() {
  const m = useIsMobile();
  const lead = NEWS_DIGEST.keyTopics[0] || { title: "A Season That Ended at 89", detail: "" };
  const body = (lead.detail || "").trim();
  const first = body.charAt(0) || "T";
  const rest = body.slice(1);

  return (
    <section id="stry" style={{
      padding: m ? "44px 16px" : "72px 56px",
      borderBottom: `1px solid ${C.hair}`, background: C.bg,
    }}>
      <Folio code="STRY" page={18} kicker="FEATURE · LONG-FORM"/>
      <div style={{ marginTop: m ? 18 : 28 }}>
        <h2 style={{
          fontFamily: "'Anton', sans-serif",
          fontSize: m ? "clamp(38px, 10.5vw, 52px)" : "clamp(60px, 7vw, 130px)",
          color: C.ivory, textTransform: "uppercase",
          lineHeight: 0.85, margin: 0, letterSpacing: "-0.025em",
          maxWidth: 1100,
        }}>{lead.title}</h2>
        <div style={{
          marginTop: m ? 14 : 20, fontFamily: "Inter, sans-serif",
          fontSize: m ? 13 : 16, color: "#a8a8b0",
          fontStyle: "italic", lineHeight: 1.55, maxWidth: 760,
        }}>
          The 51-point Game 6 closeout did more than end a series. It set
          the terms for the offseason that followed.
        </div>
        <div style={{
          marginTop: m ? 16 : 22, display: "flex", gap: 14, flexWrap: "wrap",
          fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
          color: C.mute, letterSpacing: 2,
        }}>
          <span>BY <span style={{ color: C.ivory }}>THE EDITORS</span></span>
          <span>·</span><span>ATLANTA</span>
          <span>·</span><span>MAY 20, 2026</span>
          <span>·</span><span style={{ color: C.volt }}>{(lead.category || "FEATURE").toUpperCase()}</span>
        </div>
      </div>

      <div style={{ height: 1, background: C.hair, margin: m ? "24px 0" : "36px 0" }}/>

      <div style={{
        columnCount: m ? 1 : 2, columnGap: 44,
        fontFamily: "Inter, sans-serif",
        fontSize: m ? 14 : 15, color: "#c5c5cc", lineHeight: 1.75,
      }}>
        <p style={{ margin: 0 }}>
          <span style={{
            float: "left", fontFamily: "'Anton', sans-serif",
            fontSize: m ? 80 : 120, lineHeight: 0.82,
            color: C.red, marginRight: 12, marginTop: 4,
            letterSpacing: "-0.02em",
          }}>{first}</span>
          {rest}
        </p>
      </div>

      {/* pull quote */}
      <div style={{
        marginTop: m ? 32 : 52,
        padding: m ? "22px 0" : "32px 0",
        borderTop: `2px solid ${C.red}`,
        borderBottom: `2px solid ${C.red}`,
        display: "grid",
        gridTemplateColumns: m ? "1fr" : "auto 1fr",
        gap: m ? 14 : 40, alignItems: "center",
      }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
          color: C.red, letterSpacing: 2.5,
          minWidth: m ? "auto" : 200,
        }}>// PULL QUOTE · POSTGAME</div>
        <blockquote style={{
          margin: 0, fontFamily: "'Anton', sans-serif",
          fontSize: m ? "clamp(26px, 7vw, 36px)" : "clamp(34px, 4vw, 56px)",
          color: C.ivory, textTransform: "uppercase",
          lineHeight: 0.98, letterSpacing: "-0.01em",
        }}>
          "I don't really have any words for that.
          {" "}<span style={{ color: C.red }}>Obviously, it sucks.</span>"
          <div style={{
            marginTop: 14, fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11, color: C.mute, letterSpacing: 2,
          }}>— JALEN JOHNSON · GAME 6 · APRIL 30</div>
        </blockquote>
      </div>
    </section>
  );
}

// ─── Player card (B&W aware) ────────────────────────────────────
function PlayerCard({ p, onClick }) {
  const m = useIsMobile();
  const { bw } = useTweaks();
  const [h, setH] = useState(false);
  const ppg = useCountUp(p.pointsPerGame);
  const rpg = useCountUp(p.reboundsPerGame);
  const apg = useCountUp(p.assistsPerGame);

  const surnames = p.name.split(" ");
  const last = surnames.slice(1).join(" ") || surnames[0];
  const railW = m ? 0 : 28;
  const stripH = m ? 36 : 42;

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        position: "relative", background: C.panel,
        border: `1px solid ${h ? C.volt : C.hair}`,
        cursor: "pointer", overflow: "hidden",
        transition: "border-color .15s, transform .25s",
        transform: h ? "translateY(-2px)" : "none",
        aspectRatio: m ? "0.92/1" : "0.78/1",
        display: "flex", flexDirection: "column",
      }}
    >
      <div style={{
        position: "absolute", bottom: m ? -16 : -28, right: m ? -10 : -22,
        fontFamily: "'Anton', sans-serif",
        fontSize: m ? 130 : 220, lineHeight: 0.78,
        color: h ? C.red : "#1c1c20",
        fontWeight: 400, letterSpacing: "-0.05em",
        pointerEvents: "none", transition: "color .2s", zIndex: 1,
      }}>{String(p.number).padStart(2, "0")}</div>

      {!m && (
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0, width: 28,
          display: "flex", flexDirection: "column", alignItems: "center",
          justifyContent: "flex-start", padding: "14px 0 10px", zIndex: 5,
          background: `linear-gradient(90deg, ${C.panel}ee 0%, transparent 100%)`,
        }}>
          <span style={{
            writingMode: "vertical-rl", transform: "rotate(180deg)",
            fontFamily: "'Anton', sans-serif", fontSize: 15,
            color: C.ivory, textTransform: "uppercase", letterSpacing: "0.04em",
            fontWeight: 400, whiteSpace: "nowrap",
          }}>{last.toUpperCase()}</span>
          <span style={{
            writingMode: "vertical-rl", transform: "rotate(180deg)",
            fontFamily: "'JetBrains Mono', monospace", fontSize: 9,
            color: C.mute, letterSpacing: 2, marginTop: 10, whiteSpace: "nowrap",
          }}>{p.position} · {countryShort(p)}</span>
        </div>
      )}

      <div style={{
        position: "absolute", left: railW, right: 0, top: 0, bottom: stripH, zIndex: 2,
        display: "flex", alignItems: "flex-end", justifyContent: "center",
        overflow: "hidden",
      }}>
        <img
          src={p.image} alt={p.name}
          style={{
            width: "100%", height: "100%", objectFit: "contain",
            objectPosition: "center bottom",
            filter: bwFilter(bw),
            opacity: p.status === "out" ? 0.55 : 1,
          }}
          onError={(e) => { e.target.style.opacity = 0.15; }}
        />
      </div>

      <div style={{
        position: "absolute", top: m ? 8 : 10, right: m ? 8 : 12,
        zIndex: 6, textAlign: "right",
      }}>
        {!m && (
          <div style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: 9,
            color: C.mute, letterSpacing: 1.5,
          }}>FORM</div>
        )}
        <div style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: m ? 14 : 22,
          color: p.form >= 7 ? C.volt : p.form >= 6 ? C.ivory : C.red,
          fontWeight: 700, lineHeight: 1, fontVariantNumeric: "tabular-nums",
        }}>{p.form.toFixed(1)}</div>
        {!m && <div style={{ marginTop: 6 }}><Status s={p.status}/></div>}
      </div>

      {m && (
        <div style={{
          position: "absolute", left: 0, right: 0, bottom: stripH,
          padding: "6px 8px", zIndex: 5,
          background: `linear-gradient(180deg, transparent 0%, ${C.panel}f0 60%)`,
        }}>
          <div style={{
            fontFamily: "'Anton', sans-serif", fontSize: 14, color: C.ivory,
            textTransform: "uppercase", letterSpacing: "0.02em", lineHeight: 1,
            whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
          }}>{last.toUpperCase()}</div>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: 8,
            color: C.mute, letterSpacing: 1.4, marginTop: 2,
          }}>{p.position} · #{p.number}</div>
        </div>
      )}

      <div style={{
        position: "absolute", left: 0, right: 0, bottom: 0, zIndex: 5,
        background: "#000", borderTop: `1px solid ${C.hair}`,
        display: "grid",
        gridTemplateColumns: m ? "repeat(3, 1fr)" : "repeat(4, 1fr)",
        height: stripH,
      }}>
        {(m ? [
          { l: "PPG", v: ppg.toFixed(1) },
          { l: "RPG", v: rpg.toFixed(1) },
          { l: "APG", v: apg.toFixed(1) },
        ] : [
          { l: "PPG", v: ppg.toFixed(1) },
          { l: "RPG", v: rpg.toFixed(1) },
          { l: "APG", v: apg.toFixed(1) },
          { l: "GP", v: String(p.gamesPlayed) },
        ]).map((s, i, arr) => (
          <div key={s.l} style={{
            padding: m ? "5px 2px" : "8px 4px", textAlign: "center",
            borderRight: i < arr.length - 1 ? `1px solid ${C.hair}` : "none",
          }}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: m ? 12 : 14, color: C.ivory, fontWeight: 700,
              lineHeight: 1, fontVariantNumeric: "tabular-nums",
            }}>{s.v}</div>
            <div style={{
              fontSize: m ? 7 : 8, color: C.mute, letterSpacing: 1.4,
              marginTop: m ? 2 : 4,
            }}>{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Portfolio (PORT · roster gallery) ──────────────────────────
function Portfolio({ onPlayer }) {
  const m = useIsMobile();
  const [pos, setPos] = useState("ALL");
  const [sort, setSort] = useState("ppg");
  const positions = ["ALL", "PG", "SG", "SF", "PF", "C"];
  const list = useMemo(() => {
    let l = [...PLAYERS];
    if (pos !== "ALL") l = l.filter((p) => p.position === pos);
    const sm = {
      ppg: (a, b) => b.pointsPerGame - a.pointsPerGame,
      rpg: (a, b) => b.reboundsPerGame - a.reboundsPerGame,
      apg: (a, b) => b.assistsPerGame - a.assistsPerGame,
      mpg: (a, b) => b.minutesPerGame - a.minutesPerGame,
      num: (a, b) => a.number - b.number,
    };
    return l.sort(sm[sort] || sm.ppg);
  }, [pos, sort]);

  return (
    <section id="port" style={{
      padding: m ? "44px 16px" : "72px 56px",
      borderBottom: `1px solid ${C.hair}`, background: C.bg,
    }}>
      <SectionHeader
        code="PORT" page={32}
        kicker="PORTFOLIO · THE FIFTEEN"
        title={<>A ROSTER<span style={{ color: C.red }}>,</span><br/>IN PORTRAITS<span style={{ color: C.volt }}>.</span></>}
        right={
          <div style={{
            display: "flex", gap: m ? 12 : 18, alignItems: "center", flexWrap: "wrap",
          }}>
            <div style={{ display: "flex", gap: m ? 10 : 14, flexWrap: "wrap" }}>
              {positions.map((p) => (
                <Vlink key={p} active={pos === p} onClick={() => setPos(p)}>{p}</Vlink>
              ))}
            </div>
            <span style={{ width: 1, height: 18, background: C.hair }}/>
            <div style={{ display: "flex", gap: m ? 10 : 14, flexWrap: "wrap" }}>
              {[["ppg", "PPG"], ["rpg", "RPG"], ["apg", "APG"], ["mpg", "MPG"], ["num", "#"]].map(([k, l]) => (
                <Vlink key={k} active={sort === k} onClick={() => setSort(k)}>{l}</Vlink>
              ))}
            </div>
          </div>
        }
      />
      <div style={{
        display: "grid",
        gridTemplateColumns: m
          ? "repeat(2, 1fr)"
          : "repeat(auto-fill, minmax(220px, 1fr))",
        gap: 1, background: C.hair,
        border: `1px solid ${C.hair}`,
      }}>
        {list.map((p) => (
          <PlayerCard key={p.id} p={p} onClick={() => onPlayer(p.id)}/>
        ))}
      </div>
    </section>
  );
}

// ─── Tactics (TACT · rotation) ──────────────────────────────────
function Tactics({ onPlayer }) {
  const m = useIsMobile();
  const { bw } = useTweaks();
  const starters = PLAYERS.filter((p) => p.playoffStarter);
  const bench = PLAYERS.filter((p) => !p.playoffStarter && p.status !== "out");
  const out = PLAYERS.filter((p) => p.status === "out");

  return (
    <section id="tact" style={{
      padding: m ? "44px 16px" : "72px 56px",
      borderBottom: `1px solid ${C.hair}`, background: C.panel,
    }}>
      <SectionHeader
        code="TACT" page={46}
        kicker="ROTATION · R1 · 2025–26"
        title={<>STARTING<br/>FIVE<span style={{ color: C.volt }}>.</span></>}
      />
      <div style={{
        display: "grid",
        gridTemplateColumns: m ? "repeat(2, 1fr)" : "repeat(5, 1fr)",
        gap: 1, background: C.hair, border: `1px solid ${C.hair}`,
      }}>
        {starters.map((p, i) => {
          const po = p.playoffStats;
          const mpg = po?.minutesPerGame ?? p.minutesPerGame;
          const ppg = po?.pointsPerGame ?? p.pointsPerGame;
          const stripH = m ? 64 : 88;
          const last = p.name.split(" ").slice(1).join(" ") || p.name.split(" ")[0];
          return (
            <div key={p.id} onClick={() => onPlayer(p.id)} style={{
              background: C.bg, position: "relative", overflow: "hidden",
              cursor: "pointer", aspectRatio: m ? "0.85/1" : "0.7/1",
            }}>
              <div style={{
                position: "absolute", bottom: m ? -16 : -30, left: m ? -6 : -12,
                fontFamily: "'Anton', sans-serif", fontSize: m ? 150 : 280,
                lineHeight: 0.8, color: "#1c1c20",
                pointerEvents: "none", zIndex: 1,
              }}>{i + 1}</div>
              <div style={{
                position: "absolute", top: m ? 8 : 14, right: m ? 8 : 14, zIndex: 3,
                fontFamily: "'Anton', sans-serif", fontSize: m ? 24 : 38,
                color: C.red, lineHeight: 1,
              }}>#{p.number}</div>
              <div style={{
                position: "absolute", left: 0, right: 0, top: 0, bottom: stripH,
                display: "flex", alignItems: "flex-end", justifyContent: "center",
                zIndex: 2, overflow: "hidden",
              }}>
                <img src={p.image} alt={p.name} style={{
                  width: "108%", height: "100%", objectFit: "contain",
                  objectPosition: "center bottom",
                  filter: bwFilter(bw),
                }} onError={(e) => { e.target.style.opacity = 0.15; }}/>
              </div>
              <div style={{
                position: "absolute", left: 0, right: 0, bottom: 0, zIndex: 4,
                background: "#000", borderTop: `1px solid ${C.hair}`,
                padding: m ? "8px 10px" : "12px 14px",
              }}>
                <div style={{
                  fontFamily: "'Anton', sans-serif", fontSize: m ? 15 : 20,
                  color: C.ivory, textTransform: "uppercase",
                  lineHeight: 0.95, letterSpacing: "0.01em",
                  whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                }}>{m ? last.toUpperCase() : p.name}</div>
                <div style={{
                  display: "flex", justifyContent: "space-between",
                  marginTop: m ? 6 : 10,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: m ? 8 : 10, color: C.mute,
                  letterSpacing: m ? 1 : 1.4,
                }}>
                  <span>{p.position}</span>
                  <span style={{ color: C.volt }}>{mpg.toFixed(1)} MPG</span>
                  <span style={{ color: C.ivory }}>{ppg.toFixed(1)} PPG</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 28 }}>
        <Folio code="BENCH" kicker={`${bench.length} ACTIVE`}/>
        <div style={{
          marginTop: 12,
          display: "grid",
          gridTemplateColumns: m
            ? "repeat(2, 1fr)"
            : "repeat(auto-fit, minmax(150px, 1fr))",
          gap: 1, background: C.hair, border: `1px solid ${C.hair}`,
        }}>
          {bench.map((p) => (
            <div key={p.id} onClick={() => onPlayer(p.id)} style={{
              background: C.bg, padding: "12px 10px", cursor: "pointer",
              display: "flex", flexDirection: "column", gap: 4,
            }}>
              <div style={{
                display: "flex", justifyContent: "space-between", alignItems: "baseline",
              }}>
                <span style={{
                  fontFamily: "'Anton', sans-serif", fontSize: 24,
                  color: C.red, lineHeight: 1,
                }}>#{p.number}</span>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace", fontSize: 9,
                  color: C.mute, letterSpacing: 1.5,
                }}>{p.position}</span>
              </div>
              <div style={{
                fontFamily: "'Anton', sans-serif", fontSize: m ? 13 : 14,
                color: C.ivory, textTransform: "uppercase",
                letterSpacing: "0.02em", lineHeight: 1.05,
                whiteSpace: m ? "nowrap" : "normal",
                overflow: "hidden", textOverflow: "ellipsis",
              }}>{m ? (p.name.split(" ").slice(1).join(" ") || p.name).toUpperCase() : p.name}</div>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace", fontSize: m ? 9 : 10,
                color: C.ivory, marginTop: 2, fontVariantNumeric: "tabular-nums",
              }}>
                {p.pointsPerGame.toFixed(1)}<span style={{ color: C.mute }}> PPG</span> ·{" "}
                {p.minutesPerGame.toFixed(1)}<span style={{ color: C.mute }}> MPG</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {out.length > 0 && (
        <div style={{ marginTop: 24 }}>
          <Folio code="OUT" kicker="UNAVAILABLE"/>
          <div style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 8 }}>
            {out.map((p) => (
              <div key={p.id} style={{
                border: `1px solid ${C.hair}`, borderLeft: `3px solid ${C.red}`,
                background: C.bg,
                padding: "14px 16px", display: "grid",
                gridTemplateColumns: m ? "44px 1fr" : "60px 1fr auto",
                gap: 14, alignItems: "center",
              }}>
                <span style={{
                  fontFamily: "'Anton', sans-serif", fontSize: 32,
                  color: C.red, lineHeight: 1,
                }}>#{p.number}</span>
                <div>
                  <div style={{
                    fontFamily: "'Anton', sans-serif", fontSize: 22, color: C.ivory,
                    textTransform: "uppercase", letterSpacing: "0.02em",
                  }}>{p.name}</div>
                  <div style={{
                    fontSize: 11, color: C.mute, marginTop: 4,
                    fontFamily: "Inter, sans-serif",
                  }}>{p.injuryNote}</div>
                </div>
                <Status s={p.status}/>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

// ─── Numbers (NUM · season ledger) ──────────────────────────────
function Numbers() {
  const m = useIsMobile();
  const big = [
    { k: "RECORD",     v: "46–36",  tone: "ivory" },
    { k: "SEED · E",   v: "6",      tone: "red" },
    { k: "MIPs",       v: "2",      tone: "volt", sub: "back to back" },
  ];
  const ledger = [
    ["MOST 3PM, SEASON",      "251 · Alexander-Walker",  "franchise record"],
    ["OFFENSIVE RATING",      "118.4",                    "7th league-wide"],
    ["DEFENSIVE RATING",      "114.2",                    "14th"],
    ["PACE",                  "99.8",                     "12th"],
    ["3-POINT %",             "38.1%",                    "3rd"],
    ["JJ STAT LINE",          "22.5 / 10.3 / 7.9",        "5th ever 22-10-7"],
    ["R1 SCORING DIFF",       "-15.3",                    "four losses by 16+"],
    ["GAME 6 MARGIN",         "-51",                      "T-6th largest in NBA history"],
    ["HALFTIME DEFICIT, G6",  "-47",                      "largest in playoff history"],
    ["LOTTERY PICK",          "No. 8",                    "via NOP — most-likely outcome"],
    ["DAYS TO DRAFT",         "34",                       "June 23, 2026"],
    ["DAYS TO FA OPEN",       "42",                       "June 30, 6 PM ET"],
  ];

  return (
    <section id="num" style={{
      padding: m ? "44px 16px" : "72px 56px",
      borderBottom: `1px solid ${C.hair}`, background: C.bg,
    }}>
      <SectionHeader
        code="NUM" page={54}
        kicker="DATA · 2025–26 IN NUMBERS"
        title={<>By the<br/>Numbers<span style={{ color: C.volt }}>.</span></>}
      />
      <div style={{
        display: "grid",
        gridTemplateColumns: m ? "repeat(3, 1fr)" : "repeat(3, 1fr)",
        gap: 1, background: C.hair, border: `1px solid ${C.hair}`,
      }}>
        {big.map((b) => {
          const tc = b.tone === "volt" ? C.volt : b.tone === "red" ? C.red : C.ivory;
          return (
            <div key={b.k} style={{
              padding: m ? "20px 12px" : "32px 28px", background: C.panel,
              textAlign: "left",
            }}>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
                color: C.mute, letterSpacing: 2, marginBottom: m ? 8 : 14,
              }}>// {b.k}</div>
              <div style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: m ? "clamp(50px, 15vw, 76px)" : "clamp(96px, 14vw, 168px)",
                color: tc, lineHeight: 0.85, letterSpacing: "-0.025em",
                fontVariantNumeric: "tabular-nums",
              }}>{b.v}</div>
              {b.sub && (
                <div style={{
                  marginTop: 8, fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10, color: tc, letterSpacing: 2,
                }}>{b.sub.toUpperCase()}</div>
              )}
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: m ? 24 : 36, border: `1px solid ${C.hair}` }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: m ? "1.2fr 1fr" : "1.4fr 1fr 1fr",
          padding: "12px 14px", borderBottom: `1px solid ${C.hair}`,
          background: C.panel,
          fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
          color: C.mute, letterSpacing: 2,
        }}>
          <span>METRIC</span>
          <span style={{ textAlign: "right" }}>VALUE</span>
          {!m && <span style={{ textAlign: "right" }}>NOTE</span>}
        </div>
        {ledger.map((row, i) => (
          <div key={row[0]} style={{
            display: "grid",
            gridTemplateColumns: m ? "1.2fr 1fr" : "1.4fr 1fr 1fr",
            padding: "13px 14px",
            borderBottom: i < ledger.length - 1 ? `1px solid ${C.hair}` : "none",
            alignItems: "baseline",
            background: i % 2 === 0 ? "transparent" : `${C.panel}80`,
          }}>
            <span style={{
              fontFamily: "Inter, sans-serif", fontSize: 13,
              color: C.ivory, fontWeight: 600,
            }}>{row[0]}</span>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: m ? 13 : 14, color: C.volt, textAlign: "right",
              fontVariantNumeric: "tabular-nums",
            }}>{row[1]}</span>
            {!m && (
              <span style={{
                fontFamily: "Inter, sans-serif", fontSize: 12,
                color: C.mute, textAlign: "right", fontStyle: "italic",
              }}>{row[2]}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Ledger (LDGR · results + standings + series box) ───────────
function Ledger() {
  const m = useIsMobile();
  const last12 = RESULTS.slice(0, 12);
  const games = RESULTS.filter((r) => r.competition === "PLAYOFFS").reverse();

  return (
    <section id="ldgr" style={{
      padding: m ? "44px 16px" : "72px 56px",
      borderBottom: `1px solid ${C.hair}`, background: C.panel,
    }}>
      <SectionHeader
        code="LDGR" page={62}
        kicker="THE BOX SCORES · REG + R1"
        title={<>Ledger<span style={{ color: C.red }}>.</span></>}
      />

      {/* Series box + standings */}
      <div style={{
        display: "grid",
        gridTemplateColumns: m ? "1fr" : "1.4fr 1fr",
        gap: m ? 28 : 48, marginBottom: m ? 32 : 48,
      }}>
        <div>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
            color: C.red, letterSpacing: 2.5, marginBottom: 14,
          }}>// R1 · ATL 2 — NYK 4 · ELIMINATED</div>
          <div style={{
            display: "grid",
            gridTemplateColumns: m ? "repeat(3, 1fr)" : "repeat(6, 1fr)",
            gap: 1, background: C.hair, border: `1px solid ${C.hair}`,
          }}>
            {games.map((g, i) => {
              const win = g.result === "W";
              return (
                <div key={i} style={{
                  background: C.bg, padding: m ? "10px 6px" : "14px 10px",
                  textAlign: "center",
                  borderTop: `3px solid ${win ? C.volt : C.red}`,
                }}>
                  <div style={{
                    fontFamily: "'JetBrains Mono', monospace", fontSize: 9,
                    color: C.mute, letterSpacing: 2,
                  }}>G{i + 1}</div>
                  <div style={{
                    fontFamily: "'Anton', sans-serif",
                    fontSize: m ? 22 : 28, color: win ? C.volt : C.red, lineHeight: 1.1,
                  }}>{g.result}</div>
                  <div style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: m ? 10 : 11, color: C.ivory, marginTop: 2,
                    fontVariantNumeric: "tabular-nums",
                  }}>{g.score}</div>
                  <div style={{
                    fontSize: 8, color: C.mute, marginTop: 4, letterSpacing: 1,
                  }}>{g.home ? "H" : "A"}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
            color: C.volt, letterSpacing: 2.5, marginBottom: 14,
          }}>// EAST · FINAL STANDINGS</div>
          <div style={{ border: `1px solid ${C.hair}`, background: C.bg }}>
            {EAST_STANDINGS.map((s, i) => {
              const me = s.team === "Atlanta Hawks";
              return (
                <div key={s.seed} style={{
                  display: "grid", gridTemplateColumns: "40px 1fr auto",
                  padding: "12px 14px", alignItems: "center", gap: 14,
                  borderBottom: i < EAST_STANDINGS.length - 1 ? `1px solid ${C.hair}` : "none",
                  background: me ? `${C.red}15` : "transparent",
                  borderLeft: me ? `3px solid ${C.red}` : "3px solid transparent",
                }}>
                  <span style={{
                    fontFamily: "'Anton', sans-serif", fontSize: 24,
                    color: me ? C.red : C.mute, lineHeight: 1,
                  }}>{String(s.seed).padStart(2, "0")}</span>
                  <div>
                    <div style={{
                      fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600,
                      color: me ? C.ivory : "#bdbdc2",
                    }}>{s.team}</div>
                    <div style={{
                      fontFamily: "'JetBrains Mono', monospace", fontSize: 9,
                      color: C.mute, letterSpacing: 1.5, marginTop: 2,
                    }}>{abbr(s.team)}</div>
                  </div>
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace", fontSize: 14,
                    fontWeight: 600, color: me ? C.volt : C.ivory,
                    fontVariantNumeric: "tabular-nums",
                  }}>{s.record}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* last 12 scoreboard */}
      <div style={{
        fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
        color: C.volt, letterSpacing: 2.5, marginBottom: 14,
      }}>// LAST 12 · REG + R1</div>
      <div style={{
        display: "grid",
        gridTemplateColumns: m ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
        gap: 1, background: C.hair, border: `1px solid ${C.hair}`,
      }}>
        {last12.map((r, i) => {
          const [s1, s2] = r.score.split("-").map(Number);
          const win = r.result === "W";
          const playoff = r.competition === "PLAYOFFS";
          return (
            <div key={i} style={{
              padding: m ? "12px 12px 10px" : "18px 18px 14px",
              background: C.bg, position: "relative",
              borderTop: `3px solid ${win ? C.volt : C.red}`,
            }}>
              <div style={{
                display: "flex", justifyContent: "space-between",
                marginBottom: m ? 8 : 14, gap: 6,
              }}>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace", fontSize: 9,
                  color: C.mute, letterSpacing: 2,
                }}>{new Date(r.date + "T12:00:00")
                  .toLocaleDateString("en-US", { month: "short", day: "2-digit" })
                  .toUpperCase()}</span>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace", fontSize: 9,
                  color: playoff ? C.red : C.mute, letterSpacing: 2, fontWeight: 700,
                }}>{playoff ? (m ? "PO" : "PLAYOFFS") : "REG"} · {r.home ? "H" : "A"}</span>
              </div>
              <div style={{
                fontFamily: "'Anton', sans-serif", fontSize: m ? 36 : 54,
                color: C.ivory, lineHeight: 0.85,
                display: "flex", alignItems: "baseline", gap: m ? 6 : 8,
                fontVariantNumeric: "tabular-nums",
              }}>
                <span style={{ color: win ? C.volt : C.ivory }}>{s1}</span>
                <span style={{ fontSize: m ? 14 : 18, color: C.mute }}>—</span>
                <span style={{ color: win ? C.mute : C.red }}>{s2}</span>
              </div>
              <div style={{
                display: "flex", alignItems: "center",
                gap: m ? 6 : 8, marginTop: m ? 8 : 10,
              }}>
                <span style={{
                  width: m ? 20 : 24, height: m ? 20 : 24, display: "inline-flex",
                  alignItems: "center", justifyContent: "center",
                  background: win ? C.volt : C.red, color: win ? "#000" : "#fff",
                  fontFamily: "'Anton', sans-serif", fontSize: m ? 13 : 16,
                  fontWeight: 700, flexShrink: 0,
                }}>{r.result}</span>
                <span style={{
                  fontFamily: "'Anton', sans-serif", fontSize: m ? 16 : 20,
                  color: C.ivory, letterSpacing: "0.02em",
                }}>{r.home ? "vs" : "at"} {abbr(r.opponent)}</span>
              </div>
              {!m && r.topScorers && (
                <div style={{
                  fontSize: 11, color: C.mute, marginTop: 8, lineHeight: 1.4,
                  fontFamily: "Inter, sans-serif",
                  display: "-webkit-box", WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 3, overflow: "hidden",
                }}>{r.topScorers}</div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ─── Wire (WIRE · news feed) ────────────────────────────────────
function Wire() {
  const m = useIsMobile();
  const topics = NEWS_DIGEST.keyTopics || [];
  const lead = topics[0];
  const rest = topics.slice(1, 9);
  if (!lead) return null;

  const sourceFrom = (detail = "") => {
    const mt = detail.match(/\(([^,)]+(?:\/[^,)]+)*)/);
    return mt ? mt[1].split("/").slice(0, 3).join(" / ").trim() : "WIRE · ATL";
  };
  const excerpt = (text = "", max = 360) => {
    if (text.length <= max) return text;
    const cut = text.slice(0, max);
    const sentenceEnd = cut.search(/[.!?](?=\s|$)(?=[^.!?]*$)/);
    const boundary = sentenceEnd > max * 0.55
      ? sentenceEnd + 1
      : Math.max(cut.lastIndexOf(" "), max * 0.85);
    return cut.slice(0, boundary).trimEnd() + "…";
  };
  const ages = ["2H", "3H", "4H", "5H", "6H", "8H", "10H", "12H", "14H", "16H", "18H", "20H"];

  return (
    <section id="wire" style={{
      padding: m ? "44px 16px" : "72px 56px",
      borderBottom: `1px solid ${C.hair}`, background: C.bg,
    }}>
      <SectionHeader
        code="WIRE" page={68}
        kicker="WIRE · LIVE FROM ATL"
        title={<>News<span style={{ color: C.red }}>/</span>Feed</>}
      />

      <article style={{
        paddingTop: m ? 16 : 28, borderTop: `1px solid ${C.hair}`,
        display: "grid",
        gridTemplateColumns: m ? "1fr" : "1.5fr 1fr",
        gap: m ? 28 : 48,
      }}>
        <div>
          <div style={{
            display: "flex", gap: 14, fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11, color: C.mute, letterSpacing: 2, marginBottom: 18,
            flexWrap: "wrap",
          }}>
            <span style={{ color: C.red }}>ATLANTA</span>
            <span>—</span>
            <span>MAY 20, 2026</span>
            <span>—</span>
            <span>{(lead.category || "GENERAL").toUpperCase()}</span>
          </div>
          <h3 style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: m ? "clamp(28px, 8vw, 42px)" : "clamp(40px, 4.5vw, 72px)",
            color: C.ivory, textTransform: "uppercase",
            lineHeight: 0.95, margin: 0, letterSpacing: "-0.01em",
          }}>
            {m ? lead.title : (
              <>
                <span style={{
                  color: C.red, fontSize: "1.4em", float: "left",
                  lineHeight: 0.85, marginRight: 14, marginTop: -4,
                }}>{lead.title.charAt(0)}</span>
                {lead.title.slice(1)}
              </>
            )}
          </h3>
          <p style={{
            marginTop: m ? 16 : 24, fontFamily: "Inter, sans-serif",
            fontSize: m ? 14 : 16, color: "#c5c5cc",
            lineHeight: 1.65, maxWidth: 640,
          }}>{lead.detail}</p>
          <div style={{
            marginTop: 16, fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11, color: C.volt, letterSpacing: 2,
          }}>{sourceFrom(lead.detail)} · 2H AGO</div>
        </div>
        <div style={{
          borderLeft: m ? "none" : `1px solid ${C.hair}`,
          borderTop: m ? `1px solid ${C.hair}` : "none",
          paddingLeft: m ? 0 : 32,
          paddingTop: m ? 18 : 0,
        }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
            color: C.mute, letterSpacing: 2, marginBottom: 16,
          }}>// PULL QUOTE</div>
          <div style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: m ? 32 : 42, color: C.ivory, lineHeight: 1,
            textTransform: "uppercase", letterSpacing: "-0.005em",
          }}>"OBVIOUSLY,<br/>IT <span style={{ color: C.red }}>SUCKS</span>."</div>
          <div style={{
            marginTop: 18, fontFamily: "Inter, sans-serif", fontSize: 13,
            color: C.mute, lineHeight: 1.5,
          }}>— Jalen Johnson, postgame, after the 51-point closeout that ended the Hawks' season.</div>
        </div>
      </article>

      <div style={{
        marginTop: m ? 30 : 44,
        display: "grid",
        gridTemplateColumns: m ? "1fr" : "repeat(auto-fill, minmax(360px, 1fr))",
        gap: 0, borderTop: `1px solid ${C.hair}`,
      }}>
        {rest.map((n, i) => (
          <article key={i} style={{
            padding: m ? "20px 0" : "26px 26px 26px 0",
            borderBottom: `1px solid ${C.hair}`,
            borderRight: !m && (i % 2 === 0) ? `1px solid ${C.hair}` : "none",
            paddingLeft: !m && (i % 2 !== 0) ? 26 : 0,
          }}>
            <div style={{
              display: "flex", gap: 10, fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10, color: C.mute, letterSpacing: 1.8, marginBottom: 12,
              flexWrap: "wrap",
            }}>
              <span style={{ color: C.red }}>ATL</span>
              <span>·</span>
              <span>{(n.category || "GENERAL").toUpperCase()}</span>
              <span>·</span>
              <span>{ages[i + 1] || "1D"} AGO</span>
            </div>
            <h4 style={{
              fontFamily: "'Anton', sans-serif", fontSize: m ? 20 : 26,
              color: C.ivory, textTransform: "uppercase",
              lineHeight: 1.05, margin: 0, letterSpacing: "-0.005em",
            }}>{n.title}</h4>
            <p style={{
              marginTop: 10, fontFamily: "Inter, sans-serif",
              fontSize: m ? 12 : 13, color: "#a8a8b0", lineHeight: 1.55,
            }}>{excerpt(n.detail || "", 360)}</p>
            <div style={{
              marginTop: 12, fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10, color: C.volt, letterSpacing: 1.8,
            }}>{sourceFrom(n.detail)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

// ─── Back page (BACK · colophon) ────────────────────────────────
function BackPage() {
  const m = useIsMobile();
  const sources = (NEWS_DIGEST.sources || []).slice(0, 18);
  return (
    <section id="back" style={{
      padding: m ? "44px 16px 56px" : "72px 56px 96px",
      background: C.bg,
    }}>
      <Folio code="BACK" page={80} kicker="COLOPHON · CREDITS"/>
      <div style={{
        marginTop: m ? 22 : 32,
        display: "grid",
        gridTemplateColumns: m ? "1fr" : "1.4fr 1fr",
        gap: m ? 28 : 56,
      }}>
        <div>
          <h2 style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: m ? "clamp(46px, 12vw, 64px)" : "clamp(64px, 7vw, 130px)",
            color: C.ivory, textTransform: "uppercase",
            lineHeight: 0.85, margin: 0, letterSpacing: "-0.022em",
          }}>True to ATL<span style={{ color: C.red }}>.</span></h2>
          <p style={{
            marginTop: m ? 16 : 22, fontFamily: "Inter, sans-serif",
            fontSize: m ? 13 : 14, color: "#a8a8b0",
            lineHeight: 1.65, maxWidth: 560,
          }}>
            HAWKS/26 is set in <span style={{ color: C.ivory }}>Anton</span> for
            display, <span style={{ color: C.ivory }}>Inter</span> for body, and
            {" "}<span style={{ color: C.ivory }}>JetBrains Mono</span> for the
            ledger marks and folios. Black field, ivory ink, red and volt for
            the urgent and the unexpected. Next issue: after the lottery is
            spent and the draft is on the board.
          </p>
          <div style={{
            marginTop: m ? 22 : 32,
            display: "grid", gridTemplateColumns: m ? "1fr 1fr" : "repeat(3, 1fr)",
            gap: 14,
            fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
            color: C.mute, letterSpacing: 1.8,
          }}>
            <div>
              <div style={{ color: C.volt, marginBottom: 4 }}>// MASTHEAD</div>
              <div>EDITOR · THE EDITORS</div>
              <div>DESIGN · ANTON / INTER</div>
            </div>
            <div>
              <div style={{ color: C.volt, marginBottom: 4 }}>// FREQUENCY</div>
              <div>VOL XXVI · ISSUE 06</div>
              <div>MAY 2026 · OFFSEASON</div>
            </div>
            <div>
              <div style={{ color: C.volt, marginBottom: 4 }}>// NEXT UP</div>
              <div>{NEXT_GAME.opponent || "DRAFT LOTTERY"}</div>
              <div>{NEXT_GAME.venue || "CHICAGO · ESPN"}</div>
            </div>
          </div>
        </div>
        <aside>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
            color: C.volt, letterSpacing: 2, marginBottom: 14,
          }}>// SOURCES · PARTIAL LIST</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {sources.map((s) => (
              <span key={s} style={{
                fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
                color: C.ivory, padding: "5px 9px",
                border: `1px solid ${C.hair}`, letterSpacing: 1.2,
              }}>{s}</span>
            ))}
          </div>
        </aside>
      </div>

      <div style={{
        marginTop: m ? 32 : 48, paddingTop: m ? 18 : 24,
        borderTop: `1px solid ${C.hair}`,
        display: "flex", justifyContent: "space-between", alignItems: "baseline",
        gap: 16, flexWrap: "wrap",
        fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
        color: C.mute, letterSpacing: 2,
      }}>
        <span>// END OF ISSUE</span>
        <span style={{ color: C.red }}>■</span>
        <span>// THANK YOU FOR READING</span>
      </div>
    </section>
  );
}

// ─── Player Modal ───────────────────────────────────────────────
function PlayerModal({ id, onClose }) {
  const m = useIsMobile();
  const { bw } = useTweaks();
  const p = PLAYERS.find((x) => x.id === id);
  useEffect(() => {
    const k = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [onClose]);
  if (!p) return null;
  const inches = p.physical.height;
  const ftIn = `${Math.floor(inches / 12)}'${inches % 12}"`;
  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, zIndex: 1000, background: "rgba(0,0,0,0.85)",
      backdropFilter: "blur(8px)", overflowY: "auto",
      padding: m ? "16px 8px" : "40px 20px",
    }}>
      <div onClick={(e) => e.stopPropagation()} style={{
        maxWidth: 1100, margin: "0 auto", background: C.bg,
        border: `1px solid ${C.hair}`, position: "relative",
      }}>
        <button onClick={onClose} style={{
          position: "absolute", top: 12, right: 12, zIndex: 10,
          background: "rgba(0,0,0,0.6)", border: `1px solid ${C.hair}`,
          color: C.ivory, padding: "8px 14px", cursor: "pointer",
          fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
          letterSpacing: 1.5,
        }}>{m ? "CLOSE" : "CLOSE · ESC"}</button>

        <div style={{
          display: "grid",
          gridTemplateColumns: m ? "1fr" : "1fr 1.2fr",
          gap: 0, minHeight: m ? 0 : 560,
        }}>
          <div style={{
            position: "relative", background: C.panel, overflow: "hidden",
            borderRight: m ? "none" : `1px solid ${C.hair}`,
            borderBottom: m ? `1px solid ${C.hair}` : "none",
            height: m ? 320 : "auto",
          }}>
            <div style={{
              position: "absolute", top: m ? -20 : -50, left: m ? -10 : -30,
              fontFamily: "'Anton', sans-serif",
              fontSize: m ? 280 : 520, lineHeight: 0.78,
              color: C.red, opacity: 0.18, pointerEvents: "none",
            }}>{String(p.number).padStart(2, "0")}</div>
            <img src={p.image} alt={p.name} style={{
              position: "absolute", bottom: 0, left: "50%",
              transform: "translateX(-50%)",
              width: "95%", maxHeight: "95%", objectFit: "contain", zIndex: 2,
              filter: bwFilter(bw),
            }}/>
          </div>

          <div style={{ padding: m ? "24px 18px 24px" : "40px 40px 32px" }}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
              color: C.volt, letterSpacing: 2.5, marginBottom: 10,
            }}>// {p.position} · #{p.number} · {countryShort(p)} · AGE {p.age}</div>
            <div style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: m ? 44 : 72, color: C.ivory,
              textTransform: "uppercase", lineHeight: 0.85, letterSpacing: "-0.015em",
            }}>{p.name}</div>
            <div style={{ marginTop: 14 }}><Status s={p.status}/></div>
            {p.injuryNote && (
              <div style={{
                marginTop: 14, padding: "10px 14px",
                borderLeft: `3px solid ${C.red}`, background: `${C.red}10`,
                fontSize: 13, color: C.ivory,
              }}>{p.injuryNote}</div>
            )}

            <div style={{
              marginTop: 28, display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              border: `1px solid ${C.hair}`,
            }}>
              {[
                { l: "PPG", v: p.pointsPerGame.toFixed(1), c: C.volt },
                { l: "RPG", v: p.reboundsPerGame.toFixed(1) },
                { l: "APG", v: p.assistsPerGame.toFixed(1) },
                { l: "MPG", v: p.minutesPerGame.toFixed(1) },
              ].map((s, i) => (
                <div key={s.l} style={{
                  padding: "18px 12px", textAlign: "center",
                  borderRight: i < 3 ? `1px solid ${C.hair}` : "none",
                }}>
                  <div style={{
                    fontFamily: "'JetBrains Mono', monospace", fontSize: 36,
                    color: s.c || C.ivory, fontWeight: 700, lineHeight: 1,
                    fontVariantNumeric: "tabular-nums",
                  }}>{s.v}</div>
                  <div style={{
                    fontSize: 9, color: C.mute, letterSpacing: 2, marginTop: 6,
                  }}>{s.l}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 24 }}>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
                color: C.mute, letterSpacing: 2, marginBottom: 10,
              }}>// SHOOTING</div>
              {[
                { l: "FIELD GOAL", v: p.fieldGoalPct, max: 65 },
                { l: "3-POINT", v: p.threePointPct, max: 50 },
                { l: "FREE THROW", v: p.freeThrowPct, max: 100 },
                { l: "TRUE SHOOTING", v: p.trueShootingPct, max: 70 },
              ].map((b) => (
                <div key={b.l} style={{ marginBottom: 10 }}>
                  <div style={{
                    display: "flex", justifyContent: "space-between", marginBottom: 4,
                    fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
                  }}>
                    <span style={{ color: C.mute, letterSpacing: 1.5 }}>{b.l}</span>
                    <span style={{ color: C.ivory, fontVariantNumeric: "tabular-nums" }}>
                      {b.v.toFixed(1)}%
                    </span>
                  </div>
                  <div style={{ height: 3, background: C.hair, position: "relative" }}>
                    <div style={{
                      position: "absolute", left: 0, top: 0, bottom: 0,
                      width: `${Math.min(100, (b.v / b.max) * 100)}%`,
                      background: C.volt,
                    }}/>
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: 20, display: "flex", gap: 24,
              fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
              color: C.mute, letterSpacing: 1.5, flexWrap: "wrap",
            }}>
              <span>HT <span style={{ color: C.ivory, fontSize: 14 }}>{ftIn}</span></span>
              <span>WT <span style={{ color: C.ivory, fontSize: 14 }}>
                {p.physical.weight}<span style={{ color: C.mute }}> LB</span>
              </span></span>
              <span>+/- <span style={{
                color: p.plusMinus >= 0 ? C.volt : C.red, fontSize: 14,
              }}>{p.plusMinus >= 0 ? "+" : ""}{p.plusMinus.toFixed(1)}</span></span>
            </div>

            {p.recentNotes && (
              <div style={{
                marginTop: 24, padding: "16px 18px",
                borderLeft: `3px solid ${C.volt}`, background: C.panel,
                fontSize: 13, color: "#c5c5cc", lineHeight: 1.55,
                fontFamily: "Inter, sans-serif", maxHeight: 220,
                overflowY: "auto",
              }}>{p.recentNotes}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Magazine shell ─────────────────────────────────────────────
function MagazineApp() {
  const m = useIsMobile();
  const { rail } = useTweaks();
  const [modalId, setModalId] = useState(null);
  const ids = useMemo(() => SECTIONS.map((s) => s.id), []);
  const active = useScrollSpy(ids);

  const showLeft = !m && rail;
  const showRight = !m;

  return (
    <div style={{
      minHeight: "100vh", background: C.bg, color: C.ivory,
      fontFamily: "Inter, sans-serif",
    }}>
      <Masthead/>

      <div style={{
        display: "grid",
        gridTemplateColumns: m
          ? "1fr"
          : `${showLeft ? "62px " : ""}1fr${showRight ? " 62px" : ""}`,
        alignItems: "start",
      }}>
        {showLeft && <LeftRail active={active}/>}

        <main style={{ minWidth: 0 }}>
          <Cover/>
          <EditorsLetter/>
          <Hardware/>
          <Story/>
          <Portfolio onPlayer={setModalId}/>
          <Tactics onPlayer={setModalId}/>
          <Numbers/>
          <Ledger/>
          <Wire/>
          <BackPage/>
        </main>

        {showRight && <RightRail/>}
      </div>

      <TweaksPanel/>
      {modalId && <PlayerModal id={modalId} onClose={() => setModalId(null)}/>}

      <style>{`
        html { scroll-behavior: smooth; }
        section[id] { scroll-margin-top: 64px; }
        @media (prefers-reduced-motion: reduce) {
          html { scroll-behavior: auto; }
        }
      `}</style>
    </div>
  );
}

// ─── Root ───────────────────────────────────────────────────────
export default function HawksTracker() {
  return (
    <TweaksProvider>
      <MagazineApp/>
      <BrandCredit />
    </TweaksProvider>
  );
}
