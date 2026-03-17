# API layer

The app uses a single HTTP client built on Axios, configured with the backend base URL from env.

## Client

**File:** `src/lib/api/client.ts`

- **`api`**: Axios instance with `baseURL` from `env.apiUrl` (`src/config/env.ts`), `Content-Type: application/json`, and fetch adapter.
- **Helpers** (all return `data` only): `get<T>`, `post<T, B>`, `put<T, B>`, `patch<T, B>`, `del<T>`.

## Config

- **baseURL**: Set via `NEXT_PUBLIC_API_URL` and read as `env.apiUrl` in `src/config/env.ts`. The client uses it for all requests.

## Usage example

```ts
import { get, post } from "@/lib/api/client";

// GET
const users = await get<User[]>("/users");

// POST
const created = await post<User, CreateUserPayload>("/users", { name: "Jane" });
```

Use these helpers from feature API modules (e.g. `src/features/auth/api/authApi.ts`) or from server components/route handlers. For client-side data fetching, combine with React Query (see [React Query](react-query.md) and [Authentication](authentication.md)).
