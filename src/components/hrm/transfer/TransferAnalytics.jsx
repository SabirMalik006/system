import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Cell,
} from 'recharts';

const unitData = [
  { unit: 'Headquarters',   transfers: 245, pct: 100 },
  { unit: 'North Regional', transfers: 112, pct: 45  },
  { unit: 'South Regional', transfers: 98,  pct: 40  },
  { unit: 'West Hub',       transfers: 156, pct: 63  },
];

const inOutData = [
  { unit: 'HQ',    incoming: 60, outgoing: 60 },
  { unit: 'North', incoming: 70, outgoing: 70 },
  { unit: 'South', incoming: 46, outgoing: 46 },
  { unit: 'East',  incoming: 78, outgoing: 78 },
  { unit: 'West',  incoming: 65, outgoing: 65 },
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
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-base font-bold text-gray-900 mb-8 mt-2">Transfer Timeline by Unit</h3>
        <div className="flex flex-col gap-6">
          {unitData.map((u, i) => (
            <div key={i}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-gray-900">{u.unit}</span>
                <span className="text-xs text-[#274c77] font-bold">{u.transfers} Transfers</span>
              </div>
              <div className="h-3.5 bg-[#0f172a] rounded-full overflow-hidden flex">
                <div
                  className={`h-full rounded-full transition-all duration-700 ${i === 3 || i === 1 ? 'bg-[#1a73e8]' : 'bg-[#274c77]'}`}
                  style={{ width: `${u.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Unit-wise In vs Out Summary */}
      <div className="bg-[#f8fafc] rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-8 mt-2">
          <h3 className="text-base font-bold text-gray-900">Unit-wise In vs Out Summary</h3>
          <div className="flex items-center gap-4">
            {[
              { color: '#274c77', label: 'Incoming' },
              { color: '#1a73e8', label: 'Outgoing' },
            ].map(l => (
              <div key={l.label} className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm inline-block" style={{ background: l.color }} />
                <span className="text-xs font-bold text-gray-800">{l.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="h-[220px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={inOutData}
              barSize={12}
              barGap={4}
              margin={{ top: 0, right: 0, left: -25, bottom: 0 }}
            >
              <XAxis dataKey="unit" tick={{ fontSize: 10, fill: '#64748b' }} axisLine={{stroke: '#cbd5e1'}} tickLine={false} tickMargin={10} />
              
              <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
              <Bar dataKey="incoming" name="Incoming" fill="#274c77" />
              <Bar dataKey="outgoing" name="Outgoing" fill="#1a73e8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
}