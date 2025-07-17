import { Mail, Phone, Linkedin, Download, Globe, GraduationCap } from 'lucide-react';
import { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled ? 'bg-slate-900 text-white shadow-lg py-3' : 'bg-slate-900 text-white py-6'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className={`transition-all duration-300 ${scrolled ? 'text-2xl' : 'text-3xl'} font-bold mb-4 md:mb-0`}>
            <h1 className="text-white">Meshal Alawein</h1>
            {!scrolled && (
              <p className="text-sm font-normal mt-2 text-teal-300">
                Computational Scientist & Quantum Materials Theorist
              </p>
            )}
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 items-center text-sm">
            <div className="flex flex-wrap gap-4 items-center">
              <a 
                href="mailto:meshal@berkeley.edu" 
                className="flex items-center gap-2 hover:text-teal-300 transition-colors"
              >
                <Mail size={16} />
                <span className={scrolled ? 'hidden lg:inline' : 'inline'}>meshal@berkeley.edu</span>
              </a>
              
              <a 
                href="tel:+15102075741" 
                className="flex items-center gap-2 hover:text-teal-300 transition-colors"
              >
                <Phone size={16} />
                <span className={scrolled ? 'hidden lg:inline' : 'inline'}>+1-510-207-5741</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/meshal-alawein" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 hover:text-teal-300 transition-colors"
              >
                <Linkedin size={16} />
                <span className={scrolled ? 'hidden lg:inline' : 'inline'}>LinkedIn</span>
              </a>
              
              <a 
                href="https://scholar.google.com/citations?user=IB_E6GQAAAAJ&hl=en" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 hover:text-teal-300 transition-colors"
              >
                <GraduationCap size={16} />
                <span className={scrolled ? 'hidden lg:inline' : 'inline'}>Scholar</span>
              </a>
              
              <a 
                href="https://malawein.info" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 hover:text-teal-300 transition-colors"
              >
                <Globe size={16} />
                <span className={scrolled ? 'hidden lg:inline' : 'inline'}>Website</span>
              </a>
            </div>
            
            <a 
              href="#" 
              className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-3 py-1 rounded transition-colors"
            >
              <Download size={16} />
              <span>Resume PDF</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;