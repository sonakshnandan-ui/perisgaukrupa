import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => (
  <a
    href="https://wa.me/917032289893?text=Hello%20I%20am%20interested%20in%20your%20products"
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-float"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="h-6 w-6 text-primary-foreground" />
  </a>
);

export default WhatsAppFloat;
