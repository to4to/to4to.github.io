export default function Banner() {
    return (
        <header className="w-full" aria-label="Site header">
            <div className="flex flex-col gap-4 rounded-xl border border-white/10 bg-white/3.5 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                    <span
                        className="grid h-10 w-10 place-items-center rounded-lg border border-cyan-300/20 bg-cyan-300/10 text-sm font-semibold text-cyan-100"
                        aria-hidden="true"
                    >
                        t4
                    </span>
                    <div>
                        <p className="text-sm text-white/78">
                            <span className="font-semibold text-white">to4to.dev</span>
                            <span className="text-white/45"> · Software developer</span>
                        </p>
                        <p className="mt-0.5 text-xs leading-5 text-white/55">
                            Updates and improvements over time.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                    <nav
                        aria-label="On this page"
                        className="flex flex-wrap items-center gap-2 sm:flex-nowrap"
                    >
                        <a
                            href="#about"
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
                        >
                            About
                        </a>
                        <a
                            href="#socials"
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
                        >
                            Socials
                        </a>
                        <a
                            href="#contact"
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
                        >
                            Contact
                        </a>
                    </nav>

                    <div className="flex items-center gap-2 text-xs text-white/55 sm:justify-end">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" aria-hidden="true" />
                        <span>Calm systems. Reliable software.</span>
                        <span className="ml-1 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-white/60">
                            WIP
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
}
