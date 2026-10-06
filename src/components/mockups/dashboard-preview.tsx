import Image from "next/image";
import { cn } from "@/lib/cn";

type DashboardPreviewProps = { alt: string; className?: string };

/** Screenshot of the Hoyaal hotel-admin dashboard, framed as a browser window. */
export function DashboardPreview({ alt, className }: DashboardPreviewProps) {
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-2xl bg-white shadow-[0_30px_70px_-30px_rgba(23,65,140,0.35)] ring-1 ring-slate-200/70 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_40px_80px_-30px_rgba(23,65,140,0.45)]",
        className,
      )}
    >
      <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-4 py-2.5" aria-hidden="true">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
      </div>
      <Image
        src="/images/dashboard.png"
        alt={alt}
        width={1905}
        height={828}
        sizes="(min-width: 1024px) 640px, 100vw"
        className="h-auto w-full"
      />
    </figure>
  );
}
