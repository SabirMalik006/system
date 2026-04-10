import React from 'react';
import { TrendingUp, ArrowDown } from 'lucide-react';

const InventoryPreview = () => {
  return (
    <div className="bg-white rounded-2xl border-2 border-[#1A8FA0] overflow-hidden shadow-sm w-full max-w-[400px]">

      {/* Top Section */}
      <div className="px-5 pt-5 pb-4">
        {/* Header row */}
        <div className="flex items-start justify-between mb-3">
          <span className="text-md font-semibold pt-3 text-[#0F172A] tracking-widest uppercase">
            Inventory Preview
          </span>
          <TrendingUp
            size={52}
            className="text-[#1A8FA0] flex-shrink-0 "
            strokeWidth={2.5}
          />
        </div>

        {/* Current Stock label */}
        <div className="text-md text-[#94A3B8] font-normal  mb-1">
          Current Stock
        </div>

        {/* Current Stock value */}
        <div className="flex items-baseline gap-1.5">
        <span className="text-3xl font-bold text-[#334155] leading-tight">
            1,250
          </span>
          <span className="text-sm text-[#334155] font-normal">units</span>
        </div>
      </div>

      {/* Divider with down-arrow circle */}
      <div className="flex items-center justify-center -mb-3 relative z-10">
        <div className="w-7 h-7 rounded-full bg-[#0C626F] flex items-center justify-center shadow-md">
          <ArrowDown size={14} className="text-white" strokeWidth={2.5} />
        </div>
      </div>

      {/* Bottom teal panel */}
      <div className="bg-[#1A8FA080] px-5 pt-6 pb-5 rounded-2xl m-3 mt-2 border-2 border-[#0C626F]">
        {/* New Stock row */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-bold text-white">New Stock</span>
          <span className="text-xs font-semibold text-white bg-[#1A8FA0] px-2.5 py-0.5 rounded-full">
            +12 units
          </span>
        </div>

        {/* New Stock value */}
        <div className="text-4xl font-bold text-[#1A8FA0] leading-tight">
          1,262
        </div>
      </div>

    </div>
  );
};

export default InventoryPreview;