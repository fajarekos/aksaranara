"use client";

import { motion } from "framer-motion";
import { MotionDiv } from "@/components/ui/MotionDiv";
import { fadeIn, fadeUp, staggerContainer } from "@/lib/animations";

const effectItems = [
  { key: "entrance", label: "whileInView + fade up" },
  { key: "stagger", label: "stagger children" },
  { key: "hover", label: "whileHover / whileTap" },
  { key: "spring", label: "spring transition" },
  { key: "loop", label: "animate repeat" },
  { key: "drag", label: "drag (geser)" },
];

export function FramerMotionShowcase() {
  return (
    <MotionDiv
      className="w-full rounded-2xl border border-gray-200 bg-white p-6 shadow-lg shadow-gray-200/50 ring-1 ring-gray-100"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeUp}
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center rounded-full bg-blue-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
          Framer Motion
        </span>
        <span className="text-xs text-gray-500">
          terpasang di proyek ini
        </span>
      </div>

      <h2 className="mt-4 text-xl font-semibold tracking-tight text-gray-900">
        Kartu demo animasi
      </h2>
      <p className="mt-1 text-sm leading-relaxed text-gray-600">
        Beberapa pola animasi umum: masuk saat terlihat, urutan anak, interaksi
        hover/tap, spring, loop, dan drag.
      </p>

      <motion.ul
        className="mt-5 flex flex-wrap gap-2"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
      >
        {effectItems.map((item) => (
          <motion.li
            key={item.key}
            variants={fadeIn}
            className="rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700"
          >
            {item.label}
          </motion.li>
        ))}
      </motion.ul>

      <motion.div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <motion.button
          type="button"
          className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-md transition-colors hover:bg-blue-700"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          Hover &amp; tap saya
        </motion.button>

        <div className="flex items-center gap-3">
          <motion.span
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-xs font-bold text-white shadow-md"
            animate={{ scale: [1, 1.08, 1], rotate: [0, 4, -4, 0] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
          >
            FM
          </motion.span>
          <p className="text-xs text-gray-500">
            Loop dengan{" "}
            <code className="rounded bg-blue-50 px-1 py-0.5 text-[0.65rem] text-blue-800">
              animate
            </code>
          </p>
        </div>
      </motion.div>

      <motion.div
        className="mt-6 cursor-grab rounded-xl border border-dashed border-blue-200 bg-blue-50/50 px-4 py-3 active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: -72, right: 72 }}
        dragElastic={0.12}
        whileDrag={{ scale: 1.02, boxShadow: "0 12px 40px -12px rgb(37 99 235 / 0.25)" }}
      >
        <p className="text-center text-sm text-gray-600">
          Seret blok ini secara horizontal ↑
        </p>
      </motion.div>
    </MotionDiv>
  );
}
