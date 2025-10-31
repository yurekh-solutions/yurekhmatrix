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

const Index = () => {
  const [stats, setStats] = useState({
    activeQuotes: 138,
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
    }, 3000);

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
        <section className="relative pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 overflow-hidden">
          <AnimatedBackground />

          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 sm:w-64 sm:h-64 bg-primary/10 rounded-full blur-[20px] animate-pulse" />
            <div className="absolute bottom-20 right-10 w-40 h-40 sm:w-72 sm:h-72 bg-secondary/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-[10px] animate-pulse" style={{ animationDelay: '2s' }} />
          </div>

          {/* Rotating Background Images */}
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 black/50 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-20' : 'opacity-0'
                }`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ))}

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Column */}
              <div className="space-y-6 md:space-y-8 animate-slide-up">
                <Badge className="bg-gradient-to-r from-primary to-secondary border-0 text-primary-foreground px-4 py-1.5 text-sm">
                  <Lightbulb className="w-4 h-4 mr-2" />
                  Trusted AI-Powered Platform
                </Badge>

                <div className="space-y-4">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Smart Material
                    <span className="block text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mt-2">Procurement</span>
                  </h1>

                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl">
                    AI-powered procurement platform revolutionizing how businesses source construction materials. Get instant quotes, verify suppliers, and track deliveries with intelligent automation.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/products">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg group w-full sm:w-auto"
                    >
                      Submit RFQ
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/about">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4">
                  <Card className="text-center p-3 sm:p-4 border border-primary/10 shadow-lg">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">500+</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Suppliers</div>
                  </Card>
                  <Card className="text-center p-3 sm:p-4 border border-primary/10 shadow-lg">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">98%</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">On-time</div>
                  </Card>
                  <Card className="text-center p-3 sm:p-4 border border-primary/10 shadow-lg">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">28</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">States</div>
                  </Card>
                </div>
              </div>

              {/* Right Column - Enhanced Live Analytics */}
              <div className="relative animate-scale-in">
                {/* Rotating Background Image for Analytics Card */}
                <div
                  className={`absolute inset-0 rounded-2xl transition-opacity duration-1000 ${currentImageIndex % 2 === 0 ? 'opacity-5' : 'opacity-0'
                    }`}
                  style={{
                    backgroundImage: `url(${aiDashboard})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div
                  className={`absolute inset-0 rounded-2xl transition-opacity duration-1000 ${currentImageIndex % 2 === 1 ? 'opacity-5' : 'opacity-0'
                    }`}
                  style={{
                    backgroundImage: `url(${aiSourcing})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                <Card className="relative p-4 sm:p-6 md:p-8 border-2 border-primary/20 shadow-2xl bg-gradient-to-br from-[#f9f7f6] to-[#f4f0ec] backdrop-blur-md overflow-hidden">
                  {/* Animated gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 animate-pulse rounded-2xl -z-10"></div>

                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-primary animate-pulse" />
                      </div>
                      <h2 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Live Analytics
                      </h2>
                    </div>
                    <Badge className="bg-primary/10 text-primary border-primary/30 text-xs sm:text-sm shadow-lg">
                      <div className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse shadow-lg shadow-primary/50"></div>
                      LIVE
                    </Badge>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 font-medium">
                    Real-time MaterialMatrix platform insights • Updated every 3 seconds
                  </p>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <Card className="p-3 sm:p-4 border border-primary/20 shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs sm:text-sm text-muted-foreground font-medium">Active Quotes</span>
                        <div className="relative">
                          <div className="w-3 h-3 rounded-full bg-primary animate-pulse shadow-lg shadow-primary/50"></div>
                          <div className="absolute inset-0 w-3 h-3 rounded-full bg-primary animate-ping"></div>
                        </div>
                      </div>
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {stats.activeQuotes}
                      </div>
                      <div className="text-xs text-primary font-medium bg-brown"> Live updates</div>
                    </Card>

                    <Card className="p-3 sm:p-4 border border-primary/20 shadow-lg bg-gradient-to-br from-secondary/5 to-primary/5 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs sm:text-sm text-muted-foreground font-medium">Processing</span>
                        <div className="relative">
                          <div className="w-3 h-3 rounded-full bg-secondary animate-pulse shadow-lg shadow-secondary/50"></div>
                          <div className="absolute inset-0 w-3 h-3 rounded-full bg-secondary animate-ping"></div>
                        </div>
                      </div>
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                        {stats.processing}
                      </div>
                      <div className="text-xs text-secondary font-medium"> In progress</div>
                    </Card>

                    <Card className="p-3 sm:p-4 border border-primary/20 shadow-lg bg-gradient-to-br from-primary/8 to-secondary/8 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs sm:text-sm text-muted-foreground font-medium">Completed Today</span>
                        <div className="w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50"></div>
                      </div>
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {stats.completedToday}
                      </div>
                      <div className="text-xs text-primary font-medium"> Delivered</div>
                    </Card>

                    <Card className="p-3 sm:p-4 border border-primary/20 shadow-lg bg-gradient-to-br from-secondary/8 to-primary/8 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs sm:text-sm text-muted-foreground font-medium">Avg Response</span>
                        <div className="w-3 h-3 rounded-full bg-secondary shadow-lg shadow-secondary/50"></div>
                      </div>
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                        {stats.avgResponse}<span className="text-sm">min</span>
                      </div>
                      <div className="text-xs text-secondary font-medium"> Lightning fast</div>
                    </Card>
                  </div>

                  <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30 p-3 sm:p-4 mb-4 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="relative">
                          <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                          <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                        </div>
                        <span className="text-sm sm:text-base font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                          Market Intelligence
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        <span className="text-xs sm:text-sm text-primary font-bold">+2.4%</span>
                      </div>
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                      Steel prices trending upward • AI prediction: 95% accuracy
                    </div>
                  </Card>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <Card className="p-3 border border-primary/20 shadow-md bg-gradient-to-br from-primary/5 to-secondary/5 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center gap-2 mb-2">
                        <Package className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                        <span className="text-xs text-muted-foreground font-medium">Total Orders</span>
                      </div>
                      <div className="text-lg sm:text-xl font-bold text-primary">{stats.totalOrders}</div>
                      <div className="text-xs text-primary font-medium">+2.4% growth</div>
                    </Card>

                    <Card className="p-3 border border-primary/20 shadow-md bg-gradient-to-br from-secondary/5 to-primary/5 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-secondary" />
                        <span className="text-xs text-muted-foreground font-medium">Pending</span>
                      </div>
                      <div className="text-lg sm:text-xl font-bold text-secondary">{stats.pendingApprovals}</div>
                      <div className="text-xs text-secondary font-medium">-3.2% reduced</div>
                    </Card>

                    <Card className="p-3 border border-primary/20 shadow-md bg-gradient-to-br from-primary/8 to-secondary/8 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                        <span className="text-xs text-muted-foreground font-medium">Suppliers</span>
                      </div>
                      <div className="text-lg sm:text-xl font-bold text-primary">{stats.suppliers}</div>
                      <div className="text-xs text-primary font-medium">+5.1% network</div>
                    </Card>

                    <Card className="p-3 border border-primary/20 shadow-md bg-gradient-to-br from-secondary/8 to-primary/8 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-secondary" />
                        <span className="text-xs text-muted-foreground font-medium">Avg. Delivery</span>
                      </div>
                      <div className="text-lg sm:text-xl font-bold text-secondary">{stats.avgDelivery}<span className="text-xs">days</span></div>
                      <div className="text-xs text-secondary font-medium">-1.2% faster</div>
                    </Card>
                  </div>
                </Card>
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
                    "AI-powered supplier matching that connects you with the best vendors based on your  requirements  performance.",
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
                <div key={index} className="group perspective-1000">
                  <Card className="relative p-4 sm:p-6 border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-3 bg-gradient-to-br from-white via-white to-primary/5 backdrop-blur-md preserve-3d hover:rotate-y-6 overflow-hidden">
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                    {/* Floating particles */}
                    <div className="absolute top-3 right-3 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-4 left-3 w-1.5 h-1.5 bg-secondary/40 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>

                    <div className="space-y-3 sm:space-y-4 relative z-10">
                      {/* Icon with consistent styling */}
                      <div className="w-16 h-16 bg-gradient-to-r from-[#c15738] to-[#5c2d23] rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <offering.icon className="h-8 w-8 text-white" />
                      </div>

                      <Badge variant="outline" className="text-xs border-primary/20 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300">
                        {offering.label}
                      </Badge>

                      <h3 className="text-lg sm:text-xl font-bold group-hover:text-primary transition-colors duration-300">{offering.title}</h3>

                      <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                        {offering.description}
                      </p>

                      <div className="pt-3 sm:pt-4 border-t border-border group-hover:border-primary/30 transition-colors duration-300">
                        <div className="text-2xl sm:text-3xl font-bold text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                          {offering.metric}
                        </div>
                        <div className="text-xs text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">
                          {offering.metricLabel}
                        </div>
                      </div>
                    </div>

                    {/* Interactive elements */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-0 bottom-0 right-0 w-1 bg-gradient-to-b from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#c15738] to-[#5c2d23] bg-clip-text text-transparent">
                Premium <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Materials</span>
              </h2>
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4"></div>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
                Premium construction materials from verified suppliers with instant quotes and real-time tracking
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {products.slice(0, 8).map((product, index) => (
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
  <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary/5 to-secondary/5 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <Badge className="mb-4 bg-primary/10 text-primary border-0">
                Industry Impact
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#c15738] to-[#5c2d23] bg-clip-text text-transparent">
                Transforming Construction <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Procurement</span>
              </h2>
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4"></div>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
                Leading the digital transformation in construction material sourcing across India
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 h-[400px]">
              {[
                { 
                  image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&h=400&auto=format&fit=crop",
                  value: "10,000+", 
                  label: "Projects Completed",
                  description: "Successfully delivered construction projects across India with our AI-powered procurement platform"
                },
                { 
                  image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&h=400&auto=format&fit=crop",
                  value: "500+", 
                  label: "Verified Suppliers",
                  description: "Trusted network of verified suppliers ensuring quality materials and competitive pricing"
                },
                { 
                  image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&h=400&auto=format&fit=crop",
                  value: "28", 
                  label: "States Covered",
                  description: "Pan-India presence serving construction projects from metros to tier-2 cities"
                },
                { 
                  image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=800&h=400&auto=format&fit=crop",
                  value: "98%", 
                  label: "Customer Satisfaction",
                  description: "Exceptional service quality with industry-leading customer satisfaction ratings"
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="relative group flex-grow transition-all w-full md:w-56 h-full duration-500 hover:w-full rounded-2xl overflow-hidden"
                >
                  {/* Background Image */}
                  <img 
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110" 
                    src={stat.image}
                    alt={stat.label}
                  />
                  
                  {/* Glass Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 text-white">
                    {/* Value */}
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1 sm:mb-2">
                      {stat.value}
                    </div>
                    
                    {/* Label */}
                    <h3 className="text-sm sm:text-base font-bold text-white mb-2">{stat.label}</h3>
                    
                    {/* Description - Only visible on hover */}
                    <p className="text-xs sm:text-sm text-white/90 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 leading-relaxed">
                      {stat.description}
                    </p>
                    
                    {/* View More Button - Only visible on hover */}
                    <div className="mt-3 sm:mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <Link to="/products">
                        <Button 
                          size="sm" 
                          className="bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          View More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <MarqueeSection />

        {/* Key Offerings */}


        <Discover />
         {/* Technology Stack Section */}
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
                  <Card className="relative p-6 sm:p-8 border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-3 bg-gradient-to-br from-white via-white to-primary/5 backdrop-blur-md preserve-3d hover:rotate-y-6 overflow-hidden">
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
                  <Card className="relative p-6 sm:p-8 border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-3 bg-gradient-to-br from-white via-white to-primary/5 backdrop-blur-md preserve-3d hover:rotate-y-6 overflow-hidden">
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

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
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Product Categories */}

       

        {/* Industry Statistics Section */}
      
       
        {/* Process Optimization Section */}
        <section className="py-12 sm:py-16 md:py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <Badge className="mb-4 bg-primary/10 text-primary border-0">
                Process Excellence
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#c15738] to-[#5c2d23] bg-clip-text text-transparent">
                Streamlined <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Procurement</span>
              </h2>
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4"></div>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
                From request to delivery, experience the most efficient procurement process in the industry
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  step: "01",
                  icon: FileText,
                  title: "Submit RFQ",
                  description: "Quick and easy request submission with AI-powered form assistance",
                  time: "2 mins"
                },
                {
                  step: "02",
                  icon: BarChart3,
                  title: "AI Matching",
                  description: "Intelligent supplier matching based on requirements and performance",
                  time: "5 mins"
                },
                {
                  step: "03",
                  icon: DollarSign,
                  title: "Get Quotes",
                  description: "Receive competitive quotes from verified suppliers instantly Access materials ",
                  time: "15 mins"
                },
                {
                  step: "04",
                  icon: Truck,
                  title: "Track Delivery",
                  description: "Real-time tracking and quality assurance throughout quality-assured delivery",
                  time: "Live"
                },
              ].map((process, index) => (
                <div key={index} className="group perspective-1000">
                  <Card className="relative p-6 sm:p-8 border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-4 bg-gradient-to-br from-white via-white to-primary/5 backdrop-blur-md preserve-3d hover:rotate-y-8 overflow-hidden">
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                    {/* Step number with 3D effect */}
                    <div className="absolute top-4 right-4 text-6xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors duration-500 transform group-hover:scale-110">{process.step}</div>

                    {/* Floating particles */}
                    <div className="absolute top-6 left-6 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-8 right-8 w-1.5 h-1.5 bg-secondary/40 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                    <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-primary/50 rounded-full animate-ping" style={{ animationDelay: '0.8s' }}></div>

                    {/* Icon with consistent styling */}
                    <div className="w-16 h-16 bg-gradient-to-r from-[#c15738] to-[#5c2d23] rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <process.icon className="h-8 w-8 text-white" />
                    </div>

                    {/* Content with enhanced styling */}
                    <h3 className="relative text-lg sm:text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300 z-10">{process.title}</h3>
                    <p className="relative text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300 z-10">{process.description}</p>

                    {/* Time indicator with enhanced styling */}
                    <div className="relative flex items-center z-10 group-hover:scale-105 transition-transform duration-300">
                      <div className="w-5 h-5 bg-gradient-to-r from-[#c15738] to-[#5c2d23] rounded-full flex items-center justify-center mr-3">
                        <Timer className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm font-medium text-primary group-hover:text-secondary transition-colors duration-300">{process.time}</span>
                    </div>

                    {/* Progress indicator */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Side glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* Contact Information Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-[#f7f5f2]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <Badge className="mb-4 bg-primary/10 text-primary border-0">
                Get in Touch
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#c15738] to-[#5c2d23] bg-clip-text text-transparent">
                Ready to <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Get Started?</span>
              </h2>
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4"></div>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
                Connect with our experts and transform your construction material procurement today
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              {[
                {
                  icon: Phone,
                  title: "Call Us",
                  value: "+91 91362 42706",
                  description: "24/7 customer support",
                  action: "tel:+919136242706"
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  value: "support@materialmatrix.ai",
                  description: "Quick response guaranteed",
                  action: "mailto:support@materialmatrix.ai"
                },
                {
                  icon: MapPin,
                  title: "Visit Us",
                  value: "Mumbai, India",
                  description: "01 RR DM Road Vakola Bridge",
                  action: "https://maps.app.goo.gl/nBjFpHMPRA67dDgBA"
                },
              ].map((contact, index) => (
                <div key={index} className="group perspective-1000">
                  <Card
                    className="relative p-6 sm:p-8 border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-3 bg-gradient-to-br from-white via-white to-primary/5 backdrop-blur-md preserve-3d hover:rotate-y-6 overflow-hidden cursor-pointer"
                    onClick={() => window.open(contact.action, '_blank')}
                  >
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                    {/* Floating elements */}
                    <div className="absolute top-4 right-4 w-3 h-3 bg-primary/20 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-6 left-4 w-2 h-2 bg-secondary/30 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>

                    {/* Icon with consistent styling */}
                    <div className="w-16 h-16 bg-gradient-to-r from-[#c15738] to-[#5c2d23] rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <contact.icon className="h-8 w-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="relative text-lg sm:text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">{contact.title}</h3>
                    <p className="relative text-sm sm:text-base font-medium text-primary mb-2 group-hover:text-secondary transition-colors duration-300">{contact.value}</p>
                    <p className="relative text-xs sm:text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">{contact.description}</p>

                    {/* Interactive elements */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-0 bottom-0 right-0 w-1 bg-gradient-to-b from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
                  </Card>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300">
                  Contact Our Team
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
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
