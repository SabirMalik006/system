import React from 'react';
import { ShoppingCart } from 'lucide-react';

export default function ProcurementHeader() {
    return (
        <div className="px-6 pt-6 pb-4 flex items-start justify-between bg-[#E8F4FF]">
            <div>
                <h1 className="text-3xl font-medium text-[#0F172A] tracking-tight leading-tight">
                    Procurement Management
                </h1>
                <p className="text-[#64748B] text-md mt-1">
                    Manage and monitor organization-wide purchase requests.
                </p>
            </div>
            <button className="flex items-center gap-5 bg-gradient-to-r from-[#3B82F6] to-[#1E4D7B] hover:from-[#2563EB] hover:to-[#1A3A6B] text-white text-sm font-semibold px-5 py-4 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md text-center mt-2 leading-tight">
                <ShoppingCart size={16} />
                <span>Create Purchase Request</span>
            </button>
        </div>
    );
}