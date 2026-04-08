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
        <div className="bg-[#2166A066] rounded-xl border-2 border-[#1E60AF] p-5">
           <div className='flex gap-2 item-center mb-3' >
             <img src="Icon (5).svg" alt="" />
            <h2 className="text-base font-semibold text-gray-800 ">Required Fields</h2>
           </div>
            
            <div className="space-y-2">
                {fields.map((field, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#475569] "></div>
                        <span className="text-sm text-[#0F172A]">{field}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RequiredFields;