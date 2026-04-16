import React, { useState } from 'react';
import { Search, ChevronDown, Filter, Calendar, ArrowUpDown, ChevronLeft, ChevronRight } from 'lucide-react';

const tableData = [
  {
    id: 'IMS-RTN-5092',
    date: '2025-01-24 10:22',
    item: 'Polyvinyl Distemper',
    qty: 2,
    reason: 'PROJECT END',
    reasonStyle: 'bg-[#1A8FA033] text-[#1A8FA0]',
    condition: 'SERVICEABLE',
    condStyle: 'bg-[#2166A033] text-[#2166A0]',
    staff: 'Alex Foreman',
    origin: 'Engineering Dept',
    status: 'RESTOCKED',
    statusStyle: 'bg-green-100 text-green-700',
  },
  {
    id: 'IMS-RTN-5091',
    date: '2025-01-24 09:15',
    item: 'Strip Light 4ft LED Complete Standard',
    qty: 15,
    reason: 'INVENTORY ROTATION',
    reasonStyle: 'bg-[#DBEAFE] text-[#1D4ED8]',
    condition: 'BRAND NEW',
    condStyle: 'bg-[#2166A033] text-[#2166A0]',
    staff: 'Sarah Logistics',
    origin: 'Warehouse Section B',
    status: 'RESTOCKED',
    statusStyle: 'bg-green-100 text-green-700',
  },
  {
    id: 'IMS-RTN-5090',
    date: '2025-01-23 16:40',
    item: 'Circuit Breaker 15 Amp for AC with Plug',
    qty: 40,
    reason: 'SURPLUS',
    reasonStyle: 'text-gray-600',
    condition: 'GOOD',
    condStyle: 'bg-[#2166A033] text-[#2166A0]',
    staff: 'Mike Thompson',
    origin: 'Field Tech Team',
    status: 'PENDING',
    statusStyle: 'text-gray-600',
  },
  {
    id: 'IMS-RTN-5089',
    date: '2025-01-23 11:10',
    item: 'Wash Hand Basin (WHB) Standard Quality',
    qty: 1,
    reason: 'FAULTY',
    reasonStyle: 'bg-red-100 text-red-600',
    condition: 'DAMAGED',
    condStyle: 'bg-[#2166A033] text-[#1A8FA0]',
    staff: 'Jane Electric',
    origin: 'Engineering Dept',
    status: 'QUARANTINED',
    statusStyle: 'bg-red-100 text-red-600',
  },
];

const headers = [
  { label: 'RETURN ID',         key: 'id'        },
  { label: 'DATE LOGGED',       key: 'date'      },
  { label: 'INVENTORY ITEM',    key: 'item'      },
  { label: 'QTY',               key: 'qty'       },
  { label: 'REASON',            key: 'reason'    },
  { label: 'CONDITION',         key: 'condition' },
  { label: 'RETURNING STAFF',   key: 'staff'     },
  { label: 'ORIGIN UNIT',       key: 'origin'    },
  { label: 'STATUS',            key: 'status'    },
  { label: 'ACTIONS',           key: 'actions'   },
];

export default function StockReturnsTable() {
  const [page, setPage] = useState(1);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-3 sm:p-4">
      {/* Filters row */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
        {/* Search */}
        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 w-full sm:w-64 bg-white">
          <Search size={13} className="text-gray-400 flex-shrink-0" />
          <input
            placeholder="Search Return ID, item, staff..."
            className="text-xs text-gray-600 outline-none bg-transparent w-full placeholder-gray-400"
          />
        </div>
        <div className="flex-1" />
        {/* Dropdowns */}
        <div className="flex flex-wrap items-center gap-2">
          {['All Reasons', 'All Status'].map(label => (
            <button key={label} className="flex items-center gap-1.5 border border-[#E2E8F0] rounded-sm px-2 sm:px-3 py-1.5 sm:py-2 text-[10px] sm:text-xs text-[#0F172A] bg-white hover:bg-gray-50">
              <Filter size={11} />
              {label}
              <ChevronDown size={11} />
            </button>
          ))}
          <button className="flex items-center gap-1.5 border border-[#E2E8F0] rounded-sm px-2 sm:px-3 py-1.5 sm:py-2 text-[10px] sm:text-xs text-[#0F172A] bg-white hover:bg-gray-50">
            <Calendar size={11} />
            Last 30 Days
            <ChevronDown size={11} />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm min-w-[900px]">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50">
              {headers.map((h) => (
                <th key={h.key} className="text-left py-2 sm:py-2.5 px-2 sm:px-3 text-[9px] sm:text-[10px] font-bold text-gray-400 tracking-wider whitespace-nowrap">
                  <div className="flex items-center gap-1">
                    {h.label}
                    {!['actions', 'qty', 'reason', 'condition', 'staff', 'origin'].includes(h.key) && (
                      <ArrowUpDown size={9} className="text-gray-300" />
                    )}
                  </div>
                </th>
              ))}
             </tr>
          </thead>
          <tbody>
            {tableData.map((row, i) => (
              <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="py-3 sm:py-3.5 px-2 sm:px-3">
                  <span className="text-blue-500 font-semibold text-[10px] sm:text-xs">{row.id}</span>
                </td>
                <td className="py-3 sm:py-3.5 px-2 sm:px-3 text-[10px] sm:text-xs text-gray-500 whitespace-nowrap">{row.date}</td>
                <td className="py-3 sm:py-3.5 px-2 sm:px-3">
                  <span className="font-bold text-gray-900 text-[10px] sm:text-xs uppercase">{row.item}</span>
                </td>
                <td className="py-3 sm:py-3.5 px-2 sm:px-3 font-semibold text-gray-900 text-[10px] sm:text-xs">{row.qty}</td>
                <td className="py-3 sm:py-3.5 px-2 sm:px-3">
                  <span className={`text-[9px] sm:text-[10px] text-[#1A8FA0] font-bold px-1.5 sm:px-2 py-0.5 rounded ${row.reasonStyle}`}>
                    {row.reason}
                  </span>
                </td>
                <td className="py-3 sm:py-3.5 px-2 sm:px-3">
                  <span className={`text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded ${row.condStyle}`}>
                    {row.condition}
                  </span>
                </td>
                <td className="py-3 sm:py-3.5 px-2 sm:px-3 text-[10px] sm:text-xs text-gray-600 whitespace-nowrap">{row.staff}</td>
                <td className="py-3 sm:py-3.5 px-2 sm:px-3 text-[10px] sm:text-xs text-gray-600 whitespace-nowrap">{row.origin}</td>
                <td className="py-3 sm:py-3.5 px-2 sm:px-3">
                  <span className={`text-[9px] sm:text-[10px] font-bold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full ${row.statusStyle}`}>
                    {row.status}
                  </span>
                </td>
                <td className="py-3 sm:py-3.5 px-2 sm:px-3">
                  <button className="text-blue-500 text-[10px] sm:text-xs font-bold hover:text-blue-700">INSPECT</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-4 pt-3 border-t border-gray-100">
        <span className="text-[10px] sm:text-xs text-gray-500">
          SHOWING <strong>1-4</strong> OF <strong>124</strong> STOCK RECORDS
        </span>
        <div className="flex items-center gap-1.5">
          <button className="w-6 h-6 sm:w-7 sm:h-7 border border-gray-200 rounded flex items-center justify-center hover:bg-gray-50">
            <ChevronLeft size={13} className="text-gray-400" />
          </button>
          {[1, 2, 3].map(n => (
            <button
              key={n}
              onClick={() => setPage(n)}
              className={`w-6 h-6 sm:w-7 sm:h-7 rounded text-[10px] sm:text-xs font-semibold transition-colors ${
                page === n ? 'bg-blue-600 text-white' : 'border border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
            >
              {n}
            </button>
          ))}
          <button className="w-6 h-6 sm:w-7 sm:h-7 border border-gray-200 rounded flex items-center justify-center hover:bg-gray-50">
            <ChevronRight size={13} className="text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
}