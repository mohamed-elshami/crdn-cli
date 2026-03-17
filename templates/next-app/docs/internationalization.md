# Internationalization

The app uses **next-intl** with the App Router and a `[locale]` segment. Locale is always in the path; the proxy redirects paths without a locale to the default or cookie value.

## Stack

- **next-intl** – Messages, routing, and request config.
- **App Router** – All locale-specific routes live under `app/[locale]/`.
- **Proxy (middleware)** – Ensures every request has a locale and redirects `/` to `/en` (or cookie).

## Config

**Routing** (`src/lib/i18n/routing.ts`):

- **locales**: `["en", "ar"]`
- **defaultLocale**: `"en"`
- **localePrefix**: `"always"` (all routes prefixed with locale)
- **localeDetection**: `true` (uses cookie `NEXT_LOCALE` when present)

**Request config** (`src/lib/i18n/request.ts`):

- Uses `getRequestConfig` from `next-intl/server`, resolves locale from `requestLocale` and loads messages from `messages/${locale}.json`.

**Plugin**: `next.config.ts` uses `createNextIntlPlugin()`. next-intl will look for the request config; the template also has `src/i18n/request.ts` which re-exports `@/lib/i18n/request` so the default path `./src/i18n/request.ts` (or `./i18n/request.ts`) works.

## Proxy (middleware)

**File:** `src/proxy.ts`

- Exports the next-intl middleware created with `routing`.
- Redirects paths without a locale (e.g. `/`, `/login`) to `/{locale}` (from cookie or `defaultLocale`).
- Matcher excludes `api`, `trpc`, `_next`, `_vercel`, and static files.

Rename or merge this file with Next.js middleware: the middleware file must be at `src/middleware.ts` (or project root). If this project uses a different name, ensure the middleware that runs is the one that calls `createMiddleware(routing)`.

## Messages

- **Location**: `messages/en.json`, `messages/ar.json`.
- Add keys and use them with `useTranslations` (client) or `getTranslations` (server).

Example:

```tsx
import { useTranslations } from "next-intl";

export function Greeting() {
  const t = useTranslations("Home");
  return <h1>{t("title")}</h1>;
}
```

## Navigation

**File:** `src/lib/i18n/navigation.ts`

- Exports: **Link**, **redirect**, **usePathname**, **useRouter**, **getPathname** from `createNavigation(routing)`.
- Use these instead of the default Next.js versions so locale is preserved (e.g. links stay under `/en/...` or `/ar/...`).

Example:

```tsx
import { Link, useRouter } from "@/lib/i18n/navigation";

<Link href="/dashboard">Dashboard</Link>
```

## RTL

The `[locale]` layout sets `<html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>`. No extra component is required for basic RTL; Tailwind’s RTL support applies when `dir="rtl"`.
