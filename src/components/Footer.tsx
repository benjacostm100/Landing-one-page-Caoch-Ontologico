
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-simon-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-simon-orange">S</span>imón Castagnaro
            </h3>
            <p className="text-gray-300 mb-4">
              Coach Ontológico Profesional dedicado a transformar vidas y organizaciones a través del poder de la conversación y la acción.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-gray-300 hover:text-simon-orange transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#biografia" className="text-gray-300 hover:text-simon-orange transition-colors">
                  Biografía
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-300 hover:text-simon-orange transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#beneficios" className="text-gray-300 hover:text-simon-orange transition-colors">
                  Beneficios
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-300 hover:text-simon-orange transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">¿Hablamos?</h4>
            <p className="text-gray-300 mb-2">
              Email: contacto@simoncastagnaro.com
            </p>
            <p className="text-gray-300 mb-4">
              Teléfono: +54 9 11 4670-0459
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-simon-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-simon-orange transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-simon-orange transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-simon-orange transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Simón Castagnaro. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
