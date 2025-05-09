import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Studio from './components/Studio';
import Storytelling from './components/Storytelling';
import Racing from './components/Racing';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Navigation />
      <section className="bg-[#000000] min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center opacity-0 animate-fadeIn">
            <div className="transform translate-y-0 animate-parallax">
              <img
                src="https://ik.imagekit.io/a7tech/Testarossaaudio/MaxvoyagerLogotext.jpg?updatedAt=1746750245831"
                alt="MaxVoyager"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      <Hero />
      <Studio />
      <Storytelling />
      <Racing />
      <Contact />
    </div>
  );
}

export default App;