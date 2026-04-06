import React, { useState } from 'react';
import { History, Filter, Download, ChevronDown, ChevronLeft, ChevronRight, ArrowUpDown } from 'lucide-react';

const sessions = [
  {
    id: 'STK-0441',
    itemName: 'Distribution Board',
    sku: 'SKU-9920-HD',
    qty: '15 pcs',
    vendor: 'Fasten-It Ltd',
    po: 'PO-88291',
    batch: 'B-2023-OCT-01',
    warehouse: 'Warehouse A',
    status: 'POSTED',
    timestamp: '11/24, 10:45 AM',
  },
  {
    id: 'STK-0440',
    itemName: 'Towel Rack',
    sku: 'SKU-2021-SAF',
    qty: '50 units',
    vendor: 'Industrial Tools Corp',
    po: 'PO-88290',
    batch: 'B-2023-SEP-12',
    warehouse: 'Warehouse A',
    status: 'POSTED',
    timestamp: '11/24, 09:32 AM',
  },
  {
    id: 'STK-0439',
    itemName: 'Conduit Pipe',
    sku: 'SKU-3310-FST',
    qty: '20 packs',
    vendor: 'Global Logistics Sparx',
    po: 'PO-88285',
    batch: 'B-2023-OCT-05',
    warehouse: 'Regional Hub',
    status: 'DRAFT',
    timestamp: '11/24, 08:15 AM',
  },
];

const statusStyles = {
  POSTED: 'bg-green-100 text-green-700',
  DRAFT:  'bg-yellow-100 text-yellow-700',
  PENDING:'bg-blue-100 text-blue-700',
};

const headers = [
  { label: 'ENTRY ID',        key: 'id'        },
  { label: 'ITEM NAME / SKU', key: 'itemName'  },
  { label: 'QUANTITY (UNIT)', key: 'qty'       },
  { label: 'VENDOR',          key: 'vendor'    },
  { label: 'P.O. #',          key: 'po'        },
  { label: 'BATCH/LOT',       key: 'batch'     },
  { label: 'WAREHOUSE',       key: 'warehouse' },
  { label: 'STATUS',          key: 'status'    },
  { label: 'TIMESTAMP',       key: 'timestamp' },
];

export default function MasterSessionHistory() {
  const [status, setStatus] = useState('All Status');

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
      {/* Header */}
      <div className="flex items-start justify-between mb-4 ">
        <div  >
          <div className="flex items-center gap-2  ">
            <History size={16} className="text-blue-500" />
            <h2 className="text-base font-semibold text-[#2B8CEE]">Master Session History</h2>
          </div >
          <p className="text-xs text-gray-400 mt-0.5 ml-6">
            Comprehensive view of all stock-in transactions recorded in the current session.
          </p>
        </div>

        <div className="flex items-center gap-2 ">
          {/* Status filter */}
          <div className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-3 py-1.5 text-xs text-gray-600 bg-white cursor-pointer hover:bg-gray-50">
            <Filter size={12} />
            <span>{status}</span>
            <ChevronDown size={12} />
          </div>
          {/* Download */}
          <button className="w-8 h-8 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center transition-colors">
            <Download size={14} />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border border-gray-300 rounded-lg">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100">
              {headers.map((h) => (
                <th key={h.key} className="text-left py-2.5 px-2 text-[10px] font-bold text-gray-400 tracking-wider whitespace-nowrap">
                  <div className="flex items-center gap-1">
                    {h.label}
                    {(h.key === 'id' || h.key === 'itemName' || h.key === 'timestamp') && (
                      <ArrowUpDown size={9} className="text-gray-300" />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sessions.map((row, i) => (
              <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                {/* Entry ID */}
                <td className="py-3.5 px-2">
                  <span className="text-blue-500 font-semibold text-xs">{row.id}</span>
                </td>

                {/* Item Name / SKU */}
                <td className="py-3.5 px-2">
                  <div className="font-semibold text-gray-900 text-sm leading-tight">{row.itemName}</div>
                  <div className="text-[11px] text-gray-400 mt-0.5">{row.sku}</div>
                </td>

                {/* Quantity */}
                <td className="py-3.5 px-2">
                  <span className="font-semibold text-gray-900">{row.qty}</span>
                </td>

                {/* Vendor */}
                <td className="py-3.5 px-2 text-gray-600 text-xs">{row.vendor}</td>

                {/* PO # */}
                <td className="py-3.5 px-2">
                  <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-0.5 rounded">
                    {row.po}
                  </span>
                </td>

                {/* Batch/Lot */}
                <td className="py-3.5 px-2 text-gray-500 text-xs">{row.batch}</td>

                {/* Warehouse */}
                <td className="py-3.5 px-2 text-gray-600 text-xs">{row.warehouse}</td>

                {/* Status */}
                <td className="py-3.5 px-2">
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${statusStyles[row.status] || 'bg-gray-100 text-gray-600'}`}>
                    {row.status}
                  </span>
                </td>

                {/* Timestamp */}
                <td className="py-3.5 px-2 text-gray-400 text-xs whitespace-nowrap">{row.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
         <div className="flex items-center justify-between mt-4 p-2 border border-gray-200 ">
        <span className="text-xs text-gray-500">
          Showing <strong className='text-[#0F172A]' >1-3</strong> of <strong className='text-[#0F172A]' >48</strong> records
        </span>
        <div className="flex items-center gap-1">
          <button className="w-7 h-7 border border-gray-200 rounded flex items-center justify-center hover:bg-gray-50 transition-colors">
            <ChevronLeft size={14} className="text-[#0F172A]" />
          </button>
          <button className="w-7 h-7 border border-gray-200 rounded flex items-center justify-center transition-colors  cursor-pointer">
            <ChevronRight size={14} className="text-[#0F172A] " />
          </button>
        </div>
      </div>
      </div>

      {/* Footer */}
     
    </div>
  );
}