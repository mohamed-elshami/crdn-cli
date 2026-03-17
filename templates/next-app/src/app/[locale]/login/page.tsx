import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { LoginForm } from "@/features/auth";
import { createMetadata } from "@/lib/seo/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return createMetadata({
    title: "Login",
    urlPath: `/${locale}/login`,
    locale,
  });
}

export default async function LoginPage(_props: Props) {
  return (
    <section className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md">
        <h1 className="mb-6 text-center text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          Sign in
        </h1>
        <LoginForm />
      </div>
    </section>
  );
}
