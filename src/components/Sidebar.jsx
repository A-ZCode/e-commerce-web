import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FiHome,
  FiShoppingBag,
  FiMenu,
  FiLogOut,
  FiShoppingCart,
} from 'react-icons/fi';

export default function Sidebar() {
  const [activeIcon, setActiveIcon] = useState(null);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const topMenuItems = [
    {
      name: 'Green Bag',
      icon: <FiShoppingCart className="text-green-500" />,
      id: 'green-bag',
      route: '/checkout', // checkout page
    },
    {
      name: 'Menu',
      icon: <FiMenu className="text-black" />,
      id: 'menu',
      noPulseDefault: true,
      onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
    },
    {
      name: 'Home',
      icon: <FiHome className="text-black" />,
      id: 'home',
      route: '/', // home page
    },
    {
      name: 'Bag',
      icon: <FiShoppingBag className="text-black" />,
      id: 'black-bag',
      route: '/products', // products page
    },
  ];

  const handleLogoutClick = () => {
    setIsLoggingOut(true);
    setTimeout(() => {
      console.log('Logout initiated!');
      setIsLoggingOut(false);
    }, 1000);
  };

  return (
    <>
      {/* Mobile Toggle */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <FiMenu className="text-xl" />
      </button>

      {/* Sidebar */}
      <aside
        className={`
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
          fixed md:left-4 top-5
          h-[calc(100vh-40px)]
          w-64 md:w-16
          bg-white border border-gray-200
          rounded-2xl shadow-md
          flex flex-col justify-between items-center
          z-40
          transition-transform duration-300 ease-in-out
        `}
      >
        {/* Top Menu */}
        <div className="mt-6 space-y-4 md:space-y-6 w-full flex flex-col items-center">
          {topMenuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveIcon(item.id);
                if (item.route) navigate(item.route);
                if (item.onClick) item.onClick();
              }}
              className={`
                w-12 h-12 flex items-center justify-center rounded-xl transition
                ${activeIcon === item.id
                  ? 'bg-gray-100 scale-105 shadow text-indigo-600'
                  : 'hover:bg-gray-100'}
              `}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="ml-3 md:hidden">{item.name}</span>
            </button>
          ))}
        </div>

        {/* Logout */}
        <div className="mb-6 w-full flex justify-center">
          <button
            onClick={handleLogoutClick}
            className={`
              w-12 h-12 flex items-center justify-center rounded-xl transition
              ${isLoggingOut
                ? 'bg-red-100 text-red-600 animate-pulse'
                : 'text-red-500 hover:bg-red-100'}
            `}
          >
            <FiLogOut className="text-xl" />
            <span className="ml-3 md:hidden">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}
