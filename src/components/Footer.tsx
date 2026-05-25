const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-slate-900/10 py-8">
            <div className="flex flex-col gap-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                <p>© {year} Himanshu Kumar Singh</p>
                <nav aria-label="Footer links" className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <a
                        href="#about"
                        className="font-medium text-slate-600 underline decoration-slate-900/10 underline-offset-4 hover:text-slate-950 hover:decoration-slate-900/30"
                    >
                        About
                    </a>
                    <a
                        href="#work"
                        className="font-medium text-slate-600 underline decoration-slate-900/10 underline-offset-4 hover:text-slate-950 hover:decoration-slate-900/30"
                    >
                        Work
                    </a>
                    <a
                        href="#socials"
                        className="font-medium text-slate-600 underline decoration-slate-900/10 underline-offset-4 hover:text-slate-950 hover:decoration-slate-900/30"
                    >
                        Socials
                    </a>
                    <a
                        href="#contact"
                        className="font-medium text-slate-600 underline decoration-slate-900/10 underline-offset-4 hover:text-slate-950 hover:decoration-slate-900/30"
                    >
                        Contact
                    </a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
