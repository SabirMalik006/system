import React from 'react';

const departments = [
  { name: 'Electrical Works', count: 330, color: '#16233b' },
  { name: 'Plumbing & Sanitary', count: 279, color: '#1d5ec9' },
  { name: 'Civil / RCC Works', count: 196, color: '#3185de' },
  { name: 'Carpentry & Joinery', count: 162, color: '#3b82f6' },
  { name: 'Painting & Finishing', count: 128, color: '#60a5fa' },
  { name: 'HVAC / Mechanical', count: 98, color: '#87cefa' },
  { name: 'Tools & Equipment', count: 77, color: '#bfdbfe' },
];

const maxValue = 330; // From data

export default function DepartmentBarChart() {
  return (
    <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm relative overflow-hidden">
      <p className="text-[13px] font-bold text-gray-800 tracking-wide mb-6">Personnel by Department</p>
      
      <div className="flex gap-4">
        {/* Y Axis Labels */}
        <div className="flex flex-col gap-[14px] w-36 pt-1">
          {departments.map((dept, i) => (
            <span key={i} className="text-[10px] text-gray-700 font-semibold text-right truncate h-4 leading-4 flex-shrink-0">
              {dept.name}
            </span>
          ))}
        </div>

        {/* Chart Area */}
        <div className="flex-1 relative pb-6 border-l border-gray-200">
          {/* Grid lines and X axis labels */}
          {[0, 100, 200, 300].map((val, i) => (
            <div key={i} className="absolute top-0 bottom-6 border-l border-gray-100 flex flex-col justify-end"
                 style={{ left: `${(val / maxValue) * 100}%` }}>
              <span className="absolute -bottom-5 -translate-x-1/2 text-[10px] text-gray-400 font-medium">
                {val}
              </span>
            </div>
          ))}

          {/* Bars */}
          <div className="flex flex-col gap-[15px] pt-1 relative z-10 w-full pr-8">
            {departments.map((dept, i) => (
              <div key={i} className="flex items-center w-full h-4 relative">
                <div
                  className="h-full rounded-r-md transition-all duration-700 absolute left-0"
                  style={{
                    width: `${(dept.count / maxValue) * 100}%`,
                    background: dept.color,
                  }}
                />
                <span className="text-[10px] text-gray-500 ml-2 font-medium absolute translate-x-full pr-1"
                      style={{ left: `${(dept.count / maxValue) * 100}%` }}>
                  {dept.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}