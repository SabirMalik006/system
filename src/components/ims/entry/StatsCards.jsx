import React from 'react';

const StatsCards = ({ showLowStockAlert = true }) => {
    const stats = [
        { 
            label: "TOTAL ISSUANCES", 
            value: "24", 
            icon: "/Overlay.png",
            bgGradient: "bg-gradient-to-t from-[#1E4D7B] to-[#1E4D7B]",
            alwaysShow: true
        },
        { 
            label: "PENDING APPROVALS", 
            value: "05", 
            icon: "/Overlay (1).png",
            bgGradient: "bg-gradient-to-t from-[#1E4D7B] to-[#1E4D7B]",
            alwaysShow: true
        },
        { 
            label: "APPROVED TOOM", 
            value: "12", 
            icon: "/Overlay (2).png",
            bgGradient: "bg-gradient-to-t from-[#1E4D7B] to-[#1E4D7B]",
            alwaysShow: true
        },
        { 
            label: "Low Stock Alerts", 
            value: "03 Alerts", 
            icon: "/Background (1).png",
            bgGradient: "from-[#640404] to-[#640404]",
            alwaysShow: false
        }
    ];

    // Filter stats based on showLowStockAlert prop
    const visibleStats = stats.filter(stat => stat.alwaysShow || showLowStockAlert);

    return (
        <div className="grid grid-cols-1 gap-4">
            {visibleStats.map((stat, index) => (
                <div 
                    key={index} 
                    className={`bg-gradient-to-b ${stat.bgGradient} rounded-lg border border-gray-200 p-2 py-3 px-4 text-white`}
                >
                    <div className="flex items-center gap-2">
                        <img src={stat.icon} alt="" className='h-11 w-11 mr-2' />
                        <div>
                            <div className="text-sm">{stat.label}</div>
                            <div className="text-2xl font-bold">{stat.value}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StatsCards;