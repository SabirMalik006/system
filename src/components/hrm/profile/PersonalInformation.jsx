import React from 'react';
import { User } from 'lucide-react';

const fields = [
  { label: 'FULL NAME',      value: 'Muhammad Jameel',                   col: 1 },
  { label: 'DATE OF BIRTH',  value: '4/3/1981 (45 Years)',               col: 2 },
  { label: 'GENDER',         value: 'Male',                              col: 1 },
  { label: 'CNIC / NATIONAL ID', value: '13101-2894567-1',              col: 2 },
  { label: 'PRIMARY PHONE',  value: '+92 323837318',                     col: 1 },
  { label: 'EMERGENCY CONTACT', value: 'Zubair Khan (Brother) - +92 3457109357', col: 2 },
  { label: 'EMAIL ADDRESS',  value: 's.khan@org.gov.pk',                 col: 'full' },
];

export default function PersonalInformation() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="flex items-center gap-2 px-5 py-3.5 border-b border-gray-100">
        <User size={14} className="text-blue-500" />
        <h2 className="text-sm font-bold text-gray-800">Personal Information</h2>
      </div>
     <div className="bg-gradient-to-br from-[#1565C0] to-[#0A2F5A] p-5">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {fields.filter(f => f.col !== 'full').map((f, i) => (
      <div key={i}>
        <div className="text-[12px] font-bold text-white tracking-widest uppercase mb-1">{f.label}</div>
        <div className="text-md font-semibold text-[#1E293B]">{f.value}</div>
      </div>
    ))}
    {fields.filter(f => f.col === 'full').map((f, i) => (
      <div key={i} className="sm:col-span-2">
        <div className="text-[12px] font-bold text-white tracking-widest uppercase mb-1">{f.label}</div>
        <div className="text-md font-semibold text-[#1E293B]">{f.value}</div>
      </div>
    ))}
  </div>
</div>
    </div>
  );
}