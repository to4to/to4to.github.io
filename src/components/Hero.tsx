import { ArrowUpRight, Code2 } from "lucide-react";

const highlights = [
    { label: "Focus", value: "Reliable software" },
    { label: "Approach", value: "Calm, steady, practical" },
    { label: "Line", value: "Calm systems. Reliable software." },
];

const Hero = () => {
    return (
        <section className="grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-end">
            <div>
                <div className="inline-flex items-center gap-2 rounded-lg border border-white/12 bg-white/6 px-3 py-2 text-xs font-medium text-white/80">
                    <Code2 className="h-4 w-4 text-cyan-200" aria-hidden="true" />
                    Calm systems. Reliable software.
                </div>

                <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                    Himanshu Kumar Singh
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">
                    I build software with an emphasis on reliability, clarity, and
                    long-term maintainability.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a
                        href="#contact"
                        aria-label="Jump to contact section"
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

            <div className="rounded-xl border border-white/10 bg-white/3.5 p-5">
                <div className="mb-4 flex items-center justify-between">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-100/70">
                        Snapshot
                    </p>
                    <p className="text-xs text-white/45">Now</p>
                </div>
                <div className="space-y-3">
                    {highlights.map((item) => (
                        <div
                            key={item.label}
                            className="flex items-center justify-between gap-4 border-b border-white/8 pb-3 last:border-b-0 last:pb-0"
                        >
                            <p className="text-xs text-white/38">
                                {item.label}
                            </p>
                            <p className="text-right text-sm font-medium leading-6 text-white/82">
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
