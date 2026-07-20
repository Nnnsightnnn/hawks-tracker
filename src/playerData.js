// ─── Atlanta Hawks Player Data (2025-26 Season · Updated Monday July 20, 2026 — OFFSEASON · FRESH: THREE-TEAM TRADE
// (Sun Jul 19 · ESPN / NBA.com / Hoops Rumors) — ATLANTA RECEIVES LUGUENTZ DORT AND RYAN NEMBHARD FROM OKLAHOMA CITY;
// ZACCHARIE RISACHER GOES TO DALLAS; OKC RECEIVES THREE SECOND-ROUND PICKS (CHI 2027 via DAL, ATL most favorable 2031
// and 2032). Dort: 27, 2025 champion, All-Defensive First Team, $17.7M expiring. Roster now 17 standard contracts
// against a 15-man limit, so two more moves are coming before camp. The added salary is widely read as closing the
// Kuminga sign-and-trade with the Lakers. Cap: ~$4M under the tax, >$50M in expiring salary (Dort/McCollum/Landale)
// to trade with in-season, >$40M in cap space next summer. PLAYERS[] updated: Risacher entry replaced by Dort (id 6);
// Aaron Wiggins (id 16, acquired from OKC Jul 6) and Ryan Nembhard (id 17) added. NOTE: Atlanta jersey numbers for
// Dort, Wiggins and Nembhard have not been announced, so `number` is null for those three and the UI renders an em dash.
// PRIOR HEADER: WCF GOING SEVEN — San Antonio routed OKC 118-91 in Game 6 (Thu May 28 · Wembanyama 28-10-3, SGA 15 on 6-18); winner-take-all GAME 7 Sat May 30 · 8:30 PM ET · NBC/Peacock · Paycom Center, OKC · HAWKS FRONT OFFICE: ONSI SALEH PROMOTED TO PRESIDENT OF BASKETBALL OPERATIONS + LONG-TERM EXTENSION (Wed May 27 · ESPN / Washington Post / Yahoo Sports / SI onsi / Hoops Rumors) — the 2026 Executive-of-the-Year runner-up locks in after Atlanta denied Philadelphia permission to interview him for the 76ers' job · NBA FINALS ARE SET FOR EAST: Knicks swept Cleveland 4-0 (Brunson ECF MVP), first Finals trip since 1999, open on the road Wed June 3 · Hawks ledger steady: Johnson All-NBA Third Team, NAW MIP, Daniels All-Def 2nd Team · Quin Snyder 'massive' eight-figure extension still expected before Draft Night · 25 days to Draft Night Jun 23, 5 days to NBA Finals Game 1) ─
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
    recentNotes: "SUNDAY JULY 19 (offseason): the summer ended Saturday with a 91-83 Summer League loss to Washington, and the roster around Johnson is still unfinished. SATURDAY JULY 11 (offseason): the offseason is still being built around him, but the pieces are getting harder to move. The Kuminga sign-and-trade to the Lakers stalled this week over Jarred Vanderbilt's salary, and the Murphy III frameworks now ask for Alexander-Walker and Okongwu, which would rob one hole to fill another. Murphy remains the cleanest stylistic fit alongside Johnson: a 21.5 PPG two-way wing to ride shotgun. The Hield-salary scenarios and the center hunt (Myles Turner the name to watch post-Giannis in Milwaukee) are all about finding Johnson a sturdier supporting cast, with No. 8 pick Kingston Flemings drafted as backcourt creation to grow alongside him. All-NBA Third Team (first Hawk honored since Trae Young in 2022) after a 22.5/10.3/7.9 season, just the fifth player ever to average 22-10-7; locked in on his ~$30M/yr extension through 2029-30. Jaylen Brown, the perennial rumored co-star, went to Philadelphia instead Thursday, so internal growth plus one more trade is the plan.",
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
    recentNotes: "MONDAY JULY 13 (offseason): THE JUMPER LOOKS DIFFERENT. Video posted to Daniels' own Instagram story shows a visibly reworked, smoother shooting form after a summer of dedicated work on the shot, and the Atlanta fan reaction has been loud (ClutchPoints, Jul 11-12). Worth naming the other side of his summer: with Flemings drafted at No. 8 and Aaron Wiggins signed, the backcourt is crowded, and Daniels (46% of his minutes at the two last season) has more competition for those minutes than he has had in Atlanta. Call it the highest-leverage development of the Hawks' offseason: an All-Defensive guard who tied for the NBA lead in steals (2.0) shot 18.8% from three last season (22-of-117), and even a league-average jumper would change the ceiling of the starting five. Encouraging, not conclusive, until it survives live defense. PRIOR (JUNE 24) — With Houston PG Kingston Flemings drafted at No. 8 to add backcourt creation, Daniels' offseason boss is now PRESIDENT OF BASKETBALL OPS ONSI SALEH (promoted from GM + extended long-term Wed May 27 per ESPN / Washington Post / Yahoo / SI onsi / Hoops Rumors). NBA ALL-DEFENSIVE SECOND TEAM nod (announced Fri May 22; NBA.com / AJC / Atlanta News First / Roundtable) is his second straight year on an All-Defense team after making FIRST TEAM in 24-25. He drew 9 first-place and 32 second-place votes from the 100-member global media panel (50 points, 10th in overall voting) and tied for the NBA lead in steals per game at 2.0 with OKC's Cason Wallace; Atlanta posted a top-10 defensive rating for the first time in nearly a decade with Daniels as the primary point-of-attack defender. The Second-Team finish — down from First Team a year ago — tracks a hard offensive year: his three-point shooting cratered to 18.8% (22-of-117), and Daniels has spoken candidly about getting into a 'dark place' mentally, planning an LA summer to rebuild the jumper and 'get stronger.' Victor Wembanyama was the unanimous DPOY and lone unanimous All-Defense 1st-teamer; Daniels was not a 2026 DPOY finalist after finishing runner-up in 25. AROUND THE LEAGUE: THE KNICKS ARE 2026 CHAMPIONS, closing San Antonio 94-90 in Game 5 Sat Jun 13 to take the Finals 4-1 (NY's first title since 1973), Brunson 45 and Finals MVP; the same team that ended Atlanta's season in six finished the job. Regular-season line of 11.9/6.8/5.9 on 2.0 stl across 80 games (76 starts) is the locked baseline; four-year, $100M rookie extension (signed Oct 2025 per ESPN / NBA.com) kicks in next season; not trade-eligible until July 1, 2026.",
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
    recentNotes: "SATURDAY JULY 11 (offseason — NEW: NAW HAS ENTERED THE TRADE CONVERSATION. Most insider frameworks for a Trey Murphy III deal now center Atlanta's package on Alexander-Walker and Onyeka Okongwu, a shift from the earlier Risacher-and-Hield constructions (Fadeaway World / Yahoo Sports / SI onsi, Jul 9-10). Nothing is close: New Orleans is not shopping Murphy and says it must be blown away. Treat this as market chatter, not a live deal, but it is the first time the reigning MIP's name has surfaced as the headliner going out): MIP trophy still the through-line, 48 days past the Apr 24 Kia Most Improved Player ceremony where NAW took 66 of 100 first-place votes ahead of finalists Deni Avdija and Jalen Duren (NBA.com / Washington Post / Yahoo Sports / Hoops Rumors / Atlanta News First). Career-best 20.8/3.4/3.7 on 39.9% from three (251 makes — Hawks single-season record, 4th in the NBA); 11.4-PPG jump from 24-25 is the third-largest single-season scoring increase in 25 years. NAW is the second consecutive Hawks player and third overall to win MIP since the award debuted in 1985-86 — FIRST FRANCHISE EVER with back-to-back winners (Daniels won 24-25). R1 scoring settled at 13.4 PPG; the only ATL perimeter player above 33% from three across the full six. NAW was also drafted by Bryson Graham in New Orleans — Graham now runs the Bulls' front office (NBA-high $58M cap room per Chicago Sun-Times). Locked in long-term on the four-year, $62M deal he signed last summer.",
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
    recentNotes: "TUESDAY JULY 7 (offseason): OFFICIAL. McCollum's one-year, roughly $21M extension with a trade kicker (agreed Jun 22 per ESPN / NBA.com / Yahoo Sports) was formally executed Monday when the moratorium lifted. He returns as the bridge point guard and mentor for No. 8 pick Kingston Flemings, drafted as his eventual successor. Final regular-season line: 18.7/3.1/4.1 on 45.2/38.1/82.7 across 41 Hawks games after the January trade, then 19.2 PPG in the six-game Knicks series. Turns 35 in September; the one-year structure keeps the books flexible.",
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
    recentNotes: "SUNDAY JULY 19 (offseason): extension-eligible since July 1 with two years and roughly $33M left, coming off a career-best 15.2 / 7.6 / 3.1 on 48% shooting. Local projections land near three or four years in the $22M to $25M range annually. No talks reported yet, and the tension is that some of the same insiders calling him a long-term keeper also slot him into Murphy III packages. SATURDAY JULY 18 (offseason): STILL THE STARTING CENTER, STILL EXTENSION-ELIGIBLE, STILL IN EVERY FRAMEWORK. Nothing new was reported on Okongwu this week, which is itself the story: he is coming off a career-best 15.2 points, 7.6 rebounds, 3.1 assists, 1.1 blocks and 1.1 steals in 31.0 minutes across 74 games on 48% shooting, became extension-eligible July 1 on top of two years and roughly $33M remaining, and local projections put a new deal near four years and $80M. Mouhamed Gueye's foot surgery (out 3-4 months) raises the stakes on the frontcourt behind him. PRIOR: MONDAY JULY 13 (offseason): OUT OF THIS WEEK'S MURPHY PACKAGE, BACK ON THE EXTENSION CLOCK. The newest floated Trey Murphy III framework builds Atlanta's offer around Risacher, Kispert and three firsts (Fadeaway World / Yahoo Sports, Jul 11-12), which pulls Okongwu back out of the construction that carried his name last week. That tension was always the tell: Atlanta has spent the summer hunting a center, so dealing its starting one to buy a wing was never a comfortable fit. Meanwhile he has been EXTENSION-ELIGIBLE since Jul 1 on top of the two years (~$33M) left on his deal, with local projections landing near four years and $80M against a rising cap (Soaring Down South / Spotrac, Jul); no talks reported. Career-best 15.2/7.6/3.1 on 48.0% FG with 1.1 blk across 74 games. Landale returns behind him on a 1yr/$14M deal. Played R1 through right-knee inflammation (11.3/5.7/1.7).",
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
    id: 6, name: "Luguentz Dort", number: null, position: "SG", nationality: "🇨🇦 Canada", age: 27,
    gamesPlayed: 69, gamesStarted: null, minutesPerGame: 26.8,
    pointsPerGame: 8.3, reboundsPerGame: 3.6, assistsPerGame: 1.2,
    stealsPerGame: 0.9, blocksPerGame: 0.4, turnoversPerGame: 1.0,
    fieldGoalPct: 38.5, threePointPct: 34.4, freeThrowPct: null,
    trueShootingPct: 52.4, plusMinus: null,
    form: 6.0, status: "active", injuryNote: null,
    recentNotes: "SUNDAY JULY 19 (offseason): NEW HAWK. Atlanta acquired Dort and Ryan Nembhard from Oklahoma City in a three-team deal that sent Zaccharie Risacher to Dallas and three second-round picks to the Thunder (ESPN / NBA.com / Hoops Rumors, Jul 19). OKC had picked up his $17.7M team option earlier in the offseason and moved him for picks as part of a $200M cost-cutting summer that also shipped out Isaiah Joe and Aaron Wiggins. What Atlanta bought: a 27-year-old All-Defensive First Team wing and 2025 NBA champion to pair with Dyson Daniels and Nickeil Alexander-Walker, giving Quin Snyder three point-of-attack defenders in one rotation. What it costs: the offense. Dort is coming off the worst shooting year of his career, 38.5% from the field and 34.4% from three on 8.3 points in 26.8 minutes across 69 games, down from 43.5/41.2 the year before, and his minutes were the lowest since his rookie season. Projections have him coming off the bench in Atlanta with heavy minutes rather than starting. His deal expires after 2026-27, which is the other half of the point: between Dort, CJ McCollum and Jock Landale the Hawks now hold more than $50M in expiring salary to trade with in-season, and over $40M in cap space next summer.",
    playoffStats: null,
    playoffSeries: null,
    minutesTrend: "down",
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1629652.png",
    physical: { height: 76, weight: 220 },
    career: [
      { years: "2019", team: "Undrafted (Arizona State)", type: "draft" },
      { years: "2019-2026", team: "Oklahoma City Thunder", type: "senior" },
      { years: "2026-", team: "Atlanta Hawks (via OKC/DAL three-team trade, Jul 2026)", type: "senior" },
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
    recentNotes: "MONDAY JULY 20 (offseason): THE DORT TRADE MAY HAVE CLOSED THE DOOR. Sunday's three-team deal pushed Atlanta to 17 players and, per reporting on the aftermath, likely takes off the table the sign-and-trade construction in which the Lakers send back unwanted contracts plus a pick swap or a second: the Hawks no longer have the roster room and no longer want LA's back-end money (Yahoo Sports / Hoops Rumors / Heavy, Jul 19-20). Kuminga is an unrestricted free agent after Atlanta declined his $24.3M option Jun 29, and without a sign-and-trade his open-market number falls well short of the roughly $25M his camp has sought. PRIOR, SUNDAY JULY 19 (offseason): still unresolved. The Lakers sign-and-trade sits between two contradictory reports, one saying Atlanta would accept Jarred Vanderbilt ($12.4M) plus LA's 2032 first-round swap, the other saying the Hawks never considered taking Vanderbilt's salary at all. Kuminga's camp is reportedly seeking near $25M annually; a sign-and-trade could get him north of $20M, an outright signing far less. Jake Fischer reads the talks as having lost momentum. SATURDAY JULY 18 (offseason): THE IMPASSE HARDENS, AND THE REPORTS STILL DISAGREE. A source told the New York Post the Hawks are willing to execute the sign-and-trade sending Kuminga to the Lakers for Jarred Vanderbilt (about $12.4M) plus LA's 2032 first-round swap (Yahoo Sports / Silver Screen and Roll / Lakers Nation, Jul 16-17), while Hoops Rumors and Heavy counter that Atlanta has never considered taking back Vanderbilt and is seeking more than the Lakers can offer. Jake Fischer says the talks have lost momentum, with a sign-and-trade now the only realistic path: LA can get north of $20M to Kuminga that way against his roughly $25M ask, versus starting near $10M outright. PRIOR: MONDAY JULY 13 (offseason): THE REPORTING NOW CONTRADICTS ITSELF. Khobi Price (The California Post) says Atlanta WOULD have interest in a sign-and-trade returning Jarred Vanderbilt plus the Lakers' 2032 first-round swap, the only first-round equity LA can move this summer after the Walker Kessler deal with Utah. Jake Fischer (The Stein Line) says the Hawks have been resistant and have NOT considered taking Vanderbilt back at all, meaning a third team would have to absorb him (Lakers Nation / Hoops Rumors / Yahoo Sports / Heavy, Jul 10-12). Both cannot be true, so treat the framework as unresolved rather than close. Cap math explains the resistance: Atlanta sits about $11.4M under the first apron and Vanderbilt is owed roughly $48M in total. The player-side gap is separate and still wide, with LA around $10M AAV and Kuminga seeking near $25M. Atlanta holds his Non-Bird rights after declining the $24.3M option Jun 29. With the roster at 16 (and needing to clear two spots if he returns), an S&T that returns an asset stays the cleanest path. Hawks line: 12.3 PPG / 5.3 RPG in 22.1 mpg across 16 games.",
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
    recentNotes: "SUNDAY JULY 19 (offseason): still the likeliest man out. Reporting through the week has Hield remaining in trade conversations, with Jake Fischer describing multiple Atlanta scenarios that use his salary; if any Hawk moves before the end of July, consensus says it is him. Atlanta fully guaranteed the $9.66M expiring specifically to keep it as matching salary, and the backcourt got deeper still with Kingston Flemings drafted at No. 8 and Aaron Wiggins acquired. There was Miami smoke earlier in the offseason, though his market is less clear now that the money is locked in. MONDAY JULY 13 (offseason): NOW THE FIRST NAME IN THE ROSTER-CRUNCH MATH. Atlanta sits at 16 standard contracts with a 15-man limit, and would need to clear TWO spots if Kuminga returns; reporting this week keeps landing on Hield and Kispert as the likeliest moves, with Hield the easier of the two because his $9.66M is a single expiring year against Kispert's three (SI onsi / Hoops Rumors, Jul 10-12). Fischer separately has the Hawks in several trade scenarios that could use that salary (The Stein Line, Jul 2), and it is the obvious money in any center swing (Turner, or the previously pursued Missi / Bitadze / Gafford). With Flemings, Carter and Wiggins added, a trade looks likelier than a rotation role. Season line: 11.8/2.8/2.1 on 39.8% from three across 71 games (12 starts).",
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
    recentNotes: "SUNDAY JULY 19 (offseason): the harder contract to move. Kispert shoots well enough to have a market in theory, but three years of remaining salary and defensive limitations make him the second name on the trim list behind Buddy Hield rather than the first. MONDAY JULY 13 (offseason): IN BOTH OF THIS WEEK'S EXIT ROUTES. Kispert is named alongside Hield as the likeliest roster-crunch casualty (Atlanta is at 16 with a 15-man limit, two over if Kuminga returns), and he also headlines the newest floated Trey Murphy III package with Risacher and three first-round picks (SI onsi / Hoops Rumors / Fadeaway World, Jul 10-12). The contract is the friction: three years left makes him harder to move than Hield's single expiring year, and the shooting does not fully offset the defensive shortcomings. PRIOR (SUNDAY JUNE 21, offseason — PRESIDENT OF BASKETBALL OPS ONSI SALEH promoted + extended Wed May 27 per ESPN / Washington Post / Yahoo / SI onsi / Hoops Rumors; SPURS TOOK WCF GAME 7 111-103 Sat May 30 (Wembanyama 22-7), ousting OKC to reach the Finals; THE KNICKS ARE 2026 CHAMPIONS, closing San Antonio 94-90 in Game 5 Sat Jun 13 to take the Finals 4-1 (NY's first title since 1973), Brunson 45 and Finals MVP; the same team that ended Atlanta's season in six finished the job) — Likeliest summer trade chip alongside Risacher, and Saleh as new POBO owns the call. Hollinger explicitly names Kispert (with Risacher) as the likeliest summer trade chip; cap notes show $14.6M next season then a $17.4M cap hit in 27-28. Salary-matching utility in any Jaylen Brown framework is real — the No. 8 pick plus Kispert plus Hield's $9.4M would clear the $57M Brown number per Hoops Rumors / Boston.com / Larry Brown Sports (May 10-22). Regular season line of 9.6/2.4/1.3 on 40.2% from three in 40 games (8 starts) was the post-trade Hawks portion.",
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
    form: 5.8, status: "out", injuryNote: "Left foot fracture (surgery Tuesday Jul 14 at Emory, re-eval in 3-4 months, likely misses start of 2026-27 season — ESPN / Hoops Rumors, Jul 16)",
    recentNotes: "THURSDAY JULY 16 (offseason) INJURY: Gueye fractured his left foot in a July 8 workout and had surgery Tuesday at the Emory Sports Medicine Complex; the Hawks will re-evaluate in three to four months, so he is set to miss training camp, the preseason and likely the start of the 2026-27 season (ESPN / Atlanta News First / Hoops Rumors, Jul 16). Atlanta had exercised his $2.41M team option June 27, a cheap hold on a switchable 6'10 depth big. The injury sharpens the roster-crunch math and adds to the case for adding frontcourt size behind Onyeka Okongwu.",
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
    recentNotes: "SUNDAY JULY 19 (offseason): summer's over. Newell was held out of both the Memphis and Washington finales, ending his Vegas run early; the high-water mark stays the 15 points and five rebounds in the Salt Lake City opener against San Antonio. WEDNESDAY JULY 15 (Summer League): RESTED FOR THE BOSTON WIN, EXPECTED BACK THURSDAY. Newell and No. 8 pick Kingston Flemings both sat out Monday's 102-90 win over the Celtics, and Atlanta ran Boston off the floor anyway behind Kobe Johnson (30) and Henri Veesaar (20), moving to 3-0 in Vegas and 5-0 on the summer (NBA.com / ESPN, Jul 13). After Tuesday's off day, he is expected back for Thursday's group-stage finale against Memphis (8 PM ET). Newell's summer body of work before the rest day: 15 points, five rebounds and two assists in the 93-66 rout of San Antonio, a 13-point, 7-rebound, 3-assist night in the OKC comeback, and a team-high 15 in the SLC opener (NBA.com / ESPN / AJC, Jul 4-11). That is a steady, assertive summer, exactly what his second year needed: after a rookie season of 44 games, 5.2 PPG and 38.7% from three (best among rookies at min 10 attempts), he is building a real case for the third-big role with Kuminga off the books. The competition is real, though, and it grew Monday: Veesaar's 20 on 7-of-12 (4-of-6 from three) was the loudest frontcourt statement of the summer, and Zuby Ejiofor (19 and 15 vs OKC) is chasing the same minutes.",
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
    recentNotes: "OFFICIAL AS OF MONDAY JULY 6: one year, $14M, agreed Jun 30 (AP / Shams / SI onsi / Peachtree Hoops) and executed when the moratorium lifted. Because his Non-Bird rights are too low, Atlanta used nearly all of its ~$15M Non-Taxpayer Mid-Level to complete the deal (Hoops Rumors / Spotrac), which closes the Hawks' main free-agent tool. Fully recovered from the Apr 1 right high-ankle sprain; slots back in as Okongwu's veteran backup while the center hunt continues on the trade market.",
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
  {
    id: 16, name: "Aaron Wiggins", number: null, position: "SG", nationality: "🇺🇸 USA", age: 27,
    gamesPlayed: 65, gamesStarted: null, minutesPerGame: 21.8,
    pointsPerGame: 9.4, reboundsPerGame: 3.1, assistsPerGame: 1.7,
    stealsPerGame: 0.9, blocksPerGame: 0.3, turnoversPerGame: 1.0,
    fieldGoalPct: 43.1, threePointPct: 35.6, freeThrowPct: 73.6,
    trueShootingPct: null, plusMinus: null,
    form: 5.5, status: "active", injuryNote: null,
    recentNotes: "Acquired from Oklahoma City on July 6 for 2030 and 2032 second-round picks, a low-cost add for a 6-foot-5 wing with a 6-foot-10 wingspan who can guard up to the three (NBA.com / SI onsi / Yahoo Sports, Jul 6). He arrives off a down year: 9.4 points on 43.1% shooting and 35.6% from three across 65 games, both career lows after three seasons near 51% and 41%. The bet is that the shooting regresses back toward his OKC norm. Projected as a rotation regular on the wing.",
    playoffStats: null,
    playoffSeries: null,
    minutesTrend: null,
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1630598.png",
    physical: { height: 77, weight: 190 },
    career: [
      { years: "2021", team: "Drafted #55 overall by OKC", type: "draft" },
      { years: "2021-2026", team: "Oklahoma City Thunder", type: "senior" },
      { years: "2026-", team: "Atlanta Hawks (via trade, Jul 2026)", type: "senior" },
    ],
  },
  {
    id: 17, name: "Ryan Nembhard", number: null, position: "PG", nationality: "🇨🇦 Canada", age: 23,
    gamesPlayed: 60, gamesStarted: 27, minutesPerGame: 19.5,
    pointsPerGame: 6.6, reboundsPerGame: 2.2, assistsPerGame: 5.3,
    stealsPerGame: null, blocksPerGame: null, turnoversPerGame: null,
    fieldGoalPct: 41.5, threePointPct: 35.6, freeThrowPct: 80.6,
    trueShootingPct: null, plusMinus: null,
    form: 5.8, status: "active", injuryNote: null,
    recentNotes: "Came over from Dallas in the Sunday three-team trade as the second piece alongside Lu Dort (ESPN / NBA.com, Jul 19). Undrafted out of Gonzaga in 2025, he signed a two-way with the Mavericks, played his way onto a standard multi-year deal on March 1 after Dallas waived Tyus Jones, and finished the rookie year at 6.6 points and 5.3 assists in 19.5 minutes across 60 games with 27 starts. His calling card is the regular-season finale against Chicago: 15 points, nine rebounds and 23 assists, breaking Jason Kidd's 1995 single-game rookie assist record. On an expiring deal, he adds a third lead-guard option behind CJ McCollum and Kingston Flemings, which also makes him part of the roster-crunch math.",
    playoffStats: null,
    playoffSeries: null,
    minutesTrend: null,
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1642948.png",
    physical: { height: 71, weight: 175 },
    career: [
      { years: "2025", team: "Undrafted (Gonzaga)", type: "draft" },
      { years: "2025-2026", team: "Dallas Mavericks", type: "senior" },
      { years: "2026-", team: "Atlanta Hawks (via OKC/DAL three-team trade, Jul 2026)", type: "senior" },
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
  "Washington Wizards":    "https://cdn.nba.com/logos/nba/1610612764/primary/L/logo.svg",
  "Washington":            "https://cdn.nba.com/logos/nba/1610612764/primary/L/logo.svg",
  "San Antonio Spurs":     "https://cdn.nba.com/logos/nba/1610612759/primary/L/logo.svg",
  "San Antonio":           "https://cdn.nba.com/logos/nba/1610612759/primary/L/logo.svg",
  "Oklahoma City Thunder": "https://cdn.nba.com/logos/nba/1610612760/primary/L/logo.svg",
  "Oklahoma City":         "https://cdn.nba.com/logos/nba/1610612760/primary/L/logo.svg",
  "Los Angeles Lakers":    "https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg",
  "New Orleans Pelicans":  "https://cdn.nba.com/logos/nba/1610612740/primary/L/logo.svg",
};

// ─── Next Game ─────────────────────────────────────────────────────────────
// Season ended Apr 30 in Game 6 elimination by the Knicks. Next on the calendar:
// 2026 NBA Draft Lottery on May 10 (ATL holds the more-favorable of NOP/MIL plus CLE No. 24).
export const NEXT_GAME = {
  opponent: "Memphis Grizzlies",
  shortName: "MEM",
  home: true,
  date: "2026-10-05T19:00:00-04:00",
  competition: "PRESEASON",
  venue: "State Farm Arena, Atlanta",
  broadcast: "TBD",
  seriesContext: "THE OFFSEASON JUST GOT LOUD. Atlanta acquired LUGUENTZ DORT and RYAN NEMBHARD from Oklahoma City on Sunday in a three-team trade that sent 2024 No. 1 overall pick ZACCHARIE RISACHER to Dallas and three second-round picks to the Thunder (Chicago's 2027 via Dallas, plus Atlanta's most favorable 2031 and 2032). Dort is a 27-year-old 2025 champion and All-Defensive First Team wing on an expiring $17.7M contract; alongside Dyson Daniels and Nickeil Alexander-Walker he gives Quin Snyder three point-of-attack defenders, though he arrives off career lows of 38.5% from the field and 34.4% from three, and projects to come off the bench with heavy minutes. THE MATH: the roster is now at 17 standard contracts against a 15-man limit, so two more moves are coming before camp, with Buddy Hield the likeliest trim and Corey Kispert the harder contract to move. The added salary is also widely read as closing the door on the JONATHAN KUMINGA sign-and-trade with the Lakers. What Atlanta gets back is flexibility: about $4M under the tax, more than $50M in expiring salary between Dort, CJ McCollum and Jock Landale to trade with in-season, and north of $40M in cap space next summer. STILL ON THE BOARD: the center hunt (Myles Turner the name to watch in post-Giannis Milwaukee), and Onyeka Okongwu's extension eligibility. INJURY: MOUHAMED GUEYE is three to four months from re-evaluation after surgery on a fractured left foot, so camp, the preseason and likely the start of the regular season are in doubt. NEXT ON THE CALENDAR: the Oct 5 preseason opener against Memphis at State Farm Arena, first of five exhibitions that end at Dallas on Oct 16. PRIOR EDITION (Jul 19): SUMMER IS OVER, THIS TIME FOR REAL. Washington beat Atlanta 91-83 at the Pavilion on Saturday night, closing the Hawks' Summer League at 5-2 overall (3-2 in Las Vegas). The Wizards led from a 24-15 first quarter and closed on a 22-17 run over the final seven minutes; Atlanta shot 42% from the floor and just 16% from three, and was out-assisted 22-18. Devon Higgs led the Hawks with 22 points and seven rebounds, Gabe Madsen added 13, Kobe Johnson had 13 in his closing two-way audition, and Isaiah Wong went for nine and nine. Kingston Flemings and Asa Newell did not play. The Vegas title game is Sunday night, Memphis against Golden State, with Atlanta long since out of the bracket. THE CALENDAR NOW JUMPS TO OCTOBER: the preseason opener is Oct 5 against Memphis at State Farm Arena, the first of five exhibitions that end at Dallas on Oct 16. OFF THE FLOOR: forward Mouhamed Gueye is three to four months from re-evaluation after surgery on a fractured left foot, so training camp, the preseason and likely the start of the regular season are in doubt. ROSTER: 16 standard contracts, one over the limit, two over if Jonathan Kuminga returns, with Buddy Hield the likeliest trim and Corey Kispert the harder contract to move. TRADE BOARD: the Kuminga sign-and-trade with the Lakers remains stuck between contradictory reports on whether Atlanta would take Jarred Vanderbilt's $12.4M, and Jake Fischer reads the talks as having lost momentum; New Orleans still says it must be blown away on Trey Murphy III. Business: the Gray Media deal puts non-national games free over the air on WANF and the Peachtree Sports Network.",
};

// Prior edition (Jul 18): "CORRECTION TO THE LAST EDITION: ATLANTA'S SUMMER IS NOT OVER. The Hawks close Las Vegas Summer League tonight against Washington at the Pavilion, 7 PM ET, in a consolation finale for two teams that missed the four-team bracket. Atlanta enters 5-1 overall (3-1 in Vegas) looking to wash out Thursday's 96-64 loss to Memphis, a game the Grizzlies broke open with a 21-0 opening burst and a 32-2 first quarter while Atlanta rested Kingston Flemings, Asa Newell, Zuby Ejiofor, Jacob Toppin, RayJ Dennis and Keshon Gilbert. Washington arrives 2-2 after back-to-back losses, most recently 108-94 to the Clippers on Thursday. WATCH FOR: whether Flemings and Newell return to the floor, and whether undrafted guard Kobe Johnson (30 points on 18 shots against Boston on Monday) closes his two-way audition. The Lakers, Rockets, Grizzlies and Warriors play Saturday's semifinals, with the final Sunday, July 19. OFF THE FLOOR: forward Mouhamed Gueye had surgery Tuesday on a fractured left foot suffered in a July 8 workout and will be re-evaluated in three to four months, putting training camp, the preseason and likely the start of the 2026-27 regular season in doubt. Business: Gray Media and the Hawks announced a Georgia-wide, free over-the-air broadcast deal Thursday, moving non-national games to WANF (Atlanta News First, Channel 46) and the Peachtree Sports Network. The 2026-27 preseason schedule is out: five games, Oct 5 vs Memphis at State Farm Arena through Oct 16 at Dallas. ROSTER: still 16 standard contracts, one over the 15-man limit, and two over if Kuminga returns, so a trim is coming (Hield and Kispert most often flagged). TRADE BOARD: the Jonathan Kuminga sign-and-trade with the Lakers is at an impasse, with the New York Post reporting Atlanta willing on a Jarred Vanderbilt plus 2032 first-round swap framework and other reporting saying the Hawks have no interest in Vanderbilt's salary at all; New Orleans still says it must be blown away on Trey Murphy III.",


// Prior edition context (Jul 17): "SUMMER IS OVER FOR ATLANTA. The Hawks' Vegas run ended Thursday, July 16 with a 96-64 loss to Memphis in the group-stage finale, a game the Grizzlies broke open with a 21-0 opening burst and a 32-2 first quarter while Atlanta rested Kingston Flemings, Asa Newell, Zuby Ejiofor, Jacob Toppin, RayJ Dennis and Keshon Gilbert. That dropped Atlanta to 5-1 this summer (3-1 in Las Vegas) and just missed the four-team bracket on point differential; the Lakers, Rockets, Grizzlies and Warriors advanced to Saturday's semifinals, with the final Sunday, July 19. FOCUS NOW SHIFTS TO THE OFFSEASON. Injury: forward Mouhamed Gueye had surgery Tuesday on a fractured left foot suffered in a July 8 workout and will be re-evaluated in three to four months, putting training camp, the preseason and likely the start of the 2026-27 regular season in doubt. Business: Gray Media and the Hawks announced a Georgia-wide, free over-the-air broadcast deal Thursday, moving non-national games to WANF (Atlanta News First, Channel 46) and the Peachtree Sports Network. ROSTER: still 16 standard contracts, one over the 15-man limit, and two over if Kuminga returns, so a trim is coming (Hield and Kispert most often flagged). TRADE BOARD: the Jonathan Kuminga sign-and-trade with the Lakers (Jarred Vanderbilt plus a 2032 first-round swap) remains unresolved as LA's money falls short and Cleveland lurks, and New Orleans still says it must be blown away on Trey Murphy III.",

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
  generatedAt: "2026-07-20T13:05:00Z",
  summary:
    "THE FIRST NO. 1 PICK ATLANTA EVER DRAFTED IS GONE, AND AN ALL-DEFENSIVE WING IS HERE. The Hawks acquired LUGUENTZ DORT and RYAN NEMBHARD from Oklahoma City on Sunday in a three-team trade that sent ZACCHARIE RISACHER to Dallas and three second-round picks to the Thunder (Chicago's 2027 via Dallas, plus Atlanta's most favorable 2031 and 2032). Onsi Saleh swapped a 21-year-old former No. 1 pick who had fallen out of the playoff rotation for a 27-year-old champion and All-Defensive First Team wing on an expiring $17.7M deal, giving Quin Snyder a perimeter of Dort, DYSON DANIELS and NICKEIL ALEXANDER-WALKER that may be the most disruptive in the league. The cost is offense: Dort shot 38.5% from the field and 34.4% from three last season, both career lows, and most projections have him coming off the bench with heavy minutes rather than starting. The trade also reshapes the rest of the summer. Atlanta is now at 17 standard contracts against a 15-man limit, which means two more moves are coming, and the added salary is widely read as having closed the door on the JONATHAN KUMINGA sign-and-trade with the Lakers. What Atlanta gains in exchange is flexibility: more than $50M in expiring salary between Dort, CJ McCOLLUM and JOCK LANDALE to trade with in-season, about $4M of room under the tax now, and north of $40M in cap space next summer. Everything else from the weekend is background: the Summer League ended Saturday at 5-2 with a 91-83 loss to Washington, and MOUHAMED GUEYE remains three to four months from re-evaluation after left-foot surgery. PRIOR EDITION: THE SUMMER IS OVER, AND IT ENDED QUIETLY. Washington beat Atlanta 91-83 at the Pavilion on Saturday night, closing the Hawks' Summer League at 5-2 overall and 3-2 in Las Vegas. The Wizards led from a 24-15 first quarter and pulled away with a 22-17 run over the last seven minutes; Atlanta shot 42% from the field, 16% from three, and lost the assist battle 22-18 with KINGSTON FLEMINGS and ASA NEWELL both held out. DEVON HIGGS led the Hawks with 22 points and seven rebounds, GABE MADSEN scored 13, and KOBE JOHNSON closed his two-way audition with 13. John Camden's 22 and Chris Livingston's 20 carried Washington. Memphis and Golden State play for the Vegas title Sunday night, without Atlanta. From here the calendar is empty until the Oct 5 preseason opener against Memphis at State Farm Arena, and the front office's summer math is unfinished on three fronts: the roster still sits at 16 standard contracts with BUDDY HIELD the likeliest trim, the JONATHAN KUMINGA sign-and-trade with the Lakers is stuck between contradictory reports on Jarred Vanderbilt's $12.4M and losing momentum, and New Orleans still says it must be blown away on TREY MURPHY III. MOUHAMED GUEYE remains three to four months from re-evaluation after left-foot surgery.",
  keyTopics: [
    {
      title: "Hawks Land Lu Dort and Ryan Nembhard; Zaccharie Risacher Goes to Dallas in a Three-Team Trade With OKC",
      detail:
        "Atlanta made the biggest move of its offseason Sunday, acquiring Luguentz Dort and Ryan Nembhard from Oklahoma City in a three-team deal that sends 2024 No. 1 overall pick Zaccharie Risacher to Dallas (ESPN / NBA.com / Hoops Rumors / Atlanta News First, Jul 19). The Thunder receive three second-round picks: Chicago's 2027 via Dallas, plus the most favorable of Atlanta's 2031 and 2032 seconds. Oklahoma City had already picked up Dort's $17.7M team option this offseason and chose to convert him into picks rather than decline it, part of a summer in which the champions have shed roughly $200M and seven second-rounders' worth of moves via Dort, Isaiah Joe and Aaron Wiggins to get under the second apron. For Atlanta the logic is defense and flexibility at once: Dort, 27, is a 2025 champion and All-Defensive First Team wing who joins Dyson Daniels and Nickeil Alexander-Walker, and his contract expires after 2026-27.",
      category: "trades",
    },
    {
      title: "What Atlanta Actually Bought: Elite Perimeter Defense and a Career-Worst Jumper",
      detail:
        "The Dort trade is not a value grab so much as a stylistic one, and the tradeoffs are visible in the numbers. Dort averaged 8.3 points, 3.6 rebounds and 1.2 assists in 26.8 minutes across 69 games last season on 38.5% shooting and 34.4% from three, all significant drops from the 43.5/41.2 line he posted the year before, and his minutes were his lowest since his 2019-20 rookie season (Basketball-Reference / ESPN, Jul). Local projections have him coming off the bench for Atlanta rather than starting, with Snyder able to close games with three point-of-attack defenders on the floor (FanSided / SI onsi, Jul 19-20). The Risacher side of the ledger is a genuine bet against upside: the former No. 1 pick averaged 9.6 points on 44.6% shooting last season, lost his starting job after the All-Star break, and played 2:30 total across the six-game Knicks series. Dallas pairs him with 2025 No. 1 pick Cooper Flagg.",
      category: "trades",
    },
    {
      title: "Roster Now at 17 Against a 15-Man Limit: Two More Moves Are Coming Before Camp",
      detail:
        "The trade solved a rotation question and worsened an arithmetic one. Atlanta entered Sunday at 16 standard contracts and now sits at 17, two over the regular-season limit of 15 (SI onsi / Hoops Rumors, Jul 19-20). Teams can carry up to 21 through the summer, so training camp in late September is the practical deadline, but the front office now has to subtract twice rather than once. Buddy Hield, whose $9.66M expiring deal Atlanta fully guaranteed in late June specifically to keep as matching salary, remains the likeliest trim; Corey Kispert has three years left, which makes him harder to move. The cap picture after the swap: about $4M of room under the luxury tax, with Dort, CJ McCollum, Jock Landale, Mouhamed Gueye and Nembhard all on expiring deals, giving Atlanta more than $50M in expiring salary to trade with during the season and north of $40M in cap space next summer.",
      category: "trades",
    },
    {
      title: "Kuminga Fallout: The Added Salary Is Read as Closing the Lakers Sign-and-Trade",
      detail:
        "One immediate casualty of Sunday's deal appears to be the Jonathan Kuminga sign-and-trade that has hung over Atlanta's July. Reporting on the aftermath holds that the Dort trade probably takes off the table the construction in which Los Angeles sends back unwanted contracts plus a pick swap or a second-rounder, because the Hawks now have too many players and no longer want LA's back-end money (Yahoo Sports / Hoops Rumors / Heavy, Jul 19-20). That framework was already contested, with the New York Post reporting Atlanta willing on a Jarred Vanderbilt plus 2032 swap package and Hoops Rumors and Heavy insisting the Hawks never considered taking Vanderbilt's salary at all, while Jake Fischer described the talks as having lost momentum. Kuminga became an unrestricted free agent when Atlanta declined his $24.3M option Jun 29; without a sign-and-trade, his open-market number starts far below the roughly $25M his camp has sought.",
      category: "trades",
    },
    {
      title: "Wizards 91, Hawks 83: Atlanta's Summer Ends at 5-2 in a Vegas Consolation Finale",
      detail:
        "Washington closed the book on Atlanta's summer Saturday night, 91-83 at the Pavilion in a consolation game between two teams that missed the four-team bracket (NBA.com / ESPN, Jul 18-19). The Wizards led from a 24-15 first quarter, held the lead for all but a few minutes, and closed on a 22-17 run over the final seven. The shooting told the story: Washington went 44% from the field and 39% from three while holding Atlanta to 42% and 16%, and out-assisted the Hawks 22-18. Devon Higgs led Atlanta with 22 points and seven rebounds, Gabe Madsen scored 13, Kobe Johnson added 13 and Isaiah Wong finished with nine points and nine rebounds. John Camden's 22 and Chris Livingston's 20 paced Washington, with Reece Beekman posting 13 points and 14 assists. Kingston Flemings and Asa Newell were held out for a second straight game. Atlanta finishes 5-2 overall, 3-2 in Las Vegas.",
      category: "games",
    },
    {
      title: "Next Date on the Calendar Is Oct 5: Nothing Between Here and the Preseason Opener",
      detail:
        "With Saturday's finale played, Atlanta's schedule is empty until the preseason opens Oct 5 against Memphis at State Farm Arena, the first of five exhibitions that run through Oct 16 at Dallas (Hawks.com / Peachtree Hoops, Jul). Memphis and Golden State play for the Vegas title Sunday night, a bracket Atlanta missed on point differential. That leaves roughly eleven weeks of pure front-office time, and three unfinished items to fill it: trimming from 16 standard contracts to 15, resolving the Kuminga sign-and-trade one way or the other, and deciding whether to keep pressing on Trey Murphy III or pivot to the center board. Training camp, not the trade deadline, is the practical deadline for all three.",
      category: "general",
    },
    {
      title: "Kuminga Impasse Sharpens: Post Says Hawks Are Willing on Vanderbilt Plus a 2032 Swap, Other Reporting Says They Never Considered It",
      detail:
        "The Jonathan Kuminga sign-and-trade is now a story about two contradictory reports. A source told the New York Post the Hawks are willing to execute a deal sending Kuminga to Los Angeles for Jarred Vanderbilt (about $12.4M next season) and the Lakers' 2032 first-round pick swap, the only first-round asset LA can move this summer (Yahoo Sports / Silver Screen and Roll / Lakers Nation, Jul 16-17). Against that, Hoops Rumors and Heavy report Atlanta has not considered taking back Vanderbilt at all and is seeking more than the Lakers can offer to this point. Jake Fischer's read is that Los Angeles remains interested but the talks have lost momentum, with a sign-and-trade now the only realistic path. The math underneath it: LA could get north of $20M to Kuminga through a sign-and-trade against his roughly $25M ask, versus starting near $10M outright. Active, not close.",
      category: "trades",
    },
    {
      title: "Preseason Schedule Is Out: Five Games, Memphis at Home Oct 5, Finishing at Dallas Oct 16",
      detail:
        "The Hawks released their 2026-27 preseason schedule unusually early, five games with no neutral-site dates (Hawks.com / Peachtree Hoops, Jul). Atlanta opens Oct 5 against Memphis at State Farm Arena, goes to San Antonio Oct 8 and Indiana Oct 10, hosts Oklahoma City Oct 12, and closes at Dallas Oct 16. Tip times and broadcast assignments have not been announced, though three preseason games are folded into the new Gray Media over-the-air package. For a roster that must trim to 15 and may still be absorbing a Kuminga resolution, those five dates are the practical deadline for the front office's summer math.",
      category: "general",
    },
    {
      title: "Gueye Out 3-4 Months: Foot Surgery Tuesday, Likely to Miss the Start of the Season",
      detail:
        "The most consequential Hawks development of the week is an injury: forward Mouhamed Gueye fractured his left foot in a July 8 offseason workout and underwent surgery Tuesday at the Emory Sports Medicine Complex (ESPN / Hoops Rumors / Atlanta News First, Jul 16). The team says the 23-year-old will be re-evaluated in three to four months, which is a checkpoint rather than a return date, so he is set to miss all of training camp and the preseason and likely the start of the 2026-27 regular season. Gueye had grown into a useful frontcourt piece behind Onyeka Okongwu and Jalen Johnson. His absence deepens the case for adding size and sharpens the roster-crunch math the front office is already navigating.",
      category: "injuries",
    },
    {
      title: "Memphis Rout Ends the Win Streak: Grizzlies Open on a 21-0 Run and Lead 32-2 After One",
      detail:
        "The Hawks' undefeated Vegas run ended Thursday, July 16 in the ugliest way available, a 96-64 loss to Memphis with a bracket berth on the line (Peachtree Hoops / Yahoo Sports / SI onsi, Jul 16). Memphis opened on a 21-0 run and led 32-2 after one quarter while Atlanta, shooting 0-of-6 with eight first-quarter turnovers, rested Kingston Flemings, Asa Newell, Zuby Ejiofor, Jacob Toppin, RayJ Dennis and Keshon Gilbert against a Grizzlies side still playing Cedric Coward, Cameron Boozer and other rotation talent. The result dropped Atlanta to 5-1 and left it just outside the bracket on point differential, with only Saturday's consolation game against Washington left. Memphis kept going: the Grizzlies routed Houston in Saturday's semifinal behind 28 from Cedric Coward and meet Golden State for the title Sunday night.",
      category: "games",
    },
    {
      title: "Hawks Go Free Over the Air: Gray Media Deal Puts Games on WANF and the Peachtree Sports Network",
      detail:
        "Gray Media and the Hawks announced a Georgia-wide broadcast partnership Thursday, July 16 that will carry all non-nationally televised regular-season games free over the air on WANF (Atlanta News First, Channel 46) and the Peachtree Sports Network for 2026-27 (Sports Video Group / AJC / Atlanta News First, Jul 16). WANF is also available on Xfinity, Spectrum, DirecTV, DISH, YouTube TV and Fubo, with Gray sister stations in Albany, Augusta, Columbus, Macon and Savannah carrying games locally and three preseason games included. The franchise framed it as its most accessible TV commitment ever; a 13-game WANF package last season averaged more than 1.5 times the ratings of the Hawks' other local broadcasts.",
      category: "general",
    },
    {
      title: "Flemings' Passing Is the Real Takeaway: No. 8 Pick Ranked Third in Summer League Assist Rate",
      detail:
        "The shooting slip drew headlines, but the more durable summer signal was Kingston Flemings' playmaking. Across four Summer League games the No. 8 pick averaged 10.0 points, 6.8 assists, 2.8 rebounds, 1.5 steals and 1.2 blocks, and his assist rate ranked third among all Summer League participants even as his true shooting sat around 42% (RotoBaller / Yahoo Sports / NBA.com, Jul 9-14). He set the tone in the opener with eight assists on Atlanta's 26-assist night against San Antonio, then filled the box score against Brooklyn (9 points, 7 rebounds, 5 assists) and pushed the OKC comeback in Salt Lake City. Held out of both the Memphis and Washington finales, he ends the summer on those four games. The two-way lead-guard profile Atlanta drafted to grow behind CJ McCollum is exactly what showed up, and the 33% shooting from the field and from three across his first two games is the part that has to move by October.",
      category: "general",
    },
    {
      title: "Kobe Johnson's Two-Way Case Is Now Closed and Filed: 13 in the Finale Caps the Summer's Loudest Audition",
      detail:
        "The clearest individual winner of Atlanta's summer was Kobe Johnson, the 22-year-old undrafted guard and former Exhibit 10 signee who forced a two-way-contract conversation (SI onsi / NBA.com, Jul 13-16). His signature line came Monday against Boston: 30 points on just 18 shots with seven rebounds, four assists and two steals in the Hawks' 102-90 win, the Celtics' first summer loss, alongside second-rounder Henri Veesaar's 20 on 4-of-6 from three. Johnson's on-ball defense and shot-making across the summer made him one of Atlanta's most reliable Vegas performers even as the more heralded rookies sat out the finale. He closed Saturday with 13 points in the Washington finale. Johnson is on an Exhibit 10, a non-guaranteed camp deal the Hawks can convert to a two-way before the season, and with the roster already over the standard limit that conversion is now the live question. The tape is finished; the decision is not.",
      category: "general",
    },
    {
      title: "Nembhard's Quiet Value: The Rookie Who Broke Jason Kidd's Assist Record Is Now a Hawk",
      detail:
        "Lost in the Dort headline is the second player Atlanta received. Ryan Nembhard went undrafted out of Gonzaga in 2025, signed a two-way with Dallas, and played his way onto a standard multi-year contract on March 1 after the Mavericks waived Tyus Jones (Basketball-Reference / Mavs Moneyball / Yahoo Sports, Jul 19-20). He finished the rookie year at 6.6 points, 5.3 assists and 2.2 rebounds in 19.5 minutes across 60 games with 27 starts, on 41.5/35.6/80.6 shooting. The signature night came in the regular-season finale against Chicago: 15 points, nine rebounds and a career-high 23 assists, breaking Jason Kidd's single-game rookie assist record of 17 that had stood since March 1995. At 5-foot-11 he is a specific kind of player rather than a complete one, but on an expiring deal he gives Atlanta a third lead-guard option behind CJ McCollum and Kingston Flemings, which cuts both ways given the roster count.",
      category: "general",
    },
    {
      title: "Daniels' New Jumper: Offseason Video of a Rebuilt Shooting Form Has Atlanta Buzzing",
      detail:
        "The offseason storyline with the highest leverage on next season may not be a trade at all. Video circulating this month shows Dyson Daniels with a visibly reworked, smoother shooting motion after a summer of dedicated work on the jumper (ClutchPoints, Jul). The stakes are real: Daniels shot 18.8% from three last season (22-of-117), one of the worst high-volume perimeter seasons in recent memory, and he has spoken candidly about how far the slump took him. He is an All-Defensive guard who tied for the NBA lead in steals at 2.0, so even an average jumper would raise the ceiling on Atlanta's starting five. The complicating note: with Flemings drafted at No. 8 and Aaron Wiggins added, the backcourt is more crowded than it has been since he arrived. Treat the video as encouraging, not conclusive.",
      category: "general",
    },
    {
      title: "Murphy Board: New Orleans Still Wants to Be Blown Away as Atlanta's Frameworks Keep Shifting",
      detail:
        "New Orleans has come down slightly on Trey Murphy III, but Sunday's trade just deleted the centerpiece of the most-discussed Atlanta package. Frameworks floated through mid-July sent Zaccharie Risacher, Corey Kispert and three first-round picks to the Pelicans for Murphy, after earlier chatter built around Nickeil Alexander-Walker and Onyeka Okongwu (Fadeaway World / Yahoo Sports / HoopsHype, Jul 6-12). With Risacher in Dallas, any renewed pursuit has to be rebuilt around expiring salary and picks instead of young upside. Michael Scotto has the Celtics, Pistons, Warriors, Clippers and Hawks all in the mix to varying degrees. Atlanta's fit case is unchanged: Murphy, 26, averaged 21.5 points, 5.7 rebounds and 3.8 assists on 47.0/37.9 shooting across 66 games and would give Jalen Johnson the two-way wing this roster lacks, with existing rapport with CJ McCollum from New Orleans. The Pelicans are content to keep him and are not actively shopping him.",
      category: "trades",
    },
    {
      title: "Okongwu Extension-Eligible, and the Kuminga Exit Could Fund It",
      detail:
        "A quieter July development with long-term stakes: Onyeka Okongwu became eligible for a veteran extension on July 1, on top of the two years and roughly $33M left on his current deal (Soaring Down South / Spotrac, Jul 1-12). Okongwu is coming off a career-best 15.2 points, 7.6 rebounds, 3.1 assists, 1.1 blocks and 1.1 steals in 31.0 minutes across 74 games on 48% shooting as the starting center, and with Kuminga's $24.3M potentially off the books Atlanta would have the flexibility to lock him in. Local projections put a new deal near four years and $80M against a rising cap. No talks have been reported. File it as the next contract conversation once the roster settles, noting the tension that some of the same insiders floating Okongwu into Murphy packages also call him a long-term keeper.",
      category: "general",
    },
    {
      title: "The Risacher Era Ends After Two Seasons: How Atlanta Talked Itself Out of a No. 1 Pick",
      detail:
        "Sunday closed a chapter that had been closing all summer. Atlanta exercised Zaccharie Risacher's $13.83M third-year option back in October 2025 and faced a fourth-year option decision by the end of this October, a deadline that framed every trade rumor attached to him (Hoops Rumors / HoopsHype / Roundtable / SI onsi, Jun-Jul). Marc Stein reported in May that the Hawks were open to moving him for the right offer; John Hollinger flagged him as the likeliest summer trade chip; the Aaron Wiggins trade on July 6 and the Kingston Flemings pick at No. 8 narrowed his path to minutes further. The on-court case for patience was thin by the end: 9.6 points on 44.6% shooting across 66 games after a 12.6-point rookie year, usage down from 21.6% to 17.7%, a starting job lost after the All-Star break, and 2:30 of floor time across the Knicks series. He is 21, and Dallas is betting the development curve is not finished.",
      category: "trades",
    },
    {
      title: "Center Board Check: Post-Giannis Milwaukee Is the Turner Variable; Missi, Bitadze and Gafford Remain the Fallbacks",
      detail:
        "The center hunt still has no resolution, but the Milwaukee angle keeps growing teeth. With Giannis Antetokounmpo now in Miami, the logic for the Bucks to move Myles Turner is stronger than it was: Turner is coming off a down year, has three years and roughly $83M left, and is not an elite rebounder, which is why he could come cheap (Behind the Buck Pass / SI onsi, Jul 1-10). Milwaukee has received interest but is not actively engaged in a sale. If Turner stays put, the fallbacks remain New Orleans' Yves Missi, Orlando's Goga Bitadze and Dallas' Daniel Gafford, with Rudy Gobert floated as an outside swing. Atlanta drafted two bigs (Ejiofor, Veesaar) but is not planning to lean on rookies behind Okongwu, and Buddy Hield's expiring salary stays the obvious matching piece, a need underlined by Gueye's foot surgery.",
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
    "Sports Video Group",
    "Pro Football Network",
    "Hoops Wire",
    "FOX 5 Atlanta",
    "SLC Dunk",
    "Deseret News",
    "Silver Screen and Roll",
    "Lakers Nation",
    "BlueManHoop",
    "Basketball-Reference",
    "Spotrac",
    "Heavy",
    "Fadeaway World",
    "NBA.com Stats",
    "The California Post",
    "Larry Brown Sports",
    "Mavs Moneyball",
    "FanSided",
    "RealGM",
  ],
};

// ─── Issue metadata (drives datelines, cover star, masthead) ───────────────
// Update `date` daily; everything else flows from KEY_DATES + NEWS_DIGEST.
export const ISSUE = {
  date: "2026-07-20",                              // YYYY-MM-DD — single source of truth
  volume: 26,                                       // VOL XXVI
  number: 30,                                       // Issue number (offseason cadence)
  dateline: "ATLANTA · JULY 20, 2026",              // Pre-formatted for display
  mastheadLine: "VOL XXVI · ISSUE NO. 30 · JULY 2026 · ATL · USA",
  railLabel: "ISSUE 30 · JULY 20",
  coverStarId: 6,                                // (legacy) PLAYERS[id]; cover no longer uses NBA headshots
  // Cover art slot: relative path under public/ to a GENERATED cover image
  // (e.g. "assets/cover/summer-over.jpg"). Produced by the AI image pipeline
  // and dropped into public/assets/cover/. null → branded placeholder renders.
  coverImage: null,
  coverRibbon: "DORT TO ATLANTA, RISACHER TO DALLAS · THREE-TEAM TRADE WITH OKC · ROSTER NOW 17 AGAINST A 15-MAN LIMIT · KUMINGA SIGN-AND-TRADE LIKELY DEAD · NEXT GAME OCT 5 VS MEMPHIS",
  coverStatusKicker: "OFFSEASON · DAY 78",          // top-right corner of cover
  coverStatusLine: "TRADE DAY: DORT + NEMBHARD IN, RISACHER OUT · 17 CONTRACTS, LIMIT 15 · NEXT: PRESEASON, OCT 5", // {DAYS:id} resolves from KEY_DATES
  backTagline: "Next issue: which two contracts go to get to 15, whether Kuminga has a market left, and where the center hunt turns now that Risacher is gone.",
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
    hawksAngle: "DONE (Jul 6). McCollum, Landale, Wiggins, Carter all official · roster at 16, must trim to 15 · Kuminga S&T now executable" },
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
  { id: "kuminga",  name: "Jonathan Kuminga",   direction: "OUT",    status: "COLD",
    terms: "S&T to LAL · ATL won't take Vanderbilt · LA hunting a 3rd team",
    source: "Heavy / Lakers Nation / Hoops Rumors", updated: "2026-07-10",
    tip: "ATL sits ~$11.4M under the first apron · Vanderbilt's ~$25M eats the cushion" },
  { id: "murphy",   name: "Trey Murphy III",    direction: "IN",     status: "WARM",
    terms: "NOP wants ~3 firsts · floated ATL package now NAW + Okongwu",
    source: "HoopsHype / Fadeaway World",   updated: "2026-07-10",
    tip: "Pelicans not shopping him · 'must be blown away' · crowded suitor field" },
  { id: "turner",   name: "Myles Turner",       direction: "IN",     status: "OPEN",
    terms: "3yr/$83M left · MIL not actively engaged",
    source: "The Stein Line / Behind the Buck Pass", updated: "2026-07-10",
    tip: "Post-Giannis Milwaukee has less reason to keep him · Hield's expiring matches" },
  { id: "brown",    name: "Jaylen Brown",       direction: "IN",     status: "CLOSED",
    terms: "Went to Philadelphia instead (Jul 2)",
    source: "Mannix (98.5 The Sports Hub)", updated: "2026-07-02",
    tip: "Thread is dead · the co-star search moved to Murphy" },
  { id: "cam-john", name: "Cameron Johnson",    direction: "IN",     status: "OPEN",
    terms: "DEN cap-cutter candidate · ~$22M",
    source: "HoopsHype",                    updated: "2026-05-13",
    tip: "Denver tax math + ATL declining Kuminga option opens fit" },
  { id: "risacher", name: "Zaccharie Risacher", direction: "OUT",    status: "DONE",
    terms: "TRADED to Dallas · 3-team deal with OKC",
    source: "ESPN / NBA.com",               updated: "2026-07-19",
    tip: "ATL receives Lu Dort + Ryan Nembhard · OKC receives three 2nd-round picks" },
  { id: "dort",     name: "Luguentz Dort",      direction: "IN",     status: "DONE",
    terms: "Acquired from OKC · $17.7M expiring",
    source: "ESPN / NBA.com",               updated: "2026-07-19",
    tip: "All-Defensive 1st Team wing · pairs with Daniels and NAW · expiring salary for in-season trades" },
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
