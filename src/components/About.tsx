"use client";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section className="mt-14">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
                <h2 className="text-sm font-medium tracking-wide text-white/80">
                    About
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                    I build software with a focus on reliability, performance, and
                    maintainable architecture. I care about strong engineering
                    fundamentals, pragmatic automation, and systems that scale.
                    I’m always learning, iterating, and shipping improvements.
                </p>
            </motion.div>
        </section>
    );
};

export default About;