import React from 'react';

const InventoryUpdate = () => {
    return (
        <div className="bg-gradient-to-b from-[#1E4D7B] to-[#4A90E2] rounded-xl border border-gray-200 p-5 text-white">
            <img
                src="Vector.png"
                alt=""
                className='absolute right-7 top-39 z-1 h-33 w-33 hidden md:block'
            />
            <h2 className="text-xs font-semibold mb-4">INVENTORY UPDATE</h2>

            <div className="space-y-3 ">
                <div className="flex items-start flex-col gap-1 border-b-2 border-white pb-5 z-10">
                    <span className="text-white/80 text-4xl font-semibold">1,280 </span>
                    <span className='text-sm' >  Units (After Receipt)</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-white">Previous Stock :</span>
                    <span className="font-semibold">1,250 Units</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-white">Received :</span>
                    <span className="text-[#1E293B] font-semibold">+38 Units</span>
                </div>
            </div>
        </div>
    );
};

export default InventoryUpdate;