import { Languages as LanguagesIcon } from 'lucide-react';
import SectionHeading from './SectionHeading';

const Languages = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <SectionHeading icon={<LanguagesIcon />} title="Languages" />
      
      <div className="mt-6">
        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-sm text-slate-700">
            <span className="text-slate-400">•</span>
            <span>Arabic (native)</span>
          </li>
          
          <li className="flex items-center gap-2 text-sm text-slate-700">
            <span className="text-slate-400">•</span>
            <span>English (fluent)</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Languages;