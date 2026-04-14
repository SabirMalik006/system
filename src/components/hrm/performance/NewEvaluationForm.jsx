import React, { useState } from 'react';
import { Search, Plus, ChevronDown } from 'lucide-react';

const inputCls = 'w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white text-gray-700 placeholder-gray-400 outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-100 transition-colors';
const labelCls = 'block text-xs font-semibold text-gray-600 mb-1.5';

const kpiRows = [
  { name: 'Productivity Rate', target: 90, achieved: 80, weight: 30, badge: '89% GREAT', badgeStyle: 'bg-green-100 text-green-700' },
  { name: 'Team Collaboration', target: null, achieved: null, weight: null, badge: '72% PASSED', badgeStyle: 'bg-blue-100 text-blue-700' },
  { name: 'Project Delivery', target: null, achieved: null, weight: null, badge: '40% NEEDS IMPROV', badgeStyle: 'bg-orange-100 text-orange-600' },
];

export default function NewEvaluationForm() {
  const [overallRating, setOverallRating] = useState('Good');
  const ratings = ['Excellent', 'Good', 'Average', 'Poor'];

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
          <div className="w-2.5 h-2.5 rounded-full border-2 border-blue-600" />
        </div>
        <h2 className="text-sm font-bold text-gray-800">New Evaluation</h2>
      </div>

      {/* Employee search */}
      <div>
        <label className={labelCls}>Employee</label>
        <div className="relative">
          <input placeholder="Search employee name..." className={inputCls} />
          <Search size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Evaluation Period + Evaluator Name */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={labelCls}>Evaluation Period</label>
          <input placeholder="mm/dd/yyyy" className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Evaluator Name</label>
          <input defaultValue="Full Name" className={`${inputCls} bg-gray-50 text-gray-400`} readOnly />
        </div>
      </div>

      {/* Supervisor Remarks */}
      <div>
        <label className={labelCls}>Supervisor Remarks</label>
        <textarea rows={2} placeholder="Enter feedback here..." className={`${inputCls} resize-none`} />
      </div>

      {/* KPI Entry Table */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-gray-700">KPI Entry Table</span>
          <span className="text-[10px] text-gray-400">Required level: 40</span>
        </div>

        <div className="flex flex-col gap-2">
          {kpiRows.map((kpi, i) => (
            <div key={i} className="border border-gray-100 rounded-xl p-3 bg-gray-50">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-semibold text-gray-800">{kpi.name}</span>
                <span className={`text-[9px] font-bold px-2 py-0.5 rounded ${kpi.badgeStyle}`}>
                  {kpi.badge}
                </span>
              </div>
              {kpi.target !== null && (
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: 'TARGET', val: kpi.target },
                    { label: 'ACHIEVED', val: kpi.achieved },
                    { label: 'WEIGHT %', val: kpi.weight },
                  ].map((f, j) => (
                    <div key={j}>
                      <div className="text-[9px] text-gray-400 font-bold tracking-wide mb-0.5">{f.label}</div>
                      <input
                        defaultValue={f.val}
                        className="w-full px-2 py-1 text-xs border border-gray-200 rounded-lg bg-white text-gray-700 outline-none focus:border-blue-400 text-center"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <button className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 mt-2 transition-colors">
          <Plus size={13} />
          Add KPI Row
        </button>
      </div>

      {/* Total Weighted Score */}
      <div className="flex items-center justify-between bg-[#1a3a8f] rounded-xl px-4 py-3">
        <span className="text-sm font-bold text-white">Total Weighted Score</span>
        <span className="text-xl font-black text-white">82.5</span>
      </div>

      {/* Overall Rating */}
      <div>
        <label className={labelCls}>Overall Rating</label>
        <div className="grid grid-cols-4 gap-2">
          {ratings.map(r => (
            <button
              key={r}
              onClick={() => setOverallRating(r)}
              className={`py-1.5 text-xs font-bold rounded-lg border transition-colors ${
                overallRating === r
                  ? r === 'Excellent' ? 'bg-green-500 text-white border-green-500'
                    : r === 'Good' ? 'bg-blue-600 text-white border-blue-600'
                    : r === 'Average' ? 'bg-yellow-400 text-white border-yellow-400'
                    : 'bg-red-500 text-white border-red-500'
                  : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300'
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* Submit */}
      <button className="w-full py-2.5 bg-[#1a3a8f] hover:bg-blue-900 text-white text-sm font-bold rounded-xl transition-colors">
        Submit Evaluation
      </button>
    </div>
  );
}