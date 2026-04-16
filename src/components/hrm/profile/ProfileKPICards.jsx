import React from 'react';

const stats = [
  { value: '72',    label: 'Tasks Completed', bg: 'bg-gradient-to-br from-[#1A6FC4] to-[#0C355E]' },
  { value: '10',    label: 'Tasks Overdue',   bg: 'bg-gradient-to-br from-[#1A6FC4] to-[#0C355E]' },
  { value: '78%',   label: 'Utilization',     bg: 'bg-gradient-to-br from-[#1A6FC4] to-[#0C355E]' },
  { value: '4.2 yr',label: 'Tenure',          bg: 'bg-gradient-to-br from-[#1A6FC4] to-[#0C355E]' },
];

export default function ProfileKPICards() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-12">
      {stats.map((s, i) => (
        <div key={i} className={`${s.bg} rounded-xl px-6 py-4 text-white`}>
          <div className="text-4xl font-medium leading-none mb-1">{s.value}</div>
          <div className="text-md font-medium text-white">{s.label}</div>
        </div>
      ))}
    </div>
  );
}