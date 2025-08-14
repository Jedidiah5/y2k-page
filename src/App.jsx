import Navbar from './components/Navbar';
import PolaroidCard from './components/PolaroidCard';
import img1 from './Assets/img1.jpeg';
import stereo_tape from './Stickers/stereo_tape.png';

function App() {
  return (
    <div className="min-h-screen split-bg">
      <Navbar />

      <div className="flex h-screen">
        {/* Left Side - Hot Pink with Y2K Content */}
        <div className="w-1/2 flex items-center justify-center">
          <div className="max-w-2xl px-4">
            <h1 className="text-6xl md:text-7xl font-bold text-black mb-8 font-lexend-mega leading-tight">
              <div>TIME</div>
              <div>TRAVEL</div>
              <div>TO</div>
              <div>
                <span className="inline-block bg-orange-400 border-2 border-black transform rotate-3 px-4 py-2 font-pixel text-black mr-4">
                  Y2K
                </span>
                ERA
              </div>
            </h1>
            
            <p className="text-xl md:text-2xl text-black max-w-lg leading-relaxed mb-12">
              Discover our curated collection of authentic Y2K fashion. Bringing the early 2000s back in style!
            </p>
            
            {/* Shop Now Button */}
            <button className="bg-cyan-400 hover:bg-cyan-500 text-white font-bold py-4 px-8 rounded-lg border-2 border-black hover-lift text-xl flex items-center gap-2 w-fit">
              Shop Now
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Right Side - Bright Yellow with Polaroid */}
        <div className="w-1/2 flex justify-center items-center">
          <PolaroidCard imageSrc={img1} caption="Y2K Vibes" rotationClass="rotate-2" stickerSrc={stereo_tape} />
        </div>
      </div>
    </div>
  )
}

export default App 