import React from 'react';

const StatsCircles = () => {
  const stats = [
    {
      label: "TOTAL CATEGORIES",
      value: "24",
      subtext: "ACTIVE",
      trend: "+2 THIS MONTH",
      image: "/Background (4).svg",
      textColor: "text-[#0F172A]",
      trendColor: "text-[#94A3B8]",
      borderColor: "#1A8FA0",     
    },
    {
      label: "LOW STOCK",
      value: "18",
      subtext: "ITEMS",
      trend: "ACTION REQUIRED",
      image: "/Background (3).svg",
      textColor: "text-[#0F172A]",
      trendColor: "text-red-600",
      borderColor: "#640404",     
    },
    {
      label: "SYSTEM HEALTH",
      value: "",
      subtext: "Last Sync",
      trend: "4 MINS AGO",
      status: "HEALTHY STATUS",
      image: "/Background (5).svg",
      textColor: "text-[#0F172A]",
      trendColor: "text-[#06B6D4]",
      borderColor: "#1E4D7B",     
    },
  ];

  return (
    <div className="flex flex-wrap gap-35 justify-center md:justify-center my-10 ">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`
            w-60 h-60
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
          <div className="relative z-1 flex flex-col items-center">
            {/* Image */}
           
              <img 
                src={stat.image} 
                alt={stat.label} 
                className="w-10 h-10 sm:w-18 sm:h-18 absolute -top-14 object-contain z-10 "
              />
           

            {/* Label */}
            <div className="text-xs sm:text-md font-medium text-[#94A3B8] tracking-wide uppercase mb-1 ">
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
            <div className="mt-3 flex flex-col items-center gap-3">
              {stat.value && (
                <div className="text-sm text-gray-600 font-medium">
                  {stat.subtext}
                </div>
              )}
              {/* Show both trend and status in separate lines for third card */}
              {stat.status ? (
                <div className="flex flex-col items-center gap-0.5">
                  <div className={`text-xs font-medium ${stat.trendColor}`}>
                    {stat.trend}
                  </div>
                  <div className={`text-xs font-medium  ${stat.trendColor}`}>
                    {stat.status}
                  </div>
                </div>
              ) : (
                <div className={`text-xs font-medium ${stat.trendColor}`}>
                  {stat.trend}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCircles;