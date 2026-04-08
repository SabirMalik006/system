import React, { useState } from 'react';
import { Briefcase, Search } from 'lucide-react';

const inputCls = 'w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-100 transition-colors bg-white';
const labelCls = 'block text-xs font-semibold text-gray-800 mb-1.5';

const empTypes = ['Permanent', 'Contract', 'Temporary'];
const empStatuses = [
  { label: 'Active',      active: true,  style: 'bg-blue-600 text-white' },
  { label: 'On Leave',    active: false, style: 'bg-teal-100 text-teal-700' },
  { label: 'Suspended',   active: false, style: 'bg-gray-200 text-gray-700' },
  { label: 'Terminated',  active: false, style: 'bg-gray-200 text-gray-700' },
  { label: 'Retired',     active: false, style: 'bg-gray-200 text-gray-700' },
];

export default function ProfessionalInformation() {
  const [empType, setEmpType] = useState('Permanent');
  const [empStatus, setEmpStatus] = useState('Active');
  const [dept, setDept] = useState('Electrical');

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 ">
      {/* Section title */}
      <div className="flex items-center gap-2 mb-5 pb-3 border-b border-gray-100">
        <div className="w-6 h-6  rounded flex items-center justify-center">
          <Briefcase size={16} className="text-blue-800" />
        </div>
        <h2 className="text-base font-semibold text-gray-900 ">Professional Information</h2>
      </div>

      {/* Row 1: Designation, Department */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className={labelCls}>Designation</label>
          <input placeholder="e.g. Senior Technician" className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Department</label>
          <div className="relative">
            <select
              value={dept}
              onChange={e => setDept(e.target.value)}
              className={`${inputCls} appearance-none pr-8 cursor-pointer`}
            >
              {['Electrical', 'Plumbing', 'Carpentry', 'Painting', 'Maintenance', 'IT'].map(d => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
            <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 4l4 4 4-4" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Row 2: Employment Type, Employment Status */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className={labelCls}>Employment Type</label>
          <div className="flex items-center gap-4 mt-1">
            {empTypes.map(t => (
              <label key={t} className="flex items-center gap-1.5 cursor-pointer">
                <div
                  onClick={() => setEmpType(t)}
                  className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors cursor-pointer ${
                    empType === t ? 'border-blue-600 bg-blue-600' : 'border-gray-300 bg-white'
                  }`}
                >
                  {empType === t && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                </div>
                <span className="text-sm text-gray-700">{t}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <label className={labelCls}>Employment Status</label>
          <div className="flex items-center gap-1.5 flex-wrap mt-1">
            {empStatuses.map(s => (
              <button
                key={s.label}
                onClick={() => setEmpStatus(s.label)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-md transition-colors ${
                  empStatus === s.label
                    ? 'bg-[#1A6FC4] text-white'
                    : 'bg-[#7FB3D34D] text-gray-800 hover:bg-gray-200'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Row 3: Unit/Branch, Direct Supervisor */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className={labelCls}>Unit / Branch</label>
          <input placeholder="e.g. CMES Compak" className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Direct Supervisor</label>
          <div className="relative">
            <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700" />
            <input placeholder="Search Supervisor Name..." className={`${inputCls} pl-8`} />
          </div>
        </div>
      </div>

      {/* Row 4: Joining Date */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Joining Date</label>
          <input type="text" placeholder="mm/dd/yyyy" className={inputCls} />
        </div>
      </div>
    </div>
  );
}