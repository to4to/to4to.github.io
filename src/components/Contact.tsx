import CopyEmailButton from "@/components/CopyEmailButton";
import { ArrowUpRight, Mail } from "lucide-react";

const contactNotes = ["Open to roles", "Project work", "Collaboration"];

const Contact = () => {
    const emailAddress = "contact@to4to.dev";
    const mailtoUrl = `mailto:${emailAddress}`;
    const emailSubject = "Let's connect about a software opportunity";
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}&su=${encodeURIComponent(emailSubject)}`;

    return (
        <section id="contact" className="scroll-mt-24 py-12 sm:py-16">
            <div className="grid overflow-hidden rounded-lg border border-slate-900/10 bg-white shadow-xl shadow-slate-950/8 lg:grid-cols-[1fr_0.62fr]">
                <div className="p-6 sm:p-8 lg:p-10">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
                        Contact
                    </p>
                    <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                        Let&apos;s talk about the next build.
                    </h2>
                    <p className="mt-5 max-w-2xl text-base leading-8 text-slate-700">
                        I am open to software development opportunities, focused project work,
                        and practical conversations around building reliable products.
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                        {contactNotes.map((note) => (
                            <span
                                key={note}
                                className="rounded-full border border-slate-900/10 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600"
                            >
                                {note}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="border-t border-slate-900/10 bg-slate-950 p-6 text-white sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
                    <div className="flex h-full flex-col justify-between gap-8">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200/80">
                                Email
                            </p>
                            <a
                                href={mailtoUrl}
                                className="mt-3 inline-flex break-all text-lg font-semibold text-white underline decoration-white/18 underline-offset-4 transition hover:decoration-white/45"
                            >
                                {emailAddress}
                            </a>
                        </div>

                        <div className="grid gap-3">
                            <a
                                href={gmailUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                referrerPolicy="no-referrer"
                                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                            >
                                <Mail className="h-4 w-4" aria-hidden="true" />
                                Send email
                                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                            </a>
                            <CopyEmailButton emailAddress={emailAddress} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
