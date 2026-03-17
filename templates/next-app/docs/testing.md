# Testing

This template uses **Jest** + **Testing Library** for unit/component tests (configured via `next/jest`).

## Folder structure

- `tests/unit/**` – unit/component tests
- `tests/unit/**/**.smoke.test.ts` – ultra-simple “imports/exports” tests
- `tests/test-utils.tsx` – shared render helpers (wraps `src/providers/Providers`)

Test file naming:

- `*.test.ts` / `*.test.tsx` or `*.spec.ts` / `*.spec.tsx`

## Running tests

```bash
npm test
```

```bash
npm run test:watch
```

```bash
npm run test:coverage
```

## Writing a component test

- Prefer `@testing-library/react` queries (role/label/text).
- Use Jest’s globals (`describe/it/expect`).
- Mock dependencies at the module boundary (`jest.mock(...)`).

Example: `tests/unit/features/auth/LoginForm.test.tsx`.

