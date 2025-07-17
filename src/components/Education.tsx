import { GraduationCap } from 'lucide-react';
import SectionHeading from './SectionHeading';

const Education = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <SectionHeading icon={<GraduationCap />} title="Education" />
      
      <div className="space-y-8">
        {/* PhD */}
        <div className="border-l-4 border-teal-600 pl-6">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-3">
            <div>
              <h3 className="text-xl font-bold text-slate-800">University of California, Berkeley</h3>
              <p className="text-lg text-slate-700 font-medium">Ph.D. in Electrical Engineering and Computer Sciences</p>
            </div>
            <span className="text-sm text-slate-600 bg-slate-100 px-3 py-1 rounded-full mt-2 lg:mt-0">
              September 2019 – May 2025
            </span>
          </div>
          <ul className="space-y-2 text-slate-600">
            <li className="flex items-start gap-2">
              <span className="text-teal-600 mt-1">•</span>
              <div>
                <strong>Dissertation:</strong> "Strain-Induced Flat Bands and Lateral Heterostructures: Hole Localization in Rippled Monolayer TMDs"
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-600 mt-1">•</span>
              <div>
                <strong>Advisors:</strong> Dr. Ali Javey, Dr. Daryl Chrzan
              </div>
            </li>
          </ul>
        </div>

        {/* Masters */}
        <div className="border-l-4 border-teal-600 pl-6">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-3">
            <div>
              <h3 className="text-xl font-bold text-slate-800">King Abdullah University of Science and Technology</h3>
              <p className="text-lg text-slate-700 font-medium">M.S. in Electrical Engineering</p>
              <p className="text-sm text-teal-600 font-semibold">GPA: 4.0/4.0</p>
            </div>
            <span className="text-sm text-slate-600 bg-slate-100 px-3 py-1 rounded-full mt-2 lg:mt-0">
              September 2014 – May 2016
            </span>
          </div>
          <ul className="space-y-2 text-slate-600">
            <li className="flex items-start gap-2">
              <span className="text-teal-600 mt-1">•</span>
              <div>
                <strong>Thesis:</strong> "Circuit Simulation of All-Spin Logic"
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-600 mt-1">•</span>
              <div>
                <strong>Advisor:</strong> Dr. Hossein Fariborzi
              </div>
            </li>
          </ul>
        </div>

        {/* Bachelors */}
        <div className="border-l-4 border-teal-600 pl-6">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-3">
            <div>
              <h3 className="text-xl font-bold text-slate-800">King Fahd University of Petroleum and Minerals</h3>
              <p className="text-lg text-slate-700 font-medium">B.S. in Electrical Engineering (Minor: Mathematics)</p>
              <p className="text-sm text-teal-600 font-semibold">Major GPA: 3.89/4.0 • Minor GPA: 3.9/4.0</p>
            </div>
            <span className="text-sm text-slate-600 bg-slate-100 px-3 py-1 rounded-full mt-2 lg:mt-0">
              September 2009 – May 2014
            </span>
          </div>
          <ul className="space-y-2 text-slate-600">
            <li className="flex items-start gap-2">
              <span className="text-teal-600 mt-1">•</span>
              <div>
                <strong>Senior Project:</strong> "Indoor Localization with Limited Deployment Effort"
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;