import Navbar from './components/Navbar';
import PolaroidCard from './components/PolaroidCard';
import img1 from './Assets/img1.jpeg';
import img2 from './Assets/img2.jpeg';
import img3 from './Assets/img3.jpeg';
import stereo_tape from './Stickers/stereo_tape.png';
import smileyface from './Stickers/smileyface.png';
import star from './Stickers/star.png';
import musicplayer from './Stickers/musicplayer.png';

function App() {
  return (
    <div className="min-h-screen split-bg">
      <Navbar />

      <div className="flex h-screen">
        {/* Left Side - Hot Pink with Y2K Content */}
        <div className="w-1/2 flex items-center justify-center relative">
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
        <div className="w-1/2 bg-bright-yellow relative overflow-hidden">
          <div className="flex flex-wrap justify-center items-center h-full gap-8 p-8">
            {/* Polaroid Card 1 */}
            <div className="transform rotate-2">
              <PolaroidCard imageSrc={img1} caption="Y2K Vibes" rotationClass="rotate-2" />
            </div>
            
            {/* Polaroid Card 2 */}
            <div className="transform -rotate-1">
              <PolaroidCard imageSrc={img2} caption="Retro Style" rotationClass="rotate-1" />
            </div>
            
            {/* Polaroid Card 3 */}
            <div className="transform rotate-3">
              <PolaroidCard imageSrc={img3} caption="2000s Fashion" rotationClass="rotate-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App 