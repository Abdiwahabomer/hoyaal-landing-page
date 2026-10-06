// English copy. `so.ts` must provide the same shape (enforced by the `Dictionary` type).
export const en = {
  meta: {
    title: "Hoyaal — Find. Book. Stay.",
    description:
      "The easiest way to book hotels, stays, and travel experiences — all in one place.",
  },
  tagline: "Find. Book. Stay.",
  nav: {
    top: "Home",
    features: "Features",
    businesses: "For Businesses",
    faq: "FAQ",
    contact: "Contact",
  },
  header: {
    cta: "Get Started",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
  },
  hero: {
    title: { find: "Find", book: "Book", stay: "Stay" },
    description:
      "The easiest way to book hotels, stays, and travel experiences all in one place. Discover great places, compare options, and make your next trip unforgettable.",
    primaryCta: "Get Started",
    secondaryCta: "Watch Demo",
    highlights: {
      payments: "Secure Payments",
      booking: "Instant Booking",
      support: "24/7 Support",
    },
    trustedBy: "Trusted by",
    // TODO: placeholder figure — confirm before launch.
    travelers: "10K+ travelers",
  },
  features: {
    eyebrow: "Why Choose Hoyaal",
    title: "Everything you need for a perfect stay",
    description:
      "From finding the best deals to managing your bookings, Hoyaal makes your travel experience simple, smooth, and stress-free.",
    items: {
      search: {
        title: "Easy Search",
        description:
          "Find the best hotels and stays based on your budget and preferences.",
      },
      booking: {
        title: "Instant Booking",
        description: "Book in seconds with a secure and reliable process.",
      },
      secure: {
        title: "Trusted & Secure",
        description: "Your payment and personal data are always protected.",
      },
      support: {
        title: "24/7 Support",
        description: "We're here for you, anytime you need help.",
      },
    },
  },
  businesses: {
    eyebrow: "Built for Businesses",
    titleLine1: "Manage your property",
    titleLine2: "with ease",
    description:
      "Streamline your operations, manage bookings, properties, and more, all from a unified dashboard.",
    benefits: [
      "Real-time property management",
      "Booking and availability control",
      "Property analytics & insights",
      "Easy invoice generation",
    ],
    dashboardAlt:
      "Hoyaal hotel admin dashboard showing bookings, revenue, available rooms and recent bookings",
  },
  mobile: {
    eyebrow: "Mobile Experience",
    title: "Mobile experience",
    description:
      "The Hoyaal app gives you full control — search, book, manage, and explore all in one place.",
    appStoreLine1: "Download on the",
    playStoreLine1: "Get it on",
  },
  testimonials: {
    eyebrow: "Loved by Travelers",
    title: "Loved by travelers and businesses alike",
    description: "Thousands of travelers trust Hoyaal for their perfect stays.",
    goToSlide: "Go to slide",
    // TODO: placeholder testimonials — swap in real customer quotes.
    items: [
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
    ],
  },
  faq: {
    title: "Frequently asked questions",
    description:
      "Everything you need to know about booking and listing on Hoyaal.",
    // TODO: confirm the fee answer with the business team.
    items: [
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
    ],
  },
  contact: {
    title: "Let's plan your next stay together",
    description:
      "Questions about a booking, or ready to list your property? Message our team on WhatsApp and get a reply in minutes.",
    whatsappCta: "Chat on WhatsApp",
    emailCta: "Email us",
  },
  footer: {
    rights: "All rights reserved.",
  },
};

export type Dictionary = typeof en;
