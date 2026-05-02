// ─── Atlanta Hawks Player Data (2025-26 Season · Updated May 2, 2026 — SEASON OVER · ELIMINATED in R1 ) ─
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
    recentNotes: "Season ends with the brutal 140-89 elimination — Johnson team-high 21 (Heavy, Apr 30) but minutes capped by the blowout. Postgame to media: 'I don't really have any words for that. Obviously, disappointing. Obviously, it sucks. Out of all the things we did accomplish this year, obviously, we're all just looking forward to being better' (Heavy, Apr 30). Six-game R1 line settled at roughly 19.5/8.3/5.5 — a clear step below his 22.8/10.3/8.0 regular-season baseline, with Anunoby coverage credited by AJC and SI onsi as the series-defining drag. First All-Star bid behind him; offseason narrative is the All-NBA case (third-team votes plausible) and the rumored extension talks now that Trae's gone.",
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
    recentNotes: "NBA fined Daniels $25,000 Friday May 1 for his role in the Game 6 free-throw scrum — Mitchell Robinson hit with the larger $50K fine, no suspensions for either (NBA.com release / ESPN / AP / Hoops Rumors, May 1). Daniels had been ejected mid-Q2 alongside Robinson after Daniels threw an elbow into Robinson's chest and Robinson shoved back, with a referee knocked to the floor in the scrum (Bleacher Report/Yahoo/Heavy, Apr 30). Exited Game 6 with 3 pts on 1-of-4 in 15 min. Six-game R1 line lands around 7.8/5.8/4.7 in 27 mpg — but the headline accomplishment stands: through the first four games he became the first NBA player since Luka 2022 to post 24+ pts/35+ reb/25+ ast/10+ stl in a four-game span (NBA.com Apr 27). Reigning MIP and 24-25 All-Defensive 1st-team; finished 2nd in 24-25 DPOY voting and the offseason narrative is a real DPOY case in 26-27 (was at +2000 odds as of Mar 24).",
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
    recentNotes: "Game 6 line: 11 pts in a blowout — minutes capped as Snyder pulled starters by mid-Q3 (NBA.com 4 takeaways, Apr 30). MIP trophy still the offseason narrative: 2025-26 NBA Most Improved Player Apr 24 — career-best 20.8/3.4/3.7 on 39.9% from three (251 makes is a Hawks single-season record), making ATL the first franchise ever with back-to-back MIP winners (Daniels won 24-25). Series scoring settled around 13.4 PPG; the only ATL perimeter player above 33% from three across the full six. UFA-eligible question for the offseason is moot — he signed his four-year deal with Atlanta last summer.",
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
    recentNotes: "Free-agency sample is set: 19.2 PPG across the six R1 games on 49% FG / 31% 3P (HoopsHype May 1) after coming over Jan 8 in the Trae trade and starting 25 of 41 games as a Hawk on 18.7/3.1/4.1. SI onsi (Apr 30) and Hoops Rumors (Apr 28) confirm Atlanta's plan is to bring him back on a multi-year deal; HoopsHype (May 1) reports execs expect offers 'slightly above the mid-level exception' — most pegging two years and $35-40M as the fair ballpark. Atlanta enters the offseason with $55.9M in projected cap space below the first apron (HoopsHype, May 1).",
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
    recentNotes: "Played all six games of Round 1 through right knee inflammation he was diagnosed with after Game 1 — knee held; team-friendly grit narrative carried into the offseason. Six-game R1 line: ~11.3/5.7/1.7 with the KAT matchup as the series-defining mismatch ATL never solved (Karl-Anthony Towns's two triple-doubles bookended). Regular season was career-best (15.2/7.6/3.1, 48.0% FG, 1.1 blk) — Atlanta now decides whether to formalize him as the post-Trae starting C long-term or pursue a pivot center this offseason (Bleacher Report cap notes, Apr 28).",
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
    recentNotes: "Round 1 closed with the No. 1 overall pick logging just 2:30 of playoff floor time across the entire series (NBA.com Apr 30 takeaways) — one Game 1 cameo, then five straight DNP-CDs including the Game 6 blowout where Snyder turned to Hield, Wallace and Newell instead. Sophomore season ended 9.6/3.8/1.1 on 44.6% FG and 37.2% from three across 66 games (Roundtable/CraftedNBA Apr 30). 'Ups and downs' was Risacher's own description; offseason development plan and a likely Summer League run is now the storyline.",
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
    recentNotes: "Now the Hawks' biggest cap call of the offseason: Bleacher Report and Hoops Rumors (Apr 28-30) flag a possible mutual-interest move where ATL DECLINES the $24.3M 26-27 team option to negotiate a longer-term deal, per Jake Fischer — the Warriors-with-Kuminga template Atlanta is now stepping into. Game 6 line: 11 pts as one of the four Hawks in double figures in the 140-89 wipeout (NBA.com 4 takeaways, Apr 30). Six-game R1 line landed around 13.4 PPG with a three-point shot that never recovered (sub-30% over the last four). The Q1-hero arc from Game 3 (21 off the bench) was the high-water mark — getting a more consistent version off the bench is the offseason coaching project.",
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
    recentNotes: "Got Round 1 minutes for the first non-garbage stretch in Game 6's blowout — Snyder cleared the bench through the second half of the historic loss (NBA.com 4 takeaways, Apr 30). Total R1 floor time ended low (single-digit per game when active); the regular-season role as a high-volume movement shooter was largely abandoned by playoff matchups. Veteran on a $9.4M expiring; Hoops Rumors Apr noted his name in offseason discussions as a possible inclusion in a follow-on Atlanta move.",
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
  seriesContext: "Season ended in R1 (Hawks 2, Knicks 4) · ATL holds more-favorable of NOP/MIL plus CLE 1st (No. 24)",
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
  generatedAt: "2026-05-02T11:00:00Z",
  summary:
    "OFFSEASON — Day 2 after elimination. The NBA's discipline call landed Friday May 1: Mitchell Robinson fined $50,000 (with the higher number citing his postgame social-media post about the incident) and Dyson Daniels fined $25,000 for their roles in the Game 6 free-throw scrum, no suspensions handed down (NBA.com release / ESPN / AP / Yahoo / Hoops Rumors, May 1). Atlanta's offseason is now fully in motion. SI onsi (Apr 30) and Hoops Rumors (Apr 28) reported Atlanta plans to bring back HC Quin Snyder on an extension and re-sign UFA CJ McCollum on a multi-year deal; HoopsHype (May 1) added that McCollum is expected to draw offers 'slightly above the mid-level exception' — execs estimate two years and $35-40M as the fair range. Atlanta enters the summer with roughly $55.9M in projected cap space below the first apron (HoopsHype/SI onsi cap tracker, May 1). Jonathan Kuminga emerges as the biggest cap call: Bleacher Report and Hoops Rumors (Apr 28-30) cite mutual interest in DECLINING his $24.3M 26-27 team option to hash out a longer-term agreement (per Jake Fischer). The 2026 NBA Draft Lottery is May 10 in Chicago — ATL holds the more-favorable of New Orleans and Milwaukee's picks plus Cleveland's at No. 24 — with Pelicans' lottery slot at the 7th-best odds (6.8% No. 1) and Bucks at 10th (Tankathon/Yahoo Sports/CBS Sports). The Knicks closeout backdrop: 140-89 in Game 6 at State Farm Arena Apr 30, the LARGEST halftime lead (47) in NBA playoff history (83-36) and tied for the 6th-largest final margin (51) (NBA.com/FOX Sports/NY Post/AP via fultonneighbor, Apr 30/May 1). Lingering award headlines: Jalen Johnson became just the 5th player in NBA history to average 22+/10+/7+ in a season (joining Oscar Robertson, Wilt Chamberlain, Jokic, Westbrook), earning his first All-Star nod and a plausible All-NBA third-team case; NAW's 2025-26 Kia Most Improved Player win Apr 24 made ATL the first franchise ever with back-to-back MIPs (Daniels won 24-25).",
  keyTopics: [
    {
      title: "NBA Fines Daniels $25K, Robinson $50K for Game 6 Altercation — No Suspensions",
      detail:
        "League discipline announced Friday May 1: Mitchell Robinson fined $50,000 and Dyson Daniels fined $25,000 for their roles in the Game 6 free-throw scrum (NBA.com release / ESPN / AP via Winchester Star / Yahoo Sports / Hoops Rumors, May 1). The NBA noted Robinson's larger fine 'takes into account his inappropriate post on social media in reference to the incident postgame.' No suspensions handed down — irrelevant for ATL given the elimination, but means Robinson's available for Round 2 vs Boston-or-76ers. EssentiallySports' coverage flagged that Robinson received the higher fine despite Daniels' clear elbow on tape, the unusual point of dispute in the discipline call.",
      category: "general",
    },
    {
      title: "McCollum Free Agency: Hawks Plan Return; Offers Pegged 'Slightly Above MLE' (~2yr/$35-40M)",
      detail:
        "Headline Hawks free agent. SI onsi (Apr 30) and Hoops Rumors (Apr 28) report Atlanta's plan is to bring CJ McCollum back on a multi-year deal; Jake Fischer (Hoops Rumors) reports mutual interest. HoopsHype (May 1) adds that McCollum is expected to draw offers 'slightly above the mid-level exception' — most execs pegging two years and $35-40M as the fair range. Came over Jan 8 in the Trae trade, regular-season line of 18.7/3.1/4.1 in 41 games (25 starts), R1 line of 19.2 PPG / 49% FG / 31% 3P. Atlanta enters with $55.9M in projected cap space below the first apron (HoopsHype/SI onsi cap tracker, May 1).",
      category: "trades",
    },
    {
      title: "Snyder Extension Talks Now Active — Strong Front-Office Support",
      detail:
        "Yardbarker (May 1), RealGM and Yahoo Sports (Apr 28-30) all confirmed extension talks between Quin Snyder and the Hawks are expected to ramp now that the season has ended. Snyder enters the final year of his existing deal in 26-27, with NBA insider Jake Fischer reporting 'strong' front-office support to retain him long-term. The 20-6 finish to avoid the play-in for the first time in five years (post-Trae Young trade) is the cited tipping point.",
      category: "general",
    },
    {
      title: "Kuminga Cap Call: Mutual Interest in DECLINING $24.3M Option for Longer-Term Deal",
      detail:
        "Atlanta's biggest summer cap question is Jonathan Kuminga. Bleacher Report and Hoops Rumors (Apr 28-30) cite Jake Fischer reporting mutual interest in declining the $24.3M 26-27 team option in order to negotiate a longer-term agreement. Acquired before the deadline in the Porzingis trade, Kuminga played 16 games as a Hawk on a mixed-bag results: 14.9/5.1/2.2 regular season, 13.4 PPG R1, sub-30% from three over the last four playoff games. The Warriors-with-Kuminga template Atlanta now has to navigate (BlueManHoop, May 1). Without a deal he could walk for nothing.",
      category: "trades",
    },
    {
      title: "May 10 NBA Draft Lottery: Hawks Hold More-Favorable of NOP/MIL Plus CLE No. 24",
      detail:
        "Atlanta's biggest 2026 offseason calendar event is the May 10 NBA Draft Lottery in Chicago (NBA.com 2026 Draft Order / Tankathon). Hawks own the more-favorable of New Orleans and Milwaukee's first-round picks via prior trades — Pelicans currently sit with the 7th-best odds (6.8% chance at No. 1, ~40% chance at top-4) and Bucks at 10th-best per Yahoo Sports / CBS Sports / SI onsi. Atlanta also holds Cleveland's first at No. 24 plus a second-rounder. Top of class: Darryn Peterson (Kansas), Cameron Boozer (Duke), AJ Dybantsa — Bleacher Report's Wasserman mock has ATL taking Kingston Flemings (Houston) at No. 7. Combine May 8-10; full draft June 23-24.",
      category: "general",
    },
    {
      title: "Knicks 140, Hawks 89 — Historic 51-Point R1 Closeout Ended Atlanta's Season",
      detail:
        "Knicks beat Atlanta 140-89 in Game 6 Thursday Apr 30 at State Farm Arena to win the series 4-2 (NBA.com/FOX Sports/NY Post/AP via fultonneighbor, Apr 30/May 1). Knicks led 40-15 after Q1 (largest 1Q lead in shot-clock-era playoff history), 83-36 at the half (LARGEST HALFTIME LEAD IN NBA PLAYOFF HISTORY — previous record 41), and led by as many as 61. The 51-point margin is tied for 6th-largest in postseason history. New York advances to ECF semifinals vs Celtics-76ers G7 winner.",
      category: "games",
    },
    {
      title: "Daniels & Mitchell Robinson Ejected in Q2 Free-Throw Scrum",
      detail:
        "Late in the second quarter of Game 6, with NYK already up 50-plus, Mitchell Robinson and Dyson Daniels were both ejected after a fight that broke out during free throws (Bleacher Report/Yahoo/Larry Brown Sports/Yardbarker/Heavy, Apr 30). Replay showed Daniels threw an elbow into Robinson's chest while OG Anunoby was at the line; Robinson responded with a shove that knocked a referee to the floor. Both received double technicals and were tossed. Daniels finished with 3 pts on 1-of-4 in 15 min; Robinson 6 pts/3 reb/2 blk in 9 min. Discipline followed May 1 (see top topic).",
      category: "games",
    },
    {
      title: "OG Anunoby 29, KAT 12-11-10 (2nd TD of Series), Brunson Cruise",
      detail:
        "OG Anunoby led NYK with 29 in 27 minutes; Karl-Anthony Towns posted his second triple-double of the series (12 pts, 11 reb, 10 ast) — first player in Knicks playoff history to record two TDs in a single series; Jalen Brunson cruised in the closeout (NBA.com 4 takeaways/Yahoo Sports/Bleacher Report, Apr 30). The KAT-as-high-post-hub wrinkle Mike Brown introduced in Game 4 ran the matchup chart from Game 4 forward and ATL never produced a counter Snyder was satisfied with.",
      category: "games",
    },
    {
      title: "Snyder Postgame: 'We Didn't Have an Answer for That Tonight'",
      detail:
        "Quin Snyder addressed reporters after the historic loss (NBA.com 4 takeaways/AP via fultonneighbor, Apr 30/May 1): 'Right now, you're trying to process a really tough night, and also keep in the back of your mind that these guys had a really good season … hopefully we can do both.' He credited New York's physicality: 'Even as the series progressed, you can see what a really good team they are and why they're a contender. We didn't have an answer for that tonight.' Hawks went 46-36 on the year, won the Southeast Division for the first time since 2014-15, and avoided the play-in for the first time in five seasons.",
      category: "general",
    },
    {
      title: "Johnson Game 6: Team-High 21, Blunt Postgame — 'It Sucks'",
      detail:
        "Jalen Johnson led Atlanta with 21 in the elimination loss (Heavy, Apr 30) — his minutes capped as Snyder pulled starters by mid-Q3. Postgame: 'I don't really have any words for that. Obviously, disappointing. Obviously, it sucks. Out of all the things we did accomplish this year, obviously, we're all just looking forward to being better.' Six-game R1 line settled at roughly 19.5/8.3/5.5 — clear step below his 22.8/10.3/8.0 regular-season All-Star line, with OG Anunoby coverage credited as the series-defining drag. All-NBA (third-team) votes plausible after ATL's 46-win regular season.",
      category: "games",
    },
    {
      title: "Hollinger: Hawks Likely to Shop Risacher or Kispert After Modest R1 Roles",
      detail:
        "John Hollinger's Hawks offseason preview (The Athletic / SI onsi summary, Apr 30) predicts Atlanta will probably look to trade either Zaccharie Risacher or Corey Kispert this summer after both played very modest roles in the first-round series vs New York. Risacher logged just 2:30 of total Round 1 floor time across the entire series — one Game 1 cameo and five straight DNP-CDs (NBA.com 4 takeaways / box scores Apr 18-30). Sophomore line: 9.6/3.8/1.1 on 44.6% FG / 37.2% 3P over 66 games — regression from his 12.6 PPG rookie year as usage dropped from 21.6% to 17.7% (CraftedNBA / Roundtable Apr 30). 'Ups and downs' was Risacher's own description of the year.",
      category: "trades",
    },
    {
      title: "Knicks Set NBA Playoff Records: Largest Halftime Lead (47), Largest 1Q Lead (Shot-Clock Era)",
      detail:
        "The Knicks' 47-point halftime lead (83-36) is the LARGEST AT THE BREAK in NBA playoff history, eclipsing the previous mark of 41 (Sportsrush/Yahoo Sports, Apr 30). Their 40-15 first-quarter advantage was also the largest 1Q lead of the shot-clock era in a playoff game. Yahoo Sports' 'wildest numbers' breakdown noted the 74-25 run NYK ran across the back half of Q1 and Q2; the 51-point final margin tied for 6th-largest in postseason history.",
      category: "games",
    },
    {
      title: "Johnson's All-Time Statistical Bar: 5th Player Ever at 22+/10+/7+",
      detail:
        "Jalen Johnson became just the FIFTH PLAYER IN NBA HISTORY to average 22+ points, 10+ rebounds and 7+ assists in a season — joining Oscar Robertson, Wilt Chamberlain, Nikola Jokic and Russell Westbrook (Soaring Down South / Wikipedia / Hawks.com Apr). First All-Star nod (Feb 2026 reserve), played in the new World-format ASG and helped Team Stars take the 2026 NBA All-Star Championship. R1 line settled at 19.5/8.3/5.5; offseason narrative is whether Johnson lands All-NBA third-team votes and whether ATL pivots to an extension talk this summer.",
      category: "general",
    },
    {
      title: "Daniels' Career Series Despite the Sour End — Joins Luka 2022 Bar",
      detail:
        "Through the first four games of Round 1, Daniels totaled 24 pts / 35 reb / 25 ast / 10 stl — the first NBA player since Luka Dončić in the 2022 playoffs to clear that bar in a four-game span (NBA.com Apr 27). Reigning MIP, 24-25 All-Defensive 1st team and 2nd in 24-25 DPOY voting; six-game R1 line settled around 7.8/5.8/4.7 in 27 mpg with a Game 5 scoring breakthrough (17 on 7-of-11) bookended by the Game 6 ejection. DPOY case for 26-27 (was at +2000 odds as of Mar 24) is the offseason narrative.",
      category: "general",
    },
    {
      title: "Okongwu Played All Six Through Knee Inflammation",
      detail:
        "Onyeka Okongwu played all six R1 games through the right knee inflammation diagnosed after Game 1 (Heavy/CBS Apr 24-29). KAT-on-Okongwu was the series-defining matchup ATL never solved (Towns posted two triple-doubles). Regular-season was career-best 15.2/7.6/3.1 on 48.0% FG over 74 games and 31 mpg. Two years left on his 4yr/$62M deal ($16.1M in 26-27 per Spotrac); Atlanta has resisted prior trade interest and now decides whether to formalize him as the post-Trae starting C long-term (Bleacher Report cap notes, Apr 28).",
      category: "injuries",
    },
    {
      title: "NAW Wins 2025-26 Kia Most Improved Player — Back-to-Back for Hawks",
      detail:
        "Nickeil Alexander-Walker was named the 2025-26 Kia Most Improved Player on Apr 24, beating finalists Deni Avdija and Jalen Duren (NBA.com/Washington Post/Bleacher Report). Career-best 20.8 PPG (up 11.4 from 24-25's 9.4 — third-largest single-season jump in 25 years), 39.9% from three on a franchise-record 251 makes. Hawks are the first team in NBA history with back-to-back MIPs (Daniels won 24-25). NAW is locked in long-term on the four-year deal he signed last summer.",
      category: "general",
    },
    {
      title: "Hawks Free-Agency Watchlist: McCollum, Vincent, Bradley, Landale UFA; Wallace RFA",
      detail:
        "Per Bleacher Report cap notes (Apr 28) and Hoops Rumors offseason brief (Apr 30): Atlanta's UFAs are CJ McCollum, Gabe Vincent, Tony Bradley and Jock Landale. Restricted FAs include Keaton Wallace, RayJ Dennis and Christian Koloko. McCollum is the priority retention; Wallace likely gets a qualifying offer. Buddy Hield is on a $9.4M expiring (Hoops Rumors) and is a known offseason discussion piece. Atlanta's plan, per Jake Fischer, is to build around its young core (Johnson, Daniels, NAW, Okongwu, Risacher) with extensions inevitable.",
      category: "trades",
    },
  ],
  sources: [
    "NBA.com",
    "ESPN",
    "Yahoo Sports",
    "FOX Sports",
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
    "Soaring Down South",
    "Hoops Rumors",
    "Heavy Sports",
    "Bleacher Report",
    "Yardbarker",
    "Larry Brown Sports",
    "EssentiallySports",
    "Sportsrush",
    "Sportsnaut",
    "Roundtable",
    "Hawks.com",
    "Tankathon",
    "CraftedNBA",
    "BlueManHoop",
    "RealGM",
  ],
};
