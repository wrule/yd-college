'use client';

import { useState } from "react";

const StakePage = () => {
  const [isStakeModalOpen, setIsStakeModalOpen] = useState(false);

  // Mock data
  const stakingInfo = {
    totalStaked: "2,450,000 YD",
    stakedByUser: "1,000 YD",
    apr: "12.5%",
    votingPower: "0.041%",
    nextReward: "25 YD",
    rewardTime: "12h 30m",
    lockPeriod: "30 days",
    totalStakers: "1,234"
  };

  return (
    <div className="max-w-3xl mx-auto p-6 pt-20">
      {/* Main Staking Card */}
      <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
        <div className="grid grid-cols-2 gap-8 mb-8">
          {/* Left Stats */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-6">Stake YD</h2>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-[#295DF4]">12.5%</span>
                <span className="text-gray-500">APR</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Total Value Locked</span>
                <span className="font-medium">{stakingInfo.totalStaked}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Number of Stakers</span>
                <span className="font-medium">{stakingInfo.totalStakers}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Lock Period</span>
                <span className="font-medium">{stakingInfo.lockPeriod}</span>
              </div>
            </div>
          </div>

          {/* Right Stats */}
          <div className="bg-[#295DF4]/5 rounded-xl p-6">
            <h3 className="font-semibold mb-4">Your Staking Status</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Staked Amount</span>
                <span className="font-medium">{stakingInfo.stakedByUser}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Voting Power</span>
                <span className="font-medium">{stakingInfo.votingPower}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Next Reward</span>
                <span className="font-medium">{stakingInfo.nextReward}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Time until reward</span>
                <span className="font-medium">{stakingInfo.rewardTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => setIsStakeModalOpen(true)}
            className="py-3 bg-[#295DF4] text-white rounded-xl font-semibold hover:bg-[#295DF4]/90 transition-colors"
          >
            Stake YD
          </button>
          <button className="py-3 border-2 border-[#295DF4] text-[#295DF4] rounded-xl font-semibold hover:bg-[#295DF4]/5 transition-colors">
            Unstake YD
          </button>
        </div>
      </div>

      {/* Rewards History */}
      <div className="bg-white rounded-2xl shadow-sm p-8">
        <h3 className="text-xl font-bold mb-6">Rewards History</h3>
        <div className="space-y-4">
          {[1,2,3].map((item) => (
            <div key={item} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#295DF4]/10 flex items-center justify-center">
                  🎁
                </div>
                <div>
                  <div className="font-medium">Staking Reward</div>
                  <div className="text-sm text-gray-500">Dec 20, 2024</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-medium">+25 YD</div>
                <div className="text-sm text-gray-500">$50.00</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Info Cards */}
      <div className="grid grid-cols-2 gap-6 mt-8">
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h3 className="font-semibold mb-4">Voting Power Details</h3>
          <div className="space-y-4">
            <div>
              <div className="text-sm text-gray-500 mb-1">Current Power</div>
              <div className="h-2 bg-gray-100 rounded-full">
                <div className="h-2 bg-[#295DF4] rounded-full" style={{width: '4.1%'}}></div>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              Your staking position gives you <span className="font-medium text-[#295DF4]">0.041%</span> of
              total voting power in governance decisions.
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h3 className="font-semibold mb-4">Staking Calculator</h3>
          <div className="space-y-4">
            <div className="text-sm text-gray-600">
              If you stake <span className="font-medium">1,000 YD</span> for <span className="font-medium">1 year</span>:
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Potential Earnings</div>
              <div className="font-medium text-2xl text-[#295DF4]">125 YD</div>
              <div className="text-sm text-gray-500">≈ $250.00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StakePage;
