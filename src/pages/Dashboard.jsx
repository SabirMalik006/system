import React from 'react';
import { TrendingUp, Package, ShoppingCart, AlertCircle } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { label: 'Total Products', value: '2,345', change: '+12%', icon: Package },
    { label: 'Total Orders', value: '892', change: '+8%', icon: ShoppingCart },
    { label: 'Revenue', value: '$45,678', change: '+23%', icon: TrendingUp },
    { label: 'Low Stock', value: '23', change: '-5%', icon: AlertCircle },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <stat.icon className="text-primary-600" size={24} />
              <span className={`text-sm font-medium ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                {stat.change}
              </span>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
            <div className="text-sm text-gray-500">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-4 py-2 border-b border-gray-100 last:border-0">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">Product #{i} was updated</p>
                  <p className="text-xs text-gray-500">2 minutes ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <Package className="mx-auto mb-2 text-primary-600" size={24} />
              <span className="text-sm font-medium">Add Product</span>
            </button>
            <button className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <ShoppingCart className="mx-auto mb-2 text-primary-600" size={24} />
              <span className="text-sm font-medium">New Order</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;