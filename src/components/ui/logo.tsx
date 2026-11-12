import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  /** Set on the above-the-fold instance only. */
  preload?: boolean;
  /** Prefix for in-page anchors, e.g. "/en" when rendered outside the home page. */
  homeHref?: string;
};

export function Logo({ className, preload = false, homeHref = "" }: LogoProps) {
  return (
    <Link href={`${homeHref}#top`} aria-label="Hoyaal home" className={cn("inline-flex", className)}>
      <Image
        src="/images/logo.svg"
        alt="Hoyaal"
        width={682}
        height={126}
        className="h-7 w-auto"
        preload={preload}
      />
    </Link>
  );
}
