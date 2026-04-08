import React, { useState } from 'react';
import SearchBar from '../../common/SearchBar';
import Button from '../../common/Button';
import VendorStats from './VendorStats';
import VendorTable from './VendorTable';
import VendorPerformance from './VendorPerformance';
import Footer from '../../common/fotter';

const VendorManagement = () => {
    const [searchTerm, setSearchTerm] = useState('');
    
    const vendorsData = [
        { name: "Gridel Logistics Co.", id: "VND-0120-A", shippingItems: "SUPPORTING", totalOrders: "482", onTime: "100%", rating: "4.8" },
        { name: "Apex Solutions", id: "VND-0120-B", shippingItems: "SUPPLIES", totalOrders: "30", onTime: "100%", rating: "4.5" },
        { name: "Private Supplies Ltd.", id: "VND-0120-C", shippingItems: "CONTRACTS", totalOrders: "56", onTime: "100%", rating: "4.2" },
        { name: "TwiCarevent Intl.", id: "VND-0120-D", shippingItems: "SOFTWARE", totalOrders: "322", onTime: "100%", rating: "4.9" },
        { name: "Nordic Builders", id: "VND-0120-E", shippingItems: "SUPPORTING", totalOrders: "56", onTime: "100%", rating: "4.3" },
        { name: "Qasee Sourcing", id: "VND-0120-F", shippingItems: "SUPPORTING", totalOrders: "1,432", onTime: "100%", rating: "4.7" },
        { name: "Vantage Retail", id: "VND-0120-G", shippingItems: "INVENTORY", totalOrders: "124", onTime: "100%", rating: "4.4" },
        { name: "Elite Logistics", id: "VND-0120-H", shippingItems: "MANUFACTURING", totalOrders: "107", onTime: "100%", rating: "4.6" }
    ];

    const filteredVendors = vendorsData.filter(vendor =>
        vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vendor.id.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="max-w-7xl mx-auto bg-[#F9FAFB] min-h-screen">
            <div className="p-6">
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-900">Vendor Management</h1>
                </div>

                {/* Main Content - Full Width */}
                <div className="space-y-6">
                    {/* Stats Cards */}
                    <VendorStats />

                    {/* Search and Add Vendor */}
                    <div className="flex items-center justify-between">
                        <SearchBar placeholder="Search vendors..." />
                        <Button variant="primary" icon="+">
                            Add Vendor
                        </Button>
                    </div>

                    {/* Vendor Table */}
                    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                        <VendorTable vendors={filteredVendors} />
                        
                        {/* Pagination */}
                        <div className="px-4 py-3 bg-white flex items-center justify-between border-t border-gray-200">
                            <span className="text-sm text-gray-600">Showing 1 to 8 of 128 vendors</span>
                            <div className="flex items-center gap-2">
                                <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded border border-gray-200">←</button>
                                <button className="px-3 py-1 text-sm text-white bg-[#1A8FA0] rounded">1</button>
                                <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded border border-gray-200">2</button>
                                <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded border border-gray-200">3</button>
                                <span className="px-2 text-sm text-gray-500">...</span>
                                <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded border border-gray-200">16</button>
                                <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded border border-gray-200">→</button>
                            </div>
                        </div>
                    </div>

                    {/* Vendor Performance Insights */}
                    <VendorPerformance />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default VendorManagement;