import React, { useState, useRef, useEffect } from 'react';
import SearchBar from '../../common/SearchBar';
import Button from '../../common/Button';
import VendorStats from './VendorStats';
import VendorTable from './VendorTable';
import VendorPerformance from './VendorPerformance';
import Footer from '../../common/fotter';
import VendorProfilePanel from "./VendorProfilePanel";

const VendorManagement = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showAddVendor, setShowAddVendor] = useState(false);
    const [selectedVendor, setSelectedVendor] = useState(null);
    const [showProfilePanel, setShowProfilePanel] = useState(false);
    const modalRef = useRef(null);
    const panelRef = useRef(null);

    // Close modal when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setShowAddVendor(false);
            }
        };

        if (showAddVendor) {
            document.addEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'unset';
        };
    }, [showAddVendor]);

    // Close profile panel when clicking outside
    useEffect(() => {
        const handleClickOutsidePanel = (event) => {
            if (panelRef.current && !panelRef.current.contains(event.target)) {
                setShowProfilePanel(false);
                setSelectedVendor(null);
            }
        };

        if (showProfilePanel) {
            document.addEventListener('mousedown', handleClickOutsidePanel);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutsidePanel);
        };
    }, [showProfilePanel]);

    const vendorsData = [
        { name: "M/s Berger Paint", id: "VND-0120-A", shippingItems: "SUPPORTING", totalOrders: "482", onTime: "100%", rating: "4.8" },
        { name: "M/s Fast Cables", id: "VND-0120-B", shippingItems: "SUPPLIES", totalOrders: "30", onTime: "100%", rating: "4.5" },
        { name: "M/s Sh Wilayat Ahmed & Sons", id: "VND-0120-C", shippingItems: "CONTRACTS", totalOrders: "56", onTime: "100%", rating: "4.2" },
        { name: "M/s Three Star Ceramic", id: "VND-0120-D", shippingItems: "SOFTWARE", totalOrders: "322", onTime: "100%", rating: "4.9" },
        { name: "M/s SZ Developers", id: "VND-0120-E", shippingItems: "SUPPORTING", totalOrders: "56", onTime: "100%", rating: "4.3" },
        { name: "M/s Faisal Industries", id: "VND-0120-F", shippingItems: "SUPPORTING", totalOrders: "1,432", onTime: "100%", rating: "4.7" },
        { name: "M/s Plasco (PVC) Pipes Industries", id: "VND-0120-G", shippingItems: "INVENTORY", totalOrders: "124", onTime: "100%", rating: "4.4" },
        { name: "M/s Plasco (PVC)", id: "VND-0120-H", shippingItems: "MANUFACTURING", totalOrders: "107", onTime: "100%", rating: "4.6" }
    ];

    const filteredVendors = vendorsData.filter(vendor =>
        vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vendor.id.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleVendorClick = (vendor) => {
        setSelectedVendor(vendor);
        setShowProfilePanel(true);
    };

    const handleClosePanel = () => {
        setShowProfilePanel(false);
        setSelectedVendor(null);
    };

    return (
        <div className="max-w-[2560px] mx-auto bg-[#F9FAFB] ">
            <div className="p-4 sm:p-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                    <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Vendor Management</h1>
                    <Button
                        variant="primary"
                        icon="+"
                        onClick={() => setShowAddVendor(true)}
                        className="w-full sm:w-auto bg-gradient-to-t from-[#1E4D7B] to-[#1E4D7B]"
                    >
                        Add Vendor
                    </Button>
                </div>

                {/* Main Content */}
                <div className="space-y-6">
                    <VendorStats />
                    <div className="flex items-center justify-between">
                        <SearchBar placeholder="Search vendors..." />
                    </div>
                    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                        <div className="overflow-x-auto">
                            <VendorTable
                                vendors={filteredVendors}
                                onVendorClick={handleVendorClick}
                            />
                        </div>
                        <div className="px-4 py-3 bg-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-gray-200">
                            <span className="text-sm text-gray-600 text-center sm:text-left">Showing 1 to 8 of 128 vendors</span>
                            <div className="flex items-center justify-center gap-2">
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
                    <VendorPerformance />
                </div>
            </div>

            <Footer />

            {/* Vendor Profile Panel - Using existing component */}
            {showProfilePanel && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div ref={panelRef}>
                        <VendorProfilePanel onClose={handleClosePanel} />
                    </div>
                </div>
            )}

            {/* ====================== ADD NEW VENDOR MODAL (Centered) ====================== */}
            {showAddVendor && (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div
            ref={modalRef}
            className="bg-[#1E4D7B] text-white rounded-sm w-full max-w-md max-h-[90vh] overflow-y-auto shadow-2xl custom-scroll"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
            {/* Header */}
            <div className="sticky top-0 bg-[#1E4D7B] border-b border-white/20 p-4 sm:p-5 flex items-center justify-between">
                <div>
                    <h2 className="text-base sm:text-lg font-semibold">Add New Vendor</h2>
                    <p className="text-[10px] sm:text-xs text-blue-200 mt-0.5">Register a new supplier in the system</p>
                </div>
                <button
                    onClick={() => setShowAddVendor(false)}
                    className="text-xl leading-none text-blue-200 hover:text-white transition-colors"
                >
                    ×
                </button>
            </div>

            <div className="p-4 sm:p-5 space-y-6">
                {/* NAME */}
                <div>
                    <h3 className="uppercase text-[9px] sm:text-[10px] font-semibold tracking-wider text-blue-200 mb-3">NAME</h3>
                    <div>
                        <label className="text-[11px] sm:text-xs text-blue-200 mb-1 block">Vendor Name <span className="text-red-400">*</span></label>
                        <input
                            type="text"
                            placeholder="e.g. Gridel Logistics Co."
                            className="w-full bg-white text-gray-800 border border-gray-300 rounded-sm px-3 py-2 text-xs sm:text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                </div>

                <div className="border-t border-white/20"></div>

                {/* VENDOR ID */}
                <div>
                    <h3 className="uppercase text-[9px] sm:text-[10px] font-semibold tracking-wider text-blue-200 mb-3">VENDOR ID</h3>
                    <div>
                        <div className="flex border border-gray-300 rounded-sm overflow-hidden">
                            <input
                                type="text"
                                value="VND-0120"
                                className="flex-1 bg-white text-gray-800 px-3 py-2 text-xs sm:text-sm focus:outline-none"
                            />
                            <button className="bg-gray-100 px-3 text-gray-600 text-xs border-l border-gray-300 hover:bg-gray-200">
                                🔗
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/20"></div>

                {/* SHIPPING ITEMS */}
                <div>
                    <h3 className="uppercase text-[9px] sm:text-[10px] font-semibold tracking-wider text-blue-200 mb-3">SHIPPING ITEMS</h3>
                    <select className="w-full bg-white text-gray-800 border border-gray-300 rounded-sm px-3 py-2 text-xs sm:text-sm focus:outline-none focus:border-blue-500">
                        <option value="">Select Shipping Items</option>
                        <option value="SUPPORTING">SUPPORTING</option>
                        <option value="SUPPLIES">SUPPLIES</option>
                        <option value="CONTRACTS">CONTRACTS</option>
                        <option value="SOFTWARE">SOFTWARE</option>
                        <option value="INVENTORY">INVENTORY</option>
                        <option value="MANUFACTURING">MANUFACTURING</option>
                    </select>
                </div>

                <div className="border-t border-white/20"></div>

                {/* TOTAL ORDERS */}
                <div>
                    <h3 className="uppercase text-[9px] sm:text-[10px] font-semibold tracking-wider text-blue-200 mb-3">TOTAL ORDERS</h3>
                    <input
                        type="text"
                        placeholder="e.g., 482"
                        className="w-full bg-white text-gray-800 border border-gray-300 rounded-sm px-3 py-2 text-xs sm:text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    />
                </div>

                <div className="border-t border-white/20"></div>

                {/* ON-TIME % */}
                <div>
                    <h3 className="uppercase text-[9px] sm:text-[10px] font-semibold tracking-wider text-blue-200 mb-3">ON-TIME %</h3>
                    <input
                        type="text"
                        placeholder="e.g., 100%"
                        className="w-full bg-white text-gray-800 border border-gray-300 rounded-sm px-3 py-2 text-xs sm:text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    />
                </div>

                <div className="border-t border-white/20"></div>

                {/* RATING */}
                <div>
                    <h3 className="uppercase text-[9px] sm:text-[10px] font-semibold tracking-wider text-blue-200 mb-3">RATING</h3>
                    <div className="space-y-2">
                        <div className="text-[11px] sm:text-xs text-blue-200 mb-1.5">Select Rating</div>
                        <div className="flex flex-wrap gap-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    className="text-2xl text-yellow-400 hover:scale-110 transition-transform"
                                >
                                    ★
                                </button>
                            ))}
                        </div>
                        <input
                            type="text"
                            placeholder="Custom rating (e.g., 4.8)"
                            className="w-full bg-white text-gray-800 border border-gray-300 rounded-sm px-3 py-2 text-xs sm:text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 mt-2"
                        />
                    </div>
                </div>

                <div className="border-t border-white/20"></div>

                {/* STATUS - Fixed with working radio buttons */}
                <div>
                    <h3 className="uppercase text-[9px] sm:text-[10px] font-semibold tracking-wider text-blue-200 mb-3">STATUS</h3>
                    <div className="space-y-2">
                        <label className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer hover:bg-white/15">
                            <input
                                type="radio"
                                name="vendorStatus"
                                value="Active"
                                defaultChecked
                                className="w-4 h-4 accent-emerald-500"
                            />
                            <span className="text-xs sm:text-sm text-white">Active</span>
                            <span className="ml-auto bg-emerald-500 text-white text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full">Recommended</span>
                        </label>

                        <label className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer hover:bg-white/10">
                            <input
                                type="radio"
                                name="vendorStatus"
                                value="Inactive"
                                className="w-4 h-4 accent-gray-500"
                            />
                            <span className="text-xs sm:text-sm text-gray-300">Inactive</span>
                        </label>

                        <label className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer hover:bg-white/10">
                            <input
                                type="radio"
                                name="vendorStatus"
                                value="Blacklisted"
                                className="w-4 h-4 accent-red-500"
                            />
                            <span className="text-xs sm:text-sm text-gray-300">Blacklisted</span>
                            <span className="ml-auto bg-red-500 text-white text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full">Restricted</span>
                        </label>
                    </div>
                </div>
            </div>

            {/* Footer Buttons */}
            <div className="sticky bottom-0 bg-[#1E4D7B] border-t border-white/20 p-4 sm:p-5 flex gap-3">
                <button
                    onClick={() => setShowAddVendor(false)}
                    className="flex-1 py-2.5 border border-white/30 text-white rounded-sm hover:bg-white/10 transition-colors text-xs sm:text-sm font-medium"
                >
                    Cancel
                </button>
                <button className="flex-1 py-2.5 bg-[#0D9488] text-white rounded-sm font-medium text-xs sm:text-sm transition-colors">
                    Save Vendor
                </button>
            </div>
        </div>
    </div>
)}
        </div>
    );
};

export default VendorManagement;