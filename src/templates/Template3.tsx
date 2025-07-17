import React from 'react';
import { Mail, Phone, Linkedin, Globe, Download, Sparkles, Zap, Atom } from 'lucide-react';

const Template3 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Creative Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="relative container mx-auto px-6 py-16">
          <div className="text-center text-white">
            <div className="flex justify-center mb-4">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center">
                  <Atom size={48} className="text-white" />
                </div>
                <div className="absolute -top-2 -right-2">
                  <Sparkles size={24} className="text-yellow-400 animate-pulse" />
                </div>
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Meshal Alawein
            </h1>
            <p className="text-xl text-purple-200 mb-6">
              Quantum Materials Theorist & Computational Scientist
            </p>
            <div className="flex justify-center gap-6">
              <a href="mailto:meshal@berkeley.edu" className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/20 transition-all">
                <Mail size={16} className="inline mr-2" />
                Contact
              </a>
              <a href="#" className="bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-2 rounded-full hover:from-purple-600 hover:to-blue-600 transition-all">
                <Download size={16} className="inline mr-2" />
                Resume
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Creative Content Cards */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Research Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
            <div className="flex items-center mb-4">
              <Zap className="text-yellow-400 mr-3" size={24} />
              <h3 className="text-xl font-bold text-white">Research Focus</h3>
            </div>
            <p className="text-purple-200 text-sm leading-relaxed">
              Pioneering quantum materials discovery through strain-induced flat bands and lateral heterostructures in 2D materials.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {['Quantum Materials', 'DFT', 'Machine Learning'].map((tag) => (
                <span key={tag} className="bg-purple-500/30 text-purple-200 px-2 py-1 rounded-full text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Experience Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
            <div className="flex items-center mb-4">
              <Atom className="text-blue-400 mr-3" size={24} />
              <h3 className="text-xl font-bold text-white">Experience</h3>
            </div>
            <div className="space-y-3">
              <div>
                <h4 className="text-purple-200 font-medium">UC Berkeley & LBNL</h4>
                <p className="text-purple-300 text-sm">Graduate Research Scientist</p>
              </div>
              <div>
                <h4 className="text-purple-200 font-medium">KAUST</h4>
                <p className="text-purple-300 text-sm">Graduate Researcher</p>
              </div>
            </div>
          </div>

          {/* Publications Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
            <div className="flex items-center mb-4">
              <Sparkles className="text-green-400 mr-3" size={24} />
              <h3 className="text-xl font-bold text-white">Impact</h3>
            </div>
            <div className="space-y-2 text-purple-200 text-sm">
              <p><strong>70+</strong> Citations</p>
              <p><strong>15+</strong> Research Publications</p>
              <p><strong>3</strong> Patents Filed</p>
              <p><strong>1000+</strong> Software Downloads</p>
            </div>
          </div>
        </div>

        {/* Featured Work */}
        <div className="mt-12 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Featured Research</h2>
          <div className="text-center">
            <h3 className="text-xl text-purple-200 mb-4">
              "Strain-induced lateral heterostructures and flat bands in rippled MoS₂"
            </h3>
            <p className="text-purple-300 text-sm max-w-2xl mx-auto leading-relaxed">
              Published in Physical Review Materials (2025) - Discovered novel quantum phenomena in 2D materials through computational modeling and first-principles simulations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template3;