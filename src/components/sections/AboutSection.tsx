import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-20 w-full border-b border-gray-200 bg-white py-16 lg:py-24"
    >
      <div className="w-full px-6 lg:px-12">
        <SectionHeading
          label="About"
          title="Frontend Engineer & Product Manager"
          description="Building thoughtful digital products at the intersection of engineering and product strategy."
        />
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
            I&apos;m Fajarekos — based in Indonesia. I work on user-facing products and
            internal tools, from discovery and roadmap to shipped UI. I care about clear
            UX, maintainable frontends, and outcomes that teams can measure.
          </p>
          <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
            Recent focus: B2B platforms, identity and e-signature at scale, and ops
            dashboards. I collaborate closely with design, backend, and stakeholders to
            deliver reliable experiences end to end.
          </p>
        </div>
      </div>
    </section>
  );
}
