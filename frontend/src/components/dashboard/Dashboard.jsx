import React from 'react';

const Dashboard = () => {
  const monthlyData = [
    { month: 'January', income: 5000, expense: 3000 },
    { month: 'February', income: 4500, expense: 3200 },
    { month: 'March', income: 6000, expense: 4100 },
    { month: 'April', income: 5500, expense: 3800 },
    { month: 'May', income: 4800, expense: 3500 },
    { month: 'June', income: 6200, expense: 4000 }
  ];

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Income Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-center">
            <h3 className="text-gray-600 text-lg mb-2">Total Income</h3>
            <h2 className="text-green-500 text-3xl font-semibold">$32,000</h2>
          </div>
        </div>

        {/* Total Expense Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-center">
            <h3 className="text-gray-600 text-lg mb-2">Total Expense</h3>
            <h2 className="text-red-500 text-3xl font-semibold">$21,600</h2>
          </div>
        </div>

        {/* Balance Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-center">
            <h3 className="text-gray-600 text-lg mb-2">Balance</h3>
            <h2 className="text-blue-500 text-3xl font-semibold">$10,400</h2>
          </div>
        </div>

        {/* Transaction Count Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-center">
            <h3 className="text-gray-600 text-lg mb-2">Transactions</h3>
            <h2 className="text-purple-500 text-3xl font-semibold">24</h2>
          </div>
        </div>
      </div>

      {/* Monthly Statistics Table */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Monthly Statistics</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Month</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Income</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expense</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Savings</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {monthlyData.map((data, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{data.month}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">${data.income}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">${data.expense}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">${data.income - data.expense}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <div className="bg-green-100 p-2 rounded-full">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">Salary Received</p>
                <p className="text-sm text-gray-500">June 1, 2024</p>
              </div>
            </div>
            <span className="text-green-600 font-medium">+$5,000</span>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <div className="bg-red-100 p-2 rounded-full">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">Rent Payment</p>
                <p className="text-sm text-gray-500">June 2, 2024</p>
              </div>
            </div>
            <span className="text-red-600 font-medium">-$1,500</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;