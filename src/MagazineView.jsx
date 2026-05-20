import { useMemo } from "react";
import {
  PLAYERS,
  NEWS_DIGEST,
  RESULTS,
  EAST_STANDINGS,
  NEXT_GAME,
} from "./playerData.js";
import { C, useIsMobile, Status, SectionHeader } from "./App.jsx";

// ─── Editorial primitives ───────────────────────────────────────
function Rule({ color = C.hair, h = 1, mt = 0, mb = 0 }) {
  return <div style={{ height: h, background: color, marginTop: mt, marginBottom: mb }}/>;
}

function FoliotagLeft({ folio, kicker }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 12,
      fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
      color: C.mute, letterSpacing: 2,
    }}>
      <span style={{ color: C.red, fontWeight: 700 }}>P. {String(folio).padStart(3, "0")}</span>
      <span style={{ flex: 1, height: 1, background: C.hair, maxWidth: 80 }}/>
      <span>{kicker}</span>
    </div>
  );
}

// ─── 01 · COVER ─────────────────────────────────────────────────
function Cover() {
  const m = useIsMobile();
  const star = PLAYERS.find(p => p.id === 1) || PLAYERS[0]; // Jalen Johnson
  const coverLine = "A SEASON CUT SHORT. A FRANCHISE LOOKING UP.";

  return (
    <section style={{
      position: "relative", borderBottom: `1px solid ${C.hair}`,
      background: C.bg, overflow: "hidden",
    }}>
      {/* masthead bar */}
      <div style={{
        padding: m ? "14px 16px" : "20px 40px",
        borderBottom: `1px solid ${C.hair}`,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        gap: 16, flexWrap: "wrap",
      }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
          color: C.mute, letterSpacing: 2.5,
        }}>
          <span style={{ color: C.red }}>●</span> VOL <span style={{ color: C.ivory }}>I</span>
          {" "}· NO <span style={{ color: C.ivory }}>07</span>
          {" "}· MAY <span style={{ color: C.ivory }}>2026</span>
        </div>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
          color: C.mute, letterSpacing: 2.5,
        }}>
          ATLANTA, GA · NEWSSTAND <span style={{ color: C.volt }}>$0.00</span>
        </div>
      </div>

      {/* hero grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: m ? "1fr" : "1.05fr 1fr",
        gap: 0, alignItems: "stretch",
      }}>
        {/* left: title block */}
        <div style={{
          padding: m ? "28px 16px 24px" : "56px 40px 48px",
          borderRight: m ? "none" : `1px solid ${C.hair}`,
          borderBottom: m ? `1px solid ${C.hair}` : "none",
          display: "flex", flexDirection: "column", justifyContent: "space-between",
          minHeight: m ? 0 : 620,
          position: "relative",
        }}>
          <div>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
              color: C.volt, letterSpacing: 3, marginBottom: m ? 18 : 28,
            }}>// THE OFFSEASON ISSUE</div>
            <h1 style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: m ? "clamp(72px, 22vw, 120px)" : "clamp(120px, 14vw, 220px)",
              lineHeight: 0.82, margin: 0, color: C.ivory,
              textTransform: "uppercase", letterSpacing: "-0.035em",
            }}>
              ATL<span style={{ color: C.red }}>/</span>26
            </h1>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: m ? 10 : 12, color: C.mute,
              letterSpacing: 2.5, marginTop: m ? 12 : 18,
            }}>
              A QUARTERLY DOSSIER ON THE ATLANTA HAWKS
            </div>
          </div>

          {/* cover blurb */}
          <div style={{ marginTop: m ? 28 : 56 }}>
            <Rule mb={m ? 18 : 24}/>
            <div style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: m ? "clamp(28px, 8vw, 40px)" : "clamp(36px, 4vw, 60px)",
              color: C.ivory, textTransform: "uppercase",
              lineHeight: 0.95, letterSpacing: "-0.015em",
            }}>
              {coverLine.split(".").map((s, i, arr) => s.trim() && (
                <span key={i}>
                  {s.trim()}
                  {i < arr.length - 2 && <span style={{ color: C.red }}>.</span>}
                  {i < arr.length - 2 && <br/>}
                  {i === arr.length - 2 && <span style={{ color: C.volt }}>.</span>}
                </span>
              ))}
            </div>
            <div style={{
              marginTop: m ? 16 : 22, fontFamily: "Inter, sans-serif",
              fontSize: m ? 13 : 14, color: "#bdbdc2", lineHeight: 1.55,
              maxWidth: 520,
            }}>
              Inside the 46–36 record, the back-to-back MIP, the Game 6 reckoning,
              and a road map written in lottery odds.
            </div>
          </div>
        </div>

        {/* right: cover portrait */}
        <div style={{
          position: "relative", background: C.panel, overflow: "hidden",
          minHeight: m ? 420 : 620,
        }}>
          {/* huge jersey number */}
          <div style={{
            position: "absolute", top: m ? -30 : -60, left: m ? -10 : -30,
            fontFamily: "'Anton', sans-serif",
            fontSize: m ? 360 : 620, lineHeight: 0.78,
            color: C.red, opacity: 0.14, pointerEvents: "none",
            letterSpacing: "-0.05em",
          }}>{String(star.number).padStart(2, "0")}</div>

          {/* film grain */}
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.06,
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.9 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
            zIndex: 2,
          }}/>

          <img src={star.image} alt={star.name} style={{
            position: "absolute", bottom: 0, left: "50%",
            transform: "translateX(-50%)",
            width: m ? "92%" : "88%",
            maxHeight: "100%", objectFit: "contain",
            objectPosition: "center bottom", zIndex: 3,
          }}/>

          {/* photo caption */}
          <div style={{
            position: "absolute", left: m ? 12 : 24, bottom: m ? 12 : 24, zIndex: 5,
            background: "rgba(0,0,0,0.65)", padding: "10px 14px",
            borderLeft: `3px solid ${C.volt}`,
          }}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: 9,
              color: C.volt, letterSpacing: 2,
            }}>// COVER · {star.position} · #{star.number}</div>
            <div style={{
              fontFamily: "'Anton', sans-serif", fontSize: m ? 18 : 22,
              color: C.ivory, textTransform: "uppercase", lineHeight: 1.05,
              letterSpacing: "0.01em", marginTop: 4,
            }}>{star.name}</div>
            <div style={{
              fontFamily: "Inter, sans-serif", fontSize: 11, color: C.mute,
              marginTop: 4, fontStyle: "italic", maxWidth: 220,
            }}>
              22.5 · 10.3 · 7.9 — the youngest in his statistical company.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 02 · CONTENTS ──────────────────────────────────────────────
function Contents() {
  const m = useIsMobile();
  const entries = [
    { p: 4,  k: "FEATURE",   t: "The Long Walk Off State Farm Arena" },
    { p: 8,  k: "PORTFOLIO", t: "The Atl Fifteen, In Five Frames" },
    { p: 12, k: "DATA",      t: "By the Numbers · 2025–26" },
    { p: 14, k: "DISPATCH",  t: "Notes from a Loud Offseason" },
    { p: 16, k: "POSTGAME",  t: "Final Word — The Game 6 Quote Wall" },
    { p: 18, k: "COLOPHON",  t: "Sources, Records, Acknowledgements" },
  ];

  return (
    <section style={{
      padding: m ? "32px 16px" : "56px 40px",
      borderBottom: `1px solid ${C.hair}`, background: C.bg,
    }}>
      <FoliotagLeft folio={2} kicker="CONTENTS · MAY 2026"/>
      <div style={{ marginTop: m ? 18 : 28 }}>
        <h2 style={{
          fontFamily: "'Anton', sans-serif",
          fontSize: m ? "clamp(40px, 12vw, 64px)" : "clamp(48px, 6.5vw, 104px)",
          color: C.ivory, textTransform: "uppercase",
          lineHeight: 0.85, margin: 0, letterSpacing: "-0.018em",
        }}>INSIDE THIS<br/>ISSUE<span style={{ color: C.volt }}>.</span></h2>
      </div>

      <div style={{
        marginTop: m ? 24 : 40, display: "grid",
        gridTemplateColumns: m ? "1fr" : "1.4fr 1fr",
        gap: m ? 28 : 56,
      }}>
        {/* TOC list */}
        <div>
          {entries.map((e, i) => (
            <div key={e.p} style={{
              display: "grid", gridTemplateColumns: "auto 1fr auto",
              alignItems: "baseline", gap: 14,
              padding: "16px 0",
              borderTop: i === 0 ? `1px solid ${C.hair}` : "none",
              borderBottom: `1px solid ${C.hair}`,
            }}>
              <span style={{
                fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
                color: C.volt, letterSpacing: 2, width: 80,
              }}>// {e.k}</span>
              <span style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: m ? 22 : 28, color: C.ivory,
                textTransform: "uppercase", letterSpacing: "-0.005em",
                lineHeight: 1.1,
              }}>{e.t}</span>
              <span style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: m ? 26 : 38, color: C.red,
                fontVariantNumeric: "tabular-nums", lineHeight: 1,
              }}>{String(e.p).padStart(2, "0")}</span>
            </div>
          ))}
        </div>

        {/* editor's letter */}
        <aside style={{
          padding: m ? "20px 18px" : "28px 28px",
          background: C.panel, border: `1px solid ${C.hair}`,
          position: "relative",
        }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
            color: C.red, letterSpacing: 2.5, marginBottom: 14,
          }}>// EDITOR'S LETTER</div>
          <div style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: m ? 24 : 30, color: C.ivory,
            textTransform: "uppercase", lineHeight: 0.95,
            letterSpacing: "-0.005em",
          }}>The work doesn't end at 89.</div>
          <p style={{
            marginTop: 16, fontFamily: "Inter, sans-serif",
            fontSize: 13, color: "#c5c5cc", lineHeight: 1.65,
          }}>
            Forty-six wins. A Southeast banner. Back-to-back Most Improved
            Players. And then — eighty-nine. The final score of the worst
            night, set against the franchise's loudest spring in a decade.
            This issue holds both at once.
          </p>
          <div style={{
            marginTop: 16, fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10, color: C.volt, letterSpacing: 2,
          }}>— THE EDITORS</div>
        </aside>
      </div>
    </section>
  );
}

// ─── 03 · FEATURE ───────────────────────────────────────────────
function Feature() {
  const m = useIsMobile();
  const lead = NEWS_DIGEST.keyTopics[0] || {
    title: "A Season That Ended at 89",
    detail: "",
  };
  // strip trailing parenthetical source from lead.detail for body
  const body = (lead.detail || "").replace(/^[^A-Z]*/, "").trim();
  const first = body.charAt(0) || "T";
  const rest = body.slice(1);

  return (
    <section style={{
      padding: m ? "32px 16px" : "56px 40px",
      borderBottom: `1px solid ${C.hair}`, background: C.bg,
    }}>
      <FoliotagLeft folio={4} kicker="FEATURE · 4,200 WORDS"/>
      <div style={{ marginTop: m ? 18 : 28 }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
          color: C.red, letterSpacing: 3, marginBottom: 14,
        }}>// THE LONG WALK</div>
        <h2 style={{
          fontFamily: "'Anton', sans-serif",
          fontSize: m ? "clamp(40px, 12vw, 56px)" : "clamp(56px, 7vw, 124px)",
          color: C.ivory, textTransform: "uppercase",
          lineHeight: 0.85, margin: 0, letterSpacing: "-0.022em",
          maxWidth: 1100,
        }}>{lead.title}</h2>
        <div style={{
          marginTop: m ? 14 : 20, fontFamily: "Inter, sans-serif",
          fontSize: m ? 13 : 15, color: "#a8a8b0", maxWidth: 720,
          lineHeight: 1.55, fontStyle: "italic",
        }}>
          The 51-point Game 6 closeout did more than end a series. It set
          the terms for the offseason that followed.
        </div>
        <div style={{
          marginTop: m ? 16 : 22, display: "flex", gap: 14,
          fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
          color: C.mute, letterSpacing: 2, flexWrap: "wrap",
        }}>
          <span>BY <span style={{ color: C.ivory }}>THE EDITORS</span></span>
          <span>·</span>
          <span>ATLANTA, GA</span>
          <span>·</span>
          <span>MAY 20 · 2026</span>
          <span>·</span>
          <span style={{ color: C.volt }}>{(lead.category || "FEATURE").toUpperCase()}</span>
        </div>
      </div>

      <Rule mt={m ? 24 : 36}/>

      {/* article body — 2-col on desktop */}
      <div style={{
        marginTop: m ? 24 : 36,
        columnCount: m ? 1 : 2,
        columnGap: 40,
        fontFamily: "Inter, sans-serif",
        fontSize: m ? 14 : 15, color: "#c5c5cc",
        lineHeight: 1.7,
      }}>
        <p style={{ margin: 0 }}>
          <span style={{
            float: "left",
            fontFamily: "'Anton', sans-serif",
            fontSize: m ? 80 : 110, lineHeight: 0.82,
            color: C.red, marginRight: 12, marginTop: 4,
            letterSpacing: "-0.02em",
          }}>{first}</span>
          {rest}
        </p>
      </div>

      {/* pull quote */}
      <div style={{
        marginTop: m ? 32 : 48, padding: m ? "24px 0" : "32px 0",
        borderTop: `2px solid ${C.red}`, borderBottom: `2px solid ${C.red}`,
        display: "grid",
        gridTemplateColumns: m ? "1fr" : "1fr 1.5fr",
        gap: m ? 16 : 40, alignItems: "center",
      }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
          color: C.red, letterSpacing: 2.5,
        }}>// PULL QUOTE · POSTGAME</div>
        <blockquote style={{
          margin: 0, fontFamily: "'Anton', sans-serif",
          fontSize: m ? "clamp(28px, 8vw, 38px)" : "clamp(36px, 4vw, 56px)",
          color: C.ivory, textTransform: "uppercase",
          lineHeight: 0.95, letterSpacing: "-0.01em",
        }}>
          "I don't really have any words for that.
          {" "}<span style={{ color: C.red }}>Obviously, it sucks.</span>"
          <div style={{
            marginTop: 14, fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11, color: C.mute, letterSpacing: 2,
            textTransform: "uppercase",
          }}>— Jalen Johnson · Game 6 · April 30</div>
        </blockquote>
      </div>
    </section>
  );
}

// ─── 04 · PORTFOLIO ─────────────────────────────────────────────
function Portfolio() {
  const m = useIsMobile();
  // top 5 by minutes
  const picks = useMemo(
    () => [...PLAYERS].sort((a, b) => b.minutesPerGame - a.minutesPerGame).slice(0, 5),
    []
  );
  const captions = {
    1: "The franchise cornerstone, locked through 2029–30.",
    2: "Australia's defensive engine — Luka-2022 numbers through four.",
    3: "Back-to-back MIPs. 251 threes. A record erased.",
    4: "Forty-one games in red, white and Volkswagen blue.",
    5: "Anchor in the paint. Anchor in the salary cap.",
  };

  return (
    <section style={{
      padding: m ? "32px 16px" : "56px 40px",
      borderBottom: `1px solid ${C.hair}`, background: C.panel,
    }}>
      <FoliotagLeft folio={8} kicker="PORTFOLIO · IN FIVE FRAMES"/>
      <div style={{ marginTop: m ? 18 : 28 }}>
        <h2 style={{
          fontFamily: "'Anton', sans-serif",
          fontSize: m ? "clamp(38px, 11vw, 56px)" : "clamp(56px, 6.5vw, 108px)",
          color: C.ivory, textTransform: "uppercase",
          lineHeight: 0.85, margin: 0, letterSpacing: "-0.02em",
        }}>The Atl Fifteen<span style={{ color: C.red }}>,</span><br/>
          <span style={{ color: C.mute }}>In Five Frames.</span></h2>
        <div style={{
          marginTop: m ? 14 : 20, fontFamily: "Inter, sans-serif",
          fontSize: m ? 13 : 14, color: "#a8a8b0",
          maxWidth: 640, lineHeight: 1.55, fontStyle: "italic",
        }}>
          A portrait series of the minutes leaders — ordered by floor time,
          framed by the numbers they leave on the floor.
        </div>
      </div>

      <div style={{
        marginTop: m ? 24 : 40,
        display: "grid",
        gridTemplateColumns: m ? "1fr" : "2fr 1fr 1fr",
        gridTemplateRows: m ? "auto" : "auto auto",
        gap: 1, background: C.hair, border: `1px solid ${C.hair}`,
      }}>
        {picks.map((p, i) => {
          // first portrait spans 2 rows on desktop
          const isLead = i === 0;
          return (
            <figure key={p.id} style={{
              margin: 0, background: C.bg, position: "relative",
              overflow: "hidden",
              gridRow: !m && isLead ? "span 2" : "auto",
              minHeight: m ? 320 : isLead ? 520 : 260,
              display: "flex", flexDirection: "column",
            }}>
              {/* portrait area */}
              <div style={{ position: "relative", flex: 1, overflow: "hidden", background: C.panel }}>
                <div style={{
                  position: "absolute", bottom: -20, right: -10,
                  fontFamily: "'Anton', sans-serif",
                  fontSize: isLead ? (m ? 260 : 420) : 180, lineHeight: 0.78,
                  color: "#1c1c20", letterSpacing: "-0.04em",
                  pointerEvents: "none",
                }}>{String(p.number).padStart(2, "0")}</div>
                <img src={p.image} alt={p.name} style={{
                  position: "absolute", bottom: 0, left: "50%",
                  transform: "translateX(-50%)",
                  height: "100%", objectFit: "contain",
                  objectPosition: "center bottom",
                }}/>
                {/* corner kicker */}
                <div style={{
                  position: "absolute", top: 10, left: 10, zIndex: 5,
                  fontFamily: "'JetBrains Mono', monospace", fontSize: 9,
                  color: C.volt, letterSpacing: 2,
                }}>// FRAME {String(i + 1).padStart(2, "0")}</div>
                <div style={{
                  position: "absolute", top: 10, right: 10, zIndex: 5,
                }}><Status s={p.status}/></div>
              </div>
              <figcaption style={{
                padding: m ? "14px 14px 16px" : isLead ? "20px 22px 22px" : "14px 16px 16px",
                borderTop: `1px solid ${C.hair}`,
                background: C.bg,
              }}>
                <div style={{
                  fontFamily: "'Anton', sans-serif",
                  fontSize: isLead ? (m ? 26 : 36) : (m ? 20 : 22),
                  color: C.ivory, textTransform: "uppercase",
                  lineHeight: 1, letterSpacing: "-0.005em",
                }}>{p.name}</div>
                <div style={{
                  marginTop: 6, fontFamily: "'JetBrains Mono', monospace",
                  fontSize: isLead ? 11 : 10, color: C.volt, letterSpacing: 1.8,
                  fontVariantNumeric: "tabular-nums",
                }}>
                  {p.pointsPerGame.toFixed(1)} <span style={{ color: C.mute }}>PPG</span>
                  {"  "}/ {p.reboundsPerGame.toFixed(1)} <span style={{ color: C.mute }}>RPG</span>
                  {"  "}/ {p.assistsPerGame.toFixed(1)} <span style={{ color: C.mute }}>APG</span>
                </div>
                <div style={{
                  marginTop: 8, fontFamily: "Inter, sans-serif",
                  fontSize: isLead ? (m ? 12 : 13) : 11.5,
                  color: "#a8a8b0", lineHeight: 1.5,
                  fontStyle: "italic",
                }}>{captions[p.id] || `${p.position} · ${p.minutesPerGame.toFixed(1)} MPG · ${p.gamesPlayed} GP.`}</div>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}

// ─── 05 · BY THE NUMBERS ────────────────────────────────────────
function ByTheNumbers() {
  const m = useIsMobile();
  const reg = RESULTS.filter(r => r.competition !== "PLAYOFFS");
  const wins = reg.filter(r => r.result === "W").length;
  const losses = reg.filter(r => r.result === "L").length;
  const myEast = EAST_STANDINGS.find(s => s.team === "Atlanta Hawks");

  const big = [
    { k: "RECORD",     v: `${wins}–${losses}` , tone: "ivory" },
    { k: "SEED · E",   v: myEast ? String(myEast.seed) : "6", tone: "red" },
    { k: "MIPs",       v: "2", tone: "volt", sub: "back to back" },
  ];

  const ledger = [
    ["MOST 3PM, SEASON",      "251 · Alexander-Walker",  "franchise record"],
    ["OFFENSIVE RATING",      "118.4",                    "7th league-wide"],
    ["DEFENSIVE RATING",      "114.2",                    "14th"],
    ["PACE",                  "99.8",                     "12th"],
    ["3-POINT %",             "38.1%",                    "3rd"],
    ["JJ STAT LINE",          "22.5 / 10.3 / 7.9",        "5th ever 22-10-7"],
    ["R1 SCORING DIFF",       "−15.3",                    "four losses by 16+"],
    ["GAME 6 MARGIN",         "−51",                      "T-6th largest in NBA history"],
    ["HALFTIME DEFICIT, G6",  "−47",                      "largest in playoff history"],
    ["LOTTERY ODDS, TOP-4",   "40.2%",                    "swap-favored of NOP/MIL"],
    ["DAYS TO DRAFT",         "34",                       "June 23, 2026"],
    ["DAYS TO FA OPEN",       "42",                       "June 30, 6 PM ET"],
  ];

  return (
    <section style={{
      padding: m ? "32px 16px" : "56px 40px",
      borderBottom: `1px solid ${C.hair}`, background: C.bg,
    }}>
      <FoliotagLeft folio={12} kicker="DATA · 2025–26 IN NUMBERS"/>
      <div style={{ marginTop: m ? 18 : 28 }}>
        <h2 style={{
          fontFamily: "'Anton', sans-serif",
          fontSize: m ? "clamp(40px, 12vw, 60px)" : "clamp(56px, 7vw, 120px)",
          color: C.ivory, textTransform: "uppercase",
          lineHeight: 0.85, margin: 0, letterSpacing: "-0.02em",
        }}>By the<br/>Numbers<span style={{ color: C.volt }}>.</span></h2>
      </div>

      {/* hero numbers */}
      <div style={{
        marginTop: m ? 24 : 40,
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
                fontSize: m ? "clamp(44px, 13vw, 68px)" : "clamp(80px, 9vw, 148px)",
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

      {/* ledger table */}
      <div style={{
        marginTop: m ? 24 : 40, border: `1px solid ${C.hair}`,
      }}>
        <div style={{
          display: "grid", gridTemplateColumns: m ? "1.2fr 1fr" : "1.4fr 1fr 1fr",
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
            display: "grid", gridTemplateColumns: m ? "1.2fr 1fr" : "1.4fr 1fr 1fr",
            padding: "14px 14px",
            borderBottom: i < ledger.length - 1 ? `1px solid ${C.hair}` : "none",
            alignItems: "baseline",
            background: i % 2 === 0 ? "transparent" : `${C.panel}80`,
          }}>
            <span style={{
              fontFamily: "Inter, sans-serif", fontSize: 13, color: C.ivory,
              fontWeight: 600,
            }}>{row[0]}</span>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: m ? 13 : 14, color: C.volt, textAlign: "right",
              fontVariantNumeric: "tabular-nums",
            }}>{row[1]}</span>
            {!m && (
              <span style={{
                fontFamily: "Inter, sans-serif", fontSize: 12, color: C.mute,
                textAlign: "right", fontStyle: "italic",
              }}>{row[2]}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── 06 · DISPATCH ──────────────────────────────────────────────
function Dispatch() {
  const m = useIsMobile();
  const items = NEWS_DIGEST.keyTopics.slice(1, 7);
  return (
    <section style={{
      padding: m ? "32px 16px" : "56px 40px",
      borderBottom: `1px solid ${C.hair}`, background: C.panel,
    }}>
      <FoliotagLeft folio={14} kicker="DISPATCH · OFFSEASON"/>
      <div style={{ marginTop: m ? 18 : 28 }}>
        <h2 style={{
          fontFamily: "'Anton', sans-serif",
          fontSize: m ? "clamp(40px, 11vw, 56px)" : "clamp(56px, 6.5vw, 108px)",
          color: C.ivory, textTransform: "uppercase",
          lineHeight: 0.85, margin: 0, letterSpacing: "-0.02em",
        }}>Notes from a<br/>
          <span style={{ color: C.red }}>Loud</span> Offseason<span style={{ color: C.red }}>.</span></h2>
      </div>

      <div style={{
        marginTop: m ? 24 : 40,
        columnCount: m ? 1 : 2,
        columnGap: 40, columnRule: `1px solid ${C.hair}`,
      }}>
        {items.map((it, i) => (
          <article key={i} style={{
            breakInside: "avoid", marginBottom: 28,
            paddingBottom: 28, borderBottom: `1px solid ${C.hair}`,
          }}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
              color: C.volt, letterSpacing: 2, marginBottom: 10,
            }}>// {(it.category || "GENERAL").toUpperCase()} · NO. {String(i + 1).padStart(2, "0")}</div>
            <h3 style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: m ? 22 : 28, color: C.ivory,
              textTransform: "uppercase", lineHeight: 1, letterSpacing: "-0.005em",
              margin: 0,
            }}>{it.title}</h3>
            <p style={{
              marginTop: 12, fontFamily: "Inter, sans-serif",
              fontSize: m ? 13 : 13.5, color: "#bdbdc2", lineHeight: 1.65,
            }}>{(it.detail || "").slice(0, 340)}{(it.detail || "").length > 340 ? "…" : ""}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

// ─── 07 · QUOTE WALL ────────────────────────────────────────────
function QuoteWall() {
  const m = useIsMobile();
  const quotes = [
    {
      q: "We're not one player away from this.",
      who: "Onsi Saleh", role: "GM · Exit Interview", color: C.volt,
    },
    {
      q: "We didn't have an answer for that tonight.",
      who: "Quin Snyder", role: "Head Coach · Game 6", color: C.red,
    },
    {
      q: "That's the goal. That's what we're trying to stamp here as a group.",
      who: "Jonathan Kuminga", role: "F · The Stein Line", color: C.ivory,
    },
    {
      q: "He has been an unbelievable partner in all of this.",
      who: "Onsi Saleh", role: "GM, on Quin Snyder", color: C.volt,
    },
  ];
  return (
    <section style={{
      padding: m ? "32px 16px" : "56px 40px",
      borderBottom: `1px solid ${C.hair}`, background: C.bg,
    }}>
      <FoliotagLeft folio={16} kicker="POSTGAME · QUOTE WALL"/>
      <div style={{ marginTop: m ? 18 : 28 }}>
        <h2 style={{
          fontFamily: "'Anton', sans-serif",
          fontSize: m ? "clamp(40px, 12vw, 56px)" : "clamp(56px, 7vw, 116px)",
          color: C.ivory, textTransform: "uppercase",
          lineHeight: 0.85, margin: 0, letterSpacing: "-0.022em",
        }}>Final<br/>Word<span style={{ color: C.red }}>.</span></h2>
      </div>

      <div style={{
        marginTop: m ? 24 : 40,
        display: "grid",
        gridTemplateColumns: m ? "1fr" : "repeat(2, 1fr)",
        gap: 1, background: C.hair, border: `1px solid ${C.hair}`,
      }}>
        {quotes.map((q, i) => (
          <div key={i} style={{
            padding: m ? "24px 18px" : "36px 32px", background: C.panel,
            position: "relative", minHeight: m ? 220 : 280,
            display: "flex", flexDirection: "column", justifyContent: "space-between",
          }}>
            <div style={{
              position: "absolute", top: m ? 8 : 14, right: m ? 12 : 22,
              fontFamily: "'Anton', sans-serif",
              fontSize: m ? 80 : 140, lineHeight: 0.7,
              color: q.color, opacity: 0.18, pointerEvents: "none",
              letterSpacing: "-0.05em",
            }}>"</div>
            <blockquote style={{
              margin: 0, position: "relative", zIndex: 2,
              fontFamily: "'Anton', sans-serif",
              fontSize: m ? "clamp(22px, 6.5vw, 28px)" : "clamp(26px, 2.8vw, 36px)",
              color: C.ivory, textTransform: "uppercase",
              lineHeight: 1.05, letterSpacing: "-0.005em",
            }}>{q.q}</blockquote>
            <div style={{ marginTop: m ? 18 : 24, position: "relative", zIndex: 2 }}>
              <div style={{
                fontFamily: "Inter, sans-serif", fontSize: 13,
                color: q.color, fontWeight: 700,
              }}>— {q.who}</div>
              <div style={{
                marginTop: 4, fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10, color: C.mute, letterSpacing: 2,
              }}>{q.role.toUpperCase()}</div>
            </div>
            <div style={{
              position: "absolute", left: 0, right: 0, bottom: 0,
              height: 3, background: q.color,
            }}/>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── 08 · COLOPHON ──────────────────────────────────────────────
function Colophon() {
  const m = useIsMobile();
  const sources = (NEWS_DIGEST.sources || []).slice(0, 18);
  return (
    <section style={{
      padding: m ? "32px 16px 48px" : "56px 40px 72px",
      background: C.bg,
    }}>
      <FoliotagLeft folio={18} kicker="COLOPHON · CREDITS"/>
      <div style={{
        marginTop: m ? 18 : 28,
        display: "grid",
        gridTemplateColumns: m ? "1fr" : "1.4fr 1fr",
        gap: m ? 28 : 56,
      }}>
        <div>
          <h2 style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: m ? "clamp(40px, 11vw, 56px)" : "clamp(56px, 6vw, 100px)",
            color: C.ivory, textTransform: "uppercase",
            lineHeight: 0.85, margin: 0, letterSpacing: "-0.02em",
          }}>True to ATL<span style={{ color: C.red }}>.</span></h2>
          <p style={{
            marginTop: m ? 16 : 22, fontFamily: "Inter, sans-serif",
            fontSize: m ? 13 : 14, color: "#a8a8b0", lineHeight: 1.65,
            maxWidth: 560,
          }}>
            ATL/26 is set in <span style={{ color: C.ivory }}>Anton</span> for
            display, <span style={{ color: C.ivory }}>Inter</span> for body, and
            {" "}<span style={{ color: C.ivory }}>JetBrains Mono</span> for the
            ledger marks and folios. Printed on a black field with ivory ink,
            with red and volt for the urgent and the unexpected. Next issue:
            after the lottery.
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
              <div>VOL I · ISSUE 07</div>
              <div>MAY 2026 · OFFSEASON</div>
            </div>
            <div>
              <div style={{ color: C.volt, marginBottom: 4 }}>// NEXT</div>
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
          <div style={{
            display: "flex", flexWrap: "wrap", gap: 6,
          }}>
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

      {/* End mark */}
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

// ─── Magazine view root ─────────────────────────────────────────
export default function MagazineView() {
  return (
    <>
      <Cover/>
      <Contents/>
      <Feature/>
      <Portfolio/>
      <ByTheNumbers/>
      <Dispatch/>
      <QuoteWall/>
      <Colophon/>
    </>
  );
}
