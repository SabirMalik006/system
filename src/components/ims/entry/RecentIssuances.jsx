import React from 'react';

const RecentIssuances = ({ showRecentIssuances = true }) => {
    const issuances = [
        { name: "Hammad Yousaf", item: "Selling For 56", time: "10m ago" },
        { name: "Ali Muhammad", item: "Electrical Distribution Box", time: "11 ago" },
        { name: "Umer Nawaz", item: "Water Tap (Steel)", time: "20 ago" }
    ];

    if (!showRecentIssuances) return null;

    return (
        <div className="bg-white rounded-xl border border-gray-200 p-3 sm:p-4 w-full">
            <h2 className="text-sm sm:text-base font-semibold text-gray-800 mb-3 sm:mb-4 border-b border-gray-200 pb-2 text-center">Recent Issuances</h2>
            
            {/* Responsive Grid - Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {issuances.map((item, index) => (
                    <div key={index} className="border border-[#2478B5] rounded-lg p-3 hover:shadow-md transition-shadow">
                        <div className="text-sm font-medium text-gray-800 truncate">{item.name}</div>
                        <div className="text-xs text-gray-500 mt-1 truncate">{item.item}</div>
                        <div className="text-xs text-gray-400 mt-2">{item.time}</div>
                    </div>
                ))}
            </div>
            
            <div className="mt-4 pt-3 border-t border-gray-200">
                <button className="w-full text-xs sm:text-sm text-[#1A8FA0] hover:text-[#167a89] font-medium flex items-center justify-center gap-1">
                    View Activity Log
                    <span className="text-base sm:text-lg">→</span>
                </button>
            </div>
        </div>
    );
};

export default RecentIssuances;