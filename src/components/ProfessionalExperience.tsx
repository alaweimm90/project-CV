import { FlaskConical } from 'lucide-react';
import SectionHeading from './SectionHeading';

const ResearchExperience = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <SectionHeading icon={<FlaskConical />} title="Research Experience" />
      
      <div className="space-y-8 mt-6">
        <div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
            <div>
              <h3 className="text-lg font-bold text-slate-800">University of California, Berkeley</h3>
              <h4 className="text-base font-bold text-slate-700">Lawrence Berkeley National Laboratory (LBNL)</h4>
              <p className="text-base italic text-slate-700">Graduate Student Researcher (Joint Appointment)</p>
            </div>
            <p className="text-sm text-slate-600 md:text-right">2019 – 2025</p>
          </div>
          
          <div className="text-sm text-slate-600 space-y-2">
            <p className="text-slate-700">
              <span className="font-semibold">Overview:</span> Conducted first-principles simulations to explore strain-induced phenomena in 2D materials, with a particular focus on the emergence of flat bands and lateral heterostructures in buckled transition metal dichalcogenide (TMD) monolayers. Research combined multiscale modeling (LAMMPS + SIESTA) and electronic structure analysis to demonstrate tunable quantum localization via mechanical deformation.
            </p>
            
            <div className="pl-4">
              <p className="font-semibold text-slate-700 mt-2">Key contributions:</p>
              <ul className="space-y-1 mt-1">
                <li>• <span className="font-semibold">Flat band formation in rippled MoS₂:</span> Discovered that uniaxial compression leads to band flattening and valence band localization near curvature maxima, forming a strain-defined lateral heterostructure without chemical doping or interlayer stacking.</li>
                <li>• <span className="font-semibold">Effective mass and band curvature analysis:</span> Quantified anisotropic effective masses of electrons and holes under varying compressive strains, revealing that hole transport becomes quasi-one-dimensional at critical rippling thresholds.</li>
                <li>• <span className="font-semibold">Generalization to other TMDs:</span> Demonstrated that WS₂, MoSe₂, and WSe₂ exhibit similar localization behavior, with sulfur-based TMDs showing flat bands at smaller compressions than selenium-based analogs.</li>
                <li>• <span className="font-semibold">First-principles simulation pipeline:</span> Developed a multiscale workflow combining REBO-based LAMMPS simulations with DFT calculations in SIESTA to model mechanical deformation and its impact on electronic properties.</li>
                <li>• <span className="font-semibold">Curvature-bandgap correlation:</span> Identified and quantified the relationship between local curvature and bandgap modulation, showing that higher curvature leads to stronger localization and reduced bandgap.</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
            <div>
              <h3 className="text-lg font-bold text-slate-800">King Abdullah University of Science and Technology</h3>
              <p className="text-base italic text-slate-700">Graduate Researcher</p>
            </div>
            <p className="text-sm text-slate-600 md:text-right">2014 – 2019</p>
          </div>
          
          <div className="text-sm text-slate-600 space-y-2">
            <p className="text-slate-700">
              <span className="font-semibold">Overview:</span> Conducted graduate-level research in Dr. Hossein Fariborzi's laboratory. The research included, but was not limited to, circuit modeling of spintronic devices, theoretical and experimental studies of multistate nanomagnetic devices, and investigations of spin orbitronics, spin caloritronics, and antiferromagnetic spintronic devices for beyond-CMOS applications.
            </p>
            
            <div className="pl-4">
              <p className="font-semibold text-slate-700 mt-2">Specific projects:</p>
              <ul className="space-y-1 mt-1">
                <li>• <span className="font-semibold">Circuit models of spintronic devices:</span> Derivations of general equivalent circuit models of diffusive spintronic devices under the application of electric and magnetic fields</li>
                <li>• <span className="font-semibold">Multistate nanomagnetic logic (NML):</span> Proposals, OOMMF simulations, and theoretical investigations of multistate NML based on nanomagnets with configurational anisotropy</li>
                <li>• <span className="font-semibold">Spin Hall effect (SHE) driven multistate memories:</span> Proposals, OOMMF simulations, and fabrication of multistate spintronic memories based on SHE driven nanomagnets with configurational anisotropy</li>
                <li>• <span className="font-semibold">Magnetic tunnel junction (MTJ)-based microfluidic biosensing array:</span> Fabrication and COMSOL simulations of optimized CoFeB/MgO/CoFeB sputtered MTJs for the detection of magnetically labeled biological cells</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
            <div>
              <h3 className="text-lg font-bold text-slate-800">Baker Hughes</h3>
              <p className="text-base italic text-slate-700">AMO Engineer Intern</p>
            </div>
            <p className="text-sm text-slate-600 md:text-right">2013</p>
          </div>
          
          <div className="text-sm text-slate-600">
            <p>Assembly, Maintenance & Overhaul (AMO) engineer with responsibilities in preventive maintenance, troubleshooting, and function-testing of various electronics/electro-mechanical based instruments</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchExperience;