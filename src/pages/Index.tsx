
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import BiografiaSection from '@/components/BiografiaSection';
import ServicesSection from '@/components/ServicesSection';
import BeneficiosSection from '@/components/BeneficiosSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import WhatsappButton from '@/components/WhatsappButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BiografiaSection />
      <ServicesSection />
      <BeneficiosSection />
      <ContactForm />
      <Footer />
      <WhatsappButton />
    </div>
  );
};

export default Index;
