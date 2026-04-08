import React from 'react';

const categories = [
  { label: 'Tools',      value: 96, color: '#125964' },
  { label: 'Electrical', value: 90, color: '#336AA1' },
  { label: 'Sanitary',   value: 87, color: '#00478C' },
  { label: 'Paints',     value: 98, color: '#58C3D2' },
];

// SVG Parameters
const CX = 80;
const CY = 80;

function polarToCartesian(cx, cy, r, angleDeg) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function arcPath(cx, cy, r, startAngle, endAngle) {
  const s = polarToCartesian(cx, cy, r, startAngle);
  const e = polarToCartesian(cx, cy, r, endAngle);
  const large = endAngle - startAngle > 180 ? 1 : 0;
  return `M ${s.x} ${s.y} A ${r} ${r} 0 ${large} 1 ${e.x} ${e.y}`;
}

export default function ItemCategoryHealth() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 md:p-6 mb-6">
      
      {/* Title */}
      <div className="text-[11px] font-bold tracking-[0.10em] uppercase text-[#1E293B] mb-4">
        Item Category Health
      </div>

      {/* Body: donut + cards */}
      <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8">

        {/* ── Multi-ring Donut Chart ── */}
        <div className="relative flex-shrink-0 mx-auto lg:mx-0" style={{ width: 200, height: 170 }}>
          <svg width="160" height="160" viewBox="0 0 160 160" className="mx-auto lg:mx-0">
            {[
              { radius: 67, pct: 0.54, color: '#1a4fa0', label: 'Tools' },
              { radius: 56, pct: 0.60, color: '#2563eb', label: 'Electrical' },
              { radius: 45, pct: 0.67, color: '#38bdf8', label: 'Sanitary' },
              { radius: 34, pct: 0.61, color: '#2ec4b6', label: 'Paints' },
            ].map((ring, i) => {
              const trackEnd = 300;
              const fillEnd = ring.pct * 300;
              return (
                <g key={i}>
                  {/* Background Track */}
                  <path
                    d={arcPath(CX, CY, ring.radius, 0, trackEnd)}
                    fill="none"
                    stroke="#f1f5f9"
                    strokeWidth="8.5"
                    strokeLinecap="round"
                  />
                  {/* Filled Arc */}
                  <path
                    d={arcPath(CX, CY, ring.radius, 0, fillEnd)}
                    fill="none"
                    stroke={ring.color}
                    strokeWidth="8.5"
                    strokeLinecap="round"
                  />
                </g>
              );
            })}

            {/* Center Text */}
            <g>
              <circle cx={CX} cy={CY} r="32" fill="#ffffff" />
              <text 
                x={CX} 
                y={CY - 6} 
                textAnchor="middle"
                fontSize="20" 
                fontWeight="700" 
                fill="#0f172a"
              >
                92%
              </text>
              <text 
                x={CX} 
                y={CY + 7} 
                textAnchor="middle"
                fontSize="8.4" 
                fill="#64748b" 
                fontWeight="500"
              >
                IMS Status
              </text>
              <text 
                x={CX} 
                y={CY + 20} 
                textAnchor="middle"
                fontSize="8" 
                fill="#16a34a" 
                fontWeight="600"
              >
                ↓4.2% today
              </text>
            </g>
          </svg>

          {/* Ring Labels - Responsive positioning */}
          <div className="absolute top-4 right-0 lg:right-auto lg:left-[148px] flex flex-col gap-3 lg:gap-[13.5px]">
            {[
              { color: '#1a4fa0', label: 'Tools' },
              { color: '#2563eb', label: 'Electrical' },
              { color: '#38bdf8', label: 'Sanitary' },
              { color: '#2ec4b6', label: 'Paints' },
            ].map((ring, i) => (
              <div key={i} className="flex items-center gap-2 whitespace-nowrap">
                <span 
                  className="ml-2 w-[6px] h-[6px] rounded-full flex-shrink-0"
                  style={{ background: ring.color }}
                />
                <span className="text-[9.5px] text-gray-500 font-medium">
                  {ring.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Mini Category Cards - Responsive Grid */}
        <div className="flex-1 w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {categories.map((cat, i) => (
              <div 
                key={i} 
                className="bg-slate-50 rounded-xl p-4 md:p-5"
              >
                <div className="text-xs text-gray-500 mb-2 font-medium">
                  {cat.label}
                </div>
                <div className="text-3xl md:text-[28px] font-bold text-slate-900 mb-4 tracking-tight">
                  {cat.value}%
                </div>
                <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-700"
                    style={{ 
                      background: cat.color, 
                      width: `${cat.value}%` 
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}