import Navbar from './components/Navbar';
import PolaroidCard from './components/PolaroidCard';
import img1 from './Assets/img1.jpeg';
import stereo_tape from './Stickers/stereo_tape.png';

function App() {
  return (
    <div className="min-h-screen split-bg">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex">
          <div className="w-1/2 py-16"></div>
          <div className="w-1/2 flex justify-center items-start py-16">
            <PolaroidCard imageSrc={img1} caption="Y2K Vibes" rotationClass="rotate-2" stickerSrc={stereo_tape} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default App 