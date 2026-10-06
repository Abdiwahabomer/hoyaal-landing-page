import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type PhoneFrameProps = {
  children: ReactNode;
  /** Controls the phone's width (and rotation/position); the screen scales with it. */
  className?: string;
};

/**
 * Device bezel for in-page app mockups. The screen is a size container, so
 * screen contents use `cqw` units and scale proportionally with the frame.
 */
export function PhoneFrame({ children, className }: PhoneFrameProps) {
  return (
    <div
      className={cn(
        "aspect-[9/19] rounded-[14%/6.6%] bg-gradient-to-b from-slate-200 via-slate-400 to-slate-300 p-[1.2%] shadow-[0_40px_80px_-24px_rgba(23,65,140,0.45)]",
        className,
      )}
      aria-hidden="true"
    >
      <div className="h-full rounded-[13%/6.2%] bg-[#111318] p-[3%]">
        <div className="@container relative flex h-full flex-col overflow-hidden rounded-[11%/5.2%] bg-white">
          <div className="absolute top-[1.6%] left-1/2 z-10 h-[3.4%] w-[30%] -translate-x-1/2 rounded-full bg-black" />
          <StatusBar />
          {children}
        </div>
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-[8cqw] pt-[3.5cqw] pb-[2cqw] text-[3.6cqw] font-semibold text-ink">
      <span>9:41</span>
      <span className="flex items-center gap-[1cqw]">
        <span className="h-[2.2cqw] w-[3.6cqw] rounded-[0.6cqw] bg-ink/80" />
        <span className="h-[2.4cqw] w-[5.2cqw] rounded-[0.8cqw] border-[0.4cqw] border-ink/80" />
      </span>
    </div>
  );
}
