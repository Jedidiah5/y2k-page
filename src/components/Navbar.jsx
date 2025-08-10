import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full border-b-2 border-gray-800 shadow-lg">
      <div className="flex items-center justify-between h-24">
        {/* Left Section - Brand/Logo */}
        <div className="bg-pink-500 px-4 sm:px-20 py-4 h-full flex items-center shadow-inner border-b-2 border-r-2 border-gray-800">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black text-black tracking-tight">
            <span className="font-pixel">Y</span>
            <span className="font-pixel -ml-2 sm:-ml-3 lg:-ml-5">2</span>
            <span className="font-pixel -ml-2 sm:-ml-3 lg:-ml-5">k</span>
          </h1>
        </div>

        {/* Middle Section - Navigation Links (Hidden on mobile) */}
        <div className="hidden md:flex bg-cyan-400 flex-1 justify-start items-center h-full shadow-inner pl-20 lg:pl-48">
          <div className="flex space-x-16 lg:space-x-28">
            <a href="#home" className="text-pink-500 hover:text-pink-400 transition-colors duration-200 font-bold hover:scale-105 text-lg lg:text-xl font-pixel">
              Home
            </a>
            <a href="#shop" className="text-black hover:text-gray-800 transition-colors duration-200 font-bold hover:scale-105 text-lg lg:text-xl font-pixel">
              Shop
            </a>
            <a href="#about" className="text-black hover:text-gray-800 transition-colors duration-200 font-bold hover:scale-105 text-lg lg:text-xl font-pixel">
              About
            </a>
            <a href="#contact" className="text-black hover:text-gray-800 transition-colors duration-200 font-bold hover:scale-105 text-lg lg:text-xl font-pixel">
              Contact Us
            </a>
          </div>
        </div>

        {/* Right Section - CTA Button (Hidden on mobile) */}
        <div className="hidden md:flex bg-cyan-400 px-3 sm:px-6 py-4 h-full items-center shadow-inner pr-8 lg:pr-32">
          <button className="bg-pink-500 text-black font-bold px-4 sm:px-6 py-2 sm:py-3 border-b-2 border-2 border-gray-800 hover:bg-pink-600 hover:rotate-1 hover:-translate-y-1 hover:translate-x-1 transition-all duration-200 flex items-center space-x-2 text-base sm:text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)]">
            <span className="font-pixel">Own It!</span>
            <span className="text-lg sm:text-xl font-pixel">→</span>
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden bg-cyan-400 px-6 py-4 h-full flex items-center shadow-inner">
          <button
            onClick={toggleMobileMenu}
            className="text-black hover:text-gray-800 transition-all duration-300 font-bold text-3xl font-pixel hover:scale-110 active:scale-95"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-cyan-400 border-t-2 border-gray-800 shadow-inner animate-in slide-in-from-top-2 duration-300">
          <div className="flex flex-col space-y-6 p-8">
            <a href="#home" className="text-pink-500 hover:text-pink-400 transition-all duration-300 font-bold text-2xl font-pixel text-center hover:scale-105 active:scale-95 py-3 px-6 rounded-lg hover:bg-pink-500 hover:text-white">
              Home
            </a>
            <a href="#shop" className="text-black hover:text-gray-800 transition-all duration-300 font-bold text-2xl font-pixel text-center hover:scale-105 active:scale-95 py-3 px-6 rounded-lg hover:bg-pink-500 hover:text-white">
              Shop
            </a>
            <a href="#about" className="text-black hover:text-gray-800 transition-all duration-300 font-bold text-2xl font-pixel text-center hover:scale-105 active:scale-95 py-3 px-6 rounded-lg hover:bg-pink-500 hover:text-white">
              About
            </a>
            <a href="#contact" className="text-black hover:text-gray-800 transition-all duration-300 font-bold text-2xl font-pixel text-center hover:scale-105 active:scale-95 py-3 px-6 rounded-lg hover:bg-pink-500 hover:text-white">
              Contact Us
            </a>
            {/* Mobile CTA Button */}
            <div className="pt-6 border-t-2 border-gray-800 mt-4">
              <button className="bg-pink-500 text-black font-bold px-8 py-4 border-b-2 border-2 border-gray-800 hover:bg-pink-600 hover:rotate-1 hover:-translate-y-1 hover:translate-x-1 transition-all duration-300 flex items-center space-x-3 text-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] mx-auto rounded-lg hover:scale-105 active:scale-95">
                <span className="font-pixel">Own It!</span>
                <span className="text-2xl font-pixel">→</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
