import React from 'react';
import SectionTitle from '../components/SectionTitle';

const FounderSection: React.FC = () => {
  return (
    <section id="founder" className="section bg-neutral-50 py-20">
      <div className="container">
        <SectionTitle 
          title="Une Vision Portée par un Leader Engagé" 
          subtitle="Découvrez l'histoire et la vision derrière TontiGo"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
          <div className="animate-on-scroll">
            <div className="relative">
              <img 
                src="/images/founder/leonel-oussou.jpg" 
                alt="Léonel OUSSOU - Fondateur de TontiGo" 
                className="rounded-xl shadow-lg w-full h-auto object-cover aspect-[3/4]"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-500 text-white p-5 rounded-lg shadow-md max-w-xs">
                <p className="font-bold text-lg">Léonel OUSSOU</p>
                <p className="text-sm">Fondateur & CEO, TontiGo</p>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold mb-4">De la Réalité Quotidienne à l'Innovation Financière</h3>
            <p className="text-lg text-neutral-600 mb-6">
              Ce projet n'est pas né dans un bureau climatisé, mais dans la réalité quotidienne des communautés africaines.
              Là où l'épargne se fait à la main, la confiance se construit dans les groupes, et où chaque franc compte.
            </p>
            <p className="text-lg text-neutral-600 mb-8">
              C'est dans cette Afrique réelle que Léonel Oussou a imaginé TontiGo, comme un outil de transformation collective.
            </p>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-primary-500 mb-8">
              <p className="text-xl font-medium italic text-neutral-700">
                "TontiGo n'est pas juste une application. C'est un outil de liberté économique. Je veux que nos communautés n'aient plus besoin de s'adapter aux systèmes, mais que le système s'adapte à elles."
              </p>
            </div>
            
            <p className="text-lg text-neutral-600">
              TontiGo est né d'un besoin profond, d'un désir d'autonomie : pour que l'avenir financier de l'Afrique ne soit plus dicté de l'extérieur, mais construit avec ses valeurs, ses codes et ses réseaux.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Contactez-Nous
              </a>
              <a href="#services" className="btn-secondary">
                Découvrir Nos Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;