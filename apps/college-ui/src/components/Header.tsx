'use client';

const Header = () => {
  return (
    <header className="backdrop-blur-md bg-web3-900/90 fixed w-full top-0 z-50 border-b border-web3-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <nav className="flex-1">
            <ul className="flex">
              <li className="w-32">
                <span className="flex items-center justify-center h-10 text-web3-200 cursor-pointer
                  transition-all duration-300 font-medium rounded-md
                  hover:bg-web3-500/10 hover:text-web3-500 w-full">
                  Web3
                </span>
              </li>
              <li className="w-32">
                <span className="flex items-center justify-center h-10 text-web3-200 cursor-pointer
                  transition-all duration-300 font-medium rounded-md
                  hover:bg-web3-500/10 hover:text-web3-500 w-full">
                  Crypto
                </span>
              </li>
              <li className="w-32">
                <span className="flex items-center justify-center h-10 text-web3-200 cursor-pointer
                  transition-all duration-300 font-medium rounded-md
                  hover:bg-web3-500/10 hover:text-web3-500 w-full">
                  AI
                </span>
              </li>
              <li className="w-32">
                <span className="flex items-center justify-center h-10 text-web3-200 cursor-pointer
                  transition-all duration-300 font-medium rounded-md
                  hover:bg-web3-500/10 hover:text-web3-500 w-full">
                  Airdrop
                </span>
              </li>
            </ul>
          </nav>

          <button className="px-6 py-2.5 bg-web3-500 text-white rounded-md
            transition-all duration-300 ease-in-out
            hover:bg-web3-600 hover:shadow-[0_0_20px_rgba(0,87,255,0.3)]
            active:bg-web3-700
            font-medium border border-web3-400/20">
            Connect Wallet
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
