import React from 'react';
import ProcurementHeader from '../../components/ims/procurement/ProcurementHeader';
import ProcurementKPIs from '../../components/ims/procurement/ProcurementKPIs';
import DepartmentCards from '../../components/ims/procurement/DepartmentCards';
import ProcurementCharts from '../../components/ims/procurement/ProcurementCharts';
import SpendApprovalUnit from '../../components/ims/procurement/SpendApprovalUnit';
import ProcurementRequestsTable from '../../components/ims/procurement/ProcurementRequestsTable';
import StockLevelByDept from '../../components/ims/procurement/StockLevelByDept';
import Footer from '../../components/common/fotter';


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
        {/* helo */}
      </div>
      <Footer />
    </div>
  );
}