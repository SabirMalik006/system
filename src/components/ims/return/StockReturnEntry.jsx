import React from 'react';
import Footer from '../../common/fotter';
import ReturnHeader from './ReturnHeader';
import RequiredInfo from './RequiredInfo';
import ConditionReceipt from './ConditionReceipt';
import AdditionalRemarks from './AdditionalRemarks';
import InventoryPreview from './InventoryPreview';
import ItemStockInfo from './ItemStockInfo';
import RequiredFields from './RequiredFields';
import SystemRules from './SystemRules';

const StockReturnEntry = () => {
    return (
        <div className="max-w-7xl mx-auto bg-[#E8F4FF] min-h-screen">
            <div className="p-4 sm:p-6">
                {/* Header */}
                <ReturnHeader />

                {/* Auto Return ID Section - Responsive Grid */}
                <div className="bg-gradient-to-r from-[#1E4D7B] to-[#2166A0] rounded-xl p-4 mb-6 text-white">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {/* RETURN ID */}
                        <div>
                            <div className="text-xs text-white mb-1 font-semibold pb-1">RETURN ID</div>
                            <input
                                type="text"
                                value="RTN-2025-8825"
                                className="w-full px-3 py-2 text-sm font-medium bg-white border border-gray-200 rounded-lg text-[#94A3B8] focus:outline-none focus:border-[#1A8FA0] focus:ring-1 focus:ring-[#1A8FA0] transition-all"
                                readOnly
                            />
                            <div className='flex items-center gap-2 mt-1'>
                                <svg className="h-4 w-4 text-white/60 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <p className="text-xs text-white/60 truncate">AUTO-GENERATED</p>
                            </div>
                        </div>

                        {/* DATE & TIME */}
                        <div>
                            <div className="text-xs text-white mb-1 font-semibold pb-1">DATE & TIME</div>
                            <input
                                type="text"
                                value="2026-02-23 23:51:41Z"
                                className="w-full px-3 py-2 text-sm font-medium bg-white border border-gray-200 rounded-lg text-[#94A3B8] focus:outline-none focus:border-[#1A8FA0] focus:ring-1 focus:ring-[#1A8FA0] transition-all"
                                readOnly
                            />
                            <div className='flex items-center gap-2 mt-1'>
                                <svg className="h-4 w-4 text-white/60 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="text-xs text-white/60 truncate">SYSTEM TIMESTAMP</p>
                            </div>
                        </div>

                        {/* STATUS */}
                        <div>
                            <div className="text-xs text-white mb-1 font-semibold pb-1">STATUS</div>
                            <div className="relative">
                                <select className="w-full px-3 py-2 text-sm font-medium bg-white border border-gray-200 rounded-lg text-[#2563EB] focus:outline-none focus:border-[#1A8FA0] focus:ring-1 focus:ring-[#1A8FA0] appearance-none cursor-pointer">
                                    <option value="PENDING" className="bg-white">PENDING</option>
                                    <option value="APPROVED" className="bg-white">APPROVED</option>
                                    <option value="REJECTED" className="bg-white">REJECTED</option>
                                    <option value="PROCESSING" className="bg-white">PROCESSING</option>
                                </select>
                                <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            <div className='flex items-center gap-2 mt-1'>
                                <svg className="h-4 w-4 text-white/60 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                                <p className="text-xs text-white/60 truncate">PRE-SUBMISSION</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Grid - Responsive */}
                <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6">
                    {/* Left Column - Main Form */}
                    <div className="lg:col-span-2 space-y-6 order-2 lg:order-none">
                        <RequiredInfo />
                        <ConditionReceipt />
                        <AdditionalRemarks />

                        {/* Action Buttons - Responsive */}
                        <div className="flex flex-wrap items-center justify-end gap-3">
                            <button className="flex items-center gap-2 px-3 sm:px-4 py-2 text-xs text-[#0F172A] border border-[#334155] rounded-sm hover:bg-gray-50 transition-colors font-medium">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 6 6 18" />
                                    <path d="m6 6 12 12" />
                                </svg>
                                CLEAR FORM
                            </button>

                            <button className="flex items-center gap-2 px-3 sm:px-4 py-2 text-xs text-[#0F172A] border border-[#334155] rounded-sm hover:bg-gray-50 transition-colors font-medium">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect width="8" height="4" x="8" y="2" rx="1" ry="1"/>
                                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                                </svg>
                                SAVE DRAFT
                            </button>

                            <button className="flex items-center gap-2 font-medium px-4 sm:px-6 py-2 text-sm text-white bg-gradient-to-r from-[#2563EB] to-[#2196F3] rounded-lg hover:from-[#1D4ED8] hover:to-[#1976D2] transition-all shadow-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M10.029 4.285A2 2 0 0 0 7 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z"/>
                                    <path d="M3 4v16"/>
                                </svg>
                                REVIEW & SUBMIT
                            </button>
                        </div>
                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="lg:col-span-1 space-y-6 order-1 lg:order-none">
                        <InventoryPreview />
                        <ItemStockInfo />
                        <RequiredFields />
                        <SystemRules />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default StockReturnEntry;