import React from 'react';
import { RotateCcw, Clock, CheckSquare, XCircle, Zap } from 'lucide-react';

const kpis = [
  {
    label: 'TOTAL RETURNS',
    value: '24',
    sub: '↗ 3 from last month',
    subColor: 'text-[#059669]',
    icon: RotateCcw,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    label: 'PENDING POSTING',
    value: '3',
    sub: 'Awaiting confirmation',
    subColor: 'text-[#0F172A]',
    icon: Clock,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    label: 'ITEMS RECOVERED',
    value: '142',
    sub: 'Units back in stock',
    subColor: 'text-[#1E4D7B]',
    icon: CheckSquare,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    label: 'DAMAGED / DISPOSAL',
    value: '11',
    sub: 'Flagged for disposal',
    subColor: 'text-[#510208]',
    icon: XCircle,
    iconBg: 'bg-red-100',
    iconColor: 'text-red-500',
  },
  {
    label: 'AVG PROCESSING HRS',
    value: '142',
    sub: '↓ 0.3 hrs faster',
    subColor: 'text-[#1A6FC4]',
    icon: Zap,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
];

export default function StockReturnsKPIs() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
      {kpis.map((k, i) => {
        const Icon = k.icon;
        return (
          <div key={i} className="bg-white rounded-xl shadow-sm p-4 border-l-4 border-[#2563EB]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] sm:text-[12px] font-bold text-gray-400 tracking-wider uppercase leading-tight pb-3">
                {k.label}
              </span>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl lg:text-4xl text-gray-900 leading-none mb-1.5 pb-2">
              {k.value}
            </div>
            <div className={`text-[10px] sm:text-xs font-medium ${k.subColor}`}>{k.sub}</div>
          </div>
        );
      })}
    </div>
  );
}