import Link from "next/link";

export default function NotFound() {
    return (
        <main className="mx-auto grid min-h-dvh w-full max-w-3xl place-items-center px-5 py-14">
            <section className="text-center">
                <p className="text-sm font-medium text-white/50">404</p>
                <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                    Page not found
                </h1>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                    The page you are looking for does not exist.
                </p>
                <Link
                    href="/"
                    className="mt-6 inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/85 transition-colors hover:border-white/20 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/50"
                >
                    Return home
                </Link>
            </section>
        </main>
    );
}
