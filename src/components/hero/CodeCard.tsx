import type { CSSProperties } from "react";

export type Token = [text: string, className?: string];
export type Line = Token[];

// Syntax colours shared by every card.
export const tone = {
  kw: "text-[#7fb2e5]",
  name: "text-slate-100",
  punct: "text-slate-400",
  value: "text-brand-amber",
  muted: "text-slate-500",
  ok: "text-brand-mint",
  prop: "text-brand-lavender",
};

type CodeCardProps = {
  label: string;
  labelClassName: string;
  lines: Line[];
  lineNumbers?: boolean;
  /** Shows a highlighted empty line with a blinking caret after the code. */
  caret?: boolean;
  className?: string;
  style?: CSSProperties;
};

export default function CodeCard({
  label,
  labelClassName,
  lines,
  lineNumbers = true,
  caret = false,
  className = "",
  style,
}: CodeCardProps) {
  return (
    <div
      style={style}
      className={`overflow-hidden rounded-[14px] border border-white/[0.08] bg-ink-850/85 shadow-[0_30px_60px_-24px_rgb(0_0_0/0.75),inset_0_1px_0_rgb(255_255_255/0.04)] backdrop-blur-md ${className}`}
    >
      <div className="flex h-[38px] items-center justify-between border-b border-white/[0.05] bg-ink-800/80 px-3">
        <span
          className={`rounded-md px-[7px] py-[3px] font-mono text-[10.5px] leading-none font-bold tracking-wide ${labelClassName}`}
        >
          {label}
        </span>
        <span className="flex gap-[5px]">
          {[0, 1, 2].map((i) => (
            <span key={i} className="size-[5px] rounded-full bg-slate-500/45" />
          ))}
        </span>
      </div>

      <div className="py-3 font-mono text-[12px] leading-[22px] whitespace-pre">
        {lines.map((line, i) => (
          <div key={i} className="flex px-3">
            {lineNumbers && (
              <span className="mr-4 w-3 shrink-0 text-right text-slate-600 select-none">{i + 1}</span>
            )}
            <span>
              {line.map(([text, cls = tone.name], j) => (
                <span key={j} className={cls}>
                  {text}
                </span>
              ))}
            </span>
          </div>
        ))}
        {caret && (
          <div className="mx-2 flex rounded bg-white/[0.035] px-1">
            {lineNumbers && (
              <span className="mr-4 w-3 shrink-0 text-right text-slate-600 select-none">
                {lines.length + 1}
              </span>
            )}
            <span className="my-[4px] w-[2px] rounded-full bg-brand-amber animate-blink" />
          </div>
        )}
      </div>
    </div>
  );
}
