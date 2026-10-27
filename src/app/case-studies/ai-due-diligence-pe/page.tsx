import { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "AI Due Diligence: 97% Partner-Review Agreement | Sigmoidal",
  description: "A global private equity firm had two decades of deal history, 32,000 logged deal records. We trained a model on all of it.",
};

const results = [
  { value: "97%", label: "agreement with blind partner review on live deal flow" },
  { value: "6 weeks", label: "from first office deployment to full three-region rollout, validated by blind partner review" },
  { value: "32,000", label: "historical deals in the training corpus" },
  { value: "~12,000 hours", label: "analyst hours returned to deal teams annually (client estimate)" },
];

export default function AIDueDiligencePEPage() {
  return (
    <PageLayout>
      <section className="pt-32 pb-16 lg:pt-44 lg:pb-20">
        <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
          <nav className="mb-8 flex items-center gap-2 text-sm text-slate reveal">
            <Link href="/" className="transition-colors hover:text-ink">Home</Link>
            <span className="text-ink/30">/</span>
            <Link href="/case-studies" className="transition-colors hover:text-ink">Case Studies</Link>
            <span className="text-ink/30">/</span>
            <span className="text-ink/50">AI Due Diligence: 97% Partner-Review Agreement</span>
          </nav>
          <div className="max-w-3xl">
            <p className="flex items-baseline gap-3 text-eyebrow font-medium uppercase text-teal-ink reveal">
              <span aria-hidden className="h-px w-6 shrink-0 translate-y-[calc(0.5px-0.365em)] bg-teal" />
              Case study
            </p>
            <h1 className="font-display text-ink mt-5 reveal reveal-delay-1">
              <span className="block text-[2.6rem] leading-none tracking-[-0.02em] text-teal">97%</span>
              <span className="mt-3 block text-h2">agreement with blind partner review, trained on 32,000 deals, validated across a six-week rollout</span>
            </h1>
            <p className="mt-8 max-w-[62ch] text-lg leading-relaxed text-ink/70 reveal reveal-delay-2">
              A global private equity firm had two decades of deal history, 32,000 logged deal records: screening records on every logged opportunity, plus memos, data-room exports, and post-mortems on the deals that went deep. We trained a model on all of it. By the end of the six-week rollout, it was matching partner-level judgment on 97% of assessments across live deal flow.
            </p>
          </div>
        </div>
      </section>

      {/* Situation */}
      <section className="border-t border-ink/8 py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4 reveal">
              <p className="flex items-baseline gap-3 text-eyebrow font-medium uppercase text-teal-ink">
                <span aria-hidden className="h-px w-6 shrink-0 translate-y-[calc(0.5px-0.365em)] bg-teal" />
                Situation
              </p>
              <h2 className="font-display text-h2 text-ink mt-5">The situation</h2>
            </div>
            <div className="lg:col-span-8 reveal reveal-delay-1 space-y-6">
              <p className="text-[1.0625rem] leading-[1.7] text-ink/80">
                The firm screens thousands of opportunities a year across offices in three regions. Screening quality depended on who caught the deal: a senior associate in one office would kill a target that another office would take to IC. Analysts spent the first week of every diligence sprint re-deriving risk factors the firm had already paid to learn across 32,000 prior deals.
              </p>
              <p className="text-[1.0625rem] leading-[1.7] text-ink/80">
                The cost showed up twice: in analyst hours, and in the occasional deal that reached IC carrying a risk the archive already knew about.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The build */}
      <section className="bg-beige py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4 reveal">
              <p className="flex items-baseline gap-3 text-eyebrow font-medium uppercase text-teal-ink">
                <span aria-hidden className="h-px w-6 shrink-0 translate-y-[calc(0.5px-0.365em)] bg-teal" />
                The build
              </p>
              <h2 className="font-display text-h2 text-ink mt-5">What we built</h2>
            </div>
            <div className="lg:col-span-8 reveal reveal-delay-1 space-y-6">
              <p className="text-[1.0625rem] leading-[1.7] text-ink/80">
                Three connected systems, trained on the firm&apos;s 32,000-deal history and calibrated against how its investment committees had actually graded risk over two decades.
              </p>
              <div className="space-y-8 mt-4">
                <div>
                  <h3 className="font-display text-h3 text-ink">Compliance assessment</h3>
                  <p className="mt-2 text-[1.0625rem] leading-[1.7] text-ink/80">A model that reads target documentation and flags exposure against the regulatory and contractual patterns that had hurt the firm&apos;s past deals, not a generic checklist.</p>
                </div>
                <div>
                  <h3 className="font-display text-h3 text-ink">Risk analysis</h3>
                  <p className="mt-2 text-[1.0625rem] leading-[1.7] text-ink/80">Scoring across financial, operational, and counterparty dimensions, benchmarked to the firm&apos;s own IC decisions.</p>
                </div>
                <div>
                  <h3 className="font-display text-h3 text-ink">Deal scoring</h3>
                  <p className="mt-2 text-[1.0625rem] leading-[1.7] text-ink/80">A ranking layer that compares each new target against the closed record, what the firm bid, what it passed on, and how those calls aged.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4 reveal">
              <p className="flex items-baseline gap-3 text-eyebrow font-medium uppercase text-teal-ink">
                <span aria-hidden className="h-px w-6 shrink-0 translate-y-[calc(0.5px-0.365em)] bg-teal" />
                Deployment
              </p>
              <h2 className="font-display text-h2 text-ink mt-5">How it deployed inside the workflow</h2>
            </div>
            <div className="lg:col-span-8 reveal reveal-delay-1 space-y-6">
              <p className="text-[1.0625rem] leading-[1.7] text-ink/80">
                No new interface to log into. Scores and flags land in the pipeline system the deal teams already use, and every flag links back to its source documents, so an associate can verify a finding in minutes rather than taking the model&apos;s word for it. Analysts remain the decision-makers; the model does the first read.
              </p>
              <p className="text-[1.0625rem] leading-[1.7] text-ink/80">
                Rollout ran office by office over six weeks, with blind partner-review sampling to establish trust before anyone was asked to rely on the output.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-beige py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
          <div className="reveal">
            <p className="flex items-baseline gap-3 text-eyebrow font-medium uppercase text-teal-ink">
              <span aria-hidden className="h-px w-6 shrink-0 translate-y-[calc(0.5px-0.365em)] bg-teal" />
              Results
            </p>
            <h2 className="font-display text-h2 text-ink mt-5">What it returns</h2>
            <p className="mt-4 max-w-[54ch] text-[0.95rem] text-ink/60">Agreement was measured the hard way: model assessments compared against blind partner review on live deal flow, not a held-out test set.</p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {results.map((r, i) => (
              <div key={i} className={`reveal reveal-delay-${Math.min(i + 1, 4)}`}>
                <p className="font-display text-[2.6rem] leading-none tracking-tight text-teal">{r.value}</p>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-ink/70">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl reveal">
            <blockquote className="border-l-2 border-teal/30 pl-8">
              <p className="text-[1.3rem] leading-[1.6] text-ink/85 italic">
                &ldquo;The model does the first read the way our best associate would on their best day, except it does it on every deal, including the ones that come in at six on a Friday. The IC gets a cleaner risk picture than we have ever had.&rdquo;
              </p>
              <footer className="mt-6 text-sm text-slate">
                Partner, global private equity firm (name withheld)
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/8 py-12">
        <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
          <Link href="/case-studies" className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-teal-ink">
            <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 rotate-180 transition-transform duration-300 group-hover/link:-translate-x-1">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="link-underline">All case studies</span>
          </Link>
        </div>
      </section>

      <CTASection
        title="Discuss a diligence system for your fund"
        description="Your deal archive is a training set nobody else has. We will assess what it could do to your screening quality and cycle time, and tell you whether the build is worth it."
      />
    </PageLayout>
  );
}
