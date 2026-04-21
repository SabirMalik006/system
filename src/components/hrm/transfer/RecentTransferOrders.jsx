import React from 'react';
import { Eye, FileText } from 'lucide-react';

const orders = [
  { emp: 'JD', empId: 'EMP-10294 • Senior Dev', avatarBg: '#ebf4ff', avatarText: '#1a73e8', from: 'Headquarters\nIT Division', to: 'Dubai Branch\nGlobal Tech Center', date: 'Oct 15,\n2023', status: 'Executed', statusStyle: 'bg-[#e2f5e9] text-[#1f874c]', hardAreaTransfer: 'On' },
  { emp: 'MS', empId: 'EMP-10355 • HR Manager',    avatarBg: '#fff3cd', avatarText: '#c46c24', from: 'South Station\nPeople Ops',  to: 'Headquarters\nCorporate HR',      date: 'Nov 01,\n2023', status: 'In Approval', statusStyle: 'bg-[#f0f4f8] text-[#47607a]', hardAreaTransfer: 'Off' },
  { emp: 'JD', empId: 'EMP-10294 • Senior Dev', avatarBg: '#ebf4ff', avatarText: '#1a73e8', from: 'Headquarters\nIT Division', to: 'Dubai Branch\nGlobal Tech Center', date: 'Oct 15,\n2023', status: 'Executed', statusStyle: 'bg-[#e2f5e9] text-[#1f874c]', hardAreaTransfer: 'On' },
  { emp: 'MS', empId: 'EMP-10355 • HR Manager',    avatarBg: '#fff3cd', avatarText: '#c46c24', from: 'South Station\nPeople Ops',  to: 'Headquarters\nCorporate HR',      date: 'Nov 01,\n2023', status: 'In Approval', statusStyle: 'bg-[#f0f4f8] text-[#47607a]', hardAreaTransfer: 'Off' },
  { emp: 'JD', empId: 'EMP-10294 • Senior Dev', avatarBg: '#ebf4ff', avatarText: '#1a73e8', from: 'Headquarters\nIT Division', to: 'Dubai Branch\nGlobal Tech Center', date: 'Oct 15,\n2023', status: 'Executed', statusStyle: 'bg-[#e2f5e9] text-[#1f874c]', hardAreaTransfer: 'On' },
  { emp: 'MS', empId: 'EMP-10355 • HR Manager',    avatarBg: '#fff3cd', avatarText: '#c46c24', from: 'South Station\nPeople Ops',  to: 'Headquarters\nCorporate HR',      date: 'Nov 01,\n2023', status: 'In Approval', statusStyle: 'bg-[#f0f4f8] text-[#47607a]', hardAreaTransfer: 'Off' },
];

export default function RecentTransferOrders() {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-5">
        <h2 className="text-lg font-bold text-gray-900">Recent Transfer Orders Detailed</h2>
        <button className="text-xs font-bold text-[#274c77] hover:text-blue-800 transition-colors text-right max-w-[100px] leading-tight flex flex-col">
          <span>View All</span>
          <span>Records</span>
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead>
            <tr className="bg-[#274c77] text-white">
              {['EMPLOYEE DETAILS', 'CURRENT STATION', 'NEW POSTING', 'HARD AREA TRANSFER', 'RELEASE DATE', 'STATUS', 'ACTIONS'].map(h => (
                <th key={h} className={`text-left px-5 py-3 text-[10px] font-bold tracking-wider uppercase ${(h === 'STATUS' || h === 'ACTIONS' || h === 'HARD AREA TRANSFER') ? 'text-center' : ''}`}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orders.map((row, i) => (
              <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                {/* Employee */}
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                      style={{ background: row.avatarBg, color: row.avatarText }}
                    >
                      {row.emp}
                    </div>
                    <div className="text-[11px] font-semibold text-gray-500">
                      {row.empId}
                    </div>
                  </div>
                </td>
                {/* Current Station */}
                <td className="px-5 py-4">
                  {row.from.split('\n').map((line, j) => (
                    <div key={j} className={`${j === 0 ? 'text-xs font-bold text-gray-900' : 'text-[11px] text-gray-500'} leading-tight mt-0.5`}>
                      {line}
                    </div>
                  ))}
                </td>
                {/* New Posting */}
                <td className="px-5 py-4">
                  {row.to.split('\n').map((line, j) => (
                    <div key={j} className={`${j === 0 ? 'text-xs font-bold text-gray-900' : 'text-[11px] text-gray-500'} leading-tight mt-0.5`}>
                      {line}
                    </div>
                  ))}
                </td>
                {/* Hard Area Transfer */}
                <td className="px-5 py-4 text-center">
                  <span className={`text-[10px] font-bold px-3 py-1.5 rounded-full ${
                    row.hardAreaTransfer === 'On' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {row.hardAreaTransfer}
                  </span>
                </td>
                {/* Release Date */}
                <td className="px-5 py-4 text-xs font-bold text-gray-900 whitespace-nowrap">
                   {row.date.split('\n').map((line, j) => (
                    <div key={j} className="leading-tight">
                      {line}
                    </div>
                  ))}
                </td>
                {/* Status */}
                <td className="px-5 py-4 text-center">
                  <span className={`text-[10px] font-bold px-3 py-1.5 rounded-full ${row.statusStyle}`}>
                    {row.status}
                  </span>
                </td>
                {/* Actions */}
                <td className="px-5 py-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                      <Eye size={16} className="text-gray-700" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                      <FileText size={16} className="text-gray-700" />
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