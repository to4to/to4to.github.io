const links = [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Socials", href: "#socials" },
    { label: "Contact", href: "#contact" },
];

export default function Banner() {
    return (
        <header className="sticky top-3 z-40" aria-label="Site header">
            <div className="flex flex-col gap-4 rounded-lg border border-slate-900/10 bg-white/90 px-4 py-3 shadow-lg shadow-slate-950/5 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
                <a href="#content" className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-950/20">
                    <span
                        className="grid h-11 w-11 place-items-center overflow-hidden rounded-md border border-slate-900/10 bg-stone-100"
                        aria-hidden="true"
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element -- Tiny local mark; plain img avoids inline styles under the strict CSP. */}
                        <img
                            src="/brand/to4to-mark.png"
                            alt=""
                            width="44"
                            height="44"
                            className="h-full w-full object-cover"
                        />
                    </span>
                    <span>
                        <span className="block text-sm font-semibold text-slate-950">to4to.dev</span>
                        <span className="block text-xs text-slate-500">Software developer</span>
                    </span>
                </a>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <span className="inline-flex w-fit items-center rounded-full border border-slate-900/10 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
                        Improvements coming
                    </span>
                    <nav aria-label="On this page" className="flex flex-wrap items-center gap-1.5">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="rounded-md px-3 py-2 text-xs font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-950/20"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
}
