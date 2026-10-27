import Link from "next/link";
import IsometricGrid from "./IsometricGrid";

const domainLinks = [
  { label: "Enterprise AI Deployment", href: "/domains/enterprise-ai-deployment" },
  { label: "Life Sciences & Healthcare", href: "/domains/life-sciences-healthcare" },
  { label: "Private Equity", href: "/domains/private-equity-portfolio-value-creation" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Desktop canvas – behind text, full bleed */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <IsometricGrid className="h-full w-full" />
        {/* Gradient fade so left-side text stays readable */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, var(--color-cream) 6%, rgba(250,248,244,0.8) 32%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
        <div className="flex max-w-3xl flex-col justify-center py-20 lg:min-h-[90vh] lg:py-28">
          <h1 className="font-display text-h1 text-ink mt-8 reveal">
            <span className="block lg:whitespace-nowrap">AI systems compounding</span>
            <span className="bg-deep-teal text-cream mt-2 inline-block px-4 py-1">
              enterprise value
            </span>
          </h1>
          <p className="mt-8 max-w-[56ch] text-lg leading-relaxed text-ink/70 reveal reveal-delay-1">
            Since 2016, Sigmoidal has been embedding dedicated teams and
            deploying purpose-built enterprise AI products inside the
            world&apos;s most demanding organizations: clinical intelligence
            systems for life sciences leaders, deal flow and portfolio analytics
            for PE firms, and operational AI for Fortune 500 enterprises. We own
            the problem, own the delivery, and own the outcome.
          </p>
          <div className="mt-10 reveal reveal-delay-2">
            <Link
              href="/case-studies"
              className="group/link inline-flex items-center gap-2 text-sm font-medium text-ink"
            >
              <span className="link-underline">See our work</span>
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

          {/* Mobile canvas – shown below text */}
          <div
            aria-hidden
            className="pointer-events-none relative mt-6 h-[300px] sm:h-[380px] lg:hidden"
          >
            <IsometricGrid className="h-full w-full" />
          </div>

          {/* Domain links */}
          <ul className="reveal mt-16 flex flex-wrap gap-x-6 gap-y-2 border-t border-ink/10 pt-6 text-sm text-slate reveal-delay-3">
            {domainLinks.map((link, i) => (
              <li key={link.href} className="flex items-center gap-6">
                {i > 0 && (
                  <span
                    aria-hidden
                    className="hidden h-1 w-1 bg-slate/50 sm:block"
                  />
                )}
                <Link
                  href={link.href}
                  className="transition-colors hover:text-deep-teal"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
