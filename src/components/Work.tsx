import { Braces, Layers3, ShieldCheck } from "lucide-react";

const work = [
    {
        title: "Web apps",
        description: "Clean interfaces and practical user flows.",
        icon: Layers3,
    },
    {
        title: "Reliable systems",
        description: "Maintainable code with clear boundaries.",
        icon: ShieldCheck,
    },
    {
        title: "Developer tooling",
        description: "Small tools and improvements that reduce friction.",
        icon: Braces,
    },
];

const Work = () => {
    return (
        <section id="work" className="scroll-mt-24 py-12 sm:py-16">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose-700">
                        Work
                    </p>
                    <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                        What I build.
                    </h2>
                </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
                {work.map((item) => {
                    const Icon = item.icon;

                    return (
                        <article key={item.title} className="rounded-lg border border-slate-900/10 bg-white p-5 shadow-sm">
                            <span className="grid h-11 w-11 place-items-center rounded-md bg-amber-100 text-amber-800">
                                <Icon className="h-5 w-5" aria-hidden="true" />
                            </span>
                            <h3 className="mt-8 text-xl font-semibold tracking-tight text-slate-950">
                                {item.title}
                            </h3>
                            <p className="mt-3 text-sm leading-7 text-slate-600">
                                {item.description}
                            </p>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Work;
