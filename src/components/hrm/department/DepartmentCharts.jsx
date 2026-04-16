import React from 'react';

function DonutChart({ segments, size = 120, thickness = 22, centerLabel, centerSub }) {
  const r = (size - thickness) / 2;
  const cx = size / 2;
  const cy = size / 2;
  const circumference = 2 * Math.PI * r;
  let offset = 0;
  const total = segments.reduce((s, seg) => s + seg.value, 0);
  const paths = segments.map((seg, i) => {
    const dash = (seg.value / total) * circumference;
    const gap = circumference - dash;
    const el = (
      <circle key={i} cx={cx} cy={cy} r={r} fill="none" stroke={seg.color} strokeWidth={thickness}
        strokeDasharray={`${dash} ${gap}`} strokeDashoffset={-offset} strokeLinecap="butt"
        style={{ transform: 'rotate(-90deg)', transformOrigin: `${cx}px ${cy}px` }} />
    );
    offset += dash;
    return el;
  });
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#f0f4f8" strokeWidth={thickness} />
      {paths}
      {centerLabel && (
        <>
          <text x={cx} y={cy - 4} textAnchor="middle" fontSize="16" fontWeight="700" fill="#1e293b">{centerLabel}</text>
          {centerSub && <text x={cx} y={cy + 14} textAnchor="middle" fontSize="10" fill="#94a3b8">{centerSub}</text>}
        </>
      )}
    </svg>
  );
}

function TrendChart({ data, width = 420, height = 140 }) {
  const padding = { top: 16, right: 16, bottom: 28, left: 36 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;
  const minVal = Math.min(...data.map(d => d.v));
  const maxVal = Math.max(...data.map(d => d.v));
  const range = maxVal - minVal || 1;
  const pts = data.map((d, i) => ({
    x: padding.left + (i / (data.length - 1)) * chartW,
    y: padding.top + chartH - ((d.v - minVal) / range) * chartH,
    label: d.label, v: d.v,
  }));
  const polyline = pts.map(p => `${p.x},${p.y}`).join(' ');
  const areaPath = `M${pts[0].x},${pts[0].y} ` +
    pts.slice(1).map(p => `L${p.x},${p.y}`).join(' ') +
    ` L${pts[pts.length - 1].x},${padding.top + chartH} L${pts[0].x},${padding.top + chartH} Z`;
  const yTicks = [minVal, Math.round((minVal + maxVal) / 2), maxVal];
  return (
    <svg width="100%" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMidYMid meet">
      {yTicks.map((t, i) => {
        const y = padding.top + chartH - ((t - minVal) / range) * chartH;
        return (
          <g key={i}>
            <line x1={padding.left} y1={y} x2={padding.left + chartW} y2={y} stroke="#e8f0f8" strokeWidth="1" strokeDasharray="4 2" />
            <text x={padding.left - 6} y={y + 4} textAnchor="end" fontSize="9" fill="#94a3b8">{t}</text>
          </g>
        );
      })}
      <defs>
        <linearGradient id="trendGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.01" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill="url(#trendGrad)" />
      <polyline points={polyline} fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
      {pts.map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r="3" fill="#3b82f6" />
          <circle cx={p.x} cy={p.y} r="5" fill="none" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.3" />
          <text x={p.x} y={padding.top + chartH + 16} textAnchor="middle" fontSize="8" fill="#94a3b8">{p.label}</text>
        </g>
      ))}
    </svg>
  );
}

function SkillBars({ data }) {
  const maxVal = Math.max(...data.map(d => d.expert + d.advanced + d.intermediate + d.beginner));
  const barW = 10; const gap = 4; const groupGap = 20; const chartH = 130;
  const colors = { expert: '#1d4ed8', advanced: '#60a5fa', intermediate: '#bfdbfe', beginner: '#87cefa' };
  return (
    <div className="overflow-x-auto w-full flex justify-center">
      <svg width={data.length * (4 * barW + 3 * gap + groupGap)} height={chartH + 60}>
        {/* Y Axis Guides */}
        {[0, 20, 40, 60, 80, 100, 120].map((v, i) => {
          const y = chartH - (v / 120) * chartH;
          return (
            <g key={i}>
              <line x1="20" y1={y} x2="100%" y2={y} stroke="#f1f5f9" strokeWidth="1" strokeDasharray="2 2" />
            </g>
          )
        })}
        {[0, 20, 40, 60, 80, 100, 120].map((v, i) => {
          const y = chartH - (v / 120) * chartH;
          return (
            <text key={'t' + i} x="10" y={y + 3} textAnchor="end" fontSize="8" fill="#94a3b8">{v}</text>
          )
        })}

        {data.map((d, i) => {
          const groupW = 4 * barW + 3 * gap;
          const x = 30 + i * (groupW + groupGap);
          const keys = ['expert', 'advanced', 'intermediate', 'beginner'];
          return (
            <g key={i}>
              {keys.map((k, j) => {
                const h = (d[k] / 120) * chartH; // normalize somehow, 120 max
                const barX = x + j * (barW + gap);
                return <rect key={k} x={barX} y={chartH - h} width={barW} height={h} fill={colors[k]} rx="1" />;
              })}
              <text x={x + groupW / 2} y={chartH + 18} textAnchor="middle" fontSize="8" fill="#64748b" fontWeight="500"
                transform={`rotate(-40, ${x + groupW / 2}, ${chartH + 18})`}>{d.label}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

const employmentSegments = [
  { value: 40, color: '#1d4ed8', label: 'Permanent' },
  { value: 40, color: '#60a5fa', label: 'Contract' },
  { value: 20, color: '#87cefa', label: 'Temporary' },
];
const genderSegments = [
  { value: 58, color: '#1d4ed8', label: 'Male' },
  { value: 42, color: '#93c5fd', label: 'Female' },
];
const trendData = [
  { label: '2018', v: 820 }, { label: '2019', v: 890 }, { label: '2020', v: 810 },
  { label: '2021', v: 950 }, { label: '2022', v: 1020 }, { label: '2023', v: 1100 },
  { label: '2024', v: 1180 }, { label: '2025', v: 1240 },
];
const skillData = [
  { label: 'Elec.', expert: 30, advanced: 25, intermediate: 20, beginner: 10 },
  { label: 'Plumb.', expert: 20, advanced: 30, intermediate: 25, beginner: 15 },
  { label: 'Civil', expert: 25, advanced: 20, intermediate: 30, beginner: 10 },
  { label: 'Carp.', expert: 15, advanced: 25, intermediate: 20, beginner: 10 },
  { label: 'Paint.', expert: 10, advanced: 15, intermediate: 25, beginner: 20 },
  { label: 'HVAC', expert: 20, advanced: 20, intermediate: 15, beginner: 8 },
  { label: 'Tools', expert: 12, advanced: 18, intermediate: 20, beginner: 10 },
];

export default function DepartmentCharts() {
  return (
    <div className="flex flex-col lg:flex-row gap-4 items-stretch">
      {/* Left Side: Donuts and Skill Bars */}
      <div className="flex flex-col gap-4 w-full lg:w-5/12">
        {/* Top Row: Donuts */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-4 border border-[#bfdbfe] shadow-sm flex flex-col items-center">
            <p className="text-[11px] font-bold text-gray-800 uppercase tracking-wide mb-4 w-full text-left">Employment Type</p>
            <DonutChart segments={employmentSegments} size={130} thickness={25} centerLabel="3" centerSub="Total" />
            <div className="flex items-center justify-center gap-3 mt-6 flex-wrap">
              {employmentSegments.map((s, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: s.color }} />
                  <span className="text-[10px] text-gray-500 font-medium">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-[#bfdbfe] shadow-sm flex flex-col items-center">
            <p className="text-[11px] font-bold text-gray-800 tracking-wide mb-4 w-full text-left">Gender Distribution</p>
            <DonutChart segments={genderSegments} size={130} thickness={25} centerLabel="58%" centerSub="Male" />
            <div className="flex items-center justify-center gap-5 mt-6">
              {genderSegments.map((s, i) => (
                <div key={i} className="flex flex-col items-center gap-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-sm flex-shrink-0" style={{ background: s.color }} />
                    <span className="text-[10px] text-gray-500 font-medium">{s.label}</span>
                  </div>
                  <span className="text-[10px] text-gray-400 font-medium">{s.value === 58 ? 719 : 521}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row: Skill Bars */}
        <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex-1 flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-bold text-gray-800 tracking-wide">Skill Proficiency Distribution</p>
          </div>
          <div className="flex-1 flex flex-col mt-4">
            <SkillBars data={skillData} />
          </div>

          <div className="flex items-center justify-center gap-4 mt-4">
            {[
              { color: '#1d4ed8', label: 'Expert' },
              { color: '#60a5fa', label: 'Advanced' },
              { color: '#bfdbfe', label: 'Intermediate' },
              { color: '#87cefa', label: 'Beginner' },
            ].map((l, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-sm" style={{ background: l.color }} />
                <span className="text-[10px] text-gray-500 font-medium">{l.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side: Joining Trend */}
      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm w-full lg:w-7/12 flex flex-col">
        <p className="text-xs font-bold text-gray-800 uppercase tracking-wide mb-6">EMPLOYEE JOINING TREND</p>
        <div className="flex-1 w-full flex items-center justify-center min-h-[340px]">
          <TrendChart data={trendData} width={600} height={360} />
        </div>
      </div>
    </div>
  );
}