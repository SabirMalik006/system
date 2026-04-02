import React from 'react';
import { MoreHorizontal } from 'lucide-react';

const categories = [
  { label: 'Auto Parts', value: 98, color: '#1a6cb5' },
  { label: 'Electrical', value: 90, color: '#2ec4b6' },
  { label: 'Tools', value: 87, color: '#0891b2' },
  { label: 'Industrial', value: 99, color: '#16a34a' },
];

export default function ItemCategoryHealth() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-3 sm:p-4 mb-4">
      <div className="flex items-center justify-between mb-3.5">
        <div>
          <h3 className="text-sm font-bold text-gray-900">Item Category Health</h3>
          <div className="text-xs text-gray-400 mt-0.5">Stock health by category</div>
        </div>
        <button className="bg-transparent text-gray-400"><MoreHorizontal size={16} /></button>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <div className="relative w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] flex-shrink-0">
          <svg width="90" height="90" viewBox="0 0 90 90">
            <circle cx="45" cy="45" r="38" fill="none" stroke="#f1f5f9" strokeWidth="9" />
            <circle cx="45" cy="45" r="38" fill="none" stroke="#1a6cb5" strokeWidth="9"
              strokeDasharray={`${2 * Math.PI * 38 * 0.5} ${2 * Math.PI * 38 * 0.5}`}
              strokeLinecap="round" transform="rotate(-90 45 45)" />
          </svg>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="text-sm sm:text-base font-bold text-gray-900">50%</div>
            <div className="text-[8px] sm:text-[9px] text-gray-400">Overall</div>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {categories.map(cat => (
            <div key={cat.label}>
              <div className="text-xs text-gray-500 mb-1">{cat.label}</div>
              <div className="text-base sm:text-lg font-bold text-gray-900 mb-1.5">{cat.value}%</div>
              <div className="h-1 rounded-full bg-gray-100 overflow-hidden">
                <div className="h-full rounded-full" style={{ background: `linear-gradient(90deg, ${cat.color}, ${cat.color}aa)`, width: `${cat.value}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}