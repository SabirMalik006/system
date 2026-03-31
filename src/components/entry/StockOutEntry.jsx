import React from 'react';
import QuickInsightCard from './QuickInsightCard';
import StatsCards from './StatsCards';
import RecentIssuances from './RecentIssuances';
import EntrySummary from './EntrySummary';
import StorageLocation from './StorageLocation';
import RequestInfo from './RequestInfo';
import RecipientInfo from './RecipientInfo';
import ApprovalSection from './ApprovalSection';
import Footer from '../common/fotter';

const StockOutEntry = () => {
    return (
        <div className="max-w-7xl mx-auto bg-[#E8F4FF] min-h-screen">
            <div className="p-4 sm:p-6">
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                        Stock Out Entry <span className="text-base sm:text-lg font-normal text-gray-400">(Item Issuance)</span>
                    </h1>
                    <p className="text-xs sm:text-sm text-gray-500">Create a new issuance record for items leaving the warehouse.</p>
                </div>

                {/* Main Grid - Responsive Layout */}
                <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 mb-6">
                    {/* Left Column - Main Form */}
                    <div className="lg:col-span-2 space-y-6 order-1 lg:order-none">
                        <RequestInfo />
                        <RecipientInfo />
                        <ApprovalSection />
                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="lg:col-span-1 flex flex-col gap-5 order-2 lg:order-none">
                        <QuickInsightCard currentStock={1250} safetyThreshold={200} />
                        <StatsCards />
                        <EntrySummary />
                        <StorageLocation />
                    </div>
                </div>

                {/* Recent Issuances - Full Width at Bottom */}
                <div className="w-full mt-6 lg:mt-0">
                    <RecentIssuances />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default StockOutEntry;