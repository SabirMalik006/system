// import React from 'react';

// export default function InspectionHealth() {
//   const stats = [
//     { label: 'Pass Rate',              value: '76.2%', color: '#15803d', pct: 76 },
//     { label: 'Inspections This Month', value: '42 / 60', color: '#1a3a8f', pct: 70 },
//     { label: 'Overdue Kits',           value: '5 kits',  color: '#dc2626', pct: 20 },
//     { label: 'Avg Inspection Score',   value: '84.5',    color: '#0891b2', pct: 85 },
//   ];

//   return (
//     <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
//       <h3 className="text-sm font-bold text-gray-800 mb-4">Inspection Health</h3>
//       <div className="space-y-3">
//         {stats.map((s, i) => (
//           <div key={i}>
//             <div className="flex items-center justify-between mb-1">
//               <span className="text-xs text-gray-500">{s.label}</span>
//               <span className="text-xs font-bold" style={{ color: s.color }}>{s.value}</span>
//             </div>
//             <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
//               <div className="h-full rounded-full" style={{ width: `${s.pct}%`, background: s.color }} />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }