import {
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
        <section className="mt-14">
            <div className="mb-4 flex items-end justify-between gap-4">
                <h2 className="text-sm font-medium tracking-wide text-white/80">
                    Socials
                </h2>
                <p className="text-xs text-white/50">
                    Open profiles in a new tab
                </p>
            </div>
            <div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3"
            >
                {socials.map((social) => {
                    const Icon = social.icon;

                    return (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            referrerPolicy="no-referrer"
                            className="group relative rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/50"
                            aria-label={`${social.name} (opens in a new tab)`}
                        >
                            <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100 bg-linear-to-r from-sky-400/10 via-fuchsia-400/10 to-sky-400/10" />
                            <div className="relative flex items-center gap-3">
                                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-black/20 ring-1 ring-white/10 group-hover:ring-white/20">
                                    <Icon className="h-5 w-5 text-white/85" aria-hidden="true" />
                                </span>
                                <span className="text-sm font-medium text-white/90">
                                    {social.name}
                                </span>
                            </div>
                        </a>
                    );
                })}
            </div>
        </section>
    );
};

export default Socials;
