
import React from 'react';
import { UserCircle, Users, Building2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      title: "Coaching Individual",
      description: "Sesiones personalizadas para potenciar tu desarrollo personal y profesional. Trabaja en tus objetivos, supera obstáculos y alcanza tu mejor versión.",
      icon: <UserCircle className="h-12 w-12 text-simon-orange mb-4" />,
      cta: "Agenda tu sesión"
    },
    {
      title: "Capacitaciones Grupales",
      description: "Talleres y programas diseñados para equipos que buscan mejorar sus habilidades de comunicación, liderazgo y trabajo colaborativo.",
      icon: <Users className="h-12 w-12 text-simon-orange mb-4" />,
      cta: "Conoce nuestros talleres"
    },
    {
      title: "Coaching para Empresas",
      description: "Programas integrales para organizaciones que buscan transformar su cultura, potenciar el liderazgo y mejorar los resultados del negocio.",
      icon: <Building2 className="h-12 w-12 text-simon-orange mb-4" />,
      cta: "Soluciones empresariales"
    }
  ];

  return (
    <section id="servicios" className="section-padding bg-simon-light-gray">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-simon-black mb-4">Nuestros Servicios</h2>
          <div className="w-20 h-1 bg-simon-orange mx-auto mb-6"></div>
          <p className="text-simon-gray max-w-3xl mx-auto">
            Ofrezco diferentes modalidades de coaching adaptadas a tus necesidades y objetivos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="service-card border-none">
              <CardHeader className="text-center">
                <div className="flex justify-center">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-simon-black">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-simon-gray text-center text-base min-h-[100px]">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button variant="default" className="bg-simon-orange hover:bg-simon-orange/90 text-white">
                  {service.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
