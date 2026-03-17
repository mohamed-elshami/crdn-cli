# Analytics

The template wires a small analytics abstraction so you can track page views and events and later plug in a real provider (e.g. Google Analytics, PostHog) without changing feature code.

## Structure

**`src/lib/analytics/`**

- **index.ts** – `trackPageView(path)`, `trackEvent(name, properties?)`.
- **providers.ts** – Default provider implementation (currently logs to `console.debug`). Replace with your SDK.
- **types.ts** – `AnalyticsEventName`, `AnalyticsEventProperties`.

**Components**

- **PageViewTracker** (`src/components/analytics/PageViewTracker.tsx`) – Client component that calls `trackPageView(pathname)` on pathname change. Renders nothing.

## Usage

**Page views**

- Mount **PageViewTracker** once in a layout that has access to the current path (e.g. `src/app/[locale]/layout.tsx`). It uses `usePathname()` from `next/navigation` and runs `trackPageView(pathname)` in an effect. No need to call `trackPageView` manually for normal navigations.

**Events**

- Call `trackEvent` from any client code:

```ts
import { trackEvent } from "@/lib/analytics";

trackEvent("button_click", { buttonId: "signup", page: "/pricing" });
```

## Wiring a real provider

1. Open **`src/lib/analytics/providers.ts`**.
2. Replace `defaultAnalyticsProvider` with an object that implements the same interface:
   - `trackPageView(path: string): void`
   - `trackEvent(name: AnalyticsEventName, properties?: AnalyticsEventProperties): void`
3. Implement these with your SDK (e.g. `gtag`, `posthog.capture`). The rest of the app keeps using `trackPageView` and `trackEvent` from `@/lib/analytics`.

Example (stub for GA):

```ts
export const defaultAnalyticsProvider = {
  trackPageView(path: string) {
    if (typeof window === "undefined") return;
    window.gtag?.("event", "page_view", { page_path: path });
  },
  trackEvent(name: string, properties?: Record<string, unknown>) {
    if (typeof window === "undefined") return;
    window.gtag?.("event", name, properties);
  },
};
```
