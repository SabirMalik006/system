import React from 'react';
import PendingVsApproved from '../../components/ims/issuance/PendingVsApproved';
import IssuanceByUnit from '../../components/ims/issuance/IssuanceByUnit';
import StockLevelTrend from '../../components/ims/issuance/StockLevelTrend';
import IssuanceWorkflowStatus from '../../components/ims/issuance/IssuanceWorkflowStatus';
import LowStockMonitoring from '../../components/ims/issuance/LowStockMonitoring';
import RecentIssuanceHistory from '../../components/ims/issuance/RecentIssuanceHistory';
import Footer from '../../components/common/fotter';
import Topbar from '../../components/ims/issuance/Topbar';

export default function StockIssuance() {
    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <div className="max-w-[2560px] mx-auto px-4 sm:px-6 py-6 flex flex-col gap-5">
                <Topbar />
                
                {/* Row 1: Pending vs Approved + Issuance by Unit + StockLevelTrend */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {/* Left Column */}
                    <div className="flex flex-col gap-5">
                        <PendingVsApproved />
                        <StockLevelTrend />
                    </div>
                    
                    {/* Right Column */}
                    <div>
                        <IssuanceByUnit />
                    </div>
                </div>

                {/* Row 2: Issuance Workflow Status */}
                <IssuanceWorkflowStatus />

                {/* Row 3: Low Stock Monitoring */}
                <LowStockMonitoring />

                {/* Row 4: Recent Issuance History */}
                <RecentIssuanceHistory />
            </div>
            <Footer />
        </div>
    );
}