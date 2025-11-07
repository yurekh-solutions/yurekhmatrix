import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Languages, Globe, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

const languages: Language[] = [
  { code: "en", name: "English", nativeName: "English", flag: "🇬🇧" },
  { code: "hi", name: "Hindi", nativeName: "हिंदी", flag: "🇮🇳" },
];

interface FirstVisitLanguageModalProps {
  onLanguageSelect: (langCode: string) => void;
}

const FirstVisitLanguageModal = ({ onLanguageSelect }: FirstVisitLanguageModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");
  const [hoveredLanguage, setHoveredLanguage] = useState<string | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem("hasVisitedBefore");
    const savedLanguage = localStorage.getItem("preferredLanguage");

    if (!hasVisited) {
      // First time visitor - show modal
      setIsOpen(true);
    } else if (savedLanguage) {
      // Returning visitor - use saved preference
      setSelectedLanguage(savedLanguage);
    }
  }, []);

  const handleLanguageSelect = (langCode: string) => {
    setSelectedLanguage(langCode);
  };

  const handleContinue = () => {
    // Mark as visited and save preference
    localStorage.setItem("hasVisitedBefore", "true");
    localStorage.setItem("preferredLanguage", selectedLanguage);
    
    // Close modal with animation
    setIsOpen(false);
    
    // Trigger language change
    setTimeout(() => {
      onLanguageSelect(selectedLanguage);
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999]"
            style={{
              background: "linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 100%)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
            }}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
              className="w-full max-w-2xl mx-auto"
            >
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                {/* Decorative background */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary to-secondary rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary to-primary rounded-full blur-3xl" />
                </div>

                {/* Header */}
                <div className="relative px-8 pt-12 pb-6 text-center border-b border-gray-100">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-gradient-to-br from-primary via-primary/90 to-secondary shadow-xl"
                  >
                    <Globe className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                  >
                    {t('firstVisit.title')}
                  </motion.h2>
                  
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl font-semibold text-gray-700 mb-2"
                  >
                    {t('firstVisit.subtitle')}
                  </motion.h3>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-500 max-w-md mx-auto"
                  >
                    {t('firstVisit.description')}
                  </motion.p>
                </div>

                {/* Language Options */}
                <div className="relative px-8 py-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
                    {languages.map((language, index) => (
                      <motion.div
                        key={language.code}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <button
                          onClick={() => handleLanguageSelect(language.code)}
                          onMouseEnter={() => setHoveredLanguage(language.code)}
                          onMouseLeave={() => setHoveredLanguage(null)}
                          className={`
                            relative w-full p-6 rounded-2xl border-2 transition-all duration-300
                            ${
                              selectedLanguage === language.code
                                ? "border-primary bg-gradient-to-br from-primary/10 to-secondary/10 shadow-lg"
                                : "border-gray-200 bg-white hover:border-primary/50 hover:shadow-md"
                            }
                          `}
                        >
                          {/* Flag */}
                          <div className="text-5xl mb-3">{language.flag}</div>
                          
                          {/* Language Name */}
                          <div className="text-2xl font-bold text-gray-800 mb-1">
                            {language.nativeName}
                          </div>
                          <div className="text-sm text-gray-500">
                            {language.name}
                          </div>

                          {/* Selection Indicator */}
                          <AnimatePresence>
                            {selectedLanguage === language.code && (
                              <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0, opacity: 0 }}
                                className="absolute top-3 right-3"
                              >
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md">
                                  <CheckCircle2 className="w-5 h-5 text-white" />
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>

                          {/* Hover Effect */}
                          {hoveredLanguage === language.code && selectedLanguage !== language.code && (
                            <motion.div
                              layoutId="hover-indicator"
                              className="absolute inset-0 rounded-2xl border-2 border-primary/30"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                            />
                          )}
                        </button>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="relative px-8 pb-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="text-center"
                  >
                    <Button
                      onClick={handleContinue}
                      size="lg"
                      className="px-12 py-6 text-lg font-semibold rounded-xl bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all"
                    >
                      <Languages className="w-5 h-5 mr-2" />
                      {t('firstVisit.continue')}
                    </Button>
                    
                    <p className="mt-4 text-sm text-gray-400">
                      You can change language anytime from the navigation bar
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FirstVisitLanguageModal;
