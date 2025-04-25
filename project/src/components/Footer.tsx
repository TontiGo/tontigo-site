import React from 'react';
import { CreditCard, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-800 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <CreditCard size={32} className="text-primary-500" />
              <span className="text-2xl font-bold text-white">TontiGo</span>
            </div>
            <p className="text-neutral-300">
              Une plateforme fintech inclusive qui digitalise les tontines traditionnelles, 
              et stimule les économies locales.
            </p>
            <div className="flex mt-6 space-x-4">
              <a href="#" className="text-white hover:text-primary-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary-500 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Liens Rapides</h4>
            <ul className="space-y-3">
              <li>
                <a href="#vision" className="text-neutral-300 hover:text-primary-500 transition-colors">
                  Notre Vision
                </a>
              </li>
              <li>
                <a href="#services" className="text-neutral-300 hover:text-primary-500 transition-colors">
                  Nos Services
                </a>
              </li>
              <li>
                <a href="#why-choose" className="text-neutral-300 hover:text-primary-500 transition-colors">
                  Pourquoi Nous Choisir
                </a>
              </li>
              <li>
                <a href="#founder" className="text-neutral-300 hover:text-primary-500 transition-colors">
                  Notre Fondateur
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-neutral-300 hover:text-primary-500 transition-colors">
                  Tontines Digitales
                </a>
              </li>
              <li>
                <a href="#services" className="text-neutral-300 hover:text-primary-500 transition-colors">
                  Marketplace Local
                </a>
              </li>
              <li>
                <a href="#services" className="text-neutral-300 hover:text-primary-500 transition-colors">
                  Réseau Communautaire
                </a>
              </li>
              <li>
                <a href="#services" className="text-neutral-300 hover:text-primary-500 transition-colors">
                  Suivi Financier
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="mr-3 h-5 w-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-300">tontigo.contact@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="mr-3 h-5 w-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-300">+229 1 62 24 02 54</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-300">Cotonou, Bénin</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-700 mt-12 pt-8 text-center text-neutral-400">
          <p>&copy; {new Date().getFullYear()} TontiGo. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;