import React from 'react';
import { Users, UserCheck, CheckSquare, Briefcase, Triangle } from 'lucide-react';

const kpis = [
  {
    label: 'TOTAL EMPLOYEES',
    value: '6,781',
    sub: 'Available',
    icon: Users,
  },
  {
    label: 'ACTIVE PERSONNEL',
    value: '6,564',
    badge: '96.8% Active',
    icon: UserCheck,
  },
  {
    label: "WORKFORCE KPI'S",
    value: '5',
    badge: '▼ 2 URGENT',
    icon: CheckSquare,
  },
  {
    label: 'TRAINING PARTICIPATION',
    value: '92.4%',
    badge: 'Status: Stable',
    icon: Briefcase,
  },
  {
    label: 'DISCIPLINARY CASES',
    value: '28',
    badge: '▼ 1 CRITICAL',
    icon: Triangle,
    hasLightning: true,
  },
];

export default function HrmKPICards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {kpis.map((k, i) => {
        const Icon = k.icon;
        return (
          <div key={i} className="relative overflow-hidden bg-[#224467] rounded-xl p-5 text-white shadow-sm border border-[#1e3b5e]">
            {/* Background Lightning Effect */}
            {k.hasLightning && (
               <svg 
                 className="absolute right-[-10%] top-[-10%] h-[120%] text-white/[0.04] rotate-12" 
                 viewBox="0 0 24 24" 
                 fill="currentColor"
               >
                 <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
               </svg>
            )}

            <div className="relative z-10">
              {/* Icon and Label in same line */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-[10px] font-bold text-blue-100 tracking-wider uppercase">
                  {k.label}
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Icon size={14} className="text-[#224467]" />
                </div>
              </div>

              {/* Value */}
              <div className="text-[28px] font-black leading-none mb-1 text-white">
                {k.value}
              </div>

              {/* Sub or Badge */}
              {k.sub && (
                <div className="text-[10px] text-[#93c5fd] font-medium tracking-wide mt-2 uppercase">
                  {k.sub}
                </div>
              )}
              {k.badge && (
                <div className="flex items-center gap-1 text-[10px] font-medium text-[#93c5fd] mt-2 uppercase tracking-wide">
                  {k.badge}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}