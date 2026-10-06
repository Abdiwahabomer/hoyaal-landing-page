import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type BadgeProps = {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
};

export function Badge({ children, icon, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-brand-50 px-3.5 py-1.5 text-xs font-medium text-brand-700 ring-1 ring-brand-100",
        className,
      )}
    >
      {icon}
      {children}
    </span>
  );
}
