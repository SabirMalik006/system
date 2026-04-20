import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const stats = [
  { label: 'Total Items',  sub:"Stable", value: '289', image: '/Background (6).svg', bg: '#dbeafe', trend: '+12', up: true },
  { label: 'Stock Value', value: '849,687', sub: 'Stable', image: '/Background (7).svg', bg: '#cffafe', trend: '+5.2%', up: true },
  { label: 'Low Stock Items', sub:"Stable" , value: '42', image: '/Background (8).svg', bg: '#fef3c7', trend: '-3', up: false },
  { label: 'Pending Orders', value: '5', sub: 'Average 4h Delay', image: '/Background (9).svg', bg: '#ede9fe', trend: '+2', up: false },
  { label: 'New Vendor Registration', value: 'LOW', sub: 'Stable', image: '/Overlay+OverlayBlur.svg', bg: '#d1fae5', trend: '+2', isStatus: true },
];

export default function KPIStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-4 pt-3 px-3 sm:px-4 md:px-5 pb-8">
      {stats.map((s, i) => <StatCard key={i} stat={s} i={i} />)}
    </div>
  );
}

function StatCard({ stat, i }) {
  // Apply #163A50 color to 2nd card (index 1) and 4th card (index 3)
  const cardBgColor = (i === 1 || i === 3) ? '#163A50' : '#1E4D7B';
  
  // Check if card should have extra margin for the bar (index 0, 2, 4)
  const hasExtraMargin = (i === 0 || i === 2 || i === 4);
  
  return (
    <div className="rounded-lg shadow-sm border border-gray-100 p-3.5" style={{ backgroundColor: cardBgColor }}>
      <div className="flex items-start justify-between ">
        <div className="text-md font-semibold text-white">{stat.label}</div>
        <div className="flex flex-col items-end gap-1">
          
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-md flex items-center justify-center  " >
            <img src={stat.image} alt={stat.label} className="w-5 h-5 sm:w-[35px] sm:h-[35px] object-contain" />
          </div>
        </div>
      </div>
      {!stat.isStatus && (
        <div className="text-xl sm:text-3xl font-bold text-white tracking-tight leading-none mb-1">
          {stat.prefix && <span className="text-xs sm:text-sm font-medium text-white">{stat.prefix}</span>}
          {stat.value}
        </div>
      )}
      {stat.isStatus && (
        <div className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-none mb-1">
          {stat.value}
        </div>
      )}
      
      <div className="text-[10px] sm:text-[14px] text-white mt-2">{stat.sub}</div>
      {stat.trend && (
            <span className={`flex items-center gap-0.5 text-sm font-semibold ${stat.up ? 'text-white/80 ' : 'text-white/80'}`}>
              {stat.up ? <TrendingUp size={11} /> : <TrendingDown size={11} />}{stat.trend}
            </span>
          )}
      <div className={hasExtraMargin ? 'mt-4' : (stat.isStatus ? 'mt-4' : 'mt-4')}>
        <div className="h-1 rounded-full bg-[#E2E8F0] overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{
              background: stat.isStatus ? '#1A8FA0' : '#1A8FA0',
              width: stat.isStatus ? '60%' : `${30 + (i * 15)}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}