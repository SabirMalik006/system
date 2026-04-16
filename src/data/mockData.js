export const statsData = [
  {
    id: 1,
    label: 'TOTAL LOG ENTRIES',
    value: '12,845',
    trend: '▲ 412% vs last month',
    icon: 'Activity',
    iconColor: 'text-blue-500'
  },
  {
    id: 2,
    label: 'ACTIONS TODAY',
    value: '482',
    trend: '● Active now',
    icon: 'Clock',
    iconColor: 'text-green-500'
  },
  {
    id: 3,
    label: 'CRITICAL ACTIONS',
    value: '14',
    trend: '⚠ Needs review',
    icon: 'AlertTriangle',
    iconColor: 'text-red-500'
  },
  {
    id: 4,
    label: 'MOST ACTIVE MODULE',
    value: 'Stock In',
    trend: 'INVENTORY DEPT.',
    icon: 'Package',
    iconColor: 'text-purple-500'
  },
  {
    id: 5,
    label: 'MOST ACTIVE USER',
    value: 'Aliyan',
    trend: 'SYSTEM ADMIN',
    icon: 'Users',
    iconColor: 'text-orange-500'
  }
];

export const auditLogs = [
  {
    id: 1,
    timestamp: 'Oct 24, 2023 - 14:32:01',
    user: 'Hamza',
    action: 'CREATE',
    module: 'Inventory',
    resource: 'Product SKU PROD-9921',
    status: 'SUCCESS',
    details: 'BASIC INFO'
  },
  {
    id: 2,
    timestamp: 'Oct 24, 2023 - 14:15:22',
    user: 'Usman',
    action: 'UPDATE',
    module: 'Sales',
    resource: 'Order ORD-5542',
    status: 'SUCCESS',
    details: 'BASIC INFO'
  },
  {
    id: 3,
    timestamp: 'Oct 24, 2023 - 13:58:05',
    user: 'Danish',
    action: 'DELETE',
    module: 'Vendors',
    resource: 'Contract CNT-102',
    status: 'SUCCESS',
    details: 'BASIC INFO'
  },
  {
    id: 4,
    timestamp: 'Oct 24, 2023 - 13:40:11',
    user: 'Haider',
    action: 'REJECT',
    module: 'Approvals',
    resource: 'Purchase Req PROD-501',
    status: 'SUCCESS',
    details: 'BASIC INFO'
  },
  {
    id: 5,
    timestamp: 'Oct 24, 2023 - 12:55:40',
    user: 'Yasir',
    action: 'READ',
    module: 'System',
    resource: 'Report View REP AUDIT-24',
    status: 'FAILED',
    details: 'DATA SNAPSHOT'
  }
];

export const filtersConfig = [
  {
    name: 'dateRange',
    label: 'Date Range',
    type: 'select',
    value: '',
    options: [
      { value: '24h', label: 'Last 24 hours' },
      { value: '7d', label: 'Last 7 days' },
      { value: '30d', label: 'Last 30 days' },
      { value: 'custom', label: 'Custom range' }
    ]
  },
  {
    name: 'user',
    label: 'User',
    type: 'select',
    value: '',
    options: [
      { value: 'all', label: 'All users' },
      { value: 'sarah', label: 'Ahmed' },
      { value: 'tom', label: 'hamza' },
      { value: 'john', label: 'usama' }
    ]
  },
  {
    name: 'actionType',
    label: 'Action Type',
    type: 'select',
    value: '',
    options: [
      { value: 'all', label: 'All actions' },
      { value: 'create', label: 'CREATE' },
      { value: 'update', label: 'UPDATE' },
      { value: 'delete', label: 'DELETE' }
    ]
  },
  {
    name: 'module',
    label: 'Module',
    type: 'select',
    value: '',
    options: [
      { value: 'all', label: 'All modules' },
      { value: 'inventory', label: 'Inventory' },
      { value: 'sales', label: 'Sales' },
      { value: 'vendors', label: 'Vendors' }
    ]
  },
  {
    name: 'resourceId',
    label: 'Resource ID',
    type: 'input',
    placeholder: 'Search by ID...',
    value: ''
  }
];