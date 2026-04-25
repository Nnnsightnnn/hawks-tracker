// ─── Atlanta Hawks Player Data (2025-26 Season · Updated Apr 25, 2026 — Game 4 afternoon) ─
// Single source of truth for roster, games, digest, and RSS feeds.
// Season context: 46-36 regular season, Southeast Division champs, 6-seed in East.
// Playoffs Round 1 vs NY Knicks: HAWKS LEAD 2-1. Atlanta won Game 3 109-108 at home
// (Apr 23) on CJ McCollum's go-ahead fadeaway with 12.5 sec left + a Kuminga steal on
// the final possession — two straight 1-point wins after the Game 1 road loss.
// Game 4 tips Saturday Apr 25, 6:00 PM ET at State Farm Arena (NBC/Peacock) — NYK -1.5
// road favorites, total 214.5 (FanDuel/Lineups). Teams down 1-3 win the series only 4.4%
// of the time; Mike Brown weighing benching Mikal Bridges (0 pts, 4 TO, -26 in Game 3)
// for Miles McBride. Major franchise news: Nickeil Alexander-Walker named 2025-26 NBA
// Most Improved Player on Friday Apr 24 (NBA.com/Yardbarker) — second straight Hawk to
// win MIP after Dyson Daniels in 2024-25, a league first for back-to-back team winners.

// Statuses: "active" | "day-to-day" | "questionable" | "doubtful" | "out" | "suspended"
// injuryNote: short description shown on card when not active
export const PLAYERS = [
  // ── Starters ─────────────────────────────────────────────────────────────
  {
    id: 1, name: "Jalen Johnson", number: 1, position: "SF", nationality: "🇺🇸 USA", age: 23, playoffStarter: true,
    gamesPlayed: 74, gamesStarted: 72, minutesPerGame: 34.6,
    pointsPerGame: 22.8, reboundsPerGame: 10.3, assistsPerGame: 8.0,
    stealsPerGame: 1.2, blocksPerGame: 0.8, turnoversPerGame: 3.1,
    fieldGoalPct: 49.0, threePointPct: 36.2, freeThrowPct: 78.4,
    trueShootingPct: 58.2, plusMinus: 5.6,
    form: 8.2, status: "active", injuryNote: null,
    recentNotes: "Game 3: 24/10/8 with 2 stl, 1 blk in 38 min — 1 assist short of a postseason triple-double (NBA.com/RotoWire, Apr 23). Series now 21.3/8.7/4.7. Held KAT to 21 pts as the primary forward defender on the matchup; Hawks were +13 with Johnson on KAT in Game 2 Q4 and the look held in Game 3.",
    playoffStats: { gamesPlayed: 3, minutesPerGame: 37.2, pointsPerGame: 21.3, reboundsPerGame: 8.7, assistsPerGame: 4.7 },
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
    form: 7.4, status: "active", injuryNote: null,
    recentNotes: "Game 3 stat-sheet response to Game 2's benching: 8 pts, 13 reb, 6 ast, 3 stl, 1 blk in 33 min (NBA.com, Apr 23). Series line now 6.0/8.7/6.3/2.7 stl through three. Tag-team guarding Brunson with NAW per Snyder. Offensive production still the drag, but the all-around impact bought back rotation trust.",
    playoffStats: { gamesPlayed: 3, minutesPerGame: 31.7, pointsPerGame: 6.0, reboundsPerGame: 8.7, assistsPerGame: 6.3 },
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
    form: 7.3, status: "active", injuryNote: null,
    recentNotes: "Officially named 2025-26 NBA Most Improved Player on Friday Apr 24 — beat Deni Avdija and Jalen Duren, second straight Hawk to win after Daniels (NBA.com/CBS Sports). Career-high 20.8 PPG / 39.9% from three / 251 made 3s (franchise record). Game 3 line: 0-for-6 start, rallied with multiple late 3s, secured the final loose ball to dribble out 109-108 (Yahoo/Peachtree Hoops, Apr 23). Snyder keeps him on the floor for the 2-through-4 defensive flexibility despite series shooting slump.",
    playoffStats: { gamesPlayed: 3, minutesPerGame: 37.4, pointsPerGame: 12.7, reboundsPerGame: 3.0, assistsPerGame: 3.3 },
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
    form: 9.4, status: "active", injuryNote: null,
    recentNotes: "Hit the go-ahead fadeaway with 12.5 seconds left to deliver Game 3's 109-108 win — second straight clutch playoff bucket vs. NYK (CBS Sports, Apr 23). G3 line: 23 pts (8-19 FG, 2-4 3P), 5 reb, 2 stl, 2 blk in 35 min. Series-leading 27.0 PPG on 50.0% FG through three. Hunting Brunson in pick-and-roll all game per Lineups.com.",
    playoffStats: { gamesPlayed: 3, minutesPerGame: 34.8, pointsPerGame: 27.0, reboundsPerGame: 3.3, assistsPerGame: 2.7 },
    usageRate: 32.4,
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
    form: 6.4, status: "questionable", injuryNote: "Right knee inflammation (played Game 3 in limited capacity, ~22 min, 4 pts; questionable for Game 4, expected to play with knee management — Hawks injury report, Apr 24)",
    recentNotes: "Quiet Game 3 line as KAT-related foul trouble and the knee combined to compress his minutes: 4 pts, 5 reb, 1 stl, 2 blk in ~22 min (FanDuel, Apr 23). Hawks survived because Bradley/Gueye held up; Game 4 status questionable again, expected to play. Series average dragged to 12.7 PPG.",
    playoffStats: { gamesPlayed: 3, minutesPerGame: 29.6, pointsPerGame: 12.7, reboundsPerGame: 7.0, assistsPerGame: 1.3 },
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
    form: 5.0, status: "active", injuryNote: null,
    recentNotes: "Third straight playoff DNP-CD in Game 3 (Eurohoops, Apr 24). No. 1 overall pick fully buried in the rotation through three games — Kispert and now Gueye getting his minutes. EuroHoops quote 'it's tough' from Apr 21 still the cleanest framing.",
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
    form: 9.1, status: "active", injuryNote: null,
    recentNotes: "Game 3: 21 pts on 9-14 FG (2 made 3s) + the steal that sealed it (Heavy/CBS Sports, Apr 23). Became the FIRST bench player in Hawks franchise playoff history with 10+ in the opening quarter (4-of-4 / 2-of-2 from three / 10 pts in Q1). 16.0 PPG through three; Magic Johnson called him 'the difference in the series.'",
    playoffStats: { gamesPlayed: 3, minutesPerGame: 31.6, pointsPerGame: 16.0, reboundsPerGame: 4.3, assistsPerGame: 1.0 },
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
    form: 6.3, status: "active", injuryNote: null,
    recentNotes: "Third straight DNP in Game 3 — fully out of Snyder's playoff rotation behind Kuminga, McCollum, and Vincent. Kispert and Gueye also ahead of him on the wing/utility ladder.",
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
    recentNotes: "Light Game 3 minutes again as Kuminga absorbed the wing-reserve workload — a few possessions to spell starters. Remains Snyder's preferred wing reserve over Risacher and Hield.",
    playoffStats: { gamesPlayed: 2, minutesPerGame: 7.4, pointsPerGame: 3.0, reboundsPerGame: 1.5, assistsPerGame: 0.5 },
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
    form: 6.2, status: "active", injuryNote: null,
    recentNotes: "Steady backup-lead-guard minutes in Game 3 to spell McCollum. Series-long role unchanged — Snyder still riding McCollum-NAW in crunch.",
    playoffStats: { gamesPlayed: 3, minutesPerGame: 16.7, pointsPerGame: 2.0, reboundsPerGame: 2.0, assistsPerGame: 1.0 },
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
    recentNotes: "Hit a Q1 3-pointer in Game 3 — first playoff make of his career — and held up as backup big when Okongwu's knee/foul situation pulled him off the floor (NBA.com, Apr 23). The 'little-used center' suddenly the postseason role-player story.",
    playoffStats: { gamesPlayed: 3, minutesPerGame: 11.0, pointsPerGame: 2.0, reboundsPerGame: 2.3, assistsPerGame: 0.0 },
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
    form: 6.5, status: "active", injuryNote: null,
    recentNotes: "Held up again in Game 3 as the spell-big when Okongwu's knee compressed his minutes — sturdy defensive minutes, no stat-sheet fireworks. Gueye and Bradley now share emergency-big duty until Okongwu is fully clear.",
    playoffStats: { gamesPlayed: 2, minutesPerGame: 11.0, pointsPerGame: 2.0, reboundsPerGame: 2.0, assistsPerGame: 0.5 },
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
    form: 6.4, status: "out", injuryNote: "Right high-ankle sprain (Apr 1) — ruled out through at least one more week (Heavy/CBS, Apr 24); will miss the rest of Round 1 and likely Round 2 opener if Hawks advance",
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
  home: true,
  date: "2026-04-25T18:00:00-04:00",
  competition: "PLAYOFFS",
  venue: "State Farm Arena",
  broadcast: "NBC / Peacock",
  seriesContext: "Round 1 · Game 4 · Hawks lead 2-1",
};

// ─── Game Results (2025-26 regular season · last 16 games) ─────────────────
// result: "W" | "L"; score format "ATL-OPP"
export const RESULTS = [
  { date: "2026-04-23", opponent: "New York Knicks",      home: true,  score: "109-108", competition: "PLAYOFFS", result: "W", topScorers: "R1G3 · Johnson 24-10-8, McCollum 23 (GA jumper :12.5), Kuminga 21 off bench" },
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
  wins: 2,
  losses: 1,
  games: [
    { game: 1, date: "2026-04-18", home: false, score: "102-113", result: "L", venue: "Madison Square Garden", broadcast: "Prime Video" },
    { game: 2, date: "2026-04-20", home: false, score: "107-106", result: "W", venue: "Madison Square Garden", broadcast: "NBC" },
    { game: 3, date: "2026-04-23", home: true,  score: "109-108", result: "W", venue: "State Farm Arena",       broadcast: "Prime Video" },
    { game: 4, date: "2026-04-25", home: true,  score: null,      result: null, venue: "State Farm Arena",       broadcast: "NBC / Peacock" },
    { game: 5, date: "2026-04-28", home: false, score: null,      result: null, venue: "Madison Square Garden",  broadcast: "TNT" },
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
  generatedAt: "2026-04-25T18:30:00Z",
  summary:
    "Hawks lead 2-1 heading into Game 4 tonight (Sat Apr 25, 6 PM ET, NBC/Peacock) after a 109-108 Game 3 thriller decided by CJ McCollum's go-ahead fadeaway with 12.5 seconds left and a Jonathan Kuminga steal on the final possession (NBA.com/Yahoo, Apr 23-24). Major franchise news yesterday: Nickeil Alexander-Walker was named the 2025-26 NBA Most Improved Player on Friday Apr 24, beating finalists Deni Avdija and Jalen Duren — a career-high 20.8 PPG (up from 9.4) gave the Hawks back-to-back MIP winners after Dyson Daniels in 2024-25, a league first (NBA.com/CBS Sports/Washington Post). On the basketball side, Atlanta has won the last seven minutes of every fourth quarter this series. Jalen Johnson stuffed the box score in Game 3 (24 pts / 10 reb / 8 ast / 2 stl / 1 blk in 38 min, one assist shy of a triple-double); Kuminga went 9-for-14 for 21 off the bench and became the first bench player in Hawks franchise playoff history with 10+ points in an opening quarter. The Knicks side is in upheaval: Mikal Bridges (0 pts, 4 TO, -26 in Game 3 — first player since 1996-97 with that stat line in a playoff game) is expected to lose his starting spot to Miles McBride per Mike Brown's 'everything is on the table' presser (SI/Heavy/Athlon, Apr 24). FanDuel still has NYK -1.5 with a 214.5 total — Vegas pricing in the road favorite despite Atlanta's 14-2 post-ASB home net rating and the historical reality that teams down 1-3 win the series only 4.4% of the time. Onyeka Okongwu (4 pts in ~22 min Game 3, knee + foul trouble) carries his right-knee-inflammation 'questionable' tag into Game 4 again; the Hawks beat consensus is he plays. Mouhamed Gueye stepped up with the first playoff make of his career on a Q1 3 in Game 3 and holds up as the emergency-big alongside Tony Bradley.",
  keyTopics: [
    {
      title: "NAW Wins 2025-26 NBA Most Improved Player — Back-to-Back for Hawks",
      detail:
        "Nickeil Alexander-Walker was named the 2025-26 Kia Most Improved Player on Friday Apr 24, beating finalists Deni Avdija and Jalen Duren (NBA.com/CBS Sports/Washington Post). Career-best 20.8 PPG (up 11.4 from last year's 9.4 — third-largest single-season jump in 25 years), 39.9% from three on a franchise-record 251 makes. Hawks become the first team ever with back-to-back MIP winners after Daniels last season.",
      category: "general",
    },
    {
      title: "Game 4 Tonight · 6 PM ET, NBC/Peacock · NYK -1.5 / O/U 214.5",
      detail:
        "Round 1 Game 4 tips Saturday Apr 25 at 6 PM ET at State Farm Arena on NBC and Peacock (NBC Sports, Apr 24). FanDuel has the Knicks -1.5 with a 214.5 total — Vegas pricing in the road favorite despite Atlanta's 14-2 post-ASB home net rating. Teams that fall behind 1-3 in a best-of-seven win the series only 4.4% of the time, putting the Knicks' season squarely on the line tonight.",
      category: "games",
    },
    {
      title: "Hawks 109, Knicks 108 — Game 3 Recap: McCollum Walk-Off, Kuminga Steal",
      detail:
        "Atlanta took a 2-1 series lead Thursday on CJ McCollum's go-ahead fadeaway jumper at 12.5 seconds and a Jonathan Kuminga help-poke steal on NYK's final possession (NBA.com/Yahoo, Apr 23-24). Hawks led 58-50 at half, weathered an OG Anunoby 29-point night and a KAT 21/17 line, and held the Knicks scoreless on the final two possessions. Second straight one-point win.",
      category: "games",
    },
    {
      title: "Mike Brown Eyes Bridges Demotion — McBride to Start?",
      detail:
        "Mikal Bridges (0 pts, 4 TO, -26 in Game 3 — first player since 1996-97 with that stat line in a playoff game) is expected to lose his starting spot in Game 4 (SI/Heavy/Athlon, Apr 24). Mike Brown told media 'everything is on the table.' Likely replacement: Miles McBride, with the Brunson/Anunoby/Hart/Towns/McBride unit posting +24 net rating across 14 minutes in Game 3.",
      category: "rotation",
    },
    {
      title: "Jalen Johnson 24/10/8 — One Assist Shy of a Triple-Double",
      detail:
        "Johnson finished a single dime shy of a Game 3 postseason triple-double: 24 pts, 10 reb, 8 ast, 2 stl, 1 blk in 38 min (NBA.com/RotoWire, Apr 23). Series averages now 21.3/8.7/4.7. Held KAT to 21 points as the primary forward defender on the matchup — the Johnson-on-KAT look has held in every series stretch since Game 2 Q4.",
      category: "games",
    },
    {
      title: "Kuminga Game 3: 21 Off the Bench + Franchise History in Q1",
      detail:
        "Kuminga went 9-for-14 for 21 with the late steal on the final possession (CBS Sports/Heavy, Apr 23). His 4-of-4 / 2-of-2 from three / 10-pt opening quarter made him the first bench player in Atlanta Hawks franchise playoff history with 10+ in a Q1. Magic Johnson called him 'the difference in the series.' 16.0 PPG through three, +30 series net.",
      category: "rotation",
    },
    {
      title: "McCollum Series-Leading 27.0 PPG, Hits Game-Winner Again",
      detail:
        "CJ McCollum hit the go-ahead fadeaway with 12.5 seconds left in Game 3 — second straight game with the dagger jumper vs. NYK (CBS Sports, Apr 23). Series line: 27.0 PPG (G1: 26, G2: 32, G3: 23) on roughly 50% FG. Hunting Brunson in pick-and-roll all game per Lineups.com. Game 4 scoring prop opened around 19.5 again.",
      category: "games",
    },
    {
      title: "Okongwu Questionable Again — 4 Points, Knee + Foul Trouble Game 3",
      detail:
        "Onyeka Okongwu played through right-knee inflammation in Game 3 but was held to 4 pts in roughly 22 minutes as foul trouble compounded the knee management (FanDuel, Apr 23). Carries the same questionable tag into Game 4; the Hawks beat consensus is he plays again. Bradley and Gueye absorbing the fall-back minutes either way.",
      category: "injuries",
    },
    {
      title: "Daniels Stat-Sheet Response: 8/13/6 with 3 Steals After Closing-Out",
      detail:
        "Dyson Daniels answered Game 2's closing-five demotion with an 8-pt, 13-reb, 6-ast, 3-stl, 1-blk Game 3 line in 33 minutes (NBA.com, Apr 23). Tag-teaming Brunson with NAW per Snyder. Offensive scoring is still the visible gap (6.0 PPG series), but the all-around impact bought back rotation trust heading into Game 4.",
      category: "rotation",
    },
    {
      title: "NAW Started 0-for-6 in Game 3 — Sealed It With the Loose Ball",
      detail:
        "Nickeil Alexander-Walker missed his first six shots in Game 3 before hitting multiple late 3s, then secured the final loose ball to dribble out a 109-108 win (Yahoo/Peachtree Hoops, Apr 23). Series shooting slump deepens (now 26% FG), but Snyder keeps him on the floor for the 2-through-4 defensive flexibility.",
      category: "rotation",
    },
    {
      title: "Mouhamed Gueye's First Career Playoff Make — Q1 Three",
      detail:
        "Mo Gueye knocked down a Q1 3-pointer in Game 3 — first career playoff make — and held up as backup big when Okongwu was off the floor (NBA.com, Apr 23). Now sharing emergency-big duty with Tony Bradley. Risacher's continued DNP-CD has Gueye ahead of the No. 1 overall pick on Snyder's playoff ladder.",
      category: "rotation",
    },
    {
      title: "Landale Out at Least Another Week — Won't Return for Round 1",
      detail:
        "Jock Landale (right high-ankle sprain, Apr 1) ruled out for Game 4 and at least another week per Hawks medical staff (Heavy/CBS, Apr 24). Will miss the rest of Round 1; even an Atlanta advance to Round 2 likely opens without him. Bradley + Gueye combination remains Snyder's emergency-big plan.",
      category: "injuries",
    },
    {
      title: "Trae Young Trade: Jan Package Looks Stronger Each Game",
      detail:
        "Three playoff games since the Jan 8 Trae-for-McCollum-plus package: McCollum at 27 PPG with two straight game-winners, Kuminga now closing AND scoring 21 in Game 3, Kispert ahead of No. 1 pick Risacher in the rotation. Soaring Down South/Hawks.com (Apr 24) framing it as the trade that 'made the team playoff-tough.' Trae watching from home after Washington missed the play-in.",
      category: "trades",
    },
  ],
  sources: [
    "NBA.com",
    "ESPN",
    "Yahoo Sports",
    "NBC Sports",
    "CBS Sports",
    "Washington Post",
    "Sports Illustrated (SI/onsi)",
    "ClutchPoints",
    "Peachtree Hoops",
    "Soaring Down South",
    "Daily Knicks",
    "Posting and Toasting",
    "Athlon Sports",
    "The Source",
    "CBS New York",
    "Bleacher Report",
    "FanDuel Research",
    "Lineups.com",
    "Covers.com",
    "RotoWire",
    "Yardbarker",
    "Heavy Sports",
    "Eurohoops",
    "Hawks.com",
    "Times Free Press",
  ],
};
