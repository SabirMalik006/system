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

    const handleVendorClick = (vendor) => {
        setSelectedVendor(vendor);
        setShowProfilePanel(true);
    };

    const handleClosePanel = () => {
        setShowProfilePanel(false);
        setSelectedVendor(null);
    };

    return (
        <div className="max-w-[2560px] mx-auto bg-[#F9FAFB] min-h-screen">
            <div className="p-4 sm:p-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                    <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Vendor Management</h1>
                    <Button 
                        variant="primary" 
                        icon="+"
                        onClick={() => setShowAddVendor(true)}
                        className="w-full sm:w-auto"
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
                            {/* BASIC INFO */}
                            <div>
                                <h3 className="uppercase text-[9px] sm:text-[10px] font-semibold tracking-wider text-blue-200 mb-3">BASIC INFO</h3>
                                
                                <div className="space-y-3">
                                    <div>
                                        <label className="text-[11px] sm:text-xs text-blue-200 mb-1 block">Vendor Name <span className="text-red-400">*</span></label>
                                        <input 
                                            type="text" 
                                            placeholder="e.g. Global Logistics Corp" 
                                            className="w-full bg-white text-gray-800 border border-gray-300 rounded-sm px-3 py-2 text-xs sm:text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-[11px] sm:text-xs text-blue-200 mb-1 block">Vendor ID</label>
                                        <div className="flex border border-gray-300 rounded-sm overflow-hidden">
                                            <input 
                                                type="text" 
                                                value="VEN-88231" 
                                                className="flex-1 bg-white text-gray-800 px-3 py-2 text-xs sm:text-sm focus:outline-none"
                                            />
                                            <button className="bg-gray-100 px-3 text-gray-600 text-xs border-l border-gray-300 hover:bg-gray-200">
                                                🔗
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="border-t border-white/20"></div>

                            {/* CONTACT INFO */}
                            <div>
                                <h3 className="uppercase text-[9px] sm:text-[10px] font-semibold tracking-wider text-blue-200 mb-3">CONTACT INFO</h3>
                                <div className="space-y-3">
                                    <div>
                                        <label className="text-[11px] sm:text-xs text-blue-200 mb-1 block">Contact Person</label>
                                        <input 
                                            type="text" 
                                            placeholder="John Doe" 
                                            className="w-full bg-white text-gray-800 border border-gray-300 rounded-sm px-3 py-2 text-xs sm:text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <div>
                                            <label className="text-[11px] sm:text-xs text-blue-200 mb-1 block">Phone Number</label>
                                            <input 
                                                type="text" 
                                                placeholder="+1 (555) 000-0000" 
                                                className="w-full bg-white text-gray-800 border border-gray-300 rounded-sm px-3 py-2 text-xs sm:text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-[11px] sm:text-xs text-blue-200 mb-1 block">Email</label>
                                            <input 
                                                type="email" 
                                                placeholder="john@vendor.com" 
                                                className="w-full bg-white text-gray-800 border border-gray-300 rounded-sm px-3 py-2 text-xs sm:text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-[11px] sm:text-xs text-blue-200 mb-1 block">Address</label>
                                        <input 
                                            type="text" 
                                            placeholder="123 Business Way, Suite 100..." 
                                            className="w-full bg-white text-gray-800 border border-gray-300 rounded-sm px-3 py-2 text-xs sm:text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500"
                                        />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="border-t border-white/20"></div>

                            {/* SUPPLIED ITEMS */}
                            <div>
                                <h3 className="uppercase text-[9px] sm:text-[10px] font-semibold tracking-wider text-blue-200 mb-3">SUPPLIED ITEMS</h3>
                                <input 
                                    type="text" 
                                    placeholder="Search items..." 
                                    className="w-full bg-white text-gray-800 border border-gray-300 rounded-sm px-3 py-2 text-xs sm:text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 mb-3"
                                />
                                <div className="flex flex-wrap gap-2">
                                    <div className="bg-gray-100 text-gray-700 text-[10px] sm:text-xs px-2.5 py-1 rounded-full flex items-center gap-1.5">
                                        Motherboards <span className="cursor-pointer hover:text-red-500 text-gray-400">×</span>
                                    </div>
                                    <div className="bg-gray-100 text-gray-700 text-[10px] sm:text-xs px-2.5 py-1 rounded-full flex items-center gap-1.5">
                                        RAM Modules <span className="cursor-pointer hover:text-red-500 text-gray-400">×</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="border-t border-white/20"></div>

                            {/* CONTRACT DETAILS */}
                            <div>
                                <h3 className="uppercase text-[9px] sm:text-[10px] font-semibold tracking-wider text-blue-200 mb-3">CONTRACT DETAILS</h3>
                                <div className="space-y-3">
                                    <div>
                                        <label className="text-[11px] sm:text-xs text-blue-200 mb-1 block">Contract Number</label>
                                        <input 
                                            type="text" 
                                            value="CNT-2023-001" 
                                            className="w-full bg-white text-gray-800 border border-gray-300 rounded-sm px-3 py-2 text-xs sm:text-sm focus:outline-none focus:border-blue-500"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <div>
                                            <label className="text-[11px] sm:text-xs text-blue-200 mb-1 block">Start Date</label>
                                            <input 
                                                type="text" 
                                                placeholder="mm/dd/yyyy" 
                                                className="w-full bg-white text-gray-800 border border-gray-300 rounded-sm px-3 py-2 text-xs sm:text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-[11px] sm:text-xs text-blue-200 mb-1 block">End Date</label>
                                            <input 
                                                type="text" 
                                                placeholder="mm/dd/yyyy" 
                                                className="w-full bg-white text-gray-800 border border-gray-300 rounded-sm px-3 py-2 text-xs sm:text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-[11px] sm:text-xs text-blue-200 mb-1 block">Terms & Conditions</label>
                                        <select className="w-full bg-white text-gray-800 border border-gray-300 rounded-sm px-3 py-2 text-xs sm:text-sm focus:outline-none focus:border-blue-500">
                                            <option>Net 30</option>
                                            <option>Net 15</option>
                                            <option>Net 60</option>
                                            <option>COD</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="border-t border-white/20"></div>

                            {/* PERFORMANCE */}
                            <div>
                                <h3 className="uppercase text-[9px] sm:text-[10px] font-semibold tracking-wider text-blue-200 mb-3">PERFORMANCE</h3>
                                <div className="space-y-3">
                                    <div>
                                        <div className="text-[11px] sm:text-xs text-blue-200 mb-1.5">Initial Rating</div>
                                        <div className="flex text-base sm:text-lg text-yellow-500 gap-0.5">
                                            ★★★★★
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-[11px] sm:text-xs text-blue-200 mb-1 block">Total Orders</label>
                                        <input 
                                            type="text" 
                                            value="0" 
                                            className="w-full bg-white text-gray-800 border border-gray-300 rounded-sm px-3 py-2 text-xs sm:text-sm focus:outline-none focus:border-blue-500"
                                        />
                                    </div>

                                    <div>
                                        <div className="flex justify-between text-[11px] sm:text-xs mb-2">
                                            <span className="text-blue-200">On-Time Delivery Rate</span>
                                            <span className="font-medium text-white">92%</span>
                                        </div>
                                        <div className="h-1.5 bg-white rounded-full overflow-hidden">
                                            <div className="h-full bg-[#0D9488] w-[92%] rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="border-t border-white/20"></div>

                            {/* STATUS */}
                            <div>
                                <h3 className="uppercase text-[9px] sm:text-[10px] font-semibold tracking-wider text-blue-200 mb-3">STATUS</h3>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3 bg-white/10 px-3 py-2.5 rounded-lg cursor-pointer hover:bg-white/15">
                                        <div className="w-4 h-4 rounded-full border-2 border-emerald-400 flex items-center justify-center">
                                            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                                        </div>
                                        <span className="text-xs sm:text-sm text-white">Active</span>
                                        <span className="ml-auto bg-emerald-500 text-white text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full">Recommended</span>
                                    </div>

                                    <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer hover:bg-white/10">
                                        <div className="w-4 h-4 rounded-full border-2 border-gray-400"></div>
                                        <span className="text-xs sm:text-sm text-gray-300">Inactive</span>
                                    </div>

                                    <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer hover:bg-white/10">
                                        <div className="w-4 h-4 rounded-full border-2 border-red-400"></div>
                                        <span className="text-xs sm:text-sm text-gray-300">Blacklisted</span>
                                        <span className="ml-auto bg-red-500 text-white text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full">Restricted</span>
                                    </div>
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