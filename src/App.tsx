import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/config";
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import BlogPost1 from "./pages/BlogPost1";
import BlogPost2 from "./pages/BlogPost2";
import BlogPost3 from "./pages/BlogPost3";
import BlogPost4 from "./pages/BlogPost4";
import BlogPost5 from "./pages/BlogPost5";
import BlogPost6 from "./pages/BlogPost6";
import HelpCenter from "./pages/HelpCenter";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import FAQs from "./pages/FAQQ";
import Careers from "./pages/Careers";
import RFQ from "./pages/RFQ";
import MaterialInquiry from "./pages/MaterialInquiry";
import MiloAI from "./pages/MiloAI";
import MiloGuideHub from "./pages/MiloGuideHub";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import GoogleTranslateWidget from "./components/GoogleTranslateWidget";
import FirstVisitLanguageModal from "./components/FirstVisitLanguageModal";
import { applyTranslation } from "./lib/translationUtils";

const queryClient = new QueryClient();

const App = () => {
  const handleLanguageSelect = (langCode: string) => {
    // Change i18n language
    i18n.changeLanguage(langCode);
    
    // Apply Google Translate for full site translation
    if (langCode !== "en") {
      applyTranslation(langCode, true);
    }
  };

  return (
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <GoogleTranslateWidget />
          <FirstVisitLanguageModal onLanguageSelect={handleLanguageSelect} />
          <BrowserRouter>
            {/* ✅ Correct placement for ScrollToTop */}
            <ScrollToTop />

            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blog/1" element={<BlogPost1 />} />
              <Route path="/blog/2" element={<BlogPost2 />} />
              <Route path="/blog/3" element={<BlogPost3 />} />
              <Route path="/blog/4" element={<BlogPost4 />} />
              <Route path="/blog/5" element={<BlogPost5 />} />
              <Route path="/blog/6" element={<BlogPost6 />} />
              <Route path="/help-center" element={<HelpCenter />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/rfq" element={<RFQ />} />
              <Route path="/inquiry" element={<MaterialInquiry />} />
              <Route path="/milo" element={<MiloAI />} />
              <Route path="/milo-guide" element={<MiloGuideHub />} />
              {/* Catch-all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </I18nextProvider>
  );
};

export default App;
