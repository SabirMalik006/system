import React from 'react';
import InspectionHeader from '../../components/ims/toolsinspection/InspectionHeader';
import InspectionKPICards from '../../components/ims/toolsinspection/InspectionKPICards';
import AssignedKitsTable from '../../components/ims/toolsinspection/AssignedKitsTable';
import InspectionForm from '../../components/ims/toolsinspection/InspectionForm';
// import InspectionHealth from '../../components/ims/toolsinspection/InspectionHealth';
import InspectionBottomStats from '../../components/ims/toolsinspection/InspectionBottomStats';

export default function ToolsInspection() {
  return (
    <div className="min-h-screen bg-[#e8f2fb] font-sans">
      <div className="w-full max-w-[2500px] mx-auto px-3 sm:px-4 md:px-5 py-4 sm:py-5 flex flex-col gap-4 sm:gap-5">
        
        {/* Header */}
        <InspectionHeader />
        
        {/* KPI Cards */}
        <InspectionKPICards />
        
        {/* Main Grid - 2 columns on md+, 1 column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          
          {/* Left Column - Table (spans 2 columns on md+) */}
          <div className="md:col-span-2">
            <AssignedKitsTable />
          </div>
          
          {/* Right Column - Form and Health */}
          <div className="space-y-4">
            <InspectionForm />
          </div>
          
        </div>
        
        {/* Bottom Stats */}
        <InspectionBottomStats />
        
      </div>
    </div>
  );
}