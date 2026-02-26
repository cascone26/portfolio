export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
}

export const posts: BlogPost[] = [
  {
    slug: "why-cheap-websites-cost-more",
    title: "Why Cheap Websites End Up Costing You More",
    description:
      "That $50/month website builder sounds great until you do the math. Here's why the cheapest option is rarely the best value.",
    date: "2026-03-10",
    readTime: "4 min",
    tags: ["Websites", "Pricing"],
    content: `
You see the ads everywhere. "$12/month — build your own website!" Sounds like a steal compared to paying a developer, right?

Let's do some actual math.

## The hidden costs of website builders

Take a typical website builder — Wix, Squarespace, whatever. Here's what the real cost looks like after a year:

- **Monthly plan:** $16/month = $192/year
- **Custom domain:** $15/year (sometimes included, sometimes not)
- **Remove ads upgrade:** another $5-10/month on cheap plans
- **Premium templates:** $50-100 one-time
- **Third-party plugins:** $10-30/month for forms, booking, SEO tools
- **Your time building it:** 30-50 hours at minimum

That "cheap" website just cost you $400-700 in the first year plus dozens of hours of your time. And it still looks like a template because it is one.

**Year two?** You're paying those monthly fees again. Year three? Same thing. After 3 years you've spent $1,000-1,500 on a website you don't own and can't take with you.

## What "you don't own it" actually means

This is the part people miss. When you build on Wix or Squarespace, you're renting. If you stop paying, your site disappears. If the platform raises prices, you pay or lose everything. If they shut down a feature you depend on, too bad.

When I build your site, you own the code. You own the domain. You own everything. If you want to move to a different host or hire someone else later, you can. No lock-in.

## The time tax

Let's talk about those 30-50 hours. That's a conservative estimate for someone with no web experience to build a decent-looking site on a page builder. And "decent-looking" is generous — most DIY sites look like DIY sites.

If you're a plumber charging $100/hour, those 40 hours of website building cost you $4,000 in lost income. Even if your time is worth $30/hour, that's $1,200. Suddenly hiring someone for $400 is the cheaper option.

## When free and cheap make sense

I'll be honest — if you're testing a business idea and you're not sure it'll work, a free Carrd page or a basic Google Business Profile is fine to start. Don't invest $500 in a website for a business that might not exist in 3 months.

But once you're committed and taking real customers? Get a real site. The difference in how customers perceive you is massive.

## The sweet spot

A custom-built website that you own, that's fast, that looks professional, that works on phones, and that actually helps you get found on Google — that's $350-600 for most small businesses. One-time cost. You own it forever.

Compare that to $500/year on a template builder that you'll never fully own. The math isn't even close.
    `,
  },
  {
    slug: "how-to-get-your-first-customers-online",
    title: "How to Get Your First Customers Online (Without Spending a Fortune)",
    description:
      "You've got a business but no online presence. Here's a practical, step-by-step plan to start getting customers from the internet.",
    date: "2026-03-09",
    readTime: "5 min",
    tags: ["Small Business", "Marketing"],
    content: `
You're getting customers through word of mouth and maybe a Facebook post here and there. It's working, but it's slow. You know you need to get online, but you don't know where to start and you don't want to waste money on stuff that doesn't work.

Here's the plan. Start at the top, work your way down. Each step builds on the last.

## Step 1: Google Business Profile (free, 30 minutes)

This is the single highest-impact thing you can do, and it's completely free. Go to business.google.com and set up your profile. Fill out every field. Add real photos. Pick the most specific category for your business.

This alone will get you showing up in "near me" searches on Google Maps. For a lot of local businesses, this is where the majority of new customers come from.

## Step 2: Get a website ($350-600, one-time)

Your Google Business Profile links to your website. People who find you on Google will want to see more before they call. A clean, fast, mobile-friendly website with your services, location, and a way to contact you is all you need.

Don't overthink this. You don't need a blog with 50 posts, a video background, or a custom logo. You need a site that answers three questions: What do you do? Where are you? How do I reach you?

## Step 3: Collect Google reviews (free, ongoing)

After every good job, ask for a Google review. Not in a weird salesy way — just "If you're happy with the work, a Google review really helps my business." Send them the direct link to make it easy.

Reviews are the #1 trust signal for local businesses. When someone sees you have 20+ positive reviews, they're calling you instead of the guy with zero.

## Step 4: Get listed in directories (free, 1-2 hours)

Make sure your business shows up on:

- **Yelp** — still matters for certain industries
- **Facebook** — create a business page if you haven't
- **Apple Maps** — submit through Apple Business Connect
- **Nextdoor** — huge for local service businesses

The key is consistent info everywhere: same business name, same address, same phone number. Inconsistencies confuse Google and hurt your search rankings.

## Step 5: Start posting (free, 15 min/week)

You don't need a social media strategy. You need to post a photo of your work once or twice a week. Before and after shots, finished projects, your team on a job site — real stuff. Not graphics. Not quotes. Not stock photos.

Post on your Google Business Profile (yes, it has a post feature), Facebook, and Nextdoor. That's it. Don't try to be on every platform.

## What not to do

- **Don't pay for ads yet.** Get the basics right first. Ads amplify what's already working — they don't fix a broken online presence.
- **Don't hire an SEO company charging $1,000/month.** You don't need that yet. Maybe not ever.
- **Don't buy followers or fake reviews.** Google is good at detecting these and will penalize you.
- **Don't try to do everything at once.** One step at a time. Consistency beats intensity.

## The timeline

If you do all five steps, you should start seeing organic online inquiries within 1-3 months. It's not instant, but it compounds. Six months from now, you'll wonder why you didn't do this sooner.
    `,
  },
  {
    slug: "what-is-website-hosting",
    title: "What Is Website Hosting and Do You Need to Pay for It?",
    description:
      "Hosting, domains, servers — it's confusing. Here's a plain-English explanation of where your website actually lives and what it costs.",
    date: "2026-03-08",
    readTime: "4 min",
    tags: ["Websites", "Basics"],
    content: `
A lot of business owners I talk to are confused by hosting. What is it? Do you need it? Is it the same as a domain name? How much should it cost? Let me break it down without the tech jargon.

## Your website needs to live somewhere

Think of it like renting space. Your website is a bunch of files — text, images, code. Those files need to sit on a computer (a server) that's connected to the internet 24/7 so people can access your site anytime.

That's hosting. You're renting space on a server so your website is available to the world.

## Hosting vs. domain name

These are two different things that people confuse all the time:

- **Domain name** = your address (like builtsimple.dev). It's what people type to find you.
- **Hosting** = the building at that address. It's where your website files actually live.

You need both. A domain without hosting is an address with no building. Hosting without a domain means your site exists but nobody can find it.

## What hosting costs

For a small business website, hosting ranges from free to about $20/month depending on what you need:

- **Free hosting** — platforms like Vercel and Netlify offer free plans that work great for simple business websites. This is what I use for most client sites.
- **Cheap shared hosting** — $5-10/month. Companies like Bluehost, SiteGround, HostGator. Fine for basic sites but can be slow.
- **Managed hosting** — $15-30/month. Faster, more reliable, better support. Worth it for sites with lots of traffic.
- **Website builder hosting** — Wix, Squarespace, etc. bundle hosting into their monthly fee ($15-40/month). Convenient but you're locked into their platform.

## The truth most developers won't tell you

Most small business websites can be hosted for free. If your site is built with modern tools (like I build them), platforms like Vercel will host it at no cost. It's fast, reliable, and scales automatically.

The only time you need paid hosting is if you have a database, lots of file uploads, an e-commerce store, or thousands of daily visitors. A typical 5-page business website? Free hosting handles it perfectly.

## What about domain names?

A .com domain runs about $10-15/year. A .dev or other extension might be $12-20/year. You register it through a domain registrar (Namecheap, Google Domains, Cloudflare, etc.).

I recommend Cloudflare or Namecheap — they charge what it actually costs with no markup. Some registrars lure you in with $1 first-year pricing then jack it up to $20/year on renewal. Read the fine print.

## What I do for clients

When I build a website, I handle all of this. I set up the hosting, configure the domain, deploy the site, and make sure everything works. Most of my clients pay $0/month for hosting and $12-15/year for their domain.

No monthly hosting fees, no surprise charges. That's how it should be.
    `,
  },
  {
    slug: "online-booking-systems-for-small-businesses",
    title: "Online Booking: Should Your Business Let Customers Schedule Online?",
    description:
      "If your customers call to book appointments, you're losing some of them. Here's when online booking makes sense and how to set it up.",
    date: "2026-03-07",
    readTime: "5 min",
    tags: ["Automation", "Small Business"],
    content: `
You're a barber, a tutor, a personal trainer, a massage therapist, a cleaning company. People need to book a time with you. Right now they call, text, or DM you. Sometimes you miss the call. Sometimes you're on another job. Sometimes they just don't bother calling at all.

Online booking fixes this.

## What online booking actually looks like

Your website has a "Book Now" button. The customer clicks it, sees your available time slots, picks one, and confirms. They get an email reminder. You get a notification. Done.

No phone tag. No "let me check my calendar and get back to you." No lost leads who didn't want to call.

## Why it works

**People book outside business hours.** About 40% of online bookings happen after 5pm or on weekends. Those are customers you'd lose if they had to call during your working hours.

**It reduces no-shows.** Automated email and text reminders cut no-shows by 25-30%. When people commit with a click and get reminded the day before, they show up.

**It saves you time.** If you spend 30 minutes a day on scheduling — taking calls, texting back and forth, updating your calendar — that's 2.5 hours a week. Over a year, that's 130 hours spent on something a computer can do automatically.

**Younger customers expect it.** If your target market includes anyone under 40, many of them would rather book online than make a phone call. That's just the reality in 2026.

## When online booking makes sense

It's a good fit if:

- **Your business runs on appointments.** Barbers, tutors, consultants, trainers, therapists, cleaning services.
- **You have predictable availability.** You know what time slots you can offer.
- **You miss calls regularly.** You're on the job and can't answer the phone.
- **You want to reduce admin work.** Less time scheduling, more time doing actual work.

It might not make sense if:

- **Your jobs require estimates first.** A roofer needs to see the roof before scheduling work. A contact form is better here.
- **You don't have set hours.** If every job is different and you can't predict availability, a booking system adds more complexity than it solves.

## What tools are out there

For small businesses, these work well:

- **Calendly** — free tier handles basic scheduling, paid plans start at $10/month
- **Square Appointments** — free for individuals, integrates with Square payments
- **Acuity Scheduling** — $16/month, powerful but more features than most need
- **Cal.com** — open source, free self-hosted option

Most of these can be embedded directly into your website so customers never leave your site.

## What it costs to set up

If you already use one of these tools, embedding it in your website takes about an hour. If you need help choosing a tool, configuring it, and integrating it into your site, that's usually a $200-300 job.

The ongoing cost is whatever the booking platform charges — anywhere from free to $20/month depending on your needs.

## Start simple

You don't need a complex system on day one. Start with something basic — Calendly's free plan embedded on your contact page. See how it goes. If you're getting 5+ bookings a week through it, then consider upgrading to something more feature-rich.

The goal is to make it easier for people to give you money. Remove friction wherever you can.
    `,
  },
  {
    slug: "why-website-speed-matters",
    title: "Why Your Website Speed Matters More Than You Think",
    description:
      "Slow websites lose customers and rank lower on Google. Here's how fast yours should be and what to do if it's not.",
    date: "2026-03-06",
    readTime: "4 min",
    tags: ["Websites", "SEO"],
    content: `
Pull up your website on your phone right now. Count how many seconds it takes to fully load. If you got past 3, you have a problem.

## The numbers don't lie

Here's what research consistently shows:

- **1-3 seconds:** Normal. People stay.
- **3-5 seconds:** You lose about 25% of visitors.
- **5-10 seconds:** You lose about 50% of visitors.
- **10+ seconds:** Almost everyone is gone.

People are impatient, and they have options. If your site takes 6 seconds to load, they hit the back button and click on your competitor who loads in 2. You lost that customer and you didn't even know it.

## Google cares about speed too

Google uses page speed as a ranking factor. Specifically, they measure something called Core Web Vitals — how fast your page loads, how quickly it becomes interactive, and whether stuff shifts around while loading.

Slower site = lower rankings = fewer people find you = fewer customers. It's that simple.

## Why most small business sites are slow

The usual culprits:

**Giant images.** Someone uploaded a 4MB photo straight from their phone. It should be 100-200KB. This is the #1 cause of slow sites.

**Too many plugins.** WordPress sites are notorious for this. 30 plugins all loading their own JavaScript files, fighting each other, slowing everything down.

**Cheap hosting.** That $3/month hosting plan has your site sharing a server with 500 other websites. During peak hours, everything crawls.

**Page builder bloat.** Wix, Elementor, Divi — they generate way more code than necessary to make the drag-and-drop editor work. A page that needs 50 lines of code might have 5,000.

**Third-party scripts.** Chat widgets, analytics tools, Facebook pixels, pop-up plugins — each one adds loading time. Some sites have 15+ third-party scripts running on every page.

## How to check your speed

Go to **pagespeed.web.dev** (Google's own tool). Enter your website URL. It'll give you a score from 0-100 and tell you exactly what's slowing you down.

Green (90-100) = great. Yellow (50-89) = needs work. Red (0-49) = serious problems.

Test the mobile score, not just desktop. Mobile is what matters.

## Quick fixes you can do yourself

- **Compress your images.** Use tinypng.com to shrink images before uploading. Or ask your developer to set up automatic compression.
- **Remove plugins you don't use.** Deactivating isn't enough — delete them.
- **Upgrade your hosting.** Moving from $3/month shared hosting to a $10/month plan can cut load times in half.
- **Remove unnecessary widgets.** That chat bubble, social media feed, and autoplay video on your homepage? Pick one. Not all three.

## The real fix

For a lot of small business sites, the core issue is the platform. A WordPress site with 20 plugins on cheap hosting will never be as fast as a modern site built with clean code on good infrastructure.

When I build sites, speed is built in from the start. Most of my sites score 95+ on Google PageSpeed. They load in under 2 seconds on mobile. No plugins, no bloat, no page builder overhead.

If your site is slow and you want to know how bad it is, I'll run a free speed audit and show you exactly what's going on.
    `,
  },
  {
    slug: "how-to-write-your-business-website-content",
    title: "How to Write the Content for Your Business Website",
    description:
      "Staring at a blank page trying to write your website copy? Here's exactly what to write on each page and how to say it.",
    date: "2026-03-05",
    readTime: "5 min",
    tags: ["Websites", "Content"],
    content: `
The #1 reason small business website projects stall isn't the design or the development — it's the content. Business owners freeze up when it's time to write the words that go on the pages. What do you say? How much do you write? What if it sounds dumb?

Here's a practical framework that works for any small business.

## The homepage (most important page)

Your homepage needs to answer three questions in the first 5 seconds:

1. **What do you do?** "Residential plumbing for the KC metro" — clear and specific.
2. **Who is it for?** "Homeowners in Johnson County" — not everyone, be specific.
3. **What should I do next?** "Call for a free estimate" — one clear action.

That's your hero section. Don't try to be clever. Don't use vague taglines like "Elevating Your Experience" or "Solutions for Tomorrow." Just say what you do.

Below the hero, add:

- **A few sentences about what makes you different.** Family-owned? 20 years experience? Same-day service? Say it.
- **Your main services** listed out (link to the services page).
- **A trust element** — Google review rating, years in business, number of customers served.
- **A call to action** — contact form, phone number, or a "Get a Quote" button.

## The about page

People want to know who they're hiring. This page isn't a corporate bio — it's a chance to build trust.

Write it like you're explaining your business to someone at a backyard barbecue:

- **Who you are.** Name, face, story. How did you get into this business?
- **Why you do this work.** What drives you? What do you care about?
- **Why someone should pick you** over the dozen other options in KC.

Keep it personal. First person ("I" not "we" if you're a solo operator). Customers connect with people, not companies.

## The services page

For each service, cover:

- **What it is** in plain English (not industry jargon)
- **Who needs it** and when
- **What the customer gets** (deliverables, timeline)
- **What it costs** (even a range is better than nothing)
- **How to get started** (call, form, book online)

Don't make people dig for pricing. If you can't give exact numbers, give ranges. "Kitchen remodels typically run $5,000-15,000 depending on scope." That's enough to qualify leads without scaring anyone away.

## The contact page

Keep it simple:

- **Contact form** (name, email, phone, message — that's it)
- **Phone number** (clickable on mobile)
- **Email address**
- **Business hours**
- **Service area** (city/zip codes you cover)

Don't hide your contact info behind 5 pages of content. Make it impossible to miss.

## Writing tips

- **Write like you talk.** Read it out loud. If it sounds like a robot wrote it, rewrite it.
- **Short sentences.** Short paragraphs. People scan, they don't read novels.
- **Use "you" more than "we."** Instead of "We provide excellent service" say "You'll get same-day service."
- **Cut the fluff.** "We are a premier provider of innovative solutions" means nothing. "We fix leaky pipes fast" means everything.
- **Include your location.** Mention your city, neighborhood, or service area naturally throughout the content. It helps Google connect you to local searches.

## If you're stuck

Some people just aren't writers, and that's fine. You don't need to be. When I build websites, I help with the content too. We'll hop on a 20-minute call where I ask you questions about your business, and I'll turn your answers into website copy that sounds like you (not like a marketing textbook).

The hardest part is starting. But your website copy doesn't need to be perfect — it needs to be honest, clear, and helpful. That's it.
    `,
  },
  {
    slug: "kansas-city-small-business-online-guide",
    title: "Kansas City Small Business Owner? Here's Your Online Checklist",
    description:
      "A practical checklist for KC-area business owners who want to get found online. Local tips, local resources, and what actually matters.",
    date: "2026-03-04",
    readTime: "5 min",
    tags: ["Local SEO", "Kansas City", "Small Business"],
    content: `
If you run a small business in the Kansas City area — whether that's downtown KCMO, Overland Park, Olathe, Mission, Shawnee, or anywhere in the metro — here's a practical checklist to get your online presence right.

No theory, no fluff. Just the stuff that actually gets you found by local customers.

## The checklist

### 1. Google Business Profile — set up and optimized

This is non-negotiable. When someone searches "plumber near me" or "bakery in Overland Park," Google shows the local map pack first. If you're not in it, you're invisible for those searches.

- Claim your listing at business.google.com
- Use your real business address (Kansas City, Mission, whatever)
- Pick the most specific category
- Add photos (real ones, not stock)
- Write a description that mentions your KC service area
- Post updates at least once a month

### 2. A real website

Facebook pages and Google Business Profiles are great, but they're not yours. A website you own is the foundation of everything else. It doesn't need to be fancy — it needs to be fast, mobile-friendly, and clearly state what you do, where you do it, and how to contact you.

Make sure your website mentions Kansas City, your specific city, and your service area. Something like "Serving Johnson County, including Overland Park, Olathe, Lenexa, and Shawnee." Google needs those geographic signals.

### 3. Consistent business info everywhere

Your name, address, and phone number (NAP) must be identical across:

- Your website
- Google Business Profile
- Yelp
- Facebook
- Apple Maps
- Any industry directories (Angi, Thumbtack, HomeAdvisor, etc.)

Even small differences matter. "123 Main St" vs "123 Main Street" can confuse search engines.

### 4. Get listed on KC-specific directories

Beyond the national ones, make sure you're on:

- **KC Chamber of Commerce** — membership gets you a directory listing and backlink
- **Johnson County, Wyandotte County, or KCMO business directories**
- **Nextdoor** — huge in KC suburbs for finding local services
- **KCRAR (KC Regional Association of Realtors)** — if you're in home services, agents refer from here
- **Local Facebook groups** — "Overland Park Recommendations," "Johnson County Small Business," etc.

### 5. Google reviews — aim for 20+

Reviews are the biggest trust signal and ranking factor for local search. Most KC businesses have under 10 reviews. If you can get to 20-30 genuine reviews, you'll outrank most of your local competition.

Ask after every completed job. Make it easy — text them a direct link. Respond to every review (good and bad).

### 6. Basic local SEO on your website

Make sure your site has:

- Your city name in page titles (e.g., "Residential Plumbing | Kansas City, KS")
- Your service area mentioned on the homepage
- A dedicated contact page with your full address
- Schema markup for local business (your developer can handle this)

### 7. Mobile-friendly and fast

Over 65% of local searches happen on phones. If your site doesn't work on mobile, you're losing the majority of potential customers. Test your site on your own phone. Can you read everything? Can you tap the call button? Does it load in under 3 seconds?

## What you probably don't need yet

- **Paid ads** — not until your organic presence is solid
- **Social media management** — a few posts a week is enough
- **SEO retainer** — the basics matter more than monthly SEO services
- **A fancy logo** — nice to have, but a clean font treatment works fine

## KC resources

- **SBA Kansas City District Office** — free counseling and workshops
- **SCORE Kansas City** — free mentorship from experienced business owners
- **KC BizCare** — helps with permits, licenses, and starting a business in KCMO
- **NetWork Kansas** — statewide small business resources and microloans

## Want help?

I'm based in Mission, KS and I work specifically with KC-area small businesses. I can set up your Google Business Profile, build your website, and make sure all the local SEO basics are covered. Free audit to start — no pitch, just an honest look at where you stand online.
    `,
  },
  {
    slug: "hiring-a-web-developer-vs-diy",
    title: "Hiring a Web Developer vs. Doing It Yourself: An Honest Comparison",
    description:
      "Should you build your own website or hire someone? Here's a straightforward breakdown of when each option makes sense.",
    date: "2026-03-03",
    readTime: "5 min",
    tags: ["Websites", "Small Business"],
    content: `
I'm a web developer, so you'd expect me to say "always hire a developer." But that's not the honest answer. Sometimes DIY makes sense. Sometimes it doesn't. Here's how to figure out which camp you're in.

## When DIY makes sense

**You're testing a business idea.** If you're not sure your business will work yet, don't spend $500 on a website. A free Carrd page or a simple Squarespace site is fine while you validate the concept.

**You enjoy building things.** Some people genuinely enjoy the process. If web design is a hobby for you and you have the time, go for it. It's a useful skill.

**You have more time than money.** If you're bootstrapping and every dollar counts, spending 40 hours on a Squarespace site might make more sense than spending $400 you don't have.

**Your needs are truly basic.** A single-page site with your name, what you do, and a phone number? A website builder handles that fine.

## When hiring a developer makes sense

**You're an established business losing customers.** If you have paying customers and your website (or lack of one) is costing you business, the math is clear. A $400 investment that brings in even one extra customer per month pays for itself immediately.

**Your time is worth more than the cost.** If you bill $50/hour and a DIY site takes you 40 hours, you just "spent" $2,000 on a website that looks worse than what a developer would charge $400-600 for.

**You need it done right and done fast.** A developer can have your site live in 3-5 days. A DIY project drags on for weeks or months because you're fitting it in between actual work.

**You care about speed and SEO.** Website builders produce bloated code. A custom-built site loads faster, ranks better on Google, and provides a better experience. For a local business competing for search rankings, this matters.

**You've tried DIY and it looks bad.** No shame in this. Web design is a skill. If your DIY site looks like it was built in 2015, it's hurting your business more than helping it.

## The real comparison

Here's a side-by-side for a typical 5-page small business site:

**DIY (Squarespace/Wix):**
- Cost: $200-400/year (ongoing)
- Time: 30-50 hours initially, then hours for every change
- Quality: Template-based, looks like thousands of other sites
- Speed: Average (page builder bloat)
- SEO: Basic (limited control)
- Ownership: You don't own the code

**Hired developer:**
- Cost: $350-600 one-time
- Time: A few calls + review feedback
- Quality: Custom, built for your specific business
- Speed: Fast (clean code, modern tools)
- SEO: Proper setup from the start
- Ownership: You own everything

After year one, the DIY option costs the same or more than hiring a developer. After year two, it definitely costs more. And the developer-built site looks better, loads faster, and ranks higher the entire time.

## The middle ground

Some people want to manage their own content after launch. That's totally reasonable. I can build your site and set it up so you can easily update text, add photos, or post updates without touching code. Best of both worlds — professional build, easy maintenance.

## My honest recommendation

If your business is making money and you're serious about it, hire a developer. Not necessarily me — just someone who builds clean, fast, mobile-friendly sites and charges a fair price.

If you're still figuring things out, DIY is fine as a starting point. But set a deadline. If you've been "working on the website" for 3 months and it's still not live, it's time to hand it off.
    `,
  },
  {
    slug: "website-maintenance-what-happens-after-launch",
    title: "Your Website Is Live — Now What? A Guide to Maintenance",
    description:
      "Launching a website is just the start. Here's what ongoing maintenance looks like and why it matters for your business.",
    date: "2026-03-02",
    readTime: "4 min",
    tags: ["Websites", "Maintenance"],
    content: `
You launched your website. It looks great. Everything works. Now you can forget about it for the next 5 years, right?

Not exactly.

## Websites aren't "set it and forget it"

A website is more like a car than a billboard. A billboard just sits there. A car needs oil changes, tire rotations, and the occasional repair. Your website needs attention too — not constant attention, but some.

Here's what that actually looks like.

## The basics (do this monthly)

**Check that everything still works.** Click every link. Submit the contact form (to yourself). Load the site on your phone. Things break over time — hosting changes, third-party services update, SSL certificates expire. A monthly check catches problems before customers do.

**Keep your info current.** Changed your hours? Got a new phone number? Added a service? Update the site. I see businesses with websites showing hours from 2023. That's worse than having no hours listed at all.

**Check your Google Business Profile.** Make sure hours are current, respond to new reviews, add a post. Google rewards active profiles with better rankings.

## The technical stuff (quarterly)

**Update your software.** If your site runs on WordPress, those plugin and core updates aren't optional. Outdated software is the #1 way small business sites get hacked. Seriously — hackers specifically target outdated WordPress installations.

**Check your speed.** Run your site through pagespeed.web.dev every few months. If it's gotten slower, something changed. Maybe an image got uploaded without compression, or a new plugin is dragging things down.

**Review your analytics.** If you have Google Analytics set up (you should), check what pages people visit, where they come from, and whether traffic is going up or down. You don't need to obsess over this, but a quarterly glance tells you a lot.

## The strategic stuff (twice a year)

**Update your content.** Are your prices still accurate? Do your case studies reflect your recent work? Is your bio current? Stale content signals a stale business.

**Check your competitors.** Pull up the websites of your top 3 local competitors. Have they improved? Are they ranking above you now? This tells you if you need to step up your game.

**Ask for feedback.** Ask a customer or friend to browse your site and tell you what's confusing. Fresh eyes catch things you've gone blind to.

## What happens if you don't maintain it

- **Security vulnerabilities.** Outdated software gets hacked. It happens to small business sites constantly.
- **Broken features.** Forms stop working, maps break, images disappear. Customers think you've gone out of business.
- **Falling rankings.** Google favors active, updated sites. An untouched site slowly drops in search results.
- **Bad first impressions.** A copyright date from 2022 tells visitors you don't pay attention to details.

## How I help

I offer a monthly retainer for $50-75/month that covers all of this — updates, monitoring, speed checks, content tweaks, and priority support when you need something changed. Think of it like a subscription to "I don't have to worry about my website."

It's completely optional. I'll never lock you into a maintenance contract. But most clients find it's worth the peace of mind, especially if they don't want to think about their website between updates.

Your website is the most reliable employee you have. Keep it in good shape and it'll keep working for you.
    `,
  },
  {
    slug: "what-makes-a-good-small-business-website",
    title: "What Makes a Good Small Business Website in 2026?",
    description:
      "Forget the bells and whistles. Here are the things that actually matter when it comes to a small business website that works.",
    date: "2026-03-01",
    readTime: "4 min",
    tags: ["Websites", "Design"],
    content: `
There are a lot of opinions about what makes a "good" website. Most of them are wrong — at least for small businesses. You don't need what Apple has. You need something that gets you customers.

Here's what actually matters.

## It loads fast

This is #1 for a reason. If your site takes more than 3 seconds to load on a phone, you're losing people. Fast means under 2 seconds. That's not a nice-to-have — it directly affects your Google ranking and your conversion rate.

## It works on phones

Over 60% of your visitors are on their phones. If your site looks great on desktop but terrible on mobile, you've got it backwards. Design for phones first, desktop second.

Test this right now: pull up your site on your phone. Can you read everything without zooming? Can you tap buttons without accidentally hitting the wrong one? Can you fill out the contact form without wanting to throw your phone?

## It clearly says what you do

Within 5 seconds of landing on your site, a visitor should know:

- What your business does
- Where you're located
- How to contact you

That's it. If someone has to scroll and click around to figure out what you do, your site is failing at its most basic job.

## It has one clear call to action

"Call us" or "Get a free estimate" or "Book online." Pick one primary action and make it obvious on every page. Don't give people 7 different things to click — they'll choose none of them.

A phone number in the header (clickable on mobile) + a contact form. That covers 90% of small businesses.

## It looks professional (not fancy)

Professional doesn't mean animations, parallax scrolling, and video backgrounds. It means:

- **Clean layout** with enough white space
- **Readable fonts** at a reasonable size
- **Real photos** (not obvious stock photos)
- **Consistent colors** that match your brand
- **No spelling errors** or broken links

Simple and clean beats complex and flashy every time. Your customers aren't judging your website against Apple.com — they're judging it against your competitors. And most of your local competitors have mediocre sites, so the bar isn't that high.

## It has social proof

People trust other people more than they trust you. Include:

- **Google review score** (or a few featured reviews)
- **Number of customers served** (if it's impressive)
- **Years in business**
- **Photos of real work** (before/after, completed projects)

You don't need a dedicated testimonials page. A few trust signals sprinkled throughout the site work great.

## It's secure (HTTPS)

If your site URL starts with "http://" instead of "https://", browsers show a "Not Secure" warning. That scares customers away and hurts your Google ranking. An SSL certificate is free through most hosting providers. There's no excuse for not having it in 2026.

## What you don't need

- **A blog** (nice for SEO, but not essential for every business)
- **Social media feeds** on your site (slows it down, looks cluttered)
- **A chatbot** (useful for some, overkill for many)
- **Animations everywhere** (they're cool the first time, annoying the tenth time)
- **A massive photo gallery** (pick your 10-15 best, not every job you've ever done)

## The bottom line

A good small business website is fast, mobile-friendly, clear about what you do, and makes it easy to contact you. Everything else is secondary. Get those fundamentals right and you'll be ahead of 80% of your local competition.
    `,
  },
  {
    slug: "do-you-need-a-website-or-just-social-media",
    title: "Do You Need a Website or Is Social Media Enough?",
    description:
      "A lot of business owners think Instagram or Facebook is all they need. Here's when that's true and when it's not.",
    date: "2026-02-28",
    readTime: "4 min",
    tags: ["Websites", "Social Media", "Small Business"],
    content: `
"I already have an Instagram page with 2,000 followers. Why do I need a website?"

I hear this at least once a week. And it's a fair question. Social media is powerful. But it's not a replacement for a website. Here's why.

## You don't own social media

This is the big one. Instagram, Facebook, TikTok — these are rented platforms. You're building your business on someone else's land.

Facebook has already shown what happens when they change the rules. Organic reach for business pages went from 16% in 2012 to under 2% now. Pages that used to get hundreds of views per post now get 10. The platform changed and businesses had no recourse.

Instagram could do the same thing tomorrow. TikTok might get banned (again). If your entire online presence is on a platform you don't control, you're one algorithm change away from losing everything.

Your website? You own it. Nobody can take it away or throttle your visibility.

## Social media doesn't rank on Google

When someone searches "plumber in Mission KS," Google doesn't show Instagram pages. It shows websites and Google Business Profiles.

Social media is great for building community and staying top of mind with existing customers. But it's terrible for being discovered by new customers who are actively searching for what you offer.

## Different tools for different jobs

Think of it this way:

- **Social media** = networking event. You're building relationships, showing personality, staying visible.
- **Website** = your storefront. It's where people go when they're ready to buy.

You need both, but they serve different purposes. Social media brings awareness. Your website converts that awareness into action.

## When social media alone can work

To be fair, there are cases where social media is enough:

- **You're a personal brand** (artist, musician, influencer) and your audience lives on social platforms
- **You're testing a business idea** and you're not ready to invest in a site yet
- **Your business is exclusively online/social** (drop shipping, content creation)

For a local service business — plumber, barber, tutor, landscaper, baker — social media alone isn't enough.

## The ideal setup

Here's what actually works for a KC small business:

1. **Google Business Profile** — so you show up in local search
2. **A website** — so people can learn about you and contact you
3. **One or two social platforms** — to stay visible and share your work

You don't need to be on every platform. Pick the one where your customers actually hang out. For most local businesses in KC, that's Facebook and maybe Instagram. Post 2-3 times a week — photos of your work, happy customers, before/afters. That's enough.

## The real question

The question isn't "website or social media?" It's "which one should I set up first?" The answer is Google Business Profile (free, 30 minutes), then a website ($350-600), then social media (free, ongoing).

Social media without a website is like handing out business cards that say "Google me." Sometimes they will, sometimes they won't. A website makes sure that when they do look you up, they find something professional and convincing.
    `,
  },
  {
    slug: "how-to-get-more-google-reviews",
    title: "How to Get More Google Reviews for Your Business",
    description:
      "Google reviews are the most powerful trust signal for local businesses. Here's how to actually get more of them without being annoying.",
    date: "2026-02-27",
    readTime: "5 min",
    tags: ["Google", "Small Business", "Marketing"],
    content: `
Google reviews can make or break a local business. When someone searches for what you offer and sees one business with 3 reviews and another with 47, they're picking the one with 47 almost every time. It doesn't matter how good you actually are — perception is reality when someone is choosing between strangers on the internet.

So how do you get more reviews without being weird about it?

## Why reviews matter so much

**They're the #1 trust signal.** Before Google reviews, people asked friends for recommendations. Now they ask Google. A strong review profile is the digital version of a personal recommendation.

**They directly affect your ranking.** Google's local algorithm weighs reviews heavily. More reviews + higher ratings = higher placement in the Maps pack. This is confirmed by Google, not speculation.

**They convert browsers into buyers.** Someone who finds your Google listing and sees consistent 5-star reviews is significantly more likely to contact you than someone with no reviews.

## The simple system

Here's a process that works for any local business:

### 1. Create a direct review link

Google makes this easy. Go to your Google Business Profile, click "Ask for reviews," and copy the short link. This takes customers directly to the review form — no searching for your business, no figuring out where to click.

### 2. Ask at the right time

Timing is everything. The best time to ask is right after you've delivered great service and the customer is happy. For a plumber, that's right after you've fixed the leak and the customer is relieved. For a barber, that's when the customer is looking in the mirror and smiling.

Don't wait a week. Don't send a follow-up email 3 days later. Ask in the moment.

### 3. Make it easy

Say something like: "I'm glad you're happy with the work. If you have a minute, a Google review would really help my business. I can text you the link right now."

Then text them the direct link. One tap, they're on the review page. The easier you make it, the more likely they'll actually do it.

### 4. Follow up once (only once)

If they didn't leave a review after the text, send one follow-up a day or two later. Something like: "Hey, just following up — here's that Google review link if you get a chance. No pressure at all."

One follow-up. Not two. Not three. Don't be that business.

## What not to do

- **Don't offer incentives.** "Leave a review and get 10% off" violates Google's policies. They'll remove the reviews and potentially penalize your listing.
- **Don't buy fake reviews.** Google's AI catches these. It might take weeks or months, but fake reviews get flagged and removed, and your profile can get suspended.
- **Don't review-gate.** That's when you ask if the customer had a good experience first, and only send the review link if they say yes. Google specifically prohibits this.
- **Don't ask everyone at once.** A business that goes from 5 reviews to 50 in a week looks suspicious. Let them come in naturally over time.

## Responding to reviews

Always respond to every review. Every single one.

**For positive reviews:** Thank them specifically. "Thanks, Sarah! Glad we could get that faucet fixed quickly. Appreciate you taking the time to leave a review."

**For negative reviews:** Stay calm and professional. Don't argue. Acknowledge their experience, apologize if appropriate, and offer to make it right. "I'm sorry about your experience, Mike. That's not the level of service I aim for. I'd like to make this right — feel free to call me directly at 816-555-1234."

How you respond to negative reviews actually matters more than the negative review itself. People read those responses and judge your character.

## Realistic numbers

For most small businesses, here's a reasonable trajectory:

- **Month 1-2:** 5-10 reviews (actively asking every customer)
- **Month 3-6:** 15-25 reviews
- **Month 6-12:** 25-50 reviews
- **Year 2+:** 50-100+ reviews

You don't need hundreds of reviews to rank well locally. 20-30 solid reviews with a 4.5+ average puts you ahead of most competitors.

## The long game

Reviews aren't a one-time campaign. It's a habit. Make asking for reviews part of your process — right after every job, every sale, every positive interaction. Over time, they stack up. And once you have 50+ genuine reviews, your Google listing becomes one of the most powerful marketing assets your business has.

Free, permanent, and incredibly effective. You just have to ask.
    `,
  },
  {
    slug: "why-every-small-business-needs-a-website",
    title: "Why Every Small Business Needs a Website in 2026",
    description:
      "If you're running a business without a website, you're invisible to most of your potential customers. Here's why it matters more than ever.",
    date: "2026-02-23",
    readTime: "4 min",
    tags: ["Websites", "Small Business"],
    content: `
You might think your business doesn't need a website. You've got word of mouth, maybe a Facebook page, and business is fine. I hear this a lot from small business owners in KC, and I get it — if something's working, why change it?

But here's the thing: **you're leaving money on the table.**

## People Google everything now

When someone's toilet breaks at 2am, they don't dig through a phone book. They Google "plumber near me." When someone wants a haircut in Mission, they search "barber Mission KS." If you don't have a website, you don't show up. Period.

Even if someone hears about you through a friend, the first thing they do is look you up online. No website? That feels sketchy to most people in 2026. They'll go with the competitor who has one.

## A Facebook page isn't a website

I hear this one a lot: "I have a Facebook page, isn't that enough?" No. Here's why:

- **You don't own it.** Facebook can change their algorithm, limit your reach, or shut down your page tomorrow. Your website is yours.
- **It looks unprofessional.** A Facebook page says "I haven't invested in my business." A clean website says "I'm legit."
- **You can't rank on Google with a Facebook page.** Not effectively, anyway.
- **You can't control the experience.** On your site, you decide exactly what people see and how they contact you.

## It doesn't have to be expensive

This is the big misconception. People hear "website" and think $5,000-$10,000 from some agency. That's not the reality for most small businesses.

A clean, fast, mobile-friendly site with a few pages and a contact form? That can be done for a few hundred dollars. I build them starting at $350. You don't need animations, videos, and a blog with 50 posts. You need:

- Your name and what you do
- How to contact you
- Where you're located
- Maybe some photos of your work

That's it. Simple, clean, and effective.

## It works for you 24/7

Your website doesn't take breaks. It doesn't call in sick. It's there at midnight when someone is Googling your type of business. It's there on weekends. It's there on holidays. It's the most reliable employee you'll ever have.

## What to do next

If you don't have a website, or if yours looks like it was built in 2010, it's time. You don't need to overthink it. Start simple, get something cleaned up, and you can always build on it later.

I offer free audits for small businesses — no pitch, no pressure. Just an honest look at where you stand online and what would help.
    `,
  },
  {
    slug: "how-much-should-a-website-cost",
    title: "How Much Should a Small Business Website Cost?",
    description:
      "The honest answer to the most common question I get. Spoiler: it's probably less than you think.",
    date: "2026-02-22",
    readTime: "5 min",
    tags: ["Websites", "Pricing"],
    content: `
This is the #1 question I get from small business owners: "How much is a website going to cost me?" And honestly, it's a fair question — the range online is insane. You'll see everything from $50 Wix templates to $50,000 agency quotes.

Here's the real answer for a small business.

## The agency problem

Big agencies charge $3,000-$15,000+ for a small business website. Why? Because they have account managers, project managers, designers, developers, QA testers, and an office in a nice part of town. You're paying for all of that overhead — not just the website.

The actual work of building a 5-page small business site? That's not $10,000 worth of work. Not even close.

## The DIY trap

On the other end, you've got Wix, Squarespace, and WordPress.com. They look cheap upfront — $15/month, build it yourself! But here's what they don't tell you:

- **You'll spend 40+ hours fighting the builder.** Your time has value.
- **It'll look like a template** because it is one. Your competitors probably picked the same one.
- **You'll need plugins for basic stuff** and those have monthly fees that add up.
- **It'll be slow.** Page builders add bloat. Google notices, and so do your customers.
- **You won't know SEO.** So you'll build something that looks okay but doesn't rank.

## What a website should actually cost

For a typical small business — a plumber, a barber, a bakery, a landscaper, a tutor — here's what you actually need:

**$350-600 gets you:**
- 3-5 pages (home, about, services, contact, maybe a gallery)
- Mobile-friendly design that looks good on phones
- Contact form that actually works
- Basic SEO so Google can find you
- Fast loading speed
- You own everything when it's done

That's it. That's a real, professional website that will serve you well.

## When it costs more

Some businesses need more, and that's fine:

- **E-commerce** (selling products online) — more complex, more pages, payment integration
- **Booking systems** — appointment scheduling, calendar integration
- **Custom features** — AI chatbots, client portals, member areas
- **Ongoing content** — regular blog posts, SEO campaigns

These push the price up, but a basic business website? A few hundred dollars from someone who knows what they're doing.

## What to watch out for

Red flags when someone quotes you for a website:

- **Monthly payments that never end.** Some companies charge $200/month forever. After 2 years you've paid $4,800 and you still don't own it.
- **Long contracts.** You shouldn't need to commit to 12 months for a website.
- **Vague pricing.** If they can't give you a number, that's a problem.
- **Upselling everything.** "You need social media management, SEO retainer, content creation, brand strategy..." Maybe. But probably not right now.

## My approach

I give you one clear price upfront. 50% before, 50% when it's done. You own everything. No monthly lock-in, no surprise fees. If you want ongoing help after, I offer a retainer — but it's optional, not required.

Simple as that.
    `,
  },
  {
    slug: "signs-your-website-is-losing-customers",
    title: "5 Signs Your Website Is Losing You Customers",
    description:
      "Your website might be hurting your business more than helping it. Here's how to tell.",
    date: "2026-02-21",
    readTime: "4 min",
    tags: ["Websites", "Small Business"],
    content: `
Having a website is better than not having one. But having a *bad* website? That can actually be worse than nothing. A bad site tells people "this business doesn't care about quality" — and they'll take their money elsewhere.

Here are 5 signs your website is costing you customers.

## 1. It's not mobile-friendly

Pull out your phone right now and look at your website. Does it look good? Can you read the text without zooming in? Can you tap the buttons without accidentally hitting the wrong one?

Over 60% of web traffic is on phones now. If your site doesn't work on mobile, you're turning away the majority of your visitors. Google also ranks mobile-friendly sites higher, so you're hurting your search visibility too.

## 2. It takes forever to load

If your site takes more than 3 seconds to load, about half your visitors will leave before they see anything. They'll hit the back button and click on your competitor instead.

Common culprits: huge uncompressed images, too many plugins, cheap hosting, bloated page builders. A fast site loads in under 2 seconds.

## 3. There's no clear way to contact you

I see this constantly. Someone lands on a small business website and... there's no phone number. No contact form. Maybe there's an email buried in the footer in tiny text.

Your contact info should be obvious. Phone number in the header. Contact form on its own page. An email that's easy to find. Make it dead simple for people to reach you.

## 4. It looks like it was built 10 years ago

Web design trends change. If your site has:

- Tiny text on a white background
- Stock photos that look like they're from 2012
- A layout that feels "boxy" and cluttered
- Flash animations (yes, some sites still have these)
- A "last updated" date from years ago

...people will assume your business is outdated too. First impressions matter, and your website is often the first impression.

## 5. It doesn't tell people what you do

This sounds obvious, but you'd be surprised. I've seen business websites where I couldn't figure out what they actually do within the first 5 seconds.

When someone lands on your site, they should immediately see:
- **What you do** (plumbing, tutoring, landscaping, etc.)
- **Where you do it** (Kansas City, Mission, KC metro, etc.)
- **How to get started** (call, fill out a form, book online)

If your site doesn't answer those three questions instantly, people will leave.

## The fix

The good news: most of these problems are fixable without rebuilding from scratch. A website refresh — cleaning up the design, speeding it up, making it mobile-friendly, and fixing the content — can usually be done for $100-250.

Sometimes a full rebuild makes more sense, but don't assume you need to start over. Often the bones are fine and it just needs some work.
    `,
  },
  {
    slug: "what-is-an-ai-chatbot",
    title: "What Is an AI Chatbot and Does Your Business Need One?",
    description:
      "AI chatbots aren't just for big companies anymore. Here's what they actually do and whether one makes sense for your business.",
    date: "2026-02-20",
    readTime: "5 min",
    tags: ["AI", "Small Business"],
    content: `
You've probably seen chatbots on websites — those little chat bubbles in the corner that pop up and ask if you need help. Most of them are terrible. They follow a script, they can't actually answer your question, and they feel like talking to a brick wall.

AI chatbots are different. And they're getting good enough that they actually make sense for small businesses now.

## What an AI chatbot actually does

An AI chatbot uses artificial intelligence (think ChatGPT-level technology) to have real conversations with your website visitors. It's not following a script with pre-written responses. It actually understands what people are asking and gives useful answers.

Here's what that looks like in practice:

- A customer asks "What are your hours on Saturday?" and the bot answers correctly
- Someone asks "Do you do kitchen remodels?" and the bot explains your services
- A lead asks "How much does a basic service cost?" and the bot gives a helpful range
- Someone asks a question at 11pm on a Sunday — and actually gets an answer

## How it helps your business

**It captures leads while you sleep.** Someone visits your site at midnight, has a question, and instead of leaving they chat with your bot. The bot answers their question and collects their contact info. You wake up to a new lead in your inbox.

**It answers the same questions so you don't have to.** Every business has those 10-15 questions they get asked constantly. The chatbot handles all of them automatically.

**It makes you look professional.** Having an AI chatbot on your site signals that you're a modern, tech-savvy business. That matters to a lot of customers.

**It qualifies leads.** The bot can ask visitors what they need, what their budget is, and when they're looking to start — so by the time they reach you, you already know if they're a good fit.

## Does your business need one?

An AI chatbot makes sense if:

- **You get website visitors but not enough inquiries.** The chatbot lowers the barrier to reaching out.
- **You're missing calls or emails.** Maybe you're on a job site all day and can't answer the phone. The bot covers for you.
- **You answer the same questions repeatedly.** Automate those answers and save yourself time.
- **You want to stand out.** Most of your local competitors don't have one. It's a differentiator.

It probably doesn't make sense if:

- **You don't have a website yet.** Get the website first.
- **Your business runs entirely on referrals and you're fully booked.** If you don't need more leads, you don't need a chatbot.

## What it costs

I build AI chatbots for small businesses for $250-500. That includes training the bot on your specific business, setting it up on your website, and making sure it gives accurate, helpful answers about your services.

There's usually a small monthly cost for the AI service (think $20-50/month depending on usage), but the leads it captures typically pay for that many times over.

## It's not as complicated as it sounds

The whole point of working with someone like me is that you don't need to understand the technology. I handle the setup, the training, the integration — all of it. You just get more leads and fewer repetitive questions.
    `,
  },
  {
    slug: "google-business-profile-guide",
    title: "Google Business Profile: The Free Tool You're Probably Ignoring",
    description:
      "Your Google Business Profile is the single most impactful thing for local search. Here's how to set it up right.",
    date: "2026-02-19",
    readTime: "5 min",
    tags: ["Google", "Local SEO", "Small Business"],
    content: `
If there's one thing I could tell every small business owner to do today, it would be this: **set up your Google Business Profile.** It's free, it takes 30 minutes, and it's probably the single most important thing you can do for your online visibility.

## What is it?

Google Business Profile (GBP) is that box that shows up on the right side of Google when you search for a business, or those listings that appear on Google Maps. It shows your name, address, phone number, hours, reviews, photos, and a link to your website.

When someone searches "plumber near me" or "coffee shop Mission KS," the first thing they see isn't website results — it's the Google Maps pack with 3 local businesses. That's powered by Google Business Profiles.

## Why it matters so much

**It's where most local searches end.** Studies show that nearly half of all Google searches have local intent. And most people pick a business from the Maps results without ever scrolling down to the website listings.

**Reviews live here.** Your Google reviews are the most powerful social proof you have. When someone sees you have 47 five-star reviews, that's more convincing than anything on your website.

**It's free traffic.** You don't pay for clicks from your Google Business Profile. It's free visibility to people actively searching for what you offer.

## How to set it up right

### 1. Claim your listing

Go to business.google.com and either claim your existing listing or create a new one. Google will verify you own the business (usually by sending a postcard with a code to your address).

### 2. Fill out everything

Don't skip fields. Fill out:

- **Business name** — exactly as it appears in real life
- **Category** — pick the most specific one (e.g., "Residential Plumber" not just "Plumber")
- **Address and service area** — be specific
- **Phone number** — one you actually answer
- **Hours** — keep these updated, especially holidays
- **Website URL** — if you have one
- **Business description** — what you do, who you serve, where you operate

### 3. Add photos

Businesses with photos get 42% more requests for directions and 35% more clicks to their website. Add:

- Your storefront or work vehicle
- Your team (or just you)
- Your work (completed projects, products, etc.)
- Interior shots if applicable

Real photos, not stock images. People can tell the difference.

### 4. Get reviews

This is the big one. Ask every happy customer to leave a Google review. Make it easy:

- Send them a direct link to your review page
- Ask right after you've done good work (timing matters)
- Don't be weird about it — a simple "If you're happy with the work, a Google review would really help me out" goes a long way

### 5. Post updates

Google Business Profile has a "posts" feature. Use it. Share updates, offers, photos of recent work. It shows Google you're active and gives searchers more reasons to choose you.

## Common mistakes

- **Wrong hours.** Nothing loses trust faster than showing up to a closed business when Google said they were open.
- **Not responding to reviews.** Respond to every review — good and bad. It shows you care.
- **Ignoring questions.** People can ask questions on your profile. Answer them quickly.
- **Duplicate listings.** If you have multiple listings for the same business, clean that up. It confuses Google.

## I can do this for you

If this all sounds like a hassle, I offer Google Business Profile setup and optimization for $75. I'll claim your listing, optimize every field, write your business description, and show you how to collect reviews. Takes the whole thing off your plate.
    `,
  },
  {
    slug: "why-i-dont-work-like-an-agency",
    title: "Why I Don't Work Like an Agency",
    description:
      "Agencies have their place. But for most small businesses, working with one person who actually builds the thing is better.",
    date: "2026-02-18",
    readTime: "4 min",
    tags: ["Business", "Personal"],
    content: `
I'm not an agency. I'm one person — Jacob. I do the consulting, the design, the development, and the deployment. When you email me, I'm the one who reads it. When you have a question about your site, I'm the one who answers it.

And honestly? For most small businesses, that's a better deal.

## The agency experience

Here's what typically happens when a small business hires an agency:

1. You talk to a **sales person** who promises you the world
2. You get handed off to an **account manager** who translates your needs
3. The account manager talks to a **project manager** who plans the work
4. The project manager assigns it to a **designer** who makes mockups
5. The mockups go to a **developer** who builds the site
6. The developer's work goes to **QA** for testing
7. Questions and revisions go back through this entire chain

You're playing telephone with your own project. Every person in that chain adds time, cost, and the chance of miscommunication.

And you're paying for all of them. The person actually building your site might take 15 hours. But you're billed for 60 hours because everyone else needs their cut.

## How I work

You talk to me. I listen to what you need. I build it. We go back and forth until you're happy. Done.

No telephone game. No layers. No bloated timelines. If you want to change something, you text me and it's done that day — not "I'll submit a change request to the project manager who will schedule it with the development team for next sprint."

## Why this is better for small businesses

**It's faster.** No handoffs, no waiting for approvals, no "let me check with the team." I can usually deliver a full website in 1-2 weeks.

**It's cheaper.** I don't have an office, a sales team, or a middle management layer. My overhead is basically a laptop and some coffee. That means lower prices for you.

**Communication is direct.** You have a question? You ask me. You get an answer from the person who actually built the thing. Not a filtered version through someone who has never looked at your code.

**I actually care.** This isn't a project number in some agency's pipeline. Your business and your website reflect on me directly. I have every incentive to make it great.

## When you should hire an agency

I'll be honest — agencies have their place. If you're a mid-size company that needs:

- A team of 5+ working simultaneously
- Enterprise-level software with complex integrations
- A 50-page website with ongoing content production
- Dedicated design, development, and marketing departments

Then yeah, an agency might make sense. But if you're a small business that needs a clean website, some AI tools, or help showing up on Google? You don't need all that. You need someone who will sit down, listen, and build what you actually need.

That's what I do.
    `,
  },
  {
    slug: "email-automation-101",
    title: "Email Automation 101: Set It and Forget It",
    description:
      "How automated emails can save you hours every week and make sure no lead falls through the cracks.",
    date: "2026-02-17",
    readTime: "4 min",
    tags: ["Automation", "Small Business"],
    content: `
You know that feeling when you realize you forgot to follow up with a potential customer? They reached out two weeks ago, you got busy, and now they've probably gone with someone else.

Email automation fixes that. Once it's set up, it runs automatically — no more forgetting, no more missed opportunities.

## What email automation actually means

It's simpler than it sounds. Email automation means setting up emails that send themselves when something specific happens. For example:

- **Someone fills out your contact form** → They instantly get a confirmation email saying you'll be in touch within 24 hours
- **You finish a job** → The customer automatically gets a thank-you email with a link to leave a review
- **A lead goes cold** → They get a friendly follow-up email a week later checking in
- **Someone books an appointment** → They get a reminder email the day before

You set these up once and they run forever. No manual work, no forgetting, no hiring someone to send emails all day.

## Why it matters for small businesses

**Speed wins deals.** Studies show that responding to a lead within 5 minutes makes you 21 times more likely to close the deal compared to waiting 30 minutes. Automation gives you instant response time, even when you're on a job.

**Consistency builds trust.** When every customer gets a professional follow-up, a thank-you, and a check-in, it makes your business feel polished and reliable. Even if it's just you running the show.

**Reviews are the lifeblood of local business.** That automatic review request email after a job? It's the easiest way to build up your Google reviews without awkwardly asking every customer in person.

**No leads fall through the cracks.** Every inquiry gets a response. Every lead gets followed up on. Every customer gets thanked. Automatically.

## What it looks like in practice

Here's a simple automation I set up for a lot of small businesses:

**New Lead Flow:**
1. Customer fills out contact form on website
2. They instantly receive: "Thanks for reaching out! I got your message and will get back to you within 24 hours. — Jacob"
3. You get a notification with their details
4. If you haven't responded in 24 hours, you get a reminder
5. After the job is done, they get a review request email

That entire flow runs without you lifting a finger after the initial setup.

## Common automations that work great

- **Appointment reminders** — reduces no-shows by up to 30%
- **Review requests** — sent 1-2 days after service completion
- **Welcome emails** — for new customers or newsletter subscribers
- **Follow-up sequences** — for leads who didn't convert right away
- **Seasonal check-ins** — "Hey, it's been 6 months since we serviced your HVAC. Time for a tune-up?"

## It's not spammy

Let me be clear: this isn't about blasting people with marketing emails they didn't ask for. It's about sending the right message at the right time to people who already engaged with your business. That's not spam — that's good customer service.

## What it costs

I set up email automation for $200-350 depending on complexity. That includes the initial strategy, setting up the flows, writing the emails, and testing everything. The email platform itself usually runs $20-50/month depending on your list size.

The ROI is pretty straightforward: if one automation prevents one lost lead per month, it's already paid for itself.
    `,
  },
  {
    slug: "local-seo-what-actually-matters",
    title: "SEO for Local Businesses: What Actually Matters",
    description:
      "Forget the jargon. Here's what you actually need to do to show up when people search for your type of business in your area.",
    date: "2026-02-16",
    readTime: "5 min",
    tags: ["SEO", "Local Business"],
    content: `
SEO — Search Engine Optimization — is one of those terms that makes most business owners' eyes glaze over. And I don't blame you. The SEO industry is full of jargon, snake oil, and people charging $2,000/month for "optimization" that doesn't move the needle.

Here's what actually matters for a local small business.

## The basics (the stuff that actually works)

### 1. Google Business Profile

I wrote a whole post about this, but it bears repeating: your Google Business Profile is the most important thing for local SEO. If you do nothing else, do this. Claim it, fill it out completely, and get reviews.

### 2. Your website needs to say what you do and where

This sounds obvious but most small business websites fail at this. Google needs to see clear signals about:

- **What service you provide** — "residential plumbing" not just "services"
- **Where you provide it** — "Kansas City," "Mission KS," "Johnson County"
- **Who you are** — a real business with a real address

Put your city and service in your page titles, headings, and throughout your content. Not in a spammy way — just naturally. "Residential Plumbing in Kansas City" as a heading is both good for SEO and helpful for visitors.

### 3. Mobile-friendly and fast

Google has been using mobile-first indexing for years now. If your site isn't mobile-friendly, your rankings suffer. If it's slow, your rankings suffer. A fast, responsive site is table stakes for SEO in 2026.

### 4. Consistent name, address, and phone (NAP)

Your business name, address, and phone number need to be exactly the same everywhere — your website, Google Business Profile, Yelp, Facebook, Yellow Pages, everywhere. Inconsistencies confuse Google and hurt your rankings.

If your website says "Bob's Plumbing LLC" but your Google profile says "Bob's Plumbing" and Yelp says "Bobs Plumbing LLC" — that's a problem.

### 5. Reviews

Google factors reviews into local rankings. More reviews (and better reviews) = higher rankings. Respond to every review too — Google sees that as a positive signal.

## What doesn't matter (as much as people say)

### Blogging for SEO

"You need to blog every week for SEO!" No. For a local business, a blog is nice to have but it's not the main driver of your rankings. Your Google Business Profile, reviews, and on-page basics matter way more.

Don't let someone charge you hundreds per month for blog posts when your Google Business Profile isn't even optimized.

### Meta keywords

Some SEO people still talk about "meta keywords." Google has literally said they ignore the meta keywords tag. It hasn't mattered for over a decade.

### Backlink schemes

"We'll get you 500 backlinks for $200!" These are spam links that will hurt you, not help you. Quality backlinks matter, but you can't buy them for $200 on Fiverr.

### Complex technical SEO

Unless your site has serious technical issues (broken pages, duplicate content, can't be crawled), you don't need an expensive technical SEO audit. The basics — fast loading, mobile-friendly, clear structure — cover 90% of what matters for a small business.

## The honest truth about SEO

For most local businesses, SEO isn't some magical, complex thing. It comes down to:

1. **Google Business Profile** — optimized and active
2. **A decent website** — mobile-friendly, fast, says what you do and where
3. **Reviews** — consistently getting new ones
4. **Consistency** — same info everywhere online

Do those four things and you'll outrank most of your local competitors, because most of them aren't doing even that.

## What I include

Every website I build comes with SEO basics baked in — proper page titles, meta descriptions, heading structure, fast loading, mobile responsiveness, and local keywords. It's not an add-on or an upsell. It's just how I build sites.

If you want more dedicated SEO work, we can talk about that. But for most small businesses, the basics done well are more than enough to get results.
    `,
  },
];
