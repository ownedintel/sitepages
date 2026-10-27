import Link from "next/link";

const studies = [
  {
    category: "Life Sciences & Healthcare",
    stat: "72%",
    headline: "less unplanned analyzer downtime for a global pharmaceutical leader",
    description:
      "AI monitoring of clinical chemistry and immunochemistry analyzers, replacing reactive service with planned interventions across the monitored fleet.",
    href: "/case-studies/predictive-maintenance-pharma",
    illustration: "maintenance",
  },
  {
    category: "Private Equity",
    stat: "97%",
    headline:
      "agreement with blind partner review on live deal flow at a top-tier global PE firm",
    description:
      "Machine learning trained on 32,000 historical deals to automate compliance assessment, risk analysis, and deal scoring.",
    href: "/case-studies/ai-due-diligence-pe",
    illustration: "deals",
  },
  {
    category: "Enterprise AI Deployment",
    stat: "40%",
    headline: "research productivity gain at a global investment manager",
    description:
      "AI across equity research: document processing and market analysis deployed to every analyst desk. Measured by the client's own operations team in year one.",
    href: "/case-studies/ai-investment-management",
    illustration: "research",
  },
];

function CaseStudyIllustration({ type }: { type: string }) {
  if (type === "maintenance") {
    return (
      <svg viewBox="0 0 320 200" fill="none" aria-hidden className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
        <path d="M 24,112 L 40,108 L 54,113 L 70,107 L 86,112 L 102,106 L 118,111 L 134,105 L 150,111 L 164,107 L 178,112 L 190,104 L 198,58 L 206,116 L 214,108 L 230,112 L 246,106 L 262,111 L 278,107 L 296,111" stroke="var(--color-teal)" strokeWidth="1.25" strokeOpacity="0.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="198" y1="72" x2="198" y2="170" stroke="var(--color-teal)" strokeWidth="1" strokeOpacity="0.28" strokeDasharray="2 5" />
        <circle cx="198" cy="58" r="10" stroke="var(--color-teal)" strokeWidth="1" strokeOpacity="0.28" />
        <circle cx="198" cy="58" r="2.5" fill="var(--color-teal)" fillOpacity="0.85" />
      </svg>
    );
  }
  if (type === "deals") {
    return (
      <svg viewBox="0 0 320 200" fill="none" aria-hidden className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
        {[40, 70, 100, 130, 160, 190, 220, 250, 280].map((x, i) => (
          <rect key={i} x={x} y={200 - (60 + Math.sin(i * 0.8) * 40)} width="16" height={60 + Math.sin(i * 0.8) * 40} fill="var(--color-teal)" fillOpacity={0.08 + i * 0.03} rx="2" />
        ))}
        <path d="M 48,140 L 78,125 L 108,135 L 138,110 L 168,120 L 198,95 L 228,85 L 258,70 L 288,60" stroke="var(--color-teal)" strokeWidth="1.5" strokeOpacity="0.5" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 320 200" fill="none" aria-hidden className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
      {[60, 100, 140, 180, 220, 260].map((x, i) => (
        <g key={i}>
          <line x1={x} y1="40" x2={x} y2="170" stroke="var(--color-teal)" strokeWidth="0.5" strokeOpacity="0.15" />
          <circle cx={x} cy={100 + Math.cos(i * 1.2) * 30} r="4" fill="var(--color-teal)" fillOpacity="0.2" />
          <circle cx={x} cy={100 + Math.cos(i * 1.2) * 30} r="1.5" fill="var(--color-teal)" fillOpacity="0.7" />
        </g>
      ))}
      <path d="M 60,130 C 100,80 140,70 180,90 C 220,110 260,60 300,50" stroke="var(--color-teal)" strokeWidth="1.2" strokeOpacity="0.4" strokeLinecap="round" />
    </svg>
  );
}

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 lg:py-28">
      <div className="mx-auto w-full max-w-container px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <div className="flex flex-wrap items-end justify-between gap-6 reveal">
          <div>
            <p className="flex items-baseline gap-3 text-eyebrow font-medium uppercase text-teal-ink">
              <span
                aria-hidden
                className="h-px w-6 shrink-0 translate-y-[calc(0.5px-0.365em)] bg-teal"
              />
              Case studies
            </p>
            <h2 className="font-display text-h2 text-ink mt-5 max-w-[22ch]">
              Selected engagements
            </h2>
          </div>
          <Link
            href="#"
            className="group/link -my-2 inline-flex items-center gap-1.5 py-2 text-sm font-medium text-teal-ink"
          >
            <span className="link-underline">All case studies</span>
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {/* Case study cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {studies.map((study, i) => (
            <Link
              key={study.stat}
              href={study.href}
              className={`reveal reveal-delay-${i + 1} group flex h-full flex-col overflow-hidden border border-ink/10 bg-paper transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-[0_24px_60px_-32px_rgba(10,60,60,0.2)]`}
            >
              {/* Illustration */}
              <div className="relative aspect-[16/10] overflow-hidden bg-beige">
                <CaseStudyIllustration type={study.illustration} />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-7">
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
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
