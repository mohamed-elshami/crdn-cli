# create-crdn-app

CLI to scaffold the **CRDN Next.js Starter**.

## Requirements

- Node.js **18+**

## Create a new app

### Using npm

```bash
npx create-crdn-app@latest my-app
```

Or:

```bash
npm create crdn-app@latest my-app
```

### Using pnpm

```bash
pnpm dlx create-crdn-app@latest my-app
```

### Using yarn

```bash
yarn dlx create-crdn-app@latest my-app
```

## Create in the current folder

If you want to generate the project **in the folder you’re already in** (no nested folder):

```bash
npx create-crdn-app@latest .
```

## Options

```bash
create-crdn-app [project-name] [options]
```

- **`-t, --template <name>`**: template folder under `templates/` (default: `next-app`)
- **`-f, --force`**: overwrite the target folder if it exists (not used for `.` / `./`)
- **`--pm <pm>`**: package manager (`npm | pnpm | yarn | bun`). If omitted, it’s **auto-detected**
- **`--no-crdn`**: skip installing `crdn` globally before installing project dependencies
- **`--no-install`**: skip installing project dependencies

## What the CLI does

1. Copies the selected template from `templates/<template>` into your target folder
2. Updates the generated app’s `package.json` name
3. (Default) Installs `crdn` globally, then installs the app dependencies using your package manager

## Generated app (Next.js template)

The default template is `templates/next-app` (Next.js App Router + TypeScript + Tailwind).

- **Docs**: the generated app includes a `docs/` folder with feature guides
- **App code**: `src/` (App Router pages live under `src/app/`)
- **Public assets**: `public/`
- **Tests**: `tests/`

### Key dependencies included in the template

- **Next.js**, **React**, **TypeScript**
- **Tailwind CSS**
- **React Query**
- **next-intl** (i18n routing/messages)
- **ESLint**, **Prettier**
- **Jest** (tests)

## After creating the app

```bash
cd my-app
npm run dev
```

For template details, see the generated app’s `README.md` and `docs/` folder.

