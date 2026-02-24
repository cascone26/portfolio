export interface Script {
  title: string;
  slug: string;
  points: string[];
}

export const scripts: Script[] = [
  {
    title: "Cold Outreach",
    slug: "cold-outreach",
    points: [
      "Hey [Name], I'm Jacob — I build websites for small businesses here in KC.",
      "I noticed [specific observation about their business — no website, outdated site, no mobile version, etc.]",
      "I help businesses like yours get a professional online presence without breaking the bank.",
      "Most of my sites run $500-$1,500 depending on what you need, and I can usually have something live in 1-2 weeks.",
      "Would you be open to a quick 15-minute call to see if I can help?",
      "No pressure either way — just thought it might be worth a conversation.",
    ],
  },
  {
    title: "Follow-Up",
    slug: "follow-up",
    points: [
      "Hey [Name], just following up on my message from [timeframe].",
      "I know you're busy running your business — just wanted to make sure my message didn't get lost.",
      "I'd love to help you [specific benefit: get more customers online, update your website, etc.]",
      "If now isn't the right time, no worries at all. I'm here whenever you're ready.",
      "Feel free to check out my portfolio at builtsimple.dev to see the kind of work I do.",
    ],
  },
  {
    title: "Explaining Services",
    slug: "explaining-services",
    points: [
      "I build two main things: websites and AI automation tools.",
      "For websites, I do everything from simple 5-page sites to full web apps with logins, databases, payments — the whole deal.",
      "On the AI side, I build things like chatbots, automated email systems, and content generation tools.",
      "Everything I build is custom — no WordPress templates. Your site is built from scratch, which means it's faster, more secure, and actually yours.",
      "I handle everything: design, development, hosting setup, and I can do ongoing maintenance too if you want.",
      "My pricing starts at $500 for a basic site. I'm transparent about costs — no surprise fees.",
    ],
  },
  {
    title: "Closing",
    slug: "closing",
    points: [
      "Based on what we've talked about, I think [specific solution] would be perfect for you.",
      "The investment would be $[amount], and I can have it done in about [timeframe].",
      "I do 50% upfront and 50% on delivery, so you're not paying for everything before you see results.",
      "I'll send over a proposal with everything we discussed so you can review it.",
      "If you're ready to move forward, I can get started as soon as I receive the deposit.",
      "Any questions before we lock this in?",
    ],
  },
  {
    title: "Upselling Retainer",
    slug: "upselling-retainer",
    points: [
      "Now that your site is live, you'll want to keep it running smoothly.",
      "I offer a monthly retainer starting at $200/month that covers hosting, security updates, and content changes.",
      "Most clients do about 2-4 content updates a month — new photos, updated hours, blog posts, that kind of thing.",
      "Without a retainer, you'd be paying hourly for each change, which adds up fast.",
      "The retainer also includes priority support — if something breaks, I'm on it same-day.",
      "It's month-to-month, no long-term contract. You can cancel anytime with 30 days notice.",
      "Want me to include it in the final invoice, or do you want to think about it?",
    ],
  },
];
