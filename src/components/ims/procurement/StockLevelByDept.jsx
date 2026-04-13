import React from 'react';

const stocks = [
  { dept: 'Plumbing', pct: 68, color: '#2563eb' },
  { dept: 'Electrical', pct: 82, color: '#2563eb' },
  { dept: 'Carpentry', pct: 74, color: '#2563eb' },
  { dept: 'Painting', pct: 91, color: '#2563eb' },
];

export default function StockLevelByDept() {
  return (
    <div className="hidden lg:block bg-white rounded-2xl border border-gray-100 shadow-sm p-5 md:w-[918px] lg:w-[731px] xl:w-[918px]  2xl:w-[1888px] mb-10 absolute  md:left-5 md:-bottom-320 lg:-bottom-306 xl:-bottom-320  2xl:top-408 2xl:h-[160px] mx-auto">
      <div className="flex items-center gap-3 mb-2">
        <h3 className="text-sm font-bold text-gray-900">Stock Level by Dept</h3>
        <span className="text-[10px] font-bold bg-teal-100 text-teal-700 px-2.5 py-1 rounded-full">Current</span>
      </div>
      <div className="grid grid-cols-2 gap-x-16 gap-y-5">
        {stocks.map((s, i) => (
          <div key={i}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-sm font-semibold text-blue-600">{s.dept}</span>
              <span className="text-sm font-bold text-gray-900">{s.pct}%</span>
            </div>
            <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
              <div
                className="h-full rounded-full bg-blue-600"
                style={{ width: `${s.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}