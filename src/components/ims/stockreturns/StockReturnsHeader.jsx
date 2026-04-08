import React from 'react';
import { Download, Plus } from 'lucide-react';

export default function StockReturnsHeader() {
  return (
    <>
      {/* Page Header */}
      <div className="px-4 sm:px-5 pt-4 sm:pt-5 pb-3 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
        <div>
          <h1 className="text-xl sm:text-2xl  text-center sm:text-left font-black font-medium text-[#0F172A] tracking-wide">
            STOCK RETURNS
          </h1>
          <p className="text-sm  sm:text-md text-center sm:text-left  text-[#64748B] mt-0.5 font-light">
            All recorded return transactions
          </p>
        </div>
        <div className="flex items-center justify-center sm:justify-start gap-2 ">
          <button className="flex items-center gap-1.5 border border-gray-300 bg-white text-gray-700 text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-sm cursor-pointer hover:bg-gray-50 transition-colors shadow-sm">
            <Download size={14} />
            EXPORT
          </button>
          <button className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-sm cursor-pointer transition-colors shadow-md">
            <Plus size={14} />
            NEW RETURN
          </button>
        </div>
      </div>
    </>
  );
}