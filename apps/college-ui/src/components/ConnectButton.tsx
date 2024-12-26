import { useState, useRef } from 'react';
import useConnect from '@/hooks/useConnect';
import { truncateAddress } from '@/utils/format'; // 需要创建这个工具函数

const ConnectButton = () => {
  const {
    connector,
    isActive,
    account,
    balanceText,
    isLoading,
  } = useConnect();

  const chainId = 1; // 这里需要获取当前网络ID

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 处理链接钱包
  const handleConnect = async () => {
    try {
      await connector.activate();
    } catch (error) {
      console.error('Failed to connect:', error);
      // 这里可以添加错误提示toast
    }
  };

  // 处理断开连接
  const handleDisconnect = async () => {
    try {
      if (connector?.deactivate) {
        await connector.deactivate();
      }
      setIsDropdownOpen(false);
    } catch (error) {
      console.error('Failed to disconnect:', error);
    }
  };

  // 复制地址到剪贴板
  const copyAddress = async () => {
    if (account) {
      await navigator.clipboard.writeText(account);
      // 这里可以添加复制成功提示toast
    }
  };

  // 在区块浏览器中查看
  const viewOnExplorer = () => {
    // const explorerUrl = getExplorerUrl(chainId, account); // 需要创建这个工具函数
    // window.open(explorerUrl, '_blank');
  };

  if (isLoading) {
    return (
      <button className="px-6 py-[0.5rem] rounded-full bg-gray-800 text-white font-medium shadow-md
        animate-pulse cursor-wait">
        Connecting...
      </button>
    );
  }

  if (isActive && account) {
    return (
      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center gap-2 px-4 py-[0.5rem] rounded-full bg-yblue-500 text-white font-medium
            hover:bg-yblue-600 transition-all duration-200 ease-out"
        >
          {/* 网络指示器 */}
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${
              chainId === 1 ? 'bg-green-400' : 'bg-yellow-400'
            }`} />
            <span className="text-sm hidden sm:inline">
              {chainId === 1 ? 'Ethereum' : 'Unknown Network'}
            </span>
          </div>

          {/* 余额显示 */}
          <div className="px-2 py-1 bg-yblue-600 rounded-full text-sm">
            {balanceText} ETH
          </div>

          {/* 地址显示 */}
          <div className="flex items-center gap-2">
            <span>{truncateAddress(account)}</span>
            <svg className={`w-4 h-4 transition-transform duration-200 ${
              isDropdownOpen ? 'rotate-180' : ''
            }`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>

        {/* 下拉菜单 */}
        {isDropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute right-0 mt-2 w-72 rounded-xl bg-white shadow-xl border border-gray-100
              divide-y divide-gray-100"
          >
            {/* 账户信息部分 */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Account</span>
                <span className="text-sm text-gray-500">{truncateAddress(account)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Balance</span>
                <span className="text-sm text-gray-500">{balanceText} ETH</span>
              </div>
            </div>

            {/* 操作按钮部分 */}
            <div className="p-2">
              <button
                onClick={copyAddress}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg
                  flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy Address
              </button>

              <button
                onClick={viewOnExplorer}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg
                  flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View on Explorer
              </button>

              <button
                onClick={handleDisconnect}
                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg
                  flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Disconnect
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <button
      className="px-6 py-[0.5rem] rounded-full bg-yblue-500 text-white font-medium shadow-md
        hover:bg-yblue-600 hover:shadow-lg hover:scale-105
        active:scale-95 active:bg-yblue-700
        transition-all duration-200 ease-out"
      onClick={handleConnect}
    >
      Connect Wallet
    </button>
  );
};

export default ConnectButton;
