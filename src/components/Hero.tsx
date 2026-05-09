import { ArrowUpRight, ShieldCheck, Terminal } from "lucide-react";

const highlights = [
    { label: "Focus", value: "Backend, DevOps, Cloud" },
    { label: "Style", value: "Pragmatic, reliable, clean" },
    { label: "Mode", value: "Learning, iterating, shipping" },
];

const Hero = () => {
    return (
        <section className="grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-end">
            <div>
                <div className="inline-flex items-center gap-2 rounded-lg border border-emerald-300/15 bg-emerald-300/8 px-3 py-2 text-xs font-medium text-emerald-100">
                    <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                    Static, fast, security-first personal site
                </div>

                <h1 className="mt-7 max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                    Himanshu Kumar Singh
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">
                    Software engineer focused on dependable systems, sharp tooling,
                    and infrastructure that stays understandable after it grows.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a
                        href="mailto:contact@to4to.dev"
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-200 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/70"
                    >
                        Contact me
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                    <a
                        href="https://github.com/to4to"
                        target="_blank"
                        rel="noopener noreferrer"
                        referrerPolicy="no-referrer"
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/12 bg-white/6 px-4 py-3 text-sm font-medium text-white transition hover:border-white/25 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/50"
                    >
                        View GitHub
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/[0.045] p-4 shadow-2xl shadow-black/25">
                <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2 text-sm font-medium text-white/80">
                        <Terminal className="h-4 w-4 text-cyan-200" aria-hidden="true" />
                        profile.sys
                    </div>
                    <span className="rounded-md border border-emerald-300/15 bg-emerald-300/8 px-2 py-1 text-xs text-emerald-100">
                        online
                    </span>
                </div>

                <div className="space-y-3">
                    {highlights.map((item) => (
                        <div
                            key={item.label}
                            className="rounded-lg border border-white/8 bg-black/18 p-4"
                        >
                            <p className="text-xs uppercase tracking-[0.18em] text-white/38">
                                {item.label}
                            </p>
                            <p className="mt-2 text-sm font-medium leading-6 text-white/86">
                                {item.value}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
