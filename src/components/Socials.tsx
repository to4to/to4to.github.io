import {
    ArrowUpRight,
    BriefcaseBusiness,
    Camera,
    Cloud,
    GitBranch,
    MessageCircle,
    X,
} from "lucide-react";

const socials = [
    {
        name: "GitHub",
        url: "https://github.com/to4to",
        icon: GitBranch,
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/to4to/",
        icon: BriefcaseBusiness,
    },
    {
        name: "X/Twitter",
        url: "https://x.com/im_to4to",
        icon: X,
    },
    {
        name: "Instagram",
        url: "https://instagram.com/im_to4to",
        icon: Camera,
    },
    {
        name: "Threads",
        url: "https://threads.net/@im_to4to",
        icon: MessageCircle,
    },
    {
        name: "Bluesky",
        url: "https://bsky.app/profile/imto4to.bsky.social",
        icon: Cloud,
    },
];

const Socials = () => {
    return (
        <section id="socials" className="scroll-mt-10">
            <div className="rounded-2xl border border-white/10 bg-white/3 px-5 py-8 sm:px-8">
                <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-100/70">
                            Socials
                        </p>
                        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                            Find me around the web.
                        </h2>
                    </div>
                    <p className="text-sm text-white/48">Profiles open in a new tab.</p>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {socials.map((social) => {
                        const Icon = social.icon;

                        return (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                referrerPolicy="no-referrer"
                                className="group flex min-h-20 items-center justify-between rounded-xl border border-white/10 bg-white/4.5 px-4 py-4 transition hover:-translate-y-0.5 hover:border-cyan-200/30 hover:bg-cyan-200/8 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/55"
                                aria-label={`${social.name} opens in a new tab`}
                            >
                                <span className="flex items-center gap-3">
                                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-black/20">
                                        <Icon className="h-5 w-5 text-white/82" aria-hidden="true" />
                                    </span>
                                    <span className="text-sm font-semibold text-white/90">
                                        {social.name}
                                    </span>
                                </span>
                                <ArrowUpRight
                                    className="h-4 w-4 text-white/35 transition group-hover:text-cyan-100"
                                    aria-hidden="true"
                                />
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Socials;
