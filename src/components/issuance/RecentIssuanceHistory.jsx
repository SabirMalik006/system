import React, { useState } from 'react';
import { RotateCcw, Search, ChevronDown, Download, MoreVertical, ChevronLeft, ChevronRight } from 'lucide-react';

const tableData = [
  {
    id: 'STK-2023-4571',
    date: '12 Oct 2023',
    time: '08:12',
    ampm: 'AM',
    item: 'LED Street Light 100W',
    qty: '10 Units',
    officer: 'Ahmed Hassan',
    dept: 'Electrical Dept',
    status: 'STOCK UPDATED',
    statusStyle: 'bg-green-100 text-green-700',
  },
  {
    id: 'STK-2023-4570',
    date: '12 Oct 2023',
    time: '06:45',
    ampm: 'AM',
    item: 'Electrical Distribution Box',
    qty: '05 Units',
    officer: 'Hassan Khattak',
    dept: 'Electrical Dept',
    status: 'PENDING',
    statusStyle: 'bg-yellow-100 text-yellow-700',
  },
  {
    id: 'STK-2023-4569',
    date: '11 Oct 2023',
    time: '04:20',
    ampm: 'PM',
    item: 'Water Tap (Steel)',
    qty: '02 Units',
    officer: 'Kamran Khan',
    dept: 'Plumbeing Dept',
    status: 'STOCK UPDATED',
    statusStyle: 'bg-green-100 text-green-700',
  },
  {
    id: 'STK-2023-4568',
    date: '11 Oct 2023',
    time: '03:15',
    ampm: 'PM',
    item: 'Ceiling Fan 56"',
    qty: '12 Units',
    officer: 'Abdullah Zaheer',
    dept: 'Maintainance',
    status: 'REVIEWING',
    statusStyle: 'bg-blue-100 text-blue-600',
  },
];

export default function RecentIssuanceHistory() {
  const [search, setSearch] = useState('');

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <div className="flex items-center gap-2">
          <RotateCcw size={18} className="text-blue-500" />
          <h2 className="text-lg font-bold text-blue-600">Recent Issuance History</h2>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
          {/* Search */}
          <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-white w-full sm:w-56">
            <Search size={13} className="text-gray-400 flex-shrink-0" />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search by ID or Officer..."
              className="text-xs outline-none text-gray-600 placeholder-gray-400 w-full bg-transparent"
            />
          </div>
          {/* Filter dropdown */}
          <button className="flex items-center justify-center gap-1.5 border border-gray-200 rounded-lg px-3 py-2 text-xs text-[#475569] hover:bg-gray-50 whitespace-nowrap">
            All Transactions
            <ChevronDown size={12} />
          </button>
          {/* Download */}
          <button className="flex items-center justify-center gap-1.5 border border-gray-200 rounded-lg px-3 py-2 text-xs text-[#3B82F6] hover:bg-gray-50 whitespace-nowrap">
            <Download size={13} className="text-[#3B82F6]" />
            Download
          </button>
        </div>
      </div>

      {/* Table — scrollable on mobile */}
      <div className="overflow-x-auto -mx-5 px-5">
        <table className="w-full min-w-[750px]">
          <thead>
            <tr className="border-b border-gray-100  ">
              {[
                'Transaction ID', 'Timestamp', 'Item Issued',
                'Quantity', 'Requesting Officer', 'Department', 'Status', 'Action',
              ].map(h => (
                <th key={h} className="text-left py-3 px-2 text-[10px] font-bold text-gray-400 tracking-wider uppercase whitespace-nowrap">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData
              .filter(r =>
                r.id.toLowerCase().includes(search.toLowerCase()) ||
                r.officer.toLowerCase().includes(search.toLowerCase())
              )
              .map((row, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  {/* Transaction ID */}
                  <td className="py-5 px-2">
                    <span className="text-blue-500 font-bold text-sm leading-tight">{row.id.split('-').slice(0,2).join('-')}-<br />{row.id.split('-').slice(2).join('-')}</span>
                  </td>

                  {/* Timestamp */}
                  <td className="py-5 px-2">
                    <div className="flex items-start gap-2">
                      <div className="text-sm text-gray-700 leading-tight">{row.date}</div>
                      <div className="w-px h-8 bg-gray-200 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-semibold text-gray-900">{row.time}</div>
                        <div className="text-xs text-gray-400">{row.ampm}</div>
                      </div>
                    </div>
                  </td>

                  {/* Item */}
                  <td className="py-5 px-2">
                    <span className="text-sm text-gray-800">{row.item}</span>
                  </td>

                  {/* Qty */}
                  <td className="py-5 px-2">
                    <span className="text-sm text-gray-700">{row.qty}</span>
                  </td>

                  {/* Officer */}
                  <td className="py-5 px-2">
                    <span className="text-sm font-semibold text-gray-900">{row.officer.split(' ')[0]}<br />{row.officer.split(' ')[1]}</span>
                  </td>

                  {/* Department */}
                  <td className="py-5 px-2">
                    <span className="text-sm text-gray-600">{row.dept.split(' ')[0]}<br />{row.dept.split(' ').slice(1).join(' ')}</span>
                  </td>

                  {/* Status */}
                  <td className="py-5 px-2">
                    <span className={`text-[11px] font-bold px-3 py-1.5 rounded-full whitespace-nowrap ${row.statusStyle}`}>
                      {row.status}
                    </span>
                  </td>

                  {/* Action */}
                  <td className="py-5 px-2">
                    <button className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
                      <MoreVertical size={16} className="text-gray-400" />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4 pt-4 border-t border-gray-100">
        <span className="text-sm text-gray-500">
          Showing <strong>1-4</strong> of <strong>48</strong> records
        </span>
        <div className="flex items-center gap-1.5">
          <button className="w-8 h-8 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
            <ChevronLeft size={14} className="text-gray-400" />
          </button>
          <button className="w-8 h-8 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
            <ChevronRight size={14} className="text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
}