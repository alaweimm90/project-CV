import { MessageSquare } from 'lucide-react';
import SectionHeading from './SectionHeading';

const Conferences = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <SectionHeading icon={<MessageSquare />} title="Conference Activity and Participation" />
      
      <div className="mt-6 space-y-6">
        <div>
          <h3 className="text-lg font-bold text-slate-800 mb-3">Papers Presented</h3>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="pl-4 border-l-2 border-slate-200 py-1">
              "Theory of the Electronic Structure of Buckled MoS₂," TMS Annual Meeting & Exhibition, 2025
            </li>
            <li className="pl-4 border-l-2 border-slate-200 py-1">
              "An integreated and highly-sensitive magnetic tunnel junction cytometer," International Conference on Magnetism (ICM), 2018{' '}
              <a href="https://www.dropbox.com/s/nqj46eq3xyulqic/ICM2018.pdf?dl=0" className="text-teal-600 hover:underline" target="_blank" rel="noopener noreferrer">Poster</a>
            </li>
            <li className="pl-4 border-l-2 border-slate-200 py-1">
              "Highly-sensitive magnetic tunnel junction based flow cytometer," IEEE International Symposium on Medical Measurements & Applications (MeMeA), 2018{' '}
              <a href="https://www.dropbox.com/s/irotg8q11zlnjvv/MEMEA.pdf?dl=0" className="text-teal-600 hover:underline" target="_blank" rel="noopener noreferrer">Presentation</a>
            </li>
            <li className="pl-4 border-l-2 border-slate-200 py-1">
              "A general circuit model for spintronic devices under electric and magnetic fields," 47th European Solid-State Device Research Conference (ESSDERC), 2017{' '}
              <a href="https://www.dropbox.com/s/bck2ltlqe2duv9s/ESSDERC2017.pdf?dl=0" className="text-teal-600 hover:underline" target="_blank" rel="noopener noreferrer">Presentation</a>
            </li>
            <li className="pl-4 border-l-2 border-slate-200 py-1">
              "Dynamic circuit model for spintronic devices," 30th Eurosensors Conference, 2016{' '}
              <a href="https://www.dropbox.com/s/0ct1oqbk97z1kwi/EUROSENSORS2016.pdf?dl=0" className="text-teal-600 hover:underline" target="_blank" rel="noopener noreferrer">Poster</a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-bold text-slate-800 mb-3">Campus and Departmental Talks</h3>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="pl-4 border-l-2 border-slate-200 py-1">
              <span className="underline">Meshal Alawein</span>, "Strain-induced flat bands and lateral heterostructures in rippled TMD monolayers," PhD Dissertation Defense, University of California, Berkeley, 2025
            </li>
            <li className="pl-4 border-l-2 border-slate-200 py-1">
              "Spintronic devices for energy-efficient memory and computing," KAUST-CEMSE Seminar, 2017{' '}
              <a href="https://www.dropbox.com/s/6kkyd9i1qe64y0i/CEMSESeminar.pdf?dl=0" className="text-teal-600 hover:underline" target="_blank" rel="noopener noreferrer">Presentation</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Conferences;