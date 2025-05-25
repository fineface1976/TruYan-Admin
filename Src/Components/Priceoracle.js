import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function PriceOracle() {
  const [prices, setPrices] = useState({ USDT: 0, USD: 0, BNB: 0 });

  // Fetch live prices from Chainlink/Binance API
  useEffect(() => {
    const fetchPrices = async () => {
      const res = await axios.get('https://api.binance.com/api/v3/ticker/price?symbols=USDTNGN,BNBUSDT');
      const data = res.data;
      setPrices({
        USDT: parseFloat(data.find(d => d.symbol === 'USDTNGN').price),
        USD: 1, // Assume 1 USD = 1 USD (adjust for NGN)
        BNB: parseFloat(data.find(d => d.symbol === 'BNBUSDT').price),
      });
    };
    fetchPrices();
    const interval = setInterval(fetchPrices, 30000); // Update every 30s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Live Prices</h2>
      <div className="grid grid-cols-3 gap-4">
        <div>USDT: ${prices.USDT.toFixed(2)}</div>
        <div>USD: ₦{prices.USD.toFixed(2)}</div>
        <div>BNB: ${prices.BNB.toFixed(2)}</div>
      </div>
    </div>
  );
}
