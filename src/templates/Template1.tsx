import React from 'react';
import { Mail, Phone, Linkedin, Globe, GraduationCap, User, Target, BookOpen } from 'lucide-react';

const Template1 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">Meshal Alawein</h1>
              <p className="text-xl text-teal-300">Computational Scientist & Quantum Materials Theorist</p>
            </div>
            <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
              <a href="mailto:meshal@berkeley.edu" className="flex items-center gap-2 hover:text-teal-300">
                <Mail size={16} />
                <span>meshal@berkeley.edu</span>
              </a>
              <a href="tel:+15102075741" className="flex items-center gap-2 hover:text-teal-300">
                <Phone size={16} />
                <span>+1-510-207-5741</span>
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-teal-300">
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <User className="text-teal-600" size={20} />
                Quick Info
              </h3>
              <div className="space-y-3 text-sm">
                <p><strong>Location:</strong> Berkeley, CA</p>
                <p><strong>Education:</strong> Ph.D. UC Berkeley</p>
                <p><strong>Experience:</strong> 11+ years</p>
                <p><strong>Specialization:</strong> Quantum Materials</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <BookOpen className="text-teal-600" size={20} />
                Key Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'VASP', 'DFT', 'Machine Learning', 'HPC', 'Quantum Computing'].map((skill) => (
                  <span key={skill} className="bg-teal-100 text-teal-800 px-2 py-1 rounded-full text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Target className="text-teal-600" />
                Professional Profile
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Computational scientist and quantum materials theorist with <strong>11+ years of experience</strong> in developing scalable algorithms, scientific machine learning models, and high-throughput simulation pipelines for quantum materials discovery and next-generation device applications.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <GraduationCap className="text-teal-600" />
                Education
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-teal-600 pl-4">
                  <h3 className="font-bold">Ph.D. in Electrical Engineering and Computer Sciences</h3>
                  <p className="text-gray-600">University of California, Berkeley • 2019-2025</p>
                </div>
                <div className="border-l-4 border-teal-600 pl-4">
                  <h3 className="font-bold">M.S. in Electrical Engineering</h3>
                  <p className="text-gray-600">King Abdullah University of Science and Technology • 2014-2016</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template1;