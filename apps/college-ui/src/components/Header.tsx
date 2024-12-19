'use client';

const Header = () => {
  return (
    <header className="backdrop-blur-md bg-web3-900/80 fixed w-full top-0 z-50 border-b border-web3-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <nav className="flex-1">
            <ul className="flex space-x-8">
              <li>
                <span className="text-web3-100 hover:text-neon-accent cursor-pointer transition-colors duration-200 font-medium">
                  Web3
                </span>
              </li>
              <li>
                <span className="text-web3-100 hover:text-neon-accent cursor-pointer transition-colors duration-200 font-medium">
                  Crypto
                </span>
              </li>
              <li>
                <span className="text-web3-100 hover:text-neon-accent cursor-pointer transition-colors duration-200 font-medium">
                  AI
                </span>
              </li>
              <li>
                <span className="text-web3-100 hover:text-neon-accent cursor-pointer transition-colors duration-200 font-medium">
                  Airdrop
                </span>
              </li>
            </ul>
          </nav>

          <button className="px-6 py-2 bg-cyber-500 hover:bg-cyber-600 text-white rounded-lg
            transition-all duration-200 ease-in-out transform hover:scale-105
            shadow-[0_0_15px_rgba(168,0,255,0.3)] hover:shadow-[0_0_25px_rgba(168,0,255,0.5)]
            font-medium">
            Connect Wallet
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
