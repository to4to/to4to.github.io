"use client";

import { Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Contact = () => {
    const emailAddress = "contact@to4to.dev";
    const [hasCopied, setHasCopied] = useState(false);
    const resetTimerRef = useRef<number | null>(null);

    useEffect(() => {
        return () => {
            if (resetTimerRef.current) {
                window.clearTimeout(resetTimerRef.current);
            }
        };
    }, []);

    const copyEmailAddress = async (): Promise<boolean> => {
        try {
            if (navigator?.clipboard?.writeText) {
                await navigator.clipboard.writeText(emailAddress);
                return true;
            }
        } catch {
            // fall back below
        }

        try {
            const textarea = document.createElement("textarea");
            textarea.value = emailAddress;
            textarea.setAttribute("readonly", "");
            textarea.style.position = "fixed";
            textarea.style.opacity = "0";

            document.body.appendChild(textarea);
            textarea.select();
            const didCopy = document.execCommand("copy");
            document.body.removeChild(textarea);
            return didCopy;
        } catch {
            // If copy isn't possible, do nothing.
            return false;
        }
    };

    const handleCopy = async () => {
        const didCopy = await copyEmailAddress();

        if (!didCopy) {
            return;
        }

        setHasCopied(true);

        if (resetTimerRef.current) {
            window.clearTimeout(resetTimerRef.current);
        }

        resetTimerRef.current = window.setTimeout(() => {
            setHasCopied(false);
            resetTimerRef.current = null;
        }, 2000);
    };

    return (
        <section id="contact" className="scroll-mt-10">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-cyan-100/8 px-5 py-8 sm:px-8">
                <div
                    className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-200/10 blur-2xl"
                    aria-hidden="true"
                />
                <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-center">
                    <div>
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-100/70">
                            Contact
                        </p>
                        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                            Have something worth building?
                        </h2>
                        <p className="mt-3 max-w-2xl text-sm leading-6 text-white/62">
                            I am open to professional opportunities, collaboration,
                            and conversations around building good software.
                        </p>
                        <p className="mt-3 text-sm text-white/68">
                            <a
                                href={`mailto:${emailAddress}`}
                                className="font-medium text-white/80 underline decoration-white/15 underline-offset-4 hover:text-white hover:decoration-white/30"
                            >
                                {emailAddress}
                            </a>
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={handleCopy}
                        title={hasCopied ? "Copied" : "Copy email address"}
                        aria-label={
                            hasCopied
                                ? `Copied ${emailAddress} to clipboard`
                                : `Copy ${emailAddress} to clipboard`
                        }
                        disabled={hasCopied}
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                    >
                        <Mail className="h-4 w-4" aria-hidden="true" />
                        {hasCopied ? "Copied" : "Copy email"}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Contact;
