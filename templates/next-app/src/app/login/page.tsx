import type { Metadata } from "next";
import { LoginForm } from "@/features/auth";
import { createMetadata } from "@/lib/seo/seo";

export const metadata: Metadata = createMetadata({
  title: "Login",
  urlPath: "/login",
});

export default function LoginPage() {
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
