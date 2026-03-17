# Getting started

## Creating the app

Create a new project with the CRDN CLI:

```bash
npx create-crdn-app my-app
```

You get a Next.js app with App Router, TypeScript, Tailwind CSS, React Query, next-intl, auth scaffold, API client, SEO helpers, and analytics placeholders.

## Install

From the project directory:

```bash
cd my-app
npm install
```

If you see peer dependency conflicts (e.g. with next-intl and Next.js 16), the template may include an `.npmrc` with `legacy-peer-deps=true`; if not, run:

```bash
npm install --legacy-peer-deps
```

## Environment

1. Copy the example env file:

   ```bash
   cp .env.example .env.local
   ```

2. Set at least **NEXT_PUBLIC_API_URL** (your backend base URL, e.g. `https://api.example.com`).
3. Optionally set **NEXT_PUBLIC_APP_URL** for SEO canonical and Open Graph URLs (e.g. `https://myapp.com`). If unset, it falls back to `http://localhost:3000`.

See [Environment](environment.md) for all variables.

## First run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). You will be redirected to `/en` (default locale) or the locale stored in the cookie. Try `/en/login` for the login page.

## Troubleshooting

- **next-intl config not found**: Ensure the request config path in `next.config.ts` matches your setup (`./src/i18n/request.ts` or `./src/lib/i18n/request.ts`). If the error persists with Turbopack, run the dev server with Webpack (e.g. `next dev --no-turbopack`) if your CLI adds that script.
- **Styles not applying**: The root layout must import `./globals.css`; that file includes `@import "tailwindcss"`. See [Project structure](project-structure.md).
