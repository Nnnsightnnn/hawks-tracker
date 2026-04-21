// ─── Atlanta Hawks Player Data (2025-26 Season · Updated Apr 21, 2026) ───────
// Single source of truth for roster, games, digest, and RSS feeds.
// Season context: 46-36 regular season, Southeast Division champs, 6-seed in East.
// Playoffs Round 1 vs NY Knicks: SERIES TIED 1-1. Hawks stole Game 2 107-106 at MSG (Apr 20),
// overcoming a 12-point 4th quarter deficit behind McCollum's 32 & Kuminga's 19 off the bench.
// Game 3 Thursday Apr 23 at State Farm Arena (Prime Video).

// Statuses: "active" | "day-to-day" | "questionable" | "doubtful" | "out" | "suspended"
// injuryNote: short description shown on card when not active
export const PLAYERS = [
  // ── Starters ─────────────────────────────────────────────────────────────
  {
    id: 1, name: "Jalen Johnson", number: 1, position: "SF", nationality: "🇺🇸 USA", age: 23, playoffStarter: true,
    gamesPlayed: 74, gamesStarted: 72, minutesPerGame: 34.6,
    pointsPerGame: 22.5, reboundsPerGame: 10.3, assistsPerGame: 7.9,
    stealsPerGame: 1.2, blocksPerGame: 0.8, turnoversPerGame: 3.1,
    fieldGoalPct: 49.8, threePointPct: 36.2, freeThrowPct: 78.4,
    trueShootingPct: 58.2, plusMinus: 5.6,
    form: 7.7, status: "active", injuryNote: null,
    recentNotes: "17/8/3 in Game 2 win (6-12 FG, 0-3 3P); dagger bucket with 10 seconds left. Outside-shooting slump (0-3 3P) the only blemish through two games.",
    playoffStats: { gamesPlayed: 2, minutesPerGame: 36.8, pointsPerGame: 20.0, reboundsPerGame: 7.5, assistsPerGame: 3.0 },
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1630552.png",
    physical: { height: 80, weight: 219 },
    career: [
      { years: "2021", team: "Drafted #20 overall by ATL", type: "draft" },
      { years: "2021-", team: "Atlanta Hawks", type: "senior" },
    ],
  },
  {
    id: 2, name: "Dyson Daniels", number: 5, position: "SG", nationality: "🇦🇺 Australia", age: 22, playoffStarter: true,
    gamesPlayed: 80, gamesStarted: 76, minutesPerGame: 33.2,
    pointsPerGame: 11.9, reboundsPerGame: 6.8, assistsPerGame: 5.9,
    stealsPerGame: 2.0, blocksPerGame: 0.6, turnoversPerGame: 2.2,
    fieldGoalPct: 47.1, threePointPct: 35.8, freeThrowPct: 76.2,
    trueShootingPct: 56.8, plusMinus: 4.3,
    form: 7.1, status: "active", injuryNote: null,
    recentNotes: "Quiet Game 2: 6/4/2 in 26 min with 3 blocks but <3 min in Q4 as Snyder rode Kuminga. Scoring still the lone hole in his playoff profile.",
    playoffStats: { gamesPlayed: 2, minutesPerGame: 31.1, pointsPerGame: 5.0, reboundsPerGame: 6.5, assistsPerGame: 6.5 },
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1630700.png",
    physical: { height: 79, weight: 199 },
    career: [
      { years: "2022", team: "Drafted #8 overall by NOP", type: "draft" },
      { years: "2022-2024", team: "New Orleans Pelicans", type: "senior" },
      { years: "2024-", team: "Atlanta Hawks", type: "senior" },
    ],
  },
  {
    id: 3, name: "Nickeil Alexander-Walker", number: 7, position: "SG", nationality: "🇨🇦 Canada", age: 27, playoffStarter: true,
    gamesPlayed: 78, gamesStarted: 71, minutesPerGame: 33.4,
    pointsPerGame: 20.8, reboundsPerGame: 3.4, assistsPerGame: 3.7,
    stealsPerGame: 1.3, blocksPerGame: 0.4, turnoversPerGame: 1.8,
    fieldGoalPct: 45.9, threePointPct: 39.9, freeThrowPct: 90.2,
    trueShootingPct: 61.2, plusMinus: 6.1,
    form: 7.5, status: "active", injuryNote: null,
    recentNotes: "Two-way stat-sheet stuffer in Game 2: 9/5/6 with 3 BLOCKS on 3-12 FG. Defensive pivots — guarding Brunson late — more valuable than box score.",
    playoffStats: { gamesPlayed: 2, minutesPerGame: 38.6, pointsPerGame: 13.0, reboundsPerGame: 3.0, assistsPerGame: 3.5 },
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1629638.png",
    physical: { height: 77, weight: 204 },
    career: [
      { years: "2019", team: "Drafted #17 overall by BKN", type: "draft" },
      { years: "2019-2022", team: "New Orleans Pelicans", type: "senior" },
      { years: "2022-2023", team: "Utah Jazz", type: "senior" },
      { years: "2023-2025", team: "Minnesota Timberwolves", type: "senior" },
      { years: "2025-", team: "Atlanta Hawks", type: "senior" },
    ],
  },
  {
    id: 4, name: "CJ McCollum", number: 3, position: "PG", nationality: "🇺🇸 USA", age: 34, playoffStarter: true,
    gamesPlayed: 41, gamesStarted: 25, minutesPerGame: 28.8,
    pointsPerGame: 18.7, reboundsPerGame: 3.1, assistsPerGame: 4.1,
    stealsPerGame: 1.0, blocksPerGame: 0.3, turnoversPerGame: 2.1,
    fieldGoalPct: 45.2, threePointPct: 38.1, freeThrowPct: 82.7,
    trueShootingPct: 57.4, plusMinus: 3.1,
    form: 8.9, status: "active", injuryNote: null,
    recentNotes: "Game 2 hero: 32 pts (12-22 FG, 3-10 3P), 6 ast, 2 stl, go-ahead bucket with 34 sec left after 6 of his points in final 2+ minutes. Averaging 29 PPG through two playoff games.",
    playoffStats: { gamesPlayed: 2, minutesPerGame: 34.7, pointsPerGame: 29.0, reboundsPerGame: 2.5, assistsPerGame: 3.5 },
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/203468.png",
    physical: { height: 75, weight: 190 },
    career: [
      { years: "2013", team: "Drafted #10 overall by POR", type: "draft" },
      { years: "2013-2022", team: "Portland Trail Blazers", type: "senior" },
      { years: "2022-2026", team: "New Orleans Pelicans", type: "senior" },
      { years: "2026-", team: "Atlanta Hawks (via Trae Young trade, Jan 2026)", type: "senior" },
    ],
  },
  {
    id: 5, name: "Onyeka Okongwu", number: 17, position: "C", nationality: "🇺🇸 USA", age: 25, playoffStarter: true,
    gamesPlayed: 74, gamesStarted: 63, minutesPerGame: 31.0,
    pointsPerGame: 15.2, reboundsPerGame: 7.6, assistsPerGame: 3.1,
    stealsPerGame: 1.1, blocksPerGame: 1.1, turnoversPerGame: 1.5,
    fieldGoalPct: 48.0, threePointPct: 37.6, freeThrowPct: 75.7,
    trueShootingPct: 59.4, plusMinus: 3.8,
    form: 7.7, status: "active", injuryNote: null,
    recentNotes: "Played through right knee inflammation in Game 2: 15/8 on 6-9 FG (2-3 3P) in 30 min. Four fouls pulled him early; averaging 17/8 for the series.",
    playoffStats: { gamesPlayed: 2, minutesPerGame: 33.4, pointsPerGame: 17.0, reboundsPerGame: 8.0, assistsPerGame: 1.5 },
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1630168.png",
    physical: { height: 81, weight: 240 },
    career: [
      { years: "2020", team: "Drafted #6 overall by ATL", type: "draft" },
      { years: "2020-", team: "Atlanta Hawks", type: "senior" },
    ],
  },

  // ── Rotation / Bench ─────────────────────────────────────────────────────
  {
    id: 6, name: "Zaccharie Risacher", number: 10, position: "SF", nationality: "🇫🇷 France", age: 21,
    gamesPlayed: 66, gamesStarted: 45, minutesPerGame: 22.4,
    pointsPerGame: 9.6, reboundsPerGame: 3.8, assistsPerGame: 1.1,
    stealsPerGame: 0.9, blocksPerGame: 0.5, turnoversPerGame: 1.3,
    fieldGoalPct: 44.6, threePointPct: 37.2, freeThrowPct: 74.8,
    trueShootingPct: 55.9, plusMinus: 1.6,
    form: 5.3, status: "active", injuryNote: null,
    recentNotes: "DNP in Game 2 after 2-minute cameo in Game 1. No. 1 overall pick completely out of Snyder's playoff rotation — Kispert ahead of him as wing reserve.",
    playoffStats: { gamesPlayed: 1, minutesPerGame: 1.0, pointsPerGame: 0.0, reboundsPerGame: 2.0, assistsPerGame: 0.0 },
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1642258.png",
    physical: { height: 80, weight: 204 },
    career: [
      { years: "2024", team: "Drafted #1 overall by ATL", type: "draft" },
      { years: "2024-", team: "Atlanta Hawks", type: "senior" },
    ],
  },
  {
    id: 7, name: "Jonathan Kuminga", number: 0, position: "PF", nationality: "🇨🇩 DR Congo", age: 23,
    gamesPlayed: 62, gamesStarted: 22, minutesPerGame: 24.8,
    pointsPerGame: 14.9, reboundsPerGame: 5.1, assistsPerGame: 2.2,
    stealsPerGame: 0.7, blocksPerGame: 0.5, turnoversPerGame: 1.9,
    fieldGoalPct: 47.2, threePointPct: 33.6, freeThrowPct: 70.1,
    trueShootingPct: 55.1, plusMinus: 2.4,
    form: 8.0, status: "active", injuryNote: null,
    recentNotes: "Game 2 X-factor: 19 pts (7-12 FG), 4 reb, +10 in 35 min including all 12 Q4 minutes. Chase-down block on Brunson sealed the win; officially the first man off the bench now.",
    playoffStats: { gamesPlayed: 2, minutesPerGame: 30.9, pointsPerGame: 13.5, reboundsPerGame: 4.0, assistsPerGame: 1.0 },
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1630228.png",
    physical: { height: 79, weight: 225 },
    career: [
      { years: "2021", team: "Drafted #7 overall by GSW", type: "draft" },
      { years: "2021-2025", team: "Golden State Warriors", type: "senior" },
      { years: "2025-", team: "Atlanta Hawks", type: "senior" },
    ],
  },
  {
    id: 8, name: "Buddy Hield", number: 8, position: "SG", nationality: "🇧🇸 Bahamas", age: 33,
    gamesPlayed: 71, gamesStarted: 12, minutesPerGame: 22.6,
    pointsPerGame: 11.8, reboundsPerGame: 2.8, assistsPerGame: 2.1,
    stealsPerGame: 0.8, blocksPerGame: 0.3, turnoversPerGame: 1.2,
    fieldGoalPct: 42.4, threePointPct: 39.8, freeThrowPct: 86.2,
    trueShootingPct: 58.6, plusMinus: 0.9,
    form: 6.5, status: "active", injuryNote: null,
    recentNotes: "DNP in both Round 1 games so far — squeezed out of the rotation by Kuminga and McCollum minutes.",
    playoffStats: { gamesPlayed: 0, minutesPerGame: 0, pointsPerGame: 0, reboundsPerGame: 0, assistsPerGame: 0 },
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1627741.png",
    physical: { height: 76, weight: 220 },
    career: [
      { years: "2016", team: "Drafted #6 overall by NOP", type: "draft" },
      { years: "2016-2017", team: "New Orleans Pelicans", type: "senior" },
      { years: "2017-2024", team: "Sacramento Kings", type: "senior" },
      { years: "2024-2025", team: "Golden State Warriors", type: "senior" },
      { years: "2025-", team: "Atlanta Hawks", type: "senior" },
    ],
  },
  {
    id: 9, name: "Corey Kispert", number: 24, position: "SF", nationality: "🇺🇸 USA", age: 26,
    gamesPlayed: 40, gamesStarted: 8, minutesPerGame: 21.4,
    pointsPerGame: 9.6, reboundsPerGame: 2.4, assistsPerGame: 1.3,
    stealsPerGame: 0.5, blocksPerGame: 0.2, turnoversPerGame: 0.8,
    fieldGoalPct: 45.1, threePointPct: 40.2, freeThrowPct: 80.4,
    trueShootingPct: 59.1, plusMinus: 1.2,
    form: 6.9, status: "active", injuryNote: null,
    recentNotes: "Garbage-adjacent cameo in Game 2: 4 pts (2-3 FG), 2 reb in 9 min, +10. Snyder's preferred wing reserve over Risacher.",
    playoffStats: { gamesPlayed: 1, minutesPerGame: 8.7, pointsPerGame: 4.0, reboundsPerGame: 2.0, assistsPerGame: 1.0 },
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1630557.png",
    physical: { height: 78, weight: 224 },
    career: [
      { years: "2021", team: "Drafted #15 overall by WAS", type: "draft" },
      { years: "2021-2026", team: "Washington Wizards", type: "senior" },
      { years: "2026-", team: "Atlanta Hawks (via Trae Young trade, Jan 2026)", type: "senior" },
    ],
  },
  {
    id: 10, name: "Gabe Vincent", number: 4, position: "PG", nationality: "🇺🇸 USA", age: 29,
    gamesPlayed: 58, gamesStarted: 4, minutesPerGame: 18.2,
    pointsPerGame: 7.4, reboundsPerGame: 1.8, assistsPerGame: 2.9,
    stealsPerGame: 0.7, blocksPerGame: 0.1, turnoversPerGame: 1.1,
    fieldGoalPct: 40.6, threePointPct: 34.8, freeThrowPct: 82.1,
    trueShootingPct: 52.4, plusMinus: -0.8,
    form: 6.3, status: "active", injuryNote: null,
    recentNotes: "14 min, 3 pts (1-2 FG, 1-2 3P) in Game 2 as backup lead guard. Snyder leaning harder on McCollum in crunch.",
    playoffStats: { gamesPlayed: 2, minutesPerGame: 19.0, pointsPerGame: 1.5, reboundsPerGame: 2.5, assistsPerGame: 0.5 },
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1629216.png",
    physical: { height: 74, weight: 200 },
    career: [
      { years: "2018", team: "Undrafted (UC Santa Barbara)", type: "draft" },
      { years: "2020-2023", team: "Miami Heat", type: "senior" },
      { years: "2023-2025", team: "Los Angeles Lakers", type: "senior" },
      { years: "2025-", team: "Atlanta Hawks", type: "senior" },
    ],
  },
  {
    id: 11, name: "Mouhamed Gueye", number: 18, position: "PF", nationality: "🇸🇳 Senegal", age: 22,
    gamesPlayed: 46, gamesStarted: 6, minutesPerGame: 14.8,
    pointsPerGame: 6.2, reboundsPerGame: 4.6, assistsPerGame: 0.8,
    stealsPerGame: 0.4, blocksPerGame: 0.7, turnoversPerGame: 0.6,
    fieldGoalPct: 52.1, threePointPct: 30.4, freeThrowPct: 68.2,
    trueShootingPct: 56.8, plusMinus: 0.2,
    form: 6.2, status: "active", injuryNote: null,
    recentNotes: "Forced into emergency rotation in Game 2 after Okongwu's fourth foul — 0 pts in 5 min, -3. Tony Bradley got the bigger call-up.",
    playoffStats: { gamesPlayed: 2, minutesPerGame: 13.0, pointsPerGame: 1.0, reboundsPerGame: 2.0, assistsPerGame: 0.0 },
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1641793.png",
    physical: { height: 83, weight: 210 },
    career: [
      { years: "2023", team: "Drafted #39 overall by ATL", type: "draft" },
      { years: "2023-", team: "Atlanta Hawks", type: "senior" },
    ],
  },
  {
    id: 12, name: "Keaton Wallace", number: 2, position: "PG", nationality: "🇺🇸 USA", age: 26,
    gamesPlayed: 44, gamesStarted: 2, minutesPerGame: 13.2,
    pointsPerGame: 5.8, reboundsPerGame: 1.4, assistsPerGame: 2.1,
    stealsPerGame: 0.5, blocksPerGame: 0.1, turnoversPerGame: 0.7,
    fieldGoalPct: 43.8, threePointPct: 36.1, freeThrowPct: 78.4,
    trueShootingPct: 54.2, plusMinus: -1.1,
    form: 6.4, status: "active", injuryNote: null,
    playoffStats: { gamesPlayed: 0, minutesPerGame: 0, pointsPerGame: 0, reboundsPerGame: 0, assistsPerGame: 0 },
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1641734.png",
    physical: { height: 75, weight: 185 },
    career: [
      { years: "2021", team: "Undrafted (UTSA)", type: "draft" },
      { years: "2023-", team: "Atlanta Hawks", type: "senior" },
    ],
  },
  {
    id: 13, name: "Asa Newell", number: 14, position: "PF", nationality: "🇺🇸 USA", age: 19,
    gamesPlayed: 32, gamesStarted: 0, minutesPerGame: 10.4,
    pointsPerGame: 4.2, reboundsPerGame: 2.8, assistsPerGame: 0.5,
    stealsPerGame: 0.3, blocksPerGame: 0.3, turnoversPerGame: 0.5,
    fieldGoalPct: 48.9, threePointPct: 28.6, freeThrowPct: 65.4,
    trueShootingPct: 52.1, plusMinus: -0.4,
    form: 6.2, status: "active", injuryNote: null,
    playoffStats: { gamesPlayed: 0, minutesPerGame: 0, pointsPerGame: 0, reboundsPerGame: 0, assistsPerGame: 0 },
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1642351.png",
    physical: { height: 82, weight: 220 },
    career: [
      { years: "2025", team: "Drafted #23 overall by ATL (from Georgia)", type: "draft" },
      { years: "2025-", team: "Atlanta Hawks", type: "senior" },
    ],
  },
  {
    id: 14, name: "Tony Bradley", number: 13, position: "C", nationality: "🇺🇸 USA", age: 27,
    gamesPlayed: 28, gamesStarted: 5, minutesPerGame: 11.6,
    pointsPerGame: 4.4, reboundsPerGame: 3.8, assistsPerGame: 0.6,
    stealsPerGame: 0.2, blocksPerGame: 0.5, turnoversPerGame: 0.5,
    fieldGoalPct: 58.2, threePointPct: 0, freeThrowPct: 70.8,
    trueShootingPct: 61.4, plusMinus: -0.9,
    form: 6.4, status: "active", injuryNote: null,
    recentNotes: "Activated in Game 2: 12 min, 2 pts, 1 stl, 1 blk, +7. Preferred spell-big ahead of Gueye when Okongwu got in foul trouble.",
    playoffStats: { gamesPlayed: 1, minutesPerGame: 12.0, pointsPerGame: 2.0, reboundsPerGame: 1.0, assistsPerGame: 1.0 },
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1628396.png",
    physical: { height: 82, weight: 248 },
    career: [
      { years: "2017", team: "Drafted #28 overall by UTA", type: "draft" },
      { years: "2017-2020", team: "Utah Jazz", type: "senior" },
      { years: "2020-2022", team: "Philadelphia 76ers", type: "senior" },
      { years: "2022-2024", team: "Chicago Bulls", type: "senior" },
      { years: "2025-", team: "Atlanta Hawks", type: "senior" },
    ],
  },
  {
    id: 15, name: "Jock Landale", number: 31, position: "C", nationality: "🇦🇺 Australia", age: 30,
    gamesPlayed: 52, gamesStarted: 7, minutesPerGame: 14.8,
    pointsPerGame: 6.1, reboundsPerGame: 4.2, assistsPerGame: 1.0,
    stealsPerGame: 0.3, blocksPerGame: 0.5, turnoversPerGame: 0.8,
    fieldGoalPct: 54.8, threePointPct: 32.1, freeThrowPct: 78.2,
    trueShootingPct: 58.4, plusMinus: -0.3,
    form: 6.4, status: "out", injuryNote: "Right high-ankle sprain (Apr 1) — ruled out for Round 1, re-evaluation timeline extends past first round",
    playoffStats: null,
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1629111.png",
    physical: { height: 83, weight: 255 },
    career: [
      { years: "2020", team: "Undrafted (Saint Mary's)", type: "draft" },
      { years: "2021-2022", team: "San Antonio Spurs", type: "senior" },
      { years: "2022-2024", team: "Phoenix Suns", type: "senior" },
      { years: "2024-2025", team: "Houston Rockets", type: "senior" },
      { years: "2025-", team: "Atlanta Hawks", type: "senior" },
    ],
  },
];

// ─── RSS Feed Sources ──────────────────────────────────────────────────────
// Validated via api.rss2json.com on Apr 18, 2026.
export const RSS_FEEDS = [
  { name: "Peachtree Hoops", url: "https://www.peachtreehoops.com/rss/index.xml", category: "fan", color: "#E03A3E" },
  { name: "Hoops Rumors - Hawks", url: "https://www.hoopsrumors.com/atlanta-hawks/feed", category: "major", color: "#26282A" },
  { name: "ESPN NBA", url: "https://www.espn.com/espn/rss/nba/news", category: "major", color: "#CC0000" },
];

// ─── Team Logos ────────────────────────────────────────────────────────────
// NBA.com CDN logos (250x250 transparent PNG)
export const TEAM_LOGOS = {
  "Atlanta Hawks":         "https://cdn.nba.com/logos/nba/1610612737/primary/L/logo.svg",
  "Hawks":                 "https://cdn.nba.com/logos/nba/1610612737/primary/L/logo.svg",
  "New York Knicks":       "https://cdn.nba.com/logos/nba/1610612752/primary/L/logo.svg",
  "Knicks":                "https://cdn.nba.com/logos/nba/1610612752/primary/L/logo.svg",
  "Boston Celtics":        "https://cdn.nba.com/logos/nba/1610612738/primary/L/logo.svg",
  "Celtics":               "https://cdn.nba.com/logos/nba/1610612738/primary/L/logo.svg",
  "Brooklyn Nets":         "https://cdn.nba.com/logos/nba/1610612751/primary/L/logo.svg",
  "Brooklyn":              "https://cdn.nba.com/logos/nba/1610612751/primary/L/logo.svg",
  "Miami Heat":            "https://cdn.nba.com/logos/nba/1610612748/primary/L/logo.svg",
  "Miami":                 "https://cdn.nba.com/logos/nba/1610612748/primary/L/logo.svg",
  "Cleveland Cavaliers":   "https://cdn.nba.com/logos/nba/1610612739/primary/L/logo.svg",
  "Cleveland":             "https://cdn.nba.com/logos/nba/1610612739/primary/L/logo.svg",
  "Orlando Magic":         "https://cdn.nba.com/logos/nba/1610612753/primary/L/logo.svg",
  "Orlando":               "https://cdn.nba.com/logos/nba/1610612753/primary/L/logo.svg",
  "Milwaukee Bucks":       "https://cdn.nba.com/logos/nba/1610612749/primary/L/logo.svg",
  "Milwaukee":             "https://cdn.nba.com/logos/nba/1610612749/primary/L/logo.svg",
  "Detroit Pistons":       "https://cdn.nba.com/logos/nba/1610612765/primary/L/logo.svg",
  "Detroit":               "https://cdn.nba.com/logos/nba/1610612765/primary/L/logo.svg",
  "Sacramento Kings":      "https://cdn.nba.com/logos/nba/1610612758/primary/L/logo.svg",
  "Sacramento":            "https://cdn.nba.com/logos/nba/1610612758/primary/L/logo.svg",
  "Memphis Grizzlies":     "https://cdn.nba.com/logos/nba/1610612763/primary/L/logo.svg",
  "Memphis":               "https://cdn.nba.com/logos/nba/1610612763/primary/L/logo.svg",
  "Golden State Warriors": "https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg",
  "Golden State":          "https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg",
  "Houston Rockets":       "https://cdn.nba.com/logos/nba/1610612745/primary/L/logo.svg",
  "Houston":               "https://cdn.nba.com/logos/nba/1610612745/primary/L/logo.svg",
  "Dallas Mavericks":      "https://cdn.nba.com/logos/nba/1610612742/primary/L/logo.svg",
  "Dallas":                "https://cdn.nba.com/logos/nba/1610612742/primary/L/logo.svg",
};

// ─── Next Game ─────────────────────────────────────────────────────────────
export const NEXT_GAME = {
  opponent: "New York Knicks",
  shortName: "NYK",
  home: true,                                   // Game 3 shifts to State Farm Arena
  date: "2026-04-23T19:30:00-04:00",
  competition: "PLAYOFFS",
  venue: "State Farm Arena",
  broadcast: "Prime Video",
  seriesContext: "Round 1 · Game 3 · Series tied 1-1",
};

// ─── Game Results (2025-26 regular season · last 16 games) ─────────────────
// result: "W" | "L"; score format "ATL-OPP"
export const RESULTS = [
  { date: "2026-04-20", opponent: "New York Knicks",      home: false, score: "107-106", competition: "PLAYOFFS", result: "W", topScorers: "R1G2 · McCollum 32, Kuminga 19, Johnson 17-8-3 — 28-15 Q4 comeback" },
  { date: "2026-04-18", opponent: "New York Knicks",      home: false, score: "102-113", competition: "PLAYOFFS", result: "L", topScorers: "R1G1 · McCollum 26, Johnson 23, Daniels 9-9-11" },
  { date: "2026-04-12", opponent: "Miami Heat",           home: true,  score: "117-143", competition: "REG", result: "L", topScorers: "Johnson 24" },
  { date: "2026-04-10", opponent: "Cleveland Cavaliers",  home: true,  score: "124-102", competition: "REG", result: "W", topScorers: "Johnson 28, NAW 22 — clinched SE Division" },
  { date: "2026-04-08", opponent: "Cleveland Cavaliers",  home: false, score: "116-122", competition: "REG", result: "L", topScorers: "Johnson 26" },
  { date: "2026-04-06", opponent: "New York Knicks",      home: false, score: "105-108", competition: "REG", result: "L", topScorers: "NAW 23" },
  { date: "2026-04-03", opponent: "Brooklyn Nets",        home: true,  score: "141-107", competition: "REG", result: "W", topScorers: "Johnson 30, McCollum 22" },
  { date: "2026-04-01", opponent: "Orlando Magic",        home: true,  score: "130-101", competition: "REG", result: "W", topScorers: "Johnson 25" },
  { date: "2026-03-30", opponent: "Boston Celtics",       home: true,  score: "112-102", competition: "REG", result: "W", topScorers: "NAW 27, Johnson 24" },
  { date: "2026-03-28", opponent: "Sacramento Kings",     home: false, score: "123-113", competition: "REG", result: "W", topScorers: "Johnson 29, Daniels 18 — Snyder 500th win" },
  { date: "2026-03-27", opponent: "Boston Celtics",       home: false, score: "102-109", competition: "REG", result: "L", topScorers: "Johnson 22" },
  { date: "2026-03-25", opponent: "Detroit Pistons",      home: true,  score: "130-129", competition: "REG", result: "W", topScorers: "NAW 31 (OT)" },
  { date: "2026-03-23", opponent: "Memphis Grizzlies",    home: true,  score: "146-107", competition: "REG", result: "W", topScorers: "Johnson 26, McCollum 24" },
  { date: "2026-03-21", opponent: "Golden State Warriors",home: true,  score: "126-110", competition: "REG", result: "W", topScorers: "Johnson 28" },
  { date: "2026-03-20", opponent: "Houston Rockets",      home: false, score: "95-117",  competition: "REG", result: "L", topScorers: "NAW 21" },
  { date: "2026-03-18", opponent: "Dallas Mavericks",     home: true,  score: "135-120", competition: "REG", result: "W", topScorers: "Johnson 32, NAW 24" },
  { date: "2026-03-16", opponent: "Orlando Magic",        home: false, score: "124-112", competition: "REG", result: "W", topScorers: "Johnson 27" },
  { date: "2026-03-14", opponent: "Milwaukee Bucks",      home: true,  score: "122-99",  competition: "REG", result: "W", topScorers: "Johnson 30" },
];

// ─── Playoff Series State ──────────────────────────────────────────────────
// Used by the Playoff Series card. null = no active series.
export const PLAYOFF_SERIES = {
  round: 1,
  opponent: "New York Knicks",
  opponentShort: "NYK",
  seed: 6,
  opponentSeed: 3,
  wins: 1,
  losses: 1,
  games: [
    { game: 1, date: "2026-04-18", home: false, score: "102-113", result: "L", venue: "Madison Square Garden", broadcast: "Prime Video" },
    { game: 2, date: "2026-04-20", home: false, score: "107-106", result: "W", venue: "Madison Square Garden", broadcast: "NBC" },
    { game: 3, date: "2026-04-23", home: true,  score: null, result: null, venue: "State Farm Arena", broadcast: "Prime Video" },
    { game: 4, date: "2026-04-25", home: true,  score: null, result: null, venue: "State Farm Arena", broadcast: "NBC" },
  ],
};

// ─── East Standings (final 2025-26 regular season) ─────────────────────────
export const EAST_STANDINGS = [
  { seed: 1, team: "Cleveland Cavaliers", record: "64-18" },
  { seed: 2, team: "Boston Celtics",      record: "57-25" },
  { seed: 3, team: "New York Knicks",     record: "53-29" },
  { seed: 4, team: "Milwaukee Bucks",     record: "51-31" },
  { seed: 5, team: "Orlando Magic",       record: "48-34" },
  { seed: 6, team: "Atlanta Hawks",       record: "46-36" },
  { seed: 7, team: "Detroit Pistons",     record: "44-38" },
  { seed: 8, team: "Miami Heat",          record: "42-40" },
];

// ─── AI News Digest (generated from live web search) ───────────────────────
export const NEWS_DIGEST = {
  generatedAt: "2026-04-21T12:20:00Z",
  summary:
    "Atlanta stole Game 2 at MSG 107-106 Monday night, erasing a 12-point 4th-quarter deficit and heading home with the series tied 1-1. CJ McCollum was the hero — 32 points on 12-22 shooting with the go-ahead bucket with 34 seconds left — and Jonathan Kuminga blew up off the bench for 19 and a chase-down block on Brunson at the rim. Atlanta outscored New York 28-15 in the fourth, with the Knicks going 5-of-19 from the field the final 12 minutes. Onyeka Okongwu played through right knee inflammation for 30 minutes of 15/8 ball before foul trouble pulled him; Jalen Johnson added 17/8/3 and the dagger bucket with 10 seconds left. Game 3 tips Thursday Apr 23 at State Farm Arena on Prime Video with Atlanta now a sizable home favorite. Snyder's key adjustment — Daniels <3 minutes in Q4, Kuminga on the floor the entire period — is the story line that defines how the Hawks use their depth the rest of the series.",
  keyTopics: [
    {
      title: "Hawks 107, Knicks 106 — Atlanta Steals Game 2, Series Tied 1-1",
      detail:
        "Atlanta erased a 12-point 4th-quarter deficit to win 107-106 at MSG Monday night (NBA.com/ESPN, Apr 20), outscoring NY 28-15 in the fourth and holding the Knicks to 5-of-19 from the field over the final 12 minutes. The series heads to State Farm Arena tied 1-1 with Game 3 Thursday Apr 23 on Prime Video.",
      category: "games",
    },
    {
      title: "McCollum Drops 32, Go-Ahead Bucket with 34 Seconds — MSG's New Villain",
      detail:
        "CJ McCollum scored a game-high 32 on 12-22 FG (3-10 3P, 5-7 FT) with 6 assists and 2 steals, including 6 of his points in the final 2+ minutes and the go-ahead bucket with 34 seconds left (Yahoo Sports, NBC Sports, Apr 21). Through two playoff games he's averaging 29.0 PPG — immediate vindication of the Trae Young trade in postseason returns.",
      category: "games",
    },
    {
      title: "Kuminga the X-Factor: 19 Off the Bench, Played Every Q4 Minute",
      detail:
        "Jonathan Kuminga was the decisive bench spark — 19 points (7-12 FG), 4 rebounds, a +10, and a chase-down block on Brunson at the rim (NBA.com, Apr 21). Snyder played him all 12 fourth-quarter minutes. Peachtree Hoops/Soaring Down South: he's officially the first man off the bench now.",
      category: "rotation",
    },
    {
      title: "Daniels Under 3 Minutes in Q4 — Major Rotation Shift",
      detail:
        "Dyson Daniels played just 26 minutes in Game 2 (6/4/2, 3 blocks) and sat the last five-plus minutes (FanDuel, Apr 20). Snyder prioritized Kuminga's offense and NAW's shot-making over Daniels' defense in crunch — a meaningful change from a DPOY-caliber regular season rotation pattern. Through two games he's averaging just 5.0 PPG.",
      category: "rotation",
    },
    {
      title: "Okongwu Played Through Knee Inflammation — 15/8, 4 Fouls",
      detail:
        "Onyeka Okongwu (questionable pregame, right knee inflammation) was cleared and started (RotoWire, Apr 20), putting up 15 points on 6-9 FG (2-3 from three) and 8 rebounds in 29:52. Picked up his fourth foul early and watched Gueye/Bradley absorb spell minutes. Averaging 17 & 8 through two playoff games.",
      category: "injuries",
    },
    {
      title: "NAW: 3 Blocks, Huge Defensive Stops — Box Score Doesn't Capture It",
      detail:
        "Nickeil Alexander-Walker had 9 points on 3-12 shooting but posted 5 rebounds, 6 assists and a stunning 3 blocks in 38 minutes (plaintextsports box score, Apr 20). Snyder repeatedly put him on Brunson in the fourth — the CBS Sports headline on Mike Brown's \"failed first major test\" largely traces to those matchup shifts.",
      category: "rotation",
    },
    {
      title: "Johnson 17/8/3 With Late Dagger — 0-3 From Three the Only Blemish",
      detail:
        "Jalen Johnson scored 17 on 6-12 FG (0-3 3P) with 8 rebounds, 3 assists and a bucket with 10 seconds left to push Atlanta's lead to two (Yahoo Sports, Apr 21). Through two playoff games: 20.0 PPG, 7.5 RPG — the outside shooting (0-3 combined from 3 in Games 1-2 relative to 36.2% in regular season) is the single stat to watch in Game 3.",
      category: "games",
    },
    {
      title: "Risacher DNP in Game 2 — No. 1 Pick Off the Rotation",
      detail:
        "Zaccharie Risacher did not play in Game 2 after a 2-minute Game 1 cameo (Yardbarker/Heavy, Apr 21). Kispert (9 min, 4 pts) is Snyder's wing reserve, and the rookie is completely out of the playoff rotation barring a blowout. A real second-year-jump concern after 9.6/3.8/1.1 regular season averages.",
      category: "rotation",
    },
    {
      title: "Bradley Activated Over Gueye — Backup Big Pivot",
      detail:
        "Tony Bradley got 12 minutes (2 pts, 1 stl, 1 blk, +7) vs. Gueye's 5 (0 pts, -3) after Okongwu's foul trouble. The plaintextsports box score shows Snyder preferring Bradley's size to Gueye's mobility in the KAT matchup. Notable, because Gueye was the advertised emergency starter pregame.",
      category: "rotation",
    },
    {
      title: "Game 3 Thursday at State Farm Arena — Hawks Home Favorites",
      detail:
        "Round 1 Game 3 tips Thursday Apr 23 at 7:30 PM ET at State Farm Arena on Prime Video. Atlanta shifts from road underdog to home favorite for the first time this series — and historically wins Game 3 after splitting Games 1-2 at a very high clip in the 2-2-1-1-1 format.",
      category: "games",
    },
    {
      title: "Snyder's Fourth-Quarter Adjustments Held Knicks to 15 Points",
      detail:
        "Mike Brown's two-man Brunson-Towns core went 5-of-19 and scored 15 fourth-quarter points (CBS Sports, Apr 21). Snyder's late-game lineup — McCollum / NAW / Kuminga / Johnson / Okongwu — was a +13 in the fourth. Expect it to be the Hawks' go-to closing five the rest of the series.",
      category: "rotation",
    },
    {
      title: "Trae Young Trade Verdict: McCollum 29 PPG, Kispert in the Rotation",
      detail:
        "Two playoff games since the January Trae-for-McCollum-and-Kispert deal: McCollum averaging 29 PPG with the heroic Game 2 (Hawks.com/Soaring Down South), Kispert in Snyder's wing rotation, and Washington's Trae Young watching from home after WAS missed the play-in. The internal referendum is over; the question shifts to Snyder's extension posture.",
      category: "trades",
    },
  ],
  sources: [
    "NBA.com",
    "ESPN",
    "Yahoo Sports",
    "NBC Sports",
    "CBS Sports",
    "ABC7 New York",
    "Al Jazeera",
    "NY1",
    "BVM Sports",
    "Peachtree Hoops",
    "Soaring Down South",
    "FanDuel Research",
    "RotoWire",
    "Yardbarker",
    "Heavy Sports",
    "plaintextsports.com",
    "Hawks.com",
  ],
};
