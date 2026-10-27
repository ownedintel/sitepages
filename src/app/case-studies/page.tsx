import { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Case Studies | Sigmoidal",
  description: "Selected engagements. Client confidentiality governs most of the work. The numbers are not ours: each one was measured or validated by the client.",
};

const studies = [
  {
    category: "Life Sciences & Healthcare",
    stat: "72%",
    headline: "less unplanned analyzer downtime for a global pharmaceutical leader",
    description: "AI monitoring of clinical chemistry and immunochemistry analyzers, replacing reactive service with planned interventions across the monitored fleet.",
    href: "/case-studies/predictive-maintenance-pharma",
  },
  {
    category: "Private Equity",
    stat: "97%",
    headline: "agreement with blind partner review on live deal flow at a top-tier global PE firm",
    description: "Machine learning trained on 32,000 historical deals to automate compliance assessment, risk analysis, and deal scoring.",
    href: "/case-studies/ai-due-diligence-pe",
  },
  {
    category: "Enterprise AI Deployment",
    stat: "40%",
    headline: "research productivity gain at a global investment manager",
    description: "AI across equity research: document processing and market analysis deployed to every analyst desk. Measured by the client\u2019s own operations team in year one.",
    href: "/case-studies/ai-investment-management",
  },
  {
    category: "Private Equity",
    stat: "89%",
    headline: "of portfolio financial consolidation automated end to end",
    description: "Automated entity mapping, anomaly checks, and audit-ready data lineage across portfolio-company ERPs, replacing manual month-end consolidation.",
    href: "/case-studies/financial-consolidation-pe",
  },
];

export default function CaseStudiesPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Selected work"
        title="Selected engagements"
        description="Client confidentiality governs most of the work, so the studies below are anonymized. The numbers are not ours: each one was measured or validated by the client, and each write-up covers the situation, the build, the deployment, and what it returned."
      />

      <section className="pb-20 lg:pb-28">
        <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
          <div className="grid gap-6 md:grid-cols-2">
            {studies.map((study, i) => (
              <Link
                key={study.href}
                href={study.href}
                className={`reveal reveal-delay-${Math.min(i + 1, 4)} group flex h-full flex-col overflow-hidden border border-ink/10 bg-paper transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-[0_24px_60px_-32px_rgba(10,60,60,0.2)]`}
              >
                <div className="flex flex-1 flex-col p-8">
                  <span className="inline-flex w-fit items-center bg-paper px-3 py-1 text-xs font-medium text-deep-teal ring-1 ring-teal/20 ring-inset">
                    {study.category}
                  </span>
                  <h3 className="font-display text-ink mt-6">
                    <span className="block text-[2.6rem] leading-none tracking-[-0.02em] text-teal">
                      {study.stat}
                    </span>
                    <span className="mt-3 block text-[1.3rem] leading-[1.4]">
                      {study.headline}
                    </span>
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/70">
                    {study.description}
                  </p>
                  <div className="mt-auto pt-6">
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-ink">
                      <span className="link-underline">Read the case study</span>
                      <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageLayout>
  );
}
