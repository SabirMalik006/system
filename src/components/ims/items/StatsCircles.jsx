import React from 'react';

const StatsCircles = () => {
  const stats = [
    {
      label: "TOTAL CATEGORIES",
      value: "24",
      subtext: "ACTIVE",
      trend: "+2 THIS MONTH",
      icon: "📊",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      trendColor: "text-green-600",
      borderColor: "#1A8FA0",     // first
    },
    {
      label: "LOW STOCK",
      value: "18",
      subtext: "ITEMS",
      trend: "ACTION REQUIRED",
      icon: "⚠️",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-600",
      trendColor: "text-red-600",
      borderColor: "#640404",     // second
    },
    {
      label: "SYSTEM HEALTH",
      value: "",
      subtext: "Last Sync",
      trend: "4 MINS AGO",
      status: "HEALTHY STATUS",
      icon: "🔄",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      trendColor: "text-green-600",
      borderColor: "#1E4D7B",     // third
    },
  ];

  return (
    <div className="flex flex-wrap gap-15 justify-center md:justify-center my-10 ">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`
            w-70 h-70
            rounded-full
            bg-white
            shadow-md
            flex flex-col items-center justify-center
            text-center px-6
            relative
            overflow-hidden
          `}
          style={{
            border: `10px solid ${stat.borderColor}`,
          }}
        >
          {/* Background subtle glow */}
          <div
            className={`
              absolute inset-0 
              ${stat.bgColor} opacity-40 
              rounded-full scale-[2.5] blur-2xl
            `}
          />

          {/* Content layer */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Icon */}
            <div
              className={`
                w-16 h-16 sm:w-20 sm:h-20 
                rounded-full ${stat.bgColor} 
                flex items-center justify-center 
                text-3xl sm:text-4xl mb-4
                border border-white/70 shadow-sm
              `}
            >
              {stat.icon}
            </div>

            {/* Label */}
            <div className="text-xs sm:text-lg font-medium text-gray-800 tracking-wide uppercase mb-1">
              {stat.label}
            </div>

            {/* Value or subtext */}
            {stat.value ? (
              <div className={`text-4xl sm:text-3xl font-bold ${stat.textColor}`}>
                {stat.value}
              </div>
            ) : (
              <div className="text-2xl sm:text-2xl font-semibold text-gray-800 mt-1">
                {stat.subtext}
              </div>
            )}

            {/* Bottom row */}
            <div className="mt-3 flex flex-col items-center gap-0.5">
              {stat.value && (
                <div className="text-sm text-gray-600 font-medium">
                  {stat.subtext}
                </div>
              )}
              <div className={`text-xs font-medium ${stat.trendColor}`}>
                {stat.trend || stat.status}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCircles;