import React, { useState } from "react";
import { Download, Plus, Search, ChevronRight } from "lucide-react";

const employees = [
  { initials:"SM", name:"Subhan Mehmood", email:"subhan.m@hrms.com",  id:"EMP-0142", designation:"Plumber",           dept:"Maintenance", unit:"CMES Comkar", shift:"Morning", clockIn:"07:05", clockOut:"15:10", workHrs:"8.1", status:"Present",  type:"Full-time", joined:"12 Jan 2026" },
  { initials:"KA", name:"Khalid Azhar",   email:"khalid.a@hrms.com",  id:"EMP-0145", designation:"Electrician",       dept:"Maintenance", unit:"CMES Compak", shift:"General", clockIn:"09:00", clockOut:"17:00", workHrs:"8.0", status:"Present",  type:"Full-time", joined:"24 Mar 2025" },
  { initials:"SK", name:"Salar Khan",     email:"salar.k@hrms.com",   id:"EMP-0842", designation:"Senior Electrician",dept:"Operations",  unit:"CMES Compak", shift:"General", clockIn:"–",     clockOut:"–",     workHrs:"–",   status:"On Leave", type:"Full-time", joined:"10 Oct 2023" },
  { initials:"AB", name:"Adnan Bashir",   email:"adnan.b@hrms.com",   id:"EMP-0158", designation:"Carpenter",         dept:"Maintenance", unit:"CMES Omori",  shift:"Morning", clockIn:"07:12", clockOut:"15:05", workHrs:"7.9", status:"Late",     type:"Contract",  joined:"05 Feb 2023" },
  { initials:"SS", name:"Shakeel Sajid",  email:"shakeel.s@hrms.com", id:"EMP-0182", designation:"Painter",           dept:"Maintenance", unit:"CMES Comkar", shift:"Morning", clockIn:"07:00", clockOut:"15:00", workHrs:"8.0", status:"Present",  type:"Full-time", joined:"18 May 2023" },
  { initials:"AR", name:"Ahmed Raza",     email:"ahmed.r@hrms.com",   id:"EMP-0174", designation:"Welder",            dept:"Operations",  unit:"CMES Comkar", shift:"Night",   clockIn:"06:00", clockOut:"22:00", workHrs:"8.0", status:"Present",  type:"Full-time", joined:"03 Jun 2022" },
];

const statusStyle = {
  Present:   "bg-blue-600 text-white",
  Late:      "bg-yellow-500 text-white",
  "On Leave":"bg-teal-500 text-white",
  Absent:    "bg-red-500 text-white",
};

const typeStyle = {
  "Full-time":"bg-[#1a3a8f] text-white",
  Contract:   "bg-gray-600 text-white",
};

const HEADERS = ["Employee","ID","Designation","Department","Unit","Shift","Clock In","Clock Out","Work Hrs","Status","Type","Joined","Actions"];

export default function DailyAttendanceTable() {
  const [search, setSearch] = useState("");
  const filtered = employees.filter(e =>
    e.name.toLowerCase().includes(search.toLowerCase()) ||
    e.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      {/* Top bar */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 px-5 pt-5 pb-4">
        <div>
          <h2 className="text-[15px] font-extrabold text-gray-900">Daily Attendance Records</h2>
          <p className="text-[11px] text-gray-400 mt-0.5">Showing 1,340 employees · Feb 27, 2026</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 border border-gray-200 text-gray-700 text-[11px] font-medium px-3 py-1.5 rounded-lg hover:bg-gray-50">
            <Download size={12} /> Export CSV
          </button>
          <button className="flex items-center gap-1.5 bg-blue-600 text-white text-[11px] font-semibold px-3 py-1.5 rounded-lg hover:bg-blue-700">
            <Plus size={12} /> Add Record
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-5 pb-4">
        <div className="flex items-center gap-2 flex-wrap">
          {["All Departments","All Shifts","All Status"].map((f, i) => (
            <button key={i} className="flex items-center gap-1 bg-[#1a3a8f] text-white text-[11px] font-medium px-3 py-1.5 rounded-lg">
              {f} <ChevronRight size={11} className="rotate-90" />
            </button>
          ))}
        </div>
        <div className="relative">
          <Search size={12} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Search name or ID..."
            className="pl-8 pr-3 py-1.5 text-[11px] border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400 w-52" />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1000px]">
          <thead>
            <tr className="bg-[#1a3a8f]">
              {HEADERS.map(h => (
                <th key={h} className="text-left text-[10px] font-bold text-blue-100 uppercase tracking-wide px-4 py-3 whitespace-nowrap">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filtered.map((row, i) => (
              <tr key={i} className="hover:bg-gray-50/60 transition-colors">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-[10px] font-bold text-blue-700">{row.initials}</span>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-gray-900 leading-tight">{row.name}</p>
                      <p className="text-[9px] text-gray-400">{row.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-[11px] text-blue-600 font-medium whitespace-nowrap">{row.id}</td>
                <td className="px-4 py-3 text-[11px] text-gray-700 whitespace-nowrap">{row.designation}</td>
                <td className="px-4 py-3 text-[11px] text-gray-700 whitespace-nowrap">{row.dept}</td>
                <td className="px-4 py-3">
                  <p className="text-[11px] text-gray-700 whitespace-nowrap">{row.unit}</p>
                  <p className="text-[9px] text-gray-400">{row.shift}</p>
                </td>
                <td className="px-4 py-3 text-[11px] text-gray-500 whitespace-nowrap">{row.shift}</td>
                <td className="px-4 py-3 text-[11px] font-semibold text-blue-600 whitespace-nowrap">{row.clockIn}</td>
                <td className="px-4 py-3 text-[11px] font-semibold text-blue-600 whitespace-nowrap">{row.clockOut}</td>
                <td className="px-4 py-3 text-[11px] text-gray-700 whitespace-nowrap">{row.workHrs}</td>
                <td className="px-4 py-3">
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-lg whitespace-nowrap ${statusStyle[row.status] || "bg-gray-100 text-gray-600"}`}>
                    {row.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-lg whitespace-nowrap ${typeStyle[row.type] || "bg-gray-100 text-gray-600"}`}>
                    {row.type}
                  </span>
                </td>
                <td className="px-4 py-3 text-[11px] text-gray-500 whitespace-nowrap">{row.joined}</td>
                <td className="px-4 py-3">
                  <button className="text-[11px] font-semibold text-blue-600 border border-blue-200 px-2.5 py-1 rounded-lg hover:bg-blue-50 transition-colors">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between px-5 py-3 gap-2 bg-[#1a3a8f]">
        <p className="text-[11px] text-blue-200">Showing 1–10 of 274 employees</p>
        <div className="flex items-center gap-1">
          <button className="px-3 py-1 text-[11px] text-blue-200 hover:text-white border border-white/20 rounded-lg">Previous</button>
          {[1,2,3].map(n => (
            <button key={n} className={`w-7 h-7 text-[11px] font-bold rounded-lg ${n === 1 ? "bg-white text-blue-800" : "text-blue-200 hover:text-white border border-white/20"}`}>
              {n}
            </button>
          ))}
          <span className="text-blue-300 text-[11px] px-1">…</span>
          <button className="px-3 py-1 text-[11px] text-blue-200 hover:text-white border border-white/20 rounded-lg">Next</button>
        </div>
      </div>
    </div>
  );
}