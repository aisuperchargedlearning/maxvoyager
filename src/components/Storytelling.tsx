import React from 'react';
import { BookOpen, Users, Globe, Pen } from 'lucide-react';

export default function Storytelling() {
  return (
    <section id="storytelling" className="py-24 bg-gradient-to-b from-black/90 to-purple-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Cinematic Storytelling: Research at the Core
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            At MaxVoyager Studios, we believe the foundation of a powerful story lies in meticulous research and authentic details. Our current focus is on developing a historical fiction story set during World War II (1943–45) and the post-war era up to the late 1950s.
          </p>
        </div>

        {/* Research Overview */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-white">The Importance of Research</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20">
              <BookOpen className="h-8 w-8 text-purple-400 mb-4" />
              <h4 className="text-xl font-semibold mb-3 text-white">Gathering Real Stories</h4>
              <p className="text-gray-300">Collecting accounts of real events to ground the story in authenticity.</p>
            </div>
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20">
              <Users className="h-8 w-8 text-purple-400 mb-4" />
              <h4 className="text-xl font-semibold mb-3 text-white">Developing Characters</h4>
              <p className="text-gray-300">Crafting characters whose backgrounds, motivations, and struggles reflect the era.</p>
            </div>
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20">
              <Globe className="h-8 w-8 text-purple-400 mb-4" />
              <h4 className="text-xl font-semibold mb-3 text-white">Recreating the World</h4>
              <p className="text-gray-300">Detailing the physical elements—food, clothing, architecture, and technology—to transport audiences.</p>
            </div>
          </div>
        </div>

        {/* Timeless Stories Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-4 text-white">Timeless Stories in Changing Contexts</h3>
          <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20">
            <p className="text-gray-300 leading-relaxed">
              Great storytelling adapts to the shifting lens of its audience. A narrative set in 1949 may resonate differently in 2029, requiring thoughtful adjustments to ensure its themes, characters, and conflicts remain relevant and impactful. At MaxVoyager Studios, we embrace this challenge, crafting stories that honor historical authenticity while speaking to the modern viewer's evolving perspectives.
            </p>
          </div>
        </div>

        {/* Workflow */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-white">Our Storytelling Workflow</h3>
          <div className="space-y-8">
            <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20">
              <h4 className="text-xl font-semibold mb-6 text-white">Key Elements of a Great Story</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {['Characters', 'Plot', 'Setting', 'Theme'].map((element, index) => (
                  <div key={element} className="space-y-3">
                    <h5 className="text-lg font-medium text-purple-400">{element}</h5>
                    <ul className="space-y-2 text-gray-300">
                      {element === 'Characters' && (
                        <>
                          <li>• Depth and complexity</li>
                          <li>• Character arcs</li>
                          <li>• Flaws and vulnerabilities</li>
                        </>
                      )}
                      {element === 'Plot' && (
                        <>
                          <li>• Central conflict</li>
                          <li>• Rising action</li>
                          <li>• Turning points</li>
                        </>
                      )}
                      {element === 'Setting' && (
                        <>
                          <li>• Vivid descriptions</li>
                          <li>• Atmosphere</li>
                          <li>• Historical accuracy</li>
                        </>
                      )}
                      {element === 'Theme' && (
                        <>
                          <li>• Underlying message</li>
                          <li>• Subtle integration</li>
                          <li>• Universal appeal</li>
                        </>
                      )}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20">
              <h4 className="text-xl font-semibold mb-6 text-white">Writing Process</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h5 className="text-lg font-medium text-purple-400 mb-4">Writing Techniques</h5>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <Pen className="h-5 w-5 mr-2 mt-1 text-purple-400" />
                      Show, don't tell: Use descriptive language
                    </li>
                    <li className="flex items-start">
                      <Pen className="h-5 w-5 mr-2 mt-1 text-purple-400" />
                      Dialogue: Develop character through conversation
                    </li>
                    <li className="flex items-start">
                      <Pen className="h-5 w-5 mr-2 mt-1 text-purple-400" />
                      Pacing: Create suspense and reflection
                    </li>
                    <li className="flex items-start">
                      <Pen className="h-5 w-5 mr-2 mt-1 text-purple-400" />
                      Foreshadowing: Build anticipation
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}