import React from 'react';

function PolaroidCard({ imageSrc, caption, rotationClass = "-rotate-3", stickerSrc }) {
  return (
    <div className="relative select-none">
      {stickerSrc && (
        <img
          src={stickerSrc}
          alt=""
          className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 rotate-6 opacity-90 pointer-events-none z-10"
        />
      )}
      <div
        className={
          "bg-white border border-black/10 shadow-2xl p-3 pb-6 w-64 sm:w-72 transform " +
          rotationClass
        }
        style={{ filter: 'drop-shadow(0 12px 20px rgba(0,0,0,0.35))' }}
      >
        <div className="bg-black/5">
          <img src={imageSrc} alt={caption} className="w-full h-64 object-cover block" />
        </div>
        <p className="text-center mt-3 text-gray-800 font-semibold tracking-wide">{caption}</p>
      </div>
    </div>
  );
}

export default PolaroidCard; 