import React from 'react';

const ItemStockInfo = () => {
    return (
        <div className="bg-[#1E60AF] rounded-xl border border-gray-200 p-5">
           <div className='flex items-center gap-2' >
             <img src="Icon (4).svg" alt="" className='pb-4' />
            <h2 className="text-lg font-bold text-gray-800 mb-4">Item Stock Info</h2>
           </div>
        
            <div className="text-center py-8">
                <p className="text-sm text-[#FFFFFF]">SELECT AN ITEM TO VIEW CURRENT  <br /> STOCK DETAILS</p>
            </div>
            
        </div>
    );
};

export default ItemStockInfo;