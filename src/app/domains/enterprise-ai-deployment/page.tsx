import { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Enterprise AI Deployment & MLOps Consulting | Sigmoidal",
  description: "Sigmoidal has been deploying enterprise AI systems into production since 2016. Our systems run inside the ERP, the research desk, and the dispatch queue.",
};

const capabilities = [
  { title: "AI document processing and workflow automation at scale", desc: "Extraction and routing for filings, earnings transcripts, broker research, and data-room exports. Confidence thresholds decide what flows straight through and what lands on a human desk; data contracts, throughput SLAs, and exception queues come standard. At one global investment manager, the pipeline structured roughly 400,000 documents in its first year." },
  { title: "AI decision support and analytics systems", desc: "Deal-flow scoring, instrument-failure prediction, estimate-revision screens before the market opens: a defensible number in front of the decision-maker before the meeting starts. One system, trained on a private equity firm\u2019s 32,000 historical deals, compares each new target against what the firm bid, what it passed on, and how those calls aged. Drift and calibration monitoring keeps the number trustworthy in month eighteen; every output traces to source data for the day the audit committee asks." },
  { title: "Applied LLM systems with governance", desc: "Retrieval, summarization, and drafting on foundation models, with the controls a regulated enterprise requires: evaluation suites before every release, full prompt and output logging, role-based access, human review gates where risk warrants. At the investment manager, drafting is citation-first, every sentence linked to its source, and 70% of routine earnings summaries start from an automated draft. No LLM output reaches a customer or a regulator without a documented control path." },
  { title: "Legacy system integration and MLOps", desc: "An AI system is only as good as its connection to the ERP, the LIMS, or the twenty-year-old data warehouse it must read from. At one private equity firm, that layer reads portfolio-company ledgers across mismatched ERPs and charts of accounts: 89% of portfolio financial consolidation automated, every figure traceable to its source ledger line. We build the integration layer, feature pipelines, and model CI/CD: automated retraining, canary deployments, rollback in minutes. On-call is written into the contract, with committed response times." },
  { title: "Security and compliance posture", desc: "We work inside your VPC or on premises where data residency demands it, and document model risk to a standard your compliance function can put in front of an examiner. At a global pharmaceutical leader, the telemetry pipeline was qualified as a data source under the client\u2019s quality system; model changes run through the client\u2019s own change control. At the investment manager, access controls map to the firm\u2019s information barriers. Change management is part of delivery: training, runbooks, sign-off from the people who own the process today." },
];

const method = [
  { step: "Understand the business problem", desc: "A two-week diagnostic with the people who own the P&L and the process. We leave with a one-page definition of the decision the system will improve, the metric it will be judged by, and the baseline it must beat. If we cannot write that page, we do not proceed." },
  { step: "Build the system", desc: "A small senior team, working software from the first sprint, weekly demos against your real data under your access controls. Your platform and security teams join architecture reviews from day one, because their sign-off is a launch dependency, not a formality." },
  { step: "Deploy to production", desc: "Canary releases, load testing against peak volumes, rollback plans, runbooks for your operations team, and a change-management plan for the people whose work changes. A working system is in front of your users by week six." },
  { step: "Measure the outcome", desc: "We instrument the business metric alongside the model metric and review both quarterly with your executive sponsor. Engagements are structured so that our success and yours are the same number." },
];

const stats = [
  { value: "40%", label: "research-productivity gain in year one, against the client\u2019s own baseline", link: "/case-studies/ai-investment-management" },
  { value: "~400,000", label: "documents structured by the pipeline in its first year, every one traceable to its source" },
  { value: "24%", label: "more names under coverage, with no added headcount" },
  { value: "0", label: "material compliance findings across four quarterly compliance reviews" },
];

export default function EnterpriseAIPage() {
  return (
    <PageLayout>
      <section className="pt-32 pb-16 lg:pt-44 lg:pb-20">
        <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
          <nav className="mb-8 flex items-center gap-2 text-sm text-slate reveal">
            <Link href="/" className="transition-colors hover:text-ink">Home</Link>
          </nav>
          <div className="max-w-3xl">
            <h1 className="font-display text-h1 text-ink reveal">Production AI inside core operations</h1>
            <p className="mt-8 max-w-[62ch] text-lg leading-relaxed text-ink/70 reveal reveal-delay-1">
              You have seen the pattern. A model that demos well, a steering committee that approves phase two, then eighteen months of integration meetings and a quiet write-off.
            </p>
            <p className="mt-6 max-w-[62ch] text-[1.0625rem] leading-[1.7] text-ink/70 reveal reveal-delay-2">
              Sigmoidal has been deploying enterprise AI systems into production since 2016, years before the LLM wave. Our systems run inside the ERP, the research desk, and the dispatch queue, with SLAs, named on-call engineers, and continuous model monitoring. They are judged by the number that reaches the board deck, not the demo that reaches the steering committee.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-t border-ink/8 py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
          <div className="reveal">
            <p className="flex items-baseline gap-3 text-eyebrow font-medium uppercase text-teal-ink">
              <span aria-hidden className="h-px w-6 shrink-0 translate-y-[calc(0.5px-0.365em)] bg-teal" />
              Capabilities
            </p>
            <h2 className="font-display text-h2 text-ink mt-5">What we build and run in production</h2>
            <p className="mt-4 max-w-[62ch] text-[0.95rem] text-ink/60">Five capability areas, one standard: nothing ships without an SLA, an owner on call, and a metric the CFO recognizes.</p>
          </div>
          <div className="mt-16 space-y-8">
            {capabilities.map((cap, i) => (
              <div key={i} className={`reveal reveal-delay-${Math.min(i + 1, 4)} border border-ink/10 bg-paper p-8`}>
                <h3 className="font-display text-h3 text-ink">{cap.title}</h3>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-ink/70">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Method */}
      <section className="bg-beige py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
          <div className="reveal">
            <p className="flex items-baseline gap-3 text-eyebrow font-medium uppercase text-teal-ink">
              <span aria-hidden className="h-px w-6 shrink-0 translate-y-[calc(0.5px-0.365em)] bg-teal" />
              Method
            </p>
            <h2 className="font-display text-h2 text-ink mt-5">The same four steps since 2016</h2>
            <p className="mt-4 max-w-[62ch] text-[0.95rem] text-ink/60">The models and the tooling have turned over many times since the early predictive-analytics work for organizations including Novartis. The sequence has held because it is judged on the metric it was hired to move.</p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {method.map((m, i) => (
              <div key={i} className={`reveal reveal-delay-${Math.min(i + 1, 4)} border border-ink/10 bg-paper p-8`}>
                <p className="font-display text-[2rem] leading-none tracking-tight text-teal">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="font-display text-h3 text-ink mt-4">{m.step}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/70">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
          <div className="reveal">
            <p className="flex items-baseline gap-3 text-eyebrow font-medium uppercase text-teal-ink">
              <span aria-hidden className="h-px w-6 shrink-0 translate-y-[calc(0.5px-0.365em)] bg-teal" />
              Proof
            </p>
            <h2 className="font-display text-h2 text-ink mt-5">Outcomes we can defend in a reference call</h2>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div key={i} className={`reveal reveal-delay-${Math.min(i + 1, 4)}`}>
                <p className="font-display text-[2.6rem] leading-none tracking-tight text-teal">{s.value}</p>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-ink/70">{s.label}</p>
                {s.link && (
                  <Link href={s.link} className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-teal-ink">
                    Case study
                    <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client story */}
      <section className="bg-beige py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
          <div className="reveal">
            <p className="flex items-baseline gap-3 text-eyebrow font-medium uppercase text-teal-ink">
              <span aria-hidden className="h-px w-6 shrink-0 translate-y-[calc(0.5px-0.365em)] bg-teal" />
              Client story
            </p>
            <h2 className="font-display text-h2 text-ink mt-5">40% research productivity gain, no added headcount</h2>
          </div>
          <div className="mt-8 max-w-[62ch] space-y-6 reveal reveal-delay-1">
            <p className="text-[1.0625rem] leading-[1.7] text-ink/80">
              A global investment manager with more than $80B under management came to us with equity research analysts spending close to 60% of their week assembling information: pulling filings, cleaning transcripts, reconciling broker estimates. An earlier internal pilot, a general-purpose chatbot, had failed compliance review because it could not show where its answers came from.
            </p>
            <p className="text-[1.0625rem] leading-[1.7] text-ink/80">
              We built a citation-first research platform inside the client&apos;s own cloud: document processing across filings, transcripts, and broker research, standing market-analysis jobs delivered before the open, and drafts in which every sentence links to its source. Twelve months after the first production release, the firm&apos;s own operations team measured a 40% research productivity gain. The platform serves 200+ daily users across the research and investment teams, and the reclaimed hours went into 24% more names under coverage with no added headcount.
            </p>
            <Link href="/case-studies/ai-investment-management" className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-teal-ink">
              <span className="link-underline">Read the case study</span>
              <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Engagement model */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
          <div className="reveal">
            <p className="flex items-baseline gap-3 text-eyebrow font-medium uppercase text-teal-ink">
              <span aria-hidden className="h-px w-6 shrink-0 translate-y-[calc(0.5px-0.365em)] bg-teal" />
              Engagement model
            </p>
            <h2 className="font-display text-h2 text-ink mt-5">Embedded teams that own the outcome</h2>
          </div>
          <div className="mt-8 max-w-[62ch] space-y-6 reveal reveal-delay-1">
            <p className="text-[1.0625rem] leading-[1.7] text-ink/80">
              A Sigmoidal team arrives senior and stays small: an engagement lead who has shipped production AI before, three to five senior engineers across ML, data, and platform, and a domain specialist who speaks your industry&apos;s language, whether that is GxP, MNPI, or OEE. The team embeds in your organization, works in your environment, and reports against your metric.
            </p>
            <p className="text-[1.0625rem] leading-[1.7] text-ink/80">
              We deliver a running system and stay accountable for the number it was built to move. Median engineering tenure is over seven years, and there is no pyramid of juniors behind the people you meet.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Bring us the pilot that stalled"
        description="The first working session is with a partner who has built these systems and a principal engineer. Within two weeks you will have a written assessment: whether the system is worth building, what it will cost, and what it should return. If the answer is no, we will say so."
      />
    </PageLayout>
  );
}
