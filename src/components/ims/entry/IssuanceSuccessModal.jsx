import React from 'react';
import { CheckCircle, Printer, Plus } from 'lucide-react';

const IssuanceSuccessModal = ({ isOpen, onClose, onPrint, onNewIssuance, recordId = "ISS-2023-0894-X" }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-start justify-center z-50 p-4 pt-20">
            <div className="bg-white rounded-2xl shadow-xl max-w-md w-full overflow-hidden animate-fadeIn">
                {/* Success Icon */}
                <div className="flex justify-center pt-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle size={40} className="text-green-500" />
                    </div>
                </div>

                {/* Success Message */}
                <div className="text-center px-6 py-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Issuance successful!</h3>
                    <p className="text-sm text-gray-600">
                        Item stock updated automatically.
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                        Record ID: <span className="font-mono font-semibold text-[#1A8FA0]">{recordId}</span>
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 p-6 pt-2">
                    <button
                        onClick={onPrint}
                        className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-gray-300 text-gray-700 text-sm font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                    >
                        <Printer size={16} />
                        Print Receipt
                    </button>
                    <button
                        onClick={onNewIssuance}
                        className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#3B82F6] to-[#1E4D7B] hover:from-[#2563EB] hover:to-[#1A3A6B] text-white text-sm font-semibold rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                        <Plus size={16} />
                        New Issuance
                    </button>
                </div>

                {/* Close button at bottom */}
                <div className="text-center pb-6">
                    <button
                        onClick={onClose}
                        className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default IssuanceSuccessModal;    