"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations"; 
import Link from "next/link";

export function AboutSection() {
  return (
    <section 
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pb-10 pt-18 text-center">
 
  
      {/* Avatar */}
      <motion.div
        className="mb-5"
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.1}
      >
        <div
          className="mx-auto flex h-[120px] w-[120px] select-none items-center justify-center rounded-full border-[3px] border-white text-3xl shadow-lg"
          style={{ background: "#cce8f4" }}>
          🧑‍💻
        </div>
      </motion.div>
 
      {/* Greeting */}
      <motion.div
        className="mb-5 flex items-center gap-2 text-[15px] font-medium text-gray-500"
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.22}
      >
        <span>Hi, I&apos;m Fajar Eko Susilo</span>
        <span className="text-xl" role="img" aria-label="rock on">🤙</span>
      </motion.div>
 
      {/* Headline */}
      <motion.h1
        className="mb-6 max-w-2xl text-[48px] font-extrabold leading-[1.08] text-gray-900 md:text-[48px]"
        style={{ letterSpacing: "-0.025em" }}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.36}
      >
        Frontend & AI Enthusiatic <br />
        Ex Product Manager<br />
        experience.
      </motion.h1>
 
      {/* Sub-copy */}
      <motion.p
        className="mb-10 max-w-xs text-[14px] leading-relaxed text-gray-400"
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.5}>

        I design and build intelligent, user-focused products.
        I think like a <strong className="font-semibold text-gray-800">Product Manager</strong>, code like a <strong className="font-semibold text-gray-800">Developer</strong>, design like a craft.
      </motion.p>
 
      {/* CTA */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.64}
      >
        <Link
          href="#contact"
          className="inline-block rounded-full bg-gray-900 px-9 py-4 text-[11px] font-bold uppercase tracking-[0.22em] text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-700 hover:shadow-xl active:scale-[0.97]"
        >
          Connect with me
        </Link>
      </motion.div>
    </section>
  );
}
