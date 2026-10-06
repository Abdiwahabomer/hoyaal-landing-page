import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  /** Set on the above-the-fold instance only. */
  preload?: boolean;
};

export function Logo({ className, preload = false }: LogoProps) {
  return (
    <Link href="#top" aria-label="Hoyaal home" className={cn("inline-flex", className)}>
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
