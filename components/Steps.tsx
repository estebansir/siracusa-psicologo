type StepsProps = {
  items: Array<{
    number: string;
    title: string;
    description: string;
  }>;
};

export default function Steps({ items }: StepsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col">
          {/* Step number and title */}
          <div className="mb-4">
            <div className="text-sm font-semibold text-teal-700 mb-2">
              {item.number}
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              {item.title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
