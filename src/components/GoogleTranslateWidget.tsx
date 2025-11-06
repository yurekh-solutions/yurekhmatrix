import { useEffect } from "react";
import { 
  setGoogleTranslateCookie, 
  getGoogleTranslateCookie,
  getLanguagePreference,
  isReloadPending,
  setReloadPending,
  clearReloadPending
} from "@/lib/translationUtils";

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: {
      translate: {
        TranslateElement: {
          new (config: unknown, elementId: string): void;
          InlineLayout: {
            SIMPLE: number;
          };
        };
      };
    };
  }
}

const GoogleTranslateWidget = () => {
  useEffect(() => {
    // Add the Google Translate script
    const addScript = () => {
      // Check if script already exists
      if (document.querySelector('script[src*="translate.google.com"]')) {
        return;
      }

      // Initialize Google Translate
      window.googleTranslateElementInit = () => {
        if (window.google && window.google.translate) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages: "en,hi",
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false,
              multilanguagePage: true,
            },
            "google_translate_element"
          );
          
          console.log("✅ Google Translate initialized");
          
          // Get both preferences
          const savedLanguage = getLanguagePreference();
          const cookieLang = getGoogleTranslateCookie();
          
          console.log("📌 localStorage:", savedLanguage, "| 🍪 Cookie:", cookieLang);
          
          // Handle synchronization for all navigation scenarios
          if (savedLanguage && savedLanguage !== "en") {
            if (cookieLang !== savedLanguage) {
              console.log("🔄 Syncing cookie with localStorage...");
              setGoogleTranslateCookie(savedLanguage);
              
              // Prevent infinite reload loop with flag
              if (!isReloadPending()) {
                setReloadPending();
                setTimeout(() => {
                  window.location.replace(window.location.pathname + window.location.search);
                }, 200);
              }
            } else {
              // Already in sync
              clearReloadPending();
            }
          } else if (!savedLanguage && cookieLang && cookieLang !== "en") {
            // Cookie exists but localStorage missing - sync back
            console.log("🔄 Syncing localStorage with cookie...");
            localStorage.setItem("preferredLanguage", cookieLang);
          } else {
            // Both are English or in sync
            clearReloadPending();
          }
        }
      };

      // Load Google Translate script
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.getElementsByTagName("head")[0].appendChild(script);
    };

    addScript();
  }, []);

  return (
    <>
      {/* Completely hidden Google Translate widget */}
      <div
        id="google_translate_element"
        style={{
          position: "absolute",
          top: "-9999px",
          left: "-9999px",
          width: "1px",
          height: "1px",
          overflow: "hidden",
          visibility: "hidden",
          opacity: 0,
          pointerEvents: "none",
        }}
      />
      
      {/* Hide Google Translate banner and UI elements */}
      <style>{`
        /* Hide Google Translate top banner */
        .goog-te-banner-frame,
        .goog-te-banner,
        .skiptranslate,
        iframe.skiptranslate {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          height: 0 !important;
          position: absolute !important;
          top: -9999px !important;
        }
        
        /* Prevent body top offset from Google Translate */
        body {
          top: 0 !important;
          position: static !important;
        }
        
        /* Hide Google Translate toolbar */
        .goog-te-gadget,
        .goog-te-combo {
          display: none !important;
        }
      `}</style>
    </>
  );
};

export default GoogleTranslateWidget;
