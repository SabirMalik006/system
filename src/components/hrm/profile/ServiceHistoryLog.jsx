import React from 'react';
import { History, Download, Plus } from 'lucide-react';

const history = [
    { designation: 'Senior Electrician', dept: 'Electrical Works', unit: 'CMES Compak', start: '01 Mar 2025', end: 'Present', remark: 'Annual Promotion', remarkStyle: 'bg-[#2563EB] text-white' },
    { designation: 'Electrician Grade II', dept: 'Electrical Works', unit: 'CMES Comlog', start: '15 Jun 2024', end: '28 Feb 2025', remark: 'Unit Transfer', remarkStyle: 'bg-[#2563EB] text-white' },
    { designation: 'Electrician Grade III', dept: 'Electrical Works', unit: 'CMES Comkar', start: '12 Jun 2022', end: '14 Jun 2024', remark: 'Performance Review', remarkStyle: 'bg-[#3581FD] text-white' },
    { designation: 'Electrician Technician', dept: 'General Operations', unit: 'CMES Comkar', start: '12 Jun 2022', end: '11 Jan 2022', remark: 'Initial Recruitment', remarkStyle: 'bg-[#1773B5] text-white' },
];

export default function ServiceHistoryLog() {
    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-100">
                <div className="flex items-center gap-2">
                    <History size={14} className="text-blue-500" />
                    <h2 className="text-sm font-bold text-gray-800">Service History Log</h2>

                </div>
                <div className="flex items-center gap-2">
                    <span className="text-[10px] text-[#1565C0] font-semibold bg-[#E3F2FD] px-4 py-2 rounded-xl">4 Records</span>
                    <button className="flex items-center gap-1 text-xs font-semibold border border-gray-200 text-gray-600 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">
                        <Download size={12} />
                        Export PDF
                    </button>
                    <button className="flex items-center gap-1 text-xs font-bold bg-blue-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-700 transition-colors">
                        <Plus size={12} />
                        Add Entry
                    </button>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full min-w-[540px]">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-100">
                            {['DESIGNATION', 'UNIT', 'START DATE', 'END DATE', 'REMARKS'].map(h => (
                                <th
                                    key={h}
                                    className="text-left px-4 py-2.5 text-[9px] font-bold text-[#FFFFFFA6] tracking-wider"
                                    style={{
                                        background: 'linear-gradient(135deg, #1A6FC4, #0C355E)'
                                    }}
                                >
                                    {h}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {history.map((row, i) => (
                            <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                                <td className="px-4 py-3">
                                    <div className="text-xs font-bold text-gray-900">{row.designation}</div>
                                    <div className="text-[10px] text-gray-400">{row.dept}</div>
                                </td>
                                <td className="px-4 py-3">
                                    <div className="flex items-center gap-1.5 text-xs font-bold text-gray-600">
                                        <span className="w-4 h-4 rounded bg-gray-200 flex items-center justify-center text-[8px] font-bold text-gray-500">C</span>
                                        {row.unit}
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-xs text-gray-600 whitespace-nowrap">{row.start}</td>
                                <td className="px-4 py-3">
                                    {row.end === 'Present'
                                        ? <span className="text-[10px] font-bold bg-[#00C8E0] text-white px-3 py-0.5 rounded-full">{row.end}</span>
                                        : <span className="text-xs text-gray-600 whitespace-nowrap">{row.end}</span>
                                    }
                                </td>
                                <td className="px-4 py-3">
                                    <span className={`text-[10px] font-bold px-2 py-1 rounded ${row.remarkStyle}`}>{row.remark}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="px-5 py-3 border-t border-gray-100">
                <p className="text-[13px] text-[#7A8BA5] "> Records are immutable. Corrections must be added as new entries with <br /> remarks.</p>
            </div>
        </div>
    );
}