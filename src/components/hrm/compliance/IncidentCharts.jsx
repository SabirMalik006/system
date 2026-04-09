import React from 'react';
import {
  PieChart, Pie, Cell,
  BarChart, Bar, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line,
} from 'recharts';
import { Info, TrendingDown } from 'lucide-react';

const pieData = [
  { name: 'Tardiness',   value: 40, color: '#1a4fa0' },
  { name: 'Misconduct',  value: 25, color: '#3b82f6' },
  { name: 'Performance', value: 15, color: '#60a5fa' },
  { name: 'Other',       value: 20, color: '#cbd5e1' },
];

const trendData = [
  { month: 'MAY', value: 6  },
  { month: 'JUN', value: 8  },
  { month: 'JUL', value: 5  },
  { month: 'AUG', value: 9  },
  { month: 'SEP', value: 7  },
  { month: 'OCT', value: 14 },
];

export default function IncidentCharts() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

      {/* Incident Type Distribution */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-gray-800">Incident Type Distribution</h3>
          <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
            <Info size={14} className="text-gray-400" />
          </button>
        </div>

        <div className="flex items-center gap-4">
          {/* Donut */}
          <div className="relative w-[110px] h-[110px] flex-shrink-0">
            <PieChart width={110} height={110}>
              <Pie
                data={pieData}
                cx={50}
                cy={50}
                innerRadius={34}
                outerRadius={52}
                paddingAngle={2}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
              >
                {pieData.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
              <div className="text-xl font-black text-gray-900 leading-none">42</div>
              <div className="text-[9px] text-gray-400 font-medium">TOTAL</div>
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-col gap-2 flex-1">
            {pieData.map((d, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full inline-block flex-shrink-0"
                    style={{ background: d.color }} />
                  <span className="text-xs text-gray-600">{d.name}</span>
                </div>
                <span className="text-xs font-bold text-gray-800">{d.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Incident Trends (6 Mo) */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-gray-800">Incident Trends (6 Mo)</h3>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 text-[11px] font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded">
              <TrendingDown size={11} />
              -12% vs LY
            </span>
          </div>
        </div>

        <div className="h-[130px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={trendData}
              barSize={24}
              margin={{ top: 5, right: 5, left: -30, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
              <XAxis
                dataKey="month"
                tick={{ fontSize: 10, fill: '#94a3b8' }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 10, fill: '#94a3b8' }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{ borderRadius: 8, border: '1px solid #e2e8f0', fontSize: 11 }}
                cursor={{ fill: 'rgba(0,0,0,0.03)' }}
              />
              <Bar
                dataKey="value"
                name="Incidents"
                radius={[4, 4, 0, 0]}
                // Last bar is highlighted blue, rest light gray
                fill="#dbeafe"
              >
                {trendData.map((entry, i) => (
                  <Cell
                    key={i}
                    fill={i === trendData.length - 1 ? '#1d4ed8' : '#bfdbfe'}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
}