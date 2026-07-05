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
    recentNotes: "SATURDAY JULY 4 (offseason): the offseason is being built around him. Friday's Scotto report that Atlanta remains interested in Trey Murphy III names the cleanest fit yet: a 21.5 PPG two-way wing to ride shotgun. The Kuminga sign-and-trade talks (Cavs, Bucks), the Hield-salary trade scenarios and the Turner-led center hunt are all about finding Johnson a sturdier supporting cast, with No. 8 pick Kingston Flemings drafted as backcourt creation to grow alongside him. All-NBA Third Team (first Hawk honored since Trae Young in 2022) after a 22.5/10.3/7.9 season, just the fifth player ever to average 22-10-7; locked in on his ~$30M/yr extension through 2029-30. Jaylen Brown, the perennial rumored co-star, went to Philadelphia instead Thursday, so internal growth plus one more trade is the plan.",
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
    recentNotes: "WEDNESDAY JUNE 24 — With Houston PG Kingston Flemings drafted at No. 8 to add backcourt creation, Daniels' offseason boss is now PRESIDENT OF BASKETBALL OPS ONSI SALEH (promoted from GM + extended long-term Wed May 27 per ESPN / Washington Post / Yahoo / SI onsi / Hoops Rumors). NBA ALL-DEFENSIVE SECOND TEAM nod (announced Fri May 22; NBA.com / AJC / Atlanta News First / Roundtable) is his second straight year on an All-Defense team after making FIRST TEAM in 24-25. He drew 9 first-place and 32 second-place votes from the 100-member global media panel (50 points, 10th in overall voting) and tied for the NBA lead in steals per game at 2.0 with OKC's Cason Wallace; Atlanta posted a top-10 defensive rating for the first time in nearly a decade with Daniels as the primary point-of-attack defender. The Second-Team finish — down from First Team a year ago — tracks a hard offensive year: his three-point shooting cratered to 18.8% (22-of-117), and Daniels has spoken candidly about getting into a 'dark place' mentally, planning an LA summer to rebuild the jumper and 'get stronger.' Victor Wembanyama was the unanimous DPOY and lone unanimous All-Defense 1st-teamer; Daniels was not a 2026 DPOY finalist after finishing runner-up in 25. AROUND THE LEAGUE: THE KNICKS ARE 2026 CHAMPIONS, closing San Antonio 94-90 in Game 5 Sat Jun 13 to take the Finals 4-1 (NY's first title since 1973), Brunson 45 and Finals MVP; the same team that ended Atlanta's season in six finished the job. Regular-season line of 11.9/6.8/5.9 on 2.0 stl across 80 games (76 starts) is the locked baseline; four-year, $100M rookie extension (signed Oct 2025 per ESPN / NBA.com) kicks in next season; not trade-eligible until July 1, 2026.",
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
    recentNotes: "SUNDAY JUNE 21 (offseason — FRESH LEAD: ONSI SALEH PROMOTED TO PRESIDENT OF BASKETBALL OPERATIONS + LONG-TERM EXTENSION Wed May 27 per ESPN / Washington Post / Yahoo / SI onsi / Hoops Rumors; SPURS TOOK WCF GAME 7 111-103 Sat May 30, ousting OKC to reach the Finals; THE KNICKS ARE 2026 CHAMPIONS, closing San Antonio 94-90 in Game 5 Sat Jun 13 to take the Finals 4-1 (NY's first title since 1973), Brunson 45 and Finals MVP; the same team that ended Atlanta's season in six finished the job): MIP trophy still the through-line, 48 days past the Apr 24 Kia Most Improved Player ceremony where NAW took 66 of 100 first-place votes ahead of finalists Deni Avdija and Jalen Duren (NBA.com / Washington Post / Yahoo Sports / Hoops Rumors / Atlanta News First). Career-best 20.8/3.4/3.7 on 39.9% from three (251 makes — Hawks single-season record, 4th in the NBA); 11.4-PPG jump from 24-25 is the third-largest single-season scoring increase in 25 years. NAW is the second consecutive Hawks player and third overall to win MIP since the award debuted in 1985-86 — FIRST FRANCHISE EVER with back-to-back winners (Daniels won 24-25). R1 scoring settled at 13.4 PPG; the only ATL perimeter player above 33% from three across the full six. NAW was also drafted by Bryson Graham in New Orleans — Graham now runs the Bulls' front office (NBA-high $58M cap room per Chicago Sun-Times). Locked in long-term on the four-year, $62M deal he signed last summer.",
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
    recentNotes: "FRIDAY JULY 3 (offseason): LOCKED IN. McCollum re-signed on a one-year, roughly $21M extension with a 7.5% trade kicker back on Jun 22 (ESPN / NBA.com / Yahoo Sports), skipping free agency entirely; the paperwork becomes official as the moratorium lifts Jul 6. He returns as the bridge point guard and mentor for No. 8 pick Kingston Flemings, drafted as his eventual successor. Final regular-season line: 18.7/3.1/4.1 on 45.2/38.1/82.7 across 41 Hawks games after the January trade, then 19.2 PPG in the six-game Knicks series. Turns 35 in September; the one-year structure keeps the books flexible.",
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
    recentNotes: "FRIDAY JULY 3 (offseason): EXTENSION-ELIGIBLE as of Jul 1 on top of the two years (~$33M) left on his deal (Soaring Down South / Spotrac); no talks reported yet, but with Kuminga's $24.3M off the books, locking in the career-best starting center (15.2/7.6/3.1 on 48.0% FG with 1.1 blk across 74 games) is Atlanta's next contract conversation. Landale returns behind him on a 1yr/$14M deal, and the front office keeps hunting a bigger frontcourt partner on the trade market (Myles Turner the name to watch), which would pair WITH Okongwu, not replace him. Played R1 through right-knee inflammation (11.3/5.7/1.7).",
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
    recentNotes: "SATURDAY JULY 4 (offseason): NEW, Risacher is on France's preliminary roster for this July's FIBA World Cup qualifying window (NewsCenter Maine / Hoops Rumors, early Jul), an offseason reps opportunity while his trade market simmers. The Risacher market is active without being decided. Rival teams, Dallas among them, have called to inquire, and a Risacher-plus-No. 23 swing for Sacramento's Domantas Sabonis has been floated to solve the center need in one move (Pro Football Network / Roundtable / SI onsi, Jun). Countering that, Michael Scotto reports Atlanta is NOT offering Risacher plus the Pelicans' 2026 first-rounder to Dallas for Anthony Davis, a signal the front office still prizes the 21-year-old's upside. Offseason trade-watch player No. 1, and now SALEH is the executive making the call. Risacher's future is the single biggest cap-and-rotation lever the new POBO holds. HOLLINGER (The Athletic via Hoops Wire 'Hawks could look to trade Zaccharie Risacher' / Lindys / Roundtable May 17-23): Atlanta moving Risacher 'can't be ruled out' after he lost his starting job post-All-Star and fell out of the rotation entirely in April. Risacher's uncertain future could let Atlanta 'package him alongside the No. 8 pick and additional draft compensation' to trade up the board on draft night. Wings/bigs on Atlanta's No. 8 board (Tre Johnson, Nate Ament, Koa Peat, Lendeborg, Mikel Brown Jr., Kingston Flemings, Aday Mara, Dailyn Swain per CBS / SI onsi / Last Word May 12-13) — exactly the names competing for the floor next year — wrapped their live-tape windows on May 14. Marc Stein reports the Hawks are 'open to trading Risacher if the right offer comes along' (Basketnews / Roundtable May 11). Hollinger's Athletic preview still tags Risacher (and Kispert) as the likeliest summer trade chip. Structural read: $13.7M next season then a $17.8M team option for 27-28. Sophomore line: 9.6/3.8/1.1 on 44.6% FG / 37.2% 3P across 66 games — regression from his 12.6 PPG rookie year as usage dropped from 21.6% to 17.7%. R1 floor time was just 2:30 across six games — one Game 1 cameo then five straight DNP-CDs.",
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
    recentNotes: "SUNDAY JULY 5 (offseason): SUITOR LIST STILL GROWING. Weekend reporting adds the Bulls, Nets, Blazers and Clippers to a market that already included the Cavaliers and Bucks (S&T talks with Atlanta per Scotto, Jul 2), the Kings and the Lakers, who are placing 'significant consideration' on him as a perimeter-defense upgrade (Bleacher Report / Hoops Rumors / Pro Football Network, Jul 3-4). Cleveland's interest runs through Kenny Atkinson but the Cavs have apron math and other dominoes first (Fear The Sword). Atlanta holds his Non-Bird rights after declining the $24.3M option Jun 29, and a re-sign remains possible per Hoops Rumors; an S&T that returns an asset stays the cleanest path. Hawks line: 12.3 PPG / 5.3 RPG in 22.1 mpg across 16 games. Hawks line: 12.3 PPG / 5.3 RPG in 22.1 mpg across 16 games.",
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
    recentNotes: "SATURDAY JULY 4 (offseason): TRADE-SCENARIO CENTERPIECE. Fischer has the Hawks in several trade scenarios that could use Hield's $9.66M expiring (The Stein Line, Jul 2), and Scotto added Friday that Atlanta remains interested in Pelicans wing Trey Murphy III (Jul 3), a deal Hield's salary would help match. He is the obvious money in any center swing too (Turner, or the previously pursued Missi / Bitadze / Gafford). With Flemings, Carter and Wiggins added, the crowded backcourt makes a trade likelier than a rotation role. Season line: 11.8/2.8/2.1 on 39.8% from three across 71 games (12 starts).",
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
    recentNotes: "SUNDAY JUNE 21 (offseason — PRESIDENT OF BASKETBALL OPS ONSI SALEH promoted + extended Wed May 27 per ESPN / Washington Post / Yahoo / SI onsi / Hoops Rumors; SPURS TOOK WCF GAME 7 111-103 Sat May 30 (Wembanyama 22-7), ousting OKC to reach the Finals; THE KNICKS ARE 2026 CHAMPIONS, closing San Antonio 94-90 in Game 5 Sat Jun 13 to take the Finals 4-1 (NY's first title since 1973), Brunson 45 and Finals MVP; the same team that ended Atlanta's season in six finished the job) — Likeliest summer trade chip alongside Risacher, and Saleh as new POBO owns the call. Hollinger explicitly names Kispert (with Risacher) as the likeliest summer trade chip; cap notes show $14.6M next season then a $17.4M cap hit in 27-28. Salary-matching utility in any Jaylen Brown framework is real — the No. 8 pick plus Kispert plus Hield's $9.4M would clear the $57M Brown number per Hoops Rumors / Boston.com / Larry Brown Sports (May 10-22). Regular season line of 9.6/2.4/1.3 on 40.2% from three in 40 games (8 starts) was the post-trade Hawks portion.",
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
    recentNotes: "FRIDAY JULY 3 (offseason): UNSIGNED UFA four days into free agency, with no reported Hawks offer. Atlanta's guard room got even more crowded via Flemings, Carter and Wiggins, so a return looks unlikely unless it comes on a minimum. Regular season was a steady veteran backup line (7.4/1.8/2.9 over 58 games), but the six-game Knicks series (~2.8 PPG on a long shooting slump) cut into his market.",
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
    recentNotes: "SATURDAY JUNE 27 (offseason) — OPTION PICKED UP: Atlanta exercised Gueye's $2.41M team option for 2026-27, Michael Scotto reported (SI onsi / Peachtree Hoops / Hoops Rumors, Jun 25), a cheap, low-risk hold on a switchable 6'10 depth big rather than risking him in restricted free agency. He still profiles as a third-string spell-big who must compete for minutes if Atlanta adds a veteran center. Got Game 6 garbage-time minutes once Round 1 was decided; Bradley took the bigger spell-big share through the series. Regular-season averages of 6.2/4.6 in 14.8 mpg held a real third-big role through 46 games.",
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
    recentNotes: "SUNDAY JULY 5 (Summer League): LED THE HAWKS IN THE OPENER. Newell scored a team-high 15 with 5 rebounds and 3 assists in Saturday's 103-102 OT loss to Utah in Salt Lake City (NBA.com / ESPN, Jul 4), sharing top-scorer honors with undrafted Gabe Madsen while rookies Flemings (14-9-4 steals) and Ejiofor (11 boards) debuted around him. Exactly the assertive showing his second summer needed: after a rookie year of 44 games, 5.2 PPG and 38.7% from three (led all rookies at min 10 attempts), he is making his case for a bigger third-big role with Kuminga off the books. Next: vs OKC Monday 7 PM ET, Memphis Tuesday, then Vegas.",
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
    form: 5.0, status: "active", injuryNote: null,
    recentNotes: "RE-SIGNED: one year, $14M, agreed Tue Jun 30 (AP / Washington Post / SI onsi / Peachtree Hoops). New detail Jul 1-2: because his Non-Bird rights are too low, Atlanta will use nearly all of its ~$15M Non-Taxpayer Mid-Level to complete the deal (Hoops Rumors / Spotrac), which closes the Hawks' main free-agent tool. Official Monday Jul 6 when the moratorium lifts. Fully recovered from the Apr 1 right high-ankle sprain; slots back in as Okongwu's veteran backup while the center hunt continues on the trade market.",
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
  opponent: "Summer League vs Oklahoma City (Salt Lake City)",
  shortName: "SLC SL",
  home: false,
  date: "2026-07-06T19:00:00-04:00",
  competition: "OFFSEASON",
  venue: "Jon M. Huntsman Center, Salt Lake City",
  broadcast: "NBA League Pass",
  seriesContext: "MONDAY JULY 6, 7 PM ET: Hawks-Thunder in SLC Summer League game 2 (finale vs Memphis Tue Jul 7; Vegas opens Jul 9). Saturday's opener was a 103-102 OT loss to Utah in which Jazz No. 2 pick Darryn Peterson scored a game-high 28, including the go-ahead three in overtime. The Hawks' side of the ledger was encouraging: No. 8 pick Kingston Flemings had 14 points with game highs in assists (9) and steals (4) against 1 turnover, No. 23 Zuby Ejiofor grabbed 11 rebounds with 3 steals in 28 minutes, and Asa Newell led Atlanta with 15. Monday is also a front-office day: the moratorium lifts at 12:01 PM ET, making the McCollum (1yr, ~$21M) and Landale (1yr, $14M) deals plus the Wiggins and Carter trades official. KUMINGA: suitor list keeps growing (Cavs, Bucks, Lakers, Kings, plus Bulls, Nets and Blazers now linked); Atlanta holds his Non-Bird rights and a re-sign remains possible. TRADE BOARD: Trey Murphy III interest is live but crowded (Celtics, Pistons, Warriors, Clippers also in the mix); Hield's $9.66M expiring stays the matching salary; Turner the center watch name.",
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
  generatedAt: "2026-07-05T08:20:00Z",
  summary:
    "As of Sunday July 5, the story is Saturday's Summer League opener: the Hawks fell 103-102 in overtime to the host Jazz in Salt Lake City, where Utah's No. 2 overall pick Darryn Peterson poured in a game-high 28, including the go-ahead three in OT (ESPN / NBA.com / Deseret News). The silver linings were real: No. 8 pick KINGSTON FLEMINGS shook off a 4-of-16 shooting night to post 14 points with game highs in assists (9) and steals (4) against a single turnover, No. 23 Zuby Ejiofor grabbed 11 rebounds with 3 steals, and Asa Newell led Atlanta with 15 as the Hawks erased a 16-point deficit with a late 9-0 run before falling in the extra frame (NBA.com / Peachtree Hoops / Bleacher Report). Next up is a Monday doubleheader of sorts: Hawks-Thunder at 7 PM ET in SLC, hours after the moratorium lifts at 12:01 PM ET and the McCollum, Landale, Wiggins and Carter moves become official. On the trade wire, the JONATHAN KUMINGA suitor list keeps widening (Cavs, Bucks, Lakers and Kings, with the Bulls, Nets and Blazers also now linked), while the Trey Murphy III pursuit is live but crowded, with the Celtics, Pistons, Warriors and Clippers also in the mix and Hield's $9.66M expiring still Atlanta's obvious matching salary.",
  keyTopics: [
    {
      title: "SL Opener: Hawks Fall 103-102 in OT to Peterson's Jazz, but Flemings (14-9-4 Steals) and Ejiofor (11 Boards) Impress in Debuts",
      detail:
        "Saturday's Salt Lake City opener went to the hosts: Utah 103, Atlanta 102 in overtime, with Jazz No. 2 overall pick Darryn Peterson scoring a game-high 28 (11-of-21, 4-of-7 from three) and burying the go-ahead three in the extra frame (ESPN / NBA.com / Yahoo Sports, Jul 4). The Hawks trailed by 16 midway through the second quarter, then forced five turnovers during a late 9-0 run to erase an 8-point deficit in the final 3:30 of regulation before Max Abmas' free throws sent it to OT. No. 8 pick Kingston Flemings shot just 4-of-16 but finished with 14 points and game highs in assists (9) and steals (4) against one turnover, exactly the lead-guard connective tissue Atlanta drafted him for (Peachtree Hoops / NBC Sports / RotoBaller, Jul 4). No. 23 Zuby Ejiofor stuffed the sheet with 8 points, 11 rebounds and 3 steals in 28 minutes; Asa Newell and undrafted Utah product Gabe Madsen led Atlanta with 15 apiece; No. 52 Henri Veesaar had a quiet 5 points in 18 minutes.",
      category: "games",
    },
    {
      title: "Monday Doubleheader: Hawks-Thunder at 7 PM ET in SLC, Hours After the Moratorium Lifts and Four Moves Become Official",
      detail:
        "Monday July 6 is the offseason's busiest day yet. On the floor, Atlanta faces Oklahoma City's summer squad at 7 PM ET at the Jon M. Huntsman Center, game 2 of 3 in Salt Lake City before Tuesday's finale vs Memphis and the Vegas opener July 9 (NBA.com / Peachtree Hoops). Off the floor, the moratorium lifts at 12:01 PM ET, making official the CJ McCollum extension (1yr, ~$21M with a 7.5% trade kicker), the Jock Landale return (1yr, $14M via nearly all of the Non-Taxpayer MLE), and the trades for Aaron Wiggins and Devin Carter (NBA.com / ClutchPoints / Bleacher Report free-agency trackers). Once the paperwork clears, Atlanta's larger trade machinery (Hield's expiring, the center hunt, any Kuminga sign-and-trade) can start executing rather than just talking.",
      category: "games",
    },
    {
      title: "Kuminga Suitor List Keeps Growing: Bulls, Nets and Blazers Now Linked Alongside Cavs, Bucks, Lakers and Kings",
      detail:
        "The Jonathan Kuminga market widened over the holiday weekend. Beyond the Cavaliers and Bucks sign-and-trade talks Scotto reported Thursday, weekend aggregation now also links the Bulls, Nets, Blazers and Clippers to the 23-year-old forward (Bleacher Report / Stadium Rant / Hoops Rumors, Jul 3-4). The Lakers are placing 'significant consideration' on him as a perimeter-defense upgrade, though LA is down to minimum-salary tools after the Kessler trade spending (Pro Football Network / heavy.com, Jul 4). Cleveland's interest runs through coach Kenny Atkinson from their Golden State overlap, but the Cavs are pressed against the aprons and have other dominoes to resolve first (Fear The Sword, Jul 4). Atlanta holds Kuminga's Non-Bird rights after declining the $24.3M option June 29, and Hoops Rumors notes a re-sign also remains on the table; with the roster effectively at 16 come Monday, a sign-and-trade that returns an asset stays the cleanest path.",
      category: "trades",
    },
    {
      title: "Fischer: Hawks Involved in Several Trade Scenarios Built on Buddy Hield's $9.66M Expiring Salary",
      detail:
        "Jake Fischer reported Thursday he is 'definitely hearing the Hawks are involved in several trade scenarios that could end up utilizing Buddy Hield's salary for 2026-27' (The Stein Line, Jul 2). Atlanta guaranteed the full $9.66M on June 28 for exactly this: a proven shooter on a movable expiring is ideal matching salary in any larger swing, most obviously the center hunt. With the backcourt now crowded by Kingston Flemings, Devin Carter and Aaron Wiggins, reporting is close to unanimous that Hield's number is likelier to be traded than played (ClutchPoints / Yahoo Sports / SportsTalk ATL, Jul 2).",
      category: "trades",
    },
    {
      title: "Murphy Watch: Hawks Remain in the Mix, but the Field Is Crowded (Celtics, Pistons, Warriors, Clippers) and a Deal Looks Closer",
      detail:
        "The Trey Murphy III pursuit is live but contested. Scotto's Friday report that Atlanta remains interested now sits alongside weekend reporting that the Celtics, Pistons, Warriors and Clippers are also in the mix for the Pelicans wing, and Pelicans-side coverage says a trade 'appears closer than ever' with a frontrunner emerging (SI onsi / Roundtable / Pelican Debrief, Jul 3-4). Atlanta and New Orleans discussed a Murphy deal built around the No. 8 pick before the draft; those talks died and the pick became Kingston Flemings, but the interest survived. Murphy, 26, averaged 21.5 points on roughly 38% from three last season, would slot next to Jalen Johnson as the two-way wing the roster lacks, and has an existing rapport with CJ McCollum from their Pelicans years. Hield's $9.66M expiring and the stockpiled picks are the obvious framework pieces (Soaring Down South, Jul 4).",
      category: "trades",
    },
    {
      title: "Jaylen Brown Traded to the 76ers for Paul George and Picks, Closing the Hawks' Longest-Running Trade Thread for Good",
      detail:
        "The thread that shadowed Atlanta's whole offseason is dead: Boston traded JAYLEN BROWN to Philadelphia on Thursday for Paul George, two first-round picks and two second-rounders (ESPN / Yahoo Sports / SI, Jul 2). The Atlanta-born star had been the Hawks' most-discussed hypothetical target since spring, with Marc Stein listing Atlanta among Brown suitors as recently as late June, but the Hawks never got close and POBO Onsi Saleh consistently pushed back on the 'one player away' framing. Brown instead lands with an East rival, joining a top of the conference that already includes the champion Knicks, Cleveland and a Giannis-led Heat, raising the degree of difficulty on Atlanta's climb.",
      category: "trades",
    },
    {
      title: "Landale Mechanics: Return Eats Nearly All of the $15M Non-Taxpayer Mid-Level, Official When the Moratorium Lifts July 6",
      detail:
        "New reporting fills in how the Jock Landale re-sign works: because Landale's Non-Bird rights are too low to reach $14M, Atlanta will use nearly all of its roughly $15M Non-Taxpayer Mid-Level Exception to complete the one-year deal (Hoops Rumors / Spotrac, Jul 1-2). That effectively closes the Hawks' main free-agent tool and confirms the rest of the offseason runs through the trade market. Landale, fully recovered from the Apr 1 right high-ankle sprain that cost him the Knicks series, slots back in as Onyeka Okongwu's veteran backup; the agreement becomes official Monday July 6.",
      category: "trades",
    },
    {
      title: "Center Board Check: Turner Interest Real but Bucks Not Shopping Him; Missi, Bitadze and Gafford the Previously Pursued Fallbacks",
      detail:
        "Where the center hunt stands as of Friday: Milwaukee has received interest in MYLES TURNER but is 'not actively engaged' in moving him and would need to be blown away to hurry, per Marc Stein and Jake Fischer (The Stein Line / Behind the Buck Pass, Jul 1-2). The Bucks' own center crunch (Turner, Kel'el Ware, Jericho Sims) keeps the door ajar, and Atlanta remains the most natural partner among teams hunting frontcourt help. If Turner stays put, SportsTalk ATL lists New Orleans' Yves Missi, Orlando's Goga Bitadze and Dallas' Daniel Gafford as centers Atlanta has pursued before who are generally regarded as available, with Hield's expiring the obvious matching salary.",
      category: "trades",
    },
    {
      title: "Okongwu Became Extension-Eligible July 1, and the Kuminga Exit Could Fund the Next Big Commitment",
      detail:
        "A quieter July 1 development with long-term stakes: ONYEKA OKONGWU is now eligible for a veteran extension on top of the two years and roughly $33M left on his current deal (Soaring Down South / Spotrac, Jul 1-2). Okongwu is coming off a career-best 15.2/7.6/3.1 season on 48% shooting as the post-Trae starting center, and with Kuminga's $24.3M off the books Atlanta has the medium-term flexibility to lock in its own. No talks have been reported yet; file it as the next contract conversation once the roster settles.",
      category: "general",
    },
    {
      title: "Hawks Add Guard Devin Carter and a 2033 Second-Rounder From Sacramento in a Kings Salary Dump",
      detail:
        "Atlanta deepened its bench on Monday. The Hawks acquired 24-year-old guard DEVIN CARTER and a 2033 second-round pick from the Sacramento Kings, a deal widely read as a straight Sacramento salary dump to duck under the luxury tax (NBA.com / SI onsi / NBC Sports / Atlanta News First, Jun 29). Carter, the No. 13 overall pick in 2024, has averaged 6.4 points, 2.7 rebounds and 1.9 assists across his first two NBA seasons on a $5.1M salary for the coming year. For Atlanta he profiles as cheap perimeter-defense depth behind a backcourt of CJ McCollum, Dyson Daniels and Nickeil Alexander-Walker, with Kingston Flemings and Aaron Wiggins also in the mix, the kind of low-cost value add POBO Onsi Saleh has prioritized over a splashy strike. Picking up a useful young guard and a future pick for taking on one expiring year is the sort of margin work a flexible cap sheet is built to enable.",
      category: "trades",
    },
    {
      title: "PICK: Hawks Draft Houston PG Kingston Flemings at No. 8, Their Guard of the Future and an A-Grade Swing",
      detail:
        "Atlanta's headline pick is in. The Hawks selected HOUSTON point guard KINGSTON FLEMINGS with the No. 8 overall pick Tuesday night, a 6'4 San Antonio native who averaged 20.3 points (56% true shooting), 6.6 assists and 1.9 steals as a freshman and earned Consensus Second-Team All-American honors (CBS Sports / SI / Peachtree Hoops / Bleacher Report / FOX 5 Atlanta, Jun 23). Scouts pin franchise-point-guard traits on him: a quick first step, surgical midrange touch and true playmaking vision, plus pesky on-ball defense that fits cleanly next to Dyson Daniels and Nickeil Alexander-Walker. He fills Atlanta's most glaring need, half-court shot creation that has been thin since the Trae Young trade, and profiles as CJ McCollum's eventual successor (McCollum just re-signed for one year). CBS Sports graded the pick an A while flagging the real questions: Flemings is listed at 183 pounds, his game skews midrange in a three-point league, and his efficiency dipped against the toughest late-season competition. Flemings said he is 'ready to work for Atlanta.' He likely comes off the bench early behind McCollum.",
      category: "general",
    },
    {
      title: "Risacher Trade Chatter Heats Up: Rival Teams Inquire, Sabonis Swap Floated, but Atlanta Holds Firm on an Anthony Davis Package",
      detail:
        "The Zaccharie Risacher market is active without being decided. Rival teams, Dallas among them, have called to inquire about the former No. 1 overall pick, and one analyst floated a Risacher-plus-No. 23 swing at Sacramento's Domantas Sabonis to solve the center need in one move (Pro Football Network / Roundtable / SI onsi, Jun). At the same time, Michael Scotto reports Atlanta is NOT offering Risacher plus the Pelicans' 2026 first-rounder to Dallas for Anthony Davis, a signal the front office still prizes the 21-year-old's upside. His value is the question: Risacher saw his role shrink in Year 2, averaging 9.6 points on 45% shooting across 66 games after a 12.6-point rookie season, lost his starting job after the All-Star break, and was out of the playoff rotation. The Aaron Wiggins addition further crowds his minutes, so the read stays the same: keep and develop first, but a larger deal can't be ruled out. He is owed $13.7M next season with a $17.8M team option for 2027-28.",
      category: "trades",
    },
  ],
  sources: [
    "NBA.com",
    "ESPN",
    "Hawks.com",
    "AJC",
    "Yahoo Sports",
    "Bleacher Report",
    "NBC Sports",
    "CBS Sports",
    "Sports Illustrated (SI/onsi)",
    "Hoops Rumors",
    "HoopsHype",
    "The Stein Line",
    "ClutchPoints",
    "RotoBaller",
    "Pelican Debrief",
    "Fear The Sword",
    "Stadium Rant",
    "Soaring Down South",
    "SportsTalk ATL",
    "Behind the Buck Pass",
    "Peachtree Hoops",
    "Roundtable",
    "Atlanta News First",
    "Pro Football Network",
    "Hoops Wire",
    "FOX 5 Atlanta",
    "SLC Dunk",
    "Deseret News",
    "Silver Screen and Roll",
    "BlueManHoop",
    "Basketball-Reference",
    "Spotrac",
  ],
};

// ─── Issue metadata (drives datelines, cover star, masthead) ───────────────
// Update `date` daily; everything else flows from KEY_DATES + NEWS_DIGEST.
export const ISSUE = {
  date: "2026-07-05",                              // YYYY-MM-DD — single source of truth
  volume: 26,                                       // VOL XXVI
  number: 19,                                       // Issue number (offseason cadence)
  dateline: "ATLANTA · JULY 5, 2026",               // Pre-formatted for display
  mastheadLine: "VOL XXVI · ISSUE NO. 19 · JULY 2026 · ATL · USA",
  railLabel: "ISSUE 19 · JULY 5",
  coverStarId: 1,                                   // PLAYERS[id] for the cover portrait
  coverRibbon: "SL OPENER: OT LOSS 103-102 · FLEMINGS 14-9-4 STL · THUNDER MONDAY 7PM ET",
  coverStatusKicker: "OFFSEASON · DAY 64",          // top-right corner of cover
  coverStatusLine: "MORATORIUM {DAYS:moratorium} · VEGAS SL {DAYS:sl-vegas}", // {DAYS:id} resolves from KEY_DATES
  backTagline: "Next issue: Hawks-Thunder in SLC, plus four moves turn official at noon.",
};

// ─── Cover TOC (table of contents on the cover) ────────────────────────────
// Each entry points at a real section id; rotates as story rotates.
export const COVER_TOC = [
  { kicker: "FEATURE",  page: 18, sectionId: "stry", title: "Saleh elevated — POBO with a mandate" },
  { kicker: "CALENDAR", page: 12, sectionId: "cal",  title: "The June gauntlet — six dates, one offseason" },
  { kicker: "DRAFT",    page: 28, sectionId: "drft", title: "Flemings at 8 — the guard of the future" },
  { kicker: "PATHS",    page: 50, sectionId: "path", title: "Four offseason scenarios, one editor's pick" },
  { kicker: "WIRE",     page: 68, sectionId: "wire", title: "Murphy III interest, Kuminga S&T talks, Hield in play" },
];

// ─── Editor's letter ───────────────────────────────────────────────────────
// `headline` is a token array — strings render as ivory, { red: "x" } renders red.
export const EDITORS_LETTER = {
  headline: ["The work doesn't end at ", { red: "89" }, "."],
  body: "Forty-six wins. A Southeast banner. Back-to-back Most Improved Players. An All-NBA Third Team nod for Jalen Johnson — the franchise's first since Trae Young. An All-Defensive Second Team finish for Dyson Daniels. And then — eighty-nine. The final score of the worst night, set against the loudest spring this franchise has produced in a decade. This issue holds both at once: the dossier on what just happened, and the road map for the six June dates that decide what happens next. Saleh in the chair. Snyder extended. McCollum re-signed, Wiggins in. And now Flemings at eight, Ejiofor at twenty-three.",
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
    hawksAngle: "Spurs won G7 — OKC eliminated; Thunder's Hartenstein option math reopens but he's still expected to stay" },
  { id: "finals-g1",   date: "2026-06-03",
    label: "NBA Finals Game 1",   short: "FINALS G1",   kind: "EVENT",
    hawksAngle: "Knicks open on road — same team that ended ATL's season 4-2 in R1" },
  { id: "draft",       date: "2026-06-23",
    label: "Draft Night",         short: "DRAFT",       kind: "EVENT",      primary: true,
    hawksAngle: "DONE. Hawks took Houston PG Kingston Flemings at #8, St. John's F/C Zuby Ejiofor at #23, and traded up from #57 to #52 for UNC C Henri Veesaar in Round 2." },
  { id: "hield-trig",  date: "2026-06-25",
    label: "Hield $9.66M trigger", short: "HIELD",       kind: "DEADLINE",
    hawksAngle: "DONE. Atlanta fully guaranteed Hield's $9.66M on Jun 28, keeping the shooter as a movable expiring" },
  { id: "kuminga-opt", date: "2026-06-29",
    label: "Kuminga option call", short: "KUMINGA",     kind: "DECISION",
    hawksAngle: "DECLINED (Shams, Jun 29). $24.3M option off the books · Kuminga to unrestricted FA · Kings a suitor" },
  { id: "fa-open",     date: "2026-06-30",
    label: "FA market opens",     short: "FA OPEN",     kind: "EVENT",      primary: true,
    hawksAngle: "DONE (Jun 30) · Landale 1yr/$14M ate nearly the full MLE · trade market now the tool" },
  { id: "sl-slc",      date: "2026-07-04",
    label: "SLC Summer League opener", short: "SL OPENER",  kind: "EVENT",      primary: true,
    hawksAngle: "Hawks vs Jazz, 5 PM ET, Huntsman Center · Flemings / Ejiofor / Veesaar debut · also Jul 6, 7" },
  { id: "moratorium",  date: "2026-07-06",
    label: "Moratorium ends",     short: "MORATORIUM",  kind: "EVENT",
    hawksAngle: "Signings official · sign-and-trades can finalize (Kuminga watch) · cap holds release" },
  { id: "sl-vegas",    date: "2026-07-09",
    label: "Las Vegas SL opener", short: "VEGAS SL",    kind: "EVENT",
    hawksAngle: "Hawks open Vegas on day one, ESPN2 · at least five games guaranteed" },
];

// ─── Draft Watch (2026 NBA Draft · June 23-24 · Barclays Center) ───────────
// Powers the Draft view. Refreshed alongside NEWS_DIGEST on the morning run.
// heat: "hot" (most-mocked) | "warm" (in range) | "cool" (dark horse / trade-down) | "fading" (likely gone before ATL picks)
export const DRAFT_DATA = {
  generatedAt: "2026-06-25T08:15:00Z",
  draftDate: "2026-06-23",
  venue: "Barclays Center · Brooklyn",
  broadcast: "ABC / ESPN",
  picks: [
    { round: 1, overall: 8,  via: "via New Orleans", made: true, selection: "Kingston Flemings · PG · Houston", note: "SELECTED: Houston PG Kingston Flemings, a 6'4 two-way lead guard (20.3 PPG, 6.6 APG, 1.9 SPG, Consensus Second-Team All-American). CJ McCollum's eventual successor; CBS Sports graded it an A." },
    { round: 1, overall: 23, via: "own", made: true, selection: "Zuby Ejiofor · F/C · St. John's", note: "SELECTED: St. John's F/C Zuby Ejiofor (16.3 PPG, 7.3 RPG), an energy-and-defense big who adds the interior physicality the Knicks series exposed." },
    { round: 2, overall: 52, via: "via LA Clippers (traded up from No. 57)", made: true, selection: "Henri Veesaar · C · North Carolina", note: "SELECTED: traded No. 57 (became Narcisse Ngoy) plus cash to the Clippers to move up. Veesaar is a 7-foot stretch big (17.0 PPG, 8.7 RPG, 1.2 BPG, 43% 3P as a UNC senior). Plus: scoring touch, length, passing. Minus: thin frame, poor lateral D, 61.5% FT." },
  ],
  bigBoard: [
    {
      rank: 1, name: "Mikel Brown Jr.", pos: "PG", school: "Louisville", classYr: "Freshman",
      height: "6'3", age: 19, heat: "hot", mockRange: "6-10",
      statline: "18.2 PPG · 4.7 APG · 3.3 RPG · 41.0 FG% · 34.4 3P% · 84.4 FT%",
      fit: "The most-mocked answer to Atlanta's lead-guard hole post-Trae. Scoring shotmaker with clever passing, needs touches and playmaking help. A fresh CBS Sports mock sends him back to the Hawks at No. 8.",
      flag: "Most-mocked",
    },
    {
      rank: 2, name: "Kingston Flemings", pos: "PG", school: "Houston", classYr: "Freshman",
      height: "6'3", age: 19, heat: "hot", mockRange: "7-12",
      statline: "Consensus Second-Team All-American",
      fit: "Two-way lead guard with franchise-PG traits. Adds half-court shot creation plus pesky perimeter defense next to Daniels and Alexander-Walker. CBS Sports' latest mock pairs him with Atlanta at No. 8.",
      flag: "Two-way upside",
    },
    {
      rank: 3, name: "Darius Acuff Jr.", pos: "PG", school: "Arkansas", classYr: "Freshman",
      height: "6'2", age: 19, heat: "fading", mockRange: "5-8",
      statline: "23.5 PPG · 6.4 APG · 3.1 RPG · 48.4 FG% · 44.0 3P% · 80.9 FT%",
      fit: "Explosive scoring guard, SEC Player of the Year and Consensus All-American as a freshman. The catch: Bleacher Report says the Kings at No. 7 view him as their draft 'floor,' so he may be gone before Atlanta is on the clock.",
      flag: "May not last to 8",
    },
    {
      rank: 4, name: "Aday Mara", pos: "C", school: "Michigan", classYr: "Sophomore",
      height: "7'3", age: 20, heat: "cool", mockRange: "8-16",
      statline: "7'3 rim-protecting big",
      fit: "The size-need dark horse if Atlanta trades down. Cleanest answer to the interior-defense problem the Knicks series exposed. ESPN's Jeremy Woo lists him as a live option; a Brett Siegel mock sends him to the Hawks.",
      flag: "Size if ATL trades down",
    },
    {
      rank: 5, name: "Yaxel Lendeborg", pos: "F", school: "Michigan", classYr: "Senior",
      height: "6'9", age: 22, heat: "cool", mockRange: "10-22",
      statline: "Two-way forward",
      fit: "A rising fit alongside Daniels and Alexander-Walker, adding positional size and defensive versatility on the wing. Surfaces in several mocks in Atlanta's range.",
      flag: "Wing depth",
    },
  ],
  scenarios: [
    {
      title: "The Jaylen Brown Domino",
      heat: "developing",
      detail: "If Boston wins the Giannis race, a Celtics package would likely be built around Jaylen Brown, draft capital and a role player or two (Hauser or Pritchard), and that frees Brown. Marc Stein lists the Hawks, Rockets and Trail Blazers as suitors. Brown grew up in the Atlanta area, so a homecoming fits, but the salary (three years, roughly $183M) would force Atlanta to package picks plus filler and could reshape its draft night.",
    },
    {
      title: "Trade Down for Size",
      heat: "live",
      detail: "ClutchPoints reports Saleh could move down slightly from No. 8 to land Aday Mara or Illinois big Morez Johnson Jr. plus extra capital, especially if the guard run starts early at picks 6 and 7. The Knicks series exposed Atlanta's lack of interior size.",
    },
    {
      title: "Field Offers for No. 23",
      heat: "live",
      detail: "League sources say Atlanta has told rival teams it will happily field offers for the No. 23 pick. Jake Fischer reports the Hawks are open to making just one first-round selection, consolidating into a single higher-upside swing or future capital.",
    },
    {
      title: "Trade Up",
      heat: "watch",
      detail: "If guards fly off the board at 6 and 7, Atlanta could package the No. 8 pick with Zaccharie Risacher to move up. Hollinger tags Risacher and Corey Kispert as the Hawks' likeliest summer trade chips.",
    },
  ],
  // ─── Draft Class · scouting reports + combine measurables ────────────────
  // The three players Atlanta actually drafted. Measurables are 2026 NBA
  // Draft Combine numbers (barefoot height + reach where reported).
  draftClass: [
    {
      overall: 8, round: 1, name: "Kingston Flemings", pos: "PG", school: "Houston",
      classYr: "Freshman", age: 19, via: "via New Orleans", grade: "A",
      statline: "20.3 PPG · 6.6 APG · 1.9 SPG · 56% TS",
      accolade: "Consensus Second-Team All-American",
      measurables: {
        heightBarefoot: "6'2.5\"", weight: "183 lb", wingspan: "6'3.5\"",
        standingReach: "8'2.5\"", maxVert: "40.5\"", noStepVert: "33.5\"",
      },
      strengths: [
        "Surgical midrange touch and true point-guard vision",
        "Quick first step and downhill shot creation Atlanta has lacked since Trae",
        "Pesky on-ball defender who fits next to Daniels and Alexander-Walker",
      ],
      weaknesses: [
        "Thin 183-lb frame, below-average length (6'3.5\" wingspan) for an NBA guard",
        "Game skews midrange in a three-point league",
        "Efficiency dipped against the toughest late-season competition",
      ],
      fit: "Profiles as CJ McCollum's eventual successor and the half-court creator the Hawks have missed. Likely opens behind McCollum, who is on a one-year bridge deal.",
      sources: "CBS Sports / SI / Peachtree Hoops / DraftExpress combine",
    },
    {
      overall: 23, round: 1, name: "Zuby Ejiofor", pos: "F/C", school: "St. John's",
      classYr: "Senior", age: 22, via: "own", grade: "B+",
      statline: "16.3 PPG · 7.3 RPG · 30.5% 3P",
      accolade: "Big East defensive anchor",
      measurables: {
        heightBarefoot: "6'7.5\"", weight: "245 lb", wingspan: "7'2\"",
        standingReach: "8'11\"", maxVert: "38\"", noStepVert: null,
      },
      strengths: [
        "Plays with force that should translate immediately: rebounds, contests, runs the floor",
        "7'2\" wingspan and 245-lb frame give him real interior physicality",
        "Improved into a more capable post scorer and passer as a senior",
      ],
      weaknesses: [
        "Just 6'7.5\" barefoot, short for a true NBA center",
        "Jumper still theoretical (30.5% from three) and limits floor spacing",
        "A developmental body behind Okongwu, not a ready starter",
      ],
      fit: "Directly targets the interior toughness the Knicks series exposed. Energy-and-defense big who can grow behind Onyeka Okongwu while Atlanta also shops the veteran-center market.",
      sources: "CBS Sports / Bleacher Report / Yahoo combine",
    },
    {
      overall: 52, round: 2, name: "Henri Veesaar", pos: "C", school: "North Carolina",
      classYr: "Senior", age: 21, via: "via LAC (up from No. 57)", grade: "B",
      statline: "17.0 PPG · 8.7 RPG · 1.2 BPG · 43% 3P",
      accolade: "Estonia · Arizona transfer breakout",
      measurables: {
        heightBarefoot: "6'11.25\"", weight: "227 lb", wingspan: "7'2\"",
        standingReach: "9'3\"", maxVert: null, noStepVert: null,
      },
      strengths: [
        "7-footer who shot 43% from three: rare stretch-five spacing",
        "Mobile rim-diver and finisher; passes out of the midpost",
        "Uses 7'2\" length as a help-side shot challenger",
      ],
      weaknesses: [
        "Thin 227-lb frame; gets bullied by stronger NBA bigs",
        "Poor lateral quickness, struggles to defend in space, foul-prone",
        "61.5% free-throw shooting NBA defenses can hunt",
      ],
      fit: "The stretch-five fans hoped for, worth a late-second trade-up. Spaces the floor next to Okongwu in theory; the defense and strength are multi-year projects.",
      sources: "SI / Bleacher Report / Peachtree Hoops / Tar Heel Blog",
    },
  ],
  sources: [
    "ESPN", "Yahoo Sports", "CBS Sports", "Bleacher Report", "ClutchPoints",
    "HoopsHype", "The Stein Line", "NBC Sports", "SI (onsi)", "Peachtree Hoops",
    "DraftExpress", "Tankathon", "Tar Heel Blog",
  ],
};

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
  { take: "Snyder extension signs before Draft Night ✓ HIT (Jun 8)", confidence: 100 },
  { take: "Saleh declines Kuminga's $24.3M option",              confidence: 65 },
  { take: "McCollum re-signs at 2yr / ~$36M",                    confidence: 70 },
  { take: "No Jaylen Brown trade — Hawks pass on $53.1M",       confidence: 75 },
  { take: "Hawks pick a guard at #8 (Brown Jr. or Flemings) ✓ HIT (Flemings)", confidence: 100 },
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
