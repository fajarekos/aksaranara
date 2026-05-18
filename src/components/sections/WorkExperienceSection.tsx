"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { slideFromRight, staggerContainer } from "@/lib/animations";

const products = [
  {
    id: "lawble",
    name: "Lawble",
    tagline: "Legal operations platform",
    description:
      "Workflows for legal teams — case intake, documents, and counsel collaboration.",
    role: "Product Manager",
    tags: ["B2B SaaS", "Legal Tech", "Workflow"],
    accent: "from-emerald-500/20 to-teal-600/10",
    badge: "bg-emerald-600/10 text-emerald-800",
  },
  {
    id: "privy",
    name: "Privy",
    tagline: "Digital identity & e-signature",
    description:
      "Trusted digital signing, identity verification, and onboarding at scale.",
    role: "Frontend Engineer",
    tags: ["Identity", "E-Signature", "Scale"],
    accent: "from-sky-500/20 to-blue-600/10",
    badge: "bg-sky-600/10 text-sky-800",
  },
  {
    id: "privy-dashboard",
    name: "Privy Internal Tools",
    tagline: "Operations dashboard",
    description:
      "Internal ops dashboard — transactions, user lookups, and platform health.",
    role: "Frontend Engineer",
    tags: ["Dashboard", "Internal Tools", "Data UI"],
    accent: "from-violet-500/20 to-purple-600/10",
    badge: "bg-violet-600/10 text-violet-800",
  },
] as const;

function WorkCard({
  product,
  index,
}: {
  product: (typeof products)[number];
  index: number;
}) {
  return (
    <motion.article
      className="relative flex min-w-0 flex-1 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-lg shadow-gray-200/60 ring-1 ring-gray-100 sm:p-6"
      variants={slideFromRight}
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${product.accent}`}
        aria-hidden
      />
      <div className="relative flex flex-1 flex-col">
        <div className="mb-4 flex items-start justify-between gap-2">
          <span className="text-sm font-medium tabular-nums text-gray-400">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className={`shrink-0 rounded-full px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide sm:px-3 sm:py-1 sm:text-xs ${product.badge}`}
          >
            {product.role}
          </span>
        </div>
        <h3 className="text-lg font-semibold tracking-tight text-gray-900 sm:text-xl">
          {product.name}
        </h3>
        <p className="mt-1 text-xs font-medium text-gray-500 sm:text-sm">
          {product.tagline}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">
          {product.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {product.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md border border-gray-200 bg-gray-50 px-2 py-0.5 text-[0.65rem] font-medium text-gray-700 sm:text-xs"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

export function WorkExperienceSection() {
  return (
    <section
      id="work-experience"
      className="scroll-mt-20 w-full overflow-x-hidden border-b border-gray-200 bg-gray-50 py-16 lg:py-24"
      aria-label="Work experience"
    >
      <motion.div
        className="w-full px-6 lg:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer}
      >
        <SectionHeading
          label="Work Experience"
          title="Products I have worked on"
          description="Selected companies and platforms — cards slide in from the right on scroll."
        />
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-6">
          {products.map((product, index) => (
            <WorkCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
