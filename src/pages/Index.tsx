import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppContact from "@/components/WhatsAppContact";
// import PhoneContact from "@/components/PhoneContact";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

import { Link } from "react-router-dom";
import {
  ArrowRight,
  TrendingUp,
  Clock,
  Package,
  Users,
  Shield,
  Lightbulb,
  BarChart3,
  Activity,
  Zap,
  Target,
  FileText,
  Mic ,
  Settings,
  Headphones,
  Play,
  Eye,
Sparkles ,
  CheckCircle,
  Timer,
  DollarSign,
  Truck,
  Smartphone,
  Phone,
  Mail,
  MapPin,
  Search,
  MessageSquare,
  User,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-construction.jpg";
import constructionSite from "@/assets/construction-site.jpg";
import constructionSites from "@/assets/construction-sites.jpg";
import constructionDelivery from "@/assets/construction-delivery.jpg";
import materialsWarehouse from "@/assets/materials-warehouse.jpg";
import smartWarehouse from "@/assets/smart-warehouse.jpg";
import globalNetwork from "@/assets/global-network.jpg";
import aiDashboard from "@/assets/ai-dashboard.jpg";
import aiSourcing from "@/assets/ai-sourcing-optimization.jpg";
import banner from "@/assets/banner.png";
import banner1 from "@/assets/banner1.png";
import banner2 from "@/assets/banner2.png";
import { products } from "@/data/products";
import AnimatedBackground from "@/components/AnimatedBackground";
import MarqueeSection from "@/components/MarqueeSection";
import Discover from "./Discover";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQQ";

import SEOHead from "@/components/SEOHead";
import LiveAnalytics from "@/components/LiveAnalytics";
import ProcurementFeatures from "@/components/ProcurementFeatures ";
import Section from "./Section";
import ProcurementGrid from "@/components/ProcurementGrid";

const Index = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    activeQuotes: 108,
    processing: 52,
    completedToday: 137,
    avgResponse: 20,
    totalOrders: 1163,
    pendingApprovals: 29,
    suppliers: 96,
    avgDelivery: 4.4,
  });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Close suggestions on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Inquiry form state for home page search
  const [inquiryForm, setInquiryForm] = useState({
    productName: "",
    specifications: "",
    name: "",
    phone: "",
    email: "",
    quantity: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  // Banner images array
  const bannerImages = [banner, banner1, banner2];
  
  // Filter products based on search
  const searchResults = searchQuery.trim() 
    ? products.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 8)
    : [];
  
  // Update inquiry form product name when search query changes
  useEffect(() => {
    if (searchQuery.trim()) {
      setInquiryForm(prev => ({ ...prev, productName: searchQuery }));
    }
  }, [searchQuery]);

  // Handle inquiry form submission
  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const message = `Product Inquiry from Home Search:\n\nProduct: ${inquiryForm.productName}\nSpecifications: ${inquiryForm.specifications || 'N/A'}\nName: ${inquiryForm.name}\nPhone: ${inquiryForm.phone}\nEmail: ${inquiryForm.email || 'N/A'}\nQuantity: ${inquiryForm.quantity || 'N/A'}`;
      const whatsappNumber = "919559262525";
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      
      window.open(whatsappUrl, "_blank");
      setSubmitSuccess(true);
      
      setTimeout(() => {
        setSubmitSuccess(false);
        setSearchQuery("");
        setInquiryForm({ productName: "", specifications: "", name: "", phone: "", email: "", quantity: "" });
      }, 2000);
    } catch (error) {
      console.error("Error submitting inquiry:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Shuffle products on component mount for AI recommendations
  const [recommendedProducts, setRecommendedProducts] = useState(() => {
    const shuffled = [...products].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 4);
  });

  // Get most inquired products - different from AI recommended
  const [mostInquiredProducts, setMostInquiredProducts] = useState(() => {
    const recommendedIds = new Set(recommendedProducts.map(p => p.id));
    const nonRecommended = products.filter(p => !recommendedIds.has(p.id));
    const categoryCount: Record<string, number> = {};
    nonRecommended.forEach(p => {
      categoryCount[p.category] = (categoryCount[p.category] || 0) + 1;
    });
    const sorted = [...nonRecommended].sort((a, b) => 
      (categoryCount[b.category] || 0) - (categoryCount[a.category] || 0)
    );
    return sorted.slice(0, 4);
  });

  // Shuffle products for New & Popular sections on every refresh
  const [newArrivals, setNewArrivals] = useState(() => {
    const shuffled = [...products].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 4);
  });

  const [bestSelling, setBestSelling] = useState(() => {
    const shuffled = [...products].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 4);
  });

  const [popularDeals, setPopularDeals] = useState(() => {
    const shuffled = [...products].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 4);
  });

  // Background images array
  const backgroundImages = [
    constructionSite,
    constructionSites,
    constructionDelivery,
    materialsWarehouse,
    smartWarehouse,
    globalNetwork,
    heroImage,
    aiSourcing
  ];
   const suppliers = [
    "Ceigall India", "VRC Constructions", "RCC Developers Pvt Ltd", "HMM Infra",
    "N S Associates", "Kaluwala", "Himalayan Infra", "Rashmi Metals",
    "JSW Steel", "Tata Steel", "MSP Steel", "Ultratech Cement", "ACC Limited"
  ];


  // Simulate live data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        ...prev,
        activeQuotes: prev.activeQuotes + Math.floor(Math.random() * 3) - 1,
        processing: prev.processing + Math.floor(Math.random() * 3) - 1,
        completedToday: prev.completedToday + Math.floor(Math.random() * 2),
        suppliers: prev.suppliers + Math.floor(Math.random() * 2) - 1,
      }));
    }, 100000);

    return () => clearInterval(interval);
  }, []);

  // Background image rotation
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % bannerImages.length);
    }, 4000);

    return () => clearInterval(imageInterval);
  }, [bannerImages.length]);

  // SEO structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ritzyard",
    "description": "AI-powered construction material procurement platform",
    "url": "https://ritzyard.ai",
    "logo": "https://ritzyard.ai/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9559262525",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "01 RR DM Road Vakola Bridge",
      "addressLocality": "Santacruz",
      "addressRegion": "Mumbai",
      "postalCode": "400055",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://linkedin.com/company/ritzyard",
      "https://twitter.com/ritzyard"
    ]
  };

  return (
    <>
      <SEOHead
        title="ritzyard | AI-Powered Construction Material Procurement Platform India"
        description="ritzyard is India's #1 AI-powered construction material procurement platform. Get instant quotes from 500+ verified suppliers for TMT steel, cement, bricks, sand & aggregates. 98% on-time delivery across 28 states. Save up to 15% on bulk orders."
        keywords="ritzyard, construction materials India, TMT steel bars price today, cement rate per bag, building materials online India, construction material suppliers near me, TMT bars Fe500 Fe550 price, OPC PPC cement wholesale, AAC blocks manufacturers, red bricks rate, river sand M sand price, construction aggregates suppliers, steel rods wholesale India, cement bags bulk order, verified construction suppliers, AI procurement platform, instant material quotes, construction material delivery, B2B construction marketplace, building materials wholesale, infrastructure materials India, real estate construction supplies, bulk construction materials order, material sourcing platform India"
        canonicalUrl="https://ritzyard.com/"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-[#f4f0ec]">
        <Navbar />
        <ScrollToTop />
        
        {/* Banner Carousel with Explore Categories Overlay */}
        <section className="relative w-full min-h-[600px] sm:min-h-[650px] md:min-h-[700px] overflow-hidden">
          {/* Banner Images */}
          {bannerImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100 z-0' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={image}
                alt={`Banner ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Black Opacity Overlay */}
              <div className="absolute inset-0 bg-black/60"></div>
            </div>
          ))}
          
          {/* Explore a Wide Range of Categories - Overlay Content */}
          <div className="relative z-10 h-full flex items-center py-8 sm:py-12">
          <div className="container mx-auto mt-40 px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3">
                Explore a Wide Range of <span className="text-white">Categories</span>
              </h2>
              <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto">Find the right materials for your project from our extensive catalog</p>
            </div>

            {/* Search Bar */}
            <div ref={searchContainerRef} className="max-w-lg mx-auto mb-6 sm:mb-8 relative">
              <form onSubmit={(e) => { e.preventDefault(); if (searchQuery.trim()) { setShowSuggestions(false); navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`); } }}>
                <input
                  type="text"
                  placeholder="Search for products... (e.g., Steel, Cement, Plywood)"
                  value={searchQuery}
                  onChange={(e) => { setSearchQuery(e.target.value); setShowSuggestions(true); }}
                  onFocus={() => setShowSuggestions(true)}
                  className="w-full px-5 py-4 pr-14 border-2 border-[#c15738]/30 rounded-full focus:border-[#c15738] focus:outline-none text-gray-800 bg-white shadow-md text-sm"
                />
                <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-r from-[#c15738] to-[#5c2d23] rounded-full flex items-center justify-center">
                  <Search className="w-5 h-5 text-white" />
                </button>
              </form>

              {/* Autocomplete Dropdown — one row per suggestion */}
              {showSuggestions && searchQuery.trim().length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 rounded-2xl shadow-2xl z-50 overflow-hidden">
                  {searchResults.length > 0 ? (
                    <>
                      {searchResults.map((product) => (
                        <Link
                          key={product.id}
                          to={`/product/${product.id}`}
                          onClick={() => { setShowSuggestions(false); setSearchQuery(''); }}
                          className="flex items-center gap-3 px-4 py-3 hover:bg-[#c15738]/5 border-b border-gray-50 last:border-0 transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-lg overflow-hidden bg-gray-100 shrink-0">
                            {product.image ? (
                              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                            ) : (
                              <div className="w-full h-full bg-[#c15738]/10 flex items-center justify-center">
                                <Package className="w-4 h-4 text-[#c15738]" />
                              </div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-gray-900 truncate group-hover:text-[#c15738] transition-colors">{product.name}</p>
                            <p className="text-xs text-gray-400 capitalize">{product.category.replace('-', ' ')}</p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#c15738] shrink-0 transition-colors" />
                        </Link>
                      ))}
                      <button
                        onClick={() => { setShowSuggestions(false); navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`); }}
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-[#c15738] hover:bg-[#c15738]/5 transition-colors border-t border-gray-100"
                      >
                        <Search className="w-4 h-4" />
                        See all results for "{searchQuery}"
                      </button>
                    </>
                  ) : (
                    <div className="px-4 py-6 text-center">
                      <div className="w-12 h-12 bg-[#c15738]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Search className="w-6 h-6 text-[#c15738]" />
                      </div>
                      <p className="text-sm font-semibold text-gray-900 mb-1">No products found for "{searchQuery}"</p>
                      <p className="text-xs text-gray-500 mb-3">Can't find what you need? Submit an inquiry!</p>
                      <button
                        onClick={() => { setShowSuggestions(false); navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`); }}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#c15738] hover:underline"
                      >
                        Browse all products <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Circular Category Grid */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {[
                { name: 'TMT Steel Bars', product: products.find(p => p.name.includes('TMT')) },
                { name: 'MS Hollow Sections', product: products.find(p => p.name.includes('Hollow')) },
                { name: 'Plywood & Boards', product: products.find(p => p.name.includes('Plywood')) },
                { name: 'Cement Products', product: products.find(p => p.name.includes('Cement')) },
                { name: 'Bricks & Blocks', product: products.find(p => p.name.includes('Brick')) },
                { name: 'Pipes & Fittings', product: products.find(p => p.name.includes('Pipe')) },
                { name: 'Roofing Materials', product: products.find(p => p.name.includes('Sheet') || p.name.includes('Deck')) },
                { name: 'Electrical Items', product: products.find(p => p.category === 'electrical') },
              ].map((cat, index) => (
                <Link key={index} to={cat.product ? `/product/${cat.product.id}` : '/products'} className="group flex flex-col items-center">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-[#c15738] transition-all duration-300 group-hover:shadow-xl group-hover:scale-105 relative">
                    <img 
                      src={cat.product?.image || 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=200&h=200&fit=crop'} 
                      alt={cat.name}
                      className="w-full h-full object-cover"
                    />
                    {/* Centered Black Opacity Overlay */}
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center"></div>
                  </div>
                  <span className="mt-3 text-xs sm:text-sm font-medium text-white text-center max-w-[100px] group-hover:text-orange-300 transition-colors">
                    {cat.name}
                  </span>
                </Link>
              ))}
            </div>

            {/* View All Categories Button */}
            <div className="text-center mt-4">
             <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 justify-center">
          <Link to="/inquiry" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg rounded-xl w-full sm:w-auto group"
            >
              Material Inquiry
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
            <Link to="/products">
             <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary rounded-xl w-full sm:w-auto"
            >
                  View All Products
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
        </div>
            </div>
          </div>
          </div>
        </section>
<section className="py-12 bg-[#f9f7f6] sm:py-16 md:py-20 relative">
  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-05">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
  </div>

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Section Header */}
    <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-slide-up">
      <Badge className="mb-4 bg-primary/10 text-primary border-0">
        <Sparkles className="w-4 h-4 mr-2 inline" />
        Smart Recommendations
      </Badge>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#c15738] to-[#5c2d23] bg-clip-text text-transparent">
        What Customers Are Looking For
      </h2>
      <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4"></div>
      <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
        Explore our most popular products and AI-powered recommendations tailored for your needs.
      </p>
    </div>

    {/* Side by Side Layout */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      
      {/* Left Side - AI Recommended */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-r from-[#c15738] to-[#5c2d23] rounded-lg flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">AI Recommended</h3>
            <p className="text-sm text-gray-600">Personalized for you</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {recommendedProducts.map((product, index) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <Card
                className="group overflow-hidden border-2 border-transparent hover:border-[#c15738] shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                    <Button
                      className="bg-gradient-to-r from-[#c15738] to-[#5c2d23] text-white text-xs font-semibold px-6"
                      size="sm"
                    >
                      <Eye className="w-3 h-3 mr-1" />
                      View Details
                    </Button>
                  </div>
                </div>
                <div className="p-3">
                  <Badge className="mb-1 bg-[#c15738]/10 text-[#c15738] border-0 text-[10px] font-semibold">
                    {product.category.replace("-", " ").toUpperCase()}
                  </Badge>
                  <h4 className="text-sm font-bold text-gray-900 line-clamp-1 mb-1">
                    {product.name}
                  </h4>
                  <p className="text-xs text-gray-600 line-clamp-2">{product.description}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Right Side - Most Inquired */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-r from-[#c15738] to-[#5c2d23] rounded-lg flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">Most Inquired</h3>
            <p className="text-sm text-gray-600">Popular this month</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {mostInquiredProducts.map((product, index) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <Card
                className="group overflow-hidden border-2 border-transparent hover:border-[#c15738] shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop";
                    }}
                  />
                  {/* Inquiry Badge */}
                  <div className="absolute top-2 right-2 bg-[#c15738] text-white text-[10px] font-bold px-2 py-1 rounded-full">
                    <TrendingUp className="w-3 h-3 inline mr-1" />
                    Trending
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                    <Button
                      className="bg-gradient-to-r from-[#c15738] to-[#5c2d23] text-white text-xs font-semibold px-6"
                      size="sm"
                    >
                      <Eye className="w-3 h-3 mr-1" />
                      View Details
                    </Button>
                  </div>
                </div>
                <div className="p-3">
                  <Badge className="mb-1 bg-[#c15738]/10 text-[#c15738] border-0 text-[10px] font-semibold">
                    {product.category.replace("-", " ").toUpperCase()}
                  </Badge>
                  <h4 className="text-sm font-bold text-gray-900 line-clamp-1 mb-1">
                    {product.name}
                  </h4>
                  <p className="text-xs text-gray-600 line-clamp-2">{product.description}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>

    {/* View All Button */}
    <div className="text-center mt-10">
      <Link to="/products">
        <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-white shadow-lg">
          View All Products
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </Link>
    </div>
  </div>
</section>
        {/* New & Popular: Deals You Can't Miss */}
        <section className="py-12 sm:py-16 md:py-20 bg-[#f4f0ec]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-[#c15738] to-[#5c2d23] bg-clip-text text-transparent">
                  New & Popular: Deals You Can't Miss
                </span>
              </h2>
              <div className="w-20 sm:w-28 h-1 bg-gradient-to-r from-[#c15738] to-[#5c2d23] mx-auto rounded-full"></div>
            </div>

            {/* New Arrivals Row */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#c15738] to-[#5c2d23] rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">New Arrivals</h3>
                </div>
                <Link to="/products" className="text-[#c15738] hover:text-[#5c2d23] text-sm font-semibold flex items-center gap-1 hover:underline">
                  See All <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {newArrivals.map((product) => (
                  <Link key={product.id} to={`/product/${product.id}`}>
                    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-[#c15738]/40 h-full">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="bg-[#c15738] text-white text-[10px] font-bold px-3 py-1 rounded-full">
                            NEW
                          </span>
                        </div>
                      </div>
                      <div className="p-4">
                        <span className="text-[10px] font-semibold text-[#c15738] uppercase tracking-wide">
                          {product.category.replace("-", " ")}
                        </span>
                        <h4 className="text-sm font-bold text-gray-900 mt-1 line-clamp-1">{product.name}</h4>
                        <p className="text-xs text-gray-500 mt-2 line-clamp-2">{product.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Best Selling Row */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#c15738] to-[#5c2d23] rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Best Selling</h3>
                </div>
                <Link to="/products" className="text-[#c15738] hover:text-[#5c2d23] text-sm font-semibold flex items-center gap-1 hover:underline">
                  See All <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {bestSelling.map((product) => (
                  <Link key={product.id} to={`/product/${product.id}`}>
                    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-[#c15738]/40 h-full">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" /> TRENDING
                          </span>
                        </div>
                      </div>
                      <div className="p-4">
                        <span className="text-[10px] font-semibold text-[#c15738] uppercase tracking-wide">
                          {product.category.replace("-", " ")}
                        </span>
                        <h4 className="text-sm font-bold text-gray-900 mt-1 line-clamp-1">{product.name}</h4>
                        <p className="text-xs text-gray-500 mt-2 line-clamp-2">{product.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Popular Deals Row */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#c15738] to-[#5c2d23] rounded-full flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Popular Deals</h3>
                </div>
                <Link to="/products" className="text-[#c15738] hover:text-[#5c2d23] text-sm font-semibold flex items-center gap-1 hover:underline">
                  See All <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {popularDeals.map((product) => (
                  <Link key={product.id} to={`/product/${product.id}`}>
                    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-[#c15738]/40 h-full">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
                            <Zap className="w-3 h-3" /> HOT DEAL
                          </span>
                        </div>
                      </div>
                      <div className="p-4">
                        <span className="text-[10px] font-semibold text-[#c15738] uppercase tracking-wide">
                          {product.category.replace("-", " ")}
                        </span>
                        <h4 className="text-sm font-bold text-gray-900 mt-1 line-clamp-1">{product.name}</h4>
                        <p className="text-xs text-gray-500 mt-2 line-clamp-2">{product.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

<section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-slide-up">
      <Badge className="mb-4 bg-primary/10 text-primary border-0">
        Key Offerings
      </Badge>
      <h2 className="text-2xl bg-gradient-to-r from-[#c15738] to-[#5c2d23] bg-clip-text text-transparent sm:text-3xl md:text-4xl font-bold mb-4">
        AI-Powered{" "}
        <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Solutions
        </span>
      </h2>
      <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4"></div>
      <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
        Transform your business with intelligent procurement solutions designed
        for speed, efficiency, and real-time visibility.
      </p>
    </div>

    {/* Offerings Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {[
        {
          icon: Target,
          label: "Smart Deal Flow",
          title: "Supplier Matching",
          description:
            "AI-powered supplier matching that connects you with the best vendors based on your requirements and performance.",
          metric: "2X",
          metricLabel: "Faster Procurement",
        },
        {
          icon: BarChart3,
          label: "Market Intelligence",
          title: "Price Intelligence",
          description:
            "Real-time market analysis and price optimization to ensure you get the best deals across all material categories.",
          metric: "15%",
          metricLabel: "Cost Savings",
        },
        {
          icon: Shield,
          label: "Risk Management",
          title: "Quality Assurance",
          description:
            "Comprehensive supplier verification and quality monitoring to minimize risks and ensure consistent material standards.",
          metric: "99.8%",
          metricLabel: "Quality Guarantee",
        },
        {
          icon: Zap,
          label: "Supply Chain Intelligence",
          title: "Real-time Tracking",
          description:
            "Complete visibility into your supply chain with real-time tracking, automated alerts, and predictive analytics.",
          metric: "24/7",
          metricLabel: "Live Monitoring",
        },
      ].map((offering, index) => (
        <div key={index} className="group perspective-[1000px]">
          <Card className="relative p-5 sm:p-6 border-0 bg-gradient-to-br from-white via-white to-primary/5 backdrop-blur-md overflow-hidden rounded-2xl shadow-md transform transition-transform duration-700 group-hover:rotate-y-[8deg] group-hover:-translate-y-1 text-center">
            {/* Gradient lines (appear on hover) */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 bottom-0 right-0 w-1 bg-gradient-to-b from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="space-y-3 sm:space-y-4 relative z-10">
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-r from-[#c15738] to-[#5c2d23] rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-inner">
                <offering.icon className="h-8 w-8 text-white" />
              </div>

              <Badge
                variant="outline"
                className="text-xs border-primary/20 bg-primary/5 mx-auto"
              >
                {offering.label}
              </Badge>

              <h3 className="text-lg sm:text-xl font-bold text-foreground">
                {offering.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed mx-auto">
                {offering.description}
              </p>

              <div className="pt-3 sm:pt-4 border-t border-border">
                <div className="text-2xl sm:text-3xl font-bold text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {offering.metric}
                </div>
                <div className="text-xs text-muted-foreground">
                  {offering.metricLabel}
                </div>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  </div>
</section>
        <HowItWorks />
                <ProcurementFeatures />
  <section className="py-12 bg-[#f9f7f6] sm:py-16 md:py-20 relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-slide-up">
              <Badge className="mb-4 bg-primary/10 text-primary border-0">Featured Products</Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#c15738] to-[#5c2d23] bg-clip-text text-transparent mb">
                Premium <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Materials</span>
              </h2>
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4"></div>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
                Premium construction materials from verified suppliers with instant quotes and real-time tracking
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {products.slice(0, 4).map((product, index) => (
                <Link key={product.id} to={`/product/${product.id}`}>
                  <Card
                    className="group overflow-hidden border border-primary/10 shadow-lg transition-all duration-300 animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src =
                            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute top-20 left-20 right-20 items-center">
                          <Button
                            className="bg-gradient-to-r from-primary to-secondary text-white shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                            size="sm"
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <Badge className="mb-2 bg-primary/10 text-primary border-0 text-xs">
                        {product.category.replace("-", " ").toUpperCase()}
                      </Badge>
                      <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-2 line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Link to="/products">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-white shadow-lg">
                  View All Products
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <Section />

<section className="py-20" >
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      {/* <h2 className="text-4xl font-bold text-foreground mb-6">Trusted by Industry Leaders</h2> */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#c15738] to-[#5c2d23] bg-clip-text text-transparent mb">
                Trusted  <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> by Industry Leaders</span>
              </h2>
      <div className="w-32 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
        Join our network of verified suppliers and grow your business with reliable partnerships across India.
      </p>
    </div>

    {/* Scrolling Supplier Names - Forward */}
    <div className="relative overflow-hidden mb-8">
      <div className="flex animate-scroll space-x-8">
        {[...suppliers, ...suppliers].map((supplier, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-6 py-4 glass-morphism backdrop-blur-xl rounded-xl border border-glass-border group hover:border-primary/50 transition-all duration-300"
          >
            <span className="text-foreground font-medium whitespace-nowrap group-hover:text-primary transition-colors duration-300">
              {supplier}
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* Scrolling Supplier Names - Reverse */}
    <div className="relative overflow-hidden">
      <div className="flex animate-scroll-reverse space-x-8">
        {[...suppliers.slice().reverse(), ...suppliers.slice().reverse()].map((supplier, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-6 py-4 glass-morphism backdrop-blur-xl rounded-xl border border-glass-border group hover:border-primary/50 transition-all duration-300"
          >
            <span className="text-foreground font-medium whitespace-nowrap group-hover:text-primary transition-colors duration-300">
              {supplier}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

        {/* Hero Section */}
     {/* <section className="relative pt-16 sm:pt-20 md:pt-28 pb-10 sm:pb-14 md:pb-20 overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute top-20 left-10 w-32 h-32 sm:w-48 sm:h-48 bg-primary/10 rounded-full blur-[30px] animate-pulse" />
    <div className="absolute bottom-20 right-10 w-40 h-40 sm:w-56 sm:h-56 bg-secondary/10 rounded-full blur-[80px] animate-pulse delay-1000" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-80 sm:h-80 bg-primary/5 rounded-full blur-[20px] animate-pulse delay-2000" />
  </div>

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="grid lg:grid-cols-2 items-center gap-8 lg:gap-12 xl:gap-16 lg:mt-20">
      
      <div className="space-y-6 md:space-y-8 animate-slide-up mt-12 sm:mt-20 md:mt-0">
        <Badge className="flex items-center w-fit bg-primary/10 text-primary border-primary/30 px-4 md:px-6 py-1.5 md:py-2 text-xs sm:text-sm">
          <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-primary animate-pulse mr-2" />
          Next-Gen Procurement Platform
        </Badge>

        <div className="space-y-4 sm:space-y-5">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Smart Material
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mt-1.5 sm:mt-2">
              Procurement
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            AI-powered procurement platform revolutionizing how businesses source construction materials.
            Get instant quotes, verify suppliers, and track deliveries with intelligent automation.
          </p>
        </div>

        

        <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 pt-4 sm:pt-6">
          {[
            { value: "500+", label: "Suppliers" },
            { value: "98%", label: "On-time" },
            { value: "28", label: "States" },
          ].map((item, index) => (
            <Card
              key={index}
              className="text-center p-3 sm:p-4 border border-primary/10 shadow-md bg-white/60 backdrop-blur-sm rounded-xl"
            >
              <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">{item.label}</div>
            </Card>
          ))}
        </div>
      </div>

      <div className="relative animate-scale-in mt-10 lg:mt-0">
        <div
          className={`absolute inset-0 rounded-2xl transition-opacity duration-1000 ${
            currentImageIndex % 2 === 0 ? "opacity-10" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${aiDashboard})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className={`absolute inset-0 rounded-2xl transition-opacity duration-1000 ${
            currentImageIndex % 2 === 1 ? "opacity-10" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${aiSourcing})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="relative z-10">
          <LiveAnalytics />
        </div>
      </div>
    </div>
  </div>
</section> */}
{/* Featured Products with Images */}
      



{/* Products Section - Side by Side Layout */}




                      {/* <ProcurementGrid  /> */}

        

        {/* <MarqueeSection /> */}


        {/* Key Offerings */}


        {/* <Discover /> */}
         {/* Technology Stack Section */}
      


      {/* <section className="py-16 sm:py-20 bg-[#f7f5f2]">
  <div className="container mx-auto px-4 sm:px-6 lg:px-12">
    <div className="text-center mb-10 sm:mb-16">
      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4">
        <span className="bg-gradient-to-r from-[#c15738] to-[#5c2d23] bg-clip-text text-transparent">
          Why Choose 
          <span className="  ml-4 text-2xl sm:text-4xl lg:text-5xl notranslate">
                <span className="text-primary">r</span>
                <span className="text-[#452a21]">itz</span>
                <span className="text-[#452a21]">yard?</span>
              </span>
        </span>
      </h2>
      <div className="w-20 sm:w-28 h-1 bg-gradient-to-r from-[#c15738] to-[#5c2d23] mx-auto rounded-full mb-4" />
      <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
        Experience the future of construction material procurement.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[FileText, Settings, Clock, Headphones].map((Icon, index) => (
        <div key={index} className="group perspective-1000">
          <Card className="relative p-6 sm:p-8 border-0 shadow-2xl hover:shadow-xs transition-all duration-700 transform hover:scale-105 hover:-translate-y-3 preserve-3d hover:rotate-y-6 overflow-hidden text-center">
            <div className="absolute inset-0 opacity-0 transition-opacity duration-700"></div>

            <div className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
            <div
              className="absolute bottom-6 left-4 w-1.5 h-1.5 bg-secondary/40 rounded-full animate-bounce"
              style={{ animationDelay: "0.3s" }}
            ></div>

            <div className="w-16 h-16 bg-gradient-to-r from-[#c15738] to-[#5c2d23] rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
              <Icon className="h-8 w-8 text-white" />
            </div>

            <h3 className="relative text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
              {["Bulk Orders", "Custom Solutions", "Just-in-Time Delivery", "24/7 Support"][index]}
            </h3>
            <p className="relative text-sm sm:text-base text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300 mx-auto">
              {[
                "Special pricing for large-scale projects.",
                "Tailored packages for your large-scale needs.",
                "Scheduled deliveries with competitive pricing and tracking.",
                "Always-on support from our experts.",
              ][index]}
            </p>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </Card>
        </div>
      ))}
    </div>
  </div>
</section> */}

        {/* Product Categories */}

       

        {/* Industry Statistics Section */}
      
       
        {/* Process Optimization Section */}
        



        {/* Contact Information Section */}
        
 <Testimonials />
        <FAQ />
        {/* CTA Section */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-br from-[#783f2c] to-[#ad4f31] text-center">
          <div

            className="container mx-auto px-4 sm:px-6 lg:px-12"
          >
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Procurement?
            </h2>
            <p className="text-sm sm:text-lg lg:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Start sourcing materials smarter with our AI-powered platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <Button
                size="lg"
                className="bg-white text-[#c15738] hover:bg-white/90 text-base sm:text-lg px-8 py-4 rounded-full font-semibold"
              >
                <Link to="/products" className="flex items-center gap-2">
                  <span>Get Started</span>
                  <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
                </Link>
              </Button>
              <Button
                size="lg"
                className="border-white/40 text-white hover:bg-white/10 text-base sm:text-lg px-8 py-4 rounded-full font-semibold"
              >
                <Link to="/about" className="flex items-center gap-2">
                  <span>Learn More</span>
                  <Play className="h-5 w-5 sm:h-6 sm:w-6" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

      <ScrollToTop />
        <Footer />
      </div>
    </>
  );
};

export default Index;
