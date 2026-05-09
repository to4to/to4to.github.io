import { Mail } from "lucide-react";

const Contact = () => {
    return (
        <section className="mt-16">
            <div className="grid gap-5 rounded-lg border border-white/10 bg-cyan-100/[0.08] p-6 sm:grid-cols-[1fr_auto] sm:items-center">
                <div>
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-100/70">
                        Contact
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                        Have something worth building?
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-white/62">
                        I am always open to thoughtful engineering conversations,
                        collaboration, and work that benefits from careful systems
                        thinking.
                    </p>
                </div>
                <a
                    href="mailto:himanshuto4to@outlook.com"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    Email me
                </a>
            </div>
        </section>
    );
};

export default Contact;
