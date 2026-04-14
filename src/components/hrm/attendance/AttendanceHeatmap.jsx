import React from "react";

const weeks = [
  [0, 1, 1, 1, 1, 2, 2],
  [2, 1, 2, 2, 2, 1, 0],
  [1, 2, 1, 2, 1, 2, 0],
  [1, 1, 2, 1, 0, 0, 0],
];

const days = ["S", "M", "T", "W", "T", "F", "S"];

const colorMap = { 0: "bg-gray-300", 1: "bg-blue-800", 2: "bg-blue-400" };

export default function AttendanceHeatmap() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 h-full">
      <h3 className="text-[13px] font-bold text-gray-900 mb-3">Attendance Heatmap – Feb 2026</h3>

      <div className="grid grid-cols-7 gap-1.5 mb-1.5">
        {days.map((d, i) => (
          <div key={i} className="text-center text-[10px] font-bold text-gray-500">{d}</div>
        ))}
      </div>

      <div className="flex flex-col gap-1.5">
        {weeks.map((week, wi) => (
          <div key={wi} className="grid grid-cols-7 gap-1.5">
            {week.map((val, di) => (
              <div key={di} className={`h-8 rounded-lg ${colorMap[val]}`} />
            ))}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3 mt-3">
        {[
          { color: "bg-gray-300", label: "Low"  },
          { color: "bg-blue-800", label: "Mid"  },
          { color: "bg-blue-400", label: "High" },
        ].map((l, i) => (
          <div key={i} className="flex items-center gap-1">
            <span className={`w-3 h-3 rounded-sm inline-block ${l.color}`} />
            <span className="text-[9px] text-gray-400">{l.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}