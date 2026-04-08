import React from 'react';

const ApprovalWorkflow = ({ currentStep = 1 }) => {
    const steps = [
        { name: "Drafting", status: "completed" },
        { name: "Unit Head Approval", status: "pending" },
        { name: "Procurement Review", status: "pending" },
        { name: "PO Issuance", status: "pending" }
    ];

    return (
        <div className="bg-white rounded-xl border border-gray-200 p-5">
            <h2 className="text-base font-semibold text-gray-800 mb-4">Approval Workflow</h2>
            
            <div className="space-y-3">
                {steps.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            step.status === 'completed' 
                                ? 'bg-green-100 text-green-600' 
                                : 'bg-gray-100 text-gray-400'
                        }`}>
                            {step.status === 'completed' ? (
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            ) : (
                                <span className="text-sm">{idx + 1}</span>
                            )}
                        </div>
                        <div className="flex-1">
                            <div className={`text-sm font-medium ${
                                step.status === 'completed' ? 'text-green-600' : 'text-gray-600'
                            }`}>
                                {step.name}
                            </div>
                        </div>
                        {idx < steps.length - 1 && (
                            <div className="w-px h-6 bg-gray-200 ml-4"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ApprovalWorkflow;    