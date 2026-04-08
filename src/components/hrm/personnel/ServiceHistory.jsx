import React, { useState } from 'react';
import { History, PlusCircle, Trash2, Plus } from 'lucide-react';

const initialEntries = [
  { company: 'Abcd Solutions', designation: 'Electrician', from: '12/30/2024', to: '12/30/2025' },
  {comp : 'Add New Company' , des : 'Add Role' , from : '--/--/----' , to : '--/--/----'}
];

export default function ServiceHistory() {
  const [entries, setEntries] = useState(initialEntries);

  const addEntry = () => {
    setEntries([...entries, { company: '', designation: '', from: '', to: '' }]);
  };

  const removeEntry = (i) => setEntries(entries.filter((_, idx) => idx !== i));

  const updateEntry = (i, field, value) => {
    const updated = entries.map((e, idx) => idx === i ? { ...e, [field]: value } : e);
    setEntries(updated);
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4  rounded flex mt-1 items-center justify-center">
           <img src="/33.png" alt="" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900">Service History</h2>
        </div>
        <button
          onClick={addEntry}
          className="flex items-center gap-1.5 bg-[#137FEC] hover:bg-blue-700 text-white text-sm font-semibold px-3 py-2 rounded-md transition-colors"
        >
          <PlusCircle size={13} />
          Add Entry
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[500px] ">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100 ">
              {['Company Name', 'Designation', 'From Date', 'To Date', 'Actions'].map(h => (
                <th key={h} className="text-left px-4 py-3 text-[10px] font-bold text-[#64748B] tracking-wider uppercase">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, i) => (
              <tr
                key={i}
                className={i % 2 === 0 ? 'bg-[#1A6fC4]' : 'bg-[#89B4E0]'}
              >
                <td className="px-4 py-3 ">
                  <input
                    value={entry.company}
                    onChange={e => updateEntry(i, 'company', e.target.value)}
                    placeholder="Add New Company"
                    className={`text-sm w-full bg-transparent outline-none placeholder-${i % 2 === 0 ? 'blue-200' : 'blue-300'} ${i % 2 === 0 ? 'text-black' : 'text-white'}`}
                  />
                </td>
                <td className="px-4 py-3">
                  <input
                    value={entry.designation}
                    onChange={e => updateEntry(i, 'designation', e.target.value)}
                    placeholder="Add Role"
                    className={`text-sm w-full bg-transparent outline-none placeholder-${i % 2 === 0 ? 'blue-200' : 'blue-300'} ${i % 2 === 0 ? 'text-black' : 'text-white'}`}
                  />
                </td>
                <td className="px-4 py-3">
                  <input
                    value={entry.from}
                    onChange={e => updateEntry(i, 'from', e.target.value)}
                    placeholder="--/--/----"
                    className={`text-sm w-full bg-transparent outline-none placeholder-${i % 2 === 0 ? 'blue-200' : 'blue-300'} ${i % 2 === 0 ? 'text-black' : 'text-white'}`}
                  />
                </td>
                <td className="px-4 py-3 ">
                  <input
                    value={entry.to}
                    onChange={e => updateEntry(i, 'to', e.target.value)}
                    placeholder="--/--/----"
                    className={`text-sm w-full bg-transparent outline-none placeholder-${i % 2 === 0 ? 'blue-200' : 'blue-300'} ${i % 2 === 0 ? 'text-black' : 'text-white'}`}
                  />
                </td>
                <td className="px-4 py-3  text-center">
                  {entry.comp ? (
                    <button onClick={() => removeEntry(i)} className={`${i % 2 === 0 ? 'text-black hover:text-white' : 'text-white hover:text-red-500'} transition-colors`}>
                      <Plus size={15} />
                    </button>
                  ) : (
                    <button onClick={addEntry} className={`${i % 2 === 0 ? 'text-black hover:text-white' : 'text-black hover:text-black'} transition-colors`}>
                      <Trash2 size={15} />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
          
        </table>
      </div>
    </div>
  );
}