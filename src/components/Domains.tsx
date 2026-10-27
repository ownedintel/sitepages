import Link from "next/link";

const domains = [
  {
    eyebrow: "Enterprise AI Deployment",
    title: "AI inside core operations",
    description:
      "Most of what a large organization needs to know, it already holds. We build systems that put that knowledge to work where the cost sits: research, underwriting, claims, the financial close. Our engineers work inside your teams until the system runs without us.",
    link: "/domains/enterprise-ai-deployment",
    linkLabel: "Enterprise AI",
  },
  {
    eyebrow: "Life Sciences & Healthcare",
    title: "AI under regulatory scrutiny",
    description:
      "In regulated science, an error is a reportable event. We build clinical, laboratory, and quality systems engineered to hold up under GxP and regulatory review. For Novartis, we built predictive analytics for drug sales. The work is built to be examined.",
    link: "/domains/life-sciences-healthcare",
    linkLabel: "Life sciences",
  },
  {
    eyebrow: "Private Equity & Portfolio Value Creation",
    title: "AI across the investment cycle",
    description:
      "A hold period is short and a diligence window is shorter. We build systems that compress diligence, keep portfolio reporting current between board meetings, and bring a firm's own deal history to bear on the next decision. The work runs on the fund's calendar, not ours.",
    link: "/domains/private-equity-portfolio-value-creation",
    linkLabel: "Private equity",
  },
];

export default function Domains() {
  return (
    <section id="domains" className="py-20 lg:py-28">
      <div className="mx-auto w-full max-w-container px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <div className="reveal">
          <p className="flex items-baseline gap-3 text-eyebrow font-medium uppercase text-teal-ink">
            <span
              aria-hidden
              className="h-px w-6 shrink-0 translate-y-[calc(0.5px-0.365em)] bg-teal"
            />
            Three domains, known from the inside
          </p>
          <h2 className="font-display text-h2 text-ink mt-5 max-w-[22ch]">
            Where our record runs deepest.
          </h2>
        </div>

        {/* Domain cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {domains.map((domain, i) => (
            <div
              key={domain.eyebrow}
              className={`reveal reveal-delay-${i + 1} group flex flex-col`}
            >
              <div className="flex flex-1 flex-col rounded-none border border-ink/10 bg-paper p-8 transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-[0_24px_60px_-32px_rgba(10,60,60,0.2)]">
                <p className="text-eyebrow font-medium uppercase text-teal-ink">
                  {domain.eyebrow}
                </p>
                <h3 className="font-display text-h3 text-ink mt-5">
                  {domain.title}
                </h3>
                <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-ink/70">
                  {domain.description}
                </p>
                <div className="mt-8">
                  <Link
                    href={domain.link}
                    className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-teal-ink"
                  >
                    <span className="link-underline">{domain.linkLabel}</span>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
