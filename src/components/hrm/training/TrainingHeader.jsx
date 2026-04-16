import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, Calendar, Plus } from 'lucide-react';

export default function TrainingHeader() {
  const navigate = useNavigate();

  const handleNewProgram = () => {
    navigate('/inter-unit-transfer');
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-4 flex items-center justify-between">

      {/* Left: Title + Breadcrumb */}
      <div>
        <h1 className="text-base font-black text-gray-900 leading-tight">
          Training Management
        </h1>
        <p className="text-xs text-blue-400 mt-0.5 font-normal">
          HRMS / Training / Programs &amp; Participants
        </p>
      </div>

      {/* Right: Buttons */}
      <div className="flex items-center gap-2 flex-shrink-0">
        {/* Export */}
        <button className="flex items-center gap-1.5 border border-gray-200 bg-white text-gray-700 text-sm font-medium px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">
          <Upload size={14} className="text-gray-500" />
          Export
        </button>

        {/* Date */}
        <button className="flex items-center gap-1.5 border border-gray-200 bg-white text-gray-700 text-sm font-medium px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">
          <Calendar size={14} className="text-gray-500" />
          Feb 27, 2026
        </button>

        {/* New Program */}
        <button 
          onClick={handleNewProgram}
          className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors shadow-sm cursor-pointer"
        >
          <Plus size={14} />
          New Program
        </button>
      </div>

    </div>
  );
}