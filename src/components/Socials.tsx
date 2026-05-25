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
        <section id="socials" className="scroll-mt-24 py-12 sm:py-16">
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-700">
                        Socials
                    </p>
                    <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                        Around the web.
                    </h2>
                    <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
                        Professional profiles, public work, and places to connect.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {socials.map((social) => {
                        const Icon = social.icon;

                        return (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                referrerPolicy="no-referrer"
                                className="group flex min-h-20 items-center justify-between rounded-lg border border-slate-900/10 bg-white px-4 py-4 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-900/20 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-950/20"
                                aria-label={`${social.name} opens in a new tab`}
                            >
                                <span className="flex items-center gap-3">
                                    <span className="grid h-10 w-10 place-items-center rounded-md bg-slate-100 text-slate-800">
                                        <Icon className="h-5 w-5" aria-hidden="true" />
                                    </span>
                                    <span className="text-sm font-semibold text-slate-950">
                                        {social.name}
                                    </span>
                                </span>
                                <ArrowUpRight
                                    className="h-4 w-4 text-slate-400 transition group-hover:text-slate-950"
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
