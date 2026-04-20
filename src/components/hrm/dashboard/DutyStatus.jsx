import React from 'react';

const dutyData = [
  { label: 'Fit for Duty',  value: '96.8%',  color: '#1a3b5c' },
  { label: 'Medical Leave', value: '0.6%',   color: '#fbbf24' },
  { label: 'Casual Leave',  value: '1.4%',   color: '#3b82f6' },
  { label: 'On Training',   value: '1.2%',   color: '#93c5fd' },
];

export default function DutyStatus() {
  return (
    <div className="h-full flex flex-col gap-5">
      
      {/* ── TOP CARD: Main Donut & Legends ── */}
      <div className="bg-white rounded-[24px] shadow-sm flex flex-col overflow-hidden">
        <div className="p-6 pb-8">
          <h2 className="text-[16px] font-bold text-[#1e293b] mb-0.5 mt-1">Duty Status</h2>
          <p className="text-[11px] text-gray-400 mb-8">Current workforce breakdown</p>

          {/* Main Donut */}
          <div className="flex justify-center mb-10">
            <div className="relative w-[180px] h-[180px]">
              {/* SVG for Donut */}
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                {/* Background Track */}
                <circle cx="50" cy="50" r="44" fill="transparent" stroke="#f1f5f9" strokeWidth="12" />
                {/* Blue - Fit for Duty */}
                <circle cx="50" cy="50" r="44" fill="transparent" stroke="#1a3b5c" strokeWidth="12" strokeDasharray={`${2 * Math.PI * 44 * 0.968} ${2 * Math.PI * 44}`} />
                {/* Yellow - Medical */}
                <circle cx="50" cy="50" r="44" fill="transparent" stroke="#fbbf24" strokeWidth="12" strokeDasharray={`${2 * Math.PI * 44 * 0.006} ${2 * Math.PI * 44}`} strokeDashoffset={`-${2 * Math.PI * 44 * 0.968}`} />
                {/* Light Blue - Casual */}
                <circle cx="50" cy="50" r="44" fill="transparent" stroke="#3b82f6" strokeWidth="12" strokeDasharray={`${2 * Math.PI * 44 * 0.014} ${2 * Math.PI * 44}`} strokeDashoffset={`-${2 * Math.PI * 44 * 0.974}`} />
                {/* Lighter Blue - On Training */}
                <circle cx="50" cy="50" r="44" fill="transparent" stroke="#93c5fd" strokeWidth="12" strokeDasharray={`${2 * Math.PI * 44 * 0.012} ${2 * Math.PI * 44}`} strokeDashoffset={`-${2 * Math.PI * 44 * 0.988}`} />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center pt-1">
                <div className="text-[32px] font-black text-gray-900 leading-none tracking-tight">96.8%</div>
                <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mt-1.5">FIT FOR DUTY</div>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-col gap-3.5 px-3">
            {dutyData.map((s, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: s.color }} />
                  <span className="text-[12px] font-medium text-gray-500">{s.label}</span>
                </div>
                <span className="text-[12px] font-bold text-[#1e293b]">{s.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Strip */}
        <div className="bg-[#f4f7fb] py-3.5 border-t border-gray-100 flex justify-center items-center gap-4 text-[11px]">
          <span className="font-medium text-gray-400">Total workforce: <span className="font-bold text-[#1e293b]">6,781</span></span>
          <span className="font-medium text-gray-400">Updated : <span className="font-bold text-[#1e293b]">today</span></span>
        </div>
      </div>

      {/* ── BOTTOM CARD: 3D Rings ── */}
      <div className="bg-gradient-to-b from-white to-gray-50 rounded-[24px] shadow-sm flex-1 flex flex-col justify-center items-center py-8">
        <div className="flex justify-center items-center gap-6 w-full px-6">
          
          {/* Incomplete Profiles */}
          <div className="flex flex-col items-center">
            <div className="relative w-[120px] h-[120px] rounded-full bg-white border-[8px] border-white flex items-center justify-center mb-3 shadow-[0_15px_30px_-5px_rgba(30,58,138,0.15)]">
              {/* Inner Soft Gradient Background */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-50 to-[#e2e8f0]/40 shadow-inner overflow-hidden">
                 {/* Blue glow effect in bottom right */}
                 <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-400/20 blur-xl rounded-full"></div>
              </div>
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="text-[7px] font-bold text-gray-400 uppercase tracking-widest leading-tight text-center mb-0.5">INCOMPLETE<br/>PROFILES</div>
                <div className="text-[34px] font-black text-[#1e293b] leading-none mb-1">14</div>
              </div>
              
              {/* Shield Badge */}
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#3b82f6] rounded-full flex items-center justify-center border-[2.5px] border-white shadow-sm text-white z-20">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              
              {/* Progress Ring Outline */}
              <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none z-10">
                <circle cx="52" cy="52" r="50" fill="transparent" stroke="#3b82f6" strokeWidth="4" strokeDasharray="160 300" strokeLinecap="round" opacity="0.8" />
              </svg>
            </div>
            <div className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">INCOMPLETE PROFILES</div>
          </div>
          
          {/* New Inductees */}
          <div className="flex flex-col items-center">
            <div className="relative w-[120px] h-[120px] rounded-full bg-white border-[8px] border-white flex items-center justify-center mb-3 shadow-[0_15px_30px_-5px_rgba(30,58,138,0.15)]">
              {/* Inner Soft Gradient Background */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-50 to-[#e2e8f0]/40 shadow-inner overflow-hidden">
                 {/* Gray glow effect in bottom right */}
                 <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-slate-400/20 blur-xl rounded-full"></div>
              </div>
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="text-[7px] font-bold text-gray-400 uppercase tracking-widest leading-tight text-center mb-0.5">NEW<br/>INDUCTEES</div>
                <div className="text-[34px] font-black text-[#1e293b] leading-none mb-1">6</div>
              </div>
              
              {/* User Badge */}
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#1e40af] rounded-full flex items-center justify-center border-[2.5px] border-white shadow-sm text-white z-20">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
              </div>

              {/* Progress Ring Outline */}
              <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none z-10">
                <circle cx="52" cy="52" r="50" fill="transparent" stroke="#1e40af" strokeWidth="4" strokeDasharray="140 300" strokeLinecap="round" opacity="0.6" />
              </svg>
            </div>
            <div className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">NEW INDUCTEES</div>
          </div>
          
        </div>
      </div>

    </div>
  );
}