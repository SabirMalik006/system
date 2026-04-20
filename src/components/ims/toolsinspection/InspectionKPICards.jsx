import React from 'react';
import { Package, Clock, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

const cards = [
  { label: 'Total Assigned Kits', value: '248', icon: Package,       bg: 'bg-[#1a3a8f]' },
  { label: 'Pending Inspection',  value: '34',  icon: Clock,         bg: 'bg-[#1565c0]' },
  { label: 'Passed',              value: '189', icon: CheckCircle,   bg: 'bg-[#0f5e3b]' },
  { label: 'Failed / Damaged',    value: '11',  icon: XCircle,       bg: 'bg-[#b91c1c]' },
  { label: 'Due Today',           value: '08',  icon: AlertTriangle, bg: 'bg-[#0c4a6e]' },
];

export default function InspectionKPICards() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
      {cards.map((card, i) => {
        const Icon = card.icon;
        return (
          <div key={i} className={`${card.bg} rounded-xl p-4 text-white`}>
            <div className="flex items-start justify-between mb-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <Icon size={14} className="text-white" />
              </div>
            </div>
            <div className="text-[10px] font-bold text-white/80 tracking-wider uppercase mb-1">{card.label}</div>
            <div className="text-2xl font-black leading-none text-white">{card.value}</div>
          </div>
        );
      })}
    </div>
  );
}