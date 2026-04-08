import React from 'react';
import { FileText, Clock, CheckCircle, XCircle, DollarSign, Users } from 'lucide-react';

const kpis = [
  {
    label: 'Total Requests',
    value: '248',
    sub: '▼ +18  this month',
    subColor: 'text-[#2563EB]',
    icon: FileText,
    bg: 'bg-[#2166A0]',
    iconBg: '',
    iconColor: 'text-white',
  },
  {
    label: 'Pending Approval',
    value: '34',
    sub: '▼ 7 past SLA',
    subColor: 'text-[#2563EB]',
    icon: Clock,
    bg: 'bg-[#1A3A5C]',
    iconBg: '',
    iconColor: 'text-white',
  },
  {
    label: 'Approved',
    value: '189',
    sub: '76.2% rate',
    subColor: 'text-[#2563EB]',
    icon: CheckCircle,
    bg: 'bg-[#1A8FA0]',
    iconBg: '',
    iconColor: 'text-white',
    light: true,
  },
  {
    label: 'Rejected',
    value: '35',
    sub: '▲ +3 this week',
    subColor: 'text-[#640404]',
    icon: XCircle,
    bg: 'bg-[#1A6FC4]',
    iconBg: '',
    iconColor: 'text-white',
  },
  {
    label: 'Total PO Value',
    value: 'Rs 4.2M',
    sub: '18 units',
    subColor: 'text-[#8AABCC]',
    icon: DollarSign,
    bg: 'bg-[#2478B5]',
    iconBg: '',
    iconColor: 'text-white',
  },
  {
    label: 'Active Vendors',
    value: '12',
    sub: '✓ All rated',
    subColor: 'text-[#2563EB]',
    icon: Users,
    bg: 'bg-[#0C3188]',
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