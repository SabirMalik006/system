import React from 'react';

const deptStats = [
  { dept: 'Electrical', kits: 64, pct: 90  },
  { dept: 'Plumbing',   kits: 48, pct: 68  },
  { dept: 'Carpentry',  kits: 38, pct: 54  },
  { dept: 'Maintenance',kits: 52, pct: 74  },
  { dept: 'IT Ops',     kits: 30, pct: 42  },
];

const recentActivity = [
  { kitId: 'TK-2024-001', emp: 'Ahmed Hassan', time: '2h ago', status: 'Passed', style: 'bg-green-100 text-green-700' },
  { kitId: 'TK-2024-003', emp: 'Kamran Khan',  time: '5h ago', status: 'Failed', style: 'bg-red-100 text-red-700' },
  { kitId: 'TK-2024-007', emp: 'Rashid Ali',   time: 'Yesterday', status: 'Pending', style: 'bg-yellow-100 text-yellow-700' },
  { kitId: 'TK-2024-009', emp: 'Bilal Akhtar', time: '2 days ago', status: 'Passed', style: 'bg-green-100 text-green-700' },
];

const conditionSummary = [
  { label: 'Good',           value: 189, pct: 76, color: '#15803d' },
  { label: 'Fair',           value: 34,  pct: 38, color: '#eab308' },
  { label: 'Damaged',        value: 11,  pct: 14, color: '#dc2626' },
  { label: 'Needs Replacement', value: 14, pct: 18, color: '#7c3aed' },
];

export default function InspectionBottomStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

      {/* By Department */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
        <h3 className="text-sm font-bold text-gray-800 mb-4">Kits by Department</h3>
        <div className="space-y-3">
          {deptStats.map((d, i) => (
            <div key={i}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-gray-600">{d.dept}</span>
                <span className="text-xs font-bold text-gray-800">{d.kits} kits</span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${d.pct}%`,
                    background: i === 0 ? '#1a3a8f' : i === 1 ? '#2563eb' : i === 2 ? '#3b82f6' : i === 3 ? '#60a5fa' : '#93c5fd',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
        <h3 className="text-sm font-bold text-gray-800 mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {recentActivity.map((a, i) => (
            <div key={i} className="flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-gray-900">{a.kitId}</div>
                <div className="text-[10px] text-gray-400">{a.emp} · {a.time}</div>
              </div>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${a.style}`}>
                {a.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Condition Summary */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
        <h3 className="text-sm font-bold text-gray-800 mb-4">Condition Summary</h3>
        <div className="space-y-3">
          {conditionSummary.map((c, i) => (
            <div key={i}>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full" style={{ background: c.color }} />
                  <span className="text-xs text-gray-600">{c.label}</span>
                </div>
                <span className="text-xs font-bold text-gray-800">{c.value} kits</span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${c.pct}%`, background: c.color }} />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}