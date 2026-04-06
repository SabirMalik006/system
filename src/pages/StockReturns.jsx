import React from 'react';
import StockReturnsHeader from '../components/stockreturns/StockReturnsHeader';
import StockReturnsKPIs from '../components/stockreturns/StockReturnsKPIs';
import MonthlyTrendChart from '../components/stockreturns/MonthlyTrendChart';
import ReturnsByReasonAndCondition from '../components/stockreturns/ReturnsByReasonAndCondition';
import VolumeOccupancyAndRadar from '../components/stockreturns/VolumeOccupancyAndRadar';
import StockReturnsTable from '../components/stockreturns/StockReturnsTable';

export default function StockReturns() {
  return (
    <div className="min-h-screen bg-[#e8f0f7] font-sans">
      <StockReturnsHeader />
      <div className="px-4 sm:px-5 py-4 flex flex-col gap-4">
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