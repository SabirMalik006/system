import React from "react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer,
} from "recharts";

const data = Array.from({ length: 27 }, (_, i) => ({
  day: i + 1,
  present: 800 + Math.floor(Math.random() * 260),
  late:    80  + Math.floor(Math.random() * 100),
  absent:  360 + Math.floor(Math.random() * 40),
  leave:   60  + Math.floor(Math.random() * 40),
}));

const LEGEND = [
  { key: "present", color: "#38bdf8", label: "Present" },
  { key: "late",    color: "#1e3a8a", label: "Late"    },
  { key: "absent",  color: "#7f1d1d", label: "Absent"  },
  { key: "leave",   color: "#2563eb", label: "Leave"   },
];

export default function MonthlyTrendChart() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 h-full">
      <div className="flex items-start justify-between mb-3">
        <p className="text-[11px] font-semibold text-gray-500">Feb 2026 · Daily overview</p>
        <span className="text-[10px] font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">Live</span>
      </div>

      <div className="h-[160px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 4, right: 4, left: -28, bottom: 0 }}>
            <defs>
              <linearGradient id="presGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%"   stopColor="#38bdf8" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
            <XAxis dataKey="day" tick={{ fontSize: 9, fill: "#94a3b8" }} axisLine={false} tickLine={false} ticks={[1,5,10,15,20,25,27]} />
            <YAxis tick={{ fontSize: 9, fill: "#94a3b8" }} axisLine={false} tickLine={false} ticks={[0,200,400,600,800,1000]} />
            <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 10 }} />
            <Area type="monotone" dataKey="present" stroke="#38bdf8" strokeWidth={2}   fill="url(#presGrad)" dot={false} />
            <Area type="monotone" dataKey="late"    stroke="#1e3a8a" strokeWidth={1.5} fill="none" dot={false} />
            <Area type="monotone" dataKey="absent"  stroke="#7f1d1d" strokeWidth={1.5} strokeDasharray="4 3" fill="none" dot={false} />
            <Area type="monotone" dataKey="leave"   stroke="#2563eb" strokeWidth={1.5} strokeDasharray="4 3" fill="none" dot={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center gap-4 mt-2 flex-wrap">
        {LEGEND.map((l) => (
          <div key={l.key} className="flex items-center gap-1">
            <svg width="16" height="6">
              <line x1="0" y1="3" x2="16" y2="3" stroke={l.color} strokeWidth="2" />
            </svg>
            <span className="text-[9px] text-gray-400">{l.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}