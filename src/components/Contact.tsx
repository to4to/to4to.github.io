const Contact = () => {
    return (
        <section className="mt-14">
            <div
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
                <h2 className="text-sm font-medium tracking-wide text-white/80">
                    Contact
                </h2>
                <p className="mt-3 text-sm text-white/65">
                    Feel free to connect with me.
                </p>
                <a
                    href="mailto:himanshuto4to@outlook.com"
                    className="mt-4 inline-flex items-center rounded-xl border border-white/10 bg-black/20 px-4 py-2 text-sm font-medium text-white/85 transition-colors hover:border-white/20 hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/50"
                >
                    himanshuto4to@outlook.com
                </a>
            </div>
        </section>
    );
};

export default Contact;
