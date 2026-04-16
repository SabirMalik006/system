import React from 'react';
import { Calendar, User } from 'lucide-react';

const depts = [
  { label: 'CMES COMCOAST', val: '7.51%', color: '#3b82f6' },
  { label: 'CMES COMKAR', val: '41.38%', color: '#1e40af' },
  { label: 'CMES COMLOG', val: '15.85%', color: '#1a3b5c' },
  { label: 'CME COMPAK', val: '12.20%', color: '#1e3a8a' },
  { label: 'CME ISLD / LHR', val: '14.82%', color: '#2563eb' },
  { label: 'CMES ORMARA', val: '8.24%', color: '#60a5fa' },
];

const CX = 120, CY = 120, R_OUTER = 110, R_INNER = 65;

function polarToCartesian(cx, cy, r, angleDeg) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

export default function MesPersonnel() {
  return (
    <div className="bg-white rounded-[24px] shadow-sm p-6 flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[18px] font-bold text-[#1e293b]">MES Personnel</h2>
        <div className="flex items-center gap-1.5 bg-blue-50 text-blue-600 font-bold px-3 py-1.5 rounded-xl text-[11px]">
          <Calendar size={14} />
          Last 30 Days
        </div>
      </div>

      {/* Donut Chart visual - Larger Size */}
      <div className="flex justify-center mb-12">
        <div className="relative">
          <svg width="280" height="280" viewBox="0 0 240 240" className="overflow-visible">

            {/* Outer segments */}
            {depts.map((dept, i) => {
              const startAngle = i * 60;
              const endAngle = startAngle + 60;

              const s1 = polarToCartesian(CX, CY, R_OUTER, startAngle + 1);
              const e1 = polarToCartesian(CX, CY, R_OUTER, endAngle - 1);
              const s2 = polarToCartesian(CX, CY, R_INNER, endAngle - 1);
              const e2 = polarToCartesian(CX, CY, R_INNER, startAngle + 1);

              const d = `M ${s1.x} ${s1.y} A ${R_OUTER} ${R_OUTER} 0 0 1 ${e1.x} ${e1.y} L ${s2.x} ${s2.y} A ${R_INNER} ${R_INNER} 0 0 0 ${e2.x} ${e2.y} Z`;

              return (
                <path key={i} d={d} fill={dept.color} />
              );
            })}

            {/* Inner lines/tracks */}
            <circle cx={CX} cy={CY} r="58" fill="white" stroke="#e2e8f0" strokeWidth="2" />
            <circle cx={CX} cy={CY} r="52" fill="white" />

            {/* Inner Text */}
            <text x={CX} y={CY - 5} textAnchor="middle" fontSize="13" fill="#1e3b5e" fontWeight="800" letterSpacing="0.5">HEADQUARTER</text>
            <text x={CX} y={CY + 12} textAnchor="middle" fontSize="13" fill="#1e3b5e" fontWeight="800" letterSpacing="0.5">DW&CE</text>

            {/* User Icon placements on the arcs */}
            {depts.map((dept, i) => {
              const midAngle = (i * 60) + 30;
              const pt = polarToCartesian(CX, CY, 90, midAngle);
              return (
                <g key={`icon-${i}`}>
                  <circle cx={pt.x} cy={pt.y} r="14" fill="white" fillOpacity="0.2" />
                  <circle cx={pt.x} cy={pt.y} r="9" fill="white" />
                  <path d={`M${pt.x} ${pt.y}a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-4 5.5a4 4 0 0 1 8 0v.5h-8v-.5z`} fill={dept.color} />
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Grid of Legends - Moved down */}
      <div className="grid grid-cols-3 gap-y-10 gap-x-4 mb-8 px-4 mt-8">
        {depts.map((dept, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            {/* Legend Icon */}
            <div className="relative mb-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: dept.color }}>
                <User size={20} strokeWidth={2.5} />
              </div>
            </div>
            <div className="text-[11px] font-black leading-tight text-[#1e293b]">{dept.label}</div>
            <div className="text-[11px] font-medium text-gray-500 mt-1">{dept.val}</div>
            <div className="text-[10px] font-medium text-gray-400">Workforce</div>
          </div>
        ))}
      </div>

      {/* Footer Area - Moved down */}
     <div className="mt-auto flex flex-col sm:flex-row items-center justify-between gap-4 pt-6">
  <div className="flex items-center gap-3">
    <div className="flex items-center gap-1.5">
      <div className="w-2.5 h-2.5 rounded-sm bg-[#3b82f6]"></div>
      <span className="text-[9px] font-bold text-gray-500 tracking-wider whitespace-nowrap">ON DUTY</span>
    </div>
    <div className="flex items-center gap-1.5">
      <div className="w-2.5 h-2.5 rounded-sm bg-blue-100"></div>
      <span className="text-[9px] font-bold text-gray-400 tracking-wider whitespace-nowrap">STANDBY STAFF</span>
    </div>
  </div>
  <button className="bg-[#3b82f6] hover:bg-blue-600 text-white text-[10px] font-bold tracking-wider px-4 py-2 rounded-xl transition-colors uppercase whitespace-nowrap">
    View Personnel Details
  </button>
</div>
    </div>
  );
}