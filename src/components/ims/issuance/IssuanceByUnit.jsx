import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Home, Star, Grid, List } from 'lucide-react';

const units = [
  { rank: '01', label: 'TOOLS',           pct: '45%', color: '#0e4d8a', icon: Home   },
  { rank: '02', label: 'CONSUMABLE',      pct: '42%', color: '#2ec4b6', icon: Star   },
  { rank: '03', label: 'SANITARY ITEMS',  pct: '30%', color: '#1a4fa0', icon: Grid   },
  { rank: '04', label: 'ELECTRICAL ITEMS',pct: '39%', color: '#1e3a5f', icon: List   },
];

// Donut segments
const CX = 110, CY = 110, R_OUT = 95, R_IN = 62;
const segments = [
  { pct: 0.25, color: '#1E4D7B', path: '/items' },
  { pct: 0.20, color: '#1A8FA0', path: '/procurement-management' },
  { pct: 0.20, color: '#163A50', path: '/reports' },
  { pct: 0.15, color: '#1A6FC4', path: '/stock-returns' },
  { pct: 0.20, color: '#1A6FC4', path: '/stock-returns' },
];

function polarToCartesian(cx, cy, r, angle) {
  const rad = ((angle - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function DonutChart() {
  const navigate = useNavigate();
  let startAngle = -90;
  const gap = 0;
  
  const slices = segments.map(s => {
    const sweep = s.pct * 360 - gap;
    const sa = polarToCartesian(CX, CY, R_OUT, startAngle);
    const ea = polarToCartesian(CX, CY, R_OUT, startAngle + sweep);
    const si = polarToCartesian(CX, CY, R_IN, startAngle + sweep);
    const ei = polarToCartesian(CX, CY, R_IN, startAngle);
    const large = sweep > 180 ? 1 : 0;
    const d = [
      `M ${sa.x} ${sa.y}`,
      `A ${R_OUT} ${R_OUT} 0 ${large} 1 ${ea.x} ${ea.y}`,
      `L ${si.x} ${si.y}`,
      `A ${R_IN} ${R_IN} 0 ${large} 0 ${ei.x} ${ei.y}`,
      'Z',
    ].join(' ');
    const result = { d, color: s.color, path: s.path };
    startAngle += sweep + gap;
    return result;
  });

  const handleCenterClick = () => {
    navigate('/dashboard');
  };

  const handleSegmentClick = (path) => {
    navigate(path);
  };

  // Images click handlers mapping
  const imageClickHandlers = {
    '/a1.svg': () => navigate('/stock-returns'),
    '/a3.svg': () => navigate('/reports'),
    '/a4.svg': () => navigate('/procurement-management'),
    '/a2.svg': () => navigate('/items'),
  };

  const handleImageClick = (imgPath) => {
    if (imageClickHandlers[imgPath]) {
      imageClickHandlers[imgPath]();
    }
  };

  return (
    <div className="flex justify-center my-2">
      <div className="relative">
        <svg width="220" height="220" viewBox="0 0 220 220">
          {/* Donut segments - Clickable */}
          {slices.map((s, i) => (
            <path 
              key={i} 
              d={s.d} 
              fill={s.color} 
              className="cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => handleSegmentClick(s.path)}
            />
          ))}
          
          {/* Center white circle - Clickable */}
          <circle 
            cx={CX} 
            cy={CY} 
            r={R_IN - 4} 
            fill="white" 
            className="cursor-pointer hover:opacity-80 transition-opacity"
            onClick={handleCenterClick}
          />
          
          {/* Center Text - Clickable */}
          <text 
            x={CX} 
            y={CY + 6} 
            textAnchor="middle" 
            fontSize="22" 
            fontWeight="800" 
            fill="#1A8FA0" 
            fontFamily="inherit"
            className="cursor-pointer hover:opacity-80 transition-opacity"
            onClick={handleCenterClick}
          >
            IMS
          </text>
        </svg>
        
        {/* Icon overlays on donut - Clickable */}
        <div 
          className="absolute top-7 left-38 -translate-x-1/2 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => handleImageClick('/a4.svg')}
        >
          <div className="w-7 h-7 rounded-full flex items-center justify-center">
            <img src="/a4.svg" alt="" />
          </div>
        </div>
        <div 
          className="absolute top-36 right-7 -translate-y-1/2 translate-x-1 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => handleImageClick('/a3.svg')}
        >
          <div className="w-7 h-7 rounded-full flex items-center justify-center">
            <img src="/a3.svg" alt="" />
          </div>
        </div>
        <div 
          className="absolute bottom-7 left-18 -translate-x-1/2 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => handleImageClick('/a4.svg')}
        >
          <div className="w-7 h-7 rounded-full flex items-center justify-center">
            <img src="/a4.svg" alt="" />
          </div>
        </div>
        <div 
          className="absolute top-15 left-10 -translate-y-1/2 -translate-x-1 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => handleImageClick('/a1.svg')}
        >
          <div className="w-7 h-7 rounded-full flex items-center justify-center">
            <img src="/a1.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function IssuanceByUnit() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      {/* Header */}
      <div className="flex items-start justify-between mb-1">
        <div>
          <h2 className="text-xl font-normal text-[#1E293B]">Issuance by Unit</h2>
          <p className="text-xs text-[#1E293B] mt-0.5">Distribution analysis for current fiscal period</p>
        </div>
        <div className="flex items-center gap-1.5 border border-blue-200 text-[#475569] text-xs font-semibold px-3 py-1.5 rounded-lg">
          <Calendar size={12} />
          Last 30 Days
        </div>
      </div>

      <DonutChart />

      {/* Unit list */}
      <div className="flex flex-col gap-3 mt-1 justify-center max-w-sm mx-auto mt-10">
        {units.map((u, i) => (
          <div key={i} className="flex items-start gap-3 pb-3 border-b border-dashed border-gray-100 last:border-0 last:pb-0">
            <div className="w-8 h-8 mt-2 rounded-md flex items-center justify-center flex-shrink-0 text-white text-[13px] font-normal"
              style={{ background: u.color }}>
              {u.rank}
            </div>
            <div>
              <div className="text-[10px] font-medium text-[#64748B] tracking-wider">{u.label}</div>
              <div className="text-xl font-semibold leading-tight" style={{ color: u.color }}>{u.pct}</div>
              <div className="text-[10px] text-gray-400">Total Issuance Volume</div>
            </div>
          </div>
        ))}
      </div>

      {/* Database Load */}
      <div className="mt-4 bg-[#1E4D7B] rounded-xl px-4 py-3 flex items-center justify-between mt-12.5">
        <span className="text-sm text-gray-300 font-medium">Database Load</span>
        <span className="text-lg font-medium text-white">12.4 <span className="text-sm font-bold">%</span></span>
      </div>
    </div>
  );
}