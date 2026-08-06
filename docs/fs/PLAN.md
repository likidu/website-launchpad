# TiDB Cloud Filesystem — Landing Page Plan

Status: **Wedge settled 2026-08-04 (third attempt) — "the workspace your agents share."
Reframed 2026-08-05 after reviewing Marketing's mockup: the wedge is a category frame, not
the differentiator. Hero fully settled. IA settled; §4's presentation reopened 2026-08-05
after v1 review (Decision 14). Kimi authorization is the one live gate — and §3 now runs the
full-strength treatment ahead of it (Decision 9 amendment). §2's header copy reworked
2026-08-06 (Decision 15).**
Date: 2026-08-03, revised 2026-08-04, revised 2026-08-05, revised 2026-08-06.
Terminology: [`CONTEXT.md`](../CONTEXT.md).

Team review copy (reframed, softer on the benchmark section):
<https://pingcap.jp.feishu.cn/docx/LWo6dS3J9oXZmnxq16NjXdqbp8e>. That copy is internal, so it
may cite Appendix A and B material; only the public page needs clearance. This file stays the
candid working copy — re-sync manually when decisions change.

Primary sources:

- Todd's launch/FAQ doc — <https://pingcap.feishu.cn/docx/U1TCdxubKo6rFKx7RBjcTDKOn5w>
- **Marketing's mockup, `FS Landing Page _ Aug 14`** —
  <https://pingcap.feishu.cn/wiki/Ljq3whoSmiYLgckpohXcqHainYf>. **A mockup, not the spec.**
  Settled 2026-08-05: Marketing owns the comp, this file owns the spec and the claim gate.
- **`FS Evidence Assets — What, When, and How`** (v2026-08-01) —
  <https://pingcap.feishu.cn/wiki/AY7VwKahLikYjVkFnx4cfViWnvh>. Marketing's governing GTM doc.
  Carries the Aug 16 minimum bar, the docs gates, and the demo rules. **Where this file and the
  Growth Plan conflict, the Growth Plan wins** — that is the Evidence doc's own rule.
- `tdc` CLI reference — <https://github.com/tidbcloud/tdc>. The source of truth for what
  actually exists.

---

> ## ⚠️ FOR TEAM DISCUSSION — read this before the next positioning debate
>
> **We derived a wedge three times. The first two died, and the second one died for a reason
> worth internalising.**
>
> 1. **Small-file latency** — died because the number turned out to be unpublishable. The
>    inline threshold is a backend parameter still being tuned, not customer-visible.
> 2. **"One filesystem for everything the agent touches"** — died because it was derived by
>    **elimination against an incomplete competitor set**. The argument was: Cloudflare is
>    repo-shaped, Mesa version-shaped, Archil mount-shaped, S3 object-shaped, _therefore_ only
>    we are working-set-shaped. That only held because Turso AgentFS was missing from the list.
> 3. **"The workspace your agents share"** — survives, but see the next block. It is the frame,
>    not the moat.
>
> **The lesson: a claim of the form "nobody else does X" is only ever as strong as your
> competitor list.** Ours was missing two of the four most relevant players — Cloudflare
> Artifacts and Turso AgentFS — and both were public, shipping, and findable. Enumerative
> differentiation is a liability disguised as a strategy.
>
> **Prefer structural differentiation: "we are the only ones who _can_ do X."** The test to
> apply is _what would a competitor have to build to match this?_ If the answer is a sprint,
> it is not a wedge. If the answer is "a distributed database underneath their filesystem,"
> it is.
>
> **Process fix:** the competitive matrix should track everyone **the audience** knows, not
> everyone we have historically tracked, and it should be maintained continuously rather than
> refreshed when a launch forces it.

---

> ## ⚠️ ADDED 2026-08-05 — the wedge is a frame, the moat is in the cards
>
> Marketing decomposed "the workspace your agents share" into three value cards: **hosted,
> concurrent, multi-machine**. Check that against our own matrix: **five of six competitors
> tick that row.** Only Turso fails it. Archil's live headline is _"One file system, mounted
> everywhere"_ — which is cards 1 and 3, in six words, from a GA product.
>
> The row that actually discriminates is **consistency modes**, which nobody else has, and
> Marketing demoted it to a subordinate clause. The original analysis said to read the two
> bolded rows _together_; the decomposition kept the common half and buried the rare half.
>
> **So: "the workspace your agents share" is a category description, not a differentiator.**
> That is not a fourth wedge — the sentence stays as the headline, because it is the fastest
> way to make the product legible to someone arriving cold. What changes is that the _hero
> subhead and the value cards_ now have to carry the differentiation, because the headline
> does not. See [ADR-0001](../docs/adr/0001-wedge-is-a-frame-not-a-differentiator.md).
>
> **The reusable test:** before making a property a value card, look up its row in the matrix
> and count the ticks. If more than one competitor ticks it, it is context, not proof.

---

## Milestones

| Date           | Event                                                                                                            |
| -------------- | ---------------------------------------------------------------------------------------------------------------- |
| **2026-08-07** | **Kimi authorization — Growth Plan open decision #8. Gates the Aug 16 moment. Not our decision**                 |
| 2026-08-10     | 1st version of landing page design out for internal review                                                       |
| **2026-08-16** | **Landing page target (Heidi's plan). Todd has 5 days for dev and test**                                         |
| 2026-08-20     | API for listing all filesystems under an account (today `tdc` only sees filesystems created on the same machine) |
| **2026-08-31** | **List price finalised. Demo 1 non-author replay — hard gate. Private preview opens**                            |
| 2026-09-10     | Billing effective (per Product; see open decision #9 — two internal figures unreconciled)                        |
| **2026-09-13** | **Selection-and-boundaries page. Production evaluation checklist. Benchmark lands here**                         |
| **2026-09-15** | **Filesystem UI on the TiDB Cloud web console**                                                                  |
| 2026-09-30     | Public preview. GA timing set by public-preview feedback                                                         |

**Scope: this page is the technical-preview page**, targeting 2026-08-16. It is not the
private- or public-preview page; those get their own refresh later.

**Aug 16 minimum bar (from Evidence doc §4.1 — adopted).** Ship the dated announcement only if
at least one of these clears:

- (a) an approved proof form, no weaker than an approved anonymized description; or
- (b) a viewable, access-controlled CLI walkthrough, even if open self-serve isn't live.

**Neither → pull the dated announcement and keep the page as product education.** (b) is
satisfied by demo 1, which is being built anyway — its _replay_ gate is Aug 31, but §4.1 only
requires _viewable_ by Aug 16. So we already hold a second rung at no extra cost.

**Claims discipline (from Evidence doc §5.1 — adopted verbatim).** Every claim on the page must
be one of three things: **a runnable flow, a public interface, or an explicitly labeled
limitation.** Nothing else ships.

## Decisions

| #   | Decision                                                                                                                                              | Status                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Wedge is **"the workspace your agents share"** — hosted, concurrent, multi-machine, with cross-sandbox handoff as the core primitive                  | **Reframed 2026-08-05.** Stays as the headline, but it is the **category frame, not the differentiator** — five of six competitors tick that row. Differentiation moves to the subhead and the value cards. See the second discussion block and ADR-0001                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 2   | Proof is a real benchmark; placeholders where missing                                                                                                 | **Deferred to 2026-09-13.** No new benchmark before Aug 16 — Decision 2 already demoted it, §4.1(b) is satisfied by the walkthrough, and a rushed number on unfamiliar rigging is what killed wedge attempt #1. Run it properly on production, in-region, published as a reproducible repo, alongside the selection-and-boundaries page                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 3   | One page. Quickstart primary CTA, low-key "talk to us" secondary                                                                                      | **Holds — reaffirmed 2026-08-05 over Evidence doc §4.** Marketing's governing rule says the first screen should be "customer case / learn more" and that "a bare create-filesystem command is never the primary experience." Overridden: the audience is sandbox/CI operators, and both comparators (Archil, Mesa) lead with real code. Mesa ships exactly this structure — `Quickstart` primary, `Get early access` secondary. §4's real objection is to an _uncompletable_ command, which Decision 5's rework fixes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 4   | CTA is quickstart, not free trial                                                                                                                     | **Holds.** Waitlist stays rejected. Marketing's "Technical Preview access is limited" is dropped as a gating phrase — it sits inside a pricing answer and means _usage_ limits, but on a "go run it" page it reads as a waitlist                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 5   | Hero is the four-line token-mount snippet                                                                                                             | **Reworked and settled 2026-08-05.** Now: create → mount → write → **mountless readback**. See "Hero code sample" below. Marketing's mockup left the old single-agent snippet in place, so their page argues for a claim its own hero doesn't demonstrate                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 6   | "Filesystem token" and "API key"; never a bare "token"                                                                                                | Holds                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 7   | The API key never appears on the page                                                                                                                 | **Largely resolved 2026-08-05.** `tdc fs create-file-system --query fs_token` returns the filesystem token directly, so the token has a visible origin _inside the snippet_ and the API key reduces to a one-line `tdc configure`. No console excursion in the hero. Mesa's precedent: their snippet just says `process.env.MESA_API_KEY` and never explains it                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 8   | IA: seven sections, claim → evidence → mechanism → application                                                                                        | **Revised 2026-08-05** — see Information architecture. Adopts Marketing's "every floor's headline answers the previous floor's closing line"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 9   | No testimonials                                                                                                                                       | **Amended 2026-08-05 — §3 upgraded to the customer-story treatment.** The core holds: no quote, no outcome metric — Modal's outcome-shaped furniture stays rejected. What changed: Kimi wordmark, Kimi Work naming, a story CTA (placeholder link), and the scale-of-use disclaimer dropped. This **presumes decision #8 clears on 2026-08-07 and that co-branding clears with it**; the downgrade — drop wordmark + CTA, restore the disclaimer — is a text swap, not a layout change, and the in-page REVIEW note carries those instructions                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 10  | Standalone static build at `pingcap.com/tidb-cloud-filesystem/`                                                                                       | Holds. Evidence doc §2.1 requires a **stable public URL — not a Feishu doc, not a temporary preview domain**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 11  | **Big matrix internally, narrow comparison publicly**                                                                                                 | **Simplified 2026-08-05 — no competitor comparison on Aug 16 at all.** Marketing's "Where it fits" reframes from _grading competitors_ to _which storage category for which boundary_, which needs no competitive clearance. §6 is unblocked and the Appendix A clearance item drops off the critical path                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 12  | **Marketing's mockup is a comp; this file is the spec**                                                                                               | **Settled 2026-08-05.** Marketing owns IA suggestions and visual comp; Product owns claim approval. The mockup contains four claims that are wrong or unverifiable — access-limited, co-branding, code-symbol search, checkpoint — and those are product-truth calls                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 13  | **Value cards are built on discriminating capabilities, not on the shared-workspace properties**                                                      | **Settled 2026-08-05.** Consistency modes, git-aware workspace, rebuildable-vs-persistent split. See ADR-0001                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 14  | **The 8-step loop is shown, not narrated** — v1's eight static prose rows replaced by a visual/animated sequence, copy cut to roughly a line per step | **New 2026-08-05, from v1 review; treatment settled same day via prototype.** Amends the build-budget rule ("ship as a static sequence"). Eight rows × ~45 words is an essay on a page the audience skims — the section's job is to make the loop _legible_, and the static list fails it. Content and claims are unchanged; this is presentation only. Marketing's auto-playing 8-tab rig stays rejected — one scoped treatment applied eight times, not eight bespoke animations. **Winner: a full-bleed auto-advancing expanding-card strip** (one card open, seven slivers, 4s interval, hover pauses, click activates, reduced-motion disables the timer, compact list below lg) — chosen over a stepper-plus-accumulator and a scroll-pinned sequence; all four variants preserved on branch `prototype/fs-loop-section`                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 15  | **§2 header reworked; three cards stand; no search card**                                                                                             | **Settled 2026-08-06 (grill session).** (i) §2's job is differentiation against _the reader's current storage_ — the disk that dies with the sandbox — not filesystem taxonomy; the title's foil changes from "a local one" to the ephemeral sandbox disk. (ii) The subhead keeps the structural moat (distributed database underneath) translated to plain speech; "category"/"mechanisms" analyst-speak dies. (iii) Table stakes: **checkpoints never appear in §2** — FAQ 7 retracts the guarantee and Decision 12 flags the claim; the reassurance need is met by a quiet mono strip under the cards phrased as behavior, not "POSIX." (iv) **No fourth card** — inline small-file storage re-failed for the wedge-#1 reasons (no figure, not customer-visible, no interface), and full-text-search-as-card failed the ADR-0001 tick-count (no matrix row; Turso plausibly matches via SQLite FTS — a sprint, not a database) plus it headlines the semantic-search-retraction zone. The capability is real (`search-file-content` / `find-files` are shipped commands), so it folds into the reassurance strip's "or don't mount" clause; step 02 stays the mechanism home. Card candidacy revisits in September only if Todd confirms index-backed search and the matrix row shows exclusivity |

## What actually differentiates us

**Internal only.** With Decision 11 simplified, none of this reaches the page on Aug 16 — it
now exists to keep the _value cards_ honest, not to be published.

| Dimension                         | S3 Files            | Archil               | Mesa                   | Cloudflare Artifacts      | Turso AgentFS                     | TiDB Cloud Filesystem                    |
| --------------------------------- | ------------------- | -------------------- | ---------------------- | ------------------------- | --------------------------------- | ---------------------------------------- |
| Core shape                        | object / NFS        | mount                | version                | git repo                  | agent runtime                     | **shared workspace**                     |
| Hosted, concurrent, multi-machine | ✅                  | ✅                   | ✅                     | ✅                        | ❌ local-first single file        | ✅                                       |
| **Consistency modes**             | NFS semantics       | ❌                   | ❌                     | ❌                        | ❌                                | ✅ writeback / close-sync / write-sync   |
| Non-git files                     | ✅                  | ✅                   | ✅                     | ❌ git-specific by design | ✅                                | ✅                                       |
| **Git-aware workspace**           | ❌                  | ❌                   | ⚠️ versioning, not git | ✅ strongest in class     | ❌                                | ✅ `fs-git`                              |
| Layers / checkpoint / rollback    | ❌                  | ⚠️ disk-level        | ✅ fork, checkpoint    | ⚠️ git-shaped forking     | ✅ instant COW branching          | ✅ fs- and directory-level               |
| Audit trail                       | CloudTrail          | ❌                   | ⚠️ approval queues     | ❌                        | ✅ SQL-queryable, incl. toolcalls | ✅ `fs-journal`                          |
| Secrets / vault                   | ❌ separate service | ❌                   | ❌                     | ❌                        | ❌                                | ✅ `fs-vault`                            |
| Semantic search                   | ❌                  | ❌                   | ❌                     | ❌                        | ❌                                | ⚠️ built, **not live in tech preview**   |
| Built-in sandbox                  | ❌                  | ✅                   | ❌                     | ❌                        | ✅ CLI wraps a program            | ❌ BYO — E2B, Modal, Daytona             |
| SDK languages                     | AWS SDKs            | —                    | ✅ TypeScript          | git + APIs                | ✅ TS, Python, Rust               | ❌ **Go CLI only**                       |
| Open source                       | ❌                  | ❌                   | ❌                     | ✅ ArtifactFS, Apache-2.0 | ✅                                | ⚠️ CLI only                              |
| Platform                          | AWS                 | AWS, GCP, Cloudflare | BYOC AWS/GCP/Azure     | Cloudflare only           | anywhere, incl. browser WASM      | AWS; GCP planned; Alibaba, Tencent ready |
| Maturity                          | GA                  | GA                   | early access           | beta                      | beta                              | tech preview                             |

**The "hosted, concurrent, multi-machine" row is ticked by five of six.** It is table stakes,
not a wedge. **Consistency modes and git-aware workspace are the two rows that carry weight** —
those are the value cards.

Against **Cloudflare Artifacts** specifically: it wins git-aware outright, but it is git-_only_
by design, so it cannot hold `node_modules`, test output, or artifacts. That is a clean,
honest, structural contrast and it does not require naming them on the page.

Turso's CTO [argues](https://penberg.org/blog/disaggregated-agentfs.html) that "a single file
on the local disk only scales so far" and describes disaggregating onto object storage as
**"a direction, not a finished system"**. That is the gap we are shipping in — and it is a gap
that closes if they execute, so the wedge has a shelf life.

Cloudflare's published limits are also useful: `git status` takes ~7 s on a 5,800-entry repo,
`git reset` ~6.5 s.

## Verified against the shipped CLI — 2026-08-05

Checked <https://github.com/tidbcloud/tdc>. Under the adopted claims discipline, "a public
interface" is a valid basis for a claim, so this settles most of what the page may assert.

**Real, public, safe to build copy on:**

- `tdc fs create-file-system … --query fs_token` — **returns the filesystem token directly.**
  This is what unblocks Decision 7.
- `fs-git clone-git-workspace`, `hydrate-git-workspace`, `add-git-worktree` — git-aware
  workspace has a public interface. Value card 2 is supportable.
- `fs-journal create-journal / append / read / search / verify-journal`
- `fs-vault create-secret / create-grant / list-audit-events / run-with-secret / mount-vault`
- `fs create-layer / create-layer-checkpoint / rollback-layer / commit-layer / diff-layer` —
  commands exist; the _guarantee_ does not. Marketing's FAQ wording on this is precisely right
  and should be kept verbatim.
- `fs search-file-content` (alias `grep`), `fs find-files` (alias `find`)
- `fs read-file` (alias `cat`) — **reads without mounting.** This is the hero's last line.

**Two discrepancies to settle with Todd before copy:**

1. **Regions.** The CLI documents **six** codes — `aws-us-east-1`, `aws-us-west-2`,
   `aws-eu-central-1`, `aws-ap-northeast-1`, `aws-ap-southeast-1`, `ali-ap-southeast-1`. This
   file has said "two regions only." Evidence doc §2.2 separately flags _"`ap-southeast-1` has
   no public evidence; source internally."_ Somebody is wrong, and it is a FAQ answer either way.
2. **"Code-symbol matching."** Marketing claims it as a mode to rely on today. The CLI has
   content grep and filename find; no symbol-aware command is documented. Treat as an invented
   capability until Todd says otherwise.

## Information architecture

Adopted from Marketing: **every floor's headline answers the previous floor's closing line.**
That is a real copywriting discipline and it costs nothing.

1. **Hero** — headline, subhead carrying the differentiation, code panel showing create →
   mount → write → mountless readback. `Quickstart` primary, `Talk to us` secondary. **Two
   CTAs, nothing else.**
2. **What makes it different** — three cards, rebuilt per Decision 13. **Order changed
   2026-08-06: cards run easiest → deepest**, so consistency modes — still the strongest
   thing we own, and still the hardest to grasp in three seconds — moves from first to
   last, closing the section as the deep cut rather than opening it as a riddle:
   - **Git-aware workspace** — clean tree as baseline, dirty overlay, object pack for new
     objects. `fs-git`. Against Archil ❌, Mesa ⚠️, Turso ❌.
   - **Rebuildable vs persistent** — `node_modules`, `.tsbuildinfo` and `dist` are not worth
     persisting; test results, failure logs and patches are. The split follows the project's
     own shape. **Animation budget lives here.**
   - **Consistency modes** — writeback / close-sync / write-sync. Passes the structural
     test: nobody builds consistency modes for a local single-file store. Archil cannot
     answer "what does a concurrent reader see."

   **Card copy — approved 2026-08-06 (Decision 15 addendum).** Titles state the reader's
   gain; descriptions lead with value and keep the technical payload as the second beat;
   the moat argument lives once in the subhead, not per card. In the new order:

   > **Git-aware workspace — "A resumed workspace still has its git state."** (unchanged)
   > The branch, the uncommitted changes, the objects the agent created — all of it comes
   > back on resume. Not a fresh clone; the actual working state.
   >
   > **Rebuildable vs persistent — "Keep the outcome. Drop the noise."** (unchanged — the
   > register benchmark)
   > node_modules and dist can be rebuilt anywhere, so they stay local. What can't be
   > rebuilt — test results, failure logs, patches — is what persists.
   >
   > **Consistency modes — "You decide when other agents see a write."** (was "You choose
   > what a concurrent reader sees." — 'concurrent reader' is database-speak)
   > Writeback for speed, write-sync for certainty, close-sync in between — chosen per
   > workspace. You decide how quickly every runtime agrees on what's in a file.

   Accuracy guard kept: no "agents always agree" phrasing — under writeback they can
   briefly disagree; that tradeoff is the product.

   **Header copy — reworked 2026-08-06 (Decision 15).** Draft for the page update:

   > ## Three things the disk in your sandbox can't do.
   >
   > All three exist for one reason: a distributed database sits under this filesystem,
   > so it can promise things a disk can't.

   Plus one quiet mono strip under the three cards (behavior, never "POSIX," never
   checkpoints):

   > The ordinary parts are assumed — mount it and your tools just see files. Or don't
   > mount at all: read, grep and find run against the workspace directly.

   Replaced: _"Three questions a shared filesystem has to answer, and a local one never
   does."_ — the foil "a local one" was an anti-Turso jab only the matrix could appreciate,
   and readers can hear "local" as the place git already works. Also replaced the subhead's
   "…is the category / these three are the mechanisms" — ADR language leaking onto the page.
   The moat sentence survives in plain speech; the strip's second clause carries the
   mountless family (`read-file` / `search-file-content` / `find-files`), which is full-text
   search's home on this page (Decision 15.iv).

3. **Proof — Kimi** — one row: Kimi wordmark, one number, one line, story CTA. **Upgraded
   2026-08-05** from the restrained scale-of-use treatment: named as **Kimi Work** — "desktop
   AI agent for knowledge workers," their own positioning, not "coding-agent" — with the
   disclaimer dropped and a story CTA on a placeholder link. Still no quote and no outcome
   metric (Decision 9). If authorization slips, the downgrade is a text swap: drop the
   wordmark and CTA, restore the scale-of-use line.
4. **How it works** — dual data plane and the **8-step loop**, revised per Marketing:
   Enter the repository → Search → Read context → Edit files → Build and test → Save Git state
   → Checkpoint → **Hand off**. "Filter Noise" is dropped as a step — it is a property of
   build/test, not something an agent does. The loop now **ends on the wedge**.
   **Presentation revised 2026-08-05 after v1 review — see Decision 14.** The step list and
   its order are settled; the eight static prose rows are not. Show the mechanism instead of
   narrating it: roughly one line of copy per step, the rest carried visually.
5. **Where it fits** — adopted from Marketing, with its outbound link cut. Their "you're in
   the right place if…" checklist plus a short **inline** category table (workspace filesystem
   vs Git vs object storage vs agent memory). **No competitor names, no outbound link.**
6. **FAQ** — see below.
7. **Closing CTA** — _"Nothing to rebuild. Everything to build on."_ reused here, where it
   earns its keep. Plus the two-runtime test: write from one runtime, let it end, reopen from
   another.

**Navigation:** collapse it. Marketing's mockup has six in-page anchors, a persistent CTA and
~9 further CTAs. Mesa ships five _destination_ links and two hero CTAs. Match Mesa.

### Hero copy — settled

> # The workspace your agents share.
>
> One filesystem, held by several runtimes at once, that knows what an agent leaves behind —
> dirty tree, new objects, test output, artifacts.

Those four nouns are the exact things that survive here and die in a sandbox volume, and none
of them is a retracted claim.

**Rejected:** Marketing's _"Nothing to rebuild. Everything to build on."_ as the headline — it
would fit a CI cache, a package registry or a build system unchanged. Moved to §7 where it
works. **Also rejected:** their subhead _"mountable, searchable, recoverable, handoff-ready"_ —
an adjective list, and **two of the four adjectives are claims the page's own FAQ retracts**
(semantic search, checkpoint/rollback).

### FAQ — nine answers

**Evidence doc §2.1 makes a public known-limitations list a required minimum-tier gate item**,
owned by Product + Growth, "fold into the page and quickstart." So this is not a matter of
taste. Marketing's mockup deleted five of these; all five are restored.

Restored (were in this plan, dropped by Marketing):

1. **Regions** — pending the fact-check above.
2. **No China region** — capacity there is dedicated to Kimi. Others by request.
3. **Laptop mounting** — supported but not recommended; the recommended path is a cloud VM
   in-region.
4. **`tdc` currently only lists filesystems created on the same machine** — account-wide
   listing lands 2026-08-20.
5. **No SDK — Go CLI only.** Turso ships TS/Python/Rust, Mesa ships TS. Real gap, say so.

Kept from Marketing (genuinely good, and missing from this plan before today):

6. **Semantic / vector search** — full-text and filename matching today; semantic retrieval is
   in the product design and **not** part of what the technical preview guarantees. Drop
   Marketing's "code-symbol matching" claim pending the fact-check.
7. **Checkpoint and rollback** — commands are visible in the CLI, but not part of what the
   technical preview guarantees. What's ready is cross-runtime continuity. Keep their wording.
8. **No SLA** — _"Keep evaluation data recoverable elsewhere."_ Keep verbatim.
9. **Retention after the preview ends** — an open Product decision. Say so.

Plus one rewritten (Decision 4 / Q8):

10. **Cost and access** — technical preview; no published price yet; **list pricing publishes
    Aug 31 and billing begins Sep 10**; usage limits apply per account. **Not** "don't assume
    it's free," which is a defensive line where a factual one was available. **Not** "access is
    limited," which contradicts Decision 4.

> ⚠️ Verify before this ships: **(i)** is Sep 10 billing still live — Growth Plan open decision
> #9 flags two unreconciled internal pricing figures; **(ii)** is technical-preview usage
> actually _unbilled_ before Sep 10, or merely _unpriced_? Those are different, and only the
> first is safe to write down. Evidence doc §4.2 says Aug 16 ships **no pricing content** —
> stating _when_ pricing arrives is not a pricing surface, but the distinction matters.

Deliberately absent: pricing figures, a security/compliance section, testimonials.

### Try it — one entry point

Marketing proposed three, led by a _"Kimi-style clone lab · ~15 min"_. **Dropped** — it is not
one of the two locked launch-critical demos, and Evidence doc §3.1 says those cannot be
displaced.

- **Primary:** Quickstart.
- **Secondary:** the E2B coding-agent demo repo.

## Hero code sample — settled 2026-08-05

Shows spin-up ease _and_ proves the wedge. Nine lines — Mesa's is twelve.

```shell
curl -fsSL https://tidb.link/tdc | sh

# create a workspace — this issues its filesystem token
export TDC_FS_TOKEN="$(tdc fs create-file-system \
  --file-system-name agent-workspace --region aws-us-east-1 \
  --wait --query fs_token --output text)"

# in the sandbox: mount it, work in it, let the sandbox end
tdc fs mount-file-system --file-system-name agent-workspace --mount-path /workspace
echo "state that survives the sandbox" >> /workspace/notes.md

# anywhere else, same token, no mount required
tdc fs read-file --file-system-name agent-workspace --path /notes.md
```

Why this one:

- **Spin-up is one command**, which is the Mesa move; the proof costs two more lines.
- **The last line is the wedge in one command** — same token, different machine, no mount. A
  local-first single-file store cannot write that line. Neither can a hero whose payload is
  `echo >> /workspace`.
- It is the same thing Marketing's own closing CTA calls "the whole test," and the same thing
  Evidence doc §3.2 says demo 1 must validate — _"write → continue → mountless readback."_
  Hero, closing CTA and launch-critical demo now prove one identical claim.
- **Kills the laptop-mount risk** — the readback line isn't a mount at all, so the snippet no
  longer depicts a configuration the FAQ discourages.
- `--region` shown explicitly: it is a required flag, hiding it makes the snippet
  non-runnable, and it forces the regions question to get settled rather than deferred.

## Open items

| Item                                                                                                                                                                                                                                                                                                                                                           | Owner                                    | Due                               | Blocks                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| **Kimi authorization — Growth Plan open decision #8.** Ask for approval **at brand level** (`Kimi (Moonshot AI)`) explicitly, so it isn't blocked on their product-naming review. Confirm the 70,000+ figure and that it belongs to Kimi Work. **The page now runs the full-strength §3 ahead of this decision** — wordmark and story CTA come out if it slips | CS / Partner / Regional Mkt — **not us** | **2026-08-07**                    | §3, and the Aug 16 dated announcement                                                                                       |
| **Kimi Work story link** — §3's story CTA ships with a placeholder (`#`); needs a real destination or the CTA comes out                                                                                                                                                                                                                                        | Liya / Marketing                         | before 2026-08-16                 | §3 story CTA                                                                                                                |
| **Move the E2B demo repo off the personal account** to the TiDB org, with a license — `likidu/tidbcloud-fs-e2b-example`                                                                                                                                                                                                                                        | Liya                                     | **before 2026-08-16**             | **Hard gate.** Evidence doc §2.1 item 3 and §3.2. Blocks the Try-it secondary link and demo 1's external reference          |
| **Settle the regions count with Todd** — six CLI codes vs "two regions"                                                                                                                                                                                                                                                                                        | Liya / Todd                              | before copy                       | FAQ 1, hero snippet's `--region`                                                                                            |
| **Confirm "code-symbol matching"** exists at all                                                                                                                                                                                                                                                                                                               | Liya / Todd                              | before copy                       | FAQ 6                                                                                                                       |
| **Confirm billing start (Sep 10) and unbilled-vs-unpriced**                                                                                                                                                                                                                                                                                                    | Liya / Todd                              | before copy                       | FAQ 10                                                                                                                      |
| Confirm `fs-vault` / `fs-journal` are usable in technical preview, not just present in the CLI                                                                                                                                                                                                                                                                 | Todd                                     | before copy                       | Value card scope                                                                                                            |
| **Ask Todd: is `fs search-file-content` index-backed (database FTS) or a server-side scan?** Then add a server-side-search row to the matrix — Turso first (their files already sit in SQLite; FTS is plausibly an afternoon for them)                                                                                                                         | Liya / Todd                              | before the 2026-09-13 page        | Search's September card candidacy (Decision 15.iv). Not an Aug 16 blocker — the page claims the commands, not the mechanism |
| **Take the positioning lesson to the team** — both discussion blocks at the top                                                                                                                                                                                                                                                                                | Liya                                     | —                                 | Nothing, but it is the most reusable output here                                                                            |
| Give Todd the expanded matrix for Appendix A — Turso and Cloudflare                                                                                                                                                                                                                                                                                            | Liya                                     | this week                         | Cheap, useful                                                                                                               |
| Short vanity install URL                                                                                                                                                                                                                                                                                                                                       | —                                        | before launch                     | Hero polish                                                                                                                 |
| Settle token prefix — `drive9_…` vs `tdc_fs_v1_…`                                                                                                                                                                                                                                                                                                              | Eng                                      | before launch                     | Hero displays a token                                                                                                       |
| nginx rewrite for `/tidb-cloud-filesystem/` + 301 from `/tidb-cloud-fs/`                                                                                                                                                                                                                                                                                       | Web                                      | before launch                     | Deploy target                                                                                                               |
| Framework: Next.js static export vs Astro                                                                                                                                                                                                                                                                                                                      | —                                        | before build                      | Next.js recommended                                                                                                         |
| Visual design + animation direction                                                                                                                                                                                                                                                                                                                            | Liya                                     | now — IA is signed off            | —                                                                                                                           |
| Benchmark on real repos (spec below)                                                                                                                                                                                                                                                                                                                           | PM                                       | **2026-09-13**, not before Aug 16 | Nothing on Aug 16                                                                                                           |

Dropped from open items:

- _"Redesign §4's 8-step loop as a visual/animated sequence"_ — settled 2026-08-05, the same
  day it opened, by prototyping three treatments behind a live picker on the real page. The
  expanding strip won and is built into v1; see Decision 14 for the shape and the branch
  holding the losing variants.

- _"Clearance for the Appendix A comparison"_ — off the critical path; Decision 11 no longer
  puts a comparison on the page.
- _"How the page handles the API-key step"_ — resolved by `create-file-system --query fs_token`.
- _"Rework the hero snippet"_ and _"Hero headline copy"_ — both settled above.
- _"console filesystem-token minting lands ~2026-08-10"_ — that was never true.

## Benchmark specification

**Moved to 2026-09-13.** Not on the Aug 16 critical path. The wedge is structural, §4.1(b) is
satisfied by the walkthrough, and a rushed number on unfamiliar rigging is precisely what
killed wedge attempt #1.

Chasing sub-threshold file size is pointless: the inline threshold is a backend parameter still
being tuned, not customer-visible.

What the existing report gives us, and what it doesn't:

- Large-file throughput at parity or slightly ahead of `aws s3 cp` — 1.14× upload, 1.21×
  download as of 2026/04/16. Real, publishable, ours.
- `juicefs bench` at a fixed 128 KiB: 197 ms/file read, 46 ms/file `stat` at one thread.
  Not a Small file measurement under any threshold, and not a number to invite scrutiny of.
- Rig was `drive9-server-local` against a Starter cluster, not production. April 2026.

What to measure instead — **concurrency, because that is the value card**:

- Two or more runtimes on one workspace: write-visibility latency across machines under each
  consistency mode. Nobody else can even run this test.
- `git clone` and resume of a real repository, against s3fs and EFS.
- Agent-loop operations: batch `stat` across a tree, metadata-first directory listing,
  checkpoint and rollback via layers.
- On the **production** service, from **cloud VMs in-region** — the configuration the FAQ
  recommends, not a laptop.
- Published as a reproducible repo, landing with the selection-and-boundaries page.

Appendix B has qualitative evidence from Kimi — metadata-first loading, batch `stat`,
local-first FUSE writes, layer separation of `node_modules` from source, git state that
survives handoff. Internal-only, so it shapes what we measure rather than what we publish.

## Risks

**Kimi authorization is due 2026-08-07 and we don't own it.** It gates the Aug 16 moment per
Evidence doc §0.2. A logo lockup is a _separate, slower_ approval from a number — decision #8
clearing does not automatically clear co-branding. §3 is designed so that permission strength
is a text swap, not a layout change; keep it that way. **As of 2026-08-05 the page ships the
full-strength face** — wordmark, Kimi Work naming, story CTA — so §3 currently _presumes both
approvals_. The reversal is still a text swap, and the in-page REVIEW note carries the
downgrade instructions.

**The E2B repo is on a personal GitHub account and that is a hard launch gate.** This is the
cheapest blocker on the list and the easiest to forget.

**The wedge has a shelf life.** Turso is explicitly building toward disaggregated object
storage. Today it is "a direction, not a finished system," but if they execute, the
shared-service axis narrows further — and it is already narrower than we thought, since five of
six competitors tick hosted/concurrent/multi-machine today.

**Everything on the page has to be true on 2026-08-16, in technical preview.** Don't describe
the 2026-09-15 console, not-yet-live semantic search, or unguaranteed checkpoint as though they
exist today.

**Marketing's mockup and this spec will drift.** Their doc says _"edit the page first, then
reconcile this section"_ — their HTML is their source of truth. Re-check the comp against this
file before build, specifically the four claims flagged in Decision 12.

**Build budget.** Todd has 5 days. Marketing's mockup specifies an auto-playing 8-tab strip
with per-tab timelines and four embedded tables — that rig stays rejected. **Amended
2026-08-05 (Decision 14):** "ship the 8-step content as a static sequence" was the cheap
option, not the right one — v1's eight prose rows are a wall nobody reads through. The
animation budget now covers the three value cards _and_ one scoped visual treatment for the
loop. The 5-day constraint still binds, which is what keeps the scope honest: one rig applied
eight times, copy cut to a line per step, loop still ending on the wedge — not per-step
bespoke motion. v1's one-time reveal on the data-plane diagram (built 2026-08-05) is the cost
reference: scoped motion is cheap; eight timelines are not.

**No SDK.** Turso ships TypeScript, Python and Rust; Mesa ships TypeScript. We have a Go CLI.
For an audience building agents in TypeScript and Python this is a real gap, and the page
should not pretend otherwise.

## Results / review

_To be completed once the page ships._
