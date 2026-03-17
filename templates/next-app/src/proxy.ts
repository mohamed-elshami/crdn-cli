import createMiddleware from "next-intl/middleware";
import { routing } from "@/lib/i18n/routing";

/**
 * Ensures every request has a locale in the path.
 * Paths without a locale (e.g. / or /login) are redirected to:
 * - locale from cookie (NEXT_LOCALE), or
 * - defaultLocale (en).
 */
export default createMiddleware(routing);

export const config = {
  matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
};
