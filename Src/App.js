import React from 'react';
import FeeSettings from './components/FeeSettings';
import PriceOracle from './components/PriceOracle';
import MLMSettings from './components/MLMSettings';
import UserManagement from './components/UserManagement';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">Tru-Yan Admin Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        <PriceOracle />
        <FeeSettings />
        <MLMSettings />
        <UserManagement />
      </div>
    </div>
  );
}
