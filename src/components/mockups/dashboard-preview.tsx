import Image from "next/image";
import { cn } from "@/lib/cn";

/** Screenshot of the Hoyaal hotel-admin dashboard, framed as a browser window. */
export function DashboardPreview({ className }: { className?: string }) {
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-2xl bg-white shadow-[0_30px_70px_-30px_rgba(23,65,140,0.35)] ring-1 ring-slate-200/70",
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
        alt="Hoyaal hotel admin dashboard showing bookings, revenue, available rooms and recent bookings"
        width={1905}
        height={828}
        sizes="(min-width: 1024px) 640px, 100vw"
        className="h-auto w-full"
      />
    </figure>
  );
}
