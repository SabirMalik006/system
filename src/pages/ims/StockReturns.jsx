import React from 'react';
import StockReturnsHeader from '../../components/ims/stockreturns/StockReturnsHeader';
import StockReturnsKPIs from '../../components/ims/stockreturns/StockReturnsKPIs';
import MonthlyTrendChart from '../../components/ims/stockreturns/MonthlyTrendChart';
import ReturnsByReasonAndCondition from '../../components/ims/stockreturns/ReturnsByReasonAndCondition';
import VolumeOccupancyAndRadar from '../../components/ims/stockreturns/VolumeOccupancyAndRadar';
import StockReturnsTable from '../../components/ims/stockreturns/StockReturnsTable';

export default function StockReturns() {
  return (
    <div className="min-h-screen bg-[#e8f0f7] font-sans">
      <StockReturnsHeader />
      <div className="px-4 sm:px-5 py-4 flex flex-col gap-4  ">
        <StockReturnsKPIs />
        <MonthlyTrendChart />
        <ReturnsByReasonAndCondition />
        <VolumeOccupancyAndRadar />
        <StockReturnsTable />
      </div>
      <footer className="bg-[#1a2e52] text-gray-400 text-[10px] sm:text-xs text-center py-4 mt-6">
        © All Rights reserved by
      </footer>
    </div>
  );
}