import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
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
            {/* <Link to="/Login" className='text-[13px] link font-[500] transition'>Login</Link> */}
            <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">Home</Link>
            <Link to="/application" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">Applications</Link>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">About Us</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">Contact Us</a>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link to="/login" className="px-4 py-2 border border-gray-400 text-gray-700 rounded-full hover:border-purple-500 hover:text-purple-600 transition-colors duration-300">Log In</Link>
            <Link to="/sign-up" className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300"
            > Sign Up</Link>
          </div>
        </div>
      </div>
    </header>
    </>
  );
}

export default Header;
