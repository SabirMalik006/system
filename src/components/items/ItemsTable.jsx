import React from 'react';

const ItemsTable = ({ items }) => {
    const headers = [
        "ITEM ID",
        "IDENTIFIERS",
        "ITEM NAME AND CATEGORY",
        "UNIT",
        "MIN STOCK",
        "CURRENT STOCK",
        "THRESHOLD",
        "PRICE",
        "STATUS",
        "ACTION"
    ];

    return (
        <div className="overflow-x-auto">
            <table className="w-full">
                <thead>
                    <tr className="bg-gray-50 border-b border-gray-200 ">
                        {headers.map((header, idx) => (
                            <th
                                key={idx}
                                className=" px-5 py-3 text-left text-xs font-medium text-white uppercase tracking-wider whitespace-nowrap bg-gradient-to-r from-[#1E4D7B] to-[#2166A0] "
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                            <td className="px-4 py-3 text-sm font-medium text-[#2563EB]">{item.id}</td>
                            <td className="px-4 py-3 text-sm text-gray-600">{item.identifiers}</td>
                            <td className="px-4 py-3">
                                <div>
                                    <div className="text-sm font-medium text-gray-900">{item.name}</div>
                                    
                                </div>
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-600">{item.unit}</td>
                            <td className="px-4 py-3 text-sm text-gray-600">{item.minStock}</td>
                            <td className="px-4 py-3">
                                <span className={`text-sm font-medium ${parseInt(item.currentStock.replace(/,/g, '')) < parseInt(item.threshold)
                                        ? 'text-red-600'
                                        : 'text-gray-900'
                                    }`}>
                                    {item.currentStock}
                                </span>
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-600">{item.threshold}</td>
                            <td className="px-4 py-3 text-sm font-medium text-gray-900">{item.price}</td>
                            <td className="px-4 py-3">
                                <button className="p-1">
                                    <img src="/Button (1).png" alt="Status Button" className="" />
                                </button>
                            </td>
                            <td className="px-4 py-3">
                                <div className="flex items-center gap-2">
                                    <button className="p-1 text-gray-400 hover:text-blue-600 transition-colors">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                        </svg>
                                    </button>
                                    <button className="p-1 text-gray-400 hover:text-red-600 transition-colors">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ItemsTable;