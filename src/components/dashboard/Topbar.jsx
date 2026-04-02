import React from 'react';
import { Bell, Search, ChevronDown, Settings } from 'lucide-react';

export default function Topbar() {
  return (
    <header className="fixed top-0 left-0 right-0 h-[56px] bg-white border-b border-gray-200 flex items-center px-6 gap-4 z-50 shadow-sm">
      {/* Logo / Brand */}
      <div className="flex items-center gap-2 mr-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1a6cb5] to-[#2ec4b6] flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <rect x="1" y="1" width="5" height="5" rx="1.5" fill="white"/>
            <rect x="8" y="1" width="5" height="5" rx="1.5" fill="white" opacity=".7"/>
            <rect x="1" y="8" width="5" height="5" rx="1.5" fill="white" opacity=".7"/>
            <rect x="8" y="8" width="5" height="5" rx="1.5" fill="white" opacity=".5"/>
          </svg>
        </div>
        <div>
          <div className="font-bold text-sm text-gray-900 leading-none">IMS</div>
          <div className="text-[9px] text-gray-400 tracking-wide uppercase">Inventory</div>
        </div>
      </div>

      <div className="w-px h-6 bg-gray-200" />

      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5">
        <span className="text-gray-400 text-sm">IMS</span>
        <span className="text-gray-400 text-sm">/</span>
        <span className="text-gray-900 text-sm font-semibold">Dashboard</span>
      </div>

      {/* Nav links */}
      <nav className="flex items-center gap-1 ml-2">
        {['Dashboard', 'Analytics', 'Inventory', 'Procurement', 'Reports'].map((item, i) => (
          <button key={item} className={`px-3 py-1.5 rounded-md text-sm transition-all ${
            i === 0 
              ? 'bg-[#1a6cb5] text-white font-semibold' 
              : 'text-gray-500 hover:bg-gray-100'
          }`}>
            {item}
          </button>
        ))}
      </nav>

      <div className="flex-1" />

      {/* Search */}
      <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-1.5 w-52">
        <Search size={14} className="text-gray-400" />
        <input placeholder="Search resources..." className="border-none bg-transparent outline-none text-sm text-gray-900 w-full font-sans" />
      </div>

      <button className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center relative">
        <Bell size={16} className="text-gray-500" />
        <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500 border border-white" />
      </button>

      <button className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center">
        <Settings size={16} className="text-gray-500" />
      </button>

      <div className="flex items-center gap-2 cursor-pointer px-2 py-1 rounded-lg border border-gray-200">
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#1a6cb5] to-[#2ec4b6] flex items-center justify-center text-white text-xs font-bold">A</div>
        <span className="text-sm font-medium text-gray-900">Admin</span>
        <ChevronDown size={13} className="text-gray-400" />
      </div>
    </header>
  );
}