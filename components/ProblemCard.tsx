import Link from 'next/link';

type ProblemCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
};

export default function ProblemCard({
  icon,
  title,
  description,
  href,
}: ProblemCardProps) {
  return (
    <Link href={href}>
      <div className="group relative h-full bg-white border border-gray-200 rounded-md p-6 transition-all duration-200 hover:border-gray-300">
        {/* Icon background */}
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-md mb-4 bg-teal-50 text-teal-700">
          {icon}
        </div>

        {/* Content */}
        <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Arrow indicator */}
        <div className="flex items-center text-teal-700 font-medium text-sm group-hover:translate-x-1 transition-transform">
          <span>Conocer más</span>
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
