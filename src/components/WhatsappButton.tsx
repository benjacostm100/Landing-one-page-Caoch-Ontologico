
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsappButton = () => {
  // WhatsApp number in international format
  const phoneNumber = "+5491112345678";
  const message = "Hola Simón, estoy interesado en tus servicios de coaching. ¿Podemos conversar?";
  
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };
  
  return (
    <button 
      onClick={handleClick}
      className="whatsapp-button"
      aria-label="Contactar por WhatsApp"
      title="Contáctame por WhatsApp"
    >
      <MessageCircle size={28} fill="white" />
    </button>
  );
};

export default WhatsappButton;
