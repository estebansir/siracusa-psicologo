type CalloutProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Callout({ children, className = '' }: CalloutProps) {
  return (
    <div className={`rounded-lg border-l-4 border-teal-700 bg-teal-50 p-6 my-8 text-gray-800 ${className}`}>
      {children}
    </div>
  );
}
