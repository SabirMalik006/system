import React from 'react';

const InventoryPreview = () => {
    return (
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
            <div className="flex items-center justify-between gap-2 mb-4">
                <h2 className="text-base font-semibold text-gray-800">Inventory Preview</h2>
                <img src="Icon (3).svg" alt="" className="w-15 h-15 -rotate-5" />
            </div>
            
            <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Current Stock</span>
                    <span className="font-semibold text-gray-900">1,250 units</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">New Stock</span>
                    <span className="font-semibold text-gray-900">1,262 units</span>
                </div>
                <div className="pt-2 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-[#1A8FA0]">+12 units</span>
                        <span className="text-green-600 text-sm flex items-center gap-1">↑ Added</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InventoryPreview;