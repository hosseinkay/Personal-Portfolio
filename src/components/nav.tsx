"use client";

import Link from "next/link";
import { useState } from "react";
import { nav, site } from "@/content";
import { ThemeToggle } from "@/components/theme-toggle";
import { withBasePath } from "@/lib/utils";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="font-display text-lg tracking-tight text-fg">
          Hossein Khoshhal
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-fg-muted transition-colors hover:text-accent"
            >
              <span className="mr-1.5 text-accent">{item.index}</span>
              {item.label}
            </a>
          ))}
          <a
            href={withBasePath(site.resumeUrl)}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-fg-muted transition-colors hover:text-accent"
          >
            Résumé
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle className="hidden sm:inline-flex" />
          <a
            href="#contact"
            className="hidden rounded-full bg-accent px-4 py-2 text-sm font-medium text-bg transition-opacity hover:opacity-90 sm:inline-block"
          >
            Get in touch
          </a>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-fg md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6l-12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border px-6 py-4 md:hidden" aria-label="Primary mobile">
          <ul className="flex flex-col gap-4">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-fg-muted transition-colors hover:text-accent"
                  onClick={() => setOpen(false)}
                >
                  <span className="mr-1.5 text-accent">{item.index}</span>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href={withBasePath(site.resumeUrl)} target="_blank" rel="noreferrer" className="text-sm text-fg-muted hover:text-accent">
                Résumé
              </a>
            </li>
            <li className="flex items-center justify-between pt-2">
              <a
                href="#contact"
                className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-bg"
                onClick={() => setOpen(false)}
              >
                Get in touch
              </a>
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
