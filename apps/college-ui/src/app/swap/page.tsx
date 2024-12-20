'use client';

import { useState } from "react";

const SwapPage = () => {
  const [isFromETH, setIsFromETH] = useState(true);

  return (
    <div className="max-w-3xl mx-auto p-6 pt-20">
      <div className="max-w-md mx-auto">
        {/* Swap Card */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Swap</h2>
            <button className="text-gray-500 hover:text-gray-700 transition-colors">
              ⚙️
            </button>
          </div>

          {/* From Token */}
          <div className="bg-gray-50 rounded-xl p-4 mb-2">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-500">From</span>
              <span className="text-sm text-gray-500">Balance: 2.45 {isFromETH ? 'ETH' : 'YD'}</span>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#295DF4]/90 to-[#295DF4] flex items-center justify-center text-white text-sm">
                  {isFromETH ? 'Ξ' : 'Y'}
                </div>
                <span className="font-medium">{isFromETH ? 'ETH' : 'YD'}</span>
                <span className="text-gray-400">▼</span>
              </button>
              <input
                type="text"
                placeholder="0.0"
                className="flex-1 bg-transparent text-2xl outline-none text-right"
              />
            </div>
          </div>

          {/* Swap Button */}
          <div className="flex justify-center -my-2 relative z-10">
            <button
              onClick={() => setIsFromETH(!isFromETH)}
              className="w-10 h-10 rounded-xl bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              ⇅
            </button>
          </div>

          {/* To Token */}
          <div className="bg-gray-50 rounded-xl p-4 mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-500">To</span>
              <span className="text-sm text-gray-500">Balance: 1000 {!isFromETH ? 'ETH' : 'YD'}</span>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#295DF4]/90 to-[#295DF4] flex items-center justify-center text-white text-sm">
                  {!isFromETH ? 'Ξ' : 'Y'}
                </div>
                <span className="font-medium">{!isFromETH ? 'ETH' : 'YD'}</span>
                <span className="text-gray-400">▼</span>
              </button>
              <input
                type="text"
                placeholder="0.0"
                className="flex-1 bg-transparent text-2xl outline-none text-right"
              />
            </div>
          </div>

          {/* Exchange Rate */}
          <div className="bg-gray-50 rounded-xl p-4 mb-6">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Exchange Rate</span>
              <span className="font-medium">1 ETH = 1000 YD</span>
            </div>
            <div className="flex justify-between text-sm mt-2">
              <span className="text-gray-500">Price Impact</span>
              <span className="text-green-500">{'<0.01%'}</span>
            </div>
          </div>

          {/* Swap Button */}
          <button className="w-full py-4 bg-[#295DF4] hover:bg-[#295DF4]/90 text-white rounded-xl font-semibold transition-colors">
            Swap
          </button>

          {/* Transaction Details */}
          <div className="mt-4 p-4 bg-[#295DF4]/5 rounded-xl">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600">Minimum Received</span>
              <span className="font-medium">990 YD</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Network Fee</span>
              <span className="font-medium">≈ 0.001 ETH</span>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="mt-6 bg-white rounded-xl p-4">
          <h3 className="font-medium mb-3">Recent Transactions</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2">
                <span className="text-gray-500">Swapped</span>
                <span className="font-medium">0.1 ETH → 100 YD</span>
              </div>
              <span className="text-gray-500">2 min ago</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2">
                <span className="text-gray-500">Swapped</span>
                <span className="font-medium">200 YD → 0.2 ETH</span>
              </div>
              <span className="text-gray-500">1 hour ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SwapPage;
