import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, AreaChart, Area, Cell,
} from 'recharts';

const forecastData = [
  { month: 'Jan', demand: 80 },
  { month: 'Feb', demand: 95 },
  { month: 'Mar', demand: 110 },
  { month: 'Apr', demand: 128 },
  { month: 'May', demand: 145 },
  { month: 'Jun', demand: 162 },
  { month: 'Jul', demand: 178 },
  { month: 'Aug', demand: 195 },
  { month: 'Sep', demand: 215 },
  { month: 'Oct', demand: 238 },
  { month: 'Nov', demand: 260 },
  { month: 'Dec', demand: 285 },
];

const perfRatings = [
  { name: 'Outsta..', value: 142, color: '#0f172a' },
  { name: 'Exceeds', value: 328, color: '#1e3a8a' },
  { name: 'Meets', value: 516, color: '#3b82f6' },
  { name: 'Below', value: 170, color: '#60a5fa' },
  { name: 'Unsat..', value: 35, color: '#bfdbfe' },
];

const employeeStatus = [
  { label: 'Active', value: 6563, color: '#1e3a8a' },
  { label: 'On Leave', value: 135, color: '#3b82f6' },
  { label: 'On Training', value: 83, color: '#93c5fd' },
];

const personnelByUnit = [
  { unit: 'CMES COMKAR', count: 2464, max: 3000 },
  { unit: 'CMES COMLOG', count: 1675, max: 3000 },
  { unit: 'CMES ISLD/LHR', count: 1355, max: 3000 },
  { unit: 'CMES COMPAK', count: 921, max: 3000 },
  { unit: 'CMES COMCOAST', count: 550, max: 3000 },
  { unit: 'CMES ORMARA', count: 509, max: 3000 },
];

const completionItems = [
  { label: 'Building Elec', pct: 90, color: '#3b82f6' },
  { label: 'Plumber', pct: 87, color: '#3b82f6' },
  { label: 'AC & Ref', pct: 82, color: '#3b82f6' },
  { label: 'Carpenter', pct: 78, color: '#1e3a8a' },
  { label: 'Mason & Tile Fixer', pct: 98, color: '#3b82f6' },
  { label: 'Lineman Course', pct: 73, color: '#3b82f6' },
  { label: 'Meter Reader', pct: 96, color: '#3b82f6' },
];

export default function WorkforceMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

      {/* ── COLUMN 1 ── */}
      <div className="flex flex-col gap-5">
        {/* Workforce Complain Resolution Time */}
        <div className="bg-white rounded-[20px] shadow-sm p-5 border-2 border-blue-500 h-[220px] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-[13px] font-bold text-[#1e293b]">Workforce Complain resolution time</h3>
              <div className="flex flex-col items-end">
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">STATUS</span>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span className="text-[9px] font-bold text-green-600 tracking-wider">Optimal</span>
                </div>
              </div>
            </div>
            <div className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-3">ANALYSIS</div>

            {/* Legend */}
            <div className="flex items-center gap-4 mb-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span className="text-[9px] text-gray-600 font-medium">Excellent</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#1e293b]" />
                <span className="text-[9px] text-gray-600 font-medium">Satisfactory</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-900" />
                <span className="text-[9px] text-gray-600 font-medium">Below Average</span>
              </div>
            </div>
          </div>

          {/* Bar chart visual */}
          <div className="flex items-end gap-5 justify-center mt-auto">
            <div className="flex flex-col items-center">
              <span className="text-[15px] font-black text-gray-900 mb-1">80%</span>
              <div className="w-[45px] h-[75px] rounded-t-lg bg-cyan-400" />
              <span className="text-[8px] text-gray-500 font-medium mt-1.5 uppercase">EXCELLENT</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[13px] font-black text-gray-800 mb-1">15%</span>
              <div className="w-[45px] h-[35px] rounded-t-lg bg-[#1e293b]" />
              <span className="text-[8px] text-gray-500 font-medium mt-1.5 uppercase">SATISFACTORY</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[11px] font-black text-gray-700 mb-1">5%</span>
              <div className="w-[45px] h-[15px] rounded-t-lg bg-blue-900" />
              <span className="text-[8px] text-gray-500 font-medium mt-1.5 uppercase">AVERAGE</span>
            </div>
          </div>
        </div>

        {/* Training Completion */}
        <div className="bg-white rounded-[20px] border border-gray-100 shadow-sm p-6 flex-1">
          <h3 className="text-[13px] font-bold text-[#1e293b] mb-1">Training Completion</h3>
          <p className="text-[10px] font-medium text-blue-500 mb-5">By Program - Last 30 days</p>
          <div className="flex flex-col gap-4">
            {completionItems.map((item, i) => (
              <div key={i}>
                <div className="flex justify-between items-end mb-1">
                  <span className="text-[11px] text-blue-700 font-bold">{item.label}</span>
                  <span className="text-[11px] font-black text-blue-400">{item.pct}%</span>
                </div>
                <div className="h-1 bg-[#f1f5f9] rounded-full overflow-hidden">
                  <div className="h-full rounded-full"
                    style={{ width: `${item.pct}%`, background: item.color }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── COLUMN 2 ── */}
      <div className="flex flex-col gap-5">
        {/* Workforce Demand Forecast */}
        <div className="bg-white rounded-[20px] border border-gray-100 shadow-sm p-6 h-[220px] flex flex-col">
          <div className="flex items-center justify-between mb-0.5">
            <h3 className="text-[13px] font-bold text-[#1e293b]">Workforce Demand Forecast</h3>
            <span className="text-[10px] bg-blue-500 text-white font-bold px-2 py-1 rounded-md shadow-sm">
              ↑ +38 Personnel Required
            </span>
          </div>
          <p className="text-[10px] text-blue-400 font-medium mb-3">Next 12 Months Projection</p>
          <div className="flex-1 mt-2">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={forecastData} margin={{ top: 10, right: 0, left: -25, bottom: 0 }}>
                <defs>
                  <linearGradient id="demGrad1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                <XAxis dataKey="month" tick={{ fontSize: 9, fill: '#94a3b8', fontWeight: 600 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 8, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ borderRadius: 8, border: '1px solid #e2e8f0', fontSize: 10 }} />
                <Area type="monotone" dataKey="demand" stroke="#3b82f6" strokeWidth={2.5}
                  fill="url(#demGrad1)" dot={{ r: 3, fill: '#fff', stroke: '#3b82f6', strokeWidth: 2 }} activeDot={{ r: 5 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Performance Ratings */}
        <div className="bg-white rounded-[20px] border border-gray-100 shadow-sm p-6 flex-1 flex flex-col">
          <h3 className="text-[13px] font-bold text-[#1e293b] mb-1">Performance Ratings</h3>
          <p className="text-[10px] text-blue-400 font-medium mb-4">Current evaluation cycle</p>
          <div className="flex-1 min-h-[160px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={perfRatings} barSize={28} margin={{ top: 20, right: 0, left: -25, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                <XAxis dataKey="name" tick={{ fontSize: 9, fontWeight: 600, fill: '#94a3b8' }} axisLine={false} tickLine={false} dy={5} />
                <YAxis tick={{ fontSize: 8, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: 8, border: '1px solid #e2e8f0', fontSize: 10 }} />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {perfRatings.map((p, i) => (
                    <Cell key={i} fill={p.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* ── COLUMN 3 ── */}
      <div className="flex flex-col gap-5">
        {/* Employee Status donut */}
        <div className="bg-white rounded-[20px] border border-[#2478B5] shadow-sm p-6 flex flex-col">
          <h3 className="text-[13px] font-bold text-[#1e293b] mb-1">Employee Status (figures)</h3>
          <p className="text-[10px] text-gray-400 mb-6">Current breakdown</p>

          <div className="flex flex-col gap-6">
            {/* Donut Chart - Larger Size */}
            <div className="relative w-40 h-40 mx-auto flex-shrink-0">
              {/* Larger Circular Donut */}
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                <circle cx="50" cy="50" r="42" fill="none" stroke="#f1f5f9" strokeWidth="14" />
                <circle cx="50" cy="50" r="42" fill="none" stroke="#1e3a8a" strokeWidth="14"
                  strokeDasharray={`${2 * Math.PI * 42 * 0.968} ${2 * Math.PI * 42}`} />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center pt-1">
                <span className="text-[22px] font-black text-[#1e293b] leading-none tracking-tight">6,781</span>
                <span className="text-[10px] font-medium text-gray-400 mt-0.5">Employees</span>
              </div>
            </div>

            {/* Status List */}
            <div className="flex flex-col gap-3 flex-1">
              {employeeStatus.map((s, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: s.color }} />
                    <span className="text-[11px] font-medium text-gray-600">{s.label}</span>
                  </div>
                  <span className="text-[11px] font-bold text-blue-600">{s.value.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Personnel by CMES */}
        <div className="bg-white rounded-[20px] border border-gray-100 shadow-sm p-6 flex-1 flex flex-col">
          <h3 className="text-[13px] font-bold text-[#1e293b] mb-1">Personnel by CMES</h3>
          <p className="text-[10px] text-gray-400 mb-5">Distribution across office locations</p>
          <div className="flex flex-col gap-4 mt-2">
            {personnelByUnit.map((u, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-[10px] font-bold text-blue-700 w-[85px] flex-shrink-0 tracking-wide">{u.unit}</span>
                <div className="flex-1 h-[14px] bg-[#f1f5f9] overflow-hidden rounded-r-md">
                  <div className="h-full bg-blue-600 rounded-r-md shadow-sm"
                    style={{ width: `${(u.count / u.max) * 100}%` }} />
                </div>
                <span className="text-[10px] font-bold text-gray-500 w-8 text-right flex-shrink-0">
                  {u.count}
                </span>
              </div>
            ))}
          </div>
          {/* X axis labels */}
          <div className="flex justify-between text-[9px] font-bold tracking-wider text-gray-400 mt-4 pl-[95px] pr-8">
            <span>0</span>
            <span>850</span>
            <span>1500</span>
            <span>3000</span>
          </div>
        </div>
      </div>

    </div>
  );
}