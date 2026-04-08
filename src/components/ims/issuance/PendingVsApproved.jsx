import React from 'react';
import { CheckCircle, Clock, Calendar } from 'lucide-react';

export default function PendingVsApproved() {
    return (
        <div className="bg-white  h-[396px] md:h-[360px] rounded-2xl border border-gray-100 shadow-sm p-5  relative">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
                <div>
                    <h2 className="text-lg font-normal text-[#0F172A] text-center sm:text-left">Pending vs Approved Issuances</h2>
                    <div className="flex items-center justify-center sm:justify-start gap-1.5 mt-1 ">
                        <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />
                        <span className="text-xs text-[#94A3B8] ">Real-time status tracking</span>
                    </div>
                </div>
                <div className="flex items-center justify-center  gap-1.5 bg-[#1A8FA0] text-white text-xs font-medium px-3 py-2 rounded-sm ">
                    <Calendar size={13} />
                    Current Month: Feb 2026
                </div>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-3 mb-5 ">
                {/* Approved */}
                <div className="bg-gradient-to-br from-[#1A6FC4] to-[#1E60AF] rounded-4xl p-4 relative overflow-hidden">
                    <div className="absolute right-3 top-3 w-8 h-8 bg-white rounded-md flex items-center justify-center">
                        <CheckCircle size={15} className="text-[#2B8CEE]" />
                    </div>
                    <div className="text-[12px] font-normal text-blue-200 tracking-widest uppercase mb-2">Approved</div>
                    <div className='flex gap-2 mt-4 mb-3' >
                        <div className="text-3xl font-semibold text-white leading-none">1,240</div>
                        <div className="text-xs text-white font-semibold mt-2">+12%</div>
                    </div>
                    <div className="text-xs text-blue-100 font-medium ">Successful deployments</div>
                    {/* Decorative circle */}
                    <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-white/10 rounded-full" />
                </div>

                {/* Pending */}
                <div className="bg-gradient-to-br from-[#1E4D7B] to-[#2478B5] rounded-4xl p-4 relative overflow-hidden">
                    <div className="absolute right-3 top-3 w-8 h-8 bg-white rounded-md flex items-center justify-center">
                        <Clock size={15} className="text-[#2B8CEE]" />
                    </div>
                    <div className="text-[12px] font-normal text-blue-200 tracking-widest uppercase mb-2">Pending</div>
                    <div className='flex gap-4 mt-4 mb-3'>
                        <div className="text-3xl font-semibold text-white leading-none">1,210</div>
                        <div className="text-xs text-white font-semibold mt-2">−5%</div>
                    </div>
                    <div className="text-xs text-white font-medium mt-0.5">Awaiting Verification</div>
                    <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-white/10 rounded-full" />
                </div>
            </div>
            {/* Distribution Overview */}
            <div>
                <div className="text-xs font-semibold text-[#64748B] mb-3">Distribution Overview</div>

                {/* Approved bar */}
                <div className="mb-3">
                    <div className="flex items-center justify-between mb-1">
                        <span className="text-[11px] font-bold text-[#1A8FA0]">APPROVED (50.6%)</span>
                        <span className="text-[11px] font-semibold text-[#1A8FA0]">1,240 / 2,450</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-[#1E293B] overflow-hidden">
                        <div className="h-full rounded-full bg-teal-500" style={{ width: '50.6%' }} />
                    </div>
                </div>

                {/* Pending bar */}
                <div>
                    <div className="flex items-center justify-between mb-1">
                        <span className="text-[11px] font-bold text-[#64748B]">PENDING (49.4%)</span>
                        <span className="text-[11px] font-semibold text-[#64748B]">1,210 / 2,450</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-[#1E293B] overflow-hidden">
                        <div className="h-full rounded-full bg-gray-400" style={{ width: '49.4%' }} />
                    </div>
                </div>
            </div>
        </div>
    );
}