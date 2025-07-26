import React from 'react';

function Header() {
  return (
    <header className="bg-white/70 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-2 rounded-full text-white">
              {/* <FiFileText size={20} /> */}
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-transparent bg-clip-text">
              LettrBox
            </span>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">Home</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">Templates</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">About Us</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">Contact Us</a>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">Log In</a>
            <a
              href="#"
              className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
