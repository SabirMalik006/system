import React from 'react';
import { ArrowUp } from 'lucide-react';

const cards = [
  {
    label: 'TOTAL TRANSFERS',
    value: '1,284',
    trend: '+12%',
    trendUp: true,
    bg: 'bg-[#274c77]',
  },
  {
    label: 'THIS MONTH',
    value: '42',
    sub: 'Current',
    bg: 'bg-[#274c77]',
  },
  {
    label: 'PENDING ORDERS',
    value: '18',
    sub: 'Action Req.',
    bg: 'bg-[#274c77]',
  },
  {
    label: 'INTER-UNIT TRANSFERS',
    value: '65%',
    sub: 'FY23-24',
    bg: 'bg-[#1a73e8]',
  },
];

export default function TransferKPICards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, i) => (
        <div key={i} className={`${card.bg} rounded-xl p-5 text-white flex flex-col justify-between h-28 relative overflow-hidden shadow-md`}>
          <div>
            <div className="text-[10px] font-bold tracking-widest text-[#a8c6e8] uppercase mb-1">
              {card.label}
            </div>
            <div className="text-3xl font-bold">{card.value}</div>
          </div>
          
          {card.trend && (
            <div className={`absolute bottom-5 right-5 flex items-center gap-1 text-xs font-bold ${card.trendUp ? 'text-[#4cceac]' : 'text-red-400'}`}>
              {card.trend}
              {card.trendUp && <ArrowUp size={12} strokeWidth={3} />}
            </div>
          )}
          
          {card.sub && (
            <div className="absolute bottom-5 right-5 text-[10px] font-bold opacity-70 tracking-widest uppercase">
              {card.sub}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}