import React from 'react';
import { 
  PieChart, Pie, Cell, Tooltip, 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer 
} from 'recharts';
import { MoreHorizontal } from 'lucide-react';

const ratingData = [
  { name: 'Excellent', value: 63, color: '#1E88E5' },
  { name: 'Good',      value: 22, color: '#42A5F5' },
  { name: 'Average',   value: 8,  color: '#90CAF9' },
  { name: 'Poor',      value: 7,  color: '#EF5350' },
];

const deliveryData = [
  { vendor: 'Lumina',    onTime: 92, total: 88 },
  { vendor: 'Apex',      onTime: 85, total: 82 },
  { vendor: 'Zenith',    onTime: 45, total: 68 },
  { vendor: 'AquaFlow',  onTime: 95, total: 78 },
  { vendor: 'ClearState',onTime: 88, total: 72 },
];

export default function VendorPerformance() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

      {/* Left: Vendor Performance by Rating - Pie Chart */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-base font-semibold text-gray-800">Vendor Performance by Rating</h2>
          <div className="text-gray-400 cursor-pointer">
            <MoreHorizontal size={18} />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Pie Chart */}
          <div className="w-full md:w-64 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={ratingData}
                  cx="50%"
                  cy="50%"
                  innerRadius={65}
                  outerRadius={95}
                  dataKey="value"
                  labelLine={false}
                >
                  {ratingData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Legend + Stats */}
          <div className="flex-1 space-y-5">
            {ratingData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-4 h-4 rounded" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm text-gray-600">{item.name}</span>
                </div>
                <span className="font-semibold text-gray-700">{item.value}%</span>
              </div>
            ))}

            <div className="pt-6 border-t border-gray-200 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-gray-900">4.8</div>
                <div className="text-xs text-gray-500 mt-1">Overall Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">128</div>
                <div className="text-xs text-gray-500 mt-1">Active Vendors</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600">96%</div>
                <div className="text-xs text-gray-500 mt-1">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right: On-Time Delivery vs Total Orders - Grouped Bar Chart */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-base font-semibold text-gray-800">ON-TIME DELIVERY VS TOTAL ORDERS</h2>
          <div className="flex items-center gap-5 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#1A8FA0] rounded"></div>
              <span className="text-gray-600">On-time %</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#1E4D7B] rounded"></div>
              <span className="text-gray-600">Orders</span>
            </div>
          </div>
        </div>

        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={deliveryData} barGap={8}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis 
              dataKey="vendor" 
              tick={{ fontSize: 12, fill: '#64748b' }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis 
              tick={{ fontSize: 11, fill: '#94a3b8' }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip />

            <Bar dataKey="onTime" fill="#1A8FA0" radius={[4, 4, 0, 0]} />
            <Bar dataKey="total" fill="#1E4D7B" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}