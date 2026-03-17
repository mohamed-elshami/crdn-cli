# SEO

The app provides a single helper to build Next.js metadata (title, description, canonical, Open Graph, Twitter) so every page can stay consistent and easy to maintain.

## Helper

**File:** `src/lib/seo/seo.ts`

**Function:** `createMetadata(params?)`  
Returns a Next.js `Metadata` object. All params are optional.

## Parameters

| Parameter | Description |
|-----------|-------------|
| **title** | Page title; appended as `"Title \| CRDN App"`. |
| **description** | Meta description. |
| **siteName** | Open Graph site name. |
| **urlPath** | Path (e.g. `/blog/post-1`). Used with `NEXT_PUBLIC_APP_URL` for canonical and OG URL. |
| **image** | `{ url, alt?, width?, height? }` – relative to app URL or absolute. |
| **locale** | Page locale (e.g. `"en"`, `"ar"`). |
| **type** | Open Graph type: `"website"` (default), `"article"`, `"profile"`. |
| **keywords** | Meta keywords array. |
| **publishedTime** | ISO date string (e.g. for articles). |
| **modifiedTime** | ISO date string (e.g. for articles). |
| **noIndex** | When `true`, sets `robots: { index: false, follow: false }`. |

## Env

**NEXT_PUBLIC_APP_URL** is used to build canonical and Open Graph URLs. If unset, those URLs are omitted or relative. Set it in production for correct sharing and canonicals.

## Usage

**Layout** – e.g. in `src/app/[locale]/layout.tsx`:

```ts
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return createMetadata({
    title: "CRDN App",
    description: "Next.js starter powered by create-crdn-app.",
    siteName: "CRDN App",
    urlPath: "/",
    locale,
  });
}
```

**Page** – e.g. blog post:

```ts
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const post = await getPost(params.slug);
  return createMetadata({
    title: post.title,
    description: post.excerpt,
    urlPath: `/blog/${post.slug}`,
    locale,
    type: "article",
    image: { url: post.imagePath, alt: post.title, width: 1200, height: 630 },
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
  });
}
```

**No-index page** (e.g. dashboard):

```ts
return createMetadata({
  title: "Dashboard",
  urlPath: "/dashboard",
  locale,
  noIndex: true,
});
```
