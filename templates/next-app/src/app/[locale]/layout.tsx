import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/lib/i18n/routing";
import { Providers } from "@/providers/Providers";
import MainLayout from "@/components/layout/MainLayout";
import PageViewTracker from "@/components/analytics/PageViewTracker";
import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/seo";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

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

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body
        suppressHydrationWarning
        className="flex min-h-screen flex-col items-center justify-between"
      >
        <NextIntlClientProvider>
          <Providers>
            <PageViewTracker />
            <MainLayout>{children}</MainLayout>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
