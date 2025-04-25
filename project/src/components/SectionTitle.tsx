import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  centered = true 
}) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''} animate-on-scroll`}>
      <h2 className={`relative inline-block mb-8`}>
        {title}
        <span className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-24 h-1 bg-primary-500"></span>
      </h2>
      {subtitle && (
        <p className="text-lg text-neutral-600 max-w-3xl mx-auto mt-8">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;