import { useState, useMemo, useEffect } from "react";
import {
  PLAYERS,
  RESULTS,
  NEXT_GAME,
  NEWS_DIGEST,
  EAST_STANDINGS,
} from "./playerData.js";
import RotationView from "./RotationView.jsx";

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

const TEAM_ABBR = {
  "Atlanta Hawks": "ATL",
  "Cleveland Cavaliers": "CLE",
  "Boston Celtics": "BOS",
  "New York Knicks": "NYK",
  "Milwaukee Bucks": "MIL",
  "Orlando Magic": "ORL",
  "Detroit Pistons": "DET",
  "Miami Heat": "MIA",
  "Brooklyn Nets": "BKN",
  "Sacramento Kings": "SAC",
  "Golden State Warriors": "GSW",
  "Houston Rockets": "HOU",
  "Dallas Mavericks": "DAL",
  "Memphis Grizzlies": "MEM",
};

const COUNTRY_SHORT = {
  USA: "USA",
  Australia: "AUS",
  Canada: "CAN",
  Bahamas: "BHS",
  France: "FRA",
  Senegal: "SEN",
  "DR Congo": "COD",
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

// ─── Count-up hook ──────────────────────────────────────────────
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

// ─── Volt-underline link ────────────────────────────────────────
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

// ─── Status pill ────────────────────────────────────────────────
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

// ─── Section header ─────────────────────────────────────────────
export function SectionHeader({ kicker, title, right }) {
  return (
    <div style={{
      display: "flex", alignItems: "flex-end", justifyContent: "space-between",
      gap: 24, flexWrap: "wrap",
    }}>
      <div>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
          color: C.volt, letterSpacing: 2.5, marginBottom: 8,
        }}>// {kicker}</div>
        <h2 style={{
          fontFamily: "'Anton', sans-serif",
          fontSize: "clamp(48px, 6vw, 96px)",
          color: C.ivory, textTransform: "uppercase",
          lineHeight: 0.85, margin: 0, letterSpacing: "-0.015em",
        }}>{title}</h2>
      </div>
      {right}
    </div>
  );
}

// ─── HERO ───────────────────────────────────────────────────────
function Hero() {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const target = new Date(NEXT_GAME.date).getTime();
  const diff = target - now;
  const days = Math.max(0, Math.floor(diff / 86400000));
  const hrs = Math.max(0, Math.floor((diff % 86400000) / 3600000));
  const mins = Math.max(0, Math.floor((diff % 3600000) / 60000));
  const sec = Math.max(0, Math.floor((diff % 60000) / 1000));

  return (
    <section style={{
      position: "relative", borderBottom: `1px solid ${C.hair}`, overflow: "hidden",
    }}>
      {/* film grain */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.04,
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.9 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        zIndex: 2,
      }}/>

      {/* top meta */}
      <div style={{ padding: "24px 40px 0", position: "relative", zIndex: 3 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{
            width: 10, height: 10, background: C.red, display: "inline-block",
            boxShadow: `0 0 12px ${C.red}aa`,
          }}/>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
            color: C.ivory, letterSpacing: 2, fontWeight: 600,
          }}>SEASON · 2025–26 · OFFSEASON</span>
          <span style={{ flex: 1, height: 1, background: C.hair }}/>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
            color: C.mute, letterSpacing: 2,
          }}>ELIMINATED · R1 · 2–4 NYK</span>
        </div>
      </div>

      {/* wordmark */}
      <div style={{ padding: "18px 40px 0", position: "relative", zIndex: 3 }}>
        <h1 style={{
          fontFamily: "'Anton', 'Bebas Neue', sans-serif",
          fontSize: "clamp(120px, 22vw, 360px)",
          lineHeight: 0.82, margin: 0, letterSpacing: "-0.025em",
          color: C.ivory, textTransform: "uppercase",
          transform: "translateX(-1%)", whiteSpace: "nowrap",
        }}>
          HAWKS<span style={{ color: C.red }}>.</span>
          TRACKER<span style={{ color: C.volt }}>/</span>26
        </h1>
      </div>

      {/* countdown band */}
      <div style={{
        padding: "24px 40px 28px", position: "relative", zIndex: 3,
        display: "grid", gridTemplateColumns: "1.4fr 1fr",
        gap: 32, alignItems: "end",
      }}>
        <div>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
            color: C.mute, letterSpacing: 2, marginBottom: 6,
          }}>// NEXT ON THE CALENDAR</div>
          <div style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: "clamp(28px, 3.4vw, 48px)", color: C.ivory,
            textTransform: "uppercase", lineHeight: 0.95, letterSpacing: "-0.01em",
          }}>{NEXT_GAME.opponent}</div>
          <div style={{
            fontSize: 13, color: C.mute, marginTop: 8, fontFamily: "Inter,sans-serif",
          }}>{NEXT_GAME.venue} · {NEXT_GAME.broadcast}</div>
          <div style={{
            fontSize: 12, color: "#a8a8b0", marginTop: 6,
            fontFamily: "Inter,sans-serif", maxWidth: 560, lineHeight: 1.5,
          }}>{NEXT_GAME.seriesContext}</div>
        </div>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0,
          border: `1px solid ${C.hair}`,
        }}>
          {[
            { l: "DAYS", v: days },
            { l: "HRS", v: hrs },
            { l: "MIN", v: mins },
            { l: "SEC", v: sec },
          ].map((b, i) => (
            <div key={b.l} style={{
              padding: "14px 10px", textAlign: "center",
              borderRight: i < 3 ? `1px solid ${C.hair}` : "none",
            }}>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace", fontSize: 32,
                color: i === 0 ? C.volt : C.ivory, fontWeight: 700, lineHeight: 1,
                fontVariantNumeric: "tabular-nums",
              }}>{String(b.v).padStart(2, "0")}</div>
              <div style={{
                fontSize: 9, color: C.mute, letterSpacing: 1.5, marginTop: 6,
              }}>{b.l}</div>
            </div>
          ))}
        </div>
      </div>

      <Ticker/>
    </section>
  );
}

// ─── Courtside-LED ticker ───────────────────────────────────────
function Ticker() {
  const items = [
    { l: "FINAL · R1G6", v: "NYK 140 — ATL 89", c: C.red },
    { l: "SERIES", v: "NYK WINS 4–2", c: C.ivory },
    { l: "NEXT", v: "DRAFT LOTTERY · MAY 10 · 8:00 PM ET · CHICAGO", c: C.volt },
    { l: "AWARD", v: "ALEXANDER-WALKER · 2025–26 KIA MIP", c: C.ivory },
    { l: "INJURY", v: "LANDALE — HIGH-ANKLE SPRAIN · OUT", c: C.red },
    { l: "REC", v: "REG SEASON 46–36 · SE DIVISION CHAMPS", c: C.ivory },
    { l: "NOTE", v: "KNICKS 47-PT HALFTIME LEAD — NBA PLAYOFF RECORD", c: C.red },
    { l: "FA", v: "MCCOLLUM RETENTION TARGETED · MULTI-YEAR", c: C.volt },
  ];
  const row = [...items, ...items];
  return (
    <div style={{
      borderTop: `1px solid ${C.hair}`, borderBottom: `1px solid ${C.hair}`,
      background: "#000", overflow: "hidden", position: "relative", zIndex: 3,
      marginTop: 24,
    }}>
      <div style={{
        display: "flex", gap: 0, padding: "14px 0",
        animation: "tick 90s linear infinite", whiteSpace: "nowrap",
      }}>
        {row.map((it, i) => (
          <span key={i} style={{
            display: "inline-flex", alignItems: "center", gap: 12, paddingRight: 48,
            fontFamily: "'JetBrains Mono', monospace", fontSize: 13, fontWeight: 600,
            letterSpacing: 1.5,
          }}>
            <span style={{ width: 8, height: 8, background: it.c, display: "inline-block" }}/>
            <span style={{ color: C.mute, letterSpacing: 2 }}>{it.l}</span>
            <span style={{ color: it.c }}>{it.v}</span>
            <span style={{ color: C.hair, marginLeft: 32 }}>///</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Season banner: KPI strip ───────────────────────────────────
function SeasonBanner() {
  const stats = [
    { l: "REG SEASON", v: "46–36", sub: "5TH IN THE EAST" },
    { l: "OFFENSIVE RTG", v: "118.4", sub: "7TH LEAGUE-WIDE" },
    { l: "DEFENSIVE RTG", v: "114.2", sub: "14TH LEAGUE-WIDE" },
    { l: "PACE", v: "99.8", sub: "12TH" },
    { l: "3-PT %", v: "38.1", sub: "3RD LEAGUE-WIDE" },
    { l: "R1 SCORING DIFF", v: "-15.3", sub: "4 LOSSES BY 16+", tone: "red" },
  ];
  return (
    <section style={{
      padding: "32px 40px", borderBottom: `1px solid ${C.hair}`, background: "#000",
    }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 0 }}>
        {stats.map((s, i) => (
          <div key={s.l} style={{
            padding: "4px 18px",
            borderRight: i < 5 ? `1px solid ${C.hair}` : "none",
          }}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
              color: C.mute, letterSpacing: 2, marginBottom: 8,
            }}>// {s.l}</div>
            <div style={{
              fontFamily: "'Anton', sans-serif", fontSize: 54,
              color: s.tone === "red" ? C.red : C.ivory, lineHeight: 0.9,
              letterSpacing: "-0.01em", fontVariantNumeric: "tabular-nums",
            }}>{s.v}</div>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: 9,
              color: s.tone === "red" ? C.red : C.volt, letterSpacing: 1.8,
              marginTop: 6,
            }}>{s.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Awards strip ───────────────────────────────────────────────
function AwardsStrip() {
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
      detail: "First SE crown since 2014–15", tone: "red",
    },
    {
      kicker: "BREAKOUT", title: "JJ ALL-STAR LEAP",
      who: "Jalen Johnson · 22.8 / 10.3 / 8.0",
      detail: "First All-Star nod · Olympic camp invite", tone: "ivory",
    },
  ];
  return (
    <section style={{
      padding: "56px 40px", borderBottom: `1px solid ${C.hair}`, background: C.bg,
    }}>
      <SectionHeader kicker="HARDWARE · 2025–26"
        title={<>BRIGHT<br/>SPOTS<span style={{ color: C.volt }}>.</span></>}/>
      <div style={{
        marginTop: 32, display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
        gap: 1, background: C.hair, border: `1px solid ${C.hair}`,
      }}>
        {items.map((it, i) => {
          const tc = it.tone === "volt" ? C.volt : it.tone === "red" ? C.red : C.ivory;
          return (
            <div key={i} style={{
              padding: "32px 28px", background: C.panel, position: "relative",
              overflow: "hidden", minHeight: 240,
            }}>
              <div style={{
                position: "absolute", top: -30, right: -20,
                fontFamily: "'Anton', sans-serif", fontSize: 200,
                color: "#1c1c20", lineHeight: 0.8, letterSpacing: "-0.04em",
                pointerEvents: "none",
              }}>{String(i + 1).padStart(2, "0")}</div>
              <div style={{ position: "relative", zIndex: 2 }}>
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
                  color: tc, letterSpacing: 2.5, marginBottom: 14,
                }}>// {it.kicker}</div>
                <div style={{
                  fontFamily: "'Anton', sans-serif", fontSize: 42, color: C.ivory,
                  textTransform: "uppercase", lineHeight: 0.9, letterSpacing: "-0.01em",
                }}>{it.title}</div>
                <div style={{
                  marginTop: 18, fontFamily: "Inter,sans-serif",
                  fontSize: 14, fontWeight: 600, color: tc,
                }}>{it.who}</div>
                <div style={{
                  marginTop: 8, fontSize: 12, color: C.mute, lineHeight: 1.5,
                }}>{it.detail}</div>
              </div>
              <div style={{
                position: "absolute", left: 0, right: 0, bottom: 0,
                height: 3, background: tc,
              }}/>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ─── Player card ────────────────────────────────────────────────
function PlayerCard({ p, onClick, big = false }) {
  const [h, setH] = useState(false);
  const ppg = useCountUp(p.pointsPerGame);
  const rpg = useCountUp(p.reboundsPerGame);
  const apg = useCountUp(p.assistsPerGame);

  const surnames = p.name.split(" ");
  const first = surnames[0];
  const last = surnames.slice(1).join(" ");

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
        aspectRatio: big ? "0.85/1" : "0.78/1",
        display: "flex", flexDirection: "column",
      }}
    >
      {/* jersey watermark */}
      <div style={{
        position: "absolute", bottom: -28, right: -22,
        fontFamily: "'Anton', sans-serif",
        fontSize: big ? 320 : 220, lineHeight: 0.78,
        color: h ? C.red : "#1c1c20",
        fontWeight: 400, letterSpacing: "-0.05em",
        pointerEvents: "none", transition: "color .2s", zIndex: 1,
      }}>
        {String(p.number).padStart(2, "0")}
      </div>

      {/* vertical surname rail */}
      <div style={{
        position: "absolute", left: 0, top: 0, bottom: 0, width: 28,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "flex-start", padding: "14px 0 10px", zIndex: 5,
        background: `linear-gradient(90deg, ${C.panel}ee 0%, transparent 100%)`,
      }}>
        <span style={{
          writingMode: "vertical-rl", transform: "rotate(180deg)",
          fontFamily: "'Anton', sans-serif", fontSize: big ? 18 : 15,
          color: C.ivory, textTransform: "uppercase", letterSpacing: "0.04em",
          fontWeight: 400, whiteSpace: "nowrap",
        }}>{(last || first).toUpperCase()}</span>
        <span style={{
          writingMode: "vertical-rl", transform: "rotate(180deg)",
          fontFamily: "'JetBrains Mono', monospace", fontSize: 9,
          color: C.mute, letterSpacing: 2, marginTop: 10, whiteSpace: "nowrap",
        }}>{p.position} · {countryShort(p)}</span>
      </div>

      {/* headshot */}
      <div style={{
        position: "absolute", left: 28, right: 0, top: 0, bottom: 42, zIndex: 2,
        display: "flex", alignItems: "flex-end", justifyContent: "center",
        overflow: "hidden",
      }}>
        <img
          src={p.image}
          alt={p.name}
          style={{
            width: "100%", height: "100%", objectFit: "contain",
            objectPosition: "center bottom",
            filter: p.status === "out" ? "grayscale(0.7)" : "none",
          }}
          onError={(e) => { e.target.style.opacity = 0.15; }}
        />
      </div>

      {/* form + status */}
      <div style={{
        position: "absolute", top: 10, right: 12, zIndex: 6, textAlign: "right",
      }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: 9,
          color: C.mute, letterSpacing: 1.5,
        }}>FORM</div>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: 22,
          color: p.form >= 7 ? C.volt : p.form >= 6 ? C.ivory : C.red,
          fontWeight: 700, lineHeight: 1, fontVariantNumeric: "tabular-nums",
        }}>{p.form.toFixed(1)}</div>
        <div style={{ marginTop: 6 }}><Status s={p.status}/></div>
      </div>

      {/* stats strip */}
      <div style={{
        position: "absolute", left: 0, right: 0, bottom: 0, zIndex: 5,
        background: "#000", borderTop: `1px solid ${C.hair}`,
        display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
      }}>
        {[
          { l: "PPG", v: ppg.toFixed(1) },
          { l: "RPG", v: rpg.toFixed(1) },
          { l: "APG", v: apg.toFixed(1) },
          { l: "GP", v: String(p.gamesPlayed) },
        ].map((s, i) => (
          <div key={s.l} style={{
            padding: "8px 4px", textAlign: "center",
            borderRight: i < 3 ? `1px solid ${C.hair}` : "none",
          }}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: big ? 17 : 14, color: C.ivory, fontWeight: 700,
              lineHeight: 1, fontVariantNumeric: "tabular-nums",
            }}>{s.v}</div>
            <div style={{
              fontSize: 8, color: C.mute, letterSpacing: 1.4, marginTop: 4,
            }}>{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Roster grid + filters ──────────────────────────────────────
function Roster({ onPlayer }) {
  const [pos, setPos] = useState("ALL");
  const [sort, setSort] = useState("ppg");
  const positions = ["ALL", "PG", "SG", "SF", "PF", "C"];
  const list = useMemo(() => {
    let l = [...PLAYERS];
    if (pos !== "ALL") l = l.filter(p => p.position === pos);
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
    <section style={{ padding: "56px 40px", borderBottom: `1px solid ${C.hair}` }}>
      <SectionHeader
        kicker="ROSTER · 15"
        title="THE ATL FIFTEEN"
        right={
          <div style={{ display: "flex", gap: 18, alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ display: "flex", gap: 14 }}>
              {positions.map(p => (
                <Vlink key={p} active={pos === p} onClick={() => setPos(p)}>{p}</Vlink>
              ))}
            </div>
            <span style={{ width: 1, height: 18, background: C.hair }}/>
            <div style={{ display: "flex", gap: 14 }}>
              {[["ppg", "PPG"], ["rpg", "RPG"], ["apg", "APG"], ["mpg", "MPG"], ["num", "#"]].map(([k, l]) => (
                <Vlink key={k} active={sort === k} onClick={() => setSort(k)}>{l}</Vlink>
              ))}
            </div>
          </div>
        }
      />
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: 1, background: C.hair, marginTop: 32,
        border: `1px solid ${C.hair}`,
      }}>
        {list.map(p => (
          <PlayerCard key={p.id} p={p} onClick={() => onPlayer(p.id)}/>
        ))}
      </div>
    </section>
  );
}

// ─── Standings ──────────────────────────────────────────────────
function Standings() {
  return (
    <div>
      <div style={{
        fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
        color: C.volt, letterSpacing: 2.5, marginBottom: 14,
      }}>// EAST · FINAL STANDINGS</div>
      <div style={{ border: `1px solid ${C.hair}` }}>
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
  );
}

// ─── Series box ─────────────────────────────────────────────────
function SeriesBox() {
  const games = RESULTS.filter(r => r.competition === "PLAYOFFS").reverse();
  return (
    <div>
      <div style={{
        fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
        color: C.red, letterSpacing: 2.5, marginBottom: 14,
      }}>// R1 · ATL 2 — NYK 4 · ELIMINATED</div>
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 1,
        background: C.hair, border: `1px solid ${C.hair}`,
      }}>
        {games.map((g, i) => {
          const win = g.result === "W";
          return (
            <div key={i} style={{
              background: C.bg, padding: "14px 10px", textAlign: "center",
              borderTop: `3px solid ${win ? C.volt : C.red}`,
            }}>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace", fontSize: 9,
                color: C.mute, letterSpacing: 2,
              }}>G{i + 1}</div>
              <div style={{
                fontFamily: "'Anton', sans-serif", fontSize: 28,
                color: win ? C.volt : C.red, lineHeight: 1.1,
              }}>{g.result}</div>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
                color: C.ivory, marginTop: 2, fontVariantNumeric: "tabular-nums",
              }}>{g.score}</div>
              <div style={{
                fontSize: 9, color: C.mute, marginTop: 4, letterSpacing: 1,
              }}>{g.home ? "HOME" : "AWAY"}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Results — courtside scoreboard strip ───────────────────────
function Results() {
  const last12 = RESULTS.slice(0, 12);
  return (
    <section style={{
      padding: "56px 40px", borderBottom: `1px solid ${C.hair}`, background: C.panel,
    }}>
      <SectionHeader
        kicker="LAST 12 GAMES · REG + R1"
        title={<>RESULTS<span style={{ color: C.red }}>.</span></>}
      />
      <div style={{
        marginTop: 32, display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: 1, background: C.hair, border: `1px solid ${C.hair}`,
      }}>
        {last12.map((r, i) => {
          const [s1, s2] = r.score.split("-").map(Number);
          const ours = s1;
          const theirs = s2;
          const win = r.result === "W";
          const playoff = r.competition === "PLAYOFFS";
          return (
            <div key={i} style={{
              padding: "18px 18px 14px", background: C.bg, position: "relative",
              borderTop: `3px solid ${win ? C.volt : C.red}`,
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace", fontSize: 9,
                  color: C.mute, letterSpacing: 2,
                }}>{new Date(r.date + "T12:00:00")
                    .toLocaleDateString("en-US", { month: "short", day: "2-digit" })
                    .toUpperCase()}</span>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace", fontSize: 9,
                  color: playoff ? C.red : C.mute, letterSpacing: 2, fontWeight: 700,
                }}>{playoff ? "PLAYOFFS" : "REG"} · {r.home ? "HOME" : "AWAY"}</span>
              </div>
              <div style={{
                fontFamily: "'Anton', sans-serif", fontSize: 54, color: C.ivory,
                lineHeight: 0.85, display: "flex", alignItems: "baseline", gap: 8,
                fontVariantNumeric: "tabular-nums",
              }}>
                <span style={{ color: win ? C.volt : C.ivory }}>{ours}</span>
                <span style={{ fontSize: 18, color: C.mute }}>—</span>
                <span style={{ color: win ? C.mute : C.red }}>{theirs}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 10 }}>
                <span style={{
                  width: 24, height: 24, display: "inline-flex",
                  alignItems: "center", justifyContent: "center",
                  background: win ? C.volt : C.red, color: win ? "#000" : "#fff",
                  fontFamily: "'Anton', sans-serif", fontSize: 16, fontWeight: 700,
                }}>{r.result}</span>
                <span style={{
                  fontFamily: "'Anton', sans-serif", fontSize: 20, color: C.ivory,
                  letterSpacing: "0.02em",
                }}>{r.home ? "vs" : "at"} {abbr(r.opponent)}</span>
              </div>
              <div style={{
                fontSize: 11, color: C.mute, marginTop: 8, lineHeight: 1.4,
                fontFamily: "Inter, sans-serif",
                display: "-webkit-box", WebkitBoxOrient: "vertical",
                WebkitLineClamp: 3, overflow: "hidden",
              }}>{r.topScorers}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ─── News view ──────────────────────────────────────────────────
function NewsView() {
  const topics = NEWS_DIGEST.keyTopics;
  const lead = topics[0];
  const rest = topics.slice(1);

  // pull a source citation from the first parenthetical in detail
  const sourceFrom = (detail) => {
    const m = detail.match(/\(([^,)]+(?:\/[^,)]+)*)/);
    return m ? m[1].split("/").slice(0, 3).join(" / ").trim() : "WIRE · ATL";
  };
  const ages = ["2H", "3H", "4H", "5H", "6H", "8H", "10H", "12H", "14H", "16H", "18H", "20H", "1D", "1D", "1D"];

  return (
    <section style={{ padding: "56px 40px", borderBottom: `1px solid ${C.hair}` }}>
      <SectionHeader
        kicker="WIRE · LIVE"
        title={<>NEWS<span style={{ color: C.red }}>/</span>FEED</>}
      />

      {/* Lead */}
      <article style={{
        marginTop: 40, paddingTop: 32, borderTop: `1px solid ${C.hair}`,
        display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 48,
      }}>
        <div>
          <div style={{
            display: "flex", gap: 14, fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11, color: C.mute, letterSpacing: 2, marginBottom: 18,
            flexWrap: "wrap",
          }}>
            <span style={{ color: C.red }}>ATLANTA</span>
            <span>—</span>
            <span>APR 30, 2026</span>
            <span>—</span>
            <span>{(lead.category || "GENERAL").toUpperCase()}</span>
          </div>
          <h3 style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: "clamp(40px, 4.5vw, 72px)",
            color: C.ivory, textTransform: "uppercase",
            lineHeight: 0.92, margin: 0, letterSpacing: "-0.01em",
          }}>
            <span style={{
              color: C.red, fontSize: "1.4em", float: "left", lineHeight: 0.85,
              marginRight: 14, marginTop: -4,
            }}>{lead.title.charAt(0)}</span>
            {lead.title.slice(1)}
          </h3>
          <p style={{
            marginTop: 24, fontFamily: "Inter, sans-serif", fontSize: 16,
            color: "#c5c5cc", lineHeight: 1.6, maxWidth: 640,
          }}>{lead.detail}</p>
          <div style={{
            marginTop: 18, fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
            color: C.volt, letterSpacing: 2,
          }}>{sourceFrom(lead.detail)} · 2H AGO</div>
        </div>
        <div style={{ borderLeft: `1px solid ${C.hair}`, paddingLeft: 32 }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
            color: C.mute, letterSpacing: 2, marginBottom: 16,
          }}>// PULL QUOTE</div>
          <div style={{
            fontFamily: "'Anton', sans-serif", fontSize: 42, color: C.ivory,
            lineHeight: 1, textTransform: "uppercase", letterSpacing: "-0.005em",
          }}>"OBVIOUSLY,<br/>IT <span style={{ color: C.red }}>SUCKS</span>."</div>
          <div style={{
            marginTop: 18, fontFamily: "Inter, sans-serif", fontSize: 13,
            color: C.mute, lineHeight: 1.5,
          }}>— Jalen Johnson, postgame, after the 51-point closeout that ended the Hawks' season.</div>
        </div>
      </article>

      {/* Rest */}
      <div style={{
        marginTop: 48, display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
        gap: 0, borderTop: `1px solid ${C.hair}`,
      }}>
        {rest.map((n, i) => (
          <article key={i} style={{
            padding: "28px 28px 28px 0",
            borderBottom: `1px solid ${C.hair}`,
            borderRight: (i % 2 === 0) ? `1px solid ${C.hair}` : "none",
            paddingLeft: (i % 2 === 0) ? 0 : 28,
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
              fontFamily: "'Anton', sans-serif", fontSize: 26, color: C.ivory,
              textTransform: "uppercase", lineHeight: 1, margin: 0,
              letterSpacing: "-0.005em",
            }}>{n.title}</h4>
            <p style={{
              marginTop: 12, fontFamily: "Inter, sans-serif", fontSize: 13,
              color: "#a8a8b0", lineHeight: 1.55,
            }}>{n.detail}</p>
            <div style={{
              marginTop: 12, fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
              color: C.volt, letterSpacing: 1.8,
            }}>{sourceFrom(n.detail)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

// ─── Player Modal ───────────────────────────────────────────────
function PlayerModal({ id, onClose }) {
  const p = PLAYERS.find(x => x.id === id);
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
      backdropFilter: "blur(8px)", overflowY: "auto", padding: "40px 20px",
    }}>
      <div onClick={(e) => e.stopPropagation()} style={{
        maxWidth: 1100, margin: "0 auto", background: C.bg,
        border: `1px solid ${C.hair}`, position: "relative",
      }}>
        <button onClick={onClose} style={{
          position: "absolute", top: 16, right: 16, zIndex: 10,
          background: "transparent", border: `1px solid ${C.hair}`,
          color: C.ivory, padding: "8px 14px", cursor: "pointer",
          fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
          letterSpacing: 1.5,
        }}>CLOSE · ESC</button>

        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 0, minHeight: 560,
        }}>
          {/* Left: portrait + jersey */}
          <div style={{
            position: "relative", background: C.panel, overflow: "hidden",
            borderRight: `1px solid ${C.hair}`,
          }}>
            <div style={{
              position: "absolute", top: -50, left: -30,
              fontFamily: "'Anton', sans-serif", fontSize: 520, lineHeight: 0.78,
              color: C.red, opacity: 0.18, pointerEvents: "none",
            }}>{String(p.number).padStart(2, "0")}</div>
            <img src={p.image} alt={p.name} style={{
              position: "absolute", bottom: 0, left: "50%",
              transform: "translateX(-50%)",
              width: "95%", maxHeight: "95%", objectFit: "contain", zIndex: 2,
            }}/>
          </div>

          {/* Right: data */}
          <div style={{ padding: "40px 40px 32px" }}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
              color: C.volt, letterSpacing: 2.5, marginBottom: 10,
            }}>// {p.position} · #{p.number} · {countryShort(p)} · AGE {p.age}</div>
            <div style={{
              fontFamily: "'Anton', sans-serif", fontSize: 72, color: C.ivory,
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

            {/* season line */}
            <div style={{
              marginTop: 28, display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
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

            {/* Shooting */}
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
              ].map(b => (
                <div key={b.l} style={{ marginBottom: 10 }}>
                  <div style={{
                    display: "flex", justifyContent: "space-between", marginBottom: 4,
                    fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
                  }}>
                    <span style={{ color: C.mute, letterSpacing: 1.5 }}>{b.l}</span>
                    <span style={{
                      color: C.ivory, fontVariantNumeric: "tabular-nums",
                    }}>{b.v.toFixed(1)}%</span>
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

            {/* Phys */}
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

            {/* Note */}
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

// ─── Dashboard composition ──────────────────────────────────────
function Dashboard({ onPlayer }) {
  return (
    <>
      <SeasonBanner/>
      <section style={{
        padding: "56px 40px", borderBottom: `1px solid ${C.hair}`,
        display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 48,
      }}>
        <SeriesBox/>
        <Standings/>
      </section>
      <AwardsStrip/>
      <Roster onPlayer={onPlayer}/>
      <Results/>
    </>
  );
}

// ─── App ────────────────────────────────────────────────────────
export default function HawksTracker() {
  const [view, setView] = useState("dashboard");
  const [modalId, setModalId] = useState(null);

  return (
    <div style={{
      minHeight: "100vh", background: C.bg, color: C.ivory,
      fontFamily: "Inter, sans-serif",
    }}>
      {/* Top nav */}
      <nav style={{
        display: "flex", alignItems: "center", padding: "18px 40px", gap: 32,
        borderBottom: `1px solid ${C.hair}`, background: C.bg,
        position: "sticky", top: 0, zIndex: 50,
      }}>
        <div style={{
          fontFamily: "'Anton', sans-serif", fontSize: 24, color: C.ivory,
          textTransform: "uppercase", letterSpacing: "0.02em",
        }}>
          ATL<span style={{ color: C.red }}>/</span>26
        </div>
        <div style={{ flex: 1, display: "flex", gap: 28 }}>
          <Vlink active={view === "dashboard"} onClick={() => setView("dashboard")} size={13}>
            Dashboard
          </Vlink>
          <Vlink active={view === "rotation"} onClick={() => setView("rotation")} size={13}>
            Rotation
          </Vlink>
          <Vlink active={view === "news"} onClick={() => setView("news")} size={13}>
            News
          </Vlink>
        </div>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
          color: C.mute, letterSpacing: 1.8,
        }}>
          <span style={{ color: C.red }}>●</span> SEASON OVER · MAY 1 · 2026
        </div>
      </nav>

      {view === "dashboard" && <Hero/>}
      {view === "dashboard" && <Dashboard onPlayer={setModalId}/>}
      {view === "rotation" && <RotationView onPlayer={setModalId}/>}
      {view === "news" && <NewsView/>}

      {/* Footer */}
      <footer style={{
        padding: "48px 40px", display: "flex",
        justifyContent: "space-between", alignItems: "center", gap: 24,
        flexWrap: "wrap",
      }}>
        <div style={{
          fontFamily: "'Anton', sans-serif", fontSize: 64, color: "#1d1d22",
          textTransform: "uppercase", lineHeight: 0.85, letterSpacing: "-0.01em",
        }}>TRUE TO ATL.</div>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: C.mute,
          letterSpacing: 1.5, textAlign: "right",
        }}>
          // EOF · 2025–26<br/>
          // ROSTER · 15 PLAYERS<br/>
          // REC · 46–36
        </div>
      </footer>

      {modalId && <PlayerModal id={modalId} onClose={() => setModalId(null)}/>}
    </div>
  );
}
