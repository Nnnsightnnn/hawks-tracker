// ─── Atlanta Hawks Player Data (2025-26 Season · Updated Apr 20, 2026) ───────
// Single source of truth for roster, games, digest, and RSS feeds.
// Season context: 46-36 regular season, Southeast Division champs, 6-seed in East.
// Playoffs Round 1 vs NY Knicks: NYK leads 1-0 after 113-102 Game 1 win at MSG (Apr 18).
// Game 2 tonight at MSG (8 PM ET, NBC). Okongwu questionable with right knee inflammation.

// Statuses: "active" | "day-to-day" | "questionable" | "doubtful" | "out" | "suspended"
// injuryNote: short description shown on card when not active
export const PLAYERS = [
  // ── Starters ─────────────────────────────────────────────────────────────
  {
    id: 1, name: "Jalen Johnson", number: 1, position: "SF", nationality: "🇺🇸 USA", age: 23,
    gamesPlayed: 74, gamesStarted: 72, minutesPerGame: 34.6,
    pointsPerGame: 22.5, reboundsPerGame: 10.3, assistsPerGame: 7.9,
    stealsPerGame: 1.4, blocksPerGame: 0.8, turnoversPerGame: 3.1,
    fieldGoalPct: 49.8, threePointPct: 36.2, freeThrowPct: 78.4,
    trueShootingPct: 58.2, plusMinus: 5.6,
    form: 8.1, status: "active", injuryNote: null,
    recentNotes: "Playoff debut: 23 pts on 8-19 FG, 7 reb, 3 ast. Knicks loaded up to force the ball out of his hands.",
    playoffStats: { gamesPlayed: 1, minutesPerGame: 38, pointsPerGame: 23, reboundsPerGame: 7, assistsPerGame: 3 },
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1630552.png",
    physical: { height: 80, weight: 219 },
    career: [
      { years: "2021", team: "Drafted #20 overall by ATL", type: "draft" },
      { years: "2021-", team: "Atlanta Hawks", type: "senior" },
    ],
  },
  {
    id: 2, name: "Dyson Daniels", number: 5, position: "SG", nationality: "🇦🇺 Australia", age: 22,
    gamesPlayed: 80, gamesStarted: 76, minutesPerGame: 33.1,
    pointsPerGame: 15.2, reboundsPerGame: 5.8, assistsPerGame: 5.6,
    stealsPerGame: 3.1, blocksPerGame: 0.6, turnoversPerGame: 2.2,
    fieldGoalPct: 47.1, threePointPct: 35.8, freeThrowPct: 76.2,
    trueShootingPct: 56.8, plusMinus: 4.3,
    form: 8.0, status: "active", injuryNote: null,
    recentNotes: "Near triple-double in playoff debut: 4-9-11 with 3 stl, 7 deflections, 6 screen assists. Scoring still a question.",
    playoffStats: { gamesPlayed: 1, minutesPerGame: 36, pointsPerGame: 4, reboundsPerGame: 9, assistsPerGame: 11 },
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1630700.png",
    physical: { height: 79, weight: 199 },
    career: [
      { years: "2022", team: "Drafted #8 overall by NOP", type: "draft" },
      { years: "2022-2024", team: "New Orleans Pelicans", type: "senior" },
      { years: "2024-", team: "Atlanta Hawks", type: "senior" },
    ],
  },
  {
    id: 3, name: "Nickeil Alexander-Walker", number: 7, position: "SG", nationality: "🇨🇦 Canada", age: 27,
    gamesPlayed: 78, gamesStarted: 71, minutesPerGame: 31.4,
    pointsPerGame: 20.8, reboundsPerGame: 4.1, assistsPerGame: 3.8,
    stealsPerGame: 1.5, blocksPerGame: 0.4, turnoversPerGame: 1.8,
    fieldGoalPct: 46.4, threePointPct: 39.6, freeThrowPct: 85.3,
    trueShootingPct: 61.2, plusMinus: 6.1,
    form: 7.7, status: "active", injuryNote: null,
    recentNotes: "17 pts on 7-16 FG (3-8 3P) in Game 1, rough shooting night. Bounce-back candidate in Game 2.",
    playoffStats: { gamesPlayed: 1, minutesPerGame: 39, pointsPerGame: 17, reboundsPerGame: 1, assistsPerGame: 1 },
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
    id: 4, name: "CJ McCollum", number: 3, position: "PG", nationality: "🇺🇸 USA", age: 34,
    gamesPlayed: 42, gamesStarted: 39, minutesPerGame: 31.8,
    pointsPerGame: 18.7, reboundsPerGame: 3.6, assistsPerGame: 4.9,
    stealsPerGame: 1.0, blocksPerGame: 0.3, turnoversPerGame: 2.1,
    fieldGoalPct: 45.2, threePointPct: 38.1, freeThrowPct: 82.7,
    trueShootingPct: 57.4, plusMinus: 3.1,
    form: 8.0, status: "active", injuryNote: null,
    recentNotes: "Team-high 26 pts on 11-20 FG (4-9 3P) in his first playoff appearance as a Hawk — best offensive presence in Game 1.",
    playoffStats: { gamesPlayed: 1, minutesPerGame: 34, pointsPerGame: 26, reboundsPerGame: 2, assistsPerGame: 1 },
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
    id: 5, name: "Onyeka Okongwu", number: 17, position: "C", nationality: "🇺🇸 USA", age: 25,
    gamesPlayed: 76, gamesStarted: 63, minutesPerGame: 28.4,
    pointsPerGame: 14.8, reboundsPerGame: 8.6, assistsPerGame: 1.7,
    stealsPerGame: 0.9, blocksPerGame: 1.4, turnoversPerGame: 1.5,
    fieldGoalPct: 56.8, threePointPct: 34.1, freeThrowPct: 72.4,
    trueShootingPct: 62.1, plusMinus: 3.8,
    form: 7.5, status: "questionable",
    injuryNote: "Right knee inflammation (questionable for Game 2, popped on report overnight — Yahoo/FanDuel, Apr 19). Hawks need him to check Towns; if out, Gueye and Tony Bradley absorb minutes.",
    recentNotes: "19 & 8 in Game 1 on KAT; now questionable for Game 2 with right knee inflammation.",
    playoffStats: { gamesPlayed: 1, minutesPerGame: 37, pointsPerGame: 19, reboundsPerGame: 8, assistsPerGame: 2 },
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
    gamesPlayed: 68, gamesStarted: 46, minutesPerGame: 26.2,
    pointsPerGame: 13.4, reboundsPerGame: 4.2, assistsPerGame: 1.8,
    stealsPerGame: 0.9, blocksPerGame: 0.5, turnoversPerGame: 1.3,
    fieldGoalPct: 44.6, threePointPct: 37.2, freeThrowPct: 74.8,
    trueShootingPct: 55.4, plusMinus: 1.6,
    form: 5.8, status: "active", injuryNote: null,
    recentNotes: "Only 2 min in Game 1 (0-3 FG, 4 reb), then sat. Snyder riding Kispert as wing reserve — playoff role minimal for now.",
    playoffStats: { gamesPlayed: 1, minutesPerGame: 2, pointsPerGame: 0, reboundsPerGame: 4, assistsPerGame: 0 },
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
    form: 6.8, status: "active", injuryNote: null,
    recentNotes: "8 pts (3-7 FG, 0-2 3P) in 27 min off the bench in Game 1. Needs more secondary creation if Hawks are going to take pressure off starters.",
    playoffStats: { gamesPlayed: 1, minutesPerGame: 27, pointsPerGame: 8, reboundsPerGame: 4, assistsPerGame: 1 },
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
    form: 6.9, status: "active", injuryNote: null,
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
    form: 6.8, status: "active", injuryNote: null,
    playoffStats: { gamesPlayed: 0, minutesPerGame: 0, pointsPerGame: 0, reboundsPerGame: 0, assistsPerGame: 0 },
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
    form: 6.5, status: "active", injuryNote: null,
    playoffStats: { gamesPlayed: 1, minutesPerGame: 24, pointsPerGame: 0, reboundsPerGame: 4, assistsPerGame: 0 },
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
    form: 6.6, status: "active", injuryNote: null,
    recentNotes: "Backup center in Game 1 (21 min, 2 pts, 4 reb). Role may grow in Game 2 if Okongwu can't go.",
    playoffStats: { gamesPlayed: 1, minutesPerGame: 21, pointsPerGame: 2, reboundsPerGame: 4, assistsPerGame: 0 },
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
    form: 6.0, status: "active", injuryNote: null,
    recentNotes: "DNP in Game 1. On standby if Okongwu misses Game 2 — Gueye is next in line but Bradley provides emergency size.",
    playoffStats: { gamesPlayed: 0, minutesPerGame: 0, pointsPerGame: 0, reboundsPerGame: 0, assistsPerGame: 0 },
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
  home: false,                                  // Game 2 at Madison Square Garden (Knicks are higher seed)
  date: "2026-04-20T20:00:00-04:00",
  competition: "PLAYOFFS",
  venue: "Madison Square Garden",
  broadcast: "NBC",
  seriesContext: "Round 1 · Game 2 · NYK leads 1-0",
};

// ─── Game Results (2025-26 regular season · last 16 games) ─────────────────
// result: "W" | "L"; score format "ATL-OPP"
export const RESULTS = [
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
  wins: 0,
  losses: 1,
  games: [
    { game: 1, date: "2026-04-18", home: false, score: "102-113", result: "L", venue: "Madison Square Garden", broadcast: "Prime Video" },
    { game: 2, date: "2026-04-20", home: false, score: null, result: null, venue: "Madison Square Garden", broadcast: "NBC" },
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
  generatedAt: "2026-04-20T12:15:00Z",
  summary:
    "Onyeka Okongwu is questionable for tonight's Game 2 with right knee inflammation — the starting C popped up on the Hawks' injury report overnight (Yahoo/FanDuel, Apr 19), and he's the player Atlanta most needs to check Karl-Anthony Towns after Landale was lost for the round. Game 2 tips at 8 PM ET on NBC from Madison Square Garden, with the Hawks already trailing 0-1 after Saturday's 113-102 Game 1 loss. Atlanta is a historically daunting 3-38 when dropping the series opener and 0-21 when falling into an 0-2 hole — a true must-have night. Snyder's to-do list after Game 1: contain the Towns-Brunson two-man game that ignited a 19-point third-quarter Knicks run, close the 35-to-15 free-throw gap he called out postgame, and get more from a bench that generated only 13 points outside Kuminga's 8. If Okongwu is scratched, Mouhamed Gueye steps up as the emergency KAT defender with Tony Bradley next in line; oddsmakers have the Hawks +5.5 (FanDuel, Apr 20).",
  keyTopics: [
    {
      title: "Okongwu Questionable for Game 2 with Right Knee Inflammation",
      detail:
        "Onyeka Okongwu (right knee inflammation) popped up on Atlanta's Game 2 injury report overnight (Yahoo Sports/FanDuel, Apr 19) and is listed as questionable. He had 19 and 8 in Game 1 and is the team's only rotation-level KAT defender with Landale out. If ruled out, Mouhamed Gueye draws the start and Tony Bradley — DNP in Game 1 — becomes the next big.",
      category: "injuries",
    },
    {
      title: "Game 2 Tonight at 8 PM ET on NBC — Hawks +5.5",
      detail:
        "Game 2 tips Monday Apr 20 at 8 PM ET at Madison Square Garden on NBC/Peacock. New York is a 5.5-point favorite and -220 on the moneyline (FanDuel, Apr 20); total is 216.5. Game 3 shifts to State Farm Arena Thursday Apr 23 on Prime Video. Atlanta is 3-38 all-time when down 1-0 in a series and 0-21 when dropping Game 2 on the road — the margin for error is gone.",
      category: "games",
    },
    {
      title: "Snyder on Towns: 'Pick Your Poison' — Game 2 Chalkboard Item",
      detail:
        "Quin Snyder conceded postgame (Yahoo, Apr 18) that defending KAT was \"pick your poison\" — taking Towns away freed Brunson, refocusing on Brunson opened Towns. Late-game adjustment: Daniels on Towns with Okongwu on Hart. Expect Atlanta to open that way in Game 2, especially if Okongwu's minutes need to be managed.",
      category: "rotation",
    },
    {
      title: "Snyder Called Out 35-15 Free-Throw Gap",
      detail:
        "Snyder, postgame (Kevin Chouinard/Peachtree Hoops, Apr 18): \"They shoot 35 free throws and we shoot what, 15? That is a big discrepancy that we need to take care of. Some of them were unnecessary where we just reached. You've got to be more disciplined.\" Towns went 10-of-10 from the line by himself. Atlanta's Game 2 reach rate is the single most controllable variable.",
      category: "rotation",
    },
    {
      title: "Game 1 Recap: Knicks 113, Hawks 102",
      detail:
        "A 19-point Brunson first quarter and 19-point Towns third quarter bookended Saturday's 113-102 loss at MSG (ESPN, Apr 18). Atlanta was outscored 30-22 in the third and out-rebounded 45-40, with Hart grabbing 14 boards (half offensive) and Mitchell Robinson's second-chance work giving NY 4-5 extra possessions. Series: NYK leads 1-0.",
      category: "games",
    },
    {
      title: "Dyson Daniels: 4-9-11-3 Line in Playoff Debut",
      detail:
        "Daniels barely missed a triple-double — 4 points, 9 rebounds, 11 assists, 3 steals, 7 deflections and 6 screen assists (Peachtree Hoops, Apr 18) — in his first career playoff game. Scoring was the hole (his shot still a concern), but he hounded Brunson late and even picked up Towns for stretches. Expect a bigger Daniels-on-KAT dose in Game 2.",
      category: "rotation",
    },
    {
      title: "McCollum 26, Johnson 23 — Starters Held Up Offensively",
      detail:
        "CJ McCollum's 26 on 11-of-20 (4-9 3P) was Atlanta's best offensive performance in his first playoff game as a Hawk; Jalen Johnson had 23 (8-19 FG) in his postseason debut. Together they dropped 49; the other three starters combined for 40. The bench, by contrast, managed just 21 total (Kuminga 8, Gueye 2, Vincent 0, Kispert listed DNP/limited, Risacher 0 in 2 min).",
      category: "games",
    },
    {
      title: "NAW Struggled from the Field — Bounce-Back Candidate",
      detail:
        "Nickeil Alexander-Walker scored 17 on 7-of-16 (3-8 3P) in a playoff-career-high 39 minutes. Inefficient but kept shooting, which is what Snyder wants — analysts across FanDuel/Yardbarker project a bounce-back in Game 2 with a cleaner look at his sets.",
      category: "rotation",
    },
    {
      title: "Risacher Buried in the Rotation: 2 Minutes, 0 Points",
      detail:
        "Zaccharie Risacher played 2 first-quarter minutes (0-3 FG, 4 reb) and sat the rest of Game 1 (Heavy Sports, Apr 18). RotoWire notes he's averaged just 15.7 MPG over the last month. Snyder is riding Kispert as the wing reserve; short of a blowout or Game 3 script flip, the No. 1 overall pick has no guaranteed playoff role.",
      category: "rotation",
    },
    {
      title: "Landale Out Through Round 1",
      detail:
        "Jock Landale (right high-ankle sprain, Apr 1) remains ruled out; re-evaluation timeline extends past the first round. His absence is the reason Okongwu's knee inflammation is such a headline — the Hawks have no proven third center behind Okongwu and Gueye.",
      category: "injuries",
    },
    {
      title: "Trae Young Trade — First Playoff Verdict Favors Atlanta's Offense",
      detail:
        "The January deal that sent Trae Young to Washington for McCollum and Kispert has its first playoff score: McCollum's 26 points in 34 minutes was Atlanta's best offensive output, and new-look backcourt hit a 48% 3P rate as a unit in Game 1. The referendum now shifts to defense — Brunson's 28 came against that same group.",
      category: "trades",
    },
    {
      title: "Snyder Extension Still in the Mix",
      detail:
        "Quin Snyder is in the final year of his 5-year deal; HoopsHype (Apr 12) reported extension talks are active. A first-round flameout would cool, not kill, the conversation given the 46-36 finish, Southeast title, Coach of the Month honors and 20-6 post-ASG stretch. Game 2 is effectively the re-opening bid.",
      category: "general",
    },
  ],
  sources: [
    "Yahoo Sports",
    "FanDuel Research",
    "ESPN",
    "NBA.com",
    "SI Hawks On SI",
    "Peachtree Hoops",
    "Heavy Sports",
    "ClutchPoints",
    "Bleacher Nation",
    "HoopsHype",
    "Hoops Rumors",
    "AJC",
    "Kevin Chouinard (X)",
  ],
};
