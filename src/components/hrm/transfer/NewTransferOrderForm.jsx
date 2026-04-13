import React, { useState } from 'react';
import { RefreshCw, ChevronDown, User } from 'lucide-react';

const inputCls  = 'w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white text-gray-700 placeholder-gray-400 outline-none focus:border-blue-400 transition-colors';
const selectCls = `${inputCls} appearance-none pr-7 cursor-pointer`;
const labelCls  = 'block text-[10px] font-bold text-gray-500 tracking-wider uppercase mb-1';

export default function NewTransferOrderForm() {
  const [form, setForm] = useState({
    employee: '',
    sourceUnit: 'Headquarters',
    destUnit: '',
    currentDesig: 'Senior Analyst',
    targetDesig: '',
    effectiveDate: 'mm/dd/yyyy',
    orderNumber: 'TRF-2023-XXXX',
  });

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <RefreshCw size={15} className="text-blue-500" />
        <h2 className="text-sm font-bold text-gray-700">New Transfer Order</h2>
      </div>

      <div className="flex flex-col gap-3">
        {/* Employee Name */}
        <div>
          <label className={labelCls}>Employee Name</label>
          <div className="relative">
            <select className={selectCls}>
              <option value="">Select Employee...</option>
              <option>Ali Mir</option>
              <option>Ikram Akram</option>
              <option>Naveed Gul</option>
              <option>Hamza Younas</option>
            </select>
            <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Source + Destination Unit */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className={labelCls}>Source Unit</label>
            <div className="relative">
              <select className={selectCls} defaultValue="Headquarters">
                <option>Headquarters</option>
                <option>North Regional</option>
                <option>South Regional</option>
                <option>West Hub</option>
              </select>
              <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>
          <div>
            <label className={labelCls}>Destination Unit</label>
            <div className="relative">
              <select className={selectCls}>
                <option value="">Select Unit...</option>
                <option>North Regional</option>
                <option>South Regional</option>
                <option>West Hub</option>
                <option>Dubai Branch</option>
              </select>
              <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Current + Target Designation */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className={labelCls}>Current Designation</label>
            <div className="relative">
              <select className={selectCls} defaultValue="Senior Analyst">
                <option>Senior Analyst</option>
                <option>Manager</option>
                <option>Director</option>
              </select>
              <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>
          <div>
            <label className={labelCls}>Target Designation</label>
            <div className="relative">
              <select className={selectCls}>
                <option value="">Select Designation...</option>
                <option>Senior Analyst</option>
                <option>Manager</option>
                <option>Director</option>
              </select>
              <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Effective Date + Order Number */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className={labelCls}>Effective Date</label>
            <input
              type="text"
              placeholder="mm/dd/yyyy"
              className={inputCls}
            />
          </div>
          <div>
            <label className={labelCls}>Order Number</label>
            <input
              type="text"
              defaultValue="TRF-2023-XXXX"
              className={`${inputCls} bg-gray-50 text-gray-400 cursor-not-allowed`}
              readOnly
            />
          </div>
        </div>

        {/* Submit Button */}
        <button className="w-full py-2.5 bg-[#1a3a8f] hover:bg-blue-900 text-white text-sm font-bold rounded-xl transition-colors mt-1">
          Submit Transfer Order
        </button>
      </div>
    </div>
  );
}