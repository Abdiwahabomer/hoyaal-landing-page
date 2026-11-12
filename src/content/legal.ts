// Legal documents, transcribed from the PDFs in /public.
// The source documents are English only, so both locales render this text.
// TODO: replace `effectiveDate` with the real launch date before publishing.

export type LegalBlock =
  | string
  | { label: string; text: string }
  | { lines: string[] };

export type LegalSection = { title: string; blocks: LegalBlock[] };

export type LegalDocument = {
  title: string;
  effectiveDate: string;
  intro: string[];
  sections: LegalSection[];
};

const contactLines = [
  "Hoyaal Booking",
  "Jijiga, Somali Region, Ethiopia",
  "Service locations: Ethiopia, Somalia and Somaliland",
  "Email: Hoyaalbooking@gmail.com",
  "Support: Live chat in the Hoyaal Booking app",
];

export const privacyPolicy: LegalDocument = {
  title: "Hoyaal Booking Privacy Policy",
  effectiveDate: "Effective from the date Hoyaal Booking is publicly launched.",
  intro: [
    'This policy explains how Hoyaal Booking ("HOYAAL", "we", "us" or "our") handles personal information through the Hoyaal Booking app, website and customer support services. We provide hotel and accommodation booking services across Ethiopia, Somalia and Somaliland. Our registered office is in Jijiga, Somali Region, Ethiopia.',
  ],
  sections: [
    {
      title: "Information we collect",
      blocks: [
        {
          label: "Account information",
          text: "Your name, email address, phone number and country. We use email and WhatsApp one-time passwords (OTPs) for account verification and sign-in.",
        },
        {
          label: "Booking information",
          text: "Information about your reservations and stays, including the selected accommodation, stay dates, booking reference, booking status and associated payment or support records.",
        },
        {
          label: "Payment and support information",
          text: "Information you submit to confirm a payment or obtain assistance, such as transaction references, receipts, screenshots, photos and live-chat messages. The details processed by payment providers depend on the payment method used.",
        },
        {
          label: "Location",
          text: "With your device permission, we use your location for the Nearby Me feature to help you find accommodation near you. You may choose whether to grant this permission.",
        },
        {
          label: "Reviews",
          text: "Ratings, review text and other content you choose to submit for public display. Please avoid including phone numbers, payment details or other private information in a review.",
        },
      ],
    },
    {
      title: "Why we use your information",
      blocks: [
        "We use information to create and verify accounts; manage bookings and related stays; confirm payments; provide customer support; deliver email and WhatsApp communications; show nearby accommodation when requested; publish reviews; and address fraud, disputes and legal obligations. We use information only for purposes compatible with its collection or another purpose permitted by applicable law.",
      ],
    },
    {
      title: "Device permissions and uploaded images",
      blocks: [
        "Location permission supports Nearby Me. Photo access allows you to select an image when payment confirmation or customer support requires one. Camera access allows you to photograph a receipt if you choose to do so. These permissions are connected to the feature you request.",
        "You can decline or revoke permissions in your device settings. A feature that requires the permission may then be unavailable. Revoking a permission does not itself delete information you previously submitted; use the deletion options or contact us about that information.",
        "When sharing a receipt or screenshot, include only the information needed to resolve your request. Do not submit passwords, OTPs, card security codes or unrelated financial information.",
      ],
    },
    {
      title: "Payments",
      blocks: [
        "Available payment methods include Zaad, eDahab, eBirr and card payments, depending on availability at checkout. Payment providers process information needed to authorise or complete the selected transaction under their own privacy notices.",
        "We use payment confirmation information and any receipt you submit to reconcile payments and resolve booking or payment enquiries. Payment information is not made public. Never send a card security code or OTP to a support agent.",
      ],
    },
    {
      title: "Who receives information",
      blocks: [
        {
          label: "Hotels and accommodation providers",
          text: "HOYAAL shares your name as the guest identifying information for the reservation. This does not prevent the property from separately requesting information from you at check-in under its own policies or applicable requirements.",
        },
        {
          label: "Operational service providers",
          text: "We use Amazon Web Services (AWS) for hosting. Providers that support payment processing, email and WhatsApp delivery, or customer support may process the information required to perform those services. This operational processing is distinct from selling information or providing it to advertisers.",
        },
        {
          label: "Legal disclosures",
          text: "Information may be disclosed where required by applicable law or a valid legal process. Any such disclosure should be limited to what is necessary and legally permitted.",
        },
        "We do not sell personal information or provide it to third-party companies for their independent advertising or marketing. Apart from public reviews, information is shared only for the service purposes or legal requirements described in this policy.",
      ],
    },
    {
      title: "Email and WhatsApp communications",
      blocks: [
        "We use email and WhatsApp to send verification codes and communications related to your account, bookings, payments and support requests. Messages sent through these services are also processed under the relevant provider's privacy terms.",
        "If promotional communications are introduced, HOYAAL must provide any notice and choice required by applicable law. Promotional consent, where required, is separate from communications necessary to deliver a booking or secure an account.",
      ],
    },
    {
      title: "Public reviews",
      blocks: [
        "Reviews submitted for publication are public and can be viewed by other users. Information you include in the review itself may therefore become publicly accessible. Contact us through live chat or email if a review exposes personal information or you wish to request its removal.",
        "Rewards and points information is not published as part of public reviews or public user content.",
      ],
    },
    {
      title: "Account deletion and retained booking records",
      blocks: [
        "You can use the app's deletion function to delete your account and personal profile information. You can also contact us for assistance with a deletion request. We may need to verify your identity before acting on the request.",
        "Deleting an account does not automatically delete completed stay records, booking history or information associated with those bookings. These records may still contain personal information and remain subject to privacy protections. Retention must be limited to a necessary and lawful purpose, such as completing outstanding transactions, handling refunds or disputes, or meeting applicable recordkeeping obligations.",
        "A request to delete information is assessed in light of applicable rights and any lawful retention requirement. Where information must be retained, access and use should be limited to the relevant purpose. Contact us to ask which records remain, the reason for retaining them and the applicable retention period. Records should be deleted or anonymised when retention is no longer justified.",
      ],
    },
    {
      title: "International processing",
      blocks: [
        "HOYAAL serves users across Ethiopia, Somalia and Somaliland and uses AWS hosting and other operational providers. Depending on the infrastructure and providers used, information may be processed outside your place of residence. Applicable transfer requirements and safeguards must be observed. You may contact us for information about where your data is processed.",
      ],
    },
    {
      title: "Grounds for processing and your choices",
      blocks: [
        "Depending on the activity and applicable law, we process information to take steps you request before a booking, deliver our services, comply with legal obligations, or pursue a permitted legitimate interest such as protecting the service against fraud. Where consent is required, we seek it for the relevant purpose. Consent can be withdrawn without affecting processing that was lawful before withdrawal.",
        "Depending on applicable law, you may request access to your information, correction, deletion, a copy or portability of your information, or restriction of or objection to certain processing. Some rights are subject to conditions and lawful exceptions. You may also raise a complaint with the competent data protection authority where available.",
        "To exercise a right, email Hoyaalbooking@gmail.com or contact in-app live chat. Describe your request and provide enough information for us to identify the account. We will respond within the period required by applicable law. We may request proportionate identity verification to protect your account.",
      ],
    },
    {
      title: "Age requirements",
      blocks: [
        "HOYAAL is intended for users aged 15 and older. Users under 15 should not create an account. Users aged 15 to 17 must have parental or guardian consent where required by applicable law. This minimum age does not override requirements concerning children's information, contractual capacity or a property's check-in age.",
        "If you are a parent or guardian and believe a child's information has been provided without required permission, contact us so we can review the matter and take appropriate action.",
      ],
    },
    {
      title: "Security and external services",
      blocks: [
        "Personal information requires appropriate technical and organisational protection against unauthorised access, loss or misuse. No online service can guarantee absolute security. Keep your OTPs confidential and contact support if you suspect unauthorised account use.",
        "Hotels, payment providers and other external services may collect information directly from you. Their own privacy notices apply to that direct collection. Review those notices before providing information to them.",
      ],
    },
    {
      title: "Changes and contact details",
      blocks: [
        "We may update this policy as our services or applicable requirements change. We will publish the revised policy and its effective date and provide additional notice or obtain consent where required.",
        { lines: contactLines },
      ],
    },
  ],
};

export const termsAndConditions: LegalDocument = {
  title: "Hoyaal Booking Terms and Conditions",
  effectiveDate: "Effective date: The date Hoyaal Booking is publicly launched.",
  intro: [
    'These Terms and Conditions govern use of the Hoyaal Booking app, website and booking services operated by Hoyaal Booking ("HOYAAL", "we", "us" or "our"). Our services cover Ethiopia, Somalia and Somaliland.',
    "Please read these Terms and the selected hotel's policies before submitting a booking and making payment. By using our services or submitting a booking, you agree to the applicable Terms. Your booking is also subject to the hotel policies displayed when you book.",
  ],
  sections: [
    {
      title: "Our role and responsibilities",
      blocks: [
        "HOYAAL connects customers with hotels and accommodation providers and facilitates reservations, online payments and booking support. The hotel is responsible for providing the accommodation, facilities and services described in the confirmed booking, including the condition and operation of the property.",
        "HOYAAL assists customers with booking problems and works with hotels to resolve complaints. Our specific commitment when a hotel cannot fulfil a confirmed booking is set out in section 9. Nothing in these Terms removes responsibility HOYAAL has for its own services or obligations under applicable law.",
      ],
    },
    {
      title: "Eligibility and accounts",
      blocks: [
        "You must be aged 15 or older to use HOYAAL. This is the platform's minimum age and does not guarantee eligibility to check in at every hotel. Users who are minors must satisfy any applicable legal requirements concerning parental or guardian permission and capacity to make a booking.",
        "Provide accurate account and guest information and keep your contact details current. Accounts are verified using email or WhatsApp one-time passwords. Keep verification codes confidential and notify us if you suspect unauthorised account use.",
      ],
    },
    {
      title: "Selecting a hotel",
      blocks: [
        "Before paying, check the hotel, room type, stay dates, guest numbers, included services, total price and currency. Review the hotel's cancellation, refund, no-show, check-in and other applicable policies on its page. Contact support before paying if a policy or booking detail is unclear.",
      ],
    },
    {
      title: "Booking requests and hotel acceptance",
      blocks: [
        "After successful payment, the booking request is sent to the hotel administrator for acceptance. Payment alone does not confirm the reservation. Until the hotel administrator accepts, the booking remains pending confirmation.",
        "A booking is confirmed when the hotel administrator accepts it and HOYAAL records or communicates the confirmation. Check the booking status in the app and retain your booking reference. A payment receipt or pending request should not be treated as a confirmed reservation.",
        "If the request is declined or remains pending, contact HOYAAL through in-app live chat or email for assistance. Any cancellation or refund is handled under section 7 and applicable law.",
      ],
    },
    {
      title: "Prices and online payments",
      blocks: [
        "Bookings through HOYAAL are paid online only, using the methods available at checkout. These may include Zaad, eDahab, eBirr and card payments. Payment methods may vary by location or transaction.",
        "The final displayed booking price includes the taxes and charges applicable to the selected reservation. Review the payment currency and total before authorising payment. Optional services or extras you separately request from the hotel are outside the reservation price unless expressly included.",
        "You must be authorised to use the selected payment method. Your bank or payment provider may apply its own conversion rate or charges; these are governed by your arrangement with that provider. If a payment appears unsuccessful or duplicated, contact support before paying again.",
      ],
    },
    {
      title: "Hotel policies form part of the booking",
      blocks: [
        "Each hotel sets its own cancellation, refund and no-show policies. These policies can be viewed on the hotel's page when making a booking and apply to the reservation selected. Read any rate-specific conditions as well as the general property policies before payment.",
        "The policies shown for your reservation when you book govern that booking. A later change to a hotel's published policies does not by itself change an existing booking. Retain the confirmation and relevant conditions for reference.",
        "Hotel-specific policies govern the subjects assigned to them in these Terms, subject to applicable law. They do not remove HOYAAL's express commitment concerning a hotel's failure to fulfil a confirmed booking or any rights that cannot lawfully be excluded.",
      ],
    },
    {
      title: "Cancellations, changes and refunds",
      blocks: [
        "All matters relating to cancellation and refunds are subject to the selected hotel's policies displayed on its page when you book. Those policies determine eligibility, deadlines, deductions, non-refundable rates and any stated refund processing conditions. HOYAAL does not impose a universal cancellation fee or refund deadline under these Terms.",
        "Requests to change stay dates, room types, guest details or other booking information are subject to the hotel's policies and availability. A requested change is not effective until accepted and confirmed. A change may affect the price or applicable conditions; any additional amount must be disclosed before you accept it.",
        "Use the available booking controls or contact HOYAAL support to request a cancellation, change or refund. Do not assume that a message or request has changed the booking until you receive an acknowledgement of its status. Keep evidence of the time your request was submitted.",
        "Where a refund is due, HOYAAL will coordinate its processing in accordance with the applicable hotel policy and legal requirements. The time at which funds appear in your account may also depend on the payment provider. Nothing in a hotel policy or these Terms limits a refund or other remedy required by applicable law.",
      ],
    },
    {
      title: "No-show, late arrival and early departure",
      blocks: [
        "A no-show occurs when a guest does not arrive as required by the applicable hotel policy. The definition, reporting conditions, charges and consequences of a no-show are determined by that hotel's policy, available on its page during booking.",
        "Any no-show charge must follow the hotel policy applicable to the reservation. Late arrival, missed nights and early departure are also handled under the relevant hotel conditions. Notify the hotel or HOYAAL promptly if your travel plans change.",
      ],
    },
    {
      title: "If a hotel cannot fulfil a confirmed booking",
      blocks: [
        "If a hotel cannot provide accommodation for a confirmed reservation, contact HOYAAL immediately and provide your booking reference. HOYAAL will take responsibility for arranging comparable alternative hotel accommodation without charging you any additional amount for that replacement accommodation.",
        "We will coordinate the replacement with you and consider the original booking's room requirements, accommodation standard, location and included services. Do not independently incur replacement costs expecting automatic reimbursement without first coordinating with HOYAAL, except where applicable law provides otherwise.",
        "If no suitable alternative can be arranged, HOYAAL will work with you to resolve the matter. Any refund will be handled under the applicable hotel policy and any rights or remedies required by law.",
      ],
    },
    {
      title: "Check-in and guest conduct",
      blocks: [
        "Check-in and check-out times, identity documents, minimum check-in age, rules for minors, occupancy limits and other on-desk requirements follow the hotel's policies. The platform's 15-plus eligibility rule does not override those requirements. Check them before booking and bring the required documents.",
        "Guests must follow lawful property rules and treat staff, other guests and hotel property respectfully. Additional services, damage claims and guest conduct matters are handled under the disclosed hotel conditions and applicable law. Contact HOYAAL if you dispute a charge or a refusal to honour a reservation.",
      ],
    },
    {
      title: "Reviews and acceptable use",
      blocks: [
        "Reviews are public. Submit honest reviews based on your experience and avoid including private information about yourself or others. Do not post unlawful, threatening, discriminatory, fraudulent or unrelated content. HOYAAL may moderate content that violates these rules without suppressing a review merely because it is negative.",
        "Do not use the platform for fraudulent bookings, unauthorised payments, impersonation, unlawful activity or interference with the service. HOYAAL may restrict access where reasonably necessary to address misuse or security concerns. Such action does not automatically cancel existing bookings or remove any refund entitlement.",
      ],
    },
    {
      title: "Privacy, service availability and responsibility",
      blocks: [
        "Our Privacy Policy explains how personal information is handled. Review it when using the platform. Hotels and payment providers may have separate privacy notices covering information they collect directly.",
        "Access may occasionally be interrupted by maintenance, connectivity problems or events outside reasonable control. Contact support if an interruption affects a payment or reservation. An interruption does not by itself remove obligations relating to an existing booking.",
        "Responsibility for loss or service failure is determined by these Terms and applicable law. Nothing excludes liability that cannot lawfully be excluded, removes mandatory consumer rights or replaces HOYAAL's express obligations in these Terms.",
      ],
    },
    {
      title: "Complaints, disputes and updates",
      blocks: [
        "Contact HOYAAL first with your booking reference, a description of the problem and relevant evidence so we can seek a resolution with you and the hotel. You retain the right to approach a competent authority or court. Applicable law and jurisdiction are determined under the relevant legal rules; these Terms do not require exclusive arbitration or waive mandatory local protections.",
        "We may update these Terms for future use and bookings. Revised Terms will be made available through the platform. An update does not retrospectively alter a confirmed booking unless you agree or applicable law requires the change. If a provision is unenforceable, the remaining provisions continue to apply to the extent permitted by law.",
      ],
    },
    {
      title: "Contact HOYAAL",
      blocks: [
        {
          lines: [
            "Hoyaal Booking",
            "Email: Hoyaalbooking@gmail.com",
            "Customer support: Live chat in the Hoyaal Booking app",
          ],
        },
      ],
    },
  ],
};
