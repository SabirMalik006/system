import React from 'react';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MoreHorizontal } from 'lucide-react';

const vendorData = [
  { month: 'Jan', performance: 65, rating: 72 }, { month: 'Feb', performance: 72, rating: 68 },
  { month: 'Mar', performance: 58, rating: 75 }, { month: 'Apr', performance: 80, rating: 78 },
  { month: 'May', performance: 75, rating: 82 }, { month: 'Jun', performance: 88, rating: 85 },
  { month: 'Jul', performance: 82, rating: 80 }, { month: 'Aug', performance: 90, rating: 88 },
];

const bookData = [
  { name: 'Central Store', available: 120, consumed: 85 },
  { name: 'Branch-01', available: 95, consumed: 70 },
  { name: 'Branch-02', available: 80, consumed: 55 },
  { name: 'Transit', available: 45, consumed: 30 },
  { name: 'Other Stores', available: 60, consumed: 40 },
];

export default function VendorAndBook() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-4">
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-3 sm:p-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3.5">
          <div>
            <h3 className="text-sm font-bold text-gray-900">Top Vendor Performance</h3>
            <div className="text-xs text-gray-400 mt-0.5">Last 8 months</div>
          </div>
          <div className="flex items-center justify-between sm:justify-end gap-2.5">
            {[{ color: '#1a6cb5', label: 'Performance' }, { color: '#2ec4b6', label: 'Vendor Rating' }].map(l => (
              <div key={l.label} className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-sm inline-block" style={{ background: l.color }} />
                <span className="text-[11px] text-gray-500">{l.label}</span>
              </div>
            ))}
            <button className="bg-transparent text-gray-400"><MoreHorizontal size={16} /></button>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={160}>
          <AreaChart data={vendorData}>
            <defs>
              <linearGradient id="perfGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1a6cb5" stopOpacity={0.15} /><stop offset="95%" stopColor="#1a6cb5" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="rateGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2ec4b6" stopOpacity={0.15} /><stop offset="95%" stopColor="#2ec4b6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
            <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} domain={[40, 100]} />
            <Tooltip contentStyle={{ borderRadius: 8, border: '1px solid #e2e8f0', fontSize: 12 }} />
            <Area type="monotone" dataKey="performance" name="Performance" stroke="#1a6cb5" strokeWidth={2} fill="url(#perfGrad)" dot={false} />
            <Area type="monotone" dataKey="rating" name="Vendor Rating" stroke="#2ec4b6" strokeWidth={2} fill="url(#rateGrad)" dot={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-3 sm:p-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3.5">
          <div>
            <h3 className="text-sm font-bold text-gray-900">Book Availability</h3>
            <div className="text-xs text-gray-400 mt-0.5">Stock by location</div>
          </div>
          <button className="bg-transparent text-gray-400"><MoreHorizontal size={16} /></button>
        </div>
        <ResponsiveContainer width="100%" height={160}>
          <BarChart data={bookData} barSize={12} barGap={3}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
            <XAxis dataKey="name" tick={{ fontSize: 10, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ borderRadius: 8, border: '1px solid #e2e8f0', fontSize: 12 }} />
            <Bar dataKey="available" name="Available" fill="#1a6cb5" radius={[3, 3, 0, 0]} />
            <Bar dataKey="consumed" name="Consumed" fill="#cbd5e1" radius={[3, 3, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}