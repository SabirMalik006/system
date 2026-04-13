import React, { useState } from 'react';
import { Download, Plus, Search } from 'lucide-react';

const tabs = ['All Programs', 'All Status', 'All Types', 'Search program here...'];

const programs = [
  {
    name: 'Electrical Safety for Technologist',
    type: 'Safety',    typeBg: 'bg-blue-100 text-blue-700',
    instructor: '—',   startDate: '—',      endDate: '—',
    duration: '—',     enrolled: '—',       completed: '—',
    avgScore: '88.5',  status: 'Ongoing',   statusStyle: 'text-blue-600',
  },
  {
    name: 'HRIS For HR',
    type: 'Info',      typeBg: 'bg-orange-100 text-orange-600',
    instructor: 'Dr. Tariq Mehmood',
    startDate: 'Feb 17, 2023', endDate: '07/14/2026',
    duration: '7',     enrolled: '17',      completed: '38',
    avgScore: '65',    status: 'Postponed', statusStyle: 'text-orange-500',
  },
  {
    name: 'Crime & Equipment Replacement Safety',
    type: 'Info',      typeBg: 'bg-orange-100 text-orange-600',
    instructor: 'Dar Dar Mahmood Fahim',
    startDate: '22/08/22 12:0', endDate: '9 Days',
    duration: '9',     enrolled: '—',       completed: '—',
    avgScore: '725',   status: 'Ongoing',   statusStyle: 'text-blue-600',
  },
  {
    name: 'First Aid & Emergency Evacuation',
    type: 'Medical',   typeBg: 'bg-red-100 text-red-600',
    instructor: 'Mr. Rashidoon Ali',
    startDate: '27/09/22', endDate: '07/14/2026',
    duration: '1 Days', enrolled: '—',      completed: '—',
    avgScore: '—',     status: 'Completed', statusStyle: 'text-green-600',
  },
];

const statusDot = {
  'Ongoing':   'bg-blue-500',
  'Postponed': 'bg-orange-400',
  'Completed': 'bg-green-500',
};

export default function TrainingPrograms() {
  const [activeTab, setActiveTab] = useState('All Programs');

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
        <h2 className="text-sm font-bold text-gray-900">Training Programs</h2>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 border border-gray-200 text-gray-600 text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">
            <Download size={12} />
            Export CSV
          </button>
          <button className="flex items-center gap-1.5 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-blue-700 transition-colors">
            <Plus size={12} />
            Add Program
          </button>
        </div>
      </div>

      {/* Filters row */}
      <div className=" flex items-center gap-2 px-5 py-3 border-b border-gray-100 flex-wrap ">
        {['All Programs', 'All Status', 'All Types'].map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)}
            className={` text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors ${
              activeTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}>
            {tab}
          </button>
        ))}
        <div className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1.5 ml-auto">
          <Search size={11} className="text-gray-400" />
          <input placeholder="Search program here..." className="text-xs outline-none bg-transparent text-gray-600 placeholder-gray-400 w-36" />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto   "  >
        <table className="w-full min-w-[800px] ">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              {['#', 'Category', 'Type', 'Instructor', 'Start Date', 'End Date', 'Duration', 'Enrolled', 'Completed', 'Avg Score', 'Status', 'Action'].map(h => (
                <th key={h} className="text-left bg-[#1E4D7B] px-3 py-2.5 text-[9px] font-bold text-white tracking-wider whitespace-nowrap">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {programs.map((p, i) => (
              <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="px-3 py-3 text-xs text-gray-400">{i + 1}</td>
                <td className="px-3 py-3">
                  <div className="text-xs font-semibold text-gray-900 leading-tight max-w-[160px]">{p.name}</div>
                </td>
                <td className="px-3 py-3">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${p.typeBg}`}>{p.type}</span>
                </td>
                <td className="px-3 py-3 text-[11px] text-gray-600 whitespace-nowrap">{p.instructor}</td>
                <td className="px-3 py-3 text-[11px] text-gray-600 whitespace-nowrap">{p.startDate}</td>
                <td className="px-3 py-3 text-[11px] text-gray-600 whitespace-nowrap">{p.endDate}</td>
                <td className="px-3 py-3 text-[11px] text-gray-600">{p.duration}</td>
                <td className="px-3 py-3 text-[11px] text-gray-600">{p.enrolled}</td>
                <td className="px-3 py-3 text-[11px] text-gray-600">{p.completed}</td>
                <td className="px-3 py-3 text-[11px] font-semibold text-gray-800">{p.avgScore}</td>
                <td className="px-3 py-3">
                  <div className="flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full inline-block ${statusDot[p.status] || 'bg-gray-400'}`} />
                    <span className={`text-[10px] font-semibold ${p.statusStyle}`}>{p.status}</span>
                  </div>
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
      <div className="flex items-center justify-between px-5 py-3 border-t border-gray-100">
        <span className="text-[10px] text-gray-400">Showing 1–4 of 4 Programs</span>
        <div className="flex items-center gap-1">
          {[1, 2, 3].map(n => (
            <button key={n} className={`w-6 h-6 rounded text-[10px] font-semibold ${n === 1 ? 'bg-blue-600 text-white' : 'border border-gray-200 text-gray-500 hover:bg-gray-50'}`}>{n}</button>
          ))}
        </div>
      </div>
    </div>
  );
}