import React, { useState } from 'react';
import { Upload, Calendar, Plus } from 'lucide-react';
import SimpleTrainingModal from './SimpleTrainingModal';

export default function TrainingHeader() {
  const [showModal, setShowModal] = useState(false);

  const handleCreateProgram = (formData) => {
    console.log('New Program Data:', formData);
    // Add your API call here
  };

  return (
    <>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Left: Title + Breadcrumb */}
        <div>
          <h1 className="text-[20px] font-black text-gray-900 leading-tight">
            Training Management
          </h1>
        </div>

        {/* Right: Buttons */}
        <div className="flex flex-wrap items-center gap-2 flex-shrink-0">
          <button className="flex items-center gap-1.5 border border-gray-200 bg-white text-gray-700 text-xs sm:text-sm font-medium px-3 sm:px-4 py-2 rounded-xl hover:bg-gray-50">
            <Upload size={14} className="text-gray-500" />
            Export
          </button>

          <button className="flex items-center gap-1.5 border border-gray-200 bg-white text-gray-700 text-xs sm:text-sm font-medium px-3 sm:px-4 py-2 rounded-xl hover:bg-gray-50">
            <Calendar size={14} className="text-gray-500" />
            Feb 27, 2026
          </button>

          <button 
            onClick={() => setShowModal(true)}
            className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-2 rounded-xl transition-colors shadow-sm cursor-pointer"
          >
            <Plus size={14} />
            New Program
          </button>
        </div>
      </div>

      {/* Simple Modal */}
      <SimpleTrainingModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleCreateProgram}
      />
    </>
  );
}