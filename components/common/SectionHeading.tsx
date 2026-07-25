interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  badge,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {badge && (
        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
          {badge}
        </span>
      )}

      <h2 className="mt-5 text-3xl font-bold text-gray-900 md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-lg text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}