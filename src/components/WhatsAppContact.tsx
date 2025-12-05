import { useState } from 'react';
import { MessageCircle, X, Phone } from 'lucide-react';

const WhatsAppContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const whatsappNumber = "919136242706";
  const whatsappMessage = "Hello! I'm interested in learning more about RitzYard services.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Button */}
      <div
        className="fixed bottom-6 right-6 z-40 group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Dialog Popup */}
        {isOpen && (
          <div className="absolute bottom-20 right-0 w-80 mb-4 animate-in fade-in slide-in-from-bottom-3 duration-300">
            <div className="glass-card border-2 border-white/30 shadow-2xl rounded-3xl overflow-hidden backdrop-blur-2xl bg-gradient-to-br from-slate-900/95 to-slate-800/95">
              {/* Header */}
              <div className="bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-green-500/20 border-b border-white/20 p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg animate-bounce">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Chat with us</h3>
                <p className="text-sm text-gray-300">We're here to help! Connect via WhatsApp</p>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <p className="text-sm text-gray-300 mb-3">
                    ✓ Quick response<br/>
                    ✓ Product inquiries<br/>
                    ✓ Supplier onboarding<br/>
                    ✓ Available 24/7
                  </p>
                </div>

                {/* Button */}
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50 flex items-center justify-center gap-2 group/btn"
                >
                  <MessageCircle className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                  <span>Start Chat on WhatsApp</span>
                </button>

                <p className="text-xs text-gray-400 text-center">
                  Response time: Usually within 1 hour
                </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/20 to-transparent rounded-full blur-2xl -mr-16 -mt-16 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-emerald-500/20 to-transparent rounded-full blur-2xl -ml-12 -mb-12 opacity-50"></div>
              </div>
            </div>
          </div>
        )}

        {/* Main Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group/main ${
            isOpen || isHovered ? 'scale-110' : 'scale-100'
          }`}
        >
          <MessageCircle className="w-7 h-7 transition-transform duration-300 group-hover/main:scale-125" />

          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full bg-green-400/30 animate-pulse"></div>

          {/* Notification badge */}
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-bounce">
            1
          </div>
        </button>

        {/* Floating label on hover */}
        {isHovered && !isOpen && (
          <div className="absolute bottom-16 right-0 bg-slate-900/95 text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap animate-in fade-in duration-200 border border-white/20">
            Chat with us
            <div className="absolute bottom-0 right-4 w-2 h-2 bg-slate-900/95 border-r border-b border-white/20 transform rotate-45 -mb-1"></div>
          </div>
        )}
      </div>

      {/* Backdrop when dialog is open */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default WhatsAppContact;
