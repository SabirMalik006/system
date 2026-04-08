import React from 'react';
import { ArrowRight, Zap, Star, Home } from 'lucide-react';

const depts = [
  {
    name: 'Plumbing',
    requests: 72,
    approved: 42,
    pending: 8,
    icon: ArrowRight,
    iconBg: 'bg-blue-600',
    bg: 'bg-[#ffffff]',
    border: 'border-[#1A6FC4]',
    barColor: 'bg-blue-500',
    barWidth: '72%',
    active: true,
  },
  {
    name: 'Electrical',
    requests: 68,
    approved: 51,
    pending: 12,
    icon: Zap,
    iconBg: 'bg-[#1A8FA0]',
    bg: 'bg-[#ffffff]',
    border: 'border-[#1A8FA0]',
    barColor: 'bg-blue-400',
    barWidth: '68%',
    active: true,
  },
  {
    name: 'Painting',
    requests: 59,
    approved: 47,
    pending: 6,
    icon: Star,
    iconBg: 'bg-[#0F5FB5]',
    bg: 'bg-[#ffffff]',
    border: 'border-[#0F5FB5]',
    barColor: 'bg-teal-400',
    barWidth: '59%',
    active: false,
  },
  {
    name: 'Carpentry',
    requests: 49,
    approved: 30,
    pending: 8,
    icon: Home,
    iconBg: 'bg-[#0EA5E9]',
    bg: 'bg-[#ffffff]',
    border: 'border-[#0EA5E9]',
    barColor: 'bg-blue-300',
    barWidth: '49%',
    active: false,
  },
];

export default function DepartmentCards() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {depts.map((d, i) => {
        const Icon = d.icon;
        return (
          <div key={i} className={`${d.bg} rounded-xl border-2 ${d.border} p-4`}>
            <div className={`w-9 h-9 rounded-xl ${d.iconBg} flex items-center justify-center mb-3`}>
              <Icon size={16} className="text-white" />
            </div>
            <div className={`text-sm font-bold mb-0.5 ${d.active ? 'text-[#0F172A]' : 'text-gray-600'}`}>
              {d.name}
            </div>
            <div className={`text-4xl font-medium leading-none mb-1 ${d.active ? 'text-[#0F172A]' : 'text-gray-700 font-medium'}`}>
              {d.requests}
            </div>
            <div className="text-xs text-[#0F172A] mb-3">Requests this year</div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="bg-[#0F5FB5] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                {d.approved} Approved
              </span>
              <span className="bg-[#0F5FB5] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                {d.pending} Pending
              </span>
            </div>
            <div className="mt-3 h-1 rounded-full bg-[#0F172A] overflow-hidden">
              <div className={`h-full rounded-full ${d.barColor}`} style={{ width: d.barWidth }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}