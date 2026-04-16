import React from 'react';
import { X, CheckCircle, Clock, Circle } from 'lucide-react';

const workflowSteps = [
  {
    level: 'L1: Supervisor (Ahsan Khan)',
    status: 'APPROVED',
    statusStyle: 'bg-[#1a3a8f] text-white',
    dot: 'bg-[#1a3a8f]',
    date: 'Oct 30, 2023 • 10:34 AM',
    note: '"Project timeline reviewed. Request approved."',
    active: true,
  },
  {
    level: 'L2: Dept Head (Jawad khattak)',
    status: 'PENDING',
    statusStyle: 'bg-[#1A8FA0] text-white',
    dot: 'bg-blue-400',
    date: null,
    note: 'Waiting for action...',
    active: true,
  },
  {
    level: 'L3: HR Administrator',
    status: null,
    statusStyle: '',
    dot: 'bg-gray-300',
    date: null,
    note: null,
    active: false,
  },
];

export default function LeaveRequestModal({ onClose }) {
  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.45)' }}
      onClick={onClose}
    >
      {/* Modal - Smaller Size */}
      <div
        className="bg-[#e8f2fb] rounded-xl w-full max-w-[320px] overflow-hidden shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1a3a8f] px-4 py-3 flex items-center justify-between">
          <h2 className="text-sm font-bold text-white">Leave Request Details</h2>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Body */}
        <div className="px-4 py-3 flex flex-col gap-3">

          {/* Employee Info */}
          <div className="flex items-center gap-2">
           <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border-2 border-white shadow-sm">
  <img 
    src="/Alex Rivera.svg" 
    alt="Profile" 
    className="w-full h-full object-cover"
  />
</div>
            <div>
              <div className="text-xs font-black text-gray-900">Umer Hassan</div>
              <div className="text-[10px] text-gray-500">EMP-9042 • Product Design</div>
              <div className="text-[10px] text-gray-500">Senior UI/UX Designer</div>
            </div>
          </div>

          <div className="border-t border-blue-100" />

          {/* Leave Type + Total Days */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Leave Type</div>
              <div className="text-xs font-medium text-gray-900">Annual Leave</div>
            </div>
            <div>
              <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Total Days</div>
              <div className="text-xs font-medium text-gray-900">4 Days</div>
            </div>
          </div>

          {/* Duration */}
          <div>
            <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Duration</div>
            <div className="text-xs font-medium text-gray-900">Oct 12, 2023 - Oct 15, 2023</div>
          </div>

          {/* Reason */}
          <div>
            <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Reason</div>
            <div className="text-[10px] text-gray-700 italic leading-relaxed">
              "Family wedding event. Handover documentation has been shared with the team."
            </div>
          </div>

          <div className="border-t border-blue-100" />

          {/* Approval Workflow */}
          <div>
            <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-2">
              Approval Workflow
            </div>

            <div className="flex flex-col gap-2">
              {workflowSteps.map((step, i) => (
                <div key={i} className="flex items-start gap-2">
                  {/* Dot */}
                  <div className="flex flex-col items-center flex-shrink-0 mt-0.5">
                    <span className={`w-2.5 h-2.5 rounded-full border-2 border-white shadow-sm ${step.dot}`} />
                    {i < workflowSteps.length - 1 && (
                      <span className="w-0.5 h-5 bg-gray-200 mt-0.5" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 -mt-0.5">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className={`text-[10px] font-semibold ${step.active ? 'text-gray-800' : 'text-gray-400'}`}>
                        {step.level}
                      </span>
                      {step.status && (
                        <span className={`text-[8px] font-black px-1.5 py-0.5 rounded ${step.statusStyle}`}>
                          {step.status}
                        </span>
                      )}
                    </div>
                    {step.date && (
                      <div className="text-[9px] text-gray-400 mt-0.5">{step.date}</div>
                    )}
                    {step.note && (
                      <div className={`text-[9px] mt-0.5 ${step.note.startsWith('"') ? 'text-gray-500 italic' : 'text-gray-400'}`}>
                        {step.note}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="bg-white px-4 py-3 flex items-center justify-end gap-2 border-t border-blue-100">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-bold text-red-500 hover:bg-red-50 rounded-sm transition-colors border border-red-200"
          >
            Decline
          </button>
          <button
            className="px-4 py-1.5 text-xs font-bold bg-[#1A8FA0] hover:bg-blue-900 text-white rounded-sm transition-colors shadow-sm"
          >
            Approve Leave
          </button>
        </div>
      </div>
    </div>
  );
}