import React, { useState } from 'react';
import { Calendar, BriefcaseMedical, GraduationCap, Check, Filter, Share2, ExternalLink } from 'lucide-react';

const tabs = ['Priority Alerts', 'Pending Approvals', 'Archive'];

export default function SystemAlerts() {
  const [activeTab, setActiveTab] = useState('Priority Alerts');

  return (
    <div className="bg-white rounded-[20px] shadow-sm flex flex-col h-[340px]">
      
      {/* Header */}
      <div className="px-6 pt-5 pb-2">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-[18px] font-bold text-[#1e293b]">System Alerts</h2>
            <div className="flex items-center gap-2 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
              <span className="text-[11px] text-gray-500 font-medium">You have 21 active alerts requiring immediate attention.</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1.5 text-[11px] font-bold text-gray-700 bg-white border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">
              <Check size={14} className="text-gray-800" strokeWidth={3} />
              Mark all as read
            </button>
            <button className="p-1.5 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
              <Filter size={16} className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 border-b border-gray-100">
          {tabs.map(tab => (
            <button 
              key={tab} 
              onClick={() => setActiveTab(tab)}
              className={`text-[12px] font-bold pb-3 relative transition-colors ${
                activeTab === tab ? 'text-[#8b1a10]' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8b1a10] rounded-t-full"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Alert Cards Container */}
      <div className="p-6 flex-1 bg-gray-50/50 rounded-b-[20px] overflow-x-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full min-w-[700px]">
          
          {/* Card 1: Late Comers */}
          <div className="bg-white rounded-[16px] border border-gray-100 p-4 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] flex flex-col justify-between">
             <div>
               <div className="flex items-start justify-between mb-3">
                 <div className="w-10 h-10 rounded-xl bg-[#2563eb] text-white flex items-center justify-center shadow-sm">
                   <Calendar size={18} strokeWidth={2.5} />
                 </div>
                 <div className="text-[9px] font-bold text-[#64748b] bg-gray-100 px-2.5 py-1 rounded-full tracking-wider">
                   5 MIN AGO
                 </div>
               </div>
               <h3 className="text-[12px] font-bold text-[#1e293b] mb-1">List of late comers</h3>
               <div className="text-[32px] font-black text-[#1e293b] leading-tight mb-2">12</div>
               
               {/* Avatars */}
               <div className="flex items-center mt-3">
                 <div className="flex -space-x-2">
                   {[...Array(3)].map((_, i) => (
                     <div key={i} className="w-7 h-7 rounded-full bg-[#1e3b5e] border-2 border-white flex items-center justify-center text-white">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                     </div>
                   ))}
                 </div>
                 <div className="ml-2 text-[10px] font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">+9</div>
               </div>
             </div>
             
             <div className="mt-5 flex gap-2">
               <button className="flex-1 bg-[#3b82f6] hover:bg-blue-600 text-white text-[11px] font-bold py-2.5 rounded-xl transition-colors">
                 Review All
               </button>
               <button className="px-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-gray-400">
                 <ExternalLink size={14} />
               </button>
             </div>
          </div>

          {/* Card 2: Hazards */}
          <div className="bg-white rounded-[16px] border border-gray-100 p-4 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] flex flex-col justify-between">
             <div>
               <div className="flex items-start justify-between mb-3">
                 <div className="w-10 h-10 rounded-xl bg-[#8b1a10] text-white flex items-center justify-center shadow-sm">
                   <BriefcaseMedical size={18} strokeWidth={2.5} />
                 </div>
                 <div className="flex items-center gap-1 bg-[#8b1a10] text-white px-2 py-0.5 rounded-full">
                    <span className="w-1 h-1 bg-white rounded-full"></span>
                    <span className="text-[8px] font-bold tracking-wider">CRITICAL</span>
                 </div>
               </div>
               <h3 className="text-[12px] font-bold text-[#1e293b] mb-1">Hazards & Tools safety</h3>
               <div className="flex items-baseline gap-1.5 mb-2">
                 <div className="text-[32px] font-black text-[#1e293b] leading-tight">5</div>
                 <div className="text-[11px] font-bold text-[#3b82f6]">personnel</div>
               </div>
               <p className="text-[10px] text-gray-500 leading-snug pr-3">
                 Last alert triggered 3 hr ago.<br/>Tools compliance at risk : CMES COMKAR.
               </p>
             </div>
             
             <div className="mt-5 flex gap-2">
               <button className="flex-1 bg-[#8b1a10] hover:bg-red-900 text-white text-[11px] font-bold py-2.5 rounded-xl transition-colors">
                 Send Reminders
               </button>
               <button className="px-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-gray-500">
                 <Share2 size={14} />
               </button>
             </div>
          </div>

          {/* Card 3: Training Sessions */}
          <div className="bg-white rounded-[16px] border border-gray-100 p-4 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] flex flex-col justify-between">
             <div>
               <div className="flex items-start justify-between mb-3">
                 <div className="w-10 h-10 rounded-xl bg-[#3b82f6] text-white flex items-center justify-center shadow-sm">
                   <GraduationCap size={20} strokeWidth={2.5} />
                 </div>
                 <div className="text-[9px] font-bold w-[65px] text-center text-white bg-[#3b82f6] px-2 py-1 rounded-full tracking-wider">
                   6 HR AGO
                 </div>
               </div>
               <h3 className="text-[12px] font-bold text-[#1e293b] mb-1">Training Sessions</h3>
               <div className="flex items-baseline gap-1.5 mb-3">
                 <div className="text-[32px] font-black text-[#1e293b] leading-tight">4</div>
                 <div className="text-[11px] font-bold text-[#3b82f6] underline">updates</div>
               </div>
               
               <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="font-medium text-gray-600">Lineman Course</span>
                    <span className="font-bold text-[#3b82f6]">New</span>
                  </div>
                  <div className="w-full h-px bg-gray-100"></div>
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="font-medium text-[#3b82f6]">Plumber</span>
                    <span className="font-medium text-gray-400">Recurring</span>
                  </div>
               </div>
             </div>
             
             <div className="mt-4 flex gap-2">
               <button className="w-full bg-[#1e6fdb] hover:bg-blue-700 text-white text-[11px] font-bold py-2.5 rounded-xl transition-colors">
                 Review Sessions
               </button>
             </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}