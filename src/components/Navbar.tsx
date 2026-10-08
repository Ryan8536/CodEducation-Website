"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navLinks, site } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-30 mx-auto w-full max-w-[1376px] px-4 pt-6 sm:px-6">
      <nav className="flex h-16 items-center justify-between rounded-2xl border border-white/[0.07] bg-ink-900/60 px-4 shadow-[0_10px_40px_-20px_rgb(0_0_0/0.6)] backdrop-blur-xl">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="relative size-10 overflow-hidden rounded-full bg-white ring-1 ring-white/20">
            <Image src="/logo.jpg" alt="" fill sizes="40px" className="object-cover" priority />
          </span>
          <span className="text-[19px] font-semibold tracking-[-0.01em] text-white">
            {site.name}
          </span>
        </Link>

        <ul className="hidden items-center gap-[35px] lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[14px] font-medium text-slate-300/90 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end gap-2">
          <a
            href={site.groupMeUrl}
            className="hidden h-[38px] items-center gap-2 rounded-[10px] border border-brand-amber/45 bg-brand-amber/[0.12] px-[14px] text-[14px] font-medium text-brand-cream transition-colors hover:border-brand-amber/70 hover:bg-brand-amber/20 sm:flex"
          >
            <span className="size-1.5 rounded-full bg-brand-amber animate-pulse-dot" />
            Join GroupMe
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-lg text-slate-200 hover:bg-white/5 lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="absolute inset-x-4 top-full mt-2 rounded-2xl border border-white/[0.07] bg-ink-900/95 p-2 backdrop-blur-xl sm:inset-x-6 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-4 py-3 text-[15px] font-medium text-slate-200 hover:bg-white/5"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={site.groupMeUrl}
            className="mt-1 flex items-center gap-2.5 rounded-lg px-4 py-3 text-[15px] font-medium text-brand-cream hover:bg-white/5 sm:hidden"
          >
            <span className="size-1.5 rounded-full bg-brand-amber" />
            Join GroupMe
          </a>
        </div>
      )}
    </header>
  );
}
