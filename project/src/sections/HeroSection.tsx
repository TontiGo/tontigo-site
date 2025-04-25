import React from 'react';
import { ChevronRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-br from-primary-50 via-white to-secondary-50 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="hero-content-anim">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-50 text-primary-600 font-medium text-sm mb-6 border border-primary-100">
              Tontine digitale en Afrique
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-neutral-800 mb-6">
              Révolutionner la Finance <span className="gradient-text">Communautaire</span> en Afrique
            </h1>
            <p className="text-lg text-neutral-600 mb-8 max-w-xl">
              Une plateforme fintech inclusive qui digitalise les tontines traditionnelles, 
              stimule les économies locales et redonne du pouvoir aux communautés africaines.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://incredible-alpaca-3ca86d.netlify.app" className="btn-primary group">
                Essayer la solution
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 md:flex md:gap-6 gap-4 text-neutral-700">
              <div className="flex items-center gap-2 p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 text-white flex items-center justify-center font-bold text-xl shadow-md">
                  +
                </div>
                <div>
                  <p className="font-bold">100k+</p>
                  <p className="text-sm text-neutral-500">Utilisateurs attendus</p>
                </div>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-secondary-500 to-secondary-600 text-white flex items-center justify-center font-bold text-xl shadow-md">
                  #
                </div>
                <div>
                  <p className="font-bold">Bénin</p>
                  <p className="text-sm text-neutral-500">Premier marché</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative hero-image-anim">
            <div className="relative bg-white rounded-2xl shadow-intense overflow-hidden animate-pulse-subtle">
              <img 
                src="/images/hero/main.jpg" 
                alt="Groupe de femmes utilisant l'application TontiGo pour gérer leurs tontines" 
                className="w-full object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <p className="font-semibold text-lg">Transformez votre épargne communautaire avec TontiGo</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary-500 text-white p-4 rounded-lg shadow-lg animate-float">
              <p className="font-bold">Partenaire technologique</p>
              <p className="text-sm">
                <a href="https://intside.com/" className="text-white hover:text-neutral-100 hover:underline transition-colors">
                  intside.com
                </a>
              </p>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 h-20 w-20 rounded-full bg-primary-200 opacity-30 animate-pulse-subtle"></div>
            <div className="absolute top-1/2 -right-6 h-12 w-12 rounded-full bg-secondary-300 opacity-40 animate-float"></div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-primary-200 opacity-50"></div>
      <div className="absolute top-1/3 -left-20 h-60 w-60 rounded-full bg-secondary-200 opacity-40"></div>
      <div className="absolute -bottom-20 right-1/4 h-52 w-52 rounded-full bg-primary-100 opacity-60"></div>
      
      {/* Mesh gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,123,255,0.1),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(18,183,106,0.1),transparent_30%)] pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;