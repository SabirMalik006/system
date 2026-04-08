import React from 'react';

const StorageLocation = () => {
    return (
        <div className="bg-white rounded-2xl border border-gray-200 p-4">
            <h2 className=" text-base font-semibold text-[#94A3B8] mb-4  pb-2">Storage Location</h2>
            
            <div className="border border-gray-200 rounded-lg flex flex-col items-center justify-center gap-2 py-4">
                <img 
                    src="ii.png" 
                    alt="" 
                    className=""
                />
                <input
                    type="text"
                    value="Aisle 4, Shelf B-12"
                    className="w-full px-4 py-2 text-sm  rounded-lg bg-gray-50 text-[#1E293B] font-medium text-center"
                    readOnly
                />
            </div>
        </div>
    );
};

export default StorageLocation;