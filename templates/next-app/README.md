This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Production Starter Checklist

| Item | Status | Location |
|------|--------|----------|
| React Query | ✅ | `src/lib/react-query/provider.tsx` – wrap app in `ReactQueryProvider` |
| API layer | ✅ | `src/lib/api/client.ts` – axios instance, set `NEXT_PUBLIC_API_URL` |
| Feature architecture | ✅ | `src/features/auth` – api, components, hooks, types, index |
| Authentication | ✅ | `src/features/auth` – `useAuth`, `LoginForm`, `authApi` |
| ESLint + Prettier | ✅ | `npm run lint`, `npm run format` – Prettier disables conflicting ESLint rules |
| Analytics hook | ✅ | `src/hooks/usePageView.ts` – call in layout to track route changes; `src/lib/analytics/` for `trackEvent` |

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

```bash
# Lint & format
npm run lint
npm run lint:fix
npm run format
npm run format:check
```

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
