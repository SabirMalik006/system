import React from 'react';
import {
  PieChart, Pie, Cell,
  LineChart, Line, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

const ratingData = [
  { name: 'Excellent', value: 40, color: '#1a3a8f' },
  { name: 'Good',      value: 30, color: '#3b82f6' },
  { name: 'Average',   value: 20, color: '#60a5fa' },
  { name: 'Poor',      value: 10, color: '#bfdbfe' },
];

const trendData = [
  { month: 'Jan', score: 78 },
  { month: 'Feb', score: 82 },
  { month: 'Mar', score: 75 },
  { month: 'Apr', score: 88 },
  { month: 'May', score: 84 },
  { month: 'Jun', score: 92 },
  { month: 'Jul', score: 87 },
  { month: 'Aug', score: 94 },
];

export default function RatingAndTrend() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

      {/* Rating Distribution */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
        <h3 className="text-xs font-bold text-gray-800 mb-4">Rating Distribution</h3>
        <div className="flex items-center gap-4">
          <div className="relative w-[110px] h-[110px] flex-shrink-0">
            <PieChart width={110} height={110}>
              <Pie data={ratingData} cx={50} cy={50} innerRadius={32} outerRadius={52}
                paddingAngle={2} dataKey="value" startAngle={90} endAngle={-270}>
                {ratingData.map((e, i) => <Cell key={i} fill={e.color} />)}
              </Pie>
            </PieChart>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-lg font-black text-gray-900 leading-none">124</div>
              <div className="text-[8px] text-gray-400">Total</div>
            </div>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            {ratingData.map((d, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full" style={{ background: d.color }} />
                  <span className="text-[11px] text-gray-600">{d.name}</span>
                </div>
                <span className="text-[11px] font-bold text-gray-800">{d.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Score Trend */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
        <h3 className="text-xs font-bold text-gray-800 mb-4">Score Trend</h3>
        <div className="h-[120px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trendData} margin={{ top: 5, right: 5, left: -30, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 9, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 9, fill: '#94a3b8' }} axisLine={false} tickLine={false} domain={[60, 100]} />
              <Tooltip contentStyle={{ borderRadius: 8, border: '1px solid #e2e8f0', fontSize: 10 }} />
              <Line type="monotone" dataKey="score" stroke="#1a3a8f" strokeWidth={2}
                dot={{ r: 3, fill: '#fff', stroke: '#1a3a8f', strokeWidth: 2 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}