import { ArrowUpRight, CheckCircle2, Code2, GitPullRequestArrow, Sparkles } from "lucide-react";

const metrics = [
    { label: "Role", value: "Software developer" },
    { label: "Focus", value: "Reliable products" },
    { label: "Approach", value: "Clear delivery" },
];

const practices = [
    "Practical architecture",
    "Readable implementation",
    "Careful product polish",
];

const Hero = () => {
    return (
        <section className="relative grid min-h-[calc(100dvh-8.5rem)] gap-10 py-8 sm:py-12 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
            <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm">
                    <Sparkles className="h-4 w-4 text-rose-500" aria-hidden="true" />
                    Calm systems. Reliable software.
                </div>

                <h1 className="mt-7 text-5xl font-semibold leading-[0.95] tracking-tight text-slate-950 sm:text-7xl lg:text-8xl">
                    Himanshu Kumar Singh
                </h1>

                <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
                    Software developer shaping dependable products with clear interfaces,
                    maintainable systems, and a steady bias toward shipping.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-950/30"
                    >
                        Start a conversation
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                    <a
                        href="https://github.com/to4to"
                        target="_blank"
                        rel="noopener noreferrer"
                        referrerPolicy="no-referrer"
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-900/12 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-900/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-950/20"
                    >
                        View GitHub
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                </div>

                <dl className="mt-10 grid max-w-2xl grid-cols-3 divide-x divide-slate-900/10 border-y border-slate-900/10">
                    {metrics.map((metric) => (
                        <div key={metric.label} className="py-4 first:pr-4 [&:not(:first-child)]:px-4">
                            <dt className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                                {metric.label}
                            </dt>
                            <dd className="mt-1 text-sm font-semibold text-slate-950 sm:text-base">
                                {metric.value}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>

            <div className="relative">
                <div className="absolute -left-4 top-8 hidden h-24 w-24 border-l border-t border-slate-950/20 lg:block" aria-hidden="true" />
                <div className="overflow-hidden rounded-lg border border-slate-900/12 bg-slate-950 text-white shadow-2xl shadow-slate-950/25">
                    <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                        <div className="flex items-center gap-2">
                            <span className="h-2.5 w-2.5 rounded-full bg-rose-400" aria-hidden="true" />
                            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" aria-hidden="true" />
                            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" aria-hidden="true" />
                        </div>
                        <span className="text-xs font-medium text-white/50">to4to.dev</span>
                    </div>

                    <div className="grid gap-0 sm:grid-cols-[1fr_0.72fr]">
                        <div className="p-5 sm:p-6">
                            <div className="flex items-center gap-3">
                                <span className="grid h-11 w-11 place-items-center rounded-lg bg-cyan-300 text-slate-950">
                                    <Code2 className="h-5 w-5" aria-hidden="true" />
                                </span>
                                <div>
                                    <p className="text-sm font-semibold">Current signal</p>
                                    <p className="text-xs text-white/48">Reliable interfaces, steady delivery</p>
                                </div>
                            </div>

                            <div className="mt-8 space-y-3">
                                {practices.map((practice) => (
                                    <div key={practice} className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.04] px-3 py-3">
                                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-300" aria-hidden="true" />
                                        <span className="text-sm text-white/82">{practice}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="border-t border-white/10 bg-white/[0.04] p-5 sm:border-l sm:border-t-0 sm:p-6">
                            <GitPullRequestArrow className="h-8 w-8 text-cyan-200" aria-hidden="true" />
                            <p className="mt-7 text-3xl font-semibold tracking-tight">clean</p>
                            <p className="mt-2 text-sm leading-6 text-white/58">
                                Systems that can be read, changed, and trusted after launch.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
