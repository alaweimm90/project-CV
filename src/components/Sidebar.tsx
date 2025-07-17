import { useState, useEffect } from 'react';
import { 
  User, 
  Target, 
  GraduationCap, 
  Cpu, 
  Briefcase, 
  FileText, 
  Code, 
  MessageSquare, 
  Lightbulb, 
  School, 
  DollarSign, 
  Users, 
  Award, 
  CheckCircle, 
  Phone
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Sidebar = ({ activeSection, setActiveSection }: SidebarProps) => {
  const [sections] = useState([
    { id: 'profile', label: 'Professional Profile', icon: <User size={18} /> },
    { id: 'education', label: 'Education', icon: <GraduationCap size={18} /> },
    { id: 'technical-expertise', label: 'Technical Expertise', icon: <Cpu size={18} /> },
    { id: 'experience', label: 'Professional Experience', icon: <Briefcase size={18} /> },
    { id: 'publications', label: 'Publications', icon: <FileText size={18} /> },
    { id: 'software', label: 'Software Tools', icon: <Code size={18} /> },
    { id: 'conferences', label: 'Conference Activity', icon: <MessageSquare size={18} /> },
    { id: 'patents', label: 'Patents', icon: <Lightbulb size={18} /> },
    { id: 'teaching', label: 'Teaching & Mentoring', icon: <School size={18} /> },
    { id: 'grants', label: 'Grants & Funding', icon: <DollarSign size={18} /> },
    { id: 'service', label: 'Professional Service', icon: <Users size={18} /> },
    { id: 'awards', label: 'Honors & Awards', icon: <Award size={18} /> },
    { id: 'qualifications', label: 'Additional Qualifications', icon: <CheckCircle size={18} /> },
    { id: 'references', label: 'References', icon: <Phone size={18} /> }
  ]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      }));
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, element } = sectionElements[i];
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections, setActiveSection]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <nav className="bg-white rounded-lg shadow-md p-4">
      <ul className="space-y-1">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => scrollToSection(section.id)}
              className={`w-full text-left px-3 py-2 rounded flex items-center gap-2 transition-colors text-sm ${
                activeSection === section.id
                  ? 'bg-teal-600 text-white'
                  : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              {section.icon}
              <span>{section.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;