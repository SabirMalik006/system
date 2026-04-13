import React from 'react';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';

const history = [
  {
    id: '#TR-1501',
    employee: 'Ali Mir',
    from: 'HQ',
    to: 'North Branch',
    status: 'success',
    statusLabel: 'Success',
    highlight: false,
  },
  {
    id: '#TR-1502',
    employee: 'Ikram Akram',
    from: 'North',
    to: 'HQ',
    status: 'pending',
    statusLabel: 'Pending',
    highlight: true,
  },
  {
    id: '#TR-1503',
    employee: 'Naveed Gul',
    from: 'Central',
    to: 'East',
    status: 'transfer',
    statusLabel: 'Transfer',
    highlight: false,
  },
  {
    id: '#TR-1504',
    employee: 'Hamza Younas',
    from: 'HQ',
    to: 'Overseas',
    status: 'wait',
    statusLabel: 'Wait',
    highlight: false,
  },
];

const statusStyles = {
  success:  'bg-green-100 text-green-700',
  pending:  'bg-orange-100 text-orange-600',
  transfer: 'bg-blue-100 text-blue-700',
  wait:     'bg-gray-100 text-gray-600',
};

export default function QuickTransferHistory() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-bold text-gray-800">Quick Transfer History</h2>
        <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1.5">
          <Search size={12} className="text-gray-400" />
          <input
            placeholder="Search orders..."
            className="bg-transparent text-xs text-gray-600 outline-none w-24 placeholder-gray-400"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[380px]">
          <thead>
            <tr className="border-b border-gray-100">
              {['ORDER ID', 'EMPLOYEE', 'FROM > TO', 'STATUS'].map(h => (
                <th key={h} className="text-left py-2 px-2 text-[9px] font-bold text-gray-400 tracking-wider">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {history.map((row, i) => (
              <tr
                key={i}
                className={`border-b border-gray-50 ${row.highlight ? 'bg-blue-50' : 'hover:bg-gray-50'} transition-colors`}
              >
                <td className="py-3 px-2">
                  <span className="text-xs font-bold text-blue-600">{row.id}</span>
                </td>
                <td className="py-3 px-2">
                  <span className={`text-xs font-semibold ${row.highlight ? 'text-blue-700' : 'text-gray-800'}`}>
                    {row.employee}
                  </span>
                </td>
                <td className="py-3 px-2">
                  <span className="text-xs text-gray-500">{row.from} → {row.to}</span>
                </td>
                <td className="py-3 px-2">
                  <span className={`text-[10px] font-bold px-2 py-1 rounded ${statusStyles[row.status]}`}>
                    {row.statusLabel}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
        <span className="text-[10px] text-gray-400">Showing 4 of 1,268</span>
        <div className="flex items-center gap-1.5">
          <button className="w-6 h-6 border border-gray-200 rounded flex items-center justify-center hover:bg-gray-50">
            <ChevronLeft size={11} className="text-gray-400" />
          </button>
          <button className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white text-[10px] font-bold">1</button>
          <button className="w-6 h-6 border border-gray-200 rounded flex items-center justify-center hover:bg-gray-50">
            <ChevronRight size={11} className="text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
}