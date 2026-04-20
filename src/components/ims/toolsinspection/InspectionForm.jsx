import React, { useState } from 'react';
import { ClipboardCheck, ChevronDown } from 'lucide-react';

const checklistItems = [
  'Drill Machine', 'Screwdriver Set', 'Voltage Tester',
  'Safety Gloves', 'Wire Stripper', 'Pliers Set', 'Measuring Tape',
];

export default function InspectionForm() {
  const [checks, setChecks] = useState({});
  const [condition, setCondition] = useState('Good');
  const [remarks, setRemarks] = useState('');
  const [selectedKit] = useState('TK-2024-002 · Sara Malik');

  const toggleCheck = (item, val) => {
    setChecks(prev => ({ ...prev, [item]: val }));
  };

  const passedCount = Object.values(checks).filter(v => v === 'ok').length;
  const failedCount = Object.values(checks).filter(v => v === 'fail').length;

  const inputCls = 'w-full px-3 py-2 text-xs border border-gray-200 rounded-lg bg-gray-50 text-gray-700 outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-100 transition-colors';
  const labelCls = 'block text-[10px] font-bold text-gray-500 tracking-wider uppercase mb-1.5';

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <ClipboardCheck size={14} className="text-blue-500" />
          <h2 className="text-sm font-bold text-gray-800">New Inspection Form</h2>
        </div>
        <span className="text-[10px] font-bold bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">TK-2024-002</span>
      </div>

      <div className="p-4 space-y-3">
        {/* Kit / Employee */}
        <div>
          <label className={labelCls}>Kit ID / Employee</label>
          <input value={selectedKit} readOnly className={`${inputCls} cursor-not-allowed`} />
        </div>

        {/* Date + Inspector */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className={labelCls}>Inspection Date</label>
            <input type="date" defaultValue="2025-03-10" className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Inspector</label>
            <input defaultValue="Tariq Mehmood" className={`${inputCls} bg-gray-50`} readOnly />
          </div>
        </div>

        {/* Checklist */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className={`${labelCls} mb-0`}>Tool Checklist</label>
            <div className="flex items-center gap-2 text-[10px]">
              <span className="text-green-600 font-bold">{passedCount} OK</span>
              <span className="text-red-500 font-bold">{failedCount} Fail</span>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl border border-gray-100 overflow-hidden">
            {checklistItems.map((item, i) => (
              <div key={item} className={`flex items-center justify-between px-3 py-2 ${
                i < checklistItems.length - 1 ? 'border-b border-gray-100' : ''
              }`}>
                <span className="text-xs text-gray-700 font-medium">{item}</span>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => toggleCheck(item, 'ok')}
                    className={`text-[10px] font-bold px-2.5 py-1 rounded-lg border transition-colors ${
                      checks[item] === 'ok'
                        ? 'bg-green-500 text-white border-green-500'
                        : 'border-gray-200 text-gray-500 hover:border-green-400 hover:text-green-600'
                    }`}
                  >
                    OK
                  </button>
                  <button
                    onClick={() => toggleCheck(item, 'fail')}
                    className={`text-[10px] font-bold px-2.5 py-1 rounded-lg border transition-colors ${
                      checks[item] === 'fail'
                        ? 'bg-red-500 text-white border-red-500'
                        : 'border-gray-200 text-gray-500 hover:border-red-400 hover:text-red-600'
                    }`}
                  >
                    Fail
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Overall Condition */}
        <div>
          <label className={labelCls}>Overall Condition</label>
          <div className="relative">
            <select
              value={condition}
              onChange={e => setCondition(e.target.value)}
              className={`${inputCls} appearance-none pr-8 cursor-pointer`}
            >
              <option>Good</option>
              <option>Fair</option>
              <option>Damaged</option>
              <option>Needs Replacement</option>
            </select>
            <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Remarks */}
        <div>
          <label className={labelCls}>Remarks / Notes</label>
          <textarea
            rows={3}
            value={remarks}
            onChange={e => setRemarks(e.target.value)}
            placeholder="Enter inspection remarks..."
            className={`${inputCls} resize-none`}
          />
        </div>

        {/* Submit */}
        <button className="w-full py-2.5 bg-[#1a3a8f] hover:bg-blue-900 text-white text-sm font-bold rounded-xl transition-colors shadow-sm">
          Submit Inspection
        </button>
      </div>
    </div>
  );
}