import React from 'react';
import { Star, Clock } from 'lucide-react';

export default function PerformanceHeader() {
  return (
    <div className="flex flex-col gap-4">
      {/* Title Section - Outside the gradient */}
      <div>
        <h1 className="text-lg font-black text-gray-900 leading-tight">Performance Evaluation</h1>
        <p className="text-xs text-gray-500 mt-0.5">Manage employee appraisals, track KPIs, and analyze performance trends.</p>
      </div>

      {/* Gradient Card Section */}
   <div className="bg-[#2478B5] rounded-xl px-6 py-4 flex items-center gap-0 divide-x divide-blue-400/40">

  {/* 1. Evaluations This Quarter */}
  <div className="pr-8">
    <div className="text-[10px] font-bold text-blue-200 tracking-widest uppercase mb-1.5">
      Evaluations This Quarter
    </div>
    <div className="text-2xl font-black text-white leading-none">
      124 / 150
    </div>
  </div>

  {/* 2. Average Score */}
  <div className="px-8">
    <div className="text-[10px] font-bold text-blue-200 tracking-widest uppercase mb-1.5">
      Average Score
    </div>
    <div className="flex items-baseline gap-2">
      <span className="text-2xl font-black text-white leading-none">84.2%</span>
      <span className="text-xs font-bold text-green-400">+4.4%</span>
    </div>
  </div>

  {/* 3. Top Performer */}
  <div className="px-8 flex items-center gap-3">
    {/* Star circle */}
    <div className="w-9 h-9 rounded-full bg-blue-400/40 flex items-center justify-center flex-shrink-0">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="white">
        <path d="M9 1l2 5.5H17l-4.5 3.5 1.5 5.5L9 12l-5 3.5 1.5-5.5L1 6.5h6z"/>
      </svg>
    </div>
    <div>
      <div className="text-[10px] font-bold text-blue-200 tracking-widest uppercase mb-0.5">
        Top Performer
      </div>
      <div className="text-sm font-black text-white leading-tight">Sarah Jenkins</div>
      <div className="text-[11px] text-blue-200">Score: 98.5%</div>
    </div>
  </div>

  {/* 4. Pending Reviews */}
  <div className="pl-8 flex-1">
    <div className="flex items-start justify-between mb-1.5">
      <div className="text-[10px] font-bold text-blue-200 tracking-widest uppercase">
        Pending Reviews
      </div>
      <span className="text-[11px] text-blue-200 font-medium">15% left</span>
    </div>
    <div className="text-2xl font-black text-white leading-none mb-2">26</div>
    {/* Dark progress bar */}
    <div className="w-full h-2 bg-[#1a4a7a] rounded-full overflow-hidden">
      <div
        className="h-full rounded-full bg-[#0d2a4a]"
        style={{ width: '85%' }}
      />
    </div>
  </div>

</div>
    </div>
  );
}