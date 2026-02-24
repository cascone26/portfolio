export interface ContractDoc {
  title: string;
  slug: string;
  content: string;
}

export const contracts: ContractDoc[] = [
  {
    title: "Contract",
    slug: "contract",
    content: `# Web Development Service Agreement

**Between:** Jacob Cascone ("Developer") and [Client Name] ("Client")

**Date:** [Date]

## 1. Scope of Work

The Developer agrees to build and deliver:

- [Description of project]
- [Number of pages / features]
- [Specific deliverables]

## 2. Timeline

- **Start date:** [Date]
- **Estimated completion:** [Date]
- **Review period:** 7 days after delivery

## 3. Payment Terms

- **Total project cost:** $[Amount]
- **50% deposit** due before work begins
- **50% balance** due upon delivery
- Payments via Venmo, Zelle, or bank transfer

## 4. Revisions

- 2 rounds of revisions included
- Additional revisions billed at $50/hour

## 5. Ownership

Upon full payment, the Client receives full ownership of all deliverables including source code.

## 6. Cancellation

- Client may cancel at any time; deposit is non-refundable
- Work completed beyond the deposit will be billed proportionally

## 7. Limitation of Liability

Developer is not liable for any indirect damages. Maximum liability equals the total project cost.

---

**Developer:** Jacob Cascone | cobo.cascone@gmail.com | 816-520-5652

**Client:** _________________________ Date: _____________`,
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
    title: "Retainer Agreement",
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
