import React from 'react';
import { Package, DollarSign, AlertTriangle, ShoppingCart, TrendingUp, TrendingDown, Zap } from 'lucide-react';

const stats = [
  { label: 'Total Items', value: '289', sub: 'Active SKUs', icon: Package, color: '#1a6cb5', bg: '#dbeafe', trend: '+12', up: true },
  { label: 'Stock Value', value: '849,687', prefix: '₨', sub: 'Total Inventory Value', icon: DollarSign, color: '#0891b2', bg: '#cffafe', trend: '+5.2%', up: true },
  { label: 'Low Stock Items', value: '42', sub: 'Needs Reorder', icon: AlertTriangle, color: '#d97706', bg: '#fef3c7', trend: '-3', up: false },
  { label: 'Pending Orders', value: '5', sub: 'Awaiting Approval', icon: ShoppingCart, color: '#7c3aed', bg: '#ede9fe', trend: '+2', up: false },
  { label: 'New Vendor Registration', value: 'LOW', sub: 'IMS Transfer Carry', icon: Zap, color: '#059669', bg: '#d1fae5', isStatus: true },
];

export default function KPIStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-4">
      {stats.map((s, i) => <StatCard key={i} stat={s} i={i} />)}
    </div>
  );
}

function StatCard({ stat, i }) {
  const Icon = stat.icon;
  return (
    <div className="bg-[#1E4D7B] rounded-lg shadow-sm border border-gray-100 p-3.5">
      <div className="flex items-start justify-between mb-3">
        <div className="text-xs text-gray-400">{stat.label}</div>
        <div className="flex flex-col items-end gap-1">
          
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center" style={{ background: stat.bg }}>
            <Icon size={15} color={stat.color} strokeWidth={2} className="sm:w-[17px] sm:h-[17px]" />
          </div>
        </div>
      </div>
      {!stat.isStatus && (
        <div className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-none mb-1">
          {stat.prefix && <span className="text-xs sm:text-sm font-medium text-white">{stat.prefix}</span>}
          {stat.value}
        </div>
      )}
      {stat.isStatus && (
        <div className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-none mb-1">
          {stat.value}
        </div>
      )}
      
      <div className="text-[10px] sm:text-[11px] text-gray-400 mt-0.5">{stat.sub}</div>
      {stat.trend && (
            <span className={`flex items-center gap-0.5 text-xs font-semibold ${stat.up ? 'text-green-600' : 'text-red-600'}`}>
              {stat.up ? <TrendingUp size={11} /> : <TrendingDown size={11} />}{stat.trend}
            </span>
          )}
      {!stat.isStatus && (
        <div className="mt-3">
          <div className="h-1 rounded-full bg-gray-700 overflow-hidden">
            <div className="h-full rounded-full" style={{ background: stat.color, width: `${30 + (i * 15)}%` }} />
          </div>
        </div>
      )}
    </div>
  );
}