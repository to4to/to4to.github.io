const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-white/10 py-8">
            <div className="flex flex-col gap-4 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
                <p>© {year} Himanshu Kumar Singh</p>
                <nav aria-label="Footer links" className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <a
                        href="#about"
                        className="text-white/55 underline decoration-white/10 underline-offset-4 hover:text-white hover:decoration-white/25"
                    >
                        About
                    </a>
                    <a
                        href="#socials"
                        className="text-white/55 underline decoration-white/10 underline-offset-4 hover:text-white hover:decoration-white/25"
                    >
                        Socials
                    </a>
                    <a
                        href="#contact"
                        className="text-white/55 underline decoration-white/10 underline-offset-4 hover:text-white hover:decoration-white/25"
                    >
                        Contact
                    </a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
