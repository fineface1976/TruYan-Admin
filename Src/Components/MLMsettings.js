import React, { useState } from 'react';
import axios from 'axios';

export default function MLMSettings() {
  // Separate MLM rewards for crypto (ICO) vs. cash (paid memberships)
  const [cryptoMLM, setCryptoMLM] = useState(2.5); // 2.5% per level (ICO)
  const [cashMLM, setCashMLM] = useState(5); // 5% per level (paid memberships)

  const updateMLM = async () => {
    try {
      await axios.post('/api/admin/update-mlm', {
        cryptoMLM,
        cashMLM,
      });
      alert('MLM rewards updated!');
    } catch (error) {
      alert('Error updating MLM!');
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">MLM Rewards</h2>
      <div className="space-y-4">
        <div>
          <label>Crypto ICO MLM (% per level)</label>
          <input
            type="number"
            value={cryptoMLM}
            onChange={(e) => setCryptoMLM(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>
        <div>
          <label>Cash Membership MLM (% per level)</label>
          <input
            type="number"
            value={cashMLM}
            onChange={(e) => setCashMLM(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>
        <button
          onClick={updateMLM}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Save MLM
        </button>
      </div>
    </div>
  );
}
