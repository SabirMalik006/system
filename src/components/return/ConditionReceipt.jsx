import React, { useState } from 'react';

const ConditionReceipt = () => {
    const [receivingUser, setReceivingUser] = useState('');

    return (
        <div className="bg-white rounded-xl border border-gray-200 p-5">
            <div className='flex gap-2 items-center ' >
                <img src="Icon (2).svg" alt="" className='pb-3' />
            <h2 className="text-lg font-semibold text-[#2B8CEE] mb-4">Condition & Receipt</h2>
            </div>

            {/* Item Condition - Increased Height */}
            <div className="mb-5">
                <label className="text-sm font-medium text-[#0F172A] mb-2 block">ITEM CONDITION UPON RETURN</label>
                <textarea
                    rows="3"
                    value="Items returned in original sealed packaging. Batch inspection passed."
                    className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg bg-gray-50 text-gray-700 resize-none"
                    readOnly
                    style={{ height: '100px' }}
                />
            </div>

            {/* Receiving Unit and Receiving User - Side by Side */}
            <div className="grid grid-cols-2 gap-6">
                {/* Receiving Unit */}
                <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">RECEIVING UNIT</label>
                    <select className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#1A8FA0] bg-white text-center">
                        <option>Main Distribution Hub</option>
                        <option>Warehouse A</option>
                        <option>Warehouse B</option>
                    </select>
                </div>

                {/* Receiving User */}
                <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">RECEIVING USER</label>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="identify the receiver..."
                            className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#1A8FA0] bg-white pr-10"
                        />
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConditionReceipt;