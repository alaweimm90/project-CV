import { Code } from 'lucide-react';
import SectionHeading from './SectionHeading';

const SoftwareTools = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <SectionHeading icon={<Code />} title="Software Tools & Research Frameworks" />
      
      <div className="mt-6 space-y-6">
        <div>
          <h3 className="text-lg font-bold text-slate-800 mb-3">Open-Source Scientific Computing Tools</h3>
          <ul className="space-y-3 text-sm text-slate-700">
            <li className="pl-4 border-l-2 border-slate-200 py-2">
              <div className="font-semibold text-slate-800">QMatRun – HPC Automation (Bash/Python/MATLAB)</div>
              <p className="mt-1">Workflow engine for high-throughput DFT/MD simulations on HPC clusters; adopted by 15+ research institutions globally</p>
            </li>
            
            <li className="pl-4 border-l-2 border-slate-200 py-2">
              <div className="font-semibold text-slate-800">QMatPost – Postprocessing Toolkit (Python/Mathematica)</div>
              <p className="mt-1">Analysis suite for MD–DFT workflows supporting band structure visualization, strain-field mapping, and statistical analysis; 1000+ downloads</p>
            </li>
            
            <li className="pl-4 border-l-2 border-slate-200 py-2">
              <div className="font-semibold text-slate-800">QSpinLogic – Spintronic Circuit Simulator (MATLAB/Cadence)</div>
              <p className="mt-1">Stochastic simulator for modeling multistate spin-based logic and quantum-inspired device architectures</p>
            </li>
            
            <li className="pl-4 border-l-2 border-slate-200 py-2">
              <div className="font-semibold text-slate-800">QMagLogic – Nanomagnetic Logic Framework (OOMMF/MuMax³)</div>
              <p className="mt-1">Micromagnetic simulation suite for reconfigurable spintronic logic and multistate device analysis</p>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-bold text-slate-800 mb-3">Entrepreneurial Applications</h3>
          <ul className="space-y-3 text-sm text-slate-700">
            <li className="pl-4 border-l-2 border-slate-200 py-2">
              <div className="font-semibold text-slate-800">REPZ – AI-Driven Fitness Platform</div>
              <p className="mt-1">Full-stack PWA with ML integration using React (Next.js), Tailwind CSS, and IndexedDB with analytics dashboard and behavioral clustering for personalized recommendations</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SoftwareTools;