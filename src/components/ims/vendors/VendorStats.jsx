import React from 'react';

const VendorStats = () => {
    const stats = [
        { label: "Total Orders", value: "142", subtext: "TOTAL ORDERS" },
        { label: "Active Vendors", value: "128", subtext: "ACTIVE VENDORS" },
        { label: "Blacklisted", value: "04", subtext: "BLACKLISTED" },
        { label: "Avg Order", value: "4.82", subtext: "AVG ORDER" }
    ];

    return (
        <div className="grid grid-cols-4 gap-4 mb-6">
            {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 p-4">
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-xs text-gray-500 mt-1">{stat.subtext}</div>
                </div>
            ))}
        </div>
    );
};

export default VendorStats;