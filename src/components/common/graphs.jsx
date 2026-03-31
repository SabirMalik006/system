import React from 'react';
import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';

// #region Sample data
const data = [
  {
    name: '35-39',
    uv: 8.22,
    pv: 9800,
    fill: '#82ca9d',
  },
  {
    name: '40-49',
    uv: 8.63,
    pv: 3908,
    fill: '#a4de6c',
  },
  {
    name: '50+',
    uv: 2.63,
    pv: 4800,
    fill: '#d0ed57',
  },
];

// #endregion
const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};

const SimpleRadialBarChart = () => {
  // Calculate total percentage (example)
  const totalPercentage = 92;
  const increase = 5;

  return (
    <div className="relative w-full max-w-[700px] mx-auto">
      <RadialBarChart
        style={{ width: '100%', maxWidth: '700px', maxHeight: '80vh', aspectRatio: 1.618 }}
        responsive
        cx="30%"
        barSize={14}
        data={data}
      >
        <RadialBar label={{ position: 'insideStart', fill: '#fff' }} background dataKey="uv" />
        <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
        <Tooltip />
      </RadialBarChart>
      
      {/* Center Text with Card Style */}
      <div className="absolute top-1/2 left-[30%] transform -translate-x-1/2 -translate-y-1/2 text-center bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-gray-100 min-w-[100px]">
        <div className="text-3xl font-bold text-[#2196F3]">{totalPercentage}%</div>
        <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mt-1">in stock</div>
        <div className="text-xs text-green-600 mt-1 flex items-center justify-center gap-1">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          {increase}% increase
        </div>
      </div>
    </div>
  );
};

export default SimpleRadialBarChart;