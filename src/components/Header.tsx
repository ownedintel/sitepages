"use client";

import { useState } from "react";
import Link from "next/link";

const domainLinks = [
  { label: "Enterprise AI Deployment", href: "/domains/enterprise-ai-deployment" },
  { label: "Life Sciences & Healthcare", href: "/domains/life-sciences-healthcare" },
  { label: "Private Equity & Portfolio Value Creation", href: "/domains/private-equity-portfolio-value-creation" },
];

const navLinks = [
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog/all" },
  { label: "About", href: "/about" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [domainsOpen, setDomainsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-ink/5 bg-cream/95 backdrop-blur-md">
      {/* Skip to content */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-deep-teal focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-cream"
      >
        Skip to content
      </a>

      <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <svg
            width="28"
            height="28"
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
          <span className="font-display text-lg font-bold tracking-tight text-ink">
            Sigmoidal
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {/* Domains dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDomainsOpen(true)}
            onMouseLeave={() => setDomainsOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-ink/70 transition-colors hover:text-ink">
              Domains
              <svg
                viewBox="0 0 16 16"
                fill="none"
                className={`h-3.5 w-3.5 transition-transform duration-200 ${domainsOpen ? "rotate-180" : ""}`}
              >
                <path
                  d="M4 6l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {domainsOpen && (
              <div className="absolute left-0 top-full pt-3">
                <div className="w-[21rem] border border-ink/10 bg-paper p-2 shadow-[0_18px_50px_-24px_rgba(12,60,60,0.35)]">
                  {domainLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-3 text-sm text-ink/70 transition-colors hover:bg-beige hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-ink/70 transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center lg:hidden"
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            {open ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="border-t border-ink/5 bg-cream px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-4">
            <p className="text-xs font-medium uppercase tracking-wider text-slate">Domains</p>
            {domainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="pl-3 text-sm font-medium text-ink/70 transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
            <div className="my-2 h-px bg-ink/5" />
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-ink/70 transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
