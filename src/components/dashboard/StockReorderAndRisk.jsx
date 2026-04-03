import React from 'react';

const depletionItems = [
  { name: 'Circuit Breaker 15 Amp for AC with Plug', tag: 'CMES COMPAK', days: '4 Days', pct: 72, color: '#1a6cb5' },
  { name: 'Towel rail Plastic', tag: 'CMES COMPAK', days: '6 Days', pct: 45, color: '#0891B2' },
  { name: 'Float Valve for Porta', tag: 'CMES COMLOG', days: '1 Day', pct: 20, color: '#F97316' },
];

const issuanceItems = [
  { rank: '01', label: 'TOOLS', pct: '45%', color: '#1a3a5c', bg: '#1a3a5c' },
  { rank: '02', label: 'CONSUMABLE', pct: '42%', color: '#2ec4b6', bg: '#0f6e56' },
  { rank: '03', label: 'SANITARY ITEMS', pct: '30%', color: '#4a5568', bg: '#4a5568' },
  { rank: '04', label: 'ELECTRICAL ITEMS', pct: '39%', color: '#a0aec0', bg: '#718096' },
];

const donutSegments = [
  { pct: 0.55, color: '#1a3a5c', offset: 0 },
  { pct: 0.25, color: '#2ec4b6', offset: 0.55 },
  { pct: 0.20, color: '#e2e8f0', offset: 0.80 },
];

function DonutChart() {
  const cx = 120, cy = 120, r = 95, stroke = 28;
  const circumference = 2 * Math.PI * r;

  function polarToXY(angleDeg, radius) {
    const rad = ((angleDeg - 90) * Math.PI) / 180;
    return { x: cx + radius * Math.cos(rad), y: cy + radius * Math.sin(rad) };
  }

  let cumulativePct = 0;
  const segments = donutSegments.map((seg) => {
    const dash = seg.pct * circumference;
    const gap = circumference - dash;
    const rotation = cumulativePct * 360 - 90;
    cumulativePct += seg.pct;
    return { ...seg, dash, gap, rotation };
  });

  return (
    <div style={{ position: 'relative', width: 360, height: 360, flexShrink: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <svg width="360" height="360" viewBox="0 0 240 240">
        <circle cx={cx} cy={cy} r={r + stroke / 2 + 6} fill="none" stroke="#e8edf5" strokeWidth="2" />

        {segments.map((seg, i) => (
          <circle
            key={i}
            cx={cx} cy={cy} r={r}
            fill="none"
            stroke={seg.color}
            strokeWidth={stroke}
            strokeDasharray={`${seg.dash} ${seg.gap}`}
            strokeLinecap="butt"
            transform={`rotate(${seg.rotation} ${cx} ${cy})`}
          />
        ))}

        {[0, 0.55, 0.80].map((pct, i) => {
          const angle = pct * 360 - 90;
          const inner = polarToXY(angle, r - stroke / 2 - 2);
          const outer = polarToXY(angle, r + stroke / 2 + 2);
          return (
            <line key={i} x1={inner.x} y1={inner.y} x2={outer.x} y2={outer.y}
              stroke="white" strokeWidth="4" />
          );
        })}

        {/* Colored circles as fallback icons */}
        {[
          { angle: 210, color: '#1a6cb5', label: 'Tools' },
          { angle: 300, color: '#0891B2', label: 'Consumable' },
          { angle: 30, color: '#4a5568', label: 'Sanitary' },
          { angle: 140, color: '#a0aec0', label: 'Electrical' },
        ].map((pos, i) => {
          const pt = polarToXY(pos.angle, r + 25);
          return (
            <g key={i}>
              <circle cx={pt.x} cy={pt.y} r="0" fill="white"
                style={{ filter: 'drop-shadow(0 3px 10px rgba(0,0,0,0.18))' }} />
              <circle cx={pt.x} cy={pt.y} r="18" fill={pos.color} opacity="0.9" />
              <text x={pt.x} y={pt.y + 1} textAnchor="middle" fontSize="10" fontWeight="700" fill="white"
                style={{ pointerEvents: 'none' }}>
                {i + 1}
              </text>
            </g>
          );
        })}

        <text x={cx} y={cy - 8} textAnchor="middle" fontSize="28" fontWeight="700" fill="#1a3a5c">IMS</text>
        <text x={cx} y={cy + 16} textAnchor="middle" fontSize="13" fill="#a0aec0" fontWeight="600">System</text>
      </svg>
    </div>
  );
}

export default function StockDashboard() {
  return (
    <div style={{
      display: 'flex',
      gap: 20,
      fontFamily: "'Segoe UI', sans-serif",
      padding: 16,
      background: '#f4f6fb',
      minHeight: '100vh',
      boxSizing: 'border-box',
    }}>

      {/* LEFT PANEL - Fixed width 45% */}
      <div style={{
        flex: '0 0 45%',
        background: 'white',
        borderRadius: 16,
        border: '1px solid #E0E8EC',
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        boxShadow: '0 1px 8px rgba(0,0,0,0.06)',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: 0.5, color: '#1E293B', textTransform: 'uppercase' }}>
            Stock Depletion Timeline
          </span>
          <span style={{ fontSize: 10, color: '#3B82F6', fontWeight: 600, letterSpacing: 0.5 }}>
            PROJECTED DATA
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {depletionItems.map((item, i) => (
            <div key={i}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
                <div>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#1E293B' }}>{item.name} </span>
                  <span style={{ fontSize: 10, color: '#a0aec0', fontWeight: 500 }}>{item.tag}</span>
                </div>
                <span style={{ fontSize: 11, color: '#718096', whiteSpace: 'nowrap', marginLeft: 8 }}>{item.days}</span>
              </div>
              <div style={{ height: 6, background: '#edf2f7', borderRadius: 4, overflow: 'hidden' }}>
                <div style={{
                  height: '100%',
                  width: `${item.pct}%`,
                  background: item.color,
                  borderRadius: 4,
                  transition: 'width 0.5s ease',
                }} />
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 12 }}>
          <DonutChart />
        </div>
      </div>

      {/* RIGHT PANEL - Flex 1 (55%) */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
      }}>

        <div style={{ display: 'flex', gap: 16 }}>
          <div style={{
            flex: 1,
            background: '#1a3a5c',
            borderRadius: 14,
            padding: '20px 24px',
            color: 'white',
          }}>
            <div style={{ fontSize: 11, color: '#90cdf4', marginBottom: 8, fontWeight: 500 }}>Database Load</div>
            <div style={{ fontSize: 28, fontWeight: 700 }}>12.4%</div>
          </div>

          <div style={{
            flex: 1,
            background: '#2ec4b6',
            borderRadius: 14,
            padding: '20px 24px',
            color: 'white',
          }}>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.8)', marginBottom: 8, fontWeight: 500 }}>Sync Status</div>
            <div style={{ fontSize: 28, fontWeight: 700 }}>Healthy</div>
          </div>
        </div>

        <div style={{
          background: 'white',
          borderRadius: 14,
          padding: '20px 24px',
          boxShadow: '0 1px 8px rgba(0,0,0,0.06)',
        }}>
          <div style={{ fontSize: 10, fontWeight: 600, color: '#a0aec0', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 14 }}>
            Operational Health
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
            <div style={{ position: 'relative', width: 80, height: 80, flexShrink: 0 }}>
              <svg width="80" height="80" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="32" fill="none" stroke="#e2e8f0" strokeWidth="8" />
                <circle cx="40" cy="40" r="32" fill="none" stroke="#2ec4b6" strokeWidth="8"
                  strokeDasharray={`${2 * Math.PI * 32 * 0.94} ${2 * Math.PI * 32 * 0.06}`}
                  strokeLinecap="round"
                  transform="rotate(-90 40 40)" />
              </svg>
              <div style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: '#2d3748' }}>94%</div>
                <div style={{ fontSize: 9, color: '#a0aec0', marginTop: -1 }}>SAFE</div>
              </div>
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                <span style={{ fontSize: 20, fontWeight: 700, color: '#2d3748' }}>Low Risk</span>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#2ec4b6', display: 'inline-block' }} />
              </div>
              <div style={{ fontSize: 12, color: '#718096' }}>System returns within optimal range</div>
            </div>

            <div style={{ display: 'flex', gap: 24 }}>
              {[
                { label: 'NORMAL', val: '94%', color: '#2d3748', bar: '#2ec4b6' },
                { label: 'RETURNED', val: '4%', color: '#2d3748', bar: '#1a6cb5' },
                { label: 'DAMAGED', val: '2%', color: '#e53e3e', bar: '#e53e3e' },
              ].map((s, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 9, color: '#a0aec0', letterSpacing: 0.5, marginBottom: 6 }}>{s.label}</div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: s.color, marginBottom: 6 }}>{s.val}</div>
                  <div style={{ width: 32, height: 4, background: s.bar, borderRadius: 2, margin: '0 auto' }} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          background: 'white',
          borderRadius: 14,
          padding: '20px 24px',
          boxShadow: '0 1px 8px rgba(0,0,0,0.06)',
          flex: 1,
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {issuanceItems.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{
                  width: 40, height: 40,
                  borderRadius: 12,
                  background: item.bg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'white',
                  fontSize: 14,
                  fontWeight: 700,
                  flexShrink: 0,
                }}>
                  {item.rank}
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{
                    fontSize: 10, fontWeight: 600, color: '#a0aec0',
                    letterSpacing: 0.8, textTransform: 'uppercase', marginBottom: 4
                  }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: 24, fontWeight: 700, color: '#2d3748', lineHeight: 1.1 }}>
                    {item.pct}
                  </div>
                  <div style={{ fontSize: 10, color: '#2ec4b6', fontWeight: 500, marginTop: 2 }}>
                    Total Issuance Volume
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}