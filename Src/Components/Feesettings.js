import React, { useState } from 'react';
import axios from 'axios';

export default function FeeSettings() {
  const [binanceMarkup, setBinanceMarkup] = useState(50); // 50% markup on Binance gas
  const [flutterwaveMarkup, setFlutterwaveMarkup] = useState(50); // 50% markup on Flutterwave fees

  const updateFees = async () => {
    try {
      await axios.post('/api/admin/update-fees', {
        binanceMarkup,
        flutterwaveMarkup,
      });
      alert('Fees updated!');
    } catch (error) {
      alert('Error updating fees!');
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Transaction Fees</h2>
      <div className="space-y-4">
        <div>
          <label>Binance Gas Fee Markup (%)</label>
          <input
            type="number"
            value={binanceMarkup}
            onChange={(e) => setBinanceMarkup(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>
        <div>
          <label>Flutterwave Fee Markup (%)</label>
          <input
            type="number"
            value={flutterwaveMarkup}
            onChange={(e) => setFlutterwaveMarkup(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>
        <button
          onClick={updateFees}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Save Fees
        </button>
      </div>
    </div>
  );
}
