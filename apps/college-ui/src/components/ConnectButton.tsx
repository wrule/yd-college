import { useState, useRef, useEffect } from 'react';
import useConnect from '@/hooks/useConnect';

const truncateAddress = (address: string) => {
  if (!address) return '';
  return `${address.slice(0, 4)}...${address.slice(-4)}`;
};

const ConnectButton = () => {
  const { connector, isActive, account, balanceText, isLoading } = useConnect();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied'>('idle');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // 处理点击外部关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleCopyAddress = async () => {
    if (!account) return;
    try {
      await navigator.clipboard.writeText(account);
      setCopyStatus('copied');
      setTimeout(() => setCopyStatus('idle'), 3000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const buttonClasses = "h-9 rounded-full bg-gray-800 text-white font-medium shadow-md transition-all duration-200 ease-out";

  if (isLoading) {
    return (
      <button
        className={`${buttonClasses} px-6 animate-pulse cursor-wait`}
      >
        Connecting...
      </button>
    );
  }

  if (isActive && account) {
    return (
      <div className="relative">
        <button
          ref={buttonRef}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className={`${buttonClasses} flex items-center gap-3 px-4 hover:bg-gray-700 hover:shadow-lg active:bg-gray-900`}
        >
          <span className="text-sm text-gray-300">{balanceText} ETH</span>
          <div className="w-[1px] h-4 bg-gray-600"></div>
          <div className="flex items-center gap-2">
            <span className="text-sm">{truncateAddress(account)}</span>
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>

        {isDropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute right-0 mt-2 w-64 rounded-xl bg-white shadow-xl border border-gray-100
              divide-y divide-gray-100 transform origin-top-right transition-all duration-200 z-50"
          >
            <div className="p-4">
              <div className="mb-3">
                <div className="text-sm font-medium text-gray-500 mb-1">Connected Account</div>
                <div className="text-gray-900 font-medium text-sm break-all">
                  {account}
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-500 mb-1">Balance</div>
                <div className="text-gray-900 font-medium">{balanceText} ETH</div>
              </div>
            </div>

            <div className="p-2">
              <button
                onClick={handleCopyAddress}
                className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded-lg
                  flex items-center gap-2 transition-colors duration-150"
                style={{ color: copyStatus === 'copied' ? '#10B981' : '#374151' }}
              >
                {copyStatus === 'copied' ? (
                  <>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M5 13l4 4L19 7" />
                    </svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Copy Address
                  </>
                )}
              </button>

              <button
                onClick={() => window.open(`https://etherscan.io/address/${account}`, '_blank')}
                className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg
                  flex items-center gap-2 transition-colors duration-150"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View on Explorer
              </button>

              <button
                onClick={() => connector?.deactivate?.()}
                className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg
                  flex items-center gap-2 transition-colors duration-150"
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
      className={`${buttonClasses} px-6 hover:bg-gray-700 hover:shadow-lg hover:scale-105 active:scale-95 active:bg-gray-900`}
      onClick={() => connector.activate()}
    >
      Connect Wallet
    </button>
  );
};

export default ConnectButton;
