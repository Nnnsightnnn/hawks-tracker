// ─── Atlanta Hawks Player Data (2025-26 Season · Updated Sunday May 17, 2026 — OFFSEASON · COMBINE FINAL DAY (Day 7 of 7) in Chicago · ECSF Game 7 Pistons-Cavs TONIGHT 8 PM ET in Detroit (Amazon Prime) · Hawks locked into No. 8 (NOP), No. 23 (CLE/SAS), No. 57 (BOS) · 37 days to Draft Night Jun 23) ─
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
    recentNotes: "COMBINE FINAL DAY (Sun May 17): Johnson remains the offseason anchor — SI onsi's 'Most Untouchable Trade Asset' framing (May 10) holds as the Jaylen Brown chatter persists (Chris Mannix / 98.5 The Sports Hub / Boston.com / Hoops Wire, May 10-14): Johnson is the one Hawk OFF the board in any Brown talks. All-NBA media-poll picture STRENGTHENING — ESPN's Bontemps has him SECOND TEAM (May 5 ballot, an upgrade from Yahoo's May 1 THIRD TEAM placement) and ClutchPoints' May 11 poll shows Johnson picking up two first-team votes; official league vote expected late May after MVP. The Athletic's Anonymous NBA Player Poll (May 6) named him the league's MOST UNDERRATED, tied with Derrick White at 4%. Final R1 line settled at 19.5/8.3/5.5 vs his 22.5/10.3/7.9 / 72 GP / 35.2 mpg regular-season baseline (5th player ever to clear 22+/10+/7+, after Oscar, Wilt, Jokic, Westbrook). On a $150M rookie extension through 2029-30 at $30M/yr per Spotrac — locked in.",
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
    recentNotes: "SEVENTEEN DAYS past the Game 6 ejection (Combine final day, Sun May 17): Daniels enters offseason with a season-defining R1 backdrop. The Knicks — the team that ended Atlanta's season — await tonight's Pistons-Cavaliers Game 7 winner in the ECF starting later this week. Luka-2022 bar through G1-G4 (24 pts / 35 reb / 25 ast / 10 stl, first NBA player to clear that span since 2022 per NBA.com Apr 27). Final DPOY ladder: Victor Wembanyama unanimous winner — first unanimous DPOY in NBA history — with Chet Holmgren and Ausar Thompson the other 2026 finalists (NBA.com / Bleacher Report / On3 'first unanimous winner', late Apr). Daniels NOT a 2026 finalist after he was the 2025 runner-up; the 26-27 case re-builds with the Wemby ceiling still ahead. Reigning 24-25 MIP and All-Defensive 1st-team. Regular-season line of 11.9/6.8/5.9 on 2.0 stl across 80 games (76 starts) is the new baseline. BRYSON GRAHAM, the Pelicans scout who drafted him at No. 8, is now running the Chicago Bulls as EVP of Basketball Ops (May 5 hire — Chicago Sun-Times / ESPN). His five-year, $125M rookie-scale extension kicks in next season ($25M jump in 26-27 per Spotrac).",
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
    recentNotes: "Combine final day (Sun May 17): MIP trophy still the through-line — 22 days past the Apr 24 Kia Most Improved Player ceremony where NAW took 66 of 100 first-place votes ahead of finalists Deni Avdija and Jalen Duren (NBA.com / Washington Post / Yahoo Sports / Hoops Rumors). Career-best 20.8/3.4/3.7 on 39.9% from three (251 makes — Hawks single-season record, 4th in the NBA); 11.4-PPG jump from 24-25 is the third-largest single-season scoring increase in 25 years. Back-to-back MIPs for ATL after Daniels' 24-25 win, the FIRST FRANCHISE EVER with consecutive winners. R1 scoring settled at 13.4 PPG; the only ATL perimeter player above 33% from three across the full six. NAW was also drafted by Bryson Graham in New Orleans — Graham now runs the Bulls' front office (NBA-high $58M cap room per Chicago Sun-Times). Locked in long-term on the four-year deal he signed last summer.",
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
    recentNotes: "Combine final day (Sun May 17) — Headline UFA. SI onsi 'Atlanta Is Expected to Bring Back McCollum Next Season' / Soaring Down South / Hoops Rumors / HoopsHype / Bleacher Report (Apr 28-May 14) align: Atlanta plans to bring him back on a multi-year deal, with offers expected 'slightly above the mid-level exception' — most execs pegging 2yr/$35-40M as the fair range. UPDATED PARALLEL: SI onsi report has Atlanta interested in Austin Reaves UFA market alongside CHI/BKN/UTA — but Chicago's NBA-high $58M cap room under ex-ATL EVP Bryson Graham (Sun-Times, May 5) gives the Bulls the cleanest single-team path to Reaves at the $30-40M/yr tier, which de-pressurizes Atlanta's cap-collide with the McCollum re-up. The cleaner path the FO has signaled remains McCollum on the MLE-plus deal with Reaves as a stretch contingency. McCollum publicly confirmed a 'productive conversation' with the front office (Heavy, May 4). Hollinger's Athletic preview flags age (34, turning 35) as the structural risk. UFA market opens June 30, 6 PM ET — 44 days out. Final regular-season line: 18.7 / 3.1 / 4.1 on 45.2/38.1/82.7 across 41 Hawks games post-Jan 8 trade (25 starts), then 19.2 PPG / 49% FG / 31% 3P across the six R1 games.",
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
    recentNotes: "Combine final day (Sun May 17) — Career-best 25-26 season locks in his role as the post-Trae starting C: 15.2/7.6/3.1 on 48.0% FG with 1.1 blk and 1.1 stl across 74 games and 31 mpg (basketball-reference / RotoWire / Spotrac confirmed May 11). Two years left on his 4yr/$62M extension at $16.1M in 26-27. Atlanta has resisted prior trade interest (Pacers reportedly called pre-deadline per Yahoo) and Hollinger's preview treats the C role as locked. Yardbarker / SI onsi / Soaring Down South (May 5-14) re-cite Isaiah Hartenstein as the top FA frontcourt target IF Atlanta can clear room — would pair WITH Okongwu, not replace him. STRUCTURAL CATCH still active from May 11 reporting: OKC holds a $28.5M team option on Hartenstein for 26-27 and may decline because of cap pressure from Jalen Williams / Chet Holmgren extensions kicking in (Thunderous Intentions / Yardbarker, May 11). Six-game R1 line was ~11.3/5.7/1.7 played through right-knee inflammation diagnosed after Game 1 — KAT's two triple-doubles were the series-defining mismatch ATL never solved.",
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
    recentNotes: "Combine final day (Sun May 17) — Offseason trade-watch player No. 1, and the No. 8 lottery slot sharpens the question. Both scrimmage days are now in the books (closed Thu May 14) and the wings/bigs on Atlanta's No. 8 board (Tre Johnson, Nate Ament, Koa Peat, Lendeborg, Mikel Brown Jr., Kingston Flemings, Aday Mara, Dailyn Swain per CBS / SI onsi / Last Word May 12-13) — exactly the names competing for the floor next year — finished their live-tape windows yesterday. Marc Stein of The Stein Line reports the Hawks are 'open to trading Risacher if the right offer comes along' (Basketnews / Roundtable May 11), though Hawks sources pushed back hard on prior Anthony Davis speculation. Hollinger's Athletic preview still tags Risacher (and Kispert) as the likeliest summer trade chip. Structural read: $13.7M next season then a $17.8M team option for 27-28. Sophomore line: 9.6/3.8/1.1 on 44.6% FG / 37.2% 3P across 66 games — regression from his 12.6 PPG rookie year as usage dropped from 21.6% to 17.7%. R1 floor time was just 2:30 across six games — one Game 1 cameo then five straight DNP-CDs.",
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
    recentNotes: "Combine final day (Sun May 17) — Biggest cap decision of the offseason. DEADLINE JUNE 29 (43 days out) on the $24.3M 26-27 team option (Heavy / ClutchPoints / ESPN's Bobby Marks, Apr 30-May 11). Most recent reporting (Yahoo Sports 'Hawks face key decision on Jonathan Kuminga's future', El-Balad, ClutchPoints 'Insider believes Kuminga will return', May 11) is the mixed-signal cluster: Jake Fischer holds the line on mutual interest in DECLINING the option for a longer-term deal, but Brett Siegel reports Atlanta could exercise the option to preserve a tradable expiring for the in-season market. NEW LAYER (May 12-13 carry-through): SI onsi report linking Atlanta to Austin Reaves AND fresh May 13 chatter linking ATL to Denver's Cameron Johnson (HoopsHype rumors) both make the option-decline more likely — declining Kuminga is the cleanest single move to open cap room for either lane per Larry Brown Sports / SportsTalkATL / Soaring Down South. Hollinger had already endorsed the decline-and-extend path. Without a deal he could walk for nothing. Six-game R1 line landed around 13.4 PPG with a three-point shot that never recovered (sub-30% over the last four). Regular-season Hawks line of 14.9/5.1/2.2 in 16 games left both a clear ceiling (Game 3's 21-off-bench Q1 hero arc) and a clear coaching project for the summer.",
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
    recentNotes: "Combine final day (Sun May 17) — Calendar marker: $9.4M 26-27 contract has just $3M guaranteed UNTIL JUNE 25 — 39 days out — when it triggers full guarantee (SI onsi cap tracker / BlueManHoop, Apr 28-May 1). Three Hawks paths: trigger and use as movable expiring, waive before the trigger and save $6.4M, or include in a pre-trigger trade. Hoops Rumors lists Hield as a likely offseason discussion piece, especially as salary filler in any Jaylen Brown framework that resurfaced over the weekend. Regular-season line of 11.8/2.8/2.1 on 39.8% from three across 71 games (12 starts), but R1 role was largely abandoned (6 mpg in 2 games). Decision sequence: lottery done (May 10) → Hield's June 25 trigger → Kuminga's June 29 option → McCollum FA opens June 30 → Draft Night June 23.",
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
    recentNotes: "Combine final day (Sun May 17) — Series ended with the rotation slot under question after a tough R1 showing. Hollinger explicitly names Kispert (with Risacher) as the likeliest summer trade chip; cap notes show $14.6M next season then a $17.4M cap hit in 27-28. Salary-matching utility in any Jaylen Brown framework is real — the No. 8 pick plus Kispert plus Hield's $9.4M would clear the $57M Brown number per Hoops Rumors / Boston.com (May 10-11). Regular season line of 9.6/2.4/1.3 on 40.2% from three in 40 games (8 starts) was the post-trade Hawks portion.",
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
    recentNotes: "Combine final day (Sun May 17) — UFA whose renewal price came down after Round 1. Six-game R1 line: ~2.8 PPG on a series-long shooting slump. Regular season was a steady veteran backup role (7.4/1.8/2.9) over 58 games but the playoff sample raises questions on terms. Hoops Rumors offseason brief tags him as a role-player filler Saleh can shop on minimums or replace via the MLE; UFA market opens June 30, 6 PM ET — 44 days out.",
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
    recentNotes: "Combine final day (Sun May 17) — Rookie offseason story: confirmed regular-season line via SI onsi / Peachtree Hoops / Soaring Down South May 11 was 44 GP / 5.2 PPG / 2.2 RPG / 0.6 APG on 53.8% FG and 38.7% from three in 11.4 mpg (leads all rookies in 3P% at min 10 attempts). Made his NBA debut Oct 24, 2025 after Atlanta traded back to draft him at No. 23 out of Georgia. Multiple G League assignments and rotation gaps through the year — the development arc that Saleh referenced ('best version of ourselves is yet to come') runs directly through this summer's Summer League and a bigger third-string spell-PF role.",
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
    recentNotes: "Combine final day (Sun May 17) — Missed the entire first round of the playoffs after the Apr 1 right high-ankle sprain (Heavy/CBS, Apr 24). UFA per Bleacher Report cap notes. Offseason story is whether ATL re-signs the third center or pivots to the lottery picks (May 10) or to Hartenstein-tier FA money for help up front; the Hartenstein chase (per Soaring Down South 'top free-agency frontcourt target', May 11) directly competes with re-signing Landale.",
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
  seriesContext: "COMBINE FINAL DAY (Sun May 17, Wintrust Arena) — last day of the 2026 AWS NBA Draft Combine (May 10-17), final shooting drills + interviews + medicals before the June 23-24 draft. ECSF GAME 7 TONIGHT 8 PM ET in Detroit on Amazon Prime — Pistons-Cavaliers winner faces the Knicks (the team that ended Atlanta's season) in the ECF starting later this week. Pistons forced the decider with Friday's 115-94 road win at Cleveland (Cade Cunningham 21/8/5 3PM; Jalen Duren 15-and-11; Harden passed Curry for 10th on the all-time playoff scoring list with a Q1 step-back 3). FRONT-OFFICE FLASHPOINT STILL OPEN (Tue May 12-Sun May 17): Philadelphia 76ers FIRED PBO DARYL MOREY; HBSE President of Sports BOB MYERS has taken interim control of basketball ops and is leading the search — sources (Dallas Hoops Journal / Philly Inquirer / NBC Sports Philadelphia / ESPN) name HAWKS GM ONSI SALEH and Andre Iguodala on Myers' radar. Saleh climbed the Warriors front office under Myers (2019-23) before joining ATL in 2024 — the familiarity is the hook. Hawks just lost Bryson Graham to Chicago May 5; a Saleh departure to PHI would be a top-down gut. KNICKS COMPLETED A 4-0 SWEEP OF 76ERS (Game 4 May 10: 144-114, franchise-record 25 3PM). COMBINE WRAP: top shooting belongs to Alex Karaban (74.8% across all drills, best at combine), Kingston Flemings led the 3-point star drill 19/25 + 40.5\" max vert + top-5 in agility/shuttle/sprint. Cameron Boozer measured 6'8.25\"/252.8 lbs/7'1.5\" wingspan/35\" vert. Aday Mara 7'3\" socks/9'9\" reach (2nd-longest in combine history). Cameron Carr 38\" standing/42.5\" max vert plus 30 on 6 threes. Morez Johnson Jr. 39\" max vert and second-fastest pro lane time. HAWKS MET WITH AJ DYBANTSA (BYU, consensus No. 1) at the combine despite picking 8th (SI onsi / Yahoo Sports / Deseret News / CBS Sports). CAMERON JOHNSON trade thread still warm but no movement (Heavy / NuggLove / FanSided). BURRIES (Arizona, 16.1 PPG) remains Hollinger's No. 8 mock; Mikel Brown Jr. and Kingston Flemings the other realistic ATL boards. Pre-draft workouts running: Bidunga, Onyenso, Suder, Uzan. KEY OFFSEASON DATES: Hield $9.4M full-guarantee trigger June 25 · Kuminga $24.3M team-option call by June 29 · McCollum UFA market opens June 30 6 PM ET · Free agency moratorium July 6.",
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
  generatedAt: "2026-05-17T13:45:00Z",
  summary:
    "OFFSEASON — Sunday May 17, COMBINE FINAL DAY (Day 7) in Chicago and ECSF GAME 7 TONIGHT (Pistons-Cavaliers, 8 PM ET in Detroit on Amazon Prime). The Saleh-to-76ers thread is still the headline front-office story heading into the new week: Philadelphia 76ers fired PBO Daryl Morey on Tue May 12 (ESPN / NBA.com / NBC Sports Philadelphia), HBSE President of Sports BOB MYERS has taken interim control of basketball ops, and Fri-Sat reporting from Dallas Hoops Journal and Philly Inquirer continues to name HAWKS GM ONSI SALEH on Myers' candidate radar alongside Andre Iguodala — Saleh climbed the Warriors front office under Myers from 2019-23, the familiarity is the hook. NO HIRE YET as of Sunday morning. With Bryson Graham already gone to Chicago (May 5), a Saleh exit would be a top-down gut while Atlanta is still searching for a President of Basketball Operations. GAME 7 TONIGHT IN DETROIT: Pistons forced the deciding game with Friday's 115-94 road win at Cleveland (Cade Cunningham 21/8/5 3PM; James Harden passed Stephen Curry for 10th on the all-time playoff scoring list with a Q1 step-back 3). Winner faces the Knicks — the team that ended Atlanta's season — in the ECF starting later this week. KNICKS COMPLETED A 4-0 SWEEP OF 76ERS last Sun May 10 (144-114 close-out, franchise-record 25 3PM). COMBINE WRAPS TODAY at Wintrust Arena after a six-day run: ALEX KARABAN was the combine's best shooter at 74.8% across all drills; KINGSTON FLEMINGS led the 3-point star drill 19/25 plus a 40.5\" max vert and top-5 in agility/shuttle/sprint; CAMERON BOOZER measured 6'8.25\"/252.8 lbs/7'1.5\" wingspan/35\" vert; ADAY MARA 7'3\" socks/9'9\" reach (tied 2nd-longest in combine history); CAMERON CARR 30 on 6 threes plus a 42.5\" max vert; MOREZ JOHNSON JR. 39\" max vert and second-fastest pro lane time. HAWKS MET WITH AJ DYBANTSA (BYU, consensus No. 1) at the combine despite picking 8th — Dybantsa told reporters he's open to working out for multiple teams (SI onsi / Yahoo Sports / Deseret News / CBS Sports). BRAYDEN BURRIES (Arizona, 16.1 PPG) remains Hollinger's No. 8 mock at The Athletic; Mikel Brown Jr. (Pro Day shooting clinic at combine), Kingston Flemings and Tre Johnson the other realistic ATL boards. CAMERON JOHNSON trade thread still warm but NO TRADE EXECUTED — Heavy / NuggLove / FanSided continue to label Johnson Denver's most-likely trade candidate (Watson re-sign math), Hawks the cleanest lane. FRONT-OFFICE SPINE unchanged: operate OVER the cap with non-tax MLE (~$15.1M), BAE (~$5.1M), four trade exceptions, Hield's $9.4M expiring; retain McCollum (HoopsHype: 'slightly above MLE,' ~2yr/$35-40M); KUMINGA $24.3M option call by June 29 (split reporting — Fischer says decline-for-extension, Siegel says opt-in as trade chip); call Hield's $3M-vs-$9.4M trigger before June 25; shop Risacher or Kispert. Snyder extension talks remain on the calendar.",
  keyTopics: [
    {
      title: "TONIGHT (Sun May 17, 8 PM ET): Pistons-Cavaliers ECSF GAME 7 in Detroit — Winner Plays Knicks in ECF",
      detail:
        "Sunday's lead playoff story: GAME 7 of the Eastern Conference semifinals tips at 8 PM ET in Detroit on Amazon Prime Video (NBA.com 'Cavaliers, Pistons both hoping to extend Game 7 success' / Yahoo Sports / Fear The Sword / Starting 5, May 16-17). Pistons forced the decider Friday night with a 115-94 road win at Cleveland behind Cade Cunningham's 21 pts / 8 ast / 5 3PM and a Jalen Duren 15-and-11 redemption game; James Harden passed Stephen Curry for 10th on the all-time playoff scoring list with a Q1 step-back 3. The Cavs have now lost a clinch chance in R2 three straight years. The WINNER faces the NEW YORK KNICKS — the team that ended Atlanta's season with the historic 140-89 Game 6 blowout — in the ECF starting later this week. Knicks completed a 4-0 sweep of the 76ers last Sun May 10 (144-114 close-out, franchise-record 25 3PM, most efficient three-quarter playoff offense in 30 years per NBA.com). The Pistons and Cavs split the season series 2-2; both are 4-1 on home floors in Games 7 historically. Hawks pre-draft workouts (Bidunga/Onyenso/Suder/Uzan) and the Pistons G7 share the same Sunday news cycle in Atlanta.",
      category: "games",
    },
    {
      title: "STILL OPEN (Tue May 12-Sun May 17): Bob Myers Eyeing Onsi Saleh For Vacant 76ers PBO Role — Hawks GM On Philly's Shortlist",
      detail:
        "Six days into the storyline, no hire yet as of Sunday morning. TUESDAY MAY 12: Philadelphia 76ers FIRED PBO Daryl Morey after Boston Celtics historic 3-1 R1 collapse exit (ESPN 'Sources: Morey out as 76ers president of basketball operations' / NBA.com / NBC Sports Philadelphia / FOX 29 Philly / Crossing Broad / Philly Inquirer, May 12-13). HBSE President of Sports BOB MYERS — the four-time-champion Warriors architect named to oversee Sixers basketball ops last October — has taken INTERIM control of basketball operations and is leading the PBO search. FRIDAY-SATURDAY (May 15-16): Dallas Hoops Journal and Philly Inquirer report that HAWKS GM ONSI SALEH and four-time NBA champion ANDRE IGUODALA are both on Myers' radar for the role. The Saleh-Myers familiarity: Saleh climbed the Golden State Warriors front office under Myers from 2019-2023 before joining Atlanta as assistant GM in 2024 and getting promoted to GM in April 2025. Shams Charania adds the eventual PBO hire will 'partner' with Myers (Crossing Broad, May 14). MECHANICAL ATL RISK: Bryson Graham already left for the Bulls EVP chair May 5; a Saleh exit to Philly would be a top-down gut while Atlanta is STILL searching for its own President of Basketball Operations (vacant since the FO restructure last spring). Atlanta would be replacing both its GM and its top draft evaluator inside a 6-week window between the Combine and Draft Night. NOT YET a done deal — Saleh just finished 2nd in NBA Executive of the Year voting and is mid-build with the team.",
      category: "general",
    },
    {
      title: "Cameron Johnson Still 'Most Likely' Nuggets Trade Candidate — Hawks Lane Holds, NO MOVEMENT YET",
      detail:
        "Three days into the strengthened thread (Heavy 'Cam Johnson Top Trade Candidate Revealed by NBA Insider' / NuggLove / FanSided / Yahoo Sports / SI Nuggets, May 13-16): Brett Siegel (ClutchPoints) and the Denver Post continue to label DENVER's CAMERON JOHNSON the Nuggets' MOST LIKELY trade candidate of the offseason. Mechanics unchanged: Johnson is on a $23.5M expiring contract, and Denver must move salary to re-sign restricted free agent Peyton Watson — Cam Johnson or Christian Braun are the only realistic levers, and Johnson's expiring is the most-mobile dollar on the books. Johnson played 54 games in 25-26 averaging 12.2 PPG and shot poorly in the postseason. Atlanta's reported interest first surfaced May 13 (HoopsHype / Soaring Down South) and remains the cleanest of Saleh's three open wing-upgrade lanes — half-court shotmaking + 3-and-D, the exact profile Hollinger named as Atlanta's biggest R1 gap. Likely structure: ATL's four trade exceptions + a future first, OR salary-matching with Hield's $9.4M expiring and Kispert. NO TRADE EXECUTED as of Sun May 17 — talks remain speculative. Clippers, Lakers, Warriors, and Rockets were named as interested when Johnson was in Brooklyn last summer.",
      category: "trades",
    },
    {
      title: "COMBINE FINAL DAY (Sun May 17): Six-Day Wrap — Karaban Best Shooter, Flemings Best Athlete, Mara Best Measurement, Boozer the Pillar",
      detail:
        "TODAY closes the 2026 AWS NBA Draft Combine at Wintrust Arena and the Marriott Marquis in Chicago (May 10-17). FINAL WRAP per Bleacher Report 'Winners and Losers from the 2026 NBA Combine' / ESPN 'biggest questions, risers and withdrawal watch' / At The Hive 'Winners and Losers' / CBS Sports 'Risers and Fallers' / Yahoo Sports / Babcock Hoops / NBADraft.net (May 14-17). SHOOTING TOP LINE: ALEX KARABAN was the combine's best shooter at 74.8% across all drills — 22-of-30 off the dribble, 18-of-25 3-point star, 21-of-25 side-mid-side (combine best), 18-of-25 spot-ups. KINGSTON FLEMINGS led the 3-point star drill 19-of-25, hit 15-of-25 spot-ups, and finished top-5 in max vertical (40.5\"), pro lane agility, shuttle and sprint. ATHLETIC TESTING: CAMERON CARR posted 38\" standing / 42.5\" max vert / 10.46 lane agility (all 2nd-best in class) and dropped 30 on 6 threes before withdrawing from Thursday's games; Billy Richmond 41\" vert + 10.23 lane agility + 3.06 ¾-court sprint; MOREZ JOHNSON JR. 39\" max vert + second-fastest pro lane time, with size/length/reach mirroring Naz Reid and Wendell Carter Jr.; BABA MILLER (6'10½\"/7'1¾\" wingspan) led the first scrimmage with 20. MEASUREMENTS THAT MATTER FOR ATL: ADAY MARA 7'3\" socks/9'9\" reach (tied 2nd-longest in combine history) — addresses Hawks size shortage; CAMERON BOOZER 6'8.25\"/252.8 lbs/7'1.5\" wingspan/35\" vert (Duke POY, projected top-3); Mikel Brown Jr. 6'3.5\" barefoot/6'7.5\" wingspan + 'Pro Day shooting clinic'. Top-3 (Dybantsa, Peterson, Boozer) sat out scrimmages entirely after Day 1 measurements. Hawks board for No. 8 now graded on interviews + medical — Sunday's session is the last in-person look before the June 23-24 draft.",
      category: "general",
    },
    {
      title: "NEW: Hawks Met With AJ DYBANTSA at Combine — Intel Pass on Consensus No. 1 Despite Picking 8th",
      detail:
        "Per SI onsi 'Report: Atlanta Hawks Meet With Draft's Top Prospect At NBA Combine' (May 14) / Deseret News 'How AJ Dybantsa fared at the 2026 NBA Combine' (May 12) / CBS Sports 'NBA Draft Combine intel: Dybantsa-to-Washington isn't viewed as the lock everyone assumed' (May 13): the Atlanta Hawks were among the teams to meet with BYU forward and consensus No. 1 overall pick AJ DYBANTSA at the combine. By noon Wed May 13, Dybantsa had spoken with the top-5 pick-holders (Washington, Utah, Memphis, Chicago, Clippers) plus the Hawks and Mavericks. Dybantsa is the player most likely to be the No. 1 pick by Washington and would be 'pretty shocking' to fall past No. 3. The Hawks meeting is intel work — they pick 8th and have virtually no chance of getting him without a trade-up. Dybantsa to reporters: 'I'm super versatile as a player. I think I can guard one through four, play one through four. I think I can play a little bit of combo guard if you need me to. I can be that jumbo wing if you need me to.' The meeting signals Atlanta is at least surveying the top of the board even with the No. 8 slot.",
      category: "general",
    },
    {
      title: "Hollinger Mock: Brayden Burries (ARIZONA) to Hawks at No. 8 — Named Combine Winner; Mikel Brown the Other Live Option",
      detail:
        "John Hollinger's first post-lottery mock at The Athletic has Atlanta selecting BRAYDEN BURRIES at No. 8 (Roundtable 'Ex-NBA Executive John Hollinger Mocks Brayden Burries to Atlanta Hawks at No. 8', May 13 / Peachtree Hoops mock-draft roundup, May 15-16). Burries is a 6'4 combo guard at ARIZONA (NOT Long Beach State — confirmed by Babcock Hoops / NBADraft.net / Tankathon / SI Wildcats). Wildcats team-high 16.1 PPG, led Arizona in total threes. Hollinger framing: 'a high-level shooter and off-ball playmaker with the upside of becoming a Bradley Beal-type weapon.' Burries named among the 2026 Combine's biggest WINNERS by Zona Zealots / Yardbarker / ClutchPoints. Range 6-9 per consensus boards. Other ATL-at-No. 8 mocks: CBS Sports' Parrish has Tre Johnson; ESPN's Givony has Yaxel Lendeborg as the ATL-fit name; Bleacher Report's Wasserman puts Kingston Flemings in play; Peachtree Hoops mock roundup has Mikel Brown Jr. as the most-mentioned name AFTER the combine (Brown's Pro Day shooting was widely praised — 6'3.5\" barefoot, 6'7.5\" wingspan). Hollinger explicitly notes 7'3 Aday Mara would address Atlanta's size shortage but Burries 'remained the highest-quality prospect left.'",
      category: "general",
    },
    {
      title: "Bulls Hand Bryson Graham NBA-HIGH $58M Cap Space — Chicago Now Cleanest Suitor for Reaves, Tightens Atlanta's Lane",
      detail:
        "NEW MECHANICAL CONSEQUENCE of the May 5 Bryson Graham hire (Chicago Sun-Times 'Bulls have a new man in charge' / FOX Sports / ESPN / Pippen Ain't Easy, May 5-13): Chicago enters the offseason with an NBA-HIGH $58M in cap space (NBC Sports reports closer to $60M), the cleanest single-team path to Austin Reaves at his projected $30-40M-per-year market. The Bulls were already named alongside Atlanta, Brooklyn and Utah on Reaves' interest list (SI onsi / The Athletic Woike-Amick, May 12-13). Now Atlanta's already-conditional Reaves lane — needs Kuminga $24.3M option declined by June 29 AND Hield $9.4M moved AND likely Kispert added in — gets squeezed from above by a Bulls offer that doesn't need any of those moves. Chicago also inherits Atlanta's former draft-evaluation lead (Graham, 15-year Pelicans run drafting Trey Murphy III, Herb Jones, Daniels, NAW). Reaves remains the favored Lakers re-up given Luka's public preference, but the Bulls' room is the swing variable Atlanta now has to plan around. Marks (ESPN): 'Atlanta is in as good a financial shape as any playoff team in 2026' — but Chicago is in better.",
      category: "trades",
    },
    {
      title: "Hawks Linked to Austin Reaves in Free Agency — Heavy: Bulls Chances 'Limited' Despite Cap Room (Reaves Wants to Win)",
      detail:
        "Four days into the storyline (SI onsi / Yardbarker 'Reaves linked to two teams' / Larry Brown Sports / Lakers Nation / Bleacher Report / Heavy 'Bulls Get Major Update on Austin Reaves Free Agency' / TheRX, May 12-16): Atlanta and Jazz are now the two suitor names being explicitly linked to Reaves (Bulls' competitive case has softened, per Heavy May 15-16: 'Winning is expected to be a major factor in Reaves' decision — a development that could work against a Bulls team still in transition. With Billy Donovan leaving and a new front office in charge, there may be too much upheaval'). Reaves' 25-26 line: 23.3 PPG / 5.5 APG / 4.7 RPG on 49/36/87. Market: ~$40M/yr per TheRX; ProFootballNetwork pegs $40-50M ceiling. Hawks structural catch unchanged: need Kuminga $24.3M option DECLINED by June 29 + Hield $9.4M moved + likely Kispert in any sign-and-trade. Hawks pose the BIGGEST THREAT to lure Reaves from LA among suitor list given 46-win Hawks core (Yardbarker May 13). Luka Doncic's 'I want them to keep Reaves' public message and Lakers winning-environment hook remain the primary anti-action signals. Reaves will decline his $14.9M player option for next season.",
      category: "trades",
    },
    {
      title: "Pre-Draft Workout Roster: Bidunga, Onyenso, Suder, Uzan In For No. 57 Looks",
      detail:
        "Confirmed earlier this week (Mon May 11) by Adam Lefkoe / SI onsi 'Report: Atlanta Hawks To Bring in Four Prospects For Pre-Draft Workouts' / Hoops Rumors / HoopsHype draft workout tracker: Atlanta is hosting FLORY BIDUNGA (Kansas, 6-9 F/C, Big 12 DPOY — 13.3/9.0/2.6 blk on 35 games), UGONNA ONYENSO (Virginia, 7-0 C, projected top shot-blocker in the class), PETER SUDER (Miami OH, 6-5 wing), and MILOS UZAN (Houston, 6-4 PG — led the Cougars in minutes with 3.08 A/TO, 19 double-digit games incl. two 20-pt nights) at the practice facility this week. All four project as second-round picks and the workout group is calibrated for Atlanta's No. 57 selection (last pick of the draft). Saleh's stated approach is 'best player available regardless of fit' at the lottery slot — these workouts feed the back-end of the board.",
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
      title: "All-NBA Media Polls: Jalen Johnson Trending Up — ESPN's Bontemps Has Him SECOND TEAM (Official Vote Pending)",
      detail:
        "Two-plus weeks of media-poll trickle (Yahoo Sports / ESPN / ClutchPoints / Bleacher Report / Sporting News, May 1-15): Yahoo Sports' May 1 ballot listed JALEN JOHNSON on the All-NBA Third Team. UPGRADE: ESPN's Tim Bontemps' ballot (May 5) has Johnson on the All-NBA SECOND TEAM. ClutchPoints' May 11 media-poll roundup shows Johnson 'a clear selection alongside Chet Holmgren and Jalen Duren, each receiving more than 42 total votes and 70 voting points' and even picking up two first-team votes. The league's OFFICIAL All-NBA results are still to come — expected late May after the MVP reveal (basketball-reference.com awards page). Johnson's regular-season line of 22.5/10.3/7.9 across 72 games made him just the FIFTH player ever to clear 22+/10+/7+ for a full season (Oscar, Wilt, Jokic, Westbrook). First All-Star nod arrived in February. If the league ballot mirrors the consensus media poll, this would be Johnson's first All-NBA selection and the first by a Hawk since Trae Young's 2022 Third Team. MVP finalists: SGA, Jokic, Wembanyama (Wemby took DPOY — first UNANIMOUS winner ever; Cooper Flagg took ROY; Keldon Johnson took 6MOY).",
      category: "general",
    },
    {
      title: "ECSF UPDATE: Knicks Swept 76ers 4-0 (Last Sun) — Pistons Beat Cavs 115-94 Friday, Game 7 in Detroit Sunday May 17",
      detail:
        "The team that ended Atlanta's season is BACK IN THE ECF. KNICKS COMPLETED A 4-0 SWEEP of the 76ers on Sunday May 10 — 144-114 close-out at MSG, FRANCHISE PLAYOFF RECORD 25 3PM that tied for the most in any NBA playoff game (NBA.com '4 takeaways: Knicks find their best form when it matters most' / ESPN 'Knicks sweep 76ers, return to Eastern Conference finals' / SI Knicks onsi, May 10). Series scores: Game 1 137-98, Game 2 108-102, Game 3 108-94, Game 4 144-114. Through three quarters of Game 4 the Knicks had the most efficient offensive performance in any playoff game in the last 30 years. THE OTHER ECSF — Pistons-Cavaliers Game 7 SUNDAY MAY 17 in Detroit: Pistons won Game 6 115-94 last night (May 15) at Cleveland to force a deciding game (NBA.com / ESPN / FOX Sports / Detroit News, May 15-16). Cade Cunningham 21 pts / 8 ast / 5 3PM in the close-out push. James Harden passed Stephen Curry for 10th on the NBA's all-time playoff scoring list with a Q1 step-back 3. Cavs blew a chance to clinch at home — their third straight year losing a closeout opportunity in R2. The DET/CLE winner faces the Knicks in the ECF. Hawks pre-draft workout schedule and the Pistons G7 collide in the same Sunday news cycle.",
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
      title: "Kuminga Cap Call: SPLIT REPORTING — Decline for Extension (Fischer) vs. Opt-In as Trade Chip (Siegel) by June 29",
      detail:
        "Atlanta's biggest summer cap question is Jonathan Kuminga. TWO COMPETING FRAMES as of mid-May: (1) Jake Fischer (Bleacher Report / Hoops Rumors / Heavy / ClutchPoints, Apr 28-30) reports mutual interest in DECLINING the $24.3M 26-27 team option to negotiate a longer-term agreement — since Kuminga is not extension-eligible, the only way to ink a multi-year deal is to rip up the option. (2) Brett Siegel (Yahoo Sports / Heavy, May 13-15) now counters that Atlanta will pick up the option, viewing Kuminga as an in-season trade chip for 2026-27 with an expiring $24.3M number — preserving a contract slot. Decision deadline is JUNE 29. Acquired in the deadline-day Porzingis trade, Kuminga produced mixed results in 16 Hawks games — 14.9/5.1/2.2 regular season, 13.4 PPG in R1, sub-30% from three over the last four playoff games. Without a multi-year deal he could walk for nothing in 2027; with an opt-in he becomes a mid-season trade asset. Kuminga himself (via The Stein Line): 'That's the goal. That's what we're trying to do here, what we're trying to stamp here as a group. We talk about it every day.'",
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
    "Chicago Sun-Times",
    "Denver Post",
    "Detroit News",
    "Philadelphia Inquirer",
    "NBC Sports Philadelphia",
    "FOX 29 Philadelphia",
    "Crossing Broad",
    "Dallas Hoops Journal",
    "CBS Sports",
    "Deseret News",
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
    "FOX Sports",
    "NBC Sports",
    "NoCeilings NBA",
    "At The Hive",
    "ABC7 Chicago",
    "Bulls.com",
    "Larry Brown Sports",
    "Last Word On Basketball",
    "Lindys Sports",
    "Roundtable",
    "Hawks.com",
    "Tankathon",
    "NBADraft.net",
    "Babcock Hoops",
    "On3",
    "CraftedNBA",
    "BlueManHoop",
    "RealGM",
    "Spotrac",
    "Zona Zealots",
    "Pippen Ain't Easy",
    "NuggLove",
    "FanSided",
    "TheRX",
    "Lakers Nation",
  ],
};
