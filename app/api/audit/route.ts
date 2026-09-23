import { NextRequest, NextResponse } from "next/server";
import { isRateLimited } from "@/lib/rate-limit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BYTES = 2_000_000; // cap how much of the page we read
const FETCH_TIMEOUT_MS = 9000;

const BLOCKED_HOSTS = new Set([
  "localhost",
  "127.0.0.1",
  "0.0.0.0",
  "::1",
]);

function isPrivateHostname(hostname: string): boolean {
  const h = hostname.toLowerCase();
  if (BLOCKED_HOSTS.has(h)) return true;
  if (h.endsWith(".local") || h.endsWith(".internal")) return true;
  // IPv4 literal private ranges
  const ipv4 = h.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);
  if (ipv4) {
    const [a, b] = [Number(ipv4[1]), Number(ipv4[2])];
    if (a === 10) return true;
    if (a === 127) return true;
    if (a === 192 && b === 168) return true;
    if (a === 172 && b >= 16 && b <= 31) return true;
    if (a === 169 && b === 254) return true;
  }
  if (!h.includes(".")) return true; // bare hostnames — not a public domain
  return false;
}

function normalizeUrl(input: string): URL | null {
  let raw = input.trim();
  if (!raw) return null;
  if (!/^https?:\/\//i.test(raw)) raw = `https://${raw}`;
  try {
    const url = new URL(raw);
    if (url.protocol !== "http:" && url.protocol !== "https:") return null;
    if (isPrivateHostname(url.hostname)) return null;
    return url;
  } catch {
    return null;
  }
}

async function readCapped(response: Response): Promise<{ text: string; bytes: number }> {
  const reader = response.body?.getReader();
  if (!reader) return { text: await response.text(), bytes: 0 };

  const decoder = new TextDecoder();
  let text = "";
  let bytes = 0;

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    bytes += value.byteLength;
    text += decoder.decode(value, { stream: true });
    if (bytes >= MAX_BYTES) {
      reader.cancel().catch(() => {});
      break;
    }
  }

  return { text, bytes };
}

const ENTITIES: Record<string, string> = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
  "&apos;": "'",
  "&nbsp;": " ",
};

function decodeEntities(input: string): string {
  return input.replace(/&(amp|lt|gt|quot|#39|apos|nbsp);/g, (m) => ENTITIES[m] || m);
}

function extractTag(html: string, regex: RegExp): string | null {
  const match = html.match(regex);
  return match ? decodeEntities(match[1].trim()) : null;
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many audits. Try again in a few minutes." },
      { status: 429 }
    );
  }

  let rawUrl: string;
  try {
    ({ url: rawUrl } = await request.json());
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const target = normalizeUrl(String(rawUrl || ""));
  if (!target) {
    return NextResponse.json(
      { error: "Enter a valid public website address, like yourbusiness.com" },
      { status: 400 }
    );
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  const startedAt = Date.now();

  try {
    const res = await fetch(target.toString(), {
      signal: controller.signal,
      redirect: "follow",
      headers: {
        "User-Agent": "BuiltSimple-SiteAudit/1.0 (+https://builtsimple.dev)",
        Accept: "text/html",
      },
    });

    const loadMs = Date.now() - startedAt;
    const { text: html, bytes } = await readCapped(res);
    clearTimeout(timeout);

    const title = extractTag(html, /<title[^>]*>([^<]{0,300})<\/title>/i);
    const description = extractTag(
      html,
      /<meta[^>]+name=["']description["'][^>]+content=["']([^"']{0,400})["']/i
    );
    const hasViewport = /<meta[^>]+name=["']viewport["']/i.test(html);
    const hasOgImage = /<meta[^>]+property=["']og:image["']/i.test(html);
    const hasCanonical = /<link[^>]+rel=["']canonical["']/i.test(html);
    const hasFavicon = /<link[^>]+rel=["'](?:icon|shortcut icon)["']/i.test(html);
    const isHttps = target.protocol === "https:";

    const imgTags = html.match(/<img\b[^>]*>/gi) || [];
    const imgsMissingAlt = imgTags.filter((tag) => !/\salt=["'][^"']*["']/i.test(tag)).length;
    const hasStructuredData = /application\/ld\+json/i.test(html);
    const hasH1 = /<h1[\s>]/i.test(html);

    const checks = [
      {
        id: "https",
        label: "Served over HTTPS",
        pass: isHttps,
        detail: isHttps ? "Secure connection confirmed." : "Site is not forcing HTTPS — browsers flag this as insecure.",
      },
      {
        id: "title",
        label: "Has a page title",
        pass: !!title && title.length > 0,
        detail: title
          ? title.length > 60
            ? `Title is ${title.length} chars — Google usually truncates past ~60.`
            : `"${title}"`
          : "No <title> tag found — this hurts search rankings and browser tabs.",
      },
      {
        id: "description",
        label: "Has a meta description",
        pass: !!description,
        detail: description
          ? `${description.length} characters`
          : "No meta description — search engines will write their own snippet for you.",
      },
      {
        id: "viewport",
        label: "Mobile viewport configured",
        pass: hasViewport,
        detail: hasViewport
          ? "Viewport meta tag present."
          : "Missing viewport meta tag — the site likely doesn't render correctly on phones.",
      },
      {
        id: "h1",
        label: "Has a clear H1 heading",
        pass: hasH1,
        detail: hasH1 ? "Found at least one H1." : "No H1 found — makes it harder for visitors and Google to know what the page is about.",
      },
      {
        id: "og",
        label: "Social preview image (Open Graph)",
        pass: hasOgImage,
        detail: hasOgImage ? "og:image is set." : "No og:image — links shared on social/text will look broken or blank.",
      },
      {
        id: "canonical",
        label: "Canonical URL set",
        pass: hasCanonical,
        detail: hasCanonical ? "Canonical link present." : "No canonical tag — can cause duplicate-content SEO issues.",
      },
      {
        id: "favicon",
        label: "Has a favicon",
        pass: hasFavicon,
        detail: hasFavicon ? "Favicon linked." : "No favicon found — looks unfinished in browser tabs and bookmarks.",
      },
      {
        id: "alt",
        label: "Images have alt text",
        pass: imgTags.length === 0 || imgsMissingAlt === 0,
        detail:
          imgTags.length === 0
            ? "No images detected on this page."
            : imgsMissingAlt === 0
            ? `All ${imgTags.length} images have alt text.`
            : `${imgsMissingAlt} of ${imgTags.length} images are missing alt text — bad for accessibility and image SEO.`,
      },
      {
        id: "speed",
        label: "Fast server response",
        pass: loadMs < 1200,
        detail: `Responded in ${loadMs}ms${loadMs >= 1200 ? " — slower than the ~1.2s a visitor will comfortably wait." : "."}`,
      },
      {
        id: "structured-data",
        label: "Structured data (schema.org)",
        pass: hasStructuredData,
        detail: hasStructuredData
          ? "Found JSON-LD structured data."
          : "No structured data found — search engines get less context about the business.",
      },
    ];

    const score = Math.round((checks.filter((c) => c.pass).length / checks.length) * 100);

    return NextResponse.json({
      url: target.toString(),
      score,
      loadMs,
      pageWeightKB: Math.round(bytes / 1024),
      title,
      checks,
    });
  } catch (err) {
    clearTimeout(timeout);
    const aborted = err instanceof Error && err.name === "AbortError";
    return NextResponse.json(
      {
        error: aborted
          ? "That site took too long to respond. It may be down or blocking automated requests."
          : "Couldn't reach that site. Double-check the address and try again.",
      },
      { status: 502 }
    );
  }
}
