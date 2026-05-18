type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
};

export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 sm:mb-12">
      <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
        {label}
      </p>
      <h2 className="mt-1 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-2 max-w-2xl text-sm text-gray-600 sm:text-base">{description}</p>
      )}
    </div>
  );
}
