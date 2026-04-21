import React from 'react';

const RequiredFields = () => {
    const fields = [
        "Item selected",
        "Quantity entered",
        "Return reason chosen",
        "Condition documented",
        "Returning staff listed",
        "Recieving unit set",
        "Recieving user set"
    ];

    return (
        <div className="bg-gradient-to-t from-[#1E4D7B] to-[#1E4D7B] rounded-xl border-2 border-[#1E60AF] p-5">
           <div className='flex gap-2 item-center mb-3' >
             <img src="Icon (5).svg" alt="" />
            <h2 className="text-base font-semibold text-white/90 ">Required Fields</h2>
           </div>
            
            <div className="space-y-2">
                {fields.map((field, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#fff] "></div>
                        <span className="text-sm text-white/90">{field}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RequiredFields;