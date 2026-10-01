# Data Model Specification

All data lives in `src/playerData.js` as named ES module exports. No API, no database.

> **2026-05-29 — deep overhaul.** The original 8 exports remain. Added 12 new exports that drive the chrome (no more hardcoded datelines / TOC / awards in `App.jsx`) plus the new offseason content surfaces (Calendar, Scenarios, Draft Board, Trade Threads, BETS strip, per-player game logs). See `ISSUE`, `COVER_TOC`, `EDITORS_LETTER`, `HARDWARE`, `NUMBERS_HERO`, `NUMBERS_LEDGER`, `KEY_DATES`, `PULL_QUOTES`, `BETS`, `SCENARIOS`, `DRAFT_BOARD`, `TRADE_THREADS`, `GAME_LOGS` defined inline at the bottom of `src/playerData.js`. The daily 8:10 AM scheduled task only ever touches that file — the chrome refreshes with it. Date-derived rows ("DAYS TO X") are computed at render time from `KEY_DATES` against `ISSUE.date`.

## PLAYERS[]

Array of 15 player objects. Schema:

| Field | Type | Description |
|-------|------|-------------|
| id | number | Unique player ID (1-15) |
| name | string | Full name |
| number | number | Jersey number |
| position | `"PG"\|"SG"\|"SF"\|"PF"\|"C"` | NBA position |
| nationality | string | Flag emoji + country name |
| age | number | Current age |
| gamesPlayed | number | GP this season |
| gamesStarted | number | GS this season |
| minutesPerGame | number | MPG |
| pointsPerGame | number | PPG |
| reboundsPerGame | number | RPG |
| assistsPerGame | number | APG |
| stealsPerGame | number | SPG |
| blocksPerGame | number | BPG |
| turnoversPerGame | number | TOPG |
| fieldGoalPct | number | FG% (0-100) |
| threePointPct | number | 3P% (0-100) |
| freeThrowPct | number | FT% (0-100) |
| trueShootingPct | number | TS% (0-100) |
| plusMinus | number | +/- per game |
| form | number | 0.0-10.0 performance rating |
| status | Status | Current availability |
| injuryNote | string\|null | Injury description (null when active) |
| image | string | NBA CDN headshot URL |
| physical | `{height: number, weight: number}` | Height in inches, weight in lbs |
| career | Career[] | Reverse-chronological career entries |

### Status Taxonomy
```
"active"       → Available, no issues
"day-to-day"   → Minor, could play
"questionable" → Uncertain availability
"doubtful"     → Likely out
"out"          → Ruled out
"suspended"    → League suspension
```

UI availability grouping:
- **Available**: active, day-to-day, questionable
- **Unavailable**: doubtful, out, suspended

### Position Taxonomy
```
PG → Point Guard    (color: #3498db blue)
SG → Shooting Guard (color: #2ecc71 green)
SF → Small Forward  (color: #f1c40f gold)
PF → Power Forward  (color: #e67e22 orange)
C  → Center         (color: #e74c3c red)
```

### Career Entry
```js
{ years: "2021-2025", team: "Team Name", type: "senior"|"draft" }
```
- `type: "draft"` — draft year entry (single year, includes pick info)
- `type: "senior"` — team tenure (year range, trailing `-` means current)

## RSS_FEEDS[]

```js
{ name: string, url: string, category: "fan"|"major", color: string }
```
3 feeds: Peachtree Hoops, Hoops Rumors, ESPN NBA.

## TEAM_LOGOS

Object mapping team names → NBA CDN SVG URLs. Includes both full names and short names (e.g., "New York Knicks" and "Knicks" both map to the same URL).

## NEXT_GAME

```js
{
  opponent: string,        // Full team name
  shortName: string,       // 3-letter abbreviation
  home: boolean,           // true = State Farm Arena
  date: string,            // ISO 8601 with timezone
  competition: "REG"|"PLAYOFFS",
  venue: string,
  broadcast: string,
  seriesContext: string    // e.g. "Round 1 · Game 1 · Series tied 0-0"
}
```

## RESULTS[]

Array of recent game results (most recent first, ~16 games).

```js
{
  date: string,            // YYYY-MM-DD
  opponent: string,        // Full team name
  home: boolean,
  score: string,           // "ATL-OPP" format (e.g., "124-102")
  competition: "REG"|"PLAYOFFS",
  result: "W"|"L",
  topScorers: string       // Free text (e.g., "Johnson 28, NAW 22")
}
```

## PLAYOFF_SERIES

```js
{
  round: number,           // 1-4
  opponent: string,
  opponentShort: string,   // 3-letter
  seed: number,            // Hawks seed
  opponentSeed: number,
  wins: number,            // Hawks wins
  losses: number,          // Hawks losses
  games: [{
    game: number,          // Game number in series
    date: string,          // YYYY-MM-DD
    home: boolean,
    score: string|null,    // null if not yet played
    result: "W"|"L"|null,
    venue: string,
    broadcast: string
  }]
}
```

Set to `null` when no active playoff series.

## EAST_STANDINGS[]

```js
{ seed: number, team: string, record: string }
```
Seeds 1-8 for Eastern Conference playoff teams.

## NEWS_DIGEST

```js
{
  generatedAt: string,     // ISO 8601
  summary: string,         // Paragraph-length AI summary
  keyTopics: [{
    title: string,
    detail: string,
    category: "trades"|"injuries"|"games"|"rotation"|"general"
  }],
  sources: string[]        // List of source outlet names
}
```
