import type { Metadata } from 'next'
import { JsonLd } from '@/components/ui/JsonLd'
import { buildPageSchema, faqSchema, softwareApplicationSchema } from '@/lib/schema'
import { HeaderLp } from '@/components/ui/HeaderLp'
import { Footer } from '@/components/ui/Footer'
import { Badge } from '@/components/ui/badge'
import { PrimaryButton } from '@/components/ui/PrimaryButton'
import { SecondaryButton } from '@/components/ui/SecondaryButton'
import { CtaSection } from '@/components/sections/CtaSection'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { CountUp } from '@/components/ui/CountUp'
import { SlideIn } from '@/components/ui/SlideIn'
import { Command } from './Command'
import { DataPlaneDiagram } from './DataPlaneDiagram'
import { HeroShade } from './HeroShade'
import { LoopStrip } from './LoopStrip'
import { PrismBackground } from './PrismBackground'

// Internal-review annotations and mechanism captions from the "1st cut" design.
// Both default on for the 2026-08-10 internal review; flip off for launch.
const SHOW_REVIEW_NOTES = true
const SHOW_MECHANISMS = true

const TITLE = 'TiDB Cloud Filesystem: The Workspace Your Agents Share'
const DESCRIPTION =
  'TiDB Cloud Filesystem is a durable shared workspace for coding agents — one filesystem held by several runtimes at once. Now in technical preview.'
const PATH = '/tidb-cloud-filesystem/'
const CANONICAL = `https://www.pingcap.com${PATH}`
const OG_IMAGE = 'https://static.pingcap.com/files/2024/09/11005522/Homepage-Ad.png'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  robots: { index: true, follow: true },
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    siteName: 'TiDB',
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@PingCAP',
    images: [OG_IMAGE],
  },
}

const faqItems: {
  value: string
  q: React.ReactNode
  /** Plain-text Q/A for the FAQPage schema node */
  plain: { question: string; answer: string }
  answer: React.ReactNode
  review?: string
}[] = [
  {
    value: 'what-is-it',
    q: 'What is TiDB Cloud Filesystem?',
    plain: {
      question: 'What is TiDB Cloud Filesystem?',
      answer:
        "A durable working directory for coding agents. A runtime uses normal file operations, while the workspace stays available beyond that runtime's lifecycle — so the next session, sandbox, agent or reviewer opens the same workspace instead of rebuilding it.",
    },
    answer: (
      <>
        A durable working directory for coding agents. A runtime uses normal file operations, while
        the workspace stays available beyond that runtime&apos;s lifecycle — so the next session,
        sandbox, agent or reviewer opens the same workspace instead of rebuilding it.
      </>
    ),
  },
  {
    value: 'sandbox-persistence',
    q: 'My sandbox already has persistence — do I need another layer?',
    plain: {
      question: 'My sandbox already has persistence — do I need another layer?',
      answer:
        "Native snapshots, pause/resume or volumes cover a workflow that stays inside one platform. A separate workspace layer matters once the active directory has to cross a boundary that platform doesn't cover — another runtime, another agent, a human reviewer, a CI job.",
    },
    answer: (
      <>
        Native snapshots, pause/resume or volumes cover a workflow that stays inside one platform. A
        separate workspace layer matters once the active directory has to cross a boundary that
        platform doesn&apos;t cover — another runtime, another agent, a human reviewer, a CI job.
      </>
    ),
  },
  {
    value: 'regions',
    q: 'Which regions can I create a filesystem in?',
    plain: {
      question: 'Which regions can I create a filesystem in?',
      answer:
        'Region is a required flag when you create a filesystem. The CLI reference lists the region codes available in the technical preview; run tdc fs create-file-system --help for the current set.',
    },
    answer: (
      <>
        Region is a required flag when you create a filesystem. The CLI reference lists the region
        codes available in the technical preview; run <code>tdc fs create-file-system --help</code>{' '}
        for the current set.
      </>
    ),
    review:
      'Deliberately no count. Six codes are documented in the CLI, this plan has said "two regions," and one region has no public evidence. Settle with Todd, then state the list.',
  },
  {
    value: 'china-region',
    q: 'Is there a China region?',
    plain: {
      question: 'Is there a China region?',
      answer:
        'Not in the technical preview — capacity there is committed to an existing partner workload. Other regions can be discussed by request.',
    },
    answer: (
      <>
        Not in the technical preview — capacity there is committed to an existing partner workload.
        Other regions can be discussed by request.
      </>
    ),
  },
  {
    value: 'laptop-mount',
    q: 'Can I mount it on my laptop?',
    plain: {
      question: 'Can I mount it on my laptop?',
      answer:
        "Supported, but not what we recommend for evaluation. Run it from a cloud VM in the same region as the filesystem. If you only need to read a file from your own machine, tdc fs read-file doesn't require a mount at all.",
    },
    answer: (
      <>
        Supported, but not what we recommend for evaluation. Run it from a cloud VM in the same
        region as the filesystem. If you only need to read a file from your own machine,{' '}
        <code>tdc fs read-file</code> doesn&apos;t require a mount at all.
      </>
    ),
  },
  {
    value: 'listing',
    q: (
      <>
        Why doesn&apos;t <code className="font-mono">tdc</code> list all of my filesystems?
      </>
    ),
    plain: {
      question: "Why doesn't tdc list all of my filesystems?",
      answer:
        'Today the CLI lists filesystems created on the same machine. Account-wide listing lands 2026-08-20, and the console filesystem UI follows on 2026-09-15.',
    },
    answer: (
      <>
        Today the CLI lists filesystems created on the same machine. Account-wide listing lands
        2026-08-20, and the console filesystem UI follows on 2026-09-15.
      </>
    ),
  },
  {
    value: 'sdk',
    q: 'Is there an SDK?',
    plain: {
      question: 'Is there an SDK?',
      answer:
        'No. A Go CLI is the whole surface in the technical preview. If you are building agents in TypeScript or Python you will be shelling out to tdc, and that is a real gap rather than a design choice.',
    },
    answer: (
      <>
        No. A Go CLI is the whole surface in the technical preview. If you are building agents in
        TypeScript or Python you will be shelling out to <code>tdc</code>, and that is a real gap
        rather than a design choice.
      </>
    ),
  },
  {
    value: 'semantic-search',
    q: 'Does it support semantic or vector search over my files?',
    plain: {
      question: 'Does it support semantic or vector search over my files?',
      answer:
        'Full-text content search and filename matching are what to rely on today — fs search-file-content and fs find-files. Semantic retrieval is in the product design and is not part of what the technical preview guarantees.',
    },
    answer: (
      <>
        Full-text content search and filename matching are what to rely on today —{' '}
        <code>fs search-file-content</code> and <code>fs find-files</code>. Semantic retrieval is in
        the product design and is <strong className="font-medium text-white">not</strong> part of
        what the technical preview guarantees.
      </>
    ),
  },
  {
    value: 'checkpoint',
    q: 'Does the preview include checkpoint and rollback?',
    plain: {
      question: 'Does the preview include checkpoint and rollback?',
      answer:
        "Layer checkpoints and rollback are part of the product design, and the commands are visible in the CLI, but they are not part of what the technical preview guarantees yet. What's ready today is cross-runtime continuity — write from one runtime, read from another.",
    },
    answer: (
      <>
        Layer checkpoints and rollback are part of the product design, and the commands are visible
        in the CLI, but they are not part of what the technical preview guarantees yet. What&apos;s
        ready today is cross-runtime continuity — write from one runtime, read from another.
      </>
    ),
  },
  {
    value: 'sla',
    q: 'Is there an SLA?',
    plain: {
      question: 'Is there an SLA?',
      answer:
        "No. Keep evaluation data recoverable elsewhere, and report anything that doesn't behave as expected.",
    },
    answer: (
      <>
        No. Keep evaluation data recoverable elsewhere, and report anything that doesn&apos;t behave
        as expected.
      </>
    ),
  },
  {
    value: 'retention',
    q: 'What happens to my workspace after the preview ends?',
    plain: {
      question: 'What happens to my workspace after the preview ends?',
      answer:
        "The retention and deletion policy after the technical preview is still an open product decision. Until it's settled, keep an independently recoverable copy of anything you can't afford to lose.",
    },
    answer: (
      <>
        The retention and deletion policy after the technical preview is still an open product
        decision. Until it&apos;s settled, keep an independently recoverable copy of anything you
        can&apos;t afford to lose.
      </>
    ),
  },
  {
    value: 'cost',
    q: 'What does it cost?',
    plain: {
      question: 'What does it cost?',
      answer:
        "There is no published price during the technical preview. List pricing publishes 2026-08-31 and billing becomes effective 2026-09-10. Usage limits apply per account, and we'll show the ones that apply to yours before you start.",
    },
    answer: (
      <>
        There is no published price during the technical preview. List pricing publishes 2026-08-31
        and billing becomes effective 2026-09-10. Usage limits apply per account, and we&apos;ll
        show the ones that apply to yours before you start.
      </>
    ),
    review:
      'Two internal pricing figures are unreconciled, and "unbilled before Sep 10" vs "unpriced" are different claims. Confirm both, or cut the two dates and keep the first sentence only.',
  },
]

const schema = buildPageSchema({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  breadcrumbs: [
    { name: 'Home', path: '/' },
    { name: 'TiDB Cloud Filesystem', path: PATH },
  ],
  extraSchemas: [
    softwareApplicationSchema({
      name: 'TiDB Cloud Filesystem',
      description: DESCRIPTION,
      url: CANONICAL,
    }),
    faqSchema(faqItems.map((item) => item.plain)),
  ],
})

const consistencyModes: {
  mode: string
  travelClass: string
  seenClass: string
  seen: string
}[] = [
  { mode: 'write-sync', travelClass: 'tdc-travel-a', seenClass: 'tdc-seen-a', seen: 'on write' },
  { mode: 'close-sync', travelClass: 'tdc-travel-b', seenClass: 'tdc-seen-b', seen: 'on close' },
  { mode: 'writeback', travelClass: 'tdc-travel-c', seenClass: 'tdc-seen-c', seen: 'on flush' },
]

const gitBands: { name: string; caption: string; className: string; delay?: string }[] = [
  { name: 'clean tree', caption: 'the committed baseline', className: 'border-white/[0.14]' },
  {
    name: 'dirty overlay',
    caption: 'uncommitted modifications',
    className: 'border-brand-red-primary bg-brand-red-primary/[0.09]',
    delay: '0.55s',
  },
  {
    name: 'object pack',
    caption: 'objects the agent created',
    className: 'border-brand-red-light bg-brand-red-light/[0.07]',
    delay: '1.1s',
  },
]

const persistedFiles = ['source', 'lock file', 'patches', 'test results', 'failure logs']
const localOnlyFiles = ['node_modules', '.tsbuildinfo', 'dist', '.turbo', 'coverage']

const fitChecklist = [
  'a sandbox or ephemeral job ends before the task is done',
  'each run clones and prepares the same repository again',
  'several agents need the same repository or document set at once',
  'work moves between E2B, Modal, Daytona, CI or a local tool',
]

const fitRows: [string, string][] = [
  ['A durable disk attached to one workload', 'Block storage'],
  ['A shared POSIX filesystem for compute clients in one cloud', 'A network filesystem'],
  ['Objects, artifacts, datasets, backups or archives', 'Object storage'],
  ['Committed source history, branches, review and merge', 'Git hosting'],
  ['What an agent remembers across conversations', 'Agent memory'],
  ['Resume, snapshot or fork work inside one sandbox platform', "That platform's own persistence"],
]

/** Official Kimi wordmark (kimi.com), currentColor so it takes the page's text color. */
function KimiLogo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 96 32"
      fill="currentColor"
      role="img"
      aria-label="Kimi"
      className={className}
    >
      <path d="M35.768 31.329c0 .37.3.671.67.671h4.305c.371 0 .672-.3.672-.671V.67c0-.37-.3-.671-.672-.671H36.44c-.37 0-.671.3-.671.671zm54.584 0c0 .37.3.671.67.671h4.305c.371 0 .672-.3.672-.671V.67c0-.37-.3-.671-.672-.671h-4.304c-.37 0-.671.3-.671.671zM73.256 0a.67.67 0 0 0-.652.512l-6.366 26.1c-.106.428-.607.428-.71 0L59.159.512A.67.67 0 0 0 58.511 0H47.725c-.37 0-.668.3-.668.671V31.33c0 .37.3.671.67.671h4.781c.37 0 .671-.292.671-.662V5.554c0-.515.604-.622.726-.127l6.358 26.06a.67.67 0 0 0 .653.513h9.931c.31 0 .58-.212.653-.512L77.855 5.43c.122-.495.726-.388.726.127v25.772c0 .37.3.671.671.671h4.78c.371 0 .672-.3.672-.671V.67c0-.37-.3-.671-.671-.671zM15.279 14.837 28.264 1.133A.671.671 0 0 0 27.777 0h-6.043a.67.67 0 0 0-.477.199L6.374 15.223c-.231.234-.573.025-.573-.35V.672c0-.37-.3-.671-.671-.671H.67a.67.67 0 0 0-.67.67V31.33c0 .37.3.671.671.671H5.13c.37 0 .671-.3.671-.671v-6.114a.5.5 0 0 1 .13-.35l4.594-4.69a.293.293 0 0 1 .386-.045l12.286 9.305c1.796 1.245 4.083 2.06 6.178 2.401a.645.645 0 0 0 .743-.648v-5.537a.7.7 0 0 0-.562-.677c-1.215-.262-2.565-.758-3.59-1.468L15.332 15.58c-.22-.152-.248-.544-.052-.744" />
    </svg>
  )
}

function ReviewNote({ text, light = false }: { text: string; light?: boolean }) {
  if (!SHOW_REVIEW_NOTES) return null
  return (
    <p
      className={`flex max-w-[900px] gap-2.5 font-mono text-[11px] leading-[1.6] ${
        light ? 'text-white/60' : 'text-carbon-600'
      }`}
    >
      <span className={light ? 'text-brand-red-light' : 'text-brand-red-primary'}>REVIEW</span>
      <span>{text}</span>
    </p>
  )
}

function HeroCodePanel() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
      <div className="flex items-stretch border-b border-white/10">
        <div className="grid justify-items-start gap-[5px] border-b-2 border-brand-red-primary bg-white/5 px-[18px] py-3.5 text-white">
          <span className="font-mono text-xs">bash · tdc</span>
          <span className="font-mono text-[9px] tracking-[0.06em] text-brand-red-primary">
            AVAILABLE NOW
          </span>
        </div>
        <div className="grid justify-items-start gap-[5px] border-b-2 border-transparent px-[18px] py-3.5 text-carbon-700">
          <span className="font-mono text-xs">TypeScript · Python</span>
          <span className="font-mono text-[9px] tracking-[0.06em]">SDK — COMING SOON</span>
        </div>
      </div>
      <div className="px-6 py-[22px] font-mono text-[13px] leading-[1.7] text-carbon-200">
        <Command cmd="curl -fsSL https://tidb.link/tdc | sh">
          <div className="whitespace-pre-wrap [overflow-wrap:anywhere]">
            <span className="text-brand-red-light">curl</span>{' '}
            <span className="text-brand-blue-light">-fsSL</span> https://tidb.link/tdc{' '}
            <span className="text-carbon-600">|</span>{' '}
            <span className="text-brand-red-light">sh</span>
          </div>
        </Command>
        <div className="h-[15px]" />
        <div className="whitespace-pre-wrap [overflow-wrap:anywhere] text-carbon-700">
          # create a workspace — this issues its filesystem token
        </div>
        <Command
          cmd={`export TDC_FS_TOKEN="$(tdc fs create-file-system --file-system-name agent-workspace --region aws-us-east-1 --wait --query fs_token --output text)"`}
        >
          <div className="whitespace-pre-wrap [overflow-wrap:anywhere]">
            <span className="text-brand-red-light">export</span>{' '}
            <span className="text-brand-violet-light">TDC_FS_TOKEN</span>=
            <span className="text-carbon-600">&quot;$(</span>
            <span className="text-brand-red-light">tdc</span> fs create-file-system{' '}
            <span className="text-carbon-600">\</span>
          </div>
          <div className="whitespace-pre-wrap pl-[2ch] [overflow-wrap:anywhere]">
            <span className="text-brand-blue-light">--file-system-name</span> agent-workspace{' '}
            <span className="text-carbon-600">\</span>
          </div>
          <div className="whitespace-pre-wrap pl-[2ch] [overflow-wrap:anywhere]">
            <span className="text-brand-blue-light">--region</span> aws-us-east-1{' '}
            <span className="text-brand-blue-light">--wait</span>{' '}
            <span className="text-carbon-600">\</span>
          </div>
          <div className="whitespace-pre-wrap pl-[2ch] [overflow-wrap:anywhere]">
            <span className="text-brand-blue-light">--query</span> fs_token{' '}
            <span className="text-brand-blue-light">--output</span> text
            <span className="text-carbon-600">)&quot;</span>
          </div>
        </Command>
        <div className="h-[15px]" />
        <div className="whitespace-pre-wrap [overflow-wrap:anywhere] text-carbon-700">
          # in the sandbox: mount it, work in it, let the sandbox end
        </div>
        <Command cmd="tdc fs mount-file-system --file-system-name agent-workspace --mount-path /workspace">
          <div className="whitespace-pre-wrap [overflow-wrap:anywhere]">
            <span className="text-brand-red-light">tdc</span> fs mount-file-system{' '}
            <span className="text-carbon-600">\</span>
          </div>
          <div className="whitespace-pre-wrap pl-[2ch] [overflow-wrap:anywhere]">
            <span className="text-brand-blue-light">--file-system-name</span> agent-workspace{' '}
            <span className="text-carbon-600">\</span>
          </div>
          <div className="whitespace-pre-wrap pl-[2ch] [overflow-wrap:anywhere]">
            <span className="text-brand-blue-light">--mount-path</span> /workspace
          </div>
        </Command>
        <Command cmd={`echo "state that survives the sandbox" >> /workspace/notes.md`}>
          <div className="whitespace-pre-wrap [overflow-wrap:anywhere]">
            <span className="text-brand-red-light">echo</span>{' '}
            <span className="text-brand-teal-light">
              &quot;state that survives the sandbox&quot;
            </span>{' '}
            <span className="text-carbon-600">\</span>
          </div>
          <div className="whitespace-pre-wrap pl-[2ch] [overflow-wrap:anywhere]">
            <span className="text-carbon-600">&gt;&gt;</span> /workspace/notes.md
          </div>
        </Command>
        <div className="h-[15px]" />
        <div className="whitespace-pre-wrap [overflow-wrap:anywhere] text-carbon-700">
          # anywhere else, same token, no mount required
        </div>
        <Command cmd="tdc fs read-file --file-system-name agent-workspace --path /notes.md">
          <div className="whitespace-pre-wrap [overflow-wrap:anywhere]">
            <span className="text-brand-red-light">tdc</span> fs read-file{' '}
            <span className="text-carbon-600">\</span>
          </div>
          <div className="whitespace-pre-wrap pl-[2ch] [overflow-wrap:anywhere]">
            <span className="text-brand-blue-light">--file-system-name</span> agent-workspace{' '}
            <span className="text-carbon-600">\</span>
          </div>
          <div className="whitespace-pre-wrap pl-[2ch] [overflow-wrap:anywhere]">
            <span className="text-brand-blue-light">--path</span> /notes.md
          </div>
        </Command>
      </div>
    </div>
  )
}

export default function TidbCloudFilesystemPage() {
  return (
    <>
      <JsonLd data={schema} />
      <HeaderLp />

      <main className="bg-bg-primary pt-20">
        {/* 01 Hero */}
        <section className="relative isolate overflow-hidden bg-bg-primary pb-24 pt-[72px]">
          <HeroShade />
          <div className="relative z-10 mx-auto grid max-w-container grid-cols-1 items-start gap-14 px-4 md:px-8 lg:grid-cols-2 lg:px-16">
            <div data-shade-dim>
              <div className="mb-7 flex items-center gap-3">
                <span className="font-mono text-[13px] text-carbon-400">TiDB Cloud Filesystem</span>
                <Badge variant="secondary">Technical Preview</Badge>
              </div>
              {/* title-case-ignore */}
              <h1 className="mb-6 max-w-[640px] text-pretty text-h1-mb font-bold leading-tight tracking-[-0.025em] md:text-h1">
                The workspace your agents share.
              </h1>
              <p className="mb-9 max-w-[580px] text-pretty text-body-2xl text-carbon-400">
                One filesystem, held by several runtimes at once, that knows what an agent leaves
                behind — dirty tree, new objects, test output, artifacts.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <PrimaryButton href="https://docs.pingcap.com/">Quickstart</PrimaryButton>
                <SecondaryButton href="https://www.pingcap.com/contact-us/">
                  Talk to us
                </SecondaryButton>
              </div>
            </div>
            <div data-shade-block>
              <HeroCodePanel />
            </div>
          </div>
        </section>

        {/* 02 What makes it different */}
        <section id="different" className="bg-gradient-dark-top py-20">
          <div className="mx-auto max-w-container px-4 md:px-8 lg:px-16">
            <p className="mb-8 font-mono text-[15px] text-carbon-400">What makes it different</p>
            {/* title-case-ignore */}
            <h2 className="mb-5 max-w-[880px] text-pretty text-h2-mb font-bold leading-tight tracking-[-0.02em] md:text-h2-sm">
              Three things the disk in your sandbox can&apos;t do.
            </h2>
            <p className="mb-14 max-w-[660px] text-body-lg text-carbon-400">
              All three exist for one reason: a distributed database sits under this filesystem, so
              it can promise things a disk can&apos;t.
            </p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Consistency modes */}
              <SlideIn direction="up">
                <div className="flex h-full flex-col gap-5 rounded-xl border border-white/10 bg-white/[0.04] px-[26px] pb-[26px] pt-7">
                  <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-brand-red-primary">
                    Consistency modes
                  </p>
                  {/* title-case-ignore */}
                  <h3 className="text-h3-lg font-bold">
                    You choose what a concurrent reader sees.
                  </h3>
                  <p className="flex-1 text-body-md text-carbon-400">
                    Writeback, close-sync or write-sync, set per workspace. Nobody builds a
                    visibility guarantee for a store that only one machine can hold — which is why
                    nobody else can answer this question.
                  </p>
                  <div className="grid gap-4 border-t border-white/10 pt-[22px]">
                    <div className="grid grid-cols-[82px_1fr_86px] gap-3 font-mono text-[10px] tracking-[0.05em] text-carbon-700">
                      <span>MODE</span>
                      <span>WRITE COMMITS</span>
                      <span className="text-right">READER SEES</span>
                    </div>
                    {consistencyModes.map((m) => (
                      <div
                        key={m.mode}
                        className="grid grid-cols-[82px_1fr_86px] items-center gap-3"
                      >
                        <span className="font-mono text-[11px] text-white">{m.mode}</span>
                        <span className="relative h-0.5 bg-white/[0.12]">
                          <span
                            className={`${m.travelClass} absolute -top-[3.5px] h-[9px] w-[9px] rounded-full bg-brand-red-primary`}
                          />
                        </span>
                        <span
                          className={`${m.seenClass} rounded border border-white/[0.12] py-1 text-center font-mono text-[9px]`}
                        >
                          {m.seen}
                        </span>
                      </div>
                    ))}
                    <p className="mt-1 font-mono text-[10px] leading-[1.6] text-carbon-700">
                      Fastest write at the bottom, strongest guarantee at the top.
                    </p>
                  </div>
                </div>
              </SlideIn>

              {/* Git-aware workspace */}
              <SlideIn direction="up" delay={70}>
                <div className="flex h-full flex-col gap-5 rounded-xl border border-white/10 bg-white/[0.04] px-[26px] pb-[26px] pt-7">
                  <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-brand-red-primary">
                    Git-aware workspace
                  </p>
                  {/* title-case-ignore */}
                  <h3 className="text-h3-lg font-bold">
                    A resumed workspace still has its git state.
                  </h3>
                  <p className="flex-1 text-body-md text-carbon-400">
                    Not the committed tree a fresh clone gives you — the clean tree as baseline, the
                    agent&apos;s uncommitted changes as an overlay, and a pack for objects it
                    created. That is the difference between a folder and a workspace.
                  </p>
                  <div className="grid gap-2.5 border-t border-white/10 pt-[22px]">
                    <p className="mb-1 font-mono text-[10px] tracking-[0.05em] text-carbon-700">
                      WHAT COMES BACK, IN ORDER
                    </p>
                    {gitBands.map((band) => (
                      <div
                        key={band.name}
                        className={`tdc-band rounded-md border px-3.5 py-3 ${band.className}`}
                        style={band.delay ? { animationDelay: band.delay } : undefined}
                      >
                        <p className="font-mono text-[11px] text-white">{band.name}</p>
                        <p
                          className={`mt-1 font-mono text-[10px] ${
                            band.delay ? 'text-carbon-400' : 'text-carbon-700'
                          }`}
                        >
                          {band.caption}
                        </p>
                      </div>
                    ))}
                    <p className="mt-1.5 font-mono text-[10px] leading-[1.6] text-carbon-700">
                      <code>tdc fs-git clone-git-workspace</code> ·{' '}
                      <code>hydrate-git-workspace</code> · <code>add-git-worktree</code>
                    </p>
                  </div>
                </div>
              </SlideIn>

              {/* Rebuildable vs persistent */}
              <SlideIn direction="up" delay={140}>
                <div className="flex h-full flex-col gap-5 rounded-xl border border-white/10 bg-white/[0.04] px-[26px] pb-[26px] pt-7">
                  <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-brand-red-primary">
                    Rebuildable vs persistent
                  </p>
                  {/* title-case-ignore */}
                  <h3 className="text-h3-lg font-bold">Keep the outcome. Drop the noise.</h3>
                  <p className="flex-1 text-body-md text-carbon-400 [&_code]:font-mono">
                    A Node build is the stress test: a huge <code>node_modules</code>,{' '}
                    <code>.tsbuildinfo</code> churning, <code>dist</code> regenerating every run.
                    None of it is worth persisting. The test results, failure logs and patches are.
                  </p>
                  <div className="grid grid-cols-2 gap-[18px] border-t border-white/10 pt-[22px]">
                    <div className="grid content-start gap-2">
                      <p className="mb-0.5 font-mono text-[10px] tracking-[0.05em] text-brand-red-primary">
                        PERSISTED
                      </p>
                      {persistedFiles.map((file, i) => (
                        <span
                          key={file}
                          className="tdc-keep border-l-2 border-brand-red-primary pl-[9px] font-mono text-[11px] text-white"
                          style={{ animationDelay: `${i * 0.12}s` }}
                        >
                          {file}
                        </span>
                      ))}
                    </div>
                    <div className="grid content-start gap-2">
                      <p className="mb-0.5 font-mono text-[10px] tracking-[0.05em] text-carbon-700">
                        LOCAL-ONLY
                      </p>
                      {localOnlyFiles.map((file, i) => (
                        <span
                          key={file}
                          className="tdc-drop border-l-2 border-carbon-800 pl-[9px] font-mono text-[11px] text-carbon-400"
                          style={{ animationDelay: `${i * 0.12}s` }}
                        >
                          {file}
                        </span>
                      ))}
                    </div>
                    <p className="col-span-2 mt-1.5 font-mono text-[10px] leading-[1.6] text-carbon-700">
                      The split follows the project&apos;s own shape, not a config file you
                      maintain.
                    </p>
                  </div>
                </div>
              </SlideIn>
            </div>
            <p className="mt-8 max-w-[760px] font-mono text-[11px] leading-[1.6] text-carbon-600">
              The ordinary parts are assumed — mount it and your tools just see files. Or don&apos;t
              mount at all: read, grep and find run against the workspace directly.
            </p>
          </div>
        </section>

        {/* 03 Proof */}
        <section id="proof" className="relative isolate overflow-hidden bg-bg-primary py-20">
          <PrismBackground />
          <div className="relative z-10 mx-auto max-w-container px-4 md:px-8 lg:px-16">
            <p className="mb-8 font-mono text-[15px] text-carbon-400">Proof at scale</p>
            <KimiLogo className="mb-6 h-7 w-auto text-white" />
            {/* title-case-ignore */}
            <h2 className="mb-12 max-w-[820px] text-pretty text-h2-mb font-bold leading-tight tracking-[-0.02em] text-carbon-400 md:text-h2-sm">
              Workspace continuity, running in production.
            </h2>
            <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-2">
              <div>
                <p className="text-[64px] font-bold leading-[0.92] tracking-[-0.04em] text-white md:text-[96px]">
                  <CountUp value="70,000+" />
                </p>
                <p className="mt-[14px] font-mono text-[13px] text-carbon-400">
                  file systems in production behind Kimi Work (Moonshot AI)
                </p>
              </div>
              <div>
                {/* .prism-done lands on the section when the prism reveal
                    completes (see PrismBackground) — the gray morphs to white. */}
                <p className="max-w-[560px] text-pretty text-body-lg text-carbon-400 transition-colors duration-700 ease-out [.prism-done_&]:text-white">
                  TiDB Cloud Filesystem holds the agent workspaces behind Kimi Work, Moonshot
                  AI&apos;s desktop AI agent for knowledge workers — which is why the runtimes that
                  execute those agents stay disposable.
                </p>
                <div className="mt-5">
                  <SecondaryButton href="#">Read the Kimi Work story</SecondaryButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 04 How it works */}
        <section id="how" className="bg-gradient-dark-bottom py-20">
          <div className="mx-auto max-w-container px-4 md:px-8 lg:px-16">
            <p className="mb-8 font-mono text-[15px] text-carbon-400">How it works</p>
            {/* title-case-ignore */}
            <h2 className="mb-5 max-w-[880px] text-pretty text-h2-mb font-bold leading-tight tracking-[-0.02em] md:text-h2-sm">
              Execution is disposable. State is not.
            </h2>
            <p className="mb-12 max-w-[680px] text-body-lg text-carbon-400">
              Two planes, one namespace. Runtimes come and go above; the workspace below is
              addressed as a service and outlives all of them.
            </p>

            <DataPlaneDiagram />

            {/* title-case-ignore */}
            <h3 className="mb-3 text-h3-lg font-bold">
              One task, eight steps — each one leaves state the next one needs.
            </h3>
            <p className="mb-8 max-w-[660px] text-body-md text-carbon-400">
              A coding agent doesn&apos;t touch a filesystem once. It touches it at every step, and
              the loop ends where a sandbox volume can&apos;t follow.
            </p>

            <LoopStrip showMechanisms={SHOW_MECHANISMS} />
            <p className="mt-14 max-w-[760px] text-pretty text-body-2xl font-regular text-white">
              That&apos;s the loop. The question left is whether your state has a boundary to cross.
            </p>
          </div>
        </section>

        {/* 05 Where it fits */}
        <section id="fit" className="bg-bg-primary py-20">
          <div className="mx-auto max-w-container px-4 md:px-8 lg:px-16">
            <p className="mb-8 font-mono text-[15px] text-carbon-400">Where it fits</p>
            {/* title-case-ignore */}
            <h2 className="mb-12 max-w-[820px] text-pretty text-h2-mb font-bold leading-tight tracking-[-0.02em] md:text-h2-sm">
              Start with the boundary your state has to cross.
            </h2>
            <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-2">
              <div className="rounded-xl border border-brand-red-primary bg-brand-red-primary/[0.06] px-[26px] py-7">
                <p className="mb-[18px] text-h3-sm font-bold">
                  You&apos;re in the right place if —
                </p>
                <div className="grid gap-3.5">
                  {fitChecklist.map((item) => (
                    <p
                      key={item}
                      className="grid grid-cols-[18px_1fr] gap-2.5 text-body-md text-white"
                    >
                      <span className="font-mono text-brand-red-primary">→</span>
                      <span>{item}</span>
                    </p>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-6 max-w-[600px] text-body-md text-carbon-400">
                  If that&apos;s not quite your situation, this is the short map of what to reach
                  for instead. Several kinds of storage persist real work; which one is right
                  depends on what has to survive and what it has to cross.
                </p>
                <div className="grid grid-cols-[1.4fr_1fr]">
                  <p className="border-b border-border-primary py-3 pr-4 font-mono text-[10px] tracking-[0.05em] text-carbon-700">
                    YOU NEED TO KEEP
                  </p>
                  <p className="border-b border-border-primary py-3 font-mono text-[10px] tracking-[0.05em] text-carbon-700">
                    USE
                  </p>
                  {fitRows.map(([need, use]) => (
                    <div key={use} className="contents">
                      <p className="border-b border-border-primary py-3.5 pr-4 text-[15px] font-light text-carbon-400">
                        {need}
                      </p>
                      <p className="border-b border-border-primary py-3.5 text-[15px] font-regular text-white">
                        {use}
                      </p>
                    </div>
                  ))}
                  <p className="border-b border-brand-red-primary bg-brand-red-primary/[0.07] py-4 pr-4 text-[15px] font-regular text-white">
                    One active working directory crossing runtime, session, agent or reviewer
                    boundaries
                  </p>
                  <p className="border-b border-brand-red-primary bg-brand-red-primary/[0.07] py-4 font-mono text-sm font-regular text-brand-red-primary">
                    TiDB Cloud Filesystem
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-14 max-w-[760px] text-pretty text-body-2xl font-regular text-white">
              If that&apos;s you, what&apos;s left is the limits. Here they are.
            </p>
          </div>
        </section>

        {/* 06 FAQ */}
        <section id="faq" className="bg-gradient-dark-top py-20">
          <div className="mx-auto max-w-container px-4 md:px-8 lg:px-16">
            <p className="mb-8 font-mono text-[15px] text-carbon-400">Straight answers</p>
            {/* title-case-ignore */}
            <h2 className="mb-12 max-w-[820px] text-pretty text-h2-mb font-bold leading-tight tracking-[-0.02em] md:text-h2-sm">
              What it is, and what it isn&apos;t yet.
            </h2>
            <div className="mx-auto max-w-[860px]">
              <Accordion type="single" defaultValue="what-is-it" collapsible>
                {faqItems.map((item) => (
                  <AccordionItem key={item.value} value={item.value}>
                    <AccordionTrigger className="py-5 text-lg text-white hover:text-white">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="max-w-[760px] text-carbon-400 [&_code]:font-mono">
                      {item.answer}
                      {item.review && (
                        <div className="mt-3">
                          <ReviewNote text={item.review} />
                        </div>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* 07 Closing CTA */}
        <section className="bg-brand-red-bg py-16 text-white">
          <div className="mx-auto max-w-container px-4 md:px-8 lg:px-16">
            <p className="mb-4 text-center font-mono text-[15px] text-white/70">Get started</p>
            <CtaSection
              title="Nothing to rebuild. Everything to build on."
              subtitle="Write from one runtime. Let it end. Reopen the workspace from another and check that the second run continues from the first. That's the whole test."
              primaryCta={{ text: 'Read the quickstart', href: 'https://docs.pingcap.com/' }}
              secondaryCta={{
                text: 'Open the E2B demo repo',
                href: 'https://github.com/tidbcloud/tdc',
              }}
            />
            {SHOW_REVIEW_NOTES && (
              <div className="mt-6">
                <ReviewNote
                  light
                  text="Two entry points only — the Kimi-style clone lab is dropped (not a launch-critical demo). The secondary link is a hard gate: the E2B demo repo has to move off a personal GitHub account, with a license, before 2026-08-16."
                />
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
