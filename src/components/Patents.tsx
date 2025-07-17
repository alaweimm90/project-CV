import { Lightbulb } from 'lucide-react';
import SectionHeading from './SectionHeading';

const Patents = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <SectionHeading icon={<Lightbulb />} title="Patents and Inventions" />
      
      <div className="mt-6 space-y-6">
        <div>
          <h3 className="text-lg font-bold text-slate-800 mb-3">U.S. Patents</h3>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="pl-4 border-l-2 border-slate-200 py-1">
              <span className="underline">Meshal Alawein</span>, and Hossein Fariborzi, "A method to implement multilevel nanomagnetic logic" (in process)
            </li>
            <li className="pl-4 border-l-2 border-slate-200 py-1">
              <span className="underline">Meshal Alawein</span>, and Hossein Fariborzi, "Nonvolatile multistate memories using nanomagnets with configurational anisotropy" (in process)
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-bold text-slate-800 mb-3">Software and Simulation Tools</h3>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="pl-4 border-l-2 border-slate-200 py-1">
              <span className="underline">Meshal Alawein</span>, "Repz, your AI-based physical coach"
            </li>
            <li className="pl-4 border-l-2 border-slate-200 py-1">
              <span className="underline">Meshal Alawein</span>, and Hossein Fariborzi, "Stochastic magnetization dynamics and spin circuits simulator"
            </li>
            <li className="pl-4 border-l-2 border-slate-200 py-1">
              <span className="underline">Meshal Alawein</span>, Abdullah Al-Nafisah, and Hossein Fariborzi, "Verilog-A modules of stochastic magnetization dynamics and spin circuits"
            </li>
            <li className="pl-4 border-l-2 border-slate-200 py-1">
              <span className="underline">Meshal Alawein</span>, Mohammed Al-Muhaimeed, Muad Al-Manea, Abdul-Wahab Baghdadi, and Sameh Sorour, "RSS based indoor localization software with Java open-source code and Android"
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Patents;