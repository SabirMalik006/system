import React from 'react';

const AdditionalInfo = () => {
    return (
        <div className="bg-white rounded-xl border border-gray-200 p-5">
            <h2 className="text-lg font-semibold text-[#2B8CEE] mb-4">Additional Information</h2>

            <div className="space-y-4">
                {/* Vendor */}
                <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">VENDOR (OPTIONAL)</label>
                    <select className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#1A8FA0] bg-white">
                        <option>GlobalLogistics Corp (IND-001)</option>
                        <option>FastTrack Supplies (IND-002)</option>
                        <option>Prime Materials (IND-003)</option>
                    </select>
                </div>

                {/* Invoice Number */}
                <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">INVOICE NUMBER (OPTIONAL)</label>
                    <input
                        type="text"
                        placeholder="INV-GL-2024-A429"
                        className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#1A8FA0] bg-white"
                    />
                </div>

                {/* Notes */}
                <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">NOTES / COMMENTS (OPTIONAL)</label>
                    <textarea
                        rows="3"
                        placeholder="Add any additional notes about this receipt..."
                        className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#1A8FA0] bg-white resize-none"
                    />
                </div>
            </div>
        </div>
    );
};

export default AdditionalInfo;