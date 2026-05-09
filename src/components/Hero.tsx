const Hero = () => {
    return (
        <section className="pt-2">
            <div
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70"
            >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
                <span className="font-medium text-white/85">to4to</span>
                <span className="text-white/50">•</span>
                <span>Software Engineer</span>
            </div>

            <div className="mt-6">
                <h1
                    className="text-4xl font-semibold tracking-tight text-white sm:text-5xl"
                >
                    Himanshu
                </h1>

                <p
                    className="mt-4 max-w-2xl text-base leading-relaxed text-white/70"
                >
                    Software Engineer focused on building reliable systems,
                    thoughtful tooling, and clean developer experience.
                </p>

                <div
                    className="mt-6 flex items-center gap-3"
                    aria-label="Profile"
                >
                    <div className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-white/10 bg-white/5">
                        <div className="absolute inset-0 opacity-70 bg-linear-to-br from-sky-400/20 via-fuchsia-400/10 to-transparent" />
                        <span className="relative text-sm font-semibold text-white/90">
                            H
                        </span>
                    </div>
                    <div className="text-sm">
                        <p className="font-medium text-white/90">to4to</p>
                        <p className="text-white/55">Software Engineer</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
