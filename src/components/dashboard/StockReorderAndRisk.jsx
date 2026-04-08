import React from 'react';

const depletionItems = [
  { name: 'Circuit Breaker 15 Amp for AC with Plug', tag: 'CMES COMPAK', days: '4 Days', pct: 72, color: '#1a6cb5' },
  { name: 'Towel rail Plastic', tag: 'CMES COMPAK', days: '6 Days', pct: 45, color: '#0891B2' },
  { name: 'Float Valve for Porta', tag: 'CMES COMLOG', days: '1 Day', pct: 20, color: '#F97316' },
];

const issuanceItems = [
  { rank: '01', label: 'TOOLS', pct: '45%', color: '#1a3a5c', bg: '#1a3a5c' },
  { rank: '02', label: 'CONSUMABLE', pct: '42%', color: '#2ec4b6', bg: '#0f6e56' },
  { rank: '03', label: 'SANITARY ITEMS', pct: '30%', color: '#4a5568', bg: '#4a5568' },
  { rank: '04', label: 'ELECTRICAL ITEMS', pct: '39%', color: '#a0aec0', bg: '#718096' },
];

const donutSegments = [
  { pct: 0.55, color: '#1a3a5c', offset: 0 },
  { pct: 0.25, color: '#2ec4b6', offset: 0.55 },
  { pct: 0.20, color: '#e2e8f0', offset: 0.80 },
];

function DonutChart() {
  const cx = 120, cy = 120, r = 95, stroke = 28;
  const circumference = 2 * Math.PI * r;

  function polarToXY(angleDeg, radius) {
    const rad = ((angleDeg - 90) * Math.PI) / 180;
    return { x: cx + radius * Math.cos(rad), y: cy + radius * Math.sin(rad) };
  }

  let cumulativePct = 0;
  const segments = donutSegments.map((seg) => {
    const dash = seg.pct * circumference;
    const gap = circumference - dash;
    const rotation = cumulativePct * 360 - 90;
    cumulativePct += seg.pct;
    return { ...seg, dash, gap, rotation };
  });

  return (
    <div className="relative w-full max-w-[360px] h-[360px] mx-auto flex justify-center items-center">
      <svg width="360" height="360" viewBox="0 0 240 240" className="w-full h-full">
        <circle cx={cx} cy={cy} r={r + stroke / 2 + 6} fill="none" stroke="#e8edf5" strokeWidth="2" />

        {segments.map((seg, i) => (
          <circle
            key={i}
            cx={cx} 
            cy={cy} 
            r={r}
            fill="none"
            stroke={seg.color}
            strokeWidth={stroke}
            strokeDasharray={`${seg.dash} ${seg.gap}`}
            strokeLinecap="butt"
            transform={`rotate(${seg.rotation} ${cx} ${cy})`}
          />
        ))}

        {[0, 0.55, 0.80].map((pct, i) => {
          const angle = pct * 360 - 90;
          const inner = polarToXY(angle, r - stroke / 2 - 2);
          const outer = polarToXY(angle, r + stroke / 2 + 2);
          return (
            <line 
              key={i} 
              x1={inner.x} y1={inner.y} 
              x2={outer.x} y2={outer.y}
              stroke="white" 
              strokeWidth="4" 
            />
          );
        })}

        {/* Icons instead of numbers */}
        {[
          { angle: 235, color: '#1a6cb5', icon: '🔧', label: 'Tools' },
          { angle: 320, color: '#0891B2', icon: '🧴', label: 'Consumable' },
          { angle: 60, color: '#4a5568', icon: '🔍', label: 'Sanitary' },
          { angle: 140, color: '#a0aec0', icon: '⚡', label: 'Electrical' },
        ].map((pos, i) => {
          const pt = polarToXY(pos.angle, r + 5);
          return (
            <g key={i}>
              <circle cx={pt.x} cy={pt.y} r="20" fill="white" style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.15))' }} />
              <circle cx={pt.x} cy={pt.y} r="18" fill={pos.color} opacity="0.95" />
              <text 
                x={pt.x} 
                y={pt.y + 6} 
                textAnchor="middle" 
                fontSize="16" 
                fontWeight="600" 
                fill="white"
                style={{ pointerEvents: 'none' }}
              >
                {pos.icon}
              </text>
            </g>
          );
        })}

        <text x={cx} y={cy - 8} textAnchor="middle" fontSize="28" fontWeight="700" fill="#1a3a5c">IMS</text>
        <text x={cx} y={cy + 16} textAnchor="middle" fontSize="13" fill="#a0aec0" fontWeight="600">System</text>
      </svg>
    </div>
  );
}

export default function StockDashboard() {
  return (
    <div className="flex flex-col xl:flex-row gap-5 md:gap-6 p-4 md:p-6 bg-[#f4f6fb] min-h-screen w-full">

      {/* LEFT PANEL - Stock Depletion Timeline */}
      <div className="flex-1 xl:flex-[0_0_45%] bg-white rounded-2xl border border-[#E0E8EC] p-5 md:p-6 shadow-sm flex flex-col gap-6">

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <span className="text-xs font-semibold tracking-widest text-[#1E293B] uppercase">
            Stock Depletion Timeline
          </span>
          <span className="text-[10px] text-[#3B82F6] font-semibold tracking-widest">
            PROJECTED DATA
          </span>
        </div>

        <div className="flex flex-col gap-5">
          {depletionItems.map((item, i) => (
            <div key={i}>
              <div className="flex justify-between items-baseline mb-2">
                <div>
                  <span className="text-[13px] font-semibold text-[#1E293B]">{item.name}</span>
                  <span className="text-[10px] text-[#a0aec0] ml-1.5">{item.tag}</span>
                </div>
                <span className="text-xs text-[#718096] whitespace-nowrap">{item.days}</span>
              </div>
              <div className="h-[6px] bg-[#edf2f7] rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all" 
                  style={{ width: `${item.pct}%`, background: item.color }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <DonutChart />
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex-1 flex flex-col gap-5">

        {/* Top Two Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-[#1a3a5c] rounded-xl p-5 md:p-6 text-white">
            <div className="text-xs text-[#90cdf4] mb-2 font-medium">Database Load</div>
            <div className="text-3xl font-bold">12.4%</div>
          </div>

          <div className="bg-[#2ec4b6] rounded-xl p-5 md:p-6 text-white">
            <div className="text-xs text-white/80 mb-2 font-medium">Sync Status</div>
            <div className="text-3xl font-bold">Healthy</div>
          </div>
        </div>

        {/* Operational Health Card */}
        <div className="bg-white rounded-2xl p-5 md:p-6 shadow-sm">
          <div className="text-xs font-semibold text-[#a0aec0] tracking-widest uppercase mb-5">
            Operational Health
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 flex-wrap">
            {/* Circular Progress */}
            <div className="relative w-20 h-20 md:w-[80px] md:h-[80px] flex-shrink-0 mx-auto md:mx-0">
              <svg width="80" height="80" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="32" fill="none" stroke="#e2e8f0" strokeWidth="8" />
                <circle 
                  cx="40" 
                  cy="40" 
                  r="32" 
                  fill="none" 
                  stroke="#2ec4b6" 
                  strokeWidth="8"
                  strokeDasharray={`${2 * Math.PI * 32 * 0.94} ${2 * Math.PI * 32 * 0.06}`}
                  strokeLinecap="round"
                  transform="rotate(-90 40 40)" 
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-base font-bold text-[#2d3748]">94%</div>
                <div className="text-[9px] text-[#a0aec0] -mt-0.5">SAFE</div>
              </div>
            </div>

            {/* Low Risk Text */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <span className="text-xl font-bold text-[#2d3748]">Low Risk</span>
                <span className="w-2 h-2 rounded-full bg-[#2ec4b6]" />
              </div>
              <div className="text-sm text-[#718096]">System returns within optimal range</div>
            </div>

            {/* Stats */}
            <div className="flex gap-6 md:gap-8 justify-center">
              {[
                { label: 'NORMAL', val: '94%', color: '#2d3748', bar: '#2ec4b6' },
                { label: 'RETURNED', val: '4%', color: '#2d3748', bar: '#1a6cb5' },
                { label: 'DAMAGED', val: '2%', color: '#e53e3e', bar: '#e53e3e' },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-[10px] text-[#a0aec0] tracking-widest mb-1">{s.label}</div>
                  <div className="text-lg font-bold" style={{ color: s.color }}>{s.val}</div>
                  <div className="w-8 h-1 mx-auto mt-1.5" style={{ background: s.bar, borderRadius: 2 }} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Issuance Items */}
        <div className="bg-white rounded-2xl p-5 md:p-6 shadow-sm flex-1">
          <div className="flex flex-col gap-5">
            {issuanceItems.map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-base flex-shrink-0"
                  style={{ background: item.bg }}
                >
                  {item.rank}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold text-[#a0aec0] tracking-widest uppercase mb-1">
                    {item.label}
                  </div>
                  <div className="text-2xl font-bold text-[#2d3748] leading-none">
                    {item.pct}
                  </div>
                  <div className="text-xs text-[#2ec4b6] font-medium mt-1">
                    Total Issuance Volume
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}