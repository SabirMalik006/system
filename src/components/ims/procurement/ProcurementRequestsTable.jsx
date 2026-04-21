import React, { useState } from 'react';
import { Search, Eye, Edit, Trash2, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';

const tabs = ['All', 'Pending', 'Approved', 'Rejected', 'Plumbing', 'Electrical', 'Painting', 'Carpentry'];

const tableData = [
  { id: 'PRQ-2025-042', dept: 'Plumbing',   unit: 'ISB-01', by: 'Tariq Mehmood', items: 4,  status: 'Approved',  vendor: 'AquaFix Supplies',   po: 'PO-2025-00198', amount: 'RS 677', date: '14 Jun 2025' },
  { id: 'PRQ-2025-041', dept: 'Electrical', unit: 'LHR-01', by: 'Asif Nawaz',    items: 2,  status: 'Pending',   vendor: '—',                  po: '—',             amount: '—',   date: '13 Jun 2025' },
  { id: 'PRQ-2025-040', dept: 'Painting',   unit: 'KHI-01', by: 'Sana Gill',     items: 6,  status: 'Approved',  vendor: 'PaintCraft Co.',     po: 'PO-2025-00197', amount: 'Rs 789', date: '12 Jun 2025' },
  { id: 'PRQ-2025-039', dept: 'Carpentry',  unit: 'PEW-01', by: 'Bilal Akhtar',  items: 3,  status: 'Rejected',  vendor: '—',                  po: '—',             amount: '—',   date: '11 Jun 2025' },
  { id: 'PRQ-2025-038', dept: 'Electrical', unit: 'MUL-01', by: 'Rashid Ali',    items: 5,  status: 'Approved',  vendor: 'Volt Electrics',     po: 'PO-2025-00196', amount: 'Rs 890', date: '10 Jun 2025' },
  { id: 'PRQ-2025-037', dept: 'Plumbing',   unit: 'ISB-01', by: 'Tariq Mehmood', items: 2,  status: 'Pending',   vendor: '—',                  po: '—',             amount: '—',   date: '09 Jun 2025' },
];

const statusStyles = {
  Approved: ' text-[#1A3A5C]',
  Pending:  'bg-[#FEF3C7] text-[#4A6FA5]',
  Rejected: 'text-[#640404]',
};

const deptColors = {
  Plumbing:   'text-[#0891B2]',
  Electrical: 'text-[#1E60AF]',
  Painting:   'text-[#072E54]',
  Carpentry:  'text-[#196EE6]',
};

const detailData = {
  id: 'PRQ-2025-0042',
  sub: 'Mannar · Plumbing · Approved',
  dept: 'Plumbing',
  unit: 'ISB-01 · Islamabad',
  by: 'Tariq Mehmood',
  date: '14 Jun 2025',
  vendor: 'AquaFix Supplies',
  po: 'PO-2025-00198',
  amount: 'Rs 789',
  lineItems: [
    { item: 'PVC Pipe 2-inch',   qty: 50 },
    { item: "Ball Valve ½\"",    qty: 20 },
    { item: 'Elbow Fitting 90°', qty: 40 },
    { item: 'Thread Seal Tape',  qty: 30 },
  ],
  trail: [
    { label: 'Officer Approved', sub: 'Asad Hassan · Lvl 1 · 14 Jun, 09:42' },
    { label: 'Controller Approved',   sub: 'Farida Karimi · Lvl 2 · 14 Jun, 14:15' },
    { label: 'PO Generated',          sub: 'System · PO-2025-00198 · 15 Jun' },
  ],
};

// Stock Level by Dept Component
const StockLevelByDept = () => {
  const stocks = [
    { dept: 'Plumbing',   pct: 68, color: '#2563eb' },
    { dept: 'Electrical', pct: 82, color: '#2563eb' },
    { dept: 'Carpentry',  pct: 74, color: '#2563eb' },
    { dept: 'Painting',   pct: 91, color: '#2563eb' },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 w-full mb-4">
      <div className="flex items-center gap-3 mb-4">
        <h3 className="text-sm font-bold text-gray-900">Stock Level by Dept</h3>
        <span className="text-[10px] font-bold bg-teal-100 text-teal-700 px-2.5 py-1 rounded-full">
          Current
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-5">
        {stocks.map((s, i) => (
          <div key={i}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-sm font-semibold text-blue-600">{s.dept}</span>
              <span className="text-sm font-bold text-gray-900">{s.pct}%</span>
            </div>
            <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
              <div
                className="h-full rounded-full bg-blue-600"
                style={{ width: `${s.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function ProcurementRequestsTable() {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <div className="flex flex-col gap-4">
      {/* Table and Detail Panel Row */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Table - Increased width (col-span-3) */}
        <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-medium text-[#1A3A5C]">Procurement Requests</h3>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold bg-[#2478B5] text-white px-2.5 py-0.5 rounded-full">248 Total</span>
              <span className="text-[10px] font-bold bg-[#3B82F6] text-white px-2.5 py-0.5 rounded-full">34 Pending</span>
            </div>
          </div>

          {/* Tabs + Search */}
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-md transition-colors ${
                  activeTab === tab
                    ? tab === 'Rejected'
                      ? 'bg-red-100 text-red-700'
                      : tab === 'Plumbing'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-blue-600 text-white'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
            <div className="ml-auto flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-1.5">
              <Search size={12} className="text-gray-400" />
              <input
                placeholder="Search ID, unit, user..."
                className="text-xs outline-none text-gray-600 placeholder-gray-400 w-36"
              />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-xs min-w-[800px] lg:min-w-0">
              <thead>
                <tr className="border-b border-gray-100 bg-[#1F68B2]">
                  <th className="text-left py-2 px-2 text-[10px] font-semibold text-white tracking-wider whitespace-nowrap">Request ID</th>
                  <th className="text-left py-2 px-2 text-[10px] font-semibold text-white tracking-wider whitespace-nowrap">Department</th>
                  <th className="text-left py-2 px-2 text-[10px] font-semibold text-white tracking-wider whitespace-nowrap">Unit</th>
                  <th className="text-left py-2 px-2 text-[10px] font-semibold text-white tracking-wider whitespace-nowrap">Requested By</th>
                  <th className="text-left py-2 px-2 text-[10px] font-semibold text-white tracking-wider whitespace-nowrap">Items</th>
                  <th className="text-left py-2 px-2 text-[10px] font-semibold text-white tracking-wider whitespace-nowrap">Status</th>
                  <th className="text-left py-2 px-2 text-[10px] font-semibold text-white tracking-wider whitespace-nowrap">Vendor</th>
                  <th className="text-left py-2 px-2 text-[10px] font-semibold text-white tracking-wider whitespace-nowrap">PO No.</th>
                  <th className="text-left py-2 px-2 text-[10px] font-semibold text-white tracking-wider whitespace-nowrap">Amount</th>
                  <th className="text-left py-2 px-2 text-[10px] font-semibold text-white tracking-wider whitespace-nowrap">Date</th>
                  <th className="text-left py-2 px-2 text-[10px] font-semibold text-white tracking-wider whitespace-nowrap">Actions</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, i) => (
                  <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                    <td className="py-3 px-2 text-blue-500 font-semibold whitespace-nowrap">{row.id}</td>
                    <td className={`py-3 px-2 font-bold ${deptColors[row.dept]} whitespace-nowrap`}>{row.dept}</td>
                    <td className="py-3 px-2 text-gray-600 whitespace-nowrap">{row.unit}</td>
                    <td className="py-3 px-2 text-gray-700 whitespace-nowrap">{row.by}</td>
                    <td className="py-3 px-2 text-gray-700 font-bold whitespace-nowrap">{row.items}</td>
                    <td className="py-3 px-2 whitespace-nowrap">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${statusStyles[row.status]} whitespace-nowrap`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="py-3 px-2 text-gray-600 whitespace-nowrap">{row.vendor}</td>
                    <td className="py-3 px-2 text-[#0891B2] font-light whitespace-nowrap">{row.po}</td>
                    <td className="py-3 px-2 text-[#196EE6] font-semibold whitespace-nowrap">{row.amount}</td>
                    <td className="py-3 px-2 text-gray-400 whitespace-nowrap">{row.date}</td>
                    <td className="py-3 px-2">
                      <div className="flex items-center gap-1.5">
                        <button className="p-1 hover:bg-gray-100 rounded"><Eye size={12} className="text-black" /></button>
                        <button className="p-1 hover:bg-gray-100 rounded"><Edit size={12} className="text-black" /></button>
                        <button className="p-1 hover:bg-gray-100 rounded"><Trash2 size={12} className="text-black" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-end gap-1.5 mt-3 pt-3 border-t border-gray-100">
            <button className="w-7 h-7 border border-gray-200 rounded flex items-center justify-center hover:bg-gray-50">
              <ChevronLeft size={13} className="text-gray-400" />
            </button>
            {[1, 2, 3].map((n) => (
              <button
                key={n}
                className={`w-7 h-7 rounded text-xs font-semibold ${n === 1 ? 'bg-blue-600 text-white' : 'border border-gray-200 text-gray-600 hover:bg-gray-50'}`}
              >
                {n}
              </button>
            ))}
            <button className="w-7 h-7 border border-gray-200 rounded flex items-center justify-center hover:bg-gray-50">
              <ChevronRight size={13} className="text-gray-400" />
            </button>
          </div>
        </div>

        {/* Detail Panel */}
        <div className="lg:col-span-1 bg-white rounded-2xl shadow-sm h-full">
          <div className="mb-3 bg-[#1E4D7B] rounded-md px-3 py-2">
            <div className="text-white font-black text-base">{detailData.id}</div>
            <div className="text-xs text-gray-300 mt-0.5">{detailData.sub}</div>
          </div>
          <div className="flex flex-col gap-2 mb-4 px-4">
            {[
              ['Department', detailData.dept, 'text-blue-700 font-semibold'],
              ['Unit', detailData.unit, 'text-black'],
              ['Requested By', detailData.by, 'text-black'],
              ['Date', detailData.date, 'text-black'],
              ['Vendor', detailData.vendor, 'text-black'],
              ['PO Number', detailData.po, 'text-black'],
              ['Total Amount', detailData.amount, 'text-green-700 font-black'],
            ].map(([label, val, valClass], i) => (
              <div key={i} className="flex items-center justify-between pb-1.5">
                <span className="text-xs text-gray-400">{label}</span>
                <span className={`text-xs font-semibold ${valClass}`}>{val}</span>
              </div>
            ))}
          </div>

          {/* Line Items */}
          <div className="mb-4 px-4">
            <div className="text-[10px] font-bold text-gray-800 tracking-widest uppercase mb-2">Line Items</div>
            <div className="flex items-center justify-between text-[10px] text-gray-600 mb-1.5">
              <span>Item</span>
              <span>Qty</span>
            </div>
            {detailData.lineItems.map((li, i) => (
              <div key={i} className="flex items-center justify-between py-1">
                <span className="text-xs text-gray-700">{li.item}</span>
                <span className="text-xs font-bold text-blue-700">{li.qty}</span>
              </div>
            ))}
          </div>

          {/* Approval Trail */}
          <div className="mb-4 px-4">
            <div className="text-[10px] font-semibold text-gray-700 tracking-widest uppercase mb-2">Approval Trail</div>
            {detailData.trail.map((t, i) => (
              <div key={i} className="flex items-start gap-2 mb-2">
                <CheckCircle size={14} className="text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-sm font-bold text-black">{t.label}</div>
                  <div className="text-[11px] text-gray-400">{t.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-2 mt-3 px-4 pb-2">
            <button className="flex-1 bg-[#1E4D7B] hover:bg-blue-600 text-white text-xs font-medium py-2.5 rounded-xl transition-colors">
              Generate PO
            </button>
            <button className="px-4 bg-white hover:bg-red-800 text-[#EF4444] text-xs font-bold py-2.5 rounded-xl transition-colors">
              Reject
            </button>
          </div>
        </div>
      </div>

      {/* Stock Level by Dept Component */}
      <StockLevelByDept />
    </div>
  );
}