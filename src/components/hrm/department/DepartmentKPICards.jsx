import React from 'react';

const kpiData = [
  {
    icon: (
      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Total Employees', value: '1,240', sub: '+2.5%', subColor: 'text-green-500', iconBg: 'bg-blue-50',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Active', value: '1,180', sub: 'Status: active', subColor: 'text-gray-400', iconBg: 'bg-green-50',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    label: 'On Leave', value: '42', sub: '-6.1%', subColor: 'text-red-400', iconBg: 'bg-orange-50',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Pending Updates', value: '26', sub: '1 High Priority', subColor: 'text-yellow-500', iconBg: 'bg-yellow-50',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
    label: 'Suspended', value: '4', sub: 'High Priority', subColor: 'text-red-400', iconBg: 'bg-red-50',
  },
];

export default function DepartmentKPICards() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
      {kpiData.map((kpi, i) => (
        <div key={i} className="bg-white rounded-xl p-4 flex items-center gap-3 border border-gray-100 shadow-sm">
          <div className={`${kpi.iconBg} rounded-lg p-2 flex-shrink-0`}>{kpi.icon}</div>
          <div>
            <p className="text-xs text-gray-400 font-medium leading-tight">{kpi.label}</p>
            <p className="text-xl font-bold text-gray-800 leading-tight">{kpi.value}</p>
            <p className={`text-xs font-medium ${kpi.subColor}`}>{kpi.sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
}