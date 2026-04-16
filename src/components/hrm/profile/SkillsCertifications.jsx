import React from 'react';
import { Award, Plus, AlertTriangle } from 'lucide-react';

const skills = [
    { name: 'Electrical Works', cert: 'Cert: EW-2021-0099', expiry: 'Expires: 30 Jun 2026', level: 'Expert', levelStyle: 'bg-[#3B82F6] text-white', pct: 95, expiring: false },
    { name: 'Tools & Equipment', cert: 'Cert: TE-2022-0441', expiry: 'Expires: 15 Dec 2025', level: 'Expert', levelStyle: 'bg-[#3B82F6] text-white', pct: 90, expiring: false },
    { name: 'Safety Compliance', cert: 'Cert: SC-2023-007', expiry: 'Expires: 01 Apr 2025', level: 'Advanced', levelStyle: 'bg-[#0C3188] text-white', pct: 75, expiring: true },
    { name: 'HVAC / Mechanical', cert: 'No certification', expiry: 'No expiry', level: 'Intermediate', levelStyle: 'bg-[#0C3188] text-white', pct: 55, expiring: false },
    { name: 'Civil / RCC Works', cert: 'No certification', expiry: 'No expiry', level: 'Beginner', levelStyle: 'bg-[#529CE5] text-white', pct: 25, expiring: false },
];

const levelColors = {
    'Expert': '#3B82F6',
    'Advanced': '#2563eb',
    'Intermediate': '#60a5fa',
    'Beginner': '#bfdbfe',
};

export default function SkillsCertifications() {
    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-100">
                <div className="flex items-center gap-2">
                    <div className="bg-[#1A6FC4] p-3 rounded-md">
                        <Award size={10} className="text-white" />
                    </div>
                    <h2 className="text-sm font-bold text-gray-800">Skills &amp; Certifications</h2>
                </div>
                <button className="flex items-center gap-1 text-xs font-bold bg-[#1A6FC4] text-white px-3 py-1.5 rounded-md hover:bg-blue-700 transition-colors">
                    <Plus size={12} />
                    Add
                </button>
            </div>

            {/* Main Content - Height badha di */}
            <div className="p-5 flex flex-col gap-4 min-h-[380px]">   {/* ← Yeh line change ki hai */}
                {skills.map((s, i) => (
                    <div key={i} className="space-y-1.5">
                        <div className="flex items-start justify-between">
                            <div className="flex-1 pr-3">
                                <div className="text-sm font-bold text-[#0D1B2E] leading-tight">{s.name}</div>
                                <div className="text-[12px] text-[#7A8BA5] mt-0.5">{s.cert}</div>
                                <div className="flex items-center gap-1 text-[12px] text-[#1E293B]">
                                    {s.expiring && <AlertTriangle size={9} className="text-orange-500" />}
                                    {s.expiry}
                                </div>
                            </div>
                            <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-xl flex-shrink-0 ${s.levelStyle}`}>
                                {s.level}
                            </span>
                        </div>
                        
                        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div
                                className="h-full rounded-full transition-all duration-300"
                                style={{ width: `${s.pct}%`, background: levelColors[s.level] }}
                            />
                        </div>
                    </div>
                ))}

                {/* Legend - thoda better spacing */}
                <div className="flex items-center gap-x-4 gap-y-2 mt-3 flex-wrap pt-2 border-t border-gray-100">
                    {Object.entries(levelColors).map(([label, color]) => (
                        <div key={label} className="flex items-center gap-2">
                            <span 
                                className="w-2.5 h-2.5 rounded-sm flex-shrink-0" 
                                style={{ background: color }} 
                            />
                            <span className="text-[12px] text-[#7A8BA5]">{label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}