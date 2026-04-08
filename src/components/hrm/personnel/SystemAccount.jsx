import React, { useState } from 'react';
import { ShieldCheck } from 'lucide-react';

export default function SystemAccount() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      <div className="flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#2478B5] rounded-xl flex items-center justify-center flex-shrink-0">
            <ShieldCheck size={18} className="text-white" />
          </div>
          <div>
            <div className="text-sm font-bold text-gray-900">System Account</div>
            <div className="text-xs text-gray-400 mt-0.5">Provision a User account for this personnel member.</div>
          </div>
        </div>

        {/* Right: toggle */}
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500 font-medium">
            {enabled ? 'Enabled' : 'Disabled'}
          </span>
          <button
            onClick={() => setEnabled(!enabled)}
            className={`relative w-12 h-6 rounded-full transition-colors duration-200 focus:outline-none ${
              enabled ? 'bg-blue-600' : 'bg-[#64748B]'
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${
                enabled ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}