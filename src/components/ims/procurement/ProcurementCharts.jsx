import React from 'react';
import {
  ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, PieChart, Pie, Cell,
} from 'recharts';

const volumeData = [
  { month: 'Jan', requests: 20, po: 20 },
  { month: 'Feb', requests: 22, po: 22 },
  { month: 'Mar', requests: 25, po: 25 },
  { month: 'Apr', requests: 28, po: 28 },
  { month: 'May', requests: 30, po: 30 },
  { month: 'Jun', requests: 27, po: 27 },
  { month: 'Jul', requests: 32, po: 32 },
  { month: 'Aug', requests: 30, po: 30 },
  { month: 'Sep', requests: 28, po: 28 },
  { month: 'Oct', requests: 35, po: 35 },
  { month: 'Nov', requests: 33, po: 33 },
  { month: 'Dec', requests: 38, po: 38 },
];

const deptData = [
  { name: 'Plumbing',   value: 72, pct: '29%', color: '#0891B2' },
  { name: 'Electrical', value: 68, pct: '27%', color: '#2196F3' },
  { name: 'Painting',   value: 59, pct: '24%', color: '#1A3A5C' },
  { name: 'Carpentry',  value: 49, pct: '20%', color: '#1565C0' },
];

const statusData = [
  { name: 'Approved', value: 189, color: '#1A8FA0' },
  { name: 'Pending',  value: 34,  color: '#1565C0' },
  { name: 'Rejected', value: 25,  color: '#640404' },
];

export default function ProcurementCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

      {/* Procurement Volume & PO Value */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-[#1A3A5C]">Procurement Volume & PO Value</h3>
          <div className="flex items-center gap-1.5">
            <button className="text-[10px] font-medium px-3 py-1 rounded-md bg-blue-100 text-blue-700">Volume</button>
            <button className="text-[10px] font-medium px-3 py-1 rounded-md bg-[#1A3A5C4D] text-[#1A3A5C]">PO Value</button>
          </div>
        </div>
        <div className="flex items-center gap-4 mb-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded bg-[#2563EB] inline-block" />
            <span className="text-xs text-gray-500">Requests</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg width="16" height="8"><line x1="0" y1="4" x2="16" y2="4" stroke="#1e40af" strokeWidth="2"/></svg>
            <span className="text-xs text-gray-500">PO Value (Rsk)</span>
          </div>
        </div>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={volumeData} margin={{ top: 5, right: 5, left: -25, bottom: 0 }} barCategoryGap="20%">
              <defs>
                <linearGradient id="volGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3973f0" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="#227cf3" stopOpacity={0.3} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#dadfe3" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 10, fill: '#000000' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 10, fill: '#000000' }} axisLine={false} tickLine={false} domain={[0, 45]} ticks={[0,10,20,30,40]} />
              <Tooltip contentStyle={{ borderRadius: 8, border: '1px solid #e2e8f0', fontSize: 11 }} />
              <Bar dataKey="requests" fill="url(#volGrad)" radius={[3, 3, 0, 0]} barSize={22} />
              <Line 
                type="monotone" 
                dataKey="po" 
                stroke="#1e40af" 
                strokeWidth={2} 
                dot={{ r: 4, fill: '#fff', stroke: '#1e40af', strokeWidth: 2.5 }}
                activeDot={{ r: 6 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Requests by Department */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-sm font-semibold text-[#1A3A5C]">Requests by Department</h3>
          <button className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-[#C1DDF8] text-white">This Year</button>
        </div>
        <div className="flex items-center gap-4">
          {/* Donut */}
          <div className="relative w-[120px] h-[120px] flex-shrink-0">
            <PieChart width={120} height={120}>
              <Pie data={deptData} cx={55} cy={55} innerRadius={38} outerRadius={58} paddingAngle={2} dataKey="value" startAngle={90} endAngle={-270}>
                {deptData.map((d, i) => <Cell key={i} fill={d.color} />)}
              </Pie>
            </PieChart>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-xl font-base text-[#1A3A5C] leading-none">248</div>
              <div className="text-[9px] text-gray-400">TOTAL</div>
            </div>
          </div>
          {/* Legend */}
          <div className="flex flex-col gap-2 flex-1">
            {deptData.map((d, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-xs inline-block" style={{ background: d.color }} />
                  <span className="text-xs text-gray-600">{d.name}</span>
                </div>
                <div className="text-xs text-gray-900 font-semibold">
                  {d.value} <span className="text-gray-400 font-normal">{d.pct}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Status Distribution */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-sm font-medium text-[#1A3A5C]">Status Distribution</h3>
          <button className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-[#1A8FA0] text-white">This Year</button>
        </div>
        <div className="flex items-center gap-4">
          {/* Donut */}
          <div className="relative w-[120px] h-[120px] flex-shrink-0">
            <PieChart width={120} height={120}>
              <Pie data={statusData} cx={55} cy={55} innerRadius={38} outerRadius={58} paddingAngle={2} dataKey="value" startAngle={90} endAngle={-270}>
                {statusData.map((d, i) => <Cell key={i} fill={d.color} />)}
              </Pie>
            </PieChart>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-lg font-base text-[#1A3A5C] leading-none">76%</div>
              <div className="text-[9px] text-gray-400">APPROVED</div>
            </div>
          </div>
          {/* Legend */}
          <div className="flex flex-col gap-2.5 flex-1">
            {statusData.map((d, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-xs inline-block" style={{ background: d.color }} />
                  <span className="text-xs text-gray-600">{d.name}</span>
                </div>
                <span className="text-xs font-bold text-gray-900">{d.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}