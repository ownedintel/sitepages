export default function Stats() {
  return (
    <section className="border-t border-ink/8 bg-beige py-20 lg:py-28">
      <div className="mx-auto w-full max-w-container px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <div className="reveal">
          <p className="flex items-baseline gap-3 text-eyebrow font-medium uppercase text-teal-ink">
            <span
              aria-hidden
              className="h-px w-6 shrink-0 translate-y-[calc(0.5px-0.365em)] bg-teal"
            />
            The record
          </p>
          <h2 className="font-display text-h2 text-ink mt-5 max-w-[22ch]">
            Measured by our clients
          </h2>
          <p className="mt-4 text-[0.95rem] text-ink/60">
            Each figure comes from the client&apos;s own operating reports.
          </p>
        </div>

        {/* Stats grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            value="Since 2016"
            description="Systems in daily use at global institutions"
            delay={1}
          />
          <StatCard
            value="32,000+"
            description="Historical deals one diligence system learned from, matching blind partner review 97% of the time"
            link="#"
            linkLabel="Case study"
            delay={2}
          />
          <StatCard
            value="72%"
            description="Less unplanned analyzer downtime across the monitored fleet"
            link="#"
            linkLabel="Case study"
            delay={3}
          />
          <StatCard
            value="80%"
            description="Of portfolio financial consolidation automated"
            link="#"
            linkLabel="Case study"
            delay={4}
          />
        </div>
      </div>
    </section>
  );
}

function StatCard({
  value,
  description,
  link,
  linkLabel,
  delay,
}: {
  value: string;
  description: string;
  link?: string;
  linkLabel?: string;
  delay: number;
}) {
  return (
    <div className={`reveal reveal-delay-${delay}`}>
      <p className="font-display text-[2.6rem] leading-none tracking-tight text-teal">
        {value}
      </p>
      <p className="mt-4 text-[0.95rem] leading-relaxed text-ink/70">
        {description}
      </p>
      {link && linkLabel && (
        <a
          href={link}
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-teal-ink transition-colors hover:text-teal"
        >
          <span>{linkLabel}</span>
          <svg
            viewBox="0 0 16 16"
            fill="none"
            className="h-3.5 w-3.5"
          >
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      )}
    </div>
  );
}
