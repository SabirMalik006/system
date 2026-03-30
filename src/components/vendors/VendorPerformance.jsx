import React from 'react';

const VendorPerformance = () => {
    return (
        <div className="grid grid-cols-2 gap-6">
            {/* Vendor Performance by Rating */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h2 className="text-base font-semibold text-gray-800 mb-4">Vendor Performance by Rating</h2>
                
                <div className="space-y-4">
                    {/* Rating 5 Star */}
                    <div>
                        <div className="flex items-center justify-between mb-1">
                            <span className="text-sm text-gray-600">5 Star (Excellent)</span>
                            <span className="text-sm font-medium text-gray-700">63%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: "63%" }}></div>
                        </div>
                    </div>
                    
                    {/* Rating 4 Star */}
                    <div>
                        <div className="flex items-center justify-between mb-1">
                            <span className="text-sm text-gray-600">4 Star (Good)</span>
                            <span className="text-sm font-medium text-gray-700">22%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "22%" }}></div>
                        </div>
                    </div>
                    
                    {/* Rating 3 Star */}
                    <div>
                        <div className="flex items-center justify-between mb-1">
                            <span className="text-sm text-gray-600">3 Star (Average)</span>
                            <span className="text-sm font-medium text-gray-700">10%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-orange-500 h-2 rounded-full" style={{ width: "10%" }}></div>
                        </div>
                    </div>
                    
                    {/* Rating Below 3 Star */}
                    <div>
                        <div className="flex items-center justify-between mb-1">
                            <span className="text-sm text-gray-600">Below 3 Star (Poor)</span>
                            <span className="text-sm font-medium text-gray-700">5%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-red-500 h-2 rounded-full" style={{ width: "5%" }}></div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900">4.8</div>
                            <div className="text-xs text-gray-500">Overall Rating</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900">128</div>
                            <div className="text-xs text-gray-500">Active Vendors</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900">96%</div>
                            <div className="text-xs text-gray-500">Satisfaction</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* On-Time Delivery vs Total Orders */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h2 className="text-base font-semibold text-gray-800 mb-4">On-Time Delivery vs Total Orders</h2>
                
                <div className="space-y-4">
                    {/* On-time */}
                    <div>
                        <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <span className="text-sm text-gray-600">On-time</span>
                            </div>
                            <span className="text-sm font-medium text-gray-700">85%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                        </div>
                    </div>
                    
                    {/* Late */}
                    <div>
                        <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <span className="text-sm text-gray-600">Late</span>
                            </div>
                            <span className="text-sm font-medium text-gray-700">8%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "8%" }}></div>
                        </div>
                    </div>
                    
                    {/* Missing */}
                    <div>
                        <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <span className="text-sm text-gray-600">Missing</span>
                            </div>
                            <span className="text-sm font-medium text-gray-700">4%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-red-500 h-2 rounded-full" style={{ width: "4%" }}></div>
                        </div>
                    </div>
                    
                    {/* Awaiting */}
                    <div>
                        <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                                <span className="text-sm text-gray-600">Awaiting</span>
                            </div>
                            <span className="text-sm font-medium text-gray-700">3%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-gray-400 h-2 rounded-full" style={{ width: "3%" }}></div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900">1,892</div>
                            <div className="text-xs text-gray-500">Total Orders</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900">1,608</div>
                            <div className="text-xs text-gray-500">Delivered On-time</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900">284</div>
                            <div className="text-xs text-gray-500">Pending/Issues</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VendorPerformance;