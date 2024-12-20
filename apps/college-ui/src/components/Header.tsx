'use client';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-8">
      <div className="flex items-center gap-12">
        <h1 className="text-[2.2rem] cursor-pointer hover:scale-110 transition-transform duration-200">🏮</h1>
        <nav>
          <ul className="flex items-center gap-8">
            <li className="relative group">
              <span className="text-gray-800 cursor-pointer transition-colors duration-200 font-semibold group-hover:text-black">Post</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300 ease-out"></span>
            </li>
            <li className="relative group">
              <span className="text-gray-800 cursor-pointer transition-colors duration-200 font-semibold group-hover:text-black">College</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300 ease-out"></span>
            </li>
            <li className="relative group">
              <span className="text-gray-800 cursor-pointer transition-colors duration-200 font-semibold group-hover:text-black">Swap</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300 ease-out"></span>
            </li>
            <li className="relative group">
              <span className="text-gray-800 cursor-pointer transition-colors duration-200 font-semibold group-hover:text-black">Stack</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300 ease-out"></span>
            </li>
          </ul>
        </nav>
      </div>
      <button className="px-6 py-[0.5rem] rounded-full bg-gray-800 text-white font-medium shadow-md
        hover:bg-gray-700 hover:shadow-lg hover:scale-105
        active:scale-95 active:bg-gray-900
        transition-all duration-200 ease-out">
        Connect Wallet
      </button>
    </header>
  );
};

export default Header;
