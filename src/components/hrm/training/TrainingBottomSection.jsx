import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer,
} from 'recharts';

const scoreDistData = [
  { range: '50-59', count: 8  },
  { range: '60-69', count: 14 },
  { range: '70-79', count: 22 },
  { range: '80-89', count: 18 },
  { range: '90+',   count: 10 },
];

const upcomingSchedule = [
  { color: 'bg-blue-600',  title: 'First Aid & CPR Certification',     date: 'March 4, 2026'  },
  { color: 'bg-blue-400',  title: 'Certified Applicator & Rescuer',     date: 'March 6, 2026'  },
  { color: 'bg-blue-800',  title: 'Working Morally & Inspection',        date: 'March 10, 2026' },
  { color: 'bg-blue-300',  title: 'Supervisory Skills Workshop',          date: 'March 12, 2026' },
];

const achievements = [
  { name: 'Hamza Hamid Tariq',      score: '96%',  color: 'bg-blue-600'   },
  { name: 'Eng. Hamid Ali',         score: '94%',  color: 'bg-blue-500'   },
  { name: 'Eng. Tariq Mehmood',     score: '89%',  color: 'bg-green-500'  },
  { name: 'Qn. Zubair Rafi',        score: '86%',  color: 'bg-blue-700'   },
  { name: 'Qn. Rasheed Ali',        score: '82%',  color: 'bg-blue-400'   },
];

export default function TrainingBottomSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

      {/* Score Distribution */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
        <h3 className="text-xs font-bold text-gray-800 mb-3">Score Distribution</h3>

        {/* Mini horizontal bars */}
        <div className="flex flex-col gap-2 mb-4">
          {[
            { label: 'High Pass', count: 18, pct: 65, color: 'bg-blue-600' },
            { label: 'Pass',      count: 14, pct: 48, color: 'bg-blue-400' },
            { label: 'Low Pass',  count: 8,  pct: 28, color: 'bg-blue-200' },
            { label: 'Fail',      count: 3,  pct: 10, color: 'bg-red-300'  },
          ].map((r, i) => (
            <div key={i}>
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-[10px] text-gray-500">{r.label}</span>
                <span className="text-[10px] font-bold text-gray-700">{r.count}</span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div className={`h-full rounded-full ${r.color}`} style={{ width: `${r.pct}%` }} />
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="text-center">
            <div className="text-lg font-black text-gray-900">86.2</div>
            <div className="text-[9px] text-gray-400">Avg Score</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-black text-gray-900">70-99</div>
            <div className="text-[9px] text-gray-400">Score Range</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-black text-gray-900">98</div>
            <div className="text-[9px] text-gray-400">Highest</div>
          </div>
        </div>
      </div>

      {/* Upcoming Schedule */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
        <h3 className="text-xs font-bold text-gray-800 mb-3">Upcoming Schedule</h3>
        <div className="flex flex-col gap-2.5">
          {upcomingSchedule.map((s, i) => (
            <div key={i} className="flex items-start gap-3 p-3 border border-gray-100 rounded-xl hover:border-blue-200 transition-colors">
              <div className={`w-2.5 h-2.5 rounded-full ${s.color} flex-shrink-0 mt-1`} />
              <div>
                <div className="text-xs font-semibold text-gray-800 leading-tight">{s.title}</div>
                <div className="text-[10px] text-gray-400 mt-0.5">{s.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements / Top Performers */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
        <h3 className="text-xs font-bold text-gray-800 mb-3">Achievements</h3>
        <div className="flex flex-col gap-2.5">
          {achievements.map((a, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`w-7 h-7 rounded-full ${a.color} flex items-center justify-center text-white text-[9px] font-bold flex-shrink-0`}>
                  {a.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <span className="text-xs text-gray-700 font-medium leading-tight">{a.name}</span>
              </div>
              <span className="text-xs font-black text-blue-600">{a.score}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}