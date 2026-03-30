import React from 'react';

const VendorSidebar = () => {
    const menuItems = ["Overview", "Quarterly", "Procedures", "Reports", "Videos", "FAQs", "Contact Us"];

    return (
        <div className="bg-white rounded-xl border border-gray-200 p-4">
            <h2 className="text-lg font-bold text-gray-800 mb-4">IMS</h2>
            <nav className="space-y-2">
                {menuItems.map((item, idx) => (
                    <a
                        key={idx}
                        href="#"
                        className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                            item === "Overview"
                                ? "bg-[#1A8FA0] text-white"
                                : "text-gray-600 hover:bg-gray-100"
                        }`}
                    >
                        {item}
                    </a>
                ))}
            </nav>
        </div>
    );
};

export default VendorSidebar;