---
name: hawks-tracker-update
description: Fetches the latest Atlanta Hawks news via web search, updates roster/injuries/games, regenerates the tracker with recency-biased news digests, and publishes to the live GitHub Pages site.
---

You are updating the Atlanta Hawks 2025-26 season tracker app. Project lives at `~/hawks-tracker`. The single source of truth is:

**`~/hawks-tracker/src/playerData.js`** — exports: `PLAYERS`, `RSS_FEEDS`, `TEAM_LOGOS`, `NEXT_GAME`, `RESULTS`, `PLAYOFF_SERIES`, `EAST_STANDINGS`, `NEWS_DIGEST`.

Data-model spec: `~/hawks-tracker/.claude/specs/data-model.md`.

## LIVE SITE — PUBLIC CONTENT

Auto-deploys to **https://nnnsightnnn.github.io/hawks-tracker/** on every push to `main`. Consequences:
- Every commit is PUBLIC — news must be sourced, headlines real, no speculation as fact.
- A broken build breaks the live site. `npm run build` must exit 0 before pushing.
- Local commits don't publish — you MUST `git push origin main`.
- RSS feeds are fetched via `rss2json.com` in prod. Don't remove `RSS_FEEDS` entries unless the source is gone.
- Never stage `dist/` or `node_modules/`.

---

## STEP 1 · RECON (before any searches)

Read current state so later updates are deltas, not rewrites:

```bash
cd ~/hawks-tracker
git log --oneline -5                              # what was the last update?
node -e "import('./src/playerData.js').then(m => console.log(JSON.stringify({ next: m.NEXT_GAME, last: m.RESULTS[0], series: m.PLAYOFF_SERIES, digestTs: m.NEWS_DIGEST.generatedAt }, null, 2)))"
```

Note: the current date (from `<env>`), the last update's lead story, whether a playoff series is active, and the next scheduled game. This determines your search bias below.

---

## STEP 2 · FRESH WEB SEARCHES (≥ 10 queries, parallelize)

The old bar was 5 searches. The new bar is **≥ 10**, run in parallel where possible. Quality of player data depends directly on the breadth of this pass. Include:

### Team-level (always)
1. `"Atlanta Hawks news today"` (or yesterday if running early AM)
2. `"Atlanta Hawks injury report"` — team-level injury report
3. `"Atlanta Hawks starting lineup tonight"` (game day) OR `"Atlanta Hawks last game recap"` (post-game) OR `"Atlanta Hawks trade rumors"` (offseason)
4. `"Atlanta Hawks rotation minutes"` OR `"Quin Snyder rotation"`
5. Trending storyline picked up in results 1–4 (follow the thread)

### Season-aware bias
- **In-season (Oct–early Apr)**: tonight's game, rotation, rest days, injury report.
- **Playoffs (mid-Apr–Jun when active)**: Check `PLAYOFF_SERIES` first. If a game was played since `generatedAt`, that's the lead. Search series state, adjustments, matchup stats, Game N recap or Game N+1 preview.
- **Offseason (Jul–Sep)**: trades, free agency, Summer League, draft fallout, training camp.

### Per-player (≥ 5 queries — this is where "good player info" comes from)
For each **starter** and **top 3 bench rotation** pieces, search at least ONE of:
- `"{Player Name} Hawks stats"` (to verify season averages)
- `"{Player Name} injury"` (to catch status changes)
- `"{Player Name} last game"` (post-game performance)
- `"{Player Name} minutes"` (rotation shifts)

Focus by priority:
1. Jalen Johnson (franchise focal point)
2. Dyson Daniels (DPOY-tier storyline)
3. Trae Young / CJ McCollum (PG situation post-trade)
4. Onyeka Okongwu (starting C)
5. Zaccharie Risacher (2nd-year jump)
6. Any player whose status was not "active" on the last run
7. Any player mentioned in a headline from steps 1–5

### Stats verification (at least ONE trusted tier-1 source per run)
6. `"site:basketball-reference.com Atlanta Hawks 2025-26"` — season averages
7. `"site:nba.com/stats Atlanta Hawks"` — advanced stats, usage%, TS%

### Source trust tiers
- **Tier 1 (stats)**: nba.com, basketball-reference.com, ESPN box scores. Use these for any numeric update.
- **Tier 2 (news)**: The Athletic, AJC, Peachtree Hoops, HoopsHype, Hoops Rumors, Bleacher Report.
- **Tier 3 (color)**: Twitter, podcasts, message boards. Never the sole source for a fact; use for narrative texture only.

Capture which tier each fact came from so Step 3 can cite accurately.

---

## STEP 3 · UPDATE NEWS_DIGEST (`src/playerData.js`)

Must feel like a briefing a fan would read THIS MORNING.

### `summary` (3–5 sentences)
- Lead sentence = biggest story of last 24–48 hours (game result, injury, trade, rotation).
- Work backwards chronologically — older storylines after the fresh news.
- Include the current date context ("Heading into Game 2…", "As of {Month Day}…").
- The `summary` keeps a rolling archive: current lead first, then older beats introduced by ` Earlier (Weekday Mon D): ` markers. The cover story renders ONLY the current lead — `App.jsx` splits `summary` on the `/\s+earlier\s*\(/i` marker and prints `[0]` — so keep that marker word ("Earlier (") intact, capital E, sentence case, when you demote yesterday's lead.

### `keyTopics` (8–12 items)
- Ordered by recency — the first 3–4 must be from the last 1–2 days.
- Each `detail` MUST include a time anchor ("Wednesday's 112-108 loss", "Snyder told reporters Thursday", "reported overnight by The Athletic").
- Categories: `"trades" | "injuries" | "games" | "rotation" | "general"`.
- When a story has new info, update the existing topic — don't keep stale versions.
- Older ongoing storylines (Trae fallout, Snyder extension, Johnson All-NBA case) appear LATER in the list, not first.

### `generatedAt`
- Current UTC ISO timestamp.

### `sources`
- Only outlets you actually used. Prefer tier-1 and tier-2.

---

## STEP 4 · UPDATE PLAYER DATA (refresh every run)

**New policy: refresh season averages every run**, not only after games. Stats drift between runs; re-sync from tier-1 sources each time.

### For each of the 15 `PLAYERS[]` entries, verify/refresh:

Existing fields (refresh from basketball-reference or NBA.com):
- `gamesPlayed`, `gamesStarted`, `minutesPerGame`
- `pointsPerGame`, `reboundsPerGame`, `assistsPerGame`, `stealsPerGame`, `blocksPerGame`, `turnoversPerGame`
- `fieldGoalPct`, `threePointPct`, `freeThrowPct`, `trueShootingPct`
- `plusMinus`
- `status`, `injuryNote`

Only update when the tier-1 source confirms a delta ≥ 0.1 on rate stats or ≥ 1 on counting stats. Don't churn numbers on rounding noise.

### New optional fields (add when source data is available, leave as `null` otherwise)

| Field | Type | Notes |
|-------|------|-------|
| `last5` | `{ ppg, rpg, apg, fgPct, threePct, minutes } \| null` | Last-5-games splits from basketball-reference gamelog |
| `usageRate` | `number \| null` | USG% from nba.com/stats or basketball-reference advanced |
| `seasonHighs` | `{ points, rebounds, assists, threes } \| null` | Career/season bests when surfaced |
| `minutesTrend` | `"up" \| "steady" \| "down" \| null` | Direction over last ~10 games vs season avg |
| `recentNotes` | `string \| null` | ≤ 140 chars, most-current one-liner ("Back-to-back 25+ point games", "Sprained ankle, likely out Game 2") |
| `playoffSeries` | `{ games, ppg, rpg, apg, mpg, fgPct, threePct, notes } \| null` | Populated ONLY when `PLAYOFF_SERIES` is active. `notes` is a short matchup observation ("Guarding Brunson, holding him to 42% FG"). |

### Injury detail — richer `injuryNote` format
When `status != "active"`, `injuryNote` must include: body part + severity + timeline + source.
- Good: `"Left ankle sprain (Grade 1, out Games 1–2, re-eval Apr 22 — Shams)"`
- Good: `"Right knee soreness (MRI clean, day-to-day since Apr 15 — AJC)"`
- Bad: `"Ankle"` or `"Day-to-day"` (too thin).

Status vocab: `"active" | "day-to-day" | "questionable" | "doubtful" | "out" | "suspended"`.

### Form rating rubric (0.0–10.0)

Re-evaluate `form` for every player based on last ~10 games + last game. Anchor to:
- **9.0–10.0**: All-NBA–level stretch, clearly carrying the team
- **8.0–8.9**: All-Star–level contribution, consistently elite
- **7.0–7.9**: Solid high-level starter, above expectations
- **6.0–6.9**: Steady baseline, at expectations
- **5.0–5.9**: Below expected, mild slump
- **4.0–4.9**: Poor stretch, struggling to contribute
- **< 4.0**: Injury-affected, benched, or major slump

Never move `form` more than ±1.0 per run without a clear narrative reason (trade, extended absence, breakout game).

### Preserve these fields verbatim — do NOT touch unless a real roster move occurred
- `image` (NBA CDN headshot URL: `https://cdn.nba.com/headshots/nba/latest/1040x760/{playerId}.png`)
- `physical` (`{ height, weight }` in inches/lbs)
- `career` array (only touch on trade-in/out, draft, new signing)
- `id`, `name`, `number`, `position`, `nationality`, `age`

---

## STEP 5 · UPDATE GAME DATA

- New game played → prepend to `RESULTS` (newest first). `competition: "REG"` or `"PLAYOFFS"`.
- Score format: `"ATL-OPP"` (Hawks first regardless of home/away) e.g., `"112-108"`.
- `topScorers`: free text, e.g. `"Johnson 28, NAW 22, Daniels 18/10/8"`.
- Update `NEXT_GAME` to the next fixture. Playoffs → include `seriesContext` e.g. `"Round 1 · Game 3 · Series tied 1-1"`.
- New opponent not in `TEAM_LOGOS` → add NBA CDN logo: `https://cdn.nba.com/logos/nba/{teamId}/primary/L/logo.svg`.

---

## STEP 6 · UPDATE PLAYOFF_SERIES (when active)

After each game:
- Increment `wins` or `losses`.
- Fill in the completed game's entry: `score`, `result` (`"W"` / `"L"`). Leave future games as `score: null, result: null`.
- Populate each player's `playoffSeries` sub-object (see Step 4) — THIS is the playoff deep dive.
- Add per-series storylines in NEWS_DIGEST `keyTopics` with `category: "games"` or `"rotation"`.

Series end:
- Hawks eliminated → set `PLAYOFF_SERIES = null` AND set each player's `playoffSeries` to `null`.
- Hawks advance → update `round`, `opponent`, `opponentShort`, `opponentSeed`, reset `wins`/`losses` to 0, populate new `games` array with scheduled dates. Reset per-player `playoffSeries.games = 0` (keep averages for now; they get overwritten after Game 1 of the new round).

---

## STEP 6.5 · QUEUE A COVER IMAGE REQUEST (if today's lead is genuinely visual)

After the data passes are done, but BEFORE the build, decide whether today's lead story warrants a custom cover image. If yes, invoke the **`limn-editor-enhance`** skill (`~/.claude/skills/limn-editor-enhance/SKILL.md`) — it does the Limn-style prompt enhancement and appends a fully-spec'd entry to `~/Vault/Notes/image-requests.md`. A downstream Antigravity-side scheduled task will generate the image, save it, and push it to `~/hawks-tracker/public/assets/cover/` later. You do NOT generate or commit the image here.

### Queue ONLY for genuinely visual moments

- A just-played game with a clear hero or villain moment (Trae step-back game-winner, Jalen poster dunk, Onyeka block at the rim).
- A playoff-series turning point (Game 1 win on the road, closing handshake line, locker-room celebration).
- A notable return — first start back from injury, season debut.
- Opening night / All-Star moment / regular-season finale of any consequence.

### Do NOT queue for

- Trade-rumor chatter, salary-cap math, lottery odds.
- Draft scouting takes, mock drafts.
- Routine box-score stat updates, line-movement, injury status flips without a return-to-court moment.
- Anything you couldn't picture as a single still photograph.

### How to invoke

Call the skill with this minimum payload:

| Field | Value |
|---|---|
| `roughPrompt` | One-sentence rough idea — concrete subject + setting. |
| `tracker` | `hawks` |
| `leadStory` | The single-sentence lead pulled from `NEWS_DIGEST.topics[0]` or `summary`. |
| `subject` | Player + arena/venue (e.g., "Trae Young pulling up from the logo at State Farm Arena late in Q4"). |
| `aspectRatio` | `portrait` (default 1200×1600). Use `landscape` for crowd / bench-celebration shots. |
| `slug` | Optional 2-3-word kebab — `trae-logo-three`, `jalen-poster`. |

**Cap at ONE queued request per run.** If two moments compete, queue the bigger one and drop the other.

### Report

Add to STEP 9 report:

- `Image request: queued ({slug}.jpg) — {one-line reason}` **or** `Image request: skipped — {one-line reason}`.

## STEP 7 · VERIFY THE BUILD (do not skip)

```bash
cd ~/hawks-tracker
node --check src/playerData.js
npm run build
```

Build failure → fix before committing. Never commit a broken build. NOTE: on the Cowork sandbox mount `npm run build` fails while cleaning `dist/` with an EPERM/unlink error even when the code is fine; that is NOT a code failure. Verify instead with `npx vite build --outDir /tmp/hawks-verify --emptyOutDir` (exit 0 = code is good) per the `cowork-git-publish` skill, then publish.

---

## STEP 8 · COMMIT AND PUSH (via scripts/git-publish.sh — do NOT use plain git push)

Do NOT run plain `git add` / `git commit` / `git push` here. On the Cowork sandbox
mount deletes are blocked (EPERM), so plain git can't remove `.git/index.lock` or
prune temp objects — that's the root cause of the stale lock and the daily "local
out of sync" breakage. Publish with the helper, which stages into a throwaway `/tmp`
index, builds the commit with `git commit-tree`, and pushes by SHA — it never
deletes or moves a local file, so it never needs the lock:

```bash
cd ~/hawks-tracker && bash scripts/git-publish.sh \
  --branch main \
  --message "<descriptive one-liner naming the lead story>" \
  src/playerData.js          # plus any other files you actually edited
```

Rules:
- Name only the files you modified as trailing args. Never publish `dist/` or `node_modules/`.
- Commit message names the lead story (e.g., `"Game 2 recap: Hawks even series 1-1 behind Johnson 34"`, `"Okongwu upgraded to questionable for Game 3"`). Public — no speculation.
- The helper REFUSES to push if the remote moved ahead of local HEAD and never force-pushes, so it cannot clobber Kenny's local work. If it reports non-fast-forward, note it and stop.
- `warning: unable to unlink ... tmp_obj` lines are EXPECTED and harmless on this mount.
- It pushes by SHA, so the LOCAL branch ref stays put by design; Kenny reconciles his clone separately (his sync-tracker script). Do NOT try to move the local ref.
- If `scripts/git-publish.sh` is missing, note it and fall back to `git push origin main`, flagging that the helper needs restoring.
- `scripts/git-publish.sh` is tracked in this repo (since 2026-10-06), so cloud runs get it from a fresh clone.

---

## STEP 9 · REPORT

At the end, report in this exact shape:
- **Lead story**: one line
- **Searches run**: count + key queries
- **Player refresh**: how many of 15 players had fields updated, which fields touched most (e.g., "season averages: 12/15, last5: 10/15, recentNotes: 8/15")
- **Game/series state**: any new game added, series record now
- **Files changed**: one-line diff summary per file
- **Build**: pass/fail
- **Commit**: SHA + push status
- **Live site**: https://nnnsightnnn.github.io/hawks-tracker/

---

## GUARDRAILS

- **STYLE — AVOID EM DASHES:** In all prose you write this run (NEWS_DIGEST summary/keyTopics details, recentNotes, injuryNotes, topScorers text, commit messages, the Step 9 report), avoid em dashes (—) wherever possible. Prefer commas, colons, periods, or parentheses, or restructure the sentence. Keep an em dash only where no clean alternative reads naturally. Do not substitute en dashes (–) except in genuine ranges/scores.
- **STYLE — NO ALL-CAPS PROSE:** Write every news string in normal sentence case, never ALL CAPS. This covers `NEWS_DIGEST.summary`, every `keyTopics[]` `title` (Title Case) and `detail` (sentence case), plus `recentNotes`, `injuryNote`, and `topScorers`. Do NOT capitalize whole lead sentences or day-markers for emphasis (no `"AS OF WEDNESDAY..."`, no `"EARLIER (TUESDAY..."` in caps — use `"Earlier (Tuesday...):"`). Emphasis comes from the page layout (the cover drop cap and the big serif headline), not from capitalization. Keep proper nouns and real acronyms (ESPN, NBA, MRI) capitalized normally. See CLAUDE.md [STYLE-00001..00003].
- #1 priority: FRESH, RECENT news + accurate, current player stats.
- Never fabricate headlines, quotes, stats, or URLs. This is PUBLIC content.
- Lead with the biggest developing story in BOTH `summary` and the first `keyTopics` entries.
- NBA status vocab is `active | day-to-day | questionable | doubtful | out | suspended`. NOT soccer vocab (`fit | injured | recovering`).
- `RESULTS.score` is always `ATL-OPP` regardless of home/away — the UI handles visual swap.
- New schema fields (`last5`, `usageRate`, `seasonHighs`, `minutesTrend`, `recentNotes`, `playoffSeries`) are optional and default to `null`. Their absence must not break the build or the UI.
- If a stat source disagrees with another, prefer tier-1. If tier-1 disagrees internally, keep the prior value and note the ambiguity in the report rather than picking blindly.
