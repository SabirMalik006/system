import React from 'react';

const reorderItems = [
  { name: 'Engine Oil Filter 2T', category: 'Auto Parts', current: 12, reorder: 50, date: 'Aug 15', urgency: 'critical' },
  { name: 'Brake Pads Set (Front)', category: 'Auto Parts', current: 28, reorder: 100, date: 'Aug 18', urgency: 'high' },
  { name: 'Air Compressor Belt', category: 'Industrial', current: 5, reorder: 20, date: 'Aug 12', urgency: 'critical' },
  { name: 'LED Work Light 50W', category: 'Electrical', current: 34, reorder: 75, date: 'Aug 22', urgency: 'medium' },
];

const riskItems = [
  { rank: '01', name: 'Engine Oil Filter', pct: '92%', sub: 'Risk Exposed Items', color: '#ef4444' },
  { rank: '02', name: 'Safety Helmets', pct: '75%', sub: 'Risk Exposed Items', color: '#f97316' },
  { rank: '03', name: 'Battery 12V 45Ah', pct: '68%', sub: 'Risk Exposed Items', color: '#eab308' },
  { rank: '04', name: 'Electrical - Fuse', pct: '39%', sub: 'Risk Exposed Items', color: '#3b82f6' },
];

const urgencyMap = {
  critical: { color: '#dc2626', bg: '#fee2e2', label: 'Critical' },
  high: { color: '#d97706', bg: '#fef3c7', label: 'High' },
  medium: { color: '#1d4ed8', bg: '#dbeafe', label: 'Medium' },
};

export default function StockReorderAndRisk() {
  return (
    <div className="flex flex-col lg:flex-row gap-3 mb-4">
      <div className="flex-1 bg-white rounded-lg shadow-sm border border-gray-100 p-3 sm:p-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3.5">
          <div>
            <h3 className="text-sm font-bold text-gray-900">Stock Reorder Timeline</h3>
            <div className="text-xs text-gray-400 mt-0.5">Consolidated items needing reordering</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="px-3 py-1 rounded-md bg-amber-100 text-amber-600 text-xs font-bold">12.4%</div>
            <div className="px-3 py-1 rounded-md bg-green-100 text-green-600 text-xs font-bold">Healthy</div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {reorderItems.map((item, i) => {
            const urg = urgencyMap[item.urgency];
            const pct = Math.round((item.current / item.reorder) * 100);
            return (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-3 p-2 rounded-lg bg-gray-50 border border-gray-100">
                <div className="flex-1">
                  <div className="font-semibold text-sm text-gray-900">{item.name}</div>
                  <div className="text-[11px] text-gray-400">{item.category} · Reorder: {item.date}</div>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-3">
                  <div className="text-right">
                    <div className="text-sm font-bold text-gray-900">{item.current}</div>
                    <div className="text-[11px] text-gray-400">/ {item.reorder}</div>
                  </div>
                  <div className="w-20">
                    <div className="h-1 rounded-full bg-gray-200 overflow-hidden">
                      <div className="h-full rounded-full" style={{ background: urg.color, width: `${pct}%` }} />
                    </div>
                    <div className="text-[10px] text-gray-400 mt-0.5 text-right">{pct}%</div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold whitespace-nowrap" style={{ background: urg.bg, color: urg.color }}>{urg.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full lg:w-[280px] bg-white rounded-lg shadow-sm border border-gray-100 p-3 sm:p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex-1">
            <div className="text-[11px] text-gray-400 mb-0.5">Risk Level</div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-100">
              <span className="text-sm font-bold text-blue-700">Low Risk</span>
            </div>
          </div>
          <div className="flex gap-2">
            {[{ label: 'Low', val: '60%', color: '#16a34a' }, { label: 'Med', val: '27%', color: '#d97706' }, { label: 'High', val: '3%', color: '#dc2626' }].map(r => (
              <div key={r.label} className="text-center">
                <div className="text-xs font-bold" style={{ color: r.color }}>{r.val}</div>
                <div className="text-[10px] text-gray-400">{r.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mb-3">
          <div className="relative w-[120px] h-[120px] sm:w-[130px] sm:h-[130px]">
            <svg width="130" height="130" viewBox="0 0 130 130">
              <circle cx="65" cy="65" r="55" fill="none" stroke="#f1f5f9" strokeWidth="14" />
              <circle cx="65" cy="65" r="55" fill="none" stroke="#1a6cb5" strokeWidth="14"
                strokeDasharray={`${2 * Math.PI * 55 * 0.60} ${2 * Math.PI * 55 * 0.40}`}
                strokeLinecap="round" transform="rotate(-90 65 65)" />
              <circle cx="65" cy="65" r="55" fill="none" stroke="#2ec4b6" strokeWidth="14"
                strokeDasharray={`${2 * Math.PI * 55 * 0.27} ${2 * Math.PI * 55 * 0.73}`}
                strokeLinecap="round" transform={`rotate(${-90 + 360 * 0.60} 65 65)`} />
              {[0, 72, 144, 216, 288].map((angle, i) => (
                <circle key={i} cx={65 + 55 * Math.cos((angle - 90) * Math.PI / 180)} cy={65 + 55 * Math.sin((angle - 90) * Math.PI / 180)} r="3" fill="white" />
              ))}
            </svg>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-base font-bold text-gray-900">IMS</div>
              <div className="text-[10px] text-gray-400">System</div>
            </div>
          </div>
        </div>
        {riskItems.map((item, i) => (
          <div key={i} className="flex items-center gap-2.5 mb-1.5 p-1.5 rounded-md bg-gray-50">
            <span className="w-5.5 h-5.5 rounded-md flex items-center justify-center text-[10px] font-bold flex-shrink-0" style={{ background: `${item.color}20`, color: item.color }}>{item.rank}</span>
            <div className="flex-1 overflow-hidden">
              <div className="text-xs font-semibold text-gray-900 truncate">{item.name}</div>
              <div className="text-[10px] text-gray-400">{item.sub}</div>
            </div>
            <span className="text-xs font-bold flex-shrink-0" style={{ color: item.color }}>{item.pct}</span>
          </div>
        ))}
      </div>
    </div>
  );
}