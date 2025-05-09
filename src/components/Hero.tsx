import React from 'react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-purple-900/20 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://ik.imagekit.io/a7tech/Artmindai/Herovideo.mp4?updatedAt=1736371063416"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20 sm:mt-0">
        <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-500">
            Cinematic Masterpieces Shaped by Human Vision and Creativity
          </span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto font-light">
          Redefining Film Story Telling to Film Production and Distribution
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-1 h-16 rounded-full bg-gradient-to-b from-purple-500 to-transparent" />
        </div>
      </div>
    </div>
  );
}