import { BookOpen } from 'lucide-react';
import SectionHeading from './SectionHeading';

const Skills = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <SectionHeading icon={<BookOpen />} title="Technical and Computer Skills" />
      
      <div className="mt-6 space-y-4">
        <div>
          <h3 className="text-base font-bold text-slate-800">Languages</h3>
          <p className="text-sm text-slate-600 mt-1">
            Python, C++, Java, IBM x86 Assembly Language, Arduino, Verilog-A, HDL, MATLAB, Mathematica, Maple
          </p>
        </div>
        
        <div>
          <h3 className="text-base font-bold text-slate-800">DFT and Atomistic Modeling</h3>
          <p className="text-sm text-slate-600 mt-1">
            SIESTA, LAMMPS, VASP, Quantum ESPRESSO, OOMMF, MuMax3, MEMS+, COMSOL
          </p>
        </div>
        
        <div>
          <h3 className="text-base font-bold text-slate-800">Postprocessing Tools</h3>
          <p className="text-sm text-slate-600 mt-1">
            Custom Python toolset for SIESTA, Pymatgen, ASE, matplotlib, NumPy, pandas, shell scripting
          </p>
        </div>
        
        <div>
          <h3 className="text-base font-bold text-slate-800">Web and Development</h3>
          <p className="text-sm text-slate-600 mt-1">
            React, Tailwind CSS, Recharts, Electron, Firebase, Git
          </p>
        </div>
        
        <div>
          <h3 className="text-base font-bold text-slate-800">Typesetting</h3>
          <p className="text-sm text-slate-600 mt-1">
            Mastery of LaTeX in producing scientific documents and illustrations
          </p>
        </div>
        
        <div>
          <h3 className="text-base font-bold text-slate-800">Media and web editing software</h3>
          <p className="text-sm text-slate-600 mt-1">
            Photoshop CC, Illustrator CC, Vegas Pro
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;