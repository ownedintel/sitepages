"use client";

import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

const tabs = [
  { id: "schedule", label: "Schedule a Consultation" },
  { id: "email", label: "Send an Email" },
] as const;

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<"schedule" | "email">("schedule");

  return (
    <PageLayout>
      <PageHero
        eyebrow="Contact"
        title="Schedule a Consultation"
        description="Wondering where AI fits in your roadmap? Book a 30-minute call, and we'll sketch a strategy tailored to your business."
      />

      <section className="pb-20 lg:pb-28">
        <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
          {/* Tab toggles */}
          <div className="flex gap-4 reveal">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`border px-6 py-3 text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "border-teal bg-deep-teal text-cream"
                    : "border-ink/10 bg-paper text-ink/70 hover:border-teal/40 hover:text-ink"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="mt-10 reveal reveal-delay-1">
            {activeTab === "schedule" ? (
              <div className="flex min-h-[60vh] items-center justify-center border border-ink/10 bg-paper" aria-label="Calendly scheduling widget">
                <div className="text-center">
                  <svg viewBox="0 0 24 24" fill="none" className="mx-auto h-16 w-16 text-teal/30">
                    <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <p className="mt-6 text-sm text-slate">Loading scheduler&hellip;</p>
                </div>
              </div>
            ) : (
              <div className="flex min-h-[40vh] flex-col items-center justify-center border border-ink/10 bg-paper p-12">
                <svg viewBox="0 0 24 24" fill="none" className="h-16 w-16 text-teal/30">
                  <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M2 7l10 7 10-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <a
                  href="mailto:hi@sigmoidal.io"
                  className="mt-6 text-xl font-medium text-teal-ink transition-colors hover:text-teal"
                >
                  hi@sigmoidal.io
                </a>
                <p className="mt-3 text-sm text-slate">
                  We typically respond within one business day.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
