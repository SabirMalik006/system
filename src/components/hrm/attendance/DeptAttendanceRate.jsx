import React from "react";

const depts = [
  { label: "Maintenance (Electrical)", pct: 92 },
  { label: "Operations (Welding)",     pct: 88 },
  { label: "Maintenance (Plumbing)",   pct: 95 },
  { label: "Maintenance (Carpentry)",  pct: 79 },
  { label: "Maintenance (Painting)",   pct: 83 },
  { label: "Operations (Scaffolding)", pct: 76 },
  { label: "Operations (Rigging)",     pct: 91 },
  { label: "Security",                 pct: 70 },
];

export default function DeptAttendanceRate() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 h-full">
      <h3 className="text-[13px] font-bold text-gray-900">Dept. Attendance Rate</h3>
      <p className="text-[10px] text-gray-400 mb-4">Today's presence %</p>
      <div className="flex flex-col gap-3">
        {depts.map((d, i) => (
          <div key={i}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] text-gray-700 font-medium">{d.label}</span>
              <span className="text-[11px] font-bold text-gray-900">{d.pct}%</span>
            </div>
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: `${d.pct}%`, background: "linear-gradient(90deg,#1a3a8f,#38bdf8)" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}