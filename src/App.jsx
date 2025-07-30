import React, { useState, useCallback } from 'react';
import Sidebar from './components/admin/sidebar.jsx';
import MainContent from './components/admin/Maincontent.jsx';
import { MenuIcon } from './components/admin/icons.jsx';
import './index.css'; // ✅ Make sure this line exists

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [activePage, setActivePage] = useState('Dashboard');

  const toggleSidebar = useCallback(() => {
    setSidebarOpen(prev => !prev);
  }, []);

  return (
    <div className="relative min-h-screen md:flex bg-gray-50 dark:bg-gray-900">
      {/* Mobile Hamburger Menu */}
      <div className="md:hidden flex justify-between items-center bg-white p-4 shadow-md">
        <span className="text-xl font-bold text-gray-800">EssayFlow</span>
        <button onClick={toggleSidebar} className="text-gray-500 focus:outline-none">
          <MenuIcon />
        </button>
      </div>

      <Sidebar 
        isOpen={isSidebarOpen} 
        toggleSidebar={toggleSidebar}
        activePage={activePage}
        setActivePage={setActivePage}
      />
      <MainContent />
    </div>
  );
};

export default App;