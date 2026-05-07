"use client";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <footer className="mt-14 pb-10">
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="text-center text-xs text-white/45"
            >
                Built with Next.js by to4to
            </motion.p>
        </footer>
    );
};

export default Footer;