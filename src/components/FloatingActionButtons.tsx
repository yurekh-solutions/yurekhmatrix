import { Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingActionButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/917021341409"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
        aria-label="Contact us on WhatsApp"
      >
        <Button
          size="icon"
          className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] 
                     shadow-lg hover:shadow-2xl transition-all duration-300 
                     hover:scale-110 glass-card border-white/20"
        >
          <MessageCircle className="h-7 w-7 text-white" />
        </Button>
      </a>

      {/* Phone */}
      <a 
        href="tel:+917021341409" 
        className="group"
        aria-label="Call us"
      >
        <Button
          size="icon"
          className="h-14 w-14 rounded-full bg-blue-500 hover:bg-blue-600 
                     shadow-lg hover:shadow-2xl transition-all duration-300 
                     hover:scale-110 glass-card border-white/20"
        >
          <Phone className="h-6 w-6 text-white" />
        </Button>
      </a>

      {/* Email */}
      <a 
        href="mailto:support@materialmatrix.ai" 
        className="group"
        aria-label="Email us"
      >
        <Button
          size="icon"
          className="h-14 w-14 rounded-full bg-orange-500 hover:bg-orange-600 
                     shadow-lg hover:shadow-2xl transition-all duration-300 
                     hover:scale-110 glass-card border-white/20"
        >
          <Mail className="h-6 w-6 text-white" />
        </Button>
      </a>
    </div>
  );
};

export default FloatingActionButtons;
