import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const data = [
  { hour: "6am",  count: 12,  shade: 0.3  },
  { hour: "7am",  count: 95,  shade: 0.6  },
  { hour: "8am",  count: 340, shade: 1    },
  { hour: "9am",  count: 210, shade: 0.8  },
  { hour: "10a",  count: 130, shade: 0.5  },
  { hour: "12p",  count: 18,  shade: 0.2  },
  { hour: "3pm",  count: 145, shade: 0.5  },
  { hour: "5pm",  count: 160, shade: 0.55 },
  { hour: "9pm",  count: 55,  shade: 0.2  },
];

export default function ClockInDistribution() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 h-full">
      <h3 className="text-[13px] font-bold text-gray-900">Clock-In Distribution</h3>
      <p className="text-[10px] text-gray-400 mb-3">Hourly employee check-ins today</p>
      <div className="h-[130px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 4, right: 4, left: -32, bottom: 0 }} barSize={18}>
            <XAxis dataKey="hour" tick={{ fontSize: 9, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
            <YAxis hide />
            <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 10 }} />
            <Bar dataKey="count" radius={[4, 4, 0, 0]}>
              {data.map((d, i) => <Cell key={i} fill={`rgba(56,189,248,${d.shade})`} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}