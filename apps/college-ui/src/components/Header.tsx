'use client';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-8">
      <nav>
        <ul className="flex items-center gap-8">
          <li className="relative group">
            <span className="text-gray-600 cursor-pointer transition-colors duration-200 font-medium group-hover:text-gray-900">Post</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 group-hover:w-full transition-all duration-300 ease-out"></span>
          </li>
          <li className="relative group">
            <span className="text-gray-600 cursor-pointer transition-colors duration-200 font-medium group-hover:text-gray-900">College</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 group-hover:w-full transition-all duration-300 ease-out"></span>
          </li>
          <li className="relative group">
            <span className="text-gray-600 cursor-pointer transition-colors duration-200 font-medium group-hover:text-gray-900">Swap</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 group-hover:w-full transition-all duration-300 ease-out"></span>
          </li>
          <li className="relative group">
            <span className="text-gray-600 cursor-pointer transition-colors duration-200 font-medium group-hover:text-gray-900">Stack</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 group-hover:w-full transition-all duration-300 ease-out"></span>
          </li>
        </ul>
      </nav>
      <button className="px-6 py-2.5 rounded-full bg-gray-800 text-white font-medium shadow-md
        hover:bg-gray-700 hover:shadow-lg hover:scale-105
        active:scale-95 active:bg-gray-900
        transition-all duration-200 ease-out">
        Connect Wallet
      </button>
    </header>
  );
};

export default Header;
