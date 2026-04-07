import React from 'react';
import { Battery, Filter, Users } from 'lucide-react';

const items = [
  {
    name: 'Lithium Battery',
    stock: 'STOCK: 12',
    reorder: 'REORDER: 50',
    status: 'CRITICAL',
    bg: 'bg-gradient-to-r from-[#1A8FA0] to-[#2166A0]',
    icon: Battery,
  },
  {
    name: 'M12G Filters',
    stock: 'STOCK: 45',
    reorder: 'REORDER: 100',
    status: 'LOW',
    bg: 'bg-gradient-to-r from-[#1A8FA0] to-[#2166A0]',
    icon: Filter,
  },
  {
    name: 'Safety Helmet - M2',
    stock: 'STOCK: 08',
    reorder: 'REORDER: 40',
    status: 'CRITICAL',
    bg: 'bg-gradient-to-r from-[#1A8FA0] to-[#2166A0]',
    icon: Users,
  },
];

export default function LowStockMonitoring() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold text-gray-900">Low Stock Monitoring</h3>
        <button className="text-xs font-bold text-blue-600 hover:text-blue-700 tracking-wide">
          BULK REORDER
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className={`${item.bg} rounded-xl p-4 flex items-center gap-3`}>
              <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon size={16} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white font-bold text-sm leading-tight">{item.name}</div>
                <div className="text-white/70 text-[10px] mt-0.5">{item.stock} / {item.reorder}</div>
              </div>
              <span className={`text-[10px] font-medium px-2.5 py-1 rounded-sm flex-shrink-0 ${
                item.status === 'CRITICAL' ? 'bg-gray-900 text-white' : 'bg-gray-900 text-white'
              }`}>
                {item.status}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}