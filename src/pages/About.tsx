import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingActionButtons from "@/components/FloatingActionButtons";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Target,
  Award,
  TrendingUp,
  Shield,
  Zap,
  Download,
   Users2,
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
  Sparkles,Building,Star
} from "lucide-react";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import heroImage from "@/assets/hero-construction.jpg";
import officeBuilding from "@/assets/office-building.jpg";
import ProcurementHero from "@/components/ProcurementHero";
import ProcurementGrid from "@/components/ProcurementGrid";
import AIFeatureSection from "@/components/AIFeatureSection";
import CarouselCards from "@/components/CarouselCards";
import ImageCarousel from "@/components/ImageCarousel";
import materialWarehouse from "../assets/materials-warehouse.jpg";
import officeBuildings from "../assets/sourcing-optimizer.png";
import constructionSite from "../assets/construction-site.jpg";
import aiDashboard from "../assets/ai-dashboard.jpg";
import naayatradeLogo from '../assets/yuvi.png';
// import TeamConnectingModal from "@/components/TeamConnectingModal";
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
import aiProcurementHero from "@/assets/ai-procurementp.jpg"
import AnimatedCounter from "@/components/AnimatedCounter";
import ProcurementFeatures from "@/components/ProcurementFeatures ";
import CarouselCard from "@/components/CarouselCards";

const About = () => {
  const [activeTab, setActiveTab] = useState("ai-solutions");
  const carouselImages = [materialWarehouse, constructionSite, aiDashboard, officeBuilding];
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-50px" });

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

    const stats = [
    { 
      value: 500, 
      label: "Suppliers Network", 
      description: "Verified and trusted partners",
      icon: Building,
      prefix: "",
      suffix: "+"
    },
    { 
      value: 1000, 
      label: "Successful Deliveries", 
      description: "On-time and quality assured",
      icon: Truck,
      prefix: "",
      suffix: "+"
    },
    { 
      value: 98, 
      label: "Customer Satisfaction", 
      description: "Based on feedback surveys",
      icon: Star,
      prefix: "",
      suffix: "%"
    },
    { 
      value: 28, 
      label: "States Coverage", 
      description: "Pan-India presence",
      icon: Globe,
      prefix: "",
      suffix: "+"
    },
    {
      value: 40,
      label: "Tech Innovations",
      description: "Advancing digital transformation",
      icon: Sparkles,
      prefix: "",
      suffix: "+"
    },
    {
      value: 200,
      label: "CAGR Growth",
      description: "Compound annual growth rate",
      icon: TrendingUp,
      prefix: "",
      suffix: "%"
    }
  ];

  const value = [
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

  // const stats = [
  //   { icon: Heart, number: "10,000+", label: "Active Users" },
  //   { icon: TrendingUp, number: "₹500+ Cr", label: "Transactions" },
  //   { icon: Handshake, number: "5,000+", label: "Suppliers" },
  //   { icon: Globe, number: "50+", label: "Cities" },
  // ];

  return (
    <>
      <SEOHead
        title="About ritzyard | India's #1 AI Construction Material Procurement Platform"
        description="ritzyard is revolutionizing India's construction industry with AI-powered procurement. Connecting builders, contractors & enterprises with 500+ verified suppliers across 28 states. Trusted by 1000+ businesses."
        keywords="about ritzyard, construction material company India, AI procurement startup, building materials platform India, verified suppliers network, construction tech company, B2B construction marketplace, construction industry disruptor, smart procurement solutions, construction supply chain India, material sourcing innovation, construction digitization India"
        canonicalUrl="https://ritzyard.com/about"
      />
    <div className="min-h-screen bg-[#f1eee9]">
      <Navbar />

      {/* Hero Section */}
  <section className="bg-gradient-to-b from-[#fffbee] via-[#f9f7f6] to-[#f1eee9] pt-6 pb-0 px-3 sm:px-6 lg:px-10 overflow-hidden">
         <div className="absolute inset-0">
    <div className="absolute top-20 left-10 w-32 h-32 sm:w-48 sm:h-48 bg-primary/10 rounded-full blur-[30px] animate-pulse" />
    <div className="absolute bottom-20 right-10 w-40 h-40 sm:w-56 sm:h-56 bg-secondary/10 rounded-full blur-[80px] animate-pulse delay-1000" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-80 sm:h-80 bg-primary/5 rounded-full blur-[20px] animate-pulse delay-2000" />
  </div>
        <main className="flex-grow flex flex-col items-center max-w-7xl mx-auto w-full mt-10">
          {/* Badge */}
          <Badge className="mt-12 sm:mt-16 mb-4 sm:mb-6 flex items-center w-fit space-x-2 border-2 border-primary/30 bg-primary/10 text-primary text-xs sm:text-sm rounded-full px-4 sm:px-5 pr-2 py-2  transition-all duration-300 group">
            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-primary animate-pulse" />
            <span className="font-medium">About 
            </span>
             <span className="   notranslate">
                <span className="text-primary">r</span>
                <span className="text-[#452a21]">itz</span>
                <span className="text-[#452a21]">yard</span>
              </span>
        
             
          </Badge>

          {/* Main Heading */}
          <h1 className="text-center text-foreground font-bold text-3xl sm:text-4xl md:text-5xl lg:text-4xl max-w-4xl leading-tight px-4">
            Revolutionizing Construction{" "}
            <span className=" text-3xl sm:text-4xl md:text-4xl lg:text-6xl max-w-4xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Procurement with Intelligence
            </span>
          </h1>

          {/* Description */}
          <p className="mt-4 sm:mt-6 text-center text-muted-foreground max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed px-4 pt-5">
            RitzYard is an AI-powered platform connecting builders with verified suppliers across India, 
            transforming how construction materials are sourced with intelligent matching, real-time pricing, 
            and automated procurement workflows.
          </p>

        

          {/* Hero Image */}
          <div className="mt-12 sm:mt-16 w-full max-w-6xl relative group mb-10">
            {/* Glow effect behind image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-[60px] opacity-0  transition-opacity duration-500" />
            
            <img 
              className="relative rounded-[40px] sm:rounded-[160px] w-full h-64 sm:h-80 md:h-96 lg:h-[200px] object-cover rounded-b-none shadow-xs border-t-4 border-x-4 border-primary/20" 
              src={aiProcurementHero}
              alt="AI-powered procurement dashboard showing intelligent material sourcing and supplier matching"
            />
            
            {/* Floating stats cards on image */}
            <div className="absolute top-4 left-4 sm:top-8 sm:left-8 bg-white/90 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-lg animate-float">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
                  <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-foreground">99.9%</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">AI Accuracy</p>
                </div>
              </div>
            </div>
            
            <div className="absolute top-4 right-4 sm:top-8 sm:right-8 bg-white/90 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-foreground">60%</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">Time Saved</p>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-lg animate-float hidden sm:block" style={{ animationDelay: '2s' }}>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-foreground">₹500+ Cr</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">Transactions</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>


      
      <section className="py-16 lg:py-20 overflow-hidden">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left Side - Image Carousel */}
      <div className="relative">
        <div className="relative transform-3d">
          <div className="p-2">
            <ImageCarousel
              images={carouselImages}
              className="h-80 lg:h-96 rounded-xl"
              autoPlay={true}
              interval={5000}
            />
          </div>
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="space-y-6">
        {/* <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
          About NaayaConstruction
        </h2> */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#c15738] to-[#5c2d23] bg-clip-text text-transparent">
              About 
              <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> <span className="  ml-4 text-2xl sm:text-4xl lg:text-5xl notranslate">
                <span className="text-primary">r</span>
                <span className="text-[#452a21]">itz</span>
                <span className="text-[#452a21]">yard</span>
              </span>
        </span>
            </h2>

        <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
          Ritz Yard is India's next-generation AI-powered procurement
          platform for the construction industry, backed by the strength of
          Intelligence. We are revolutionizing the way contractors, builders, and
          enterprises source their construction needs by making procurement
          seamless, digital-first, and cost-effective.
        </p>

        <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
          Our team is committed to transforming the procurement ecosystem with a
          focus on innovation, technology, and sustainability. More than just a
          procurement platform, Material Matrix delivers an integrated
          ecosystem — connecting buyers and suppliers, offering real-time
          sourcing intelligence, and ensuring end-to-end support across
          projects.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
                              // className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 md:px-8 py-5 md:py-6 text-sm md:text-base rounded-full shadow-elegant md:mt-4"

            className="text-lg px-6 py-3 font-semibold bg-gradient-to-r from-primary to-secondary text-primary-foreground  shadow-lg hover:scale-105 hover:shadow-glow transition-all duration-300"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "#";
              link.download = "RitzYard-Brochure.pdf";
              link.click();
            }}
          >
            <Download className="h-5 w-5 mr-2" />
            Download Brochure
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="glass-morphism border-primary/30 text-primary hover:bg-primary/10 text-lg px-6 py-3"
          >
            <a href="/contact">
              <Users2 className="h-5 w-5 mr-2" />
              Contact Us
            </a>
          </Button>
        </div>
      </div>
    </div>
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
                        <div className="flex flex-col items-center justify-center py-2 sm:py-3 px-2 bg-primary/5 rounded-lg border border-primary/20 rounded-lg text-white shadow-md">
                          <div className="text-primary sm:text-lg md:text-xl font-bold leading-tight">99.9%</div>
                          <div className="text-[10px]  text-muted-foreground sm:text-xs opacity-90 mt-0.5">Accuracy Rate</div>
                        </div>

                        <div className="flex flex-col items-center justify-center py-2 sm:py-3 px-2 bg-primary/5 rounded-lg border border-primary/20 shadow-md">
                          <div className=" text-base  text-primary sm:text-lg md:text-xl font-bold leading-tight">24/7</div>
                          <div className="text-[10px]  text-muted-foreground sm:text-xs opacity-90 mt-0.5">AI Support</div>
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
                  alt="RitzYard modern office building"
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
                  INDIA
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      {/* Mission, Vision & Approach Section */}
     
<section className="py-16 ">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      {/* <h2 className="text-3xl lg:text-4xl font-bold mb-4">
        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Our Impact in Numbers
        </span>
      </h2> */}
       <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#c15738] to-[#5c2d23] bg-clip-text text-transparent">
              Our Impact <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> in Numbers</span>
            </h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        See how we're transforming the procurement landscape
      </p>
            {/* <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4" /> */}
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-[#c15738] to-[#5c2d23] mx-auto rounded-full mt-2" />

    </div>

   <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
  {stats.map((stat, index) => (
    <div key={index}>
      <div
        className="bg-[#fcfcfb] p-8 text-center rounded-2xl shadow-lg border border-white/20
                    hover:scale-105 transition-all duration-300"
      >
        {/* Icon */}
      <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <stat.icon className="h-5 w-5 md:h-7 md:w-7 text-primary-foreground" />
                  </div>

        {/* Value */}
        <div className="text-3xl lg:text-4xl font-bold text-[#ca5031] mb-2">
          <AnimatedCounter
            end={stat.value}
            duration={2.5}
            prefix={stat.prefix}
            suffix={stat.suffix}
            trigger={isStatsInView}
          />
        </div>

        {/* Label */}
        <h3 className="text-base md:text-lg font-semibold text-muted-foreground mb-1">
          {stat.label}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-500">{stat.description}</p>
      </div>
    </div>
  ))}
</div>

  </div>
</section>

      {/* Tabbed Carousel Section */}
      
            {/* <ProcurementGrid /> */}

      {/* <AIFeatureSection /> */}
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
      {value.map((value, index) => (
        <div key={index} className="group perspective-1000">
          <Card className="relative p-6 sm:p-8 border-0 shadow-xs hover:shadow-xs transition-all duration-700 transform hover:scale-105 hover:-translate-y-3 bg-gradient-to-br from-white via-white to-primary/5 backdrop-blur-md preserve-3d hover:rotate-y-6 overflow-hidden rounded-2xl">
            
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
  <h3
  className="relative text-lg sm:text-xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors duration-300 z-10 text-center"
>
  {value.title}
</h3>

<p
  className="relative text-sm sm:text-base text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 z-10 text-center"
>
  {value.description}
</p>


            {/* Stats Badge with Check Icon */}
            <div className="relative flex items-center justify-center z-10 group-hover:scale-105 transition-transform duration-300 space-x-2">
            
              <Badge className="bg-primary/10 text-primary border-primary/30 border-0 px-3 py-1 text-xs">
                {value.stats}
              </Badge>
            </div>

            {/* Glow + bottom line effect */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#c15738] to-[#5c2d23] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            {/* <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div> */}
          </Card>
        </div>
      ))}
    </div>
  </div>
</section>
            {/* <CarouselCards /> */}

      <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
  {/* Glowing background elements */}

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
        className="relative p-6 sm:p-8 border-0 shadow-xs hover:shadow-xs transition-all duration-700 transform hover:scale-105 hover:-translate-y-3 bg-gradient-to-br from-white via-white to-primary/5 backdrop-blur-md preserve-3d hover:rotate-y-6 overflow-hidden cursor-pointer"
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
        {/* <div className="w-16 h-16 bg-gradient-to-r from-[#c15738] to-[#5c2d23] rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
          <Award className="h-8 w-8 text-white" />
        </div> */}

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
      </Card>
    </div>
  ))}
</div>

  </div>
</section>
      {/* <ProcurementHero /> */}
      {/* <  CarouselCard /> */}
      {/* <AIFeatureSection /> */}

      {/* Core Values Section */}
  


      {/* Achievements Section */}
      

      {/* Stats Section */}
     

      <Footer />
      <ScrollToTop />
      <FloatingActionButtons />
    </div>
    </>
  );
};

export default About;