# Project structure

## Folder tree

```text
next-app/
├── .env.example
├── messages/
│   ├── en.json
│   └── ar.json
├── next.config.ts
├── postcss.config.mjs
├── tailwind.config.ts
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root: imports globals.css, passes children
│   │   ├── globals.css         # Tailwind + theme variables
│   │   └── [locale]/
│   │       ├── layout.tsx      # Locale layout: html/body, NextIntl, Providers, MainLayout
│   │       ├── page.tsx        # Home
│   │       ├── error.tsx       # Error boundary
│   │       └── login/
│   │           └── page.tsx    # Login page
│   ├── proxy.ts                # next-intl middleware: locale redirects
│   ├── i18n/
│   │   └── request.ts         # next-intl request config (plugin entry)
│   ├── components/
│   │   ├── analytics/
│   │   │   └── PageViewTracker.tsx
│   │   └── layout/
│   │       ├── MainLayout.tsx
│   │       ├── Header.tsx
│   │       └── Footer.tsx
│   ├── config/
│   │   └── env.ts             # Central env (apiUrl, appUrl)
│   ├── features/
│   │   └── auth/
│   │       ├── api/
│   │       │   └── authApi.ts
│   │       ├── components/
│   │       │   └── LoginForm.tsx
│   │       ├── hooks/
│   │       │   └── useAuth.ts
│   │       ├── types/
│   │       │   └── auth.types.ts
│   │       ├── keys.ts
│   │       └── index.ts
│   ├── hooks/
│   │   ├── usePageView.ts
│   │   └── index.ts
│   ├── lib/
│   │   ├── api/
│   │   │   └── client.ts      # Axios instance + get/post/put/patch/del
│   │   ├── analytics/
│   │   │   ├── index.ts       # trackPageView, trackEvent
│   │   │   ├── providers.ts
│   │   │   └── types.ts
│   │   ├── i18n/
│   │   │   ├── routing.ts     # locales, defaultLocale, localePrefix
│   │   │   ├── request.ts     # getRequestConfig (used by plugin or re-export)
│   │   │   └── navigation.ts # Link, redirect, usePathname, useRouter
│   │   ├── react-query/
│   │   │   ├── provider.tsx
│   │   │   ├── queryClient.ts
│   │   │   └── queryKeys.ts
│   │   └── seo/
│   │       └── seo.ts         # createMetadata
│   └── providers/
│       └── Providers.tsx      # ReactQueryProvider
└── docs/
```

## Entry points

- **Root layout** (`src/app/layout.tsx`): Imports `globals.css` (Tailwind) and renders `children`. No `<html>`/`<body>` here so the locale layout can own them.
- **[locale] layout** (`src/app/[locale]/layout.tsx`): Validates locale, calls `setRequestLocale`, wraps app in `NextIntlClientProvider`, `Providers` (React Query), `PageViewTracker`, and `MainLayout`. Exports `generateStaticParams` and `generateMetadata`.
- **Proxy** (`src/proxy.ts`): next-intl middleware. Redirects `/` to `/en` (or cookie locale), and handles all locale-prefixed routes.

## Area overview

| Area | Purpose |
|------|--------|
| `src/app` | Next.js App Router: root layout, `[locale]` segment, pages, error boundary. |
| `src/proxy.ts` | Single middleware/proxy for locale detection and redirects. |
| `src/i18n` | next-intl request config file (discovered by next-intl plugin). |
| `src/components` | Shared UI: layout (MainLayout, Header, Footer), analytics (PageViewTracker). |
| `src/config` | App config; `env.ts` exposes `apiUrl`, `appUrl` from env. |
| `src/features` | Feature slices (e.g. auth: api, components, hooks, types, keys). |
| `src/hooks` | Cross-feature hooks (e.g. usePageView). |
| `src/lib` | Shared infrastructure: api client, analytics, i18n routing/request/navigation, react-query, seo. |
| `src/providers` | Global providers (React Query); can add more (theme, etc.). |
| `messages/` | JSON message files per locale (en, ar) for next-intl. |
