// ─── Atlanta Hawks Player Data (2025-26 Season · Updated May 10, 2026 — SEASON OVER · ELIMINATED in R1 · LOTTERY TODAY 3 PM ET on ABC · 9.8% at No. 1, 40.2% top-4 via NOP/MIL swap · Combine opens TODAY at Wintrust Arena, 73 prospects · 8 hours to draw) ─
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
// tonight" (NBA.com 4 takeaways/AP via fultonneighbor, Apr 30/May 1). Knicks advanced to the East semifinals
// (now vs Philadelphia after PHI's historic 3-1 comeback over Boston in R1; DET-CLE the other ECSF series).
// Hawks pivoted to a quick offseason: Snyder extension talks, McCollum free-agency retention plan, and the
// MAY 10 NBA DRAFT LOTTERY — now ONE DAY away — lead the agenda (ATL holds the more-favorable of NOP/MIL
// picks plus the CLE first at No. 23-24, with combined-swap odds of 9.8% at No. 1 and 40.2% top-4
// (Yahoo Sports / Bleacher Report May 8); SI onsi/Hoops Rumors/Yardbarker/Bleacher Report/AJC May 1-9).

// Statuses: "active" | "day-to-day" | "questionable" | "doubtful" | "out" | "suspended"
// injuryNote: short description shown on card when not active
export const PLAYERS = [
  // ── Starters ─────────────────────────────────────────────────────────────
  {
    id: 1, name: "Jalen Johnson", number: 1, position: "SF", nationality: "🇺🇸 USA", age: 23, playoffStarter: true,
    gamesPlayed: 72, gamesStarted: 72, minutesPerGame: 35.2,
    pointsPerGame: 22.5, reboundsPerGame: 10.3, assistsPerGame: 7.9,
    stealsPerGame: 1.2, blocksPerGame: 0.8, turnoversPerGame: 3.1,
    fieldGoalPct: 49.0, threePointPct: 36.2, freeThrowPct: 78.4,
    trueShootingPct: 58.2, plusMinus: 5.6,
    form: 6.9, status: "active", injuryNote: null,
    recentNotes: "LOTTERY EVE (Saturday May 9): Saleh's AJC May 8 framing — 'We're in a good place ... position set up moving forward' — hangs the offseason on Johnson's continued development as the franchise focal point heading into Sunday's 9.8% No. 1 / 40.2% top-4 draw. Three-day-old peer recognition still travels: The Athletic's Anonymous NBA Player Poll (May 6) named him the league's MOST UNDERRATED, tied with Derrick White at 4% (HoopsHype / SI onsi / Bleacher Report / Yahoo Sports). Yahoo's May 1 media-poll ballot still has him on the All-NBA THIRD TEAM (league official results pending late May after MVP reveal). Final R1 line settled at 19.5/8.3/5.5 vs his 22.5/10.3/7.9/72 GP/35.2 mpg regular-season baseline (5th player ever to clear 22+/10+/7+, after Oscar, Wilt, Jokic, Westbrook). Extension talks remain the next narrative beat.",
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
    recentNotes: "Nine days past the Game 6 ejection and eight past the $25K fine (May 1) — Daniels enters lottery weekend with the season-defining R1 backdrop intact: Luka-2022 bar through G1-G4 (24 pts / 35 reb / 25 ast / 10 stl, first NBA player to clear that span since 2022 per NBA.com Apr 27) and a 26-27 DPOY case rebuilding alongside Wembanyama (Wemby took 2025-26 DPOY ahead of Holmgren and Ausar Thompson). Reigning 24-25 MIP and All-Defensive 1st-team; the Pelicans scout who drafted him at No. 8, BRYSON GRAHAM, was hired by the Bulls Monday May 4 as EVP of Basketball Ops (NBA.com / Bulls.com / Bleacher Nation). Six-game R1 line settled around 7.8/5.8/4.7 in 27 mpg with a Game 5 scoring breakthrough (17 on 7-of-11) before the Game 6 ejection. His five-year, $125M rookie-scale extension kicks in next season ($25M jump in 26-27 per Spotrac).",
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
    recentNotes: "Two-week-old MIP trophy is the through-line into Combine Week: 2025-26 Kia Most Improved Player Apr 24 with 66 of 100 first-place votes, beating finalists Deni Avdija and Jalen Duren (NBA.com / Washington Post / Yahoo Sports / Hoops Rumors). Career-best 20.8/3.4/3.7 on 39.9% from three (251 makes is a Hawks single-season record, 4th in the NBA) — back-to-back MIPs for ATL after Daniels' 24-25 win, the FIRST FRANCHISE EVER with consecutive winners. Series scoring settled around 13.4 PPG; the only ATL perimeter player above 33% from three across the full six. NAW also drafted by Bryson Graham in New Orleans — Graham left Atlanta for Chicago Monday May 4 as EVP of Basketball Ops. Locked in long-term on the four-year deal he signed last summer.",
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
    recentNotes: "Headline UFA on lottery eve. SI onsi / Hoops Rumors / HoopsHype / Bleacher Report (Apr 28-May 8) align: Atlanta plans to bring him back on a multi-year deal, with offers expected 'slightly above the mid-level exception' — most execs pegging 2yr/$35-40M as the fair range. McCollum publicly confirmed a 'productive conversation' with the front office (Heavy, May 4); Bleacher Report's salary-cap breakdown (May 7) calls re-signing him 'a no-brainer' given his stretch-run lift to the 6-seed. Hollinger's Athletic preview flags age (34/about-to-turn-35) as the structural risk. Bulls and Nets are the only credible cap-room threats per Yahoo; both could front a one-year balloon deal. Final regular-season line: 18.7 / 3.3 / 3.9 on 45.5/37.5/77.2 across 76 total games (41 with Hawks post-Jan 8 trade, 25 starts), then 19.2 PPG / 49% FG / 31% 3P across the six R1 games. Hollinger expects ATL to run OVER the cap and use the non-tax MLE (~$15.1M) plus extra room as the working tool.",
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
    recentNotes: "Career-best regular season locks in his role as the post-Trae starting C: 15.2/7.6/3.1 on 48.0% FG with 1.1 blk and 1.1 stl across 74 games and 31 mpg (basketball-reference / RotoWire / Spotrac). Two years left on his 4yr/$62M extension at $16.1M in 26-27. Atlanta has resisted prior trade interest (Pacers reportedly called pre-deadline per Yahoo) and Hollinger's preview treats the C role as locked. Yardbarker / SI onsi / Soaring Down South (May 5-7) name Isaiah Hartenstein as the top free-agency frontcourt target if Atlanta clears room — would pair WITH Okongwu, not replace him; Hartenstein shot 71% from the field in OKC's R1 sweep of Phoenix. Six-game R1 line was ~11.3/5.7/1.7 played through right-knee inflammation diagnosed after Game 1 — KAT's two triple-doubles were the series-defining mismatch ATL never solved.",
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
    recentNotes: "Offseason trade-watch player No. 1 — and the volume keeps building. Hollinger's Athletic preview (relayed via SI onsi / Larry Brown Sports / Lindys / Hoops Wire / FanSided, May 1-7) tagged Risacher (and Kispert) as the likeliest summer trade chip; Hoops Wire flagged Atlanta 'could look to trade' him. The structural read: Risacher is owed $13.7M next season then a $17.8M team option for 27-28 (per Bleacher Report cap notes) — the Hawks have to decide whether the 21-year-old's path to minutes ever returns. Sophomore line: 9.6/3.8/1.1 on 44.6% FG / 37.2% 3P across 66 games (Roundtable/CraftedNBA Apr 30) — regression from his 12.6 PPG rookie year as usage dropped from 21.6% to 17.7%. Round 1 floor time was just 2:30 across six games — one Game 1 cameo then five straight DNP-CDs. With Johnson, NAW, Kuminga ahead on the wing depth chart and a likely Boozer-class draft pick incoming, the path is hard to map.",
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
    recentNotes: "Biggest cap decision of the offseason — DEADLINE JUNE 29 (52 days out) on the $24.3M 26-27 team option (Heavy / ClutchPoints / ESPN's Bobby Marks, Apr 30-May 7). Bleacher Report / Hoops Rumors / Yardbarker (Apr 28-May 7) flag mutual interest in DECLINING the option to negotiate a longer-term deal per Jake Fischer; Hollinger's Athletic preview endorses that path; Soaring Down South tags it the 'obvious' move post-elimination. Without a deal he could walk for nothing. The Warriors-with-Kuminga template Atlanta now navigates (BlueManHoop, May 1). Six-game R1 line landed around 13.4 PPG with a three-point shot that never recovered (sub-30% over the last four). Regular-season Hawks line of 14.9/5.1/2.2 in 16 games left both a clear ceiling (Game 3's 21-off-bench Q1 hero arc) and a clear coaching project for the summer.",
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
    recentNotes: "Calendar marker: $9.4M 26-27 contract has just $3M guaranteed UNTIL JUNE 25 — 48 days out — when it triggers full guarantee (SI onsi cap tracker / BlueManHoop, Apr 28-May 1). Three Hawks paths: trigger and use as movable expiring, waive before the trigger and save $6.4M, or include in a pre-trigger trade. Hoops Rumors lists Hield as a likely offseason discussion piece. Regular-season line of 11.8/2.8/2.1 on 39.8% from three across 71 games (12 starts), but R1 role was largely abandoned (6 mpg in 2 games). Decision is the second of three back-to-back May–June calendar pivots — Sunday's lottery (May 10), Hield's June 25 trigger, then Kuminga's June 29 option.",
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
  date: "2026-05-10T15:00:00-04:00",
  competition: "OFFSEASON",
  venue: "McCormick Place West (Chicago)",
  broadcast: "ABC",
  seriesContext: "TODAY · Sunday May 10, 3 PM ET on ABC · ATL holds more-favorable of NOP/MIL via the Pelicans-Bucks swap — 9.8% at No. 1 / 40.2% top-4 combined (Yahoo Sports / CBS Sports May 9-10); NOP standalone 6.8% No. 1, MIL 3.0% top-4 · most-likely outcome remains No. 8 (35.6%); 7-9 range hits 69.2% combined · Combine ALSO OPENS TODAY at Wintrust Arena, 73 prospects through May 17 (NBA.com / Yahoo Sports) · Top-4 board: AJ Dybantsa (BYU), Darryn Peterson (Kansas), Cameron Boozer (Duke), Caleb Wilson (UNC) · ATL pre-draft workout group already in: Bidunga / Onyenso / Suder / Uzan · Saleh (AJC): 'We're in a good place'",
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
  generatedAt: "2026-05-10T08:30:00Z",
  summary:
    "OFFSEASON — Sunday May 10, LOTTERY DAY: tonight at 3 PM ET on ABC from McCormick Place West, Chicago. THE LEAD: in roughly 8 hours, the 2026 NBA Draft Lottery balls drop and Atlanta is the field's biggest swing case — the more-favorable of NOP (7th-best, 6.8% at No. 1 standalone) and MIL (10th-best, 3.0% top-4) gives the Hawks 9.8% at No. 1 and 40.2% at TOP-4 (Yahoo Sports / CBS Sports / NBC Sports lottery primers, May 9-10). Most-likely outcome remains No. 8 (35.6%); the 7-9 range hits 69.2% combined. The 14 envelopes are unsealed in private with Ernst & Young coordinating; results revealed in reverse order from No. 14 to No. 1 (CBS Sports). Top-4 board: AJ Dybantsa (BYU), Darryn Peterson (Kansas), Cameron Boozer (Duke), Caleb Wilson (UNC). The AWS NBA Draft Combine ALSO OPENS TODAY at Wintrust Arena, running May 10-17 — 73 prospects in to measure, scrimmage, and meet front offices (NBA.com / Yahoo Sports / ESPN combine preview). Atlanta's pre-draft workout group of Flory Bidunga (Kansas), Ugonna Onyenso (Virginia), Peter Suder (Miami OH), Milos Uzan (Houston) is already in town — all projected second-rounders for ATL's No. 57 slot. GM ONSI SALEH's AJC framing from May 8 — 'We're in a good place. Position set up moving forward, and our coaching staff has just been remarkable this year' — sets the patience-and-development tone over a star chase; Atlanta is one of only two playoff teams in the lottery (OKC the other). Saleh enters today short-handed: top scout BRYSON GRAHAM left for the Bulls' EVP chair Monday May 4 (NBA.com / Bulls.com), so Cody Toppert and Landry Fields lead the war-room. Four-day-old peer recognition still travels: JALEN JOHNSON tied with Derrick White as the league's MOST UNDERRATED in The Athletic's Anonymous Player Poll (May 6), and Yahoo's media ballot has him on the All-NBA Third Team pending the league's official vote. Front-office spine: operate OVER the cap with non-tax MLE (~$15.1M), BAE (~$5.1M), four trade exceptions, and Hield's $9.4M expiring; retain McCollum on a 'slightly above the MLE' multi-year deal (~2yr/$35-40M per HoopsHype); decline Kuminga's $24.3M 26-27 option by June 29 to renegotiate longer-term; call Hield's $3M-vs-$9.4M trigger before June 25; shop Risacher or Kispert (R1 floor time was 2:30 across six games for Risacher). Hartenstein is the named free-agency frontcourt target if room can be created — though OKC's $29M team option is the structural gate. Athletic mock has Boozer to ATL at No. 3. Snyder extension talks remain on the calendar (Saleh: 'unbelievable partner').",
  keyTopics: [
    {
      title: "LOTTERY DAY — TONIGHT 3 PM ET on ABC: Hawks Carry 9.8% / 40.2% Top-4 Swing into Chicago",
      detail:
        "TODAY (Sunday May 10): The 2026 NBA Draft Lottery is THIS AFTERNOON at McCormick Place West, Chicago — 3 PM ET on ABC and the ESPN App (Yahoo Sports / CBS Sports / NBC Sports / NBA.com lottery primers, May 9-10). The 14 envelopes are unsealed in private with Ernst & Young coordinating; results revealed in REVERSE ORDER from No. 14 down to No. 1. Atlanta enters with the field's most powerful pick-swap: the more-favorable of NOP (7th-best, 6.8% at No. 1 standalone) and MIL (10th-best, 3.0% top-4). Combined swap odds peg Atlanta at 9.8% at No. 1 and 40.2% at TOP-4 — second-best non-bottom-3 odds in the field, with only the Wizards holding more upside. Most-likely outcome: No. 8 (35.6%); No. 7-9 range hits 69.2% combined. ATL also owns Cleveland's first (projected No. 23-24) and the No. 57 second-rounder. Top-4 board: AJ Dybantsa (BYU), Darryn Peterson (Kansas), Cameron Boozer (Duke), Caleb Wilson (UNC).",
      category: "general",
    },
    {
      title: "AWS NBA Draft Combine OPENS TODAY at Wintrust Arena — 73 Prospects Through May 17",
      detail:
        "TODAY (Sunday May 10): The AWS NBA Draft Combine begins TODAY and runs through Saturday May 17 at Wintrust Arena and the Marriott Marquis in Chicago — 73 invitees in for measurements, scrimmages, drills, and front-office interviews (NBA.com 'NBA announces 73 players invited to participate at AWS NBA Draft Combine 2026' / Yahoo Sports / ESPN combine preview, May 9). The G League Combine wrapped May 8-10 with select standouts earning bumps to the main combine later in the week. The lottery slot at 3 PM ET will determine Atlanta's targeted prospect pool for the rest of the week — top names to watch include Dybantsa, Peterson, Boozer, Caleb Wilson, Nate Ament, Koa Peat, and Yaxel Lendeborg per CBS Sports' combine watchlist. Atlanta's confirmed pre-draft workout group of Flory Bidunga (Kansas), Ugonna Onyenso (Virginia), Peter Suder (Miami OH), Milos Uzan (Houston) is already in town for No. 57 looks (SI onsi May 7).",
      category: "general",
    },
    {
      title: "Saleh's Lottery-Eve Framing (AJC May 8): 'We're In A Good Place' — Patience Over Star-Chase",
      detail:
        "Two days old (Friday May 8): The AJC's lottery-preview interview with Hawks GM Onsi Saleh — 'We're in a good place. Position set up moving forward, and our coaching staff has just been remarkable this year' (AJC 'We're in a good place: Hawks focused on development ahead of draft lottery', May 8). Atlanta is one of only TWO playoff teams in the lottery (Oklahoma City the other) and the 6th-best odds team via the more-favorable of NOP/MIL. Saleh reiterated the 46-36 / 6-seed result as a foundation, not a ceiling, repeated the 'we're not one player away' frame from his exit interview, and pointed at Atlanta's THREE picks (lottery via NOP/MIL, No. 23 via CLE, No. 57) as the offseason value lever. Hawks bypassed the play-in for the first time in four years.",
      category: "general",
    },
    {
      title: "Locked on Hawks Episode 2232 (May 9): Brad Rowland's Lottery Preview Set the Sunday Soundtrack",
      detail:
        "One day old (Saturday May 9): Brad Rowland's Locked on Hawks Episode 2232 dropped yesterday as a full Sunday-lottery preview — walking listeners through every Hawks scenario from a No. 1 AJ Dybantsa landing through the most-likely 8th-overall outcome (35.6%) into the 7-9 range that hits 69.2% combined. Episode also covered the Pelicans-Bucks swap mechanics in detail (the more-favorable rule), the Cleveland first at No. 23-24 from the prior salary-dump trade, and the front-office implications of Bryson Graham's defection to Chicago five days ago. The pod sets the soundtrack for today's draw alongside Yahoo Sports / Bleacher Report / NBC Sports lottery primers (May 8-9).",
      category: "general",
    },
    {
      title: "DPOY Result Confirmed: Wembanyama Wins (Holmgren, Thompson Trail) — Daniels Pivots to 26-27 Case",
      detail:
        "The 2025-26 NBA Awards finalists for Defensive Player of the Year — Victor Wembanyama (San Antonio), Chet Holmgren (Oklahoma City), and Ausar Thompson (Detroit) — produced a clear winner: Wembanyama secured his first DPOY (Bleacher Report / NBA.com / NBA Awards Tracker, late April-May). Neither Holmgren nor Thompson received a single first-place vote. Daniels did not crack the 2025-26 finalist trio after his transcendent 24-25 runner-up campaign behind Mobley — a function of the regular-season tilt at his position-level rather than any drop-off in defensive output. Daniels still owns the Hawks' All-Defensive 1st-team slot from last year and an R1 first-round 5.8 RPG / 4.7 APG / 1.7 STL line that frames his pivot to the 26-27 DPOY case alongside Wembanyama. ATL's NAW won 25-26 MIP — the second consecutive Hawk to win an individual award.",
      category: "general",
    },
    {
      title: "Anonymous Player Poll: Jalen Johnson Named NBA's MOST UNDERRATED — Tied with Derrick White",
      detail:
        "Two days old (Wed May 6): The Athletic's annual 2026 Anonymous NBA Player Poll names ATL forward JALEN JOHNSON the league's MOST UNDERRATED player, tied with Boston Celtics guard DERRICK WHITE atop the category at 4% of the vote (HoopsHype / SI onsi 'Hawks Forward Jalen Johnson Earns Top Honor in NBA's Anonymous Player Poll' / Bleacher Report / Yahoo Sports, May 6). Peer recognition lands the same week as Yahoo Sports' May 1 media-poll ballot listing Johnson on the All-NBA THIRD TEAM (official league voting still pending). Final regular-season line: 22.5/10.3/7.9 across 72 games at 35.2 mpg — fifth player in NBA history to clear 22+/10+/7+ in a season (Oscar, Wilt, Jokic, Westbrook). Sets the stage for the extension talk this summer (Johnson is on his rookie extension already inked last fall).",
      category: "general",
    },
    {
      title: "Hartenstein the Named FA Frontcourt Target — But OKC's $28.5M Team Option is the Gate",
      detail:
        "Yardbarker / SI onsi / Soaring Down South (May 5-7) frame Isaiah Hartenstein (Oklahoma City Thunder) as the clearest Atlanta free-agency target if cap room can be created — 'the best solution for the Hawks' defensive issues.' Hartenstein shot 71% from the field while sweeping the Suns in OKC's R1, exactly the matchup-size profile Atlanta lacked vs the Knicks. STRUCTURAL CATCH: OKC holds a $28.5M team option for 26-27, and with Jalen Williams' and Chet Holmgren's max extensions ($41.5M each) kicking in next season, the Thunder's cap math gets tight if they pick it up. Even if OKC declines, Atlanta would need a sign-and-trade or reshuffled Kuminga/Hield money — Hollinger's preview still has Atlanta operating OVER the cap. Spacing concern: Hartenstein is a non-shooter, and Daniels already plays that role. Secondary perimeter targets per Soaring Down South: Quentin Grimes (PHI), Collin Sexton (CHI), Norman Powell.",
      category: "trades",
    },
    {
      title: "Bulls Hire Bryson Graham as EVP of Basketball Ops — Saleh's Top Deputy Defects (Mon May 4)",
      detail:
        "Four days old: The Chicago Bulls named BRYSON GRAHAM their Executive Vice President of Basketball Operations on Monday May 4 (NBA.com / Bulls.com / ABC7 Chicago / Bleacher Nation / Yardbarker, May 4-5). Graham, 39, was Atlanta's Senior Vice President of Basketball Operations for one season after Onsi Saleh recruited him from a 15-year run in the New Orleans Pelicans front office (intern → GM). He is the talent evaluator widely credited with the Pelicans' Trey Murphy III, Herbert Jones, Dyson Daniels and Nickeil Alexander-Walker drafts. Bulls owner Jerry Reinsdorf and the Karnisovas-replacement search picked him a month after firing Karnisovas; the Bulls also interviewed Cleveland GM Mike Gansey, Spurs assistant GM Dave Telep and Celtics assistant GM Dave Lewin. Atlanta loses its top draft mind two days before the lottery and the Combine. Saleh's bench is now scouting director Cody Toppert and assistant GM Landry Fields, with the President of Basketball Operations chair still vacant.",
      category: "general",
    },
    {
      title: "Yahoo's 2026 Awards Ballot: Jalen Johnson on All-NBA THIRD TEAM in Media Poll (Official Voting Pending)",
      detail:
        "One week old: Yahoo Sports' 2026 NBA Awards Ballot (Kevin O'Connor / Tom Haberstroh, May 1) lists JALEN JOHNSON on the All-NBA Third Team in the writer's media poll — Johnson received 14 points in the wider ClutchPoints media poll. The league's official All-NBA results are still to come (basketball-reference.com awards page, expected late May after the MVP reveal). Johnson's regular-season line of 22.5/10.3/7.9 across 72 games made him just the FIFTH player ever to clear 22+/10+/7+ for a full season (joining Oscar, Wilt, Jokic, Westbrook). First All-Star nod arrived in February. If the league ballot mirrors the media poll, this would be Johnson's first All-NBA selection and the first by a Hawk since Trae Young's 2022 Third Team. MVP finalists already announced: SGA, Jokic, Wembanyama (Wemby took DPOY; Cooper Flagg took ROY; Keldon Johnson took 6MOY).",
      category: "general",
    },
    {
      title: "ECSF Underway: Knicks Push Through ATL's R1 Bracket — Hawks Watch From Outside",
      detail:
        "The Hawks are now eight days into offseason while their first-round vanquishers play on. The East semifinals: Knicks-76ers (Philadelphia advanced after a historic 3-1 comeback over Boston in Round 1, sealed in Game 7) and Pistons-Cavaliers (CBS Sports / NBA.com / NBC New York, May 6-8). The 76ers' upset of the No. 2 Celtics is the storyline of Round 2; the Pacers missed the playoffs entirely for the first time since 2023. ECF Round date setting up while ATL's lottery-and-combine week opens Sunday. Useful Hawks frame: the team that ended Atlanta's season is two wins from the conference finals, and CJ McCollum's free agency lands inside this very window — bringing the lottery / Combine / ECSF into the same week's news cycle.",
      category: "games",
    },
    {
      title: "Saleh Finishes 2nd in 2026 NBA Executive of the Year Voting Behind Brad Stevens",
      detail:
        "Hawks GM ONSI SALEH finished 2nd in the 2026 NBA Executive of the Year voting announced Tuesday April 28 (Atlanta News First / Boston.com / Peachtree Hoops / Hoops Rumors). Boston's Brad Stevens repeated with 69 points; Saleh took 41 points; Detroit's Trajan Langdon was third at 40. Cited moves: trading Trae Young to Washington for CJ McCollum and Corey Kispert in January; the Nickeil Alexander-Walker sign-and-trade using the MLE last summer (NAW went on to win MIP); deadline pickup of Kuminga via Porzingis; and acquiring the more-favorable of NOP/MIL via the prior draft-night swap. Saleh runs his second offseason with the GM title intact while the Hawks continue searching for a President of Basketball Operations.",
      category: "general",
    },
    {
      title: "Saleh Exit-Interview Message: 'We're Not One Player Away — Build Through Development'",
      detail:
        "Hawks GM Onsi Saleh's exit address Friday May 1 still frames the offseason heading into Combine Week (Peachtree Hoops / SI onsi / Atlanta News First / 92.9 The Game / Yardbarker, May 1-2): 'We're not one player away from this. The best iteration of this team is going to be through development and our players currently getting better.' He told players the building is 'really pissed off, frustrated' from the Game 6 ending — 'a good thing' to internalize for the summer. Saleh publicly endorsed Snyder ('He has been an unbelievable partner') and pointed at the draft and existing flexibility as the lever, NOT a whale-trade. Yardbarker and SI onsi (May 1) corroborate Jake Fischer's report that Atlanta has NO indication of pursuing Giannis Antetokounmpo via trade. Saleh also told reporters Atlanta will 'take the best player available regardless of fit' at the lottery slot.",
      category: "general",
    },
    {
      title: "Hollinger Offseason Preview: Hawks Will Operate OVER the Cap, Shop Risacher or Kispert",
      detail:
        "John Hollinger's Hawks offseason preview (The Athletic, summarized via SI onsi / Hoops Rumors / Last Word On Basketball, May 1-2) is the road map for the next 8 weeks. Three top-line conclusions: (1) Atlanta will operate OVER the cap rather than carve room with the $55.9M of theoretical space — using the non-tax MLE (~$15.1M), BAE (~$5.1M), four trade exceptions and Hield's expiring as the working tools. (2) The front office is likely to shop EITHER Zaccharie Risacher OR Corey Kispert this summer after both played 'very modest' R1 roles — Risacher in particular logged just 2:30 of total floor time across the entire Knicks series. (3) The McCollum, Kuminga and Snyder retention plan stays the spine. GM Onsi Saleh told players the team has 'plenty of room for growth.'",
      category: "trades",
    },
    {
      title: "Athletic Mock: Cameron Boozer to Hawks at No. 3, Ebuka Okorie at No. 22",
      detail:
        "The Athletic's post-elimination mock (relayed via Roundtable / SI onsi / Yahoo Sports, May 1-2) projects Atlanta landing Duke forward CAMERON BOOZER at No. 3 via the Pelicans pick, plus Stanford guard EBUKA OKORIE at No. 22 (CLE pick was No. 23 in the pre-lottery order; mocks vary). Boozer (6-9, national POY for Duke at 22.5/10.0/4.0) is widely viewed as the safest pick in the class; a Boozer-Johnson-Okongwu frontcourt would give Atlanta one of the East's most skilled groups from day one. Bleacher Report's Wasserman alternate has ATL taking Houston's Kingston Flemings if the Pelicans pick stays at No. 7. ESPN's Givony post-deadline mock (May 5) has Boozer as a top-3 lock with Dybantsa and Peterson the other two anchors.",
      category: "general",
    },
    {
      title: "McCollum Free Agency: 'Slightly Above MLE' (~2yr/$35-40M) Range — Hawks Plan Return",
      detail:
        "Headline Hawks UFA. SI onsi (Apr 30) and Hoops Rumors (Apr 28) confirm Atlanta's plan is to bring CJ McCollum back on a multi-year deal; Jake Fischer reports mutual interest. HoopsHype (May 1) adds that McCollum is expected to draw offers 'slightly above the mid-level exception' — most execs peg two years and $35-40M as the fair range. McCollum has confirmed having a 'productive conversation' with the front office (Heavy, May 4). Final regular-season line: 18.7 PPG / 3.3 RPG / 3.9 APG on 45.5/37.5/77.2 across 76 games (post-trade Hawks portion was 41 games, 25 starts), then 19.2 PPG / 49% FG in the R1 series. The Athletic's Hollinger flagged McCollum's age (34) as the structural risk. Atlanta has roughly $55.9M of projected cap space below the first apron.",
      category: "trades",
    },
    {
      title: "Snyder Extension Talks Now Active — Saleh: 'Unbelievable Partner'",
      detail:
        "Yardbarker (May 1), RealGM and Yahoo Sports (Apr 28-30) all confirm extension talks between Quin Snyder and the Hawks are now actively on the calendar. Snyder enters the final year of his existing deal in 26-27, with NBA insider Jake Fischer reporting 'strong' front-office support to retain him long-term. Saleh, in his exit address to media (May 1-2), publicly endorsed Snyder: 'He has been an unbelievable partner in all of this … just having a partner who you're so aligned with, it makes it easy.' The 20-6 finish that avoided the play-in for the first time in five years remains the cited tipping point. With Bryson Graham now gone to Chicago, locking Snyder up before training camp becomes even more important to Saleh's bench.",
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
        "John Hollinger of The Athletic explicitly named Zaccharie Risacher (and Corey Kispert) as the likeliest summer trade chip after R1 (SI onsi summary / Larry Brown Sports / Yardbarker / Lindys / Hoops Wire, May 1-3). Sophomore line ended at 9.6/3.8/1.1 on 44.6% FG / 37.2% 3P over 66 games — regression from his 12.6 PPG rookie line as usage dropped from 21.6% to 17.7% (CraftedNBA/Roundtable, Apr 30). R1 floor time was just 2:30 across the entire series. With Johnson, NAW and Kuminga ahead of him on the wing depth chart and a likely Boozer-or-equivalent draft addition, the path to minutes is gone. Dallas reportedly inquired (Soaring Down South / FOX Sports, May 1-2).",
      category: "trades",
    },
    {
      title: "Hawks Free-Agency Watchlist: McCollum, Vincent, Bradley, Landale UFA; Wallace RFA",
      detail:
        "Per Bleacher Report cap notes (Apr 28), SI onsi offseason primer (May 1) and Hoops Rumors offseason brief (Apr 30): Atlanta's UFAs are CJ McCollum, Gabe Vincent, Tony Bradley and Jock Landale. Restricted FAs include Keaton Wallace (likely qualifying offer), RayJ Dennis and Christian Koloko. McCollum is the priority retention; Wallace is a likely tender; Vincent/Bradley/Landale are role-player fillers Saleh can shop on minimums or replace via the MLE. Atlanta plans to build around its young core (Johnson, Daniels, NAW, Okongwu, Risacher) with extensions inevitable, per Jake Fischer.",
      category: "trades",
    },
    {
      title: "Knicks 140, Hawks 89 — Historic 51-Point R1 Closeout Ended Atlanta's Season",
      detail:
        "The series-ending Knicks 140-89 Game 6 (Thursday Apr 30 at State Farm Arena — NBA.com/FOX Sports/NY Post/AP via fultonneighbor) remains the elimination backdrop now one week old. Knicks led 40-15 after Q1 (largest 1Q lead in shot-clock-era playoff history), 83-36 at the half (LARGEST HALFTIME LEAD IN NBA PLAYOFF HISTORY — previous record 41), and led by as many as 61. The 51-point margin tied for 6th-largest in postseason history. New York is in the ECF semifinals; Mitchell Robinson received a $50K fine and Daniels $25K from the May 1 league discipline.",
      category: "games",
    },
    {
      title: "NAW Wins 2025-26 Kia Most Improved Player — Back-to-Back for Hawks",
      detail:
        "Nickeil Alexander-Walker was named the 2025-26 Kia Most Improved Player on Apr 24 (NBA.com/Washington Post/Bleacher Report), beating finalists Deni Avdija and Jalen Duren with 66 of 100 first-place votes. Career-best 20.8 PPG (up 11.4 from 24-25's 9.4 — third-largest single-season jump in 25 years), 39.9% from three on a franchise-record 251 makes. Hawks are the first team in NBA history with back-to-back MIPs (Daniels won 24-25). NAW is locked in long-term on the four-year deal he signed last summer.",
      category: "general",
    },
  ],
  sources: [
    "NBA.com",
    "ESPN",
    "Yahoo Sports",
    "The Athletic",
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
    "ABC7 Chicago",
    "Bulls.com",
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
