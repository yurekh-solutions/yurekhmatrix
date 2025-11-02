import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
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
} from "lucide-react";
import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-construction.jpg";
import constructionSite from "@/assets/construction-site.jpg";
import constructionSites from "@/assets/construction-sites.jpg";
import constructionDelivery from "@/assets/construction-delivery.jpg";
import materialsWarehouse from "@/assets/materials-warehouse.jpg";
import smartWarehouse from "@/assets/smart-warehouse.jpg";
import globalNetwork from "@/assets/global-network.jpg";
import aiDashboard from "@/assets/ai-dashboard.jpg";
import aiSourcing from "@/assets/ai-sourcing-optimization.jpg";
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

const Index = () => {
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
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);

    return () => clearInterval(imageInterval);
  }, [backgroundImages.length]);

  // SEO structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MaterialMatrix",
    "description": "AI-powered construction material procurement platform",
    "url": "https://materialmatrix.ai",
    "logo": "https://materialmatrix.ai/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-91362-42706",
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
      "https://linkedin.com/company/materialmatrix",
      "https://twitter.com/materialmatrix"
    ]
  };

  return (
    <>
      <SEOHead
        title="MaterialMatrix - AI-Powered Construction Material Procurement Platform | Smart Sourcing Solutions"
        description="Transform your construction material procurement with MaterialMatrix. Get instant quotes from 500+ verified suppliers, AI-powered price intelligence, and real-time tracking across India. Save 15% on costs with smart sourcing."
        keywords="construction materials, AI procurement, TMT steel, cement, building materials, supplier network, price intelligence, construction sourcing, material procurement platform, verified suppliers India"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-[#f4f0ec]">
        <Navbar />
        <ScrollToTop />
        {/* Hero Section */}
     <section className="relative pt-16 sm:pt-20 md:pt-28 pb-10 sm:pb-14 md:pb-20 overflow-hidden">
  {/* Animated Background Elements */}
  <div className="absolute inset-0">
    <div className="absolute top-20 left-10 w-32 h-32 sm:w-48 sm:h-48 bg-primary/10 rounded-full blur-[30px] animate-pulse" />
    <div className="absolute bottom-20 right-10 w-40 h-40 sm:w-56 sm:h-56 bg-secondary/10 rounded-full blur-[80px] animate-pulse delay-1000" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-80 sm:h-80 bg-primary/5 rounded-full blur-[20px] animate-pulse delay-2000" />
  </div>

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="grid lg:grid-cols-2 items-center gap-8 lg:gap-12 xl:gap-16 lg:mt-20">
      
      {/* Left Column */}
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

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
          <Link to="/products" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg rounded-xl w-full sm:w-auto group"
            >
              Submit RFQ
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>

          <Link to="/Voice" className="w-full sm:w-auto">
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary rounded-xl w-full sm:w-auto"
            >
              Voice AI
            </Button>
          </Link>
        </div>

        {/* Stats */}
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

      {/* Right Column - Analytics */}
      <div className="relative animate-scale-in mt-10 lg:mt-0">
        {/* Background transition layers */}
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
          <Card className="relative p-5 sm:p-6 border-0 bg-gradient-to-br from-white via-white to-primary/5 backdrop-blur-md overflow-hidden rounded-2xl shadow-md transform transition-transform duration-700 group-hover:rotate-y-[8deg] group-hover:-translate-y-1">
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
                className="text-xs border-primary/20 bg-primary/5"
              >
                {offering.label}
              </Badge>

              <h3 className="text-lg sm:text-xl font-bold text-foreground">
                {offering.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
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
                <ProcurementFeatures />
  <section className="py-12 sm:py-16 md:py-20 bg-[#f9f7f6]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <Badge className="mb-4 bg-primary/10 text-primary border-0">
                Technology
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#c15738] to-[#5c2d23] bg-clip-text text-transparent">
                Powered by <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Advanced AI</span>
              </h2>
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4"></div>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
                Cutting-edge technology stack ensuring seamless, intelligent, and secure procurement experiences
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  icon: BarChart3,
                  title: "AI Price Intelligence",
                  description: "Machine learning algorithms analyze market trends and predict optimal pricing strategies",
                  features: ["Real-time market analysis", "Price prediction models", "Cost optimization"]
                },
                {
                  icon: Shield,
                  title: "Blockchain Verification",
                  description: "Immutable supplier verification and transaction records for complete transparency",
                  features: ["Supplier authentication", "Transaction security", "Quality assurance"]
                },
                {
                  icon: Smartphone,
                  title: "Multi-Platform Access",
                  description: "Seamless experience across all devices with responsive design and native apps",
                  features: ["Mobile-first design", "Cross-platform sync", "Offline capabilities"]
                },
              ].map((tech, index) => (
                <div key={index} className="group perspective-1000">
                  <Card className="relative p-6 sm:p-8 border-0 shadow-2xl hover:shadow-xs transition-all duration-700 transform hover:scale-105 hover:-translate-y-3 bg-gradient-to-br from-white via-white to-primary/5 backdrop-blur-md preserve-3d hover:rotate-y-6 overflow-hidden">
                    {/* Animated background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                    {/* Floating elements */}
                    <div className="absolute top-4 right-4 w-3 h-3 bg-primary/20 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-6 left-4 w-2 h-2 bg-secondary/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute top-1/2 right-6 w-1 h-1 bg-primary/40 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>

                    {/* Icon with consistent styling */}
                    <div className="w-16 h-16 bg-gradient-to-r from-[#c15738] to-[#5c2d23] rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <tech.icon className="h-8 w-8 text-white" />
                    </div>

                    {/* Title with enhanced styling */}
                    <h3 className="relative text-lg sm:text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">{tech.title}</h3>

                    {/* Description */}
                    <p className="relative text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">{tech.description}</p>

                    {/* Features list with enhanced styling */}
                    <ul className="relative space-y-2">
                      {tech.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs sm:text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">
                          <div className="w-4 h-4 bg-gradient-to-r from-[#c15738] to-[#5c2d23] rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            <CheckCircle className="w-2.5 h-2.5 text-white" />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Bottom accent with animation */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Side accent */}
                    <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Featured Products with Images */}
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
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg">
                  View All Products
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
<Section />

        {/* <MarqueeSection /> */}


        {/* Key Offerings */}


        {/* <Discover /> */}
         {/* Technology Stack Section */}
      
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

        <HowItWorks />
        <section className="py-16 sm:py-20 bg-[#f7f5f2]" >
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div
              className="text-center mb-10 sm:mb-16"

            >
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-[#c15738] to-[#5c2d23] bg-clip-text text-transparent">
                  Why Choose MaterialMatrix?
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
                  <Card className="relative p-6 sm:p-8 border-0 shadow-2xl hover:shadow-xs transition-all duration-700 transform hover:scale-105 hover:-translate-y-3  preserve-3d hover:rotate-y-6 overflow-hidden">
                    {/* Animated background */}
                    <div className="absolute inset-0 opacity-0  transition-opacity duration-700"></div>

                    {/* Floating particles */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-6 left-4 w-1.5 h-1.5 bg-secondary/40 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>

                    {/* Icon with consistent styling */}
                    <div className="w-16 h-16 bg-gradient-to-r from-[#c15738] to-[#5c2d23] rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="relative text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {["Bulk Orders", "Custom Solutions", "Just-in-Time Delivery", "24/7 Support"][index]}
                    </h3>
                    <p className="relative text-sm sm:text-base text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {[
                        "Special pricing for large-scale projects.",
                        "Tailored packages for your large-scale needs.",
                        "Scheduled deliveries with Competitive pricing  tracking.",
                        "Always-on support from our experts.",
                      ][index]}
                    </p>

                    {/* Interactive elements */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Glow effect */}
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
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

        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default Index;
