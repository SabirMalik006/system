import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const history = [
  {
    id: '#TR-5501',
    employee: 'Ali Mir',
    from: 'HQ',
    to: 'North Branch',
    status: 'success',
    statusLabel: 'SUCCESS',
    highlight: false,
  },
  {
    id: '#TR-5502',
    employee: 'Ikram Akram',
    from: 'West',
    to: 'HQ',
    status: 'pending',
    statusLabel: 'PENDING',
    highlight: true,
  },
  {
    id: '#TR-5503',
    employee: 'Naveed Gul',
    from: 'Central',
    to: 'East',
    status: 'success',
    statusLabel: 'SUCCESS',
    highlight: false,
  },
  {
    id: '#TR-5504',
    employee: 'Hamza Younas',
    from: 'HQ',
    to: 'Overseas',
    status: 'draft',
    statusLabel: 'DRAFT',
    highlight: true,
  },
];

const statusStyles = {
  success:  'bg-[#e2f5e9] text-[#1f874c]',
  pending:  'text-[#c46c24] bg-transparent',
  draft:    'text-white bg-transparent',
};

export default function QuickTransferHistory() {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between p-5 pb-4">
        <h2 className="text-base font-bold text-gray-900">Quick Transfer History</h2>
        <div className="flex items-center gap-2 bg-[#274c77] rounded-lg px-3 py-2">
          <input
            placeholder="Search orders..."
            className="bg-transparent text-xs text-white outline-none w-28 md:w-40 placeholder-[#a8c6e8]"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto flex-1 pb-4">
        <table className="w-full min-w-[400px]">
          <thead>
            <tr className="bg-[#274c77] text-white">
              {['ORDER ID', 'EMPLOYEE', 'FROM → TO', 'STATUS'].map(h => (
                <th key={h} className="text-left py-3 px-4 text-[10px] font-bold tracking-wider uppercase">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {history.map((row, i) => (
              <tr
                key={i}
                className={`border-b border-gray-100 transition-colors ${row.highlight ? (row.status === 'draft' ? 'bg-[#3b82f6] text-white' : 'bg-[#3b82f6] text-white') : ''}`}
                style={row.highlight && row.status !== 'draft' ? { backgroundColor: '#3f7ebf', color: '#fff' } : {}}
              >
                <td className="py-3 px-4">
                  <span className={`text-xs ${row.highlight ? (row.status === 'draft' ? 'text-blue-100' : 'text-white') : 'text-gray-500'}`}>{row.id}</span>
                </td>
                <td className="py-3 px-4">
                  <span className={`text-sm font-bold ${row.highlight ? 'text-white' : 'text-gray-900'}`}>
                    {row.employee}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <span className={`text-xs font-semibold ${row.highlight ? 'text-white' : 'text-gray-800'}`}>{row.from} → {row.to}</span>
                </td>
                <td className="py-3 px-4">
                  <span className={`text-[9px] font-bold px-2 py-1 rounded tracking-wider ${statusStyles[row.status]}`}>
                    {row.statusLabel}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto p-4 border-t border-gray-100">
        <span className="text-[11px] font-medium text-gray-500">Showing 4 of 1,248</span>
        <div className="flex items-center gap-1">
          <button className="px-3 py-1 bg-[#274c77] rounded text-white text-[11px] font-semibold hover:bg-blue-800 transition-colors">Prev</button>
          <button className="px-3 py-1 bg-[#1a73e8] rounded text-white text-[11px] font-semibold">1</button>
          <button className="px-3 py-1 bg-[#274c77] rounded text-white text-[11px] font-semibold hover:bg-blue-800 transition-colors">Next</button>
        </div>
      </div>
    </div>
  );
}