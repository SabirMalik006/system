import React from "react";

export default function Topbar() {
    return (
        <div className="mb-6">
            {/* Title - Top line */}
            <div className="mb-3 sm:mb-4">
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-[#0F172A] tracking-tight leading-tight text-center sm:text-left">
                    Stock Out Entry
                    <span className="text-xs sm:text-sm text-gray-400 font-normal ml-1 sm:ml-2">
                        (Item Insurance)
                    </span>
                </h1>
            </div>

            {/* Second line - Analytics & Insights + Button */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                {/* Analytics & Insights with Icon - Center on mobile, left on desktop */}
                <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-2.5 w-full sm:w-auto">
                    {/* SVG Icon */}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-7 sm:h-7 text-black">
                        <path d="M4 20H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M6 16L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M10 16L10 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M14 16L14 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M18 16L18 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>

                    <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-black tracking-wide">
                        Analytics & Insights
                    </p>
                </div>

                <button className="flex items-center justify-center gap-1.5 sm:gap-2 bg-gradient-to-r from-[#3B82F6] to-[#1E4D7B] hover:from-[#2563EB] hover:to-[#1A3A6B] text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md text-center leading-tight whitespace-nowrap">
                    <img src="/a.png" alt="" className="filter brightness-0 invert w-3 h-3 sm:w-4 sm:h-4" />
                    Stock Out Entry
                </button>
            </div>
        </div>
    );
}