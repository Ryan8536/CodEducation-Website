import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { site } from "@/lib/site";
import CodeCard, { tone, type Line } from "./CodeCard";
import PointerGlow from "./PointerGlow";

const jsLines: Line[] = [
  [["async function ", tone.kw], ["learn"], ["() {", tone.punct]],
  [["  const ", tone.kw], ["idea"], [" = ", tone.punct]],
  [["    await ", tone.kw], ["build"], ["(", tone.punct], ["together", tone.muted], [");", tone.punct]],
  [["  return ", tone.kw], ["success", tone.value], [";", tone.punct]],
  [["}", tone.punct]],
];

const pyLines: Line[] = [
  [["class ", tone.kw], ["Member"], ["(Club):", tone.punct]],
  [["  def ", tone.kw], ["grow"], ["(self):", tone.punct]],
  [["    self", tone.kw], ["."], ["skills"], [" += ", tone.punct], ["1", tone.value]],
  [["    self", tone.kw], [".ship"], ["()", tone.punct]],
];

const shLines: Line[] = [
  [["$ ", tone.ok], ["git clone "], ["edu/learn", tone.value]],
  [["$ ", tone.ok], ["npm install "], ["wisdom", tone.punct]],
  [["> ", tone.muted], ["✓ Ready to build", tone.ok]],
];

const cssLines: Line[] = [
  [[".community", tone.kw], [" {", tone.punct]],
  [["  display", tone.prop], [": ", tone.punct], ["together", tone.value], [";", tone.punct]],
  [["  gap", tone.prop], [": ", tone.punct], ["infinite", tone.value], [";", tone.punct]],
  [["}", tone.punct]],
];

/**
 * Positions a decorative element on the 1440px design canvas, adds a little
 * cursor parallax (depth) and the idle float (duration / delay).
 */
function Floating({
  x,
  y,
  depth,
  duration,
  delay,
  children,
}: {
  x: number;
  y: number;
  depth: number;
  duration: number;
  delay: number;
  children: ReactNode;
}) {
  return (
    <div
      className="absolute will-change-transform"
      style={{
        left: x,
        top: y,
        transform: `translate3d(calc(var(--px, 0) * ${depth}px), calc(var(--py, 0) * ${depth}px), 0)`,
      }}
    >
      <div
        className="animate-float"
        style={{ animationDuration: `${duration}s`, animationDelay: `${delay}s` } as CSSProperties}
      >
        {children}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[826px] flex-col overflow-hidden bg-ink-900">
      {/* Backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(100deg,#101e2d_0%,#0c1827_45%,#06101b_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(38%_22%_at_50%_0%,rgb(120_96_60/0.30),transparent_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(45%_40%_at_48%_32%,rgb(40_70_105/0.45),transparent_100%)]" />
        <div className="absolute inset-0 [background-image:linear-gradient(rgb(255_255_255/0.028)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.028)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-gradient(to_bottom,transparent_5%,black_60%)]" />
      </div>
      <PointerGlow />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_90%_at_50%_40%,transparent_55%,rgb(3_8_15/0.55)_100%)]"
      />

      {/* Decorative code, laid out on the 1440px design canvas */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 hidden h-full w-[1440px] -translate-x-1/2 select-none min-[1360px]:block"
      >
        <pre className="absolute top-[222px] left-[45px] font-mono text-[12.5px] leading-[19px] text-white/[0.05]">
          {`const learner = {\n  curious: true,\n  building: together,\n  level: "growing"\n}`}
        </pre>
        <span className="absolute top-[642px] left-[1250px] font-mono text-[12.5px] text-white/[0.05]">
          ~ idea
        </span>

        <Floating x={105} y={354} depth={-10} duration={8} delay={0}>
          <CodeCard
            label="JS"
            labelClassName="bg-brand-amber text-ink-950"
            lines={jsLines}
            caret
            className="w-[250px] -rotate-[4deg]"
          />
        </Floating>
        <Floating x={1104} y={322} depth={-14} duration={9.5} delay={-2.5}>
          <CodeCard
            label="PY"
            labelClassName="bg-brand-sky text-ink-950"
            lines={pyLines}
            className="w-[242px] rotate-[4deg]"
          />
        </Floating>
        <Floating x={80} y={636} depth={-6} duration={10} delay={-5}>
          <CodeCard
            label="SH"
            labelClassName="bg-[#2a492d] text-brand-mint"
            lines={shLines}
            lineNumbers={false}
            className="w-[235px] rotate-[2.5deg]"
          />
        </Floating>
        <Floating x={1012} y={657} depth={-8} duration={8.5} delay={-3.5}>
          <CodeCard
            label="CSS"
            labelClassName="bg-brand-lavender text-ink-950"
            lines={cssLines}
            className="w-[238px] -rotate-[2.5deg]"
          />
        </Floating>
        <Floating x={657} y={748} depth={-4} duration={7} delay={-1}>
          <div className="flex rotate-[3deg] items-center gap-2 rounded-xl border border-white/[0.08] bg-ink-850/85 px-3.5 py-2.5 font-mono text-[12px] text-slate-200 shadow-[0_20px_40px_-20px_rgb(0_0_0/0.8)] backdrop-blur-md">
            <svg viewBox="0 0 24 24" className="size-4 text-brand-blue" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="6" cy="6" r="2.5" />
              <circle cx="18" cy="6" r="2.5" />
              <circle cx="6" cy="18" r="2.5" />
              <path d="M6 8.5v7M18 8.5c0 5-6 4-11 7.5" />
            </svg>
            main + 42 ideas
          </div>
        </Floating>
      </div>

      <Navbar />

      {/* Copy */}
      <div className="relative mx-auto flex w-full max-w-[1100px] flex-col items-center px-4 pt-[50px] pb-24 text-center sm:px-6 sm:pt-[62px]">
        <p className="inline-flex h-[33px] items-center gap-2 rounded-full border border-white/[0.09] bg-ink-800/60 px-[14px] font-mono text-[10px] font-bold tracking-[0.03em] text-[#f5c67d] uppercase backdrop-blur sm:text-[10.5px]">
          <span className="size-1.5 rounded-full bg-brand-amber animate-pulse-dot" />
          Student-led
          <span className="text-slate-500">·</span>
          {site.tagline}
        </p>

        <h1 className="mt-[29px] font-display text-[clamp(36px,10.5vw,93px)] leading-[0.84] font-normal tracking-[0.04em] [font-stretch:94%] text-white">
          Learn the code.
          <br />
          <span className="inline-block bg-[linear-gradient(90deg,#f4b65c_0%,#f8d79e_49%,#63a6d4_100%)] bg-clip-text pb-[0.08em] text-transparent">
            Build what’s next.
          </span>
        </h1>

        <p className="mt-[29px] max-w-[620px] text-[17px] leading-[26px] text-[#a9b6c6] sm:text-[19px] sm:leading-[29px]">
          Learn side by side, turn ideas into real projects, and grow your skills with a campus
          community that ships together.
        </p>

        <div className="mt-[26px] flex w-full flex-col items-center justify-center gap-[15px] sm:w-auto sm:flex-row">
          <a
            href={site.groupMeUrl}
            className="group flex h-[54px] w-full items-center justify-center gap-2.5 rounded-[10px] bg-brand-amber px-[26px] text-[15px] font-semibold text-ink-950 shadow-[0_12px_40px_-12px_rgb(244_182_92/0.65),inset_0_1px_0_rgb(255_255_255/0.35)] transition hover:bg-[#f7c475] hover:shadow-[0_16px_48px_-12px_rgb(244_182_92/0.8),inset_0_1px_0_rgb(255_255_255/0.35)] sm:w-auto"
          >
            Join GroupMe
            <svg viewBox="0 0 24 24" className="size-5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <Link
            href="/community"
            className="group flex h-[54px] w-full items-center justify-center gap-2.5 rounded-[10px] border border-white/[0.14] bg-ink-850/70 px-[24px] text-[15px] font-semibold text-white backdrop-blur transition hover:border-white/25 hover:bg-ink-800 sm:w-auto"
          >
            Explore Community
            <svg viewBox="0 0 24 24" className="size-5 text-brand-blue" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />
            </svg>
          </Link>
        </div>

        <div className="mt-[26px] flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[13px] text-[#a9b6c6]">
          <div className="flex -space-x-2">
            {["bg-brand-amber", "bg-brand-lavender", "bg-brand-mint"].map((bg) => (
              <span key={bg} className={`size-[27px] rounded-full ring-2 ring-ink-900 ${bg}`} />
            ))}
            <span className="grid size-[27px] place-items-center rounded-full bg-ink-800 text-[9.5px] font-semibold text-white ring-2 ring-slate-500/60">
              +{site.memberCount}
            </span>
          </div>
          <p>
            <span className="font-semibold text-white">Next event</span> · {site.nextEvent.label} ·{" "}
            {site.nextEvent.location}
          </p>
        </div>
      </div>
    </section>
  );
}
