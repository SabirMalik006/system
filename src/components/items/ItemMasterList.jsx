import React, { useState } from 'react';
import SearchBar from '../common/SearchBar';
import Button from '../common/Button';
// import ItemsStats from './ItemsStats';
import ItemsTable from './ItemsTable';
import ItemsPagination from './ItemsPagination';
import StatsCircles from './StatsCircles';
import Footer from '../common/fotter';

const ItemMasterList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilter, setActiveFilter] = useState('all'); // 'all', 'instock', 'discontinued'
    
    const itemsData = [
        { 
            id: "TM-S001", 
            identifiers: "WHT-001", 
            name: "Water Closet (TMC)", 
            category: "Plumbing",
            unit: "Piece",
            minStock: "50",
            currentStock: "1,240",
            threshold: "200",
            price: "$450.00",
            status: "Active"
        },
        { 
            id: "TM-S002", 
            identifiers: "SHS-002", 
            name: "Shower Set", 
            category: "Bathroom",
            unit: "Set",
            minStock: "10",
            currentStock: "12",
            threshold: "5",
            price: "$1,240.50",
            status: "Active"
        },
        { 
            id: "TM-S003", 
            identifiers: "LED-003", 
            name: "LED Bulb", 
            category: "Lighting",
            unit: "Box",
            minStock: "100",
            currentStock: "450",
            threshold: "50",
            price: "$12.25",
            status: "Active"
        },
        { 
            id: "TM-S004", 
            identifiers: "CFN-004", 
            name: "Ceiling Fan", 
            category: "Electrical",
            unit: "Piece",
            minStock: "5",
            currentStock: "5",
            threshold: "2",
            price: "$9,500.00",
            status: "Low Stock"
        },
        { 
            id: "TM-S005", 
            identifiers: "PAC-005", 
            name: "PAC Pigeon", 
            category: "Hardware",
            unit: "Piece",
            minStock: "5",
            currentStock: "5",
            threshold: "2",
            price: "$9,500.00",
            status: "Discontinued"
        },
        { 
            id: "TM-S006", 
            identifiers: "GTV-006", 
            name: "Gate Valve", 
            category: "Plumbing",
            unit: "Piece",
            minStock: "100",
            currentStock: "1,240",
            threshold: "50",
            price: "$450.00",
            status: "Active"
        },
        { 
            id: "TM-S007", 
            identifiers: "DBD-007", 
            name: "Distribution Board", 
            category: "Electrical",
            unit: "Box",
            minStock: "50",
            currentStock: "650",
            threshold: "30",
            price: "$12.25",
            status: "Active"
        },
        { 
            id: "TM-S008", 
            identifiers: "KSN-008", 
            name: "Kitchen Sink", 
            category: "Plumbing",
            unit: "Piece",
            minStock: "3",
            currentStock: "5",
            threshold: "2",
            price: "$8,500.00",
            status: "Low Stock"
        }
    ];

    // Filter items based on selected filter
    const filteredItems = itemsData.filter(item => {
        if (activeFilter === 'instock') {
            return item.status === 'Active';
        }
        if (activeFilter === 'discontinued') {
            return item.status === 'Discontinued';
        }
        return true; // 'all'
    });

    return (
        <div className="bg-[#E8F4FF] min-h-screen">
            <div className="max-w-7xl mx-auto p-6">
                {/* Header with New Item Button */}
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold text-gray-900">Item Master List</h1>
                    <Button variant="primary" icon="+">
                        New Items
                    </Button>
                </div>

                {/* Stats Cards - Commented */}
                {/* <div className="mb-6">
                    <ItemsStats />
                </div> */}

                {/* Table Container with Search and Filters inside */}
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                    {/* Search and Filter Bar - Inside Table Container */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-100">
                        <SearchBar placeholder="Search items..." />
                        
                        <div className="flex items-center gap-3">
                            {/* Filter Buttons Group */}
                            <div className="flex items-center bg-white border border-gray-200 rounded-lg overflow-hidden">
                                <button
                                    onClick={() => setActiveFilter('all')}
                                    className={`px-4 py-2 text-sm font-medium transition-colors ${
                                        activeFilter === 'all' 
                                            ? 'bg-[#1A8FA0] text-white' 
                                            : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                                >
                                    All Items
                                </button>
                                <button
                                    onClick={() => setActiveFilter('instock')}
                                    className={`px-4 py-2 text-sm font-medium border-l border-gray-200 transition-colors ${
                                        activeFilter === 'instock' 
                                            ? 'bg-[#1A8FA0] text-white' 
                                            : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                                >
                                    In Stock
                                </button>
                                <button
                                    onClick={() => setActiveFilter('discontinued')}
                                    className={`px-4 py-2 text-sm font-medium border-l border-gray-200 transition-colors ${
                                        activeFilter === 'discontinued' 
                                            ? 'bg-[#1A8FA0] text-white' 
                                            : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                                >
                                    Discontinued
                                </button>
                            </div>
                            
                            {/* Filters Icon Button */}
                            <button className="px-3 py-2 border border-gray-200 rounded-lg bg-[#1A8FA0] cursor-pointer flex items-center gap-2 hover:bg-[#167a89] transition-colors">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                                </svg>
                                <p className='text-white font-medium text-sm'>Filters</p>
                            </button>
                        </div>
                    </div>

                    {/* Table */}
                    <ItemsTable items={filteredItems} />
                    <ItemsPagination />
                </div>
            </div>
            <StatsCircles />
            <Footer />
        </div>
    );
};

export default ItemMasterList;