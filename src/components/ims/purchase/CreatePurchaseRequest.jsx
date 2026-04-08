import React, { useState } from 'react';
import RequestInfo from './RequestInfo';
import OrderSummary from './OrderSummary';
import PurchaseItemsTable from './PurchaseItemsTable';
import SupportingDocuments from './SupportingDocuments';
import ApprovalWorkflow from './ApprovalWorkflow';
import Footer from '../../common/fotter';

const CreatePurchaseRequest = () => {
    const [formData, setFormData] = useState({
        requestType: 'Manual Request',
        requestingUnit: 'Warehouse A - North Sector',
        requestingUser: 'Alexander Hamilton',
        reason: ''
    });

    const [items, setItems] = useState([
        { reference: "SKU-49201", category: "Construction", qty: 50, unitPrice: 120.00 },
        { reference: "SKU-22093", category: "Chemicals", qty: 10, unitPrice: 45.50 },
        { reference: "SKU-88120", category: "Safety Helmets Blue", qty: 100, unitPrice: 25.00 }
    ]);

    const updateItem = (index, field, value) => {
        const updatedItems = [...items];
        updatedItems[index][field] = value;
        setItems(updatedItems);
    };

    const removeItem = (index) => {
        setItems(items.filter((_, i) => i !== index));
    };

    const addNewItem = () => {
        setItems([...items, { reference: "", category: "", qty: 1, unitPrice: 0 }]);
    };

    const subtotal = items.reduce((sum, item) => sum + (item.qty * item.unitPrice), 0);
    const shipping = 125.00;
    const taxes = 0;
    const total = subtotal + shipping + taxes;

    return (
        <div className="max-w-7xl mx-auto bg-[#F9FAFB] min-h-screen">
            <div className="p-6">
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-900">Create Purchase Request</h1>
                </div>

                <div className="grid grid-cols-3 gap-6">
                    {/* Left Column - Main Form (2 columns) */}
                    <div className="col-span-2 space-y-6">
                        {/* Request Information */}
                        <RequestInfo formData={formData} setFormData={setFormData} />

                        {/* Purchase Items */}
                        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                            <div className="p-5 border-b border-gray-200">
                                <h2 className="text-base font-semibold text-gray-800">Purchase Items</h2>
                            </div>
                            <PurchaseItemsTable 
                                items={items} 
                                onUpdateItem={updateItem}
                                onRemoveItem={removeItem}
                            />
                            <div className="p-4 border-t border-gray-200">
                                <button
                                    onClick={addNewItem}
                                    className="text-sm text-[#1A8FA0] hover:text-[#167a89] font-medium flex items-center gap-1"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    </svg>
                                    Add Line Item
                                </button>
                            </div>
                        </div>

                        {/* Supporting Documents */}
                        <SupportingDocuments />
                    </div>

                    {/* Right Column - Sidebar (1 column) */}
                    <div className="col-span-1 space-y-6">
                        {/* Order Summary */}
                        <OrderSummary 
                            subtotal={subtotal}
                            shipping={shipping}
                            taxes={taxes}
                            total={total}
                            itemsCount={items.length}
                        />

                        {/* Approval Workflow */}
                        <ApprovalWorkflow />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CreatePurchaseRequest;