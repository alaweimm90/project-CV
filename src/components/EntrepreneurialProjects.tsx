import { Briefcase } from 'lucide-react';
import SectionHeading from './SectionHeading';

const EntrepreneurialProjects = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <SectionHeading icon={<Briefcase />} title="Entrepreneurial Projects" />
      
      <div className="space-y-6 mt-6">
        <div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
            <div>
              <h3 className="text-lg font-bold text-slate-800">Repz – Intelligent Physique Coaching</h3>
              <p className="text-base italic text-slate-700">Founder and Developer</p>
            </div>
            <p className="text-sm text-slate-600 md:text-right">2025</p>
          </div>
          
          <ul className="text-sm text-slate-600 space-y-1 pl-4">
            <li>• Developed a full-stack self-coaching fitness app integrating training, nutrition, PED tracking, and biomarker analytics.</li>
            <li>• Built with React, Tailwind CSS, Recharts, Electron (PWA), Python, and Firebase.</li>
            <li>• Designed advanced libraries for compound protocols, compliance automation, and user health metrics.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EntrepreneurialProjects;