import type { AnalyticsEventName, AnalyticsEventProperties } from "./types";

/**
 * Default analytics implementation.
 * Replace these with your real provider (GA, PostHog, etc.).
 */
export const defaultAnalyticsProvider = {
  trackPageView(path: string) {
    if (typeof window === "undefined") return;
    console.debug("[analytics] page view:", path);
  },

  trackEvent(name: AnalyticsEventName, properties?: AnalyticsEventProperties) {
    if (typeof window === "undefined") return;
    console.debug("[analytics] event:", name, properties);
  },
};

