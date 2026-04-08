import React from 'react';
import { Search, Download } from 'lucide-react';

const AuditHeader = () => {
  return (
    <div className="bg-[#C1DDF8] px-6 py-4 ">
      <div className="flex items-center justify-between">
        {/* Left side - Title and Description */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Audit Logs</h2>
          <p className="text-md text-gray-500 mt-0.5">System activity & user action history across all modules</p>
        </div>

        {/* Right side - Search Bar and Export Button */}
        <div className="flex items-center gap-3">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search logs..."
              className="pl-9 bg-white pr-4 py-1.5 text-sm border border-gray-100 rounded-md w-64 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Export Button */}
          <button className="flex items-center gap-2 px-4 py-1.5 text-sm text-white bg-[#1A8FA0] border border-gray-300 rounded-xl cursor-pointer hover:bg-[#1A8FA0]/90">
            <Download size={16} />
            <span>Export</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuditHeader;