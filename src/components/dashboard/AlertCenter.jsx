import React from 'react';
import { AlertTriangle, CheckCircle, X } from 'lucide-react';

const alerts = [
  { type: 'warning', title: 'Critical Stock', desc: 'Aluminum Door Handle  175mm  CMES COMKAR ', text: 'Remaining units below threshold (80 units)' , action: 'Reorder Now', actionColor: 'white', actionBg: '#dc2626' },
  { type: 'success', title: 'Approval Required', desc: 'New Vendor Registration: ,M/S Three Star Ceramic', text:'Compliance check completed. Ready for final review.', action: 'Approve', actionColor: '#ffffff', actionBg: '#094440' },
];

export default function AlertCenter() {
  return (
    <div className=" bg-white rounded-lg shadow-lg border border-gray-100 p-3.5 mb-4 relative overflow-hidden ">
      
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-lg text-[#0D2B4A]">Alert Center</span>
          <span className="px-2 py-0.5 rounded-sm text-xs font-semibold bg-[#1A8FA0] text-white">3 New</span>
        </div>
        <button className="flex items-center gap-1 text-sm text-[#1A8FA0] font-semibold">
          Clear All 
        </button>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3">
        {alerts.map((alert, i) => (
          <div key={i} className="flex-1 flex items-start gap-3 p-3 rounded-lg" style={{ background: '#1E4D7B0D', border: '1px solid #1E4D7B1A' }}>
            {/* Image on Left Side - Different images for different alerts */}
            <img 
              src={i === 0 ? "/Background.svg" : "/Background (1).svg"}
              alt="background" 
              className="w-11 h-11 flex-shrink-0 rounded-lg mt-1.5"
            />
            
            {/* Content on Right Side */}
            <div className="flex-1">
              <div className="font-semibold text-xs text-[#1E4D7B] uppercase mb-0.5">{alert.title}</div>
              <div className="text-sm text-[#0D2B4A] font-medium leading-relaxed">{alert.desc}</div>
              <div className="text-xs text-gray-500 leading-relaxed">{alert.text}</div>
            </div>
            
            {/* Buttons Container */}
            <div className="flex items-center gap-2 flex-shrink-0 self-center">
              {/* Main Action Button */}
              <button className="px-2.5 py-1.5 rounded-md text-xs font-bold whitespace-nowrap" style={{ background: alert.actionBg, color: alert.actionColor }}>
                {alert.action}
              </button>
              
              {/* Second Button - Only for 2nd alert (i === 1) */}
              {i === 1 && (
                <button className="px-2.5 py-1.5 rounded-md text-xs font-bold whitespace-nowrap bg-white text-[#1E4D7B] border border-[#1E4D7B]">
                  Ignore
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}