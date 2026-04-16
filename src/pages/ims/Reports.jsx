import React, { useState } from 'react';
import Footer from '../../components/common/fotter';

const Reports = () => {
    const [selectedLog, setSelectedLog] = useState(null);

    const statsData = [
        { label: 'TOTAL LOG ENTRIES', value: '12,845', trend: '▲ 412% vs last month' },
        { label: 'ACTIONS TODAY', value: '482', trend: '● Active now' },
        { label: 'CRITICAL ACTIONS', value: '14', trend: '⚠ Needs review' },
        { label: 'MOST ACTIVE MODULE', value: 'Stock In', trend: 'INVENTORY DEPT.' },
        { label: 'MOST ACTIVE USER', value: 'Alex Sterling', trend: 'SYSTEM ADMIN' },
    ];

    const auditLogs = [
        {
            id: 1,
            timestamp: 'Oct 24, 2023 - 14:32:01',
            user: 'Mustafa',
            action: 'CREATE',
            module: 'Inventory',
            resource: 'Product SKU PROD-9921',
            status: 'SUCCESS',
            details: 'BASIC INFO'
        },
        {
            id: 2,
            timestamp: 'Oct 24, 2023 - 14:15:22',
            user: 'Ahmed',
            action: 'UPDATE',
            module: 'Sales',
            resource: 'Order ORD-5542',
            status: 'SUCCESS',
            details: 'BASIC INFO'
        },
        {
            id: 3,
            timestamp: 'Oct 24, 2023 - 13:58:05',
            user: 'Hassan',
            action: 'DELETE',
            module: 'Vendors',
            resource: 'Contract CNT-102',
            status: 'SUCCESS',
            details: 'BASIC INFO'
        },
        {
            id: 4,
            timestamp: 'Oct 24, 2023 - 13:40:11',
            user: 'Ameer',
            action: 'REJECT',
            module: 'Approvals',
            resource: 'Purchase Req PROD-501',
            status: 'SUCCESS',
            details: 'BASIC INFO'
        },
        {
            id: 5,
            timestamp: 'Oct 24, 2023  - 12:55:40',
            user: 'Usman',
            action: 'READ',
            module: 'System',
            resource: 'Report View REP AUDIT-24',
            status: 'FAILED',
            details: 'DATA SNAPSHOT'
        }
    ];

    const getActionBadgeColor = (action) => {
        const colors = {
            CREATE: 'bg-green-100 text-green-700 rounded-xl',
            UPDATE: 'bg-blue-100 text-blue-700 rounded-xl',
            DELETE: 'bg-red-100 text-red-700 rounded-xl',
            REJECT: 'bg-orange-100 text-orange-700 rounded-xl',
            READ: 'bg-purple-100 text-purple-700 rounded-xl',
        };
        return colors[action] || 'bg-gray-100 text-gray-700';
    };

    const handleViewDetails = (log) => {
        setSelectedLog(log);
    };

    return (
        <div className="max-w-[2560px] mx-auto bg-[#C1DDF8] min-h-screen">

            {/* Stats Grid - Responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-6 p-4 md:p-6">
                {statsData.map((stat, index) => {
                    const leftColor = index === 2 ? '#DC2626' : index === 4 ? '#000000' : index === 3 ? '#94A3B8' : '#2166A0';
                    const trendColor = index >= 3 ? 'text-[#94A3B8]' : index === 2 ? 'text-[#DC2626]' : 'text-[#10B981]';
                    return (
                        <div
                            key={index}
                            className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm border-l-4"
                            style={{ borderLeftColor: leftColor }}
                        >
                            <div className="text-xs font-medium text-gray-500 mb-1">{stat.label}</div>
                            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                            <div className={`text-xs font-medium ${trendColor} mt-1`}>{stat.trend}</div>
                        </div>
                    );
                })}
            </div>

            {/* Filters - Responsive */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6 bg-white p-4 md:p-5 rounded-2xl border border-gray-200 shadow-sm mx-4 md:mx-6">
                <div className="flex flex-wrap items-center gap-3">
                    {/* Date Range */}
                    <div className="flex items-center gap-2 bg-[#EAF1F3] rounded-md pl-3 py-2.5">
                        <img src="/Icon.png" alt="date icon" className="w-4 h-4" />
                        <p className="text-sm text-[#334155] font-medium">Date Range</p>
                    </div>

                    {/* User */}
                    <div className="flex items-center gap-2 bg-[#EAF1F3] rounded-md px-3 py-2.5">
                        <img src="/Container.png" alt="user icon" className="w-4 h-4" />
                        <select className="text-sm text-[#334155] font-medium bg-transparent border-none focus:outline-none">
                            <option>User</option>
                        </select>
                    </div>

                    {/* Action Type */}
                    <div className="flex items-center gap-2 bg-[#EAF1F3] rounded-md px-3 py-2.5">
                        <img src="/Icon (1).png" alt="action type icon" className="w-4 h-4" />
                        <select className="text-sm text-[#334155] font-medium bg-transparent border-none focus:outline-none">
                            <option>Action Type</option>
                        </select>
                    </div>

                    {/* Module */}
                    <div className="flex items-center gap-2 bg-[#EAF1F3] rounded-md px-3 py-2.5">
                        <img src="/Container (1).png" alt="module icon" className="w-4 h-4" />
                        <select className="text-sm text-[#334155] font-medium bg-transparent border-none focus:outline-none">
                            <option>Module</option>
                        </select>
                    </div>

                    {/* Resource ID */}
                    <div className="flex items-center gap-2 bg-[#EAF1F3] rounded-md px-3 py-2.5">
                        <img src="/Icon (2).png" alt="resource icon" className="w-4 h-4" />
                        <p className="text-sm text-[#334155] font-medium">Resource ID</p>
                    </div>
                </div>

                <button className="text-sm text-[#1A8FA0] hover:text-blue-800 font-medium cursor-pointer whitespace-nowrap">
                    Clear all filters
                </button>
            </div>

            {/* Table and Details Panel */}
            <div className="flex flex-col xl:flex-row gap-4 p-4 md:p-6">

                {/* Actions Table - Desktop design exactly same rakha hai */}
                <div className="flex-1 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[950px]">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-200">
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TIMESTAMP</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">USER</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ACTION</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">MODULE</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">RESOURCE</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STATUS</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DETAILS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {auditLogs.map((log) => (
                                    <tr key={log.id} className="border-b border-gray-200 hover:bg-gray-50">
                                        <td className="px-4 py-7 text-sm text-gray-900 leading-tight">
                                            <div>{log.timestamp.split(' - ')[0]}</div>
                                            <div className="text-sm text-gray-900 mt-1">
                                                {log.timestamp.split(' - ')[1]}
                                            </div>
                                        </td>

                                        <td className="px-1 py-3">
                                            <div className="flex items-center gap-3">
                                                <img src="/piccc.png" alt="user avatar" className="w-5 h-5 rounded-full" />
                                                <div className="flex flex-col">
                                                    <span className="text-sm text-gray-900 font-bold">{log.user.split(' ')[0]}</span>
                                                    <span className="text-sm font-bold text-gray-800">
                                                        {log.user.split(' ').slice(1).join(' ')}
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3">
                                            <span className={`px-2 py-1 text-xs font-medium rounded ${getActionBadgeColor(log.action)}`}>
                                                {log.action}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-sm text-gray-900">{log.module}</td>
                                        <td className="px-4 py-3 text-sm text-gray-900">
                                            {(() => {
                                                const parts = log.resource.split(' ');
                                                const first = parts.shift();
                                                const rest = parts.join(' ');
                                                return (
                                                    <span>
                                                        <span className="font-bold">{first}</span>{rest ? ' ' + rest : ''}
                                                    </span>
                                                );
                                            })()}
                                        </td>
                                        <td className="px-4 py-3">
                                            <span className={`px-2 py-1 text-xs font-bold rounded ${log.status === 'SUCCESS' ? 'bg-[#1A8FA0] text-white' : 'bg-red-100 text-red-700'}`}>
                                                {log.status}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3">
                                            <button
                                                onClick={() => handleViewDetails(log)}
                                                className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 cursor-pointer"
                                            >
                                                <img src="/Button.png" alt="" className="pl-4 h-4 w-9 cursor-pointer" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination - Desktop jaisa hi rakha */}
                    <div className="px-4 py-3 bg-white flex items-center justify-between border-t border-gray-200">
                        <span className="text-sm text-gray-600">Showing 1 to 5 of 12,845 logs</span>

                        <div className="flex items-center gap-2">
                            <button className="text-sm text-gray-600 hover:bg-gray-100 rounded">
                                <img src="/l.png" alt="" className="h-7 w-7 rounded-lg cursor-pointer" />
                            </button>

                            <button className="px-3 py-1 text-sm text-white bg-[#1A8FA0] rounded-lg font-semibold">1</button>
                            <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-lg font-semibold">2</button>
                            <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-lg font-semibold">3</button>
                            <span className="px-2 py-1 text-sm text-gray-600">...</span>
                            <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-lg font-semibold">2570</button>

                            <button className="text-sm text-gray-600 hover:bg-gray-100 rounded">
                                <img src="/r.png" alt="" className="h-7 w-7 rounded-lg cursor-pointer" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Log Details Panel - Responsive */}
                <div className="w-full xl:w-96 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col">
                    <div className="p-4 border-b border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-700">Log Details</h3>
                        <div className="text-xs text-[#64748B] font-medium mb-4">ID: LOG-82741</div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4">
                        {/* BASIC INFO */}
                        <div className="mb-4">
                            <div className="flex items-center gap-2">
                                <img src="/s.png" alt="" className="h-3 w-3 mb-2" />
                                <h4 className="text-md font-bold text-[#1A8FA0] mb-2">BASIC INFO</h4>
                            </div>
                            <div className="space-y-3">
                                <div>
                                    <div className="text-xs text-gray-400">ACTION PERFORMED</div>
                                    <div className="text-md font-semibold text-gray-900 mt-0.5">New Product Created</div>
                                </div>
                                <div>
                                    <div className="text-xs text-gray-400">DATE & TIME</div>
                                    <div className="text-md font-semibold text-gray-900 mt-0.5">24 Oct 2023, 14:32:01</div>
                                </div>
                                <div>
                                    <div className="text-xs text-gray-400">IP ADDRESS</div>
                                    <div className="text-sm text-gray-900 mt-0.5">192.168.1.144</div>
                                </div>
                            </div>
                        </div>

                        {/* RESOURCE INFO */}
                        <div className="mb-4">
                            <div className="flex items-center gap-2">
                                <img src="/a.png" alt="" className="h-3 w-3 mb-2" />
                                <h4 className="text-md font-bold text-[#1A8FA0] mb-2">RESOURCE INFO</h4>
                            </div>
                            <div className="space-y-3">
                                <div>
                                    <div className="text-xs text-gray-400">RESOURCE NAME</div>
                                    <div className="text-sm text-[#1A8FA0] font-semibold mt-0.5">High-Traction Treadmills</div>
                                </div>
                                <div>
                                    <div className="text-xs text-gray-400">SYSTEM PATH</div>
                                    <div className="text-sm text-gray-900 mt-0.5 break-all">/v1/inventory/products/create</div>
                                </div>
                            </div>
                        </div>

                        {/* DATA SNAPSHOT */}
                        <div>
                            <div className="flex items-center gap-2">
                                <img src="/b.png" alt="" className="h-3 w-3 mb-2" />
                                <select className="text-sm font-bold text-black mb-2">
                                    <option value="">DATA SNAPSHOT</option>
                                </select>
                            </div>
                            <button className="text-sm border-2 border-dashed rounded-xl border-gray-200 py-4 px-12 text-[#94A3B8] hover:text-blue-800 w-full">
                                Click to expand before/after changes
                            </button>
                        </div>
                    </div>

                    <div className="p-4 border-t border-gray-200">
                        <button className="w-full text-center text-md text-white bg-[#1A8FA0] cursor-pointer rounded-2xl border border-gray-200 py-4">
                            Close Panel
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Reports;