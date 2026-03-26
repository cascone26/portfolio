import type { Metadata } from "next";
import FadeIn from "../components/fade-in";

export const metadata: Metadata = {
  title: "Digital Products",
  description:
    "Beautifully designed digital templates for teachers, professionals, and anyone looking to get organized. Instant download after purchase.",
  alternates: {
    canonical: "https://builtsimple.dev/products",
  },
};

interface Product {
  name: string;
  price: string;
  description: string;
  link: string;
}

interface Category {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  products: Product[];
}

const categories: Category[] = [
  {
    title: "Teacher Resources",
    subtitle: "Save hours every week with ready-to-use classroom tools.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
    ),
    products: [
      {
        name: "Weekly Lesson Plan Template",
        price: "$7",
        description:
          "Beautiful weekly planner with objectives, standards alignment, timed activities, differentiation, and reflection. 5 daily pages + weekly summary.",
        link: "https://buy.stripe.com/14AfZh47c7F011ScBWg3601",
      },
      {
        name: "Classroom Management Toolkit",
        price: "$12",
        description:
          "15-page toolkit: behavior tracking, reward systems, routine checklists, parent communication templates, conflict resolution, and more.",
        link: "https://buy.stripe.com/bJedR9dHM2kGh0QbxSg3602",
      },
      {
        name: "Report Card Comments Bank",
        price: "$9",
        description:
          "200+ copy-paste-ready comments organized by subject, performance level, and trait. Covers ELA, math, science, specials, and special situations.",
        link: "https://buy.stripe.com/dRm7sLeLQ1gC7qg59ug3603",
      },
      {
        name: "Back-to-School Bundle",
        price: "$8",
        description:
          "5-piece bundle: welcome letter, student info form, classroom rules poster, first-week schedule template, and parent contact sheet.",
        link: "https://buy.stripe.com/9B6aEX3384sO25W7hCg3604",
      },
      {
        name: "507+ Report Card Comments",
        price: "$7",
        description:
          "Copy-paste-ready comments organized by subject, performance level, and trait. Covers Math, ELA, Science, Social Studies, specials, and more.",
        link: "https://buy.stripe.com/00w5kD9rw5wSbGwatOg360d",
      },
      {
        name: "403+ IEP Goals — Copy & Paste Ready",
        price: "$9",
        description:
          "SMART goals organized by disability, area, and grade band. Covers SLD, ASD, ADHD, Speech/Language, EBD, and more.",
        link: "https://buy.stripe.com/28E14navA2kG9yo59ug360e",
      },
      {
        name: "Teacher Salary Database (2025-2026)",
        price: "$4",
        description:
          "All 50 states ranked by average salary, starting salary, cost-of-living adjusted, with pension comparisons and negotiation tips.",
        link: "https://buy.stripe.com/cNibJ1fPU3oK9yo0Teg360f",
      },
      {
        name: "50 AI Prompts for Teachers",
        price: "$5",
        description:
          "Tested, detailed prompts for lesson planning, rubrics, differentiation, parent communication, report cards, IEP goals, and more.",
        link: "https://buy.stripe.com/bJebJ1avA5wS6mc31mg360g",
      },
    ],
  },
  {
    title: "Productivity",
    subtitle: "Get organized and stay on track with proven planning systems.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>
    ),
    products: [
      {
        name: "Monthly Budget Planner",
        price: "$9",
        description:
          "Complete 12-month budget system with income/expense worksheets, debt payoff tracker, savings goals, and net worth calculator.",
        link: "https://buy.stripe.com/9B6eVd9rwf7sbGw31mg3605",
      },
      {
        name: "Weekly Meal Planner",
        price: "$6",
        description:
          "4-week meal planning with meal grids, organized grocery lists by store section, prep schedules, and budget tracking.",
        link: "https://buy.stripe.com/5kQ3cveLQ9N8aCsbxSg3606",
      },
      {
        name: "Goal Setting Workbook",
        price: "$11",
        description:
          "20-page workbook: vision setting, life audit, SMART goals, quarterly breakdowns, weekly actions, and monthly reflections.",
        link: "https://buy.stripe.com/5kQ00j5bg1gCaCseK4g3607",
      },
      {
        name: "Habit Tracker Bundle",
        price: "$7",
        description:
          "Habit science guide, stacking framework, two 30-day tracker grids, weekly reviews, and a 4-month streak calendar.",
        link: "https://buy.stripe.com/8x29AT0V01gC7qgatOg3608",
      },
    ],
  },
  {
    title: "Career",
    subtitle: "Land your next role or launch your freelance business.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
    ),
    products: [
      {
        name: "Resume Template Pack",
        price: "$9",
        description:
          "3 professional layouts (Modern, Classic, Minimal) with example content, power verbs, XYZ formula, and ATS optimization tips.",
        link: "https://buy.stripe.com/fZu4gz3384sOfWM45qg3609",
      },
      {
        name: "Interview Prep Guide",
        price: "$11",
        description:
          "50 common questions with framework answers, STAR method, prep checklist, thank-you email template, and salary negotiation scripts.",
        link: "https://buy.stripe.com/14A8wP6fk7F09yo45qg360a",
      },
      {
        name: "LinkedIn Optimization Guide",
        price: "$9",
        description:
          "Headline formulas, summary templates, experience frameworks, networking message scripts, and a weekly LinkedIn routine.",
        link: "https://buy.stripe.com/aFafZh7joaRc9yogScg360b",
      },
      {
        name: "Freelancer Starter Kit",
        price: "$12",
        description:
          "Rate calculator, proposal template, invoice template, 10-clause contract, client onboarding checklist, and portfolio guide.",
        link: "https://buy.stripe.com/dRm7sLfPU7F07qgeK4g360c",
      },
    ],
  },
  {
    title: "Data Packs & AI Prompts",
    subtitle: "Ready-to-use databases and AI prompt collections.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/></svg>
    ),
    products: [
      {
        name: "1,294 Small Businesses Without Websites",
        price: "$19",
        description:
          "Verified leads with business name, industry, city, state, phone, and email. Perfect for web developers and agencies looking for clients.",
        link: "https://buy.stripe.com/3cIaEXavA2kGh0Q9pKg360h",
      },
      {
        name: "30 AI Prompts for Small Business Owners",
        price: "$5",
        description:
          "Prompts for email marketing, social media posts, website copy, product descriptions, customer service, and hiring.",
        link: "https://buy.stripe.com/7sYcN5bzE9N8h0QgScg360i",
      },
      {
        name: "25 AI Prompts for Content Creators",
        price: "$4",
        description:
          "Blog outlines, SEO titles, social media captions, email newsletters, video scripts, and content calendar prompts.",
        link: "https://buy.stripe.com/5kQ7sLavA6AWaCseK4g360j",
      },
      {
        name: "20 AI Prompts for Students",
        price: "$4",
        description:
          "Essay outlining, thesis development, study guide creation, flashcard generation, and research organization prompts.",
        link: "https://buy.stripe.com/5kQ00jdHM3oKcKA6dyg360k",
      },
      {
        name: "Catholic Educator AI Prompt Pack",
        price: "$5",
        description:
          "25 prompts for faith integration, saint studies, liturgical calendar planning, Catholic social teaching, and prayer activities.",
        link: "https://buy.stripe.com/aFabJ147ccZkfWM1Xig360l",
      },
    ],
  },
];

export default function ProductsPage() {
  const allProducts = categories.flatMap((cat) => cat.products);
  const productsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "BuiltSimple Digital Products",
    description: "Beautifully designed digital templates for teachers, professionals, and anyone looking to get organized.",
    numberOfItems: allProducts.length,
    itemListElement: allProducts.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: p.name,
        description: p.description,
        offers: {
          "@type": "Offer",
          price: p.price.replace("$", ""),
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: p.link,
        },
        brand: {
          "@type": "Brand",
          name: "BuiltSimple",
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsSchema) }}
      />
      {/* Hero */}
      <section className="relative pt-12 pb-16 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-blue-500/[0.07] blur-[120px] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative text-center">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-medium">
              Digital Products
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Templates that{" "}
              <span className="gradient-text">save you hours.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
              Beautifully designed, printable digital templates. Buy once,
              download instantly, use forever.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Categories */}
      {categories.map((cat, ci) => (
        <section key={cat.title} className="py-12 px-6">
          <div className="max-w-5xl mx-auto">
            <FadeIn delay={ci * 0.05}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center text-accent-light">
                  {cat.icon}
                </div>
                <h2 className="text-2xl font-bold tracking-tight">
                  {cat.title}
                </h2>
              </div>
              <p className="text-muted text-sm mb-8 ml-12">{cat.subtitle}</p>
            </FadeIn>

            <div className="grid sm:grid-cols-2 gap-4">
              {cat.products.map((p, pi) => (
                <FadeIn key={p.name} delay={ci * 0.05 + (pi + 1) * 0.08}>
                  <div className="glass rounded-2xl p-6 flex flex-col h-full">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="font-semibold text-lg leading-snug">
                        {p.name}
                      </h3>
                      <span className="text-accent-light font-bold text-lg shrink-0">
                        {p.price}
                      </span>
                    </div>
                    <p className="text-muted text-sm leading-relaxed mb-5 flex-1">
                      {p.description}
                    </p>
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gradient text-white font-semibold px-5 py-2 rounded-lg text-sm w-full text-center"
                    >
                      Buy Now
                    </a>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Bottom note */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="font-semibold text-lg mb-2">
                Instant digital delivery
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                After purchase, your product will be delivered to your email
                within minutes. All products are beautifully formatted HTML files
                ready to print or save as PDF. Questions?{" "}
                <a
                  href="/contact"
                  className="text-accent-light hover:underline"
                >
                  Get in touch
                </a>
                .
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
