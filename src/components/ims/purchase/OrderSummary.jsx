import React from 'react';

const OrderSummary = ({ subtotal, shipping, taxes, total, itemsCount = 3 }) => {
    return (
        <div className="bg-gradient-to-br from-[#1E4D7B] to-[#2166A0] rounded-xl p-5 text-white">
            <h2 className="text-base font-semibold mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between text-sm">
                    <span className="text-white/80">Subtotal ({itemsCount} items)</span>
                    <span className="font-semibold">${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                    <span className="text-white/80">Estimated Shipping</span>
                    <span className="font-semibold">${shipping.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                    <span className="text-white/80">Taxes (calculated at checkout)</span>
                    <span className="font-semibold">${taxes.toLocaleString()}</span>
                </div>
                <div className="pt-3 border-t border-white/20">
                    <div className="flex items-center justify-between">
                        <span className="text-base font-semibold">Total Estimated Amount</span>
                        <span className="text-xl font-bold">${total.toLocaleString()}</span>
                    </div>
                </div>
            </div>

            <button className="w-full mt-2 px-4 py-2 bg-white text-[#1E4D7B] rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Submit for Approval
            </button>
        </div>
    );
};

export default OrderSummary;