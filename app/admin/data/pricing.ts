export interface Service {
  name: string;
  price: string;
  description: string;
}

export interface Discount {
  name: string;
  detail: string;
}

// Keep in sync with app/services/page.tsx
export const services: Service[] = [
  { name: "Business Website", price: "$600 - $1,200", description: "Clean, fast, mobile-ready site. Price based on page count and add-ons (booking, e-commerce, custom features)" },
  { name: "Website Refresh", price: "$100 - $250", description: "Clean up, speed up, and fix an existing outdated or broken site" },
  { name: "Google Business Profile", price: "$75", description: "Setup, optimization, review collection strategy" },
  { name: "AI Chatbot", price: "$250 - $500", description: "24/7 customer Q&A, lead capture, saves time" },
  { name: "Email Automation", price: "$200 - $350", description: "Follow-ups, appointment reminders, lead responses — set it and forget it" },
  { name: "Monthly Tech Retainer", price: "$50 - $75/mo", description: "Updates, fixes, questions, changes — your personal tech person" },
];

export const discounts: Discount[] = [
  { name: "First-time client", detail: "10% off first project" },
  { name: "Referral", detail: "$100 off for both parties" },
  { name: "Bundle", detail: "15% off when booking website + retainer together" },
];
