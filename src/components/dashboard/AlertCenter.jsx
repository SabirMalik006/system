import React from 'react';
import { AlertTriangle, CheckCircle, X } from 'lucide-react';

const alerts = [
  { type: 'warning', title: 'Auto Reorder Pending (Tyres)', desc: 'Stock level critically low. Reorder quantity: 50 units. Estimated delivery: 3-5 days.', action: 'Reorder Now', actionColor: 'white', actionBg: '#dc2626' },
  { type: 'success', title: 'New Vendor Registration - IMS Franchise Ceremo...', desc: 'Vendor documentation verified. Pending final admin approval for onboarding process.', action: 'Review', actionColor: '#ffffff', actionBg: '#094440' },
];

export default function AlertCenter() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-3.5 mb-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full flex bg-[#C51F26] items-center justify-center ">
            <AlertTriangle size={13} className="text-white    " />
          </div>
          <span className="font-semibold text-sm text-gray-900">Alert Center</span>
          <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-red-100 text-red-700">2</span>
        </div>
        <button className="flex items-center gap-1 text-xs text-blue-600 font-medium">
          Close All <X size={12} />
        </button>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 ">
        {alerts.map((alert, i) => (
          <div key={i} className="flex-1 flex items-start gap-2.5 p-2.5 rounded-lg " style={{ background: alert.type === 'warning' ? 'white' : 'white', border: `1px solid ${alert.type === 'warning' ? '#1E4D7B1A' : '#1E4D7B1A'}` }}>
            <div className="w-7 h-7 rounded-lg flex-shrink-0 flex items-center justify-center mt-0.5" style={{ background: alert.type === 'warning' ? '#C51F26' : '#094440' }}>
              {alert.type === 'warning' ? <AlertTriangle size={14} className="text-amber-600 " /> : <CheckCircle size={14} className="text-white " />}
            </div>
            <div className="flex-1">
              <div className="font-semibold text-sm text-gray-900 mb-0.5">{alert.title}</div>
              <div className="text-xs text-gray-500 leading-relaxed">{alert.desc}</div>
            </div>
            <button className="px-2.5 py-1 rounded-md text-xs font-bold flex-shrink-0 self-center whitespace-nowrap" style={{ background: alert.actionBg, color: alert.actionColor }}>
              {alert.action}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}