import Link from 'next/link';

type ProblemCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  color: 'teal' | 'blue' | 'indigo' | 'slate';
};

const colorClasses = {
  teal: 'bg-teal-50 text-teal-700 border-teal-200',
  blue: 'bg-blue-50 text-blue-700 border-blue-200',
  indigo: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  slate: 'bg-slate-50 text-slate-700 border-slate-200',
};

export default function ProblemCard({
  icon,
  title,
  description,
  href,
  color = 'teal',
}: ProblemCardProps) {
  return (
    <Link href={href}>
      <div className="group relative h-full bg-white border border-gray-200 rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:border-gray-300">
        {/* Icon background */}
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${colorClasses[color]}`}>
          {icon}
        </div>

        {/* Content */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Arrow indicator */}
        <div className="flex items-center text-teal-700 font-medium text-sm group-hover:gap-1 transition-all">
          <span>Conocer más</span>
          <svg
            className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
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
