import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { MoreHorizontal } from 'lucide-react';

const barData = [
  { month: 'Jan', in: 420, out: 310 }, { month: 'Feb', in: 380, out: 290 },
  { month: 'Mar', in: 510, out: 400 }, { month: 'Apr', in: 460, out: 350 },
  { month: 'May', in: 540, out: 420 }, { month: 'Jun', in: 490, out: 380 },
  { month: 'Jul', in: 620, out: 510 }, { month: 'Aug', in: 580, out: 440 },
  { month: 'Sep', in: 440, out: 360 }, { month: 'Oct', in: 500, out: 390 },
  { month: 'Nov', in: 560, out: 430 }, { month: 'Dec', in: 640, out: 500 },
];

const pieData = [
  { name: 'Electronics', value: 32, color: '#1a6cb5' },
  { name: 'Auto Parts', value: 28, color: '#2ec4b6' },
  { name: 'Industrial', value: 22, color: '#0891b2' },
  { name: 'Others', value: 18, color: '#e2e8f0' },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-2 shadow-lg">
      <div className="font-semibold text-xs mb-1">{label}</div>
      {payload.map((p, i) => (
        <div key={i} className="flex items-center gap-1.5 text-xs">
          <span className="w-2 h-2 rounded-sm inline-block" style={{ background: p.fill }} />
          <span className="text-gray-500">{p.name}:</span>
          <span className="font-semibold">{p.value}</span>
        </div>
      ))}
    </div>
  );
};

export default function StockMovement() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-3 sm:p-4 mb-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3.5">
        <div>
          <h3 className="text-sm font-bold text-gray-900">Stock Movement Breakdown (In vs Out)</h3>
          <div className="text-xs text-gray-400 mt-0.5">Monthly comparison · All categories</div>
        </div>
        <div className="flex items-center justify-between sm:justify-end gap-3">
          <div className="flex items-center gap-2">
            {[{ color: '#1a6cb5', label: 'Stock In' }, { color: '#2ec4b6', label: 'Stock Out' }].map(l => (
              <div key={l.label} className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-sm inline-block" style={{ background: l.color }} />
                <span className="text-xs text-gray-500">{l.label}</span>
              </div>
            ))}
          </div>
          <button className="bg-transparent text-gray-400 flex items-center"><MoreHorizontal size={16} /></button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:flex-1 h-[200px] sm:h-[220px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData} barSize={10} barGap={3}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: '#f8fafc' }} />
              <Bar dataKey="in" name="Stock In" fill="#1a6cb5" radius={[3, 3, 0, 0]} />
              <Bar dataKey="out" name="Stock Out" fill="#2ec4b6" radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="w-full md:w-[200px] flex flex-col items-center justify-center mt-4 md:mt-0">
          <div className="relative w-[120px] h-[120px] sm:w-[140px] sm:h-[140px]">
            <PieChart width={140} height={140}>
              <Pie data={pieData} cx={65} cy={65} innerRadius={45} outerRadius={65} paddingAngle={3} dataKey="value" startAngle={90} endAngle={-270}>
                {pieData.map((entry, index) => <Cell key={index} fill={entry.color} />)}
              </Pie>
            </PieChart>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-lg sm:text-xl font-bold text-gray-900 leading-none">92%</div>
              <div className="text-[10px] text-gray-400">Accuracy</div>
            </div>
          </div>
          <div className="mt-2 w-full">
            {pieData.map(d => (
              <div key={d.name} className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-sm inline-block" style={{ background: d.color }} />
                  <span className="text-[10px] sm:text-[11px] text-gray-500">{d.name}</span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-semibold text-gray-900">{d.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}