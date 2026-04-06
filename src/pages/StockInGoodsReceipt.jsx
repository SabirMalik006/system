import React from 'react';
import GoodsReceiptHeader from '../components/stockin/GoodsReceiptHeader';
import AnalyticsInsights from '../components/stockin/AnalyticsInsights';
import VendorPerformanceSection from '../components/stockin/VendorPerformanceSection';
import MasterSessionHistory from '../components/stockin/MasterSessionHistory';

export default function StockInGoodsReceipt() {
  return (
    <div className="min-h-screen bg-[#E8F4FF] font-sans">
      <GoodsReceiptHeader />
      <div className="p-4 flex flex-col gap-4">
        <AnalyticsInsights />
        <VendorPerformanceSection />
        <MasterSessionHistory />
      </div>
    </div>
  );
}