# Environment variables

Copy `.env.example` to `.env.local` and fill in the values. `.env.local` is gitignored and not committed.

## Variables

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `NEXT_PUBLIC_API_URL` | Yes (for API client) | Backend API base URL used by the Axios client in `src/lib/api/client.ts`. | `https://api.example.com` |
| `NEXT_PUBLIC_APP_URL` | No | Public app URL used for SEO canonical and Open Graph URLs in `createMetadata`. Defaults to `http://localhost:3000` if unset. | `https://myapp.com` |

## Where they are used

- **env.ts** (`src/config/env.ts`): Exposes `env.apiUrl` and `env.appUrl`. All app code should read env through this module instead of `process.env` directly for a single place to change.
- **API client**: `baseURL` of the Axios instance is set from `env.apiUrl`.
- **SEO**: `createMetadata` uses `env.appUrl` to build canonical and OG URLs when you pass `urlPath`.

## Example .env.local

```bash
# Backend API base URL (e.g. https://api.example.com)
NEXT_PUBLIC_API_URL=https://api.example.com

# Public app URL for SEO canonical/OG (optional; defaults to http://localhost:3000)
NEXT_PUBLIC_APP_URL=https://myapp.com
```
