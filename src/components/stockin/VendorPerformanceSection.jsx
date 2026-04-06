import React from 'react';
import { TrendingUp, Download, Zap } from 'lucide-react';

const CX = 160, CY = 160;

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

function VendorDonut() {
  const pct = 0.924;
  const rings = [
    { r: 150, w: 20, trackColor: '#E9F4FE', pct: 0.85 },
    { r: 120, w: 20, trackColor: '#38BDF8', pct: 0.90 },
    { r: 90,  w: 20, trackColor: '#E9F4FE', pct: pct  },
  ];

  return (
    <svg width="320" height="320" viewBox="0 0 320 320">
      {/* Decorative outer glow ring */}
     

      {rings.map((ring, i) => {
        const trackEnd = 359;
        const fillEnd = ring.pct * 330;
        return (
          <g key={i}>
            <path d={arcPath(CX, CY, ring.r, 0, trackEnd)} fill="none" stroke={ring.trackColor} strokeWidth={ring.w} strokeLinecap="round" />
            <path d={arcPath(CX, CY, ring.r, 0, fillEnd)} fill="none" stroke={ring.fillColor} strokeWidth={ring.w} strokeLinecap="round" />
          </g>
        );
      })}

      {/* Center */}
      <text x={CX} y={CY - 16} textAnchor="middle" fontSize="10" fill="#94a3b8" fontFamily="inherit" letterSpacing="0.08em">SYSTEM AGGREGATE</text>
      <text x={CX} y={CY + 20} textAnchor="middle" fontSize="36" fontWeight="700" fill="#0f172a" fontFamily="inherit">92.4%</text>
      <text x={CX} y={CY + 40} textAnchor="middle" fontSize="12" fill="#16a34a" fontFamily="inherit" fontWeight="600">↗+4.2%</text>
    </svg>
  );
}

const efficiencyRanking = [
  { rank: 1, name: 'Global Log',   pct: 98, color: '#06B6D4' },
  { rank: 2, name: 'SafetyFirst',  pct: 92, color: '#0F5FB5' },
  { rank: 3, name: 'Industrial T.', pct: 84, color: '#06B6D4' },
];

const vendorCategories = [
  { name: 'Logistics',   pct: 35, color: '#2ec4b6' },
  { name: 'Hardware',    pct: 25, color: '#1a4fa0' },
  { name: 'Consulting',  pct: 20, color: '#0f172a' },
  { name: 'Other',       pct: 20, color: '#94a3b8' },
];

// Mini sparkline SVG
function Sparkline({ color = '#2563eb' }) {
  const pts = [0,8,3,12,7,5,14,10,6,16].map((y, x) => `${x * 12},${20 - y}`).join(' ');
  return (
    <svg width="100" height="22" viewBox="0 0 108 22">
      <polyline points={pts} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function VendorPerformanceSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

      {/* ── Left: Top Vendors Performance ── */}
      <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Top Vendors Performance</h2>
            <p className="text-xs text-gray-400 mt-1">Real-time composite efficiency across primary supply channels</p>
          </div>
          <span className="text-xs font-bold text-gray-500 border border-gray-200 rounded- px-3 py-1.5 rounded-lg tracking-wide">
            LAST 30 DAYS
          </span>
        </div>

        {/* Donut + floating cards */}
        <div className="relative flex items-center justify-center">
          <VendorDonut />

          {/* RANK #1 floating card — top right */}
          <div className="absolute top-6 right-4 bg-white border border-gray-100 rounded-xl shadow-md p-3 w-48">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">RANK #1</span>
              <span className="text-gray-300 text-xs">···</span>
            </div>
            <div className="font-bold text-gray-900 text-sm mt-1">Global Log Ltd</div>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-2xl font-black text-gray-900">98%</span>
              <span className="text-[10px] text-gray-400 font-medium">RELIABILITY SCORE</span>
            </div>
            <div className="mt-2">
              <Sparkline color="#2563eb" />
            </div>
          </div>

          {/* VOL. LEADER floating card — bottom left */}
          <div className="absolute bottom-4 left-2 bg-white border border-gray-100 rounded-xl shadow-md p-3 w-44">
            <div className="text-[10px] font-bold text-gray-400 tracking-wider mb-1">VOL. LEADER</div>
            <div className="font-bold text-gray-900 text-sm">Fasten-It Ltd</div>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-2xl font-black text-gray-900">2.1<span className="text-sm font-bold">d</span></span>
              <span className="text-[10px] text-gray-400">AVG. LEAD TIME</span>
            </div>
            <div className="mt-2">
              <Sparkline color="#818cf8" />
            </div>
          </div>
        </div>
      </div>

      {/* ── Right column: Key Insights + Top Vendor Categories ── */}
      <div className="flex flex-col gap-4">

        {/* Key Insights card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm flex-1">
          <div className="flex items-center justify-between mb-4 border-b border-[#1E293B] p-3">
            <span className="text-[13px] font-bold text-[#94A3B8] mx-3 tracking-widest uppercase">Key Insights</span>
            <TrendingUp size={16} className="text-gray-400" />
          </div>

          <div className="mb-1 text-sm  text-[#94A3B8] mx-2 p-3">Monthly Avg. Efficiency</div>
          <div className="flex items-center justify-between mb-4 px-3 mx-2 border-b border-[#1E293B] pb-4">
            <span className="text-3xl font-black text-gray-900 font-medium">94.8%</span>
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
              <Zap size={14} className="text-green-500" />
            </div>
          </div>

          <div className="border-t border-gray-100 pt-4 mx-3 mb-3">
            <div className="text-[12px] font-bold text-[#0F172A] tracking-widest uppercase mb-3">Efficiency Ranking</div>
            <div className="flex flex-col gap-2.5">
              {efficiencyRanking.map((item) => (
                <div key={item.rank} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0" style={{ backgroundColor: item.color }}>
                      {item.rank}
                    </span>
                    <span className="text-sm text-gray-700 font-medium">{item.name}</span>
                  </div>
                  <span className="text-sm font-bold text-gray-900">{item.pct}%</span>
                </div>
              ))}
            </div>
          </div>

          <button className="w-full bg-blue-900 hover:bg-blue-800 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors">
            Download Full Report
          </button>
        </div>

        {/* Top Vendor Categories card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
          <h3 className="text-sm font-semibold text-[#1E60AF] mb-4">Top Vendor Categories</h3>
          <div className="flex flex-col gap-2.5">
            {vendorCategories.map((cat, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ background: cat.color }} />
                  <span className="text-sm text-[#1E60AF]">{cat.name}</span>
                </div>
                <span className="text-sm font-semibold text-[#1E60AF]">{cat.pct}%</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}