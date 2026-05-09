import { Cloud, Code2, Gauge, LockKeyhole } from "lucide-react";

const capabilities = [
    {
        title: "Reliable systems",
        description:
            "I care about predictable behavior, clean boundaries, and code paths that are easy to reason about.",
        icon: Code2,
    },
    {
        title: "Cloud and DevOps",
        description:
            "I like automation that removes toil, makes deploys calmer, and keeps operational details visible.",
        icon: Cloud,
    },
    {
        title: "Performance",
        description:
            "I look for simple choices that cut latency, reduce payloads, and keep interfaces quick.",
        icon: Gauge,
    },
    {
        title: "Security posture",
        description:
            "I prefer smaller attack surfaces, dependency hygiene, and defaults that fail closed.",
        icon: LockKeyhole,
    },
];

const About = () => {
    return (
        <section className="mt-16">
            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
                <div>
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-100/70">
                        About
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                        Practical engineering with a bias for systems that hold up.
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-white/62">
                        I build software with a focus on reliability, performance,
                        and maintainable architecture. I care about strong
                        fundamentals, pragmatic automation, and improvements that
                        make the next change easier.
                    </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                    {capabilities.map((capability) => {
                        const Icon = capability.icon;

                        return (
                            <article
                                key={capability.title}
                                className="rounded-lg border border-white/10 bg-white/[0.045] p-5"
                            >
                                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-black/20">
                                    <Icon className="h-5 w-5 text-cyan-100" aria-hidden="true" />
                                </span>
                                <h3 className="mt-4 text-sm font-semibold text-white">
                                    {capability.title}
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-white/58">
                                    {capability.description}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default About;
