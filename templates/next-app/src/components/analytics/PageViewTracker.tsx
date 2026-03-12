"use client";

/**
 * Tracks page views on route change.
 * Use inside a client-side layout or root provider.
 * Wire this to your analytics provider (e.g. GA, PostHog, Vercel Analytics).
 * Example stub – replace with your analytics SDK call.
 * console.log("Tracking page:", path);
 * later you can integrate:
 * Google Analytics
 * Posthog
 * Mixpanel
 */

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackPageView } from "@/lib/analytics";

export default function PageViewTracker() {
  const pathname = usePathname();

  useEffect(() => {
    trackPageView(pathname);
  }, [pathname]);

  return null;
}
