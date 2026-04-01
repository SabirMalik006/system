import React from 'react';

const FinancialSummary = () => {
    return (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <h2 className="text-base font-semibold text-gray-800 bg-[#BDD8F9] p-5 rounded-t-xl">
                FINANCIAL SUMMARY
            </h2>
            
            <div className="p-5 bg-[#83B5F0]">
                <div className="space-y-4 mb-4">
                    {/* Unit Cost Row */}
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-700 font-medium">Unit Cost</span>
                        <span className="text-gray-900 font-semibold">$24.00</span>
                    </div>
                    
                    {/* Quantity Row */}
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-700 font-medium">Quantity</span>
                        <span className="text-gray-900 font-semibold">30 Units</span>
                    </div>
                    
                    {/* Subtotal Row */}
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-700 font-medium">Subtotal</span>
                        <span className="text-gray-900 font-semibold">$7,470.00</span>
                    </div>
                    
                    {/* Tax Row */}
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-700 font-medium">Tax (10%)</span>
                        <span className="text-gray-900 font-semibold">$747.00</span>
                    </div>
                    
                    {/* Divider */}
                    <div className="border-t border-white/30 my-2"></div>
                   
                </div>
                
                {/* Total Amount Card */}
                <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                    <span className="text-sm font-medium text-[#2563EB]">Total Amount:</span>
                    <span className="text-xl font-bold text-[#2563EB]">$8,217.00</span>
                </div>
            </div>
        </div>
    );
};

export default FinancialSummary;