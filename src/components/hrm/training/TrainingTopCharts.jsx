import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, PieChart, Pie, Cell,
} from 'recharts';

const chartData = [
  { month: 'Jan', enrolled: 22, completed: 8, absent: 3 },
  { month: 'Feb', enrolled: 35, completed: 14, absent: 4 },
  { month: 'Mar', enrolled: 48, completed: 20, absent: 5 },
  { month: 'Apr', enrolled: 58, completed: 28, absent: 6 },
  { month: 'May', enrolled: 65, completed: 36, absent: 6 },
  { month: 'Jun', enrolled: 72, completed: 46, absent: 7 },
  { month: 'Jul', enrolled: 80, completed: 56, absent: 8 },
];

const enrollmentData = [
  { name: 'Completed', value: 241, color: '#1a3a8f' },
  { name: 'Enrolled', value: 387, color: '#60a5fa' },
  { name: 'Absent', value: 46, color: '#bfdbfe' },
];

const pieData = [
  { value: 62, color: '#1a3a8f' },
  { value: 24, color: '#1E88E5' },
  { value: 14, color: '#0C3188' },
];

const programsByCategory = [
  { label: 'Safety & Compliance', count: 98, pct: 98 },
  { label: 'Technical Skills', count: 84, pct: 84 },
  { label: 'HSE (Health, Safety, Env)', count: 57, pct: 57 },
  { label: 'Leadership Development', count: 62, pct: 62 },
  { label: 'Equipment Operation', count: 46, pct: 46 },
  { label: 'First Aid & Emergency', count: 40, pct: 40 },
];

export default function TrainingTopCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

      {/* ════════════════════════════════════
          1. Training Completion Trend
      ════════════════════════════════════ */}
      <div className="bg-white rounded-2xl border-2 border-[#2478B5] shadow-sm p-4">

        {/* Header */}
        <div className="flex items-start justify-between mb-1 ">
          <div>
            <h3 className="text-[13px] font-bold text-gray-900 leading-tight">
              Training Completion Trend
            </h3>
            <p className="text-[10px] text-gray-400 mt-0.5">
              Monthly enrolled vs completed · 2026
            </p>
          </div>
          <span className="text-[10px] font-bold bg-blue-600 text-white px-2 py-0.5 rounded-md">
            LIV
          </span>
        </div>

        {/* Chart */}
        <div className="h-[155px] mt-2">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{ top: 4, right: 4, left: -28, bottom: 0 }}
            >
              <defs>
                <linearGradient id="enrollGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#bfdbfe" stopOpacity={0.7} />
                  <stop offset="100%" stopColor="#bfdbfe" stopOpacity={0.05} />
                </linearGradient>
                <linearGradient id="compGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1a3a8f" stopOpacity={0.2} />
                  <stop offset="100%" stopColor="#1a3a8f" stopOpacity={0.01} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#f1f5f9"
                vertical={false}
              />
              <XAxis
                dataKey="month"
                tick={{ fontSize: 9, fill: '#94a3b8' }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 9, fill: '#94a3b8' }}
                axisLine={false}
                tickLine={false}
                ticks={[0, 20, 40, 60, 80, 100]}
                domain={[0, 100]}
              />
              <Tooltip
                contentStyle={{
                  borderRadius: 8,
                  border: '1px solid #e2e8f0',
                  fontSize: 10,
                }}
              />
              {/* Enrolled — wide light-blue filled area */}
              <Area
                type="monotone"
                dataKey="enrolled"
                stroke="#93c5fd"
                strokeWidth={1.5}
                fill="url(#enrollGrad)"
                dot={false}
              />
              {/* Completed — dark navy line with subtle fill */}
              <Area
                type="monotone"
                dataKey="completed"
                stroke="#1a3a8f"
                strokeWidth={2}
                fill="url(#compGrad)"
                dot={false}
              />
              {/* Absent — dashed thin gray line, no fill */}
              <Area
                type="monotone"
                dataKey="absent"
                stroke="#94a3b8"
                strokeWidth={1.5}
                strokeDasharray="4 3"
                fill="none"
                dot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 mt-2 ">
          {[
            { color: '#93c5fd', label: 'Enrolled', dashed: false },
            { color: '#1a3a8f', label: 'Completed', dashed: false },
            { color: '#94a3b8', label: 'Absent', dashed: true },
          ].map((l, i) => (
            <div key={i} className="flex items-center gap-1">
              <svg width="16" height="6">
                <line
                  x1="0" y1="3" x2="16" y2="3"
                  stroke={l.color}
                  strokeWidth={l.dashed ? 1.5 : 2}
                  strokeDasharray={l.dashed ? '4 3' : undefined}
                />
              </svg>
              <span className="text-[9px] text-gray-400">{l.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════
          2. Enrollment Status
      ════════════════════════════════════ */}
      <div className="bg-white rounded-2xl border-3 border-[#1E60AF] shadow-sm p-5">
        <h3 className="text-[13px] font-bold text-gray-900 leading-tight">
          Enrollment Status
        </h3>
        <p className="text-[10px] text-gray-400 mb-5">All programs · Feb 2026</p>

        <div className="flex items-center gap-5">

          {/* Donut chart */}
          <div className="relative flex-shrink-0" style={{ width: 148, height: 148 }}>
            <PieChart width={148} height={148}>
              <Pie
                data={pieData}
                cx={70}
                cy={70}
                innerRadius={46}
                outerRadius={70}
                paddingAngle={2}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
              >
                {pieData.map((e, i) => (
                  <Cell key={i} fill={e.color} />
                ))}
              </Pie>
            </PieChart>
            {/* Center label */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-[22px] font-black text-gray-900 leading-none">62%</span>
              <span className="text-[9px] text-gray-400 mt-0.5">Completion</span>
            </div>
          </div>

          {/* Right side legend — dot + name + bold count */}
          <div className="flex flex-col gap-4 flex-1 ">
            {enrollmentData.map((d, i) => (
              <div key={i} className="flex items-center gap-2 border-2 border-[#2478B5] p-2 rounded-md">
                <span
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ background: d.color }}
                />
                <div>
                  <p className="text-[10px] text-gray-400 leading-none mb-0.5">{d.name}</p>
                  <p className="text-[18px] font-extrabold text-gray-900 leading-none">{d.value}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ════════════════════════════════════
          3. Programs by Category
      ════════════════════════════════════ */}
      <div
        className="rounded-2xl border border-gray-100 shadow-sm p-4"
        style={{
          background: 'linear-gradient(135deg, #1E4D7B, #1E4D7B)'
        }}
      >
        <h3 className="text-[13px] font-bold text-white leading-tight">
          Programs by Category
        </h3>
        <p className="text-[10px] text-blue-200 mb-4">Participant enrollment count</p>

        <div className="flex flex-col gap-3.5">
          {programsByCategory.map((p, i) => (
            <div key={i}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] text-blue-100 font-medium leading-tight truncate pr-2">
                  {p.label}
                </span>
                <span className="text-[11px] font-bold text-white flex-shrink-0">
                  {p.count}
                </span>
              </div>
              <div className="h-1.5 bg-white rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${p.pct}%`,
                    background: '#1A6FC4',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}