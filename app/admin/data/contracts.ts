export interface ContractDoc {
  title: string;
  slug: string;
  content: string;
}

export const contracts: ContractDoc[] = [
  {
    title: "Contract",
    slug: "contract",
    content: `# Freelance Services Agreement

**Jacob Cascone — Web & AI Services**

---

This agreement is between **Jacob Cascone** ("Developer") and **[Client Name / Business Name]** ("Client"). It covers the work we've agreed to do together. It's written in plain English because contracts shouldn't require a lawyer to understand.

---

## 1. Project Scope

The work covered by this agreement is: **[describe project here — e.g., "A new 5-page business website including Home, About, Services, Contact, and a Blog page."]**

Any work outside of that description is considered out of scope and may require a separate quote. If scope needs to change, we'll agree on it in writing (email is fine) before I start the extra work.

---

## 2. Payment Terms

- **50% due upfront** before work begins. I won't start until this is received.
- **50% due on delivery** — when I deliver the final files, site access, or completed setup.
- Accepted payment methods: Stripe (a secure payment link will be provided)
- If final payment isn't received within 7 days of delivery, I reserve the right to pause or remove access to the delivered work until payment clears.

---

## 3. Revisions

Two rounds of revisions are included in the project price.

A "round of revisions" means one consolidated list of changes — not back-and-forth messages over several days. Please collect all your feedback at once before submitting.

Additional revision rounds beyond the two included are billed at $75/hour.

---

## 4. Timeline

I'll provide an estimated delivery date at project kickoff. Timelines depend on how quickly you provide feedback, content, and approvals.

If I'm ever going to miss a deadline, I'll tell you in advance. I ask the same courtesy from you — delays on your end (like late content or feedback) may push the delivery date back accordingly.

---

## 5. If the Client Goes Silent

If I don't hear from you for 14 consecutive days during an active project, I'll send one final check-in. If there's still no response after 7 more days (21 days total), I may consider the project paused.

The upfront deposit is non-refundable in this case, since time and work has already been invested. If you want to resume later, we can discuss whether additional fees apply.

---

## 6. Who Owns the Work

You do. Once final payment is received, you own the finished product — the website, the copy, the design, all of it. I may photograph or screenshot the work to include in my portfolio unless you ask me not to.

Third-party tools (like chatbot platforms, email services, or hosting providers) are governed by their own terms of service.

---

## 7. No Guarantee of Business Results

I build good websites and set up useful tools. I can't guarantee specific outcomes like a certain number of customers, calls, leads, or revenue. Those results depend on many factors outside my control — your market, your pricing, your reputation, your follow-through.

What I can guarantee: I'll do quality work, communicate clearly, and deliver what I said I would.

---

## 8. General

This agreement is the full understanding between us. Any changes need to be agreed on in writing. This agreement is governed by the laws of the state of Missouri.

---

**Developer:** Jacob Cascone
**Signature:** _________________ **Date:** _________

**Client:** [Client Name]
**Signature:** _________________ **Date:** _________

---

*Questions before signing? Reach me at cobo.cascone@gmail.com*`,
  },
  {
    title: "Proposal",
    slug: "proposal",
    content: `# Project Proposal

**Prepared for:** [Client Name]
**Prepared by:** Jacob Cascone
**Date:** [Date]

---

## About Me

I'm Jacob, a web developer and AI automation specialist based in Mission, KS. I help small businesses get online with fast, affordable websites — no tech jargon.

## Understanding Your Needs

[Brief summary of what the client needs based on your conversation]

## Proposed Solution

[What you'll build and why it's the right fit]

### Deliverables

- [ ] [Deliverable 1]
- [ ] [Deliverable 2]
- [ ] [Deliverable 3]

## Timeline

| Phase | Duration | Description |
|-------|----------|-------------|
| Discovery | 1-2 days | Gather content, discuss design preferences |
| Design & Build | 1-2 weeks | Build the site with check-ins |
| Review | 3-5 days | Client review + revisions |
| Launch | 1 day | Go live + handoff |

## Investment

**Total:** $[Amount]

- 50% deposit to start
- 50% on delivery

## Next Steps

1. Reply to confirm the project
2. I'll send the contract
3. Once signed and deposit received, we start

---

Jacob Cascone | cobo.cascone@gmail.com | 816-520-5652`,
  },
  {
    title: "Change Order",
    slug: "change-order",
    content: `# Scope Change Order

**Project:** [Original Project Name]
**Between:** Jacob Cascone ("Developer") and [Client Name] ("Client")
**Date:** [Date]
**Change Order #:** [Number — e.g., 001]

---

## What's Changing

**Original scope:** [Brief description of what was originally agreed in the contract]

**Requested change:** [What the client wants to add, remove, or change — be specific]

---

## Cost

- **Additional cost for this change:** $[Amount]
- **Payment:** Due upfront before work on this change begins
- **Updated project total:** $[Original amount + this change order]

---

## Timeline Impact

This change adds approximately **[X days/weeks]** to the delivery timeline.

**Original estimated delivery:** [Date from original contract]
**New estimated delivery:** [Updated date]

---

## Notes

[Any additional context — dependencies, third-party requirements, things the client needs to provide, etc.]

---

## Agreement

By signing below, both parties agree to the change in scope, cost, and timeline described above. This change order supplements the original service agreement and does not replace it.

---

**Developer:** Jacob Cascone
**Signature:** _________________ **Date:** _________

**Client:** [Client Name]
**Signature:** _________________ **Date:** _________`,
  },
  {
    title: "Retainer",
    slug: "retainer",
    content: `# Monthly Retainer Agreement

**Between:** Jacob Cascone ("Developer") and [Client Name] ("Client")

**Effective Date:** [Date]

---

## 1. Services Included

Monthly retainer covers:

- Website hosting and uptime monitoring
- Security updates and patches
- Content updates (up to 4 per month)
- Performance monitoring
- Email support (response within 24 hours)
- Monthly backup

## 2. Monthly Fee

**$[Amount]/month**, billed on the 1st of each month.

## 3. Additional Work

Work beyond the retainer scope is billed at **$50/hour** with client approval before starting.

## 4. Term

- Month-to-month, no long-term commitment
- Either party may cancel with 30 days written notice

## 5. Support Hours

- Monday - Friday, 9am - 5pm CT
- Emergency support available evenings/weekends for critical issues

---

**Developer:** Jacob Cascone | cobo.cascone@gmail.com | 816-520-5652

**Client:** _________________________ Date: _____________`,
  },
  {
    title: "Onboarding Checklist",
    slug: "onboarding",
    content: `# Client Onboarding Checklist

Use this checklist when starting a new client project.

---

## Before Starting

- [ ] Initial call / meeting completed
- [ ] Client needs documented
- [ ] Proposal sent and approved
- [ ] Contract signed by both parties
- [ ] Deposit received

## Content Gathering

- [ ] Business name and tagline
- [ ] Logo (high-res, preferably SVG or PNG)
- [ ] Brand colors (hex codes if available)
- [ ] Text content for all pages
- [ ] Photos / images
- [ ] Social media links
- [ ] Contact information
- [ ] Domain name (or help client purchase one)

## Setup

- [ ] Create GitHub repo
- [ ] Set up Vercel project
- [ ] Configure domain (if applicable)
- [ ] Set up contact form (Formspree)
- [ ] Add Google Analytics (if requested)

## During Build

- [ ] Share progress link with client
- [ ] Get feedback at 50% completion
- [ ] Complete all pages and features
- [ ] Test on mobile, tablet, desktop
- [ ] Test all forms and links

## Delivery

- [ ] Client review and approval
- [ ] Apply revision requests (up to 2 rounds)
- [ ] Final testing
- [ ] Launch / go live
- [ ] Send final invoice
- [ ] Confirm payment received
- [ ] Offer retainer for ongoing support`,
  },
];
