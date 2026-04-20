import React from 'react';
import { FileText, Clock, CheckCircle, XCircle, DollarSign, Users } from 'lucide-react';

const kpis = [
  {
    label: 'Total Requests',
    value: '248',
    sub: '▼ +18  this month',
    subColor: 'text-white/80',
    icon: FileText,
    bg: 'bg-[#1E4D7B]',
    iconBg: '',
    iconColor: 'text-white',
  },
  {
    label: 'Pending Approval',
    value: '34',
    sub: '▼ 7 past SLA',
    subColor: 'text-white/80',
    icon: Clock,
    bg: 'bg-[#163A50]',
    iconBg: '',
    iconColor: 'text-white',
  },
  {
    label: 'Approved',
    value: '189',
    sub: '76.2% rate',
    subColor: 'text-white/80',
    icon: CheckCircle,
    bg: 'bg-[#1E4D7B]',
    iconBg: '',
    iconColor: 'text-white',
    light: true,
  },
  {
    label: 'Rejected',
    value: '35',
    sub: '▲ +3 this week',
    subColor: 'text-white/80',
    icon: XCircle,
    bg: 'bg-[#163A50]',
    iconBg: '',
    iconColor: 'text-white',
  },
  {
    label: 'Total PO Value',
    value: 'Rs 4.2M',
    sub: '18 units',
    subColor: 'text-white/80',
    icon: DollarSign,
    bg: 'bg-[#1E4D7B]',
    iconBg: '',
    iconColor: 'text-white',
  },
  {
    label: 'Active Vendors',
    value: '12',
    sub: '✓ All rated',
    subColor: 'text-white/80',
    icon: Users,
    bg: 'bg-[#1E4D7B]',
    iconBg: '',
    iconColor: 'text-white',
  },
];

export default function ProcurementKPIs() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
      {kpis.map((k, i) => {
        const Icon = k.icon;
        return (
          <div key={i} className={`${k.bg} rounded-xl px-4 py-2 border border-[#1e3a5f]`}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-medium text-white tracking-wider uppercase leading-tight">{k.label}</span>
              <div className={`w-7 h-7 rounded-lg ${k.iconBg} flex items-center justify-center flex-shrink-0`}>
                <Icon size={13} className={k.iconColor} />
              </div>
            </div>
            <div className={`text-3xl font-medium leading-none mb-1.5 ${k.light ? 'text-white' : 'text-white'}`}>
              {k.value}
            </div>
            <div className={`text-xs font-medium ${k.subColor}`}>{k.sub}</div>
          </div>
        );
      })}
    </div>
  );
}