import React, { useState, useEffect } from 'react';
import { Menu, X, CreditCard } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="text-primary-500 group-hover:text-primary-600 transition-colors">
            <CreditCard size={32} className="transition-transform group-hover:scale-110" />
          </div>
          <span className="text-2xl font-bold text-primary-500 group-hover:text-primary-600 transition-colors">TontiGo</span>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#vision" 
            className="text-neutral-700 hover:text-primary-500 transition-colors font-medium relative group"
          >
            <span>Notre Vision</span>
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
          </a>
          <a 
            href="#services" 
            className="text-neutral-700 hover:text-primary-500 transition-colors font-medium relative group"
          >
            <span>Services</span>
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
          </a>
          <a 
            href="#why-choose" 
            className="text-neutral-700 hover:text-primary-500 transition-colors font-medium relative group"
          >
            <span>Pourquoi Nous</span>
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
          </a>
          <a 
            href="#founder" 
            className="text-neutral-700 hover:text-primary-500 transition-colors font-medium relative group"
          >
            <span>Notre Fondateur</span>
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
          </a>
          <a 
            href="#contact" 
            className="text-neutral-700 hover:text-primary-500 transition-colors font-medium relative group"
          >
            <span>Contact</span>
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
          </a>
          <a 
            href="https://incredible-alpaca-3ca86d.netlify.app" 
            className="btn-primary"
          >
            Essayer Maintenant
          </a>
        </nav>

        <button 
          className="md:hidden text-neutral-800 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg animate-slide-down">
          <div className="container py-4 flex flex-col space-y-4">
            <a 
              href="#vision" 
              className="text-neutral-700 hover:text-primary-500 transition-colors font-medium py-2"
              onClick={toggleMenu}
            >
              Notre Vision
            </a>
            <a 
              href="#services" 
              className="text-neutral-700 hover:text-primary-500 transition-colors font-medium py-2"
              onClick={toggleMenu}
            >
              Services
            </a>
            <a 
              href="#why-choose" 
              className="text-neutral-700 hover:text-primary-500 transition-colors font-medium py-2"
              onClick={toggleMenu}
            >
              Pourquoi Nous
            </a>
            <a 
              href="#founder" 
              className="text-neutral-700 hover:text-primary-500 transition-colors font-medium py-2"
              onClick={toggleMenu}
            >
              Notre Fondateur
            </a>
            <a 
              href="#contact" 
              className="text-neutral-700 hover:text-primary-500 transition-colors font-medium py-2"
              onClick={toggleMenu}
            >
              Contact
            </a>
            <a 
              href="https://incredible-alpaca-3ca86d.netlify.app" 
              className="btn-primary text-center"
              onClick={toggleMenu}
            >
              Essayer Maintenant
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;