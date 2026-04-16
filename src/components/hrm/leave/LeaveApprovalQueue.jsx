import React, { useState } from 'react';
import LeaveRequestModal from './LeaveRequestModal';

const queue = [
  {
    name: 'Ahmed Daniyal',
    empId: 'EMP-2041',
    initials: 'SJ',
    avatarBg: '#64748b',
    type: 'Annual',
    durationRange: 'Oct 12 – Oct 15',
    durationDays: '4 Days',
    level: 'L2 (Dept Head)',
    status: 'Pending',
    statusStyle: 'bg-yellow-100 text-yellow-700',
  },
  {
    name: 'Ali Hassan',
    empId: 'EMP-3129',
    initials: 'MR',
    avatarBg: '#475569',
    type: 'Sick',
    durationRange: 'Oct 10 – Oct 11',
    durationDays: '1.5 Days',
    level: 'L1 (Manager)',
    status: 'Approved',
    statusStyle: 'bg-green-100 text-green-700',
  },
];

export default function LeaveApprovalQueue() {
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleViewClick = (request) => {
    setSelectedRequest(request);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedRequest(null);
  };

  return (
    <>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h2 className="text-sm font-bold text-gray-900">Leave Approval Queue</h2>
          <button className="text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors">
            View All
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-gray-100">
                {['EMPLOYEE', 'ACTIONS', 'TYPE', 'DURATION', 'LEVEL', 'STATUS'].map(h => (
                  <th key={h} className="text-left px-5 py-3 text-[10px] font-bold text-gray-400 tracking-wider">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {queue.map((row, i) => (
                <tr key={i} className={`${i < queue.length - 1 ? 'border-b border-gray-50' : ''} hover:bg-gray-50 transition-colors`}>
                  {/* Employee */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                        style={{ background: row.avatarBg }}
                      >
                        {row.initials}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900 leading-tight">{row.name}</div>
                        <div className="text-[11px] text-gray-400">{row.empId}</div>
                      </div>
                    </div>
                   </td>

                  {/* Actions */}
                  <td className="px-5 py-4 text-sm text-gray-600">{row.type}</td>

                  {/* Type */}
                  <td className="px-5 py-4 text-sm text-gray-600">{row.type}</td>

                  {/* Duration */}
                  <td className="px-5 py-4">
                    <div className="text-sm text-gray-800 font-medium leading-tight">{row.durationRange}</div>
                    <div className="text-[11px] text-gray-400">{row.durationDays}</div>
                   </td>

                  {/* Level */}
                  <td className="px-5 py-4 text-sm text-gray-600">{row.level}</td>

                  {/* Status + View */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${row.statusStyle}`}>
                        {row.status}
                      </span>
                      <button 
                        onClick={() => handleViewClick(row)}
                        className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors pl-6"
                      >
                        View
                      </button>
                    </div>
                   </td>
                 </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {showModal && selectedRequest && (
        <LeaveRequestModal onClose={handleCloseModal} />
      )}
    </>
  );
}