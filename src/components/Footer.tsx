const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="mt-12 border-t border-white/10 py-6">
            <div className="flex flex-col gap-2 text-xs text-white/42 sm:flex-row sm:items-center sm:justify-between">
                <p>
                    © {year} Himanshu Kumar Singh
                </p>
            </div>
        </footer>
    );
};

export default Footer;
