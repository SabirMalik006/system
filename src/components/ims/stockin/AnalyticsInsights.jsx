import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, ComposedChart } from 'recharts';
import { ChevronDown } from 'lucide-react';

const weekData = [
  { day: 'MON', volume: 55 },
  { day: 'TUE', volume: 42 },
  { day: 'WED', volume: 72 },
  { day: 'THU', volume: 80 },
  { day: 'FRI', volume: 90 },
  { day: 'SAT', volume: 38 },
  { day: 'SUN', volume: 60 },
];

const trendLine = [55, 42, 72, 80, 90, 38, 60];

const pieCategories = [
  { label: 'Safety',  pct: 35, color: '#0EA5E9' },
  { label: 'Tools',   pct: 45, color: '#0F63B7' },
  { label: 'Others',  pct: 20, color: '#0EA5E9' },
];

function polarToCartesian(cx, cy, r, angle) {
  const rad = ((angle - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function arcPath(cx, cy, r, start, end) {
  const s = polarToCartesian(cx, cy, r, start);
  const e = polarToCartesian(cx, cy, r, end);
  const large = end - start > 180 ? 1 : 0;
  return `M ${s.x} ${s.y} A ${r} ${r} 0 ${large} 1 ${e.x} ${e.y}`;
}

function CategoryDonut() {
  let startAngle = -90;
  const CX = 125, CY = 125, R_OUT = 105, R_IN = 70;
  const gap = 0;

  const slices = pieCategories.map(c => {
    const sweep = (c.pct / 100) * 360 - gap;
    const path = arcPath(CX, CY, (R_OUT + R_IN) / 2, startAngle, startAngle + sweep);
    const result = { ...c, path, startAngle, sweep };
    startAngle += sweep + gap;
    return result;
  });

  return (
    <div className="flex flex-col items-center">
      <svg width="250" height="250" viewBox="0 0 250 250">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#0EA5E9" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#0F63B7" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#0EA5E9" />
          </linearGradient>
        </defs>
        {slices.map((s, i) => {
          const sa = polarToCartesian(CX, CY, R_OUT, s.startAngle);
          const ea = polarToCartesian(CX, CY, R_OUT, s.startAngle + s.sweep);
          const sa2 = polarToCartesian(CX, CY, R_IN, s.startAngle + s.sweep);
          const ea2 = polarToCartesian(CX, CY, R_IN, s.startAngle);
          const large = s.sweep > 180 ? 1 : 0;
          const d = [
            `M ${sa.x} ${sa.y}`,
            `A ${R_OUT} ${R_OUT} 0 ${large} 1 ${ea.x} ${ea.y}`,
            `L ${sa2.x} ${sa2.y}` ,
            `A ${R_IN} ${R_IN} 0 ${large} 0 ${ea2.x} ${ea2.y}`,
            'Z'
          ].join(' ');
          return <path key={i} d={d} fill={`url(#gradient${i + 1})`} stroke={s.color} strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />;
        })}
        <text x={CX} y={CY + 2} textAnchor="middle" fontSize="32" fontWeight="800"   fill="#0f172a" fontFamily="inherit">125</text>
        <text x={CX} y={CY + 22} textAnchor="middle" fontSize="10" fill="#0F172A" fontFamily="inherit" letterSpacing="0.05em" fontWeight={600} >TOTAL ITEMS</text>
      </svg>
    </div>
  );
}

const CustomBarTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-2 shadow-lg text-xs">
      <div className="font-semibold mb-1">{label}</div>
      <div className="text-gray-500">Volume: <strong>{payload[0]?.value}</strong></div>
    </div>
  );
};

export default function AnalyticsInsights() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
      {/* Section header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 border-2 border-[#2B8CEE] rounded flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <rect x="1" y="5" width="2" height="6" rx="0.5" fill="#2563eb"/>
              <rect x="5" y="3" width="2" height="8" rx="0.5" fill="#2563eb"/>
              <rect x="9" y="1" width="2" height="10" rx="0.5" fill="#2563eb"/>
            </svg>
          </div>
          <span className="text-[#2B8CEE] font-semibold text-md">Analytics & Insights</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-400 font-medium">TIMEFRAME:</span>
          <button className="flex items-center gap-1 border border-gray-200 rounded-lg px-3 py-1.5 text-xs font-medium text-gray-600 bg-white hover:bg-gray-50">
            Last 7
            <ChevronDown size={12} />
          </button>
        </div>
      </div>

      {/* Two charts side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

        {/* Goods Receipt Trend */}
        <div className="border border-[#2B8CEE] rounded-xl p-4 lg:col-span-2">
          <div className="flex items-start justify-between mb-1">
            <div>
            <h3 className="font-bold text-[#0F172A] text-base">Goods Receipt Trend</h3>
              <div className="flex items-center gap-1 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
                <span className="text-xs text-[#94A3B8] ">Current Week Performance</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-blue-300 inline-block" />
                <span className="text-xs text-gray-500">Volume</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-blue-900 inline-block" />
                <span className="text-xs text-gray-500">Trend Line</span>
              </div>
            </div>
          </div>

          <div className="h-[220px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={weekData} margin={{ top: 10, right: 10, left: -30, bottom: 0 }} barCategoryGap="25%">
                <defs>
                  <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6B8CAE" stopOpacity={0.9} />
                    <stop offset="100%" stopColor="#C6D9F3" stopOpacity={0.3} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                <XAxis dataKey="day" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                <YAxis hide />
                <Tooltip content={<CustomBarTooltip />} cursor={{ fill: 'rgba(0,0,0,0.03)' }} />
                <Bar dataKey="volume" fill="url(#barGrad)" radius={[6, 6, 0, 0]} barSize={34} />
                <Line type="monotone" dataKey="volume" stroke="#1e3a5f" strokeWidth={2.5} dot={{ r: 4, fill: '#fff', stroke: '#1e3a5f', strokeWidth: 2 }} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Category Distribution */}
        <div className="border border-[#2B8CEE] rounded-xl p-4 lg:col-span-1">
          <h3 className="font-bold text-gray-900 text-base mb-0.5 ">Category Distribution</h3>
          <p className="text-xs text-gray-400 mb-2 ">Inventory Breakdown</p>

          <CategoryDonut />

          <div className="mt-2 flex flex-col gap-2">
            {pieCategories.map((c, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ background: c.color }} />
                  <span className="text-sm font-semibold text-[#0EA5E9] text-center">{c.label}</span>
                </div>
                <span className="text-sm font-bold" style={{ color: c.color }}>{c.pct}%</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}