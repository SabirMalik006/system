import React from 'react';

const ItemDetail = () => {
    const details = [
        { label: "Item Code:", value: "ITM-RC1-TM-001" },
        { label: "Category:", value: "Power Tools" },
        { label: "Recorder Level:", value: "208 Units" },
        { label: "Location:", value: "Asia, A, Shelf S-12" },
        { label: "Unit Value:", value: "$24.00" }
    ];

    return (
        <div className="bg-white rounded-xl border border-gray-200 p-5">
            <div className='flex gap-2 mb-2' >
                <img src="Icon (6).svg" alt="" />
            <h2 className="text-base font-semibold text-gray-800">ITEM DETAIL</h2>
            </div>
            
            <div className="space-y-3">
                {details.map((item, index) => (
                    <div key={index} className="flex justify-between">
                        <span className="text-sm text-[#64748B]">{item.label}</span>
                        <span className="text-sm font-medium text-gray-900">{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItemDetail;