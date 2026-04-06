import React from 'react';
import { Plus } from 'lucide-react';

export default function GoodsReceiptHeader() {
  return (
    <div className="px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      <div>
        <h1 className="text-[#0F172A] text-base sm:text-xl font-semibold leading-tight text-center sm:text-left">
          Stock In: Goods Receipt
        </h1>
        <p className="text-[#64748B] text-[11px] sm:text-xs mt-0.5 text-center sm:text-left">
          Record all inventory received into unit store.
        </p>
      </div>
      <button className="flex items-center justify-center gap-1.5 sm:gap-2 bg-gradient-to-r from-[#3B82F6] to-[#1E4D7B] hover:from-[#2563EB] hover:to-[#1A3A6B] text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-sm transition-all duration-300 shadow-sm hover:shadow-md w-full sm:w-auto cursor-pointer"> 
        <Plus size={14} className='font-bold sm:w-4 sm:h-4' />
        Create New Item
      </button>
    </div>
  );
}