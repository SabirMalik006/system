import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const cards = [
  {
    label: 'TOTAL TRANSFERS',
    value: '1,284',
    trend: '+22.5',
    trendUp: true,
    bg: 'bg-[#1a3a8f]',
  },
  {
    label: 'THIS MONTH',
    value: '42',
    trend: null,
    bg: 'bg-[#1a3a8f]',
  },
  {
    label: 'PENDING ORDERS',
    value: '18',
    sub: 'Active Req.',
    subColor: 'text-yellow-300',
    bg: 'bg-[#1a3a8f]',
  },
  {
    label: 'INTER-UNIT TRANSFERS',
    value: '65%',
    trend: '+23.22',
    trendUp: true,
    bg: 'bg-[#1565c0]',
  },
];

export default function TransferKPICards() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {cards.map((card, i) => (
        <div key={i} className={`${card.bg} rounded-xl p-4 text-white`}>
          <div className="text-[10px] font-bold tracking-widest text-blue-200 uppercase mb-3">
            {card.label}
          </div>
          <div className="text-3xl font-black leading-none mb-1">{card.value}</div>
          {card.trend && (
            <div className={`flex items-center gap-1 text-xs font-semibold ${card.trendUp ? 'text-green-300' : 'text-red-300'}`}>
              {card.trendUp ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
              {card.trend}
            </div>
          )}
          {card.sub && (
            <div className={`text-xs font-medium ${card.subColor}`}>{card.sub}</div>
          )}
        </div>
      ))}
    </div>
  );
}