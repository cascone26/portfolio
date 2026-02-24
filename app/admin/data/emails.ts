export interface EmailTemplate {
  title: string;
  slug: string;
  subject: string;
  body: string;
}

export const emails: EmailTemplate[] = [
  {
    title: "Deposit Received / Kickoff",
    slug: "kickoff",
    subject: "We're officially started — here's what's next",
    body: `Hi [Name],

Got your deposit — thank you. We're officially kicked off.

Here's what happens from here:

1. I'll review everything we discussed and put together a plan
2. I'll reach out within [X] business days with a progress update or any questions
3. Estimated delivery: [Date]

To keep things moving on your end, if you haven't already, please send over:
- [Content/materials needed — logo, photos, text, etc.]
- Any examples of sites or styles you like
- Login access to anything I'll need (domain registrar, existing site, etc.)

If something comes up or you think of anything else, just reply here. I'll be in touch soon.

— Jacob
816-520-5652 | cobo.cascone@gmail.com`,
  },
  {
    title: "Midpoint Check-in",
    slug: "midpoint",
    subject: "Project update — [Project Name]",
    body: `Hi [Name],

Quick update on where things stand:

**Done so far:**
- [What you've completed]

**Up next:**
- [What's coming]

**Still need from you:**
- [Anything outstanding — content, approvals, answers to questions]

We're on track for [estimated delivery date]. Let me know if you have any questions or feedback at this stage — it's easier to make changes now than after everything is built out.

— Jacob`,
  },
  {
    title: "Project Delivery",
    slug: "delivery",
    subject: "Your project is ready — please review",
    body: `Hi [Name],

It's done. Here's your project:

**[Link / login / files]**

[Brief description of what was delivered and anything they should know — e.g., login credentials, how to make simple edits, any third-party accounts they now own]

**Review period:** You have 7 days to review and send feedback. This kicks off the revision process — please collect all feedback into one list before sending it over (that counts as round 1 of 2 included revisions).

If everything looks good and you're ready to go live / finalize — just reply and let me know.

Once revisions are complete and final payment is received, you own everything outright.

Looking forward to hearing what you think.

— Jacob
816-520-5652 | cobo.cascone@gmail.com`,
  },
  {
    title: "Final Invoice",
    slug: "final-invoice",
    subject: "Final invoice — [Project Name]",
    body: `Hi [Name],

We're all wrapped up — thanks for your patience through the process.

**Final invoice: $[Amount]**
[Payment link or instructions — Stripe / Zelle / Venmo]

Payment is due within 7 days. Once received, full ownership of the project transfers to you — source code, files, everything.

**Handoff notes:**
- [Any login credentials, accounts, or access to transfer]
- [How to make updates or who to contact for hosting questions]
- [Any ongoing tools or subscriptions they're now responsible for]

It was great working with you. If you ever need updates, new features, or want to talk about a monthly retainer, just reach out.

— Jacob
816-520-5652 | cobo.cascone@gmail.com`,
  },
  {
    title: "Review / Testimonial Ask",
    slug: "review-ask",
    subject: "One quick favor",
    body: `Hi [Name],

Glad we got [project] across the finish line — hope it's already working well for you.

One quick ask: if you were happy with how things went, would you mind leaving a Google review? It takes about two minutes and genuinely makes a big difference for a small operation like mine.

[Your Google Business Profile review link]

And if you know anyone in the KC area who could use help with a website, Google setup, or AI tools — I'd love an introduction. Even just mentioning my name if the topic comes up would mean a lot.

Thanks again for trusting me with the project.

— Jacob`,
  },
  {
    title: "Late Payment (1st Reminder)",
    slug: "late-payment-1",
    subject: "Invoice reminder — [Project Name]",
    body: `Hi [Name],

Just a friendly reminder that the invoice for [Project Name] for $[Amount] is now [X] days past due.

[Payment link]

If there's an issue or you need to work something out, just reply and let me know — happy to figure something out. If you've already sent payment, please disregard this.

Thanks,
Jacob`,
  },
  {
    title: "Late Payment (2nd Reminder)",
    slug: "late-payment-2",
    subject: "Second notice — outstanding invoice for [Project Name]",
    body: `Hi [Name],

I'm following up again on the outstanding invoice for [Project Name] — $[Amount], now [X] days overdue.

[Payment link]

As noted in our agreement, I reserve the right to pause or remove access to delivered work until payment is received. I'd prefer not to do that — please respond so we can resolve this.

If you're having trouble, let me know and we can talk through options.

— Jacob Cascone
816-520-5652 | cobo.cascone@gmail.com`,
  },
  {
    title: "Scope Change Request",
    slug: "scope-change",
    subject: "Scope change request — [Project Name]",
    body: `Hi [Name],

Got your request. Here's what adding [description of requested change] would look like:

**Additional cost:** $[Amount]
**Timeline impact:** Adds approximately [X days/weeks] — new delivery would be around [updated date]
**Payment:** Due upfront before I start the additional work

If you want to move forward, just reply confirming and I'll send a quick change order to sign before we proceed.

If you'd rather stick with the original scope, no worries — we'll move forward as planned.

Let me know either way.

— Jacob`,
  },
];
