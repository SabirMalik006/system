import React from 'react';
import {
    BarChart, Bar, LineChart, Line, XAxis, YAxis,
    CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

const spendData = [
    { month: 'Jan', Plumbing: 180, Electrical: 140, Painting: 100, Carpentry: 80 },
    { month: 'Feb', Plumbing: 160, Electrical: 120, Painting: 90, Carpentry: 70 },
    { month: 'Mar', Plumbing: 200, Electrical: 160, Painting: 110, Carpentry: 90 },
    { month: 'Apr', Plumbing: 190, Electrical: 170, Painting: 120, Carpentry: 100 },
    { month: 'May', Plumbing: 220, Electrical: 180, Painting: 130, Carpentry: 110 },
    { month: 'Jun', Plumbing: 210, Electrical: 160, Painting: 115, Carpentry: 95 },
];

const approvalData = [
    { month: 'Jan', Plumbing: 72, Electrical: 68, Painting: 65, Carpentry: 60 },
    { month: 'Feb', Plumbing: 74, Electrical: 70, Painting: 68, Carpentry: 63 },
    { month: 'Mar', Plumbing: 76, Electrical: 73, Painting: 71, Carpentry: 66 },
    { month: 'Apr', Plumbing: 78, Electrical: 75, Painting: 72, Carpentry: 68 },
    { month: 'May', Plumbing: 82, Electrical: 78, Painting: 75, Carpentry: 72 },
    { month: 'Jun', Plumbing: 85, Electrical: 80, Painting: 78, Carpentry: 74 },
];

const unitData = [
    { unit: 'CMES ISLB/LHR', value: 64, color: '#2563EB' },
    { unit: 'CMES COMPAK', value: 48, color: '#3B82F6' },
    { unit: 'CMES ORMARA', value: 42, color: '#60A5FA' },
    { unit: 'CMES COMLOG', value: 36, color: '#0891B2' },
    { unit: 'CMES COMCOAST', value: 32, color: '#1D4ED8' },
    { unit: 'CMES COMKAR', value: 26, color: '#1E60AF' },
];

const deptColors = {
    Plumbing: '#0891B2',
    Electrical: '#2166A0',
    Painting: '#2196F3',
    Carpentry: '#1152D4',
};

export default function SpendApprovalUnit() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

            {/* Spend by Department */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-semibold text-[#1A3A5C]">Spend by Department (Rsk)</h3>
                    <button className="text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-blue-100 text-blue-700">6 Months</button>
                </div>
                <div className="flex items-center gap-3 flex-wrap mb-3">
                    {Object.entries(deptColors).map(([k, v]) => (
                        <div key={k} className="flex items-center gap-1">
                            <span className="w-2 h-2 rounded-xs inline-block" style={{ background: v }} />
                            <span className="text-[10px] text-gray-500">{k}</span>
                        </div>
                    ))}
                </div>
                <div className="h-[200px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={spendData} barSize={8} barCategoryGap="25%" margin={{ top: 0, right: 0, left: -35, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#d1d1d2" vertical={false} />
                            <XAxis dataKey="month" tick={{ fontSize: 10, fill: '#000' }} axisLine={false} tickLine={false} />
                            <YAxis tick={{ fontSize: 10, fill: '#000' }} axisLine={false} tickLine={false} ticks={[0, 100, 200, 300]} />
                            <Tooltip contentStyle={{ borderRadius: 8, border: '1px solid #e2e8f0', fontSize: 11 }} />
                            {Object.entries(deptColors).map(([key, color]) => (
                                <Bar key={key} dataKey={key} fill={color} radius={[2, 2, 0, 0]} />
                            ))}
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Approval Rate Trend */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-semibold text-[#1A3A5C]">Approval Rate Trend</h3>
                    <button className="text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-blue-100 text-[#1A3A5C]">Per Dept %</button>
                </div>
                <div className="flex items-center gap-3 flex-wrap mb-3">
                    {Object.entries(deptColors).map(([k, v]) => (
                        <div key={k} className="flex items-center gap-1">
                            <svg width="14" height="8"><line x1="0" y1="4" x2="14" y2="4" stroke={v} strokeWidth="2" /></svg>
                            <span className="text-[10px] text-gray-500">{k}</span>
                        </div>
                    ))}
                </div>
                <div className="h-[200px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={approvalData} margin={{ top: 0, right: 5, left: -30, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#bfc1c4" vertical={false} />
                            <XAxis dataKey="month" tick={{ fontSize: 10, fill: '#000000' }} axisLine={false} tickLine={false} />
                            <YAxis tick={{ fontSize: 10, fill: '#000000' }} axisLine={false} tickLine={false}
                                domain={[60, 100]} ticks={[60, 70, 80, 90, 100]} tickFormatter={v => `${v}%`} />
                            <Tooltip contentStyle={{ borderRadius: 8, border: '1px solid #e2e8f0', fontSize: 11 }}
                                formatter={(v) => [`${v}%`]} />
                            {Object.entries(deptColors).map(([key, color]) => (
                                <Line
                                    key={key}
                                    type="monotone"
                                    dataKey={key}
                                    stroke={color}
                                    strokeWidth={2}
                                    dot={{ r: 3, fill: '#ffffff', stroke: color, strokeWidth: 2 }}  // White dot with colored border
                                    activeDot={{ r: 5 }}  // Larger dot on hover
                                />
                            ))}
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Requests by Unit */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-semibold text-[#1A3A5C]">Requests by CMES</h3>
                    <button className="text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-blue-100 text-[#0E7490]">Top Units</button>
                </div>
                <div className="flex flex-col gap-2.5">
                    {unitData.map((u, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <span className="text-xs text-[#000000] font-base w-15 flex-shrink-0">{u.unit}</span>
                            <div className="flex-1 h-5 bg-white rounded-sm overflow-hidden">
                                <div
                                    className="h-full rounded-sm"
                                    style={{ width: `${(u.value / 70) * 100}%`, background: u.color }}
                                />
                            </div>
                            <span className="text-xs font-normal text-[#000000] w-6 text-right">{u.value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}