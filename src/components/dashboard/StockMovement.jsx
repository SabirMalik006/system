import React from 'react';
import StockMovementChart from './StockMovementChart';
import InventoryStatusCard from './InventoryAndCritical';

export default function StockMovementSection() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',       
      gap: 16,
      marginBottom: 16,
    }}>
      {/* Left: Bar Chart - Width thodi kam ki */}
      <div style={{ 
        flex: 1, 
        minWidth: 0,
        maxWidth: 'calc(100% - 270px)'  
      }}>
        <StockMovementChart />
      </div>

      {/* Right: Inventory Status Card */}
      <div style={{ 
        flexShrink: 0,
        alignSelf: 'center'            
      }}>
        <InventoryStatusCard />
      </div>
    </div>
  );
}