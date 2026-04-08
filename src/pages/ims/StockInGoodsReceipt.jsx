import React from 'react';
import GoodsReceiptHeader from '../../components/ims/stockin/GoodsReceiptHeader';
import AnalyticsInsights from '../../components/ims/stockin/AnalyticsInsights';
import VendorPerformanceSection from '../../components/ims/stockin/VendorPerformanceSection';
import MasterSessionHistory from '../../components/ims/stockin/MasterSessionHistory';
import Footer from '../../components/common/fotter';

export default function StockInGoodsReceipt() {
  return (
    <div className="min-h-screen bg-[#E8F4FF] font-sans">
      <GoodsReceiptHeader />
      <div className="p-4 flex flex-col gap-4">
        <AnalyticsInsights />
        <VendorPerformanceSection />
        <MasterSessionHistory />
        
      </div>
      <Footer />
    </div>
  );
}