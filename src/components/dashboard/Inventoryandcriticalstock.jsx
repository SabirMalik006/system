import React from 'react';

const inventoryItems = [
  { name: 'Polyvinyl Distemper, KG', units: '80 units' },
  { name: 'Strip light 4ft LED complete Standard', units: '440 units' },
  { name: 'Aluminum Door Handle  175mm', units: '360 units' },
  { name: 'Towel rail Plastic', units: '325 units' },
  { name: 'uPVC Pipe 110 mm dia,Mtr', units: '225 units' },
  { name: 'Dimmer Regulator 100 Watts', units: '460 units' },
];

const criticalItems = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    name: 'Circuit Breaker 15 Amp for AC with Plug',
    sub: 'CMES COMPAK',
    days: '3 days left',
    daysColor: '#ef4444',
    daysIcon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="#ef4444"><circle cx="12" cy="12" r="10"/><text x="12" y="16" textAnchor="middle" fontSize="13" fill="white" fontWeight="700">!</text></svg>
    ),
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    name: 'Towel rail Plastic',
    sub: 'CMES ORMARA',
    days: '6 days left',
    daysColor: '#f59e0b',
    daysIcon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="#f59e0b"><circle cx="12" cy="12" r="10"/><text x="12" y="16" textAnchor="middle" fontSize="13" fill="white" fontWeight="700">!</text></svg>
    ),
  },
];

const inStockRates = [
  { name: 'Circuit Breaker 15 Amp for AC with Plug', pct:18, color: '#1A8FA0' },
  { name: 'Towel rail Plastic', pct: 10, color: '#1A8FA0' },
];

export default function InventoryAndCriticalStock() {
  return (
    <div className="flex flex-col xl:flex-row gap-5 md:gap-6 p-4 md:p-6 bg-[#CBE3FA] w-full">

      {/* ───── LEFT PANEL: Inventory Status ───── */}
      <div className="flex-1 bg-white rounded-2xl p-5 md:p-6 shadow-sm flex flex-col min-w-0">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
          <div>
            <div className="text-[20px] font-bold text-[#1E4D7B] leading-tight">Inventory Status</div>
            <div className="text-xs text-[#94a3b8] mt-1">In-Stock 92%</div>
          </div>
          <div className="text-right">
            <div className="text-[28px] font-extrabold text-[#1A8FA0] leading-none">92%</div>
            <div className="w-20 h-1 bg-[#1A8FA0] rounded mt-2 ml-auto" />
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#f1f5f9] my-5" />

        {/* Two-column layout: items list + alert card */}
        <div className="flex flex-col lg:flex-row gap-5 flex-1">

          {/* Items list */}
          <div className="flex-1 flex flex-col">
            {inventoryItems.map((item, i) => (
              <div 
                key={i} 
                className="flex justify-between items-center py-3 border-b border-[#f1f5f9] last:border-none"
              >
                <span className="text-[13px] text-[#374151] pr-3">{item.name}</span>
                <span className="text-[13px] font-semibold text-[#1E4D7B] whitespace-nowrap">{item.units}</span>
              </div>
            ))}
          </div>

          {/* Alert card */}
          <div className="w-full lg:w-[190px] flex-shrink-0 bg-white border border-[#FEE2E2] rounded-xl p-4 flex flex-col justify-between ">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#EF4444">
                  <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
                  <line x1="12" y1="9" x2="12" y2="13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="12" y1="17" x2="12.01" y2="17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span className="text-[10px] font-bold text-[#6B7280] tracking-widest uppercase">Below Threshold</span>
              </div>

              <div className="text-[13px] font-bold text-[#EF4444] leading-tight mb-2">
                UPVC Pipes — 80 units left
              </div>
              <div className="text-[11px] text-[#94a3b8] leading-normal mb-5">
                Restock required immediately to avoid project delays.
              </div>
            </div>

            <button className="w-full py-2.5 bg-[#1A8FA0] text-white text-xs font-semibold rounded-sm hover:bg-[#157a8a] transition-colors">
              Create Purchase Order
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-[11px] text-[#94a3b8]">
          Last updated: Today, 09:42 AM
        </div>
      </div>

      {/* ───── RIGHT PANEL: Critical Stock Items ───── */}
      <div className="flex-1 bg-white rounded-2xl p-5 md:p-6 shadow-sm flex flex-col min-w-0">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
          <div>
            <div className="text-[20px] font-bold text-[#1E4D7B] leading-tight">Critical Stock Items</div>
            <div className="text-xs text-[#94a3b8] mt-1">Forecast: Next 7 Days</div>
          </div>
          <div className="bg-[#e0f2fe] text-[#1A8FA0] text-xs font-semibold px-4 py-1 border border-[#D1E9EC] rounded-full whitespace-nowrap self-start">
            Max 7 Days
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#f1f5f9] my-5" />

        {/* Below threshold label */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#ef4444] flex-shrink-0" />
          <span className="text-[10px] font-bold text-[#94A3B8] tracking-widest uppercase">
            Below Threshold · Action Required
          </span>
        </div>

        {/* Critical items */}
        <div className="flex flex-col gap-3">
          {criticalItems.map((item, i) => (
            <div 
              key={i} 
              className="flex items-center gap-4 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-4"
            >
              {/* Icon box */}
              <div className="w-11 h-11 bg-white border border-[#e2e8f0] rounded-xl flex items-center justify-center flex-shrink-0">
                {item.icon}
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <div className="text-[13px] font-semibold text-[#1e293b] leading-tight">{item.name}</div>
                <div className="text-[12px] font-semibold text-[#94a3b8] mt-1">{item.sub}</div>
              </div>

              {/* Days badge */}
              <div 
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg flex-shrink-0"
                
              >
                {item.daysIcon}
                <span 
                  className="text-xs font-semibold whitespace-nowrap"
                  style={{ color: item.daysColor }}
                >
                  {item.days}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-[#f1f5f9] my-6" />

        {/* Category In-Stock Rate */}
        <div className="text-[10px] font-bold text-[#94a3b8] tracking-widest uppercase mb-4">
          Category In-Stock Rate
        </div>

        <div className="flex flex-col sm:flex-row gap-6">
          {inStockRates.map((rate, i) => (
            <div key={i} className="flex-1">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-xs text-[#475569] font-medium flex-1">{rate.name}</span>
                <span className="text-sm font-bold" style={{ color: rate.color }}>{rate.pct}%</span>
              </div>
              <div className="h-1 bg-[#e2e8f0] rounded overflow-hidden">
                <div 
                  className="h-full rounded" 
                  style={{ 
                    background: rate.color, 
                    width: `${rate.pct * 3}%` 
                  }} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}