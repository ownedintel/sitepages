import { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "AI in Investment Management: 40% Research Gain | Sigmoidal",
  description: "A global investment manager with more than $80B under management asked a narrow question: could its equity research analysts spend less time assembling information and more time forming views.",
};

const results = [
  { value: "40%", label: "gain in research productivity per analyst" },
  { value: "24%", label: "increase in names under active coverage, with no added headcount" },
  { value: "70%", label: "of routine earnings summaries now start from an automated draft" },
  { value: "0", label: "material findings across four quarterly compliance reviews" },
];

export default function AIInvestmentManagementPage() {
  return (
    <PageLayout>
      <section className="pt-32 pb-16 lg:pt-44 lg:pb-20">
        <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
          <nav className="mb-8 flex items-center gap-2 text-sm text-slate reveal">
            <Link href="/" className="transition-colors hover:text-ink">Home</Link>
            <span className="text-ink/30">/</span>
            <Link href="/case-studies" className="transition-colors hover:text-ink">Case Studies</Link>
            <span className="text-ink/30">/</span>
            <span className="text-ink/50">AI in Investment Management: 40% Research Gain</span>
          </nav>
          <div className="max-w-3xl">
            <p className="flex items-baseline gap-3 text-eyebrow font-medium uppercase text-teal-ink reveal">
              <span aria-hidden className="h-px w-6 shrink-0 translate-y-[calc(0.5px-0.365em)] bg-teal" />
              Case study
            </p>
            <h1 className="font-display text-ink mt-5 reveal reveal-delay-1">
              <span className="block text-[2.6rem] leading-none tracking-[-0.02em] text-teal">40%</span>
              <span className="mt-3 block text-h2">more research output per analyst in year one</span>
            </h1>
            <p className="mt-8 max-w-[62ch] text-lg leading-relaxed text-ink/70 reveal reveal-delay-2">
              A global investment manager with more than $80B under management asked a narrow question: could its equity research analysts spend less time assembling information and more time forming views. Twelve months after the first production release, the firm&apos;s own operations team measured a 40% gain in research productivity.
            </p>
            <div className="mt-8 flex gap-8 reveal reveal-delay-3">
              <div>
                <p className="font-display text-[2rem] leading-none tracking-tight text-teal">200+</p>
                <p className="mt-2 text-sm text-ink/60">daily users across the research and investment teams</p>
              </div>
              <div>
                <p className="font-display text-[2rem] leading-none tracking-tight text-teal">0</p>
                <p className="mt-2 text-sm text-ink/60">material compliance findings in the first year of production</p>
              </div>
            </div>
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
                The firm&apos;s equity research group covered several hundred names across nine sectors. Internal time studies put analysts at close to 60% of their week on assembly work: pulling filings, cleaning earnings transcripts, reconciling broker estimates, summarizing expert calls. Coverage requests from portfolio managers were growing. Headcount was not.
              </p>
              <p className="text-[1.0625rem] leading-[1.7] text-ink/80">
                An earlier internal pilot, a general-purpose chatbot pointed at the research archive, had failed review by the compliance team. It could not show where its answers came from, and in a business governed by information barriers and MNPI rules, an answer without a source is a liability. The mandate handed to Sigmoidal was specific: automate the assembly work, keep every output traceable to a source document, and pass the same compliance review the chatbot failed.
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
              <p className="mt-4 text-[0.95rem] text-ink/60">One platform, four connected systems, all running inside the client&apos;s own cloud environment.</p>
            </div>
            <div className="lg:col-span-8 reveal reveal-delay-1 space-y-8">
              {[
                { title: "Document processing pipeline", desc: "Automated ingestion and structuring of filings, earnings transcripts, broker research, and expert-call notes, roughly 400,000 documents in the first year, with entity resolution linking every document to the correct ticker, subsidiary, and reporting period." },
                { title: "Market analysis automation", desc: "Standing jobs that screen comparables, flag estimate revisions and earnings surprises, and track thematic exposure across the coverage universe, delivered to each analyst before the market opens." },
                { title: "Citation-first drafting", desc: "First drafts of earnings summaries and company profiles in which every sentence carries a link to its source document. Analysts edit and own the final note; nothing publishes without a human byline." },
                { title: "Governance layer", desc: "Access controls mapped to the firm\u2019s information barriers, full prompt and output logging retained for compliance review, and an evaluation suite that must pass before any model or prompt change reaches production." },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="font-display text-h3 text-ink">{item.title}</h3>
                  <p className="mt-2 text-[1.0625rem] leading-[1.7] text-ink/80">{item.desc}</p>
                </div>
              ))}
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
                Rollout
              </p>
              <h2 className="font-display text-h2 text-ink mt-5">Deployment</h2>
            </div>
            <div className="lg:col-span-8 reveal reveal-delay-1 space-y-6">
              <p className="text-[1.0625rem] leading-[1.7] text-ink/80">
                The system runs in the client&apos;s own cloud tenancy and connects to its research management platform and licensed market-data feeds. The first production release shipped in week seven: the document pipeline and earnings summaries for a single pilot desk of twelve analysts. Rollout proceeded desk by desk over two quarters, with sector-specific playbooks and training sessions run jointly with the head of research.
              </p>
              <p className="text-[1.0625rem] leading-[1.7] text-ink/80">
                Sigmoidal engineers carried the on-call rotation for the first six months, then handed it to the client&apos;s platform team with full runbooks and a quarterly model-review cadence agreed with compliance. Drift monitoring, evaluation regression tests, and cost-per-query dashboards remain in place today.
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
            <h2 className="font-display text-h2 text-ink mt-5">Results in year one</h2>
            <p className="mt-4 text-[0.95rem] text-ink/60">Measured by the client&apos;s operations team against a time-study baseline taken before the first release, and reviewed with compliance each quarter.</p>
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
                &ldquo;The chatbot era taught us to distrust tools that sound confident. This system shows its work on every line, which is why compliance approved it and why the analysts actually use it. The 40% figure is ours, not the vendor&apos;s. We measured it twice because we did not believe it the first time.&rdquo;
              </p>
              <footer className="mt-6 text-sm text-slate">
                Head of Research, global investment manager (name withheld)
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
        title="Discuss a similar system"
        description="If your research, diligence, or reporting workflows carry the same assembly burden, the first working session is with a partner who has built these systems and a principal engineer. We will tell you what a comparable system would cost, how long the first release would take, and what it should return."
      />
    </PageLayout>
  );
}
