import React from 'react';
import ProcurementHeader from '../components/procurement/ProcurementHeader';
import ProcurementKPIs from '../components/procurement/ProcurementKPIs';
import DepartmentCards from '../components/procurement/DepartmentCards';
import ProcurementCharts from '../components/procurement/ProcurementCharts';
import SpendApprovalUnit from '../components/procurement/SpendApprovalUnit';
import ProcurementRequestsTable from '../components/procurement/ProcurementRequestsTable';
import StockLevelByDept from '../components/procurement/StockLevelByDept';
import Footer from '../components/common/fotter';

export default function ProcurementManagement() {
  return (
    <div className="min-h-screen bg-[#E8F4FF] font-sans">
      <ProcurementHeader />
      <div className="px-5 py-4 flex flex-col gap-4">
        <ProcurementKPIs />
        <DepartmentCards />
        <ProcurementCharts />
        <SpendApprovalUnit />
        <ProcurementRequestsTable />
        <StockLevelByDept />
        
      </div>
      <Footer />
    </div>
  );
}