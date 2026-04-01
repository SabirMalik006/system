import React from 'react';
import StoreHeader from './StoreHeader';
import RequiredInfo from './RequiredInfo';
import AdditionalInfo from './AdditionalInfo';
import LineItems from './LineItems';
import InventoryUpdate from './InventoryUpdate';
import ItemDetail from './ItemDetail';
import FinancialSummary from './FinancialSummary';
import Footer from '../common/fotter';

const StoreReceipt = () => {
    return (
        <div className="max-w-7xl mx-auto bg-[#E8F4FF] min-h-screen">
            <div className="p-4 sm:p-6">
                {/* Header */}
                <StoreHeader />

                {/* Main Grid - Responsive */}
                <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6">
                    {/* Left Column - Main Form */}
                    <div className="lg:col-span-2 space-y-6 order-2 lg:order-none">
                        <RequiredInfo />
                        <AdditionalInfo />
                        <LineItems />

                        {/* Action Buttons - Added */}
                        <div className="flex flex-wrap items-center justify-end gap-3">
                            <button className="px-4 sm:px-6 py-2.5 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                Save Draft
                            </button>
                            <button className="px-4 sm:px-6 py-2.5 text-sm text-white bg-gradient-to-r from-[#2563EB] to-[#2196F3] rounded-lg hover:from-[#1D4ED8] hover:to-[#1976D2] transition-all shadow-sm">
                                Complete Receipt & Update Stock
                            </button>
                        </div>
                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="lg:col-span-1 space-y-6 order-1 lg:order-none">
                        <InventoryUpdate />

                        {/* Stats Cards - Responsive Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                            {/* STORES REPORT */}
                            <div className="bg-gradient-to-b from-[#357C87] to-[#1A8FA0] rounded-xl border border-gray-200 p-3 text-white">
                                <div className="flex items-center gap-3">
                                    <svg className="w-6 sm:w-8 h-6 sm:h-8 text-white/90 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <div>
                                        <div className="text-xs text-white/80">STORES REPORT</div>
                                        <div className="text-xl sm:text-2xl font-bold text-white">18</div>
                                    </div>
                                </div>
                            </div>

                            {/* COMPARATIVE STORE */}
                            <div className="bg-gradient-to-b from-[#357C87] to-[#1A8FA0] rounded-xl border border-gray-200 p-3 text-white">
                                <div className="flex items-center gap-3">
                                    <svg className="w-6 sm:w-8 h-6 sm:h-8 text-white/90 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                    <div>
                                        <div className="text-xs text-white/80">COMPARATIVE STORE</div>
                                        <div className="text-xl sm:text-2xl font-bold text-white">17</div>
                                    </div>
                                </div>
                            </div>

                            {/* FINANCE INFORMATION */}
                            <div className="bg-gradient-to-b from-[#357C87] to-[#1A8FA0] rounded-xl border border-gray-200 p-3 text-white">
                                <div className="flex items-center gap-3">
                                    <svg className="w-6 sm:w-8 h-6 sm:h-8 text-white/90 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <div>
                                        <div className="text-xs text-white/80">FINANCE INFORMATION</div>
                                        <div className="text-xl sm:text-2xl font-bold text-white">1</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ItemDetail />
                        <FinancialSummary />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default StoreReceipt;