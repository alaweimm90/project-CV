import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  GraduationCap, 
  Download,
  User,
  Target,
  Lightbulb,
  Cpu,
  Briefcase,
  FileText,
  Code,
  MessageSquare,
  Award,
  School,
  DollarSign,
  Users,
  CheckCircle,
  Globe,
  ExternalLink
} from 'lucide-react';

const Template5 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-light mb-4 tracking-wide">Meshal Alawein</h1>
            <p className="text-xl text-blue-300 mb-8 font-light">
              Quantum Materials Theorist | Computational Scientist | Scientific ML Engineer
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
                <MapPin className="mx-auto mb-2 text-blue-300" size={20} />
                <p className="text-sm">Berkeley, CA 94703</p>
              </div>
              
              <a href="mailto:meshal@berkeley.edu" className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 group">
                <Mail className="mx-auto mb-2 text-blue-300 group-hover:text-blue-200" size={20} />
                <p className="text-sm">meshal@berkeley.edu</p>
              </a>
              
              <a href="tel:+15102075741" className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 group">
                <Phone className="mx-auto mb-2 text-blue-300 group-hover:text-blue-200" size={20} />
                <p className="text-sm">+1-510-207-5741</p>
              </a>
              
              <a href="https://linkedin.com/in/meshal-alawein" target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 group">
                <Linkedin className="mx-auto mb-2 text-blue-300 group-hover:text-blue-200" size={20} />
                <p className="text-sm">LinkedIn</p>
              </a>
              
              <a href="https://scholar.google.com/citations?user=IB_E6GQAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 group">
                <GraduationCap className="mx-auto mb-2 text-blue-300 group-hover:text-blue-200" size={20} />
                <p className="text-sm">Google Scholar</p>
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        {/* Professional Profile */}
        <section className="mb-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
              <div className="flex items-center gap-3">
                <Target size={24} />
                <h2 className="text-2xl font-bold">Professional Profile</h2>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-700 leading-relaxed text-lg">
                Computational scientist and quantum materials theorist with <strong>11+ years of experience</strong> in developing scalable algorithms, scientific machine learning models, and high-throughput simulation pipelines for quantum materials discovery and next-generation device applications. Expertise in physics-based modeling, distributed computing, and intelligent automation, with demonstrated success in reducing HPC job runtimes and computational costs through parallelization and workflow optimization. Proficient in building open-source tools for processing TB-scale datasets across distributed systems, with computational frameworks adopted by research teams in academia, national laboratories, and industry. Deep expertise in first-principles simulations, statistical modeling, and algorithm design, bridging quantum theory, materials science, and data-driven methods for <strong>quantum computing</strong>, <strong>advanced materials</strong>, and <strong>AI/ML applications</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Research Interests */}
        <section className="mb-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6">
              <div className="flex items-center gap-3">
                <Lightbulb size={24} />
                <h2 className="text-2xl font-bold">Research Interests</h2>
              </div>
            </div>
            <div className="p-8">
              <div className="flex flex-wrap gap-2">
                {[
                  'Quantum materials theory', 'Flat band engineering', 'Strain-engineered 2D semiconductors',
                  'Spintronics', 'Electronic structure theory', 'High-performance computing',
                  'Scientific machine learning', 'Materials informatics', 'Quantum device physics',
                  'Computational materials science', 'Many-body physics', 'Transport theory',
                  'Mesoscopic physics', 'Automation workflows', 'Data analytics'
                ].map((interest, index) => (
                  <span key={index} className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-violet-600 text-white p-6">
              <div className="flex items-center gap-3">
                <GraduationCap size={24} />
                <h2 className="text-2xl font-bold">Education</h2>
              </div>
            </div>
            <div className="p-8 space-y-8">
              {/* PhD */}
              <div className="border-l-4 border-purple-500 pl-6">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">University of California, Berkeley</h3>
                    <p className="text-lg text-gray-700 font-medium">Ph.D. in Electrical Engineering and Computer Sciences</p>
                  </div>
                  <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full mt-2 lg:mt-0">
                    September 2019 – May 2025
                  </span>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <div>
                      <strong>Dissertation:</strong> "Strain-Induced Flat Bands and Lateral Heterostructures: Hole Localization in Rippled Monolayer TMDs"
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <div>
                      <strong>Advisors:</strong> Dr. Ali Javey, Dr. Daryl Chrzan
                    </div>
                  </li>
                </ul>
              </div>

              {/* Masters */}
              <div className="border-l-4 border-purple-500 pl-6">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">King Abdullah University of Science and Technology</h3>
                    <p className="text-lg text-gray-700 font-medium">M.S. in Electrical Engineering</p>
                    <p className="text-sm text-purple-600 font-semibold">GPA: 4.0/4.0</p>
                  </div>
                  <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full mt-2 lg:mt-0">
                    September 2014 – May 2016
                  </span>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <div>
                      <strong>Thesis:</strong> "Circuit Simulation of All-Spin Logic"
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <div>
                      <strong>Advisor:</strong> Dr. Hossein Fariborzi
                    </div>
                  </li>
                </ul>
              </div>

              {/* Bachelors */}
              <div className="border-l-4 border-purple-500 pl-6">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">King Fahd University of Petroleum and Minerals</h3>
                    <p className="text-lg text-gray-700 font-medium">B.S. in Electrical Engineering (Minor: Mathematics)</p>
                    <p className="text-sm text-purple-600 font-semibold">Major GPA: 3.89/4.0 • Minor GPA: 3.9/4.0</p>
                  </div>
                  <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full mt-2 lg:mt-0">
                    September 2009 – May 2014
                  </span>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <div>
                      <strong>Senior Project:</strong> "Indoor Localization with Limited Deployment Effort"
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Expertise */}
        <section className="mb-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-6">
              <div className="flex items-center gap-3">
                <Cpu size={24} />
                <h2 className="text-2xl font-bold">Technical Expertise</h2>
              </div>
            </div>
            <div className="p-8 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Quantum Materials & Ab Initio Theory</h3>
                <p className="text-gray-600">
                  DFT, DFT+U, TDDFT, DFPT, GW approximation, Bethe-Salpeter equation (BSE), Hubbard model, Boltzmann transport, Wannier functions, exact diagonalization, many-body physics, electronic structure theory
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Scientific Computing & Numerical Methods</h3>
                <p className="text-gray-600">
                  Iterative solvers, PDE solvers, optimization algorithms, uncertainty quantification, convergence analysis, statistical analysis, physics-informed modeling, numerical methods, mathematical modeling
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Machine Learning & Scientific ML</h3>
                <p className="text-gray-600">
                  Supervised learning, regression and classification, statistical modeling, physics-informed ML, materials informatics, scikit-learn, introductory experience with PyTorch and TensorFlow, data analytics
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">High-Performance Computing & Programming</h3>
                <p className="text-gray-600">
                  Python (NumPy, SciPy, pandas, matplotlib, ASE, Pymatgen), C++, MATLAB, Mathematica, Bash, distributed computing, MPI, OpenMP, SLURM, job scheduling, workflow automation
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Simulation Tools & Platforms</h3>
                <p className="text-gray-600">
                  VASP, Quantum ESPRESSO, SIESTA, Wannier90, LAMMPS, OOMMF, MuMax³, COMSOL, HFSS, OVITO, AiiDA, quantum simulations, multiscale modeling
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Quantum Computing & Device Physics</h3>
                <p className="text-gray-600">
                  Quantum materials platforms, van der Waals heterostructures, topological insulators, superconductivity, spin qubits, quantum dots, defect centers, silicon photonics, cryogenic electronics, quantum sensing, spintronics
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-6">
              <div className="flex items-center gap-3">
                <Briefcase size={24} />
                <h2 className="text-2xl font-bold">Professional Experience</h2>
              </div>
            </div>
            <div className="p-8 space-y-8">
              {/* LBNL */}
              <div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Lawrence Berkeley National Laboratory</h3>
                    <p className="text-lg text-gray-700 font-medium">Scientific Computing Researcher</p>
                  </div>
                  <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full mt-2 md:mt-0">
                    August 2022 – May 2025
                  </span>
                </div>
                <ul className="space-y-2 text-gray-600 pl-4">
                  <li>• <strong>Interdisciplinary Research Program Leadership:</strong> Led a DOE-funded quantum materials discovery project, coordinating cross-institutional teams and integrating first-principles simulations with data-driven science and predictive modeling</li>
                  <li>• <strong>Production HPC Infrastructure:</strong> Built SLURM-based distributed frameworks to automate 200+ weekly simulations with fault tolerance and validation layers, enhancing reproducibility and enabling rapid debugging</li>
                  <li>• <strong>Scalable Computational Framework Development:</strong> Engineered Python/MATLAB automation pipelines on HPC clusters (Savio, Lawrencium) to process TB-scale data across 50–200 parallel jobs, reducing compute time from months to days via algorithmic optimization and intelligent scheduling</li>
                </ul>
              </div>

              {/* UC Berkeley */}
              <div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">University of California, Berkeley</h3>
                    <p className="text-lg text-gray-700 font-medium">Graduate Research Scientist</p>
                  </div>
                  <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full mt-2 md:mt-0">
                    August 2019 – May 2025
                  </span>
                </div>
                <ul className="space-y-2 text-gray-600 pl-4">
                  <li>• <strong>Quantum Materials Discovery:</strong> Discovered strain-induced flat bands in rippled 2D monolayers using multiscale atomistic simulations, revealing tunable bandgaps, exciton localization, and heavy hole transport relevant to quantum computing, superconducting devices, and quantum sensing applications</li>
                  <li>• <strong>Electronic Structure Modeling & Analysis:</strong> Quantified effective mass anisotropy, band alignment, and strain-driven carrier confinement using ab initio methods, enabling predictive design of quantum wells, superlattices, and quantum device architectures</li>
                  <li>• <strong>Data Processing & Analytics Framework:</strong> Built automated frameworks in Python/Mathematica that cut post-processing time by 90%, adopted globally for large-scale data visualization, statistical analysis, and materials informatics workflows</li>
                </ul>
              </div>

              {/* Minatec */}
              <div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Minatec (CEA-Leti)</h3>
                    <p className="text-lg text-gray-700 font-medium">Research Engineer Intern</p>
                  </div>
                  <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full mt-2 md:mt-0">
                    June 2019 – August 2019
                  </span>
                </div>
                <ul className="space-y-2 text-gray-600 pl-4">
                  <li>• <strong>Advanced Memory Technologies:</strong> Developed computational framework combining statistical mechanics and transport models to optimize magnetic memory performance and hybrid circuit design for next-generation storage applications</li>
                </ul>
              </div>

              {/* KAUST */}
              <div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">King Abdullah University of Science and Technology</h3>
                    <p className="text-lg text-gray-700 font-medium">Graduate Research Scientist</p>
                  </div>
                  <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full mt-2 md:mt-0">
                    August 2014 – May 2019
                  </span>
                </div>
                <ul className="space-y-2 text-gray-600 pl-4">
                  <li>• <strong>Spintronic Device Innovation:</strong> Developed first-principles-based models for spintronic logic and memory devices from generalized transport equations; enabled modular circuit-level simulation using validated stochastic solvers (OOMMF, MuMax³)</li>
                  <li>• <strong>Quantum-Inspired Logic Architectures:</strong> Invented reconfigurable nanomagnetic logic architectures with multistate switching at room temperature, demonstrating classical logic operations and quantum gate analogs for beyond-CMOS computing</li>
                  <li>• <strong>Research Leadership & Technology Transfer:</strong> Led publication of 10+ peer-reviewed papers, released open-source modeling tools adopted in research and academic programs, and mentored researchers placed in top-tier graduate programs</li>
                </ul>
              </div>

              {/* Baker Hughes */}
              <div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Baker Hughes</h3>
                    <p className="text-lg text-gray-700 font-medium">AMO Engineer Intern</p>
                  </div>
                  <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full mt-2 md:mt-0">
                    June 2013 – August 2013
                  </span>
                </div>
                <ul className="space-y-2 text-gray-600 pl-4">
                  <li>• <strong>Industrial Engineering Experience:</strong> Assembly, Maintenance & Overhaul (AMO) engineer with responsibilities in preventive maintenance, troubleshooting, and function-testing of electronics and electro-mechanical instruments</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Publications */}
        <section className="mb-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6">
              <div className="flex items-center gap-3">
                <FileText size={24} />
                <h2 className="text-2xl font-bold">Publications</h2>
              </div>
            </div>
            <div className="p-8 space-y-8">
              {/* Journal Articles */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Journal Articles (Peer-Reviewed)</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4 py-2">
                    <p className="text-gray-700">
                      <span className="underline font-medium">M. Alawein</span>, J. W. Ager, A. Javey, D. C. Chrzan, "Strain-induced lateral heterostructures and flat bands in rippled MoS₂," <em>Physical Review Materials</em> 9, L021002 (2025). 
                      <a href="https://doi.org/10.1103/PhysRevMaterials.9.L021002" className="text-green-600 hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        [DOI] <ExternalLink className="inline" size={12} />
                      </a>
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4 py-2">
                    <p className="text-gray-700">
                      N. Alfaraj, K.-H. Li, <span className="underline font-medium">M. Alawein</span>, C. H. Kang, L. Braic, N. C. Zoita, A. E. Kiss, T. K. Ng, B. S. Ooi, "Heteroepitaxial β-Ga₂O₃ on conductive ceramic templates: towards ultrahigh gain deep-ultraviolet photodetection," <em>Advanced Materials Technologies</em>, p.210014 (2021). 
                      <a href="https://onlinelibrary.wiley.com/doi/full/10.1002/admt.202100142" className="text-green-600 hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        [DOI] <ExternalLink className="inline" size={12} />
                      </a>
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4 py-2">
                    <p className="text-gray-700">
                      N. Alfaraj, W. Alghamdi, <span className="underline font-medium">M. Alawein</span>, I. A. Ajia, D. Priante, B. Janjua, H. Sun, T. K. Ng, B. S. Ooi, I. S. Roqan, X. Li, "Time–Energy Quantum Uncertainty–Quantifying the Effectiveness of Surface Defect Passivation Protocols for Low-Dimensional Semiconductors," <em>ACS Applied Electronic Materials</em> 2, 6 (2020). 
                      <a href="https://pubs.acs.org/doi/abs/10.1021/acsaelm.9b00578" className="text-green-600 hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        [DOI] <ExternalLink className="inline" size={12} />
                      </a>
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4 py-2">
                    <p className="text-gray-700">
                      <span className="underline font-medium">M. Alawein</span>, S. Amara, H. Fariborzi, "Multistate nanomagnetic logic using equilateral permalloy triangles," <em>IEEE Magnetics Letters</em> 10, 1–5 (2019). 
                      <a href="https://ieeexplore.ieee.org/document/8642958" className="text-green-600 hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        [DOI] <ExternalLink className="inline" size={12} />
                      </a>
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4 py-2">
                    <p className="text-gray-700">
                      <span className="underline font-medium">M. Alawein</span>, H. Fariborzi, "Circuit models for spintronic devices subject to electric and magnetic fields," <em>IEEE Journal on Exploratory Solid-State Computational Devices and Circuits</em> 4, 60–68 (2018). 
                      <a href="https://ieeexplore.ieee.org/document/8514060" className="text-green-600 hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        [DOI] <ExternalLink className="inline" size={12} />
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Working Papers */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Working Papers & Manuscripts in Preparation</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4 py-2">
                    <p className="text-gray-700">
                      <span className="underline font-medium">M. Alawein</span>, J. W. Ager, A. Javey, D. C. Chrzan, "Spin-orbit coupling effects in rippled transition metal dichalcogenide monolayers: symmetry breaking and dark exciton formation," being prepared for submission to <em>Physical Review B</em>
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-4 py-2">
                    <p className="text-gray-700">
                      A. Hariri, <span className="underline font-medium">M. Alawein</span>, A. Manchon, "Current-driven Rashba field in a magnetic quantum well," submitted to <em>Physical Review B</em>. 
                      <a href="https://arxiv.org/abs/1907.07116" className="text-blue-600 hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        [arXiv] <ExternalLink className="inline" size={12} />
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Conference Publications */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Conference Publications</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-purple-500 pl-4 py-2">
                    <p className="text-gray-700">
                      <span className="underline font-medium">M. Alawein</span>, J. W. Ager, A. Javey, D. C. Chrzan, "Theory of the Electronic Structure of Buckled MoS₂," 2025 TMS Annual Meeting & Exhibition, Symposium: 2D Materials. 
                      <a href="https://www.programmaster.org/PM/PM.nsf/ApprovedAbstracts/0AD780AD8DFC3E6F85258B4D00763C6D?OpenDocument" className="text-purple-600 hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        [Abstract] <ExternalLink className="inline" size={12} />
                      </a>
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4 py-2">
                    <p className="text-gray-700">
                      S. Amara, U. Myrzakhan, <span className="underline font-medium">M. Alawein</span>, A. Alsaui, H. Fariborzi, "Spin-orbit torque driven multi-state device for memory applications," IEEE Electron Devices Technology and Manufacturing Conference (2019). 
                      <a href="https://ieeexplore.ieee.org/abstract/document/8731027" className="text-purple-600 hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        [DOI] <ExternalLink className="inline" size={12} />
                      </a>
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4 py-2">
                    <p className="text-gray-700">
                      <span className="underline font-medium">M. Alawein</span>, H. Fariborzi, "A general circuit model for spintronic devices under electric and magnetic fields," Proc. 47th European Solid-State Device Research Conf., pp. 94–97 (2017). 
                      <a href="http://ieeexplore.ieee.org/document/8066600/" className="text-purple-600 hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        [DOI] <ExternalLink className="inline" size={12} />
                      </a>
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4 py-2">
                    <p className="text-gray-700">
                      <span className="underline font-medium">M. Alawein</span>, H. Fariborzi, "Improved circuit model for all-spin logic," Proc. 12th IEEE/ACM Int. Symp. Nanoscale Architectures, pp. 135–140 (2016). 
                      <a href="http://ieeexplore.ieee.org/document/7568640/" className="text-purple-600 hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        [DOI] <ExternalLink className="inline" size={12} />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Software Tools */}
        <section className="mb-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white p-6">
              <div className="flex items-center gap-3">
                <Code size={24} />
                <h2 className="text-2xl font-bold">Software Tools & Research Frameworks</h2>
              </div>
            </div>
            <div className="p-8 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Open-Source Scientific Computing Tools</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-violet-500 pl-4 py-2">
                    <h4 className="font-bold text-gray-800">QMatRun – HPC Automation (Bash/Python/MATLAB)</h4>
                    <p className="text-gray-600">Workflow engine for high-throughput DFT/MD simulations on HPC clusters</p>
                  </div>
                  
                  <div className="border-l-4 border-violet-500 pl-4 py-2">
                    <h4 className="font-bold text-gray-800">QMatPost – Postprocessing Toolkit (Python/Mathematica)</h4>
                    <p className="text-gray-600">Analysis suite for MD–DFT workflows supporting band structure visualization, strain-field mapping, and statistical analysis</p>
                  </div>
                  
                  <div className="border-l-4 border-violet-500 pl-4 py-2">
                    <h4 className="font-bold text-gray-800">QSpinLogic – Spintronic Circuit Simulator (MATLAB/Cadence)</h4>
                    <p className="text-gray-600">Stochastic simulator for modeling multistate spin-based logic and quantum-inspired device architectures</p>
                  </div>
                  
                  <div className="border-l-4 border-violet-500 pl-4 py-2">
                    <h4 className="font-bold text-gray-800">QMagLogic – Nanomagnetic Logic Framework (OOMMF/MuMax³)</h4>
                    <p className="text-gray-600">Micromagnetic simulation suite for reconfigurable spintronic logic and multistate device analysis</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Entrepreneurial Applications</h3>
                <div className="border-l-4 border-violet-500 pl-4 py-2">
                  <h4 className="font-bold text-gray-800">REPZ – AI-Driven Fitness Platform</h4>
                  <p className="text-gray-600">Full-stack PWA with ML integration using React (Next.js), Tailwind CSS, and IndexedDB with analytics dashboard and behavioral clustering for personalized recommendations</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conference Activity */}
        <section className="mb-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-6">
              <div className="flex items-center gap-3">
                <MessageSquare size={24} />
                <h2 className="text-2xl font-bold">Conference Activity & Presentations</h2>
              </div>
            </div>
            <div className="p-8 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Papers Presented</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-amber-500 pl-4 py-2">
                    <p className="text-gray-700">"Theory of the Electronic Structure of Buckled MoS₂," TMS Annual Meeting & Exhibition, 2025 
                      <a href="https://www.programmaster.org/PM/PM.nsf/ApprovedAbstracts/B2E423860544306285258B5C001329C8?OpenDocument" className="text-amber-600 hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        [Abstract] <ExternalLink className="inline" size={12} />
                      </a>
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-amber-500 pl-4 py-2">
                    <p className="text-gray-700">"Spin-orbit torque driven multistate switching of canted GdCo moments without a symmetry breaking field," APS March Meeting, 2022 
                      <a href="https://meetings.aps.org/Meeting/MAR22/Session/K52.7" className="text-amber-600 hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        [Abstract] <ExternalLink className="inline" size={12} />
                      </a>
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-amber-500 pl-4 py-2">
                    <p className="text-gray-700">"An integrated and highly-sensitive magnetic tunnel junction cytometer," International Conference on Magnetism (ICM), 2018 
                      <a href="https://www.dropbox.com/s/nqj46eq3xyulqic/ICM2018.pdf?dl=0" className="text-amber-600 hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        [Poster] <ExternalLink className="inline" size={12} />
                      </a>
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-amber-500 pl-4 py-2">
                    <p className="text-gray-700">"Highly-sensitive magnetic tunnel junction based flow cytometer," IEEE International Symposium on Medical Measurements & Applications (MeMeA), 2018 
                      <a href="https://www.dropbox.com/s/irotg8q11zlnjvv/MEMEA.pdf?dl=0" className="text-amber-600 hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        [Presentation] <ExternalLink className="inline" size={12} />
                      </a>
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-amber-500 pl-4 py-2">
                    <p className="text-gray-700">"A general circuit model for spintronic devices under electric and magnetic fields," 47th European Solid-State Device Research Conference (ESSDERC), 2017 
                      <a href="https://www.dropbox.com/s/bck2ltlqe2duv9s/ESSDERC2017.pdf?dl=0" className="text-amber-600 hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        [Presentation] <ExternalLink className="inline" size={12} />
                      </a>
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-amber-500 pl-4 py-2">
                    <p className="text-gray-700">"Dynamic circuit model for spintronic devices," 30th Eurosensors Conference, 2016 
                      <a href="https://www.dropbox.com/s/0ct1oqbk97z1kwi/EUROSENSORS2016.pdf?dl=0" className="text-amber-600 hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        [Poster] <ExternalLink className="inline" size={12} />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Campus and Departmental Talks</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-amber-500 pl-4 py-2">
                    <p className="text-gray-700">
                      <span className="underline font-medium">Meshal Alawein</span>, "Strain-induced flat bands and lateral heterostructures in rippled TMD monolayers," Ph.D. Dissertation Talk, University of California, Berkeley, 2025 
                      <a href="https://www.dropbox.com/scl/fi/w4wnf671uz10ykuc6elss/Dissertation_Talk.pdf?rlkey=v6nck0r1na0f2l1xx2p0fer9k&st=5g83o98u&dl=0" className="text-amber-600 hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        [Presentation] <ExternalLink className="inline" size={12} />
                      </a>
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-amber-500 pl-4 py-2">
                    <p className="text-gray-700">"Spintronic devices for energy-efficient memory and computing," KAUST-CEMSE Seminar, 2017 
                      <a href="https://www.dropbox.com/s/6kkyd9i1qe64y0i/CEMSESeminar.pdf?dl=0" className="text-amber-600 hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        [Presentation] <ExternalLink className="inline" size={12} />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Patents */}
        <section className="mb-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-6">
              <div className="flex items-center gap-3">
                <Award size={24} />
                <h2 className="text-2xl font-bold">Patents & Inventions</h2>
              </div>
            </div>
            <div className="p-8 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">U.S. Patents (Filed or In Drafting)</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-teal-500 pl-4 py-2">
                    <p className="text-gray-700"><span className="underline font-medium">M. Alawein</span>, System and Method for Emulating Quantum Logic Gates Using Multistate Nanomagnetic Networks</p>
                  </div>
                  
                  <div className="border-l-4 border-teal-500 pl-4 py-2">
                    <p className="text-gray-700"><span className="underline font-medium">M. Alawein</span>, Nonvolatile Multistate Memory Devices Based on Configurationally Anisotropic Nanomagnets</p>
                  </div>
                  
                  <div className="border-l-4 border-teal-500 pl-4 py-2">
                    <p className="text-gray-700"><span className="underline font-medium">M. Alawein</span>, Reconfigurable Multilevel Logic Circuits Implemented via Spintronic Nanomagnetic Arrays</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Software Copyrights & Inventions</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-teal-500 pl-4 py-2">
                    <p className="text-gray-700"><span className="underline font-medium">M. Alawein</span> "Stochastic magnetization dynamics and spin circuits simulator"</p>
                  </div>
                  
                  <div className="border-l-4 border-teal-500 pl-4 py-2">
                    <p className="text-gray-700"><span className="underline font-medium">M. Alawein</span>, A. Al-Nafisah "Verilog-A modules of stochastic magnetization dynamics and spin circuits"</p>
                  </div>
                  
                  <div className="border-l-4 border-teal-500 pl-4 py-2">
                    <p className="text-gray-700"><span className="underline font-medium">M. Alawein</span>, M. Al-Muhaimeed, M. Al-Manea, A.-W. Baghdadi, S. Sorour, "RSS based indoor localization software with Java open-source code and Android"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Teaching */}
        <section className="mb-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white p-6">
              <div className="flex items-center gap-3">
                <School size={24} />
                <h2 className="text-2xl font-bold">Teaching, Mentoring & Leadership</h2>
              </div>
            </div>
            <div className="p-8 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Research Mentorship & Supervision</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-rose-500 pl-4 py-2">
                    <p className="text-gray-700"><strong>Graduate Research Mentor, UC Berkeley (2019–2025):</strong> Supervised undergraduate and visiting researchers on atomistic simulation projects involving MD/DFT workflows, electronic structure analysis, and materials property evaluation</p>
                  </div>
                  
                  <div className="border-l-4 border-rose-500 pl-4 py-2">
                    <p className="text-gray-700"><strong>International Program Leadership, KAUST (2014–2019):</strong> Managed interdisciplinary research teams and led Saudi Research Science Institute (SRSI) cohorts on quantum device design; delivered industry-aligned outcomes with custom instructional content; advisees placed in top-tier graduate programs</p>
                  </div>
                  
                  <div className="border-l-4 border-rose-500 pl-4 py-2">
                    <p className="text-gray-700"><strong>Research Team Coordination:</strong> Led cross-institutional collaboration on DOE-funded quantum materials discovery projects, coordinating multi-institutional teams and integrating computational and experimental efforts</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Course Instruction & Teaching</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-rose-500 pl-4 py-2">
                    <p className="text-gray-700"><strong>Graduate Courses (KAUST):</strong> Teaching assistant for VLSI Design and Monolithic Amplifier Circuits, emphasizing simulation workflows and computational methods in quantum electronic systems</p>
                  </div>
                  
                  <div className="border-l-4 border-rose-500 pl-4 py-2">
                    <p className="text-gray-700"><strong>Advanced Mathematics (KFUPM):</strong> Teaching assistant for Calculus III, Differential Equations, Engineering Probability, and Numerical Computing, strengthening foundations for physical and computational modeling</p>
                  </div>
                  
                  <div className="border-l-4 border-rose-500 pl-4 py-2">
                    <p className="text-gray-700"><strong>Recognition:</strong> Best Teaching Assistant Award recipient (3x) for excellence in instruction and student engagement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Three Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Grants & Funding */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-yellow-600 to-amber-600 text-white p-4">
              <div className="flex items-center gap-2">
                <DollarSign size={20} />
                <h2 className="text-lg font-bold">Grants & Funding</h2>
              </div>
            </div>
            <div className="p-6 space-y-3">
              <div className="border-l-4 border-yellow-500 pl-3 py-2">
                <p className="text-sm text-gray-700"><strong>DOE Energy Materials Network (EMN) Project:</strong> Project leader on multi-institutional quantum materials discovery initiative (2022–2025)</p>
              </div>
              
              <div className="border-l-4 border-yellow-500 pl-3 py-2">
                <p className="text-sm text-gray-700"><strong>SACM Fellowship:</strong> Saudi Arabian Cultural Mission scholarship for elite students (2019–2025)</p>
              </div>
              
              <div className="border-l-4 border-yellow-500 pl-3 py-2">
                <p className="text-sm text-gray-700"><strong>KAUST Graduate Fellowship:</strong> Full funding for graduate studies and research (2014–2018)</p>
              </div>
            </div>
          </div>

          {/* Professional Service */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4">
              <div className="flex items-center gap-2">
                <Users size={20} />
                <h2 className="text-lg font-bold">Professional Service</h2>
              </div>
            </div>
            <div className="p-6 space-y-3">
              <div className="border-l-4 border-blue-500 pl-3 py-2">
                <p className="text-sm text-gray-700"><strong>Peer Review:</strong> Reviewer for IEEE journals and conferences in computational electronics and materials science</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-3 py-2">
                <p className="text-sm text-gray-700"><strong>Professional Memberships:</strong> American Physical Society (APS), Institute of Electrical and Electronics Engineers (IEEE), IEEE Young Professionals</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-3 py-2">
                <p className="text-sm text-gray-700"><strong>Conference Organization:</strong> Session organizer and technical committee member for nanoscale device and materials conferences</p>
              </div>
            </div>
          </div>

          {/* Additional Qualifications */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-4">
              <div className="flex items-center gap-2">
                <CheckCircle size={20} />
                <h2 className="text-lg font-bold">Additional Qualifications</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="border-l-4 border-green-500 pl-3 py-2">
                <h3 className="font-bold text-gray-800 mb-2">Languages</h3>
                <p className="text-sm text-gray-700">Arabic (native), English (fluent)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Honors & Awards */}
        <section className="mb-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-red-600 to-rose-600 text-white p-6">
              <div className="flex items-center gap-3">
                <Award size={24} />
                <h2 className="text-2xl font-bold">Honors & Awards</h2>
              </div>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="border-l-4 border-red-500 pl-4 py-3">
                  <h3 className="font-bold text-gray-800">SACM Fellowship</h3>
                  <p className="text-sm text-gray-600">Saudi Arabian Cultural Mission scholarship for elite students (2019-2025)</p>
                </div>
                
                <div className="border-l-4 border-red-500 pl-4 py-3">
                  <h3 className="font-bold text-gray-800">KAUST Fellowship</h3>
                  <p className="text-sm text-gray-600">Full graduate funding and research support (2014-2018)</p>
                </div>
                
                <div className="border-l-4 border-red-500 pl-4 py-3">
                  <h3 className="font-bold text-gray-800">Future Generation Judge's Choice Award</h3>
                  <p className="text-sm text-gray-600">Recognition for outstanding research innovation (2019)</p>
                </div>
                
                <div className="border-l-4 border-red-500 pl-4 py-3">
                  <h3 className="font-bold text-gray-800">Best Teaching Assistant (3x)</h3>
                  <p className="text-sm text-gray-600">Multiple awards for excellence in instruction and student engagement</p>
                </div>
                
                <div className="border-l-4 border-red-500 pl-4 py-3">
                  <h3 className="font-bold text-gray-800">Dean's List</h3>
                  <p className="text-sm text-gray-600">Consistent academic excellence recognition (2010-2014)</p>
                </div>
                
                <div className="border-l-4 border-red-500 pl-4 py-3">
                  <h3 className="font-bold text-gray-800">National Excellence Award</h3>
                  <p className="text-sm text-gray-600">High school academic achievement recognition (2007-2009)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* References */}
        <section className="mb-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-gray-600 to-slate-600 text-white p-6">
              <div className="flex items-center gap-3">
                <Users size={24} />
                <h2 className="text-2xl font-bold">References</h2>
              </div>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="border-l-4 border-gray-500 pl-6">
                  <h3 className="text-lg font-bold text-gray-800">Ali Javey</h3>
                  <p className="text-sm text-gray-700 mb-2">Professor, Electrical Engineering and Computer Sciences & Materials Science and Engineering</p>
                  <p className="text-sm text-gray-700 mb-2">University of California, Berkeley</p>
                  <p className="text-sm">
                    <span className="font-semibold">Email:</span>{' '}
                    <a href="mailto:ajavey@berkeley.edu" className="text-blue-600 hover:underline">ajavey@berkeley.edu</a>
                  </p>
                </div>
                
                <div className="border-l-4 border-gray-500 pl-6">
                  <h3 className="text-lg font-bold text-gray-800">Daryl Chrzan</h3>
                  <p className="text-sm text-gray-700 mb-2">Professor, Materials Science and Engineering</p>
                  <p className="text-sm text-gray-700 mb-2">University of California, Berkeley</p>
                  <p className="text-sm">
                    <span className="font-semibold">Email:</span>{' '}
                    <a href="mailto:dcchrzan@berkeley.edu" className="text-blue-600 hover:underline">dcchrzan@berkeley.edu</a>
                  </p>
                </div>
                
                <div className="border-l-4 border-gray-500 pl-6">
                  <h3 className="text-lg font-bold text-gray-800">Hossein Fariborzi</h3>
                  <p className="text-sm text-gray-700 mb-2">Assistant Professor, Electrical and Computer Engineering</p>
                  <p className="text-sm text-gray-700 mb-2">King Abdullah University of Science and Technology</p>
                  <p className="text-sm">
                    <span className="font-semibold">Email:</span>{' '}
                    <a href="mailto:hossein.fariborzi@kaust.edu.sa" className="text-blue-600 hover:underline">hossein.fariborzi@kaust.edu.sa</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Download Button */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto">
            <Download size={20} />
            Download PDF Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Template5;