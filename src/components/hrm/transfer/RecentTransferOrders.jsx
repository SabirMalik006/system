import React from 'react';
import { Eye, Lock } from 'lucide-react';

const orders = [
  { emp: 'JD', empId: 'EMP-10204 / Senior Dev', avatarBg: '#1a3a8f', from: 'Headquarters\nIT Division', to: 'Dubai Branch\nGlobal Tech Center', date: 'Oct 15, 2023', status: 'Executed', statusStyle: 'bg-green-100 text-green-700' },
  { emp: 'MS', empId: 'EMP-10205 / Manager',    avatarBg: '#0891b2', from: 'South Station\nFinance Ops',  to: 'Headquarters\nCorporate HR',      date: 'Nov 01, 2023', status: 'In Approval', statusStyle: 'bg-blue-100 text-blue-700' },
  { emp: 'JD', empId: 'EMP-10206 / Senior Dev', avatarBg: '#1a3a8f', from: 'Headquarters\nIT Division', to: 'Dubai Branch\nGlobal Tech Center', date: 'Oct 15, 2023', status: 'Executed', statusStyle: 'bg-green-100 text-green-700' },
  { emp: 'MS', empId: 'EMP-10215 / Manager',    avatarBg: '#0891b2', from: 'South Station\nFinance Ops',  to: 'Headquarters\nCorporate HR',      date: 'Nov 01, 2023', status: 'In Approval', statusStyle: 'bg-blue-100 text-blue-700' },
  { emp: 'JD', empId: 'EMP-10224 / Senior Dev', avatarBg: '#1a3a8f', from: 'Headquarters\nIT Division', to: 'Dubai Branch\nGlobal Tech Center', date: 'Oct 15, 2023', status: 'Executed', statusStyle: 'bg-green-100 text-green-700' },
  { emp: 'MS', empId: 'EMP-10185 / Manager',    avatarBg: '#0891b2', from: 'South Station\nFinance Ops',  to: 'Headquarters\nCorporate HR',      date: 'Nov 01, 2023', status: 'In Approval', statusStyle: 'bg-blue-100 text-blue-700' },
];

export default function RecentTransferOrders() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
        <h2 className="text-sm font-bold text-gray-900">Recent Transfer Orders Detailed</h2>
        <button className="text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors">
          View All Records
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px]">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              {['EMPLOYEE DETAILS', 'CURRENT STATION', 'NEW POSTING', 'RELEASE DATE', 'STATUS', 'ACTIONS'].map(h => (
                <th key={h} className="text-left px-4 py-3 text-[9px] font-bold text-gray-400 tracking-wider uppercase">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orders.map((row, i) => (
              <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                {/* Employee */}
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                      style={{ background: row.avatarBg }}
                    >
                      {row.emp}
                    </div>
                    <div>
                      {row.empId.split(' / ').map((part, j) => (
                        <div key={j} className={`${j === 0 ? 'text-xs font-bold text-blue-600' : 'text-[10px] text-gray-400'} leading-tight`}>
                          {part}
                        </div>
                      ))}
                    </div>
                  </div>
                </td>
                {/* Current Station */}
                <td className="px-4 py-3">
                  {row.from.split('\n').map((line, j) => (
                    <div key={j} className={`${j === 0 ? 'text-xs font-semibold text-gray-800' : 'text-[10px] text-gray-400'} leading-tight`}>
                      {line}
                    </div>
                  ))}
                </td>
                {/* New Posting */}
                <td className="px-4 py-3">
                  {row.to.split('\n').map((line, j) => (
                    <div key={j} className={`${j === 0 ? 'text-xs font-semibold text-gray-800' : 'text-[10px] text-gray-400'} leading-tight`}>
                      {line}
                    </div>
                  ))}
                </td>
                {/* Release Date */}
                <td className="px-4 py-3 text-xs text-gray-600 whitespace-nowrap">{row.date}</td>
                {/* Status */}
                <td className="px-4 py-3">
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${row.statusStyle}`}>
                    {row.status}
                  </span>
                </td>
                {/* Actions */}
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                      <Eye size={13} className="text-gray-400" />
                    </button>
                    <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                      <Lock size={13} className="text-gray-400" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}