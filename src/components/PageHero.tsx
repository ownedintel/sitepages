import Link from "next/link";

interface Breadcrumb {
  label: string;
  href: string;
}

interface PageHeroProps {
  breadcrumbs?: Breadcrumb[];
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  description?: string;
  maxWidth?: string;
}

export default function PageHero({
  breadcrumbs,
  eyebrow,
  title,
  titleAccent,
  description,
  maxWidth = "max-w-3xl",
}: PageHeroProps) {
  return (
    <section className="pt-32 pb-16 lg:pt-44 lg:pb-20">
      <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-8 flex items-center gap-2 text-sm text-slate reveal">
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.href} className="flex items-center gap-2">
                {i > 0 && <span className="text-ink/30">/</span>}
                <Link
                  href={crumb.href}
                  className="transition-colors hover:text-ink"
                >
                  {crumb.label}
                </Link>
              </span>
            ))}
          </nav>
        )}

        <div className={maxWidth}>
          {eyebrow && (
            <p className="flex items-baseline gap-3 text-eyebrow font-medium uppercase text-teal-ink reveal">
              <span
                aria-hidden
                className="h-px w-6 shrink-0 translate-y-[calc(0.5px-0.365em)] bg-teal"
              />
              {eyebrow}
            </p>
          )}
          <h1 className="font-display text-h1 text-ink mt-5 reveal reveal-delay-1">
            {title}
            {titleAccent && (
              <>
                <br />
                <span className="text-teal">{titleAccent}</span>
              </>
            )}
          </h1>
          {description && (
            <p className="mt-8 max-w-[62ch] text-lg leading-relaxed text-ink/70 reveal reveal-delay-2">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
