import { useState, useMemo, useEffect } from "react";
import _ from "lodash";
import {
  PLAYERS,
  RSS_FEEDS,
  RESULTS,
  NEXT_GAME,
  TEAM_LOGOS,
  NEWS_DIGEST,
  PLAYOFF_SERIES,
  EAST_STANDINGS,
} from "./playerData.js";
import RotationView from "./RotationView.jsx";

// ─── Atlanta Hawks Player Tracker ───────────────────────────────────────────
// 2025-26 season, post-ASB surge, Round 1 playoffs vs Knicks

const HAWKS_RED = "#E03A3E";
const HAWKS_BLACK = "#26282A";
const HAWKS_VOLT = "#C1D32F";
const HAWKS_DARK = "#1a1a1f";

// NBA positions → colors
const POS_COLORS = {
  PG: "#3498db",
  SG: "#2ecc71",
  SF: "#f1c40f",
  PF: "#e67e22",
  C: "#e74c3c",
};

// NBA status taxonomy: active | day-to-day | questionable | doubtful | out | suspended
function statusUIConfig(status) {
  switch (status) {
    case "active":
      return { borderColor: HAWKS_RED, icon: null, iconBg: null };
    case "day-to-day":
      return { borderColor: "#ffc107", icon: "~", iconBg: "#ffc107" };
    case "questionable":
      return { borderColor: "#ffc107", icon: "?", iconBg: "#ffc107" };
    case "doubtful":
      return { borderColor: "#fd7e14", icon: "?", iconBg: "#fd7e14" };
    case "out":
      return { borderColor: "#dc3545", icon: "+", iconBg: "#dc3545" };
    case "suspended":
      return { borderColor: "#6c757d", icon: "!", iconBg: "#6c757d" };
    default:
      return { borderColor: HAWKS_RED, icon: null, iconBg: null };
  }
}

// ─── Player Avatar ──────────────────────────────────────────────────────────
function PlayerAvatar({ player, size = 64 }) {
  const [imgFailed, setImgFailed] = useState(false);
  const accent = POS_COLORS[player.position] || "#888";
  const initials = player.name.split(" ").map((w) => w[0]).join("").slice(0, 2);
  const ui = statusUIConfig(player.status);

  return (
    <div style={{ position: "relative", flexShrink: 0, width: size, height: size }}>
      <div style={{
        width: size, height: size, borderRadius: "50%", overflow: "hidden",
        border: `3px solid ${ui.borderColor}`, background: "#2a2a3a",
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
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center", gap: 1,
          }}>
            <span style={{ color: "#fff", fontWeight: 800, fontSize: size * 0.3, lineHeight: 1 }}>{initials}</span>
            <span style={{ color: "#ffffffaa", fontWeight: 700, fontSize: size * 0.17 }}>#{player.number}</span>
          </div>
        )}
      </div>
      {ui.icon && (
        <div style={{
          position: "absolute", bottom: -1, right: -1,
          width: size * 0.32, height: size * 0.32, borderRadius: "50%",
          background: ui.iconBg, display: "flex",
          alignItems: "center", justifyContent: "center",
          fontSize: size * 0.2, fontWeight: 900, color: "#fff",
          border: "2px solid #1e1e28", lineHeight: 1,
        }}>
          {ui.icon}
        </div>
      )}
    </div>
  );
}

// ─── Helper Components ──────────────────────────────────────────────────────

function FormBadge({ form }) {
  let color = "#6c757d";
  let label = "Average";
  if (form >= 8.0) { color = "#28a745"; label = "Excellent"; }
  else if (form >= 7.5) { color = "#5cb85c"; label = "Good"; }
  else if (form >= 7.0) { color = "#ffc107"; label = "Decent"; }
  else if (form >= 6.5) { color = "#fd7e14"; label = "Fair"; }
  else { color = "#dc3545"; label = "Poor"; }

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <div style={{
        width: 48, height: 48, borderRadius: "50%", background: color,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "#fff", fontWeight: 700, fontSize: 16, boxShadow: `0 0 12px ${color}55`,
      }}>
        {form.toFixed(1)}
      </div>
      <span style={{ fontSize: 11, color: "#aaa", textTransform: "uppercase", letterSpacing: 1 }}>{label}</span>
    </div>
  );
}

function StatBar({ label, value, max, unit = "" }) {
  const pct = Math.min((value / max) * 100, 100);
  return (
    <div style={{ marginBottom: 6 }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#bbb", marginBottom: 2 }}>
        <span>{label}</span>
        <span style={{ color: "#fff", fontWeight: 600 }}>{value}{unit}</span>
      </div>
      <div style={{ height: 4, borderRadius: 2, background: "#333", overflow: "hidden" }}>
        <div style={{ width: `${pct}%`, height: "100%", borderRadius: 2, background: `linear-gradient(90deg, ${HAWKS_RED}, ${HAWKS_VOLT})`, transition: "width 0.6s ease" }} />
      </div>
    </div>
  );
}

function PositionTag({ position }) {
  return (
    <span style={{
      background: POS_COLORS[position] || "#888", color: "#fff", fontSize: 10,
      padding: "2px 8px", borderRadius: 10, fontWeight: 700, letterSpacing: 1,
    }}>
      {position}
    </span>
  );
}

function StatusBadge({ status }) {
  if (status === "active") return null;
  const cfg = {
    "day-to-day":   { bg: "#ffc10722", border: "#ffc107", color: "#ffe066", label: "DAY-TO-DAY" },
    questionable:   { bg: "#ffc10722", border: "#ffc107", color: "#ffe066", label: "QUESTIONABLE" },
    doubtful:       { bg: "#fd7e1422", border: "#fd7e14", color: "#ffa94d", label: "DOUBTFUL" },
    out:            { bg: "#dc354522", border: "#dc3545", color: "#ff6b6b", label: "OUT" },
    suspended:      { bg: "#6c757d22", border: "#6c757d", color: "#adb5bd", label: "SUSPENDED" },
  };
  const c = cfg[status] || cfg.out;
  return (
    <span style={{
      background: c.bg, border: `1px solid ${c.border}`, color: c.color,
      fontSize: 9, padding: "2px 8px", borderRadius: 10, fontWeight: 700, letterSpacing: 1.2,
    }}>
      {c.label}
    </span>
  );
}

// ─── Physical Profile ────────────────────────────────────────────────────────
// Hawks data stores height in inches and weight in lbs directly
function PhysicalProfile({ physical, age }) {
  const inches = physical.height;
  const ft = Math.floor(inches / 12);
  const inRem = inches % 12;
  const lbs = physical.weight;
  return (
    <div>
      <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
        <div style={{ flex: 1, background: "#252530", borderRadius: 10, padding: "12px 10px", textAlign: "center" }}>
          <div style={{ color: "#fff", fontWeight: 800, fontSize: 22 }}>
            {ft}<span style={{ fontSize: 12, color: "#888", fontWeight: 400 }}>'</span>
            {inRem}<span style={{ fontSize: 12, color: "#888", fontWeight: 400 }}>"</span>
          </div>
          <div style={{ color: "#777", fontSize: 10, textTransform: "uppercase", letterSpacing: 1, marginTop: 2 }}>Height</div>
        </div>
        <div style={{ flex: 1, background: "#252530", borderRadius: 10, padding: "12px 10px", textAlign: "center" }}>
          <div style={{ color: "#fff", fontWeight: 800, fontSize: 22 }}>
            {lbs}<span style={{ fontSize: 12, color: "#888", fontWeight: 400 }}> lbs</span>
          </div>
          <div style={{ color: "#777", fontSize: 10, textTransform: "uppercase", letterSpacing: 1, marginTop: 2 }}>Weight</div>
        </div>
        <div style={{ flex: 1, background: "#252530", borderRadius: 10, padding: "12px 10px", textAlign: "center" }}>
          <div style={{ color: "#fff", fontWeight: 800, fontSize: 22 }}>{age}</div>
          <div style={{ color: "#777", fontSize: 10, textTransform: "uppercase", letterSpacing: 1, marginTop: 2 }}>Age</div>
        </div>
      </div>
    </div>
  );
}

// ─── Career Timeline ─────────────────────────────────────────────────────────

function CareerTimeline({ career }) {
  const reversed = [...career].reverse();
  return (
    <div style={{ position: "relative", paddingLeft: 20 }}>
      <div style={{ position: "absolute", left: 7, top: 4, bottom: 4, width: 2, background: "#333" }} />
      {reversed.map((entry, i) => {
        const isCurrent = entry.years.endsWith("-");
        const isDraft = entry.type === "draft";
        return (
          <div key={i} style={{ position: "relative", marginBottom: i < reversed.length - 1 ? 16 : 0 }}>
            <div style={{
              position: "absolute", left: -17, top: 4,
              width: 12, height: 12, borderRadius: "50%",
              background: isCurrent ? HAWKS_RED : isDraft ? "transparent" : "#555",
              border: isDraft ? "2px solid #555" : isCurrent ? `2px solid ${HAWKS_RED}` : "2px solid #555",
              boxShadow: isCurrent ? `0 0 8px ${HAWKS_RED}66` : "none",
            }} />
            <div style={{ opacity: isDraft ? 0.75 : 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                <span style={{ color: isCurrent ? HAWKS_RED : "#fff", fontWeight: 700, fontSize: 13 }}>
                  {entry.team}
                </span>
                {isDraft && (
                  <span style={{
                    fontSize: 10, padding: "2px 8px", borderRadius: 8, fontWeight: 600,
                    background: "#ffc10712", color: "#ffc107", border: "1px solid #ffc10722",
                  }}>Draft</span>
                )}
              </div>
              <div style={{ fontSize: 11, color: "#666", marginTop: 2 }}>{entry.years}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Player Card ────────────────────────────────────────────────────────────

function PlayerCard({ player, expanded, onToggle }) {
  const [activeTab, setActiveTab] = useState("stats");
  useEffect(() => { if (!expanded) setActiveTab("stats"); }, [expanded]);

  const formColor = player.form >= 8.0 ? "#28a745"
    : player.form >= 7.5 ? "#5cb85c"
    : player.form >= 7.0 ? "#ffc107"
    : player.form >= 6.5 ? "#fd7e14"
    : "#dc3545";

  const isAvailable = player.status === "active" || player.status === "day-to-day" || player.status === "questionable";

  return (
    <div
      onClick={onToggle}
      style={{
        background: expanded ? "linear-gradient(135deg, #1e1e28, #2a1520)" : "#1e1e28",
        borderRadius: 14, padding: 0, cursor: "pointer",
        border: expanded ? `2px solid ${HAWKS_RED}` : "2px solid transparent",
        transition: "all 0.3s ease", overflow: "hidden",
        boxShadow: expanded ? `0 8px 32px ${HAWKS_RED}22` : "0 2px 12px #0005",
        display: "flex", flexDirection: "column",
      }}
    >
      {/* Header — compact */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 14px 8px" }}>
        <PlayerAvatar player={player} size={44} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "nowrap", overflow: "hidden" }}>
            <span style={{ color: HAWKS_RED, fontWeight: 800, fontSize: 11 }}>#{player.number}</span>
            <span style={{ color: "#fff", fontWeight: 700, fontSize: 13, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{player.name}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 3, flexWrap: "wrap" }}>
            <PositionTag position={player.position} />
            <StatusBadge status={player.status} />
          </div>
        </div>
        {/* Compact form circle */}
        {isAvailable && player.form > 0 ? (
          <div style={{
            width: 36, height: 36, borderRadius: "50%", background: formColor,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff", fontWeight: 700, fontSize: 13, flexShrink: 0,
            boxShadow: `0 0 8px ${formColor}55`,
          }}>
            {player.form.toFixed(1)}
          </div>
        ) : (
          <div style={{
            fontSize: 9, color: "#ff6b6b", fontWeight: 700, textAlign: "center",
            background: "#dc354515", padding: "4px 8px", borderRadius: 6,
            border: "1px solid #dc354533", lineHeight: 1.2, flexShrink: 0,
          }}>
            OUT
          </div>
        )}
      </div>

      {/* Injury Note */}
      {player.injuryNote && (
        <div style={{
          margin: "0 14px 6px", padding: "5px 8px", borderRadius: 6,
          background: player.status === "out" ? "#dc354512"
            : player.status === "doubtful" ? "#fd7e1412" : "#ffc10712",
          border: `1px solid ${player.status === "out" ? "#dc354533"
            : player.status === "doubtful" ? "#fd7e1433" : "#ffc10733"}`,
          fontSize: 10,
          color: player.status === "out" ? "#ff6b6b"
            : player.status === "doubtful" ? "#ffa94d" : "#ffe066",
          lineHeight: 1.3, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
        }}>
          {player.injuryNote}
        </div>
      )}

      {/* Quick Stats — compact grid: PPG / RPG / APG / GP */}
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
        gap: 0, padding: "6px 14px 10px",
        borderTop: "1px solid #ffffff0a", marginTop: "auto",
      }}>
        {[
          { label: "PPG", value: player.pointsPerGame.toFixed(1) },
          { label: "RPG", value: player.reboundsPerGame.toFixed(1) },
          { label: "APG", value: player.assistsPerGame.toFixed(1) },
          { label: "GP", value: player.gamesPlayed },
        ].map((s) => (
          <div key={s.label} style={{ textAlign: "center" }}>
            <div style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>{s.value}</div>
            <div style={{ color: "#777", fontSize: 9, textTransform: "uppercase", letterSpacing: 0.8 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Expanded Tabs */}
      {expanded && (
        <div style={{ padding: "4px 18px 18px", borderTop: "1px solid #ffffff08" }}>
          {/* Tab Bar */}
          <div style={{ display: "flex", gap: 4, marginBottom: 14, background: "#ffffff08", borderRadius: 8, padding: 3 }}>
            {[
              { key: "stats", label: "Stats" },
              { key: "physical", label: "Physical" },
              { key: "career", label: "Career" },
            ].map((t) => (
              <button
                key={t.key}
                onClick={(e) => { e.stopPropagation(); setActiveTab(t.key); }}
                style={{
                  flex: 1, padding: "7px 0", borderRadius: 6, border: "none", cursor: "pointer",
                  fontWeight: 700, fontSize: 11, textTransform: "uppercase", letterSpacing: 1,
                  background: activeTab === t.key ? HAWKS_RED : "transparent",
                  color: activeTab === t.key ? "#fff" : "#888",
                  transition: "all 0.2s",
                }}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Stats Tab */}
          {activeTab === "stats" && (
            <div>
              <div style={{ fontSize: 11, color: HAWKS_VOLT, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 10 }}>
                Advanced Stats
              </div>
              <StatBar label="True Shooting %" value={player.trueShootingPct} max={70} unit="%" />
              <StatBar label="3-Point %" value={player.threePointPct} max={50} unit="%" />
              <StatBar label="Free Throw %" value={player.freeThrowPct} max={100} unit="%" />
              <StatBar label="Field Goal %" value={player.fieldGoalPct} max={65} unit="%" />
              <StatBar label="Minutes / Game" value={player.minutesPerGame} max={40} />
              <div style={{ marginTop: 10, display: "flex", gap: 8 }}>
                <div style={{ flex: 1, background: "#252530", borderRadius: 8, padding: "10px 12px", textAlign: "center" }}>
                  <div style={{ color: player.plusMinus >= 0 ? "#28a745" : "#dc3545", fontWeight: 800, fontSize: 18 }}>
                    {player.plusMinus >= 0 ? "+" : ""}{player.plusMinus.toFixed(1)}
                  </div>
                  <div style={{ color: "#777", fontSize: 9, textTransform: "uppercase", letterSpacing: 1, marginTop: 2 }}>+/-</div>
                </div>
                <div style={{ flex: 1, background: "#252530", borderRadius: 8, padding: "10px 12px", textAlign: "center" }}>
                  <div style={{ color: "#fff", fontWeight: 800, fontSize: 18 }}>{player.stealsPerGame.toFixed(1)}</div>
                  <div style={{ color: "#777", fontSize: 9, textTransform: "uppercase", letterSpacing: 1, marginTop: 2 }}>STL</div>
                </div>
                <div style={{ flex: 1, background: "#252530", borderRadius: 8, padding: "10px 12px", textAlign: "center" }}>
                  <div style={{ color: "#fff", fontWeight: 800, fontSize: 18 }}>{player.blocksPerGame.toFixed(1)}</div>
                  <div style={{ color: "#777", fontSize: 9, textTransform: "uppercase", letterSpacing: 1, marginTop: 2 }}>BLK</div>
                </div>
                <div style={{ flex: 1, background: "#252530", borderRadius: 8, padding: "10px 12px", textAlign: "center" }}>
                  <div style={{ color: "#fff", fontWeight: 800, fontSize: 18 }}>{player.turnoversPerGame.toFixed(1)}</div>
                  <div style={{ color: "#777", fontSize: 9, textTransform: "uppercase", letterSpacing: 1, marginTop: 2 }}>TO</div>
                </div>
              </div>
            </div>
          )}

          {/* Physical Tab */}
          {activeTab === "physical" && player.physical && (
            <PhysicalProfile physical={player.physical} age={player.age} />
          )}

          {/* Career Tab */}
          {activeTab === "career" && player.career && (
            <CareerTimeline career={player.career} />
          )}
        </div>
      )}
    </div>
  );
}

// ─── AI News Digest ──────────────────────────────────────────────────────────

const CATEGORY_COLORS = {
  trades: HAWKS_RED,
  injuries: "#fd7e14",
  games: "#3498db",
  rotation: "#2ecc71",
  general: "#888",
};

function NewsDigestSection() {
  if (!NEWS_DIGEST) return null;

  const timeAgoStr = (() => {
    const diff = Date.now() - new Date(NEWS_DIGEST.generatedAt).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 60) return `${mins}m ago`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `${hrs}h ago`;
    const days = Math.floor(hrs / 24);
    return `${days}d ago`;
  })();

  return (
    <div style={{
      background: "linear-gradient(135deg, #1e1e28, #1a1520)",
      borderRadius: 14,
      padding: 20,
      marginBottom: 16,
      border: `1px solid ${HAWKS_RED}33`,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
        <span style={{
          fontSize: 12, color: HAWKS_VOLT, fontWeight: 700,
          textTransform: "uppercase", letterSpacing: 1.5,
        }}>
          AI News Digest
        </span>
        <span style={{
          fontSize: 9, color: "#777", background: "#252530",
          padding: "3px 8px", borderRadius: 6, fontWeight: 600,
        }}>
          Powered by Claude
        </span>
        <span style={{ fontSize: 10, color: "#555", marginLeft: "auto" }}>
          Updated {timeAgoStr}
        </span>
      </div>

      <p style={{ fontSize: 14, color: "#ccc", lineHeight: 1.7, margin: "0 0 16px 0" }}>
        {NEWS_DIGEST.summary}
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 10 }}>
        {NEWS_DIGEST.keyTopics.map((topic, i) => (
          <div
            key={i}
            style={{
              background: "#252530",
              borderRadius: 10,
              padding: 14,
              borderLeft: `3px solid ${CATEGORY_COLORS[topic.category] || "#888"}`,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: 13, flex: 1 }}>
                {topic.title}
              </span>
              <span style={{
                fontSize: 9, fontWeight: 700, textTransform: "uppercase",
                color: CATEGORY_COLORS[topic.category] || "#888",
                background: `${CATEGORY_COLORS[topic.category] || "#888"}22`,
                padding: "2px 7px", borderRadius: 4, letterSpacing: 0.5,
              }}>
                {topic.category}
              </span>
            </div>
            <div style={{ color: "#aaa", fontSize: 12, lineHeight: 1.5 }}>
              {topic.detail}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 12, fontSize: 10, color: "#555" }}>
        Sources: {NEWS_DIGEST.sources.join(" · ")}
      </div>
    </div>
  );
}

// ─── Live RSS News Feed ──────────────────────────────────────────────────────

function timeAgo(dateStr) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 7) return `${days}d ago`;
  const weeks = Math.floor(days / 7);
  return `${weeks}w ago`;
}

function parseRSSItems(xmlText, feedMeta) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xmlText, "text/xml");
  const items = doc.querySelectorAll("item");
  return Array.from(items).map((item) => ({
    title: item.querySelector("title")?.textContent || "",
    link: item.querySelector("link")?.textContent || "",
    pubDate: item.querySelector("pubDate")?.textContent || "",
    source: feedMeta.name,
    category: feedMeta.category,
    color: feedMeta.color,
  }));
}

function LiveNewsFeed({ filter }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    const isDev = window.location.hostname === "localhost";
    Promise.allSettled(
      RSS_FEEDS.map((feed) => {
        if (isDev) {
          return fetch("/api/rss?url=" + encodeURIComponent(feed.url))
            .then((r) => { if (!r.ok) throw new Error(r.status); return r.text(); })
            .then((xml) => parseRSSItems(xml, feed));
        }
        return fetch("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(feed.url))
          .then((r) => { if (!r.ok) throw new Error(r.status); return r.json(); })
          .then((data) => (data.items || []).map((item) => ({
            title: item.title || "",
            link: item.link || "",
            pubDate: item.pubDate || "",
            source: feed.name,
            category: feed.category,
            color: feed.color,
          })));
      })
    ).then((results) => {
      if (cancelled) return;
      const all = results
        .filter((r) => r.status === "fulfilled")
        .flatMap((r) => r.value)
        .filter((a) => a.title && a.pubDate)
        .sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
      if (all.length === 0) {
        setError("Could not load any feeds. CORS proxy may be unavailable.");
      }
      setArticles(all);
      setLoading(false);
    });

    return () => { cancelled = true; };
  }, []);

  const filtered = filter === "all" ? articles : articles.filter((a) => a.source === filter);

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: 40, color: "#888" }}>
        Loading live news feeds...
      </div>
    );
  }

  if (error && articles.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: 40, color: "#ff6b6b" }}>
        {error}
      </div>
    );
  }

  const isWide = (i, title) => i === 0 || title.length > 70 || i % 5 === 0;

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 10 }}>
      {filtered.slice(0, 30).map((item, i) => {
        const wide = isWide(i, item.title);
        return (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              gridColumn: wide ? "span 2" : "span 1",
              padding: wide ? "16px 20px" : "14px 16px",
              borderRadius: 12,
              background: "#1e1e28",
              borderTop: `3px solid ${item.color || HAWKS_RED}`,
              transition: "all 0.2s",
              cursor: "pointer",
              textDecoration: "none",
              boxShadow: "0 2px 8px #0003",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#252530";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 6px 20px #0005";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#1e1e28";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 2px 8px #0003";
            }}
          >
            <div style={{ color: "#fff", fontSize: wide ? 15 : 13, fontWeight: 600, lineHeight: 1.4 }}>
              {item.title}
            </div>
            <div style={{ display: "flex", gap: 8, marginTop: 8, alignItems: "center" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: item.color || HAWKS_RED, flexShrink: 0 }} />
              <span style={{ fontSize: 10, color: item.color || HAWKS_RED, fontWeight: 600 }}>{item.source}</span>
              <span style={{ fontSize: 10, color: "#555" }}>{timeAgo(item.pubDate)}</span>
            </div>
          </a>
        );
      })}
      {filtered.length === 0 && (
        <div style={{ textAlign: "center", padding: 40, color: "#666", gridColumn: "1 / -1" }}>
          No articles found for this filter.
        </div>
      )}
    </div>
  );
}

// ─── Result Card ────────────────────────────────────────────────────────────

function ResultCard({ result }) {
  const compColors = { REG: "#444", PLAYOFFS: HAWKS_RED, PRE: "#666" };
  const compLabels = { REG: "REG", PLAYOFFS: "PLAYOFFS", PRE: "PRE" };
  const resultColor = result.result === "W" ? "#28a745" : "#dc3545";
  const formatDate = (dateStr) => {
    const d = new Date(dateStr + "T12:00:00");
    return d.toLocaleDateString("en-US", { day: "numeric", month: "short" });
  };

  const atlLogo = TEAM_LOGOS["Atlanta Hawks"];
  const oppLogo = TEAM_LOGOS[result.opponent];

  return (
    <div style={{
      background: "#1e1e28", borderRadius: 14, padding: "14px 16px",
      borderLeft: `4px solid ${resultColor}`, minWidth: 260,
      display: "flex", flexDirection: "column", gap: 8,
      boxShadow: "0 2px 12px #0005",
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{
          width: 30, height: 30, borderRadius: 7, background: resultColor,
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "#fff", fontWeight: 800, fontSize: 13, flexShrink: 0,
        }}>{result.result}</div>
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          <span style={{
            fontSize: 9, fontWeight: 700, textTransform: "uppercase", color: "#fff",
            background: (compColors[result.competition] || "#333") + "cc",
            padding: "2px 8px", borderRadius: 6, letterSpacing: 0.5,
          }}>{compLabels[result.competition] || result.competition}</span>
          <span style={{ fontSize: 10, color: "#666" }}>{formatDate(result.date)}</span>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8, justifyContent: "center" }}>
        {result.home ? (
          <>
            {atlLogo && <img src={atlLogo} alt="" style={{ width: 22, height: 22, objectFit: "contain" }} />}
            <span style={{ color: "#fff", fontWeight: 700, fontSize: 13 }}>ATL</span>
            <span style={{ color: resultColor, fontWeight: 800, fontSize: 16 }}>{result.score}</span>
            {oppLogo && <img src={oppLogo} alt="" style={{ width: 22, height: 22, objectFit: "contain" }} />}
            <span style={{ color: "#fff", fontWeight: 700, fontSize: 13 }}>{result.opponent.split(" ").slice(-1)[0]}</span>
          </>
        ) : (
          <>
            {oppLogo && <img src={oppLogo} alt="" style={{ width: 22, height: 22, objectFit: "contain" }} />}
            <span style={{ color: "#fff", fontWeight: 700, fontSize: 13 }}>{result.opponent.split(" ").slice(-1)[0]}</span>
            <span style={{ color: resultColor, fontWeight: 800, fontSize: 16 }}>
              {result.score.split("-").reverse().join("-")}
            </span>
            {atlLogo && <img src={atlLogo} alt="" style={{ width: 22, height: 22, objectFit: "contain" }} />}
            <span style={{ color: "#fff", fontWeight: 700, fontSize: 13 }}>ATL</span>
          </>
        )}
      </div>
      {result.topScorers && (
        <div style={{ fontSize: 10, color: "#888", textAlign: "center", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
          {result.topScorers}
        </div>
      )}
    </div>
  );
}

// ─── Next Game Banner ───────────────────────────────────────────────────────

function NextGameBanner({ game, results }) {
  const compColors = { REG: "#444", PLAYOFFS: HAWKS_RED, PRE: "#666" };
  const compLabels = { REG: "Regular Season", PLAYOFFS: "Playoffs", PRE: "Preseason" };
  const d = new Date(game.date);
  const day = d.toLocaleDateString("en-US", { weekday: "long", day: "numeric", month: "long" });
  const time = d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
  const now = new Date();
  const diff = d - now;
  let countdown = "";
  if (diff > 0) {
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    countdown = days > 0 ? `${days}d ${hours}h` : `${hours}h`;
  } else { countdown = "NOW"; }

  return (
    <div style={{
      background: `linear-gradient(135deg, ${HAWKS_RED}dd, #8B0A0Fee)`,
      borderRadius: 16, padding: 20, marginBottom: 16,
      border: "1px solid #ffffff15", boxShadow: `0 4px 24px ${HAWKS_RED}33`,
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12, gap: 8, flexWrap: "wrap" }}>
        <div style={{ fontSize: 11, color: "#ffffffaa", fontWeight: 700, textTransform: "uppercase", letterSpacing: 2 }}>Next Game</div>
        {game.seriesContext && (
          <div style={{
            fontSize: 10, color: HAWKS_VOLT, background: "#00000055",
            padding: "3px 10px", borderRadius: 6, fontWeight: 700, letterSpacing: 0.5,
          }}>{game.seriesContext}</div>
        )}
        <div style={{
          fontSize: 10, fontWeight: 700, textTransform: "uppercase",
          color: "#fff", background: (compColors[game.competition] || "#333"),
          padding: "3px 10px", borderRadius: 6, letterSpacing: 0.5,
        }}>{compLabels[game.competition] || game.competition}</div>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, marginBottom: 14 }}>
        <div style={{ textAlign: "center", flex: 1 }}>
          <div style={{
            width: 60, height: 60, borderRadius: "50%", background: "#fff",
            display: "flex", alignItems: "center", justifyContent: "center",
            margin: "0 auto 6px", boxShadow: "0 2px 12px #0003", overflow: "hidden",
          }}>
            <img src={TEAM_LOGOS["Atlanta Hawks"]} alt="Hawks" style={{ width: 44, height: 44, objectFit: "contain" }} />
          </div>
          <div style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>Hawks</div>
          {game.home && <div style={{ fontSize: 9, color: "#ffffffaa" }}>HOME</div>}
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ color: HAWKS_VOLT, fontWeight: 800, fontSize: 22, lineHeight: 1 }}>VS</div>
          <div style={{ marginTop: 6, background: "#00000044", borderRadius: 8, padding: "4px 12px", color: HAWKS_VOLT, fontWeight: 700, fontSize: 13 }}>{countdown}</div>
        </div>
        <div style={{ textAlign: "center", flex: 1 }}>
          <div style={{
            width: 60, height: 60, borderRadius: "50%", background: "#ffffff15",
            display: "flex", alignItems: "center", justifyContent: "center",
            margin: "0 auto 6px", border: "2px solid #ffffff33", overflow: "hidden",
          }}>
            <img
              src={TEAM_LOGOS[game.opponent] || TEAM_LOGOS[game.shortName]}
              alt={game.shortName}
              style={{ width: 44, height: 44, objectFit: "contain" }}
              onError={(e) => { e.target.style.display = "none"; e.target.parentElement.textContent = game.shortName.slice(0, 3).toUpperCase(); }}
            />
          </div>
          <div style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>{game.shortName}</div>
          {!game.home && <div style={{ fontSize: 9, color: "#ffffffaa" }}>AWAY</div>}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap", fontSize: 11, color: "#ffffffbb" }}>
        <span>{day}</span>
        <span style={{ color: HAWKS_VOLT, fontWeight: 700 }}>{time}</span>
        <span>{game.venue}</span>
        {game.broadcast && <span style={{ color: "#ffffffaa" }}>{game.broadcast}</span>}
      </div>
      {results && results.length > 0 && (() => {
        const recent = results.slice(0, 5);
        const formColors = { W: "#28a745", L: "#dc3545" };
        const wins = recent.filter(r => r.result === "W").length;
        const losses = recent.filter(r => r.result === "L").length;
        return (
          <div style={{ borderTop: "1px solid #ffffff22", marginTop: 14, paddingTop: 12, display: "flex", alignItems: "center", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <span style={{ fontSize: 10, color: "#ffffffaa", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Last 5</span>
            <div style={{ display: "flex", gap: 4 }}>
              {recent.map((r, i) => (
                <div key={i} style={{
                  width: 26, height: 26, borderRadius: 6,
                  background: formColors[r.result], display: "flex",
                  alignItems: "center", justifyContent: "center",
                  color: "#fff", fontWeight: 800, fontSize: 11,
                }}>
                  {r.result}
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 10, fontSize: 11, color: "#ffffffbb" }}>
              <span><span style={{ color: "#28a745", fontWeight: 700 }}>{wins}</span>W</span>
              <span><span style={{ color: "#dc3545", fontWeight: 700 }}>{losses}</span>L</span>
            </div>
          </div>
        );
      })()}
    </div>
  );
}

// ─── Playoff Series Card ────────────────────────────────────────────────────

function PlayoffSeriesCard({ series }) {
  if (!series) return null;
  const leads = series.wins > series.losses ? "ATL leads"
    : series.losses > series.wins ? `${series.opponentShort} leads`
    : "Series tied";
  return (
    <div style={{
      background: "#1e1e28", borderRadius: 14, padding: 18, marginBottom: 16,
      border: `1px solid ${HAWKS_RED}33`,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, flexWrap: "wrap" }}>
        <span style={{ fontSize: 12, color: HAWKS_VOLT, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5 }}>
          Round {series.round} · vs {series.opponent}
        </span>
        <span style={{
          fontSize: 10, color: "#fff", background: HAWKS_RED,
          padding: "3px 10px", borderRadius: 6, fontWeight: 700, letterSpacing: 0.5,
        }}>
          {leads} {series.wins}-{series.losses}
        </span>
        <span style={{ fontSize: 10, color: "#666", marginLeft: "auto" }}>
          #{series.seed} vs #{series.opponentSeed}
        </span>
      </div>
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 8,
      }}>
        {series.games.map((g) => {
          const played = g.result !== null;
          const resultColor = g.result === "W" ? "#28a745" : g.result === "L" ? "#dc3545" : "#555";
          const d = new Date(g.date + "T12:00:00");
          const dateStr = d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
          return (
            <div key={g.game} style={{
              background: "#252530", borderRadius: 10, padding: "10px 12px",
              borderLeft: `3px solid ${resultColor}`,
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                <span style={{ fontSize: 10, color: "#888", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>
                  Game {g.game}
                </span>
                <span style={{ fontSize: 9, color: g.home ? HAWKS_VOLT : "#888", fontWeight: 700 }}>
                  {g.home ? "HOME" : "AWAY"}
                </span>
              </div>
              <div style={{ fontSize: 11, color: "#ccc" }}>{dateStr}</div>
              {played ? (
                <div style={{ fontSize: 13, fontWeight: 800, color: resultColor, marginTop: 2 }}>
                  {g.result} {g.score}
                </div>
              ) : (
                <div style={{ fontSize: 10, color: "#666", marginTop: 2 }}>
                  {g.broadcast || "TBD"}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── East Standings Card ────────────────────────────────────────────────────

function EastStandingsCard({ standings }) {
  if (!standings || standings.length === 0) return null;
  return (
    <div style={{
      background: "#1e1e28", borderRadius: 14, padding: 18, marginBottom: 16,
    }}>
      <div style={{ fontSize: 12, color: HAWKS_VOLT, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 12 }}>
        Eastern Conference Standings
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {standings.map((s) => {
          const isHawks = s.team === "Atlanta Hawks";
          return (
            <div key={s.seed} style={{
              display: "flex", alignItems: "center", gap: 10,
              padding: "7px 10px", borderRadius: 8,
              background: isHawks ? `${HAWKS_RED}22` : "transparent",
              border: isHawks ? `1px solid ${HAWKS_RED}55` : "1px solid transparent",
            }}>
              <span style={{
                width: 22, height: 22, borderRadius: 6,
                background: isHawks ? HAWKS_RED : "#2a2a35",
                color: "#fff", fontSize: 11, fontWeight: 800,
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                {s.seed}
              </span>
              {TEAM_LOGOS[s.team] && (
                <img src={TEAM_LOGOS[s.team]} alt="" style={{ width: 18, height: 18, objectFit: "contain", flexShrink: 0 }} />
              )}
              <span style={{ flex: 1, color: isHawks ? "#fff" : "#ccc", fontSize: 12, fontWeight: isHawks ? 800 : 600 }}>
                {s.team}
              </span>
              <span style={{ color: "#888", fontSize: 11, fontWeight: 600 }}>{s.record}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── RSS Feed Sources Panel ─────────────────────────────────────────────────

function RSSSourcesPanel() {
  return (
    <div style={{ background: "#1e1e28", borderRadius: 12, padding: 16, marginBottom: 16 }}>
      <div style={{ fontSize: 12, color: HAWKS_VOLT, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 12 }}>
        RSS Feed Sources
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {RSS_FEEDS.map((feed) => (
          <a
            key={feed.name}
            href={feed.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 11, color: "#fff", background: feed.color + "33",
              border: `1px solid ${feed.color}66`, borderRadius: 8,
              padding: "6px 12px", textDecoration: "none", fontWeight: 600,
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = feed.color + "55"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = feed.color + "33"; }}
          >
            {feed.name}
            <span style={{ color: "#888", marginLeft: 6, fontSize: 9, textTransform: "uppercase" }}>{feed.category}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

// ─── Main App ───────────────────────────────────────────────────────────────

export default function HawksTracker() {
  const [posFilter, setPosFilter] = useState("ALL");
  const [sortBy, setSortBy] = useState("ppg");
  const [expandedId, setExpandedId] = useState(null);
  const [newsFilter, setNewsFilter] = useState("all");
  const [view, setView] = useState("dashboard"); // "dashboard" | "rotation" | "news"
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all"); // "all" | "available" | "out"
  const [compFilter, setCompFilter] = useState("All"); // "All" | "REG" | "PLAYOFFS"

  const filteredResults = useMemo(() => {
    if (compFilter === "All") return RESULTS;
    return RESULTS.filter((r) => r.competition === compFilter);
  }, [compFilter]);

  const filtered = useMemo(() => {
    let list = [...PLAYERS];
    if (posFilter !== "ALL") list = list.filter((p) => p.position === posFilter);
    if (statusFilter === "available") {
      list = list.filter((p) => p.status === "active" || p.status === "day-to-day" || p.status === "questionable");
    }
    if (statusFilter === "out") list = list.filter((p) => p.status === "out" || p.status === "doubtful" || p.status === "suspended");
    if (search) list = list.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
    const sortMap = {
      form: (a, b) => b.form - a.form,
      ppg: (a, b) => b.pointsPerGame - a.pointsPerGame,
      rpg: (a, b) => b.reboundsPerGame - a.reboundsPerGame,
      apg: (a, b) => b.assistsPerGame - a.assistsPerGame,
      ts: (a, b) => b.trueShootingPct - a.trueShootingPct,
      mpg: (a, b) => b.minutesPerGame - a.minutesPerGame,
      number: (a, b) => a.number - b.number,
    };
    return list.sort(sortMap[sortBy] || sortMap.ppg);
  }, [posFilter, sortBy, search, statusFilter]);

  return (
    <div style={{ minHeight: "100vh", background: HAWKS_DARK, color: "#fff", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      {/* Header */}
      <div style={{
        background: `linear-gradient(135deg, ${HAWKS_RED} 0%, #8B0A0F 100%)`,
        padding: "24px 24px 20px", boxShadow: "0 4px 24px #0008",
      }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12 }}>
            <div style={{
              width: 48, height: 48, borderRadius: "50%", background: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 2px 12px #0003", overflow: "hidden",
            }}>
              <img src={TEAM_LOGOS["Atlanta Hawks"]} alt="ATL" style={{ width: 36, height: 36, objectFit: "contain" }} />
            </div>
            <div>
              <h1 style={{ margin: 0, fontSize: 22, fontWeight: 800, letterSpacing: -0.5 }}>Atlanta Hawks Tracker</h1>
              <p style={{ margin: 0, fontSize: 12, opacity: 0.85 }}>2025-26 Season — Roster, Stats & Playoff Run</p>
            </div>
          </div>

          {/* View Toggle */}
          <div style={{ display: "flex", gap: 4, background: "#ffffff15", borderRadius: 10, padding: 3, width: "fit-content" }}>
            {[
              { key: "dashboard", label: "Dashboard" },
              { key: "rotation", label: "Rotation" },
              { key: "news", label: "News Feed" },
            ].map((v) => (
              <button
                key={v.key}
                onClick={() => setView(v.key)}
                style={{
                  padding: "8px 20px", borderRadius: 8, border: "none", cursor: "pointer",
                  fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: 1,
                  background: view === v.key ? "#fff" : "transparent",
                  color: view === v.key ? HAWKS_RED : "#fffc",
                  transition: "all 0.2s",
                }}
              >
                {v.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "20px 16px 40px" }}>
        {/* ─── DASHBOARD VIEW ─── */}
        {view === "dashboard" && (
          <>
            <NextGameBanner game={NEXT_GAME} results={RESULTS} />

            {/* Playoff series + standings side by side on wide screens */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 12,
              marginBottom: 4,
            }}>
              {PLAYOFF_SERIES && <PlayoffSeriesCard series={PLAYOFF_SERIES} />}
              <EastStandingsCard standings={EAST_STANDINGS} />
            </div>

            {/* Stats tiles */}
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
              gap: 10, marginBottom: 20,
            }}>
              {[
                { label: "Played", value: filteredResults.length, color: "#fff" },
                { label: "Won", value: filteredResults.filter((r) => r.result === "W").length, color: "#28a745" },
                { label: "Lost", value: filteredResults.filter((r) => r.result === "L").length, color: "#dc3545" },
                {
                  label: "PF/G",
                  value: filteredResults.length
                    ? (filteredResults.reduce((s, r) => {
                        const [h, a] = r.score.split("-").map(Number);
                        return s + (r.home ? h : a);
                      }, 0) / filteredResults.length).toFixed(1)
                    : "—",
                  color: HAWKS_VOLT,
                },
                {
                  label: "PA/G",
                  value: filteredResults.length
                    ? (filteredResults.reduce((s, r) => {
                        const [h, a] = r.score.split("-").map(Number);
                        return s + (r.home ? a : h);
                      }, 0) / filteredResults.length).toFixed(1)
                    : "—",
                  color: "#ff6b6b",
                },
                { label: "Team PPG", value: _.meanBy(PLAYERS, "pointsPerGame").toFixed(1), color: HAWKS_VOLT },
                { label: "Team RPG", value: _.meanBy(PLAYERS, "reboundsPerGame").toFixed(1), color: "#3498db" },
                { label: "Team APG", value: _.meanBy(PLAYERS, "assistsPerGame").toFixed(1), color: "#2ecc71" },
                { label: "Avg Form", value: _.meanBy(PLAYERS, "form").toFixed(1), color: "#2ecc71" },
                { label: "Out", value: PLAYERS.filter((p) => p.status === "out" || p.status === "doubtful").length, color: "#dc3545" },
              ].map((s) => (
                <div key={s.label} style={{ background: "#1e1e28", borderRadius: 12, padding: "12px 10px", textAlign: "center" }}>
                  <div style={{ color: s.color, fontWeight: 800, fontSize: 18 }}>{s.value}</div>
                  <div style={{ color: "#777", fontSize: 9, textTransform: "uppercase", letterSpacing: 1, marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Results Strip */}
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 11, color: HAWKS_VOLT, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 8 }}>
                {compFilter === "All" ? "Recent Results" : `${compFilter} Results`}
              </div>
              <div style={{ display: "flex", gap: 10, overflowX: "auto", paddingBottom: 8, scrollbarWidth: "thin", scrollbarColor: "#333 transparent" }}>
                {filteredResults.map((r, i) => (
                  <div key={i} style={{ flex: "0 0 auto" }}>
                    <ResultCard result={r} />
                  </div>
                ))}
                {filteredResults.length === 0 && (
                  <div style={{ padding: "20px 40px", color: "#666", fontSize: 12 }}>No results for this filter.</div>
                )}
              </div>
            </div>

            {/* Filter Bar */}
            <div style={{
              display: "flex", flexWrap: "wrap", gap: 12, background: "#1e1e28",
              borderRadius: 14, padding: "12px 16px", marginBottom: 16, alignItems: "center",
            }}>
              <input
                type="text"
                placeholder="Search players..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  width: 200, padding: "8px 12px", borderRadius: 8,
                  background: "#252530", border: "1px solid #333", color: "#fff",
                  fontSize: 12, outline: "none", boxSizing: "border-box",
                }}
              />
              <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
                {["ALL", "PG", "SG", "SF", "PF", "C"].map((pos) => (
                  <button
                    key={pos}
                    onClick={() => setPosFilter(pos)}
                    style={{
                      padding: "5px 10px", borderRadius: 6, border: "none", cursor: "pointer",
                      fontWeight: 700, fontSize: 10,
                      background: posFilter === pos ? HAWKS_RED : "#252530",
                      color: posFilter === pos ? "#fff" : "#999",
                      transition: "all 0.2s",
                    }}
                  >
                    {pos}
                  </button>
                ))}
              </div>
              <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
                {[
                  { key: "All", label: "All", bg: "#ffffff22" },
                  { key: "REG", label: "REG", bg: "#444" },
                  { key: "PLAYOFFS", label: "Playoffs", bg: HAWKS_RED },
                ].map((tab) => (
                  <button key={tab.key} onClick={() => setCompFilter(tab.key)} style={{
                    padding: "5px 12px", borderRadius: 14, border: "none", cursor: "pointer",
                    fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5,
                    color: compFilter === tab.key ? "#fff" : "#888",
                    background: compFilter === tab.key ? tab.bg : "#252530",
                    transition: "all 0.2s",
                  }}>
                    {tab.label}
                  </button>
                ))}
              </div>
              <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
                {[
                  { key: "all", label: "All" },
                  { key: "available", label: "Available" },
                  { key: "out", label: "Out" },
                ].map((f) => (
                  <button
                    key={f.key}
                    onClick={() => setStatusFilter(f.key)}
                    style={{
                      padding: "5px 10px", borderRadius: 6, border: "none", cursor: "pointer",
                      fontWeight: 700, fontSize: 10,
                      background: statusFilter === f.key
                        ? (f.key === "out" ? "#dc3545" : f.key === "available" ? "#28a745" : "#252530")
                        : "#252530",
                      color: statusFilter === f.key ? "#fff" : "#999",
                      transition: "all 0.2s",
                    }}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
              <div style={{ display: "flex", gap: 4, alignItems: "center", marginLeft: "auto" }}>
                <span style={{ fontSize: 9, color: "#666", textTransform: "uppercase", letterSpacing: 1 }}>Sort:</span>
                {[
                  { key: "form", label: "Form" },
                  { key: "ppg", label: "PPG" },
                  { key: "rpg", label: "RPG" },
                  { key: "apg", label: "APG" },
                  { key: "ts", label: "TS%" },
                  { key: "mpg", label: "MPG" },
                  { key: "number", label: "#" },
                ].map((s) => (
                  <button
                    key={s.key}
                    onClick={() => setSortBy(s.key)}
                    style={{
                      padding: "5px 10px", borderRadius: 6, border: "none", cursor: "pointer",
                      fontWeight: 700, fontSize: 10,
                      background: sortBy === s.key ? HAWKS_VOLT : "#252530",
                      color: sortBy === s.key ? "#000" : "#999",
                      transition: "all 0.2s",
                    }}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Squad Section Header */}
            <div style={{ fontSize: 11, color: HAWKS_VOLT, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 8 }}>
              Roster
            </div>

            {/* Player Cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 10 }}>
              {filtered.map((player) => (
                <div key={player.id} style={{ gridColumn: expandedId === player.id ? "span 2" : "span 1" }}>
                  <PlayerCard
                    player={player}
                    expanded={expandedId === player.id}
                    onToggle={() => setExpandedId(expandedId === player.id ? null : player.id)}
                  />
                </div>
              ))}
              {filtered.length === 0 && (
                <div style={{ textAlign: "center", padding: 40, color: "#666", gridColumn: "1 / -1" }}>
                  No players found matching your criteria.
                </div>
              )}
            </div>
          </>
        )}

        {/* ─── ROTATION VIEW ─── */}
        {view === "rotation" && (
          <RotationView players={PLAYERS} nextGame={NEXT_GAME} />
        )}

        {/* ─── NEWS VIEW ─── */}
        {view === "news" && (
          <>
            <RSSSourcesPanel />
            <NewsDigestSection />

            <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap", alignItems: "center" }}>
              <span style={{ fontSize: 11, color: "#888", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>Filter:</span>
              {[
                { key: "all", label: "All News", color: HAWKS_RED },
                ...RSS_FEEDS.map((f) => ({ key: f.name, label: f.name, color: f.color })),
              ].map((f) => (
                <button
                  key={f.key}
                  onClick={() => setNewsFilter(f.key)}
                  style={{
                    padding: "6px 14px", borderRadius: 8, border: "none", cursor: "pointer",
                    fontWeight: 700, fontSize: 11,
                    background: newsFilter === f.key ? f.color : "#1e1e28",
                    color: newsFilter === f.key ? "#fff" : "#999",
                    transition: "all 0.2s",
                  }}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <LiveNewsFeed filter={newsFilter} />

            <div style={{
              marginTop: 20, background: "#1e1e28", borderRadius: 12, padding: 20,
              border: `1px solid ${HAWKS_RED}22`,
            }}>
              <div style={{ fontSize: 12, color: HAWKS_VOLT, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 8 }}>
                Subscribe to Live RSS Feeds
              </div>
              <p style={{ fontSize: 13, color: "#aaa", lineHeight: 1.6, margin: 0 }}>
                Click any source above to access its RSS feed URL. Add these to your favorite RSS reader
                (Feedly, Inoreader, NetNewsWire, etc.) for real-time Hawks news updates.
                The feeds include fan-site analysis, major-outlet coverage, and league-wide context.
              </p>
            </div>
          </>
        )}

        {/* Footer */}
        <div style={{
          marginTop: 32, textAlign: "center", padding: "16px 0",
          borderTop: "1px solid #ffffff08", color: "#444", fontSize: 11,
        }}>
          Atlanta Hawks Tracker — 2025-26 Season — Data via NBA.com, Basketball Reference & team reporting
          <br />
          <span style={{ color: "#333" }}>True to Atlanta</span>
        </div>
      </div>
    </div>
  );
}
