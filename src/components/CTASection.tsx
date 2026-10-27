import Link from "next/link";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
}

export default function CTASection({
  title = "Bring us the problem",
  description = "The first conversation is a working session with a partner who has built these systems. From scoping to production and integration, one senior team carries the entire process, with the same partner involved throughout.",
  buttonLabel = "Speak with a partner",
  buttonHref = "/contact-us",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-deep-teal text-cream">
      {/* Background curves */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <svg
          viewBox="0 0 1440 480"
          fill="none"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <path
            d="M 0 308 C 300 308, 500 58, 720 58 C 940 58, 1140 308, 1440 308"
            stroke="var(--color-cream)"
            strokeWidth="1.2"
            strokeOpacity="0.07"
          />
          <path
            d="M 0 468 C 350 468, 550 148, 720 148 C 890 148, 1090 468, 1440 468"
            stroke="var(--color-cream)"
            strokeWidth="1.2"
            strokeOpacity="0.05"
          />
          <path
            d="M 0 391 C 300 391, 450 97, 720 97 C 990 97, 1190 391, 1440 391"
            stroke="var(--color-cream)"
            strokeWidth="1.4"
            strokeOpacity="0.1"
            className="g-draw"
            style={{ "--len": "1496" } as React.CSSProperties}
          />
        </svg>
      </div>

      <div className="relative mx-auto w-full max-w-[1240px] px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="max-w-2xl reveal">
          <h2 className="font-display text-h2">{title}</h2>
          <p className="mt-6 text-lg leading-relaxed text-cream/70">
            {description}
          </p>
          <div className="mt-10">
            <Link
              href={buttonHref}
              className="group/link inline-flex items-center gap-2 border border-cream/30 px-8 py-4 text-sm font-medium text-cream transition-all duration-300 hover:border-cream hover:bg-cream/10"
            >
              <span>{buttonLabel}</span>
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
    </section>
  );
}
