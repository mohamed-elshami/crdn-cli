# CRDN Next.js Starter

Scaffolded by **create-crdn-app**. A production-ready Next.js starter with App Router, TypeScript, Tailwind CSS, React Query, next-intl, auth scaffold, API client, SEO helpers, and analytics placeholders.

## Prerequisites

- Node.js 18+
- npm, pnpm, or yarn

## Creating a new app

```bash
npx create-crdn-app my-app
```

Then open the project and follow the quick start below.

## Quick start

1. **Install dependencies**

   ```bash
   cd my-app
   npm install
   ```

2. **Environment**  
   Copy `.env.example` to `.env.local`, set `NEXT_PUBLIC_API_URL` (and optionally `NEXT_PUBLIC_APP_URL` for SEO).

   ```bash
   cp .env.example .env.local
   ```

3. **Run the dev server**

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000). You’ll be redirected to `/en` (or the locale in your cookie). Try `/en/login` for the login page.

## Scripts

| Script          | Description                |
|-----------------|----------------------------|
| `npm run dev`   | Start development server   |
| `npm run build` | Build for production      |
| `npm run start` | Start production server   |
| `npm run lint`  | Run ESLint                |
| `npm run lint:fix` | Run ESLint with auto-fix |
| `npm run format`   | Format with Prettier      |
| `npm run format:check` | Check formatting with Prettier |
| `npm test`         | Run tests (Jest)          |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:coverage` | Run tests with coverage |

## Documentation

Full documentation is in the **[docs](./docs/)** folder:

- [Getting started](docs/getting-started.md)
- [Project structure](docs/project-structure.md)
- [Environment](docs/environment.md)
- [API layer](docs/api-layer.md)
- [React Query](docs/react-query.md)
- [Authentication](docs/authentication.md)
- [Internationalization](docs/internationalization.md)
- [SEO](docs/seo.md)
- [Analytics](docs/analytics.md)
- [Testing](docs/testing.md)
- [Adding features](docs/adding-features.md)

## Tech stack

- **Next.js** (App Router), **TypeScript**, **Tailwind CSS**
- **React Query** – server state
- **next-intl** – i18n and routing
- **ESLint**, **Prettier**

## Learn more

- [Template docs](./docs/) – architecture and feature guides
- [Next.js documentation](https://nextjs.org/docs)
