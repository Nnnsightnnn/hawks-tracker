// ─── Atlanta Hawks Player Data (2025-26 Season · Updated May 3, 2026 — SEASON OVER · ELIMINATED in R1 · Lottery in 1 week) ─
// Single source of truth for roster, games, digest, and RSS feeds.
// Season context: 46-36 regular season, Southeast Division champs, 6-seed in East.
// Playoffs Round 1 vs NY Knicks: KNICKS WIN SERIES 4-2 after Thursday's HISTORIC 140-89 Game 6 blowout at State Farm Arena.
// 51-point margin tied for the 6th-largest in NBA playoff history; the Knicks' 47-point halftime lead
// (83-36) was the LARGEST AT THE BREAK IN PLAYOFF HISTORY, eclipsing the previous mark of 41 (NBA.com,
// FOX Sports, NY Post, ClutchPoints — Apr 30/May 1). The Knicks scored 40 in Q1 alone — also a shot-clock-era
// record for largest first-quarter lead in a playoff game (40-15) — then closed the half on a 74-25 run
// stretching across the back half of Q1 and Q2. Late in Q2, with NYK already up 50-plus, Mitchell Robinson
// and Dyson Daniels were both ejected after a free-throw scrum in which Daniels threw an elbow into Robinson's
// chest, Robinson responded with a shove, and a referee was knocked to the floor (Bleacher Report/Yahoo/
// Larry Brown Sports/Yardbarker/Heavy, Apr 30). Daniels exited with 3 pts on 1-of-4 in 15 min; Robinson with
// 6 pts/3 reb/2 blk in 9 min off the bench. Knicks' top scorers: OG Anunoby 29 in 27 min, Karl-Anthony Towns
// 12-11-10 (his SECOND triple-double of the series), Brunson with the close-out load. Hawks: Johnson team-high
// 21, McCollum/NAW/Kuminga 11 apiece — Johnson's blunt postgame quote "I don't really have any words for that.
// Obviously, disappointing. Obviously, it sucks." (Heavy, Apr 30). Snyder: "we didn't have an answer for that
// tonight" (NBA.com 4 takeaways/AP via fultonneighbor, Apr 30/May 1). Knicks advance to ECF semifinals vs the
// Celtics-76ers Game 7 winner. Hawks pivot to a quick offseason: Snyder extension talks, McCollum free-agency
// retention plan, and the May 10 NBA Draft Lottery (ATL holds the more-favorable of NOP/MIL picks plus the No. 24
// from CLE) lead the agenda (SI onsi/Hoops Rumors/Yardbarker/Bleacher Report, Apr 28-30).

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
    form: 6.9, status: "active", injuryNote: null,
    recentNotes: "Now the unambiguous franchise focal point heading into Sunday May 3's offseason — Saleh's exit-interview message ('we're not one player away … best iteration through development') frames the summer around Johnson's continued growth (Peachtree Hoops / SI onsi, May 1-2). Final R1 line settled at 19.5/8.3/5.5 vs his 22.8/10.3/8.0 regular-season baseline; AJC and SI onsi credited Anunoby's coverage as the series-defining drag. Offseason agenda: All-NBA third-team voting still pending (Yahoo's media-poll ballot showed first-team Johnson votes, full results out in coming weeks), plus rumored extension talks now that Trae's gone — the historical company on the 22+/10+/7+ line (Oscar, Wilt, Jokic, Westbrook) keeps the comparison ceilings high.",
    playoffStats: { gamesPlayed: 6, minutesPerGame: 35.0, pointsPerGame: 19.5, reboundsPerGame: 8.3, assistsPerGame: 5.5 },
    playoffSeries: null,
    minutesTrend: "down",
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
    form: 6.7, status: "active", injuryNote: null,
    recentNotes: "Two days past the Game 6 ejection and one $25,000 fine handed down (May 1) — the season-defining storylines remain the Luka-2022 bar (24 pts / 35 reb / 25 ast / 10 stl through the first four R1 games, the first NBA player to clear that span since 2022 per NBA.com Apr 27) and the 26-27 DPOY case (Wembanyama swept this year's race unanimously per Hoops Rumors Apr — Daniels was at +2000 in March). Reigning MIP and 24-25 All-Defensive 1st-team; finished 2nd in 24-25 DPOY voting. Six-game R1 line settled around 7.8/5.8/4.7 in 27 mpg with a Game 5 scoring breakthrough (17 on 7-of-11) before the Game 6 ejection. NAW's MIP win (Apr 24) made ATL the first franchise ever with back-to-back winners.",
    playoffStats: { gamesPlayed: 6, minutesPerGame: 27.4, pointsPerGame: 7.8, reboundsPerGame: 5.8, assistsPerGame: 4.7 },
    playoffSeries: null,
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
    form: 6.8, status: "active", injuryNote: null,
    recentNotes: "MIP trophy is the through-line into May 3: 2025-26 Kia Most Improved Player Apr 24 with 66 of 100 first-place votes, beating finalists Deni Avdija and Jalen Duren (NBA.com / Washington Post). Career-best 20.8/3.4/3.7 on 39.9% from three (251 makes is a Hawks single-season record) — back-to-back MIPs for ATL after Daniels' 24-25 win. Series scoring settled around 13.4 PPG; the only ATL perimeter player above 33% from three across the full six. Locked in long-term on the four-year deal he signed last summer — Saleh's exit-interview line about building 'through development' applies most directly to NAW given how recent the breakout was.",
    playoffStats: { gamesPlayed: 6, minutesPerGame: 34.4, pointsPerGame: 13.4, reboundsPerGame: 2.3, assistsPerGame: 3.2 },
    playoffSeries: null,
    usageRate: 18.6,
    minutesTrend: "down",
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
    form: 6.5, status: "active", injuryNote: null,
    recentNotes: "Headline UFA target. SI onsi (Apr 30), Hoops Rumors (Apr 28) and HoopsHype (May 1) all align: Atlanta plans to bring him back on a multi-year deal, with offers expected 'slightly above the mid-level exception' — most execs pegging 2yr/$35-40M as the fair range. Hollinger's Athletic preview (May 1-2) flags age (34) as the structural risk but still endorses the retention. Free-agency sample is set: 18.7/3.1/4.1 in 41 regular-season games (25 starts), then 19.2 PPG / 49% FG / 31% 3P across the six R1 games. Atlanta operates with $55.9M of theoretical cap space under the first apron, but Hollinger expects the team to run OVER the cap and use the non-tax MLE (~$15.1M) to sign him.",
    playoffStats: { gamesPlayed: 6, minutesPerGame: 33.0, pointsPerGame: 19.2, reboundsPerGame: 3.2, assistsPerGame: 2.5 },
    playoffSeries: null,
    usageRate: 31.8,
    minutesTrend: "down",
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
    form: 6.6, status: "active", injuryNote: null,
    recentNotes: "Career-best regular season locks in his role as the post-Trae starting C: 15.2/7.6/3.1 on 48.0% FG with 1.1 blk and 1.1 stl across 74 games and 31 mpg (basketball-reference / RotoWire / lineups.com). Two years left on his 4yr/$62M deal at $16.1M in 26-27 (Spotrac). Atlanta has resisted prior trade interest and Bleacher Report cap notes (Apr 28) plus Hollinger's preview (May 1-2) treat the C role as locked. Six-game R1 line was ~11.3/5.7/1.7 played through right-knee inflammation diagnosed after Game 1 — KAT's two triple-doubles in the matchup were the series-defining mismatch ATL never solved.",
    playoffStats: { gamesPlayed: 6, minutesPerGame: 28.5, pointsPerGame: 11.3, reboundsPerGame: 5.7, assistsPerGame: 1.7 },
    playoffSeries: null,
    minutesTrend: "down",
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
    recentNotes: "Trade-watch player No. 1 of the offseason. Hollinger's Athletic preview (relayed via SI onsi / Larry Brown Sports / Yardbarker / Lindys, May 1-2) named Risacher (and Kispert) as the likeliest summer trade chip after R1. Soaring Down South (May 1) added that with Johnson, NAW and Kuminga ahead on the wing depth chart and a likely Boozer-or-equivalent draft addition, the path to minutes is gone. Round 1 floor time was just 2:30 across the whole series — one Game 1 cameo, then five straight DNP-CDs. Sophomore line: 9.6/3.8/1.1 on 44.6% FG / 37.2% 3P across 66 games (Roundtable/CraftedNBA Apr 30) — regression from his 12.6 PPG rookie year as usage dropped from 21.6% to 17.7%.",
    playoffStats: { gamesPlayed: 1, minutesPerGame: 1.0, pointsPerGame: 0.0, reboundsPerGame: 2.0, assistsPerGame: 0.0 },
    playoffSeries: null,
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
    form: 6.4, status: "active", injuryNote: null,
    recentNotes: "Biggest cap decision of the offseason — DEADLINE JUNE 29 on the $24.3M 26-27 team option (Heavy / ClutchPoints, Apr 30). Bleacher Report and Hoops Rumors (Apr 28-30) flag mutual interest in DECLINING the option to negotiate a longer-term deal per Jake Fischer; Hollinger's Athletic preview (May 1-2) endorses that path. The Warriors-with-Kuminga template Atlanta now navigates (BlueManHoop, May 1). Six-game R1 line landed around 13.4 PPG with a three-point shot that never recovered (sub-30% over the last four). Regular-season Hawks line of 14.9/5.1/2.2 in 16 games left both a clear ceiling (Game 3's 21-off-bench Q1 hero arc) and a clear coaching project for the summer.",
    playoffStats: { gamesPlayed: 6, minutesPerGame: 25.7, pointsPerGame: 13.4, reboundsPerGame: 3.6, assistsPerGame: 0.8 },
    playoffSeries: null,
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
    form: 5.7, status: "active", injuryNote: null,
    recentNotes: "Calendar marker: $9.4M 26-27 contract has just $3M guaranteed UNTIL JUNE 25, when it triggers full guarantee (SI onsi cap tracker / BlueManHoop, Apr 28-May 1). Three Hawks paths: trigger and use as movable expiring, waive before the trigger and save $6.4M, or include in a pre-trigger trade. Hoops Rumors Apr listed Hield as a likely offseason discussion piece. Regular-season line of 11.8/2.8/2.1 on 39.8% from three across 71 games (12 starts), but R1 role was largely abandoned (6 mpg in 2 games). Decision is one of the May–June calendar pivots — alongside the Kuminga option (June 29) and the lottery (May 10).",
    playoffStats: { gamesPlayed: 2, minutesPerGame: 6.0, pointsPerGame: 4.0, reboundsPerGame: 0.5, assistsPerGame: 0.5 },
    playoffSeries: null,
    minutesTrend: "down",
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
    form: 5.4, status: "active", injuryNote: null,
    recentNotes: "Series ended with the rotation slot under question after a tough showing — Jose Alvarado hunted him on switches all six games and SI onsi Apr 29 had openly tagged him as a swap-out candidate before Game 6. Ended R1 with low single-digit minutes per game and well below his career 40%+ from three. UFA-eligible question doesn't apply (still under contract); offseason watchpoint is whether Atlanta keeps three wings (NAW, Risacher, Kispert) or shops the slot.",
    playoffStats: { gamesPlayed: 5, minutesPerGame: 8.5, pointsPerGame: 2.0, reboundsPerGame: 1.2, assistsPerGame: 0.8 },
    playoffSeries: null,
    minutesTrend: "down",
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
    form: 5.2, status: "active", injuryNote: null,
    recentNotes: "Round 1 closed with quiet Game 6 minutes once it was over — Vincent had been the team's worst plus-minus across G4-G5. Six-game R1 line: ~3 PPG on a series-long shooting slump; took 7 of 7 from three in G5 and only 2 fell. UFA after this season per Bleacher Report cap notes (Apr 28); regular season was a steady veteran backup role (7.4/1.8/2.9) but the playoff sample raises questions on the renewal price.",
    playoffStats: { gamesPlayed: 6, minutesPerGame: 16.0, pointsPerGame: 2.8, reboundsPerGame: 1.3, assistsPerGame: 1.0 },
    playoffSeries: null,
    minutesTrend: "down",
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
    form: 5.8, status: "active", injuryNote: null,
    recentNotes: "Got Game 6 garbage-time minutes once the result was decided — Bradley still received the bigger spell-big share through the series. Six-game R1 totals were modest (sub-10 mpg). Regular-season averages of 6.2/4.6 in 14.8 mpg held a real third-big role through 46 games; expected to compete for that same slot next year unless ATL adds a center in free agency or via the lottery picks.",
    playoffStats: { gamesPlayed: 6, minutesPerGame: 9.2, pointsPerGame: 1.4, reboundsPerGame: 1.7, assistsPerGame: 0.2 },
    playoffSeries: null,
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
    form: 5.9, status: "active", injuryNote: null,
    recentNotes: "Got extended Game 6 garbage-time burn in the historic 51-point loss — second playoff appearance of his career after a Game 5 cameo (NBA.com 4 takeaways, Apr 30). Restricted FA per Bleacher Report cap notes (Apr 28); Atlanta likely tenders a qualifying offer to keep the depth piece on a team-friendly deal.",
    playoffStats: { gamesPlayed: 2, minutesPerGame: 6.0, pointsPerGame: 1.5, reboundsPerGame: 0.5, assistsPerGame: 1.0 },
    playoffSeries: null,
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
    form: 5.7, status: "active", injuryNote: null,
    recentNotes: "Rookie playoff exposure finally arrived in Game 6 garbage time (NBA.com 4 takeaways, Apr 30) — Snyder cleared the bench in the second half once the deficit hit 50. Rookie regular-season line of 4.2/2.8 in 10.4 mpg over 32 games is the foundation; Summer League and a possible bigger third-string spell-PF role are the offseason path.",
    playoffStats: { gamesPlayed: 1, minutesPerGame: 5.0, pointsPerGame: 2.0, reboundsPerGame: 1.0, assistsPerGame: 0 },
    playoffSeries: null,
    minutesTrend: "up",
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
    form: 5.6, status: "active", injuryNote: null,
    recentNotes: "Wrapped Round 1 with garbage-time Game 6 minutes after taking the bigger share of bench-big work over Gueye through the series. UFA per Bleacher Report cap notes (Apr 28) — veteran depth options at the back end of the roster are a low-cost offseason call. Regular season was 4.4/3.8 on 58.2% FG in limited minutes.",
    playoffStats: { gamesPlayed: 5, minutesPerGame: 11.0, pointsPerGame: 1.2, reboundsPerGame: 1.6, assistsPerGame: 0.8 },
    playoffSeries: null,
    minutesTrend: "down",
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
    form: 5.0, status: "out", injuryNote: "Right high-ankle sprain (Apr 1) — missed the entire first round (all 6 games); will be a UFA after the season ends, with full health expected by training camp",
    recentNotes: "Missed the entire first round of the playoffs after the Apr 1 right high-ankle sprain (Heavy/CBS, Apr 24). UFA per Bleacher Report cap notes (Apr 28); offseason story is whether ATL re-signs the third center or pivots to the lottery picks (May 10) for help up front.",
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
// Season ended Apr 30 in Game 6 elimination by the Knicks. Next on the calendar:
// 2026 NBA Draft Lottery on May 10 (ATL holds the more-favorable of NOP/MIL plus CLE No. 24).
export const NEXT_GAME = {
  opponent: "2026 NBA Draft Lottery",
  shortName: "LOTT",
  home: false,
  date: "2026-05-10T20:00:00-04:00",
  competition: "OFFSEASON",
  venue: "McCormick Place West (Chicago)",
  broadcast: "ESPN",
  seriesContext: "1 week out · ATL holds more-favorable of NOP (6.8% No. 1, ~29% top-4) and MIL plus CLE 1st (No. 24)",
};

// ─── Game Results (2025-26 regular season · last 16 games) ─────────────────
// result: "W" | "L"; score format "ATL-OPP"
export const RESULTS = [
  { date: "2026-04-30", opponent: "New York Knicks",      home: true,  score: "89-140",  competition: "PLAYOFFS", result: "L", topScorers: "R1G6 · ELIMINATION · Johnson 21, McCollum 11, NAW 11, Kuminga 11; Anunoby 29, KAT 12-11-10 (2nd TD), Brunson — Knicks set NBA playoff record 47-pt halftime lead (83-36); Daniels & M. Robinson ejected Q2 after free-throw scrum" },
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
// Series ended Apr 30, 2026 — Hawks eliminated 4-2 by Knicks in R1. Set to null per skill spec.
export const PLAYOFF_SERIES = null;

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
  generatedAt: "2026-05-03T13:00:00Z",
  summary:
    "OFFSEASON — Sunday May 3, one week out from the lottery. Hawks GM Onsi Saleh's exit-interview message has set the offseason tone: 'We're not one player away from this … the best iteration of this team is going to be through development and our players currently getting better' (Peachtree Hoops / SI onsi / Atlanta News First / 92.9 The Game, May 1-2). Saleh — who finished 2ND IN NBA EXECUTIVE OF THE YEAR voting Apr 28 (Brad Stevens won it; Saleh 41 pts, Detroit's Trajan Langdon 40) — also publicly committed to Quin Snyder ('an unbelievable partner') with extension talks now actively on the calendar (RealGM / Yahoo / Yardbarker, Apr 28-May 2). John Hollinger's Athletic offseason preview (summarized via SI onsi / Hoops Rumors / Last Word, May 1-2) confirms Atlanta will operate OVER the cap rather than carve out room — using $55.9M of theoretical space as leverage, with the non-tax MLE (~$15.1M), BAE (~$5.1M), four trade exceptions and Hield's $9.4M expiring as the working tools (Bleacher Report cap notes, Apr 28). The offseason spine: bring back UFA CJ McCollum on a 2yr/$35-40M ballpark deal 'slightly above the MLE' (HoopsHype, May 1), DECLINE Jonathan Kuminga's $24.3M 26-27 option to negotiate a longer-term Kuminga deal (mutual interest, per Jake Fischer), make the Buddy Hield $3M-vs-$9.4M call BEFORE June 25 (full-guarantee trigger date), and decide whether Risacher or Kispert is the wing the front office shops (Hollinger). Saleh's not pursuing Giannis — Jake Fischer reported NO indication of an Atlanta whale chase (Yardbarker, May 1). The May 10 Draft Lottery in Chicago is now the next dated event: Hawks hold the more-favorable of NOP (6.8% at No. 1, ~40% top-4) and MIL (10th-best odds), plus Cleveland's first at No. 24 and a second-rounder. Athletic mock has Cameron Boozer (Duke) at No. 3 to ATL with Ebuka Okorie (Stanford) at No. 22 (Roundtable, May 1-2). Lingering award headline: NAW's Kia MIP win Apr 24 made the Hawks the first franchise ever with back-to-back winners (Daniels 24-25), and Jalen Johnson's 22.8/10.3/8.0 line keeps an All-NBA third-team case alive into voting.",
  keyTopics: [
    {
      title: "Saleh Exit-Interview Message: 'We're Not One Player Away — Build Through Development'",
      detail:
        "Hawks GM Onsi Saleh's address to the room set the May 3 offseason tone (Peachtree Hoops / SI onsi / Atlanta News First / 92.9 The Game, May 1-2): 'We're not one player away from this. The best iteration of this team is going to be through development and our players currently getting better.' He also told players the building is 'really pissed off, frustrated' from the Game 6 ending — 'a good thing' to internalize for the summer. Saleh publicly endorsed Snyder ('He has been an unbelievable partner') and pointed at the draft and existing flexibility as the lever, NOT a whale-trade. Yardbarker and SI onsi (May 1) corroborate Jake Fischer's report that Atlanta has NO indication of pursuing Giannis Antetokounmpo via trade.",
      category: "general",
    },
    {
      title: "Hollinger Offseason Preview: Hawks Will Operate OVER the Cap, Shop Risacher or Kispert",
      detail:
        "John Hollinger's Hawks offseason preview (The Athletic, summarized via SI onsi / Hoops Rumors / Last Word On Basketball, May 1-2) is the road map for the next 8 weeks. Three top-line conclusions: (1) Atlanta will operate OVER the cap rather than carve room with the $55.9M of theoretical space — using the non-tax MLE (~$15.1M), BAE (~$5.1M), four trade exceptions and Hield's expiring as the working tools. (2) The front office is likely to shop EITHER Zaccharie Risacher OR Corey Kispert this summer after both played 'very modest' R1 roles — Risacher in particular logged just 2:30 of total floor time across the entire Knicks series. (3) The McCollum, Kuminga and Snyder retention plan stays the spine. GM Onsi Saleh told players the team has 'plenty of room for growth.'",
      category: "trades",
    },
    {
      title: "Saleh Finishes 2nd in NBA Executive of the Year Voting (Apr 28)",
      detail:
        "Brad Stevens won the 2025-26 NBA Executive of the Year award for the second straight year (announced Tuesday Apr 28 by NBA.com / Boston Globe / Atlanta News First) — Stevens with 69 points, Hawks GM Onsi Saleh 2nd with 41 points, Detroit's Trajan Langdon 3rd with 40. Recognition follows Saleh's transformative first season as lead exec: the mid-season Trae Young → McCollum/Kispert trade, the Kuminga acquisition before the deadline, and a 6-win improvement that ended the four-year play-in stretch. Soaring Down South framed it as the highest realistic finish given Stevens's Boston track record.",
      category: "general",
    },
    {
      title: "May 10 NBA Draft Lottery: 1 Week Out — Hawks Hold More-Favorable of NOP (6.8%) / MIL Plus CLE No. 24",
      detail:
        "The 2026 NBA Draft Lottery is now exactly one week away in Chicago (Tuesday May 10 at McCormick Place West, ESPN broadcast — NBA.com / Tankathon / Yahoo Sports / CBS Sports). Atlanta holds the MORE-FAVORABLE of New Orleans and Milwaukee's first-round picks via prior trades. Pelicans currently sit with the 7th-best odds (6.8% chance at No. 1, ~29.3% chance at top-4 per SI onsi May 1); Bucks at 10th-best. ATL also holds Cleveland's first at No. 24 plus the No. 57 second-rounder. Combine runs May 8-10; full draft June 23-24. Top of class: Darryn Peterson (Kansas), Cameron Boozer (Duke), AJ Dybantsa.",
      category: "general",
    },
    {
      title: "Athletic Mock: Cameron Boozer to Hawks at No. 3, Ebuka Okorie at No. 22",
      detail:
        "The Athletic's post-elimination mock (relayed via Roundtable / SI onsi / Yahoo Sports, May 1-2) projects Atlanta landing Duke forward CAMERON BOOZER at No. 3 via the Pelicans pick, plus Stanford guard EBUKA OKORIE at No. 22 (CLE pick was No. 23 in the pre-lottery order; mocks vary). Boozer (6-9, national POY for Duke at 22.5/10.0/4.0) is widely viewed as the safest pick in the class; a Boozer-Johnson-Okongwu frontcourt would give Atlanta one of the East's most skilled groups from day one. Bleacher Report's Wasserman alternate has ATL taking Houston's Kingston Flemings if the Pelicans pick stays at No. 7.",
      category: "general",
    },
    {
      title: "McCollum Free Agency: 'Slightly Above MLE' (~2yr/$35-40M) Range — Hawks Plan Return",
      detail:
        "Headline Hawks UFA. SI onsi (Apr 30) and Hoops Rumors (Apr 28) confirm Atlanta's plan is to bring CJ McCollum back on a multi-year deal; Jake Fischer reports mutual interest. HoopsHype (May 1) adds that McCollum is expected to draw offers 'slightly above the mid-level exception' — most execs peg two years and $35-40M as the fair range. The Hawks Jan 8 trade addition started 25 of 41 regular-season games on 18.7/3.1/4.1, then 19.2 PPG / 49% FG in the R1 series. The Athletic's Hollinger flagged McCollum's age (34) as the structural risk. Atlanta has roughly $55.9M of projected cap space below the first apron (HoopsHype/SI onsi cap tracker, May 1).",
      category: "trades",
    },
    {
      title: "Snyder Extension Talks Now Active — Saleh: 'Unbelievable Partner'",
      detail:
        "Yardbarker (May 1), RealGM and Yahoo Sports (Apr 28-30) all confirm extension talks between Quin Snyder and the Hawks are now actively on the calendar. Snyder enters the final year of his existing deal in 26-27, with NBA insider Jake Fischer reporting 'strong' front-office support to retain him long-term. Saleh, in his exit address to media (May 1-2), publicly endorsed Snyder: 'He has been an unbelievable partner in all of this … just having a partner who you're so aligned with, it makes it easy.' The 20-6 finish that avoided the play-in for the first time in five years remains the cited tipping point.",
      category: "general",
    },
    {
      title: "Kuminga Cap Call: Mutual Interest in DECLINING $24.3M Option for Longer-Term Deal (Decision by June 29)",
      detail:
        "Atlanta's biggest summer cap question is Jonathan Kuminga. Bleacher Report and Hoops Rumors (Apr 28-30) cite Jake Fischer reporting mutual interest in declining the $24.3M 26-27 team option to negotiate a longer-term agreement. Decision deadline is June 29 (Heavy / ClutchPoints, Apr 30). Acquired in the deadline-day Porzingis trade, Kuminga produced mixed results in 16 Hawks games — 14.9/5.1/2.2 regular season, 13.4 PPG in R1, sub-30% from three over the last four playoff games. The Warriors-with-Kuminga template Atlanta now navigates (BlueManHoop, May 1). Without a deal he could walk for nothing.",
      category: "trades",
    },
    {
      title: "Hield $3M-vs-$9.4M Decision: June 25 Trigger Date for Full Guarantee",
      detail:
        "Buddy Hield's $9.4M 26-27 contract becomes FULLY guaranteed on June 25, 2026 — only $3M is currently protected (SI onsi cap tracker / BlueManHoop, Apr 28-May 1). Three paths Atlanta can take: (1) let the full $9.4M trigger and use it as a movable expiring; (2) waive him before June 25 and save $6.4M; (3) include him in a pre-trigger trade. Hield played 71 games (12 starts) at 11.8/2.8/2.1 on 39.8% from three but his role was largely abandoned in playoff matchups (R1: 6 mpg in 2 games). Hoops Rumors lists him as a likely offseason trade discussion piece.",
      category: "trades",
    },
    {
      title: "Risacher 'Up & Down' Year Becomes Trade Watch — Hollinger Sees It Likeliest Move",
      detail:
        "John Hollinger of The Athletic explicitly named Zaccharie Risacher (and Corey Kispert) as the likeliest summer trade chip after R1 (SI onsi summary / Larry Brown Sports / Yardbarker / Lindys, May 1-2). Sophomore line ended at 9.6/3.8/1.1 on 44.6% FG / 37.2% 3P over 66 games — regression from his 12.6 PPG rookie line as usage dropped from 21.6% to 17.7% (CraftedNBA/Roundtable, Apr 30). R1 floor time was just 2:30 across the entire series. With Johnson, NAW and Kuminga ahead of him on the wing depth chart and a likely Boozer-or-equivalent draft addition, the path to minutes is gone (Soaring Down South / FOX Sports, May 1-2).",
      category: "trades",
    },
    {
      title: "Hawks Free-Agency Watchlist: McCollum, Vincent, Bradley, Landale UFA; Wallace RFA",
      detail:
        "Per Bleacher Report cap notes (Apr 28), SI onsi offseason primer (May 1) and Hoops Rumors offseason brief (Apr 30): Atlanta's UFAs are CJ McCollum, Gabe Vincent, Tony Bradley and Jock Landale. Restricted FAs include Keaton Wallace (likely qualifying offer), RayJ Dennis and Christian Koloko. McCollum is the priority retention; Wallace is a likely tender; Vincent/Bradley/Landale are role-player fillers Saleh can shop on minimums or replace via the MLE. Atlanta plans to build around its young core (Johnson, Daniels, NAW, Okongwu, Risacher) with extensions inevitable, per Jake Fischer.",
      category: "trades",
    },
    {
      title: "NBA Fines Daniels $25K, Robinson $50K for Game 6 Altercation — No Suspensions",
      detail:
        "League discipline (Friday May 1, NBA.com release / ESPN / AP via Winchester Star / Yahoo Sports / Hoops Rumors): Mitchell Robinson fined $50,000 and Dyson Daniels fined $25,000 for their roles in the Game 6 free-throw scrum. The NBA noted Robinson's larger fine 'takes into account his inappropriate post on social media in reference to the incident postgame.' No suspensions handed down — irrelevant for ATL given the elimination, but Robinson's available for Round 2 vs Boston-or-76ers. EssentiallySports flagged that Robinson received the higher fine despite Daniels' clear elbow on tape — the unusual point of dispute in the discipline call.",
      category: "general",
    },
    {
      title: "Knicks 140, Hawks 89 — Historic 51-Point R1 Closeout Ended Atlanta's Season",
      detail:
        "The series-ending Knicks 140-89 Game 6 (Thursday Apr 30 at State Farm Arena — NBA.com/FOX Sports/NY Post/AP via fultonneighbor) remains the elimination backdrop now five days old. Knicks led 40-15 after Q1 (largest 1Q lead in shot-clock-era playoff history), 83-36 at the half (LARGEST HALFTIME LEAD IN NBA PLAYOFF HISTORY — previous record 41), and led by as many as 61. The 51-point margin tied for 6th-largest in postseason history. New York is now in ECF semifinals waiting on the Celtics-76ers G7 winner.",
      category: "games",
    },
    {
      title: "Johnson's All-Time Statistical Bar: 5th Player Ever at 22+/10+/7+",
      detail:
        "Jalen Johnson became just the FIFTH PLAYER IN NBA HISTORY to average 22+ points, 10+ rebounds and 7+ assists in a season — joining Oscar Robertson, Wilt Chamberlain, Nikola Jokic and Russell Westbrook (Soaring Down South / Wikipedia / Hawks.com Apr). First All-Star nod (Feb 2026 reserve), played in the new World-format ASG and helped Team Stars take the 2026 NBA All-Star Championship. R1 line settled at 19.5/8.3/5.5; offseason narrative is whether Johnson lands All-NBA third-team votes and whether ATL pivots to an extension talk this summer.",
      category: "general",
    },
    {
      title: "NAW Wins 2025-26 Kia Most Improved Player — Back-to-Back for Hawks",
      detail:
        "Nickeil Alexander-Walker was named the 2025-26 Kia Most Improved Player on Apr 24 (NBA.com/Washington Post/Bleacher Report), beating finalists Deni Avdija and Jalen Duren with 66 of 100 first-place votes. Career-best 20.8 PPG (up 11.4 from 24-25's 9.4 — third-largest single-season jump in 25 years), 39.9% from three on a franchise-record 251 makes. Hawks are the first team in NBA history with back-to-back MIPs (Daniels won 24-25). NAW is locked in long-term on the four-year deal he signed last summer.",
      category: "general",
    },
    {
      title: "Daniels' Career Series Despite the Sour End — Joins Luka 2022 Bar",
      detail:
        "Through the first four games of Round 1, Daniels totaled 24 pts / 35 reb / 25 ast / 10 stl — the first NBA player since Luka Dončić in the 2022 playoffs to clear that bar in a four-game span (NBA.com Apr 27). Reigning MIP, 24-25 All-Defensive 1st team and 2nd in 24-25 DPOY voting; six-game R1 line settled around 7.8/5.8/4.7 in 27 mpg. Wembanyama swept this year's DPOY race (unanimous, all 100 first-place votes per Hoops Rumors Apr) but Daniels' 26-27 DPOY case (was at +2000 odds in March) is the offseason narrative to track.",
      category: "general",
    },
  ],
  sources: [
    "NBA.com",
    "ESPN",
    "Yahoo Sports",
    "AP / Winchester Star",
    "AP / fultonneighbor.com",
    "NY Post",
    "Washington Post",
    "CBS Sports",
    "AJC",
    "Sports Illustrated (SI/onsi)",
    "HoopsHype",
    "ClutchPoints",
    "Peachtree Hoops",
    "Atlanta News First",
    "92.9 The Game",
    "Soaring Down South",
    "Hoops Rumors",
    "Heavy Sports",
    "Bleacher Report",
    "Yardbarker",
    "Larry Brown Sports",
    "Last Word On Basketball",
    "Lindys Sports",
    "Roundtable",
    "Hawks.com",
    "Tankathon",
    "CraftedNBA",
    "BlueManHoop",
    "RealGM",
    "Spotrac",
  ],
};
