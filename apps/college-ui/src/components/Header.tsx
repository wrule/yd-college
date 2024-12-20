'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Header = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Post', path: '/post' },
    { name: 'College', path: '/college' },
    { name: 'Swap', path: '/swap' },
    { name: 'Stack', path: '/stack' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-8">
      <div className="flex items-center gap-12">
        <Link href="/">
          <h1 className="text-[2.2rem] cursor-pointer hover:scale-110 transition-transform duration-200">🏮</h1>
        </Link>
        <nav>
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.path} className="relative group">
                <Link href={item.path}>
                  <span className={`cursor-pointer transition-colors duration-200 font-semibold
                    ${pathname === item.path ? 'text-black' : 'text-gray-800 group-hover:text-black'}`}>
                    {item.name}
                  </span>
                  <span className={`absolute -bottom-1 left-0 h-[2px] bg-black transition-all duration-300 ease-out
                    ${pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'}`}>
                  </span>
                </Link>
              </li>
            ))}
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
