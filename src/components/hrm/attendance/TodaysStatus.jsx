import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const statuses = [
  { name: "Present",  value: 1058, color: "#38bdf8" },
  { name: "Late",     value: 47,   color: "#1e3a8a" },
  { name: "Absent",   value: 89,   color: "#7f1d1d" },
  { name: "On Leave", value: 36,   color: "#bfdbfe" },
  { name: "Holiday",  value: 10,   color: "#1e293b" },
];

export default function TodaysStatus() {
  return (
    <div className="bg-white rounded-2xl border border-blue-200 shadow-sm p-4 h-full">
      <h3 className="text-[13px] font-bold text-gray-900">Today's Status</h3>
      <p className="text-[10px] text-gray-400 mb-3">Feb 27, 2026</p>

      <div className="flex justify-center relative" style={{ height: 140 }}>
        <PieChart width={140} height={140}>
          <Pie data={statuses} cx={65} cy={65} innerRadius={44} outerRadius={65}
            paddingAngle={2} dataKey="value" startAngle={90} endAngle={-270}>
            {statuses.map((s, i) => <Cell key={i} fill={s.color} />)}
          </Pie>
        </PieChart>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-[20px] font-black text-gray-900 leading-none">85%</span>
          <span className="text-[9px] text-gray-400 mt-0.5 text-center">Attendance<br/>Rate</span>
        </div>
      </div>

      <div className="mt-3 space-y-1.5">
        {statuses.map((s, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: s.color }} />
              <span className="text-[11px] text-gray-600">{s.name}</span>
            </div>
            <span className="text-[11px] font-bold text-gray-800">{s.value.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}