import React from "react";

const activities = [
  { name: "Subhan Mehmood clocked in — Morning Shift", meta: "07:05 AM · Plumber · CMES Comkar · On Time",        dotColor: "bg-blue-600" },
  { name: "Khalid Azhar clocked in — General Shift",   meta: "09:00 AM · Electrician · CMES Compak · On Time",    dotColor: "bg-blue-600" },
  { name: "Salar Khan — Leave approved by HR Manager", meta: "09:30 AM · Sr. Electrician · Annual Leave",         dotColor: "bg-blue-200" },
  { name: "Adnan Bashir clocked in — Morning Shift (Late)", meta: "07:12 AM · Carpenter · CMES Ormoni · 12 min late", dotColor: "bg-blue-800" },
  { name: "Shakeel Sajid clocked in — Morning Shift",  meta: "07:00 AM · Painter · CMES Comkar · On Time",        dotColor: "bg-blue-600" },
];

export default function RecentActivity() {
  return (
    <div className="bg-white rounded-2xl border border-blue-200 shadow-sm p-4 h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[13px] font-bold text-gray-900">Recent Activity</h3>
        <span className="text-[10px] text-gray-400">Today's log</span>
      </div>
      <div className="flex flex-col gap-3">
        {activities.map((a, i) => (
          <div key={i} className="flex items-start gap-2.5">
            <span className={`w-2 h-2 rounded-full flex-shrink-0 mt-1 ${a.dotColor}`} />
            <div>
              <p className="text-[11px] font-medium text-gray-800 leading-snug">{a.name}</p>
              <p className="text-[10px] text-gray-400 mt-0.5">{a.meta}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}