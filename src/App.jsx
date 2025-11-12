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
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-vcr text-6xl mb-6 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
            FEATURED PRODUCTS
          </h2>
          <p className="font-lexend-mega text-2xl text-gray-700 max-w-3xl mx-auto px-8">
            Explore our handpicked collection of iconic Y2K pieces that defined the early 2000s
          </p>
        </div>

        {/* Product Grid */}
        <div className="max-w-6xl mx-auto px-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Product 1 - Jeans Mini Skirt */}
            <div className="text-center">
              <div className="relative inline-block">
                <div className="bg-pink-400 p-4 border-4 border-black relative">
                  <img src={jeans} alt="Jeans Mini Skirt" className="w-full h-80 object-cover" />
                  {/* Yellow star sticker */}
                  <div className="absolute -top-3 -left-3 w-12 h-12 bg-yellow-400 border-2 border-black rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
              <h3 className="font-lexend-mega font-bold text-2xl mt-6 mb-2">Jeans Mini Skirt</h3>
              <p className="font-lexend-mega text-3xl text-purple-600">$500.00</p>
            </div>

            {/* Product 2 - Crochet Sweater */}
            <div className="text-center">
              <div className="relative inline-block">
                <div className="bg-cyan-400 p-4 border-4 border-black">
                  <img src={crochet_sweater} alt="Crochet Sweater" className="w-full h-80 object-cover" />
                </div>
              </div>
              <h3 className="font-lexend-mega font-bold text-2xl mt-6 mb-2">Crochet Sweater</h3>
              <p className="font-lexend-mega text-3xl text-purple-600">$1,500.00</p>
            </div>

            {/* Product 3 - Spaceman Glasses */}
            <div className="text-center">
              <div className="relative inline-block">
                <div className="bg-orange-400 p-4 border-4 border-black relative">
                  <img src={spaceman} alt="Spaceman Glasses" className="w-full h-80 object-cover" />
                  {/* Green star sticker */}
                  <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-green-400 border-2 border-black rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
              <h3 className="font-lexend-mega font-bold text-2xl mt-6 mb-2">Spaceman Glasses</h3>
              <p className="font-lexend-mega text-3xl text-purple-600">$600.00</p>
            </div>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-pink-400 to-pink-600 text-white px-12 py-4 rounded-lg font-lexend-mega font-bold text-xl border-2 border-black hover:scale-105 transition-transform duration-300 shadow-lg">
            View All Products →
          </button>
        </div>

        {/* Decorative Heart */}
        <div className="absolute bottom-8 right-8 w-16 h-16">
          <div className="w-full h-full bg-pink-400 border-2 border-black transform rotate-45 relative">
            <div className="absolute inset-0 bg-pink-400 border-2 border-black transform rotate-45 scale-75"></div>
          </div>
        </div>
      </section>

      {/* ABOUT Section */}
      <section
        id="about"
        className="bg-white py-24 border-t-4 border-b-4 border-black relative overflow-hidden"
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-lexend-mega font-bold text-5xl text-[#121212] mb-6">
            About Our Y2K Universe
          </h2>
          <p className="text-gray-700 text-xl leading-relaxed max-w-3xl mx-auto">
            We are on a mission to revive the unapologetic energy of the early 2000s. From pixel-perfect
            accessories to neon statement pieces, every drop is curated by creators who lived the era and
            refuse to let it fade. Step into a world where playlists came on CDs, outfits came with glitter,
            and self-expression was always loud.
          </p>
        </div>
        <div className="absolute -top-16 left-12 rotate-6">
          <img src={controller} alt="Controller Sticker" className="w-24 h-24 opacity-80" />
        </div>
        <div className="absolute bottom-12 right-16 -rotate-3">
          <img src={star} alt="Star Sticker" className="w-16 h-16 opacity-90" />
        </div>
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