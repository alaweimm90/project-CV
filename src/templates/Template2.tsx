import React, { useState, useEffect, useRef } from 'react';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  GraduationCap, 
  MapPin, 
  Download, 
  Award, 
  Users, 
  Code, 
  FileText, 
  Briefcase, 
  Target,
  ChevronDown,
  Sparkles,
  Zap,
  Atom,
  Brain,
  Cpu,
  Database,
  Globe,
  Star,
  TrendingUp,
  BookOpen,
  Lightbulb,
  School,
  DollarSign,
  FlaskConical,
  MessageSquare,
  ExternalLink,
  Calendar,
  Building,
  Microscope,
  Settings,
  Trophy,
  Languages,
  CheckCircle
} from 'lucide-react';

const Template2 = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  // Animation and scroll effects
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Update active section based on scroll position
      const sections = Object.entries(sectionsRef.current);
      for (const [id, element] of sections) {
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isLoaded]);

  const scrollToSection = (sectionId: string) => {
    const element = sectionsRef.current[sectionId];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.3) 0%, transparent 50%)`,
            transition: 'background 0.3s ease'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-pulse" />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrollY > 100 ? 'bg-black/80 backdrop-blur-lg shadow-2xl' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className={`transition-all duration-500 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h1 className="text-2xl font-bold text-white">MA</h1>
            </div>
            
            <div className={`flex gap-6 transition-all duration-700 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
            }`}>
              {['hero', 'profile', 'education', 'expertise', 'experience', 'publications', 'software', 'patents', 'teaching', 'contact'].map((section, index) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-purple-300 ${
                    activeSection === section ? 'text-purple-300' : 'text-white/80'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  {activeSection === section && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 animate-expand" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        ref={(el) => { sectionsRef.current.hero = el; heroRef.current = el; }}
        className="relative min-h-screen flex items-center justify-center z-10"
      >
        <div className="text-center text-white">
          {/* Animated Avatar */}
          <div className={`mb-8 transition-all duration-1000 delay-500 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}>
            <div className="relative mx-auto w-40 h-40 mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full animate-spin-slow" />
              <div className="absolute inset-2 bg-gradient-to-r from-slate-800 to-slate-900 rounded-full flex items-center justify-center">
                <Atom size={48} className="text-purple-300 animate-pulse" />
              </div>
              <div className="absolute -top-2 -right-2 animate-bounce">
                <Sparkles size={24} className="text-yellow-400" />
              </div>
            </div>
          </div>

          {/* Animated Name */}
          <div className={`transition-all duration-1000 delay-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h1 className="text-6xl md:text-8xl font-light mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
              Meshal Alawein
            </h1>
          </div>

          {/* Animated Subtitle */}
          <div className={`transition-all duration-1000 delay-900 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <p className="text-xl md:text-2xl text-purple-200 mb-8 font-light">
              Quantum Materials Theorist | Computational Scientist | Scientific ML Engineer
            </p>
          </div>

          {/* Animated Contact Cards */}
          <div className={`grid grid-cols-2 md:grid-cols-5 gap-4 max-w-3xl mx-auto mb-12 transition-all duration-1000 delay-1100 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {[
              { icon: <MapPin size={18} />, text: 'Berkeley, CA', href: null },
              { icon: <Mail size={18} />, text: 'Email', href: 'mailto:meshal@berkeley.edu' },
              { icon: <Phone size={18} />, text: 'Phone', href: 'tel:+15102075741' },
              { icon: <Linkedin size={18} />, text: 'LinkedIn', href: 'https://www.linkedin.com/in/meshal-alawein' },
              { icon: <GraduationCap size={18} />, text: 'Scholar', href: 'https://scholar.google.com/citations?user=IB_E6GQAAAAJ&hl=en' }
            ].map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden"
                style={{ animationDelay: `${1200 + index * 100}ms` }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  >
                    <div className="flex flex-col items-center gap-2">
                      <div className="text-purple-300 group-hover:text-purple-200 transition-colors duration-300">
                        {item.icon}
                      </div>
                      <span className="text-sm font-medium">{item.text}</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/0 via-purple-400/20 to-purple-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  </a>
                ) : (
                  <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                    <div className="flex flex-col items-center gap-2">
                      <div className="text-purple-300">{item.icon}</div>
                      <span className="text-sm font-medium">{item.text}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className={`transition-all duration-1000 delay-1500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}>
            <button
              onClick={() => scrollToSection('profile')}
              className="animate-bounce hover:animate-none transition-all duration-300 hover:scale-110"
            >
              <ChevronDown size={32} className="text-purple-300 hover:text-purple-200" />
            </button>
          </div>
        </div>
      </section>

      {/* Professional Profile Section */}
      <section 
        ref={(el) => { sectionsRef.current.profile = el; }}
        className="relative py-20 z-10"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                    <Target className="text-white" size={24} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-light text-white">Professional Profile</h2>
                </div>
                
                <div className="space-y-6 text-lg text-purple-100 leading-relaxed">
                  <p>
                    Computational scientist and quantum materials theorist with <span className="text-purple-300 font-semibold">11+ years of experience</span> in developing scalable algorithms, scientific machine learning models, and high-throughput simulation pipelines for quantum materials discovery and next-generation device applications.
                  </p>
                  
                  <p>
                    Expertise in physics-based modeling, distributed computing, and intelligent automation, with demonstrated success in reducing HPC job runtimes and computational costs through parallelization and workflow optimization.
                  </p>
                  
                  <p>
                    Proficient in building open-source tools for processing TB-scale datasets across distributed systems, with computational frameworks adopted by research teams in academia, national laboratories, and industry.
                  </p>
                  
                  <p>
                    Deep expertise in first-principles simulations, statistical modeling, and algorithm design, bridging quantum theory, materials science, and data-driven methods for <span className="text-purple-300 font-semibold">quantum computing</span>, <span className="text-purple-300 font-semibold">advanced materials</span>, and <span className="text-purple-300 font-semibold">AI/ML applications</span>.
                  </p>
                </div>

                {/* Research Interests */}
                <div className="mt-8 pt-8 border-t border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Microscope className="text-purple-300" size={20} />
                    Research Interests
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Quantum materials theory', 'Flat band engineering', 'Strain-engineered 2D semiconductors',
                      'Spintronics', 'Electronic structure theory', 'High-performance computing',
                      'Scientific machine learning', 'Materials informatics', 'Quantum device physics',
                      'Computational materials science', 'Many-body physics', 'Transport theory',
                      'Mesoscopic physics', 'Automation workflows', 'Data analytics'
                    ].map((interest, index) => (
                      <span
                        key={index}
                        className="bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full text-sm border border-purple-400/30 hover:bg-purple-500/30 transition-colors duration-300"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section 
        ref={(el) => { sectionsRef.current.education = el; }}
        className="relative py-20 z-10"
      >
        <div className="container mx-auto px-6">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-white mb-4">Education</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto" />
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-pink-400 to-blue-400" />
                
                {[
                  {
                    period: '2019 – 2025',
                    degree: 'Ph.D. in Electrical Engineering and Computer Sciences',
                    institution: 'University of California, Berkeley',
                    location: 'Berkeley, USA',
                    details: [
                      'Dissertation: "Strain-Induced Flat Bands and Lateral Heterostructures: Hole Localization in Rippled Monolayer TMDs"',
                      'Advisors: Dr. Ali Javey, Dr. Daryl Chrzan'
                    ],
                    icon: <GraduationCap size={24} />,
                    gradient: 'from-blue-500 to-cyan-500'
                  },
                  {
                    period: '2014 – 2016',
                    degree: 'M.S. in Electrical Engineering',
                    institution: 'King Abdullah University of Science and Technology',
                    location: 'Thuwal, Saudi Arabia',
                    gpa: 'GPA: 4.0/4.0',
                    details: [
                      'Thesis: "Circuit Simulation of All-Spin Logic"',
                      'Advisor: Dr. Hossein Fariborzi'
                    ],
                    icon: <Award size={24} />,
                    gradient: 'from-purple-500 to-pink-500'
                  },
                  {
                    period: '2009 – 2014',
                    degree: 'B.S. in Electrical Engineering (Minor: Mathematics)',
                    institution: 'King Fahd University of Petroleum and Minerals',
                    location: 'Dhahran, Saudi Arabia',
                    gpa: 'Major GPA: 3.89/4.0 | Minor GPA: 3.9/4.0',
                    details: [
                      'Senior Project: "Indoor Localization with Limited Deployment Effort"'
                    ],
                    icon: <BookOpen size={24} />,
                    gradient: 'from-green-500 to-teal-500'
                  }
                ].map((edu, index) => (
                  <div
                    key={index}
                    className="relative flex items-start gap-8 mb-12 group"
                    style={{ animationDelay: `${index * 300}ms` }}
                  >
                    {/* Timeline Dot */}
                    <div className={`relative z-10 flex-shrink-0 w-16 h-16 bg-gradient-to-r ${edu.gradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">{edu.icon}</div>
                      <div className={`absolute inset-0 bg-gradient-to-r ${edu.gradient} rounded-full animate-ping opacity-20`} />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 group-hover:bg-white/15 transition-all duration-300 group-hover:scale-105">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-1">{edu.degree}</h3>
                          <p className="text-purple-300 font-medium">{edu.institution}</p>
                          <p className="text-purple-200 text-sm">{edu.location}</p>
                          {edu.gpa && <p className="text-green-300 text-sm font-medium mt-1">{edu.gpa}</p>}
                        </div>
                        <span className="text-sm text-purple-200 bg-white/10 px-3 py-1 rounded-full mt-2 md:mt-0">
                          {edu.period}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {edu.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-2 text-purple-200 text-sm">
                            <span className="text-purple-400 mt-1">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Expertise Section */}
      <section 
        ref={(el) => { sectionsRef.current.expertise = el; }}
        className="relative py-20 z-10"
      >
        <div className="container mx-auto px-6">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-white mb-4">Technical Expertise</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {[
                {
                  icon: <Database size={32} />,
                  title: 'Quantum Materials & Ab Initio Theory',
                  gradient: 'from-blue-500 to-cyan-500',
                  skills: ['DFT, DFT+U, TDDFT, DFPT', 'GW approximation, BSE', 'Hubbard model, Boltzmann transport', 'Wannier functions, exact diagonalization', 'Many-body physics, electronic structure']
                },
                {
                  icon: <Cpu size={32} />,
                  title: 'Scientific Computing & Numerical Methods',
                  gradient: 'from-purple-500 to-pink-500',
                  skills: ['Iterative solvers, PDE solvers', 'Optimization algorithms', 'Uncertainty quantification', 'Statistical analysis', 'Physics-informed modeling']
                },
                {
                  icon: <Brain size={32} />,
                  title: 'Machine Learning & Scientific ML',
                  gradient: 'from-green-500 to-teal-500',
                  skills: ['Supervised learning, regression', 'Statistical modeling', 'Physics-informed ML', 'Materials informatics', 'PyTorch, TensorFlow, scikit-learn']
                },
                {
                  icon: <Settings size={32} />,
                  title: 'High-Performance Computing & Programming',
                  gradient: 'from-orange-500 to-red-500',
                  skills: ['Python (NumPy, SciPy, pandas)', 'C++, MATLAB, Mathematica', 'MPI, OpenMP, SLURM', 'Distributed computing', 'Workflow automation']
                },
                {
                  icon: <Microscope size={32} />,
                  title: 'Simulation Tools & Platforms',
                  gradient: 'from-violet-500 to-purple-500',
                  skills: ['VASP, Quantum ESPRESSO, SIESTA', 'LAMMPS, OOMMF, MuMax³', 'COMSOL, HFSS, OVITO', 'AiiDA, Wannier90', 'Multiscale modeling']
                },
                {
                  icon: <Atom size={32} />,
                  title: 'Quantum Computing & Device Physics',
                  gradient: 'from-amber-500 to-orange-500',
                  skills: ['Quantum materials platforms', 'Van der Waals heterostructures', 'Topological insulators', 'Spin qubits, quantum dots', 'Silicon photonics, spintronics']
                }
              ].map((expertise, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${expertise.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className={`inline-flex p-4 bg-gradient-to-r ${expertise.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">{expertise.icon}</div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-6">{expertise.title}</h3>
                  
                  <ul className="space-y-2 text-purple-200 text-sm">
                    {expertise.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section 
        ref={(el) => { sectionsRef.current.experience = el; }}
        className="relative py-20 z-10"
      >
        <div className="container mx-auto px-6">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-white mb-4">Professional Experience</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto" />
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-pink-400 to-blue-400" />
                
                {[
                  {
                    period: '2022 – 2025',
                    title: 'Scientific Computing Researcher',
                    company: 'Lawrence Berkeley National Laboratory',
                    location: 'Berkeley, CA',
                    achievements: [
                      'Interdisciplinary Research Program Leadership: Led a DOE-funded quantum materials discovery project, coordinating cross-institutional teams and integrating first-principles simulations with data-driven science',
                      'Production HPC Infrastructure: Built SLURM-based distributed frameworks to automate 200+ weekly simulations with fault tolerance and validation layers',
                      'Scalable Computational Framework Development: Engineered Python/MATLAB automation pipelines on HPC clusters to process TB-scale data across 50–200 parallel jobs'
                    ],
                    icon: <FlaskConical size={24} />,
                    gradient: 'from-blue-500 to-cyan-500'
                  },
                  {
                    period: '2019 – 2025',
                    title: 'Graduate Research Scientist',
                    company: 'University of California, Berkeley',
                    location: 'Berkeley, CA',
                    achievements: [
                      'Quantum Materials Discovery: Discovered strain-induced flat bands in rippled 2D monolayers using multiscale atomistic simulations',
                      'Electronic Structure Modeling & Analysis: Quantified effective mass anisotropy, band alignment, and strain-driven carrier confinement using ab initio methods',
                      'Data Processing & Analytics Framework: Built automated frameworks in Python/Mathematica that cut post-processing time by 90%'
                    ],
                    icon: <GraduationCap size={24} />,
                    gradient: 'from-purple-500 to-pink-500'
                  },
                  {
                    period: '2019',
                    title: 'Research Engineer Intern',
                    company: 'Minatec (CEA-Leti)',
                    location: 'Grenoble, France',
                    achievements: [
                      'Advanced Memory Technologies: Developed computational framework combining statistical mechanics and transport models to optimize magnetic memory performance'
                    ],
                    icon: <Building size={24} />,
                    gradient: 'from-green-500 to-teal-500'
                  },
                  {
                    period: '2014 – 2019',
                    title: 'Graduate Research Scientist',
                    company: 'King Abdullah University of Science and Technology',
                    location: 'Thuwal, Saudi Arabia',
                    achievements: [
                      'Spintronic Device Innovation: Developed first-principles-based models for spintronic logic and memory devices from generalized transport equations',
                      'Quantum-Inspired Logic Architectures: Invented reconfigurable nanomagnetic logic architectures with multistate switching at room temperature',
                      'Research Leadership & Technology Transfer: Led publication of 10+ peer-reviewed papers and released open-source modeling tools'
                    ],
                    icon: <Lightbulb size={24} />,
                    gradient: 'from-orange-500 to-red-500'
                  },
                  {
                    period: '2013',
                    title: 'AMO Engineer Intern',
                    company: 'Baker Hughes',
                    location: 'Dammam, Saudi Arabia',
                    achievements: [
                      'Industrial Engineering Experience: Assembly, Maintenance & Overhaul engineer with responsibilities in preventive maintenance and troubleshooting'
                    ],
                    icon: <Settings size={24} />,
                    gradient: 'from-amber-500 to-yellow-500'
                  }
                ].map((exp, index) => (
                  <div
                    key={index}
                    className="relative flex items-start gap-8 mb-12 group"
                    style={{ animationDelay: `${index * 300}ms` }}
                  >
                    {/* Timeline Dot */}
                    <div className={`relative z-10 flex-shrink-0 w-16 h-16 bg-gradient-to-r ${exp.gradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">{exp.icon}</div>
                      <div className={`absolute inset-0 bg-gradient-to-r ${exp.gradient} rounded-full animate-ping opacity-20`} />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 group-hover:bg-white/15 transition-all duration-300 group-hover:scale-105">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                          <p className="text-purple-300 font-medium">{exp.company}</p>
                          <p className="text-purple-200 text-sm">{exp.location}</p>
                        </div>
                        <span className="text-sm text-purple-200 bg-white/10 px-3 py-1 rounded-full mt-2 md:mt-0">
                          {exp.period}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2 text-purple-200 text-sm">
                            <span className="text-purple-400 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section 
        ref={(el) => { sectionsRef.current.publications = el; }}
        className="relative py-20 z-10"
      >
        <div className="container mx-auto px-6">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-white mb-4">Publications & Research</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto" />
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {/* Stats Cards */}
                {[
                  { number: '15+', label: 'Publications', icon: <FileText size={24} />, gradient: 'from-blue-500 to-cyan-500' },
                  { number: '70+', label: 'Citations', icon: <TrendingUp size={24} />, gradient: 'from-purple-500 to-pink-500' },
                  { number: '3', label: 'Patents', icon: <Award size={24} />, gradient: 'from-green-500 to-teal-500' },
                  { number: '11+', label: 'Years Experience', icon: <Star size={24} />, gradient: 'from-orange-500 to-red-500' }
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 bg-gradient-to-r ${stat.gradient} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                        <div className="text-white">{stat.icon}</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                          {stat.number}
                        </div>
                        <div className="text-purple-200">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Featured Publications */}
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                  <FileText className="text-purple-300" size={24} />
                  Featured Publications
                </h3>
                
                <div className="space-y-6">
                  {[
                    {
                      title: "Strain-induced lateral heterostructures and flat bands in rippled MoS₂",
                      authors: "M. Alawein, J. W. Ager, A. Javey, D. C. Chrzan",
                      journal: "Physical Review Materials",
                      year: "2025",
                      link: "https://doi.org/10.1103/PhysRevMaterials.9.L021002",
                      highlight: true
                    },
                    {
                      title: "Heteroepitaxial β-Ga₂O₃ on conductive ceramic templates: towards ultrahigh gain deep-ultraviolet photodetection",
                      authors: "N. Alfaraj, K.-H. Li, M. Alawein, et al.",
                      journal: "Advanced Materials Technologies",
                      year: "2021",
                      link: "https://onlinelibrary.wiley.com/doi/full/10.1002/admt.202100142"
                    },
                    {
                      title: "Multistate nanomagnetic logic using equilateral permalloy triangles",
                      authors: "M. Alawein, S. Amara, H. Fariborzi",
                      journal: "IEEE Magnetics Letters",
                      year: "2019",
                      link: "https://ieeexplore.ieee.org/document/8642958"
                    },
                    {
                      title: "Circuit models for spintronic devices subject to electric and magnetic fields",
                      authors: "M. Alawein, H. Fariborzi",
                      journal: "IEEE Journal on Exploratory Solid-State Computational Devices and Circuits",
                      year: "2018",
                      link: "https://ieeexplore.ieee.org/document/8514060"
                    }
                  ].map((pub, index) => (
                    <div
                      key={index}
                      className={`group p-4 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                        pub.highlight 
                          ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-400/50' 
                          : 'bg-white/5 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h4 className="text-white font-medium mb-2 group-hover:text-purple-300 transition-colors duration-300">
                            {pub.title}
                          </h4>
                          <p className="text-purple-300 text-sm mb-1">{pub.authors}</p>
                          <p className="text-purple-200 text-sm">
                            <span className="italic">{pub.journal}</span> ({pub.year})
                          </p>
                        </div>
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-purple-300 hover:text-purple-200 transition-colors duration-300"
                        >
                          <ExternalLink size={16} />
                          <span className="text-sm">View</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Tools Section */}
      <section 
        ref={(el) => { sectionsRef.current.software = el; }}
        className="relative py-20 z-10"
      >
        <div className="container mx-auto px-6">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-white mb-4">Software Tools & Frameworks</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto" />
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {[
                  {
                    title: 'QMatRun – HPC Automation',
                    tech: 'Bash/Python/MATLAB',
                    description: 'Workflow engine for high-throughput DFT/MD simulations on HPC clusters',
                    icon: <Cpu size={24} />,
                    gradient: 'from-blue-500 to-cyan-500'
                  },
                  {
                    title: 'QMatPost – Postprocessing Toolkit',
                    tech: 'Python/Mathematica',
                    description: 'Analysis suite for MD–DFT workflows supporting band structure visualization, strain-field mapping, and statistical analysis',
                    icon: <Database size={24} />,
                    gradient: 'from-purple-500 to-pink-500'
                  },
                  {
                    title: 'QSpinLogic – Spintronic Circuit Simulator',
                    tech: 'MATLAB/Cadence',
                    description: 'Stochastic simulator for modeling multistate spin-based logic and quantum-inspired device architectures',
                    icon: <Zap size={24} />,
                    gradient: 'from-green-500 to-teal-500'
                  },
                  {
                    title: 'QMagLogic – Nanomagnetic Logic Framework',
                    tech: 'OOMMF/MuMax³',
                    description: 'Micromagnetic simulation suite for reconfigurable spintronic logic and multistate device analysis',
                    icon: <Atom size={24} />,
                    gradient: 'from-orange-500 to-red-500'
                  },
                  {
                    title: 'REPZ – AI-Driven Fitness Platform',
                    tech: 'React/Next.js/ML',
                    description: 'Full-stack PWA with ML integration using React, Tailwind CSS, and IndexedDB with analytics dashboard',
                    icon: <Brain size={24} />,
                    gradient: 'from-violet-500 to-purple-500'
                  }
                ].map((tool, index) => (
                  <div
                    key={index}
                    className="group bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 bg-gradient-to-r ${tool.gradient} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                        <div className="text-white">{tool.icon}</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-1">{tool.title}</h3>
                        <p className="text-purple-300 text-sm font-medium">{tool.tech}</p>
                      </div>
                    </div>
                    <p className="text-purple-200 text-sm leading-relaxed">{tool.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patents Section */}
      <section 
        ref={(el) => { sectionsRef.current.patents = el; }}
        className="relative py-20 z-10"
      >
        <div className="container mx-auto px-6">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-white mb-4">Patents & Inventions</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto" />
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* U.S. Patents */}
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                  <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                    <Lightbulb className="text-yellow-400" size={24} />
                    U.S. Patents (Filed/In Drafting)
                  </h3>
                  <div className="space-y-4">
                    {[
                      'System and Method for Emulating Quantum Logic Gates Using Multistate Nanomagnetic Networks',
                      'Nonvolatile Multistate Memory Devices Based on Configurationally Anisotropic Nanomagnets',
                      'Reconfigurable Multilevel Logic Circuits Implemented via Spintronic Nanomagnetic Arrays'
                    ].map((patent, index) => (
                      <div key={index} className="p-4 bg-white/5 rounded-2xl border border-white/10">
                        <p className="text-purple-200 text-sm">
                          <span className="font-semibold text-white">M. Alawein</span>, {patent}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Software Copyrights */}
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                  <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                    <Code className="text-green-400" size={24} />
                    Software Copyrights & Inventions
                  </h3>
                  <div className="space-y-4">
                    {[
                      'Stochastic magnetization dynamics and spin circuits simulator',
                      'Verilog-A modules of stochastic magnetization dynamics and spin circuits',
                      'RSS based indoor localization software with Java open-source code and Android'
                    ].map((software, index) => (
                      <div key={index} className="p-4 bg-white/5 rounded-2xl border border-white/10">
                        <p className="text-purple-200 text-sm">
                          <span className="font-semibold text-white">M. Alawein</span>{index === 1 ? ', A. Al-Nafisah' : index === 2 ? ', M. Al-Muhaimeed, M. Al-Manea, A.-W. Baghdadi, S. Sorour' : ''}, "{software}"
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching & Leadership Section */}
      <section 
        ref={(el) => { sectionsRef.current.teaching = el; }}
        className="relative py-20 z-10"
      >
        <div className="container mx-auto px-6">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-white mb-4">Teaching, Mentoring & Leadership</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto" />
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Research Mentorship */}
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                  <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                    <Users className="text-blue-400" size={24} />
                    Research Mentorship & Supervision
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-white/5 rounded-2xl">
                      <h4 className="text-white font-medium mb-2">Graduate Research Mentor, UC Berkeley (2019–2025)</h4>
                      <p className="text-purple-200 text-sm">Supervised undergraduate and visiting researchers on atomistic simulation projects involving MD/DFT workflows, electronic structure analysis, and materials property evaluation</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-2xl">
                      <h4 className="text-white font-medium mb-2">International Program Leadership, KAUST (2014–2019)</h4>
                      <p className="text-purple-200 text-sm">Managed interdisciplinary research teams and led Saudi Research Science Institute cohorts on quantum device design; advisees placed in top-tier graduate programs</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-2xl">
                      <h4 className="text-white font-medium mb-2">Research Team Coordination</h4>
                      <p className="text-purple-200 text-sm">Led cross-institutional collaboration on DOE-funded quantum materials discovery projects, coordinating multi-institutional teams</p>
                    </div>
                  </div>
                </div>

                {/* Course Instruction */}
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                  <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                    <School className="text-green-400" size={24} />
                    Course Instruction & Teaching
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-white/5 rounded-2xl">
                      <h4 className="text-white font-medium mb-2">Graduate Courses (KAUST)</h4>
                      <p className="text-purple-200 text-sm">Teaching assistant for VLSI Design and Monolithic Amplifier Circuits, emphasizing simulation workflows and computational methods</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-2xl">
                      <h4 className="text-white font-medium mb-2">Advanced Mathematics (KFUPM)</h4>
                      <p className="text-purple-200 text-sm">Teaching assistant for Calculus III, Differential Equations, Engineering Probability, and Numerical Computing</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-2xl">
                      <h4 className="text-white font-medium mb-2">Recognition</h4>
                      <p className="text-purple-200 text-sm">Best Teaching Assistant Award recipient (3x) for excellence in instruction and student engagement</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Sections */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                {/* Grants & Funding */}
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                    <DollarSign className="text-yellow-400" size={20} />
                    Grants & Funding
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-white/5 rounded-xl">
                      <p className="text-white font-medium text-sm">DOE Energy Materials Network</p>
                      <p className="text-purple-200 text-xs">Project leader (2022–2025)</p>
                    </div>
                    <div className="p-3 bg-white/5 rounded-xl">
                      <p className="text-white font-medium text-sm">SACM Fellowship</p>
                      <p className="text-purple-200 text-xs">Elite students (2019–2025)</p>
                    </div>
                    <div className="p-3 bg-white/5 rounded-xl">
                      <p className="text-white font-medium text-sm">KAUST Graduate Fellowship</p>
                      <p className="text-purple-200 text-xs">Full funding (2014–2018)</p>
                    </div>
                  </div>
                </div>

                {/* Professional Service */}
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                    <Users className="text-purple-400" size={20} />
                    Professional Service
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-white/5 rounded-xl">
                      <p className="text-white font-medium text-sm">Peer Review</p>
                      <p className="text-purple-200 text-xs">IEEE journals and conferences</p>
                    </div>
                    <div className="p-3 bg-white/5 rounded-xl">
                      <p className="text-white font-medium text-sm">Professional Memberships</p>
                      <p className="text-purple-200 text-xs">APS, IEEE, IEEE Young Professionals</p>
                    </div>
                    <div className="p-3 bg-white/5 rounded-xl">
                      <p className="text-white font-medium text-sm">Conference Organization</p>
                      <p className="text-purple-200 text-xs">Session organizer and technical committee</p>
                    </div>
                  </div>
                </div>

                {/* Honors & Awards */}
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                    <Trophy className="text-orange-400" size={20} />
                    Honors & Awards
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-white/5 rounded-xl">
                      <p className="text-white font-medium text-sm">SACM Fellowship</p>
                      <p className="text-purple-200 text-xs">2019-2025</p>
                    </div>
                    <div className="p-3 bg-white/5 rounded-xl">
                      <p className="text-white font-medium text-sm">Future Generation Award</p>
                      <p className="text-purple-200 text-xs">Judge's Choice (2019)</p>
                    </div>
                    <div className="p-3 bg-white/5 rounded-xl">
                      <p className="text-white font-medium text-sm">Best Teaching Assistant</p>
                      <p className="text-purple-200 text-xs">3x recipient</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        ref={(el) => { sectionsRef.current.contact = el; }}
        className="relative py-20 z-10"
      >
        <div className="container mx-auto px-6">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-white mb-4">Let's Connect</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8" />
              <p className="text-purple-200 text-lg max-w-2xl mx-auto">
                Ready to collaborate on cutting-edge quantum materials research or discuss innovative computational solutions.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <a
                    href="mailto:meshal@berkeley.edu"
                    className="group flex flex-col items-center gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  >
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div className="text-center">
                      <div className="text-white font-medium">Email</div>
                      <div className="text-purple-300 text-sm">meshal@berkeley.edu</div>
                    </div>
                  </a>

                  <a
                    href="tel:+15102075741"
                    className="group flex flex-col items-center gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  >
                    <div className="p-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div className="text-center">
                      <div className="text-white font-medium">Phone</div>
                      <div className="text-purple-300 text-sm">+1-510-207-5741</div>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/meshal-alawein"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  >
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Linkedin className="text-white" size={20} />
                    </div>
                    <div className="text-center">
                      <div className="text-white font-medium">LinkedIn</div>
                      <div className="text-purple-300 text-sm">Connect with me</div>
                    </div>
                  </a>

                  <a
                    href="https://scholar.google.com/citations?user=IB_E6GQAAAAJ&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  >
                    <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap className="text-white" size={20} />
                    </div>
                    <div className="text-center">
                      <div className="text-white font-medium">Scholar</div>
                      <div className="text-purple-300 text-sm">Research profile</div>
                    </div>
                  </a>
                </div>

                {/* References */}
                <div className="border-t border-white/20 pt-8">
                  <h3 className="text-2xl font-semibold text-white mb-6 text-center">References</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        name: 'Ali Javey',
                        title: 'Professor, EECS & Materials Science',
                        institution: 'University of California, Berkeley',
                        email: 'ajavey@berkeley.edu'
                      },
                      {
                        name: 'Daryl Chrzan',
                        title: 'Professor, Materials Science and Engineering',
                        institution: 'University of California, Berkeley',
                        email: 'dcchrzan@berkeley.edu'
                      },
                      {
                        name: 'Hossein Fariborzi',
                        title: 'Assistant Professor, ECE',
                        institution: 'King Abdullah University of Science and Technology',
                        email: 'hossein.fariborzi@kaust.edu.sa'
                      },
                      {
                        name: 'Aurelien Manchon',
                        title: 'Professor, Physics',
                        institution: 'Centre Interdisciplinaire de Nanoscience de Marseille',
                        email: 'aurelien.manchon@univ-amu.fr'
                      }
                    ].map((ref, index) => (
                      <div key={index} className="p-4 bg-white/5 rounded-2xl border border-white/10">
                        <h4 className="text-white font-medium mb-1">{ref.name}</h4>
                        <p className="text-purple-300 text-sm mb-1">{ref.title}</p>
                        <p className="text-purple-200 text-sm mb-2">{ref.institution}</p>
                        <a href={`mailto:${ref.email}`} className="text-blue-300 hover:text-blue-200 text-sm transition-colors duration-300">
                          {ref.email}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <button className="group relative overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-2xl font-medium hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <span className="relative z-10 flex items-center gap-2">
                      <Download size={18} />
                      Download Resume
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </div>

                {/* Additional Qualifications */}
                <div className="mt-8 pt-8 border-t border-white/20">
                  <div className="flex items-center justify-center gap-4">
                    <Languages className="text-purple-300" size={20} />
                    <span className="text-white font-medium">Languages:</span>
                    <span className="text-purple-200">Arabic (native), English (fluent)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 z-10 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-purple-300">
            © 2025 Meshal Alawein. Crafted with passion for quantum materials and computational science.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes expand {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-expand {
          animation: expand 0.3s ease-out;
        }
        
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        
        .animate-on-scroll {
          transition: all 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Template2;