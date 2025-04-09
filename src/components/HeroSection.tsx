import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDownCircle, PhoneCall } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-simon-light-gray">
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      <div className="relative z-10 px-4 md:px-8 text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span className="text-simon-black">Simón Castagnaro</span>
          <span className="block text-simon-orange mt-2">Coach Ontológico</span>
        </h1>

        <p className="text-xl text-simon-gray mb-8 max-w-xl mx-auto">
          Transformando vidas y organizaciones a través del poder del coaching ontológico profesional.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="bg-simon-orange hover:bg-simon-orange/90 text-white px-8 py-6 text-lg flex items-center gap-2"
            asChild
          >
            <a href="#biografia">
              <ArrowDownCircle className="mr-2" size={20} />
              Más información
            </a>
          </Button>

          <Button 
            className="bg-simon-black hover:bg-simon-black/90 text-white px-8 py-6 text-lg flex items-center gap-2"
            asChild
          >
            <a href="tel:+123456789">
              <PhoneCall className="mr-2" size={20} />
              Llamar ahora
            </a>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#biografia" className="text-simon-orange">
          <ArrowDownCircle size={36} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
