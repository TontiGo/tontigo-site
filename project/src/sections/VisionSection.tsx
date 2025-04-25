import React from 'react';
import SectionTitle from '../components/SectionTitle';

const VisionSection: React.FC = () => {
  return (
    <section id="vision" className="section bg-white py-20">
      <div className="container">
        <SectionTitle 
          title="Notre Vision – Une Nouvelle Finance pour l'Afrique" 
          subtitle="Un projet porté par une conviction forte"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
          <div className="relative animate-on-scroll">
            <img 
              src="/images/vision/main.jpg" 
              alt="Entrepreneur africain utilisant un smartphone pour accéder à des services financiers" 
              className="rounded-xl shadow-lg w-full h-auto object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-8 -right-8 md:bottom-auto md:right-auto md:top-1/2 md:-left-8 md:transform md:-translate-y-1/2 bg-white rounded-lg p-6 shadow-lg max-w-xs">
              <p className="text-primary-500 font-bold text-lg mb-2">Notre Ambition</p>
              <p className="text-neutral-700">Connecter 1 million d'utilisateurs à un écosystème financier inclusif d'ici 2027</p>
            </div>
          </div>
          
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold text-neutral-800 mb-6">
              Nous rêvons d'une Afrique où l'inclusion financière ne serait plus un privilège.
            </h3>
            <p className="text-lg text-neutral-600 mb-4">
              Une Afrique où les commerçants, artisans, agriculteurs et étudiants peuvent accéder à des solutions modernes sans renier leurs pratiques communautaires.
            </p>
            <p className="text-lg text-neutral-600 mb-6">
              TontiGo modernise les tontines, non pas pour les remplacer, mais pour les faire grandir. En les dotant de transparence, d'accessibilité numérique, et de services complémentaires, nous transformons la solidarité en moteur économique.
            </p>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-primary-50 p-5 rounded-lg border-l-4 border-primary-500">
                <h4 className="text-lg font-semibold text-primary-700 mb-2">Innovation Locale</h4>
                <p className="text-neutral-600">
                  Des solutions adaptées aux spécificités culturelles et économiques africaines
                </p>
              </div>
              <div className="bg-secondary-50 p-5 rounded-lg border-l-4 border-secondary-500">
                <h4 className="text-lg font-semibold text-secondary-700 mb-2">Autonomisation</h4>
                <p className="text-neutral-600">
                  Renforcer les communautés en leur donnant accès aux outils financiers modernes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;