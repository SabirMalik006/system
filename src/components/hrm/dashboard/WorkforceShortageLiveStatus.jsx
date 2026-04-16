import React from 'react';

const WorkforceShortageLiveStatus = () => {
  return (
    <div className="flex flex-col gap-4 h-full">
      
      {/* Workforce Shortage Live Status */}
      <div 
        className="rounded-[24px] p-5 text-white shadow-sm flex flex-col justify-between"
        style={{ 
          minHeight: '190px',
          background: 'linear-gradient(135deg, #1E4D7B, #1E4D7B)'
        }}
      >
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-[14px] font-bold tracking-wide">Workforce shortage Live Status</h3>
            <p className="text-[10px] text-[#93c5fd]">Active today</p>
          </div>
          <div className="bg-[#30619a] text-white text-[10px] font-bold px-4 py-1.5 rounded-full tracking-wider">
            Today
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-auto">
          {/* GE KARS AZ */}
          <div className="bg-white rounded-2xl p-3 flex items-center justify-between border border-white/[0.05]">
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <div className="w-1.5 h-1.5 bg-[#60a5fa] rounded-full"></div>
                <span className="text-[11px] font-bold uppercase tracking-wide text-black">GE KARS AZ</span>
              </div>
              <div className="text-[#1A6FC4] text-[10px] ml-3.5">Plumber</div>
            </div>
            <div className="bg-[#30619a] text-white text-[10px] font-bold px-4 py-1 rounded-full">
              3 short
            </div>
          </div>

          {/* GE LAHORE */}
          <div className="bg-white rounded-2xl p-3 flex items-center justify-between border border-white/[0.05]">
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <div className="w-1.5 h-1.5 bg-[#60a5fa] rounded-full"></div>
                <span className="text-[11px] font-bold uppercase tracking-wide text-black">GE LAHORE</span>
              </div>
              <div className="text-[#1A6FC4] text-[10px] ml-3.5">Electrician</div>
            </div>
            <div className="bg-[#30619a] text-white text-[10px] font-bold px-4 py-1 rounded-full">
              2 short
            </div>
          </div>
        </div>
      </div>

      {/* Attendance Updates */}
      <div 
        className="rounded-[24px] p-5 text-white shadow-sm flex flex-col justify-between"
        style={{ 
          minHeight: '180px',
          background: 'linear-gradient(135deg, #1E4D7B, #1E4D7B)'
        }}
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-[14px] font-bold tracking-wide">Attendance Updates</h3>
            <p className="text-[10px] text-[#93c5fd]">Today • 3 Mar 2026</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-auto">
          {/* GE TURBAT */}
          <div className="bg-white  rounded-2xl p-3 flex items-center justify-between border border-white/[0.05]">
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <div className="w-1.5 h-1.5 bg-[#60a5fa] rounded-full"></div>
                <span className="text-[11px] font-bold uppercase tracking-wide text-black">GE TURBAT</span>
              </div>
              <div className="text-[#1A6FC4] text-[10px] ml-3.5">98%</div>
            </div>
            <div className="bg-[#30619a] text-white text-[10px] font-bold px-5 py-1 rounded-full">
              Present
            </div>
          </div>

          {/* GE ORMARA */}
          <div className="bg-white rounded-2xl p-3 flex items-center justify-between border border-white/[0.05]">
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <div className="w-1.5 h-1.5 bg-[#60a5fa] rounded-full"></div>
                <span className="text-[11px] font-bold uppercase tracking-wide text-black">GE ORMARA</span>
              </div>
              <div className="text-[#1A6FC4] text-[10px] ml-3.5">97.7%</div>
            </div>
            <div className="bg-[#30619a] text-white text-[10px] font-bold px-5 py-1 rounded-full">
              Present
            </div>
          </div>
        </div>
      </div>

      {/* Field Performance */}
      <div 
        className="rounded-[24px] p-5 text-white shadow-sm flex flex-col justify-between"
        style={{ 
          minHeight: '190px',
          background: 'linear-gradient(135deg, #1E4D7B, #1E4D7B)'
        }}
      >
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-[14px] font-bold tracking-wide">Field Performance</h3>
            <p className="text-[10px] text-[#93c5fd]">Categories by GEs</p>
          </div>
          <div className="bg-[#30619a] text-white text-[10px] font-bold px-4 py-1.5 rounded-full tracking-wider">
            5 Open
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-auto">
          {/* GE SOUTH */}
          <div className="bg-white rounded-2xl p-3 flex items-center justify-between border border-white/[0.05]">
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <div className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full"></div>
                <span className="text-[11px] font-bold uppercase tracking-wide text-black">GE SOUTH</span>
              </div>
              <div className="text-[#1A6FC4] text-[10px] ml-3.5">94.3%</div>
            </div>
            <div className="bg-[#60a5fa] text-[#1e293b] text-[10px] font-bold px-4 py-1 rounded-full">
              Satisfactory
            </div>
          </div>

          {/* GE MARIPUR */}
          <div className="bg-white rounded-2xl p-3 flex items-center justify-between border border-white/[0.05]">
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <div className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full"></div>
                <span className="text-[11px] font-bold uppercase tracking-wide text-black">GE MARIPUR</span>
              </div>
              <div className="text-[#1A6FC4] text-[10px] ml-3.5">95.8%</div>
            </div>
            <div className="bg-[#60a5fa] text-[#1e293b] text-[10px] font-bold px-4 py-1 rounded-full">
              Satisfactory
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkforceShortageLiveStatus;