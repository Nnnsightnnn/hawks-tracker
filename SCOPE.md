# Hawks Tracker — Scope

*Replicating the Liverpool FC tracker pattern for the Atlanta Hawks (NBA). Drafted April 18, 2026. No code yet — this document is the input to a future implementation phase.*

Companion scope lives in `~/falcons-tracker/SCOPE.md`. Combined overview in `outputs/atlanta-trackers-scope.md`.

---

## 1. Decisions locked

- Standalone Vite + React repo (no monorepo with Falcons).
- Folder: `~/hawks-tracker` (this folder).
- GitHub: `nnnsightnnn/hawks-tracker` → live at `https://nnnsightnnn.github.io/hawks-tracker/`.
- One daily scheduled task: `hawks-tracker-update`, targeted time ~8:12 AM (staggered after `liverpool-tracker-update`).

---

## 2. Architecture inherited from Liverpool

Verbatim copy unless called out in §3.

| Layer | Choice |
| --- | --- |
| UI framework | React 18.3 |
| Build tool | Vite 6.0 |
| Utilities | Lodash |
| Styling | Inline CSS, no stylesheet deps |
| Data layer | Hardcoded ES module in `src/playerData.js` — no API, no DB |
| RSS (dev) | Vite middleware proxy at `/api/rss?url=...` |
| RSS (prod) | `api.rss2json.com/v1/api.json?rss_url=...` |
| Hosting | GitHub Pages, push-to-deploy via `.github/workflows/pages.yml` |
| Base path | `base: '/hawks-tracker/'` in `vite.config.js` |

Shared UI patterns to reimplement in this repo (not extracted into a shared package): player avatar with image + initials/number fallback; form / status badges; stat bars; position tags; next-game banner with countdown; results cards with W/L coloring; AI News Digest section; live RSS grid; RSS sources panel; dark theme with team-branded accent colors.

Update loop mirrors Liverpool's SKILL.md (search → LATEST_NEWS → NEWS_DIGEST → player data → game data → build → commit → report).

---

## 3. Hawks-specific scope

### 3.1 Season context (as of April 18, 2026)

NBA 2025-26 regular season ends mid-April. The Hawks are either in the Play-In Tournament or the first round of the playoffs right now — **exact playoff status to confirm via web search during implementation Phase 1 Step 2.** "Next game" in the app could be a Play-In game, a Game 1/2/3 of a first-round series, or an offseason placeholder depending on the day.

### 3.2 Data model (delta vs Liverpool)

`PLAYERS` export shape:

```
{
  id, name, number, position,   // position: "PG" | "SG" | "SF" | "PF" | "C"
  height, weight,               // inches / lbs
  age, experience,              // years in NBA
  gamesPlayed, gamesStarted, minutesPerGame,
  pointsPerGame, reboundsPerGame, assistsPerGame,
  stealsPerGame, blocksPerGame, turnoversPerGame,
  fieldGoalPct, threePointPct, freeThrowPct,
  trueShootingPct, plusMinus,
  form,                         // 0–10 composite, same as Liverpool
  status: "active" | "day-to-day" | "out" | "gtd" | "questionable" | "suspended",
  injuryNote,
  image,
  career: [{years, team, type}] // 'draft' entry instead of Liverpool's youth/senior/fee
}
```

Status taxonomy follows NBA injury report language (Probable / Questionable / Doubtful / Out) rather than soccer's fit / doubtful / recovering / injured. Color mapping stays the same.

Other exports:
- `RSS_FEEDS` — see §3.3
- `TEAM_LOGOS` — 30 NBA crests (NBA.com CDN or Wikipedia)
- `NEXT_GAME` (renamed from `NEXT_MATCH`) — opponent, shortName, home, date, venue, broadcast, **+ `seriesContext`** when in playoffs (e.g., "Game 3 · ATL leads 2-0")
- `RESULTS` — date, opponent, home, score (format `"112-108"`), result `"W" | "L"` (no draws), topScorers (1-2 names with points)
- `NEWS_DIGEST` — same shape as Liverpool. Categories: `"trades" | "injuries" | "games" | "rotation" | "general"`

### 3.3 News sources to validate in Phase 1

Candidate RSS feeds — verify liveness before committing them in:

- `https://www.nba.com/hawks/rss/news` (official, may block CORS — rely on rss2json)
- `https://www.espn.com/espn/rss/nba/team?team=atl` (ESPN team feed)
- `https://www.peachtreehoops.com/rss/index.xml` (SB Nation Hawks)
- `https://www.ajc.com/arc/outboundfeeds/rss/category/sports/atlanta-hawks/?outputType=xml` (AJC)
- `https://www.cbssports.com/rss/headlines/nba/atlanta-hawks/` (CBS)

**Minimum viable mix:** one fan site (Peachtree Hoops), one major (ESPN), one local (AJC). If NBA.com feed is CORS-blocked, drop it.

### 3.4 Sport-specific cards / views

- **Playoff series card** (in-season only): series status, next game, schedule of the series. Hidden if no active series.
- **Home/Away form strip**: last 5 home + last 5 away. Home/road splits matter much more in the NBA than in soccer.
- **Rotation / minutes view** replaces Liverpool's pitch lineup: starting 5 + bench minutes, organized by position.
- **Standings mini-card**: East standings, Hawks' seed, games back from the leader.

### 3.5 Branding

- Primary: `#E03A3E` (Hawks red)
- Secondary: `#26282A` (near-black)
- Accent: `#C1D32F` (volt yellow)
- Dark background: `#1a1a1f`

---

## 4. Scheduled task

| Field | Value |
| --- | --- |
| Task ID | `hawks-tracker-update` |
| Cron | `10 8 * * *` (8:10 AM — staggered after Liverpool) |
| Description | Daily Hawks news + player + game data refresh, build + commit + push |
| SKILL.md | Near-copy of `liverpool-tracker-update/SKILL.md` adapted for `NEXT_GAME`, NBA status vocab, Hawks-specific search queries |

---

## 5. Build plan (Phase 1, once green-lit)

1. Scaffold Vite app here; copy `package.json`, `vite.config.js` (with base path updated), `.gitignore`, `index.html`, and the pages workflow from `~/liverpool-tracker`.
2. Strip Liverpool-specific content from `App.jsx`; swap in Hawks branding constants.
3. Web-search current Hawks roster, injury report, last ~20 games, next game, playoff status. Populate `src/playerData.js`.
4. Build the rotation/depth view to replace `LineupView`.
5. Add the Playoff Series card (behind a `NEXT_GAME.seriesContext` guard) and the East Standings mini-card.
6. Populate initial `NEWS_DIGEST` from search results.
7. Validate each RSS feed — drop any that 404 or won't parse via rss2json.
8. `node --check src/playerData.js && npm run build` must exit clean.
9. Create GitHub repo `nnnsightnnn/hawks-tracker`, push, enable Pages.
10. Write `SKILL.md` for the update loop. Register `hawks-tracker-update` scheduled task.
11. Manual smoke-test of one scheduled run before leaving it on.

---

## 6. Risks / flags before coding

1. **RSS availability**: if NBA.com + ESPN both block, we fall back to Peachtree Hoops + AJC + CBS. If fewer than 2 anchor feeds work, we ship with static NEWS_DIGEST only and hide the live RSS grid.
2. **Playoff state unknown at scope time**: the UI needs to handle three states gracefully — play-in, active series, eliminated/offseason. Component guards, not hardcoded assumptions.
3. **Knowledge cutoff (end of May 2025)**: everything about the current Hawks roster, coaching staff, standings must come from live web search. Assume nothing; verify everything.

---

## 7. Open questions (block coding until answered)

1. 8:10 AM schedule time OK, or pick a different slot?
2. Any deviation from the Hawks colors in §3.5?
3. If the Hawks are already eliminated by the time we ship, do you still want the Playoff Series card built (hidden), or skip it entirely and add a "Season Recap" card?
4. Shared "Atlanta Sports" landing page linking Hawks + Falcons trackers — yes, no, or later?

---

## 8. Definition of done

- Repo builds green with `npm run build`.
- Live at `https://nnnsightnnn.github.io/hawks-tracker/`.
- Three views working: Dashboard / Rotation / News.
- `NEWS_DIGEST` populated from real, dated sources.
- `hawks-tracker-update` scheduled task runs and produces a valid commit within the expected window.
- `SKILL.md` reads cleanly and mirrors Liverpool's structure so the update loop is predictable from day one.
