import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/providers/Providers";
import { createMetadata } from "@/lib/seo/seo";
import MainLayout from "@/components/layout/MainLayout";
import PageViewTracker from "@/components/analytics/PageViewTracker";

export const metadata: Metadata = createMetadata({
  title: "CRDN App",
  description: "Next.js starter powered by create-crdn-app.",
  siteName: "CRDN App",
  urlPath: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body className="flex min-h-screen flex-col items-center justify-between">
        <Providers>
          <PageViewTracker />
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
