import { useMemo, useState } from "react";

// ─── Atlanta Hawks Rotation View ────────────────────────────────────────────
// Replaces Liverpool's pitch-formation LineupView. Organizes roster by position
// group: Starters (top 5 by gamesStarted) / Bench (next tier by minutes) / Out.

const HAWKS_RED = "#E03A3E";
const HAWKS_VOLT = "#C1D32F";

const POS_COLORS = {
  PG: "#3498db",
  SG: "#2ecc71",
  SF: "#f1c40f",
  PF: "#e67e22",
  C: "#e74c3c",
};
const POS_ORDER = ["PG", "SG", "SF", "PF", "C"];

function formColor(form) {
  if (form >= 8.0) return "#28a745";
  if (form >= 7.5) return "#5cb85c";
  if (form >= 7.0) return "#ffc107";
  if (form >= 6.5) return "#fd7e14";
  return "#dc3545";
}

function isAvailable(status) {
  return status === "active" || status === "day-to-day" || status === "questionable";
}

function PlayerRow({ player, isStarter, onClick }) {
  const [imgFailed, setImgFailed] = useState(false);
  const accent = POS_COLORS[player.position] || "#888";
  const initials = player.name.split(" ").map((w) => w[0]).join("").slice(0, 2);
  const fc = formColor(player.form);
  const available = isAvailable(player.status);

  return (
    <div onClick={onClick} style={{
      display: "flex", alignItems: "center", gap: 12,
      background: isStarter ? "#252530" : "#1e1e28",
      borderRadius: 10, padding: "10px 12px",
      borderLeft: `3px solid ${isStarter ? HAWKS_RED : accent}`,
      cursor: "pointer", transition: "background 0.15s",
    }}>
      {/* Avatar */}
      <div style={{ position: "relative", width: 44, height: 44, flexShrink: 0 }}>
        <div style={{
          width: 44, height: 44, borderRadius: "50%", overflow: "hidden",
          border: `2px solid ${available ? accent : "#dc3545"}`,
          background: "#2a2a3a",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          {!imgFailed ? (
            <img
              src={player.image}
              alt={player.name}
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
              onError={() => setImgFailed(true)}
            />
          ) : (
            <div style={{
              width: "100%", height: "100%",
              background: `linear-gradient(135deg, ${accent}55, ${HAWKS_RED}88)`,
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#fff", fontWeight: 800, fontSize: 13,
            }}>
              {initials}
            </div>
          )}
        </div>
      </div>
      {/* Name + pos */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
          <span style={{ color: HAWKS_RED, fontWeight: 800, fontSize: 11 }}>#{player.number}</span>
          <span style={{ color: "#fff", fontWeight: 700, fontSize: 13, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {player.name}
          </span>
          <span style={{
            background: accent, color: "#fff", fontSize: 9,
            padding: "1px 6px", borderRadius: 8, fontWeight: 700, letterSpacing: 1,
          }}>
            {player.position}
          </span>
        </div>
        <div style={{ fontSize: 10, color: "#888", marginTop: 2 }}>
          {player.pointsPerGame.toFixed(1)} PPG · {player.reboundsPerGame.toFixed(1)} RPG · {player.assistsPerGame.toFixed(1)} APG
        </div>
      </div>
      {/* Minutes */}
      <div style={{ textAlign: "right", flexShrink: 0 }}>
        <div style={{ color: HAWKS_VOLT, fontWeight: 800, fontSize: 16, lineHeight: 1 }}>
          {player.minutesPerGame.toFixed(1)}
        </div>
        <div style={{ color: "#666", fontSize: 9, textTransform: "uppercase", letterSpacing: 0.5 }}>MPG</div>
      </div>
      {/* Form / status */}
      {available ? (
        <div style={{
          width: 32, height: 32, borderRadius: "50%", background: fc,
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "#fff", fontWeight: 700, fontSize: 11, flexShrink: 0,
          boxShadow: `0 0 6px ${fc}55`,
        }}>
          {player.form.toFixed(1)}
        </div>
      ) : (
        <div style={{
          fontSize: 9, color: "#ff6b6b", fontWeight: 700, textAlign: "center",
          background: "#dc354515", padding: "3px 7px", borderRadius: 6,
          border: "1px solid #dc354533", lineHeight: 1.2, flexShrink: 0,
          textTransform: "uppercase", letterSpacing: 0.5,
        }}>
          {player.status === "out" ? "OUT" : player.status === "doubtful" ? "DBT" : "SUS"}
        </div>
      )}
    </div>
  );
}

function GroupHeader({ label, count, color }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 10, marginBottom: 10,
    }}>
      <span style={{
        width: 6, height: 18, background: color, borderRadius: 3, flexShrink: 0,
      }} />
      <span style={{
        fontSize: 11, color, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5,
      }}>
        {label}
      </span>
      <span style={{ fontSize: 10, color: "#666", fontWeight: 600 }}>({count})</span>
    </div>
  );
}

function MinutesBar({ starters, keyRotation }) {
  const TOTAL_MINUTES = 240;
  const allPlayers = [...starters, ...keyRotation];
  const usedMinutes = allPlayers.reduce((s, p) => s + (p.playoffStats?.minutesPerGame || 0), 0);

  return (
    <div style={{ background: "#1e1e28", borderRadius: 14, padding: 16, marginBottom: 16 }}>
      <div style={{ fontSize: 10, color: "#888", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>
        Game 1 Minutes Distribution
        <span style={{ color: "#666", fontWeight: 400, marginLeft: 8, letterSpacing: 0 }}>
          {usedMinutes} of {TOTAL_MINUTES} min
        </span>
      </div>
      {/* Bar */}
      <div style={{
        display: "flex", height: 28, borderRadius: 6, overflow: "hidden",
        background: "#252530", gap: 1,
      }}>
        {allPlayers.map((p) => {
          const mins = p.playoffStats?.minutesPerGame || 0;
          if (mins === 0) return null;
          const pct = (mins / TOTAL_MINUTES) * 100;
          const isStart = starters.some((s) => s.id === p.id);
          return (
            <div
              key={p.id}
              title={`${p.name}: ${mins} min`}
              style={{
                width: `${pct}%`, minWidth: 2,
                background: isStart ? HAWKS_RED : HAWKS_VOLT,
                opacity: isStart ? 1 : 0.8,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 8, color: "#fff", fontWeight: 700,
                overflow: "hidden", whiteSpace: "nowrap",
              }}
            >
              {pct > 5 ? `${mins}` : ""}
            </div>
          );
        })}
      </div>
      {/* Legend */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 8 }}>
        {allPlayers.map((p) => {
          const mins = p.playoffStats?.minutesPerGame || 0;
          if (mins === 0) return null;
          const isStart = starters.some((s) => s.id === p.id);
          const lastName = p.name.split(" ").pop();
          return (
            <div key={p.id} style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <span style={{
                width: 8, height: 8, borderRadius: 2,
                background: isStart ? HAWKS_RED : HAWKS_VOLT,
              }} />
              <span style={{ fontSize: 9, color: "#aaa", fontWeight: 600 }}>
                {lastName} {mins}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function RotationView({ players, nextGame, onPlayerClick }) {
  const { starters, keyRotation, dnp, unavailable, byPosition } = useMemo(() => {
    const available = players.filter((p) => isAvailable(p.status));
    const unavail = players.filter((p) => !isAvailable(p.status));

    // Use playoffStarter flag if set; otherwise fall back to gamesStarted
    const hasPlayoffFlags = available.some((p) => p.playoffStarter);
    let start;
    if (hasPlayoffFlags) {
      start = available.filter((p) => p.playoffStarter);
    } else {
      const sortedByStarts = [...available].sort((a, b) => {
        if (b.gamesStarted !== a.gamesStarted) return b.gamesStarted - a.gamesStarted;
        return b.minutesPerGame - a.minutesPerGame;
      });
      start = sortedByStarts.slice(0, 5);
    }
    const startIds = new Set(start.map((p) => p.id));

    // Split remaining available players into Key Rotation (playoff minutes > 0) and DNP
    const nonStarters = [...available].filter((p) => !startIds.has(p.id));
    const keyRot = nonStarters
      .filter((p) => p.playoffStats && p.playoffStats.gamesPlayed > 0)
      .sort((a, b) => (b.playoffStats?.minutesPerGame || 0) - (a.playoffStats?.minutesPerGame || 0));
    const dnpList = nonStarters
      .filter((p) => !p.playoffStats || p.playoffStats.gamesPlayed === 0)
      .sort((a, b) => b.minutesPerGame - a.minutesPerGame);

    // Group full roster by position (available + unavailable)
    const byPos = {};
    POS_ORDER.forEach((pos) => { byPos[pos] = []; });
    players.forEach((p) => {
      if (!byPos[p.position]) byPos[p.position] = [];
      byPos[p.position].push(p);
    });
    Object.keys(byPos).forEach((k) => {
      byPos[k].sort((a, b) => b.minutesPerGame - a.minutesPerGame);
    });

    return { starters: start, keyRotation: keyRot, dnp: dnpList, unavailable: unavail, byPosition: byPos };
  }, [players]);

  const rotationSize = starters.length + keyRotation.length;

  return (
    <div>
      {/* Header */}
      <div style={{
        background: "#1e1e28", borderRadius: 14, padding: 18, marginBottom: 16,
        display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap",
      }}>
        <div>
          <div style={{ fontSize: 11, color: HAWKS_VOLT, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5 }}>
            Playoff Rotation
          </div>
          <div style={{ fontSize: 13, color: "#ccc", marginTop: 4 }}>
            {nextGame
              ? <>For {nextGame.home ? "vs" : "at"} <span style={{ color: "#fff", fontWeight: 700 }}>{nextGame.shortName}</span>{nextGame.seriesContext ? ` · ${nextGame.seriesContext}` : ""}</>
              : "Based on 2025-26 season starts & minutes"}
          </div>
        </div>
        <div style={{ marginLeft: "auto", display: "flex", gap: 10 }}>
          <div style={{ textAlign: "center", background: "#252530", borderRadius: 8, padding: "8px 14px" }}>
            <div style={{ color: "#fff", fontWeight: 800, fontSize: 18 }}>{starters.length}</div>
            <div style={{ color: "#888", fontSize: 9, textTransform: "uppercase", letterSpacing: 1 }}>Starters</div>
          </div>
          <div style={{ textAlign: "center", background: "#252530", borderRadius: 8, padding: "8px 14px" }}>
            <div style={{ color: HAWKS_VOLT, fontWeight: 800, fontSize: 18 }}>{rotationSize}</div>
            <div style={{ color: "#888", fontSize: 9, textTransform: "uppercase", letterSpacing: 1 }}>Rotation</div>
          </div>
          <div style={{ textAlign: "center", background: "#252530", borderRadius: 8, padding: "8px 14px" }}>
            <div style={{ color: "#fff", fontWeight: 800, fontSize: 18 }}>{dnp.length}</div>
            <div style={{ color: "#888", fontSize: 9, textTransform: "uppercase", letterSpacing: 1 }}>DNP</div>
          </div>
        </div>
      </div>

      {/* Minutes Distribution Bar */}
      <MinutesBar starters={starters} keyRotation={keyRotation} />

      {/* Starters + Key Rotation */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))", gap: 16, marginBottom: 16 }}>
        <div style={{ background: "#1e1e28", borderRadius: 14, padding: 16 }}>
          <GroupHeader label="Starting 5" count={starters.length} color={HAWKS_RED} />
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {starters.map((p) => (
              <PlayerRow key={p.id} player={p} isStarter={true} onClick={() => onPlayerClick(p.id)} />
            ))}
          </div>
        </div>
        <div style={{ background: "#1e1e28", borderRadius: 14, padding: 16 }}>
          <GroupHeader label="Key Rotation" count={keyRotation.length} color={HAWKS_VOLT} />
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {keyRotation.map((p) => (
              <PlayerRow key={p.id} player={p} isStarter={false} onClick={() => onPlayerClick(p.id)} />
            ))}
            {keyRotation.length === 0 && (
              <div style={{ padding: 20, textAlign: "center", color: "#666", fontSize: 12 }}>
                No bench players logged playoff minutes yet.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* DNP */}
      {dnp.length > 0 && (
        <div style={{ background: "#1e1e28", borderRadius: 14, padding: 16, marginBottom: 16 }}>
          <GroupHeader label="DNP — Did Not Play" count={dnp.length} color="#666" />
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {dnp.map((p) => (
              <PlayerRow key={p.id} player={p} isStarter={false} onClick={() => onPlayerClick(p.id)} />
            ))}
          </div>
        </div>
      )}

      {/* Unavailable */}
      {unavailable.length > 0 && (
        <div style={{ background: "#1e1e28", borderRadius: 14, padding: 16, marginBottom: 20 }}>
          <GroupHeader label="Unavailable" count={unavailable.length} color="#dc3545" />
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {unavailable.map((p) => (
              <div key={p.id}>
                <PlayerRow player={p} isStarter={false} onClick={() => onPlayerClick(p.id)} />
                {p.injuryNote && (
                  <div style={{
                    marginTop: 4, marginLeft: 16, fontSize: 11, color: "#ff6b6b",
                    fontStyle: "italic",
                  }}>
                    {p.injuryNote}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* By Position breakdown */}
      <div style={{ fontSize: 11, color: HAWKS_VOLT, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 10 }}>
        Depth by Position
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12 }}>
        {POS_ORDER.map((pos) => {
          const list = byPosition[pos] || [];
          if (list.length === 0) return null;
          return (
            <div key={pos} style={{ background: "#1e1e28", borderRadius: 12, padding: 14 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                <span style={{
                  background: POS_COLORS[pos], color: "#fff",
                  fontSize: 11, padding: "2px 10px", borderRadius: 10,
                  fontWeight: 800, letterSpacing: 1,
                }}>
                  {pos}
                </span>
                <span style={{ fontSize: 10, color: "#666", fontWeight: 600 }}>
                  {list.length} player{list.length === 1 ? "" : "s"}
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {list.map((p, i) => {
                  const available = isAvailable(p.status);
                  return (
                    <div key={p.id} onClick={() => onPlayerClick(p.id)} style={{
                      display: "flex", alignItems: "center", gap: 8,
                      padding: "6px 8px", borderRadius: 6, cursor: "pointer",
                      background: i === 0 ? "#252530" : "transparent",
                    }}>
                      <span style={{
                        width: 18, height: 18, borderRadius: 4,
                        background: i === 0 ? HAWKS_RED : "#2a2a35",
                        color: "#fff", fontSize: 9, fontWeight: 800,
                        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                      }}>
                        {i + 1}
                      </span>
                      <span style={{
                        flex: 1, color: available ? "#fff" : "#999",
                        fontSize: 12, fontWeight: 600,
                        textDecoration: !available ? "line-through" : "none",
                        whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                      }}>
                        {p.name}
                      </span>
                      <span style={{ color: "#666", fontSize: 10, fontWeight: 600 }}>
                        {p.minutesPerGame.toFixed(1)} min
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
