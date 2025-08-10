import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full border-b-2 border-gray-800 shadow-lg">
      <div className="flex items-center justify-between h-24">
        {/* Left Section - Brand/Logo */}
        <div className="bg-pink-500 px-20 py-4 h-full flex items-center shadow-inner border-b-2 border-r-2 border-gray-800">
          <h1 className="text-7xl font-black text-black tracking-wider">
            <span className="font-pixel">Y</span>
            <span className="font-pixel">2K</span>
          </h1>
        </div>

        {/* Middle Section - Navigation Links */}
        <div className="bg-cyan-400 flex-1 flex justify-center items-center h-full shadow-inner">
          <div className="flex space-x-24">
            <a href="#home" className="text-pink-500 hover:text-pink-400 transition-colors duration-200 font-bold hover:scale-105 text-xl">
              Home
            </a>
            <a href="#shop" className="text-black hover:text-gray-800 transition-colors duration-200 font-bold hover:scale-105 text-xl">
              Shop
            </a>
            <a href="#about" className="text-black hover:text-gray-800 transition-colors duration-200 font-bold hover:scale-105 text-xl">
              About
            </a>
            <a href="#contact" className="text-black hover:text-gray-800 transition-colors duration-200 font-bold hover:scale-105 text-xl">
              Contact Us
            </a>
          </div>
        </div>

        {/* Right Section - CTA Button */}
        <div className="bg-cyan-400 px-6 py-4 h-full flex items-center shadow-inner">
          <button className="bg-pink-500 text-white font-bold px-4 py-2 rounded border-b-2 border-r-2 border-gray-800 hover:bg-pink-600 hover-lift transition-all duration-200 flex items-center space-x-2">
            <span>Own It!</span>
            <span className="text-lg">+</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
