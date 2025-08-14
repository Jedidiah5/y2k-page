import Navbar from './components/Navbar';
import PolaroidCard from './components/PolaroidCard';
import img1 from './Assets/img1.jpeg';
import stereo_tape from './Stickers/stereo_tape.png';
import smileyface from './Stickers/smileyface.png';

function App() {
  return (
    <div className="min-h-screen split-bg">
      <Navbar />

      <div className="flex h-screen">
        {/* Left Side - Hot Pink with Y2K Content */}
        <div className="w-1/2 flex items-center justify-center relative">
          {/* Smiley face emoji in top-left */}
          <img src={smileyface} alt="Smiley Face" className="absolute top-10 left-10 w-16 h-16" />
          
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
                  boxShadow: '4px 4px 0px #000000'
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
            className="bg-cyan-400 hover:bg-cyan-500 text-white font-bold border-2 border-black hover-lift flex items-center gap-2"
            style={{
              position: 'absolute',
              left: '80px',
              top: '500px',
              padding: '16px 32px',
              fontSize: '20px',
              borderRadius: '8px'
            }}
          >
            Shop Now
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
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