import React from 'react';

function AppSettings() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-2">App Settings</h2>
        <p className="text-gray-600 mb-4">Below are the current setup for this app.</p>
        
        <div className="py-4 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Current Currency:</span>
            <div className="flex items-center">
              <select className="mr-3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="BDT">BDT (Taka)</option>
                <option value="USD">USD (US Dollar)</option>
                <option value="EUR">EUR (Euro)</option>
                <option value="GBP">GBP (British Pound)</option>
                <option value="JPY">JPY (Japanese Yen)</option>
                <option value="CNY">CNY (Chinese Yuan)</option>
                <option value="INR">INR (Indian Rupee)</option>
              </select>
              <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-md">
                Apply
              </button>
            </div>
          </div>
        </div>
        
        <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
          Update
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-2">Interface Setting</h2>
        <p className="text-gray-600 mb-4">Below are the current setup for this UI.</p>
        
        <div className="py-4 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Menu Color:</span>
            <div className="flex items-center">
              <span className="mr-3">Dark</span>
              <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-md">
                Toggle
              </button>
            </div>
          </div>
        </div>

        <div className="py-4 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Menu Mode:</span>
            <div className="flex items-center">
              <span className="mr-3">Static</span>
              <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-md">
                Toggle
              </button>
            </div>
          </div>
        </div>

        <div className="py-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Language:</span>
            <div className="flex items-center">
              <span className="mr-3">English</span>
              <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-md">
                Toggle
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppSettings;