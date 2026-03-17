# Authentication

The auth feature is a self-contained slice under `src/features/auth` with API, components, hooks, types, and query keys.

## Feature layout

```
src/features/auth/
├── api/
│   └── authApi.ts      # login, getMe, logout
├── components/
│   └── LoginForm.tsx   # Form wired to useAuth
├── hooks/
│   └── useAuth.ts      # useQuery + useMutation
├── types/
│   └── auth.types.ts   # User, LoginPayload, LoginResponse
├── keys.ts             # authKeys from createQueryKeys
└── index.ts            # Public exports
```

## Exports

Import from `@/features/auth`:

- **LoginForm** – Login form component (React Hook Form + Zod).
- **useAuth** – Hook returning user state and login/logout actions.
- **authKeys** – Query keys for auth (e.g. `authKeys.all()`).
- **authApi** – `login`, `getMe`, `logout`.
- **Types** – `User`, `LoginPayload`, `LoginResponse`, etc.

## useAuth

Return shape:

| Property | Type | Description |
|----------|------|-------------|
| `user` | `User \| null` | Current user from `/auth/me`. |
| `isLoading` | `boolean` | Initial load of user. |
| `isAuthenticated` | `boolean` | `Boolean(user)`. |
| `login` | `(payload: LoginPayload) => Promise<...>` | Calls login API and invalidates auth queries. |
| `logout` | `() => Promise<...>` | Calls logout API and invalidates auth queries. |
| `isLoggingIn` | `boolean` | Login mutation pending. |
| `isLoggingOut` | `boolean` | Logout mutation pending. |

Usage in a component:

```tsx
"use client";

import { useAuth } from "@/features/auth";

export function Profile() {
  const { user, isAuthenticated, logout } = useAuth();
  if (!isAuthenticated) return <p>Please log in.</p>;
  return (
    <div>
      <p>Hello, {user?.email}</p>
      <button onClick={() => logout()}>Log out</button>
    </div>
  );
}
```

## LoginForm

- Built with **React Hook Form** and **Zod** (`loginSchema`: email, password min 6).
- Uses `useAuth()` for `login` and `isLoggingIn`; onSubmit calls `login(values)`.
- Rendered on the login page: `src/app/[locale]/login/page.tsx` (imports `LoginForm` from `@/features/auth`).

## API endpoints

The auth API module calls:

| Method | Path | Description |
|--------|------|-------------|
| POST | `/auth/login` | Body: `LoginPayload` (email, password). Returns `LoginResponse`. |
| GET | `/auth/me` | Returns current `User`. |
| POST | `/auth/logout` | No body. |

Base URL is from `NEXT_PUBLIC_API_URL`. Point your backend at these paths or change the constants in `src/features/auth/api/authApi.ts`.

## Adding guards

To protect routes from unauthenticated users:

1. **Middleware**: In `src/proxy.ts` (or a separate middleware), read the session/cookie and redirect to `/login` when the user is not authenticated and the path is protected.
2. **Wrapper component**: A client component that uses `useAuth()`, shows a loader while `isLoading`, and redirects (e.g. via `redirect()` or `useRouter`) to `/login` when `!isAuthenticated` for protected pages.

Keep the logic in one place (e.g. middleware or a single `ProtectedRoute` component) to avoid duplication.
