'use client';

import { useState } from 'react';

type AccordionItem = {
  id: string;
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

export default function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="border border-gray-200 rounded-md"
        >
          <button
            onClick={() => toggle(item.id)}
            className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
            aria-expanded={openId === item.id}
            aria-controls={`panel-${item.id}`}
          >
            <h3 className="font-semibold text-gray-900">
              {item.question}
            </h3>
            <svg
              className={`w-5 h-5 text-gray-600 transition-transform ${
                openId === item.id ? 'transform rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>

          {openId === item.id && (
            <div
              id={`panel-${item.id}`}
              className="px-6 py-4 border-t border-gray-200 bg-gray-50"
            >
              <p className="text-gray-700 leading-relaxed">
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
