import React from 'react';
import { AlertCircle, TrendingDown, Package, ArrowRight } from 'lucide-react';

const inventoryStats = [
  { label: 'Running Balance', value: '84 units' },
  { label: 'Issue Qty (Current Month)', value: '260 units' },
  { label: 'Number Dept. / Floors', value: '280 units' },
  { label: 'External Floors', value: '1 Floor' },
  { label: 'Avg Daily Consumption', value: '390 units' },
  { label: 'Active Items (In-Stock)', value: '465 units' },
];

const criticalItems = [
  { name: 'Circuit Breaker 10 Amp for AC with Plug', urgency: '4 days left', urgencyColor: '#dc2626', stock: 'Low', isLow: true },
  { name: 'Transit all Paste', stock: 'Out', isOut: true },
  { name: 'Unavailable Transfer in machine affecting (m)', stock: 'Transit not found', isNote: true },
];

export default function InventoryAndCritical() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-4">
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-3 sm:p-4">
        <div className="flex items-center justify-between mb-3.5">
          <h3 className="text-sm font-bold text-gray-900">Inventory Status</h3>
          <div className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl font-bold text-green-600">82%</span>
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-green-100 flex items-center justify-center">
              <TrendingDown size={16} className="text-green-600 transform rotate-180" />
            </div>
          </div>
        </div>
        <div className="h-1 rounded-full bg-gray-100 overflow-hidden mb-3.5">
          <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-[#1a6cb5] to-[#2ec4b6]" />
        </div>
        <div className="flex flex-col gap-1.5">
          {inventoryStats.map((stat, i) => (
            <div key={i} className={`flex justify-between items-center px-2.5 py-1.5 rounded-md ${i % 2 === 0 ? 'bg-gray-50' : 'bg-transparent'}`}>
              <span className="text-xs text-gray-500">{stat.label}</span>
              <span className="text-xs font-semibold text-gray-900">{stat.value}</span>
            </div>
          ))}
        </div>
        <button className="w-full mt-3.5 py-2 rounded-lg bg-gradient-to-r from-[#1a6cb5] to-[#0891b2] text-white text-sm font-semibold flex items-center justify-center gap-1.5">
          Create Purchase Order <ArrowRight size={14} />
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-3 sm:p-4">
        <div className="flex items-center justify-between mb-3.5">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold text-gray-900">Critical Block Items</h3>
            <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-red-100 text-red-700">3</span>
          </div>
          <button className="px-2.5 py-1 rounded-md bg-blue-100 text-blue-700 text-[11px] font-semibold">View All</button>
        </div>
        <div className="flex flex-col gap-2.5">
          {criticalItems.map((item, i) => (
            <div key={i} className={`p-2.5 rounded-lg flex items-start gap-2.5 ${item.isOut ? 'bg-red-50 border border-red-200' : item.isNote ? 'bg-amber-50 border border-amber-200' : 'bg-red-50 border border-red-200'}`}>
              <div className={`w-7.5 h-7.5 rounded-lg flex-shrink-0 flex items-center justify-center ${item.isOut ? 'bg-red-100' : item.isNote ? 'bg-amber-100' : 'bg-red-100'}`}>
                {item.isOut ? <Package size={14} className="text-red-600" /> : item.isNote ? <AlertCircle size={14} className="text-amber-600" /> : <AlertCircle size={14} className="text-red-600" />}
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-gray-900 mb-0.5">{item.name}</div>
                <div className="flex flex-wrap items-center gap-2">
                  {item.urgency && <span className="text-[11px] font-semibold" style={{ color: item.urgencyColor }}>⏱ {item.urgency}</span>}
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${item.isOut ? 'bg-red-100 text-red-600' : item.isNote ? 'bg-amber-100 text-amber-600' : 'bg-red-100 text-red-600'}`}>{item.stock}</span>
                </div>
              </div>
              {!item.isNote && <button className="px-2.5 py-1 rounded-md bg-blue-100 text-blue-700 text-[10px] font-semibold flex-shrink-0">{item.isOut ? '4 days left' : 'Restock'}</button>}
              {item.isNote && <span className="text-[10px] text-amber-600 font-semibold flex-shrink-0">4 days left</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}