import React from 'react';

const StatCard = ({ label, value, trend }) => {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200">
      <div className="text-xs font-medium text-gray-500 mb-1">{label}</div>
      <div className="text-2xl font-semibold text-gray-900">{value}</div>
      <div className="text-xs text-gray-500 mt-1">{trend}</div>
    </div>
  );
};

export default StatCard;