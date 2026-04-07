import React from 'react';
import { ShoppingCart } from 'lucide-react';

export default function ProcurementHeader() {
    return (
        <div className="px-4 sm:px-6 pt-4 sm:pt-6 pb-3 sm:pb-4 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 bg-[#E8F4FF]">
            <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#0F172A] tracking-tight leading-tight text-center sm:text-left">
                    Procurement Management
                </h1>
                <p className="text-xs sm:text-sm md:text-base text-[#64748B] mt-0.5 sm:mt-1 text-center sm:text-left">
                    Manage and monitor organization-wide purchase requests.
                </p>
            </div>
            <button className="flex items-center justify-center gap-1.5 sm:gap-2 bg-gradient-to-r from-[#3B82F6] to-[#1E4D7B] hover:from-[#2563EB] hover:to-[#1A3A6B] text-white text-xs sm:text-sm font-semibold px-3  sm:px-4 py-3 sm:py-2 md:py-3 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md text-center leading-tight whitespace-nowrap">
                <ShoppingCart size={14} className="sm:w-4 sm:h-4" />
                <span>Create Purchase Request</span>
            </button>
        </div>
    );
}