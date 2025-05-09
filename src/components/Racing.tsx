import React, { useState, useRef } from 'react';
import { Trophy, Flag, Clock, Users, Play, Pause, Rewind } from 'lucide-react';

export default function Racing() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleRewind = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <section className="relative min-h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-10" />
        {/* Desktop Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hidden md:block w-full h-full object-cover"
        >
          <source
            src="https://ik.imagekit.io/a7tech/Artmindai/Threeclipssmallest1.mp4"
            type="video/mp4"
          />
        </video>
        {/* Mobile Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="md:hidden w-full h-full object-cover"
        >
          <source
            src="YOUR_MOBILE_VIDEO_URL_HERE"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Current Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Racing and Motorsport represent an early focus of our story development. We are excited to begin with stories that inspire our audience about the early days of motorsport.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div id="testa-rossa" className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20">
            <Trophy className="h-8 w-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-white">Testa Rossa</h3>
            <p className="text-gray-300 mb-4">This Historical Fiction thriller focuses on the events in Italy between 1943 till the end of the war and into the 1950s.</p>
            
            <div className="mt-4">
              <button
                className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg mb-4 w-full"
              >
                Story Introduction
              </button>
              
              <div className="flex items-center justify-center space-x-4 bg-black/30 p-3 rounded-lg">
                <button
                  onClick={handleRewind}
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <Rewind className="h-6 w-6" />
                </button>
                <button
                  onClick={handlePlay}
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  {isPlaying ? (
                    <Pause className="h-6 w-6" />
                  ) : (
                    <Play className="h-6 w-6" />
                  )}
                </button>
                <audio
                  ref={audioRef}
                  src="https://ik.imagekit.io/a7tech/Testarossaaudio/Airraidsirencompressed.mp3?updatedAt=1745428537961"
                  onEnded={() => setIsPlaying(false)}
                  className="hidden"
                />
              </div>
            </div>
          </div>

          <div id="sky-accord" className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20">
            <Flag className="h-8 w-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-white">Operation Sky Accord</h3>
            <p className="text-gray-300">This story tells about the Aces of the 357th fighter squadron. They had 42 Pilots become Aces including Chuck Yeager. The unit is officially credited by the U.S. Air Force with having destroyed 595.5 German airplanes in the air and 106.5 on the ground. This was one of the most successful fighter squadrons of World War 2.</p>
          </div>

          <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20">
            <Clock className="h-8 w-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-white">Timeless Moments</h3>
            <p className="text-gray-300">Capturing the split-second decisions that changed racing history forever.</p>
          </div>

          <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20">
            <Users className="h-8 w-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-white">Racing Legends</h3>
            <p className="text-gray-300">Honoring the drivers who pushed the boundaries of speed and skill.</p>
          </div>
        </div>
      </div>
    </section>
  );
}