// built by nnnsightnnn — signal from noise
// Peachtree '70s heritage system. See REDESIGN-BRIEF.md.
import { useState, useEffect, useMemo, useRef } from "react";
import {
  PLAYERS, RESULTS, EAST_STANDINGS, NEWS_DIGEST, NEXT_GAME,
  ISSUE as RAW_ISSUE, NUMBERS_LEDGER, BETS as RAW_BETS, KEY_DATES,
  DRAFT_DATA,
} from "./playerData.js";
import BrandCredit from "./components/BrandCredit.jsx";

// ─── Design tokens ──────────────────────────────────────────────
export const C = {
  bg:     "#F6E7CE",
  panel:  "#EFD9B8",
  panel2: "#E7CEA6",
  red:    "#CE2B37",
  pine:   "#1F6F5C",
  gold:   "#E8A93C",
  ink:    "#2A211A",
  taupe:  "#8A7B66",
  hair:   "#CDB389",
  cream:  "#FBEFD8",
};

const FONT = {
  disp: "'Fredoka', system-ui, sans-serif",
  body: "'Hanken Grotesk', system-ui, sans-serif",
  num:  "'Roboto Slab', Georgia, serif",
};

const COUNTRY = {
  USA: "United States", AUS: "Australia", CAN: "Canada", FRA: "France",
  COD: "DR Congo", BHS: "Bahamas", SEN: "Senegal",
};

const STATUS = {
  active:        { c: C.pine, label: "ACTIVE" },
  "day-to-day":  { c: C.gold, label: "DTD"    },
  questionable:  { c: C.gold, label: "WATCH"  },
  doubtful:      { c: C.gold, label: "DOUBT"  },
  out:           { c: C.red,  label: "OUT"    },
  suspended:     { c: C.taupe, label: "SUS"   },
};

// ─── Data adapters: playerData.js → design shape ────────────────
const NATIONALITY_TO_CODE = {
  "USA": "USA", "United States": "USA",
  "Australia": "AUS", "Canada": "CAN", "France": "FRA",
  "DR Congo": "COD", "Bahamas": "BHS", "Senegal": "SEN",
};
const TEAM_ABBR = {
  "Atlanta Hawks": "ATL", "Cleveland Cavaliers": "CLE", "Boston Celtics": "BOS",
  "New York Knicks": "NYK", "Milwaukee Bucks": "MIL", "Orlando Magic": "ORL",
  "Detroit Pistons": "DET", "Miami Heat": "MIA", "Brooklyn Nets": "BKN",
  "Sacramento Kings": "SAC", "Golden State Warriors": "GSW",
  "Houston Rockets": "HOU", "Dallas Mavericks": "DAL", "Memphis Grizzlies": "MEM",
};
function nationalityCode(s) {
  const stripped = (s || "").replace(/[^\x00-\x7F]+/g, "").trim();
  return NATIONALITY_TO_CODE[stripped] || stripped.slice(0, 3).toUpperCase() || "USA";
}
function teamAbbr(name) {
  return TEAM_ABBR[name] || name.split(" ").pop().slice(0, 3).toUpperCase();
}

// First sentence (or first ~220 chars), stripped of all-caps lead tags.
function firstSentence(text, max = 220) {
  if (!text) return "";
  const cleaned = text.replace(/^[A-Z][A-Z0-9 ,·:—\-/()'.]+—\s*/g, "")
                      .replace(/^SATURDAY MAY 30[^—]*—\s*/i, "");
  const m = cleaned.match(/^([^.!?]+[.!?])/);
  let out = m ? m[1] : cleaned.slice(0, max);
  if (out.length > max) out = out.slice(0, max - 1).replace(/\s+\S*$/, "") + "…";
  return out.trim();
}

const ADAPTED_PLAYERS = PLAYERS.map((p) => ({
  id: p.id, name: p.name, number: p.number, pos: p.position,
  country: nationalityCode(p.nationality),
  age: p.age, starter: !!p.playoffStarter,
  gp: p.gamesPlayed, mpg: p.minutesPerGame,
  ppg: p.pointsPerGame, rpg: p.reboundsPerGame, apg: p.assistsPerGame,
  spg: p.stealsPerGame, bpg: p.blocksPerGame,
  fg: p.fieldGoalPct, tp: p.threePointPct, ft: p.freeThrowPct,
  ts: p.trueShootingPct, pm: p.plusMinus,
  form: p.form, status: p.status,
  note: firstSentence(p.recentNotes, 240),
  image: p.image,
}));

const ADAPTED_RESULTS = RESULTS.slice(0, 16).map((g) => ({
  date: g.date, opp: g.opponent, abbr: teamAbbr(g.opponent),
  home: g.home, score: g.score, comp: g.competition,
  res: g.result, note: firstSentence(g.topScorers, 110),
}));

const ADAPTED_STANDINGS = EAST_STANDINGS.map((s) => ({
  seed: s.seed, team: s.team, abbr: teamAbbr(s.team), record: s.record,
}));

const ADAPTED_BETS = RAW_BETS.map((b) => ({ take: b.take, conf: b.confidence }));

// LEDGER rows: already triples in NUMBERS_LEDGER — pick the top 6 for the rail.
const ADAPTED_LEDGER = NUMBERS_LEDGER.slice(0, 6).map((row) => [row[0], row[1], row[2]]);

// ─── Live issue derivation ──────────────────────────────────────
// Everything below is DERIVED from the daily-refreshed data (NEWS_DIGEST,
// NEXT_GAME, standings), so the masthead + cover story update automatically
// on every data push. Do not hardcode dates/headlines here again.
const MONTHS = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
const MON3   = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
const CAT_LABEL = { trades: "Trade Wire", injuries: "Injury Report", games: "On the Floor", rotation: "Rotation", general: "Front Office" };
function _titleCase(m) { return m.charAt(0) + m.slice(1).toLowerCase(); }
function _issueDate() {
  const raw = NEWS_DIGEST.generatedAt || (RAW_ISSUE.date ? RAW_ISSUE.date + "T12:00:00Z" : null);
  const d = raw ? new Date(raw) : new Date();
  return isNaN(d) ? new Date() : d;
}
function _fmtDateline(d) { return `ATLANTA · ${MONTHS[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`; }
function _titleHead(t) { const m = String(t || "").split(/[:—–]/); return m[0].trim(); }
function _titleRest(t) { const s = String(t || ""); const i = s.search(/[:—–]/); return i >= 0 ? s.slice(i + 1).trim() : ""; }

const _issueD = _issueDate();
const _digestDateline = _fmtDateline(_issueD);
const _lead = NEWS_DIGEST.keyTopics[0] || { title: "Atlanta Hawks", detail: "", category: "general" };

// Map NEWS_DIGEST.keyTopics → wire stories.
const KICKER_BY_CATEGORY = { trades: "FREE AGENCY", games: "AROUND THE LEAGUE", injuries: "INJURY REPORT", rotation: "ROTATION", general: "FRONT OFFICE" };
const WIRE = NEWS_DIGEST.keyTopics.slice(0, 6).map((t) => {
  const kicker = (t.title.match(/draft/i) ? "DRAFT"
    : t.title.match(/all-?nba|all-?defens|most improved|hardware/i) ? "HONORS"
    : t.title.match(/injur|surgery|fracture|out \d|day-to-day/i) ? "INJURY REPORT"
    : t.title.match(/free agency|mccollum|grimes|harden|hartenstein/i) ? "FREE AGENCY"
    : t.title.match(/kuminga|hield|cap|option|trigger/i) ? "CAP CALENDAR"
    : t.title.match(/snyder|saleh|president|coach|broadcast|tv|gray media/i) ? "FRONT OFFICE"
    : t.title.match(/brown|trade|risacher|cameron johnson|kispert/i) ? "TRADE WIRE"
    : (KICKER_BY_CATEGORY[t.category] || "AROUND THE LEAGUE"));
  return {
    kicker,
    dateline: `ATLANTA · ${MON3[_issueD.getUTCMonth()]} ${_issueD.getUTCDate()}`,
    headline: t.title.replace(/[—–:].*$/, "").trim().replace(/\s+/g, " "),
    body: firstSentence(t.detail, 520) + (t.detail.length > 520 ? "" : ""),
  };
});

// FEATURE: cover story = the current lead in NEWS_DIGEST (keyTopics[0]).
const FEATURE = {
  flag: "Cover Story",
  section: "The Lead · " + (CAT_LABEL[_lead.category] || "Front Office"),
  starId: RAW_ISSUE.coverStarId || 1,
  headline: _titleHead(_lead.title) || "Atlanta Hawks",
  standfirst: _titleRest(_lead.title) || firstSentence(_lead.detail, 220),
  dateline: _digestDateline,
  byline: "By the Editors",
  readMore: "Read the full wire",
  body: NEWS_DIGEST.summary || firstSentence(_lead.detail, 600),
  quote: { text: "Signal from noise.", who: "The Editors", when: `${_titleCase(MONTHS[_issueD.getUTCMonth()])} ${_issueD.getUTCFullYear()}` },
  // Cover art is a dedicated slot: a generated image dropped into
  // public/assets/cover/ and referenced by ISSUE.coverImage. When absent,
  // the panel shows a branded placeholder — never an NBA headshot silhouette.
  coverImage: RAW_ISSUE.coverImage || null,
  coverKicker: CAT_LABEL[_lead.category] || "Cover Story",
  ribbon: _titleHead(_lead.title) || "The Lead",
  also: NEWS_DIGEST.keyTopics.slice(1, 4).map((t) => ({
    kicker: CAT_LABEL[t.category] || "Front Office",
    headline: _titleHead(t.title),
    dateline: `${MON3[_issueD.getUTCMonth()]} ${_issueD.getUTCDate()}`,
  })),
};

// ISSUE strip (masthead) — derived from standings + NEXT_GAME.
const _atl = ADAPTED_STANDINGS.find((s) => /Atlanta|Hawks/i.test(s.team)) || { record: "—", seed: 6 };
const _nextDate = NEXT_GAME && NEXT_GAME.date ? new Date(NEXT_GAME.date) : null;
const _daysToNext = _nextDate && !isNaN(_nextDate) ? Math.round((_nextDate - _issueD) / 86400000) : null;
function _nextLabel() {
  if (!NEXT_GAME || !NEXT_GAME.opponent) return "TBD";
  const s = _titleHead(NEXT_GAME.opponent).replace(/^Summer League\s*/i, "").replace(/^vs\s*/i, "");
  return s.toUpperCase();
}
function _nextWhen() {
  if (!_nextDate || isNaN(_nextDate)) return "TBD";
  const ds = `${MON3[_nextDate.getUTCMonth()]} ${_nextDate.getUTCDate()}`;
  if (_daysToNext > 1)  return `${ds} · in ${_daysToNext} days`;
  if (_daysToNext === 1) return `${ds} · tomorrow`;
  if (_daysToNext === 0) return `${ds} · today`;
  return ds;
}
const ISSUE = {
  ribbon: _digestDateline,
  record: _atl.record,
  seed:   `${_atl.seed} SEED · EAST`,
  seedShort: `${_atl.seed} SEED`,
  nextLabel: _nextLabel(),
  nextWhen: _nextWhen(),
};

const HAWKS = {
  PLAYERS: ADAPTED_PLAYERS,
  RESULTS: ADAPTED_RESULTS,
  STANDINGS: ADAPTED_STANDINGS,
  WIRE, BETS: ADAPTED_BETS, LEDGER: ADAPTED_LEDGER, FEATURE, ISSUE,
};

// ─── Hooks ──────────────────────────────────────────────────────
function useCountUp(target, dur = 850, run = true) {
  const [n, setN] = useState(run ? 0 : target);
  useEffect(() => {
    if (!run) { setN(target); return; }
    let raf, t0;
    const step = (t) => {
      if (!t0) t0 = t;
      const p = Math.min((t - t0) / dur, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setN(target * e);
      if (p < 1) raf = requestAnimationFrame(step);
      else setN(target);
    };
    raf = requestAnimationFrame(step);
    const safety = setTimeout(() => setN(target), dur + 120);
    return () => { cancelAnimationFrame(raf); clearTimeout(safety); };
  }, [target, run, dur]);
  return n;
}

// ─── Primitives ─────────────────────────────────────────────────
function HawkMark({ color = C.red, opacity = 1, style }) {
  return (
    <svg viewBox="0 0 64 64" style={{ display: "block", ...style }} aria-hidden="true">
      <path
        d="M985 272H443L357 0H9L507 1493H920L1418 0H1069ZM529 549H897L714 1143Z"
        fill={color} fillOpacity={opacity}
        transform="translate(32 34) scale(0.030810448760884127 -0.030810448760884127) translate(-713.5 -746.5)"
      />
    </svg>
  );
}

function Pennant({ children, bg = C.gold, fg = C.ink, dir = "right", style }) {
  const notch = dir === "right"
    ? "polygon(0 0, 100% 0, calc(100% - 9px) 50%, 100% 100%, 0 100%)"
    : "polygon(9px 0, 100% 0, 100% 100%, 9px 100%, 0 50%)";
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      background: bg, color: fg, clipPath: notch,
      padding: dir === "right" ? "5px 16px 5px 11px" : "5px 13px 5px 18px",
      fontFamily: FONT.body, fontWeight: 600, fontSize: 11,
      letterSpacing: 1.4, textTransform: "uppercase", lineHeight: 1,
      ...style,
    }}>{children}</span>
  );
}

function UnderLink({ children, onClick, active, color = C.gold, style }) {
  const [h, setH] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        position: "relative", background: "none", border: "none", cursor: "pointer",
        padding: "4px 0", color: active ? C.red : C.ink, fontFamily: FONT.body,
        fontWeight: 600, fontSize: 13, letterSpacing: 0.4, ...style,
      }}>
      {children}
      <span style={{
        position: "absolute", left: 0, bottom: 0, height: 1.5,
        width: (active || h) ? "100%" : "0%", background: color,
        transition: "width .26s cubic-bezier(.4,0,.2,1)",
      }}/>
    </button>
  );
}

function Kicker({ children, color = C.pine, rule = true }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 12,
      fontFamily: FONT.body, fontWeight: 600, fontSize: 12,
      letterSpacing: 2.4, textTransform: "uppercase", color,
    }}>
      {rule && <span style={{ width: 26, height: 2, background: color, borderRadius: 2 }}/>}
      {children}
    </div>
  );
}

// ─── Tweaks (mini panel, persists to localStorage) ──────────────
const TWEAK_DEFAULTS = { bw: false, cardBorder: "red", ribbon: "gold", density: "cozy" };
const TWEAKS_KEY = "hawks-peachtree-tweaks-v1";

function useTweaks() {
  const [t, setT] = useState(() => {
    try {
      const raw = localStorage.getItem(TWEAKS_KEY);
      return raw ? { ...TWEAK_DEFAULTS, ...JSON.parse(raw) } : TWEAK_DEFAULTS;
    } catch { return TWEAK_DEFAULTS; }
  });
  const setTweak = (k, v) => setT((prev) => {
    const next = { ...prev, [k]: v };
    try { localStorage.setItem(TWEAKS_KEY, JSON.stringify(next)); } catch {}
    return next;
  });
  return [t, setTweak];
}

function TweakSegment({ label, value, options, onChange }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <div style={{
        fontFamily: FONT.body, fontWeight: 600, fontSize: 10, letterSpacing: 1.4,
        color: C.taupe, textTransform: "uppercase", marginBottom: 6,
      }}>{label}</div>
      <div style={{ display: "flex", gap: 4, background: C.bg, borderRadius: 8, padding: 3, border: `1px solid ${C.hair}` }}>
        {options.map((opt) => {
          const on = value === opt;
          return (
            <button key={opt} onClick={() => onChange(opt)} style={{
              flex: 1, border: "none", cursor: "pointer", borderRadius: 6, padding: "6px 8px",
              background: on ? C.ink : "transparent", color: on ? C.cream : C.ink,
              fontFamily: FONT.body, fontWeight: 600, fontSize: 11, letterSpacing: 0.6,
              textTransform: "uppercase", transition: "background .14s",
            }}>{opt}</button>
          );
        })}
      </div>
    </div>
  );
}

function TweakToggle({ label, value, onChange }) {
  return (
    <div style={{ marginBottom: 12, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
      <span style={{ fontFamily: FONT.body, fontWeight: 600, fontSize: 12, color: C.ink }}>{label}</span>
      <button onClick={() => onChange(!value)} style={{
        width: 38, height: 22, border: "none", padding: 0, cursor: "pointer",
        background: value ? C.pine : C.hair, borderRadius: 99, position: "relative",
        transition: "background .18s",
      }}>
        <span style={{
          position: "absolute", top: 2, left: value ? 18 : 2, width: 18, height: 18,
          background: C.cream, borderRadius: "50%", transition: "left .18s",
          boxShadow: "0 1px 2px rgba(42,33,26,.3)",
        }}/>
      </button>
    </div>
  );
}

function TweaksMini({ tweaks, setTweak }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen((o) => !o)} aria-label="Open tweaks" style={{
        position: "fixed", right: 18, bottom: 18, zIndex: 9000,
        width: 46, height: 46, borderRadius: "50%", border: `2px solid ${C.ink}`,
        background: C.gold, color: C.ink, cursor: "pointer",
        fontFamily: FONT.disp, fontWeight: 700, fontSize: 18,
        boxShadow: "0 6px 16px rgba(42,33,26,.22)",
      }}>≡</button>
      {open && (
        <div style={{
          position: "fixed", right: 18, bottom: 76, zIndex: 9000,
          width: 268, background: C.panel, border: `2px solid ${C.ink}`, borderRadius: 12,
          padding: "14px 16px 12px", boxShadow: "0 12px 32px rgba(42,33,26,.28)",
        }}>
          <div style={{
            fontFamily: FONT.disp, fontWeight: 700, fontSize: 15, color: C.ink, marginBottom: 10,
            display: "flex", alignItems: "center", justifyContent: "space-between",
          }}>
            <span>Tweaks</span>
            <button onClick={() => setOpen(false)} style={{
              background: "none", border: "none", cursor: "pointer", color: C.taupe,
              fontSize: 18, lineHeight: 1, padding: 0,
            }}>×</button>
          </div>
          <div style={{
            fontFamily: FONT.body, fontWeight: 600, fontSize: 10, letterSpacing: 1.6,
            color: C.pine, textTransform: "uppercase", marginBottom: 8,
          }}>Player cards</div>
          <TweakSegment label="Card border" value={tweaks.cardBorder}
            options={["red", "pine", "byrole"]}
            onChange={(v) => setTweak("cardBorder", v)}/>
          <TweakToggle label="Black & white" value={tweaks.bw}
            onChange={(v) => setTweak("bw", v)}/>
          <div style={{ height: 1, background: C.hair, margin: "10px 0 12px" }}/>
          <div style={{
            fontFamily: FONT.body, fontWeight: 600, fontSize: 10, letterSpacing: 1.6,
            color: C.pine, textTransform: "uppercase", marginBottom: 8,
          }}>Page</div>
          <TweakSegment label="Pennant ribbon" value={tweaks.ribbon}
            options={["gold", "red"]}
            onChange={(v) => setTweak("ribbon", v)}/>
          <TweakSegment label="Whitespace" value={tweaks.density}
            options={["cozy", "airy"]}
            onChange={(v) => setTweak("density", v)}/>
        </div>
      )}
    </>
  );
}

// ─── Cover masthead ─────────────────────────────────────────────
function Cover({ tweaks }) {
  const ribBg = tweaks.ribbon === "red" ? C.red : C.gold;
  const ribFg = tweaks.ribbon === "red" ? C.cream : C.ink;
  const I = HAWKS.ISSUE;
  return (
    <header style={{
      position: "relative", overflow: "hidden", background: C.bg,
      borderBottom: `1px solid ${C.hair}`,
      padding: "clamp(30px,5vw,58px) clamp(20px,5vw,64px) clamp(26px,3.5vw,40px)",
    }}>
      <HawkMark color={C.red} opacity={0.06} style={{
        position: "absolute", width: "min(560px,52vw)", height: "min(560px,52vw)",
        right: "-7%", top: "50%", transform: "translateY(-50%)", pointerEvents: "none",
      }}/>
      <div style={{
        position: "absolute", inset: 0, opacity: 0.04, pointerEvents: "none",
        backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      }}/>
      <div style={{
        position: "relative", maxWidth: 1180, margin: "0 auto",
        display: "flex", alignItems: "flex-end", justifyContent: "space-between",
        gap: 30, flexWrap: "wrap",
      }}>
        <div style={{ minWidth: 0 }}>
          <div style={{
            fontFamily: FONT.body, fontWeight: 600, fontSize: 13, letterSpacing: 3,
            color: C.pine, textTransform: "uppercase", marginBottom: 8,
          }}>The Atlanta Hawks Tracker</div>
          <h1 style={{
            fontFamily: FONT.disp, fontWeight: 700, margin: 0, color: C.red,
            fontSize: "clamp(72px,13vw,168px)", lineHeight: 0.82, letterSpacing: 1,
          }}>HAWKS</h1>
          <div style={{ marginTop: 18, display: "inline-block" }}>
            <div className="hawks-flutter" style={{
              background: ribBg, color: ribFg,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 12px 100%, 0 50%, 12px 0)",
              padding: "10px 24px 10px 30px",
              fontFamily: FONT.body, fontWeight: 600, fontSize: "clamp(12px,1.6vw,15px)",
              letterSpacing: 2.4, textTransform: "uppercase", whiteSpace: "nowrap",
            }}>{I.ribbon}</div>
          </div>
        </div>

        <div style={{
          background: C.panel, border: `2px solid ${C.ink}`, borderRadius: 12,
          padding: "16px 22px", minWidth: 230,
        }}>
          <div style={{ fontFamily: FONT.body, fontWeight: 600, fontSize: 10, letterSpacing: 2, color: C.pine, textTransform: "uppercase" }}>Next on the calendar</div>
          <div style={{ fontFamily: FONT.disp, fontWeight: 700, fontSize: 28, color: C.ink, lineHeight: 1, margin: "8px 0 4px", whiteSpace: "nowrap" }}>{I.nextLabel}</div>
          <div style={{ fontFamily: FONT.body, fontWeight: 600, fontSize: 13, color: C.red }}>{I.nextWhen}</div>
          <div style={{ height: 1, background: C.hair, margin: "13px 0" }}/>
          <div style={{ display: "flex", gap: 22 }}>
            {[["RECORD", I.record], ["EAST", I.seedShort]].map(([k, v]) => (
              <div key={k}>
                <div style={{ fontFamily: FONT.num, fontWeight: 700, fontSize: 18, color: C.ink, fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>{v}</div>
                <div style={{ fontFamily: FONT.body, fontWeight: 600, fontSize: 8.5, letterSpacing: 1.2, color: C.taupe, marginTop: 2 }}>{k}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

// ─── Pennant nav ────────────────────────────────────────────────
const TABS = [
  { id: "feature", label: "Feature" },
  { id: "roster",  label: "Roster"  },
  { id: "rotation",label: "Rotation"},
  { id: "results", label: "Results" },
  { id: "draft",   label: "Draft"   },
  { id: "news",    label: "News"    },
];

function PennantTab({ tab, active, onClick }) {
  const [h, setH] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        position: "relative", border: "none", cursor: "pointer",
        background: active ? C.red : (h ? C.panel2 : "transparent"),
        color: active ? C.cream : C.ink,
        clipPath: "polygon(0 0, 100% 0, calc(100% - 12px) 50%, 100% 100%, 0 100%)",
        padding: "11px 30px 11px 18px",
        fontFamily: FONT.disp, fontWeight: 700, fontSize: 17, letterSpacing: 0.3,
        transition: "background .2s, color .2s",
      }}>
      {tab.label}
      <span style={{
        position: "absolute", left: 18, right: 24, bottom: 6, height: 2,
        background: C.gold, transform: `scaleX(${h && !active ? 1 : 0})`,
        transformOrigin: "left", transition: "transform .26s cubic-bezier(.4,0,.2,1)",
      }}/>
    </button>
  );
}

// ─── Feature view ───────────────────────────────────────────────
function CoverStarPanel({ tweaks }) {
  const F = HAWKS.FEATURE;
  const frame = tweaks.cardBorder === "pine" ? C.pine : C.red;
  const ribBg = tweaks.ribbon === "red" ? C.red : C.gold;
  const ribFg = tweaks.ribbon === "red" ? C.cream : C.ink;
  const [artFailed, setArtFailed] = useState(false);
  const base = import.meta.env.BASE_URL || "/";
  const art = F.coverImage && !artFailed ? base + String(F.coverImage).replace(/^\/+/, "") : null;
  return (
    <div style={{
      position: "relative", borderRadius: 16, overflow: "hidden",
      border: `3px solid ${frame}`,
      background: `radial-gradient(120% 75% at 50% 12%, ${C.panel2} 0%, ${C.panel} 72%)`,
      aspectRatio: "0.82 / 1", minHeight: 360,
    }}>
      <HawkMark color={frame} opacity={art ? 0 : 0.14} style={{
        position: "absolute", width: "62%", height: "62%",
        left: "50%", top: "42%", transform: "translate(-50%,-50%)", pointerEvents: "none",
      }}/>
      {art ? (
        <img src={art} alt={F.headline} style={{
          position: "absolute", inset: 0, width: "100%", height: "100%",
          objectFit: "cover", objectPosition: "center 18%", zIndex: 2,
          filter: tweaks.bw ? "grayscale(1) contrast(1.05)" : "none",
        }} onError={() => setArtFailed(true)}/>
      ) : (
        <div style={{
          position: "absolute", inset: 0, zIndex: 2, display: "flex",
          flexDirection: "column", alignItems: "center", justifyContent: "center",
          textAlign: "center", padding: 26, pointerEvents: "none",
        }}>
          <div style={{
            fontFamily: FONT.disp, fontWeight: 700, fontSize: "min(112px,19vw)",
            lineHeight: 0.8, color: frame, opacity: 0.22, letterSpacing: 1,
          }}>ATL/26</div>
          <div style={{
            fontFamily: FONT.body, fontWeight: 600, fontSize: 10.5, letterSpacing: 2,
            color: C.taupe, textTransform: "uppercase", marginTop: 14,
          }}>Cover art in production</div>
        </div>
      )}
      <div style={{ position: "absolute", left: 0, top: 16, zIndex: 3 }}>
        <Pennant bg={C.gold} fg={C.ink} dir="right">{F.coverKicker}</Pennant>
      </div>
      <div style={{
        position: "absolute", left: "50%", bottom: 18, transform: "translateX(-50%)",
        zIndex: 4, background: ribBg, color: ribFg,
        border: `2px solid ${tweaks.ribbon === "red" ? C.gold : C.red}`,
        borderRadius: 8, padding: "9px 20px", whiteSpace: "nowrap", maxWidth: "88%",
        overflow: "hidden", textOverflow: "ellipsis",
        fontFamily: FONT.body, fontWeight: 600, fontSize: 12.5, letterSpacing: 1.6,
        textTransform: "uppercase",
      }}>{F.ribbon}</div>
    </div>
  );
}

function AlsoTeaser({ t, onNav, last }) {
  const [h, setH] = useState(false);
  return (
    <button
      onClick={() => onNav && onNav("news")}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        textAlign: "left", background: "none", cursor: "pointer", padding: "4px 0",
        border: "none", borderRight: last ? "none" : `1px solid ${C.hair}`,
        paddingRight: last ? 0 : 28,
      }}>
      <div style={{
        fontFamily: FONT.body, fontWeight: 600, fontSize: 10, letterSpacing: 2,
        color: C.red, textTransform: "uppercase", marginBottom: 8,
      }}>{t.kicker}</div>
      <div style={{ position: "relative", display: "inline-block" }}>
        <h4 style={{
          fontFamily: FONT.disp, fontWeight: 600, margin: 0, color: C.ink,
          fontSize: "clamp(19px,2vw,23px)", lineHeight: 1.04, letterSpacing: 0.2,
        }}>{t.headline}</h4>
        <span style={{
          position: "absolute", left: 0, bottom: -3, height: 2, background: C.gold,
          width: h ? "100%" : "0%", transition: "width .26s cubic-bezier(.4,0,.2,1)",
        }}/>
      </div>
      <div style={{
        fontFamily: FONT.body, fontWeight: 600, fontSize: 10.5, letterSpacing: 1.2,
        color: C.taupe, marginTop: 9, textTransform: "uppercase",
        display: "flex", alignItems: "center", gap: 7,
      }}>
        ATLANTA · {t.dateline}
        <span style={{ color: C.pine }}>›</span>
      </div>
    </button>
  );
}

function FeatureView({ tweaks, onNav }) {
  const F = HAWKS.FEATURE;
  const pad = tweaks.density === "airy" ? 30 : 18;
  return (
    <div style={{ maxWidth: 1180, margin: "0 auto", padding: `${pad + 8}px clamp(20px,5vw,64px) 80px` }}>
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        gap: 16, flexWrap: "wrap", borderBottom: `3px solid ${C.ink}`, paddingBottom: 14,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <Pennant bg={C.red} fg={C.cream} dir="right" style={{ fontSize: 12 }}>{F.flag}</Pennant>
          <span style={{ fontFamily: FONT.body, fontWeight: 600, fontSize: 12, letterSpacing: 1.6, color: C.pine, textTransform: "uppercase" }}>{F.section}</span>
        </div>
        <span style={{ fontFamily: FONT.body, fontWeight: 600, fontSize: 11.5, letterSpacing: 1.4, color: C.taupe }}>{F.dateline}</span>
      </div>

      <div style={{
        marginTop: tweaks.density === "airy" ? 40 : 30,
        display: "grid", gridTemplateColumns: "1.12fr 0.88fr",
        gap: tweaks.density === "airy" ? 52 : 40, alignItems: "start",
      }} className="feature-grid">
        <div>
          <h2 style={{
            fontFamily: FONT.disp, fontWeight: 700, margin: 0, color: C.ink,
            fontSize: "clamp(46px,7vw,104px)", lineHeight: 0.86, letterSpacing: 0.5,
            textWrap: "balance",
          }}>{F.headline}</h2>
          <p style={{
            fontFamily: FONT.body, fontWeight: 400, fontStyle: "italic",
            fontSize: "clamp(16px,1.7vw,20px)", lineHeight: 1.5, color: "#5C5346",
            margin: "20px 0 0", maxWidth: 560, textWrap: "pretty",
          }}>{F.standfirst}</p>
          <div style={{
            display: "flex", gap: 12, alignItems: "center", margin: "16px 0 0",
            fontFamily: FONT.body, fontWeight: 600, fontSize: 11, letterSpacing: 1.4,
            color: C.taupe, textTransform: "uppercase", flexWrap: "wrap",
          }}>
            <span style={{ color: C.pine }}>{F.byline}</span>
            <span>·</span><span>{F.dateline}</span>
          </div>
          <div style={{ height: 1, background: C.hair, margin: tweaks.density === "airy" ? "30px 0" : "22px 0" }}/>
          <p style={{
            fontFamily: FONT.body, fontWeight: 400, fontSize: "clamp(15px,1.5vw,17px)",
            lineHeight: 1.66, color: "#4F463B", margin: 0, maxWidth: 600, textWrap: "pretty",
          }}>
            <span style={{
              float: "left", fontFamily: FONT.disp, fontWeight: 700, fontSize: 78,
              lineHeight: 0.72, color: C.red, marginRight: 10, marginTop: 6,
            }}>{F.body.charAt(0)}</span>
            {F.body.slice(1)}
          </p>
          <div style={{ marginTop: 22 }}>
            <UnderLink onClick={() => onNav && onNav("news")} color={C.gold}
              style={{ fontFamily: FONT.disp, fontWeight: 600, fontSize: 16, color: C.red, whiteSpace: "nowrap" }}>
              {F.readMore} ›
            </UnderLink>
          </div>
        </div>

        <div style={{ position: "sticky", top: 84 }}>
          <CoverStarPanel tweaks={tweaks}/>
        </div>
      </div>

      <div style={{
        marginTop: tweaks.density === "airy" ? 56 : 44,
        padding: tweaks.density === "airy" ? "34px 0" : "26px 0",
        borderTop: `2px solid ${C.red}`, borderBottom: `2px solid ${C.red}`,
        display: "grid", gridTemplateColumns: "auto 1fr", gap: 32, alignItems: "center",
      }} className="feature-quote">
        <div style={{
          fontFamily: FONT.body, fontWeight: 600, fontSize: 11, letterSpacing: 2.4,
          color: C.red, textTransform: "uppercase", whiteSpace: "nowrap",
        }}>— Editor's Note</div>
        <blockquote style={{ margin: 0 }}>
          <div style={{
            fontFamily: FONT.disp, fontWeight: 700, color: C.ink,
            fontSize: "clamp(28px,4.4vw,56px)", lineHeight: 1.0, letterSpacing: 0.3,
          }}>“{F.quote.text}”</div>
          <div style={{
            marginTop: 12, fontFamily: FONT.body, fontWeight: 600, fontSize: 11,
            letterSpacing: 1.6, color: C.taupe, textTransform: "uppercase",
          }}>{F.quote.who} · {F.quote.when}</div>
        </blockquote>
      </div>

      <div style={{ marginTop: tweaks.density === "airy" ? 48 : 38 }}>
        <Kicker color={C.pine}>Also on the Cover</Kicker>
        <div style={{
          marginTop: 18, display: "grid",
          gridTemplateColumns: `repeat(${F.also.length}, 1fr)`, gap: 28,
        }} className="feature-also">
          {F.also.map((t, i) => (
            <AlsoTeaser key={i} t={t} onNav={onNav} last={i === F.also.length - 1}/>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Roster view ────────────────────────────────────────────────
function StatCell({ label, value, last }) {
  return (
    <div style={{
      flex: 1, textAlign: "center", padding: "9px 4px",
      borderRight: last ? "none" : `1px solid ${C.hair}`,
    }}>
      <div style={{
        fontFamily: FONT.num, fontWeight: 700, fontSize: 19, lineHeight: 1,
        color: C.ink, fontVariantNumeric: "tabular-nums",
      }}>{value}</div>
      <div style={{
        fontFamily: FONT.body, fontWeight: 600, fontSize: 9, letterSpacing: 1.4,
        color: C.taupe, marginTop: 5,
      }}>{label}</div>
    </div>
  );
}

function PlayerCard({ p, tweaks }) {
  const [flip, setFlip] = useState(false);
  const [hover, setHover] = useState(false);
  const ppg = useCountUp(p.ppg, 800, true);
  const rpg = useCountUp(p.rpg, 800, true);
  const apg = useCountUp(p.apg, 800, true);

  const frame = tweaks.cardBorder === "pine" ? C.pine
    : tweaks.cardBorder === "byrole" ? (p.starter ? C.red : C.pine)
    : C.red;
  const banner = frame;
  const last = p.name.split(" ").slice(-1)[0];
  const first = p.name.split(" ").slice(0, -1).join(" ");
  const st = STATUS[p.status] || STATUS.active;

  return (
    <div
      onClick={() => setFlip((f) => !f)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ perspective: 1200, cursor: "pointer" }}>
      <div style={{
        position: "relative", transformStyle: "preserve-3d",
        transition: "transform .42s cubic-bezier(.4,0,.2,1)",
        transform: `translateY(${hover && !flip ? -4 : 0}px) rotateY(${flip ? 180 : 0}deg)`,
        aspectRatio: "0.71 / 1",
      }}>
        {/* FRONT */}
        <div style={{
          position: "absolute", inset: 0, backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden",
          background: C.panel, border: `3px solid ${frame}`, borderRadius: 14,
          overflow: "hidden", display: "flex", flexDirection: "column",
          boxShadow: hover ? "0 10px 22px rgba(42,33,26,.16)" : "0 2px 6px rgba(42,33,26,.08)",
          opacity: flip ? 0 : 1,
          transition: "box-shadow .26s, opacity 0s linear .21s",
        }}>
          <div style={{
            background: banner, color: C.cream, padding: "9px 12px 8px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            gap: 8, borderBottom: `2px solid ${C.gold}`,
          }}>
            <div style={{ minWidth: 0 }}>
              <div style={{
                fontFamily: FONT.body, fontWeight: 600, fontSize: 9.5,
                letterSpacing: 1.6, opacity: 0.82, lineHeight: 1,
              }}>{first.toUpperCase()}</div>
              <div style={{
                fontFamily: FONT.disp, fontWeight: 700, fontSize: 22, lineHeight: 1,
                letterSpacing: 0.2, whiteSpace: "nowrap", overflow: "hidden",
                textOverflow: "ellipsis", marginTop: 2,
              }}>{last}</div>
            </div>
            <div style={{
              fontFamily: FONT.num, fontWeight: 700, fontSize: 26, lineHeight: 1,
              fontVariantNumeric: "tabular-nums", flexShrink: 0,
            }}>{p.number}</div>
          </div>

          <div style={{
            position: "relative", flex: 1, overflow: "hidden",
            background: `radial-gradient(120% 80% at 50% 18%, ${C.panel2} 0%, ${C.panel} 70%)`,
            margin: "7px 7px 0", borderRadius: 8, border: `1px solid ${C.hair}`,
          }}>
            <div style={{
              position: "absolute", right: -6, bottom: -20, zIndex: 1,
              fontFamily: FONT.disp, fontWeight: 700, fontSize: 150, lineHeight: 0.8,
              color: frame, opacity: 0.10, pointerEvents: "none",
            }}>{String(p.number).padStart(2, "0")}</div>
            <img src={p.image} alt={p.name} loading="lazy"
              style={{
                position: "absolute", inset: 0, width: "100%", height: "100%",
                objectFit: "cover", objectPosition: "center 18%", zIndex: 2,
                filter: tweaks.bw ? "grayscale(1) contrast(1.05)" : "none",
                opacity: p.status === "out" ? 0.5 : 1,
              }}
              onError={(e) => { e.currentTarget.style.opacity = 0.12; }}/>
            <div style={{ position: "absolute", left: 0, top: 11, zIndex: 3 }}>
              <Pennant bg={C.gold} fg={C.ink} dir="right">{p.pos}</Pennant>
            </div>
            <div style={{
              position: "absolute", right: 9, top: 9, zIndex: 3,
              display: "flex", alignItems: "center", gap: 5,
              fontFamily: FONT.body, fontWeight: 600, fontSize: 9,
              letterSpacing: 1.2, color: st.c,
            }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: st.c }}/>
              {st.label}
            </div>
          </div>

          <div style={{
            display: "flex", margin: "7px 7px 8px", background: C.bg,
            border: `1px solid ${C.hair}`, borderRadius: 7, overflow: "hidden",
          }}>
            <StatCell label="PPG" value={ppg.toFixed(1)}/>
            <StatCell label="RPG" value={rpg.toFixed(1)}/>
            <StatCell label="APG" value={apg.toFixed(1)}/>
            <StatCell label="GP" value={p.gp} last/>
          </div>
        </div>

        {/* BACK */}
        <div style={{
          position: "absolute", inset: 0, backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
          background: C.bg, border: `3px solid ${frame}`, borderRadius: 14,
          overflow: "hidden", display: "flex", flexDirection: "column",
          padding: "12px 13px",
          opacity: flip ? 1 : 0,
          transition: "opacity 0s linear .21s",
        }}>
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "baseline",
            borderBottom: `2px solid ${frame}`, paddingBottom: 7,
          }}>
            <div style={{ fontFamily: FONT.disp, fontWeight: 700, fontSize: 17, color: C.ink, lineHeight: 1 }}>
              {p.name}
            </div>
            <div style={{ fontFamily: FONT.num, fontWeight: 700, fontSize: 16, color: frame }}>
              #{p.number}
            </div>
          </div>
          <div style={{
            fontFamily: FONT.body, fontWeight: 600, fontSize: 9.5, letterSpacing: 1.2,
            color: C.taupe, marginTop: 6, textTransform: "uppercase",
          }}>{p.pos} · {COUNTRY[p.country] || p.country} · AGE {p.age}</div>

          <div style={{ marginTop: 9, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 14px" }}>
            {[["MIN", p.mpg], ["FG%", (p.fg ?? 0).toFixed(1)], ["3P%", (p.tp ?? 0).toFixed(1)],
              ["FT%", (p.ft ?? 0).toFixed(1)], ["TS%", (p.ts ?? 0).toFixed(1)],
              ["+/-", (p.pm > 0 ? "+" : "") + (p.pm ?? 0)]
            ].map(([k, v]) => (
              <div key={k} style={{
                display: "flex", justifyContent: "space-between", alignItems: "baseline",
                borderBottom: `1px dotted ${C.hair}`, paddingBottom: 2,
              }}>
                <span style={{ fontFamily: FONT.body, fontWeight: 600, fontSize: 9.5, letterSpacing: 1, color: C.taupe }}>{k}</span>
                <span style={{ fontFamily: FONT.num, fontWeight: 700, fontSize: 13, color: C.ink, fontVariantNumeric: "tabular-nums" }}>{v}</span>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: 10, fontFamily: FONT.body, fontWeight: 400, fontSize: 11.5,
            lineHeight: 1.5, color: "#5C5346", flex: 1, overflow: "hidden",
          }}>
            <span style={{
              float: "left", fontFamily: FONT.disp, fontWeight: 700, fontSize: 30,
              lineHeight: 0.8, color: frame, marginRight: 6, marginTop: 2,
            }}>{(p.note || "—").charAt(0)}</span>
            {(p.note || "—").slice(1)}
          </div>

          <div style={{
            marginTop: 6, paddingTop: 7, borderTop: `1px solid ${C.hair}`,
            fontFamily: FONT.body, fontWeight: 600, fontSize: 8.5, letterSpacing: 1.4,
            color: C.taupe, textAlign: "center",
          }}>TAP TO FLIP BACK · HAWKS TRACKER</div>
        </div>
      </div>
    </div>
  );
}

function RosterView({ tweaks }) {
  const [pos, setPos] = useState("ALL");
  const positions = ["ALL", "PG", "SG", "SF", "PF", "C"];
  const list = useMemo(() => {
    let l = HAWKS.PLAYERS;
    if (pos !== "ALL") l = l.filter((p) => p.pos === pos);
    return l;
  }, [pos]);

  const pad = tweaks.density === "airy" ? 30 : 18;

  return (
    <div style={{ maxWidth: 1180, margin: "0 auto", padding: `${pad + 8}px clamp(20px,5vw,64px) 80px` }}>
      <Kicker color={C.pine}>Roster · 2025–26</Kicker>
      <div style={{
        display: "flex", alignItems: "flex-end", justifyContent: "space-between",
        gap: 20, flexWrap: "wrap", marginTop: 12,
      }}>
        <h2 style={{
          fontFamily: FONT.disp, fontWeight: 700, margin: 0, color: C.ink,
          fontSize: "clamp(40px,6vw,76px)", lineHeight: 0.9, letterSpacing: 0.5,
        }}>The Roster</h2>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {positions.map((x) => {
            const on = pos === x;
            return (
              <button key={x} onClick={() => setPos(x)} style={{
                fontFamily: FONT.body, fontWeight: 600, fontSize: 12, letterSpacing: 1,
                padding: "7px 15px", borderRadius: 20, cursor: "pointer",
                border: `1.5px solid ${on ? C.red : C.hair}`,
                background: on ? C.red : "transparent", color: on ? C.cream : C.taupe,
                transition: "all .18s",
              }}>{x}</button>
            );
          })}
        </div>
      </div>

      <div style={{
        marginTop: tweaks.density === "airy" ? 40 : 28,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))",
        gap: tweaks.density === "airy" ? 28 : 18,
      }}>
        {list.map((p) => <PlayerCard key={p.id} p={p} tweaks={tweaks}/>)}
      </div>
      <div style={{
        marginTop: 22, fontFamily: FONT.body, fontWeight: 400, fontSize: 12,
        color: C.taupe, textAlign: "center", fontStyle: "italic",
      }}>Tap any card to flip it over.</div>
    </div>
  );
}

// ─── Rotation view ──────────────────────────────────────────────
function JerseyPennant({ p, tweaks }) {
  const [h, setH] = useState(false);
  const teal = tweaks.cardBorder === "pine";
  const bg = teal ? C.pine : C.red;
  const last = p.name.split(" ").slice(-1)[0];
  return (
    <div
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        position: "relative", background: bg, color: C.cream,
        clipPath: "polygon(0 0,100% 0,100% 90%,50% 100%,0 90%)",
        padding: "16px 12px 40px", textAlign: "center",
        transform: h ? "translateY(-5px)" : "none",
        transition: "transform .26s cubic-bezier(.4,0,.2,1)",
      }}>
      <div style={{
        fontFamily: FONT.body, fontWeight: 600, fontSize: 10, letterSpacing: 1.6,
        opacity: 0.85, borderBottom: `1.5px solid ${C.gold}`, paddingBottom: 8,
      }}>{p.pos} · {COUNTRY[p.country] || p.country}</div>
      <div style={{
        fontFamily: FONT.num, fontWeight: 700, fontSize: "clamp(54px,7vw,82px)",
        lineHeight: 0.95, margin: "10px 0 6px", fontVariantNumeric: "tabular-nums",
      }}>{p.number}</div>
      <div style={{
        fontFamily: FONT.disp, fontWeight: 700, fontSize: 18, lineHeight: 1,
        whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
      }}>{last}</div>
      <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 12 }}>
        {[["PTS", p.ppg], ["REB", p.rpg], ["AST", p.apg]].map(([k, v]) => (
          <div key={k}>
            <div style={{ fontFamily: FONT.num, fontWeight: 700, fontSize: 16, lineHeight: 1 }}>{v.toFixed(1)}</div>
            <div style={{ fontFamily: FONT.body, fontWeight: 600, fontSize: 8, letterSpacing: 1, opacity: 0.8, marginTop: 3 }}>{k}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BenchChip({ p }) {
  const [h, setH] = useState(false);
  const st = STATUS[p.status] || STATUS.active;
  return (
    <div
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        display: "flex", alignItems: "center", gap: 11, padding: "10px 14px",
        background: h ? C.panel2 : C.panel, borderRadius: 10,
        border: `1px solid ${C.hair}`, transition: "background .18s", minWidth: 0,
      }}>
      <div style={{
        fontFamily: FONT.num, fontWeight: 700, fontSize: 20, color: C.red,
        width: 30, textAlign: "center", flexShrink: 0, fontVariantNumeric: "tabular-nums",
      }}>{p.number}</div>
      <div style={{ minWidth: 0, flex: 1 }}>
        <div style={{
          fontFamily: FONT.body, fontWeight: 600, fontSize: 13, color: C.ink,
          whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
        }}>{p.name}</div>
        <div style={{ fontFamily: FONT.body, fontWeight: 400, fontSize: 10.5, letterSpacing: 0.6, color: C.taupe }}>
          {p.pos} · {p.ppg.toFixed(1)} PPG
        </div>
      </div>
      <span style={{ width: 8, height: 8, borderRadius: "50%", background: st.c, flexShrink: 0 }}/>
    </div>
  );
}

function RotationView({ tweaks }) {
  const starters = useMemo(() => HAWKS.PLAYERS.filter((p) => p.starter), []);
  const bench = useMemo(() => HAWKS.PLAYERS.filter((p) => !p.starter), []);
  const pad = tweaks.density === "airy" ? 30 : 18;
  return (
    <div style={{ maxWidth: 1180, margin: "0 auto", padding: `${pad + 8}px clamp(20px,5vw,64px) 80px` }}>
      <Kicker color={C.pine}>Rotation · Starting Five</Kicker>
      <h2 style={{
        fontFamily: FONT.disp, fontWeight: 700, margin: "12px 0 4px", color: C.ink,
        fontSize: "clamp(40px,6vw,76px)", lineHeight: 0.9, letterSpacing: 0.5,
      }}>On the Floor</h2>
      <p style={{
        fontFamily: FONT.body, fontWeight: 400, fontSize: 15, color: "#5C5346",
        lineHeight: 1.6, maxWidth: 640, margin: "0 0 6px",
      }}>The closing playoff lineup — five jersey pennants. The bench rail runs beneath.</p>

      <div style={{
        marginTop: tweaks.density === "airy" ? 36 : 26,
        display: "grid", gridTemplateColumns: "repeat(5, 1fr)",
        gap: tweaks.density === "airy" ? 20 : 13,
      }} className="starters-grid">
        {starters.map((p) => <JerseyPennant key={p.id} p={p} tweaks={tweaks}/>)}
      </div>

      <div style={{ marginTop: tweaks.density === "airy" ? 48 : 38 }}>
        <Kicker color={C.taupe} rule={true}>The Bench</Kicker>
        <div style={{
          marginTop: 16, display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: 12,
        }}>
          {bench.map((p) => <BenchChip key={p.id} p={p}/>)}
        </div>
      </div>
    </div>
  );
}

// ─── Results view ───────────────────────────────────────────────
function ResultRow({ g, i }) {
  const [h, setH] = useState(false);
  const win = g.res === "W";
  const stripe = i % 2 === 0 ? C.bg : C.panel;
  const margin = win ? C.pine : C.red;
  const [atl, opp] = g.score.split("-");
  const d = new Date(g.date + "T12:00:00");
  const dateStr = d.toLocaleDateString("en-US", { month: "short", day: "numeric" }).toUpperCase();
  return (
    <div
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        display: "grid", gridTemplateColumns: "70px 1fr 64px 96px",
        alignItems: "center", gap: 10, padding: "12px 16px 12px 18px",
        background: h ? C.panel2 : stripe, position: "relative",
        borderBottom: `1px solid ${C.hair}`, transition: "background .15s",
      }}>
      <span style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, background: margin }}/>
      <div style={{
        fontFamily: FONT.body, fontWeight: 600, fontSize: 11, letterSpacing: 1,
        color: C.taupe,
      }}>{dateStr}</div>
      <div style={{ minWidth: 0 }}>
        <div style={{
          fontFamily: FONT.body, fontWeight: 600, fontSize: 14.5, color: C.ink,
          display: "flex", alignItems: "center", gap: 7,
        }}>
          {win && <span style={{ color: C.gold, fontSize: 15 }}>★</span>}
          <span style={{ color: C.taupe, fontWeight: 600, fontSize: 12 }}>{g.home ? "vs" : "@"}</span>
          {g.opp}
          {g.comp === "PLAYOFFS" && (
            <span style={{
              fontFamily: FONT.body, fontWeight: 600, fontSize: 8.5, letterSpacing: 1.2,
              color: C.cream, background: C.red, padding: "2px 6px", borderRadius: 3,
            }}>PLAYOFFS</span>
          )}
        </div>
        <div style={{
          fontFamily: FONT.body, fontWeight: 400, fontSize: 11.5, color: C.taupe,
          marginTop: 3, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
        }}>{g.note}</div>
      </div>
      <div style={{
        fontFamily: FONT.disp, fontWeight: 700, fontSize: 15,
        color: win ? C.pine : C.red, textAlign: "center",
      }}>{g.res === "W" ? "WIN" : "LOSS"}</div>
      <div style={{
        fontFamily: FONT.num, fontWeight: 700, fontSize: 18, textAlign: "right",
        color: C.ink, fontVariantNumeric: "tabular-nums",
      }}>
        <span style={{ color: win ? C.ink : C.taupe }}>{atl}</span>
        <span style={{ color: C.hair, margin: "0 3px" }}>–</span>
        <span style={{ color: win ? C.taupe : C.ink }}>{opp}</span>
      </div>
    </div>
  );
}

function ResultsView({ tweaks }) {
  const games = HAWKS.RESULTS;
  const wins = games.filter((g) => g.res === "W").length;
  const pad = tweaks.density === "airy" ? 30 : 18;
  return (
    <div style={{ maxWidth: 1180, margin: "0 auto", padding: `${pad + 8}px clamp(20px,5vw,64px) 80px` }}>
      <Kicker color={C.pine}>Results · The Ledger</Kicker>
      <div style={{
        display: "flex", alignItems: "flex-end", justifyContent: "space-between",
        gap: 20, flexWrap: "wrap", marginTop: 12,
      }}>
        <h2 style={{
          fontFamily: FONT.disp, fontWeight: 700, margin: 0, color: C.ink,
          fontSize: "clamp(40px,6vw,72px)", lineHeight: 0.9, letterSpacing: 0.5,
          whiteSpace: "nowrap",
        }}>Box Score</h2>
        <div style={{ fontFamily: FONT.body, fontWeight: 600, fontSize: 12, color: C.taupe, letterSpacing: 1 }}>
          LAST {games.length} · <span style={{ color: C.pine }}>{wins}W</span> <span style={{ color: C.red }}>{games.length - wins}L</span>
        </div>
      </div>

      <div style={{
        marginTop: tweaks.density === "airy" ? 40 : 30,
        display: "grid", gridTemplateColumns: "minmax(0,2.3fr) minmax(220px,1fr)",
        gap: tweaks.density === "airy" ? 36 : 24, alignItems: "start",
      }} className="results-grid">
        <div style={{
          background: C.bg, border: `2px solid ${C.ink}`, borderRadius: 4, overflow: "hidden",
        }}>
          <div style={{
            display: "grid", gridTemplateColumns: "70px 1fr 64px 96px", gap: 10,
            padding: "10px 16px 10px 18px", background: C.ink, color: C.cream,
            fontFamily: FONT.body, fontWeight: 600, fontSize: 10, letterSpacing: 1.4,
          }}>
            <span>DATE</span><span>OPPONENT</span>
            <span style={{ textAlign: "center" }}>RESULT</span>
            <span style={{ textAlign: "right" }}>SCORE</span>
          </div>
          {games.map((g, i) => <ResultRow key={g.date + g.opp} g={g} i={i}/>)}
        </div>

        <div style={{ position: "sticky", top: 84 }}>
          <div style={{ background: C.panel, border: `1px solid ${C.hair}`, borderRadius: 8, overflow: "hidden" }}>
            <div style={{
              background: C.pine, color: C.cream, padding: "10px 14px",
              fontFamily: FONT.disp, fontWeight: 700, fontSize: 15, letterSpacing: 0.4,
            }}>Eastern Standings</div>
            {HAWKS.STANDINGS.map((s) => {
              const atl = s.abbr === "ATL";
              return (
                <div key={s.abbr} style={{
                  display: "flex", alignItems: "center", gap: 10, padding: "9px 14px",
                  background: atl ? C.gold : "transparent",
                  borderBottom: `1px solid ${C.hair}66`,
                }}>
                  <span style={{
                    fontFamily: FONT.num, fontWeight: 700, fontSize: 13, width: 18,
                    color: atl ? C.ink : C.taupe, fontVariantNumeric: "tabular-nums",
                  }}>{s.seed}</span>
                  <span style={{
                    flex: 1, fontFamily: FONT.body, fontWeight: atl ? 600 : 400, fontSize: 12.5,
                    color: C.ink, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                  }}>{s.team}</span>
                  <span style={{
                    fontFamily: FONT.num, fontWeight: 700, fontSize: 12, color: atl ? C.ink : C.taupe,
                    fontVariantNumeric: "tabular-nums",
                  }}>{s.record}</span>
                </div>
              );
            })}
          </div>
          <div style={{
            marginTop: 14, padding: "14px 16px", background: C.red, color: C.cream, borderRadius: 8,
          }}>
            <div style={{ fontFamily: FONT.body, fontWeight: 600, fontSize: 10, letterSpacing: 1.6, opacity: 0.85 }}>FINAL · 2025–26</div>
            <div style={{ fontFamily: FONT.num, fontWeight: 700, fontSize: 34, lineHeight: 1, margin: "6px 0 2px" }}>46–36</div>
            <div style={{ fontFamily: FONT.body, fontWeight: 600, fontSize: 12 }}>Southeast Division Champions · 6 seed</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── News view ──────────────────────────────────────────────────
function WireStory({ s, lead }) {
  return (
    <article style={{ breakInside: "avoid", marginBottom: lead ? 0 : 26 }}>
      <div style={{
        fontFamily: FONT.body, fontWeight: 600, fontSize: 10, letterSpacing: 2,
        color: C.red, textTransform: "uppercase", marginBottom: 7,
      }}>{s.kicker}</div>
      <h3 style={{
        fontFamily: FONT.disp, fontWeight: 700, color: C.ink, margin: 0,
        fontSize: lead ? "clamp(30px,3.6vw,46px)" : "clamp(20px,2vw,25px)",
        lineHeight: 1.0, letterSpacing: 0.2, textWrap: "balance",
      }}>{s.headline}</h3>
      <div style={{
        fontFamily: FONT.body, fontWeight: 600, fontSize: 10.5, letterSpacing: 1.4,
        color: C.taupe, margin: "9px 0 10px", textTransform: "uppercase",
      }}>{s.dateline}</div>
      <p style={{
        fontFamily: FONT.body, fontWeight: 400,
        fontSize: lead ? 15.5 : 13.5, lineHeight: 1.62, color: "#4F463B",
        margin: 0, textAlign: "left",
      }}>
        <span style={{
          float: "left", fontFamily: FONT.disp, fontWeight: 700,
          fontSize: lead ? 58 : 40, lineHeight: 0.74,
          color: C.red, marginRight: 8, marginTop: 4,
        }}>{s.body.charAt(0)}</span>
        {s.body.slice(1)}
      </p>
    </article>
  );
}

function NewsView({ tweaks }) {
  const wire = HAWKS.WIRE;
  const [lead, ...rest] = wire;
  const pad = tweaks.density === "airy" ? 30 : 18;
  const today = new Date("2026-05-30T12:00:00").toLocaleDateString("en-US", {
    weekday: "long", month: "long", day: "numeric", year: "numeric",
  });

  return (
    <div style={{ maxWidth: 1180, margin: "0 auto", padding: `${pad + 8}px clamp(20px,5vw,64px) 80px` }}>
      <div style={{
        display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap",
        borderBottom: `3px solid ${C.ink}`, paddingBottom: 16,
      }}>
        <div style={{
          background: C.red, color: C.cream, borderRadius: 12,
          padding: "10px 22px", display: "flex", alignItems: "center", gap: 12, flexShrink: 0,
        }}>
          <HawkMark color={C.cream} style={{ width: 30, height: 30, flexShrink: 0 }}/>
          <span style={{ fontFamily: FONT.disp, fontWeight: 700, fontSize: "clamp(28px,4vw,44px)", letterSpacing: 0.5, lineHeight: 1, whiteSpace: "nowrap" }}>
            Hawks Wire
          </span>
        </div>
        <div style={{ flex: 1, minWidth: 180 }}>
          <div style={{ fontFamily: FONT.body, fontWeight: 600, fontSize: 12, letterSpacing: 1, color: C.ink }}>
            {today}
          </div>
          <div style={{ fontFamily: FONT.body, fontWeight: 400, fontSize: 11.5, color: C.taupe, marginTop: 2 }}>
            Offseason Bulletin · Atlanta, GA · Complimentary
          </div>
        </div>
      </div>

      <div style={{
        marginTop: tweaks.density === "airy" ? 36 : 26,
        display: "grid", gridTemplateColumns: "minmax(0,2.2fr) minmax(230px,1fr)",
        gap: tweaks.density === "airy" ? 44 : 34, alignItems: "start",
      }} className="wire-grid">
        <div>
          <WireStory s={lead} lead/>
          <div style={{ height: 2, background: C.pine, margin: "22px 0", opacity: 0.5 }}/>
          <div style={{ columnWidth: 240, columnGap: 32 }} className="wire-columns">
            {rest.map((s, i) => <WireStory key={i} s={s}/>)}
          </div>
        </div>

        <aside style={{ position: "sticky", top: 84 }}>
          <div style={{
            border: `2px solid ${C.ink}`, borderRadius: 10, overflow: "hidden", background: C.panel,
          }}>
            <div style={{
              background: C.ink, color: C.cream, padding: "11px 16px",
              fontFamily: FONT.disp, fontWeight: 700, fontSize: 16, letterSpacing: 0.4,
            }}>Editor's Bets</div>
            <div style={{ padding: "6px 16px 14px" }}>
              {HAWKS.BETS.map((b, i) => (
                <div key={i} style={{ padding: "12px 0", borderBottom: i < HAWKS.BETS.length - 1 ? `1px solid ${C.hair}` : "none" }}>
                  <div style={{
                    fontFamily: FONT.body, fontWeight: 600, fontSize: 12.5, lineHeight: 1.4,
                    color: C.ink, marginBottom: 8,
                  }}>{b.take}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                    <div style={{ flex: 1, height: 6, background: C.bg, borderRadius: 3, overflow: "hidden", border: `1px solid ${C.hair}` }}>
                      <div style={{ width: `${b.conf}%`, height: "100%", background: C.pine }}/>
                    </div>
                    <span style={{
                      fontFamily: FONT.num, fontWeight: 700, fontSize: 13, color: C.pine,
                      fontVariantNumeric: "tabular-nums", width: 34, textAlign: "right",
                    }}>{b.conf}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            marginTop: 16, border: `1px solid ${C.hair}`, borderRadius: 10, overflow: "hidden", background: C.bg,
          }}>
            <div style={{
              background: C.gold, color: C.ink, padding: "10px 16px",
              fontFamily: FONT.disp, fontWeight: 700, fontSize: 15,
            }}>By the Numbers</div>
            <div style={{ padding: "4px 16px 12px" }}>
              {HAWKS.LEDGER.map((row, i) => (
                <div key={i} style={{ padding: "10px 0", borderBottom: i < HAWKS.LEDGER.length - 1 ? `1px dotted ${C.hair}` : "none" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 10 }}>
                    <span style={{ fontFamily: FONT.body, fontWeight: 600, fontSize: 11, color: C.taupe, letterSpacing: 0.4 }}>{row[0]}</span>
                    <span style={{ fontFamily: FONT.num, fontWeight: 700, fontSize: 14, color: C.red, whiteSpace: "nowrap", fontVariantNumeric: "tabular-nums" }}>{row[1]}</span>
                  </div>
                  <div style={{ fontFamily: FONT.body, fontWeight: 400, fontSize: 10.5, color: C.taupe, marginTop: 2, fontStyle: "italic" }}>{row[2]}</div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

// ─── Draft Watch ────────────────────────────────────────────────
const HEAT = {
  hot:        { c: C.red,   label: "HOT" },
  warm:       { c: C.gold,  label: "WARM" },
  cool:       { c: C.pine,  label: "DARK HORSE" },
  fading:     { c: C.taupe, label: "MAY BE GONE" },
  developing: { c: C.red,   label: "DEVELOPING" },
  live:       { c: C.pine,  label: "LIVE" },
  watch:      { c: C.gold,  label: "WATCH" },
};

function daysBetween(fromISO, toISO) {
  return Math.max(0, Math.round(
    (new Date(toISO + "T12:00:00") - new Date(fromISO + "T12:00:00")) / 86400000
  ));
}

function HeatTag({ heat }) {
  const h = HEAT[heat] || HEAT.watch;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 5,
      fontFamily: FONT.body, fontWeight: 700, fontSize: 9.5, letterSpacing: 1.2,
      textTransform: "uppercase", color: h.c, whiteSpace: "nowrap",
    }}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: h.c, flexShrink: 0 }}/>
      {h.label}
    </span>
  );
}

function DraftView({ tweaks }) {
  const pad = tweaks.density === "airy" ? 30 : 18;
  const d = DRAFT_DATA;
  const days = daysBetween(RAW_ISSUE.date, d.draftDate);
  const gates = KEY_DATES.filter((k) => ["draft", "hield-trig", "kuminga-opt", "fa-open"].includes(k.id));

  return (
    <div style={{ maxWidth: 1180, margin: "0 auto", padding: `${pad + 8}px clamp(20px,5vw,64px) 80px` }}>
      {/* Masthead */}
      <div style={{
        display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap",
        borderBottom: `3px solid ${C.ink}`, paddingBottom: 16,
      }}>
        <div style={{
          background: C.red, color: C.cream, borderRadius: 12,
          padding: "10px 22px", display: "flex", alignItems: "center", gap: 12, flexShrink: 0,
        }}>
          <HawkMark color={C.cream} style={{ width: 30, height: 30, flexShrink: 0 }}/>
          <span style={{ fontFamily: FONT.disp, fontWeight: 700, fontSize: "clamp(28px,4vw,44px)", letterSpacing: 0.5, lineHeight: 1, whiteSpace: "nowrap" }}>
            Draft Watch
          </span>
        </div>
        <div style={{ flex: 1, minWidth: 180 }}>
          <div style={{ fontFamily: FONT.body, fontWeight: 600, fontSize: 12, letterSpacing: 1, color: C.ink }}>
            2026 NBA Draft · June 23-24
          </div>
          <div style={{ fontFamily: FONT.body, fontWeight: 400, fontSize: 11.5, color: C.taupe, marginTop: 2 }}>
            {d.venue} · {d.broadcast}
          </div>
        </div>
        <div style={{
          textAlign: "center", background: C.ink, color: C.cream, borderRadius: 12,
          padding: "8px 20px", flexShrink: 0,
        }}>
          <div style={{ fontFamily: FONT.num, fontWeight: 700, fontSize: 30, lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>{days}</div>
          <div style={{ fontFamily: FONT.body, fontWeight: 600, fontSize: 9.5, letterSpacing: 1.4, textTransform: "uppercase", marginTop: 2 }}>
            {days === 1 ? "Day Out" : "Days Out"}
          </div>
        </div>
      </div>

      {/* Atlanta's picks */}
      <div style={{ marginTop: tweaks.density === "airy" ? 34 : 26 }}>
        <Kicker color={C.pine}>Atlanta's Picks</Kicker>
        <div style={{
          marginTop: 14, display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14,
        }}>
          {d.picks.map((p) => (
            <div key={p.overall} style={{
              border: `2px solid ${C.ink}`, borderRadius: 12, overflow: "hidden", background: C.panel,
              display: "flex", flexDirection: "column",
            }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 10, padding: "14px 16px 8px" }}>
                <span style={{ fontFamily: FONT.num, fontWeight: 700, fontSize: 38, lineHeight: 1, color: C.red, fontVariantNumeric: "tabular-nums" }}>
                  {p.overall}
                </span>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontFamily: FONT.body, fontWeight: 700, fontSize: 11, letterSpacing: 1, textTransform: "uppercase", color: C.ink }}>
                    Round {p.round}
                  </span>
                  <span style={{ fontFamily: FONT.body, fontWeight: 500, fontSize: 10.5, color: C.taupe }}>{p.via}</span>
                </div>
              </div>
              <div style={{
                padding: "8px 16px 14px", borderTop: `1px solid ${C.hair}`,
                fontFamily: FONT.body, fontWeight: 400, fontSize: 12, lineHeight: 1.5, color: C.ink,
              }}>{p.note}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Draft Class · scouting reports + measurables */}
      {Array.isArray(d.draftClass) && d.draftClass.length > 0 && (
        <div style={{ marginTop: tweaks.density === "airy" ? 40 : 32 }}>
          <Kicker color={C.red}>Draft Class · Scouting Reports & Measurables</Kicker>
          <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 16 }}>
            {d.draftClass.map((pl) => {
              const m = pl.measurables || {};
              const tiles = [
                { k: "HT", v: m.heightBarefoot }, { k: "WT", v: m.weight },
                { k: "WING", v: m.wingspan }, { k: "REACH", v: m.standingReach },
                { k: "MAX VERT", v: m.maxVert },
              ].filter((t) => t.v);
              return (
                <div key={pl.overall} style={{
                  border: `2px solid ${C.ink}`, borderRadius: 14, overflow: "hidden", background: C.panel,
                }}>
                  {/* header band */}
                  <div style={{
                    display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap",
                    background: C.ink, color: C.cream, padding: "12px 18px",
                  }}>
                    <span style={{ fontFamily: FONT.num, fontWeight: 700, fontSize: 30, lineHeight: 1, color: C.gold, fontVariantNumeric: "tabular-nums", flexShrink: 0 }}>
                      #{pl.overall}
                    </span>
                    <div style={{ flex: 1, minWidth: 160 }}>
                      <div style={{ fontFamily: FONT.disp, fontWeight: 700, fontSize: 22, lineHeight: 1.05 }}>{pl.name}</div>
                      <div style={{ fontFamily: FONT.body, fontWeight: 500, fontSize: 11, letterSpacing: 0.4, opacity: 0.85, marginTop: 2 }}>
                        {pl.pos} · {pl.school} · {pl.classYr} · Age {pl.age} · R{pl.round} {pl.via}
                      </div>
                    </div>
                    {pl.grade && (
                      <div style={{ textAlign: "center", flexShrink: 0 }}>
                        <div style={{ fontFamily: FONT.num, fontWeight: 700, fontSize: 24, lineHeight: 1, color: C.cream }}>{pl.grade}</div>
                        <div style={{ fontFamily: FONT.body, fontWeight: 600, fontSize: 8, letterSpacing: 1.2, opacity: 0.7 }}>GRADE</div>
                      </div>
                    )}
                  </div>

                  {/* measurables strip */}
                  <div style={{
                    display: "grid", gridTemplateColumns: `repeat(${tiles.length}, 1fr)`,
                    borderBottom: `1px solid ${C.hair}`, background: C.bg,
                  }}>
                    {tiles.map((t, i) => (
                      <div key={t.k} style={{
                        padding: "10px 8px", textAlign: "center",
                        borderRight: i < tiles.length - 1 ? `1px solid ${C.hair}` : "none",
                      }}>
                        <div style={{ fontFamily: FONT.num, fontWeight: 700, fontSize: 15, color: C.ink, fontVariantNumeric: "tabular-nums" }}>{t.v}</div>
                        <div style={{ fontFamily: FONT.body, fontWeight: 600, fontSize: 8.5, letterSpacing: 1, color: C.taupe, marginTop: 2 }}>{t.k}</div>
                      </div>
                    ))}
                  </div>

                  {/* body */}
                  <div style={{ padding: "14px 18px 16px" }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap", marginBottom: 4 }}>
                      <span style={{ fontFamily: FONT.num, fontWeight: 700, fontSize: 13, color: C.red, fontVariantNumeric: "tabular-nums" }}>{pl.statline}</span>
                      {pl.accolade && (
                        <span style={{ fontFamily: FONT.body, fontWeight: 600, fontSize: 10.5, color: C.pine, letterSpacing: 0.3 }}>· {pl.accolade}</span>
                      )}
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "8px 26px", marginTop: 10 }}>
                      <div>
                        <div style={{ fontFamily: FONT.body, fontWeight: 700, fontSize: 9.5, letterSpacing: 1.2, textTransform: "uppercase", color: C.pine, marginBottom: 5 }}>Strengths</div>
                        {pl.strengths.map((s, i) => (
                          <div key={i} style={{ display: "flex", gap: 7, fontFamily: FONT.body, fontSize: 11.5, lineHeight: 1.45, color: C.ink, marginBottom: 4 }}>
                            <span style={{ color: C.pine, fontWeight: 700, flexShrink: 0 }}>+</span><span>{s}</span>
                          </div>
                        ))}
                      </div>
                      <div>
                        <div style={{ fontFamily: FONT.body, fontWeight: 700, fontSize: 9.5, letterSpacing: 1.2, textTransform: "uppercase", color: C.red, marginBottom: 5 }}>Questions</div>
                        {pl.weaknesses.map((w, i) => (
                          <div key={i} style={{ display: "flex", gap: 7, fontFamily: FONT.body, fontSize: 11.5, lineHeight: 1.45, color: C.ink, marginBottom: 4 }}>
                            <span style={{ color: C.red, fontWeight: 700, flexShrink: 0 }}>–</span><span>{w}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div style={{
                      marginTop: 12, paddingTop: 11, borderTop: `1px dotted ${C.hair}`,
                      fontFamily: FONT.body, fontSize: 11.5, lineHeight: 1.5, color: C.ink,
                    }}>
                      <span style={{ fontWeight: 700, color: C.ink }}>Hawks fit: </span>{pl.fit}
                    </div>
                    {pl.sources && (
                      <div style={{ fontFamily: FONT.body, fontWeight: 400, fontSize: 9.5, color: C.taupe, fontStyle: "italic", marginTop: 7 }}>
                        Sources: {pl.sources}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Big board + scenarios */}
      <div style={{
        marginTop: tweaks.density === "airy" ? 40 : 32,
        display: "grid", gridTemplateColumns: "minmax(0,1.9fr) minmax(240px,1fr)",
        gap: tweaks.density === "airy" ? 40 : 30, alignItems: "start",
      }} className="wire-grid">
        {/* Big board */}
        <div>
          <Kicker color={C.red}>Pre-Draft Big Board · How the No. 8 Targets Stacked Up</Kicker>
          <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 14 }}>
            {d.bigBoard.map((pr) => (
              <div key={pr.rank} style={{
                display: "flex", gap: 14, alignItems: "stretch",
                border: `1px solid ${C.hair}`, borderRadius: 12, overflow: "hidden", background: C.cream,
              }}>
                <div style={{
                  flexShrink: 0, width: 52, background: C.ink, color: C.cream,
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                }}>
                  <span style={{ fontFamily: FONT.body, fontWeight: 600, fontSize: 8.5, letterSpacing: 1, opacity: 0.7 }}>RK</span>
                  <span style={{ fontFamily: FONT.num, fontWeight: 700, fontSize: 26, lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>{pr.rank}</span>
                </div>
                <div style={{ flex: 1, padding: "12px 16px 13px", minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
                    <span style={{ fontFamily: FONT.disp, fontWeight: 700, fontSize: 19, color: C.ink, lineHeight: 1.1 }}>{pr.name}</span>
                    <HeatTag heat={pr.heat}/>
                  </div>
                  <div style={{ fontFamily: FONT.body, fontWeight: 600, fontSize: 11, color: C.pine, letterSpacing: 0.4, marginTop: 3 }}>
                    {pr.pos} · {pr.school} · {pr.classYr} · {pr.height} · Age {pr.age} · Mock {pr.mockRange}
                  </div>
                  <div style={{
                    fontFamily: FONT.num, fontWeight: 700, fontSize: 12, color: C.red, marginTop: 7,
                    fontVariantNumeric: "tabular-nums",
                  }}>{pr.statline}</div>
                  <div style={{ fontFamily: FONT.body, fontWeight: 400, fontSize: 12, lineHeight: 1.5, color: C.ink, marginTop: 7 }}>{pr.fit}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scenarios + gates */}
        <aside style={{ position: "sticky", top: 84 }}>
          <div style={{ border: `2px solid ${C.ink}`, borderRadius: 10, overflow: "hidden", background: C.panel }}>
            <div style={{
              background: C.ink, color: C.cream, padding: "11px 16px",
              fontFamily: FONT.disp, fontWeight: 700, fontSize: 16, letterSpacing: 0.4,
            }}>Draft-Night Scenarios</div>
            <div style={{ padding: "4px 16px 12px" }}>
              {d.scenarios.map((s, i) => (
                <div key={i} style={{ padding: "13px 0", borderBottom: i < d.scenarios.length - 1 ? `1px solid ${C.hair}` : "none" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, marginBottom: 6 }}>
                    <span style={{ fontFamily: FONT.disp, fontWeight: 700, fontSize: 14, color: C.ink, lineHeight: 1.15 }}>{s.title}</span>
                    <HeatTag heat={s.heat}/>
                  </div>
                  <div style={{ fontFamily: FONT.body, fontWeight: 400, fontSize: 11.5, lineHeight: 1.5, color: C.ink }}>{s.detail}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 16, border: `1px solid ${C.hair}`, borderRadius: 10, overflow: "hidden", background: C.bg }}>
            <div style={{
              background: C.gold, color: C.ink, padding: "10px 16px",
              fontFamily: FONT.disp, fontWeight: 700, fontSize: 15,
            }}>Offseason Gates</div>
            <div style={{ padding: "4px 16px 12px" }}>
              {gates.map((k, i) => (
                <div key={k.id} style={{ padding: "10px 0", borderBottom: i < gates.length - 1 ? `1px dotted ${C.hair}` : "none" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 10 }}>
                    <span style={{ fontFamily: FONT.body, fontWeight: 700, fontSize: 11.5, color: C.ink, letterSpacing: 0.3 }}>{k.label}</span>
                    <span style={{ fontFamily: FONT.num, fontWeight: 700, fontSize: 12, color: C.red, whiteSpace: "nowrap", fontVariantNumeric: "tabular-nums" }}>
                      {daysBetween(RAW_ISSUE.date, k.date)}d
                    </span>
                  </div>
                  <div style={{ fontFamily: FONT.body, fontWeight: 400, fontSize: 10.5, color: C.taupe, marginTop: 2, fontStyle: "italic" }}>{k.hawksAngle}</div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

// ─── App shell ──────────────────────────────────────────────────
const VIEWS = {
  feature: FeatureView,
  roster: RosterView,
  rotation: RotationView,
  results: ResultsView,
  draft: DraftView,
  news: NewsView,
};

function App() {
  const [tweaks, setTweak] = useTweaks();
  const [view, setView] = useState("feature");
  const Current = VIEWS[view];

  return (
    <div style={{ minHeight: "100vh", background: C.bg }}>
      <Cover tweaks={tweaks}/>

      <nav style={{
        position: "sticky", top: 0, zIndex: 50, background: C.bg,
        borderBottom: `1px solid ${C.hair}`, boxShadow: "0 1px 0 rgba(42,33,26,.04)",
      }}>
        <div style={{
          maxWidth: 1180, margin: "0 auto", padding: "0 clamp(12px,4vw,56px)",
          display: "flex", alignItems: "center", gap: 4, overflowX: "auto",
        }}>
          {TABS.map((tab) => (
            <PennantTab key={tab.id} tab={tab} active={view === tab.id} onClick={() => setView(tab.id)}/>
          ))}
        </div>
      </nav>

      <main key={view} className="hawks-fadein">
        <Current tweaks={tweaks} onNav={setView}/>
      </main>

      <footer style={{
        borderTop: `1px solid ${C.hair}`, padding: "26px clamp(20px,5vw,64px)",
        textAlign: "center", fontFamily: FONT.body, fontWeight: 400, fontSize: 11.5,
        color: C.taupe, letterSpacing: 0.5,
      }}>
        Hawks Tracker · Offseason Program · Atlanta, GA · Data through May 30, 2026
      </footer>

      <TweaksMini tweaks={tweaks} setTweak={setTweak}/>
    </div>
  );
}

export default function HawksTracker() {
  return (
    <>
      <App/>
      <BrandCredit/>
    </>
  );
}
