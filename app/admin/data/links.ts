export interface QuickLink {
  label: string;
  url: string;
  description: string;
}

export const quickLinks: QuickLink[] = [
  { label: "Vercel Dashboard", url: "https://vercel.com/cascone26s-projects/portfolio", description: "Deployments & settings" },
  { label: "GitHub Repo", url: "https://github.com/cascone26/portfolio", description: "BuiltSimple source code" },
  { label: "Formspree", url: "https://formspree.io/forms", description: "Contact form submissions" },
  { label: "Gmail", url: "https://mail.google.com/mail/u/0/#inbox", description: "cobo.cascone@gmail.com" },
  { label: "LessonDraft", url: "https://lessondraft.vercel.app", description: "Main SaaS product" },
  { label: "LessonDraft GitHub", url: "https://github.com/cascone26/LessonDraft", description: "LessonDraft source" },
];
