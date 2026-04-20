import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Reports from './pages/ims/Reports';
import StockOut from './pages/ims/StockOut';
import Items from './pages/ims/Items';
import Vendors from './pages/ims/Vendors';
// import PurchaseRequest from './pages/ims/PurchaseRequest';
import Entry from './pages/ims/Entry';
import Return from './pages/ims/Return';
import Store from './pages/ims/Store';
import Dashboard from './pages/ims/Dashboard';
import StockInGoodsReceipt from './pages/ims/StockInGoodsReceipt';
import StockReturns from './pages/ims/StockReturns';
import ProcurementManagement from './pages/ims/ProcurementManagement';
import StockIssuance from './pages/ims/StockIssuance';
import PersonnelProfile from './pages/hrm/PersonnelProfile';
import Compliance from './pages/hrm/Compliance';
import PurchaseRequest from './pages/ims/PurchaseRequest';
import LeaveManagement from './pages/hrm/LeaveManagement';
import InterUnitTransfer from './pages/hrm/InterUnitTransfer';
import TrainingManagement from './pages/hrm/TrainingManagement';
import PerformanceEvaluation from './pages/hrm/PerformanceEvaluation';
import AttendancePage from './pages/hrm/AttendancePage';
import HrmDashboard from './pages/hrm/HrmDashboard';
import Department from './pages/hrm/Department';
import EmployeeProfile from './pages/hrm/EmployeeProfile';
import ToolsInspection from './pages/ims/ToolsInspection';
import HrmNavbar from './components/layout/HrmNavbar';


function App() {
    return (
        <Router>
            <div className="min-h-screen bg-[#F9FAFB]">

                {/* IMS Routes with Navbar */}
                <Routes>
                    <Route path="/" element={
                        <>
                            <Navbar />
                            <Dashboard />
                        </>
                    } />
                    <Route path="/reports" element={
                        <>
                            <Navbar />
                            <Reports />
                        </>
                    } />
                    <Route path="/stock-out" element={
                        <>
                            <Navbar />
                            <StockOut />
                        </>
                    } />
                    <Route path="/items" element={
                        <>
                            <Navbar />
                            <Items />
                        </>
                    } />
                    <Route path="/vendors" element={
                        <>
                            <Navbar />
                            <Vendors />
                        </>
                    } />
                    <Route path="/purchase-request" element={
                        <>
                            <Navbar />
                            <PurchaseRequest />
                        </>
                    } />
                    <Route path="/entry" element={
                        <>
                            <Navbar />
                            <Entry />
                        </>
                    } />
                    <Route path="/return" element={
                        <>
                            <Navbar />
                            <Return />
                        </>
                    } />
                    <Route path="/store" element={
                        <>
                            <Navbar />
                            <Store />
                        </>
                    } />
                    <Route path="/dashboard" element={
                        <>
                            <Navbar />
                            <Dashboard />
                        </>
                    } />
                    <Route path="/stock-in" element={
                        <>
                            <Navbar />
                            <StockInGoodsReceipt />
                        </>
                    } />
                    <Route path="/stock-returns" element={
                        <>
                            <Navbar />
                            <StockReturns />
                        </>
                    } />
                    <Route path="/procurement-management" element={
                        <>
                            <Navbar />
                            <ProcurementManagement />
                        </>
                    } />
                    <Route path="/stock-issuance" element={
                        <>
                            <Navbar />
                            <StockIssuance />
                        </>
                    } />
                    <Route path="/purchase-request" element={
                        <>
                            <Navbar />
                            <PurchaseRequest />
                        </>
                    } />
                    <Route path="/tools-inspection" element={
                        <>
                            <HrmNavbar />
                            <ToolsInspection />
                        </>
                    } />
                    
                </Routes>

                {/* HRM Routes with Navbar */}

                <Routes>

                    {/* HRM Route - Without Navbar */}
                    <Route path="/personnel-profile" element={<PersonnelProfile />} />
                    <Route path="/compliance" element={<Compliance />} />
                    <Route path="/leave-management" element={<LeaveManagement />} />
                    <Route path="/inter-unit-transfer" element={<InterUnitTransfer />} />
                    <Route path="/training-management" element={<TrainingManagement />} />
                    <Route path="/performance-evaluation" element={<PerformanceEvaluation />} />
                    <Route path="/attendance" element={<AttendancePage />} />
                    <Route path="/hrm-dashboard" element={<HrmDashboard />} />
                    <Route path="/department" element={<Department />} />
                    <Route path="/employee-profile" element={<EmployeeProfile />} />


                </Routes>

            </div>
        </Router>
    );
}

export default App;