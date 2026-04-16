import React from 'react';
import { User, Calendar, Edit3, Clock, History } from 'lucide-react';

export default function ProfileMetaBar() {
  return (
    <div className="bg-white border-b border-gray-100 px-5 py-2 flex items-center gap-6 flex-wrap text-xs">
      <div className="flex items-center gap-1.5 text-gray-500">
        <User size={12} className="text-gray-400" />
        <span>Created by:</span>
        <span className="font-semibold text-[#1A6FC4]">Admin - Rehan Aslam</span>
      </div>
      <div className="flex items-center gap-1.5 text-gray-500">
        <Calendar size={12} className="text-gray-400" />
        <span>Created:</span>
        <span className="font-semibold text-[#1A6FC4]">12 Jan 2022</span>
      </div>
      <div className="flex items-center gap-1.5 text-gray-500">
        <Edit3 size={12} className="text-gray-400" />
        <span>Last Updated by:</span>
        <span className="font-semibold text-[#1A6FC4]">Admin – Tariq Mahmood</span>
      </div>
      <div className="flex items-center gap-1.5 text-gray-500">
        <Clock size={12} className="text-gray-400" />
        <span>Last Updated:</span>
        <span className="font-semibold text-[#1A6FC4]">01 Mar 2025, 02:15 PM</span>
      </div>
      <button className="ml-auto flex items-center gap-1.5 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
        <History size={12} />
        View Change Log
      </button>
    </div>
  );
}