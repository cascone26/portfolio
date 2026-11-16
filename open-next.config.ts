// Mirrors the proven LessonDraft config: "direct" queue mode avoids a
// self-referencing fetch for ISR revalidation that caused CPU-timeout
// errors under concurrent load there. Portfolio is almost entirely static
// pages, so this matters less here, but there's no reason to risk the same
// failure mode. See LessonDraft/open-next.config.ts for the full writeup.
import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({ queue: "direct" });
