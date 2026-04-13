import React from 'react';
import HrmNavbar from '../../components/layout/HrmNavbar';
import LeaveHeader from '../../components/hrm/leave/LeaveHeader';
import LeaveKPICards from '../../components/hrm/leave/LeaveKPICards';
import LeaveApprovalQueue from '../../components/hrm/leave/LeaveApprovalQueue';
import LeaveCharts from '../../components/hrm/leave/LeaveCharts';
import OrganizationLeaveBalance from '../../components/hrm/leave/OrganizationLeaveBalance';

export default function LeaveManagement() {
  return (
    <div className="min-h-screen bg-[#dce9f7] font-sans">
      <HrmNavbar activePage="Leave" />
      <div className="max-w-[1280px] mx-auto px-5 py-5 flex flex-col gap-4">
        <LeaveHeader />
        <LeaveKPICards />
        <LeaveApprovalQueue />
        <LeaveCharts />
        <OrganizationLeaveBalance />
      </div>
    </div>
  );
}