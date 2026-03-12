import {
  defaultAnalyticsProvider,
} from "./providers";
import type {
  AnalyticsEventName,
  AnalyticsEventProperties,
} from "./types";

export function trackPageView(path: string) {
  defaultAnalyticsProvider.trackPageView(path);
}

export function trackEvent(
  name: AnalyticsEventName,
  properties?: AnalyticsEventProperties
) {
  defaultAnalyticsProvider.trackEvent(name, properties);
}
