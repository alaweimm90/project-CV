import { User } from 'lucide-react';
import SectionHeading from './SectionHeading';

const ProfessionalProfile = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <SectionHeading icon={<User />} title="Professional Profile" />
      
      <div className="text-slate-700 leading-relaxed space-y-4">
        <p>
          Computational scientist and quantum materials theorist with <strong>11+ years of experience</strong> in developing scalable algorithms, scientific machine learning models, and high-throughput simulation pipelines for quantum materials discovery and next-generation device applications.
        </p>
        
        <p>
          Expertise in physics-based modeling, distributed computing, and intelligent automation, with demonstrated success in reducing HPC job runtimes and computational costs through parallelization and workflow optimization.
        </p>
        
        <p>
          Proficient in building open-source tools for processing TB-scale datasets across distributed systems, with computational frameworks adopted by research teams in academia, national laboratories, and industry.
        </p>
        
        <p>
          Deep expertise in first-principles simulations, statistical modeling, and algorithm design, bridging quantum theory, materials science, and data-driven methods for <strong>quantum computing</strong>, <strong>advanced materials</strong>, and <strong>AI/ML applications</strong>.
        </p>
      </div>
    </div>
  );
};

export default ProfessionalProfile;