import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features?: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon,
  features 
}) => {
  return (
    <div className="card h-full group animate-on-scroll hover:border-primary-200 hover:-translate-y-1">
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors">{title}</h3>
      <p className="text-neutral-600 mb-4">{description}</p>
      {features && features.length > 0 && (
        <ul className="space-y-3 text-neutral-600">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary-500 mr-2 font-bold">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceCard;