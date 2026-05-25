"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type CopyEmailButtonProps = {
    emailAddress: string;
};

const CopyEmailButton = ({ emailAddress }: CopyEmailButtonProps) => {
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
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/12 bg-white/6 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/55 disabled:cursor-default"
        >
            {hasCopied ? (
                <Check className="h-4 w-4" aria-hidden="true" />
            ) : (
                <Copy className="h-4 w-4" aria-hidden="true" />
            )}
            {hasCopied ? "Copied" : "Copy email"}
        </button>
    );
};

export default CopyEmailButton;
