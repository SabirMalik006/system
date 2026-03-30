import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Reports from './pages/Reports';
import StockOut from './pages/StockOut';
import Items from './pages/Items';
import Vendors from './pages/Vendors';
import PurchaseRequest from './pages/PurchaseRequest';

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
                </Routes>
            </div>
        </Router>
    );
}

export default App;