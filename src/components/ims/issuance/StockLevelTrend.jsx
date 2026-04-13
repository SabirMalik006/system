import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer,
} from 'recharts';

const data = [
  { date: '27 Feb', stock: 150, issued: 80  },
  { date: '28',     stock: 100, issued: 120 },
  { date: '1 Mar',  stock: 300, issued: 150 },
  { date: '2',      stock: 200, issued: 130 },
  { date: '3',      stock: 280, issued: 170 },
  { date: '4',      stock: 380, issued: 200 },
  { date: '5',      stock: 310, issued: 180 },
  { date: '6',      stock: 350, issued: 220 },
  { date: '7',      stock: 300, issued: 190 },
  { date: '8',      stock: 310, issued: 230 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-3 shadow-lg text-xs">
      <div className="font-bold mb-1.5 text-gray-700">{label}</div>
      {payload.map((p, i) => (
        <div key={i} className="flex items-center gap-1.5 mb-0.5">
          <span className="w-2 h-2 rounded-full inline-block" style={{ background: p.color }} />
          <span className="text-gray-500">{p.name}:</span>
          <span className="font-bold">{p.value}</span>
        </div>
      ))}
    </div>
  );
};

export default function StockLevelTrend() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-5 w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <h3 className="text-xs font-medium text-gray-700 tracking-widest uppercase">
          Stock Level vs Issue Trend
        </h3>
        <div className="flex items-center gap-4">
          {[
            { color: '#1a4fa0', label: 'Stock Level',   dash: false },
            { color: '#2ec4b6', label: 'Items Issued',  dash: false },
          ].map(l => (
            <div key={l.label} className="flex items-center gap-1.5">
              <svg width="18" height="8">
                <line x1="0" y1="4" x2="18" y2="4" stroke={l.color} strokeWidth="2"
                  strokeDasharray={l.dash ? '4 2' : '0'} />
              </svg>
              <span className="text-xs text-gray-500">{l.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="h-[220px] sm:h-[240px] md:h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
            <XAxis dataKey="date" tick={{ fontSize: 10, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 10, fill: '#94a3b8' }} axisLine={false} tickLine={false}
              domain={[0, 500]} ticks={[0, 100, 200, 300, 400, 500]} />
            <Tooltip content={<CustomTooltip />} />
            <Line type="monotone" dataKey="stock" name="Stock Level"
              stroke="#1a4fa0" strokeWidth={2}
              dot={{ r: 4, fill: '#fff', stroke: '#1a4fa0', strokeWidth: 2 }} />
            <Line type="monotone" dataKey="issued" name="Items Issued"
              stroke="#2ec4b6" strokeWidth={2}
              dot={{ r: 4, fill: '#fff', stroke: '#2ec4b6', strokeWidth: 2 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Footer */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mt-3 pt-3 border-t border-gray-100">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="bg-blue-100 text-[#1D4ED8] text-[10px] font-normal px-3 py-1 rounded-full">
            Avg: 312 Units
          </span>
          <span className="bg-[#6DB8E880] text-[#1D4ED8] text-[10px] font-normal px-3 py-1 rounded-full">
            Avg: 145 Issued
          </span>
        </div>
        <span className="text-[10px] text-gray-400">Last updated: Today, 10:45 AM</span>
      </div>
    </div>
  );
}