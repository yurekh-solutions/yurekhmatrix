import { Phone } from 'lucide-react';

const PhoneContact = () => {
  const phoneNumber = "+919136242706";

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <button
      onClick={handleCall}
      className="fixed bottom-24 sm:bottom-28 right-4 sm:right-6 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-primary via-primary to-primary-glow hover:from-primary-glow  hover:via-primary hover:to-primary text-primary-foreground shadow-lg hover:shadow-elegant transition-all duration-300 flex items-center justify-center group hover:scale-110 active:scale-95"
      aria-label="Call us"
    >
      <Phone className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110" />
    </button>
  );
};

export default PhoneContact;
