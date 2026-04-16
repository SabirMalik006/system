import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend,
} from 'recharts';

const data = [
  { dept: 'IT',    requested: 45, approved: 38 },
  { dept: 'HR',    requested: 28, approved: 22 },
  { dept: 'Ops',   requested: 62, approved: 55 },
  { dept: 'Fin',   requested: 35, approved: 30 },
  { dept: 'Sales', requested: 52, approved: 44 },
  { dept: 'Mktg',  requested: 30, approved: 25 },
];

export default function LeaveVsApproval() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-bold text-gray-800">Leave Request vs Approval</h2>
        <span className="text-[10px] bg-blue-50 text-blue-600 font-bold px-2.5 py-1 rounded-lg">6 Months</span>
      </div>
      <div className="flex items-center gap-4 mb-3">
        {[
          { color: '#1a3a8f', label: 'Requested' },
          { color: '#60a5fa', label: 'Approved' },
        ].map(l => (
          <div key={l.label} className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm" style={{ background: l.color }} />
            <span className="text-xs text-gray-500">{l.label}</span>
          </div>
        ))}
      </div>
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={14} barGap={3} barCategoryGap="30%"
            margin={{ top: 5, right: 5, left: -25, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
            <XAxis dataKey="dept" tick={{ fontSize: 10, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 10, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ borderRadius: 8, border: '1px solid #e2e8f0', fontSize: 11 }} />
            <Bar dataKey="requested" name="Requested" fill="#1a3a8f" radius={[3, 3, 0, 0]} />
            <Bar dataKey="approved"  name="Approved"  fill="#60a5fa" radius={[3, 3, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}