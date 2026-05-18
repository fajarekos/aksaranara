import { SectionHeading } from "@/components/ui/SectionHeading";

const experiences = [
  {
    period: "Present",
    role: "Frontend Engineer & Product Manager",
    company: "Product companies",
    summary:
      "Ship user-facing features and internal tools; partner on roadmap, specs, and delivery.",
  },
  {
    period: "Earlier",
    role: "Product Manager",
    company: "Lawble",
    summary:
      "Legal operations workflows — intake, documents, and collaboration for legal and business teams.",
  },
  {
    period: "Earlier",
    role: "Frontend Engineer",
    company: "Privy",
    summary:
      "Identity, e-signature, and onboarding experiences at national scale.",
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 w-full border-b border-gray-200 bg-gray-50 py-16 lg:py-24"
    >
      <div className="w-full px-6 lg:px-12">
        <SectionHeading
          label="Experience"
          title="Career highlights"
          description="Roles and domains where I have driven product and engineering outcomes."
        />
        <ul className="flex flex-col gap-6">
          {experiences.map((item) => (
            <li
              key={`${item.company}-${item.role}`}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <div>
                <p className="text-sm font-medium text-blue-600">{item.period}</p>
                <h3 className="mt-1 text-lg font-semibold text-gray-900">{item.role}</h3>
                <p className="text-sm text-gray-500">{item.company}</p>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                {item.summary}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
