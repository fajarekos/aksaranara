import { SectionHeading } from "@/components/ui/SectionHeading";

const skillGroups = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Product",
    skills: ["Roadmapping", "User research", "PRD & specs", "Stakeholder alignment"],
  },
  {
    category: "Tools",
    skills: ["Git", "Figma", "Analytics", "CI/CD basics"],
  },
];

export function SkillSection() {
  return (
    <section
      id="skill"
      className="scroll-mt-20 w-full border-b border-gray-200 bg-white py-16 lg:py-24"
    >
      <div className="w-full px-6 lg:px-12">
        <SectionHeading
          label="Skill"
          title="What I bring to the team"
          description="Technical and product capabilities I use day to day."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-700"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
