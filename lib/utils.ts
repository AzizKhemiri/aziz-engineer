import type { Audience } from "@/data/experience";

/** Returns true if an entry tagged with `audience` should appear on a page for `mode`. */
export function matchesAudience(audience: Audience, mode: "business" | "personal") {
  return audience === "both" || audience === mode;
}
