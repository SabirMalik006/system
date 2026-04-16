import React, { useState } from 'react';
import { Download, Plus, Search } from 'lucide-react';

const tabs = ['All Programs', 'All Status', 'All Types', 'Search program here...'];

const programs = [
  {
    name: 'Electrical Safety for Technicians ',
    text: 'Safe handling of HVSS systems',
    category: 'Technical Skills',
    type: 'Workshop',
    typeBg: 'bg-blue-100 text-blue-700',
    instructor: 'Eng. Kindred Mfr',
    startDate: '05 Feb 2023',
    endDate: '07 Feb 2023',
    duration: '3 Days',
    enrolled: '72',
    completed: '68',
    avgScore: '78.5',
    status: 'Completed',
    statusStyle: 'text-gray-800',
    statusDot: 'bg-green-500',
  },
  {
    name: 'MRI & Photo Safety',
    text: 'Fire protection standards',
    category: 'NSB',
    type: 'On-Site',
    typeBg: 'bg-purple-100 text-purple-700',
    instructor: 'Dr. Tariq Mahmood',
    startDate: '10 Feb 2023',
    endDate: '12 Feb 2023',
    duration: '3 Days',
    enrolled: '57',
    completed: '59',
    avgScore: '81.0',
    status: 'Completed',
    statusStyle: 'text-gray-800',
    statusDot: 'bg-green-500',
  },
  {
    name: 'Grounds & Heavy Equipment Operation',
    text: 'Optimal training for crane and forklift',
    category: 'Equipment Op.',
    type: 'On-Site',
    typeBg: 'bg-purple-100 text-purple-700',
    instructor: 'Eng. Imran Farooq',
    startDate: '18 Feb 2023',
    endDate: '22 Feb 2023',
    duration: '5 Days',
    enrolled: '45',
    completed: '24',
    avgScore: '77.9',
    status: 'Ongoing',
    statusStyle: 'text-gray-800',
    statusDot: 'bg-blue-500',
  },
  {
    name: 'First Aid & CPR Certification Emergency Response Training',
    text: 'Emergency response fundamentals',
    category: 'First Aid',
    type: 'Classroom',
    typeBg: 'bg-green-100 text-green-700',
    instructor: 'Dr. Rukhsana Ali',
    startDate: '25 Feb 2023',
    endDate: '28 Feb 2023',
    duration: '2 Days',
    enrolled: '49',
    completed: '0',
    avgScore: '—',
    status: 'Upcoming',
    statusStyle: 'text-gray-800',
    statusDot: 'bg-orange-400',
  },
];

export default function TrainingPrograms() {
  const [activeTab, setActiveTab] = useState('All Programs');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 sm:px-5 py-4 border-b border-gray-100">
        <h2 className="text-base sm:text-lg font-semibold text-gray-900">Training Programs</h2>
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
      <div className="flex flex-wrap items-center gap-2 px-4 sm:px-5 py-3 border-b border-gray-100">
        {['All Programs', 'All Status', 'All Types'].map(tab => (
          <button 
            key={tab} 
            onClick={() => setActiveTab(tab)}
            className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors ${
              activeTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {tab}
          </button>
        ))}
        <div className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1.5 ml-auto">
          <Search size={11} className="text-gray-400" />
          <input 
            placeholder="Search program here..." 
            className="text-xs outline-none bg-transparent text-gray-600 placeholder-gray-400 w-36 sm:w-48"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1000px]">
          <thead>
            <tr className="bg-[#1E4D7B]">
              <th className="text-left px-3 py-2.5 text-[10px] sm:text-[11px] font-bold text-white tracking-wider whitespace-nowrap">Title</th>
              <th className="text-left px-3 py-2.5 text-[10px] sm:text-[11px] font-bold text-white tracking-wider whitespace-nowrap">Category</th>
              <th className="text-left px-3 py-2.5 text-[10px] sm:text-[11px] font-bold text-white tracking-wider whitespace-nowrap">Type</th>
              <th className="text-left px-3 py-2.5 text-[10px] sm:text-[11px] font-bold text-white tracking-wider whitespace-nowrap">Instructor</th>
              <th className="text-left px-3 py-2.5 text-[10px] sm:text-[11px] font-bold text-white tracking-wider whitespace-nowrap">Start Date</th>
              <th className="text-left px-3 py-2.5 text-[10px] sm:text-[11px] font-bold text-white tracking-wider whitespace-nowrap">End Date</th>
              <th className="text-left px-3 py-2.5 text-[10px] sm:text-[11px] font-bold text-white tracking-wider whitespace-nowrap">Duration</th>
              <th className="text-left px-3 py-2.5 text-[10px] sm:text-[11px] font-bold text-white tracking-wider whitespace-nowrap">Enrolled</th>
              <th className="text-left px-3 py-2.5 text-[10px] sm:text-[11px] font-bold text-white tracking-wider whitespace-nowrap">Completed</th>
              <th className="text-left px-3 py-2.5 text-[10px] sm:text-[11px] font-bold text-white tracking-wider whitespace-nowrap">Avg Score</th>
              <th className="text-left px-3 py-2.5 text-[10px] sm:text-[11px] font-bold text-white tracking-wider whitespace-nowrap">Status</th>
              <th className="text-left px-3 py-2.5 text-[10px] sm:text-[11px] font-bold text-white tracking-wider whitespace-nowrap">Action</th>
            </tr>
          </thead>
          <tbody>
            {programs.map((p, i) => (
              <tr key={i} className="border-b border-gray-600 hover:bg-gray-50 transition-colors">
                <td className="px-3 py-5">
                  <div className="text-xs sm:text-sm font-semibold text-gray-900 leading-tight max-w-[200px]">{p.name}</div>
                  <div className='text-xs text-gray-400 ' > {p.text} </div>
                </td>
                <td className="px-3 py-3 text-xs sm:text-sm text-gray-600 whitespace-nowrap">{p.category}</td>
                <td className="px-3 py-3">
                  <span className={`text-[9px] sm:text-[12px] font-light px-2 py-0.5 rounded   `}>{p.type}</span>
                </td>
                <td className="px-3 py-3 text-xs sm:text-sm font-bold text-gray-600 ">{p.instructor}</td>
                <td className="px-3 py-3 text-xs sm:text-sm text-gray-600 whitespace-nowrap">{p.startDate}</td>
                <td className="px-3 py-3 text-xs sm:text-sm text-gray-600 whitespace-nowrap">{p.endDate}</td>
                <td className="px-3 py-3 text-xs sm:text-sm text-gray-600">{p.duration}</td>
                <td className="px-3 py-3 text-xs sm:text-sm text-gray-600">{p.enrolled}</td>
                <td className="px-3 py-3 text-xs sm:text-sm text-gray-600">{p.completed}</td>
                <td className="px-3 py-3 text-xs sm:text-sm font-bold text-[#1A6FC4]">{p.avgScore}</td>
                <td className="px-3 py-3">
                  <div className="flex items-center gap-1.5">
                   
                    <span className={`text-[10px] sm:text-[11px] font-semibold ${p.statusStyle}`}>{p.status}</span>
                  </div>
                </td>
                <td className="px-3 py-3">
                  <button className="text-xs sm:text-sm text-blue-600 font-semibold hover:text-blue-700">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 sm:px-5 py-3 border-t border-gray-100">
        <span className="text-[10px] sm:text-xs text-gray-400">Showing 1–4 of 4 Programs</span>
        <div className="flex items-center gap-1">
          {[1, 2, 3].map(n => (
            <button 
              key={n} 
              className={`w-6 h-6 rounded text-[10px] sm:text-xs font-semibold ${
                n === 1 ? 'bg-blue-600 text-white' : 'border border-gray-200 text-gray-500 hover:bg-gray-50'
              }`}
            >
              {n}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}