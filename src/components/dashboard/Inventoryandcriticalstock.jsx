import React from 'react';

const inventoryItems = [
  { name: 'Polyvinyl Distemper, KG', units: '80 units' },
  { name: 'Strip light 4ft LED complete Standard', units: '440 units' },
  { name: 'Aluminum Door Handle  175mm', units: '360 units' },
  { name: 'Towel rail Plastic', units: '325 units' },
  { name: 'uPVC Pipe 110 mm dia,Mtr', units: '225 units' },
  { name: 'Dimmer Regulator 100 Watts', units: '460 units' },
];

const criticalItems = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    name: 'Circuit Breaker 15 Amp for AC with Plug',
    sub: 'CMES COMPAK',
    days: '3 days left',
    daysColor: '#ef4444',
    daysIcon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="#ef4444"><circle cx="12" cy="12" r="10"/><text x="12" y="16" textAnchor="middle" fontSize="13" fill="white" fontWeight="700">!</text></svg>
    ),
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    name: 'Towel rail Plastic',
    sub: 'CMES ORMARA',
    days: '6 days left',
    daysColor: '#f59e0b',
    daysIcon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="#f59e0b"><circle cx="12" cy="12" r="10"/><text x="12" y="16" textAnchor="middle" fontSize="13" fill="white" fontWeight="700">!</text></svg>
    ),
  },
];

const inStockRates = [
  { name: 'Circuit Breaker 15 Amp for AC with Plug', pct: 18, color: '#2ec4b6' },
  { name: 'Towel rail Plastic', pct: 10, color: '#2563eb' },
];

export default function InventoryAndCriticalStock() {
  return (
    <div style={{
      display: 'flex',
      gap: 16,
      fontFamily: "'Segoe UI', sans-serif",
      padding: 16,
      background: '#CBE3FA',
      boxSizing: 'border-box',
      width: '100%',
    }}>

      {/* ───── LEFT PANEL: Inventory Status ───── */}
      <div style={{
        flex: 1,
        background: 'white',
        borderRadius: 16,
        padding: '22px 24px 18px',
        boxShadow: '0 1px 6px rgba(0,0,0,0.06)',
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0,
      }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
          <div>
            <div style={{ fontSize: 20, fontWeight: 700, color: '#1e293b', lineHeight: 1.2 }}>Inventory Status</div>
            <div style={{ fontSize: 12, color: '#94a3b8', marginTop: 3 }}>In-Stock 92%</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#1A8FA0', lineHeight: 1 }}>92%</div>
            <div style={{ width: 80, height: 4, background: '#1A8FA0', borderRadius: 2, marginTop: 6, marginLeft: 'auto' }} />
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: '#f1f5f9', margin: '16px 0' }} />

        {/* Two-column layout: items list + alert card */}
        <div style={{ display: 'flex', gap: 16, flex: 1 }}>

          {/* Items list */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 0 }}>
            {inventoryItems.map((item, i) => (
              <div key={i} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 0',
                borderBottom: i < inventoryItems.length - 1 ? '1px solid #f1f5f9' : 'none',
              }}>
                <span style={{ fontSize: 13, color: '#374151' }}>{item.name}</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#1E4D7B', whiteSpace: 'nowrap', marginLeft: 12 }}>{item.units}</span>
              </div>
            ))}
          </div>

          {/* Alert card */}
          <div style={{
            width: 180,
            flexShrink: 0,
            background: '#fff',
            border: '1px solid #FEE2E2',
            borderRadius: 12,
            padding: '14px 14px 14px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            {/* Alert header */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#EF4444">
                  <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
                  <line x1="12" y1="9" x2="12" y2="13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="12" y1="17" x2="12.01" y2="17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span style={{ fontSize: 10, fontWeight: 700, color: '#6B7280', letterSpacing: 0.5, textTransform: 'uppercase' }}>
                  Below Threshold
                </span>
              </div>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#EF4444', marginBottom: 8, lineHeight: 1.4 }}>
                UPVC Pipes — 80 units left
              </div>
              <div style={{ fontSize: 11, color: '#94a3b8', lineHeight: 1.5, marginBottom: 14 }}>
                Restock required immediately to avoid project delays.
              </div>
            </div>

            {/* CTA Button */}
            <button style={{
              width: '100%',
              padding: '9px 0',
              background: '#1A8FA0',
              color: 'white',
              border: 'none',
              borderRadius: 8,
              fontSize: 12,
              fontWeight: 600,
              cursor: 'pointer',
              letterSpacing: 0.2,
            }}>
              Create Purchase Order
            </button>
          </div>
        </div>

        {/* Footer */}
        <div style={{ marginTop: 14, fontSize: 11, color: '#94a3b8' }}>
          Last updated: Today, 09:42 AM
        </div>
      </div>

      {/* ───── RIGHT PANEL: Critical Stock Items ───── */}
      <div style={{
        flex: 1,
        background: 'white',
        borderRadius: 16,
        padding: '22px 24px 18px',
        boxShadow: '0 1px 6px rgba(0,0,0,0.06)',
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0,
      }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
          <div>
            <div style={{ fontSize: 20, fontWeight: 700, color: '#1E4D7B', lineHeight: 1.2 }}>Critical Stock Items</div>
            <div style={{ fontSize: 12, color: '#94a3b8', marginTop: 3 }}>Forecast: Next 7 Days</div>
          </div>
          <div style={{
            background: '#e0f2fe',
            color: '#1A8FA0',
            fontSize: 12,
            fontWeight: 600,
            padding: '5px 14px',
            borderRadius: 20,
          }}>
            Max 7 Days
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: '#f1f5f9', margin: '16px 0 12px' }} />

        {/* Below threshold label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#ef4444', display: 'inline-block', flexShrink: 0 }} />
          <span style={{ fontSize: 10, fontWeight: 700, color: '#64748b', letterSpacing: 0.8, textTransform: 'uppercase' }}>
            Below Threshold · Action Required
          </span>
        </div>

        {/* Critical items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {criticalItems.map((item, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: 12,
              padding: '12px 16px',
            }}>
              {/* Icon box */}
              <div style={{
                width: 42, height: 42,
                background: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: 10,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                {item.icon}
              </div>

              {/* Text */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#1e293b', lineHeight: 1.3 }}>{item.name}</div>
                <div style={{ fontSize: 11, color: '#94a3b8', marginTop: 2 }}>{item.sub}</div>
              </div>

              {/* Days badge */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: 5,
                background: item.daysColor === '#ef4444' ? '#fee2e2' : '#fef3c7',
                borderRadius: 8,
                padding: '5px 10px',
                flexShrink: 0,
              }}>
                {item.daysIcon}
                <span style={{ fontSize: 12, fontWeight: 600, color: item.daysColor, whiteSpace: 'nowrap' }}>
                  {item.days}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: '#f1f5f9', margin: '18px 0 14px' }} />

        {/* Category In-Stock Rate */}
        <div style={{ fontSize: 10, fontWeight: 700, color: '#94a3b8', letterSpacing: 0.8, textTransform: 'uppercase', marginBottom: 12 }}>
          Category In-Stock Rate
        </div>

        <div style={{ display: 'flex', gap: 24 }}>
          {inStockRates.map((rate, i) => (
            <div key={i} style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 6 }}>
                <span style={{ fontSize: 12, color: '#475569', fontWeight: 500 }}>{rate.name}</span>
                <span style={{ fontSize: 14, fontWeight: 700, color: rate.color, whiteSpace: 'nowrap' }}>{rate.pct}%</span>
              </div>
              <div style={{ height: 4, background: '#e2e8f0', borderRadius: 4, overflow: 'hidden' }}>
                <div style={{
                  height: '100%',
                  width: `${rate.pct * 3}%`,
                  background: rate.color,
                  borderRadius: 4,
                  maxWidth: '100%',
                }} />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}