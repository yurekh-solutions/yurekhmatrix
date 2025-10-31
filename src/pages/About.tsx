import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingActionButtons from "@/components/FloatingActionButtons";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Target,
  Award,
  TrendingUp,
  Shield,
  Zap,
  Globe,
  CheckCircle,
  Building2,
  Heart,
  Lightbulb,
  Handshake,
  Brain,
  MapPin,
  AlertTriangle,
  Network,
  BarChart,
  Clock,
  Package,
  Settings,
  Truck,
  Headphones,
  Smartphone,
  Code,
  Home,
  Construction,
  Palette,
  Wrench,
  Factory,
  Landmark,
  DollarSign,
  Eye,
  RefreshCw,
  Users,
} from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-construction.jpg";
import officeBuilding from "@/assets/office-building.jpg";
import ProcurementHero from "@/components/ProcurementHero";
import ProcurementGrid from "@/components/ProcurementGrid";
import AIFeatureSection from "@/components/AIFeatureSection";
import CarouselCards from "@/components/CarouselCards";
// AI Solutions images
import supplierMatching from "@/assets/cards/supplier-matching.jpg";
import priceIntelligence from "@/assets/cards/price-intelligence.jpg";
import qualityAssurance from "@/assets/cards/quality-assurance.jpg";
import realTimeTracking from "@/assets/cards/real-time-tracking.jpg";
import smartDealFlow from "@/assets/cards/smart-deal-flow.jpg";
import riskManagement from "@/assets/cards/risk-management.jpg";
import supplyChain from "@/assets/cards/supply-chain.jpg";
import marketIntelligence from "@/assets/cards/market-intelligence.jpg";

// Features images
import instantQuotes from "@/assets/cards/instant-quotes.jpg";
import verifiedSuppliers from "@/assets/cards/verified-suppliers.jpg";
import bulkOrders from "@/assets/cards/bulk-orders.jpg";
import customSolutions from "@/assets/cards/custom-solutions.jpg";
import jitDelivery from "@/assets/cards/jit-delivery.jpg";
import support247 from "@/assets/cards/support-247.jpg";
import mobileApp from "@/assets/cards/mobile-app.jpg";
import apiIntegration from "@/assets/cards/api-integration.jpg";

// Industries images
import residential from "@/assets/cards/residential.jpg";
import commercial from "@/assets/cards/commercial.jpg";
import infrastructure from "@/assets/cards/infrastructure.jpg";
import realEstate from "@/assets/cards/real-estate.jpg";
import interiorDesign from "@/assets/cards/interior-design.jpg";
import renovation from "@/assets/cards/renovation.jpg";
import industrial from "@/assets/cards/industrial.jpg";
import government from "@/assets/cards/government.jpg";

// Benefits images
import costSavings from "@/assets/cards/cost-savings.jpg";
import timeEfficiency from "@/assets/cards/time-efficiency.jpg";
import qualityMaterials from "@/assets/cards/quality-materials.jpg";
import transparentPricing from "@/assets/cards/transparent-pricing.jpg";
import verifiedPartners from "@/assets/cards/verified-partners.jpg";
import realtimeUpdates from "@/assets/cards/realtime-updates.jpg";
import expertSupport from "@/assets/cards/expert-support.jpg";
import panIndia from "@/assets/cards/pan-india.jpg";

const About = () => {
  const [activeTab, setActiveTab] = useState("ai-solutions");

  const tabbedContent = {
    "ai-solutions": [
      { icon: Brain, title: "Supplier Matching", description: "AI-powered algorithms match your requirements with verified suppliers instantly", image: supplierMatching },
      { icon: TrendingUp, title: "Price Intelligence", description: "Real-time market pricing data to ensure you get the best deals", image: priceIntelligence },
      { icon: Shield, title: "Quality Assurance", description: "Automated quality checks and verification for all materials", image: qualityAssurance },
      { icon: MapPin, title: "Real-time Tracking", description: "Track orders from quote to delivery with live updates", image: realTimeTracking },
      { icon: Zap, title: "Smart Deal Flow", description: "Intelligent routing of deals to optimize procurement efficiency", image: smartDealFlow },
      { icon: AlertTriangle, title: "Risk Management", description: "Predictive analytics to identify and mitigate supply chain risks", image: riskManagement },
      { icon: Network, title: "Supply Chain Intelligence", description: "Comprehensive insights into your entire supply network", image: supplyChain },
      { icon: BarChart, title: "Market Intelligence", description: "Data-driven market trends and forecasting for better decisions", image: marketIntelligence },
    ],
    "features": [
      { icon: Clock, title: "Instant Quotes", description: "Get competitive quotes from multiple suppliers within minutes", image: instantQuotes },
      { icon: CheckCircle, title: "Verified Suppliers", description: "All suppliers are thoroughly vetted and certified", image: verifiedSuppliers },
      { icon: Package, title: "Bulk Orders", description: "Special pricing and handling for large quantity orders", image: bulkOrders },
      { icon: Settings, title: "Custom Solutions", description: "Tailored procurement solutions for your specific needs", image: customSolutions },
      { icon: Truck, title: "JIT Delivery", description: "Just-in-time delivery to minimize inventory costs", image: jitDelivery },
      { icon: Headphones, title: "24/7 Support", description: "Round-the-clock customer support via AI and human agents", image: support247 },
      { icon: Smartphone, title: "Mobile App", description: "Manage procurement on-the-go with our mobile application", image: mobileApp },
      { icon: Code, title: "API Integration", description: "Seamless integration with your existing ERP systems", image: apiIntegration },
    ],
    "industries": [
      { icon: Home, title: "Residential Construction", description: "Complete material solutions for housing projects", image: residential },
      { icon: Building2, title: "Commercial Projects", description: "Large-scale procurement for commercial buildings", image: commercial },
      { icon: Construction, title: "Infrastructure", description: "Materials for roads, bridges, and public infrastructure", image: infrastructure },
      { icon: Building2, title: "Real Estate", description: "Comprehensive sourcing for real estate developments", image: realEstate },
      { icon: Palette, title: "Interior Design", description: "Premium materials for interior finishing projects", image: interiorDesign },
      { icon: Wrench, title: "Renovation", description: "Specialized materials for renovation and remodeling", image: renovation },
      { icon: Factory, title: "Industrial", description: "Industrial-grade materials for manufacturing facilities", image: industrial },
      { icon: Landmark, title: "Government Projects", description: "Compliant procurement for government contracts", image: government },
    ],
    "benefits": [
      { icon: DollarSign, title: "Cost Savings", description: "Save up to 20% on procurement costs through our network", image: costSavings },
      { icon: Clock, title: "Time Efficiency", description: "Reduce procurement time by 60% with automated processes", image: timeEfficiency },
      { icon: Award, title: "Quality Materials", description: "Guaranteed quality with certified materials and suppliers", image: qualityMaterials },
      { icon: Eye, title: "Transparent Pricing", description: "No hidden costs, complete pricing transparency", image: transparentPricing },
      { icon: Shield, title: "Verified Suppliers", description: "Peace of mind with 100% verified and trusted suppliers", image: verifiedPartners },
      { icon: RefreshCw, title: "Real-time Updates", description: "Stay informed with instant notifications and updates", image: realtimeUpdates },
      { icon: Users, title: "Expert Support", description: "Dedicated account managers and technical support", image: expertSupport },
      { icon: Globe, title: "Pan-India Network", description: "Access suppliers across 50+ cities in India", image: panIndia },
    ],
  };

  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Every decision we make prioritizes our customers' success and satisfaction.",
      stats: "98% Satisfaction Rate",
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "Building lasting relationships through honest communication and reliable service.",
      stats: "100% Verified Suppliers",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuously evolving with cutting-edge technology to serve you better.",
      stats: "50+ AI Features",
    },
    {
      icon: Zap,
      title: "Speed & Efficiency",
      description: "Delivering fast, streamlined solutions that save time and resources.",
      stats: "24hr Response Time",
    },
    {
      icon: Handshake,
      title: "Partnership",
      description: "Working together as partners to achieve mutual growth and success and growth.",
      stats: "5000+ Partners",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connecting local businesses with international opportunities and markets.",
      stats: "25+ Countries",
    },
    {
      icon: Target,
      title: "Quality Assurance",
      description: "Rigorous quality checks and verified Quality materials  ensure project success.",
      stats: "99.9% Quality Rate",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Award-winning platform recognized for innovation and customer satisfaction.",
      stats: "15+ Awards",
    },
  ];

  const achievements = [
    {
      title: "Industry Recognition",
      items: [
        "Best Construction Tech Platform ",
        "AI Innovation Award Winner",
        "Top 10 Startup of the Year",
        "Excellence in Transformation",
      ],
    },
    {
      title: "Business Milestones",
      items: [
        "₹500+ Crores in Transactions",
        "10,000+ Active Users",
        "99.9% Platform Uptime",
        "50+ Cities Covered",
      ],
    },
    {
      title: "Certifications",
      items: [
        "ISO 27001 Certified",
        "GDPR Compliant",
        "SOC 2 Type II",
        "Green Building Council Member",
      ],
    },
    {
      title: "Innovation Awards",
      items: [
        "AI Excellence Award 2024",
        "Digital Transformation Leader",
        "Customer Choice Award",
        "Sustainability Champion",
      ],
    },
  ];

  const stats = [
    { icon: Heart, number: "10,000+", label: "Active Users" },
    { icon: TrendingUp, number: "₹500+ Cr", label: "Transactions" },
    { icon: Handshake, number: "5,000+", label: "Suppliers" },
    { icon: Globe, number: "50+", label: "Cities" },
  ];

  return (
    <div className="min-h-screen bg-[#f1eee9]">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="bg-gradient-to-r from-[#c15738] to-[#5c2d23] border-0 text-white px-4 sm:px-6 py-2 text-xs sm:text-sm mb-4 sm:mb-6 font-medium">
              About MaterialMatrix
            </Badge>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white leading-tight">
              Revolutionizing Construction Procurement
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed px-4">
              AI-powered platform connecting builders with verified suppliers
              across India, transforming how construction materials are sourced.
            </p>
          </div>
        </div>
      </section>
      
      <ProcurementHero />

      {/* Mission, Vision & Approach Section */}
     

      {/* Tabbed Carousel Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#f9f7f6]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-0 px-4 py-2">
              All-in-One AI Procurement Suite
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#c15738] to-[#5c2d23] bg-clip-text text-transparent">
              About <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Advanced AI</span>
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-[#c15738] to-[#5c2d23] mx-auto rounded-full" />
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
              {/* Tabs List - Left Side */}
              <div className="lg:w-64 flex-shrink-0">
                <TabsList className="flex flex-row lg:flex-col h-auto w-full bg-transparent gap-2 sm:gap-3">
                  <TabsTrigger
                    value="ai-solutions"
                    className="w-full justify-start px-3 sm:px-4 sm:px-6 py-3 sm:py-4 text-left bg-white/70 backdrop-blur-md border border-white/20 rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#c15738] data-[state=active]:to-[#5c2d23] data-[state=active]:text-white data-[state=active]:shadow-lg hover:bg-white/90 transition-all duration-300 text-sm sm:text-base"
                  >
                    <Brain className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                    <span className="hidden sm:inline">AI Solutions</span>
                    <span className="sm:hidden">AI</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="features"
                    className="w-full justify-start px-3 sm:px-4 sm:px-6 py-3 sm:py-4 text-left bg-white/70 backdrop-blur-md border border-white/20 rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#c15738] data-[state=active]:to-[#5c2d23] data-[state=active]:text-white data-[state=active]:shadow-lg hover:bg-white/90 transition-all duration-300 text-sm sm:text-base"
                  >
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                    Features
                  </TabsTrigger>
                  <TabsTrigger
                    value="industries"
                    className="w-full justify-start px-3 sm:px-4 sm:px-6 py-3 sm:py-4 text-left bg-white/70 backdrop-blur-md border border-white/20 rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#c15738] data-[state=active]:to-[#5c2d23] data-[state=active]:text-white data-[state=active]:shadow-lg hover:bg-white/90 transition-all duration-300 text-sm sm:text-base"
                  >
                    <Building2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                    Industries
                  </TabsTrigger>
                  <TabsTrigger
                    value="benefits"
                    className="w-full justify-start px-3 sm:px-4 sm:px-6 py-3 sm:py-4 text-left bg-white/70 backdrop-blur-md border border-white/20 rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#c15738] data-[state=active]:to-[#5c2d23] data-[state=active]:text-white data-[state=active]:shadow-lg hover:bg-white/90 transition-all duration-300 text-sm sm:text-base"
                  >
                    <Award className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                    Benefits
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Cards Grid - Right Side */}
              <div className="flex-1">
                {Object.entries(tabbedContent).map(([key, cards]) => (
                  <TabsContent key={key} value={key} className="mt-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
                      {cards.map((card, index) => (
                        <Card key={index} className="group relative overflow-hidden rounded-xl border-0 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full">
                          {/* Background Image */}
                          <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                            style={{ backgroundImage: `url(${card.image})` }}
                          />
                          
                          {/* Default Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 transition-all duration-500" />
                          
                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500" />
                          
                          {/* Content */}
                          <div className="relative z-10 p-3 sm:p-4 md:p-6 flex flex-col h-full">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#c15738] to-[#5c2d23] rounded-lg flex items-center justify-center mb-3 sm:mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                              <card.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                            </div>
                            <h4 className="font-bold text-white mb-2 text-sm sm:text-base group-hover:text-orange-200 transition-colors duration-300">
                              {card.title}
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-200 leading-relaxed group-hover:text-white transition-colors duration-300">
                              {card.description}
                            </p>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </div>
            </div>
          </Tabs>
        </div>
      </section>
 <section className="py-12 sm:py-16 md:py-20 bg-[#f1eee9]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-0 px-4 py-2">
              Our Foundation
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#c15738] to-[#5c2d23] bg-clip-text text-transparent">
              Mission <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Vision & Approach</span>
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-[#c15738] to-[#5c2d23] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* Mission Card */}
            <Card className="p-4 sm:p-6 md:p-8 bg-white/90 backdrop-blur-xl border border-white/20 shadow-lg rounded-xl">
              <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
                {/* Our Mission */}
                <div>
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-16 md:w-16 md:h-16 bg-gradient-to-r from-[#c15738] to-[#5c2d23] rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Target className="text-white h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-gray-900">Our Mission</h3>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        Transform raw material procurement for the construction industry by leveraging advanced AI and digital innovation to create a transparent, reliable, and cost-efficient marketplace.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {[
                      "AI-Powered Matching",
                      "Transparent Pricing",
                      "Quality Assurance",
                      "Real-time Tracking",
                      "Pan-India Network",
                      "24/7 Support",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-[#f1eee9] rounded-lg hover:bg-[#ede8e1] transition-colors duration-200"
                      >
                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-[#c15738] to-[#5c2d23] rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-white" />
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Our Approach */}
                <div className="flex flex-col gap-4 sm:gap-6">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-16 md:w-16 md:h-16 bg-gradient-to-r from-[#c15738] to-[#5c2d23] rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Lightbulb className="text-white h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-gray-900">Our Approach</h3>
                      <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                        We combine cutting-edge AI technology with deep industry expertise to deliver unmatched procurement solutions. Our data-driven approach ensures optimal supplier matching and cost efficiency.
                      </p>

                      <div className="grid grid-cols-2 gap-2 sm:gap-3">
                        <div className="flex flex-col items-center justify-center py-2 sm:py-3 px-2 bg-gradient-to-r from-[#c15738] to-[#5c2d23] rounded-lg text-white shadow-md">
                          <div className="text-base sm:text-lg md:text-xl font-bold leading-tight">99.9%</div>
                          <div className="text-[10px] sm:text-xs opacity-90 mt-0.5">Accuracy Rate</div>
                        </div>

                        <div className="flex flex-col items-center justify-center py-2 sm:py-3 px-2 bg-gradient-to-r from-[#c15738] to-[#5c2d23] rounded-lg text-white shadow-md">
                          <div className="text-base sm:text-lg md:text-xl font-bold leading-tight">24/7</div>
                          <div className="text-[10px] sm:text-xs opacity-90 mt-0.5">AI Support</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Vision Card */}
            <Card className="p-4 sm:p-6 md:p-8 bg-white/90 backdrop-blur-xl border border-white/20 shadow-lg rounded-xl">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-16 md:w-16 md:h-16 bg-gradient-to-r from-[#c15738] to-[#5c2d23] rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <TrendingUp className="text-white h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-gray-900">Vision 2030</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Become the world's leading digital marketplace for construction trade, enabling
                    billions in transactions and fostering a fully digital, efficient ecosystem.
                  </p>
                </div>
              </div>

              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                {[
                  "Become #1 AI-Powered Procurement platform in India",
                  "Expand to international markets across Asia-Pacific",
                  "Achieve carbon-neutral operations by 2030",
                  "Enable $10B+ in annual transactions",
                ].map((goal, idx) => (
                  <div
                    key={idx}
                    className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 bg-[#f1eee9] rounded-lg hover:bg-[#ede8e1] transition-colors duration-200"
                  >
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-[#c15738] to-[#5c2d23] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-white" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-700">{goal}</span>
                  </div>
                ))}
              </div>

              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src={officeBuilding}
                  alt="MaterialMatrix modern office building"
                  className="w-full h-32 sm:h-40 md:h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-white">
                  <p className="text-xs sm:text-sm font-medium flex items-center gap-1 sm:gap-2">
                    <Building2 className="w-3 h-3 sm:w-4 sm:h-4" />
                    Our Modern Headquarters
                  </p>
                  <p className="text-[10px] sm:text-xs opacity-90 flex items-center gap-1 sm:gap-2 mt-1">
                    <Globe className="w-2 h-2 sm:w-3 sm:h-3" />
                    Mumbai, Maharashtra
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <AIFeatureSection />
            <CarouselCards />

      <ProcurementGrid />
      <section className="relative py-12 sm:py-16 md:py-20 bg-[#f9f7f6] overflow-hidden">
  {/* Glowing background elements */}
  <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#c15738]/30 to-[#5c2d23]/30 rounded-full blur-3xl opacity-70 animate-pulse" />
  <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tr from-[#5c2d23]/25 to-[#c15738]/25 rounded-full blur-3xl opacity-70 animate-pulse" />

  <div className="container mx-auto px-4 relative z-10">
    {/* Section Header */}
    <div className="text-center mb-8 sm:mb-12 md:mb-16">
      <Badge className="mb-4 bg-primary/10 text-primary border-0 px-4 py-2">
        Achievements
      </Badge>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#c15738] to-[#5c2d23] bg-clip-text text-transparent">
        Recognition{" "}
        <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          & Milestones
        </span>
      </h2>
      <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-[#c15738] to-[#5c2d23] mx-auto rounded-full" />
    </div>

    {/* Achievements Grid */}
   {/* Achievements Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
  {achievements.map((achievement, index) => (
    <div key={index} className="group perspective-1000">
      <Card
        className="relative p-6 sm:p-8 border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-3 bg-gradient-to-br from-white via-white to-primary/5 backdrop-blur-md preserve-3d hover:rotate-y-6 overflow-hidden cursor-pointer"
      >
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

        {/* Floating decorative dots */}
        <div className="absolute top-4 right-4 w-3 h-3 bg-primary/20 rounded-full animate-pulse"></div>
        <div
          className="absolute bottom-6 left-4 w-2 h-2 bg-secondary/30 rounded-full animate-bounce"
          style={{ animationDelay: '0.4s' }}
        ></div>

        {/* Icon */}
        <div className="w-16 h-16 bg-gradient-to-r from-[#c15738] to-[#5c2d23] rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
          <Award className="h-8 w-8 text-white" />
        </div>

        {/* Title */}
        <h3 className="relative text-lg sm:text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
          {achievement.title}
        </h3>

        {/* Achievement Items */}
        <div className="space-y-2 sm:space-y-3">
          {achievement.items.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className="flex items-start space-x-3 p-3 bg-[#f1eee9] rounded-lg hover:bg-[#ede8e1] transition-colors duration-200"
            >
              <div className="w-3 h-3 bg-gradient-to-r from-[#c15738] to-[#5c2d23] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle className="w-2 h-2 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-700">{item}</span>
            </div>
          ))}
        </div>

        {/* Interactive glow borders */}
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

      {/* Core Values Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#f1eee9] relative overflow-hidden">
  <div className="container mx-auto px-4">
    {/* Header */}
    <div className="text-center mb-8 sm:mb-12 md:mb-16">
      <Badge className="mb-4 bg-primary/10 text-primary border-0 px-4 py-2">
        Core Values
      </Badge>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#c15738] to-[#5c2d23] bg-clip-text text-transparent">
        What Drives{" "}
        <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Us Forward
        </span>
      </h2>
      <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-[#c15738] to-[#5c2d23] mx-auto rounded-full" />
    </div>

    {/* 3D Value Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
      {values.map((value, index) => (
        <div key={index} className="group perspective-1000">
          <Card className="relative p-6 sm:p-8 border-0 shadow-xl hover:shadow-3xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-3 bg-gradient-to-br from-white via-white to-primary/5 backdrop-blur-md preserve-3d hover:rotate-y-6 overflow-hidden rounded-2xl">
            
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>

            {/* Floating particles for subtle motion */}
            <div className="absolute top-6 left-6 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
            <div className="absolute bottom-6 right-8 w-1.5 h-1.5 bg-secondary/40 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
            <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-primary/50 rounded-full animate-ping" style={{ animationDelay: '0.8s' }}></div>

            {/* Icon with hover scaling */}
            <div className="w-16 h-16 bg-gradient-to-r from-[#c15738] to-[#5c2d23] rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <value.icon className="h-8 w-8 text-white" />
            </div>

            {/* Title and description */}
            <h3 className="relative text-lg sm:text-xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors duration-300 z-10">
              {value.title}
            </h3>
            <p className="relative text-sm sm:text-base text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 z-10">
              {value.description}
            </p>

            {/* Stats Badge with Check Icon */}
            <div className="relative flex items-center justify-center z-10 group-hover:scale-105 transition-transform duration-300 space-x-2">
              <div className="w-4 h-4 bg-gradient-to-r from-[#c15738] to-[#5c2d23] rounded-full flex items-center justify-center">
                <CheckCircle className="w-2.5 h-2.5 text-white" />
              </div>
              <Badge className="bg-gradient-to-r from-[#c15738] to-[#5c2d23] text-white border-0 px-3 py-1 text-xs">
                {value.stats}
              </Badge>
            </div>

            {/* Glow + bottom line effect */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#c15738] to-[#5c2d23] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
          </Card>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Achievements Section */}
      

      {/* Stats Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-[#c15738] to-[#5c2d23]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
              Our Impact in Numbers
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-orange-100 max-w-2xl mx-auto">
              Transforming the construction industry one connection at a time
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <Card className="p-4 sm:p-6 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 rounded-xl border border-white/20 shadow-lg">
                  <div className="w-12 h-12 sm:w-14 sm:h-16 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                    <stat.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-orange-100 font-medium text-xs sm:text-sm">{stat.label}</div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
      <FloatingActionButtons />
    </div>
  );
};

export default About;