import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Cell,
} from 'recharts';

const unitData = [
  { unit: 'Headquarters',   transfers: 346, pct: 100 },
  { unit: 'North Regional', transfers: 112, pct: 32  },
  { unit: 'South Regional', transfers: 98,  pct: 28  },
  { unit: 'West Hub',       transfers: 196, pct: 57  },
];

const inOutData = [
  { unit: 'HQ',    incoming: 60, outgoing: 40 },
  { unit: 'North', incoming: 45, outgoing: 55 },
  { unit: 'South', incoming: 30, outgoing: 50 },
  { unit: 'East',  incoming: 50, outgoing: 30 },
  { unit: 'West',  incoming: 40, outgoing: 60 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-3 shadow-lg text-xs">
      <div className="font-bold mb-1 text-gray-700">{label}</div>
      {payload.map((p, i) => (
        <div key={i} className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-sm inline-block" style={{ background: p.fill }} />
          <span className="text-gray-500">{p.name}:</span>
          <span className="font-bold">{p.value}</span>
        </div>
      ))}
    </div>
  );
};

export default function TransferAnalytics() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

      {/* Transfer Timeline by Unit */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
        <h3 className="text-sm font-bold text-gray-800 mb-4">Transfer Timeline by Unit</h3>
        <div className="flex flex-col gap-3.5">
          {unitData.map((u, i) => (
            <div key={i}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-semibold text-gray-700">{u.unit}</span>
                <span className="text-xs text-gray-500 font-medium">{u.transfers} Transfers</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-[#1a3a8f] transition-all duration-700"
                  style={{ width: `${u.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Unit-wise In vs Out Summary */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-gray-800">Unit-wise In vs Out Summary</h3>
          <div className="flex items-center gap-3">
            {[
              { color: '#1a3a8f', label: 'Incoming' },
              { color: '#60a5fa', label: 'Outgoing' },
            ].map(l => (
              <div key={l.label} className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm inline-block" style={{ background: l.color }} />
                <span className="text-[10px] text-gray-500">{l.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="h-[180px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={inOutData}
              barSize={14}
              barGap={3}
              barCategoryGap="30%"
              margin={{ top: 0, right: 0, left: -25, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
              <XAxis dataKey="unit" tick={{ fontSize: 10, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 10, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0,0,0,0.03)' }} />
              <Bar dataKey="incoming" name="Incoming" fill="#1a3a8f" radius={[3, 3, 0, 0]} />
              <Bar dataKey="outgoing" name="Outgoing" fill="#60a5fa" radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
}