import { Award } from 'lucide-react';
import SectionHeading from './SectionHeading';

const Awards = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <SectionHeading icon={<Award />} title="Honors and Awards" />
      
      <div className="mt-6">
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-sm text-slate-700">
            <span className="text-slate-400 mt-1">•</span>
            <div className="flex flex-col md:flex-row md:justify-between md:w-full">
              <span>Saudi Arabian Cultural Mission (SACM) Scholarship for Elite Students</span>
              <span className="text-slate-500">2019 – 2025</span>
            </div>
          </li>
          
          <li className="flex items-start gap-2 text-sm text-slate-700">
            <span className="text-slate-400 mt-1">•</span>
            <div className="flex flex-col md:flex-row md:justify-between md:w-full">
              <span>Nominee for the Best Teaching Assistant Award at KAUST</span>
              <span className="text-slate-500">2015 – 2019</span>
            </div>
          </li>
          
          <li className="flex items-start gap-2 text-sm text-slate-700">
            <span className="text-slate-400 mt-1">•</span>
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:w-full">
                <span>Future Generation Competition Judge's Choice Award & People's Choice Award</span>
                <span className="text-slate-500">2019</span>
              </div>
              <span className="text-xs text-slate-600 italic block mt-1">
                Project: "MRAM: towards energy efficient memory technology with multi-state memory cells"
              </span>
            </div>
          </li>
          
          <li className="flex items-start gap-2 text-sm text-slate-700">
            <span className="text-slate-400 mt-1">•</span>
            <div className="flex flex-col md:flex-row md:justify-between md:w-full">
              <span>KAUST Graduate Fellowship</span>
              <span className="text-slate-500">2014 – 2018</span>
            </div>
          </li>
          
          <li className="flex items-start gap-2 text-sm text-slate-700">
            <span className="text-slate-400 mt-1">•</span>
            <div className="flex flex-col md:flex-row md:justify-between md:w-full">
              <span>Invited KFUPM Student Delegate to Singapore and Malaysia</span>
              <span className="text-slate-500">2014</span>
            </div>
          </li>
          
          <li className="flex items-start gap-2 text-sm text-slate-700">
            <span className="text-slate-400 mt-1">•</span>
            <div className="flex flex-col md:flex-row md:justify-between md:w-full">
              <span>KFUPM Dean's List</span>
              <span className="text-slate-500">2010 – 2014</span>
            </div>
          </li>
          
          <li className="flex items-start gap-2 text-sm text-slate-700">
            <span className="text-slate-400 mt-1">•</span>
            <div className="flex flex-col md:flex-row md:justify-between md:w-full">
              <span>National High Schools Award for Excellence</span>
              <span className="text-slate-500">2007 – 2009</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Awards;