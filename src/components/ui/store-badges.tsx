import { AppleLogo, GooglePlayLogo } from "@/components/icons";
import { siteConfig } from "@/content/site";

const badgeClass =
  "inline-flex h-14 items-center gap-3 rounded-xl bg-black px-5 text-white ring-1 ring-white/10 transition hover:bg-slate-800";

export function StoreBadges() {
  return (
    <div className="flex flex-wrap gap-4">
      <a href={siteConfig.appStoreUrl} className={badgeClass}>
        <AppleLogo className="size-7" />
        <span className="flex flex-col leading-none">
          <span className="text-[10px] font-medium">Download on the</span>
          <span className="mt-1 text-lg font-semibold">App Store</span>
        </span>
      </a>
      <a href={siteConfig.playStoreUrl} className={badgeClass}>
        <GooglePlayLogo className="size-7" />
        <span className="flex flex-col leading-none">
          <span className="text-[10px] font-medium uppercase">Get it on</span>
          <span className="mt-1 text-lg font-semibold">Google Play</span>
        </span>
      </a>
    </div>
  );
}
