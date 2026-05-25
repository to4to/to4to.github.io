import { Blocks, Compass, Gauge, ShieldCheck } from "lucide-react";

const capabilities = [
    {
        title: "Product Engineering",
        description: "Designing features around real workflows, clear states, and predictable behavior.",
        icon: Blocks,
    },
    {
        title: "Systems Thinking",
        description: "Choosing simple boundaries, explicit data flow, and code that stays easy to change.",
        icon: Compass,
    },
    {
        title: "Reliability",
        description: "Reducing surprises with careful defaults, accessible interfaces, and steady iteration.",
        icon: ShieldCheck,
    },
    {
        title: "Performance",
        description: "Keeping pages responsive, focused, and practical across the devices people actually use.",
        icon: Gauge,
    },
];

const About = () => {
    return (
        <section id="about" className="scroll-mt-24 py-12 sm:py-16">
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
                <div className="lg:sticky lg:top-28">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
                        About
                    </p>
                    <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                        Clear software for messy real-world work.
                    </h2>
                    <p className="mt-5 max-w-xl text-base leading-8 text-slate-700">
                        I build professional products with a preference for readable code,
                        durable structure, and interfaces that make the next action obvious.
                    </p>
                </div>

                <div className="grid gap-px overflow-hidden rounded-lg border border-slate-900/10 bg-slate-900/10 sm:grid-cols-2">
                    {capabilities.map((capability) => {
                        const Icon = capability.icon;

                        return (
                            <article key={capability.title} className="bg-white p-5 sm:p-6">
                                <div className="flex items-center gap-3">
                                    <span className="grid h-10 w-10 place-items-center rounded-md bg-teal-50 text-teal-700">
                                        <Icon className="h-5 w-5" aria-hidden="true" />
                                    </span>
                                    <h3 className="text-base font-semibold text-slate-950">
                                        {capability.title}
                                    </h3>
                                </div>
                                <p className="mt-4 text-sm leading-7 text-slate-600">
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
