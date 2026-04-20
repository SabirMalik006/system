import React, { useState } from 'react';
import { Download, UserPlus, Search } from 'lucide-react';

const participants = [
  { name: 'Subhan Mehmood', empId: 'EMP-001',  dept: 'Plumbing',   institute: 'Navvtac', program: 'Plumber',    startDate: '1-04-2022',  endDate: '11.04.2022', score: 60,  result: 'Promoted', resultStyle: 'bg-purple-100 text-purple-700', progress: 80 },
  { name: 'Sabir Khan',     empId: 'EMP-002',  dept: 'Electrical', institute: 'Uptech', program: 'Sr Electrician',  startDate: '1-04-2022',  endDate: '17.04.2022', score: 70,  result: 'Completed', resultStyle: 'bg-green-100 text-green-700',  progress: 100 },
  { name: 'Shahzad Sajid',   empId: 'EMP-003',  dept: 'Plumbing',   institute: 'Cisco', program: 'Painter',    startDate: 'June 2022',  endDate: '11.04.2022', score: 40,  result: null, resultStyle: '', progress: 40 },
  { name: 'Ahmad Faris',     empId: 'EMP-004',  dept: 'Electrical', institute: 'TechTribe', program: 'Welder',  startDate: '1-04-2022',  endDate: '17.04.2022', score: null, result: 'Completed', resultStyle: 'bg-green-100 text-green-700', progress: 100 },
];

export default function ParticipantTracking() {
  const [activeFilter, setActiveFilter] = useState('All Participants');
  const filters = ['All Participants', 'Completed', 'In Progress', 'Not Started'];

  return (
    <div className="bg-[#1a3a8f] overflow-hidden shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4">
        <div>
          <h2 className="text-sm font-bold text-white">Participant Tracking</h2>
          <div className="flex items-center gap-2 mt-1">
            {[
              { label: '48 Total', style: 'bg-white/15 text-white' },
              { label: '27 Active', style: 'bg-white/15 text-white' },
              { label: '5 Filters', style: 'bg-white/15 text-white' },
            ].map((b, i) => (
              <span key={i} className={`text-[9px] font-bold px-2 py-0.5 rounded ${b.style}`}>{b.label}</span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 bg-white/15 hover:bg-white/25 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors">
            <Download size={12} />
            Export XLS
          </button>
          <button className="flex items-center gap-1.5 bg-blue-500 hover:bg-blue-400 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors">
            <UserPlus size={12} />
            Add Participant
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-2 px-5 pb-3 flex-wrap">
        {filters.map(f => (
          <button key={f} onClick={() => setActiveFilter(f)}
            className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors ${
              activeFilter === f ? 'bg-white text-blue-700' : 'bg-white text-blue-700 hover:bg-white/20'
            }`}>
            {f}
          </button>
        ))}
        <div className="flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-lg px-2.5 py-1.5 ml-auto">
          <Search size={11} className="text-blue-200" />
          <input placeholder="Search..." className="text-xs outline-none bg-transparent text-white placeholder-blue-200 w-24" />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-t-xl overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              {['Employee', 'Department', 'Institute', 'Program', 'Start Date', 'Planned End', 'Result', 'Score', 'Start Test', 'Test Status', 'Actions'].map(h => (
                <th key={h} className="text-left px-3 py-2.5 text-[12px] font-bold text-gray-900 tracking-wider whitespace-nowrap">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {participants.map((p, i) => (
              <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                {/* Employee */}
                <td className="px-3 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-[10px] font-bold flex-shrink-0">
                      {p.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-900 leading-tight whitespace-nowrap">{p.name}</div>
                      <div className="text-[9px] text-gray-400">{p.empId}</div>
                    </div>
                  </div>
                </td>
                <td className="px-3 py-3 text-[11px] text-gray-600">{p.dept}</td>
                <td className="px-3 py-3 text-[11px] text-gray-600">{p.institute}</td>
                <td className="px-3 py-3 text-[11px] text-gray-600">{p.program}</td>
                <td className="px-3 py-3 text-[11px] text-gray-600 whitespace-nowrap">{p.startDate}</td>
                <td className="px-3 py-3 text-[11px] text-gray-600 whitespace-nowrap">{p.endDate}</td>
                <td className="px-3 py-3">
                  {p.result && (
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${p.resultStyle}`}>{p.result}</span>
                  )}
                </td>
                <td className="px-3 py-3 text-[11px] font-bold text-gray-800">{p.score ?? '—'}</td>
                <td className="px-3 py-3">
                  {/* Progress bar */}
                  <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-blue-600" style={{ width: `${p.progress}%` }} />
                  </div>
                  <div className="text-[9px] text-gray-400 mt-0.5">{p.progress}%</div>
                </td>
                <td className="px-3 py-3">
                  <button className="text-[10px] font-semibold text-blue-600 border border-blue-300 px-2 py-0.5 rounded hover:bg-blue-50 transition-colors whitespace-nowrap">
                    Start Test
                  </button>
                </td>
                <td className="px-3 py-3">
                  <button className="text-xs text-blue-600 font-semibold hover:text-blue-700">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="bg-white flex items-center justify-between px-5 py-3 border-t border-gray-100">
        <span className="text-[10px] text-gray-400">Showing 1–4 of 48 records</span>
        <div className="flex items-center gap-1">
          {[1, 2, 3].map(n => (
            <button key={n} className={`w-6 h-6 rounded text-[10px] font-semibold ${n === 1 ? 'bg-blue-600 text-white' : 'border border-gray-200 text-gray-500 hover:bg-gray-50'}`}>{n}</button>
          ))}
        </div>
      </div>
    </div>
  );
}