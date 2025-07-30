import React from 'react';
import {
  HomeIcon,
  ChartBarIcon,
  CogIcon,
  LogoutIcon,
  XIcon,
  UserCircleIcon,
  PencilAltIcon,
  DocumentTextIcon,
  UsersIcon,
} from './icons';

const NavItem = ({ icon, label, isActive, onClick }) => (
  <a
    href="#"
    onClick={(e) => {
      e.preventDefault();
      onClick();
    }}
    className={`flex items-center py-2.5 px-4 rounded-lg transition duration-200 ${
      isActive
        ? 'bg-indigo-50 text-indigo-600 font-semibold'
        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
    }`}
  >
    {React.cloneElement(icon, { className: 'mr-3 w-6 h-6' })}
    {label}
  </a>
);

const Sidebar = ({ isOpen, toggleSidebar, activePage, setActivePage }) => {
  const navItems = [
    { id: 'Dashboard', label: 'Dashboard', icon: <HomeIcon /> },
    { id: 'Templates', label: 'Templates', icon: <DocumentTextIcon /> },
    // { id: 'Applications', label: 'Applications', icon: <DocumentTextIcon /> },
    { id: 'Users', label: 'Users', icon: <UsersIcon /> },
    { id: 'Analytics', label: 'Analytics', icon: <ChartBarIcon /> },
    { id: 'Settings', label: 'Settings', icon: <CogIcon /> },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden ${
          isOpen ? 'block' : 'hidden'
        }`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0  bg-white text-gray-700 w-64 space-y-6 py-7 px-2 z-40
          transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:relative md:translate-x-0 transition-transform duration-300 ease-in-out
          shadow-lg md:shadow-none flex flex-col`}
      >
        <div className="flex items-center justify-between px-4">
          <a href="#" className="flex items-center space-x-2">
            <PencilAltIcon className="w-8 h-8 text-indigo-500" />
            <span className="text-2xl font-extrabold text-gray-800">LettrBox</span>
          </a>
          <button
            onClick={toggleSidebar}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none"
          >
            <XIcon />
          </button>
        </div>

        <nav className="flex-grow space-y-1">
          {navItems.map((item) => (
            <NavItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              isActive={activePage === item.id}
              onClick={() => setActivePage(item.id)}
            />
          ))}
        </nav>

        <div className="border-t border-gray-200 pt-4">
          <div className="px-2 py-3">
            <div className="flex items-center space-x-4">
              
              <div>
                <p className="font-semibold text-gray-800">Admin User</p>
                <a href="#" className="text-sm text-gray-500 hover:text-indigo-600">
                  View profile
                </a>
              </div>
            </div>
          </div>
          <a
            href="#"
            className="flex items-center py-2.5 px-4 rounded-lg transition duration-200 hover:bg-gray-100 hover:text-gray-900 mt-2 text-gray-600"
          >
            <LogoutIcon  />
            Logout
          </a>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
