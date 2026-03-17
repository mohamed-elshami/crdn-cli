import Image from "next/image";
import { Link } from "@/lib/i18n/navigation";
import { Button } from "@/components/ui/button";

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({}: Props) {
  return (
    <section className="min-h-screen bg-[radial-gradient(circle_at_top,#f8fafc,#e2e8f0_45%,#cbd5e1)] text-slate-900 w-full">
      <div className="mx-auto flex max-w-5xl flex-col gap-16 px-6 pb-24 pt-20 md:pt-28">
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-tight text-slate-900">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
              CRDN CLI
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button
              asChild
              className="h-8 rounded-full border border-slate-300 bg-slate-50/80 px-3 text-xs font-medium text-slate-800 shadow-sm shadow-slate-900/5 hover:bg-white hover:text-slate-950 hover:shadow-md hover:shadow-slate-900/10 focus-visible:ring-2 focus-visible:ring-slate-400"
            >
              <Link target="_blank" href="https://creiden.com/about/">
                About us
              </Link>
            </Button>
            <Button
              asChild
              className="h-8 rounded-full border border-slate-300 bg-slate-50/80 px-3 text-xs font-medium text-slate-800 shadow-sm shadow-slate-900/5 hover:bg-white hover:text-slate-950 hover:shadow-md hover:shadow-slate-900/10 focus-visible:ring-2 focus-visible:ring-slate-400"
            >
              <Link
                target="_blank"
                href="https://www.npmjs.com/package/create-crdn-app"
              >
                View on npm
              </Link>
            </Button>
          </div>
        </header>

        <section className="grid gap-12 md:grid-cols-[1.3fr_minmax(0,1fr)] md:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-600/30 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-950 shadow-sm shadow-sky-500/10">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Production‑ready Next.js starter
            </div>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              Ship full‑stack apps in minutes with{" "}
              <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                CRDN CLI
              </span>
            </h1>
            <p className="max-w-xl text-balance text-sm leading-relaxed text-slate-600 sm:text-base">
              `create-crdn-app` scaffolds a batteries‑included Next.js app with
              routing, auth, i18n, testing, and sensible defaults so you can
              focus on features instead of boilerplate.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <div className="inline-flex items-center gap-2 rounded-full flex-1 bg-slate-50/80 px-3 py-1 text-xs font-mono text-slate-700 ring-1 ring-slate-300">
                <span className="rounded bg-slate-900/5 px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-slate-500">
                  CLI
                </span>
                <code>npx create-crdn-app my-app</code>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-green-800 ring-1 ring-emerald-500/40">
                  ✓
                </span>
                <span>Instant dev server, ready for `npm run dev`.</span>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4  w-full justify-between">
              <div className="inline-flex  items-center gap-2 rounded-full flex-1 bg-slate-50/80 px-3 py-1 text-xs font-mono text-slate-700 ring-1 ring-slate-300">
                <span className="rounded bg-slate-900/5 px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-slate-500">
                  CLI
                </span>
                <code>npx crdn</code>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-green-800 ring-1 ring-emerald-500/40">
                  ✓
                </span>
                <span>
                  Use <code className="font-mono">crdn</code> to add features
                  and lang anytime.
                </span>
              </div>
            </div>

            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-300 bg-slate-50/70 px-3 py-2 text-xs text-slate-700 shadow-sm shadow-slate-900/5">
                <div className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                  Add a feature
                </div>
                <code className="mt-1 block font-mono">
                  crdn add-feature auth
                </code>
              </div>
              <div className="rounded-xl border border-slate-300 bg-slate-50/70 px-3 py-2 text-xs text-slate-700 shadow-sm shadow-slate-900/5">
                <div className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                  Add a language
                </div>
                <code className="mt-1 block font-mono">crdn add-lang ar</code>
              </div>
            </div>

            <dl className="mt-4 grid gap-4 text-xs text-slate-600 sm:grid-cols-3 sm:text-sm">
              <div>
                <dt className="font-medium text-slate-900">Best practices</dt>
                <dd className="mt-1 text-slate-600">
                  File structure, API layer, linting, and formatting configured
                  from day one.
                </dd>
              </div>
              <div>
                <dt className="font-medium text-slate-900">Auth & features</dt>
                <dd className="mt-1 text-slate-600">
                  Example auth flows, feature modules, and react-query wiring.
                </dd>
              </div>
              <div>
                <dt className="font-medium text-slate-900">i18n & languages</dt>
                <dd className="mt-1 text-slate-600">
                  Built‑in `messages/` support plus `crdn add-lang` helper.
                </dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-500/10 via-transparent to-emerald-500/5 blur-3xl" />
            <div className="relative rounded-2xl border border-slate-300 bg-slate-50/70 p-4 shadow-xl shadow-slate-900/15 backdrop-blur">
              <div className="mb-4 flex items-center justify-center">
                <Image
                  src="/creiden.png"
                  alt="Creiden"
                  width={520}
                  height={260}
                  className="h-auto w-[min(520px,100%)] object-contain"
                  priority
                />
              </div>
              <div className="flex items-center justify-between border-b border-slate-300 pb-2 text-xs text-slate-600">
                <span className="flex items-center gap-2">
                  <span className="flex h-2 w-2 items-center justify-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>
                  <span>Terminal • setup</span>
                </span>
                <span className="rounded-full bg-slate-900/5 px-2 py-0.5 font-mono text-[10px] text-slate-700 ring-1 ring-slate-300">
                  npm
                </span>
              </div>
              <pre className="mt-3 overflow-x-auto rounded-xl bg-gradient-to-b from-slate-50 to-slate-100 px-3 py-3 text-xs leading-relaxed text-slate-800 shadow-inner shadow-slate-900/10">
                <code className="block space-y-1">
                  <div>
                    <span className="text-slate-500">$</span>{" "}
                    <span className="text-sky-700">
                      npx create-crdn-app my-app
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500">&gt;</span>{" "}
                    <span className="text-emerald-700">
                      Scaffolding CRDN Next app...
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500">&gt;</span>{" "}
                    <span className="text-sky-700">
                      Installing dependencies with npm...
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500">&gt;</span>{" "}
                    <span className="text-slate-700">
                      cd my-app &amp;&amp; npm run dev
                    </span>
                  </div>
                </code>
              </pre>

              <div className="mt-4 space-y-2 rounded-xl border border-slate-300 bg-slate-50/70 p-3 text-xs text-slate-700">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-slate-900">
                    Why CRDN CLI?
                  </span>
                  <span className="rounded-full bg-sky-500/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-sky-800 ring-1 ring-sky-500/30">
                    Next 16 ready
                  </span>
                </div>
                <ul className="list-disc space-y-1 pl-4">
                  <li>
                    Opinionated folder structure with features and API layer.
                  </li>
                  <li>Testing setup with Jest + Testing Library.</li>
                  <li>Future‑proof DX for growing products and teams.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
