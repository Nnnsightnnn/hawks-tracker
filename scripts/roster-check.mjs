// scripts/roster-check.mjs
// Compares PLAYERS[] in src/playerData.js against ESPN's live Hawks roster and
// flags what the daily update must fix: new arrivals, departures, height/weight
// drift, and missing bio/combine blocks. Read-only; it never edits files.
//
//   node scripts/roster-check.mjs          # human-readable report
//   node scripts/roster-check.mjs --json   # ESPN bio for every roster player
//
// Exit 0 = in sync. Exit 1 = something to fix (see report). Exit 2 = fetch failed.
import * as DATA from "../src/playerData.js";
const { PLAYERS } = DATA;
const ROSTER_EXCLUDE = DATA.ROSTER_EXCLUDE || [];

const ROSTER = "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/1/roster";
const ATHLETE = (id) => `https://site.web.api.espn.com/apis/common/v3/sports/basketball/nba/athletes/${id}`;

const norm = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z]/gi, "").toLowerCase();
const inches = (disp) => { const m = /(\d+)'\s*(\d+)/.exec(disp || ""); return m ? +m[1] * 12 + +m[2] : null; };
const lbs = (disp) => { const m = /(\d+)/.exec(disp || ""); return m ? +m[1] : null; };
const season = (disp) => (!disp ? null : /rookie/i.test(disp) ? 1 : +(/(\d+)/.exec(disp) || [])[1] || null);
const isoDob = (d) => { if (!d) return null; const [dd, mm, yy] = d.split("/"); return `${yy}-${mm.padStart(2, "0")}-${dd.padStart(2, "0")}`; };

let roster;
try {
  roster = (await (await fetch(ROSTER)).json()).athletes;
} catch (e) {
  console.error("ESPN roster fetch failed:", e.message);
  process.exit(2);
}

const espn = [];
for (const a of roster) {
  let d = {};
  try { d = (await (await fetch(ATHLETE(a.id))).json()).athlete || {}; } catch {}
  espn.push({
    espnId: a.id, name: a.fullName, jersey: a.jersey ?? null,
    height: inches(a.displayHeight), weight: lbs(a.displayWeight),
    college: a.college?.name || null,
    hometown: d.displayBirthPlace || null,
    birthDate: isoDob(d.displayDOB) || (a.dateOfBirth || "").slice(0, 10) || null,
    draft: d.displayDraft || null,
    nbaSeason: season(d.displayExperience),
  });
}

if (process.argv.includes("--json")) {
  console.log(JSON.stringify(espn, null, 2));
  process.exit(0);
}

const issues = [];
const byName = new Map(espn.map((e) => [norm(e.name), e]));
const ours = new Set([...PLAYERS.map((p) => norm(p.name)), ...ROSTER_EXCLUDE.map(norm)]);

for (const p of PLAYERS) {
  const e = (p.bio?.espnId && espn.find((x) => x.espnId === String(p.bio.espnId))) || byName.get(norm(p.name));
  if (!e) { issues.push(`DEPARTED?  ${p.name} is in PLAYERS but not on ESPN's roster`); continue; }
  if (!p.bio) issues.push(`NO BIO     ${p.name} (espnId ${e.espnId})`);
  if (p.combine === undefined) issues.push(`NO COMBINE ${p.name} (set an object, or { year: null, note } if never measured)`);
  if (p.physical?.height !== e.height || p.physical?.weight !== e.weight)
    issues.push(`HT/WT      ${p.name}: ours ${p.physical?.height}/${p.physical?.weight}, ESPN ${e.height}/${e.weight}`);
  if (p.bio && p.bio.nbaSeason !== e.nbaSeason && e.nbaSeason != null)
    issues.push(`SEASON     ${p.name}: ours ${p.bio.nbaSeason}, ESPN ${e.nbaSeason}`);
  if (e.jersey != null && String(p.number) !== String(e.jersey))
    issues.push(`JERSEY     ${p.name}: ours ${p.number}, ESPN ${e.jersey}`);
}
for (const e of espn) {
  if (!ours.has(norm(e.name))) issues.push(`NOT IN PLAYERS  ${e.name} #${e.jersey} (espnId ${e.espnId}); two-way or new arrival?`);
}

if (!issues.length) { console.log(`Roster in sync: ${PLAYERS.length} players, all with bio and combine.`); process.exit(0); }
console.log(issues.join("\n"));
process.exit(1);
