import { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "89% Automated PE Financial Consolidation | Sigmoidal",
  description: "A private equity firm consolidated monthly numbers from portfolio companies running different ERPs. We built the system that does the mechanical 89% of that work.",
};

const results = [
  { value: "89%", label: "of the consolidation workload automated end to end" },
  { value: "100%", label: "of consolidated figures traceable to source ledger lines" },
  { value: "Days", label: "not weeks, from portfolio close to consolidated numbers" },
  { value: "0", label: "restatements attributable to mapping errors since go-live" },
];

export default function FinancialConsolidationPEPage() {
  return (
    <PageLayout>
      <section className="pt-32 pb-16 lg:pt-44 lg:pb-20">
        <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
          <nav className="mb-8 flex items-center gap-2 text-sm text-slate reveal">
            <Link href="/" className="transition-colors hover:text-ink">Home</Link>
            <span className="text-ink/30">/</span>
            <Link href="/case-studies" className="transition-colors hover:text-ink">Case Studies</Link>
            <span className="text-ink/30">/</span>
            <span className="text-ink/50">89% Automated PE Financial Consolidation</span>
          </nav>
          <div className="max-w-3xl">
            <p className="flex items-baseline gap-3 text-eyebrow font-medium uppercase text-teal-ink reveal">
              <span aria-hidden className="h-px w-6 shrink-0 translate-y-[calc(0.5px-0.365em)] bg-teal" />
              Case study
            </p>
            <h1 className="font-display text-ink mt-5 reveal reveal-delay-1">
              <span className="block text-[2.6rem] leading-none tracking-[-0.02em] text-teal">89%</span>
              <span className="mt-3 block text-h2">of portfolio consolidation, automated without losing the audit trail</span>
            </h1>
            <p className="mt-8 max-w-[62ch] text-lg leading-relaxed text-ink/70 reveal reveal-delay-2">
              A private equity firm consolidated monthly numbers from portfolio companies running different ERPs, different charts of accounts, and different ideas of what a closed month means. We built the system that does the mechanical 89% of that work and leaves the judgment calls, clearly flagged, to the finance team.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/8 py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4 reveal">
              <p className="flex items-baseline gap-3 text-eyebrow font-medium uppercase text-teal-ink">
                <span aria-hidden className="h-px w-6 shrink-0 translate-y-[calc(0.5px-0.365em)] bg-teal" />
                Situation
              </p>
              <h2 className="font-display text-h2 text-ink mt-5">A close process built on spreadsheets and heroics</h2>
            </div>
            <div className="lg:col-span-8 reveal reveal-delay-1 space-y-6">
              <p className="text-[1.0625rem] leading-[1.7] text-ink/80">
                Every month, portfolio-company controllers exported trial balances into templates, the fund&apos;s finance team re-mapped them by hand into the group structure, and the cycle ended in a rush of reconciliation emails. Every acquisition made it worse: a new chart of accounts, new intercompany relationships, another spreadsheet in the chain.
              </p>
              <p className="text-[1.0625rem] leading-[1.7] text-ink/80">
                The cost was not only hours. Numbers arrived late enough that operating partners were steering last month&apos;s portfolio, and every manual hop was a place for an error to hide until an LP report or an audit found it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-beige py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4 reveal">
              <p className="flex items-baseline gap-3 text-eyebrow font-medium uppercase text-teal-ink">
                <span aria-hidden className="h-px w-6 shrink-0 translate-y-[calc(0.5px-0.365em)] bg-teal" />
                The build
              </p>
              <h2 className="font-display text-h2 text-ink mt-5">What we built</h2>
              <p className="mt-4 text-[0.95rem] text-ink/60">A consolidation pipeline that treats each portfolio company&apos;s ledger as a data source with a contract, not a spreadsheet to be reshaped by hand.</p>
            </div>
            <div className="lg:col-span-8 reveal reveal-delay-1 space-y-8">
              {[
                { title: "Entity and account mapping", desc: "Models learn each company\u2019s chart of accounts and map it to the group structure, with every mapping decision stored, versioned, and reviewable. New acquisitions onboard in days, not quarters." },
                { title: "Anomaly and completeness checks", desc: "Balances that break their own history, intercompany positions that do not net out, and late or missing feeds are flagged before consolidation runs, not discovered after distribution." },
                { title: "Audit-ready lineage", desc: "Every consolidated figure traces back through each transformation to the source ledger line. The answer to \u2018where did this number come from\u2019 is a click, not an archaeology project." },
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

      <section className="py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4 reveal">
              <p className="flex items-baseline gap-3 text-eyebrow font-medium uppercase text-teal-ink">
                <span aria-hidden className="h-px w-6 shrink-0 translate-y-[calc(0.5px-0.365em)] bg-teal" />
                Deployment
              </p>
              <h2 className="font-display text-h2 text-ink mt-5">How it deployed</h2>
            </div>
            <div className="lg:col-span-8 reveal reveal-delay-1 space-y-6">
              <p className="text-[1.0625rem] leading-[1.7] text-ink/80">
                The finance team kept its review workflow; the system took over the assembly underneath it. The 11% that stays human is the 11% that should: judgment on adjustments, eliminations that need context, and the final sign-off. Nothing posts without a named person approving it.
              </p>
              <p className="text-[1.0625rem] leading-[1.7] text-ink/80">
                Rollout went portfolio company by portfolio company, starting with the two messiest ledgers on the theory that if the system survived those, the rest would be routine. It did.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-beige py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
          <div className="reveal">
            <p className="flex items-baseline gap-3 text-eyebrow font-medium uppercase text-teal-ink">
              <span aria-hidden className="h-px w-6 shrink-0 translate-y-[calc(0.5px-0.365em)] bg-teal" />
              Results
            </p>
            <h2 className="font-display text-h2 text-ink mt-5">What it returns</h2>
            <p className="mt-4 text-[0.95rem] text-ink/60">Measured across the full reporting cycle after the last portfolio company was onboarded.</p>
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

      <section className="py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl reveal">
            <blockquote className="border-l-2 border-teal/30 pl-8">
              <p className="text-[1.3rem] leading-[1.6] text-ink/85 italic">
                &ldquo;The month still closes with people making judgment calls. It just no longer closes with people retyping numbers at midnight. Our auditors like it more than we do, and we like it a lot.&rdquo;
              </p>
              <footer className="mt-6 text-sm text-slate">
                Head of Portfolio Finance, private equity firm (name withheld)
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
        title="Discuss your consolidation cycle"
        description="If your close still runs on templates and heroics, we will map your reporting chain and tell you which share of it a system should own, and what that buys you in days and errors."
      />
    </PageLayout>
  );
}
