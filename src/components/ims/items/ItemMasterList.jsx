import React, { useState, useRef, useEffect } from 'react';
import SearchBar from '../../common/SearchBar';
import Button from '../../common/Button';
import ItemsTable from './ItemsTable';
import ItemsPagination from './ItemsPagination';
import StatsCircles from './StatsCircles';
import Footer from '../../common/fotter';

const ItemMasterList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilter, setActiveFilter] = useState('all');
    const [showCreateModal, setShowCreateModal] = useState(false);
    const modalRef = useRef(null);

    // Close modal when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setShowCreateModal(false);
            }
        };

        if (showCreateModal) {
            document.addEventListener('mousedown', handleClickOutside);
            // Prevent body scroll when modal is open
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'unset';
        };
    }, [showCreateModal]);

    const itemsData = [
        {
            id: "TM-S001",
            identifiers: "WHT-001",
            name: "Polyvinyl Distermper",
            category: "Plumbing",
            unit: "Piece",
            minStock: "50",
            currentStock: "1,240",
            threshold: "200",
            price: "Rs 450.00",
            status: "Active"
        },
        {
            id: "TM-S002",
            identifiers: "SHS-002",
            name: "Strip Light 4 ft LED complete Standard",
            category: "Bathroom",
            unit: "Set",
            minStock: "10",
            currentStock: "12",
            threshold: "5",
            price: "Rs 1,240.50",
            status: "Active"
        },
        {
            id: "TM-S003",
            identifiers: "LED-003",
            name: "Circuit Breaker 15 Amp for AC with Plug",
            category: "Lighting",
            unit: "Box",
            minStock: "100",
            currentStock: "450",
            threshold: "50",
            price: "Rs 12.25",
            status: "Active"
        },
        {
            id: "TM-S004",
            identifiers: "CFN-004",
            name: "Wash hand Basin(WHB) Standard quality",
            category: "Electrical",
            unit: "Piece",
            minStock: "5",
            currentStock: "5",
            threshold: "2",
            price: "Rs 9,500.00",
            status: "Low Stock"
        },
        {
            id: "TM-S005",
            identifiers: "PAC-005",
            name: "Aluminum Door Handle 175mm",
            category: "Hardware",
            unit: "Piece",
            minStock: "5",
            currentStock: "5",
            threshold: "2",
            price: "Rs 9,500.00",
            status: "Discontinued"
        },
        {
            id: "TM-S006",
            identifiers: "GTV-006",
            name: "Towel rail Plastic",
            category: "Plumbing",
            unit: "Piece",
            minStock: "100",
            currentStock: "1,240",
            threshold: "50",
            price: "Rs 450.00",
            status: "Active"
        },
        {
            id: "TM-S007",
            identifiers: "DBD-007",
            name: "uPVC Pipe 110 mm dia ",
            category: "Electrical",
            unit: "Box",
            minStock: "50",
            currentStock: "650",
            threshold: "30",
            price: "Rs 12.25",
            status: "Active"
        },
        {
            id: "TM-S008",
            identifiers: "KSN-008",
            name: "PPR Elbow 90o",
            category: "Plumbing",
            unit: "Piece",
            minStock: "3",
            currentStock: "5",
            threshold: "2",
            price: "Rs 8,500.00",
            status: "Low Stock"
        }
    ];

    const filteredItems = itemsData.filter(item => {
        if (activeFilter === 'instock') return item.status === 'Active';
        if (activeFilter === 'discontinued') return item.status === 'Discontinued';
        return true;
    });

    return (
        <div className="bg-[#E8F4FF] min-h-screen">
            <div className="max-w-[2560px] mx-auto px-4 sm:px-6 py-4 sm:py-6">
                {/* Header with New Item Button - Responsive */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                    <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Item Master List</h1>
                    <Button
                        variant="primary"
                        icon="+"
                        onClick={() => setShowCreateModal(true)}
                        className="w-full sm:w-auto cursor-pointer"
                    >
                        New Items
                    </Button>
                </div>

                {/* Table Container - Responsive */}
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                    {/* Search and Filter Bar - Responsive */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 border-b border-gray-100">
                        <SearchBar placeholder="Search items..." />

                        <div className="flex flex-wrap items-center gap-3">
                            <div className="flex bg-white border border-gray-200 rounded-lg overflow-hidden">
                                <button
                                    onClick={() => setActiveFilter('all')}
                                    className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-colors ${activeFilter === 'all'
                                        ? 'bg-[#1A8FA0] text-white'
                                        : 'text-gray-600 hover:bg-gray-50'
                                        }`}
                                >
                                    All Items
                                </button>
                                <button
                                    onClick={() => setActiveFilter('instock')}
                                    className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium border-l border-gray-200 transition-colors ${activeFilter === 'instock'
                                        ? 'bg-[#1A8FA0] text-white'
                                        : 'text-gray-600 hover:bg-gray-50'
                                        }`}
                                >
                                    In Stock
                                </button>
                                <button
                                    onClick={() => setActiveFilter('discontinued')}
                                    className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium border-l border-gray-200 transition-colors ${activeFilter === 'discontinued'
                                        ? 'bg-[#1A8FA0] text-white'
                                        : 'text-gray-600 hover:bg-gray-50'
                                        }`}
                                >
                                    Discontinued
                                </button>
                            </div>

                            <button className="px-3 py-2 border border-gray-200 rounded-lg bg-[#1A8FA0] cursor-pointer flex items-center gap-2 hover:bg-[#167a89] transition-colors">
                                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                                </svg>
                                <p className='text-white font-medium text-xs sm:text-sm'>Filters</p>
                            </button>
                        </div>
                    </div>

                    {/* Table - Horizontal scroll on mobile */}
                    <div className="overflow-x-auto">
                        <ItemsTable items={filteredItems} />
                    </div>
                    <ItemsPagination />
                </div>
            </div>

            <StatsCircles />
            <Footer />

            {/* CREATE NEW ITEM MODAL - Fixed */}
            {showCreateModal && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-3">
                    <div
                        ref={modalRef}
                        className="bg-white rounded-sm w-full max-w-sm shadow-xl overflow-hidden"
                    >
                        {/* Modal Header */}
                        <div className="bg-white flex items-center justify-between px-4 py-2.5 ">
                            <h2 className="text-lg font-semibold text-gray-800">Create New Item</h2>
                            <button
                                onClick={() => setShowCreateModal(false)}
                                className="text-gray-400 hover:text-gray-600 text-lg leading-none"
                            >
                                ×
                            </button>
                        </div>

                        {/* Modal Body - No scrollbar */}
                        <div className="p-4 space-y-3">
                            {/* Item ID */}
                            <div>
                                <label className="block  text-[11px] font-medium text-gray-700 mb-0.5">Item ID</label>
                                <input
                                    type="text"
                                    value="ITEM-2024001"
                                    readOnly
                                    className="w-full bg-[#F1F5F9] border border-gray-300 rounded-sm px-2.5 py-1.5 text-gray-700 focus:outline-none text-xs"
                                />
                            </div>

                            {/* Item Name */}
                            <div>
                                <label className="block text-[11px] font-medium text-gray-700 mb-0.5">Item Name</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Hammer Set"
                                    className="w-full border border-gray-300 rounded-sm px-2.5 py-1.5 focus:outline-none focus:border-[#1A8FA0] text-xs"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                {/* Item Identifier */}
                                <div>
                                    <label className="block text-[11px] font-medium text-gray-700 mb-0.5">Item Identifier (SKU/Barcode)</label>
                                    <div className="relative border border-gray-300 rounded-sm">
                                        <input
                                            type="text"
                                            placeholder="Scan or enter SKU"
                                            className="w-full px-2.5 py-1.5 pr-16 focus:outline-none text-xs rounded-sm"
                                        />
                                        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
                                            <img src="/Container (3).png" alt="" className="h-3.5 w-3.5 object-contain cursor-pointer" />
                                            <img src="/Text.png" alt="" className="h-3.5 w-3.5 object-contain cursor-pointer" />
                                        </div>
                                    </div>
                                </div>

                                {/* Category */}
                                <div>
                                    <label className="block text-[11px] font-medium text-gray-700 mb-0.5">Category</label>
                                    <select className="w-full border border-gray-300 rounded-sm px-2.5 py-1.5 focus:outline-none focus:border-[#1A8FA0] text-xs">
                                        <option>Sanitary</option>
                                        <option>Plumbing</option>
                                        <option>Electrical</option>
                                        <option>Lighting</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                {/* Unit of Measure */}
                                <div>
                                    <label className="block text-[11px] font-medium text-gray-700 mb-0.5">Unit of Measure</label>
                                    <input
                                        type="text"
                                        placeholder="e.g., pcs, boxes, meters"
                                        className="w-full border border-gray-300 rounded-sm px-2.5 py-1.5 focus:outline-none text-xs"
                                    />
                                </div>

                                {/* Price */}
                                <div>
                                    <label className="block text-[11px] font-medium text-gray-700 mb-0.5">Price</label>
                                    <div className="relative">
                                        <span className="absolute left-2.5 top-1.5 text-gray-500 text-xs">$</span>
                                        <input
                                            type="text"
                                            className="w-full bg-[#F1F5F9] border border-gray-300 rounded-sm pl-6 pr-2.5 py-1.5 focus:outline-none text-xs"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                {/* Minimum Stock Level */}
                                <div>
                                    <label className="block text-[11px] font-medium text-gray-700 mb-0.5">Minimum Stock Level</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. 10"
                                        className="w-full border bg-[#F8FAFC] border-gray-300 rounded-sm px-2.5 py-1.5 focus:outline-none text-xs"
                                    />
                                </div>

                                {/* Threshold */}
                                <div>
                                    <label className="block text-[11px] font-medium text-gray-700 mb-0.5">Threshold</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. 25"
                                        className="w-full bg-[#F8FAFC] border border-gray-300 rounded-sm px-2.5 py-1.5 focus:outline-none text-xs"
                                    />
                                </div>
                            </div>

                            {/* Current Stock */}
                            <div className="grid grid-cols-2 gap-3">
                                {/* Current Stock */}
                                <div>
                                    <label className="block text-[11px] font-medium text-gray-700 mb-0.5">Current Stock</label>
                                    <input
                                        type="text"
                                        value="500 units"
                                        readOnly
                                        className="w-full bg-gray-100 border border-gray-300 rounded-sm px-2.5 py-1.5 text-gray-700 text-xs"
                                    />
                                </div>

                                {/* Status */}
                                <div>
                                    <label className="block text-[11px] font-medium text-gray-700 mb-2">Status</label>
                                    <div className="flex items-center gap-2">
                                        <div className="relative w-8 h-4 bg-[#2196F3] rounded-full cursor-pointer">
                                            <div className="absolute top-0.5 right-0.5 w-3 h-3 bg-white rounded-full shadow"></div>
                                        </div>
                                        <span className="text-[11px] font-medium text-gray-700">Active</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="bg-gray-50 flex gap-2 px-4 py-2.5 border-t">
                            <button
                                onClick={() => setShowCreateModal(false)}
                                className="flex-1 py-1.5 border border-gray-300 rounded-sm text-gray-700 font-medium hover:bg-gray-100 transition-colors text-xs"
                            >
                                Cancel
                            </button>
                            <button className="flex-1 py-1.5 bg-[#2196F3] text-white rounded-sm font-medium hover:bg-[#167a89] transition-colors text-xs">
                                Create Item
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ItemMasterList;