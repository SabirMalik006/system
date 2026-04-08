import React from 'react';

const EntrySummary = () => {
    return (
        <div className="bg-white rounded-xl border border-gray-200 p-4">
            <h2 className="text-base font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">Entry Summary</h2>

            <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Sub-Total Units:</span>
                    <span className="font-medium text-gray-900">0.00</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Estimated Weight:</span>
                    <span className="font-medium text-gray-900">0.00 kg</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Package count:</span>
                    <span className="font-medium text-gray-900">Unit Allocation</span>
                </div>
            </div>
        </div>
    );
};

export default EntrySummary;