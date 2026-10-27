import Link from "next/link";

const featuredPost = {
  category: "Generative AI",
  title:
    "Explore the Horizon of Possibilities: Access the Comprehensive Report on Current Market Applications of Generative AI",
  date: "Jan 2024",
  readTime: "4 min read",
  href: "#",
};

const posts = [
  {
    category: "Generative AI",
    title: "GenAI Risks Your Business Can't Afford to Roll the Dice On",
    href: "#",
  },
  {
    category: "Ethical AI",
    title:
      "Don't let 81% of enterprise companies outrun yours with an internal generative AI team",
    href: "#",
  },
  {
    category: "AI Strategy",
    title: "Five Ways Businesses Are Using AI to Their Advantage",
    href: "#",
  },
];

export default function Blog() {
  return (
    <section
      id="blog"
      className="border-t border-ink/8 py-20 lg:py-28"
    >
      <div className="mx-auto w-full max-w-container px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <div className="flex flex-wrap items-end justify-between gap-6 reveal">
          <div>
            <p className="flex items-baseline gap-3 text-eyebrow font-medium uppercase text-teal-ink">
              <span
                aria-hidden
                className="h-px w-6 shrink-0 translate-y-[calc(0.5px-0.365em)] bg-teal"
              />
              Perspectives
            </p>
            <h2 className="font-display text-h2 text-ink mt-5 max-w-[24ch]">
              Recent thinking
            </h2>
          </div>
          <Link
            href="#"
            className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-teal-ink"
          >
            <span className="link-underline">Read the blog</span>
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

        {/* Blog grid */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Featured post */}
          <Link
            href={featuredPost.href}
            className="reveal reveal-delay-1 group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-ink/10 bg-paper transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-[0_24px_60px_-32px_rgba(10,60,60,0.2)]"
          >
            {/* Placeholder image */}
            <div>
              <div className="aspect-[16/9] overflow-hidden bg-beige">
                <div className="flex h-full w-full items-center justify-center">
                  <svg
                    viewBox="0 0 200 120"
                    fill="none"
                    className="h-2/3 w-2/3 opacity-30"
                  >
                    <rect
                      x="40"
                      y="20"
                      width="120"
                      height="80"
                      rx="8"
                      stroke="var(--color-teal)"
                      strokeWidth="1"
                    />
                    <circle cx="75" cy="50" r="12" fill="var(--color-teal)" fillOpacity="0.2" />
                    <path
                      d="M50 85 L80 60 L110 75 L150 40"
                      stroke="var(--color-teal)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="px-8 pt-7 lg:px-10">
                <div className="flex items-center gap-3">
                  <span className="inline-flex w-fit items-center rounded-full bg-cream px-3 py-1 text-xs font-medium text-deep-teal ring-1 ring-teal/20 ring-inset">
                    {featuredPost.category}
                  </span>
                  <span className="text-xs text-slate">Featured</span>
                </div>
                <h3 className="font-display text-h3 text-ink mt-5">
                  {featuredPost.title}
                </h3>
              </div>
            </div>
            <div className="mt-8 flex items-center justify-between px-8 pb-8 lg:px-10 lg:pb-10">
              <span className="text-sm text-slate">
                {featuredPost.date} &middot; {featuredPost.readTime}
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-ink">
                <span className="link-underline">Read</span>
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
          </Link>

          {/* Post list */}
          <div className="reveal reveal-delay-2 flex h-full flex-col rounded-2xl border border-ink/10 bg-paper/60 px-8 py-2">
            {posts.map((post, i) => (
              <Link
                key={i}
                href={post.href}
                className={`group/link flex flex-1 items-center gap-5 border-t border-ink/10 py-8 transition-colors first:border-t-0 hover:border-teal/40`}
              >
                <div className="flex-1">
                  <span className="inline-flex w-fit items-center rounded-full bg-cream px-3 py-1 text-xs font-medium text-deep-teal ring-1 ring-teal/20 ring-inset">
                    {post.category}
                  </span>
                  <h3 className="mt-3 font-display text-[1.1rem] leading-snug text-ink transition-colors group-hover/link:text-teal-ink">
                    {post.title}
                  </h3>
                </div>
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  className="h-4 w-4 shrink-0 text-teal-ink transition-transform duration-300 group-hover/link:translate-x-1"
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
