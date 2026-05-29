// ─── Atlanta Hawks Player Data (2025-26 Season · Updated Friday May 29, 2026 — OFFSEASON · FRESH: WCF GOING SEVEN — San Antonio routed OKC 118-91 in Game 6 (Thu May 28 · Wembanyama 28-10-3, SGA 15 on 6-18); winner-take-all GAME 7 Sat May 30 · 8:30 PM ET · NBC/Peacock · Paycom Center, OKC · HAWKS FRONT OFFICE: ONSI SALEH PROMOTED TO PRESIDENT OF BASKETBALL OPERATIONS + LONG-TERM EXTENSION (Wed May 27 · ESPN / Washington Post / Yahoo Sports / SI onsi / Hoops Rumors) — the 2026 Executive-of-the-Year runner-up locks in after Atlanta denied Philadelphia permission to interview him for the 76ers' job · NBA FINALS ARE SET FOR EAST: Knicks swept Cleveland 4-0 (Brunson ECF MVP), first Finals trip since 1999, open on the road Wed June 3 · Hawks ledger steady: Johnson All-NBA Third Team, NAW MIP, Daniels All-Def 2nd Team · Quin Snyder 'massive' eight-figure extension still expected before Draft Night · 25 days to Draft Night Jun 23, 5 days to NBA Finals Game 1) ─
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
// guarantee Jun 25, Kuminga option Jun 29). FRONT OFFICE LOCKED IN: Onsi Saleh, runner-up to Brad Stevens
// in 2026 Executive of the Year voting, was PROMOTED FROM GM TO PRESIDENT OF BASKETBALL OPERATIONS on
// Wednesday May 27 and signed to a long-term extension (ESPN / Washington Post / Yahoo Sports / SI onsi /
// Hoops Rumors, May 27). The promotion came shortly after Atlanta formally DENIED Philadelphia permission
// to interview him for the Sixers' top job (Yardbarker / SI onsi / RealGM, May 21-22) — Saleh is locked
// in to run this offseason and beyond as the top basketball-ops voice.

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
    recentNotes: "FRIDAY MAY 29 — FRESH LEAD: PRESIDENT OF BASKETBALL OPS ONSI SALEH (promoted from GM and extended long-term Wed May 27 per ESPN / Washington Post / Yahoo / SI onsi / Hoops Rumors) now runs Johnson's offseason; the Executive-of-the-Year runner-up turned away Philadelphia to lock in the architecture around the franchise focal point. ALL-NBA THIRD TEAM (announced Sun May 24) holds as the franchise headline — Johnson's first All-NBA selection of his career and the first for ANY Hawk since Trae Young in 2022 (NBA.com / SI onsi 'Jalen Johnson's Rise To Stardom Continues' / Yahoo Sports / Soaring Down South). He joins Tyrese Maxey, Jamal Murray, Chet Holmgren and Jalen Duren on the Third Team; his 22.5/10.3/7.9 across 72 games made him just the fifth player in NBA history to average 22+/10+/7+ for a full season (after Oscar Robertson, Wilt Chamberlain, Jokic and Westbrook), and the first Hawk ever to rank top-20 league-wide in all three. The nod completes Atlanta's offseason awards sweep — NAW won Most Improved, Daniels made All-Defensive Second Team — and cements Johnson as the one Hawk firmly OFF the trade board as Jaylen Brown rumors swirl. AROUND THE LEAGUE: Knicks completed a 4-0 ECF sweep of Cleveland Mon May 25 (130-93 G4, Brunson ECF MVP), open the NBA Finals on the road Wed June 3; WCF going to GAME 7 Sat May 30 after San Antonio's 118-91 Game 6 rout (Wembanyama 28-10-3 blocks, SGA 15 on 6-18). On a $150M rookie extension through 2029-30 at ~$30M/yr per Spotrac — locked in; final R1 line settled at 19.5/8.3/5.5.",
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
    recentNotes: "FRIDAY MAY 29 — Daniels' offseason boss is now PRESIDENT OF BASKETBALL OPS ONSI SALEH (promoted from GM + extended long-term Wed May 27 per ESPN / Washington Post / Yahoo / SI onsi / Hoops Rumors). NBA ALL-DEFENSIVE SECOND TEAM nod (announced Fri May 22; NBA.com / AJC / Atlanta News First / Roundtable) is his second straight year on an All-Defense team after making FIRST TEAM in 24-25. He drew 9 first-place and 32 second-place votes from the 100-member global media panel (50 points, 10th in overall voting) and tied for the NBA lead in steals per game at 2.0 with OKC's Cason Wallace; Atlanta posted a top-10 defensive rating for the first time in nearly a decade with Daniels as the primary point-of-attack defender. The Second-Team finish — down from First Team a year ago — tracks a hard offensive year: his three-point shooting cratered to 18.8% (22-of-117), and Daniels has spoken candidly about getting into a 'dark place' mentally, planning an LA summer to rebuild the jumper and 'get stronger.' Victor Wembanyama was the unanimous DPOY and lone unanimous All-Defense 1st-teamer; Daniels was not a 2026 DPOY finalist after finishing runner-up in 25. AROUND THE LEAGUE: Knicks completed a 4-0 ECF sweep of Cleveland Mon May 25, open the NBA Finals Wed June 3 on the road; WCF going to GAME 7 Sat May 30 after San Antonio's 118-91 Game 6 rout (Wembanyama 28-10-3). Regular-season line of 11.9/6.8/5.9 on 2.0 stl across 80 games (76 starts) is the locked baseline; five-year, $125M rookie extension kicks in next season — not trade-eligible until July 1, 2026.",
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
    recentNotes: "FRIDAY MAY 29 (offseason — FRESH LEAD: ONSI SALEH PROMOTED TO PRESIDENT OF BASKETBALL OPERATIONS + LONG-TERM EXTENSION Wed May 27 per ESPN / Washington Post / Yahoo / SI onsi / Hoops Rumors; WCF going to GAME 7 Sat May 30 after SA's 118-91 Game 6 rout; Knicks open the East-set Finals on the road Wed Jun 3 at the WCF winner): MIP trophy still the through-line — 35 days past the Apr 24 Kia Most Improved Player ceremony where NAW took 66 of 100 first-place votes ahead of finalists Deni Avdija and Jalen Duren (NBA.com / Washington Post / Yahoo Sports / Hoops Rumors / Atlanta News First). Career-best 20.8/3.4/3.7 on 39.9% from three (251 makes — Hawks single-season record, 4th in the NBA); 11.4-PPG jump from 24-25 is the third-largest single-season scoring increase in 25 years. NAW is the second consecutive Hawks player and third overall to win MIP since the award debuted in 1985-86 — FIRST FRANCHISE EVER with back-to-back winners (Daniels won 24-25). R1 scoring settled at 13.4 PPG; the only ATL perimeter player above 33% from three across the full six. NAW was also drafted by Bryson Graham in New Orleans — Graham now runs the Bulls' front office (NBA-high $58M cap room per Chicago Sun-Times). Locked in long-term on the four-year, $62M deal he signed last summer.",
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
    recentNotes: "FRIDAY MAY 29 (offseason — PRESIDENT OF BASKETBALL OPS ONSI SALEH promoted + extended Wed May 27 per ESPN / Washington Post / Yahoo / SI onsi / Hoops Rumors; WCF going to GAME 7 Sat May 30 after SA's 118-91 Game 6 rout; Finals open Wed Jun 3 on the road for the Knicks) — Headline UFA, and Saleh is now the executive directly negotiating the re-up. SI onsi 'Atlanta Is Expected to Bring Back McCollum Next Season' / Soaring Down South / Hoops Rumors / HoopsHype / Bleacher Report / Yahoo Sports 'Hawks plan to bring back CJ McCollum in free agency' (Apr 28-May 23) align: Atlanta plans to bring him back on a multi-year deal, with offers expected 'slightly above the mid-level exception' — most execs pegging 2yr/$35-40M as the fair range, though ESPN's Bobby Marks has floated a 3yr/$115.9M extension as an outside ceiling. HoopsHype confirmed mutual interest May 23. McCollum 'likely will have other suitors' as he hits UFA per Bleacher Report May 14. Chicago's NBA-high $58M cap room under ex-ATL EVP Bryson Graham (Sun-Times, May 5) is the named external risk — they have the cleanest single-team path to top guards at the $30-40M/yr tier. McCollum publicly confirmed a 'productive conversation' with the front office (Heavy, May 4). Hollinger's Athletic preview flags age (34, turning 35) as the structural risk. UFA market opens June 30, 6 PM ET — 33 days out. Final regular-season line: 18.7 / 3.1 / 4.1 on 45.2/38.1/82.7 across 41 Hawks games post-Jan 8 trade (25 starts), then 19.2 PPG / 49% FG / 31% 3P across the six R1 games.",
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
    recentNotes: "FRIDAY MAY 29 (offseason — PRESIDENT OF BASKETBALL OPS ONSI SALEH promoted + extended Wed May 27 per ESPN / Washington Post / Yahoo / SI onsi / Hoops Rumors; WCF going to GAME 7 Sat May 30 after SA's 118-91 Game 6 rout; Knicks open the East-set Finals on the road Wed Jun 3) — Career-best 25-26 season locks in his role as the post-Trae starting C: 15.2/7.6/3.1 on 48.0% FG with 1.1 blk and 1.1 stl across 74 games and 31 mpg (basketball-reference / RotoWire / Spotrac confirmed May 11). Two years left on his 4yr/$62M extension at $16.1M in 26-27. Atlanta has resisted prior trade interest (Pacers reportedly called pre-deadline per Yahoo) and Hollinger's preview treats the C role as locked. Yardbarker / SI onsi / Soaring Down South (May 5-22) re-cite Isaiah Hartenstein as the top FA frontcourt target IF Atlanta can clear room — would pair WITH Okongwu, not replace him. STRUCTURAL CATCH still active: OKC holds a $28.5M team option on Hartenstein for 26-27 and may decline because of cap pressure from Jalen Williams / Chet Holmgren extensions kicking in (Thunderous Intentions / Yardbarker, May 11). The WCF series tonight is directly relevant — a deep OKC run only tightens their cap math around Hartenstein's option. Six-game R1 line was ~11.3/5.7/1.7 played through right-knee inflammation diagnosed after Game 1 — KAT's two triple-doubles were the series-defining mismatch ATL never solved.",
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
    recentNotes: "FRIDAY MAY 29 (offseason — PRESIDENT OF BASKETBALL OPS ONSI SALEH promoted + extended Wed May 27 per ESPN / Washington Post / Yahoo / SI onsi / Hoops Rumors; WCF going to GAME 7 Sat May 30 after San Antonio's 118-91 Game 6 rout (Wembanyama 28-10-3); Finals open Wed Jun 3) — Offseason trade-watch player No. 1, and now SALEH is the executive making the call. Risacher's future is the single biggest cap-and-rotation lever the new POBO holds. HOLLINGER (The Athletic via Hoops Wire 'Hawks could look to trade Zaccharie Risacher' / Lindys / Roundtable May 17-23): Atlanta moving Risacher 'can't be ruled out' after he lost his starting job post-All-Star and fell out of the rotation entirely in April. Risacher's uncertain future could let Atlanta 'package him alongside the No. 8 pick and additional draft compensation' to trade up the board on draft night. Wings/bigs on Atlanta's No. 8 board (Tre Johnson, Nate Ament, Koa Peat, Lendeborg, Mikel Brown Jr., Kingston Flemings, Aday Mara, Dailyn Swain per CBS / SI onsi / Last Word May 12-13) — exactly the names competing for the floor next year — wrapped their live-tape windows on May 14. Marc Stein reports the Hawks are 'open to trading Risacher if the right offer comes along' (Basketnews / Roundtable May 11). Hollinger's Athletic preview still tags Risacher (and Kispert) as the likeliest summer trade chip. Structural read: $13.7M next season then a $17.8M team option for 27-28. Sophomore line: 9.6/3.8/1.1 on 44.6% FG / 37.2% 3P across 66 games — regression from his 12.6 PPG rookie year as usage dropped from 21.6% to 17.7%. R1 floor time was just 2:30 across six games — one Game 1 cameo then five straight DNP-CDs.",
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
    recentNotes: "FRIDAY MAY 29 (offseason — PRESIDENT OF BASKETBALL OPS ONSI SALEH promoted + extended Wed May 27 per ESPN / Washington Post / Yahoo / SI onsi / Hoops Rumors; WCF going to GAME 7 Sat May 30 after San Antonio's 118-91 Game 6 rout (Wembanyama 28-10-3); Finals open Wed Jun 3) — Biggest cap decision of the offseason, now Saleh's first major call as POBO. DEADLINE JUNE 29 (32 days out) on the $24.3M 26-27 team option (Heavy / ClutchPoints / ESPN's Bobby Marks, Apr 30-May 24). Most recent reporting (Yahoo Sports 'Hawks face key decision on Jonathan Kuminga's future', El-Balad, ClutchPoints 'Insider believes Kuminga will return', May 11) is the mixed-signal cluster: Jake Fischer holds the line on mutual interest in DECLINING the option for a longer-term deal, but Brett Siegel reports Atlanta could exercise the option to preserve a tradable expiring for the in-season market. NEW LAYER (May 12-13 carry-through): SI onsi report linking Atlanta to Austin Reaves AND fresh May 13 chatter linking ATL to Denver's Cameron Johnson (HoopsHype rumors) both make the option-decline more likely — declining Kuminga is the cleanest single move to open cap room for either lane per Larry Brown Sports / SportsTalkATL / Soaring Down South. Hollinger had already endorsed the decline-and-extend path. Without a deal he could walk for nothing. Six-game R1 line landed around 13.4 PPG with a three-point shot that never recovered (sub-30% over the last four). Regular-season Hawks line of 14.9/5.1/2.2 in 16 games left both a clear ceiling (Game 3's 21-off-bench Q1 hero arc) and a clear coaching project for the summer.",
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
    recentNotes: "FRIDAY MAY 29 (offseason — PRESIDENT OF BASKETBALL OPS ONSI SALEH promoted + extended Wed May 27 per ESPN / Washington Post / Yahoo / SI onsi / Hoops Rumors; WCF going to GAME 7 Sat May 30 after San Antonio's 118-91 Game 6 rout (Wembanyama 28-10-3); Finals open Wed Jun 3) — Calendar marker: $9.4M 26-27 contract has just $3M guaranteed UNTIL JUNE 25 — 28 days out — when it triggers full guarantee (SI onsi cap tracker / BlueManHoop, Apr 28-May 18). Three Hawks paths Saleh now owns: trigger and use as movable expiring, waive before the trigger and save $6.4M, or include in a pre-trigger trade. Hoops Rumors lists Hield as a likely offseason discussion piece, especially as salary filler in any Jaylen Brown framework that resurfaced over the weekend. Regular-season line of 11.8/2.8/2.1 on 39.8% from three across 71 games (12 starts), but R1 role was largely abandoned (6 mpg in 2 games). Decision sequence: Finals G1 Jun 3 → Draft Night Jun 23 → Hield's June 25 trigger → Kuminga's June 29 option → McCollum FA opens June 30.",
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
    recentNotes: "FRIDAY MAY 29 (offseason — PRESIDENT OF BASKETBALL OPS ONSI SALEH promoted + extended Wed May 27 per ESPN / Washington Post / Yahoo / SI onsi / Hoops Rumors; WCF going to GAME 7 Sat May 30 after San Antonio's 118-91 Game 6 rout (Wembanyama 28-10-3); Finals open Wed Jun 3) — Likeliest summer trade chip alongside Risacher, and Saleh as new POBO owns the call. Hollinger explicitly names Kispert (with Risacher) as the likeliest summer trade chip; cap notes show $14.6M next season then a $17.4M cap hit in 27-28. Salary-matching utility in any Jaylen Brown framework is real — the No. 8 pick plus Kispert plus Hield's $9.4M would clear the $57M Brown number per Hoops Rumors / Boston.com / Larry Brown Sports (May 10-22). Regular season line of 9.6/2.4/1.3 on 40.2% from three in 40 games (8 starts) was the post-trade Hawks portion.",
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
    recentNotes: "FRIDAY MAY 29 (offseason — PRESIDENT OF BASKETBALL OPS ONSI SALEH promoted + extended Wed May 27 per ESPN / Washington Post / Yahoo / SI onsi / Hoops Rumors; WCF going to GAME 7 Sat May 30 after San Antonio's 118-91 Game 6 rout (Wembanyama 28-10-3); Finals open Wed Jun 3) — UFA whose renewal price came down after Round 1. Six-game R1 line: ~2.8 PPG on a series-long shooting slump. Regular season was a steady veteran backup role (7.4/1.8/2.9) over 58 games but the playoff sample raises questions on terms. Hoops Rumors offseason brief tags him as a role-player filler the new POBO can shop on minimums or replace via the MLE; UFA market opens June 30, 6 PM ET — 33 days out.",
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
    recentNotes: "FRIDAY MAY 29 (offseason — PRESIDENT OF BASKETBALL OPS ONSI SALEH promoted + extended Wed May 27 per ESPN / Washington Post / Yahoo / SI onsi / Hoops Rumors; WCF going to GAME 7 Sat May 30 after San Antonio's 118-91 Game 6 rout (Wembanyama 28-10-3); Finals open Wed Jun 3) — Rookie offseason story, and Saleh's development bet: regular-season line via SI onsi / Peachtree Hoops / Soaring Down South was 44 GP / 5.2 PPG / 2.2 RPG / 0.6 APG on 53.8% FG and 38.7% from three in 11.4 mpg (leads all rookies in 3P% at min 10 attempts). Made his NBA debut Oct 24, 2025 after Atlanta traded back to draft him at No. 23 out of Georgia. Multiple G League assignments and rotation gaps through the year — the development arc the now-POBO referenced ('best version of ourselves is yet to come') runs directly through this summer's Summer League and a bigger third-string spell-PF role.",
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
    recentNotes: "FRIDAY MAY 29 (offseason — PRESIDENT OF BASKETBALL OPS ONSI SALEH promoted + extended Wed May 27 per ESPN / Washington Post / Yahoo / SI onsi / Hoops Rumors; WCF going to GAME 7 Sat May 30 after San Antonio's 118-91 Game 6 rout (Wembanyama 28-10-3); Finals open Wed Jun 3) — Missed the entire first round of the playoffs after the Apr 1 right high-ankle sprain (Heavy/CBS, Apr 24). UFA per Bleacher Report cap notes. Offseason story is whether the new POBO re-signs the third center or pivots to the lottery picks (No. 8 secured May 10) or to Hartenstein-tier FA money for help up front; the Hartenstein chase (per Soaring Down South 'top free-agency frontcourt target', May 11) directly competes with re-signing Landale.",
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
  seriesContext: "FRIDAY MAY 29 — FRESH: THE WCF IS GOING SEVEN. San Antonio routed Oklahoma City 118-91 in Game 6 on Thu May 28 (ESPN / NBC Sports / NBA.com / Yahoo / FOX Sports) — WEMBANYAMA 28-10-3 blocks, Harper 18, Castle 17; a 32-13 third quarter blew it open and SGA was held to 15 on 6-of-18. WINNER-TAKE-ALL GAME 7 is SATURDAY MAY 30 · 8:30 PM ET · NBC/Peacock · Paycom Center, OKC; Jalen Williams (left hamstring) and Ajay Mitchell (calf) remain out for OKC. The winner opens the NBA Finals ON THE ROAD vs the NEW YORK KNICKS on WED JUNE 3 (ABC) — the same Knicks that ended Atlanta's season in six on Apr 30 (historic 140-89 Game 6); Brunson was ECF MVP after New York's 4-0 sweep of Cleveland. HAWKS FRONT OFFICE: ONSI SALEH was promoted from GM to PRESIDENT OF BASKETBALL OPERATIONS on a long-term extension Wed May 27 (ESPN / Washington Post / Yahoo / SI onsi / Hoops Rumors / TSN) — the 2026 Executive-of-the-Year runner-up locks in as Atlanta's lead architect after the Hawks denied Philadelphia permission to interview him for the 76ers' job. The 'massive,' eight-figure QUIN SNYDER extension is still expected to land between now and Draft Night. AWARDS: JALEN JOHNSON All-NBA Third Team (franchise headline), NAW Most Improved, DANIELS All-Def 2nd. CJ McCOLLUM retention is the free-agency priority (HoopsHype confirmed mutual interest May 23; ~2yr/$35-40M consensus, Bobby Marks floating a 3yr/$115.9M ceiling). ISAIAH HARTENSTEIN is the top frontcourt target — only available if OKC declines his ~$29M option — and Philadelphia's QUENTIN GRIMES a 'dream' backcourt add at the MLE. JAYLEN BROWN (All-NBA 2nd) and CAMERON JOHNSON trade threads remain open; RISACHER and KISPERT the likeliest summer trade chips per Hollinger. DRAFT BOARD: post-combine mocks converge on a guard at No. 8 — MIKEL BROWN JR. or KINGSTON FLEMINGS — with 7'3 ADAY MARA the size alternative. KEY OFFSEASON DATES: NBA Finals Game 1 June 3 (5 days) · Draft Night June 23 (25 days) · Hield $9.4M full-guarantee trigger June 25 (27 days) · Kuminga $24.3M team-option call by June 29 (31 days) · McCollum UFA market opens June 30 6 PM ET (32 days) · Free agency moratorium July 6.",
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
  generatedAt: "2026-05-29T08:16:00Z",
  summary:
    "OFFSEASON — Friday May 29. THE FRESH NEWS: the WESTERN CONFERENCE FINALS ARE GOING SEVEN. San Antonio routed Oklahoma City 118-91 in Game 6 on Thursday May 28 (ESPN / NBC Sports / NBA.com / Yahoo / FOX Sports, May 28) — Victor Wembanyama posted a game-high 28-10-3 blocks, Dylan Harper 18 and Stephon Castle 17, while a 32-13 third quarter blew it open and SGA was held to 15 on 6-of-18. The winner-take-all Game 7 is Saturday May 30 at 8:30 PM ET on NBC/Peacock from OKC, with the winner traveling to face the New York Knicks (4-0 ECF sweep of Cleveland, Brunson ECF MVP) to open the Finals on the road Wednesday June 3. HAWKS FRONT OFFICE: the Saleh-to-President-of-Basketball-Operations promotion (Wed May 27, long-term extension) holds as the franchise headline, and reporting still points to a 'massive,' eight-figure QUIN SNYDER extension landing before Draft Night. AWARDS SWEEP COMPLETE: Jalen Johnson All-NBA Third Team, Nickeil Alexander-Walker Most Improved, Dyson Daniels All-Defensive Second Team. The June cap calendar tightens — Finals Game 1 June 3 (5 days), Draft Night June 23 (25 days), Hield's $9.4M full-guarantee trigger June 25 (27 days), Kuminga's $24.3M team-option call by June 29 (31 days), and the McCollum-led free-agency market opening June 30 6 PM ET (32 days). McCollum retention stays the priority (2yr/$35-40M the consensus range); the trade board still runs through JAYLEN BROWN, Cameron Johnson, Risacher and Kispert — while Isaiah Hartenstein (only if OKC declines his ~$29M option) and Sixers UFA Quentin Grimes headline the external targets.",
  keyTopics: [
    {
      title: "Onsi Saleh Promoted to President of Basketball Operations + Long-Term Extension",
      detail:
        "Wednesday May 27: the Atlanta Hawks promoted general manager ONSI SALEH to President of Basketball Operations and signed him to a long-term contract extension (ESPN / Washington Post / Yahoo Sports / SI onsi / Hoops Rumors / TSN / 92-9 The Game / RealGM, May 27). Saleh, who finished as the 2026 Executive-of-the-Year runner-up to Boston's Brad Stevens, takes over a basketball-ops job Atlanta had held vacant since handing him the GM keys in the summer of 2025. The promotion came just days after Atlanta formally DENIED Philadelphia permission to interview him for the 76ers' top job vacated by Daryl Morey (Yardbarker / SI onsi / RealGM, May 21-22). The move secures Saleh's voice as the lead architect heading into the most consequential offseason of the post-Trae Young era — Snyder extension, McCollum free agency, the No. 8 pick, and the Hield/Kuminga cap gates all run through him.",
      category: "general",
    },
    {
      title: "WCF Going Seven: Spurs Rout Thunder 118-91 in Game 6, Force Winner-Take-All Game 7 Saturday",
      detail:
        "Thursday May 28 at San Antonio's Frost Bank Center: the SAN ANTONIO SPURS led wire-to-wire and routed Oklahoma City 118-91 to force a winner-take-all Game 7 in the Western Conference Finals (ESPN / NBC Sports / NBA.com / Yahoo Sports / FOX Sports, May 28). VICTOR WEMBANYAMA posted a game-high 28 points, 10 rebounds and 3 blocks, with rookies Dylan Harper (18) and Stephon Castle (17) backing him; a 32-13 third quarter was the decisive stretch. Shai Gilgeous-Alexander was held to 15 on 6-of-18 shooting as the series knotted 3-3. Game 7 is SATURDAY MAY 30 at 8:30 PM ET on NBC/Peacock from OKC's Paycom Center — the winner travels to Madison Square Garden to open the 2026 NBA Finals on the road against the Knicks on Wednesday June 3. OKC remained without Jalen Williams (left hamstring) and Ajay Mitchell (calf).",
      category: "games",
    },
    {
      title: "Knicks Sweep Cavaliers 4-0, Reach First NBA Finals Since 1999 — Brunson Named ECF MVP",
      detail:
        "Monday May 25 at Cleveland's Rocket Arena: the NEW YORK KNICKS completed a four-game sweep of the top-seeded Cavaliers with a 130-93 rout, advancing to the NBA Finals for the first time since 1999 (NBA.com / ESPN / Olympics.com / Yahoo Sports / CBS Sports, May 25). JALEN BRUNSON was voted Eastern Conference Finals MVP; the Game 4 box was led by KARL-ANTHONY TOWNS (19-14), OG ANUNOBY 17, LANDRY SHAMET 16 off the bench, with Mikal Bridges and Brunson contributing 15 apiece. The Knicks open the 2026 NBA Finals ON THE ROAD on WEDNESDAY JUNE 3 against the Western Conference winner, with home games at Madison Square Garden beginning Monday June 8. ATL angle is direct — this is the same Knicks team that ended Atlanta's season in six on Apr 30, including the historic 140-89 Game 6.",
      category: "games",
    },
    {
      title: "Jalen Johnson Named All-NBA Third Team — First Career Selection, First Hawk Since Trae Young",
      detail:
        "Sunday May 24: JALEN JOHNSON was voted to the 2025-26 Kia All-NBA Third Team, the first All-NBA honor of his career and the first for any Atlanta Hawk since Trae Young in 2022 (NBA.com / SI onsi 'Jalen Johnson's Rise To Stardom Continues' / Yahoo Sports / Soaring Down South, May 24-25). Johnson joins Tyrese Maxey, Jamal Murray, Chet Holmgren and Jalen Duren on the Third Team. His 22.5/10.3/7.9 across 72 games made him just the fifth player in NBA history to average 22-plus points, 10-plus rebounds and 7-plus assists for a full season — after Oscar Robertson, Wilt Chamberlain, Nikola Jokic and Russell Westbrook — and the first Hawk ever to rank top-20 league-wide in all three. The nod completes an offseason awards sweep for Atlanta that already produced Nickeil Alexander-Walker's Most Improved Player trophy and Dyson Daniels' All-Defensive Second Team selection. Johnson is locked in long-term on the five-year, $150M rookie extension that runs through 2029-30.",
      category: "general",
    },
    {
      title: "Snyder Extension Still Expected Before the Draft — A 'Massive,' Eight-Figure Deal",
      detail:
        "Reporting continues to point to a 'massive' contract extension for head coach QUIN SNYDER, one expected to make him one of the NBA's highest-paid coaches at an eight-figure annual salary (Yardbarker 'Hawks extension with Quin Snyder looming' / SportsTalk ATL / Peachtree Hoops / Hoops Rumors / Hoopshype, May 21-24). Marc Stein previously reported extension talks were expected to begin once Atlanta's season ended; Jake Fischer reports 'strong' front-office support; and Hawks CEO Steve Koonin told 680 The Fan, 'I think Quin is going to be part of our team for a very, very long time.' Snyder enters the final year of his deal in 2026-27. The promotion of Onsi Saleh on Wednesday is widely read as clearing the runway: Saleh is the executive negotiating the extension, and a new Snyder deal is expected to be finalized between now and the June 23 draft.",
      category: "general",
    },
    {
      title: "CJ McCollum Free Agency: Hawks Confirm They Want Him Back — 2yr/$35-40M the Fair Range",
      detail:
        "Atlanta's headline unrestricted free agent. HoopsHype reported May 23 that the Hawks want to re-sign CJ McCollum, reinforcing earlier Bleacher Report and Yahoo Sports reporting of mutual interest; McCollum confirmed a 'productive conversation' with the front office the day after the season ended (Bleacher Report / HoopsHype / Heavy / Soaring Down South, Apr 30-May 23). John Hollinger reports most executives peg the fair range at one or two years slightly above the mid-level exception — roughly 2yr/$35-40M — while ESPN's Bobby Marks has floated a three-year, $115.9M extension as an outside ceiling. McCollum, who turns 35 in September, averaged 18.7/3.1/4.1 in 41 Hawks games and 19.2 PPG in the playoffs; cap-room teams like Chicago or Brooklyn are the named risk. The UFA market opens June 30 at 6 PM ET — 33 days out.",
      category: "trades",
    },
    {
      title: "Kuminga's $24.3M Team Option — June 29 Decision, Decline-and-Extend the Expected Path",
      detail:
        "Atlanta's biggest cap question stays Jonathan Kuminga, with a June 29 deadline on his $24.3M 2026-27 team option — 32 days out (Heavy / Soaring Down South / Yahoo Sports / Fadeaway World, May 1-24). There is mutual interest in declining the option to negotiate a longer multi-year deal at a lower first-year number — giving Kuminga security and the Hawks a more flexible cap hit, the path most analysts endorse since the 23-year-old is not extension-eligible. Soaring Down South notes the June 23 draft could let Atlanta buy time on the call. The alternatives are exercising the one-year option as a tradable expiring or declining and letting him walk. Kuminga averaged 14.9/5.1/2.2 across 16 Hawks regular-season games and 13.4 PPG in the Knicks series.",
      category: "trades",
    },
    {
      title: "Buddy Hield's $9.4M Decision: June 25 Full-Guarantee Trigger — Return Not Expected",
      detail:
        "Buddy Hield's $9.4M 2026-27 contract becomes fully guaranteed on June 25 — only $3M is currently protected (SI onsi cap tracker / SportsTalk ATL, Apr 28-May 18). The trigger is 28 days out. Atlanta can let the full number trigger and keep it as a movable expiring, waive him before the date to save the difference, or include him in a pre-trigger trade. Reporting suggests Hield is not expected back given how little he played after arriving in the Porzingis deal — 71 games, 12 starts at 11.8/2.8/2.1 on 39.8% from three, then just 6 mpg in two first-round games.",
      category: "trades",
    },
    {
      title: "Jaylen Brown Trade Chatter Persists — and He Just Made All-NBA Second Team",
      detail:
        "The Jaylen Brown thread carries into the offseason: Celtics insider Chris Mannix reports Boston and Atlanta held 'very brief,' exploratory talks last summer and the Hawks are a team he could see re-engaging after their late-season surge (Hoops Rumors / Boston.com / 98.5 The Sports Hub / Hoops Wire / Larry Brown Sports, May 10-24). Hawks, Rockets and Trail Blazers have all been floated as third teams that could absorb Brown's contract in a larger framework sending Giannis Antetokounmpo to Boston. Brown, a Marietta, GA native, was named All-NBA Second Team on Sunday May 24 after a career-best statistical year — which only raises his price. The hurdle remains the money: Brown is owed roughly $53.1M next season, and Atlanta was previously 'leery' about taking it on with a still-developing roster.",
      category: "trades",
    },
    {
      title: "Zaccharie Risacher Trade Chatter: Hollinger Says a Move 'Can't Be Ruled Out'",
      detail:
        "John Hollinger reports that trading former No. 1 overall pick ZACCHARIE RISACHER 'can't be ruled out,' though he stresses Atlanta's first goal should be keeping the 21-year-old and getting him back on track (Hoops Wire / Heavy / Roundtable / SI onsi, May 17-23). Risacher lost his starting job after the All-Star break and fell out of the rotation entirely in April, averaging 9.6 points on 45% shooting across 66 games — a regression from his 12.6 rookie year. If a move happens, the likeliest scenario is Risacher folded into a larger deal, potentially packaged with the No. 8 pick to move up the draft board. He is owed $13.7M next season with a $17.8M team option for 2027-28; Hollinger tags Risacher and Corey Kispert as Atlanta's likeliest summer trade chips.",
      category: "trades",
    },
    {
      title: "Draft Board: Hawks' No. 8 Pick Narrows to a Guard — Mikel Brown Jr., Kingston Flemings, Aday Mara",
      detail:
        "Atlanta picks No. 8 after the May 10 lottery, and post-combine mocks have converged on the backcourt (NBA.com Consensus Mock Draft / CBS Sports / SI onsi / The Ringer / Roundtable, May 12-27). CBS Sports' latest projects Louisville guard MIKEL BROWN JR. to the Hawks; NBA.com's consensus pairs Brown Jr. with 7'3 center ADAY MARA as the two names in play, while The Ringer prefers Houston guard KINGSTON FLEMINGS as a transition-game fit and the best defender of the guard trio. Roundtable's latest names Flemings the best choice if both are on the board. Atlanta holds Nos. 8, 23 and 57; the draft runs June 23-24 at Barclays Center — 26 days out.",
      category: "general",
    },
    {
      title: "Free-Agency Targets: Hartenstein the Frontcourt Fix, Quentin Grimes a 'Dream' Backcourt Add",
      detail:
        "Atlanta's external board is taking shape around the size and interior defense the Knicks exposed (SI onsi 'Narrowing Down Potential Free Agent, Trade Targets' / Yardbarker / Soaring Down South / Bleacher Report, May 5-22). Isaiah Hartenstein remains the cleanest frontcourt fix and would pair with — not replace — Onyeka Okongwu, but he only reaches the market if Oklahoma City declines his roughly $29M team option, and Atlanta could afford him only by not re-signing both McCollum and Kuminga. SI onsi names Philadelphia's QUENTIN GRIMES — a 25-year-old two-way guard — as a 'dream' target to replace the shot creation lost in the Trae Young trade, with Harrison Barnes and Tyus Jones among the cheaper veterans the Hawks are likely to monitor.",
      category: "trades",
    },
  ],
  sources: [
    "NBA.com",
    "ESPN",
    "Yahoo Sports",
    "Bleacher Report",
    "NBC Sports",
    "AJC",
    "Atlanta News First",
    "Sports Illustrated (SI/onsi)",
    "The Athletic",
    "Heavy Sports",
    "Hoops Rumors",
    "Hoops Wire",
    "HoopsHype",
    "Yardbarker",
    "Soaring Down South",
    "Peachtree Hoops",
    "Roundtable",
    "SportsTalk ATL",
    "The Ringer",
    "CBS Sports",
    "98.5 The Sports Hub",
    "Boston.com",
    "KSAT",
    "Fadeaway World",
    "Basketball-Reference",
    "Spotrac",
  ],
};

// ─── Issue metadata (drives datelines, cover star, masthead) ───────────────
// Update `date` daily; everything else flows from KEY_DATES + NEWS_DIGEST.
export const ISSUE = {
  date: "2026-05-29",                              // YYYY-MM-DD — single source of truth
  volume: 26,                                       // VOL XXVI
  number: 8,                                        // Issue number (offseason cadence)
  dateline: "ATLANTA · MAY 29, 2026",               // Pre-formatted for display
  mastheadLine: "VOL XXVI · ISSUE NO. 08 · MAY 2026 · ATL · USA",
  railLabel: "ISSUE 08 · MAY 29",
  coverStarId: 1,                                   // PLAYERS[id] for the cover portrait
  coverRibbon: "EXCLUSIVE · COVER STAR · JALEN JOHNSON",
  coverStatusKicker: "OFFSEASON · DAY 29",          // top-right corner of cover
  coverStatusLine: "DRAFT IN {DAYS:draft} · FA IN {DAYS:fa-open}", // {DAYS:id} resolves from KEY_DATES
  backTagline: "Next issue: after Draft Night spends the lottery and the FA market opens.",
};

// ─── Cover TOC (table of contents on the cover) ────────────────────────────
// Each entry points at a real section id; rotates as story rotates.
export const COVER_TOC = [
  { kicker: "FEATURE",  page: 18, sectionId: "stry", title: "Saleh elevated — POBO with a mandate" },
  { kicker: "CALENDAR", page: 12, sectionId: "cal",  title: "The June gauntlet — six dates, one offseason" },
  { kicker: "BOARD",    page: 28, sectionId: "drft", title: "Eight on the clock — the guard list" },
  { kicker: "PATHS",    page: 50, sectionId: "path", title: "Four offseason scenarios, one editor's pick" },
  { kicker: "WIRE",     page: 68, sectionId: "wire", title: "Brown chatter, Cameron Johnson thread, Risacher available" },
];

// ─── Editor's letter ───────────────────────────────────────────────────────
// `headline` is a token array — strings render as ivory, { red: "x" } renders red.
export const EDITORS_LETTER = {
  headline: ["The work doesn't end at ", { red: "89" }, "."],
  body: "Forty-six wins. A Southeast banner. Back-to-back Most Improved Players. An All-NBA Third Team nod for Jalen Johnson — the franchise's first since Trae Young. An All-Defensive Second Team finish for Dyson Daniels. And then — eighty-nine. The final score of the worst night, set against the loudest spring this franchise has produced in a decade. This issue holds both at once: the dossier on what just happened, and the road map for the six June dates that decide what happens next. Saleh in the chair. Snyder extended. McCollum on the table. Eight on the clock.",
  byline: "— THE EDITORS",
};

// ─── Hardware (awards / honors) ────────────────────────────────────────────
// Drop the early-May framing — Johnson's All-NBA Third Team is the lede now.
export const HARDWARE = [
  { kicker: "2025-26 NBA", title: "ALL-NBA THIRD TEAM", who: "Jalen Johnson",
    detail: "First All-NBA selection of his career · first Hawk since Trae Young in 2022 · 5th ever 22-10-7 season",
    tone: "volt" },
  { kicker: "2025-26 NBA", title: "MOST IMPROVED PLAYER", who: "Nickeil Alexander-Walker",
    detail: "Back-to-back MIPs for the franchise (Daniels won 24-25) · 251 threes — franchise record",
    tone: "ivory" },
  { kicker: "2025-26 NBA", title: "ALL-DEFENSIVE 2ND TEAM", who: "Dyson Daniels",
    detail: "Second straight All-Def nod · tied for NBA lead in steals at 2.0",
    tone: "red" },
  { kicker: "SOUTHEAST",   title: "DIVISION CHAMPS", who: "Atlanta Hawks · 46-36",
    detail: "First SE crown since 2014-15 · 6-seed in East",
    tone: "ivory" },
];

// ─── Numbers (hero tiles + ledger rows) ────────────────────────────────────
// Date-driven rows (DAYS TO X) are computed at render time from KEY_DATES.
export const NUMBERS_HERO = [
  { k: "RECORD",  v: "46–36", tone: "ivory" },
  { k: "SEED·E",  v: "6",     tone: "red" },
  { k: "MIPs",    v: "2",     tone: "volt", sub: "back to back" },
];
export const NUMBERS_LEDGER = [
  ["MOST 3PM, SEASON",      "251 · Alexander-Walker", "franchise record"],
  ["JJ STAT LINE",          "22.5 / 10.3 / 7.9",      "5th ever 22-10-7"],
  ["DANIELS STEALS/G",      "2.0",                    "tied NBA lead"],
  ["TEAM 3P%",              "38.1%",                  "3rd league-wide"],
  ["OFFENSIVE RATING",      "118.4",                  "7th league-wide"],
  ["DEFENSIVE RATING",      "114.2",                  "14th"],
  ["R1 SCORING DIFF",       "-15.3",                  "four losses by 16+"],
  ["GAME 6 MARGIN",         "-51",                    "T-6th largest in NBA history"],
  ["HALFTIME DEFICIT, G6",  "-47",                    "largest in playoff history"],
  ["LOTTERY PICK",          "No. 8",                  "via NOP — most-likely outcome"],
];

// ─── Key dates (the offseason spine) ───────────────────────────────────────
// Drives Calendar viz AND date-derived rows in Numbers AND ISSUE.coverStatusLine.
// kind:    EVENT (volt) | DEADLINE (red) | DECISION (ivory)
// primary: render larger on the timeline
export const KEY_DATES = [
  { id: "wcf-g7",      date: "2026-05-30",
    label: "WCF Game 7",          short: "WCF G7",      kind: "EVENT",
    hawksAngle: "OKC/SAS winner decides Hartenstein option pressure (OKC declines = ATL has a path)" },
  { id: "finals-g1",   date: "2026-06-03",
    label: "NBA Finals Game 1",   short: "FINALS G1",   kind: "EVENT",
    hawksAngle: "Knicks open on road — same team that ended ATL's season 4-2 in R1" },
  { id: "draft",       date: "2026-06-23",
    label: "Draft Night",         short: "DRAFT",       kind: "EVENT",      primary: true,
    hawksAngle: "Hawks hold #8 (via NOP), #23, #57. Guard at #8 the post-combine consensus." },
  { id: "hield-trig",  date: "2026-06-25",
    label: "Hield $9.4M trigger", short: "HIELD",       kind: "DEADLINE",
    hawksAngle: "Currently only $3M guaranteed · waive before trigger to save $6.4M, or hold as movable expiring" },
  { id: "kuminga-opt", date: "2026-06-29",
    label: "Kuminga option call", short: "KUMINGA",     kind: "DECISION",
    hawksAngle: "$24.3M team option · decline-and-extend expected per Fischer · opens $15M+ cap room" },
  { id: "fa-open",     date: "2026-06-30",
    label: "FA market opens",     short: "FA OPEN",     kind: "EVENT",      primary: true,
    hawksAngle: "6 PM ET · McCollum retention is the headline UFA · Hartenstein the wish-list big" },
  { id: "moratorium",  date: "2026-07-06",
    label: "Moratorium ends",     short: "MORATORIUM",  kind: "EVENT",
    hawksAngle: "Signings official · sign-and-trades can finalize · cap holds release" },
];

// ─── Pull quotes (Story section picks one matching lead.category) ──────────
// `text` is a token array — same convention as EDITORS_LETTER.headline.
export const PULL_QUOTES = [
  { category: "general",
    text: ["I don't really have any words for that. ", { red: "Obviously, it sucks." }],
    who: "JALEN JOHNSON", when: "GAME 6 · APRIL 30" },
  { category: "trades",
    text: ["We're in a ", { red: "good place" }, "."],
    who: "ONSI SALEH · POBO", when: "AJC · MAY 8" },
  { category: "games",
    text: ["I think Quin is going to be part of our team for a ", { red: "very, very long time" }, "."],
    who: "STEVE KOONIN · CEO", when: "680 THE FAN · MAY 22" },
];

// ─── Editor's bets (predictions strip at top of WIRE) ──────────────────────
// confidence: 0-100; rendered as a horizontal volt bar.
export const BETS = [
  { take: "Snyder extension signs before Draft Night",          confidence: 80 },
  { take: "Saleh declines Kuminga's $24.3M option",              confidence: 65 },
  { take: "McCollum re-signs at 2yr / ~$36M",                    confidence: 70 },
  { take: "No Jaylen Brown trade — Hawks pass on $53.1M",       confidence: 75 },
  { take: "Hawks pick a guard at #8 (Brown Jr. or Flemings)",    confidence: 60 },
  { take: "Hield gets waived before the June 25 trigger",        confidence: 55 },
];

// ─── Scenarios (PATH section · cap & roster paths) ─────────────────────────
// `recommended: true` gets the volt border + "EDITOR'S PICK" kicker.
export const SCENARIOS = [
  {
    id: "status-quo", label: "Status Quo", recommended: false,
    moves: [
      "Exercise Kuminga option ($24.3M)",
      "Let Hield's trigger fire ($9.4M)",
      "Re-sign McCollum at 2yr/$36M",
    ],
    capRoomDelta: "$0M room",
    capRoomNote: "over cap · use MLE only",
    roster: "16 deep · old core preserved · no big FA add",
    risk: "No swing · same R1 ceiling",
  },
  {
    id: "decline-extend", label: "Decline + Extend", recommended: true,
    moves: [
      "Decline Kuminga option → 4yr/$72M extension",
      "Waive Hield before June 25 trigger",
      "Re-sign McCollum at 2yr/$36M",
    ],
    capRoomDelta: "+$15.5M room",
    capRoomNote: "afford MLE + min-bench reshuffle",
    roster: "Bench thinner · cap flexibility at deadline",
    risk: "Kuminga walks if extension talks collapse",
  },
  {
    id: "brown-swing", label: "The Brown Swing", recommended: false,
    moves: [
      "3-team: Risacher + #8 + Hield + picks → Jaylen Brown",
      "Decline Kuminga option",
      "Re-sign McCollum",
    ],
    capRoomDelta: "-$53M",
    capRoomNote: "into deep luxury · 2nd apron risk",
    roster: "Brown-Johnson-Daniels core · loses youth + #8",
    risk: "Tax hit · Cam Johnson alternative is cheaper",
  },
  {
    id: "hartenstein-bet", label: "Hartenstein Bet", recommended: false,
    moves: [
      "Sign Hartenstein at $20-25M (if OKC declines option)",
      "Decline Kuminga option",
      "Let McCollum walk to Chicago",
    ],
    capRoomDelta: "+$2M room",
    capRoomNote: "all-in on the frontcourt",
    roster: "Hartenstein-Okongwu pair · no veteran PG creator",
    risk: "Depends on OKC's option call · McCollum priority per reporting",
  },
];

// ─── Draft Board at #8 (DRFT section) ──────────────────────────────────────
// hawks_consensus: true → volt left border (post-combine convergence picks).
export const DRAFT_BOARD = [
  { rank: 1, name: "Mikel Brown Jr.",    school: "Louisville",  pos: "PG", ht: "6'4", age: 19,
    mock: "CBS · ATL @ 8",
    fit: "Lead guard creator post-Trae · 38% from 3 over last 20 · NBA.com consensus",
    hawks_consensus: true },
  { rank: 2, name: "Kingston Flemings",  school: "Houston",     pos: "PG", ht: "6'3", age: 19,
    mock: "Ringer · ATL @ 8",
    fit: "Best perimeter D of the guard trio · transition fit · Roundtable's preferred call",
    hawks_consensus: true },
  { rank: 3, name: "Aday Mara",          school: "UCLA",        pos: "C",  ht: "7'3", age: 21,
    mock: "NBA.com consensus alt",
    fit: "Size alternative if FA C path closes · pairs with Okongwu",
    hawks_consensus: false },
  { rank: 4, name: "Nate Ament",         school: "Tennessee",   pos: "SF", ht: "6'9", age: 18,
    mock: "Hollinger linked",
    fit: "Wing length insurance behind Johnson · highest-upside swing",
    hawks_consensus: false },
  { rank: 5, name: "Koa Peat",           school: "Arizona",     pos: "PF", ht: "6'8", age: 19,
    mock: "ATL pre-draft workout",
    fit: "Bully-ball PF · floor-raising motor · culture fit",
    hawks_consensus: false },
  { rank: 6, name: "Yaxel Lendeborg",    school: "UAB",         pos: "PF", ht: "6'9", age: 22,
    mock: "ATL pre-draft workout",
    fit: "Older prospect · ready-now switch defender · 4 years of college tape",
    hawks_consensus: false },
  { rank: 7, name: "Tre Johnson",        school: "Texas",       pos: "SG", ht: "6'5", age: 19,
    mock: "Linked early via CBS · SI onsi",
    fit: "Pure shooter · McCollum heir if he walks",
    hawks_consensus: false },
  { rank: 8, name: "Dailyn Swain",       school: "Xavier",      pos: "SF", ht: "6'7", age: 20,
    mock: "Last Word linked",
    fit: "Two-way wing depth · second-round value at 23",
    hawks_consensus: false },
];

// ─── Trade Threads (THRD section · the offseason rumor mill) ───────────────
// status: HOT | WARM | OPEN | COLD | BLOCKED | CLOSED
// direction: IN (acquire) | OUT (trade away) | TARGET (FA / external)
export const TRADE_THREADS = [
  { id: "brown",    name: "Jaylen Brown",       direction: "IN",     status: "WARM",
    terms: "$53.1M next year · 3-team with Boston needed",
    source: "Mannix (98.5 The Sports Hub)", updated: "2026-05-24",
    tip: "BOS post-Finals push + ATL willingness to take the money + Marietta ties" },
  { id: "cam-john", name: "Cameron Johnson",    direction: "IN",     status: "OPEN",
    terms: "DEN cap-cutter candidate · ~$22M",
    source: "HoopsHype",                    updated: "2026-05-13",
    tip: "Denver tax math + ATL declining Kuminga option opens fit" },
  { id: "risacher", name: "Zaccharie Risacher", direction: "OUT",    status: "HOT",
    terms: "Package with #8 to trade up the board",
    source: "Hollinger (The Athletic)",     updated: "2026-05-23",
    tip: "Top 5-7 board falls Hawks' way · or Brown framework absorbs him" },
  { id: "kispert",  name: "Corey Kispert",      direction: "OUT",    status: "WARM",
    terms: "$14.6M salary filler · likely summer chip",
    source: "Hollinger (The Athletic)",     updated: "2026-05-21",
    tip: "Larger framework needs the $13M+ slot to match" },
  { id: "harten",   name: "Isaiah Hartenstein", direction: "TARGET", status: "BLOCKED",
    terms: "Only available if OKC declines ~$29M option",
    source: "Yardbarker / SI onsi",         updated: "2026-05-22",
    tip: "OKC's WCF run tightens cap math against Williams/Holmgren extensions" },
  { id: "grimes",   name: "Quentin Grimes",     direction: "TARGET", status: "OPEN",
    terms: "MLE target · 'dream' add per SI onsi",
    source: "SI onsi",                      updated: "2026-05-08",
    tip: "PHI cap squeeze + ATL clearing room for a guard creator" },
  { id: "saleh-phi", name: "Saleh to 76ers",    direction: "OUT",    status: "CLOSED",
    terms: "ATL denied permission · promoted Saleh to POBO May 27",
    source: "ESPN / WaPo / Yahoo / SI",     updated: "2026-05-27",
    tip: "Thread is dead · Saleh extended long-term" },
];

// ─── Per-player game logs (PlayerModal sparkline + last-5 table) ───────────
// Keyed by player id. Newest first. Only filled for core rotation players.
// `pts/min/3pPct` drive the sparkline; full row shown in last-5 table.
export const GAME_LOGS = {
  // Jalen Johnson (id 1)
  1: [
    { date: "2026-04-30", opp: "NYK", home: true,  result: "L", min: 36, pts: 21, reb: 5,  ast: 3,  fgPct: 41.7, threePct: 22.2, plusMinus: -32, comp: "R1G6" },
    { date: "2026-04-28", opp: "NYK", home: false, result: "L", min: 38, pts: 18, reb: 10, ast: 6,  fgPct: 44.0, threePct: 33.3, plusMinus: -20, comp: "R1G5" },
    { date: "2026-04-25", opp: "NYK", home: true,  result: "L", min: 40, pts: 14, reb: 10, ast: 10, fgPct: 35.0, threePct: 25.0, plusMinus: -12, comp: "R1G4" },
    { date: "2026-04-23", opp: "NYK", home: true,  result: "W", min: 39, pts: 24, reb: 10, ast: 8,  fgPct: 48.0, threePct: 40.0, plusMinus: 9,   comp: "R1G3" },
    { date: "2026-04-20", opp: "NYK", home: false, result: "W", min: 38, pts: 17, reb: 8,  ast: 3,  fgPct: 42.9, threePct: 33.3, plusMinus: 4,   comp: "R1G2" },
    { date: "2026-04-18", opp: "NYK", home: false, result: "L", min: 37, pts: 23, reb: 9,  ast: 4,  fgPct: 46.2, threePct: 37.5, plusMinus: -8,  comp: "R1G1" },
    { date: "2026-04-12", opp: "MIA", home: true,  result: "L", min: 35, pts: 24, reb: 11, ast: 9,  fgPct: 50.0, threePct: 40.0, plusMinus: -18, comp: "REG"  },
    { date: "2026-04-10", opp: "CLE", home: true,  result: "W", min: 36, pts: 28, reb: 13, ast: 8,  fgPct: 56.5, threePct: 42.9, plusMinus: 17,  comp: "REG"  },
    { date: "2026-04-08", opp: "CLE", home: false, result: "L", min: 35, pts: 26, reb: 9,  ast: 7,  fgPct: 47.8, threePct: 35.7, plusMinus: -6,  comp: "REG"  },
    { date: "2026-04-06", opp: "NYK", home: false, result: "L", min: 34, pts: 19, reb: 8,  ast: 6,  fgPct: 42.1, threePct: 27.3, plusMinus: -4,  comp: "REG"  },
  ],
  // Dyson Daniels (id 2)
  2: [
    { date: "2026-04-30", opp: "NYK", home: true,  result: "L", min: 15, pts: 3,  reb: 2,  ast: 3, fgPct: 25.0, threePct: 0.0,  plusMinus: -22, comp: "R1G6" },
    { date: "2026-04-28", opp: "NYK", home: false, result: "L", min: 33, pts: 17, reb: 7,  ast: 5, fgPct: 63.6, threePct: 33.3, plusMinus: -10, comp: "R1G5" },
    { date: "2026-04-25", opp: "NYK", home: true,  result: "L", min: 32, pts: 7,  reb: 5,  ast: 6, fgPct: 30.0, threePct: 0.0,  plusMinus: -8,  comp: "R1G4" },
    { date: "2026-04-23", opp: "NYK", home: true,  result: "W", min: 31, pts: 8,  reb: 5,  ast: 4, fgPct: 36.4, threePct: 20.0, plusMinus: 6,   comp: "R1G3" },
    { date: "2026-04-20", opp: "NYK", home: false, result: "W", min: 28, pts: 6,  reb: 7,  ast: 4, fgPct: 33.3, threePct: 25.0, plusMinus: 3,   comp: "R1G2" },
    { date: "2026-04-18", opp: "NYK", home: false, result: "L", min: 25, pts: 9,  reb: 9,  ast: 11,fgPct: 40.0, threePct: 0.0,  plusMinus: -4,  comp: "R1G1" },
    { date: "2026-04-12", opp: "MIA", home: true,  result: "L", min: 33, pts: 12, reb: 6,  ast: 7, fgPct: 50.0, threePct: 25.0, plusMinus: -14, comp: "REG"  },
    { date: "2026-04-10", opp: "CLE", home: true,  result: "W", min: 32, pts: 11, reb: 8,  ast: 6, fgPct: 46.2, threePct: 0.0,  plusMinus: 12,  comp: "REG"  },
    { date: "2026-04-08", opp: "CLE", home: false, result: "L", min: 34, pts: 14, reb: 7,  ast: 5, fgPct: 50.0, threePct: 16.7, plusMinus: -5,  comp: "REG"  },
    { date: "2026-04-06", opp: "NYK", home: false, result: "L", min: 33, pts: 10, reb: 6,  ast: 7, fgPct: 41.7, threePct: 0.0,  plusMinus: -3,  comp: "REG"  },
  ],
  // Nickeil Alexander-Walker (id 3)
  3: [
    { date: "2026-04-30", opp: "NYK", home: true,  result: "L", min: 32, pts: 11, reb: 2, ast: 3, fgPct: 36.4, threePct: 25.0, plusMinus: -26, comp: "R1G6" },
    { date: "2026-04-28", opp: "NYK", home: false, result: "L", min: 35, pts: 16, reb: 3, ast: 4, fgPct: 45.5, threePct: 40.0, plusMinus: -15, comp: "R1G5" },
    { date: "2026-04-25", opp: "NYK", home: true,  result: "L", min: 36, pts: 15, reb: 4, ast: 3, fgPct: 42.9, threePct: 33.3, plusMinus: -9,  comp: "R1G4" },
    { date: "2026-04-23", opp: "NYK", home: true,  result: "W", min: 34, pts: 13, reb: 2, ast: 4, fgPct: 41.7, threePct: 40.0, plusMinus: 8,   comp: "R1G3" },
    { date: "2026-04-20", opp: "NYK", home: false, result: "W", min: 36, pts: 14, reb: 3, ast: 2, fgPct: 50.0, threePct: 40.0, plusMinus: 5,   comp: "R1G2" },
    { date: "2026-04-18", opp: "NYK", home: false, result: "L", min: 34, pts: 11, reb: 2, ast: 3, fgPct: 40.0, threePct: 33.3, plusMinus: -6,  comp: "R1G1" },
    { date: "2026-04-10", opp: "CLE", home: true,  result: "W", min: 34, pts: 22, reb: 4, ast: 4, fgPct: 50.0, threePct: 50.0, plusMinus: 14,  comp: "REG"  },
    { date: "2026-04-06", opp: "NYK", home: false, result: "L", min: 35, pts: 23, reb: 4, ast: 4, fgPct: 47.8, threePct: 41.7, plusMinus: -4,  comp: "REG"  },
    { date: "2026-04-03", opp: "BKN", home: true,  result: "W", min: 28, pts: 18, reb: 3, ast: 3, fgPct: 55.6, threePct: 50.0, plusMinus: 22,  comp: "REG"  },
    { date: "2026-04-01", opp: "ORL", home: true,  result: "W", min: 30, pts: 19, reb: 4, ast: 3, fgPct: 52.6, threePct: 44.4, plusMinus: 18,  comp: "REG"  },
  ],
  // CJ McCollum (id 4)
  4: [
    { date: "2026-04-30", opp: "NYK", home: true,  result: "L", min: 30, pts: 11, reb: 1, ast: 2, fgPct: 33.3, threePct: 25.0, plusMinus: -28, comp: "R1G6" },
    { date: "2026-04-28", opp: "NYK", home: false, result: "L", min: 34, pts: 13, reb: 3, ast: 4, fgPct: 41.2, threePct: 28.6, plusMinus: -18, comp: "R1G5" },
    { date: "2026-04-25", opp: "NYK", home: true,  result: "L", min: 35, pts: 17, reb: 2, ast: 2, fgPct: 47.4, threePct: 0.0,  plusMinus: -10, comp: "R1G4" },
    { date: "2026-04-23", opp: "NYK", home: true,  result: "W", min: 35, pts: 23, reb: 3, ast: 3, fgPct: 50.0, threePct: 42.9, plusMinus: 7,   comp: "R1G3" },
    { date: "2026-04-20", opp: "NYK", home: false, result: "W", min: 34, pts: 32, reb: 4, ast: 1, fgPct: 56.5, threePct: 50.0, plusMinus: 6,   comp: "R1G2" },
    { date: "2026-04-18", opp: "NYK", home: false, result: "L", min: 30, pts: 26, reb: 2, ast: 1, fgPct: 50.0, threePct: 42.9, plusMinus: -3,  comp: "R1G1" },
    { date: "2026-04-12", opp: "MIA", home: true,  result: "L", min: 30, pts: 18, reb: 2, ast: 4, fgPct: 43.5, threePct: 33.3, plusMinus: -16, comp: "REG"  },
    { date: "2026-04-03", opp: "BKN", home: true,  result: "W", min: 28, pts: 22, reb: 3, ast: 5, fgPct: 53.8, threePct: 50.0, plusMinus: 19,  comp: "REG"  },
    { date: "2026-03-30", opp: "BOS", home: true,  result: "W", min: 30, pts: 16, reb: 2, ast: 6, fgPct: 44.4, threePct: 40.0, plusMinus: 8,   comp: "REG"  },
    { date: "2026-03-28", opp: "SAC", home: false, result: "W", min: 31, pts: 17, reb: 3, ast: 4, fgPct: 47.1, threePct: 33.3, plusMinus: 11,  comp: "REG"  },
  ],
  // Onyeka Okongwu (id 5)
  5: [
    { date: "2026-04-30", opp: "NYK", home: true,  result: "L", min: 22, pts: 7,  reb: 4, ast: 1, fgPct: 42.9, threePct: 0.0,  plusMinus: -28, comp: "R1G6" },
    { date: "2026-04-28", opp: "NYK", home: false, result: "L", min: 30, pts: 16, reb: 8, ast: 2, fgPct: 53.8, threePct: 33.3, plusMinus: -8,  comp: "R1G5" },
    { date: "2026-04-25", opp: "NYK", home: true,  result: "L", min: 28, pts: 12, reb: 6, ast: 1, fgPct: 50.0, threePct: 0.0,  plusMinus: -11, comp: "R1G4" },
    { date: "2026-04-23", opp: "NYK", home: true,  result: "W", min: 31, pts: 14, reb: 7, ast: 2, fgPct: 53.8, threePct: 33.3, plusMinus: 8,   comp: "R1G3" },
    { date: "2026-04-20", opp: "NYK", home: false, result: "W", min: 30, pts: 10, reb: 6, ast: 3, fgPct: 41.7, threePct: 0.0,  plusMinus: 7,   comp: "R1G2" },
    { date: "2026-04-18", opp: "NYK", home: false, result: "L", min: 30, pts: 9,  reb: 3, ast: 1, fgPct: 50.0, threePct: 0.0,  plusMinus: -7,  comp: "R1G1" },
    { date: "2026-04-10", opp: "CLE", home: true,  result: "W", min: 32, pts: 18, reb: 9, ast: 4, fgPct: 53.3, threePct: 50.0, plusMinus: 15,  comp: "REG"  },
    { date: "2026-04-08", opp: "CLE", home: false, result: "L", min: 30, pts: 15, reb: 8, ast: 2, fgPct: 50.0, threePct: 0.0,  plusMinus: -5,  comp: "REG"  },
    { date: "2026-04-03", opp: "BKN", home: true,  result: "W", min: 28, pts: 14, reb: 9, ast: 3, fgPct: 55.6, threePct: 0.0,  plusMinus: 18,  comp: "REG"  },
    { date: "2026-04-01", opp: "ORL", home: true,  result: "W", min: 29, pts: 17, reb: 8, ast: 2, fgPct: 60.0, threePct: 50.0, plusMinus: 14,  comp: "REG"  },
  ],
  // Risacher (id 6) — fell out of rotation in R1
  6: [
    { date: "2026-04-18", opp: "NYK", home: false, result: "L", min: 3,  pts: 0,  reb: 2, ast: 0, fgPct: 0.0,  threePct: 0.0,  plusMinus: -2,  comp: "R1G1" },
    { date: "2026-04-12", opp: "MIA", home: true,  result: "L", min: 12, pts: 4,  reb: 2, ast: 0, fgPct: 33.3, threePct: 25.0, plusMinus: -8,  comp: "REG"  },
    { date: "2026-04-10", opp: "CLE", home: true,  result: "W", min: 14, pts: 6,  reb: 3, ast: 1, fgPct: 40.0, threePct: 33.3, plusMinus: 4,   comp: "REG"  },
    { date: "2026-04-06", opp: "NYK", home: false, result: "L", min: 11, pts: 4,  reb: 2, ast: 0, fgPct: 33.3, threePct: 0.0,  plusMinus: -3,  comp: "REG"  },
    { date: "2026-04-03", opp: "BKN", home: true,  result: "W", min: 18, pts: 11, reb: 4, ast: 1, fgPct: 50.0, threePct: 50.0, plusMinus: 12,  comp: "REG"  },
    { date: "2026-04-01", opp: "ORL", home: true,  result: "W", min: 16, pts: 8,  reb: 3, ast: 1, fgPct: 44.4, threePct: 40.0, plusMinus: 9,   comp: "REG"  },
    { date: "2026-03-30", opp: "BOS", home: true,  result: "W", min: 17, pts: 9,  reb: 4, ast: 1, fgPct: 50.0, threePct: 33.3, plusMinus: 6,   comp: "REG"  },
    { date: "2026-03-28", opp: "SAC", home: false, result: "W", min: 19, pts: 12, reb: 5, ast: 1, fgPct: 50.0, threePct: 40.0, plusMinus: 4,   comp: "REG"  },
    { date: "2026-03-23", opp: "MEM", home: true,  result: "W", min: 21, pts: 13, reb: 4, ast: 2, fgPct: 50.0, threePct: 42.9, plusMinus: 16,  comp: "REG"  },
    { date: "2026-03-21", opp: "GSW", home: true,  result: "W", min: 22, pts: 14, reb: 5, ast: 2, fgPct: 50.0, threePct: 40.0, plusMinus: 11,  comp: "REG"  },
  ],
  // Kuminga (id 7)
  7: [
    { date: "2026-04-30", opp: "NYK", home: true,  result: "L", min: 24, pts: 11, reb: 3, ast: 1, fgPct: 41.7, threePct: 25.0, plusMinus: -22, comp: "R1G6" },
    { date: "2026-04-28", opp: "NYK", home: false, result: "L", min: 28, pts: 11, reb: 4, ast: 1, fgPct: 40.0, threePct: 28.6, plusMinus: -13, comp: "R1G5" },
    { date: "2026-04-25", opp: "NYK", home: true,  result: "L", min: 26, pts: 9,  reb: 4, ast: 0, fgPct: 36.4, threePct: 20.0, plusMinus: -7,  comp: "R1G4" },
    { date: "2026-04-23", opp: "NYK", home: true,  result: "W", min: 28, pts: 21, reb: 3, ast: 1, fgPct: 53.3, threePct: 50.0, plusMinus: 10,  comp: "R1G3" },
    { date: "2026-04-20", opp: "NYK", home: false, result: "W", min: 25, pts: 19, reb: 4, ast: 1, fgPct: 53.8, threePct: 50.0, plusMinus: 8,   comp: "R1G2" },
    { date: "2026-04-18", opp: "NYK", home: false, result: "L", min: 23, pts: 9,  reb: 4, ast: 0, fgPct: 40.0, threePct: 20.0, plusMinus: -5,  comp: "R1G1" },
    { date: "2026-04-12", opp: "MIA", home: true,  result: "L", min: 26, pts: 14, reb: 5, ast: 2, fgPct: 46.7, threePct: 33.3, plusMinus: -10, comp: "REG"  },
    { date: "2026-04-10", opp: "CLE", home: true,  result: "W", min: 27, pts: 17, reb: 6, ast: 2, fgPct: 50.0, threePct: 40.0, plusMinus: 13,  comp: "REG"  },
    { date: "2026-04-03", opp: "BKN", home: true,  result: "W", min: 24, pts: 16, reb: 5, ast: 2, fgPct: 53.3, threePct: 50.0, plusMinus: 19,  comp: "REG"  },
    { date: "2026-04-01", opp: "ORL", home: true,  result: "W", min: 26, pts: 18, reb: 6, ast: 2, fgPct: 55.6, threePct: 40.0, plusMinus: 14,  comp: "REG"  },
  ],
  // Hield (id 8) — barely played in R1
  8: [
    { date: "2026-04-20", opp: "NYK", home: false, result: "W", min: 6,  pts: 4,  reb: 0, ast: 0, fgPct: 50.0, threePct: 50.0, plusMinus: 2,   comp: "R1G2" },
    { date: "2026-04-18", opp: "NYK", home: false, result: "L", min: 6,  pts: 4,  reb: 1, ast: 1, fgPct: 50.0, threePct: 50.0, plusMinus: -3,  comp: "R1G1" },
    { date: "2026-04-12", opp: "MIA", home: true,  result: "L", min: 18, pts: 8,  reb: 3, ast: 2, fgPct: 33.3, threePct: 33.3, plusMinus: -10, comp: "REG"  },
    { date: "2026-04-10", opp: "CLE", home: true,  result: "W", min: 20, pts: 13, reb: 2, ast: 1, fgPct: 50.0, threePct: 50.0, plusMinus: 8,   comp: "REG"  },
    { date: "2026-04-08", opp: "CLE", home: false, result: "L", min: 22, pts: 11, reb: 3, ast: 1, fgPct: 42.9, threePct: 42.9, plusMinus: -4,  comp: "REG"  },
    { date: "2026-04-06", opp: "NYK", home: false, result: "L", min: 21, pts: 9,  reb: 2, ast: 2, fgPct: 40.0, threePct: 40.0, plusMinus: -6,  comp: "REG"  },
    { date: "2026-04-03", opp: "BKN", home: true,  result: "W", min: 22, pts: 16, reb: 3, ast: 2, fgPct: 55.6, threePct: 55.6, plusMinus: 15,  comp: "REG"  },
    { date: "2026-04-01", opp: "ORL", home: true,  result: "W", min: 23, pts: 14, reb: 3, ast: 3, fgPct: 50.0, threePct: 50.0, plusMinus: 12,  comp: "REG"  },
    { date: "2026-03-30", opp: "BOS", home: true,  result: "W", min: 24, pts: 18, reb: 2, ast: 2, fgPct: 55.6, threePct: 50.0, plusMinus: 10,  comp: "REG"  },
    { date: "2026-03-28", opp: "SAC", home: false, result: "W", min: 22, pts: 13, reb: 2, ast: 1, fgPct: 46.2, threePct: 42.9, plusMinus: 9,   comp: "REG"  },
  ],
  // Kispert (id 9)
  9: [
    { date: "2026-04-25", opp: "NYK", home: true,  result: "L", min: 7,  pts: 2,  reb: 1, ast: 0, fgPct: 33.3, threePct: 0.0,  plusMinus: -4,  comp: "R1G4" },
    { date: "2026-04-23", opp: "NYK", home: true,  result: "W", min: 10, pts: 3,  reb: 2, ast: 0, fgPct: 40.0, threePct: 33.3, plusMinus: 3,   comp: "R1G3" },
    { date: "2026-04-20", opp: "NYK", home: false, result: "W", min: 9,  pts: 0,  reb: 1, ast: 1, fgPct: 0.0,  threePct: 0.0,  plusMinus: -1,  comp: "R1G2" },
    { date: "2026-04-12", opp: "MIA", home: true,  result: "L", min: 19, pts: 9,  reb: 2, ast: 1, fgPct: 50.0, threePct: 50.0, plusMinus: -8,  comp: "REG"  },
    { date: "2026-04-10", opp: "CLE", home: true,  result: "W", min: 21, pts: 11, reb: 3, ast: 1, fgPct: 50.0, threePct: 50.0, plusMinus: 9,   comp: "REG"  },
    { date: "2026-04-06", opp: "NYK", home: false, result: "L", min: 20, pts: 8,  reb: 2, ast: 1, fgPct: 44.4, threePct: 33.3, plusMinus: -5,  comp: "REG"  },
    { date: "2026-04-03", opp: "BKN", home: true,  result: "W", min: 22, pts: 13, reb: 3, ast: 2, fgPct: 55.6, threePct: 50.0, plusMinus: 14,  comp: "REG"  },
    { date: "2026-04-01", opp: "ORL", home: true,  result: "W", min: 21, pts: 9,  reb: 2, ast: 1, fgPct: 50.0, threePct: 33.3, plusMinus: 11,  comp: "REG"  },
    { date: "2026-03-30", opp: "BOS", home: true,  result: "W", min: 23, pts: 12, reb: 3, ast: 1, fgPct: 50.0, threePct: 42.9, plusMinus: 8,   comp: "REG"  },
    { date: "2026-03-28", opp: "SAC", home: false, result: "W", min: 22, pts: 10, reb: 2, ast: 1, fgPct: 50.0, threePct: 33.3, plusMinus: 6,   comp: "REG"  },
  ],
};
