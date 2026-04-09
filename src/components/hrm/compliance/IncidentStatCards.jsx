import React from 'react';

const stats = [
  {
    label: 'OPEN CASES',
    value: '12',
    valueColor: 'text-gray-900',
    border: 'border-r border-gray-100',
  },
  {
    label: 'CLOSED (MTD)',
    value: '28',
    valueColor: 'text-gray-900',
    border: 'border-r border-gray-100',
  },
  {
    label: 'ESCALATED',
    value: '04',
    valueColor: 'text-red-500',
    border: '',
  },
];

export default function IncidentStatCards() {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="grid grid-cols-3 divide-x divide-gray-100">
        {stats.map((s, i) => (
          <div key={i} className="px-6 py-5 text-center">
            <div className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-2">
              {s.label}
            </div>
            <div className={`text-4xl font-black leading-none ${s.valueColor}`}>
              {s.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}