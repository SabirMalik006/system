import React, { useState } from 'react';

const employees = [
  {
    name: 'Balduse Ahromed', email: 'balduse.ahromed@email.com',
    id: 'EMP-4542', designation: 'Plumber', department: 'Maintenance',
    unit: 'CMPE Complex', type: 'Full-time', status: 'Active',
    joined: '12 Jan 2025', avatar: 'BA', avatarColor: 'bg-blue-100 text-blue-700',
  },
  {
    name: 'Khalid Azhar', email: 'khalid.azhar@email.com',
    id: 'EMP-0145', designation: 'Electrician', department: 'Maintenance',
    unit: 'CMGL Complex', type: 'Full-time', status: 'Active',
    joined: '24 Mar 2025', avatar: 'KA', avatarColor: 'bg-green-100 text-green-700',
  },
  {
    name: 'Sabir Khan', email: 'sabir.khan@email.com',
    id: 'EMP-9832', designation: 'Senior Electrician', department: 'Operations',
    unit: 'CMGL Complex', type: 'Full-time', status: 'On Leave',
    joined: '10 Oct 2025', avatar: 'SK', avatarColor: 'bg-orange-100 text-orange-700',
  },
  {
    name: 'Adnan Bashir', email: 'adnan.bashir@email.com',
    id: 'EMP-0533', designation: 'Carpenter', department: 'CMBL & Distr.',
    unit: '', type: 'Contract', status: 'Active',
    joined: '05 Feb 2025', avatar: 'AB', avatarColor: 'bg-purple-100 text-purple-700',
  },
  {
    name: 'Shakeel Sajid', email: 'shakeel.sajid@email.com',
    id: 'EMP-0557', designation: 'Painter', department: 'CMBL & Distr.',
    unit: '', type: 'Full-time', status: 'Active',
    joined: '30 May 2025', avatar: 'SS', avatarColor: 'bg-teal-100 text-teal-700',
  },
];

const statusStyle = {
  Active: 'bg-green-100 text-green-700',
  'On Leave': 'bg-orange-100 text-orange-700',
  Suspended: 'bg-red-100 text-red-700',
};

export default function DepartmentTable() {
  const [search, setSearch] = useState('');
  const [deptFilter, setDeptFilter] = useState('All Departments');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [unitFilter, setUnitFilter] = useState('All Units');
  const [typeFilter, setTypeFilter] = useState('All Type');

  const filtered = employees.filter(e => {
    const matchSearch = search === '' ||
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.id.toLowerCase().includes(search.toLowerCase()) ||
      e.designation.toLowerCase().includes(search.toLowerCase());
    const matchDept = deptFilter === 'All Departments' || e.department === deptFilter;
    const matchStatus = statusFilter === 'All Status' || e.status === statusFilter;
    const matchType = typeFilter === 'All Type' || e.type === typeFilter;
    return matchSearch && matchDept && matchStatus && matchType;
  });

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="flex flex-wrap items-center gap-2 p-4 border-b border-gray-100">
        <div className="relative flex-1 min-w-[200px]">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input type="text" placeholder="Search employee, ID, designation..."
            value={search} onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400" />
        </div>
        {[
          { val: deptFilter, set: setDeptFilter, opts: ['All Departments', 'Maintenance', 'Operations', 'CMBL & Distr.'] },
          { val: statusFilter, set: setStatusFilter, opts: ['All Status', 'Active', 'On Leave', 'Suspended'] },
          { val: unitFilter, set: setUnitFilter, opts: ['All Units', 'CMPE Complex', 'CMGL Complex'] },
          { val: typeFilter, set: setTypeFilter, opts: ['All Type', 'Full-time', 'Contract', 'Temporary'] },
        ].map((f, i) => (
          <select key={i} value={f.val} onChange={e => f.set(e.target.value)}
            className="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-200 cursor-pointer">
            {f.opts.map(o => <option key={o}>{o}</option>)}
          </select>
        ))}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#f0f7ff] text-left">
              {['Employee','Employee ID','Designation','Department','Unit','Type','Status','Joined','Actions'].map(h => (
                <th key={h} className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide whitespace-nowrap">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((emp, i) => (
              <tr key={i} className="border-t border-gray-50 hover:bg-blue-50/30 transition-colors">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 ${emp.avatarColor}`}>{emp.avatar}</div>
                    <div>
                      <p className="font-medium text-gray-800 text-xs">{emp.name}</p>
                      <p className="text-gray-400 text-xs">{emp.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-xs text-gray-500 whitespace-nowrap">{emp.id}</td>
                <td className="px-4 py-3 text-xs text-gray-700 whitespace-nowrap">{emp.designation}</td>
                <td className="px-4 py-3 text-xs text-gray-700 whitespace-nowrap">{emp.department}</td>
                <td className="px-4 py-3 text-xs text-gray-500 whitespace-nowrap">{emp.unit || '—'}</td>
                <td className="px-4 py-3 text-xs text-gray-500 whitespace-nowrap">{emp.type}</td>
                <td className="px-4 py-3">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusStyle[emp.status] || 'bg-gray-100 text-gray-500'}`}>{emp.status}</span>
                </td>
                <td className="px-4 py-3 text-xs text-gray-500 whitespace-nowrap">{emp.joined}</td>
                <td className="px-4 py-3">
                  <button className="text-gray-400 hover:text-blue-600 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0 7a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0 7a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100">
        <p className="text-xs text-gray-400">Showing 1 to {filtered.length} of {employees.length} employees</p>
        <div className="flex items-center gap-1">
          <button className="px-3 py-1.5 text-xs text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">Previous</button>
          {[1, 2, 3].map(p => (
            <button key={p} className={`w-7 h-7 text-xs rounded-lg transition-colors ${p === 1 ? 'bg-blue-600 text-white' : 'text-gray-500 hover:bg-gray-100'}`}>{p}</button>
          ))}
          <button className="px-3 py-1.5 text-xs text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">Next</button>
        </div>
      </div>
    </div>
  );
}