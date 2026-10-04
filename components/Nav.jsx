"use client";

import { useState } from "react";
import { navLinks, site } from "@/lib/content";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 bg-ivory/92 backdrop-blur border-b border-line"
      style={{ paddingTop: "var(--safe-top)" }}
    >
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-4 sm:py-5 flex items-center justify-between gap-4">
        <div className="font-mono text-[0.72rem] sm:text-[0.82rem] tracking-wider uppercase text-charcoal shrink-0">
          L—JIST <span className="text-terracotta">·</span>{" "}
          <span className="hidden sm:inline">THE MEGHALAYA ESCAPE</span>
          <span className="sm:hidden">ESCAPE</span>
        </div>

        <nav className="hidden md:flex gap-7 text-[0.86rem]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-charcoal2 border-b border-transparent hover:border-terracotta pb-0.5 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-2.5 sm:gap-4 items-center">
          <a
            href={`tel:+${site.phoneE164}`}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-[0.84rem] font-medium border border-charcoal text-charcoal hover:bg-charcoal hover:text-ivory transition-colors"
          >
            Call
          </a>
          <a
            href="#book"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 text-[0.8rem] sm:text-[0.84rem] font-medium bg-terracotta text-white hover:bg-[#9C4F32] transition-colors"
          >
            Plan Your Stay
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] shrink-0"
          >
            <span
              className={`block h-px w-5 bg-charcoal transition-transform duration-200 ${
                open ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-charcoal transition-transform duration-200 ${
                open ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-line bg-ivory px-5 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 text-[0.98rem] text-charcoal2 border-b border-line last:border-b-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:+${site.phoneE164}`}
            onClick={() => setOpen(false)}
            className="py-3 text-[0.98rem] text-terracotta"
          >
            Call {site.phoneDisplay}
          </a>
        </nav>
      )}
    </header>
  );
}
