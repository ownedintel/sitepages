import { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Sigmoidal | Production AI Since 2016",
  description: "Sigmoidal is an AI consulting and engineering firm founded in 2016. We embed senior teams inside enterprises, life sciences organizations, and private equity firms.",
};

const principles = [
  { title: "The system must run without us.", description: "A demo is a hypothesis; a system carrying live decisions is a result." },
  { title: "Own the outcome.", description: "We commit to the number, not to the effort." },
  { title: "Senior people only.", description: "The engineers in the first meeting are the engineers who write the code." },
  { title: "Measured in client numbers.", description: "Success is your metric, in your reporting, verified by your finance team." },
  { title: "Say no early.", description: "If we cannot see the number moving, we say so before the engagement scales." },
];

const methods = [
  {
    step: "Assess",
    description: "We start with the P&L, not the data lake. In two weeks, we identify where AI moves a real financial or operational number, size the effect, and kill the ideas that will not survive production. The output is a ranked plan with owners, dependencies, and an expected value on every line.",
  },
  {
    step: "Build",
    description: "An engagement lead, three to five senior engineers, and a domain specialist embed with your team and ship to production. We build to production standards from the first commit: versioned data, evaluation harnesses, audit trails, security review. A working system is in front of users by week six.",
  },
  {
    step: "Operate",
    description: "Shipping is the midpoint. We run the system, measure it against the number we committed to, and harden it against drift, edge cases, and scale. Then we transfer it: documentation, runbooks, and your engineers trained to own it.",
  },
];

export default function AboutPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="About Sigmoidal"
        title="We build AI that has to work"
        description="Sigmoidal is an AI consulting and engineering firm founded in 2016, years before the LLM wave made AI a board agenda item. We embed senior teams inside enterprises, life sciences organizations, and private equity firms, and we stay until the system proves itself in the operating numbers."
      />

      {/* The short version */}
      <section className="border-t border-ink/8 py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
          <div className="reveal">
            <p className="flex items-baseline gap-3 text-eyebrow font-medium uppercase text-teal-ink">
              <span aria-hidden className="h-px w-6 shrink-0 translate-y-[calc(0.5px-0.365em)] bg-teal" />
              The short version
            </p>
            <p className="mt-8 max-w-[62ch] text-[1.0625rem] leading-[1.7] text-ink/80">
              Sigmoidal opened in 2016 building machine learning systems for clients who needed them to run, not to demo well. The early engagements set the pattern that still defines the firm: a small senior team, embedded with the client, accountable for a production system and the number it moves.
            </p>
            <p className="mt-6 max-w-[62ch] text-[1.0625rem] leading-[1.7] text-ink/80">
              The technology underneath has changed several times since: computer vision, classical ML, NLP, and now LLM-based systems. The standard has not. Over time the work concentrated in three domains, because clients in those fields kept asking us back: Enterprise AI Deployment, Life Sciences &amp; Healthcare, and Private Equity &amp; Portfolio Value Creation. The life sciences work includes Novartis, where we built predictive analytics for drug sales.
            </p>
          </div>
        </div>
      </section>

      {/* Method */}
      <section className="bg-beige py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
          <div className="reveal">
            <p className="flex items-baseline gap-3 text-eyebrow font-medium uppercase text-teal-ink">
              <span aria-hidden className="h-px w-6 shrink-0 translate-y-[calc(0.5px-0.365em)] bg-teal" />
              Method
            </p>
            <h2 className="font-display text-h2 text-ink mt-5 max-w-[22ch]">Assess. Build. Operate.</h2>
            <p className="mt-4 text-[0.95rem] text-ink/60">Three phases, one accountable team, a number attached to each.</p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {methods.map((m, i) => (
              <div key={m.step} className={`reveal reveal-delay-${i + 1}`}>
                <div className="flex h-full flex-col border border-ink/10 bg-paper p-8">
                  <p className="font-display text-[2.6rem] leading-none tracking-tight text-teal">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="font-display text-h3 text-ink mt-5">{m.step}</h3>
                  <p className="mt-4 text-[0.95rem] leading-relaxed text-ink/70">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
          <div className="reveal">
            <p className="flex items-baseline gap-3 text-eyebrow font-medium uppercase text-teal-ink">
              <span aria-hidden className="h-px w-6 shrink-0 translate-y-[calc(0.5px-0.365em)] bg-teal" />
              Principles
            </p>
            <h2 className="font-display text-h2 text-ink mt-5 max-w-[22ch]">How we decide</h2>
          </div>

          <div className="mt-16 space-y-6">
            {principles.map((p, i) => (
              <div key={i} className={`reveal reveal-delay-${Math.min(i + 1, 4)} flex flex-col gap-2 border-l-2 border-teal/30 pl-8 py-4`}>
                <h3 className="font-display text-h3 text-ink">{p.title}</h3>
                <p className="text-[0.95rem] leading-relaxed text-ink/70">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The team */}
      <section className="border-t border-ink/8 bg-beige py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
          <div className="reveal">
            <p className="flex items-baseline gap-3 text-eyebrow font-medium uppercase text-teal-ink">
              <span aria-hidden className="h-px w-6 shrink-0 translate-y-[calc(0.5px-0.365em)] bg-teal" />
              The team
            </p>
            <h2 className="font-display text-h2 text-ink mt-5 max-w-[22ch]">The bench</h2>
            <p className="mt-6 max-w-[62ch] text-[1.0625rem] leading-[1.7] text-ink/80">
              Sigmoidal stays deliberately small: around forty people, most of them engineers, all of them expected to understand the number a system has to move, not just the code that moves it. The team includes alumni of Jane Street, Mozilla, Intel, and Capgemini; PhDs in machine learning and computational biology where the problem calls for one; and engineers who have shipped under GxP and financial-services scrutiny. Median engineering tenure is over seven years. There is no pyramid of juniors behind a partner&apos;s business card.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 reveal reveal-delay-1">
            <div className="border border-ink/10 bg-paper p-8">
              <p className="font-display text-[2.6rem] leading-none tracking-tight text-teal">~40</p>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-ink/70">People, most of them engineers</p>
            </div>
            <div className="border border-ink/10 bg-paper p-8">
              <p className="font-display text-[2.6rem] leading-none tracking-tight text-teal">7+</p>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-ink/70">Years median engineering tenure</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
          <div className="reveal">
            <p className="flex items-baseline gap-3 text-eyebrow font-medium uppercase text-teal-ink">
              <span aria-hidden className="h-px w-6 shrink-0 translate-y-[calc(0.5px-0.365em)] bg-teal" />
              Security
            </p>
            <h2 className="font-display text-h2 text-ink mt-5 max-w-[22ch]">Trust, in writing</h2>
            <p className="mt-6 max-w-[62ch] text-[1.0625rem] leading-[1.7] text-ink/80">
              Client data stays in client-controlled environments by default, and where models must touch sensitive data, we work inside your cloud tenancy under your access controls. Penetration tests and vendor-risk reviews are routine, and our security lead answers your questionnaire personally.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 reveal reveal-delay-1">
            <div className="flex items-center gap-4 border border-ink/10 bg-paper px-8 py-6">
              <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 shrink-0 text-teal"><path d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" stroke="currentColor" strokeWidth="1.5"/></svg>
              <span className="text-[0.95rem] text-ink/80">Client-controlled environments</span>
            </div>
            <div className="flex items-center gap-4 border border-ink/10 bg-paper px-8 py-6">
              <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 shrink-0 text-teal"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <span className="text-[0.95rem] text-ink/80">Routine penetration tests</span>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Get a straight read"
        description="Bring the problem and the number it touches. We will tell you whether AI moves it, and what we would commit to if it does."
      />
    </PageLayout>
  );
}
