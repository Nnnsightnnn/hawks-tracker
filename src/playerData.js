// ─── Atlanta Hawks Player Data (2025-26 Season · Updated Apr 29, 2026 — Hawks face elimination, Game 6 Thursday) ─
// Single source of truth for roster, games, digest, and RSS feeds.
// Season context: 46-36 regular season, Southeast Division champs, 6-seed in East.
// Playoffs Round 1 vs NY Knicks: KNICKS LEAD SERIES 3-2 after Tuesday's 126-97 Game 5 blowout at MSG.
// Game 6 elimination night Thursday Apr 30 at State Farm Arena (8:00 PM ET window TBD on TNT/ESPN).
// Brunson torched ATL for 39 (15-of-23, 8 ast, 1 TO, +23) and KAT followed his Game 4
// triple-double with 16-14-6 in 34 min as NYK shot 58.5% in the first half and led
// wire-to-wire from a 35-22 Q1 close (NBA.com/Washington Post/CBS NY/SI onsi, Apr 28-29).
// Hawks were minus-29 from a 35-22 first quarter and never within single digits
// post-halftime; Snyder told reporters postgame the team "let the moment speed us up"
// (Peachtree Hoops/SI three takeaways, Apr 28-29). Johnson finished 18-10-6 on
// 7-of-15 with 1-of-5 from three under Anunoby coverage; Daniels was the only
// bright spot (17 pts, 7-of-11, 5 ast in 25 min); McCollum just 6 on 3-of-10 in
// 32 minutes — second straight night without a made three. Onyeka Okongwu
// (right knee inflammation) again played through it for 16-5-4 in 34 min and
// is expected to play Game 6; Jock Landale (right high-ankle sprain Apr 1) is
// still out at least another week. Buddy Hield finally re-entered the rotation
// for 4 minutes (5 pts, 2-of-3, 1-of-1 from three) — Snyder's first deviation
// from the 8-deep bench plan. Lingering franchise headline: Nickeil Alexander-Walker
// named 2025-26 NBA Most Improved Player Friday Apr 24 — first back-to-back MIP
// winners by any team after Daniels in 2024-25.

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
    form: 7.2, status: "active", injuryNote: null,
    recentNotes: "Game 5 line: 18-10-6 on 7-of-15 with 1-of-5 from three in 34:35 — second straight quiet playoff scoring night under OG Anunoby's coverage (NBA.com box, Apr 28). 'Establish early' was the explicit pregame brief; Hawks were minus-13 in his minutes and his three turnovers were part of an Atlanta giveaway pile that Brunson punished. Now 19.2/8.8/6.0 through five with a 1.7 stl avg; Game 6 elimination night Thursday is the third matchup with Anunoby in seven days — has to manufacture pressure off the catch instead of waiting for switches (SI onsi/Peachtree Hoops three takeaways, Apr 28-29).",
    playoffStats: { gamesPlayed: 5, minutesPerGame: 36.9, pointsPerGame: 19.2, reboundsPerGame: 8.8, assistsPerGame: 6.0 },
    playoffSeries: { games: 5, ppg: 19.2, rpg: 8.8, apg: 6.0, mpg: 36.9, fgPct: 47.5, threePct: 30.4, notes: "Anunoby coverage has dropped his FG rate vs reg-season; rebounding/playmaking holding (8.8/6.0)" },
    minutesTrend: "steady",
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
    recentNotes: "Best Hawks bright spot in the Game 5 blowout: 17 pts on 7-of-11 (2-of-4 from three) with 5 ast in 25:27 (NBA.com box, Apr 28). Most efficient offensive playoff night of his career — and the scoring breakthrough Snyder has been chasing all series. Defense on Brunson finally couldn't stick (Brunson 39, 15-of-23) as KAT's high-post hub broke ATL's switching scheme. Series scoring now 8.8 PPG (up from 6.8), 5.4 APG, 6.6 RPG; playoff true-shooting closer to season norm.",
    playoffStats: { gamesPlayed: 5, minutesPerGame: 29.9, pointsPerGame: 8.8, reboundsPerGame: 6.6, assistsPerGame: 5.4 },
    playoffSeries: { games: 5, ppg: 8.8, rpg: 6.6, apg: 5.4, mpg: 29.9, fgPct: 41.5, threePct: 36.0, notes: "G5 shooting breakthrough (7-of-11) flipped the offense narrative; Brunson defense overrun by KAT-led Knicks attack" },
    minutesTrend: "down",
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
    form: 7.0, status: "active", injuryNote: null,
    recentNotes: "Game 5 line: 16 pts on 6-of-11 with 4-of-9 from three, 3 ast in 33:44 (NBA.com box, Apr 28). Tied team high alongside Daniels and Okongwu for any non-Johnson scorer; the only Hawk hitting threes at volume in MSG. Defensive switch onto Brunson again couldn't blunt the Knicks star's 39-pt night. Series PPG ticked up to 13.8; Game 6 elimination night Thursday is the third Anunoby/Brunson/Hart rotation in seven days.",
    playoffStats: { gamesPlayed: 5, minutesPerGame: 36.3, pointsPerGame: 13.8, reboundsPerGame: 2.4, assistsPerGame: 3.2 },
    playoffSeries: { games: 5, ppg: 13.8, rpg: 2.4, apg: 3.2, mpg: 36.3, fgPct: 42.1, threePct: 36.5, notes: "Only ATL perimeter player above 33% from three across full series; Brunson assignment held +/- in check until G5" },
    usageRate: 18.6,
    minutesTrend: "steady",
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
    form: 7.0, status: "active", injuryNote: null,
    recentNotes: "Series-worst night in Game 5: 6 pts on 3-of-10, 0-of-2 from three, 0-of-3 from the line in 32:24 (NBA.com box, Apr 28). Second straight game without a made three after he opened the series 9-of-X across G1-G3. Knicks' rotated coverages have fully closed the step-back window; CBS NY game story called it 'a no-show from the lead playoff scoring engine.' Series PPG dropped from 24.5 to 20.8 with G6 elimination Thursday night — Snyder needs the G2 32-pt or G3 walk-off McCollum back or the offseason starts April 30.",
    playoffStats: { gamesPlayed: 5, minutesPerGame: 34.1, pointsPerGame: 20.8, reboundsPerGame: 3.2, assistsPerGame: 2.4 },
    playoffSeries: { games: 5, ppg: 20.8, rpg: 3.2, apg: 2.4, mpg: 34.1, fgPct: 41.0, threePct: 30.0, notes: "G5 0-for-2 from three extended a two-game cold stretch; Knicks switching has erased the step-back" },
    usageRate: 31.8,
    minutesTrend: "steady",
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
    form: 6.4, status: "day-to-day", injuryNote: "Right knee inflammation — played through it again in Game 5 (34 min, 16-5-4-1-1) and is expected to play Game 6 elimination night Thursday Apr 30 (Hawks medical staff via Heavy/CBS, Apr 28-29)",
    recentNotes: "Game 5 line: 16 pts on 6-of-10 (2-of-4 3P, 2-of-2 FT), 5 reb, 4 ast, 1 stl, 1 blk in 34:09 — most efficient defensive-night box of the series for him (NBA.com box, Apr 28). KAT followed Game 4's TD with 16-14-6 in 34 min — Okongwu kept him to 5-of-7 but lost the boards battle 14-5. Series PPG up to 12.0 with the knee holding. Bradley/Gueye still the spell-big plan but Game 5 saw Okongwu get all 34 of the C minutes when ATL was competitive; spell-bigs only entered with the game decided.",
    playoffStats: { gamesPlayed: 5, minutesPerGame: 29.6, pointsPerGame: 12.0, reboundsPerGame: 6.2, assistsPerGame: 1.8 },
    playoffSeries: { games: 5, ppg: 12.0, rpg: 6.2, apg: 1.8, mpg: 29.6, fgPct: 51.5, threePct: 38.5, notes: "Knee inflammation managed; KAT matchup is the series tipping point ATL has yet to counter" },
    minutesTrend: "up",
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
    form: 4.5, status: "active", injuryNote: null,
    recentNotes: "Fifth straight DNP-CD in Game 5 — even with Snyder reaching for Hield in garbage time, the No. 1 overall pick still didn't get a uniform-touch (NBA.com box, Apr 28). Total Round 1 playoff floor time stays at 2:30 (Game 1). Soaring Down South called it 'a brutal message' on the rotation slot; offseason development plan is now firmly the larger-than-Round-1 storyline.",
    playoffStats: { gamesPlayed: 1, minutesPerGame: 1.0, pointsPerGame: 0.0, reboundsPerGame: 2.0, assistsPerGame: 0.0 },
    playoffSeries: { games: 1, ppg: 0, rpg: 2.0, apg: 0, mpg: 1.0, fgPct: 0, threePct: 0, notes: "Out of rotation entirely; 5 straight DNP-CDs through G5" },
    minutesTrend: "down",
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
    form: 6.7, status: "active", injuryNote: null,
    recentNotes: "Game 5 reserve line: 13 pts on 4-of-10 (1-of-5 3P, 4-of-4 FT), 4 reb in 17:25 (NBA.com box, Apr 28). Bench-PPG-leader streak is still alive but minutes were the lowest of the series — Snyder kept the starting wings out longer trying to stay in it. Series 14.0 → 13.8 PPG through five. Has yet to recreate the Game 3 Q1 hero arc and the three-point shot remains stuck below 30% over the last three.",
    playoffStats: { gamesPlayed: 5, minutesPerGame: 27.5, pointsPerGame: 13.8, reboundsPerGame: 3.8, assistsPerGame: 0.8 },
    playoffSeries: { games: 5, ppg: 13.8, rpg: 3.8, apg: 0.8, mpg: 27.5, fgPct: 41.0, threePct: 26.0, notes: "Bench leader by PPG but G5 minutes dipped to 17 as Snyder leaned starters" },
    minutesTrend: "down",
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
    form: 6.0, status: "active", injuryNote: null,
    recentNotes: "Re-entered the rotation in Game 5 garbage time — 5 pts on 2-of-3 (1-of-1 3P) in 4:09 (NBA.com box, Apr 28). First playoff floor time of Round 1 after four straight DNPs. Snyder's first deviation from the 8-deep bench plan came with the game already decided, but FanSided/SI flagged his shot-making as a Game 6 elimination-night card Snyder can play if Atlanta needs three-point juice early.",
    playoffStats: { gamesPlayed: 1, minutesPerGame: 4.2, pointsPerGame: 5.0, reboundsPerGame: 0, assistsPerGame: 0 },
    playoffSeries: { games: 1, ppg: 5.0, rpg: 0, apg: 0, mpg: 4.2, fgPct: 66.7, threePct: 100.0, notes: "Garbage-time reactivation in G5 (1-of-1 3P); possible early-rotation card for G6 elimination" },
    minutesTrend: "up",
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
    form: 5.8, status: "active", injuryNote: null,
    recentNotes: "Game 5 line: 0 pts on 0-of-4 (0-of-3 3P), 1 reb, 2 ast, 1 stl in 14:24 (NBA.com box, Apr 28). Largest minutes of his playoff series but the shot didn't fall — SI/FanSided flagged him as one of the rotation pieces Snyder may have to evaluate as the Hawks face elimination Thursday. Still ahead of Risacher and Hield on the rotational wing depth chart.",
    playoffStats: { gamesPlayed: 4, minutesPerGame: 8.9, pointsPerGame: 2.0, reboundsPerGame: 1.3, assistsPerGame: 0.8 },
    playoffSeries: { games: 4, ppg: 2.0, rpg: 1.3, apg: 0.8, mpg: 8.9, fgPct: 25.0, threePct: 20.0, notes: "Snyder's third wing but G5 0-of-4 keeps the rotation slot up for review" },
    minutesTrend: "up",
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
    form: 5.4, status: "active", injuryNote: null,
    recentNotes: "Game 5 line: 6 pts on 2-of-7 (2-of-7 3P), 1 ast in 23:54 — but the team's worst plus-minus at -20 (NBA.com box, Apr 28). Most playoff minutes of the series and the floor sagged when he was on; took every shot from beyond the arc and missed five.",
    playoffStats: { gamesPlayed: 5, minutesPerGame: 18.0, pointsPerGame: 3.0, reboundsPerGame: 1.4, assistsPerGame: 1.0 },
    playoffSeries: { games: 5, ppg: 3.0, rpg: 1.4, apg: 1.0, mpg: 18.0, fgPct: 32.0, threePct: 31.0, notes: "Took 7 of 7 from three in G5 — only 2 fell; team-worst -20 in series-high minutes" },
    minutesTrend: "up",
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
    form: 6.0, status: "active", injuryNote: null,
    recentNotes: "Brief Game 5 spell minutes (4:32, 0-of-1 from three, no rebounds) as Snyder kept Okongwu on the floor through ATL's competitive stretch (NBA.com box, Apr 28). Series-low minutes after holding the rotational slot ahead of Risacher all month; Bradley got the bigger spell-big share Tuesday.",
    playoffStats: { gamesPlayed: 5, minutesPerGame: 9.7, pointsPerGame: 1.6, reboundsPerGame: 1.8, assistsPerGame: 0.0 },
    playoffSeries: { games: 5, ppg: 1.6, rpg: 1.8, apg: 0.0, mpg: 9.7, fgPct: 33.0, threePct: 25.0, notes: "Spell-big minutes shrunk in G5; Bradley got the bigger share alongside an extended Okongwu shift" },
    minutesTrend: "down",
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
    form: 6.0, status: "active", injuryNote: null,
    recentNotes: "First playoff floor time of Round 1 in Game 5 garbage time (1:49, 1 ast) as Snyder cleared the bench late (NBA.com box, Apr 28).",
    playoffStats: { gamesPlayed: 1, minutesPerGame: 1.8, pointsPerGame: 0, reboundsPerGame: 0, assistsPerGame: 1.0 },
    playoffSeries: { games: 1, ppg: 0, rpg: 0, apg: 1.0, mpg: 1.8, fgPct: 0, threePct: 0, notes: "G5 garbage-time activation; first playoff minutes of his career" },
    minutesTrend: "up",
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
    form: 5.8, status: "active", injuryNote: null,
    recentNotes: "Fifth straight DNP-CD in Game 5 — outside the playoff rotation entirely (NBA.com box, Apr 28). Rookie season's playoff bag stays at zero minutes through Round 1.",
    playoffStats: { gamesPlayed: 0, minutesPerGame: 0, pointsPerGame: 0, reboundsPerGame: 0, assistsPerGame: 0 },
    playoffSeries: null,
    minutesTrend: "down",
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
    form: 5.7, status: "active", injuryNote: null,
    recentNotes: "Game 5 spell-big line: 0 pts, 2 reb, 1 ast, 1 stl in 13:29 (NBA.com box, Apr 28). Took the bigger share of the bench-big rotation over Gueye as KAT-on-Okongwu still ran the matchup. SI/FanSided flagged Bradley among the rotation pieces Snyder may have to evaluate as Hawks face elimination Thursday.",
    playoffStats: { gamesPlayed: 4, minutesPerGame: 11.6, pointsPerGame: 1.3, reboundsPerGame: 1.8, assistsPerGame: 0.8 },
    playoffSeries: { games: 4, ppg: 1.3, rpg: 1.8, apg: 0.8, mpg: 11.6, fgPct: 50.0, threePct: 0, notes: "Bigger share of bench-big mins in G5 vs Gueye; KAT matchup still the issue" },
    minutesTrend: "up",
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
    form: 5.0, status: "out", injuryNote: "Right high-ankle sprain (Apr 1) — ruled out through at least another week (Heavy/CBS, Apr 24); has now missed all 5 games of Round 1 and would miss Round 2 opener if Hawks survive Game 6",
    recentNotes: "Out for Game 5; no change in timeline through Game 6 elimination night Thursday. Bradley + Gueye remain Snyder's emergency-big plan if Okongwu's knee escalates.",
    playoffStats: null,
    playoffSeries: null,
    minutesTrend: null,
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
  date: "2026-04-30T20:00:00-04:00",
  competition: "PLAYOFFS",
  venue: "State Farm Arena",
  broadcast: "TNT / truTV",
  seriesContext: "Round 1 · Game 6 · Hawks trail 2-3 · ELIMINATION",
};

// ─── Game Results (2025-26 regular season · last 16 games) ─────────────────
// result: "W" | "L"; score format "ATL-OPP"
export const RESULTS = [
  { date: "2026-04-28", opponent: "New York Knicks",      home: false, score: "97-126",  competition: "PLAYOFFS", result: "L", topScorers: "R1G5 · Johnson 18-10-6, Daniels 17 (7-11), Okongwu 16, NAW 16; Brunson 39 (15-23), KAT 16-14-6" },
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
  losses: 3,
  games: [
    { game: 1, date: "2026-04-18", home: false, score: "102-113", result: "L", venue: "Madison Square Garden", broadcast: "Prime Video" },
    { game: 2, date: "2026-04-20", home: false, score: "107-106", result: "W", venue: "Madison Square Garden", broadcast: "NBC" },
    { game: 3, date: "2026-04-23", home: true,  score: "109-108", result: "W", venue: "State Farm Arena",       broadcast: "Prime Video" },
    { game: 4, date: "2026-04-25", home: true,  score: "98-114",  result: "L", venue: "State Farm Arena",       broadcast: "NBC / Peacock" },
    { game: 5, date: "2026-04-28", home: false, score: "97-126",  result: "L", venue: "Madison Square Garden",  broadcast: "NBC / Peacock" },
    { game: 6, date: "2026-04-30", home: true,  score: null,      result: null, venue: "State Farm Arena",       broadcast: "TNT / truTV" },
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
  generatedAt: "2026-04-29T07:30:00Z",
  summary:
    "Hawks face elimination Thursday after a 126-97 Game 5 thumping at MSG dropped Atlanta down 3-2 in the first round (NBA.com/ESPN/Washington Post/CBS NY, Apr 28). Jalen Brunson torched the Hawks for 39 (15-of-23, 8 ast, 1 TO, +23) and Karl-Anthony Towns followed his Game 4 triple-double with 16-14-6 in 34 min as New York led wire-to-wire from a 35-22 first quarter and shot 58.5% in the first half (NBA.com 4 takeaways/Yahoo Game 5 takeaways, Apr 28-29). Hawks shot 41% overall, Daniels (17 on 7-of-11, 5 ast in 25 min) was the only consistent bright spot, McCollum cratered to 6 points on 3-of-10 (now two straight games with zero made threes), and Jonathan Kuminga's bench role got squeezed to 17 minutes. Quin Snyder told reporters postgame the team 'let the moment speed us up' (Peachtree Hoops/SI three takeaways, Apr 28-29). Game 6 is now an elimination night at State Farm Arena Thursday Apr 30 with broadcast on TNT/truTV; ATL hasn't beaten NYK back-to-back this series and would have to win twice to advance (G7 Saturday May 2 at MSG if it gets there). Onyeka Okongwu (right knee inflammation) again played through it for 16-5-4 in 34 min and is expected to play Thursday; Buddy Hield re-entered the rotation in garbage time (5 pts, 1-of-1 from three in 4 min) — Snyder's first deviation from the 8-deep bench plan. Jock Landale (right high-ankle sprain Apr 1) remains out at least another week. Lingering franchise headline: Nickeil Alexander-Walker named 2025-26 NBA Most Improved Player Friday Apr 24 — first back-to-back MIP winners by any team after Daniels in 2024-25 (NBA.com).",
  keyTopics: [
    {
      title: "Knicks 126, Hawks 97 — Game 5 Recap: Brunson 39, Hawks Pushed to Brink",
      detail:
        "New York routed Atlanta 126-97 at MSG on Tuesday Apr 28 to take a 3-2 series lead (NBA.com/Washington Post/CBS NY/Yahoo Game 5 takeaways, Apr 28-29). Jalen Brunson's 39 (15-of-23, 3-of-5 3P, 6-of-8 FT, 8 ast, 1 TO, +23) led wire-to-wire effort that opened on a 9-0 run for a 35-22 Q1 close; Knicks shot 58.5% in the first half and led 64-48 at the break. Karl-Anthony Towns followed his Game 4 TD with 16-14-6 in 34 min. NYK's second straight lopsided win heading into Game 6 elimination Thursday at State Farm Arena.",
      category: "games",
    },
    {
      title: "Game 6 Elimination Night Thursday at State Farm Arena (TNT/truTV)",
      detail:
        "Game 6 of the Round 1 series tips Thursday Apr 30 at State Farm Arena with broadcast on TNT/truTV (ESPN game pages, Apr 28-29). Hawks must win twice to advance after dropping back-to-back games by 16 and 29 — they have not won consecutive games against the Knicks this series. If Atlanta takes Game 6, the deciding Game 7 would be Saturday May 2 back at MSG.",
      category: "games",
    },
    {
      title: "Snyder Postgame: 'Let the moment speed us up' — Rotation Now Up for Review",
      detail:
        "Quin Snyder told reporters postgame the team 'let the moment speed us up' after the 29-point loss (Peachtree Hoops/SI three takeaways/onsi, Apr 28-29). FanSided and SI flagged real Game 6 decisions on the table: whether Bradley and Kispert keep their roles, whether Gueye gets meaningful spell-big minutes, and whether Buddy Hield — who got 4 garbage-time minutes Tuesday — earns earlier run for three-point juice with the Hawks now needing to win two straight.",
      category: "rotation",
    },
    {
      title: "Daniels Game 5 Bright Spot: 17 on 7-of-11 in 25 Minutes",
      detail:
        "Dyson Daniels' 17 points on 7-of-11 (2-of-4 3P) with 5 ast in 25:27 was Atlanta's lone consistent positive Tuesday (NBA.com box, Apr 28). Most efficient offensive playoff night of his career and the scoring breakthrough Snyder has been chasing all series. Series scoring up to 8.8 PPG; defense on Brunson finally couldn't stick as KAT's high-post hub overran the Hawks' switching scheme.",
      category: "games",
    },
    {
      title: "McCollum Cratered: 6 Points on 3-of-10, 0-of-2 from Three",
      detail:
        "CJ McCollum followed his Game 4 cold night with a series-worst 6 points on 3-of-10, 0-of-2 from three, 0-of-3 from the line in 32:24 (NBA.com box, Apr 28). Two straight games without a made three after he opened the series 9-of-X across G1-G3. Knicks' rotated coverages have fully closed the step-back; CBS NY game story called it 'a no-show from the lead playoff scoring engine.' Series PPG dropped to 20.8.",
      category: "games",
    },
    {
      title: "Johnson's Game 5: 18-10-6 But Anunoby Still the Drag",
      detail:
        "Jalen Johnson's 18-10-6 on 7-of-15 (1-of-5 3P) in 34:35 was a stat-sheet line that masked another quiet scoring night against OG Anunoby coverage (NBA.com box, Apr 28). Three turnovers in a Hawks giveaway pile that Brunson punished. Through five he's at 19.2/8.8/6.0 — solid for an All-NBA candidate but well below the regular-season 22.8/10.3/8.0 baseline.",
      category: "games",
    },
    {
      title: "Okongwu Plays Through Knee Again, Expected for Game 6",
      detail:
        "Onyeka Okongwu (right knee inflammation) again played through it for 16-5-4-1-1 in 34 min Tuesday and is expected to play Game 6 elimination night Thursday (Hawks medical staff via Heavy/CBS, Apr 28-29). KAT 16-14-6 split: Okongwu kept him to 5-of-7 from the field but lost the boards battle 14-5. KAT-on-Okongwu still the series-defining matchup ATL has yet to counter.",
      category: "injuries",
    },
    {
      title: "Buddy Hield Reactivated — 5 Pts in 4 Garbage-Time Minutes",
      detail:
        "After four straight DNPs to open Round 1, Buddy Hield got 4:09 in Game 5 garbage time and went 2-of-3 (1-of-1 3P) for 5 points (NBA.com box, Apr 28). Snyder's first deviation from the 8-deep bench plan came with the game already decided, but FanSided/SI cited his shot-making as a Game 6 elimination-night card Snyder can play if Atlanta needs three-point juice early.",
      category: "rotation",
    },
    {
      title: "Kuminga Squeezed: 13 in 17 Minutes — Lowest Run of the Series",
      detail:
        "Jonathan Kuminga's 13 pts on 4-of-10 (1-of-5 3P, 4-of-4 FT), 4 reb in 17:25 was his shortest playoff stint of Round 1 (NBA.com box, Apr 28). Series PPG dropped slightly to 13.8; the three-point shot is stuck below 30% over the last three games. Bench-leader-by-PPG title still alive but the Game 3 Q1 hero arc has not returned and Snyder leaned starters in Game 5's competitive minutes.",
      category: "rotation",
    },
    {
      title: "Risacher 5th Straight DNP — Even With Hield Reactivated",
      detail:
        "Zaccharie Risacher logged a fifth straight DNP-CD in Game 5 — Snyder reached past him to Hield for the garbage-time wing minute (NBA.com box, Apr 28). Total Round 1 floor time stays at 2:30 (Game 1). Soaring Down South called it 'a brutal message' on the rotation slot; offseason development plan is firmly the larger-than-Round-1 storyline.",
      category: "rotation",
    },
    {
      title: "Knicks Series Adjustments Held: Switch Coverage on Brunson, Run Through KAT",
      detail:
        "Mike Brown's Game 4 adjustments — rotated coverages on Brunson, KAT as high-post hub — held through Game 5 with even better results: Brunson 39, KAT 6 ast (NBA.com 4 takeaways, Apr 28). Hawks still haven't picked a clean answer between blitzing KAT (free shooters) or playing him straight (his triple-double map). Snyder's elimination-night counter is the headline pick of Game 6.",
      category: "rotation",
    },
    {
      title: "NAW Wins 2025-26 NBA Most Improved Player — Back-to-Back for Hawks",
      detail:
        "Nickeil Alexander-Walker was named the 2025-26 Kia Most Improved Player on Friday Apr 24, beating finalists Deni Avdija and Jalen Duren (NBA.com/Washington Post/Bleacher Report). Career-best 20.8 PPG (up 11.4 from last year's 9.4 — third-largest single-season jump in 25 years), 39.9% from three on a franchise-record 251 makes. Hawks become the first team ever with back-to-back MIP winners after Daniels last season.",
      category: "general",
    },
    {
      title: "Landale Out At Least Another Week — Has Missed All of Round 1",
      detail:
        "Jock Landale (right high-ankle sprain, Apr 1) remains out at least another week per Hawks medical staff (Heavy/CBS, Apr 24, no update Apr 28). Has now missed all five Round 1 games; even an Atlanta advance to Round 2 likely opens without him. Bradley + Gueye combination remains Snyder's emergency-big plan.",
      category: "injuries",
    },
    {
      title: "Trae Young Trade: McCollum 20.8 PPG Series Lead, Kuminga's Wing Slot",
      detail:
        "Five playoff games since the Jan 8 Trae-for-McCollum-plus package: McCollum leads ATL at 20.8 PPG (down from 24.5 after a Game 5 dud), Kuminga at 13.8 PPG, Kispert ahead of No. 1 pick Risacher in the rotation (Soaring Down South/Hawks.com, Apr 28). Trae's not playing for Washington again this season after they missed the play-in. The trade still grades as the series enabler — but Atlanta is one bad night from the offseason.",
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
    "AJC",
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
    "Lineups.com",
    "FanDuel Research",
    "Covers",
    "TotalProSports",
  ],
};
