import { ReactNode } from 'react';

interface SectionHeadingProps {
  icon: ReactNode;
  title: string;
}

const SectionHeading = ({ icon, title }: SectionHeadingProps) => {
  return (
    <div className="flex items-center gap-3 pb-3 border-b-2 border-teal-600 mb-6">
      <span className="text-teal-600 text-xl">{icon}</span>
      <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
    </div>
  );
};

export default SectionHeading;