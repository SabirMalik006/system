import React, { useState } from 'react';

const RequestInfo = () => {
    const [quantity, setQuantity] = useState(500);
    const [selectedPurpose, setSelectedPurpose] = useState('');
    const [selectedUnit, setSelectedUnit] = useState('Main Warehouse');

    const handleQuantityChange = (type) => {
        if (type === 'increment') {
            setQuantity(quantity + 1);
        } else if (type === 'decrement' && quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="bg-white rounded-xl border border-gray-200 p-5">
            {/* Header with Icon */}
            <div className='flex items-center gap-2 mb-6'>
                <img src="11.png" alt="" className='w-6 h-6' />
                <h2 className="text-xl font-semibold text-[#2B8CEE]">Required Information</h2>
            </div>

            {/* Item Issued and Quantity - Side by Side */}
            <div className="grid grid-cols-2 gap-6 mb-5 ">
                {/* Item Issued */}
                <div>
                    <label className="text-sm font-medium text-[#64748B] mb-2 block">ITEM ISSUED *</label>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search item name or SKU"
                            className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#1A8FA0] bg-white"
                        />
                        <span className="absolute right-3 top-3 text-gray-400 text-sm">🔍</span>
                    </div>
                </div>

                {/* Quantity */}
                <div>
    <label className="text-sm font-medium text-[#64748B] mb-2 block">QUANTITY *</label>
    <div className="flex items-center">
        <button 
            onClick={() => handleQuantityChange('decrement')}
            className="w-14 h-12 flex items-center justify-center border border-gray-300 rounded-l-lg text-gray-600 bg-[#F1F5F9] text-xl"
        >
            -
        </button>
        <input
            type="text"
            value={quantity}
            className="w-full px-4 py-3 text-base text-center border-t border-b border-gray-300 focus:outline-none focus:border-[#1A8FA0] bg-white font-medium "
            readOnly
        />
        <button 
            onClick={() => handleQuantityChange('increment')}
            className="w-14 h-12 flex items-center justify-center border border-gray-300 rounded-r-lg text-gray-600 bg-[#F1F5F9] text-xl"
        >
            +
        </button>
    </div>
</div>
            </div>

            {/* Purpose of Issuance and Issuing Unit - Side by Side */}
            <div className="grid grid-cols-2 gap-6 mb-5">
                <div>
                    <label className="text-sm font-medium text-[#64748B] mb-2 block">PURPOSE OF ISSUANCE *</label>
                    <select 
                        value={selectedPurpose}
                        onChange={(e) => setSelectedPurpose(e.target.value)}
                        className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-[#1A8FA0] bg-white text-[#64748B]"
                    >
                        <option value="">Select purpose</option>
                        <option value="Production">Production</option>
                        <option value="Maintenance">Maintenance</option>
                        <option value="Transfer">Transfer</option>
                    </select>
                </div>
                <div>
                    <label className="text-sm font-medium text-[#64748B] mb-2 block">ISSUING UNIT/DEPARTMENT *</label>
                    <select 
                        value={selectedUnit}
                        onChange={(e) => setSelectedUnit(e.target.value)}
                        className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-[#1A8FA0] bg-white text-[#64748B]"
                    >
                        <option>Main Warehouse</option>
                        <option>Secondary Warehouse</option>
                        <option>Storage Unit A</option>
                    </select>
                </div>
            </div>

            {/* Issuing User and Date - Side by Side */}
            <div className="grid grid-cols-2 gap-6">
                <div>
                    <label className="text-sm font-medium text-[#64748B] mb-2 block">ISSUING USER</label>
                    <input
                        type="text"
                        value="Alex Richardson (Store Manager)"
                        className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg bg-gray-50 text-[#64748B]"
                        readOnly
                    />
                </div>
                <div>
                    <label className="text-sm font-medium text-[#64748B] mb-2 block">DATE & TIME</label>
                    <input
                        type="text"
                        value="08/12/2024, 02:30 PM"
                        className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg bg-gray-50 text-[#64748B]"
                        readOnly
                    />
                </div>
            </div>
        </div>
    );
};

export default RequestInfo;