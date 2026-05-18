import { SectionHeading } from "@/components/ui/SectionHeading";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 w-full bg-white py-16 lg:py-24"
    >
      <div className="w-full px-6 lg:px-12">
        <SectionHeading
          label="Contact Me"
          title="Let's work together"
          description="Open to product and frontend opportunities. Reach out via email or LinkedIn."
        />
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="mailto:hello@fajarekos.com"
            className="inline-flex h-12 items-center justify-center rounded-full bg-blue-600 px-8 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            Send email
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full border border-blue-200 bg-white px-8 text-sm font-medium text-blue-600 transition-colors hover:border-blue-300 hover:bg-blue-50"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
