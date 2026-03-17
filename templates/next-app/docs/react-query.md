# React Query

React Query is used for server state: caching, refetching, and mutations. The app is wrapped in a single provider and uses a shared pattern for query keys.

## Setup

- **Location**: `src/lib/react-query/` – `queryClient.ts`, `queryKeys.ts`, `provider.tsx`.
- **App wiring**: `src/providers/Providers.tsx` wraps the app in `ReactQueryProvider` (which uses `getQueryClient()` and `QueryClientProvider`). This is used in the `[locale]` layout.

## Query keys

**File:** `src/lib/react-query/queryKeys.ts`

- **`queryKeys.root`**: Root key `["app"]` for the whole app.
- **`createQueryKeys(prefix)`**: Returns `root`, `all()`, `lists()`, `list(params)`, `detail(id)` for a feature. Use this in each feature’s `keys.ts`.

Example (auth feature, `src/features/auth/keys.ts`):

```ts
import { createQueryKeys } from "@/lib/react-query/queryKeys";

export const authKeys = createQueryKeys("auth");
```

Usage in a hook:

```ts
import { useQuery } from "@tanstack/react-query";
import { authKeys } from "@/features/auth";
import { getMe } from "@/features/auth";

const { data } = useQuery({
  queryKey: authKeys.all(),
  queryFn: getMe,
});
```

## Auth example

The auth feature uses React Query in `useAuth`: `useQuery` with `authKeys.all()` for “me”, and `useMutation` for login/logout with cache invalidation. See [Authentication](authentication.md) for full details.
