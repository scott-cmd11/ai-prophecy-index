export const SITE_NAME = "AI Prophecy Index";

export const SITE_DESCRIPTION =
  "A sourced accountability ledger tracking public AI predictions from Carl Shulman, Leopold Aschenbrenner, and Ajeya Cotra against real-world events.";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ai-prophecy-index.vercel.app";

export const SITE_ROUTES = [
  "/",
  "/thinkers/shulman",
  "/thinkers/aschenbrenner",
  "/thinkers/cotra",
  "/privacy",
] as const;

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}
