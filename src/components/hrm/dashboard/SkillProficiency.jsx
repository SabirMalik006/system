import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const skills = [
  { skill: 'Technical Skills', Beginner: 20, Intermediate: 35, Advanced: 30, Expert: 15 },
  { skill: 'Safety Compliance', Beginner: 10, Intermediate: 25, Advanced: 40, Expert: 25 },
  { skill: 'Soft Skills',       Beginner: 25, Intermediate: 30, Advanced: 28, Expert: 17 },
  { skill: 'IT & Systems',      Beginner: 30, Intermediate: 35, Advanced: 22, Expert: 13 },
  { skill: 'Leadership',        Beginner: 15, Intermediate: 28, Advanced: 32, Expert: 25 },
];

const levelColors = ['#bfdbfe', '#3b82f6', '#1d4ed8', '#0d2a6e'];
const levels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];

export default function SkillProficiency() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-bold text-gray-800">Skill Proficiency</h2>
        <div className="flex items-center gap-2 flex-wrap">
          {levels.map((l, i) => (
            <div key={l} className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-sm" style={{ background: levelColors[i] }} />
              <span className="text-[9px] text-gray-500">{l}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={skills} layout="vertical" barSize={12}
            margin={{ top: 0, right: 10, left: 20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" horizontal={false} />
            <XAxis type="number" tick={{ fontSize: 9, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
            <YAxis type="category" dataKey="skill" tick={{ fontSize: 9, fill: '#64748b' }} axisLine={false} tickLine={false} width={80} />
            <Tooltip contentStyle={{ borderRadius: 8, border: '1px solid #e2e8f0', fontSize: 10 }} />
            {levels.map((level, i) => (
              <Bar key={level} dataKey={level} stackId="a" fill={levelColors[i]}
                radius={i === levels.length - 1 ? [0, 3, 3, 0] : [0, 0, 0, 0]} />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}