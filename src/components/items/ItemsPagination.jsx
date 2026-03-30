import React from 'react';

const ItemsPagination = ({ currentPage = 1, totalPages = 48, onPageChange }) => {
    return (
        <div className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200">
            <div className="text-sm text-gray-500">
                Showing 1 to 8 of 48 results
            </div>
            <div className="flex items-center gap-2">
                <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded border border-gray-200">
                    ←
                </button>
                <button className="px-3 py-1 text-sm text-white bg-[#1A8FA0] rounded border border-[#1A8FA0]">
                    1
                </button>
                <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded border border-gray-200">
                    2
                </button>
                <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded border border-gray-200">
                    3
                </button>
                <span className="px-2 text-sm text-gray-500">...</span>
                <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded border border-gray-200">
                    48
                </button>
                <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded border border-gray-200">
                    →
                </button>
            </div>
        </div>
    );
};

export default ItemsPagination;