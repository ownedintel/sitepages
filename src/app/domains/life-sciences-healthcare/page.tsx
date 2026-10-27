import { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "AI Consulting for Life Sciences & Healthcare | Sigmoidal",
  description: "Since 2016, Sigmoidal has built AI systems for pharmaceutical manufacturers, diagnostics networks, and healthcare payers.",
};

const capabilities = [
  { title: "Predictive maintenance for laboratory instruments", desc: "An unplanned analyzer outage backs up the worklist, breaks turnaround-time commitments, and forces QC reruns. We model instrument telemetry and service histories to catch degradation before the error code, then schedule the fix inside a planned maintenance window. At a global pharmaceutical leader: 72% less unplanned analyzer downtime across the monitored fleet." },
  { title: "Drug sales and pharmaceutical demand forecasting", desc: "Launch curves, formulary shifts, and seasonality make drug demand a hard read; forecast error lands in production volumes, launch inventory, and territory targets. For Novartis, we built predictive analytics for drug sales: forecasting models the commercial organization could interrogate, not a black box." },
  { title: "Clinical intelligence and knowledge systems", desc: "Every senior scientist who retires takes thirty years of study reports, regulatory correspondence, and unwritten context with them. We build retrieval and reasoning systems over your controlled documents, every answer cited to source page and document version: the traceability your quality team asks about first." },
  { title: "Healthcare claims fraud detection", desc: "Fraud, waste, and abuse hide in the long tail of billing codes, where static rules engines fell behind a decade ago. We score claims against provider peer groups and longitudinal patient patterns, tuned for investigator trust: a queue analysts routinely override gets ignored. We defend precision, not headline recall." },
  { title: "Real-world data and evidence workflows", desc: "Claims extracts, EHR exports, and registry files were never designed to agree. We build the linkage, cleaning, and documentation pipelines that turn them into submission-grade real-world evidence, every derivation recorded, with lineage a biostatistician can defend line by line." },
  { title: "ML operations inside the GxP boundary", desc: "A model under GxP is a controlled system: versioned, monitored, change-managed. We build MLOps where the audit trail is a byproduct of normal operation, with risk assessments and validation deliverables your computer system validation team files as-is. Retraining follows change control on a schedule the quality unit approved." },
];

const stats = [
  { value: "72%", label: "less unplanned analyzer downtime across the monitored fleet", link: "/case-studies/predictive-maintenance-pharma" },
  { value: "63%", label: "fewer emergency field-engineer dispatches" },
  { value: "5 days", label: "median warning time between model flag and predicted failure" },
];

export default function LifeSciencesPage() {
  return (
    <PageLayout>
      <section className="pt-32 pb-16 lg:pt-44 lg:pb-20">
        <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
          <nav className="mb-8 flex items-center gap-2 text-sm text-slate reveal">
            <Link href="/" className="transition-colors hover:text-ink">Home</Link>
          </nav>
          <div className="max-w-3xl">
            <h1 className="font-display text-h1 text-ink reveal">AI for life sciences, built to pass validation</h1>
            <p className="mt-8 max-w-[62ch] text-lg leading-relaxed text-ink/70 reveal reveal-delay-1">
              Your data is regulated, your instruments are qualified, and your quality organization has veto power over anything that touches production. We consider that a reasonable arrangement.
            </p>
            <p className="mt-6 max-w-[62ch] text-[1.0625rem] leading-[1.7] text-ink/70 reveal reveal-delay-2">
              Since 2016, Sigmoidal has built AI systems for pharmaceutical manufacturers, diagnostics networks, and healthcare payers. For Novartis, that meant predictive analytics for drug sales; for the diagnostics division of a global pharmaceutical leader, predictive maintenance that now sets the service calendar. Anything we build inside the GxP boundary is engineered from the first design review to satisfy the people who sign the validation protocols.
            </p>
          </div>
        </div>
      </section>

      {/* Why regulated environments */}
      <section className="border-t border-ink/8 py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl reveal">
            <h2 className="font-display text-h2 text-ink">Regulated environments reward engineering discipline</h2>
            <p className="mt-6 text-[1.0625rem] leading-[1.7] text-ink/80">
              Most AI vendors discover GxP the week before go-live. Their pilots work; their production deployments die in change control. We staff teams that have written validation documentation, sat through supplier audits, and defended model behavior to quality assurance. The result is a shorter path to production, because nothing has to be rebuilt to pass review.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-beige py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
          <div className="reveal">
            <p className="flex items-baseline gap-3 text-eyebrow font-medium uppercase text-teal-ink">
              <span aria-hidden className="h-px w-6 shrink-0 translate-y-[calc(0.5px-0.365em)] bg-teal" />
              Capabilities
            </p>
            <h2 className="font-display text-h2 text-ink mt-5">What we build</h2>
            <p className="mt-4 text-[0.95rem] text-ink/60">Six system families, engineered for an industry where every number is examined before anyone acts on it.</p>
          </div>
          <div className="mt-16 space-y-8">
            {capabilities.map((cap, i) => (
              <div key={i} className={`reveal reveal-delay-${Math.min(i + 1, 4)} border border-ink/10 bg-paper p-8`}>
                <h3 className="font-display text-h3 text-ink">{cap.title}</h3>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-ink/70">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
          <div className="reveal">
            <p className="flex items-baseline gap-3 text-eyebrow font-medium uppercase text-teal-ink">
              <span aria-hidden className="h-px w-6 shrink-0 translate-y-[calc(0.5px-0.365em)] bg-teal" />
              Proof
            </p>
            <h2 className="font-display text-h2 text-ink mt-5">Measured in production</h2>
            <p className="mt-4 max-w-[62ch] text-[0.95rem] text-ink/60">All three figures come from one fleet-scale program in daily use. The downtime figure is the client&apos;s own, validated in their annual service review.</p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {stats.map((s, i) => (
              <div key={i} className={`reveal reveal-delay-${Math.min(i + 1, 3)}`}>
                <p className="font-display text-[2.6rem] leading-none tracking-tight text-teal">{s.value}</p>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-ink/70">{s.label}</p>
                {s.link && (
                  <Link href={s.link} className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-teal-ink">
                    Case study
                    <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client story */}
      <section className="bg-beige py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
          <div className="reveal">
            <p className="flex items-baseline gap-3 text-eyebrow font-medium uppercase text-teal-ink">
              <span aria-hidden className="h-px w-6 shrink-0 translate-y-[calc(0.5px-0.365em)] bg-teal" />
              Client story
            </p>
            <h2 className="font-display text-h2 text-ink mt-5">A global pharmaceutical leader retires break-fix maintenance</h2>
          </div>
          <div className="mt-8 max-w-[62ch] space-y-6 reveal reveal-delay-1">
            <p className="text-[1.0625rem] leading-[1.7] text-ink/80">
              The diagnostics division of a global pharmaceutical leader ran a large fleet of clinical chemistry and immunochemistry analyzers on a reactive service model: the instrument failed, the lab called, a field engineer was dispatched. Every failure meant halted assays, samples couriered to other sites, and QC reruns after the repair.
            </p>
            <p className="text-[1.0625rem] leading-[1.7] text-ink/80">
              We embedded a team alongside their service organization, built anomaly detection on instrument telemetry, and connected predictions to the dispatch and parts systems the engineers already used. Failures that used to surface as error codes now surface as scheduled interventions.
            </p>
            <p className="text-[1.0625rem] leading-[1.7] text-ink/80">
              The program delivered 72% less unplanned analyzer downtime across the monitored fleet and changed how the service organization plans its week.
            </p>
            <Link href="/case-studies/predictive-maintenance-pharma" className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-teal-ink">
              <span className="link-underline">Read the case study</span>
              <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Engagement model */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
          <div className="reveal">
            <p className="flex items-baseline gap-3 text-eyebrow font-medium uppercase text-teal-ink">
              <span aria-hidden className="h-px w-6 shrink-0 translate-y-[calc(0.5px-0.365em)] bg-teal" />
              Engagement model
            </p>
            <h2 className="font-display text-h2 text-ink mt-5">Embedded teams that respect the quality system</h2>
          </div>
          <div className="mt-8 max-w-[62ch] space-y-6 reveal reveal-delay-1">
            <p className="text-[1.0625rem] leading-[1.7] text-ink/80">
              We deploy small senior teams into your environment: an engagement lead, three to five senior engineers, and a domain specialist who has worked inside pharmaceutical quality, clinical operations, or commercial analytics. They read your SOPs before they write code, work inside your change control, and produce the validation documentation alongside the software.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3 text-[0.95rem] text-ink/70">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                A delivery process that has passed client supplier audits.
              </li>
              <li className="flex items-start gap-3 text-[0.95rem] text-ink/70">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                Validation and change-control documentation delivered alongside the code.
              </li>
              <li className="flex items-start gap-3 text-[0.95rem] text-ink/70">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                Structured knowledge transfer, so your organization can operate and retrain the system independently.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CTASection
        title="Bring us a system that has to pass review"
        description="The first conversation is a working session with the engineers who would do the work. Bring the instrument fleet, the document corpus, the sales forecast, or the claims feed you have been circling for a year. We will tell you what is buildable, what it will cost, and what the validation path looks like."
      />
    </PageLayout>
  );
}
