# Adding features

Follow the same structure as the auth feature so the codebase stays consistent and easy to navigate.

## Convention: feature slice

Create a folder under `src/features/<name>` with:

- **api/** – API functions that call the backend (using `@/lib/api/client`).
- **components/** – Feature-specific UI (e.g. forms, lists).
- **hooks/** – React Query hooks and other feature logic.
- **types/** – TypeScript types for the feature.
- **keys.ts** – Query keys from `createQueryKeys`.
- **index.ts** – Public exports only; other code imports from `@/features/<name>`.

## Query keys

Use **createQueryKeys** from `src/lib/react-query/queryKeys.ts`:

```ts
// src/features/todos/keys.ts
import { createQueryKeys } from "@/lib/react-query/queryKeys";

export const todoKeys = createQueryKeys("todos");
```

Then use `todoKeys.all()`, `todoKeys.lists()`, `todoKeys.list(params)`, `todoKeys.detail(id)` in your hooks.

## Exports

In **index.ts**, re-export only what other parts of the app should use:

```ts
export { TodoList } from "./components/TodoList";
export { useTodos } from "./hooks/useTodos";
export { todoKeys } from "./keys";
export * as todoApi from "./api/todoApi";
export * from "./types/todo.types";
```

Import from the feature:

```ts
import { useTodos, todoKeys } from "@/features/todos";
```

## i18n

- Add message keys to **messages/en.json** (and **messages/ar.json** if you support Arabic).
- In components, use `useTranslations("Namespace")` or the namespace that matches your JSON structure.

## Routes

- Add pages under **app/[locale]/...** (e.g. `app/[locale]/todos/page.tsx`).
- Use **Link**, **useRouter**, **usePathname** from `@/lib/i18n/navigation` so links keep the current locale.

## Example: “todos” feature

1. Create `src/features/todos/` with `api/`, `components/`, `hooks/`, `types/`, `keys.ts`, `index.ts`.
2. In `keys.ts`, `createQueryKeys("todos")`.
3. In API, use `get`, `post`, `put`, `patch`, `del` from `@/lib/api/client`.
4. In hooks, use `useQuery` / `useMutation` with `todoKeys` and your API functions.
5. Export public API from `index.ts`.
6. Add `app/[locale]/todos/page.tsx` and use `Link` from `@/lib/i18n/navigation` to link to it.
