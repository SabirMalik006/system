import React from "react";
import { Upload, Calendar } from "lucide-react";

export default function AttendanceHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
      <div>
        <h1 className="text-xl font-extrabold text-gray-900">Attendance Management</h1>
        <p className="text-[11px] text-blue-500 mt-0.5">
          HRMS / Attendance &amp; Shifts / Daily Attendance
        </p>
      </div>
      <div className="flex items-center gap-2">
        <button className="flex items-center gap-1.5 border border-gray-200 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-gray-50 transition">
          <Upload size={13} />
          Export
        </button>
        <button className="flex items-center gap-1.5 border border-gray-200 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-gray-50 transition">
          <Calendar size={13} />
          Feb 27, 2026
        </button>
        <button className="flex items-center gap-1.5 bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-blue-700 transition">
          + Mark
        </button>
      </div>
    </div>
  );
}