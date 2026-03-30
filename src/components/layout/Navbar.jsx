import React from 'react';
import { Search, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const menuItems = ['Dashboard', 'Inventory', 'Procurements', 'Reports', 'Vendors'];

  return (
    <nav className="bg-[#1E4D7B] border-b border-gray-200 px-6 py-2 text-white">
      <div className="flex items-center justify-between">
        {/* Left side - Logo and Menu */}
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/Background.png" alt="IMS logo" className="w-8 h-8 object-cover rounded-md cursor-pointer" />
            <span className="text-xl font-bold text-white">IMS</span>
          </div>

          {/* Menu Items */}
          <div className="flex items-center space-x-4">
            {menuItems.map((item) => {
              return (
                <a
                  key={item}
                  href="#"
                  className="text-sm font-light text-white transition-all duration-150 rounded-xl px-6 py-1 hover:bg-[#2166A0] hover:text-white"
                >
                  {item}
                </a>
              );
            })}
          </div>
        </div>

        {/* Right side - Search and Profile */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#FFFFFFB2" size={16} />
            <input
              type="text"
              placeholder="Search resources..."
              className="pl-9 pr-4 py-1.5 text-sm rounded-md w-64 bg-[#345E88] focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* User Profile */}
          <div className="flex items-center space-x-2 cursor-pointer">
            <img src="/SVG.png" alt="" />
            <p className='h-1.5 w-1.5 absolute bg-[#ff0000] rounded right-31 top-4' ></p>
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <img src="/Border.png" alt="Border" />
            </div>
            <div className="flex items-center">
              <p className="text-xs font-medium text-white pt-1">DW & CE <br /> <span className='text-xs font-light text-[#1A8FA0]' >  DIRECTOR  </span></p>
              
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;