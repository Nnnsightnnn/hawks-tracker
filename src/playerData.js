// ─── Atlanta Hawks Player Data (2025-26 Season · Updated Saturday May 23, 2026 — OFFSEASON · DYSON DANIELS NAMED ALL-DEFENSIVE SECOND TEAM (Fri May 22) — second straight year on an All-Defense team, tied for the NBA lead in steals at 2.0/g · Kia All-NBA teams revealed TOMORROW Sun May 24 7 ET — Jalen Johnson's first All-NBA nod in play · ECF: Knicks lead Cleveland 2-0, Game 3 at Cleveland tonight 8 ET · WCF: Thunder beat Spurs 123-108 Fri for a 2-1 lead on a record 76 bench points · SGA won his 2nd straight MVP May 17 · Quin Snyder 'massive' extension reported 'looming' · 31 days to Draft Night Jun 23) ─
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
// Hawks pivoted to a quick offseason: the May 10 draft lottery landed Atlanta at No. 8 (the most-likely
// outcome on the more-favorable NOP/MIL pick; Washington jumped to No. 1). The agenda now: Snyder
// extension talks, McCollum free-agency retention, the No. 8 pick, and the June cap gates (Hield full
// guarantee Jun 25, Kuminga option Jun 29). GM Onsi Saleh, runner-up in 2026 Executive of the Year
// voting, runs his second offseason without a President of Basketball Operations; on May 21-22 Atlanta
// formally DENIED Philadelphia permission to interview him for the Sixers' top job (Yardbarker / SI onsi / RealGM).

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
    recentNotes: "SUNDAY MAY 24 — ALL-NBA REVEAL IS TONIGHT: the official 2025-26 Kia All-NBA teams are announced tonight at 7 PM ET (NBC/Peacock, ahead of WCF Game 4), and Johnson is widely projected for his first career All-NBA selection — ESPN's Tim Bontemps had him SECOND TEAM on his May 5 ballot and ClutchPoints' May 11 poll called him 'a clear selection.' The awards cycle already opened well for Atlanta: teammate Dyson Daniels was named to the All-Defensive SECOND TEAM on Friday May 22. Johnson's 22.5/10.3/7.9 across 72 games made him just the fifth player ever to clear 22+/10+/7+ for a full season (after Oscar, Wilt, Jokic, Westbrook); The Athletic's Anonymous Player Poll named him the league's MOST UNDERRATED. He remains the offseason's untouchable asset — the one Hawk firmly OFF the board as Celtics insider Chris Mannix forecasts a 'fresh batch' of Jaylen Brown trade rumors. SGA collected his second straight MVP on May 17 (83 of 100 first-place votes). On a $150M rookie extension through 2029-30 at ~$30M/yr per Spotrac — locked in; final R1 line settled at 19.5/8.3/5.5.",
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
    fieldGoalPct: 47.1, threePointPct: 18.8, freeThrowPct: 76.2,
    trueShootingPct: 56.8, plusMinus: 4.3,
    form: 6.7, status: "active", injuryNote: null,
    recentNotes: "SUNDAY MAY 24 — HONORED: Daniels was named to the NBA ALL-DEFENSIVE SECOND TEAM on Friday May 22 (announced on Peacock — NBA.com / AJC / Atlanta News First / Roundtable), his second straight year on an All-Defense team after making FIRST TEAM in 24-25. He drew 9 first-place and 32 second-place votes from the 100-member global media panel (50 points, 10th in overall voting) and tied for the NBA lead in steals per game at 2.0 with OKC's Cason Wallace; Atlanta posted a top-10 defensive rating for the first time in nearly a decade with Daniels as the primary point-of-attack defender. The Second-Team finish — down from First Team a year ago — tracks a hard offensive year: his three-point shooting cratered to 18.8% (22-of-117), and Daniels has spoken candidly about getting into a 'dark place' mentally, planning an LA summer to rebuild the jumper and 'get stronger.' Victor Wembanyama was the unanimous DPOY and lone unanimous All-Defense 1st-teamer; Daniels was not a 2026 DPOY finalist after finishing runner-up in 25. Regular-season line of 11.9/6.8/5.9 on 2.0 stl across 80 games (76 starts) is the locked baseline; his five-year, $125M rookie extension kicks in next season — not trade-eligible until July 1, 2026.",
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
    recentNotes: "SUNDAY MAY 24 (ECF G3: Knicks 121-108 at Cleveland Saturday — NY leads the East finals 3-0 and can clinch in Game 4 Monday; WCF G4 tonight 8 ET at San Antonio — Thunder lead 2-1): MIP trophy still the through-line — 24 days past the Apr 24 Kia Most Improved Player ceremony where NAW took 66 of 100 first-place votes ahead of finalists Deni Avdija and Jalen Duren (NBA.com / Washington Post / Yahoo Sports / Hoops Rumors / Atlanta News First). Career-best 20.8/3.4/3.7 on 39.9% from three (251 makes — Hawks single-season record, 4th in the NBA); 11.4-PPG jump from 24-25 is the third-largest single-season scoring increase in 25 years. NAW is the second consecutive Hawks player and third overall to win MIP since the award debuted in 1985-86 — FIRST FRANCHISE EVER with back-to-back winners (Daniels won 24-25). R1 scoring settled at 13.4 PPG; the only ATL perimeter player above 33% from three across the full six. NAW was also drafted by Bryson Graham in New Orleans — Graham now runs the Bulls' front office (NBA-high $58M cap room per Chicago Sun-Times). Locked in long-term on the four-year, $62M deal he signed last summer.",
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
    recentNotes: "SUNDAY MAY 24 (ECF G3: Knicks 121-108 at Cleveland Saturday — NY leads the East finals 3-0 and can clinch in Game 4 Monday; WCF G4 tonight 8 ET at San Antonio — Thunder lead 2-1) — Headline UFA. SI onsi 'Atlanta Is Expected to Bring Back McCollum Next Season' / Soaring Down South / Hoops Rumors / HoopsHype / Bleacher Report / Yahoo Sports 'Hawks plan to bring back CJ McCollum in free agency' (Apr 28-May 18) align: Atlanta plans to bring him back on a multi-year deal, with offers expected 'slightly above the mid-level exception' — most execs pegging 2yr/$35-40M as the fair range, though ESPN's Bobby Marks has floated a 3yr/$115.9M extension as an outside ceiling. McCollum 'likely will have other suitors' as he hits UFA per Bleacher Report May 14. UPDATED PARALLEL: SI onsi report has Atlanta interested in Austin Reaves UFA market alongside CHI/BKN/UTA — but Chicago's NBA-high $58M cap room under ex-ATL EVP Bryson Graham (Sun-Times, May 5) gives the Bulls the cleanest single-team path to Reaves at the $30-40M/yr tier, which de-pressurizes Atlanta's cap-collide with the McCollum re-up. The cleaner path the FO has signaled remains McCollum on the MLE-plus deal with Reaves as a stretch contingency. McCollum publicly confirmed a 'productive conversation' with the front office (Heavy, May 4). Hollinger's Athletic preview flags age (34, turning 35) as the structural risk. UFA market opens June 30, 6 PM ET — 42 days out. Final regular-season line: 18.7 / 3.1 / 4.1 on 45.2/38.1/82.7 across 41 Hawks games post-Jan 8 trade (25 starts), then 19.2 PPG / 49% FG / 31% 3P across the six R1 games.",
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
    recentNotes: "SUNDAY MAY 24 (ECF G3: Knicks 121-108 at Cleveland Saturday — NY leads the East finals 3-0 and can clinch in Game 4 Monday; WCF G4 tonight 8 ET at San Antonio — Thunder lead 2-1) — Career-best 25-26 season locks in his role as the post-Trae starting C: 15.2/7.6/3.1 on 48.0% FG with 1.1 blk and 1.1 stl across 74 games and 31 mpg (basketball-reference / RotoWire / Spotrac confirmed May 11). Two years left on his 4yr/$62M extension at $16.1M in 26-27. Atlanta has resisted prior trade interest (Pacers reportedly called pre-deadline per Yahoo) and Hollinger's preview treats the C role as locked. Yardbarker / SI onsi / Soaring Down South (May 5-14) re-cite Isaiah Hartenstein as the top FA frontcourt target IF Atlanta can clear room — would pair WITH Okongwu, not replace him. STRUCTURAL CATCH still active from May 11 reporting: OKC holds a $28.5M team option on Hartenstein for 26-27 and may decline because of cap pressure from Jalen Williams / Chet Holmgren extensions kicking in (Thunderous Intentions / Yardbarker, May 11). Six-game R1 line was ~11.3/5.7/1.7 played through right-knee inflammation diagnosed after Game 1 — KAT's two triple-doubles were the series-defining mismatch ATL never solved.",
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
    recentNotes: "SUNDAY MAY 24 (ECF G3: Knicks 121-108 at Cleveland Saturday — NY leads the East finals 3-0 and can clinch in Game 4 Monday; WCF G4 tonight 8 ET at San Antonio — Thunder lead 2-1) — Offseason trade-watch player No. 1, and the No. 8 lottery slot sharpens the question. NEW FROM HOLLINGER (The Athletic, May 17 via Hoops Wire 'Hawks could look to trade Zaccharie Risacher' / Lindys / Roundtable May 17-18): Atlanta moving Risacher 'can't be ruled out' after he lost his starting job post-All-Star and fell out of the rotation entirely in April. Risacher's uncertain future could let Atlanta 'package him alongside the No. 8 pick and additional draft compensation' to trade up the board on draft night. Both scrimmage days are now in the books (closed Thu May 14) and the wings/bigs on Atlanta's No. 8 board (Tre Johnson, Nate Ament, Koa Peat, Lendeborg, Mikel Brown Jr., Kingston Flemings, Aday Mara, Dailyn Swain per CBS / SI onsi / Last Word May 12-13) — exactly the names competing for the floor next year — finished their live-tape windows yesterday. Marc Stein of The Stein Line reports the Hawks are 'open to trading Risacher if the right offer comes along' (Basketnews / Roundtable May 11), though Hawks sources pushed back hard on prior Anthony Davis speculation. Hollinger's Athletic preview still tags Risacher (and Kispert) as the likeliest summer trade chip. Structural read: $13.7M next season then a $17.8M team option for 27-28. Sophomore line: 9.6/3.8/1.1 on 44.6% FG / 37.2% 3P across 66 games — regression from his 12.6 PPG rookie year as usage dropped from 21.6% to 17.7%. R1 floor time was just 2:30 across six games — one Game 1 cameo then five straight DNP-CDs.",
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
    recentNotes: "SUNDAY MAY 24 (ECF G3: Knicks 121-108 at Cleveland Saturday — NY leads the East finals 3-0 and can clinch in Game 4 Monday; WCF G4 tonight 8 ET at San Antonio — Thunder lead 2-1) — Biggest cap decision of the offseason. DEADLINE JUNE 29 (41 days out) on the $24.3M 26-27 team option (Heavy / ClutchPoints / ESPN's Bobby Marks, Apr 30-May 11). Most recent reporting (Yahoo Sports 'Hawks face key decision on Jonathan Kuminga's future', El-Balad, ClutchPoints 'Insider believes Kuminga will return', May 11) is the mixed-signal cluster: Jake Fischer holds the line on mutual interest in DECLINING the option for a longer-term deal, but Brett Siegel reports Atlanta could exercise the option to preserve a tradable expiring for the in-season market. NEW LAYER (May 12-13 carry-through): SI onsi report linking Atlanta to Austin Reaves AND fresh May 13 chatter linking ATL to Denver's Cameron Johnson (HoopsHype rumors) both make the option-decline more likely — declining Kuminga is the cleanest single move to open cap room for either lane per Larry Brown Sports / SportsTalkATL / Soaring Down South. Hollinger had already endorsed the decline-and-extend path. Without a deal he could walk for nothing. Six-game R1 line landed around 13.4 PPG with a three-point shot that never recovered (sub-30% over the last four). Regular-season Hawks line of 14.9/5.1/2.2 in 16 games left both a clear ceiling (Game 3's 21-off-bench Q1 hero arc) and a clear coaching project for the summer.",
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
    recentNotes: "SUNDAY MAY 24 (ECF G3: Knicks 121-108 at Cleveland Saturday — NY leads the East finals 3-0 and can clinch in Game 4 Monday; WCF G4 tonight 8 ET at San Antonio — Thunder lead 2-1) — Calendar marker: $9.4M 26-27 contract has just $3M guaranteed UNTIL JUNE 25 — 37 days out — when it triggers full guarantee (SI onsi cap tracker / BlueManHoop, Apr 28-May 1). Three Hawks paths: trigger and use as movable expiring, waive before the trigger and save $6.4M, or include in a pre-trigger trade. Hoops Rumors lists Hield as a likely offseason discussion piece, especially as salary filler in any Jaylen Brown framework that resurfaced over the weekend. Regular-season line of 11.8/2.8/2.1 on 39.8% from three across 71 games (12 starts), but R1 role was largely abandoned (6 mpg in 2 games). Decision sequence: lottery done (May 10) → Hield's June 25 trigger → Kuminga's June 29 option → McCollum FA opens June 30 → Draft Night June 23.",
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
    recentNotes: "SUNDAY MAY 24 (ECF G3: Knicks 121-108 at Cleveland Saturday — NY leads the East finals 3-0 and can clinch in Game 4 Monday; WCF G4 tonight 8 ET at San Antonio — Thunder lead 2-1) — Series ended with the rotation slot under question after a tough R1 showing. Hollinger explicitly names Kispert (with Risacher) as the likeliest summer trade chip; cap notes show $14.6M next season then a $17.4M cap hit in 27-28. Salary-matching utility in any Jaylen Brown framework is real — the No. 8 pick plus Kispert plus Hield's $9.4M would clear the $57M Brown number per Hoops Rumors / Boston.com (May 10-11). Regular season line of 9.6/2.4/1.3 on 40.2% from three in 40 games (8 starts) was the post-trade Hawks portion.",
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
    recentNotes: "SUNDAY MAY 24 (ECF G3: Knicks 121-108 at Cleveland Saturday — NY leads the East finals 3-0 and can clinch in Game 4 Monday; WCF G4 tonight 8 ET at San Antonio — Thunder lead 2-1) — UFA whose renewal price came down after Round 1. Six-game R1 line: ~2.8 PPG on a series-long shooting slump. Regular season was a steady veteran backup role (7.4/1.8/2.9) over 58 games but the playoff sample raises questions on terms. Hoops Rumors offseason brief tags him as a role-player filler Saleh can shop on minimums or replace via the MLE; UFA market opens June 30, 6 PM ET — 42 days out.",
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
    recentNotes: "SUNDAY MAY 24 (ECF G3: Knicks 121-108 at Cleveland Saturday — NY leads the East finals 3-0 and can clinch in Game 4 Monday; WCF G4 tonight 8 ET at San Antonio — Thunder lead 2-1) — Rookie offseason story: confirmed regular-season line via SI onsi / Peachtree Hoops / Soaring Down South May 11 was 44 GP / 5.2 PPG / 2.2 RPG / 0.6 APG on 53.8% FG and 38.7% from three in 11.4 mpg (leads all rookies in 3P% at min 10 attempts). Made his NBA debut Oct 24, 2025 after Atlanta traded back to draft him at No. 23 out of Georgia. Multiple G League assignments and rotation gaps through the year — the development arc that Saleh referenced ('best version of ourselves is yet to come') runs directly through this summer's Summer League and a bigger third-string spell-PF role.",
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
    recentNotes: "SUNDAY MAY 24 (ECF G3: Knicks 121-108 at Cleveland Saturday — NY leads the East finals 3-0 and can clinch in Game 4 Monday; WCF G4 tonight 8 ET at San Antonio — Thunder lead 2-1) — Missed the entire first round of the playoffs after the Apr 1 right high-ankle sprain (Heavy/CBS, Apr 24). UFA per Bleacher Report cap notes. Offseason story is whether ATL re-signs the third center or pivots to the lottery picks (May 10) or to Hartenstein-tier FA money for help up front; the Hartenstein chase (per Soaring Down South 'top free-agency frontcourt target', May 11) directly competes with re-signing Landale.",
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
  seriesContext: "SUNDAY MAY 24 — AWARDS DAY: the official 2025-26 Kia All-NBA teams are revealed TONIGHT at 7 PM ET (NBC/Peacock, ahead of WCF Game 4) — the moment JALEN JOHNSON is widely projected to land his first career All-NBA selection after a 22.5/10.3/7.9 season across 72 games. It caps an awards stretch that already saw guard DYSON DANIELS named to the NBA ALL-DEFENSIVE SECOND TEAM on Friday May 22 (his second straight All-Defense nod) and SGA's second straight MVP on May 17. AROUND THE LEAGUE: in the East, the NEW YORK KNICKS — the team that buried Atlanta in six, the historic 140-89 Apr 30 Game 6 — beat Cleveland 121-108 on Saturday night behind Jalen Brunson's 30 to take a commanding 3-0 Conference Finals lead; New York can clinch its first NBA Finals trip since 1999 in Game 4 on Monday. In the West, the OKLAHOMA CITY THUNDER lead the San Antonio Spurs 2-1 and play GAME 4 TONIGHT (8 PM ET at San Antonio, NBC) after a record 76-bench-point Game 3 win. HAWKS LEDGER: a 'massive' extension for head coach QUIN SNYDER is reported 'looming,' one that could make him one of the NBA's highest-paid coaches. CJ McCOLLUM retention stays the priority (~2yr/$35-40M, with ESPN's Bobby Marks floating a 3yr/$115.9M ceiling); Isaiah Hartenstein is the top frontcourt target and Philadelphia's QUENTIN GRIMES a 'dream' backcourt add. CAMERON JOHNSON and JAYLEN BROWN trade threads remain open; ZACCHARIE RISACHER and Corey Kispert are the likeliest summer trade chips. DRAFT BOARD: the post-combine consensus has the Hawks taking a guard (KINGSTON FLEMINGS, MIKEL BROWN JR.) or 7'3 center ADAY MARA at No. 8. KEY OFFSEASON DATES: Draft Night June 23 (30 days) · Hield $9.4M full-guarantee trigger June 25 (32 days) · Kuminga $24.3M team-option call by June 29 (36 days) · McCollum UFA market opens June 30 6 PM ET (37 days) · Free agency moratorium July 6.",
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
  generatedAt: "2026-05-24T08:30:00Z",
  summary:
    "OFFSEASON — Sunday May 24. ATLANTA'S AWARDS DAY: the official 2025-26 Kia All-NBA teams are revealed TONIGHT at 7 PM ET (NBC/Peacock, ahead of WCF Game 4), the moment JALEN JOHNSON is widely projected to earn his first career All-NBA selection — ESPN's Tim Bontemps had him on the Second Team and ClutchPoints' May poll called him 'a clear selection.' It would cap an awards stretch that already saw DYSON DANIELS named to the All-Defensive Second Team on Friday May 22 (his second straight All-Defense nod) and SGA's second MVP on May 17. AROUND THE LEAGUE, the New York Knicks — the team that ended Atlanta's season — beat Cleveland 121-108 on Saturday night behind Jalen Brunson's 30 to take a 3-0 Conference Finals lead, and can reach their first NBA Finals since 1999 in Monday's Game 4, while the Oklahoma City Thunder lead San Antonio 2-1 and play Game 4 tonight. ON THE HAWKS' LEDGER, a 'massive' extension for head coach QUIN SNYDER is reported 'looming,' CJ McCOLLUM retention stays the priority (~2yr/$35-40M, with ESPN's Bobby Marks floating a 3yr/$115.9M ceiling), and the cap gates loom — Draft Night June 23, Hield's June 25 full-guarantee trigger, Kuminga's June 29 team-option call and McCollum's June 30 free-agency opening. The No. 8 pick (KINGSTON FLEMINGS, MIKEL BROWN JR., 7'3 ADAY MARA), interest in QUENTIN GRIMES and Isaiah Hartenstein, JAYLEN BROWN and CAMERON JOHNSON trade chatter, and likely ZACCHARIE RISACHER / Corey Kispert trade chips round out the agenda.",
  keyTopics: [
    {
      title: "TONIGHT — Kia All-NBA Teams Revealed (7 PM ET): Jalen Johnson's First All-NBA Nod in Play",
      detail:
        "The official 2025-26 Kia All-NBA teams are announced tonight, Sunday May 24, at 7 PM ET on NBC/Peacock, immediately ahead of WCF Game 4 (NBA.com 'Kia All-NBA Teams to be announced Sunday'). It is the moment JALEN JOHNSON is widely projected to land his first career All-NBA selection — ESPN's Tim Bontemps had him on the Second Team and ClutchPoints' May poll called him 'a clear selection,' while Sporting News' preview grouped him among the 'easy' remaining picks. Johnson's 22.5/10.3/7.9 across 72 games made him just the fifth player ever to clear 22+/10+/7+ for a full season (after Oscar Robertson, Wilt Chamberlain, Nikola Jokic and Russell Westbrook). The MVP race is already settled: Oklahoma City's SHAI GILGEOUS-ALEXANDER won his second straight on May 17 with 83 of 100 first-place votes, ahead of Jokic and Victor Wembanyama.",
      category: "general",
    },
    {
      title: "ECF Game 3: Knicks 121, Cavaliers 108 — New York Grabs a 3-0 Series Stranglehold",
      detail:
        "Saturday May 23 at Cleveland: the New York Knicks beat the Cavaliers 121-108 to take a commanding 3-0 lead in the Eastern Conference Finals (NBA.com 'Knicks take 3-0 series lead' / Yahoo Sports / FOX Sports, May 23-24). Jalen Brunson led all scorers with 30 points on 10-of-19 shooting and six assists, and New York never trailed. The win extended the Knicks' franchise-record postseason streak and moved them within one victory of their first NBA Finals appearance since 1999 — they get the first clinch chance in Game 4 on Monday. ATL angle: the Knicks remain the team that ended Atlanta's season in six, including the historic 140-89 Apr 30 Game 6.",
      category: "games",
    },
    {
      title: "WCF Game 4 Tonight at San Antonio — Thunder Lead the Spurs 2-1",
      detail:
        "Game 4 of the Western Conference Finals tips tonight, Sunday May 24 at 8 PM ET at San Antonio's Frost Bank Center on NBC/Peacock, with the Oklahoma City Thunder leading the series 2-1 (NBA.com / NBC Sports / Yardbarker, May 23-24). OKC took Game 3 123-108 on a record 76 bench points — Jared McCain scored 24 off the bench and Shai Gilgeous-Alexander added 26 and 12 assists. Forward JALEN WILLIAMS, who missed Game 3 with the hamstring injury suffered in Game 2, is the series' key status watch; Victor Wembanyama is expected to play for San Antonio.",
      category: "games",
    },
    {
      title: "Dyson Daniels Named NBA All-Defensive Second Team for the Second Straight Year",
      detail:
        "Friday May 22: Hawks guard DYSON DANIELS was voted to the NBA All-Defensive Second Team, his second consecutive season on an All-Defense team after making the First Team in 2024-25 (NBA.com / AJC 'Daniels named to NBA's All-Defensive Second Team' / Atlanta News First / Roundtable, May 22-23). Daniels drew 9 first-place and 32 second-place votes from the 100-member global media panel for 50 points — 10th in overall voting — and tied for the NBA lead in steals per game at 2.0 with Oklahoma City's Cason Wallace. Atlanta finished with a top-10 defensive rating for the first time in nearly a decade, with Daniels as the primary point-of-attack defender most nights. The Second-Team finish, down from First Team a year ago, tracked a difficult offensive season in which his three-point shooting fell to 18.8% (22-of-117); Daniels has spoken candidly about getting into a 'dark place' mentally and plans an LA summer to rebuild the jumper. The All-Defensive First Team: Victor Wembanyama (unanimous), Chet Holmgren, Ausar Thompson, Rudy Gobert and Derrick White.",
      category: "general",
    },
    {
      title: "Snyder Extension Still 'Looming' — A Deal Expected Before Training Camp",
      detail:
        "Reporting continues to point to a 'massive' contract extension for head coach QUIN SNYDER, described as 'looming' and expected to make him one of the NBA's highest-paid coaches at an eight-figure annual salary (Yardbarker 'Hawks extension with Quin Snyder looming' / SportsTalk ATL / Peachtree Hoops / Roundtable, May 21-23). Snyder enters the final year of his five-year deal in 2026-27; the 19-5 post-Trae-trade finish that bypassed the play-in is the cited tipping point, and Hawks CEO Steve Koonin has said publicly 'I think Quin is going to be part of our team for a very, very long time.' Jake Fischer reports 'strong' front-office support — locking him up before camp matters more with former evaluator Bryson Graham gone to run the Chicago Bulls.",
      category: "general",
    },
    {
      title: "CJ McCollum Free Agency: Hawks Plan a Return — Marks Floats a 3-Year, $115.9M Ceiling",
      detail:
        "Atlanta's headline UFA. The plan to bring CJ McCollum back holds, with Jake Fischer reporting mutual interest and McCollum confirming a 'productive conversation' with the front office after the season (Bleacher Report 'New CJ McCollum Rumors' / HoopsHype / RealGM / Heavy, Apr 30-May 22). John Hollinger reports most execs peg the fair range at one or two years slightly above the mid-level exception — roughly 2yr/$35-40M — while ESPN's Bobby Marks has floated a three-year, $115.9M extension as an outside ceiling. McCollum, who turns 35 in September, averaged 18.7/3.1/4.1 in 41 Hawks games and 19.2 PPG in the playoffs; he 'likely will have other suitors,' with cap-room teams like Chicago or Brooklyn the named risk. The UFA market opens June 30 at 6 PM ET — 37 days out.",
      category: "trades",
    },
    {
      title: "Kuminga's $24.3M Team Option — June 29 Decision, Decline-and-Extend the Expected Path",
      detail:
        "Atlanta's biggest cap question stays Jonathan Kuminga, with a June 29 deadline on his $24.3M 2026-27 team option (Heavy / ClutchPoints / Soaring Down South / Bleacher Report, May 1-22). Jake Fischer reports mutual interest in declining the option to negotiate a longer multi-year deal at a lower first-year number — giving Kuminga security and the Hawks a more flexible cap hit — and Soaring Down South notes the June 23 draft could let Atlanta buy time on the call. The other paths are exercising the one-year option as a tradable expiring or declining and letting him walk. Acquired in the deadline-day Porzingis trade, Kuminga averaged 14.9/5.1/2.2 across 16 Hawks regular-season games and 13.4 PPG in the Knicks series.",
      category: "trades",
    },
    {
      title: "Buddy Hield's $9.4M Decision: June 25 Full-Guarantee Trigger — Return Not Expected",
      detail:
        "Buddy Hield's $9.4M 2026-27 contract becomes fully guaranteed on June 25 — only $3M is currently protected (SI onsi cap tracker / SportsTalk ATL, Apr 28-May 18). Atlanta can let the full number trigger and keep it as a movable expiring, waive him before the date to save the difference, or include him in a pre-trigger trade. Reporting suggests Hield is not expected back given how little he played after the Porzingis-deal arrival — 71 games, 12 starts at 11.8/2.8/2.1 on 39.8% from three, then just 6 mpg in two first-round games. The trigger is 32 days out.",
      category: "trades",
    },
    {
      title: "Cam Johnson Still the Nuggets' 'Most Likely' Trade Candidate — Lakers, Warriors, Pacers the Cut",
      detail:
        "As of Sunday May 24, no trade has been executed (SI Nuggets '3 Realistic Cam Johnson Trade Suitors' / Basketnews / Yardbarker, May 18-22). Denver must shed salary to re-sign restricted free agent Peyton Watson, and CAMERON JOHNSON — a roughly $23M expiring who averaged 12.2 points in 54 games in his first Nuggets season — has been considered the most likely trade candidate 'for months.' SI Nuggets' three-suitor cut names the Los Angeles Lakers, Golden State Warriors and Indiana Pacers; the Warriors, fresh off a two-year extension for coach Steve Kerr, are framed as a live bidder. Atlanta, tied to Johnson by earlier May reporting, is more a roster-profile match — half-court shooting and 3-and-D, Atlanta's biggest R1 gap — than a named bidder.",
      category: "trades",
    },
    {
      title: "Jaylen Brown Trade Chatter: Mannix Expects a 'Fresh Batch' of Rumors, Hawks Among Suitors",
      detail:
        "The Jaylen Brown thread runs into the offseason: Celtics insider Chris Mannix expects a 'fresh batch' of Brown trade rumors and reports Boston and Atlanta previously held 'very brief' talks (98.5 The Sports Hub / Boston.com / Hoops Rumors / Yardbarker, May 10-22). The Hawks and Clippers have been floated as third teams that could absorb Brown's contract in a larger framework sending Giannis Antetokounmpo to Boston. Brown, a Marietta, GA native, posted a career-best statistical year while Jayson Tatum recovered from an Achilles tear, but Boston's first-round exit to Philadelphia has the Celtics weighing change. The hurdle is the money — Brown is owed roughly $183M over three years — and GM Onsi Saleh has said the Hawks are 'not one player away.'",
      category: "trades",
    },
    {
      title: "Draft Board: Post-Combine Consensus Splits Between a Guard and 7'3 Aday Mara at No. 8",
      detail:
        "Atlanta picks No. 8 after the May 10 lottery, and the post-combine mock roundup keeps two paths in play (NBA.com Consensus Mock Draft / SI onsi / The Ringer / CBS Sports, May 12-22). NBA.com's consensus has the Hawks taking either guard MIKEL BROWN JR. or 7'3 center ADAY MARA; ESPN's Jeremy Woo again slots Mara to Atlanta, citing rim protection against the size the Knicks exposed, while The Ringer prefers Houston guard KINGSTON FLEMINGS as a transition-game fit. Atlanta holds Nos. 8, 23 and 57; the draft runs June 23-24 at Barclays Center.",
      category: "general",
    },
    {
      title: "Free-Agency Targets: Hartenstein the Frontcourt Fix, Quentin Grimes a 'Dream' Backcourt Add",
      detail:
        "With its own free agents to sort, Atlanta's external board is taking shape (SI onsi 'Narrowing Down Potential Free Agent, Trade Targets' / Soaring Down South / Bleacher Report, May 5-22). Isaiah Hartenstein remains the cleanest fix for the frontcourt size and interior defense the Knicks exposed — but he only reaches the market if OKC declines his roughly $29M team option, and Atlanta could afford him only by not re-signing both McCollum and Kuminga. SI onsi also names Philadelphia's QUENTIN GRIMES — a 25-year-old two-way guard — as a 'dream' target to replace shot creation lost in the Trae Young trade, with Harrison Barnes and Tyus Jones among the cheaper veterans the Hawks are likely to monitor.",
      category: "trades",
    },
  ],
  sources: [
    "NBA.com",
    "ESPN",
    "Yahoo Sports",
    "FOX Sports",
    "NBC Sports",
    "AJC",
    "Atlanta News First",
    "Sports Illustrated (SI/onsi)",
    "SI Nuggets (onsi)",
    "The Athletic",
    "Heavy Sports",
    "Hoops Rumors",
    "HoopsHype",
    "Bleacher Report",
    "Yardbarker",
    "Soaring Down South",
    "Peachtree Hoops",
    "Roundtable",
    "ClutchPoints",
    "Boston.com",
    "98.5 The Sports Hub",
    "Basketnews",
    "SportsTalk ATL",
    "The Ringer",
    "CBS Sports",
    "wkyc",
    "RealGM",
    "Spotrac",
    "Basketball-Reference",
    "Basketball.com.au",
    "SportsLine",
    "BetMGM",
  ],
};
