import React, { useState } from 'react';

const employees = [
  {
    name: 'Subhan Mehmood', email: 'subhan.m@hrms.com',
    id: 'EMP-0142', designation: 'Plumber', department: 'Maintenance',
    unit: 'CMES CamKar', type: 'Full-time', status: 'Active',
    joined: '12 Jan 2025', avatar: 'https://ui-avatars.com/api/?name=Subhan+Mehmood&background=random',
  },
  {
    name: 'Khalid Azhar', email: 'khalid.a@hrms.com',
    id: 'EMP-0145', designation: 'Electrician', department: 'Maintenance',
    unit: 'CMES CamKar', type: 'Full-time', status: 'Active',
    joined: '24 Mar 2025', avatar: 'https://ui-avatars.com/api/?name=Khalid+Azhar&background=random',
  },
  {
    name: 'Salar Khan', email: 'salar.k@hrms.com',
    id: 'EMP-9842', designation: 'Senior Electrician', department: 'Operations',
    unit: 'CMES CamKar', type: 'Full-time', status: 'On Leave',
    joined: '10 Oct 2023', avatar: 'https://ui-avatars.com/api/?name=Salar+Khan&background=random',
  },
  {
    name: 'Adnan Bashir', email: 'adnan.b@hrms.com',
    id: 'EMP-0155', designation: 'Carpenter', department: 'Maintenance',
    unit: 'CMES Dinar', type: 'Contract', status: 'Active',
    joined: '05 Feb 2023', avatar: 'https://ui-avatars.com/api/?name=Adnan+Bashir&background=random',
  },
  {
    name: 'Shakeel Sajid', email: 'shakeel.s@hrms.com',
    id: 'EMP-0162', designation: 'Painter', department: 'Maintenance',
    unit: 'CMES CamKar', type: 'Full-time', status: 'Active',
    joined: '18 May 2023', avatar: 'https://ui-avatars.com/api/?name=Shakeel+Sajid&background=random',
  },
];

const statusStyle = {
  Active: 'bg-[#3b82f6] text-white',
  'On Leave': 'bg-[#06b6d4] text-white',
  Suspended: 'bg-red-500 text-white',
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
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 flex flex-col mt-2">
      <div className="flex flex-wrap items-center gap-3 p-4 bg-white border-b border-gray-100/50">
        <div className="relative flex-1 min-w-[300px]">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input type="text" placeholder="Search employee ID, name, designation..."
            value={search} onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-[13px] border border-gray-200 rounded-lg bg-[#fafafa] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 transition-colors" />
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          {[
            { val: deptFilter, set: setDeptFilter, opts: ['All Departments', 'Maintenance', 'Operations', 'CMBL & Distr.'] },
            { val: statusFilter, set: setStatusFilter, opts: ['All Status', 'Active', 'On Leave', 'Suspended'] },
            { val: unitFilter, set: setUnitFilter, opts: ['All Units', 'CMES CamKar', 'CMES Dinar'] },
            { val: typeFilter, set: setTypeFilter, opts: ['All Type', 'Full-time', 'Contract', 'Temporary'] },
          ].map((f, i) => (
            <select key={i} value={f.val} onChange={e => f.set(e.target.value)}
              className="text-[13px] border border-gray-200 rounded-lg px-4 py-2 bg-white text-gray-600 focus:outline-none focus:border-blue-400 cursor-pointer min-w-[140px] appearance-none" style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%239ca3af%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.7rem top 50%', backgroundSize: '0.65rem auto' }}>
              {f.opts.map(o => <option key={o}>{o}</option>)}
            </select>
          ))}
        </div>
      </div>
      
      <div className="overflow-x-auto w-full">
        <table className="w-full text-sm text-left">
          <thead className="bg-[#1e6fbe] text-white">
            <tr>
              {['Employee','Employee ID','Designation','Department','Unit','Type','Status','Joined','Actions'].map((h, i) => (
                <th key={h} className={`px-4 py-3.5 text-[10px] font-bold uppercase tracking-wider whitespace-nowrap ${i === 8 ? 'text-center' : ''}`}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {filtered.map((emp, i) => (
              <tr key={i} className="hover:bg-blue-50/20 transition-colors">
                <td className="px-4 py-3.5">
                  <div className="flex items-center gap-3">
                    <img src={emp.avatar} alt={emp.name} className="w-9 h-9 rounded-full object-cover border border-gray-100" />
                    <div>
                      <p className="font-bold text-gray-800 text-[13px]">{emp.name}</p>
                      <p className="text-gray-400 text-[11px] mt-0.5">{emp.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3.5 text-[13px] text-gray-500 whitespace-nowrap font-medium">{emp.id}</td>
                <td className="px-4 py-3.5 text-[13px] text-gray-800 whitespace-nowrap font-bold">{emp.designation}</td>
                <td className="px-4 py-3.5 text-[13px] text-gray-500 whitespace-nowrap font-medium">{emp.department}</td>
                <td className="px-4 py-3.5 text-[13px] text-gray-500 whitespace-nowrap leading-snug w-24">
                  {emp.unit.split(' ').map((u, idx) => <React.Fragment key={idx}>{u}<br/></React.Fragment>)}
                </td>
                <td className="px-4 py-3.5 text-[13px] text-gray-500 whitespace-nowrap leading-snug w-24">
                  {emp.type.split('-').map((t, idx) => <React.Fragment key={idx}>{t}{idx===0&&'-'}<br/></React.Fragment>)}
                </td>
                <td className="px-4 py-3.5">
                  <span className={`text-[11px] font-medium px-3.5 py-1.5 rounded-full whitespace-nowrap shadow-sm ${statusStyle[emp.status] || 'bg-gray-100 text-gray-500'}`}>
                    {emp.status}
                  </span>
                </td>
                <td className="px-4 py-3.5 text-[13px] text-gray-500 whitespace-nowrap font-medium">{emp.joined}</td>
                <td className="px-4 py-3.5 text-center">
                  <button className="text-gray-300 hover:text-blue-600 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <line x1="12" y1="12" x2="12" y2="12" strokeWidth="2" strokeLinecap="round" className="text-gray-400" />
                      <line x1="12" y1="6" x2="12" y2="6" strokeWidth="2" strokeLinecap="round" className="text-gray-400" />
                      <line x1="12" y1="18" x2="12" y2="18" strokeWidth="2" strokeLinecap="round" className="text-gray-400" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between px-6 py-4 bg-[#fafbfc] border-t border-gray-100 rounded-b-xl">
        <p className="text-[12px] text-gray-500 font-medium">Showing 1 to {filtered.length} of 274 employees</p>
        <div className="flex items-center gap-1.5">
          <button className="px-3 py-1 text-[12px] font-medium text-gray-500 hover:text-gray-700 transition-colors">Previous</button>
          {[1, 2, 3].map(p => (
            <button key={p} className={`w-7 h-7 text-[12px] font-bold rounded-md flex items-center justify-center transition-colors ${p === 1 ? 'bg-[#1e6fbe] text-white shadow-sm' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>{p}</button>
          ))}
          <button className="px-3 py-1 text-[12px] font-medium text-gray-700 hover:text-gray-900 transition-colors">Next</button>
        </div>
      </div>
    </div>
  );
}