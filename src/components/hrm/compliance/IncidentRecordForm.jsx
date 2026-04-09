import React, { useState } from 'react';
import { Search, Calendar, ChevronDown, Shield } from 'lucide-react';

const inputCls = 'w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-100 transition-colors';
const labelCls = 'block text-sm font-semibold text-gray-700 mb-1.5';

const incidentTypes = ['Tardiness', 'Misconduct', 'Performance', 'Insubordination', 'Other'];
const severityLevels = ['Verbal Warning', 'Written Warning', 'Final Warning', 'Suspension'];

export default function IncidentRecordForm() {
  const [form, setForm] = useState({
    employee: '',
    date: '',
    incidentType: 'Tardiness',
    severity: 'Verbal Warning',
    description: '',
    authority: 'Atif Saeed (Supervisor)',
  });

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const selectCls = `${inputCls} appearance-none pr-8 cursor-pointer`;

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm h-full flex flex-col">
      {/* Form Header */}
      <div className="px-5 pt-5 pb-4 border-b border-gray-100">
        <div className="flex items-start gap-2">
          <div className="w-5 h-5 bg-blue-100 rounded flex items-center justify-center mt-0.5 flex-shrink-0">
            <Shield size={12} className="text-blue-600" />
          </div>
          <div>
            <h2 className="text-base font-bold text-gray-900">Incident Record Form</h2>
            <p className="text-xs text-gray-400 mt-0.5">Fill in all mandatory details below</p>
          </div>
        </div>
      </div>

      {/* Form Fields */}
      <div className="flex-1 px-5 py-4 flex flex-col gap-4 overflow-y-auto">

        {/* Employee */}
        <div>
          <label className={labelCls}>
            Employee <span className="text-red-400">*</span>
          </label>
          <div className="relative">
            <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={form.employee}
              onChange={e => set('employee', e.target.value)}
              placeholder="Search employee..."
              className={`${inputCls} pl-8`}
            />
          </div>
        </div>

        {/* Incident Date */}
        <div>
          <label className={labelCls}>
            Incident Date <span className="text-red-400">*</span>
          </label>
          <div className="relative">
            <Calendar size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={form.date}
              onChange={e => set('date', e.target.value)}
              placeholder="mm/dd/yyyy"
              className={`${inputCls} pl-8`}
            />
          </div>
        </div>

        {/* Incident Type + Severity Level */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className={labelCls}>Incident Type</label>
            <div className="relative">
              <select
                value={form.incidentType}
                onChange={e => set('incidentType', e.target.value)}
                className={selectCls}
              >
                {incidentTypes.map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
              <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className={labelCls}>Severity Level</label>
            <div className="relative">
              <select
                value={form.severity}
                onChange={e => set('severity', e.target.value)}
                className={selectCls}
              >
                {severityLevels.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Detailed Description */}
        <div>
          <label className={labelCls}>
            Detailed Description <span className="text-red-400">*</span>
          </label>
          <textarea
            value={form.description}
            onChange={e => set('description', e.target.value)}
            rows={4}
            placeholder="Describe the incident in detail, including witnesses and evidence..."
            className={`${inputCls} resize-none`}
          />
        </div>

        {/* Reporting Authority */}
        <div>
          <label className={labelCls}>Reporting Authority</label>
          <div className="relative">
            <Shield size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={form.authority}
              onChange={e => set('authority', e.target.value)}
              className={`${inputCls} pl-8`}
            />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-5 py-4 border-t border-gray-100 flex items-center gap-2">
        <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-2.5 rounded-lg transition-colors">
          Submit Incident Record
        </button>
        <button className="px-5 py-2.5 bg-white border border-gray-200 hover:bg-gray-50 text-gray-600 text-sm font-semibold rounded-lg transition-colors">
          Clear
        </button>
      </div>
    </div>
  );
}