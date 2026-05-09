export default function Banner() {
    return (
        <aside className="mb-12 w-full" aria-label="Site identity">
            <div className="flex flex-col gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-lg border border-cyan-300/20 bg-cyan-300/10 text-sm font-semibold text-cyan-100">
                        t4
                    </span>
                    <div>
                        <p className="text-sm text-white/72">
                            <span className="font-medium text-white">to4to.dev</span>
                            <span className="text-white/45"> / software engineer</span>
                        </p>
                        <p className="mt-0.5 text-xs text-white/55">
                            Improvements coming soon.
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/55">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                    <span>Building reliable systems and tools</span>
                    <span className="ml-1 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-white/60">
                        WIP
                    </span>
                </div>
            </div>
        </aside>
    );
}
