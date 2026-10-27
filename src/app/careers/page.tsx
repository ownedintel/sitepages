import { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Careers | Sigmoidal",
  description: "Join the Sigmoidal team. We were building AI systems before it had a name, on systems that move billions.",
};

export default function CareersPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Careers"
        title="Become the engineer of the next era"
        description="Software 1.0 wrote code. 2.0 trained models. 3.0 ships products in plain English. We were building this way before it had a name, on systems that move billions, with a team obsessed with how fast you grow."
      />

      <section className="pb-20 lg:pb-28">
        <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
          <div className="reveal">
            <p className="flex items-baseline gap-3 text-eyebrow font-medium uppercase text-teal-ink">
              <span aria-hidden className="h-px w-6 shrink-0 translate-y-[calc(0.5px-0.365em)] bg-teal" />
              Open roles
            </p>
            <h2 className="font-display text-h2 text-ink mt-5">No open roles right now</h2>
            <p className="mt-4 max-w-[52ch] text-[0.95rem] leading-relaxed text-ink/70">
              We are between searches at the moment. Roles go live here the moment they open, so check back soon.
            </p>
          </div>

          <div className="mt-16 flex min-h-[300px] items-center justify-center border border-dashed border-ink/15 bg-beige/50 reveal reveal-delay-1">
            <div className="text-center px-8">
              <svg viewBox="0 0 24 24" fill="none" className="mx-auto h-12 w-12 text-teal/25">
                <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <p className="mt-4 text-sm text-slate">No positions listed</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
