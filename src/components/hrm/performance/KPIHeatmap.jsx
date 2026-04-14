import React from 'react';

const employees = [
  { name: 'Awais Khan',    kpis: [39, 90, 82, 90, 84, 86] },
  { name: 'Waqas Ahmed',   kpis: [58, 80, 82, 51, 88, 80] },
  { name: 'Hassan Faraz',  kpis: [62, 70, 80, 53, 70, 11] },
  { name: 'Mahwish Akhtar',kpis: [19, 80, 82, 68, 72, 61] },
];

const columns = ['EFFICIENCY', 'TEAMWORK', 'QUALITY', 'PUNCTUALITY', 'INNOVATION', 'GROWTH'];

function getHeatColor(val) {
  if (val >= 80) return 'bg-[#1E4D7B] text-white';
  if (val >= 60) return 'bg-[#1E4D7BE5] text-white';
  if (val >= 40) return 'bg-[#1E4D7B4D] text-gray-800';
  return 'bg-[#dbeafe] text-gray-700';
}

export default function KPIHeatmap() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-900">KPI Performance Heatmap</h2>
        <p className="text-md text-gray-400 mt-0.5">Relative performance scores across core business objectives</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] border-separate border-spacing-1">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left px-4 py-2.5 text-[10px] font-bold text-gray-500 tracking-wider w-36">
                EMPLOYEE
              </th>
              {columns.map((c) => (
                <th key={c} className="text-center px-2 py-2.5 text-[12px] font-bold text-[#1E4D7B] tracking-wider">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 text-xs font-bold text-[#1E4D7B]">{emp.name}</td>
                {emp.kpis.map((val, j) => (
                  <td
                    key={j}
                    className={`px-2 py-4 text-center text-xs font-bold ${getHeatColor(val)} rounded-sm`}
                  >
                    {val}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Scale legend */}
      <div className="flex items-center gap-2 mt-4 pt-3 border-t border-gray-100 justify-end">
        <span className="text-[10px] text-gray-400 font-medium">SCALE:</span>
        {[
          { label: 'Low', style: 'bg-[#dbeafe] text-gray-700' },
          { label: '',    style: 'bg-[#93c5fd] text-gray-800' },
          { label: '',    style: 'bg-[#3b82f6] text-white'    },
          { label: 'High', style: 'bg-[#1a3a8f] text-white'  },
        ].map((s, i) => (
          <div key={i} className="flex items-center gap-1">
            <span className={`w-7 h-5 rounded text-[9px] font-bold flex items-center justify-center ${s.style}`}>
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}