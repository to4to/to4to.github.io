export default function Banner() {
    return (
        <aside
            className="mb-10 w-full"
            aria-label="Status"
        >
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <div className="pointer-events-none absolute inset-0 opacity-60 bg-linear-to-r from-sky-400/10 via-fuchsia-400/10 to-sky-400/10" />
                <div className="relative flex items-center justify-between gap-3">
                    <p className="text-sm text-white/80">
                        <span className="font-medium text-white/90">This website will be improved</span>
                        <span className="text-white/60"> — updates coming soon.</span>
                    </p>
                    <span className="inline-flex items-center rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-white/70">
                        WIP
                    </span>
                </div>
            </div>
        </aside>
    );
}
