import React from 'react';

const cards = [
  {
    label: 'TOTAL PROGRAMS',
    value: '24',
    badge: null,
    sub: 'Active this quarter',
  },
  {
    label: 'ENROLLED',
    value: '387',
    badge: { text: '+12.4%', style: 'bg-[#2563EB] text-white' },
    sub: 'Participants total',
  },
  {
    label: 'COMPLETED',
    value: '241',
    suffix: '/ 62.3%',
    badge: null,
    sub: 'Course completion rate',
  },
  {
    label: 'ABSENT / MISSED',
    value: '46',
    badge: { text: '-11.0%', style: 'bg-red-100 text-red-600' },
    sub: 'Non-attendance rate',
  },
  {
    label: 'AVG SCORE',
    value: '78.4',
    badge: null,
    sub: 'out of 100 points',
  },
  {
    label: 'INSTRUCTORS',
    value: '12',
    badge: null,
    sub: 'Active trainers',
  },
];

export default function TrainingKPICards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
      {cards.map((card, i) => (
        <div
          key={i}
          className={`bg-white rounded-md border border-gray-100 shadow-sm p-5 border-l-8 ${card.badge?.style?.includes('2563EB')
              ? 'border-l-[#2563EB]'
              : card.badge?.style?.includes('red')
                ? 'border-l-[#0EA5E9]'
                : 'border-l-[#2563EB]'
            }`}
        >
          {/* Label */}
          <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-3">
            {card.label}
          </div>

          {/* Value + Badge on same line */}
          <div className="flex items-center gap-2 mb-1">
            <div className="text-3xl font-bold text-gray-900">
              {card.value}
            </div>
            {card.badge && (
              <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${card.badge.style}`}>
                {card.badge.text}
              </span>
            )}
            {card.suffix && (
              <span className="text-sm text-gray-400 font-medium">
                {card.suffix}
              </span>
            )}
          </div>

          {/* Sub text */}
          <div className="text-[11px] text-gray-400">
            {card.sub}
          </div>
        </div>
      ))}
    </div>
  );
}