
import React from 'react';
import { Lightbulb, Target, MessageCircle, TrendingUp, Users, Award } from 'lucide-react';

const BeneficiosSection = () => {
  const beneficios = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Autoconocimiento",
      description: "Descubre tus fortalezas y áreas de mejora para potenciar tu desarrollo personal."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Claridad en objetivos",
      description: "Define metas claras y desarrolla estrategias efectivas para alcanzarlas."
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Comunicación efectiva",
      description: "Mejora tus habilidades comunicativas y construye relaciones más sólidas."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Aumento de productividad",
      description: "Optimiza tu tiempo y recursos para lograr mejores resultados."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Liderazgo consciente",
      description: "Desarrolla tu capacidad de influir e inspirar positivamente a otros."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Mejora continua",
      description: "Adopta una mentalidad de crecimiento y aprendizaje permanente."
    }
  ];

  return (
    <section id="beneficios" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-simon-black mb-4">Beneficios Clave</h2>
          <div className="w-20 h-1 bg-simon-orange mx-auto mb-6"></div>
          <p className="text-simon-gray max-w-3xl mx-auto">
            Descubre cómo el coaching ontológico puede transformar tu vida personal y profesional
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {beneficios.map((beneficio, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-6 bg-simon-light-gray rounded-lg transition-transform duration-300 hover:transform hover:-translate-y-1"
            >
              <div className="bg-simon-orange text-white p-4 rounded-full mb-4">
                {beneficio.icon}
              </div>
              <h3 className="text-xl font-bold text-simon-black mb-2">
                {beneficio.title}
              </h3>
              <p className="text-simon-gray text-center">
                {beneficio.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeneficiosSection;
