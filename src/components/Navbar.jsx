import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full border-b-2 border-gray-800 shadow-lg">
      <div className="flex items-center justify-between h-24">
        {/* Left Section - Brand/Logo */}
        <div className="bg-pink-500 px-20 py-4 h-full flex items-center shadow-inner border-b-2 border-r-2 border-gray-800">
          <h1 className="text-8xl font-black text-black tracking-tight">
            <span className="font-pixel">Y</span>
            <span className="font-pixel -ml-5">2</span>
            <span className="font-pixel -ml-5">k</span>
          </h1>
        </div>

        {/* Middle Section - Navigation Links */}
        <div className="bg-cyan-400 flex-1 flex justify-center items-center h-full shadow-inner">
          <div className="flex space-x-24">
            <a href="#home" className="text-pink-500 hover:text-pink-400 transition-colors duration-200 font-bold hover:scale-105 text-xl font-pixel">
              Home
            </a>
            <a href="#shop" className="text-black hover:text-gray-800 transition-colors duration-200 font-bold hover:scale-105 text-xl font-pixel">
              Shop
            </a>
            <a href="#about" className="text-black hover:text-gray-800 transition-colors duration-200 font-bold hover:scale-105 text-xl font-pixel">
              About
            </a>
            <a href="#contact" className="text-black hover:text-gray-800 transition-colors duration-200 font-bold hover:scale-105 text-xl font-pixel">
              Contact Us
            </a>
          </div>
        </div>

        {/* Right Section - CTA Button */}
        <div className="bg-cyan-400 px-6 py-4 h-full flex items-center shadow-inner">
          <button className="bg-pink-500 text-white font-bold px-4 py-2 rounded border-b-2 border-r-2 border-gray-800 hover:bg-pink-600 hover-lift transition-all duration-200 flex items-center space-x-2">
            <span className="font-pixel">Own It!</span>
            <span className="text-lg font-pixel">+</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
