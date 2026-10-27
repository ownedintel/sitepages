import { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "72% Less Analyzer Downtime at Fleet Scale | Sigmoidal",
  description: "A global pharmaceutical leader ran its clinical chemistry and immunochemistry analyzers on a break-fix model. We built the telemetry pipeline, the models, and the scheduling logic that turned unplanned failures into planned interventions.",
};

const results = [
  { value: "72%", label: "reduction in unplanned analyzer downtime across the monitored fleet" },
  { value: "1,900 hours", label: "of unplanned analyzer downtime avoided per year across the monitored fleet" },
  { value: "63%", label: "fewer emergency field-engineer dispatches" },
  { value: "5 days", label: "median warning time between model flag and predicted failure" },
];

export default function PredictiveMaintenancePharmaPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-44 lg:pb-20">
        <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
          <nav className="mb-8 flex items-center gap-2 text-sm text-slate reveal">
            <Link href="/" className="transition-colors hover:text-ink">Home</Link>
            <span className="text-ink/30">/</span>
            <Link href="/case-studies" className="transition-colors hover:text-ink">Case Studies</Link>
            <span className="text-ink/30">/</span>
            <span className="text-ink/50">72% Less Analyzer Downtime at Fleet Scale</span>
          </nav>
          <div className="max-w-3xl">
            <p className="flex items-baseline gap-3 text-eyebrow font-medium uppercase text-teal-ink reveal">
              <span aria-hidden className="h-px w-6 shrink-0 translate-y-[calc(0.5px-0.365em)] bg-teal" />
              Case study
            </p>
            <h1 className="font-display text-ink mt-5 reveal reveal-delay-1">
              <span className="block text-[2.6rem] leading-none tracking-[-0.02em] text-teal">72%</span>
              <span className="mt-3 block text-h2">less unplanned analyzer downtime across the monitored fleet</span>
            </h1>
            <p className="mt-8 max-w-[62ch] text-lg leading-relaxed text-ink/70 reveal reveal-delay-2">
              A global pharmaceutical leader ran its clinical chemistry and immunochemistry analyzers on a break-fix model. We built the telemetry pipeline, the models, and the scheduling logic that turned unplanned failures into planned interventions.
            </p>
          </div>
        </div>
      </section>

      {/* Situation */}
      <section className="border-t border-ink/8 py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4 reveal">
              <p className="flex items-baseline gap-3 text-eyebrow font-medium uppercase text-teal-ink">
                <span aria-hidden className="h-px w-6 shrink-0 translate-y-[calc(0.5px-0.365em)] bg-teal" />
                Situation
              </p>
              <h2 className="font-display text-h2 text-ink mt-5">Reactive maintenance on revenue-critical instruments</h2>
            </div>
            <div className="lg:col-span-8 reveal reveal-delay-1 space-y-6">
              <p className="text-[1.0625rem] leading-[1.7] text-ink/80">
                The diagnostics division of a global pharmaceutical leader operates a large fleet of clinical chemistry and immunochemistry analyzers across hospital and reference laboratories. The instruments are workhorses: hundreds of assays a day, tight QC windows, and laboratories that plan their staffing around them.
              </p>
              <p className="text-[1.0625rem] leading-[1.7] text-ink/80">
                Maintenance was reactive. An analyzer failed, the lab logged a service call, and a field engineer was dispatched with whatever parts the error code suggested. Each unplanned outage meant halted assays, samples couriered to other sites, recalibration and QC reruns after the repair, and an emergency dispatch that cost a multiple of a scheduled visit.
              </p>
              <p className="text-[1.0625rem] leading-[1.7] text-ink/80">
                The service organization could see the pattern in its own data. It could not see the failures coming.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The build */}
      <section className="bg-beige py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4 reveal">
              <p className="flex items-baseline gap-3 text-eyebrow font-medium uppercase text-teal-ink">
                <span aria-hidden className="h-px w-6 shrink-0 translate-y-[calc(0.5px-0.365em)] bg-teal" />
                The build
              </p>
              <h2 className="font-display text-h2 text-ink mt-5">What we built</h2>
            </div>
            <div className="lg:col-span-8 reveal reveal-delay-1 space-y-6">
              <p className="text-[1.0625rem] leading-[1.7] text-ink/80">
                We started with the data the instruments were already producing: sensor telemetry, error and event logs, reagent and calibration records, and a decade of service history sitting in the field service system.
              </p>
              <p className="text-[1.0625rem] leading-[1.7] text-ink/80">
                The core is an anomaly detection layer that models normal behavior per instrument and per assay type. Photometer lamp output decays on a curve. Pipettor pressure profiles drift before dispensing errors appear. Temperature excursions in reagent storage precede a specific family of QC failures. The models flag the deviation days before it becomes an error code, and a remaining-useful-life estimate turns the flag into a date.
              </p>
              <p className="text-[1.0625rem] leading-[1.7] text-ink/80">
                On top of that sits intervention scheduling. Predictions are ranked by failure probability, clinical impact, and parts availability, then pushed into the dispatch queue the service organization already uses. An engineer arrives during a planned window with the right part, instead of after a failure with a diagnostic guess.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4 reveal">
              <p className="flex items-baseline gap-3 text-eyebrow font-medium uppercase text-teal-ink">
                <span aria-hidden className="h-px w-6 shrink-0 translate-y-[calc(0.5px-0.365em)] bg-teal" />
                Deployment
              </p>
              <h2 className="font-display text-h2 text-ink mt-5">The deployment reality</h2>
            </div>
            <div className="lg:col-span-8 reveal reveal-delay-1 space-y-6">
              <p className="text-[1.0625rem] leading-[1.7] text-ink/80">
                Production was the hard part, as it usually is. The telemetry pipeline had to be qualified as a data source under the client&apos;s quality system, which meant documented lineage from instrument to model input. Alert thresholds were tuned with the dispatchers, deliberately: a model that cries wolf gets muted within a month, so we launched conservative and widened coverage as precision held.
              </p>
              <p className="text-[1.0625rem] leading-[1.7] text-ink/80">
                We ran a pilot on roughly 10% of the fleet and let the service organization audit every prediction against the actual outcome for a full quarter. Model changes go through the client&apos;s change control process, and retraining runs on an approved schedule with documented performance review.
              </p>
              <p className="text-[1.0625rem] leading-[1.7] text-ink/80">
                The system is owned by the client&apos;s service organization today. Our team transferred operations after twelve months of joint running.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-beige py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
          <div className="reveal">
            <p className="flex items-baseline gap-3 text-eyebrow font-medium uppercase text-teal-ink">
              <span aria-hidden className="h-px w-6 shrink-0 translate-y-[calc(0.5px-0.365em)] bg-teal" />
              Results
            </p>
            <h2 className="font-display text-h2 text-ink mt-5">What it returns</h2>
            <p className="mt-4 text-[0.95rem] text-ink/60">The downtime figure is the client&apos;s own, validated in their annual service review. The remaining metrics are measured by the system itself.</p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {results.map((r, i) => (
              <div key={i} className={`reveal reveal-delay-${Math.min(i + 1, 4)}`}>
                <p className="font-display text-[2.6rem] leading-none tracking-tight text-teal">{r.value}</p>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-ink/70">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl reveal">
            <blockquote className="border-l-2 border-teal/30 pl-8">
              <p className="text-[1.3rem] leading-[1.6] text-ink/85 italic">
                &ldquo;The model earned its credibility in the first month, when it flagged a photometer degradation five days before the instrument threw its first error code. Our dispatchers stopped debating the queue and started planning around it.&rdquo;
              </p>
              <footer className="mt-6 text-sm text-slate">
                Head of Global Service Operations, diagnostics division of a global pharmaceutical leader (name withheld)
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Back to case studies */}
      <section className="border-t border-ink/8 py-12">
        <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
          <Link href="/case-studies" className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-teal-ink">
            <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 rotate-180 transition-transform duration-300 group-hover/link:-translate-x-1">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="link-underline">All case studies</span>
          </Link>
        </div>
      </section>

      <CTASection
        title="Start with the fleet you have"
        description="The engineers who built this system still work at Sigmoidal. If your instruments produce telemetry and your maintenance is still reactive, the economics above are worth a working session."
      />
    </PageLayout>
  );
}
