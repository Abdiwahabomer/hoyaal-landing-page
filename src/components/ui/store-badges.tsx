import { AppleLogo, GooglePlayLogo } from "@/components/icons";
import { siteConfig } from "@/content/site";

const badgeClass =
  "inline-flex h-14 items-center gap-3 rounded-xl bg-black px-5 text-white ring-1 ring-white/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/20";

type StoreBadgesProps = {
  appStoreLine1: string;
  playStoreLine1: string;
};

export function StoreBadges({ appStoreLine1, playStoreLine1 }: StoreBadgesProps) {
  return (
    <div className="flex flex-wrap gap-4">
      <a href={siteConfig.appStoreUrl} className={badgeClass}>
        <AppleLogo className="size-7" />
        <span className="flex flex-col leading-none">
          <span className="text-[10px] font-medium">{appStoreLine1}</span>
          <span className="mt-1 text-lg font-semibold">App Store</span>
        </span>
      </a>
      <a href={siteConfig.playStoreUrl} className={badgeClass}>
        <GooglePlayLogo className="size-7" />
        <span className="flex flex-col leading-none">
          <span className="text-[10px] font-medium uppercase">{playStoreLine1}</span>
          <span className="mt-1 text-lg font-semibold">Google Play</span>
        </span>
      </a>
    </div>
  );
}
