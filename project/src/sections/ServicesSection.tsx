import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import { Landmark, ShoppingBag, MessagesSquare, BarChart4, ChevronRight, Users } from 'lucide-react';

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="section bg-neutral-50 py-20">
      <div className="container">
        <SectionTitle 
          title="Nos Services – Un Écosystème Complet" 
          subtitle="Des solutions innovantes pour répondre à tous vos besoins financiers communautaires"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <ServiceCard 
            title="Tontines Digitales" 
            description="La Force du Groupe, Sécurisée par la Tech"
            icon={<Landmark size={24} />}
            features={[
              "Création de tontines privées, publiques ou personnalisées",
              "Gestion des tours, cotisations et retraits en temps réel",
              "Interface simple, même pour les non-initiés",
              "Sécurisation des données via la blockchain Stellar"
            ]}
          />
          
          <ServiceCard 
            title="Marketplace Local" 
            description="Connecter l'Économie de Proximité"
            icon={<ShoppingBag size={24} />}
            features={[
              "Achat et vente de produits ou services",
              "Interface géolocalisée",
              "Paiements sécurisés via intégration numérique",
              "Soutien aux commerces locaux et à l'économie circulaire"
            ]}
          />
          
          <ServiceCard 
            title="Réseau Communautaire" 
            description="Échanger, Partager, Collaborer"
            icon={<MessagesSquare size={24} />}
            features={[
              "Discussions privées ou en groupes thématiques",
              "Mise en relation intelligente selon les centres d'intérêt",
              "Plateforme sécurisée via Matrix",
              "Partage de conseils et bonnes pratiques"
            ]}
          />
          
          <ServiceCard 
            title="Suivi Financier" 
            description="Visualisez et Maîtrisez Vos Finances"
            icon={<BarChart4 size={24} />}
            features={[
              "Visualisation claire de vos tontines et échanges",
              "Alertes personnalisées, historique détaillé",
              "Support éducatif sur l'éducation financière",
              "Tableaux de bord personnalisables"
            ]}
          />
          
          <ServiceCard 
            title="Communautés d'Entraide" 
            description="Ensemble vers la prospérité"
            icon={<Users size={24} />}
            features={[
              "Groupes thématiques par métier ou région",
              "Partage de ressources et d'opportunités",
              "Organisation d'événements collaboratifs",
              "Actions solidaires entre membres"
            ]}
          />
          
          <div className="card h-full bg-gradient-to-br from-primary-500 to-primary-600 text-white animate-on-scroll flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Besoin d'une Solution Sur Mesure?</h3>
            <p className="mb-6">Nous pouvons adapter nos services à vos besoins spécifiques. Contactez-nous pour une consultation personnalisée.</p>
            <a href="#contact" className="bg-white text-primary-500 btn hover:bg-neutral-100 transition-colors mt-auto self-start group">
              Nous Contacter
              <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
        
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 animate-on-scroll border border-neutral-100 hover:border-primary-100 transition-all hover:shadow-intense">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Accédez à tous nos services avec une seule solution</h3>
              <p className="text-neutral-600">
                Découvrez l'ensemble de notre écosystème financier conçu pour les communautés africaines.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <a href="https://incredible-alpaca-3ca86d.netlify.app" className="btn-primary group">
                Essayer la solution
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;