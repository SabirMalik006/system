import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Reports from './pages/Reports';
import StockOut from './pages/StockOut';
import Items from './pages/Items';
import Vendors from './pages/Vendors';
import PurchaseRequest from './pages/PurchaseRequest';
import Entry from './pages/Entry';
import Return from './pages/Return';
import Store from './pages/Store';
import Dashboard from './pages/Dashboard';
import StockInGoodsReceipt from './pages/StockInGoodsReceipt';


function App() {
    return (
        <Router>
            <div className="min-h-screen bg-[#F9FAFB]">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Reports />} />
                    <Route path="/reports" element={<Reports />} />
                    <Route path="/stock-out" element={<StockOut />} />
                    <Route path="/items" element={<Items />} />
                    <Route path="/vendors" element={<Vendors />} />
                    <Route path="/purchase-request" element={<PurchaseRequest />} />
                    <Route path="/entry" element={<Entry />} />
                    <Route path="/return" element={<Return />} />
                    <Route path="/store" element={<Store />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/stock-in" element={<StockInGoodsReceipt />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;