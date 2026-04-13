import React from 'react';

const RADIUS_OUTER = 72;
const RADIUS_MID = 58;
const RADIUS_INNER = 44;
const CX = 90, CY = 90;

function polarToCartesian(cx, cy, r, angleDeg) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function arcPath(cx, cy, r, startAngle, endAngle) {
  const s = polarToCartesian(cx, cy, r, startAngle);
  const e = polarToCartesian(cx, cy, r, endAngle);
  const large = endAngle - startAngle > 180 ? 1 : 0;
  return `M ${s.x} ${s.y} A ${r} ${r} 0 ${large} 1 ${e.x} ${e.y}`;
}

// Data: IN STOCK 92%, CRITICAL 5%, SHORTFALL 3%
// We draw 3 concentric arcs, each ring = one metric
const rings = [
  { pct: 0.92, color: '#2ec4b6', radius: RADIUS_OUTER, label: 'IN STOCK', value: '92%' },
  { pct: 0.35, color: '#1a4fa0', radius: RADIUS_MID, label: 'CRITICAL', value: '5%' },
  { pct: 0.28, color: '#3D82CC', radius: RADIUS_INNER, label: 'SHORTFALL', value: '3%' },
];

export default function InventoryStatusCard() {
  return (
    <div style={{
      background: '#fff',
      borderRadius: 26,
      border: '1px solid #D7E6F8',
      boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
      padding: '16px 18px 14px',
      width: 220,
      flexShrink: 0,
    }}>
      {/* Header */}
      <div style={{
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', marginBottom: 12, borderBottom: '0.5px solid #eeeff2', paddingBottom: 8,
      }}>
        <span style={{
          fontSize: 10, fontWeight: 700, letterSpacing: '0.08em',
          color: '#476686', textTransform: 'uppercase',
        }}>Inventory Status</span>
        <div style={{ display: 'flex', gap: 3 }}>
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              width: 4, height: 4, borderRadius: '50%',
              background: '#cbd5e1', display: 'inline-block',
            }} />
          ))}
        </div>
      </div>

      {/* SVG Rings */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>
        <svg width="180" height="180" viewBox="0 0 180 180">
          {rings.map((ring, i) => {
            const bgEnd = 360;
            const fillEnd = ring.pct * 330; // max arc = 330deg
            return (
              <g key={i}>
                {/* Background track */}
                <path
                  d={arcPath(CX, CY, ring.radius, 0, 330)}
                  fill="none"
                  stroke="#f1f5f9"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
                {/* Filled arc */}
                {fillEnd > 0 && (
                  <path
                    d={arcPath(CX, CY, ring.radius, 0, fillEnd)}
                    fill="none"
                    stroke={ring.color}
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                )}
              </g>
            );
          })}

          {/* Center text */}
          <text x={CX} y={CY - 12} textAnchor="middle"
            fontSize="9" fill="#94a3b8" fontFamily="inherit"
            letterSpacing="0.05em font-weight: 600">
            IN STOCK
          </text>
          <text x={CX} y={CY + 14} textAnchor="middle"
            fontSize="26" fontWeight="700" fill="#335075"
            fontFamily="inherit">
            92%
          </text>
          <text x={CX} y={CY + 30} textAnchor="middle"
            fontSize="11" fill="#62CDA4" fontFamily="inherit"
            fontWeight="600">
            ↓5%
          </text>
        </svg>
      </div>

      {/* Legend row */}
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        paddingTop: 10,
        borderTop: '1px solid #f1f5f9',
      }}>
        {rings.map((ring, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, marginBottom: 3 }}>
              <span
                className="w-[6px] h-[6px] md:w-[7px] md:h-[7px] rounded-full inline-block"
                style={{ background: ring.color }}
              />
              <span className="text-[7px] md:text-[9px] text-[#94a3b8] font-semibold tracking-[0.06em] uppercase">
                {ring.label}
              </span>
            </div>
            <div className="text-[11px] md:text-[12px] font-bold text-[#0f172a]">
              {ring.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}