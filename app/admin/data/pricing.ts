export interface Service {
  name: string;
  price: string;
  description: string;
}

export interface Discount {
  name: string;
  detail: string;
}

export const services: Service[] = [
  { name: "Starter Website", price: "$500 - $800", description: "1-5 page static site, mobile-responsive, contact form" },
  { name: "Business Website", price: "$800 - $1,500", description: "Multi-page site with CMS, blog, SEO optimization" },
  { name: "E-Commerce", price: "$1,500 - $3,000", description: "Online store with payments, inventory, order management" },
  { name: "Web App / Dashboard", price: "$2,000 - $5,000", description: "Custom web application with auth, database, API integrations" },
  { name: "AI Automation", price: "$500 - $2,000", description: "Chatbots, email automation, content generation, workflow tools" },
  { name: "Monthly Retainer", price: "$200 - $500/mo", description: "Ongoing maintenance, updates, hosting, and support" },
];

export const discounts: Discount[] = [
  { name: "First-time client", detail: "10% off first project" },
  { name: "Referral", detail: "$100 off for both parties" },
  { name: "Bundle", detail: "15% off when booking website + retainer together" },
];
