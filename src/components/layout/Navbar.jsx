import React, { useState } from 'react';
import { Search, ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ['Dashboard', 'Inventory', 'Procurements', 'Reports', 'Vendors'];

  return (
    <nav className="bg-[#1E4D7B] border-b border-gray-200 text-white sticky top-0 z-50">
      <div className="px-4 sm:px-6 py-2">
        <div className="flex items-center justify-between">
          {/* Left side - Logo and Menu */}
          <div className="flex items-center gap-4 sm:gap-8">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src="/Background.png" alt="IMS logo" className="w-6 h-6 sm:w-8 sm:h-8 object-cover rounded-md cursor-pointer" />
              <span className="text-lg sm:text-xl font-bold text-white">IMS</span>
            </div>

            {/* Desktop Menu Items - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-xs lg:text-sm font-light text-white transition-all duration-150 rounded-xl px-3 lg:px-6 py-1 hover:bg-[#2166A0] hover:text-white whitespace-nowrap"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Right side - Search and Profile */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Search Bar - Hidden on mobile, visible on tablet+ */}
            <div className="hidden sm:block relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70" size={16} />
              <input
                type="text"
                placeholder="Search resources..."
                className="pl-9 pr-4 py-1.5 text-sm rounded-md w-40 lg:w-64 bg-[#345E88] focus:outline-none focus:ring-1 focus:ring-[#1A8FA0] placeholder:text-white/50 text-white"
              />
            </div>

            {/* User Profile */}
            <div className="flex items-center gap-2 cursor-pointer relative">
              <div className="relative">
                <img src="/SVG.png" alt="" className="w-5 h-5" />
                <p className="h-2 w-2 absolute bg-red-500 rounded-full -top-1 -right-1"></p>
              </div>
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center">
                <img src="/Border.png" alt="Border" className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="hidden sm:block">
                <p className="text-[10px] sm:text-xs font-medium text-white leading-tight">
                  DW & CE <br /> 
                  <span className='text-[10px] sm:text-xs font-light text-[#1A8FA0]'>DIRECTOR</span>
                </p>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-1 text-white hover:bg-[#2166A0] rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 pb-3 border-t border-white/20 pt-3">
            {/* Mobile Search Bar */}
            <div className="relative mb-3">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70" size={16} />
              <input
                type="text"
                placeholder="Search resources..."
                className="w-full pl-9 pr-4 py-2 text-sm rounded-md bg-[#345E88] focus:outline-none focus:ring-1 focus:ring-[#1A8FA0] placeholder:text-white/50 text-white"
              />
            </div>
            
            {/* Mobile Menu Items */}
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm font-light text-white transition-all duration-150 rounded-lg px-3 py-2 hover:bg-[#2166A0]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
            
            {/* Mobile User Info */}
            <div className="mt-3 pt-3 border-t border-white/20">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <img src="/Border.png" alt="Border" className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">
                    DW & CE <br /> 
                    <span className='text-xs font-light text-[#1A8FA0]'>DIRECTOR</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;