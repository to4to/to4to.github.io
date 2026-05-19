const capabilities = [
    {
        title: "Development",
        description: "Clean, maintainable software built with care.",
    },
    {
        title: "Collaboration",
        description: "Clear communication and steady execution.",
    },
    {
        title: "Quality",
        description: "Thoughtful defaults and attention to detail.",
    },
];

const About = () => {
    return (
        <section id="about" className="scroll-mt-10">
            <div className="rounded-2xl border border-white/10 bg-white/3 px-5 py-8 sm:px-8">
                <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                    <div>
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-100/70">
                            About
                        </p>
                        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                            Building reliable software, simply.
                        </h2>
                        <p className="mt-4 text-sm leading-7 text-white/62">
                            I am a software developer focused on building stable,
                            professional products and practical solutions.
                        </p>
                        <p className="mt-4 text-sm leading-7 text-white/60">
                            I value simple architecture, good defaults, and software that
                            stays easy to understand and change.
                        </p>
                    </div>

                    <div className="divide-y divide-white/10 overflow-hidden rounded-xl border border-white/10 bg-white/3.5">
                        {capabilities.map((capability) => {
                            return (
                                <article
                                    key={capability.title}
                                    className="grid gap-1 px-5 py-4 sm:grid-cols-[8rem_1fr] sm:gap-4"
                                >
                                    <h3 className="text-sm font-semibold text-white">
                                        {capability.title}
                                    </h3>
                                    <p className="text-sm leading-6 text-white/58">
                                        {capability.description}
                                    </p>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
