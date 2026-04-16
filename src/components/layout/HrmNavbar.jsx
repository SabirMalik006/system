import React, { useState, useRef, useEffect } from 'react';
import { Anchor, ChevronDown, Bell, Search } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { label: 'Dashboard', path: '/hrm-dashboard', hasDropdown: false },
  { label: 'Personnel', path: '/department', hasDropdown: false },
  { label: 'Attendance', path: '/attendance', hasDropdown: false },
  { label: 'Leave', path: '/leave-management', hasDropdown: false },
  { label: 'Development', path: null, hasDropdown: true },
  { label: 'Compliance', path: '/compliance', hasDropdown: false },
  { label: 'Reports', path: '/reports', hasDropdown: false },
];

const developmentDropdownItems = [
  { name: 'Inter Unit Transfer', path: '/inter-unit-transfer' },
  { name: 'Training Management', path: '/training-management' },
];

export default function HrmNavbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isDevelopmentOpen, setIsDevelopmentOpen] = useState(false);
  const dropdownTimeoutRef = useRef(null);
  const dropdownRef = useRef(null);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const isDevelopmentActive = () => {
    return developmentDropdownItems.some(item => location.pathname === item.path);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  // Handle mouse enter on dropdown trigger
  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setIsDevelopmentOpen(true);
  };

  // Handle mouse leave on dropdown trigger and dropdown menu
  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDevelopmentOpen(false);
    }, 150);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className="bg-gradient-to-r from-[#0B4E89] to-[#0F5D98] px-5 py-0 flex items-center gap-2 h-[52px] shadow-md">
      {/* Logo */}
      <div 
        onClick={() => handleNavigation('/hrm-dashboard')}
        className="flex items-center gap-2 mr-4 flex-shrink-0 cursor-pointer"
      >
        <div className="w-8 h-8 bg-blue-400 rounded-md flex items-center justify-center">
          <Anchor size={16} className="text-white" />
        </div>
        <span className="text-white font-bold text-base tracking-wide">HRMS</span>
      </div>

      {/* Nav links */}
      <div className="hidden md:flex items-center gap-0.5">
        {navLinks.map((link) => {
          const active = link.path ? isActive(link.path) : isDevelopmentActive();
          
          if (link.hasDropdown) {
            return (
              <div
                key={link.label}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="relative"
              >
                <div
                  className={`flex items-center gap-1 px-3 py-1.5 text-sm transition-colors rounded-sm cursor-pointer ${
                    active
                      ? 'text-[#3B82F6] font-semibold border-b-2 border-[#3B82F6]'
                      : 'text-[#FFFFFF] hover:text-[#3B82F6]'
                  }`}
                  style={active ? { borderRadius: 0 } : {}}
                >
                  {link.label}
                  <ChevronDown size={10} className={`mt-1 transition-transform duration-200 ${isDevelopmentOpen ? 'rotate-180' : ''}`} />
                </div>

                {/* Dropdown Menu - No Background Color */}
                {isDevelopmentOpen && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg py-1 z-50"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {developmentDropdownItems.map((item) => (
                      <div
                        key={item.name}
                        onClick={() => {
                          handleNavigation(item.path);
                          setIsDevelopmentOpen(false);
                        }}
                        className={`block px-4 py-2 text-sm cursor-pointer rounded-md mx-1 ${
                          location.pathname === item.path
                            ? 'bg-gray-100 text-[#1A8FA0] font-semibold'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {item.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          }
          
          return (
            <div
              key={link.label}
              onClick={() => handleNavigation(link.path)}
              className={`flex items-center gap-1 px-3 py-1.5 text-sm transition-colors rounded-sm cursor-pointer ${
                active
                  ? 'text-[#3B82F6] font-semibold border-b-2 border-[#3B82F6]'
                  : 'text-[#FFFFFF] hover:text-[#3B82F6]'
              }`}
              style={active ? { borderRadius: 0 } : {}}
            >
              {link.label}
            </div>
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
      <button className="relative p-2 ml-1 cursor-pointer">
        <Bell size={17} className="text-blue-200" />
        <span className="absolute top-1 right-1 w-2 h-2 bg-[#EF4444] rounded-full border border-[#0B4E89]" />
      </button>

      {/* User */}
      <div 
        onClick={() => handleNavigation('/personnel-profile')}
        className="flex items-center gap-2 ml-1 cursor-pointer"
      >
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