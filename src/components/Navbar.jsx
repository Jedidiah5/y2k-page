import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full border-2 border-black shadow-lg">
      <div className="flex items-stretch h-[131px]">
        {/* Left Section - Frame 629042 with Y2K */}
        <div className="relative w-[340px] h-[131px] bg-[#FE3E9E] border-3 border-[#121212] flex items-center justify-center">
          {/* Frame 629027 - Text container - centered without borders */}
          <div className="relative w-[180.4px] h-[66px] flex items-center justify-center">
            {/* Y2K Text - Black layer with blue outline */}
            <div className="relative flex items-center justify-center w-full h-full">
              {/* Blue outline text */}
              <h1 
                className="absolute text-[106.951px] leading-[108px] font-normal text-[#20BBD5] font-pixel"
                style={{ 
                  width: '177px',
                  height: '108px'
                }}
              >
                Y2K
              </h1>
              {/* Black text on top - positioned directly over blue text */}
              <h1 
                className="absolute text-[106.951px] leading-[108px] font-normal text-[#121212] font-pixel"
                style={{ 
                  width: '177px',
                  height: '108px',
                  left: '-1px'
                }}
              >
                Y2K
              </h1>
            </div>
          </div>
        </div>

        {/* Right Section - Teal Blue with Navigation - Equal height to pink section */}
        <div className="bg-[#20BBD5] flex-1 flex items-center justify-between px-6 py-4 h-[131px] relative border-l-3 border-black">
          {/* Navigation Links - Centered with balanced spacing */}
          <div className="flex space-x-20 justify-center flex-1">
            <a href="#home" className="text-pink-500 hover:text-pink-400 transition-colors duration-200 font-lexend-mega">
              Home
            </a>
            <a href="#shop" className="text-black hover:text-gray-800 transition-colors duration-200 font-lexend-mega">
              Shop
            </a>
            <a href="#about" className="text-black hover:text-gray-800 transition-colors duration-200 font-lexend-mega">
              About
            </a>
            <a href="#contact" className="text-black hover:text-gray-800 transition-colors duration-200 font-lexend-mega">
              Contact Us
            </a>
          </div>

          {/* Own It Button */}
          <button className="bg-pink-500 text-black font-lexend-mega border-2 border-black hover:bg-pink-600 transition-all duration-200 flex items-center justify-center space-x-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mr-8"
            style={{
              width: '226px',
              height: '71px',
              top: '32px'
            }}>
            <span>Own It!</span>
            <div className="relative" style={{ width: '24px', height: '24px', flex: 'none', order: 1, flexGrow: 0 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-black hover:text-gray-800 transition-all duration-300 font-bold text-2xl ml-4"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-teal-500 border-t-2 border-black shadow-inner">
          <div className="flex flex-col space-y-4 p-6">
            <a href="#home" className="text-pink-500 hover:text-pink-400 transition-all duration-300 font-bold text-xl text-center py-2">
              Home
            </a>
            <a href="#shop" className="text-black hover:text-gray-800 transition-all duration-300 font-bold text-xl text-center py-2">
              Shop
            </a>
            <a href="#about" className="text-black hover:text-gray-800 transition-all duration-300 font-bold text-xl text-center py-2">
              About
            </a>
            <a href="#contact" className="text-black hover:text-gray-800 transition-all duration-300 font-bold text-xl text-center py-2">
              Contact Us
            </a>
            <div className="pt-4 border-t-2 border-black mt-2">
              <button className="bg-pink-500 text-black font-bold px-6 py-3 border-2 border-black hover:bg-pink-600 transition-all duration-300 flex items-center space-x-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mx-auto">
                <span>Own It!</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
