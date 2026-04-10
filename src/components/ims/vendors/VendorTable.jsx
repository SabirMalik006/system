import React from 'react';

const VendorTable = ({ vendors, onVendorClick }) => {
    const headers = ["NAME", "VENDOR ID", "SHIPPING ITEMS", "TOTAL ORDERS", "ON-TIME %", "RATING", "STATUS", "ACTIONS"];

    const getStatusBadge = (vendorName) => {
        const blacklistedVendors = ["Private Supplies Ltd.", "Nordic Builders"];
        const isBlacklisted = blacklistedVendors.includes(vendorName);
        
        if (isBlacklisted) {
            return (
                <span className="inline-flex px-3 py-1 text-xs font-medium rounded-full bg-red-100 text-red-700">
                    Blacklisted
                </span>
            );
        }
        return (
            <span className="inline-flex px-3 py-1 text-xs font-medium rounded-full bg-[#1A8FA0] text-white">
                Active
            </span>
        );
    };

    const handleVendorNameClick = (vendor) => {
        if (onVendorClick) {
            onVendorClick(vendor);
        }
    };

    return (
        <div className="overflow-x-auto">
            <table className="w-full">
                <thead>
                    <tr className="bg-gradient-to-r from-[#1E4D7B] to-[#2166A0]">
                        {headers.map((header, idx) => (
                            <th key={idx} className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider whitespace-nowrap">
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {vendors.map((vendor, idx) => (
                        <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                            <td 
                                className="px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-800 cursor-pointer hover:underline"
                                onClick={() => handleVendorNameClick(vendor)}
                            >
                                {vendor.name}
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-600">{vendor.id}</td>
                            <td className="px-4 py-3 text-sm text-gray-600">{vendor.shippingItems}</td>
                            <td className="px-4 py-3 text-sm text-gray-600">{vendor.totalOrders}</td>
                            <td className="px-4 py-3 text-sm text-gray-600">{vendor.onTime}</td>
                            <td className="px-4 py-3">
                                <div className="flex items-center gap-1">
                                    <span className="text-yellow-500">★★★★☆</span>
                                </div>
                            </td>
                            <td className="px-4 py-3">
                                {getStatusBadge(vendor.name)}
                            </td>
                            <td className="px-4 py-3">
                                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default VendorTable;