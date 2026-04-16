import React from 'react';

const departments = [
  { name: 'Electrical Works', count: 330, color: '#1d4ed8' },
  { name: 'Plumbing & Sanitary', count: 279, color: '#2563eb' },
  { name: 'Civil / RCC Works', count: 145, color: '#3b82f6' },
  { name: 'Carpentry & Joinery', count: 162, color: '#60a5fa' },
  { name: 'Painting & Finishing', count: 128, color: '#93c5fd' },
  { name: 'HVAC / Mechanical', count: 85, color: '#bfdbfe' },
  { name: 'Tools & Equipment', count: 77, color: '#dbeafe' },
];

const max = Math.max(...departments.map(d => d.count));

export default function DepartmentBarChart() {
  return (
    <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
      <p className="text-sm font-semibold text-gray-700 mb-4">Personnel by Department</p>
      <div className="flex flex-col gap-3">
        {departments.map((dept, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="text-xs text-gray-500 w-44 flex-shrink-0 text-right truncate">{dept.name}</span>
            <div className="flex-1 bg-gray-100 rounded-full h-5 relative overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${(dept.count / max) * 100}%`,
                  background: `linear-gradient(90deg, ${dept.color} 0%, ${dept.color}cc 100%)`,
                }}
              />
            </div>
            <span className="text-xs font-semibold text-gray-700 w-8 flex-shrink-0">{dept.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}