import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Info } from 'lucide-react';

const ratingData = [
  { name: 'Excellent', value: 63, color: '#1E88E5', darkColor: '#1565C0' },
  { name: 'Good',      value: 22, color: '#1a3a8f', darkColor: '#0d2257' },
  { name: 'Average',   value: 8,  color: '#455a8a', darkColor: '#2c3d6b' },
  { name: 'Poor',      value: 7,  color: '#EF5350', darkColor: '#b71c1c' },
];

const deliveryData = [
  { vendor: 'Lumina',    onTime: 92, total: 88 },
  { vendor: 'Apex',      onTime: 85, total: 82 },
  { vendor: 'Zenith',    onTime: 45, total: 68 },
  { vendor: 'AquaFlow',  onTime: 95, total: 78 },
  { vendor: 'ClearState',onTime: 88, total: 72 },
];

function polarToCartesian(cx, cy, rx, ry, angleDeg) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: cx + rx * Math.cos(rad),
    y: cy + ry * Math.sin(rad),
  };
}

function pieSlicePath(cx, cy, rx, ry, startAngle, endAngle) {
  const start = polarToCartesian(cx, cy, rx, ry, startAngle);
  const end   = polarToCartesian(cx, cy, rx, ry, endAngle);
  const large = endAngle - startAngle > 180 ? 1 : 0;
  return [
    `M ${cx} ${cy}`,
    `L ${start.x} ${start.y}`,
    `A ${rx} ${ry} 0 ${large} 1 ${end.x} ${end.y}`,
    'Z',
  ].join(' ');
}

function pie3DSidePath(cx, cy, rx, ry, depth, startAngle, endAngle) {
  const clampedStart = Math.max(startAngle, 180);
  const clampedEnd   = Math.min(endAngle, 360);
  if (clampedStart >= clampedEnd) return null;

  const s1 = polarToCartesian(cx, cy, rx, ry, clampedStart);
  const e1 = polarToCartesian(cx, cy, rx, ry, clampedEnd);
  const s2 = { x: s1.x, y: s1.y + depth };
  const e2 = { x: e1.x, y: e1.y + depth };
  const large = clampedEnd - clampedStart > 180 ? 1 : 0;

  return [
    `M ${s1.x} ${s1.y}`,
    `A ${rx} ${ry} 0 ${large} 1 ${e1.x} ${e1.y}`,
    `L ${e2.x} ${e2.y}`,
    `A ${rx} ${ry} 0 ${large} 0 ${s2.x} ${s2.y}`,
    'Z',
  ].join(' ');
}

export default function VendorPerformance() {
  const total = ratingData.reduce((s, d) => s + d.value, 0);
  let currentAngle = 0;
  const slices = ratingData.map(d => {
    const startAngle = currentAngle;
    const sweep = (d.value / total) * 360;
    const endAngle = currentAngle + sweep;
    currentAngle = endAngle;
    return { ...d, startAngle, endAngle, sweep };
  });

  const CX = 200, CY = 185;
  const RX = 145, RY = 105;
  const DEPTH = 28;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Left: Vendor Performance by Rating - 3D Pie Chart */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-bold text-gray-900">Vendor Performance by Rating</h2>
          <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
            <Info size={16} className="text-gray-400" strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex justify-center">
          <svg
            width="100%"
            viewBox="0 0 400 340"
            style={{ overflow: 'visible', maxWidth: '400px', margin: '0 auto' }}
          >
            {/* DEPTH SIDES (draw first, behind top faces) */}
            {slices.map((s, i) => {
              const sidePath = pie3DSidePath(CX, CY, RX, RY, DEPTH, s.startAngle, s.endAngle);
              if (!sidePath) return null;
              return (
                <path
                  key={`side-${i}`}
                  d={sidePath}
                  fill={s.darkColor}
                  opacity={0.95}
                />
              );
            })}

            {/* Center ellipse bottom (shadow) */}
            <ellipse
              cx={CX}
              cy={CY + DEPTH + 2}
              rx={RX}
              ry={RY}
              fill="rgba(0,0,0,0.10)"
            />

            {/* TOP FACES */}
            {slices.map((s, i) => (
              <path
                key={`top-${i}`}
                d={pieSlicePath(CX, CY, RX, RY, s.startAngle, s.endAngle)}
                fill={s.color}
                stroke="white"
                strokeWidth="2"
              />
            ))}

            {/* LABELS WITH LEADER LINES */}
            {slices.map((s, i) => {
              const midAngle = (s.startAngle + s.endAngle) / 2;
              const inner = polarToCartesian(CX, CY, RX * 0.92, RY * 0.92, midAngle);
              const outerMult = 1.38;
              const outer = polarToCartesian(CX, CY, RX * outerMult, RY * outerMult, midAngle);
              const rad = ((midAngle - 90) * Math.PI) / 180;
              const cosVal = Math.cos(rad);
              const anchor = cosVal > 0.1 ? 'start' : cosVal < -0.1 ? 'end' : 'middle';
              const lx = outer.x + (cosVal > 0 ? 4 : -4);
              const ly = outer.y;

              return (
                <g key={`label-${i}`}>
                  <line
                    x1={inner.x}
                    y1={inner.y}
                    x2={outer.x}
                    y2={outer.y}
                    stroke="#94a3b8"
                    strokeWidth="1"
                  />
                  <text
                    x={lx}
                    y={ly - 4}
                    textAnchor={anchor}
                    fontSize="13"
                    fontWeight="700"
                    fill="#0f172a"
                    fontFamily="inherit"
                  >
                    {s.value}%
                  </text>
                  <text
                    x={lx}
                    y={ly + 11}
                    textAnchor={anchor}
                    fontSize="10"
                    fill="#64748b"
                    fontFamily="inherit"
                  >
                    {s.name}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Right: On-Time Delivery vs Total Orders - Grouped Bar Chart */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-base font-semibold text-gray-800">ON-TIME DELIVERY VS TOTAL ORDERS</h2>
          <div className="flex items-center gap-5 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#1A8FA0] rounded"></div>
              <span className="text-gray-600">On-time %</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#1E4D7B] rounded"></div>
              <span className="text-gray-600">Orders</span>
            </div>
          </div>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={deliveryData} barGap={8}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis
              dataKey="vendor"
              tick={{ fontSize: 12, fill: '#64748b' }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 11, fill: '#94a3b8' }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip />
            <Bar dataKey="onTime" fill="#1A8FA0" radius={[4, 4, 0, 0]} />
            <Bar dataKey="total" fill="#1E4D7B" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}