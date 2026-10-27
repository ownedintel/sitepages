import { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "AI for Private Equity & Portfolio Value Creation | Sigmoidal",
  description: "Since 2016, Sigmoidal has built production AI for private equity deal teams and operating groups.",
};

const capabilities = [
  { title: "Deal sourcing and pipeline intelligence", desc: "Deal flow is a relationship business; ranking it is a data problem. We build scoring models trained on your fund\u2019s own record, deals won, deals passed, how both calls aged, so the pipeline ranks targets against your thesis rather than a banker\u2019s teaser. Partners spend Monday morning on the eight targets that matter." },
  { title: "AI-assisted due diligence", desc: "A diligence sprint is three weeks of associates reading a data room at midnight. We train models on your deal history to run compliance assessment, risk analysis, and deal scoring before the first folder opens, every flag linked to its source documents. For one global PE firm, the system reached 97% agreement with blind partner review on live deal flow, trained on 32,000 historical deals." },
  { title: "Portfolio company value creation", desc: "The 100-day plan names the same levers every time: pricing, procurement, working capital, retention. We embed engineers inside portfolio companies to build the systems behind those levers: demand forecasting for the distributor, predictive maintenance for the manufacturer, a pricing engine for the software asset." },
  { title: "Financial consolidation and LP reporting automation", desc: "Twenty portcos, twenty charts of accounts, one LP deadline. We automate consolidation across entities and ERPs: for one PE client, 89% of portfolio financial consolidation now runs automated end to end, every figure traceable to the source ledger line. Quarter end stops being archaeology." },
  { title: "Liquidity forecasting and exit readiness", desc: "DPI pressure is not abstract. LPs count distributions, not marks. We build liquidity forecasting on the same consolidated, lineage-tracked data that runs your reporting, and exit-readiness systems that give a sell-side process clean, defensible numbers before the buyer\u2019s diligence team starts pulling threads." },
  { title: "Research and investment intelligence", desc: "A chatbot that cannot show its sources will not survive compliance review. We build retrieval and synthesis systems over a firm\u2019s own filings, transcripts, and expert-call notes, every output traceable to a source document. At a global investment manager with more than $80B under management, research productivity rose 40% in year one." },
];

const stats = [
  { value: "97%", label: "agreement with blind partner review on live deal flow, trained on 32,000 historical deals", link: "/case-studies/ai-due-diligence-pe" },
  { value: "89%", label: "of portfolio financial consolidation automated end to end", link: "/case-studies/financial-consolidation-pe" },
  { value: "40%", label: "research-productivity gain in year one at a global investment manager", link: "/case-studies/ai-investment-management" },
];

const timeline = [
  { period: "Weeks 1-2", desc: "Diagnostic with the deal team or ops group, ending in a priced build plan tied to fund metrics." },
  { period: "Weeks 3-12", desc: "Embedded build inside your stack, with a working system in front of users by week six." },
  { period: "Ongoing", desc: "Production ownership, model monitoring, and quarterly value reviews against the plan." },
];

export default function PrivateEquityPage() {
  return (
    <PageLayout>
      <section className="pt-32 pb-16 lg:pt-44 lg:pb-20">
        <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
          <nav className="mb-8 flex items-center gap-2 text-sm text-slate reveal">
            <Link href="/" className="transition-colors hover:text-ink">Home</Link>
          </nav>
          <div className="max-w-3xl">
            <h1 className="font-display text-h1 text-ink reveal">AI across the investment cycle</h1>
            <p className="mt-8 max-w-[62ch] text-lg leading-relaxed text-ink/70 reveal reveal-delay-1">
              Multiple expansion carried a decade of returns. The next fund will be judged on operating alpha, and on how fast you can prove it to LPs. Since 2016, Sigmoidal has built production AI for private equity deal teams and operating groups: diligence systems, consolidation engines, and research platforms, delivered by embedded senior teams that own the outcome.
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
            <h2 className="font-display text-h2 text-ink mt-5">Where AI earns its keep across the deal lifecycle</h2>
            <p className="mt-4 max-w-[62ch] text-[0.95rem] text-ink/60">Most AI spend in private equity dies in pilots because it was aimed at a demo instead of a fund metric.</p>
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

      {/* Proof */}
      <section className="bg-beige py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
          <div className="reveal">
            <p className="flex items-baseline gap-3 text-eyebrow font-medium uppercase text-teal-ink">
              <span aria-hidden className="h-px w-6 shrink-0 translate-y-[calc(0.5px-0.365em)] bg-teal" />
              Proof
            </p>
            <h2 className="font-display text-h2 text-ink mt-5">Numbers we will defend in the first meeting</h2>
            <p className="mt-4 max-w-[62ch] text-[0.95rem] text-ink/60">Every figure below comes from a production system, measured by the client, and links to the case study that documents it.</p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {stats.map((s, i) => (
              <div key={i} className={`reveal reveal-delay-${Math.min(i + 1, 3)}`}>
                <p className="font-display text-[2.6rem] leading-none tracking-tight text-teal">{s.value}</p>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-ink/70">{s.label}</p>
                <Link href={s.link} className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-teal-ink">
                  Case study
                  <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client story */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
          <div className="reveal">
            <p className="flex items-baseline gap-3 text-eyebrow font-medium uppercase text-teal-ink">
              <span aria-hidden className="h-px w-6 shrink-0 translate-y-[calc(0.5px-0.365em)] bg-teal" />
              Client story
            </p>
            <h2 className="font-display text-h2 text-ink mt-5">One portfolio, many ERPs, a close that stopped scaling</h2>
          </div>
          <div className="mt-8 max-w-[62ch] space-y-6 reveal reveal-delay-1">
            <p className="text-[1.0625rem] leading-[1.7] text-ink/80">
              A private equity firm was consolidating monthly numbers from portfolio companies running different ERPs, different charts of accounts, and different ideas of what a closed month means. Every acquisition added another spreadsheet to the chain, and the finance team spent the close re-mapping trial balances by hand while LPs asked for more granularity, faster.
            </p>
            <p className="text-[1.0625rem] leading-[1.7] text-ink/80">
              We built a consolidation pipeline that treats each portco ledger as a data source with a contract: entity and account mapping that is stored and reviewable, anomaly and completeness checks that catch broken balances before consolidation runs, and audit-ready lineage from every consolidated figure back to the source ledger line.
            </p>
            <p className="text-[1.0625rem] leading-[1.7] text-ink/80">
              Today 89% of the consolidation workload runs automated end to end, and the close is measured in days rather than weeks. The judgment calls stay with the finance team, clearly flagged.
            </p>
            <Link href="/case-studies/financial-consolidation-pe" className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-teal-ink">
              <span className="link-underline">Read the full consolidation case study</span>
              <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Engagement model */}
      <section className="bg-beige py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
          <div className="reveal">
            <p className="flex items-baseline gap-3 text-eyebrow font-medium uppercase text-teal-ink">
              <span aria-hidden className="h-px w-6 shrink-0 translate-y-[calc(0.5px-0.365em)] bg-teal" />
              Engagement model
            </p>
            <h2 className="font-display text-h2 text-ink mt-5">How an embedded team plugs into a fund</h2>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {timeline.map((t, i) => (
              <div key={i} className={`reveal reveal-delay-${Math.min(i + 1, 3)} border border-ink/10 bg-paper p-8`}>
                <p className="font-display text-[1.3rem] tracking-tight text-teal">{t.period}</p>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-ink/70">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Bring us one live problem"
        description="The first conversation is a working session with a partner who has built these systems. Bring a diligence bottleneck, a portco reporting mess, or an exit eighteen months out that needs a cleaner data story. We will tell you what a system would look like, what it costs, and whether it is worth building."
      />
    </PageLayout>
  );
}
