import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { Shield, Smartphone, Users, Check } from 'lucide-react';

const WhyChooseSection: React.FC = () => {
  return (
    <section id="why-choose" className="section bg-white py-20">
      <div className="container">
        <SectionTitle 
          title="Pourquoi Choisir TontiGo ?" 
          subtitle="Découvrez ce qui nous distingue dans l'écosystème fintech africain"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 mt-16">
          <div className="animate-on-scroll group hover:bg-primary-50 p-6 rounded-xl transition-all">
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 h-16 w-16 rounded-full flex items-center justify-center text-white mb-6 shadow-md group-hover:scale-110 transition-transform">
              <Shield size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors">Sécurité Totale</h3>
            <p className="text-neutral-600">
              Chaque transaction est enregistrée sur la blockchain Stellar : infalsifiable, traçable, et 100 % transparente.
            </p>
            <div className="mt-6 pt-4 border-t border-neutral-200">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-600">Protection des données utilisateurs</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-600">Cryptage de bout en bout</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-600">Garantie anti-fraude</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="animate-on-scroll group hover:bg-primary-50 p-6 rounded-xl transition-all">
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 h-16 w-16 rounded-full flex items-center justify-center text-white mb-6 shadow-md group-hover:scale-110 transition-transform">
              <Smartphone size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors">Accessibilité Vraie</h3>
            <p className="text-neutral-600">
              TontiGo fonctionne sur tous les téléphones Android classiques, même avec une faible connexion. Il est pensé pour les utilisateurs ruraux comme urbains.
            </p>
            <div className="mt-6 pt-4 border-t border-neutral-200">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-600">Mode hors-ligne disponible</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-600">Interface adaptée à tous les niveaux</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-600">Support multilingue</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="animate-on-scroll group hover:bg-primary-50 p-6 rounded-xl transition-all">
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 h-16 w-16 rounded-full flex items-center justify-center text-white mb-6 shadow-md group-hover:scale-110 transition-transform">
              <Users size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors">Impact Social Réel</h3>
            <p className="text-neutral-600">
              Inclusion financière de millions d'exclus du système bancaire, autonomisation des femmes et des jeunes entrepreneurs, création de réseaux de commerce local.
            </p>
            <div className="mt-6 pt-4 border-t border-neutral-200">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-600">80% de nos utilisateurs sont des femmes</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-600">65% accèdent au crédit pour la 1ère fois</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-600">Support aux initiatives locales</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-20 bg-gradient-to-br from-primary-50 to-white rounded-2xl overflow-hidden animate-on-scroll shadow-lg border border-primary-100">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-4 relative">
                <span className="text-highlight">La Technologie au Service de la Tradition</span>
              </h3>
              <p className="text-neutral-600 mb-6">
                En fusionnant pratiques traditionnelles d'épargne et technologies modernes, nous créons un modèle financier unique adapté aux réalités africaines.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center group">
                  <div className="h-10 w-10 rounded-full bg-primary-500 flex items-center justify-center text-white mr-3 group-hover:scale-110 transition-transform">
                    <Check size={20} />
                  </div>
                  <p className="text-neutral-700 font-medium">Une approche centrée sur l'utilisateur</p>
                </div>
                <div className="flex items-center group">
                  <div className="h-10 w-10 rounded-full bg-primary-500 flex items-center justify-center text-white mr-3 group-hover:scale-110 transition-transform">
                    <Check size={20} />
                  </div>
                  <p className="text-neutral-700 font-medium">Des solutions développées localement</p>
                </div>
                <div className="flex items-center group">
                  <div className="h-10 w-10 rounded-full bg-primary-500 flex items-center justify-center text-white mr-3 group-hover:scale-110 transition-transform">
                    <Check size={20} />
                  </div>
                  <p className="text-neutral-700 font-medium">Un impact mesurable et durable</p>
                </div>
              </div>
              <a href="#contact" className="btn-primary mt-8 inline-block">
                En Savoir Plus
              </a>
            </div>
            <div className="hidden md:block relative">
              <img 
                src="/images/why-choose/main.jpg" 
                alt="Une femme entrepreneur utilisant la technologie mobile pour gérer ses finances" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-primary-500/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;