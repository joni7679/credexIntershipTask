import Link from "next/link";
import { ArrowLeft, Home, SearchX, Sparkles } from "lucide-react";

export const metadata = {
  title: "Page not found | AI Spend Audit",
  description: "The page you are looking for could not be found.",
};

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <section className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1fr_0.85fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
            <SearchX className="size-4" aria-hidden="true" />
            404 - Page not found
          </div>

          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
            This page slipped out of the audit trail.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            The link may be outdated, moved, or typed incorrectly. Head back to
            the homepage and continue finding savings in your AI tool stack.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-blue-600 bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              <Home className="size-4" aria-hidden="true" />
              Back to homepage
            </Link>

            <Link
              href="/audit"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              <Sparkles className="size-4" aria-hidden="true" />
              Start an audit
            </Link>
          </div>
        </div>

        <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
          <div className="absolute right-6 top-6 rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
            Missing route
          </div>

          <div className="flex h-full min-h-[270px] flex-col justify-end">
            <div className="mb-8 grid grid-cols-3 gap-3">
              <div className="h-24 rounded-lg bg-slate-100" />
              <div className="h-24 rounded-lg bg-blue-100" />
              <div className="h-24 rounded-lg bg-slate-100" />
              <div className="h-24 rounded-lg bg-blue-600" />
              <div className="flex h-24 items-center justify-center rounded-lg bg-slate-950 text-4xl font-black text-white">
                404
              </div>
              <div className="h-24 rounded-lg bg-slate-100" />
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-900">
                <ArrowLeft className="size-4 text-blue-600" aria-hidden="true" />
                Suggested next step
              </div>
              <p className="text-sm leading-6 text-slate-600">
                Return home, choose a section from the navigation, or begin a
                fresh audit from the main workflow.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
