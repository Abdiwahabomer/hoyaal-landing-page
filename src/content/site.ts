import {
  CalendarIcon,
  FacebookLogo,
  HeadphonesIcon,
  InstagramLogo,
  MapPinIcon,
  SearchIcon,
  ShieldCheckIcon,
  XLogo,
  YouTubeLogo,
  ZapIcon,
  type Icon,
} from "@/components/icons";
import type { Dictionary } from "@/i18n/dictionaries/en";

// Non-translatable site settings. All copy lives in src/i18n/dictionaries.
// TODO: replace placeholder links and contact details with real ones before launch.
export const siteConfig = {
  name: "Hoyaal",
  contactEmail: "hello@hoyaal.com",
  // TODO: set to https://wa.me/<country code + number>, digits only, e.g. https://wa.me/252631234567
  whatsappUrl: "#",
  appStoreUrl: "#",
  playStoreUrl: "#",
  demoUrl: "#",
};

export type NavId = keyof Dictionary["nav"];

export const navLinks: { id: NavId; href: string }[] = [
  { id: "top", href: "#top" },
  { id: "features", href: "#features" },
  { id: "businesses", href: "#businesses" },
  { id: "faq", href: "#faq" },
  { id: "contact", href: "#contact" },
];

export const socialLinks: { label: string; href: string; icon: Icon }[] = [
  { label: "X", href: "#", icon: XLogo },
  { label: "Instagram", href: "#", icon: InstagramLogo },
  { label: "Facebook", href: "#", icon: FacebookLogo },
  { label: "YouTube", href: "#", icon: YouTubeLogo },
];

export const heroHighlightIcons: Record<
  keyof Dictionary["hero"]["highlights"],
  Icon
> = {
  payments: MapPinIcon,
  booking: ZapIcon,
  support: HeadphonesIcon,
};

export const featureIcons: Record<keyof Dictionary["features"]["items"], Icon> = {
  search: SearchIcon,
  booking: CalendarIcon,
  secure: ShieldCheckIcon,
  support: HeadphonesIcon,
};
