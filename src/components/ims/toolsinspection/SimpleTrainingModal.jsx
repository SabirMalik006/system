import React, { useState, useRef, useEffect } from 'react';
import { X, User, Calendar, Briefcase, AlertCircle } from 'lucide-react';

export default function SimpleTrainingModal({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    employee: '',
    department: '',
    assignedDate: '',
    lastInspected: '',
    nextDue: '',
    condition: '',
    status: '',
  });

  const modalRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
    onClose();
  };

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-3">
      <div 
        ref={modalRef}
        className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden animate-fadeIn"
      >
        {/* Header */}
        <div className=" px-5 py-3">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-black">Add New Tool Kit</h2>
              <p className="text-[11px] text-black mt-0.5">Fill in the details below</p>
            </div>
            <button 
              onClick={onClose}
              className="p-1 hover:bg-white/20 rounded-lg transition-colors"
            >
              <X size={16} className="text-black" />
            </button>
          </div>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-4 space-y-3 max-h-[70vh] overflow-y-auto">
          {/* Employee */}
          <div>
            <label className="block text-[10px] font-semibold text-gray-700 mb-1">
              Employee <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <User size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="employee"
                value={formData.employee}
                onChange={handleChange}
                placeholder="e.g., Ahmed Hassan"
                className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#1A8FA0]"
                required
              />
            </div>
          </div>

          {/* Department */}
          <div>
            <label className="block text-[10px] font-semibold text-gray-700 mb-1">Department</label>
            <div className="relative">
              <Briefcase size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                placeholder="e.g., Electrical"
                className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#1A8FA0]"
              />
            </div>
          </div>

          {/* Assigned Date */}
          <div>
            <label className="block text-[10px] font-semibold text-gray-700 mb-1">Assigned Date</label>
            <div className="relative">
              <Calendar size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="date"
                name="assignedDate"
                value={formData.assignedDate}
                onChange={handleChange}
                className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#1A8FA0]"
              />
            </div>
          </div>

          {/* Last Inspected */}
          <div>
            <label className="block text-[10px] font-semibold text-gray-700 mb-1">Last Inspected</label>
            <div className="relative">
              <Calendar size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="date"
                name="lastInspected"
                value={formData.lastInspected}
                onChange={handleChange}
                className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#1A8FA0]"
              />
            </div>
          </div>

          {/* Next Due */}
          <div>
            <label className="block text-[10px] font-semibold text-gray-700 mb-1">Next Due</label>
            <div className="relative">
              <AlertCircle size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="date"
                name="nextDue"
                value={formData.nextDue}
                onChange={handleChange}
                className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#1A8FA0]"
              />
            </div>
          </div>

          {/* Condition */}
          <div>
            <label className="block text-[10px] font-semibold text-gray-700 mb-1">Condition</label>
            <select
              name="condition"
              value={formData.condition}
              onChange={handleChange}
              className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#1A8FA0] bg-white"
            >
              <option value="">Select Condition</option>
              <option value="Good">Good</option>
              <option value="Fair">Fair</option>
              <option value="Damaged">Damaged</option>
            </select>
          </div>

          {/* Status */}
          <div>
            <label className="block text-[10px] font-semibold text-gray-700 mb-1">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#1A8FA0] bg-white"
            >
              <option value="">Select Status</option>
              <option value="Passed">Passed</option>
              <option value="Pending">Pending</option>
              <option value="Failed">Failed</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] font-semibold text-gray-700 mb-1">Action</label>
            <select
              name="status"
              value={formData.action}
              onChange={handleChange}
              className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#1A8FA0] bg-white"
            >
              <option value="">Inspect</option>
              <option value="Passed">Urgent</option>
            </select>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-2 bg-gradient-to-r from-[#1E4D7B] to-[#1A6FC4] hover:from-[#163A50] hover:to-[#0D4A6E] text-white text-sm font-medium rounded-lg transition-all shadow-md"
            >
              Create Toolkit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}