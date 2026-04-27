// ─── Atlanta Hawks Player Data (2025-26 Season · Updated Apr 27, 2026 — Game 5 eve at MSG) ─
// Single source of truth for roster, games, digest, and RSS feeds.
// Season context: 46-36 regular season, Southeast Division champs, 6-seed in East.
// Playoffs Round 1 vs NY Knicks: SERIES TIED 2-2 after Saturday's 114-98 Game 4 home loss.
// Game 5 tips Tuesday Apr 28 at 8:00 PM ET at Madison Square Garden (NBC/Peacock).
// Hawks open as 6.5-point road underdogs (FanDuel/Covers, Apr 27); winner of Tuesday
// holds match point with Game 6 already guaranteed at State Farm Arena Thursday.
// Snyder talking points heading into the elimination-adjacent night: (1) establish
// Jalen Johnson — at times "too timid" in the series per multiple postgame writeups
// (NBA.com/SI/Yardbarker), (2) clean up the 18 turnovers from Game 4, (3) find a
// counter to Karl-Anthony Towns as a high-post playmaker after his first career
// postseason triple-double (20-10-10) in Game 4. McCollum, asked Sunday-Monday about
// being held to 17 on 0-for-4 from three: "life's not so bad" heading back to MSG
// (ClutchPoints, Apr 26-27). Onyeka Okongwu (right knee inflammation) remains
// day-to-day with knee management; Jock Landale (high-ankle sprain Apr 1) is still
// out at least another week. Lingering franchise headline: Nickeil Alexander-Walker
// named 2025-26 NBA Most Improved Player on Friday Apr 24 — Hawks become the first
// team ever with back-to-back MIP winners after Dyson Daniels in 2024-25.

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
    recentNotes: "Game 5 eve focal point: Snyder's biggest stated adjustment is to ESTABLISH Johnson early after a series in which he's at times 'appeared too timid' against OG Anunoby's coverage (SI/onsi/Yardbarker, Apr 27). Game 4 line was a quiet 14-10-10 first career playoff TD but only 5-of-15 from the field; series averages 19.5/8.5/6.0 through four. Anunoby is the matchup he must solve to flip the road game; Hawks open Tuesday at MSG as 6.5-point underdogs.",
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
    recentNotes: "Defense holding up — Brunson at 19 in Game 4 under the Daniels/NAW tag-team look — but scoring still drags (~6.8 PPG, 36.8% FG through four). Snyder keeps him in the starting five for the Brunson assignment, but the offensive ceiling is the visible gap as Hawks open Game 5 as 6.5-point underdogs at MSG (FanDuel/Covers, Apr 27). G3's 8-13-6-3 stat-sheet line remains the series template.",
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
    recentNotes: "Heading into Game 5 still the 2-through-4 defensive Swiss-Army piece on Brunson/Anunoby/Hart. Game 4: 15 pts as the Knicks geared coverage to take away the McCollum/NAW perimeter combo (NBA.com/CBS Atlanta, Apr 25). Series PPG dragged to ~13.3 — Snyder will need a bounce-back shooting night Tuesday with the Hawks +6.5 underdogs at MSG. Lingering franchise headline: 2025-26 NBA Most Improved Player on Friday Apr 24, career-high 20.8 PPG / 39.9% from three / franchise-record 251 makes — second straight Hawk to win MIP after Daniels.",
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
    recentNotes: "Defiant Game 5 setup: 'life's not so bad' was McCollum's framing heading back to MSG (ClutchPoints, Apr 26-27) after Game 4's 17-point, 0-for-4-from-three night ended his streak of 9 made threes across G1-G3. Knicks have geared their coverage to deny the McCollum step-back; Snyder still rides him as the lead playoff scoring engine. Series average 24.5 PPG/2.7 APG through four — the bounce-back game prop is the headline going into Tuesday.",
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
    recentNotes: "Day-to-day with right-knee inflammation heading into Game 5 (Hawks medical staff via Heavy/CBS, Apr 27) — listed on the injury report but expected to play. Played Game 4 through it and couldn't slow KAT's first career postseason triple-double (20-10-10); KAT-on-Okongwu remains the series-defining matchup ATL has yet to counter. Bradley/Gueye still the bench-big plan if Snyder needs the spell minutes earlier than Game 4 timing.",
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
    recentNotes: "No path back into the rotation for Game 5 — Snyder's wing reserve hierarchy still goes Kuminga > Kispert > Gueye > Risacher (Eurohoops/FanSided, Apr 24-26). Has logged just 2:30 of total playoff minutes (Game 1) across the series; four straight DNP-CDs heading to MSG. Risacher publicly told reporters 'it's tough' on the lack of run — offseason development plan now the larger-than-Round-1 storyline.",
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
    recentNotes: "Bounce-back night required Tuesday after the Game 4 dud (8 pts all in Q4 garbage time) followed the Game 3 hero arc (21 off the bench). Snyder's bench plan may need a Game 5 jolt; Kuminga remains the lead wing reserve over Kispert/Gueye/Risacher. Series PPG 14.0 through four. Once the Q1 activity is back, KAT/Anunoby switches still favor him at the rim.",
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
  generatedAt: "2026-04-27T14:30:00Z",
  summary:
    "Game 5 eve: series tied 2-2, the Hawks open as 6.5-point road underdogs at Madison Square Garden Tuesday Apr 28 at 8 PM ET on NBC/Peacock with Game 6 already guaranteed back at State Farm Arena Thursday (FanDuel/Covers, Apr 27). Snyder's three Monday talking points: (1) ESTABLISH Jalen Johnson, who has 'at times appeared too timid' against OG Anunoby's coverage (SI/onsi/Yardbarker, Apr 27) — Game 4 was a quiet 14-10-10 first career playoff TD on 5-of-15 shooting; (2) clean up the 18 turnovers from Saturday's blowout — Snyder credited NYK's defensive aggression and said decisions need to come quicker; (3) find a counter to Karl-Anthony Towns as a high-post playmaker after his first career postseason triple-double (20-10-10 in 40 min, one TO) headlined the 114-98 Game 4 win that was wire-to-wire from a 14-13 ATL lead in Q1. McCollum, after a 17-point 0-for-4-from-three night that ended his streak of 9 made threes across G1-G3, told reporters Sunday-Monday 'life's not so bad' heading back to MSG (ClutchPoints, Apr 26-27). Onyeka Okongwu (right knee inflammation) is day-to-day with knee management but expected to play; Jock Landale (right high-ankle sprain Apr 1) remains out at least another week. Lingering franchise headline: Nickeil Alexander-Walker was named the 2025-26 NBA Most Improved Player Friday Apr 24, beating finalists Deni Avdija and Jalen Duren — career-high 20.8 PPG, franchise-record 251 made threes — giving the Hawks back-to-back MIP winners after Daniels in 2024-25, a league first (NBA.com/Washington Post).",
  keyTopics: [
    {
      title: "Game 5 Tuesday at MSG · Hawks +6.5 Underdogs · Series Tied 2-2",
      detail:
        "Round 1 Game 5 tips Tuesday Apr 28 at 8:00 PM ET at Madison Square Garden on NBC and Peacock (FanDuel/Covers, Apr 27). Atlanta opens as 6.5-point underdogs after the Knicks' 114-98 Game 4 win swung home court back. Best-of-three sprint with the Tuesday winner holding match point; Game 6 already guaranteed back at State Farm Arena Thursday.",
      category: "games",
    },
    {
      title: "Snyder's Game 5 Plan: Establish Johnson, Cut Turnovers, Counter KAT",
      detail:
        "Quin Snyder's three Monday talking points heading into Tuesday (NBA.com/SI/Yardbarker, Apr 27): (1) ESTABLISH Jalen Johnson early — he has 'at times appeared too timid' against OG Anunoby's coverage and was a quiet 14-10-10 in Game 4 on 5-of-15; (2) clean up the 18 turnovers from Game 4, where Snyder credited Knicks' defensive aggression and said 'decisions need to come quicker'; (3) find a counter to Karl-Anthony Towns as a high-post playmaker after his TD off 12 potential dives.",
      category: "rotation",
    },
    {
      title: "McCollum Heading to MSG: 'Life's Not So Bad'",
      detail:
        "CJ McCollum, after a 17-point 0-for-4-from-three night that ended his streak of 9 made threes across G1-G3, told reporters Sunday-Monday 'life's not so bad' heading back to MSG (ClutchPoints, Apr 26-27). Series average 24.5 PPG/2.7 APG; Knicks have geared their coverage to deny the step-back. The bounce-back game prop is the headline going into Tuesday with the road dog moneyline at +220.",
      category: "general",
    },
    {
      title: "Knicks 114, Hawks 98 — Game 4 Recap: KAT's First Postseason Triple-Double",
      detail:
        "New York leveled the series 2-2 with a wire-to-wire 114-98 home win Saturday Apr 25 (NBA.com/CBS Atlanta, Apr 25-26). Karl-Anthony Towns went 20-10-10 with one turnover in 40 minutes — first career postseason triple-double, fourth Knick ever (Frazier, McGuire, Hart). NYK led 68-44 at half and by 20 after Q3. OG Anunoby led NYK scoring with 22, Brunson added 19. Hawks shot 41% overall, 24% from three.",
      category: "games",
    },
    {
      title: "Knicks' Game 4 Adjustment: Protect Brunson, Run Offense Through KAT",
      detail:
        "Mike Brown's Game 4 adjustments unlocked New York's best offensive showing of the series (NY Knicks News, Apr 26-27): rotated coverages and varied switches to keep Brunson off primary ball-handlers defensively, then ran the offense through KAT as a high-post hub — 12 potential assists, 10 made. Hawks have to choose between blitzing KAT (free shooters) or playing him straight (his triple-double map). Whichever Snyder picks Tuesday is the series.",
      category: "rotation",
    },
    {
      title: "Okongwu Day-to-Day With Knee Inflammation — Expected to Play Game 5",
      detail:
        "Onyeka Okongwu (right knee inflammation) remains day-to-day with knee management heading to Tuesday but is expected to play (Heavy/CBS, Apr 27). Played Game 4 through it and was the primary defender on KAT's first career playoff TD. KAT-on-Okongwu remains the series-defining matchup ATL has yet to counter; Bradley/Gueye still the spell-big plan if Snyder goes earlier with the rotation Tuesday.",
      category: "injuries",
    },
    {
      title: "Johnson's Quiet 14-10-10 — First Career Playoff Triple-Double, In a Loss",
      detail:
        "Jalen Johnson posted his first career playoff triple-double in Game 4 — 14 pts (6 paint buckets, 9 FTAs), 10 reb, 10 ast — but never found scoring rhythm against OG Anunoby's coverage (SI/onsi, Apr 25-26). 'Mild response' was the league framing. Series line 19.5/8.5/6.0; Anunoby is now the matchup he has to solve to flip Game 5.",
      category: "games",
    },
    {
      title: "Kuminga Game 4 Dud — All 8 Points in Q4 Garbage Time",
      detail:
        "After the franchise-history Q1 in Game 3, Kuminga managed only 8 points in Game 4 — every one of them in the fourth quarter once the deficit had ballooned (SI Warriors onsi, Apr 26). 2 reb, 0 ast, 0 stl/blk; activity level visibly off after the early miss-fest. Series PPG drops to 14.0 through four — Snyder's bench plan needs the Game 3 Kuminga to show back up Tuesday.",
      category: "rotation",
    },
    {
      title: "NAW Wins 2025-26 NBA Most Improved Player — Back-to-Back for Hawks",
      detail:
        "Nickeil Alexander-Walker was named the 2025-26 Kia Most Improved Player on Friday Apr 24, beating finalists Deni Avdija and Jalen Duren (NBA.com/Washington Post/Bleacher Report). Career-best 20.8 PPG (up 11.4 from last year's 9.4 — third-largest single-season jump in 25 years), 39.9% from three on a franchise-record 251 makes. Hawks become the first team ever with back-to-back MIP winners after Daniels last season.",
      category: "general",
    },
    {
      title: "Daniels' Defense Holds Brunson at 19 — Offensive Ceiling Still the Drag",
      detail:
        "Through four games the Daniels/NAW tag-team look has Brunson at 22 PPG well below his regular-season norm — Game 4 was 19 (Basketball.com.au, Apr 25). Defense isn't the issue; Daniels' own scoring is at ~6.8 PPG on 36.8% FG. Snyder keeps him in the starting five for the Brunson assignment; series box-score expectation is more 9-7-6 than 17-pt spike heading into Tuesday.",
      category: "rotation",
    },
    {
      title: "Hawks 109, Knicks 108 — Game 3 Holds Up as the Lone ATL Home Win",
      detail:
        "Atlanta's Game 3 win on CJ McCollum's go-ahead fadeaway at 12.5 seconds and a Jonathan Kuminga help-poke steal (NBA.com/Yahoo, Apr 23-24) remains the only home win of the series after Saturday's blowout. Hawks led 58-50 at half, weathered OG Anunoby 29 and KAT 21/17, and held NYK scoreless on the final two possessions.",
      category: "games",
    },
    {
      title: "Risacher Buried Through Round 1 — Four Straight DNP-CDs Heading to MSG",
      detail:
        "Zaccharie Risacher has logged just 2:30 of total playoff minutes (Game 1) heading into Tuesday — four straight DNP-CDs (Eurohoops/FanSided, Apr 24-26). Snyder's wing reserve hierarchy is Kuminga > Kispert > Gueye > Risacher; the No. 1 overall pick told reporters 'it's tough' on the lack of run. Offseason development plan is now the larger storyline regardless of how Round 1 ends.",
      category: "rotation",
    },
    {
      title: "Landale Out At Least Another Week — Round 1 Likely Lost",
      detail:
        "Jock Landale (right high-ankle sprain, Apr 1) remains out at least another week per Hawks medical staff (Heavy/CBS, Apr 24). Has missed all of Round 1 to date; even an Atlanta advance to Round 2 likely opens without him. Bradley + Gueye combination remains Snyder's emergency-big plan.",
      category: "injuries",
    },
    {
      title: "Trae Young Trade: McCollum 24.5 PPG Series Lead, Kuminga's Wing Slot",
      detail:
        "Four playoff games since the Jan 8 Trae-for-McCollum-plus package: McCollum leads ATL at 24.5 PPG with the Game 3 walk-off, Kuminga at 14.0 PPG with one Q1 hero arc, Kispert ahead of No. 1 pick Risacher in the rotation (Soaring Down South/Hawks.com, Apr 24). Trae's not playing for Washington again this season after they missed the play-in. The trade still grades as the series enabler.",
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
    "NY Knicks News",
    "Heavy Sports",
    "Bleacher Report",
    "RotoWire",
    "Yardbarker",
    "Eurohoops",
    "FanSided",
    "Hawks.com",
    "FanDuel Research",
    "Covers",
    "TotalProSports",
  ],
};
