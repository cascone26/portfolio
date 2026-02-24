export interface QuickLink {
  label: string;
  url: string;
  description: string;
}

export const quickLinks: QuickLink[] = [
  { label: "Vercel Dashboard", url: "https://vercel.com/cascone26s-projects/portfolio", description: "Deployments & settings" },
  { label: "GitHub Repo", url: "https://github.com/cascone26/portfolio", description: "Source code" },
  { label: "Formspree", url: "https://formspree.io/", description: "Contact form submissions" },
  { label: "LessonDraft", url: "https://lessondraft.vercel.app", description: "Main SaaS product" },
  { label: "LessonDraft GitHub", url: "https://github.com/cascone26/LessonDraft", description: "LessonDraft source" },
  { label: "Google Analytics", url: "https://analytics.google.com/", description: "Traffic & analytics" },
];
