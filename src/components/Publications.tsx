import { FileText } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { useState } from 'react';

const Publications = () => {
  const [activeTab, setActiveTab] = useState('journal');
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <SectionHeading icon={<FileText />} title="Publications" />
      
      <div className="mt-6">
        <div className="flex border-b">
          <button
            className={`px-4 py-2 font-medium text-sm transition-colors ${
              activeTab === 'journal'
                ? 'border-b-2 border-teal-600 text-teal-600'
                : 'text-slate-600 hover:text-slate-800'
            }`}
            onClick={() => setActiveTab('journal')}
          >
            Journal Articles
          </button>
          <button
            className={`px-4 py-2 font-medium text-sm transition-colors ${
              activeTab === 'conference'
                ? 'border-b-2 border-teal-600 text-teal-600'
                : 'text-slate-600 hover:text-slate-800'
            }`}
            onClick={() => setActiveTab('conference')}
          >
            Conference Papers
          </button>
          <button
            className={`px-4 py-2 font-medium text-sm transition-colors ${
              activeTab === 'working'
                ? 'border-b-2 border-teal-600 text-teal-600'
                : 'text-slate-600 hover:text-slate-800'
            }`}
            onClick={() => setActiveTab('working')}
          >
            Working Papers
          </button>
        </div>
        
        {activeTab === 'journal' && (
          <div className="mt-4 space-y-4">
            <div className="text-sm text-slate-700 pl-4 border-l-2 border-slate-200 py-1">
              <p>
                <span className="underline">Meshal Alawein</span>, Joel W. Ager, Ali Javey, D. C. Chrzan, "Strain-induced lateral heterostructures: Hole localization and the emergence of flat bands in rippled MoS₂ monolayers," <em>Physical Review Materials</em>, 9 (2), L021002, 2025 {' '}
                <a href="https://doi.org/10.1103/PhysRevMaterials.9.L021002" className="text-teal-600 hover:underline" target="_blank" rel="noopener noreferrer">Link</a> {' '}
                <a href="https://journals.aps.org/prmaterials/pdf/10.1103/PhysRevMaterials.9.L021002" className="text-teal-600 hover:underline" target="_blank" rel="noopener noreferrer">Supplementary Material</a>
              </p>
            </div>
            
            <div className="text-sm text-slate-700 pl-4 border-l-2 border-slate-200 py-1">
              <p>
                Nasir Alfaraj, Kuang-Hui Li, <span className="underline">Meshal Alawein</span>, Chun Hong Kang, Laurentiu Braic, Nicolae Catalin Zoita, Adrian Emil Kiss, Tien Khee Ng, Boon S. Ooi, "Heteroepitaxial β-Ga₂O₃ on conductive ceramic templates: towards ultrahigh gain deep-ultraviolet photodetection," <em>Advanced Materials Technologies</em>, p.210014, 2021 {' '}
                <a href="https://onlinelibrary.wiley.com/doi/full/10.1002/admt.202100142" className="text-teal-600 hover:underline" target="_blank" rel="noopener noreferrer">Link</a>
              </p>
            </div>
            
            <div className="text-sm text-slate-700 pl-4 border-l-2 border-slate-200 py-1">
              <p>
                Nasir Alfaraj, Wael Alghamdi, <span className="underline">Meshal Alawein</span>, Idris A Ajia, Davide Priante, Bilal Janjua, Haiding Sun, Tien Khee Ng, Boon S Ooi, Iman S Roqan, Xiaohang Li, "Time--Energy Quantum Uncertainty--Quantifying the Effectiveness of Surface Defect Passivation Protocols for Low-Dimensional Semiconductors," <em>ACS Applied Electronic Materials</em>, 2020 {' '}
                <a href="https://pubs.acs.org/doi/abs/10.1021/acsaelm.9b00578" className="text-teal-600 hover:underline" target="_blank" rel="noopener noreferrer">Link</a>
              </p>
            </div>
            
            {/* More journal articles here */}
            <div className="text-sm text-slate-700 pl-4 border-l-2 border-slate-200 py-1">
              <p>
                <span className="underline">Meshal Alawein</span>, Selma Amara, and Hossein Fariborzi, "Multistate nanomagnetic logic using equilateral permalloy triangles," <em>IEEE Magnetics Letters</em>, vol. 10, pp. 1--5, 2019 {' '}
                <a href="https://ieeexplore.ieee.org/document/8642958" className="text-teal-600 hover:underline" target="_blank" rel="noopener noreferrer">Link</a>
              </p>
            </div>
            
            <div className="text-sm text-slate-700 pl-4 border-l-2 border-slate-200 py-1">
              <p>
                Abdulkarim Hariri, <span className="underline">Meshal Alawein</span>, and Aurelien Manchon, "Current-driven rashba field in a magnetic quantum well," submitted to <em>Physical Review B</em> {' '}
                <a href="https://arxiv.org/abs/1907.07116" className="text-teal-600 hover:underline" target="_blank" rel="noopener noreferrer">arXiv</a>
              </p>
            </div>
            
            <div className="text-sm text-slate-700 pl-4 border-l-2 border-slate-200 py-1">
              <p>
                <span className="underline">Meshal Alawein</span>, and Hossein Fariborzi, "Circuit models for spintronic devices subject to electric and magnetic fields," <em>IEEE J. Exploratory Solid-State Comput. Devices Circuits</em>, vol. 4, no. 2, pp. 60--68, 2018 {' '}
                <a href="https://ieeexplore.ieee.org/document/8514060" className="text-teal-600 hover:underline" target="_blank" rel="noopener noreferrer">Link</a> {' '}
                <a href="https://ieeexplore.ieee.org/ielx7/6570653/8437196/8514060/finalversion-supplementarymaterial.pdf?tp=&arnumber=8514060" className="text-teal-600 hover:underline" target="_blank" rel="noopener noreferrer">Supplementary Material</a>
              </p>
            </div>
          </div>
        )}
        
        {activeTab === 'conference' && (
          <div className="mt-4 space-y-4">
            <div className="text-sm text-slate-700 pl-4 border-l-2 border-slate-200 py-1">
              <p>
                Cheng-Hsiang Hsu, <span className="underline">Meshal Alawein</span>, Shehrin Sayed, Sayeef Salahuddin, "Field-free spin-orbit torque-driven multistate switching of canted GdCo moments," in <em>Magnetism and Magnetic Materials Conference</em> (accepted for publication)
              </p>
            </div>
            
            <div className="text-sm text-slate-700 pl-4 border-l-2 border-slate-200 py-1">
              <p>
                Selma Amara, Ulan Myrzakhan, <span className="underline">Meshal Alawein</span>, Abdulmohsen Alsaui, and Hossein Fariborzi, "Spin-orbit torque driven multi-state device for memory applications," in <em>Electron Devices Technology and Manufacturing Conference</em>, 2019 {' '}
                <a href="https://ieeexplore.ieee.org/abstract/document/8731027" className="text-teal-600 hover:underline" target="_blank" rel="noopener noreferrer">Link</a>
              </p>
            </div>
            
            {/* More conference papers here */}
            <div className="text-sm text-slate-700 pl-4 border-l-2 border-slate-200 py-1">
              <p>
                Shaik Wasef, Selma Amara, <span className="underline">Meshal Alawein</span>, and Hossein Fariborzi. "Multibit memory cells based on spin-orbit torque driven magnetization switching of nanomagnets with configurational anisotropy," in <em>Proc. 2nd IEEE Electron Devices Technology and Manufacturing Conf.</em>, pp. 298--300, 2018 {' '}
                <a href="https://ieeexplore.ieee.org/abstract/document/8421415/" className="text-teal-600 hover:underline" target="_blank" rel="noopener noreferrer">Link</a>
              </p>
            </div>
            
            <div className="text-sm text-slate-700 pl-4 border-l-2 border-slate-200 py-1">
              <p>
                <span className="underline">Meshal Alawein</span> and Hossein Fariborzi, "A general circuit model for spintronic devices under electric and magnetic fields," in <em>Proc. 47th European Solid-State Device Research Conf.</em>, pp. 94--97, 2017 {' '}
                <a href="http://ieeexplore.ieee.org/document/8066600/" className="text-teal-600 hover:underline" target="_blank" rel="noopener noreferrer">Link</a>
              </p>
            </div>
            
            <div className="text-sm text-slate-700 pl-4 border-l-2 border-slate-200 py-1">
              <p>
                <span className="underline">Meshal Alawein</span> and Hossein Fariborzi, "Improved circuit model for all-spin logic," in <em>Proc. 12th IEEE/ACM Int. Symp. Nanoscale Architectures</em>, pp. 135--140, 2016 {' '}
                <a href="http://ieeexplore.ieee.org/document/7568640/" className="text-teal-600 hover:underline" target="_blank" rel="noopener noreferrer">Link</a>
              </p>
            </div>
          </div>
        )}
        
        {activeTab === 'working' && (
          <div className="mt-4 space-y-4">
            <div className="text-sm text-slate-700 pl-4 border-l-2 border-slate-200 py-1">
              <p>
                <span className="underline">Meshal Alawein</span>, Joel W. Ager, Ali Javey, and D. C. Chrzan, "Spin-orbit coupling effects in rippled transition metal dichalcogenide monolayers: symmetry breaking and dark exciton formation," being prepared for submission to <em>Physical Review B</em>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Publications;