import React from 'react';

const leaveTypes = [
  {
    label: 'Annual Leave',
    usedPct: 60,
    usedPctLabel: '60% Used',
    usedPctColor: 'text-blue-600',
    used: 12,
    total: 20,
    barColor: 'bg-blue-600',
    note: 'Department-average utilization',
  },
  {
    label: 'Sick Leave',
    usedPct: 40,
    usedPctLabel: '40% Used',
    usedPctColor: 'text-blue-500',
    used: 4,
    total: 10,
    barColor: 'bg-blue-500',
    note: 'Seasonal health initiatives',
  },
  {
    label: 'Casual Leave',
    usedPct: 71,
    usedPctLabel: '71% Used',
    usedPctColor: 'text-blue-700',
    used: 5,
    total: 7,
    barColor: 'bg-blue-700',
    note: 'Holidays are fast approaching',
  },
];

export default function OrganizationLeaveBalance() {
  return (
    <div>
      {/* Section Title */}
      <h2 className="text-sm font-bold text-gray-800 mb-3">
        Organization Leave Balance (YTD)
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {leaveTypes.map((lt, i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
            {/* Label row */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-black text-gray-500 tracking-widest uppercase">
                {lt.label}
              </span>
              <span className={`text-[10px] font-bold ${lt.usedPctColor}`}>
                {lt.usedPctLabel}
              </span>
            </div>

            {/* Days value */}
            <div className="text-2xl font-black text-gray-900 leading-none mb-3">
              {lt.used} / {lt.total} Days
            </div>

            {/* Progress bar */}
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-2">
              <div
                className={`h-full rounded-full ${lt.barColor} transition-all duration-700`}
                style={{ width: `${lt.usedPct}%` }}
              />
            </div>

            {/* Note */}
            <div className="text-[10px] text-gray-400 leading-tight">{lt.note}</div>
          </div>
        ))}
      </div>
    </div>
  );
}