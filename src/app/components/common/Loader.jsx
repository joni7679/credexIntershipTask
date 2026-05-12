export default function Loader() {
    return (
        <main
            className="flex min-h-[calc(100vh-68px)] flex-1 items-center justify-center bg-slate-50 px-4 py-12"
            aria-busy="true"
            aria-live="polite"
        >
            <div className="w-full max-w-4xl">
                <div className="mb-8 flex items-center justify-between gap-4">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                            AI Spend Audit
                        </p>
                        <h1 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
                            Preparing your audit workspace
                        </h1>
                    </div>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-blue-100 bg-white shadow-sm">
                        <div className="h-6 w-6 rounded-full border-2 border-blue-100 border-t-blue-600 animate-spin" />
                    </div>
                </div>

                <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
                    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                        <div className="mb-6 flex items-center gap-3">
                            <div className="h-11 w-11 rounded-lg bg-blue-100 animate-pulse" />
                            <div className="flex-1 space-y-2">
                                <div className="h-3 w-40 rounded-full bg-slate-200 animate-pulse" />
                                <div className="h-3 w-28 rounded-full bg-slate-100 animate-pulse" />
                            </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            {[1, 2, 3, 4].map((item) => (
                                <div key={item} className="space-y-2">
                                    <div className="h-3 w-24 rounded-full bg-slate-100 animate-pulse" />
                                    <div className="h-11 rounded-lg border border-slate-100 bg-slate-50 animate-pulse" />
                                </div>
                            ))}
                        </div>

                        <div className="mt-5 space-y-2">
                            <div className="h-3 w-32 rounded-full bg-slate-100 animate-pulse" />
                            <div className="h-24 rounded-lg border border-slate-100 bg-slate-50 animate-pulse" />
                        </div>
                    </section>

                    <aside className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                        <div className="mb-5 flex items-center justify-between">
                            <div className="h-4 w-28 rounded-full bg-slate-200 animate-pulse" />
                            <div className="h-8 w-8 rounded-full bg-blue-100 animate-pulse" />
                        </div>

                        <div className="space-y-4">
                            {[1, 2, 3].map((item) => (
                                <div key={item} className="rounded-lg border border-slate-100 p-4">
                                    <div className="mb-3 h-3 w-3/4 rounded-full bg-slate-200 animate-pulse" />
                                    <div className="h-2 w-full rounded-full bg-slate-100 animate-pulse" />
                                    <div className="mt-2 h-2 w-2/3 rounded-full bg-slate-100 animate-pulse" />
                                </div>
                            ))}
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}
