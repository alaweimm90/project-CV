import { Users } from 'lucide-react';
import SectionHeading from './SectionHeading';

const References = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <SectionHeading icon={<Users />} title="References" />
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-slate-800">Ali Javey</h3>
          <p className="text-sm text-slate-700">Professor, Electrical Engineering and Computer Sciences</p>
          <p className="text-sm text-slate-700">Professor, Materials Science and Engineering</p>
          <p className="text-sm text-slate-700">University of California, Berkeley</p>
          <p className="text-sm mt-2">
            <span className="font-semibold">E-mail:</span>{' '}
            <a href="mailto:ajavey@berkeley.edu" className="text-teal-600 hover:underline">ajavey@berkeley.edu</a>
          </p>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-slate-800">Daryl Chrzan</h3>
          <p className="text-sm text-slate-700">Professor, Materials Science and Engineering</p>
          <p className="text-sm text-slate-700">University of California, Berkeley</p>
          <p className="text-sm mt-2">
            <span className="font-semibold">E-mail:</span>{' '}
            <a href="mailto:dcchrzan@berkeley.edu" className="text-teal-600 hover:underline">dcchrzan@berkeley.edu</a>
          </p>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-slate-800">Hossein Fariborzi</h3>
          <p className="text-sm text-slate-700">Assistant Professor, Electrical and Computer Engineering</p>
          <p className="text-sm text-slate-700">King Abdullah University of Science and Technology</p>
          <p className="text-sm mt-2">
            <span className="font-semibold">E-mail:</span>{' '}
            <a href="mailto:hossein.fariborzi@kaust.edu.sa" className="text-teal-600 hover:underline">hossein.fariborzi@kaust.edu.sa</a>
          </p>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-slate-800">Aurelien Manchon</h3>
          <p className="text-sm text-slate-700">Professor, Physics</p>
          <p className="text-sm text-slate-700">Centre Interdisciplinaire de Nanoscience de Marseille</p>
          <p className="text-sm mt-2">
            <span className="font-semibold">E-mail:</span>{' '}
            <a href="mailto:aurelien.manchon@univ-amu.fr" className="text-teal-600 hover:underline">aurelien.manchon@univ-amu.fr</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default References;