
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Mensaje enviado",
        description: "¡Gracias por contactarnos! Te responderemos a la brevedad.",
      });

      // Reset form
      setFormData({
        nombre: '',
        email: '',
        mensaje: ''
      });
    }, 1500);
  };

  return (
    <section id="contacto" className="section-padding bg-simon-light-gray">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-simon-black mb-4">Contacto</h2>
          <div className="w-20 h-1 bg-simon-orange mx-auto mb-6"></div>
          <p className="text-simon-gray max-w-3xl mx-auto">
            ¿Listo para empezar tu transformación? Envíame un mensaje y con gusto te responderé a la brevedad.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-simon-black mb-1">
                Nombre completo
              </label>
              <Input
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Ingresa tu nombre"
                required
                className="w-full focus-shadow"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-simon-black mb-1">
                Correo electrónico
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Ingresa tu email"
                required
                className="w-full focus-shadow"
              />
            </div>
            
            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-simon-black mb-1">
                Tu mensaje
              </label>
              <Textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="¿En qué puedo ayudarte?"
                required
                className="w-full min-h-[150px] focus-shadow"
              />
            </div>
            
            <div className="flex justify-center">
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-simon-orange hover:bg-simon-orange/90 text-white px-8 py-6 text-lg flex items-center gap-2"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </form>
          
          <div className="mt-12 grid sm:grid-cols-2 gap-6 text-center">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-simon-black mb-2">Correo electrónico</h3>
              <a href="mailto:contacto@simoncastagnaro.com" className="text-simon-orange hover:underline">
                contacto@simoncastagnaro.com
              </a>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-simon-black mb-2">Teléfono</h3>
              <a href="tel:+5491112345678" className="text-simon-orange hover:underline">
                +54 9 11 4670-0459
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
