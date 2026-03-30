// import React from 'react';

// const ItemsStats = () => {
//     const stats = [
//         { label: "Active Customers", value: "24", icon: "👥", bgColor: "bg-blue-50", textColor: "text-blue-600" },
//         { label: "New Arrivals", value: "18", icon: "🆕", bgColor: "bg-green-50", textColor: "text-green-600" },
//         { label: "Last Sync", value: "Completed", icon: "🔄", bgColor: "bg-purple-50", textColor: "text-purple-600" }
//     ];

//     return (
//         <div className="flex gap-4 bg-black">
//             {stats.map((stat, index) => (
//                 <div key={index} className="flex items-center gap-3 bg-white rounded-xl border border-gray-200 p-3 px-4">
//                     <div className={`w-10 h-10 rounded-full ${stat.bgColor} flex items-center justify-center text-xl`}>
//                         {stat.icon}
//                     </div>
//                     <div>
//                         <div className="text-xs text-gray-500">{stat.label}</div>
//                         <div className="text-sm font-semibold text-gray-800">{stat.value}</div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default ItemsStats;