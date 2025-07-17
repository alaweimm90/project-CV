import { School } from 'lucide-react';
import SectionHeading from './SectionHeading';

const Teaching = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <SectionHeading icon={<School />} title="Teaching and Mentoring" />
      
      <div className="mt-6 space-y-6">
        <div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
            <div>
              <h3 className="text-lg font-bold text-slate-800">King Abdullah University of Science and Technology</h3>
              <p className="text-base italic text-slate-700">Mentor for Domestic and International Interns, Integrated Circuits and Systems Group</p>
            </div>
            <p className="text-sm text-slate-600 md:text-right">2015 – 2019</p>
          </div>
          <p className="text-sm text-slate-600 pl-4">
            Projects: Multistate spintronic memories based on spin-orbit torque switching, dense nanomagnetic logic using shape-engineered nanomagnets, development of Verilog-A modules for spintronic devices, and design of wearable electronics
          </p>
        </div>
        
        <div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
            <p className="text-base italic text-slate-700">Mentor for the Saudi Research Science Institute Annual Summer Program</p>
            <p className="text-sm text-slate-600 md:text-right">2015 – 2017</p>
          </div>
          <p className="text-sm text-slate-600 pl-4">
            Projects: OOMMF simulations of multistate memories and MEMS+ simulations of NEM relays
          </p>
        </div>
        
        <div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
            <p className="text-base italic text-slate-700">Teaching Assistant</p>
            <p className="text-sm text-slate-600 md:text-right">2015 – 2019</p>
          </div>
          <p className="text-sm text-slate-600 pl-4">
            Courses: VLSI Design and Monolithic Amplifier Circuits
          </p>
        </div>
        
        <div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
            <div>
              <h3 className="text-lg font-bold text-slate-800">King Fahd University of Petroleum and Minerals</h3>
              <p className="text-base italic text-slate-700">Teaching Assistant</p>
            </div>
            <p className="text-sm text-slate-600 md:text-right">2010 – 2014</p>
          </div>
          <p className="text-sm text-slate-600 pl-4">
            Courses: Calculus III, Elements of Differential Equations, Engineering Mathematics, Probabilistic Methods in Electrical Engineering, Introduction to Numerical Computing, and Thermodynamics I
          </p>
        </div>
      </div>
    </div>
  );
};

export default Teaching;