import type { Metadata } from "next";
import { env } from "@/config/env";

const DEFAULT_TITLE = "CRDN App";
const DEFAULT_DESCRIPTION = "Next.js starter powered by create-crdn-app.";
const DEFAULT_LOCALE = "en";
type SeoOpenGraphType = "website" | "article" | "profile";
const DEFAULT_TYPE: SeoOpenGraphType = "website";

type SeoImage = {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
};

type SeoParams = {
  title?: string;
  description?: string;
  siteName?: string;
  urlPath?: string;
  image?: SeoImage;
  /**
   * Page locale, e.g. "en", "en-US", "ar".
   */
  locale?: string;
  /**
   * Override Open Graph type (e.g. "article").
   */
  type?: SeoOpenGraphType;
  /**
   * Optional keywords for the page.
   */
  keywords?: string[];
  /**
   * ISO date strings for content pages.
   */
  publishedTime?: string;
  modifiedTime?: string;
  /**
   * When true, adds robots noindex,nofollow.
   */
  noIndex?: boolean;
};

export function createMetadata({
  title,
  description,
  siteName,
  urlPath,
  image,
  locale,
  type,
  keywords,
  publishedTime,
  modifiedTime,
  noIndex,
}: SeoParams = {}): Metadata {
  const baseUrl = env.appUrl ?? "";
  const finalLocale = locale ?? DEFAULT_LOCALE;

  const fullTitle = title ? `${title} | ${DEFAULT_TITLE}` : DEFAULT_TITLE;
  const finalDescription = description ?? DEFAULT_DESCRIPTION;
  const canonicalUrl =
    baseUrl && urlPath ? new URL(urlPath, baseUrl).toString() : undefined;

  const imageUrl =
    image?.url && baseUrl
      ? new URL(image.url, baseUrl).toString()
      : (image?.url ?? undefined);

  return {
    title: fullTitle,
    description: finalDescription,
    keywords,
    alternates: canonicalUrl
      ? {
          canonical: canonicalUrl,
        }
      : undefined,
    openGraph: {
      title: fullTitle,
      description: finalDescription,
      url: canonicalUrl,
      siteName: siteName ?? DEFAULT_TITLE,
      type: type ?? DEFAULT_TYPE,
      locale: finalLocale,
      ...(publishedTime || modifiedTime
        ? {
            publishedTime,
            modifiedTime,
          }
        : {}),
      images: imageUrl
        ? [
            {
              url: imageUrl,
              alt: image?.alt,
              width: image?.width,
              height: image?.height,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: finalDescription,
      images: imageUrl ? [imageUrl] : undefined,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : undefined,
  };
}
