import React from 'react';
import { Layers, Zap, Workflow, Film, Brain, Sparkles } from 'lucide-react';

export default function Studio() {
  return (
    <section id="maxvoyager-studio" className="py-24 bg-gradient-to-b from-[#0a0a0f] to-black/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            MaxVoyager Studio: Human Creativity Accelerated!
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pioneering an AI-native approach to feature film production, set to release our first full-length feature in 2026.
          </p>
        </div>

        {/* Vision & Approach */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20">
            <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              MaxVoyager Studio stands at the forefront of filmmaking's next evolution, revolutionizing how stories come to life by seamlessly integrating artificial intelligence with creative vision.
            </p>
          </div>
          <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20">
            <h3 className="text-2xl font-bold mb-4 text-white">The MaxVoyager Approach</h3>
            <p className="text-gray-300 leading-relaxed">
              Our production framework reimagines traditional screenplay structure for the AI era. We develop our screenplays as dynamic, multi-layered blueprints that speak to both human creativity and AI capabilities.
            </p>
          </div>
        </div>

        {/* Neural Narrative Architecture */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-white">Neural Narrative Architecture</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20">
              <Layers className="h-8 w-8 text-purple-400 mb-4" />
              <h4 className="text-xl font-semibold mb-3 text-white">Scene Composition Layer</h4>
              <p className="text-gray-300">Traditional scene descriptions enhanced with precise visual guidance matrices that AI can interpret and render.</p>
            </div>
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20">
              <Brain className="h-8 w-8 text-purple-400 mb-4" />
              <h4 className="text-xl font-semibold mb-3 text-white">Character Evolution Maps</h4>
              <p className="text-gray-300">Dynamic character profiles that evolve throughout the story, maintaining consistency while enabling subtle emotional progression.</p>
            </div>
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20">
              <Workflow className="h-8 w-8 text-purple-400 mb-4" />
              <h4 className="text-xl font-semibold mb-3 text-white">Environmental Context</h4>
              <p className="text-gray-300">Detailed world-building parameters ensure visual consistency across every generated frame.</p>
            </div>
          </div>
        </div>

        {/* Technical Innovation */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-white">Technical Innovation</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20">
              <Zap className="h-8 w-8 text-purple-400 mb-4" />
              <h4 className="text-xl font-semibold mb-3 text-white">Real-time Visualization</h4>
              <p className="text-gray-300">Scripts function as living documents that can generate preliminary visuals during writing.</p>
            </div>
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20">
              <Sparkles className="h-8 w-8 text-purple-400 mb-4" />
              <h4 className="text-xl font-semibold mb-3 text-white">Iterative Refinement</h4>
              <p className="text-gray-300">AI-assisted feedback loops help optimize scenes for narrative impact and technical feasibility.</p>
            </div>
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20">
              <Film className="h-8 w-8 text-purple-400 mb-4" />
              <h4 className="text-xl font-semibold mb-3 text-white">Cross-modal Integration</h4>
              <p className="text-gray-300">Sound design and musical elements fit seamlessly into the screenplay architecture.</p>
            </div>
          </div>
        </div>

        {/* Production Philosophy */}
        <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20">
          <h3 className="text-2xl font-bold mb-6 text-white">Production Philosophy</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-purple-400">Story First</h4>
              <p className="text-gray-300">Story developed by Human Creativity at the core.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-purple-400">Human-AI Collaboration</h4>
              <p className="text-gray-300">Human writers and Directors are the foundation of our creative effort. AI supports research and editing.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-purple-400">Quality Without Compromise</h4>
              <p className="text-gray-300">We uphold traditional cinematic values while pioneering new production methods.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}