import { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import PolaroidCard from './components/PolaroidCard';
import img1 from './Assets/blue.jpg';
import img2 from './Assets/green.jpg';
import img3 from './Assets/red.jpg';
import stereo_tape from './Stickers/stereo_tape.png';
import smileyface from './Stickers/smileyface.png';
import star from './Stickers/star.png';
import musicplayer from './Stickers/musicplayer.png';
import heart from './Stickers/heart.png';
import computer from './Stickers/computer.png';
import controller from './Stickers/controller.png';
import adidias from './Assets/adidias_1940\'s.jpg';
import jacquens from './Assets/jacquens_necklace.jpg';
import jeans from './Assets/jeans_mini_skirt.png';
import spaceman from './Assets/spaceman_glasses.png';
import varsity from './Assets/vrsity_shirt.jpg';
import y2k_pink from './Assets/y2k_pink.jpg';
import y2k_yellow from './Assets/y2k_yellow.jpg';
import crochet_sweater from './Assets/crochet_sweater.png';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Landing Page Section */}
      <section id="home" className="flex h-screen split-bg">
        {/* Left Side - Hot Pink with Y2K Content */}
        <div className="w-1/2 flex items-center justify-center relative overflow-hidden">
          {/* Smiley face emoji in top-left */}
          <img src={smileyface} alt="Smiley Face" className="absolute top-10 left-24 w-24 h-24" />
          
          {/* Star sticker in top-right */}
          <img 
            src={star} 
            alt="Star" 
            style={{
              position: 'absolute',
              width: '32px',
              height: '32px',
              top: '30px',
              left: '700px',
              transform: 'rotate(0deg)',
              opacity: 1
            }}
          />
          
          {/* Main Headline - TIME TRAVEL TO THE Y2K ERA */}
          <div 
            className="font-lexend-mega font-bold text-black uppercase"
            style={{
              position: 'absolute',
              left: '80px',
              top: '198px',
              fontSize: '56px',
              lineHeight: '94px',
              color: '#121212'
            }}
          >
            <div>TIME TRAVEL TO</div>
            <div style={{ position: 'relative' }}>
              <span style={{ marginRight: '20px' }}>THE</span>
              <span 
                className="font-vcr text-black"
                style={{
                  position: 'absolute',
                  width: '186px',
                  height: '101px',
                  left: '170px',
                  top: '0px',
                  transform: 'rotate(-13.86deg)',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '20px 40px',
                  gap: '10px',
                  background: '#FF7051',
                  border: '2px solid #121212',
                  borderRadius: '1px',
                  fontSize: '60px',
                  lineHeight: '59px',
                  color: '#121212',
                  boxShadow: '8px 8px 0px #000000'
                }}
              >
                Y2K
              </span>
              <span 
                style={{
                  position: 'absolute',
                  left: '370px',
                  top: '0px'
                }}
              >
                ERA
              </span>
            </div>
          </div>
          
          {/* Description Text */}
          <p 
            style={{
              position: 'absolute',
              left: '80px',
              top: '428px',
              fontFamily: 'Lexend Mega',
              fontWeight: '700',
              fontStyle: 'Bold',
              fontSize: '24px',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#121212'
            }}
          >
            Discover our curated collection of <br></br> authentic Y2K fashion. Bringing the <br></br> early 2000s back in style!
          </p>
          
          {/* Shop Now Button */}
          <button 
            style={{
              position: 'absolute',
              width: '256px',
              height: '71px',
              left: '80px',
              top: '554px',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '20px 40px',
              gap: '10px',
              background: '#20BBD5',
              border: '2px solid #121212',
              borderRadius: '1px',
              fontFamily: 'Lexend Mega',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '20px',
              lineHeight: '25px',
              color: '#121212',
              cursor: 'pointer',
              boxShadow: '8px 8px 0px #000000'
            }}
          >
            <span style={{ width: '136px', height: '25px' }}>Shop Now</span>
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              style={{
                width: '24px',
                height: '24px'
              }}
            >
              <path 
                d="M5 12H19M19 12L12 5M19 12L12 19" 
                stroke="#000000" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
          
          {/* Smiley face emoji at top-left corner of button */}
          <img 
            src={smileyface} 
            alt="Smiley Face" 
            style={{
              position: 'absolute',
              width: '56.99999968783714px',
              height: '56.99999968783714px',
              top: '517px',
              left: '50px',
              transform: 'rotate(27.1deg)',
              opacity: 1
            }}
          />
          
          {/* Star sticker */}
          <img 
            src={star} 
            alt="Star" 
            style={{
              position: 'absolute',
              width: '64px',
              height: '64px',
              top: '711.48px',
              left: '72.48px',
              transform: 'rotate(0deg)',
              opacity: 1
            }}
          />
          
          {/* Music player sticker */}
          <img 
            src={musicplayer} 
            alt="Music Player" 
            style={{
              position: 'absolute',
              width: '130.87575063515848px',
              height: '125.18549629527632px',
              top: '599px',
              left: '392px',
              transform: 'rotate(-15deg)',
              opacity: 1
            }}
          />
        </div>

        {/* Right Side - Bright Yellow with Multiple Polaroids */}
        <div className="w-1/2 relative overflow-visible">
          {/* Polaroid Card 1 - Cyan */}
          <div style={{
            position: 'absolute',
            width: '297.710578359325px',
            height: '397.54252042747726px',
            top: '68px',
            left: '-42px',
            transform: 'rotate(13deg)',
            opacity: 1
          }}>
            <PolaroidCard imageSrc={img1} caption="Y2K Vibes" backgroundColor="#00CFFF" />
          </div>
          
          {/* Polaroid Card 2 - Lime Green */}
          <div style={{
            position: 'absolute',
            width: '297.710578359325px',
            height: '397.54252042747726px',
            top: '47.63px',
            left: '232.01px',
            transform: 'rotate(13deg)',
            opacity: 1
          }}>
            <PolaroidCard imageSrc={img2} caption="Retro Style" backgroundColor="#D0FF14" />
          </div>
          
          {/* Polaroid Card 3 - Pink */}
          <div style={{
            position: 'absolute',
            width: '297.71057745017464px',
            height: '397.5425192134595px',
            top: '353.31px',
            left: '189.93px',
            transform: 'rotate(-.5deg)',
            opacity: 1
          }}>
            <PolaroidCard imageSrc={img3} caption="2000s Fashion" backgroundColor="#FF2E63" />
          </div>

          {/* Heart sticker (mid-right above zigzag) */}
          <img 
            src={heart}
            alt="Heart"
            style={{
              position: 'absolute',
              width: '83.00000172882699px',
              height: '70.35026696827231px',
              top: '370px',
              left: '430px',
              transform: 'rotate(0deg)',
              opacity: 1,
              zIndex: 30
            }}
          />

          {/* Computer sticker (top-right corner) */}
          <img 
            src={computer}
            alt="Computer"
            style={{
              position: 'absolute',
              width: '68.50788732550063px',
              height: '57.000002592920424px',
              top: '20px',
              left: '610px',
              transform: 'rotate(-15deg)',
              opacity: 1,
              zIndex: 30
            }}
          />

          {/* Stereo tape sticker (lower-left on yellow half) */}
          <img 
            src={stereo_tape}
            alt="Stereo Tape"
            style={{
              position: 'absolute',
              width: '63.999996615928126px',
              height: '67.71014449855795px',
              top: '610px',
              left: '120px',
              transform: 'rotate(-10deg)',
              opacity: 1,
              zIndex: 30
            }}
          />

          {/* Controller sticker (bottom center, spilling across split) */}
          <img 
            src={controller}
            alt="Controller"
            style={{
              position: 'absolute',
              width: '63.999996615928126px',
              height: '67.71014449855795px',
              top: '730px',
              left: '-40px',
              transform: 'rotate(0deg)',
              opacity: 1,
              zIndex: 40
            }}
          />
        </div>
      </section>

      {/* NEW ARRIVALS Section */}
      <section id="shop" className="bg-gradient-to-br from-pink-400 via-purple-500 to-cyan-400 min-h-screen relative overflow-hidden">
        {/* Pixelated Banner */}
        <div className="bg-black py-6 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap">
            <span className="font-vcr text-white text-4xl mx-8">NEW ARRIVALS! ! ! </span>
            <span className="font-vcr text-white text-4xl mx-8">NEW ARRIVALS! ! ! </span>
            <span className="font-vcr text-white text-4xl mx-8">NEW ARRIVALS! ! ! </span>
            <span className="font-vcr text-white text-4xl mx-8">NEW ARRIVALS! ! ! </span>
            <span className="font-vcr text-white text-4xl mx-8">NEW ARRIVALS! ! ! </span>
          </div>
        </div>

        {/* Section Title */}
        <div className="text-center py-16">
          <h2 className="font-lexend-mega font-bold text-6xl text-black mb-4">
            FRESH DROPS
          </h2>
          <p className="font-lexend-mega text-2xl text-black max-w-2xl mx-auto">
            The latest Y2K fashion pieces that will make you feel like you're back in the year 2000!
          </p>
        </div>

        {/* Product Grid */}
        <div className="max-w-7xl mx-auto px-8 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-white rounded-lg p-6 transform hover:rotate-2 transition-transform duration-300 shadow-lg border-4 border-black">
              <div className="relative mb-4">
                <img src={adidias} alt="Adidas 1940s Style" className="w-full h-64 object-cover rounded" />
                <div className="absolute top-2 right-2 bg-yellow-400 text-black px-3 py-1 rounded font-bold text-sm">
                  NEW!
                </div>
              </div>
              <h3 className="font-lexend-mega font-bold text-xl mb-2">Adidas 1940s Style</h3>
              <p className="text-gray-600 mb-4">Vintage-inspired sneakers with Y2K flair</p>
              <div className="flex justify-between items-center">
                <span className="font-lexend-mega font-bold text-2xl text-purple-600">$89.99</span>
                <button className="bg-cyan-400 text-black px-6 py-2 rounded font-bold hover:bg-cyan-300 transition-colors border-2 border-black">
                  ADD TO CART
                </button>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-white rounded-lg p-6 transform hover:-rotate-2 transition-transform duration-300 shadow-lg border-4 border-black">
              <div className="relative mb-4">
                <img src={jacquens} alt="Jacquens Necklace" className="w-full h-64 object-cover rounded" />
                <div className="absolute top-2 right-2 bg-pink-400 text-black px-3 py-1 rounded font-bold text-sm">
                  HOT!
                </div>
              </div>
              <h3 className="font-lexend-mega font-bold text-xl mb-2">Jacquens Necklace</h3>
              <p className="text-gray-600 mb-4">Statement jewelry piece for the Y2K aesthetic</p>
              <div className="flex justify-between items-center">
                <span className="font-lexend-mega font-bold text-2xl text-purple-600">$45.99</span>
                <button className="bg-pink-400 text-black px-6 py-2 rounded font-bold hover:bg-pink-300 transition-colors border-2 border-black">
                  ADD TO CART
                </button>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-white rounded-lg p-6 transform hover:rotate-1 transition-transform duration-300 shadow-lg border-4 border-black">
              <div className="relative mb-4">
                <img src={jeans} alt="Jeans Mini Skirt" className="w-full h-64 object-cover rounded" />
                <div className="absolute top-2 right-2 bg-green-400 text-black px-3 py-1 rounded font-bold text-sm">
                  TRENDING
                </div>
              </div>
              <h3 className="font-lexend-mega font-bold text-xl mb-2">Jeans Mini Skirt</h3>
              <p className="text-gray-600 mb-4">Classic denim skirt with Y2K vibes</p>
              <div className="flex justify-between items-center">
                <span className="font-lexend-mega font-bold text-2xl text-purple-600">$34.99</span>
                <button className="bg-green-400 text-black px-6 py-2 rounded font-bold hover:bg-green-300 transition-colors border-2 border-black">
                  ADD TO CART
                </button>
              </div>
            </div>

            {/* Product 4 */}
            <div className="bg-white rounded-lg p-6 transform hover:-rotate-1 transition-transform duration-300 shadow-lg border-4 border-black">
              <div className="relative mb-4">
                <img src={spaceman} alt="Spaceman Glasses" className="w-full h-64 object-cover rounded" />
                <div className="absolute top-2 right-2 bg-blue-400 text-black px-3 py-1 rounded font-bold text-sm">
                  LIMITED
                </div>
              </div>
              <h3 className="font-lexend-mega font-bold text-xl mb-2">Spaceman Glasses</h3>
              <p className="text-gray-600 mb-4">Futuristic shades for the ultimate Y2K look</p>
              <div className="flex justify-between items-center">
                <span className="font-lexend-mega font-bold text-2xl text-purple-600">$67.99</span>
                <button className="bg-blue-400 text-black px-6 py-2 rounded font-bold hover:bg-blue-300 transition-colors border-2 border-black">
                  ADD TO CART
                </button>
              </div>
            </div>

            {/* Product 5 */}
            <div className="bg-white rounded-lg p-6 transform hover:rotate-2 transition-transform duration-300 shadow-lg border-4 border-black">
              <div className="relative mb-4">
                <img src={varsity} alt="Varsity Shirt" className="w-full h-64 object-cover rounded" />
                <div className="absolute top-2 right-2 bg-orange-400 text-black px-3 py-1 rounded font-bold text-sm">
                  POPULAR
                </div>
              </div>
              <h3 className="font-lexend-mega font-bold text-xl mb-2">Varsity Shirt</h3>
              <p className="text-gray-600 mb-4">Retro varsity style with modern comfort</p>
              <div className="flex justify-between items-center">
                <span className="font-lexend-mega font-bold text-2xl text-purple-600">$52.99</span>
                <button className="bg-orange-400 text-black px-6 py-2 rounded font-bold hover:bg-orange-300 transition-colors border-2 border-black">
                  ADD TO CART
                </button>
              </div>
            </div>

            {/* Product 6 */}
            <div className="bg-white rounded-lg p-6 transform hover:-rotate-2 transition-transform duration-300 shadow-lg border-4 border-black">
              <div className="relative mb-4">
                <img src={y2k_pink} alt="Y2K Pink Collection" className="w-full h-64 object-cover rounded" />
                <div className="absolute top-2 right-2 bg-purple-400 text-black px-3 py-1 rounded font-bold text-sm">
                  EXCLUSIVE
                </div>
              </div>
              <h3 className="font-lexend-mega font-bold text-xl mb-2">Y2K Pink Collection</h3>
              <p className="text-gray-600 mb-4">Complete outfit set in signature Y2K pink</p>
              <div className="flex justify-between items-center">
                <span className="font-lexend-mega font-bold text-2xl text-purple-600">$129.99</span>
                <button className="bg-purple-400 text-black px-6 py-2 rounded font-bold hover:bg-purple-300 transition-colors border-2 border-black">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Stickers */}
        <img 
          src={star} 
          alt="Star" 
          className="absolute top-20 right-20 w-16 h-16 animate-bounce"
          style={{ animationDelay: '0.5s' }}
        />
        <img 
          src={heart} 
          alt="Heart" 
          className="absolute bottom-40 left-10 w-20 h-20 animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <img 
          src={smileyface} 
          alt="Smiley" 
          className="absolute top-1/2 right-10 w-16 h-16 animate-spin"
          style={{ animationDuration: '3s' }}
        />
        <img 
          src={musicplayer} 
          alt="Music Player" 
          className="absolute bottom-20 right-1/4 w-24 h-24 animate-bounce"
          style={{ animationDelay: '1.5s' }}
        />
      </section>

      {/* FEATURED PRODUCTS Section */}
      <section id="featured" className="bg-gray-50 min-h-screen relative overflow-hidden py-20">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-10 left-10 grid grid-cols-8 gap-4 opacity-20">
            {Array.from({ length: 56 }).map((_, index) => (
              <span key={`dot-${index}`} className="w-2 h-2 bg-black rounded-full" />
            ))}
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#FE3E9E] text-black font-lexend-mega uppercase tracking-[0.35em] px-6 py-2 border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] mb-4">
              The Y2K Dispatch
            </span>
            <h2 className="font-vcr text-5xl md:text-6xl text-[#121212] mb-4">
              FEATURED PRODUCTS
            </h2>
            <p className="font-lexend-mega text-2xl text-gray-700 max-w-3xl mx-auto">
              Drop into our weekly round-up of must-have looks, trend deep dives, and vintage hotspots.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Card 1 */}
            <article className="relative">
              <div className="absolute -top-6 -left-6 bg-black w-full h-full" />
              <div className="relative bg-[#FFD400] border-4 border-black px-8 py-10 shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-lexend-mega text-lg tracking-[0.25em] uppercase text-black">
                    Y2K Hottest Accessories
                  </span>
                  <img src={musicplayer} alt="Boombox sticker" className="w-10 h-10 rotate-[-8deg]" />
                </div>
                <div className="aspect-[3/4] bg-white border-4 border-black mb-6 overflow-hidden shadow-[6px_6px_0px_rgba(0,0,0,1)]">
                  <img src={varsity} alt="Accessories" className="w-full h-full object-cover" />
                </div>
                <p className="text-black leading-relaxed mb-6">
                  A round up of must-have bags, hats and jewelry of the Y2K era.
                </p>
                <button className="bg-black text-white font-lexend-mega px-6 py-3 border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] transition">
                  Read More →
                </button>
              </div>
            </article>

            {/* Card 2 */}
            <article className="relative">
              <div className="absolute -top-6 -left-6 bg-black w-full h-full" />
              <div className="relative bg-[#FE3E9E] border-4 border-black px-8 py-10 shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-lexend-mega text-lg tracking-[0.25em] uppercase text-black">
                    The History Of The Croptops
                  </span>
                  <img src={smileyface} alt="Smiley sticker" className="w-10 h-10 rotate-[12deg]" />
                </div>
                <div className="aspect-[3/4] bg-white border-4 border-black mb-6 overflow-hidden shadow-[6px_6px_0px_rgba(0,0,0,1)]">
                  <img src={crochet_sweater} alt="Crop top" className="w-full h-full object-cover" />
                </div>
                <p className="text-black leading-relaxed mb-6">
                  How this iconic Y2K staple became a fashion must-have.
                </p>
                <button className="bg-black text-white font-lexend-mega px-6 py-3 border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] transition">
                  Read More →
                </button>
              </div>
            </article>

            {/* Card 3 */}
            <article className="relative">
              <div className="absolute -top-6 -left-6 bg-black w-full h-full" />
              <div className="relative bg-[#20BBD5] border-4 border-black px-8 py-10 shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-lexend-mega text-lg tracking-[0.25em] uppercase text-black">
                    Favourite Vintage Shops
                  </span>
                  <img src={star} alt="Star sticker" className="w-10 h-10 rotate-[-10deg]" />
                </div>
                <div className="aspect-[3/4] bg-white border-4 border-black mb-6 overflow-hidden shadow-[6px_6px_0px_rgba(0,0,0,1)]">
                  <img src={spaceman} alt="Vintage shops" className="w-full h-full object-cover" />
                </div>
                <p className="text-black leading-relaxed mb-6">
                  Where to find the best Y2K pieces for your collection.
                </p>
                <button className="bg-black text-white font-lexend-mega px-6 py-3 border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] transition">
                  Read More →
                </button>
              </div>
            </article>
          </div>

          <div className="mt-14 flex justify-center">
            <button className="bg-[#05D87C] text-black font-lexend-mega px-10 py-4 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:-translate-y-[3px] transition uppercase tracking-[0.3em]">
              Go To Dispatch
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT Section */}
      <section
        id="about"
        className="bg-white py-28 border-t-4 border-b-4 border-black relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFF4FB] via-white to-[#E9FFFB] opacity-90" />
        <div className="absolute -top-32 -left-20 w-72 h-72 bg-[#FF2E63]/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 right-12 w-80 h-80 bg-[#20BBD5]/20 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block bg-[#20BBD5] text-black font-lexend-mega uppercase tracking-[0.35em] px-6 py-2 border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] mb-6">
              About Us
            </span>
            <h2 className="font-lexend-mega font-bold text-5xl text-[#121212] mb-6">
              About Our Y2K Universe
            </h2>
            <p className="text-gray-700 text-xl leading-relaxed">
              We are on a mission to revive the unapologetic energy of the early 2000s. From pixel-perfect
              accessories to neon statement pieces, every drop is curated by creators who lived the era and
              refuse to let it fade. Step into a world where playlists came on CDs, outfits came with glitter,
              and self-expression was always loud.
            </p>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            <div className="bg-white border-4 border-black rounded-[18px] px-8 py-10 shadow-[10px_10px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform">
              <h3 className="font-lexend-mega text-2xl text-[#FE3E9E] mb-4 uppercase tracking-wide">
                Curated Drops
              </h3>
              <p className="text-gray-800 leading-relaxed">
                Weekly edits from vintage archives and independent designers. Expect rhinestones, metallics,
                and the unpredictable mix that made the millennium iconic.
              </p>
            </div>
            <div className="bg-[#20BBD5] border-4 border-black rounded-[18px] px-8 py-10 shadow-[10px_10px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform">
              <h3 className="font-lexend-mega text-2xl text-black mb-4 uppercase tracking-wide">
                Community First
              </h3>
              <p className="text-black leading-relaxed">
                Pop-up styling events, throwback playlists, and creator collabs keep the scene alive. Share your
                fit pics and get featured on our retro wall of fame.
              </p>
            </div>
            <div className="bg-white border-4 border-black rounded-[18px] px-8 py-10 shadow-[10px_10px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform">
              <h3 className="font-lexend-mega text-2xl text-[#FFD400] mb-4 uppercase tracking-wide">
                Sustainability
              </h3>
              <p className="text-gray-800 leading-relaxed">
                We source deadstock materials, revive thrift treasures, and design pieces to last beyond trends—
                because nostalgia deserves a future.
              </p>
            </div>
          </div>

          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="bg-[#FE3E9E] text-black font-lexend-mega px-10 py-4 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:-translate-y-[3px] transition">
              Meet the Team →
            </button>
            <button className="bg-white text-[#121212] font-lexend-mega px-10 py-4 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:-translate-y-[3px] transition">
              Explore the Lookbook
            </button>
          </div>
        </div>

        <img src={controller} alt="Controller Sticker" className="absolute -top-10 left-10 w-24 h-24 opacity-80 rotate-6" />
        <img src={star} alt="Star Sticker" className="absolute top-24 right-12 w-14 h-14 opacity-90 -rotate-3 animate-pulse" />
        <img src={heart} alt="Heart Sticker" className="absolute bottom-10 left-16 w-20 h-20 opacity-90 rotate-[-8deg]" />
      </section>

      {/* CONTACT Section */}
      <section
        id="contact"
        className="bg-[#FFE399] py-24 border-t-4 border-b-4 border-black relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <h2 className="font-lexend-mega font-bold text-5xl text-[#121212] uppercase tracking-[0.2em]">
            GET THE DROP!
          </h2>
          <p className="text-[#121212] text-xl max-w-2xl mx-auto leading-relaxed">
            Signup for exclusive Y2K drops, sales and fashion tips. No spam. Only the good stuff!
          </p>
          <div className="relative flex flex-col items-center">
            <div className="flex w-full max-w-2xl flex-col md:flex-row shadow-[8px_8px_0px_rgba(0,0,0,1)] border-4 border-black bg-white">
              <input
                type="email"
                placeholder="Enter your email..."
                className="flex-1 px-6 py-5 text-lg font-lexend-mega text-[#121212] outline-none border-b-4 border-black md:border-b-0 md:border-r-4"
              />
              <button
                type="button"
                className="w-full md:w-auto bg-[#FFD400] px-10 py-5 font-lexend-mega text-[#121212] border-t-4 md:border-t-0 border-black flex items-center justify-center space-x-3 hover:bg-[#ffdd33] transition"
              >
                <span>Subscribe</span>
                <span role="img" aria-label="mail">✉️</span>
              </button>
            </div>
            <p className="mt-6 text-[#121212] font-lexend-mega">No spam. Only the good stuff!</p>
          </div>
        </div>

        <img
          src={computer}
          alt="Computer Sticker"
          className="hidden md:block absolute left-16 top-16 w-24 h-24 rotate-[-10deg]"
        />
        <img
          src={musicplayer}
          alt="Music Player Sticker"
          className="hidden md:block absolute right-16 bottom-12 w-24 h-24 rotate-3"
        />
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0F0F0F] text-white py-16 border-t-4 border-black">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
          <div className="text-center md:text-left space-y-3">
            <span className="font-pixel text-[72px] leading-none text-[#FE3E9E] block">Y2K</span>
            <p className="text-sm text-[#20BBD5] uppercase tracking-[0.4em]">Retro Rewind</p>
          </div>

          <nav className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-[#20BBD5] font-lexend-mega text-lg">
            <a href="#home" className="hover:text-white transition">Home</a>
            <a href="#shop" className="hover:text-white transition">Shop</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#contact" className="hover:text-white transition">Contact Us</a>
          </nav>

          <div className="text-center md:text-right space-y-4">
            <div className="flex items-center justify-center md:justify-end gap-4 text-[#FE3E9E] text-2xl">
              <span aria-label="Instagram" role="img">📸</span>
              <span aria-label="Facebook" role="img">📘</span>
              <span aria-label="YouTube" role="img">📺</span>
              <span aria-label="X" role="img">❌</span>
            </div>
            <button className="bg-[#FE3E9E] text-black font-lexend-mega px-6 py-3 border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] transition">
              Get The Drop!
            </button>
          </div>
        </div>

        <div className="mt-12 text-center text-[#F8D4FF] text-sm font-lexend-mega space-y-2">
          <p>© 2025 Y2K Brand. All Rights Reserved</p>
        </div>
      </footer>
    </div>
  )
}

export default App 