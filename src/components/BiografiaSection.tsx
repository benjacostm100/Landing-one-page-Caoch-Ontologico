import React from 'react';
import { GraduationCap, Users, Award } from 'lucide-react';
import SimonCoachImage from '@/components/images/Simon-Coach.png';

const BiografiaSection = () => {
  return (
    <section id="biografia" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mi Historia</h2>
          <div className="w-20 h-1 bg-simon-orange mx-auto mb-6"></div>
          <p className="text-simon-gray max-w-3xl mx-auto">
            Conoce mi trayectoria y experiencia en el mundo del coaching ontológico
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={SimonCoachImage} 
              alt="Simón Castagnaro Biography" 
              className="max-w-xs mx-auto rounded-lg shadow-lg"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-simon-black mb-6">
              Coaching con propósito y pasión
            </h3>

            <p className="text-simon-gray mb-6 text-lg">
              Me recibí como <span className="font-medium">Coach Ontológico Profesional</span> en la prestigiosa Universidad de Buenos Aires (UBA), donde desarrollé las habilidades y conocimientos necesarios para transformar vidas y organizaciones.
            </p>

            <p className="text-simon-gray mb-8 text-lg">
              A lo largo de mi trayectoria, he trabajado con personas y empresas que buscan desarrollar todo su potencial, mejorar su liderazgo y lograr resultados extraordinarios a través del poder de la conversación y la acción.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-simon-orange/10 p-3 rounded-full mr-4">
                  <GraduationCap className="text-simon-orange" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Formación en UBA</h4>
                  <p className="text-simon-gray text-sm">Certificado como Coach Ontológico Profesional</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-simon-orange/10 p-3 rounded-full mr-4">
                  <Users className="text-simon-orange" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Experiencia Comprobada</h4>
                  <p className="text-simon-gray text-sm">Amplia trayectoria trabajando con personas y organizaciones</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-simon-orange/10 p-3 rounded-full mr-4">
                  <Award className="text-simon-orange" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Resultados Tangibles</h4>
                  <p className="text-simon-gray text-sm">Transformando vidas y organizaciones con metodología efectiva</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiografiaSection;
