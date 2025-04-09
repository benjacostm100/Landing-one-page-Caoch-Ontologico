
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Inicio", href: "#hero" },
    { name: "Biografía", href: "#biografia" },
    { name: "Servicios", href: "#servicios" },
    { name: "Beneficios", href: "#beneficios" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold text-simon-black flex items-center">
          <span className="text-simon-orange">S</span>imón Castagnaro
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-simon-black hover:text-simon-orange font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <Button 
            variant="default" 
            className="bg-simon-orange hover:bg-simon-orange/90 text-white"
          >
            Llamar ahora
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            onClick={toggleMenu} 
            className="text-simon-black focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white w-full border-t">
          <div className="container mx-auto py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-simon-black hover:text-simon-orange font-medium py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            
            <Button 
              variant="default" 
              className="bg-simon-orange hover:bg-simon-orange/90 text-white w-full"
            >
              Llamar ahora
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
