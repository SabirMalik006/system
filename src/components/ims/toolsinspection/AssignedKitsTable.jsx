import React, { useState } from 'react';
import { Search, ChevronLeft, ChevronRight, AlertTriangle } from 'lucide-react';

const kits = [
  {
    kitId: 'TK-2024-001', empName: 'Ahmed Hassan', empId: 'EMP-001',
    dept: 'Electrical', assigned: 'Jan 12, 2024', lastInspected: 'Mar 01, 2025',
    nextDue: 'Mar 15, 2025', overdue: false, condition: 'Good',
    condStyle: 'bg-green-100 text-green-700', status: 'Passed',
    statusColor: '#15803d', statusDot: 'bg-green-500', urgent: false,
  },
  {
    kitId: 'TK-2024-002', empName: 'Sara Malik', empId: 'EMP-002',
    dept: 'Plumbing', assigned: 'Feb 05, 2024', lastInspected: 'Feb 28, 2025',
    nextDue: 'Mar 01, 2025', overdue: true, condition: 'Fair',
    condStyle: 'bg-yellow-100 text-yellow-700', status: 'Pending',
    statusColor: '#a16207', statusDot: 'bg-yellow-400', urgent: false,
  },
  {
    kitId: 'TK-2024-003', empName: 'Kamran Khan', empId: 'EMP-003',
    dept: 'Carpentry', assigned: 'Jan 20, 2024', lastInspected: 'Jan 15, 2025',
    nextDue: 'OVERDUE', overdue: true, condition: 'Damaged',
    condStyle: 'bg-red-100 text-red-700', status: 'Failed',
    statusColor: '#dc2626', statusDot: 'bg-red-500', urgent: true,
  },
  {
    kitId: 'TK-2024-004', empName: 'Bilal Akhtar', empId: 'EMP-004',
    dept: 'Maintenance', assigned: 'Mar 10, 2024', lastInspected: 'Mar 05, 2025',
    nextDue: 'Apr 05, 2025', overdue: false, condition: 'Good',
    condStyle: 'bg-green-100 text-green-700', status: 'Passed',
    statusColor: '#15803d', statusDot: 'bg-green-500', urgent: false,
  },
  {
    kitId: 'TK-2024-005', empName: 'Rashid Ali', empId: 'EMP-005',
    dept: 'Electrical', assigned: 'Feb 18, 2024', lastInspected: 'Feb 18, 2025',
    nextDue: 'Mar 18, 2025', overdue: false, condition: 'Fair',
    condStyle: 'bg-yellow-100 text-yellow-700', status: 'Pending',
    statusColor: '#a16207', statusDot: 'bg-yellow-400', urgent: false,
  },
];

const tabs = ['All', 'Pending', 'Passed', 'Failed', 'Overdue'];

export default function AssignedKitsTable() {
  const [activeTab, setActiveTab] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = kits.filter(k => {
    const matchSearch = k.kitId.toLowerCase().includes(search.toLowerCase()) ||
      k.empName.toLowerCase().includes(search.toLowerCase());
    const matchTab = activeTab === 'All' || k.status === activeTab ||
      (activeTab === 'Overdue' && k.overdue);
    return matchSearch && matchTab;
  });

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 py-3 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <h2 className="text-sm font-bold text-gray-900">Assigned Tool Kits</h2>
          <span className="text-[10px] font-bold bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">
            {kits.length} Records
          </span>
        </div>
        <div className="relative w-full sm:w-64">
          <Search size={12} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            placeholder="Search kit or employee..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs border border-gray-200 rounded-lg outline-none focus:border-[#1a3a8f]"
          />
        </div>
      </div>

      {/* Filter tabs */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-gray-100 flex-wrap">
        {tabs.map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)}
            className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors ${
              activeTab === tab
                ? 'bg-[#1a3a8f] text-white'
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}>
            {tab}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-xs min-w-[780px]">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              {['Kit ID', 'Employee', 'Department', 'Assigned Date', 'Last Inspected', 'Next Due', 'Condition', 'Status', 'Action'].map(h => (
                <th key={h} className="text-left px-4 py-2.5 text-[10px] font-bold text-gray-400 tracking-wider whitespace-nowrap">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((kit, i) => (
              <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 sm:py-6 md:py-8.5 xl:py-10 2xl:py-12 ">
                  <span className="font-bold text-blue-600">{kit.kitId}</span>
                </td>
                <td className="px-4 py-3">
                  <div className="font-semibold text-gray-900">{kit.empName}</div>
                  <div className="text-[10px] text-gray-400">{kit.empId}</div>
                </td>
                <td className="px-4 py-3 text-gray-600">{kit.dept}</td>
                <td className="px-4 py-3 text-gray-500 whitespace-nowrap">{kit.assigned}</td>
                <td className="px-4 py-3 text-gray-500 whitespace-nowrap">{kit.lastInspected}</td>
                <td className="px-4 py-3 whitespace-nowrap">
                  {kit.overdue && kit.nextDue === 'OVERDUE' ? (
                    <span className="flex items-center gap-1 text-red-600 font-bold text-[10px]">
                      <AlertTriangle size={10} />
                      OVERDUE
                    </span>
                  ) : kit.overdue ? (
                    <span className="text-red-600 font-semibold text-[10px]">
                      {kit.nextDue} ⚠
                    </span>
                  ) : (
                    <span className="text-green-700 font-semibold text-[10px]">{kit.nextDue}</span>
                  )}
                </td>
                <td className="px-4 py-3">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${kit.condStyle}`}>
                    {kit.condition}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${kit.statusDot}`} />
                    <span className="font-semibold text-[11px]" style={{ color: kit.statusColor }}>
                      {kit.status}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <button className={`text-[10px] font-bold px-3 py-1.5 rounded-lg transition-colors ${
                    kit.urgent
                      ? 'bg-red-600 text-white hover:bg-red-700'
                      : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                  }`}>
                    {kit.urgent ? 'Urgent' : 'Inspect'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 py-3 border-t border-gray-100">
        <span className="text-[10px] text-gray-400">Showing 1–{filtered.length} of {kits.length} records</span>
        <div className="flex items-center gap-1.5">
          <button className="w-7 h-7 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50">
            <ChevronLeft size={13} className="text-gray-400" />
          </button>
          {[1, 2, 3].map(n => (
            <button key={n} className={`w-7 h-7 rounded-lg text-[10px] font-semibold ${
              n === 1 ? 'bg-[#1a3a8f] text-white' : 'border border-gray-200 text-gray-500 hover:bg-gray-50'
            }`}>{n}</button>
          ))}
          <button className="w-7 h-7 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50">
            <ChevronRight size={13} className="text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
}