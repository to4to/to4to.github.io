"use client";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="pt-2">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70"
            >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
                <span className="font-medium text-white/85">to4to</span>
                <span className="text-white/50">•</span>
                <span>Software Engineer</span>
            </motion.div>

            <div className="mt-6">
                <motion.h1
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
                    className="text-4xl font-semibold tracking-tight text-white sm:text-5xl"
                >
                    Himanshu
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.12 }}
                    className="mt-4 max-w-2xl text-base leading-relaxed text-white/70"
                >
                    Software Engineer focused on building reliable systems,
                    thoughtful tooling, and clean developer experience.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.18 }}
                    className="mt-6 flex items-center gap-3"
                    aria-label="Profile"
                >
                    <div className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-white/10 bg-white/5">
                        <div className="absolute inset-0 opacity-70 bg-linear-to-br from-sky-400/20 via-fuchsia-400/10 to-transparent" />
                        <span className="relative text-sm font-semibold text-white/90">
                            H
                        </span>
                    </div>
                    <div className="text-sm">
                        <p className="font-medium text-white/90">to4to</p>
                        <p className="text-white/55">Software Engineer</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;