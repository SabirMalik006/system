import React, { useState } from 'react';
import { Search, ChevronDown, Download } from 'lucide-react';
import LeaveRequestModal from './LeaveRequestModal';

export default function LeaveHeader() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        {/* Left: Title */}
        <div>
          <h1 className="text-xl font-black text-gray-900 leading-tight">
            Leave Management – Reports &amp;{' '}
            <span className="text-blue-600">Analytics</span>
          </h1>
          <p className="text-xs text-gray-500 mt-0.5">
            Track organizational leave trends
          </p>
        </div>

        {/* Right: Search + Filter + Export */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Search */}
          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-2 w-44">
            <Search size={13} className="text-gray-400 flex-shrink-0" />
            <input
              placeholder="Search Employee..."
              className="bg-transparent text-xs text-gray-600 outline-none w-full placeholder-gray-400"
            />
          </div>

          {/* Leave Type filter */}
          <div className="relative">
            <select className="appearance-none bg-white border border-gray-200 rounded-lg pl-3 pr-8 py-2 text-xs text-gray-600 outline-none cursor-pointer focus:border-blue-400">
              <option>All Leave Types</option>
              <option>Annual Leave</option>
              <option>Sick Leave</option>
              <option>Casual Leave</option>
            </select>
            <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>

          {/* Export Report → opens modal */}
          <button
            onClick={() => setShowModal(false)}
            className="flex items-center gap-1.5 bg-[#1a3a8f] hover:bg-blue-900 text-white text-xs font-bold px-3 py-2 rounded-lg transition-colors"
          >
            <Download size={13} />
            <span className="leading-tight text-center">Export<br />Report</span>
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <LeaveRequestModal onClose={() => setShowModal(false)} />
      )}
    </>
  );
}