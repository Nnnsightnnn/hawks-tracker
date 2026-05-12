// ─── Atlanta Hawks Player Data (2025-26 Season · Updated Tuesday May 12, 2026 — OFFSEASON · COMBINE DAY 2 in Chicago · Hawks locked into No. 8 (NOP), No. 23 (CLE/SAS), No. 57 (BOS) · 42 days to Draft Night Jun 23) ─
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
    recentNotes: "COMBINE DAY 2 (Tue May 12): Johnson remains the offseason anchor — SI onsi's 'Most Untouchable Trade Asset' framing (May 10) re-cited overnight as Jaylen Brown rumors resurface per Chris Mannix / 98.5 The Sports Hub / Boston.com (May 10-11): Johnson is the one Hawk OFF the board in any Brown talks. Six-day-old peer recognition still travels — The Athletic's Anonymous NBA Player Poll (May 6) named him the league's MOST UNDERRATED, tied with Derrick White at 4%. Yahoo's May 1 media ballot has him on the All-NBA THIRD TEAM (official league vote pending late May after MVP). Final R1 line settled at 19.5/8.3/5.5 vs his 22.5/10.3/7.9 / 72 GP / 35.2 mpg regular-season baseline (5th player ever to clear 22+/10+/7+, after Oscar, Wilt, Jokic, Westbrook). On a $150M rookie extension through 2029-30 at $30M/yr per Spotrac — locked in.",
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
    recentNotes: "TWELVE DAYS past the Game 6 ejection (Combine Day 2): Daniels enters offseason with a season-defining R1 backdrop — Luka-2022 bar through G1-G4 (24 pts / 35 reb / 25 ast / 10 stl, first NBA player to clear that span since 2022 per NBA.com Apr 27). Final DPOY ladder: Victor Wembanyama unanimous winner — first unanimous DPOY in NBA history — with Chet Holmgren and Ausar Thompson the other 2026 finalists (NBA.com / Bleacher Report / On3 'first unanimous winner', late Apr). Daniels NOT a 2026 finalist after he was the 2025 runner-up; the 26-27 case re-builds with the Wemby ceiling still ahead. Reigning 24-25 MIP and All-Defensive 1st-team. Regular-season line of 11.9/6.8/5.9 on 2.0 stl across 80 games (76 starts) is the new baseline. The Pelicans scout who drafted him at No. 8, BRYSON GRAHAM, left Atlanta for the Bulls May 4 as EVP of Basketball Ops. His five-year, $125M rookie-scale extension kicks in next season ($25M jump in 26-27 per Spotrac).",
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
    recentNotes: "Combine Day 2 (Tue May 12): MIP trophy still the through-line — 18 days past the Apr 24 Kia Most Improved Player ceremony where NAW took 66 of 100 first-place votes ahead of finalists Deni Avdija and Jalen Duren (NBA.com / Washington Post / Yahoo Sports / Hoops Rumors). Career-best 20.8/3.4/3.7 on 39.9% from three (251 makes — Hawks single-season record, 4th in the NBA); 11.4-PPG jump from 24-25 is the third-largest single-season scoring increase in 25 years. Back-to-back MIPs for ATL after Daniels' 24-25 win, the FIRST FRANCHISE EVER with consecutive winners. R1 scoring settled at 13.4 PPG; the only ATL perimeter player above 33% from three across the full six. NAW was also drafted by Bryson Graham in New Orleans — Graham left for Chicago eight days ago (May 4). Locked in long-term on the four-year deal he signed last summer.",
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
    recentNotes: "Combine Day 2 (Tue May 12) — Headline UFA. SI onsi 'Atlanta Is Expected to Bring Back McCollum Next Season' / Soaring Down South / Hoops Rumors / HoopsHype / Bleacher Report (Apr 28-May 12) align: Atlanta plans to bring him back on a multi-year deal, with offers expected 'slightly above the mid-level exception' — most execs pegging 2yr/$35-40M as the fair range (HoopsHype May 1, TheRX May confirmed). One-year balloon deals from cap-room teams (CHI, BKN) can't be ruled out per Hoops Rumors. McCollum publicly confirmed a 'productive conversation' with the front office (Heavy, May 4). Hollinger's Athletic preview still flags age (34, turning 35) as the structural risk. UFA market opens June 30, 6 PM ET — 49 days out. Final regular-season line: 18.7 / 3.1 / 4.1 on 45.2/38.1/82.7 across 41 Hawks games post-Jan 8 trade (25 starts), then 19.2 PPG / 49% FG / 31% 3P across the six R1 games. Hollinger expects ATL to run OVER the cap and use the non-tax MLE (~$15.1M) as the working tool.",
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
    recentNotes: "Combine Day 2 (Tue May 12) — Career-best 25-26 season locks in his role as the post-Trae starting C: 15.2/7.6/3.1 on 48.0% FG with 1.1 blk and 1.1 stl across 74 games and 31 mpg (basketball-reference / RotoWire / Spotrac confirmed May 11). Two years left on his 4yr/$62M extension at $16.1M in 26-27. Atlanta has resisted prior trade interest (Pacers reportedly called pre-deadline per Yahoo) and Hollinger's preview treats the C role as locked. Yardbarker / SI onsi / Soaring Down South (May 5-12) re-cite Isaiah Hartenstein as the top FA frontcourt target IF Atlanta can clear room — would pair WITH Okongwu, not replace him. STRUCTURAL CATCH from yesterday's reporting: OKC holds a $28.5M team option on Hartenstein for 26-27 and may decline because of cap pressure from Jalen Williams / Chet Holmgren extensions kicking in (Thunderous Intentions, Yardbarker, May 11). Six-game R1 line was ~11.3/5.7/1.7 played through right-knee inflammation diagnosed after Game 1 — KAT's two triple-doubles were the series-defining mismatch ATL never solved.",
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
    recentNotes: "Combine Day 2 (Tue May 12) — Offseason trade-watch player No. 1, and the No. 8 lottery slot sharpens the question. With Dybantsa (officially measured 6'8\"/217 yesterday) / Peterson / Boozer / Caleb Wilson projected gone by No. 5, Atlanta's No. 8 board (Tre Johnson, Nate Ament, Koa Peat, Lendeborg per CBS Sports / AJC 'What players best fit their needs', May 10-12) is wing-heavy — directly stacking minutes Risacher needs. Marc Stein of The Stein Line reports the Hawks are 'open to trading Risacher if the right offer comes along' (Basketnews / Roundtable May 11), though Hawks sources pushed back hard on prior Anthony Davis speculation. Hollinger's Athletic preview still tags Risacher (and Kispert) as the likeliest summer trade chip. Structural read: $13.7M next season then a $17.8M team option for 27-28. Sophomore line: 9.6/3.8/1.1 on 44.6% FG / 37.2% 3P across 66 games — regression from his 12.6 PPG rookie year as usage dropped from 21.6% to 17.7%. R1 floor time was just 2:30 across six games — one Game 1 cameo then five straight DNP-CDs.",
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
    recentNotes: "Combine Day 2 (Tue May 12) — Biggest cap decision of the offseason. DEADLINE JUNE 29 (48 days out) on the $24.3M 26-27 team option (Heavy / ClutchPoints / ESPN's Bobby Marks, Apr 30-May 11). Most recent reporting (Yahoo Sports 'Hawks face key decision on Jonathan Kuminga's future', El-Balad, ClutchPoints 'Insider believes Kuminga will return', May 11) is the mixed-signal cluster: Jake Fischer holds the line on mutual interest in DECLINING the option for a longer-term deal, but Brett Siegel reports Atlanta could exercise the option to preserve a tradable expiring for the in-season market. Hollinger endorses the decline-and-extend path. Without a deal he could walk for nothing. Six-game R1 line landed around 13.4 PPG with a three-point shot that never recovered (sub-30% over the last four). Regular-season Hawks line of 14.9/5.1/2.2 in 16 games left both a clear ceiling (Game 3's 21-off-bench Q1 hero arc) and a clear coaching project for the summer.",
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
    recentNotes: "Combine Day 2 (Tue May 12) — Calendar marker: $9.4M 26-27 contract has just $3M guaranteed UNTIL JUNE 25 — 44 days out — when it triggers full guarantee (SI onsi cap tracker / BlueManHoop, Apr 28-May 1). Three Hawks paths: trigger and use as movable expiring, waive before the trigger and save $6.4M, or include in a pre-trigger trade. Hoops Rumors lists Hield as a likely offseason discussion piece, especially as salary filler in any Jaylen Brown framework that resurfaced over the weekend. Regular-season line of 11.8/2.8/2.1 on 39.8% from three across 71 games (12 starts), but R1 role was largely abandoned (6 mpg in 2 games). Decision sequence: lottery done (May 10) → Hield's June 25 trigger → Kuminga's June 29 option → McCollum FA opens June 30 → Draft Night June 23.",
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
    recentNotes: "Combine Day 2 (Tue May 12) — Series ended with the rotation slot under question after a tough R1 showing. Hollinger explicitly names Kispert (with Risacher) as the likeliest summer trade chip; cap notes show $14.6M next season then a $17.4M cap hit in 27-28. Salary-matching utility in any Jaylen Brown framework is real — the No. 8 pick plus Kispert plus Hield's $9.4M would clear the $57M Brown number per Hoops Rumors / Boston.com (May 10-11). Regular season line of 9.6/2.4/1.3 on 40.2% from three in 40 games (8 starts) was the post-trade Hawks portion.",
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
    recentNotes: "Combine Day 2 (Tue May 12) — UFA whose renewal price came down after Round 1. Six-game R1 line: ~2.8 PPG on a series-long shooting slump. Regular season was a steady veteran backup role (7.4/1.8/2.9) over 58 games but the playoff sample raises questions on terms. Hoops Rumors offseason brief tags him as a role-player filler Saleh can shop on minimums or replace via the MLE; UFA market opens June 30, 6 PM ET — 49 days out.",
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
    gamesPlayed: 44, gamesStarted: 0, minutesPerGame: 11.4,
    pointsPerGame: 5.2, reboundsPerGame: 2.2, assistsPerGame: 0.6,
    stealsPerGame: 0.3, blocksPerGame: 0.3, turnoversPerGame: 0.5,
    fieldGoalPct: 53.8, threePointPct: 38.7, freeThrowPct: 55.2,
    trueShootingPct: 58.3, plusMinus: -0.4,
    form: 5.7, status: "active", injuryNote: null,
    recentNotes: "Combine Day 2 (Tue May 12) — Rookie offseason story: confirmed regular-season line via SI onsi / Peachtree Hoops / Soaring Down South May 11 was 44 GP / 5.2 PPG / 2.2 RPG / 0.6 APG on 53.8% FG and 38.7% from three in 11.4 mpg (leads all rookies in 3P% at min 10 attempts). Made his NBA debut Oct 24, 2025 after Atlanta traded back to draft him at No. 23 out of Georgia. Multiple G League assignments and rotation gaps through the year — the development arc that Saleh referenced ('best version of ourselves is yet to come') runs directly through this summer's Summer League and a bigger third-string spell-PF role.",
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
    recentNotes: "Combine Day 2 (Tue May 12) — Missed the entire first round of the playoffs after the Apr 1 right high-ankle sprain (Heavy/CBS, Apr 24). UFA per Bleacher Report cap notes. Offseason story is whether ATL re-signs the third center or pivots to the lottery picks (May 10) or to Hartenstein-tier FA money for help up front; the Hartenstein chase (per Soaring Down South 'top free-agency frontcourt target', May 11) directly competes with re-signing Landale.",
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
  opponent: "2026 NBA Draft (Brooklyn)",
  shortName: "DRAFT",
  home: false,
  date: "2026-06-23T20:00:00-04:00",
  competition: "OFFSEASON",
  venue: "Barclays Center (Brooklyn)",
  broadcast: "ABC / ESPN",
  seriesContext: "LOTTERY RESULT (Sunday May 10, Chicago) — Hawks LANDED AT No. 8, the most-likely outcome (35.6% pre-draw); top-4 jump did NOT hit despite 40.2% combined odds on the more-favorable of NOP/MIL (CBS Sports / Yahoo Sports / SI onsi / NBA.com May 10-11). FINAL LOTTERY ORDER 1-6: WAS, UTA, MEM, CHI, LAC (via IND), BKN. ATL also retains No. 23 (via CLE/SAS) and No. 57 (via BOS). Top-4 prospect board: AJ Dybantsa (BYU, near-lock to WAS), Darryn Peterson (Kansas), Cameron Boozer (Duke), Caleb Wilson (UNC) — all projected gone by No. 5, leaving Atlanta's No. 8 board to wing/big depth (Tre Johnson, Nate Ament, Koa Peat, Yaxel Lendeborg per CBS / ESPN combine watchlist). COMBINE WEEK IN CHICAGO: AWS Draft Combine main scrimmages start TODAY May 11 at Wintrust Arena and run through Saturday May 17 — 73 prospects, every front office on site. The 2026 NBA Draft is set for June 23-24 at Barclays Center, Brooklyn. KEY OFFSEASON DATES: Kuminga $24.3M team-option call by June 29 · Hield $9.4M full-guarantee trigger June 25 · McCollum UFA market opens June 30 6 PM ET.",
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
  generatedAt: "2026-05-12T14:00:00Z",
  summary:
    "OFFSEASON — Tuesday May 12, Combine Day 2 in Chicago. After Monday's measurement reveal at Wintrust Arena, the projected top-of-board prospects officially measured up: AJ DYBANTSA at 6'8\" / 217 lbs (Bleacher Report / Yahoo Sports / Sporting News, May 11), Darryn Peterson cleared cramping concerns with doctors citing high-dose creatine as the prior cause (ESPN's Ramona Shelburne, May 11), and Cameron Boozer / Caleb Wilson rounded out the headline measurements — all four are projected gone by No. 5, leaving Atlanta's No. 8 board to the wing/big tier. Today's slate is strength-and-agility drills and the start of 5-on-5 scrimmages through Saturday May 17 — 73 invitees, every front office on site. The Hawks are also bringing in Flory Bidunga (Kansas), Ugonna Onyenso (Virginia), Peter Suder (Miami OH) and Milos Uzan (Houston) for pre-draft workouts targeting No. 57 (SI onsi, May 11). Older but still active: lottery placed Atlanta at No. 8 Sunday May 10 (most-likely outcome, missed top-4 swing); Wizards won No. 1 and are locked on Dybantsa. Jaylen Brown trade chatter that resurfaced over the weekend remains the parallel storyline — Chris Mannix expects a fresh batch of rumors, Atlanta and Boston had a brief conversation last summer that died on Brown's contract size, and the No. 8 pick is now ATL's largest tradable asset (98.5 The Sports Hub / Boston.com / Hoops Rumors, May 10-11). FRONT-OFFICE SPINE UNCHANGED: operate OVER the cap with non-tax MLE (~$15.1M), BAE (~$5.1M), four trade exceptions, and Hield's $9.4M expiring; retain McCollum (HoopsHype: 'slightly above MLE,' ~2yr/$35-40M); decline Kuminga's $24.3M 26-27 option by June 29 to renegotiate longer-term; call Hield's $3M-vs-$9.4M trigger before June 25; shop Risacher or Kispert. CEO Steve Koonin: 'I think Quin is going to be part of our team for a very, very long time' — Snyder extension talks remain on the calendar. Saleh navigates Combine Week short-handed after Bryson Graham departed for the Bulls May 4.",
  keyTopics: [
    {
      title: "COMBINE DAY 2 (Tue May 12): Top Prospect Measurements Posted — Dybantsa 6'8\"/217, Peterson Clears Cramping Concern",
      detail:
        "TODAY at Wintrust Arena (Day 2 of the 2026 AWS NBA Draft Combine, May 11-17): yesterday's official measurement reveal posted AJ DYBANTSA (BYU, projected No. 1 to Washington) at 6'8\" and 217 lbs — described as 'prototypical NBA wing' size (Bleacher Report 'Top Prospect Combine Measurements Set' / Yahoo Sports / Sporting News / ESPN combine tracker, May 11). DARRYN PETERSON (Kansas, projected No. 2 to Utah) addressed the durability questions that dogged his lone college season, telling ESPN's Ramona Shelburne that doctors traced his in-game cramping to high-dose creatine intake and have him fully cleared. CAMERON BOOZER (Duke, No. 3-4 range) and CALEB WILSON (UNC, No. 4-5 range) also took official measurements Monday. Tuesday's schedule is strength-and-agility drills plus the first 5-on-5 scrimmage sessions through the rest of the week. With Atlanta locked at No. 8 and the top-4 board projected gone, the focus today is the wing/big tier the Hawks would actually pick from: Tre Johnson, Nate Ament, Koa Peat, Yaxel Lendeborg, Mikel Brown Jr., Kingston Flemings, Aday Mara (CBS Sports / SI onsi mock 'No. 8 Pick Presents Plenty of Options' / Roundtable / AJC 'What players best fit their needs', May 10-12).",
      category: "general",
    },
    {
      title: "Pre-Draft Workout Roster Confirmed: Bidunga, Onyenso, Suder, Uzan In For No. 57 Looks",
      detail:
        "Confirmed yesterday (Mon May 11) by Adam Lefkoe / SI onsi 'Report: Atlanta Hawks To Bring in Four Prospects For Pre-Draft Workouts' / Hoops Rumors / HoopsHype draft workout tracker: Atlanta is hosting FLORY BIDUNGA (Kansas, 6-9 F/C, Big 12 DPOY — 13.3/9.0/2.6 blk on 35 games), UGONNA ONYENSO (Virginia, 7-0 C, projected top shot-blocker in the class), PETER SUDER (Miami OH, 6-5 wing), and MILOS UZAN (Houston, 6-4 PG — led the Cougars in minutes with 3.08 A/TO) at the practice facility this week. All four project as second-round picks and the workout group is calibrated for Atlanta's No. 57 selection (last pick of the draft). Saleh's stated approach is 'best player available regardless of fit' at the lottery slot — these workouts feed the back-end of the board.",
      category: "general",
    },
    {
      title: "LOTTERY RESULT (Sun May 10): Hawks Land at No. 8, Most-Likely Outcome — Wizards Win No. 1",
      detail:
        "Two days ago in Chicago: Atlanta drew the No. 8 pick in the 2026 NBA Draft Lottery — exactly the most-likely outcome (35.6% pre-draw) on the more-favorable of NOP/MIL, but a swing-and-miss on the 40.2% top-4 odds (CBS Sports / Yahoo Sports / SI onsi 'Hawks Land No. 8 Pick' / NBA.com / Peachtree Hoops / ESPN 'Questions on top 14 picks', May 10-11). WASHINGTON WIZARDS jumped from the No. 3 slot to win the No. 1 pick (17-65, first time on top since drafting John Wall in 2010). FINAL TOP-6: 1. WAS, 2. UTA, 3. MEM, 4. CHI, 5. LAC (via IND), 6. BKN. Atlanta now holds three picks: No. 8 (via NOP), No. 23 (via CLE/SAS), No. 57 (via BOS). Top-4 prospect board — AJ Dybantsa (BYU), Darryn Peterson (Kansas), Cameron Boozer (Duke), Caleb Wilson (UNC) — projected gone by No. 5. SI onsi 'Atlanta Hawks Mock Draft' (May 10) frames the No. 8 board as wing/big depth: Tre Johnson, Nate Ament, Koa Peat, Yaxel Lendeborg the early names. Saleh represented Atlanta on stage (HoopsHype May 7).",
      category: "general",
    },
    {
      title: "Jaylen Brown Trade Rumors RESURFACE — Hawks Named as Potential Suitor Overnight (May 10-11)",
      detail:
        "Broke overnight Sun May 10 into Mon May 11: Boston Celtics insider Chris Mannix is 'expecting a fresh batch of Jaylen Brown trade rumors this coming off-season' and 98.5 The Sports Hub / Boston.com / Hoops Rumors / Hoopswire / Yardbarker (May 10-11) name the Atlanta Hawks as one of the potential suitors. Boston-Atlanta had a 'very brief' conversation about Brown last summer that went nowhere because the Hawks were 'leery of his contract' — but the math reads differently after a 46-36 season and the No. 8 lottery slot becoming the headline tradable asset. Brown grew up in MARIETTA, GA, about 20 miles north of Atlanta. Heavy / SI onsi (May 10) lay out the framework: salary-matching using Hield ($9.4M expiring), Kispert and one of the firsts. Caveat: Giannis Antetokounmpo remains the league's most-coveted name and Saleh has publicly said Atlanta is 'not one player away.' Other named Brown suitors: Miami, Houston, Golden State.",
      category: "trades",
    },
    {
      title: "Athletic Post-Lottery Mock: Tre Johnson, Lendeborg, Mara Among Hawks' No. 8 Board",
      detail:
        "Within hours of last night's draw (CBS Sports / SI onsi 'No. 8 Pick Presents Plenty of Options' / Roundtable / Bleacher Report 'Atlanta Hawks Top Needs After 2026 NBA Draft Lottery Results' / ESPN 'Questions on top 14 picks', May 10-11): with Dybantsa, Peterson, Boozer and Caleb Wilson projected gone by No. 5, Atlanta's No. 8 board is the wing-and-big tier. CBS Sports Gary Parrish's first post-lottery mock has Tre Johnson at No. 8 to ATL; ESPN's Givony alternate has Yaxel Lendeborg the most ATL-fit name; Bleacher Report's Wasserman puts Houston's Kingston Flemings on the board. Hoops HQ's mock has Caleb Wilson sliding to ATL — 'a consensus landing spot' per KeepingItHeel (May 10) — though most mocks have him gone by No. 5 to Chicago. Saleh's stated 'best player available regardless of fit' frame applies.",
      category: "general",
    },
    {
      title: "Koonin (CEO): 'Quin Is Going To Be Part Of Our Team For A Very, Very Long Time'",
      detail:
        "Days-old but still the headline coaching-story (Yardbarker / SportsTalkATL / SI onsi 'Atlanta Is Expected to Bring Back Quin Snyder, CJ McCollum Next Season' / Hoops Rumors 'Hawks Notes: Future, Elimination, Snyder, Offseason' / RealGM 'Quin Snyder Hawks To Discuss Extension In Offseason', May 8-10): Hawks CEO Steve Koonin publicly committed Snyder to the long term — 'I think Quin is going to be part of our team for a very, very long time.' Snyder is entering the FINAL year of the five-year deal he signed in 2023. Jake Fischer reports 'strong' front-office support to extend, with talks expected after the season ends — the 20-6 finish that bypassed the play-in for the first time in five years is the cited tipping point. Saleh's exit-address endorsement ('unbelievable partner') still holds. With Bryson Graham gone to Chicago May 4, locking Snyder up before training camp matters even more.",
      category: "general",
    },
    {
      title: "Anonymous Player Poll: Jalen Johnson Named NBA's MOST UNDERRATED — Tied with Derrick White",
      detail:
        "Five days old (Wed May 6): The Athletic's annual 2026 Anonymous NBA Player Poll names ATL forward JALEN JOHNSON the league's MOST UNDERRATED player, tied with Boston Celtics guard DERRICK WHITE atop the category at 4% of the vote (HoopsHype / SI onsi 'Hawks Forward Jalen Johnson Earns Top Honor in NBA's Anonymous Player Poll' / Bleacher Report / Yahoo Sports, May 6). Peer recognition lands the same week as Yahoo Sports' May 1 media-poll ballot listing Johnson on the All-NBA THIRD TEAM (official league voting still pending). Final regular-season line: 22.5/10.3/7.9 across 72 games at 35.2 mpg — fifth player in NBA history to clear 22+/10+/7+ in a season (Oscar, Wilt, Jokic, Westbrook). Johnson is on his $150M rookie extension signed Oct 2024 ($30M/yr through 2029-30 per Spotrac), already locked in.",
      category: "general",
    },
    {
      title: "Hartenstein the Named FA Frontcourt Target — But OKC's $28.5M Team Option Remains the Gate",
      detail:
        "Yardbarker / SI onsi / Soaring Down South (May 5-7) frame Isaiah Hartenstein (Oklahoma City Thunder) as the clearest Atlanta free-agency target if cap room can be created — 'the best solution for the Hawks' defensive issues.' Hartenstein shot 71% from the field while sweeping the Suns in OKC's R1, exactly the matchup-size profile Atlanta lacked vs the Knicks. STRUCTURAL CATCH: OKC holds a $28.5M team option for 26-27, and with Jalen Williams' and Chet Holmgren's max extensions ($41.5M each) kicking in next season, the Thunder's cap math gets tight if they pick it up. Even if OKC declines, Atlanta would need a sign-and-trade or reshuffled Kuminga/Hield money — Hollinger's preview still has Atlanta operating OVER the cap. Spacing concern: Hartenstein is a non-shooter, and Daniels already plays that role. Secondary perimeter targets per Soaring Down South: Quentin Grimes (PHI), Collin Sexton (CHI), Norman Powell.",
      category: "trades",
    },
    {
      title: "Bulls Hired Bryson Graham as EVP of Basketball Ops — Saleh's Top Deputy Defected (May 4)",
      detail:
        "One week old: The Chicago Bulls named BRYSON GRAHAM their Executive Vice President of Basketball Operations on Monday May 4 (NBA.com / Bulls.com / ABC7 Chicago / Bleacher Nation / Yardbarker, May 4-5). Graham, 39, was Atlanta's Senior Vice President of Basketball Operations for one season after Onsi Saleh recruited him from a 15-year run in the New Orleans Pelicans front office (intern → GM). He is the talent evaluator widely credited with the Pelicans' Trey Murphy III, Herbert Jones, Dyson Daniels and Nickeil Alexander-Walker drafts. Bulls owner Jerry Reinsdorf and the Karnisovas-replacement search picked him a month after firing Karnisovas; the Bulls also interviewed Cleveland GM Mike Gansey, Spurs assistant GM Dave Telep and Celtics assistant GM Dave Lewin. Atlanta lost its top draft mind a week before Combine Week and the lottery in which the Hawks landed at No. 8. Saleh's bench is now scouting director Cody Toppert and assistant GM Landry Fields, with the President of Basketball Operations chair still vacant.",
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
