import React from 'react';
import { Mail, Phone, Linkedin, Building, Award, TrendingUp, Users } from 'lucide-react';

const Template4 = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Executive Header */}
      <header className="bg-white shadow-sm border-b-4 border-blue-600">
        <div className="container mx-auto px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">MA</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Meshal Alawein</h1>
                <p className="text-lg text-blue-600 font-medium">Chief Computational Scientist</p>
                <p className="text-gray-600">Quantum Materials & Advanced Computing</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex gap-4 mb-2">
                <a href="mailto:meshal@berkeley.edu" className="text-gray-600 hover:text-blue-600">
                  <Mail size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  <Phone size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  <Linkedin size={20} />
                </a>
              </div>
              <p className="text-sm text-gray-600">Berkeley, CA • meshal@berkeley.edu</p>
            </div>
          </div>
        </div>
      </header>

      {/* Executive Summary */}
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold mb-4">Executive Summary</h2>
            <p className="text-lg leading-relaxed text-blue-100">
              Senior computational scientist with 11+ years of leadership experience in quantum materials research, 
              high-performance computing, and cross-institutional project management. Proven track record of 
              delivering breakthrough research results and leading teams to develop next-generation technologies 
              for quantum computing and advanced materials applications.
            </p>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="container mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <TrendingUp className="text-blue-600 mx-auto mb-2" size={32} />
            <h3 className="text-2xl font-bold text-gray-900">70+</h3>
            <p className="text-gray-600">Citations</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Award className="text-blue-600 mx-auto mb-2" size={32} />
            <h3 className="text-2xl font-bold text-gray-900">15+</h3>
            <p className="text-gray-600">Publications</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Building className="text-blue-600 mx-auto mb-2" size={32} />
            <h3 className="text-2xl font-bold text-gray-900">3</h3>
            <p className="text-gray-600">Patents</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Users className="text-blue-600 mx-auto mb-2" size={32} />
            <h3 className="text-2xl font-bold text-gray-900">15+</h3>
            <p className="text-gray-600">Institutions</p>
          </div>
        </div>

        {/* Professional Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Leadership Experience</h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-gray-900">Scientific Computing Researcher</h3>
                  <span className="text-sm text-gray-500">2022-Present</span>
                </div>
                <p className="text-blue-600 font-medium mb-2">Lawrence Berkeley National Laboratory</p>
                <p className="text-gray-700 text-sm">
                  Led DOE-funded quantum materials discovery project, coordinating cross-institutional teams and managing $2M+ research budget.
                </p>
              </div>
              
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-gray-900">Graduate Research Scientist</h3>
                  <span className="text-sm text-gray-500">2019-2025</span>
                </div>
                <p className="text-blue-600 font-medium mb-2">University of California, Berkeley</p>
                <p className="text-gray-700 text-sm">
                  Pioneered breakthrough research in quantum materials, developed scalable computational frameworks adopted globally.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Core Competencies</h2>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Strategic Leadership</h4>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '95%'}}></div>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Technical Innovation</h4>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '98%'}}></div>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Team Management</h4>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '90%'}}></div>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Project Delivery</h4>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '93%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template4;