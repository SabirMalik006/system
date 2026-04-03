import React from 'react';
import {
  AreaChart, Area, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import { MoreHorizontal } from 'lucide-react';

// Dec 01 - Dec 31 (weekly points)
const vendorData = [
  { date: 'Dec 01', performance: 50, rating: 48 },
  { date: 'Dec 08', performance: 42, rating: 52 },
  { date: 'Dec 15', performance: 72, rating: 50 },
  { date: 'Dec 22', performance: 48, rating: 58 },
  { date: 'Dec 31', performance: 78, rating: 55 },
];

// Stock Availability — alternating teal / navy / gray
const stockData = [
  { name: 'LED Bulb Lights', value: 76, color: '#1A8FA0' },
  { name: 'Paint', value: 82, color: '#1E4D7B' },
  { name: 'Muslim Shower', value: 65, color: '#163A50' },
  { name: 'Faucet', value: 74, color: '#C9CECD' },
  { name: 'Thermostat Geyser', value: 58, color: '#092745' },
  { name: 'Door Locks', value: 77, color: '#0B4851' },
];

const VendorTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{
      background: '#fff', border: '1px solid #e2e8f0',
      borderRadius: 8, padding: '8px 12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)', fontSize: 12,


    }}>
      <div style={{ fontWeight: 600, marginBottom: 4 }}>{label}</div>
      {payload.map((p, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: p.stroke, display: 'inline-block' }} />
          <span style={{ color: '#64748b' }}>{p.name}:</span>
          <span style={{ fontWeight: 600 }}>{p.value}</span>
        </div>
      ))}
    </div>
  );
};

const StockTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{
      background: '#fff', border: '1px solid #e2e8f0',
      borderRadius: 8, padding: '8px 12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)', fontSize: 12,
    }}>
      <div style={{ fontWeight: 600, marginBottom: 2 }}>{label}</div>
      <div style={{ color: '#64748b' }}>Stock: <strong>{payload[0]?.value}</strong></div>
    </div>
  );
};

export default function VendorAndBook() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16,
      marginBottom: 16,
    }}>

      {/* ── Card 1: Top Vendor Performance ── */}
      <div style={{
        background: '#fff',
        borderRadius: 16,
        border: '1px solid #e2e8f0',
        boxShadow: '0 4px 15px rgba(0,0,0,0.08)', // Better + darker shadow
        padding: '20px 20px 16px',
      }}>
        {/* Header - Title + Subtitle on same line */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 6,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <h3 style={{
              fontSize: 15,
              fontWeight: 700,
              color: '#0f172a',
              margin: 0
            }}>
              Top Vendor Performance
            </h3>

          </div>

          {/* LAST 30 DAYS badge */}
          <span style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: '0.06em',
            color: '#475569',
            background: '#f1f5f9',
            borderRadius: 16,
            padding: '4px 9px',
            whiteSpace: 'nowrap',
            textTransform: 'uppercase',
          }}>
            Last 30 Days
          </span>
        </div>
        <div className='flex justify-between items-center' >
          <div style={{
          fontSize: 12,
          color: '#94a3b8',
          fontWeight: 500,
          marginTop: 1
        }}>
          Real-time efficiency
        </div>

        {/* Legend */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <span style={{
              width: 10, height: 10, borderRadius: '50%',
              background: '#2166A0', display: 'inline-block',
            }} />
            <span style={{ fontSize: 12, color: '#2166A0', fontWeight: 600}}>Top Vendor Performance</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <span style={{
              width: 10, height: 10, borderRadius: '50%',
              background: '#1A8FA0', display: 'inline-block',
              border: '2px solid #1A8FA0',
            }} />
            <span style={{ fontSize: 12, color: '#1A8FA0', fontWeight: 600 }}>Vendor Rating</span>
          </div>
        </div>
        </div>

        {/* Area Chart */}
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={vendorData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="perfGradV2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0800f9" stopOpacity={0.18} />
                <stop offset="100%" stopColor="#5954ef" stopOpacity={0.03} />
              </linearGradient>
              <linearGradient id="rateGradV2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1509f7" stopOpacity={0.0} />
                <stop offset="100%" stopColor="#5954ef" stopOpacity={0.0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="1 1" stroke="#dadde0" vertical={false} />

            <XAxis
              dataKey="date"
              tick={{ fontSize: 11, fill: '#94a3b8' }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 11, fill: '#94a3b8' }}
              axisLine={false}
              tickLine={false}
              domain={[0, 100]}
              ticks={[0, 25, 50, 75, 100]}
              tickFormatter={v => `${v}%`}
            />
            <Tooltip content={<VendorTooltip />} />

            <Area
              type="monotone"
              dataKey="performance"
              name="Top Vendor Performance"
              stroke="#1a4fa0"
              strokeWidth={2.5}
              fill="url(#perfGradV2)"
              dot={{ r: 4, fill: '#fff', stroke: '#1a4fa0', strokeWidth: 2 }}
              activeDot={{ r: 5 }}
            />

            <Area
              type="monotone"
              dataKey="rating"
              name="Vendor Rating"
              stroke="#2ec4b6"
              strokeWidth={2}
              strokeDasharray="5 4"
              fill="url(#rateGradV2)"
              dot={false}
              activeDot={{ r: 4 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* ── Card 2: Stock Availability ── */}
      <div style={{
        background: '#fff',
        borderRadius: 16,
        border: '1px solid #e2e8f0',           // Thoda dark border
        boxShadow: '0 4px 15px rgba(0,0,0,0.08)', // Better shadow
        padding: '20px 20px 16px',
      }}>
        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', marginBottom: 24,
        }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: '#0f172a', marginBottom: 20 }}>
            Stock Availability
          </h3>
          <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#94a3b8' }}>
            <MoreHorizontal size={18} />
          </button>
        </div>

        {/* Bar Chart */}
        <ResponsiveContainer width="100%" height={200}>
          <BarChart
            data={stockData}
            barSize={32}
            margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 10, fill: '#475569', fontWeight: 600 }}
              axisLine={false}
              tickLine={false}
              interval={0}
            />
            <YAxis
              tick={{ fontSize: 11, fill: '#94a3b8' }}
              axisLine={false}
              tickLine={false}
              domain={[0, 100]}
              ticks={[0, 20, 40, 60, 80, 100]}
            />
            <Tooltip content={<StockTooltip />} cursor={{ fill: 'rgba(0,0,0,0.03)' }} />
            <Bar
              dataKey="value"
              name="Stock"
              radius={[2, 2, 0, 0]}
              shape={(props) => {
                const item = stockData[props.index];
                return (
                  <rect
                    x={props.x}
                    y={props.y}
                    width={props.width}
                    height={props.height}
                    fill={item.color}
                    rx={4}
                    ry={4}
                  />
                );
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}