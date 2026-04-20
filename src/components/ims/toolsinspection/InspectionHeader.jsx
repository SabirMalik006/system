import React from 'react';
import { Wrench, Download, Calendar, Plus } from 'lucide-react';

export default function InspectionHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 bg-[#1a3a8f] rounded-lg flex items-center justify-center flex-shrink-0">
            <Wrench size={15} className="text-white" />
          </div>
          <h1 className="text-xl font-black text-gray-900">Tools Kit Inspection</h1>
        </div>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        <button className="flex items-center cursor-pointer gap-1.5 border border-gray-200 bg-white text-gray-600 text-xs font-semibold px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors">
          <Calendar size={13} />
          Schedule
        </button>
        <button className="flex items-center cursor-pointer gap-1.5 border border-gray-200 bg-white text-gray-600 text-xs font-semibold px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors">
          <Download size={13} />
          Export PDF
        </button>
        <button className="flex items-center cursor-pointer gap-1.5 bg-[#1a3a8f] hover:bg-blue-900 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors">
          <Plus size={13} />
          New Inspection
        </button>
      </div>
    </div>
  );
}