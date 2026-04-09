import React from 'react';
import { MoreVertical } from 'lucide-react';

const incidents = [
  {
    id: 1,
    name: 'Salar Khan',
    role: 'Electrician',
    initials: 'SK',
    avatarBg: '#94A3B8',
    date: 'Oct 15, 2023',
    type: 'Misconduct',
    typeColor: 'text-blue-600',
    typeBg: 'bg-blue-50',
    severity: 'Written Warning',
    severityStyle: 'border border-orange-400 text-orange-500 bg-white',
    status: 'Open',
    statusColor: 'text-blue-500',
    statusDot: 'bg-blue-500',
  },
  {
    id: 2,
    name: 'Subhan Mehmood',
    role: 'Plumber',
    initials: 'SM',
    avatarBg: '#94A3B8',
    date: 'Oct 12, 2023',
    type: 'Tardiness',
    typeColor: 'text-orange-500',
    typeBg: 'bg-orange-50',
    severity: 'Verbal Warning',
    severityStyle: 'text-gray-600',
    status: 'Closed',
    statusColor: 'text-gray-500',
    statusDot: 'bg-gray-400',
  },
  {
    id: 3,
    name: 'Adnan Bashir',
    role: 'Carpenter',
    initials: 'AB',
    avatarBg: '#94A3B8',
    date: 'Oct 10, 2023',
    type: 'Performance',
    typeColor: 'text-blue-500',
    typeBg: 'bg-blue-50',
    severity: 'Final Warning',
    severityStyle: 'border border-red-500 text-red-600 bg-white',
    status: 'Open',
    statusColor: 'text-blue-500',
    statusDot: 'bg-blue-500',
  },
];

export default function RecentIncidentsTable() {
  return (
    <div className="bg-[#1a3a6e] rounded-xl overflow-hidden shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3.5">
        <h2 className="text-sm font-bold text-white">Recent Incidents</h2>
        <span className="text-xs bg-blue-500/30 text-blue-200 font-semibold px-3 py-1 rounded-full">
          Displaying 3 of 42
        </span>
      </div>

      {/* Table */}
      <div className="bg-white">
        {/* Column headers */}
        <div className="grid grid-cols-[2fr_2fr_2fr_1.5fr_auto] gap-4 px-5 py-3 border-b border-gray-100 bg-white">
          {['EMPLOYEE', 'DATE & TYPE', 'SEVERITY', 'STATUS', ''].map((h, i) => (
            <div key={i} className="text-[10px] font-bold text-gray-400 tracking-wider">{h}</div>
          ))}
        </div>

        {/* Rows */}
        {incidents.map((inc, i) => (
          <div
            key={inc.id}
            className={`grid grid-cols-[2fr_2fr_2fr_1.5fr_auto] gap-4 items-center px-5 py-4 ${
              i < incidents.length - 1 ? 'border-b border-gray-100' : ''
            } hover:bg-gray-50 transition-colors`}
          >
            {/* Employee */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xs font-bold flex-shrink-0 overflow-hidden">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <circle cx="18" cy="18" r="18" fill="#E2E8F0"/>
                  <circle cx="18" cy="14" r="6" fill="#94A3B8"/>
                  <ellipse cx="18" cy="28" rx="10" ry="7" fill="#94A3B8"/>
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900 leading-tight">{inc.name}</div>
                <div className="text-xs text-gray-400">{inc.role}</div>
              </div>
            </div>

            {/* Date & Type */}
            <div>
              <div className="text-sm text-gray-700 leading-tight">{inc.date}</div>
              <span className={`text-xs font-semibold ${inc.typeColor} ${inc.typeBg} px-1.5 py-0.5 rounded mt-0.5 inline-block`}>
                {inc.type}
              </span>
            </div>

            {/* Severity */}
            <div>
              <span className={`text-xs font-semibold px-3 py-1.5 rounded ${inc.severityStyle}`}>
                {inc.severity}
              </span>
            </div>

            {/* Status */}
            <div className="flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full flex-shrink-0 ${inc.statusDot}`} />
              <span className={`text-sm font-medium ${inc.statusColor}`}>{inc.status}</span>
            </div>

            {/* Actions */}
            <button className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
              <MoreVertical size={15} className="text-gray-400" />
            </button>
          </div>
        ))}

        {/* View all link */}
        <div className="px-5 py-3 border-t border-gray-100 text-center">
          <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
            View All Incident Logs
          </button>
        </div>
      </div>
    </div>
  );
}