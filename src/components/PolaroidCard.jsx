import React from 'react';

function PolaroidCard({ imageSrc, caption, rotationClass = "-rotate-3", stickerSrc, backgroundColor = "#00CFFF" }) {
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
        style={{
          width: '288.7129890343151px',
          height: '388.5483185537197px',
          background: backgroundColor,
          border: '3px solid #121212',
          borderRadius: '1px',
          transform: 'rotate(-6.9deg)',
          opacity: 1,
          padding: '0px 20px 20px 20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          position: 'relative',
          boxShadow: '8px 8px 0px #000000'
        }}
      >
        <div 
          style={{
            width: '249.13861675658148px',
            height: '277.02054490897757px',
            border: '3px solid #121212',
            borderRadius: '1px',
            overflow: 'hidden',
            marginTop: '15px'
          }}
        >
          <img 
            src={imageSrc} 
            alt={caption} 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default PolaroidCard; 