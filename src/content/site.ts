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

// TODO: replace placeholder links and contact details with real ones before launch.
export const siteConfig = {
  name: "Hoyaal",
  tagline: "Find. Book. Stay.",
  contactEmail: "hello@hoyaal.com",
  appStoreUrl: "#",
  playStoreUrl: "#",
  demoUrl: "#",
};

export type NavLink = { label: string; href: string; id: string };

export const navLinks: NavLink[] = [
  { label: "Home", href: "#top", id: "top" },
  { label: "Features", href: "#features", id: "features" },
  { label: "For Businesses", href: "#businesses", id: "businesses" },
  { label: "FAQ", href: "#faq", id: "faq" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export const socialLinks: { label: string; href: string; icon: Icon }[] = [
  { label: "X", href: "#", icon: XLogo },
  { label: "Instagram", href: "#", icon: InstagramLogo },
  { label: "Facebook", href: "#", icon: FacebookLogo },
  { label: "YouTube", href: "#", icon: YouTubeLogo },
];

export const heroHighlights: { label: string; icon: Icon }[] = [
  { label: "Secure Payments", icon: MapPinIcon },
  { label: "Instant Booking", icon: ZapIcon },
  { label: "24/7 Support", icon: HeadphonesIcon },
];

export const features: { title: string; description: string; icon: Icon }[] = [
  {
    title: "Easy Search",
    description:
      "Find the best hotels and stays based on your budget and preferences.",
    icon: SearchIcon,
  },
  {
    title: "Instant Booking",
    description: "Book in seconds with a secure and reliable process.",
    icon: CalendarIcon,
  },
  {
    title: "Trusted & Secure",
    description: "Your payment and personal data are always protected.",
    icon: ShieldCheckIcon,
  },
  {
    title: "24/7 Support",
    description: "We're here for you, anytime you need help.",
    icon: HeadphonesIcon,
  },
];

export const businessBenefits = [
  "Real-time property management",
  "Booking and availability control",
  "Property analytics & insights",
  "Easy invoice generation",
];

export type Testimonial = { quote: string; name: string; role: string };

// TODO: placeholder testimonials — swap in real customer quotes.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Hoyaal made my hotel booking so easy! I found a great place, payment was smooth, and the prices were super fair.",
    name: "Sahra Mohamed",
    role: "Traveler",
  },
  {
    quote:
      "Managing my hotel bookings has never been easier. Everything I need is in one place, and our guests love it.",
    name: "Farhan Nuur",
    role: "Hotel Owner",
  },
  {
    quote:
      "The app is easy, fast, and reliable. Hoyaal is my go-to for booking stays whenever I travel.",
    name: "Sagal Ali",
    role: "Traveler",
  },
  {
    quote:
      "Comparing prices and amenities side by side saved me hours planning our family trip to Berbera.",
    name: "Abdirahman Yusuf",
    role: "Traveler",
  },
  {
    quote:
      "Since listing our guesthouse on Hoyaal, bookings are steady and payments always arrive on time.",
    name: "Hodan Warsame",
    role: "Guesthouse Manager",
  },
  {
    quote:
      "Support answered within minutes when I needed to change my dates. A genuinely great experience.",
    name: "Mustafe Ahmed",
    role: "Business Traveler",
  },
];

// TODO: confirm the fee answer with the business team.
export const faqs: { question: string; answer: string }[] = [
  {
    question: "How do I list my property?",
    answer:
      "Create a business account, add your property details, photos, and room types, then publish your listing. Once it's reviewed, you can start accepting bookings right away.",
  },
  {
    question: "Can I manage multiple properties?",
    answer:
      "Yes. The Hoyaal dashboard lets you add and switch between multiple properties, each with its own rooms, rates, and availability.",
  },
  {
    question: "What are the fees?",
    answer:
      "There are no setup fees to list your property. A small commission applies to confirmed bookings — contact our team for current rates.",
  },
  {
    question: "Do you provide marketing support?",
    answer:
      "Yes. Featured placements, promotions, and seasonal campaigns help your property reach more travelers on Hoyaal.",
  },
];
