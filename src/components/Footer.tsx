import Link from "next/link";

const domainLinks = [
  { label: "Enterprise AI Deployment", href: "/domains/enterprise-ai-deployment" },
  { label: "Life Sciences & Healthcare", href: "/domains/life-sciences-healthcare" },
  { label: "Private Equity & Portfolio Value Creation", href: "/domains/private-equity-portfolio-value-creation" },
  { label: "Case Studies", href: "/case-studies" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact-us" },
];

const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink/8 bg-cream py-16">
      <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          {/* Logo + description */}
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 32 32"
                fill="none"
                className="text-deep-teal"
              >
                <path
                  d="M2 26C2 26 8 26 12 18C16 10 20 6 30 6"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
              <span className="font-display text-base font-bold tracking-tight text-ink">
                Sigmoidal
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-ink/60">
              Sigmoidal builds and operates AI systems for enterprise, life
              sciences, and private equity.
            </p>
            <a
              href="mailto:hi@sigmoidal.io"
              className="mt-3 inline-block text-sm font-medium text-teal-ink transition-colors hover:text-teal"
            >
              hi@sigmoidal.io
            </a>
          </div>

          {/* Link columns */}
          <div className="flex flex-wrap gap-x-16 gap-y-8">
            {/* Domain links */}
            <nav className="flex flex-col gap-3">
              {domainLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-ink/60 transition-colors hover:text-ink"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Company links */}
            <nav className="flex flex-col gap-3">
              <p className="text-xs font-medium uppercase tracking-wider text-slate">
                Company
              </p>
              {companyLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-ink/60 transition-colors hover:text-ink"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-ink/8 pt-8">
          <p className="text-xs text-ink/40">
            &copy; 2016-{new Date().getFullYear()} Sigmoidal. All rights
            reserved.
          </p>
          <nav className="flex gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-ink/40 transition-colors hover:text-ink/70"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
