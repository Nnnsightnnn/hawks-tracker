import { PLAYERS } from "./playerData.js";
import { C, Status, SectionHeader, useIsMobile } from "./App.jsx";

export default function RotationView({ onPlayer }) {
  const m = useIsMobile();
  const starters = PLAYERS.filter(p => p.playoffStarter);
  const bench = PLAYERS.filter(p => !p.playoffStarter && p.status !== "out");
  const out = PLAYERS.filter(p => p.status === "out");

  return (
    <section style={{ padding: m ? "32px 16px" : "56px 40px", borderBottom: `1px solid ${C.hair}` }}>
      <SectionHeader
        kicker="ROTATION · R1 · 2025–26"
        title={<>STARTING<br/>FIVE<span style={{ color: C.volt }}>.</span></>}
      />

      <div style={{
        marginTop: m ? 20 : 32, display: "grid",
        gridTemplateColumns: m ? "repeat(2, 1fr)" : "repeat(5, 1fr)",
        gap: 1, background: C.hair, border: `1px solid ${C.hair}`,
      }}>
        {starters.map((p, i) => {
          const po = p.playoffStats;
          const mpg = po?.minutesPerGame ?? p.minutesPerGame;
          const ppg = po?.pointsPerGame ?? p.pointsPerGame;
          const stripH = m ? 64 : 88;
          const surnames = p.name.split(" ");
          const last = surnames.slice(1).join(" ") || surnames[0];
          return (
            <div
              key={p.id}
              onClick={() => onPlayer(p.id)}
              style={{
                background: C.panel, position: "relative", overflow: "hidden",
                cursor: "pointer", aspectRatio: m ? "0.85/1" : "0.7/1",
              }}
            >
              {/* big index watermark */}
              <div style={{
                position: "absolute", bottom: m ? -16 : -30, left: m ? -6 : -12,
                fontFamily: "'Anton', sans-serif", fontSize: m ? 150 : 280, lineHeight: 0.8,
                color: "#1c1c20", pointerEvents: "none", zIndex: 1,
              }}>{i + 1}</div>

              <div style={{
                position: "absolute", top: m ? 8 : 14, right: m ? 8 : 14, zIndex: 3,
                fontFamily: "'Anton', sans-serif", fontSize: m ? 24 : 38, color: C.red, lineHeight: 1,
              }}>#{p.number}</div>

              <div style={{
                position: "absolute", left: 0, right: 0, top: 0, bottom: stripH,
                display: "flex", alignItems: "flex-end", justifyContent: "center",
                zIndex: 2, overflow: "hidden",
              }}>
                <img
                  src={p.image}
                  alt={p.name}
                  style={{
                    width: "108%", height: "100%", objectFit: "contain",
                    objectPosition: "center bottom",
                  }}
                  onError={(e) => { e.target.style.opacity = 0.15; }}
                />
              </div>

              <div style={{
                position: "absolute", left: 0, right: 0, bottom: 0, zIndex: 4,
                background: "#000", borderTop: `1px solid ${C.hair}`,
                padding: m ? "8px 10px" : "12px 14px",
              }}>
                <div style={{
                  fontFamily: "'Anton', sans-serif", fontSize: m ? 15 : 20, color: C.ivory,
                  textTransform: "uppercase", lineHeight: 0.95, letterSpacing: "0.01em",
                  whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                }}>{m ? last.toUpperCase() : p.name}</div>
                <div style={{
                  display: "flex", justifyContent: "space-between", marginTop: m ? 6 : 10,
                  fontFamily: "'JetBrains Mono', monospace", fontSize: m ? 9 : 10,
                  color: C.mute, letterSpacing: m ? 1 : 1.4,
                }}>
                  {!m && <span>{p.position}</span>}
                  <span style={{ color: C.volt }}>{mpg.toFixed(1)} MPG</span>
                  <span style={{ color: C.ivory }}>{ppg.toFixed(1)} PPG</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bench rail */}
      <div style={{ marginTop: 24 }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
          color: C.volt, letterSpacing: 2.5, marginBottom: 12,
        }}>// BENCH · {bench.length} ACTIVE</div>
        <div style={{
          display: "grid",
          gridTemplateColumns: m
            ? "repeat(2, 1fr)"
            : `repeat(${Math.max(bench.length, 1)}, 1fr)`,
          gap: 1, background: C.hair, border: `1px solid ${C.hair}`,
        }}>
          {bench.map(p => (
            <div
              key={p.id}
              onClick={() => onPlayer(p.id)}
              style={{
                background: C.panel, padding: "12px 10px", cursor: "pointer",
                display: "flex", flexDirection: "column", gap: 4,
              }}
            >
              <div style={{
                display: "flex", justifyContent: "space-between", alignItems: "baseline",
              }}>
                <span style={{
                  fontFamily: "'Anton', sans-serif", fontSize: 24, color: C.red, lineHeight: 1,
                }}>#{p.number}</span>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace", fontSize: 9,
                  color: C.mute, letterSpacing: 1.5,
                }}>{p.position}</span>
              </div>
              <div style={{
                fontFamily: "'Anton', sans-serif", fontSize: m ? 13 : 14, color: C.ivory,
                textTransform: "uppercase", letterSpacing: "0.02em", lineHeight: 1.05,
                whiteSpace: m ? "nowrap" : "normal", overflow: "hidden", textOverflow: "ellipsis",
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

      {/* Unavailable */}
      {out.length > 0 && (
        <div style={{ marginTop: 20 }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
            color: C.red, letterSpacing: 2.5, marginBottom: 12,
          }}>// UNAVAILABLE</div>
          {out.map(p => (
            <div key={p.id} style={{
              border: `1px solid ${C.hair}`, borderLeft: `3px solid ${C.red}`,
              padding: "14px 16px", display: "grid",
              gridTemplateColumns: "60px 1fr auto", gap: 14, alignItems: "center",
            }}>
              <span style={{
                fontFamily: "'Anton', sans-serif", fontSize: 32, color: C.red, lineHeight: 1,
              }}>#{p.number}</span>
              <div>
                <div style={{
                  fontFamily: "'Anton', sans-serif", fontSize: 22, color: C.ivory,
                  textTransform: "uppercase", letterSpacing: "0.02em",
                }}>{p.name}</div>
                <div style={{
                  fontSize: 11, color: C.mute, marginTop: 4, fontFamily: "Inter,sans-serif",
                }}>{p.injuryNote}</div>
              </div>
              <Status s={p.status}/>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
