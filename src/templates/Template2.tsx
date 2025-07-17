import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ProfessionalProfile from '../components/ProfessionalProfile';
import Education from '../components/Education';
import Skills from '../components/Skills';
import ProfessionalExperience from '../components/ProfessionalExperience';
import Publications from '../components/Publications';
import SoftwareTools from '../components/SoftwareTools';
import Conferences from '../components/Conferences';
import Patents from '../components/Patents';
import Teaching from '../components/Teaching';
import Awards from '../components/Awards';
import References from '../components/References';
import EntrepreneurialProjects from '../components/EntrepreneurialProjects';
import Languages from '../components/Languages';

const Template2 = () => {
  const [activeSection, setActiveSection] = useState('profile');

  // Component for sections that don't exist yet
  const PlaceholderSection = ({ title, id }: { title: string; id: string }) => (
    <div id={id} className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-slate-800 mb-4">{title}</h2>
      <p className="text-slate-600">This section is under development.</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            <div id="profile">
              <ProfessionalProfile />
            </div>
            
            <div id="education">
              <Education />
            </div>
            
            <div id="technical-expertise">
              <Skills />
            </div>
            
            <div id="experience">
              <ProfessionalExperience />
            </div>
            
            <div id="publications">
              <Publications />
            </div>
            
            <div id="software">
              <SoftwareTools />
            </div>
            
            <div id="conferences">
              <Conferences />
            </div>
            
            <div id="patents">
              <Patents />
            </div>
            
            <div id="teaching">
              <Teaching />
            </div>
            
            <PlaceholderSection title="Grants & Funding" id="grants" />
            
            <PlaceholderSection title="Professional Service" id="service" />
            
            <div id="awards">
              <Awards />
            </div>
            
            <div id="qualifications">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <EntrepreneurialProjects />
                <Languages />
              </div>
            </div>
            
            <div id="references">
              <References />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template2;