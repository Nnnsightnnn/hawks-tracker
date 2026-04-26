// ─── Atlanta Hawks Player Data (2025-26 Season · Updated Apr 26, 2026 — Game 4 morning-after) ─
// Single source of truth for roster, games, digest, and RSS feeds.
// Season context: 46-36 regular season, Southeast Division champs, 6-seed in East.
// Playoffs Round 1 vs NY Knicks: SERIES TIED 2-2 after a 114-98 Game 4 home loss
// Saturday Apr 25 (NBA.com/CBS Atlanta, Apr 25-26). Karl-Anthony Towns posted his
// FIRST postseason triple-double (20-10-10 in 40 min, one TO) and OG Anunoby led NYK
// scorers with 22 — the Knicks led 68-44 at the half and by 20 after Q3 in a wire-to-
// wire win; Atlanta's last lead was 14-13 midway through Q1. McCollum led ATL with 17
// (0-for-4 from three after going 9-of-15 in the prior three), Jalen Johnson logged a
// quiet TD (14-10-10) but never found a scoring rhythm against Anunoby's coverage,
// Kuminga came back to earth with all 8 of his points in the Q4 garbage stretch.
// Hawks shot 41% overall, 24% from three. Series guaranteed to return to Atlanta for
// Game 6 on Thursday. Game 5 is Tuesday Apr 28, 8:00 PM ET at MSG (NBC/Peacock).
// Lingering franchise news: Nickeil Alexander-Walker named 2025-26 NBA Most Improved
// Player on Friday Apr 24 (NBA.com/Washington Post) — second straight Hawk to win MIP
// after Dyson Daniels in 2024-25, a league first for back-to-back team winners.

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
    form: 7.6, status: "active", injuryNote: null,
    recentNotes: "First career playoff TRIPLE-DOUBLE in Game 4 — 14 pts (6 paint buckets, 9 FTAs), 10 reb, 10 ast — but quietly muted on the scoring end as OG Anunoby's coverage held him to a 'mild response' (NBA.com/SI, Apr 25-26). KAT's 20-10-10 stole the historical headline. Series averages now 19.5/8.5/6.0 through four games. Lost the Anunoby battle in Game 4 after winning the KAT matchup in G2-3.",
    playoffStats: { gamesPlayed: 4, minutesPerGame: 37.5, pointsPerGame: 19.5, reboundsPerGame: 8.5, assistsPerGame: 6.0 },
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
    form: 6.9, status: "active", injuryNote: null,
    recentNotes: "Game 4: 9 pts as Hawks dropped Game 4 114-98 (Basketball.com.au, Apr 25). Brunson held to 19 pts under the Daniels/NAW tag-team look — D not the issue, scoring still is. Series line dragged: ~6.8 PPG through four. Snyder kept him in the rotation after the G3 stat-sheet response, but the offensive ceiling remains the visible drag heading into Game 5 at MSG.",
    playoffStats: { gamesPlayed: 4, minutesPerGame: 31.0, pointsPerGame: 6.8, reboundsPerGame: 7.8, assistsPerGame: 5.5 },
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
    form: 7.2, status: "active", injuryNote: null,
    recentNotes: "Game 4: held to 15 pts as the Knicks geared their defense to take away the McCollum/NAW perimeter combo (NBA.com/CBS Atlanta, Apr 25). Lingering franchise headline: officially named 2025-26 NBA Most Improved Player on Friday Apr 24 — beat Deni Avdija and Jalen Duren, second straight Hawk to win after Daniels (NBA.com/Washington Post). Career-high 20.8 PPG / 39.9% from three / 251 made 3s (franchise record). Series line: ~13.3 PPG through four; Snyder still riding him for the 2-through-4 defensive flexibility despite the cold shooting stretch.",
    playoffStats: { gamesPlayed: 4, minutesPerGame: 37.0, pointsPerGame: 13.3, reboundsPerGame: 3.0, assistsPerGame: 3.3 },
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
    form: 8.4, status: "active", injuryNote: null,
    recentNotes: "Game 4: Knicks held him to 17 pts on 0-for-4 from three (Yardbarker/CBS Sports, Apr 25-26) — first scoreless 3-pt night of the series after 9 makes across G1-G3. Still team-high in scoring, but the dagger touch never arrived in a 114-98 blowout where ATL was wire-to-wire trailing. Series average dips to 24.5 PPG; defense geared to deny the McCollum step-back next at MSG.",
    playoffStats: { gamesPlayed: 4, minutesPerGame: 34.5, pointsPerGame: 24.5, reboundsPerGame: 3.3, assistsPerGame: 2.7 },
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
    form: 5.9, status: "day-to-day", injuryNote: "Right knee inflammation (managed through Game 4 in a Hawks loss; day-to-day with knee management heading into Game 5 at MSG — Hawks medical staff via Heavy/CBS, Apr 25-26)",
    recentNotes: "Played Game 4 through the right-knee inflammation but couldn't slow KAT's first career postseason triple-double (20-10-10) — Knicks led 68-44 at half (NBA.com/CBS Atlanta, Apr 25). KAT-on-Okongwu has been the series-defining matchup since Game 1; ATL has yet to find a counter. Bradley/Gueye still the bench-big plan; knee status carries to Game 5 at MSG.",
    playoffStats: { gamesPlayed: 4, minutesPerGame: 28.5, pointsPerGame: 11.0, reboundsPerGame: 6.5, assistsPerGame: 1.3 },
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
    form: 4.8, status: "active", injuryNote: null,
    recentNotes: "Fourth straight playoff DNP-CD in Game 4 — Snyder's wing reserve hierarchy still goes Kuminga > Kispert > Gueye > Risacher (Eurohoops, Apr 24). The No. 1 overall pick remains fully buried in the playoff rotation; offseason narrative looms regardless of how the series ends.",
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
    form: 7.4, status: "active", injuryNote: null,
    recentNotes: "Game 4 dud after the Game 3 hero arc: 8 pts (all in Q4 garbage), 2 reb, 0 ast, 0 stl/blk — Warriors fans even chimed in on the no-show (SI/Warriors onsi, Apr 26). Activity level visibly off after the early miss-fest; once the deficit ballooned to 24 by halftime, the Q4 minutes were already spillover. Series PPG drops to 14.0 through four.",
    playoffStats: { gamesPlayed: 4, minutesPerGame: 30.0, pointsPerGame: 14.0, reboundsPerGame: 3.8, assistsPerGame: 0.8 },
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
    form: 6.2, status: "active", injuryNote: null,
    recentNotes: "Fourth straight DNP in Game 4 — fully out of Snyder's playoff rotation behind Kuminga, McCollum, and Vincent. Kispert and Gueye also ahead of him on the wing/utility ladder.",
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
    form: 6.7, status: "active", injuryNote: null,
    recentNotes: "Brief Game 4 spell minutes as Snyder rode the McCollum-NAW-Kuminga wing trio. Remains the third-wing reserve behind Kuminga; Risacher and Hield still don't see the floor.",
    playoffStats: { gamesPlayed: 3, minutesPerGame: 7.0, pointsPerGame: 2.7, reboundsPerGame: 1.3, assistsPerGame: 0.3 },
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
    form: 6.1, status: "active", injuryNote: null,
    recentNotes: "Steady backup-lead-guard minutes in Game 4's blowout to spell McCollum. Series role unchanged — Snyder still rides McCollum-NAW in crunch when crunch arrives, which it didn't Saturday.",
    playoffStats: { gamesPlayed: 4, minutesPerGame: 16.5, pointsPerGame: 2.3, reboundsPerGame: 1.8, assistsPerGame: 1.0 },
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
    form: 6.5, status: "active", injuryNote: null,
    recentNotes: "Continued spell-big role in Game 4 alongside Bradley as Okongwu managed knee minutes. The Q1 3-pointer in Game 3 remains the postseason highlight; Snyder still trusts Gueye over Risacher in the playoff rotation.",
    playoffStats: { gamesPlayed: 4, minutesPerGame: 11.0, pointsPerGame: 2.0, reboundsPerGame: 2.3, assistsPerGame: 0.0 },
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
    recentNotes: "Continued spell-big duty in Game 4 alongside Gueye as Okongwu managed his knee inflammation. Sturdy defensive minutes, no stat-sheet fireworks — KAT's triple-double was the matchup that broke the dam, not anything Bradley did wrong.",
    playoffStats: { gamesPlayed: 3, minutesPerGame: 11.0, pointsPerGame: 1.7, reboundsPerGame: 1.7, assistsPerGame: 0.7 },
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
    form: 6.4, status: "out", injuryNote: "Right high-ankle sprain (Apr 1) — ruled out through at least another week (Heavy/CBS, Apr 24); has missed all of Round 1 and likely Round 2 opener if Hawks advance",
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
  home: false,
  date: "2026-04-28T20:00:00-04:00",
  competition: "PLAYOFFS",
  venue: "Madison Square Garden",
  broadcast: "NBC / Peacock",
  seriesContext: "Round 1 · Game 5 · Series tied 2-2",
};

// ─── Game Results (2025-26 regular season · last 16 games) ─────────────────
// result: "W" | "L"; score format "ATL-OPP"
export const RESULTS = [
  { date: "2026-04-25", opponent: "New York Knicks",      home: true,  score: "98-114",  competition: "PLAYOFFS", result: "L", topScorers: "R1G4 · McCollum 17 (0-4 3P), NAW 15, Johnson 14-10-10 TD; KAT 20-10-10 1st career playoff TD" },
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
  losses: 2,
  games: [
    { game: 1, date: "2026-04-18", home: false, score: "102-113", result: "L", venue: "Madison Square Garden", broadcast: "Prime Video" },
    { game: 2, date: "2026-04-20", home: false, score: "107-106", result: "W", venue: "Madison Square Garden", broadcast: "NBC" },
    { game: 3, date: "2026-04-23", home: true,  score: "109-108", result: "W", venue: "State Farm Arena",       broadcast: "Prime Video" },
    { game: 4, date: "2026-04-25", home: true,  score: "98-114",  result: "L", venue: "State Farm Arena",       broadcast: "NBC / Peacock" },
    { game: 5, date: "2026-04-28", home: false, score: null,      result: null, venue: "Madison Square Garden",  broadcast: "NBC / Peacock" },
    { game: 6, date: "2026-04-30", home: true,  score: null,      result: null, venue: "State Farm Arena",       broadcast: "TBD" },
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
  generatedAt: "2026-04-26T13:30:00Z",
  summary:
    "Series tied 2-2 after a 114-98 Game 4 home loss Saturday night that was wire-to-wire from the jump (NBA.com/CBS Atlanta, Apr 25-26). Karl-Anthony Towns logged the FIRST postseason triple-double of his career — 20 pts, 10 reb, 10 ast in 40 min with one turnover — and OG Anunoby led NYK scoring with 22; the Knicks led 68-44 at halftime and Atlanta's last lead came at 14-13 midway through Q1. McCollum was held to 17 on 0-for-4 from three (after 9 makes across the first three games), Jalen Johnson dropped a quiet 14-10-10 triple-double clamped by Anunoby's coverage, NAW added 15, Daniels 9, and Jonathan Kuminga came back to earth with all 8 of his points coming in the Q4 garbage stretch (SI Warriors onsi, Apr 26). Hawks shot 41% overall and 24% from three. Heading to Game 5 Tuesday Apr 28 at 8 PM ET at MSG (NBC/Peacock) — series guaranteed to return for Game 6 Thursday at State Farm Arena. Lingering franchise headline: Nickeil Alexander-Walker was named the 2025-26 NBA Most Improved Player on Friday Apr 24, beating finalists Deni Avdija and Jalen Duren — a career-high 20.8 PPG (up from 9.4) gave the Hawks back-to-back MIP winners after Dyson Daniels in 2024-25, a league first (NBA.com/Washington Post). Onyeka Okongwu played through his right-knee inflammation but couldn't slow KAT's triple-double; status now day-to-day with knee management heading to MSG. Jock Landale (right high-ankle sprain, Apr 1) remains out at least another week.",
  keyTopics: [
    {
      title: "Knicks 114, Hawks 98 — Game 4 Recap: KAT's First Postseason Triple-Double",
      detail:
        "New York leveled the series 2-2 with a wire-to-wire 114-98 home win Saturday night (NBA.com/CBS Atlanta, Apr 25-26). Karl-Anthony Towns went 20-10-10 with one turnover in 40 minutes — first career postseason triple-double, fourth Knick ever (Frazier, McGuire, Hart). NYK led 68-44 at half and by 20 after Q3; Atlanta's last lead was 14-13 in Q1. OG Anunoby led NYK scoring with 22, Brunson added 19. Hawks shot 41% overall, 24% from three.",
      category: "games",
    },
    {
      title: "McCollum Held to 17 on 0-for-4 From Three — First Cold Three-Point Night",
      detail:
        "After making 9 threes across G1-G3, McCollum went 0-for-4 from beyond the arc in Game 4 and led ATL with just 17 (Yardbarker/CBS Sports, Apr 25-26). Knicks geared their defense to deny the McCollum step-back; he's now at 24.5 PPG for the series. Game 5 prop expected to drop given the matchup adjustment heading to MSG.",
      category: "games",
    },
    {
      title: "Johnson's Quiet 14-10-10 — First Career Playoff Triple-Double, In a Loss",
      detail:
        "Jalen Johnson posted his first career playoff triple-double in Game 4 — 14 pts (6 paint buckets, 9 FTAs), 10 reb, 10 ast — but never found scoring rhythm against OG Anunoby's coverage (SI/onsi, Apr 25-26). 'Mild response' was the league framing. Series line dips to 19.5/8.5/6.0; Anunoby is now the matchup he has to solve to flip Game 5.",
      category: "games",
    },
    {
      title: "Kuminga Game 4 Dud — All 8 Points in Q4 Garbage Time",
      detail:
        "After the franchise-history Q1 in Game 3, Kuminga managed only 8 points in Game 4 — every one of them in the fourth quarter once the deficit had ballooned (SI Warriors onsi, Apr 26). 2 reb, 0 ast, 0 stl/blk; activity level visibly off after the early miss-fest. Series PPG drops to 14.0 through four — Snyder's bench plan may need a Game 5 jolt.",
      category: "rotation",
    },
    {
      title: "Game 5 Tuesday at MSG · 8 PM ET, NBC/Peacock · Series Tied 2-2",
      detail:
        "Round 1 Game 5 tips Tuesday Apr 28 at 8 PM ET at Madison Square Garden on NBC and Peacock (NBC Sports, Apr 24-26). Best-of-three sprint with the winner of Tuesday holding match point; series guaranteed to return to Atlanta for Game 6 Thursday. Knicks regain home court after stealing it back Saturday with their first 20-point margin of the series.",
      category: "games",
    },
    {
      title: "Okongwu Day-to-Day with Knee Inflammation — Couldn't Slow KAT's TD",
      detail:
        "Onyeka Okongwu played through his right-knee inflammation in Game 4 but was the primary defender on KAT's first career postseason triple-double (Heavy/CBS, Apr 25-26). Status now day-to-day with knee management heading to MSG. Bradley and Gueye still split the spell-big minutes; KAT-on-Okongwu remains the series-defining matchup ATL has yet to counter.",
      category: "injuries",
    },
    {
      title: "NAW Wins 2025-26 NBA Most Improved Player — Back-to-Back for Hawks",
      detail:
        "Nickeil Alexander-Walker was named the 2025-26 Kia Most Improved Player on Friday Apr 24, beating finalists Deni Avdija and Jalen Duren (NBA.com/Washington Post/Bleacher Report). Career-best 20.8 PPG (up 11.4 from last year's 9.4 — third-largest single-season jump in 25 years), 39.9% from three on a franchise-record 251 makes. Hawks become the first team ever with back-to-back MIP winners after Daniels last season.",
      category: "general",
    },
    {
      title: "Daniels Held to 9 in Game 4 — Defensive Tag-Team Holds, Offense Doesn't",
      detail:
        "Dyson Daniels finished with 9 points in the Game 4 loss (Basketball.com.au, Apr 25). The Daniels/NAW tag-team look held Brunson to 19 — defense isn't the issue, the offensive ceiling is. Series line: ~6.8 PPG / 7.8 RPG / 5.5 APG. Snyder keeps him in the starting five but the scoring drag remains the visible gap heading to MSG.",
      category: "rotation",
    },
    {
      title: "Hawks 109, Knicks 108 — Game 3 Holds Up as the Lone ATL Home Win",
      detail:
        "Atlanta's Game 3 win Thursday on CJ McCollum's go-ahead fadeaway at 12.5 seconds and a Jonathan Kuminga help-poke steal (NBA.com/Yahoo, Apr 23-24) is now the only home win of the series after Saturday's blowout. Hawks led 58-50 at half, weathered OG Anunoby 29 and KAT 21/17, and held NYK scoreless on the final two possessions. Second straight one-point win at the time.",
      category: "games",
    },
    {
      title: "Risacher Fourth Straight DNP-CD — No. 1 Pick Buried Through Round 1",
      detail:
        "Zaccharie Risacher recorded his fourth straight playoff DNP-CD in Game 4 (Eurohoops, Apr 24-26). Snyder's wing reserve hierarchy still goes Kuminga > Kispert > Gueye > Risacher; the No. 1 overall pick has not played meaningful minutes in any of the four games. Offseason narrative on the Risacher development plan looms regardless of how the series ends.",
      category: "rotation",
    },
    {
      title: "Landale Out At Least Another Week — Round 1 Likely Lost",
      detail:
        "Jock Landale (right high-ankle sprain, Apr 1) remains out at least another week per Hawks medical staff (Heavy/CBS, Apr 24). Has missed all of Round 1 to date; even an Atlanta advance to Round 2 likely opens without him. Bradley + Gueye combination remains Snyder's emergency-big plan.",
      category: "injuries",
    },
    {
      title: "Trae Young Trade: McCollum 24.5 PPG, Kuminga +30 Net Through Four",
      detail:
        "Four playoff games since the Jan 8 Trae-for-McCollum-plus package: McCollum at 24.5 PPG with the Game 3 walk-off, Kuminga at 14.0 PPG and a Q4 dud in Game 4, Kispert ahead of No. 1 pick Risacher in the rotation (Soaring Down South/Hawks.com, Apr 24). Trae watching from home after Washington missed the play-in. The trade still grades out as the series enabler even after Saturday's loss.",
      category: "trades",
    },
  ],
  sources: [
    "NBA.com",
    "ESPN",
    "Yahoo Sports",
    "NBC Sports",
    "CBS Sports",
    "CBS Atlanta",
    "Washington Post",
    "Sports Illustrated (SI/onsi)",
    "Basketball.com.au",
    "ClutchPoints",
    "Peachtree Hoops",
    "Soaring Down South",
    "Posting and Toasting",
    "Heavy Sports",
    "Bleacher Report",
    "RotoWire",
    "Yardbarker",
    "Eurohoops",
    "Hawks.com",
    "FanDuel Research",
    "Lineups.com",
  ],
};
