import React from "react";
import { X, Star, Building2 } from "lucide-react";

const suppliedItems = [
  { name: "Microchips", category: "Electronics", units: "450 Units" },
  { name: "Circuit Breakers", category: "Electronics", units: "120 Units" },
];

export default function VendorProfilePanel({ onClose }) {
  return (
    <div className="w-[280px] bg-white rounded-xl shadow-lg p-3 flex flex-col gap-2">

      {/* Top: Icon + Close */}
      <div className="flex items-start justify-between">
        <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center">
          <Building2 size={14} className="text-teal-500" />
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={14} />
        </button>
      </div>

      {/* Vendor Name + Badge + Rating */}
      <div>
        <div className="flex items-center gap-1.5 mb-0.5">
          <h2 className="text-xs font-bold text-gray-900">Lumina Global Systems</h2>
          <span className="text-[8px] font-bold text-teal-600 bg-teal-100 px-1.5 py-0.5 rounded-full">
            ACTIVE
          </span>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[9px] text-gray-400">ID: VND-00921</p>
          <div className="flex items-center gap-0.5">
            <Star size={9} className="text-yellow-400 fill-yellow-400" />
            <span className="text-[9px] font-semibold text-gray-700">4.9</span>
          </div>
        </div>
      </div>

      <hr className="border-gray-100" />

      {/* Vendor Contact Information */}
      <div>
        <p className="text-[8px] font-bold tracking-widest text-teal-600 uppercase mb-1.5">
          Vendor Contact Information
        </p>

        <div className="grid grid-cols-2 gap-2 mb-1.5">
          <div>
            <p className="text-[7px] font-semibold tracking-widest text-gray-400 uppercase mb-0.5">
              Contact Person
            </p>
            <p className="text-[10px] font-semibold text-gray-800">Sarah Mitchell</p>
          </div>
          <div>
            <p className="text-[7px] font-semibold tracking-widest text-gray-400 uppercase mb-0.5">
              Phone
            </p>
            <p className="text-[10px] font-semibold text-gray-800">+1 (555) 092-1234</p>
          </div>
        </div>

        <div className="mb-1.5">
          <p className="text-[7px] font-semibold tracking-widest text-gray-400 uppercase mb-0.5">
            Email
          </p>
          <p className="text-[10px] font-semibold text-gray-800 truncate">s.mitchell@lumina.io</p>
        </div>

        <div>
          <p className="text-[7px] font-semibold tracking-widest text-gray-400 uppercase mb-0.5">
            Address
          </p>
          <p className="text-[10px] font-semibold text-gray-800 truncate">
            1200 Innovation Dr, CA
          </p>
        </div>
      </div>

      {/* Supplied Items */}
      <div>
        <p className="text-[8px] font-bold tracking-widest text-teal-600 uppercase mb-1.5">
          Supplied Items
        </p>
        <div className="space-y-1">
          {suppliedItems.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between bg-blue-50 rounded-md px-2 py-1.5"
            >
              <div>
                <p className="text-[10px] font-semibold text-gray-800">{item.name}</p>
                <p className="text-[8px] text-gray-400">{item.category}</p>
              </div>
              <span className="text-[9px] font-bold text-blue-600">{item.units}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Contract Details */}
      <div>
        <p className="text-[8px] font-bold tracking-widest text-teal-600 uppercase mb-1.5">
          Contract Details
        </p>
        <div>
          <p className="text-[7px] font-semibold tracking-widest text-gray-400 uppercase mb-0.5">
            Contract Number
          </p>
          <p className="text-[10px] font-semibold text-gray-800">CNTR-2024-0091</p>
        </div>
      </div>

      <hr className="border-gray-100" />

      {/* Action Buttons */}
      <div className="flex flex-col gap-1.5">
        <button
          className="w-full py-1.5 rounded-lg text-white font-semibold text-[11px] transition-opacity hover:opacity-90"
          style={{ background: "linear-gradient(135deg,#0d9488,#0f766e)" }}
        >
          Edit Vendor Info
        </button>
        <div className="grid grid-cols-2 gap-1.5">
          <button className="py-1.5 rounded-lg border border-gray-200 text-gray-700 font-semibold text-[10px] hover:bg-gray-50 transition-colors">
            Mark Inactive
          </button>
          <button className="py-1.5 rounded-lg border border-red-200 text-red-500 font-semibold text-[10px] hover:bg-red-50 transition-colors">
            Blacklist
          </button>
        </div>
      </div>

    </div>
  );
}