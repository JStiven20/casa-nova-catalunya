
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleWhatsAppClick = async () => {
    const phoneNumber = "34630208375"; // Teléfono de Esty Fuster
    const message = encodeURIComponent("Hola, vi su página web de Nouspai y me interesa información sobre sus servicios de construcción y carpintería. ¿Podrían enviarme más detalles?");
    
    // Registrar el contacto en la base de datos
    try {
      await fetch('/api/whatsapp-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: "Contacto WhatsApp",
          phone: "Usuario contactó por WhatsApp",
          service: "consulta-general",
          message: "Usuario hizo clic en el botón de WhatsApp de la web",
          source: "whatsapp"
        }),
      });
    } catch (error) {
      console.log('Error registrando contacto WhatsApp:', error);
    }
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  );
};

export default WhatsAppButton;
