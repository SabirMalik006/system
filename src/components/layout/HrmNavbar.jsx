import React from 'react';
import { Anchor, ChevronDown, Bell, Search } from 'lucide-react';

const navLinks = [
  { label: 'Dashboard',   hasDropdown: false },
  { label: 'Personnel',   hasDropdown: false },
  { label: 'Attendance',  hasDropdown: false },
  { label: 'Leave',       hasDropdown: false },
  { label: 'Development', hasDropdown: true  },
  { label: 'Compliance',  hasDropdown: false },
  { label: 'Reports',     hasDropdown: false },
];

export default function HrmNavbar({ activePage = 'Compliance' }) {
  return (
    <nav className="bg-gradient-to-r from-[#0B4E89] to-[#0F5D98] px-5 py-0 flex items-center gap-2 h-[52px] shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-2 mr-4 flex-shrink-0">
        <div className="w-8 h-8 bg-blue-400 rounded-md flex items-center justify-center">
          <Anchor size={16} className="text-white" />
        </div>
        <span className="text-white font-bold text-base tracking-wide">HRMS</span>
      </div>

      {/* Nav links */}
      <div className="hidden md:flex items-center gap-0.5">
        {navLinks.map(link => {
          const isActive = link.label === activePage;
          return (
            <button
              key={link.label}
              className={`flex items-center gap-1 px-3 py-1.5 text-sm transition-colors rounded-sm ${
                isActive
                  ? 'text-[#3B82F6] font-semibold border-b-2 border-[#3B82F6]'
                  : 'text-[#FFFFFF] hover:text-[#3B82F6]'
              }`}
              style={isActive ? { borderRadius: 0 } : {}}
            >
              {link.label}
              {link.hasDropdown && <ChevronDown size={10} className='mt-1' />}
            </button>
          );
        })}
      </div>

      <div className="flex-1" />

      {/* Search */}
      <div className="hidden sm:flex items-center gap-2 bg-[#F8FAFC] border border-white/20 rounded-lg px-3 py-1.5 w-52">
        <Search size={13} className="text-[#64748B] flex-shrink-0" />
        <input
          placeholder="Search employees, reports..."
          className="bg-transparent text-xs text-white outline-none w-full placeholder-[#64748B]"
        />
      </div>

      {/* Bell */}
      <button className="relative p-2 ml-1">
        <Bell size={17} className="text-blue-200" />
        <span className="absolute top-1 right-1 w-2 h-2 bg-[#EF4444] rounded-full border border-[#0B4E89]" />
      </button>

      {/* User */}
      <div className="flex items-center gap-2 ml-1 cursor-pointer">
        <div className="text-right hidden sm:block">
          <div className="text-white text-xs font-bold leading-none">DW &amp; CE</div>
          <div className="text-blue-200 text-[14px]">Director</div>
        </div>
        <div className="w-8 h-8 rounded-full bg-blue-300 flex items-center justify-center text-xs font-bold text-blue-900 relative">
          DW
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border border-[#0B4E89]" />
        </div>
      </div>
    </nav>
  );
}