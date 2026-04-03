import React from 'react';

const categories = [
  { label: 'Tools',      value: 96, color: '#125964' },
  { label: 'Electrical', value: 90, color: '#336AA1' },
  { label: 'Sanitary',   value: 87, color: '#00478C' },
  { label: 'Paints',     value: 98, color: '#58C3D2' },
];

// SVG Parameters
const CX = 80;
const CY = 80;

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

export default function ItemCategoryHealth() {
  return (
    <div style={{
      background: '#fff',
      borderRadius: 16,
      border: '1px solid #E0E8EC',
      boxShadow: '0 1px 6px rgba(0,0,0,0.06)',
      padding: '18px 20px',
      marginBottom: 16,
    }}>
      {/* Title */}
      <div style={{
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.10em',
        textTransform: 'uppercase',
        color: '#1E293B',
        marginBottom: 13,
      }}>
        Item Category Health
      </div>

      {/* Body: donut + 4 cards */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>

        {/* ── Multi-ring Donut ── */}
        <div style={{ position: 'relative', flexShrink: 0, width: 200, height: 160 }}>
          <svg width="160" height="160" viewBox="0 0 160 160">
            {[
              { radius: 67, pct: 0.54, color: '#1a4fa0', label: 'Tools' },
              { radius: 56, pct: 0.60, color: '#2563eb', label: 'Electrical' },
              { radius: 45, pct: 0.67, color: '#38bdf8', label: 'Sanitary' },
              { radius: 34, pct: 0.61, color: '#2ec4b6', label: 'Paints' },
            ].map((ring, i) => {
              const trackEnd = 300;
              const fillEnd = ring.pct * 300;
              return (
                <g key={i}>
                  {/* Background Track */}
                  <path
                    d={arcPath(CX, CY, ring.radius, 0, trackEnd)}
                    fill="none"
                    stroke="#f1f5f9"
                    strokeWidth="8.5"
                    strokeLinecap="round"
                  />
                  {/* Filled Arc */}
                  <path
                    d={arcPath(CX, CY, ring.radius, 0, fillEnd)}
                    fill="none"
                    stroke={ring.color}
                    strokeWidth="8.5"
                    strokeLinecap="round"
                  />
                </g>
              );
            })}

            {/* Center Text with Background for Safety */}
            <g>
              {/* Optional light background circle to prevent overlap (recommended) */}
              <circle 
                cx={CX} 
                cy={CY} 
                r="32" 
                fill="#ffffff" 
              />
              
              <text 
                x={CX} 
                y={CY - 6} 
                textAnchor="middle"
                fontSize="20" 
                fontWeight="700" 
                fill="#0f172a" 
                fontFamily="inherit"
              >
                92%
              </text>
              <text 
                x={CX} 
                y={CY + 7} 
                textAnchor="middle"
                fontSize="8.4" 
                fill="#64748b" 
                fontFamily="inherit"
                fontWeight="500"
              >
                IMS Status
              </text>
              <text 
                x={CX} 
                y={CY + 20} 
                textAnchor="middle"
                fontSize="8" 
                fill="#16a34a" 
                fontWeight="600"
                fontFamily="inherit"
              >
                ↓4.2% today
              </text>
            </g>
          </svg>

          {/* Ring labels on the right side */}
          <div style={{
            position: 'absolute',
            top: 18,
            left: 148,
            display: 'flex',
            flexDirection: 'column',
            gap: 13.5,
          }}>
            {[
              { radius: 67, pct: 0.54, color: '#1a4fa0', label: 'Tools' },
              { radius: 56, pct: 0.60, color: '#2563eb', label: 'Electrical' },
              { radius: 45, pct: 0.67, color: '#38bdf8', label: 'Sanitary' },
              { radius: 34, pct: 0.61, color: '#2ec4b6', label: 'Paints' },
            ].map((ring, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: 5,
                whiteSpace: 'nowrap',
              }}>
                <span style={{
                  marginLeft: 8,
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: ring.color,
                  flexShrink: 0,
                }} />
                <span style={{ 
                  fontSize: 9.5, 
                  color: '#64748b', 
                  fontWeight: 500 
                }}>
                  {ring.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Mini Category Cards */}
        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 10,
        }}>
          {categories.map((cat, i) => (
            <div key={i} style={{
              background: '#f8fafc',
              borderRadius: 12,
              padding: '12px 14px 14px',
            }}>
              <div style={{
                fontSize: 12,
                color: '#64748b',
                marginBottom: 4,
                fontWeight: 400,
              }}>
                {cat.label}
              </div>
              <div style={{
                fontSize: 28,
                fontWeight: 700,
                color: '#0f172a',
                lineHeight: 1,
                marginBottom: 12,
                letterSpacing: '-0.02em',
              }}>
                {cat.value}%
              </div>
              <div style={{
                height: 4,
                borderRadius: 99,
                background: '#e2e8f0',
                overflow: 'hidden',
              }}>
                <div style={{
                  height: '100%',
                  borderRadius: 99,
                  background: cat.color,
                  width: `${cat.value}%`,
                  transition: 'width 0.8s ease',
                }} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}