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
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
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
  
  const missionRef = useRef(null);
  const tabbedRef = useRef(null);
  const valuesRef = useRef(null);
  const achievementsRef = useRef(null);
  const statsRef = useRef(null);

  const isMissionInView = useInView(missionRef, { once: true, margin: "-100px" });
  const isTabbedInView = useInView(tabbedRef, { once: true, margin: "-100px" });
  const isValuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const isAchievementsInView = useInView(achievementsRef, { once: true, margin: "-100px" });
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

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
      description: "Working together as partners to achieve mutual growth and success.",
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
      description: "Rigorous quality checks and verified materials ensure project success.",
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
        "Best Construction Tech Platform 2024",
        "AI Innovation Award Winner",
        "Top 10 Startup of the Year",
        "Excellence in Digital Transformation",
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
        className="relative pt-32 pb-20 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="bg-gradient-to-r from-[#c15738] to-[#5c2d23] border-0 text-white px-6 py-2 text-sm mb-6 font-medium">
              About MaterialMatrix
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              Revolutionizing Construction Procurement
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed px-4">
              AI-powered platform connecting builders with verified suppliers
              across India, transforming how construction materials are sourced.
            </p>
          </motion.div>
        </div>
      </section>
                <ProcurementHero />


      {/* Mission, Vision & Approach Section */}
      

      {/* Tabbed Carousel Section */}
      <section className="py-20 bg-[#f9f7f6]" ref={tabbedRef}>
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={isTabbedInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
          >
            
            <Badge className="mb-4   bg-primary/10 text-primary border-0 px-4 py-2">
              All-in-One AI Procurement Suite
            </Badge>
            {/* <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold mb-6 ">
              About MaterialMatrix AI
            </h2> */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#c15738] to-[#5c2d23] bg-clip-text text-transparent">
                About <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Advanced AI</span>
              </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#c15738] to-[#5c2d23] mx-auto rounded-full" />
          </motion.div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Tabs List - Left Side */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isTabbedInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8 }}
                className="lg:w-64 flex-shrink-0"
              >
                <TabsList className="flex flex-row lg:flex-col h-auto w-full bg-transparent gap-3">
                  <TabsTrigger
                    value="ai-solutions"
                    className="w-full justify-start px-6 py-4 text-left bg-white/70 backdrop-blur-md border border-white/20 rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#c15738] data-[state=active]:to-[#5c2d23] data-[state=active]:text-white data-[state=active]:shadow-lg hover:bg-white/90 transition-all duration-300"
                  >
                    <Brain className="w-5 h-5 mr-3" />
                    AI Solutions
                  </TabsTrigger>
                  <TabsTrigger
                    value="features"
                    className="w-full justify-start px-6 py-4 text-left bg-white/70 backdrop-blur-md border border-white/20 rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#c15738] data-[state=active]:to-[#5c2d23] data-[state=active]:text-white data-[state=active]:shadow-lg hover:bg-white/90 transition-all duration-300"
                  >
                    <Zap className="w-5 h-5 mr-3" />
                    Features
                  </TabsTrigger>
                  <TabsTrigger
                    value="industries"
                    className="w-full justify-start px-6 py-4 text-left bg-white/70 backdrop-blur-md border border-white/20 rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#c15738] data-[state=active]:to-[#5c2d23] data-[state=active]:text-white data-[state=active]:shadow-lg hover:bg-white/90 transition-all duration-300"
                  >
                    <Building2 className="w-5 h-5 mr-3" />
                    Industries
                  </TabsTrigger>
                  <TabsTrigger
                    value="benefits"
                    className="w-full justify-start px-6 py-4 text-left bg-white/70 backdrop-blur-md border border-white/20 rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#c15738] data-[state=active]:to-[#5c2d23] data-[state=active]:text-white data-[state=active]:shadow-lg hover:bg-white/90 transition-all duration-300"
                  >
                    <Award className="w-5 h-5 mr-3" />
                    Benefits
                  </TabsTrigger>
                </TabsList>
              </motion.div>

              {/* Cards Grid - Right Side */}
              <div className="flex-1">
                {Object.entries(tabbedContent).map(([key, cards]) => (
                  <TabsContent key={key} value={key} className="mt-0">
                    <motion.div
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                      variants={containerVariants}
                      initial="hidden"
                      animate={isTabbedInView ? "visible" : "hidden"}
                    >
                      {cards.map((card, index) => (
                        <motion.div key={index} variants={itemVariants}>
                          <Card className="group relative overflow-hidden rounded-xl border-0 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full">
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
                            <div className="relative z-10 p-6 flex flex-col h-full">
                              <div className="w-12 h-12 bg-gradient-to-r from-[#c15738] to-[#5c2d23] rounded-lg flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                                <card.icon className="w-6 h-6 text-white" />
                              </div>
                              <h4 className="font-bold text-white mb-2 text-base group-hover:text-orange-200 transition-colors duration-300">
                                {card.title}
                              </h4>
                              <p className="text-sm text-gray-200 leading-relaxed group-hover:text-white transition-colors duration-300">
                                {card.description}
                              </p>
                            </div>
                          </Card>
                        </motion.div>
                      ))}
                    </motion.div>
                  </TabsContent>
                ))}
              </div>
            </div>
          </Tabs>
        </div>
      </section>

              <CarouselCards />
      <AIFeatureSection />

      <section className="py-20 bg-[#f1eee9]" ref={missionRef}>
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={isMissionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-0 px-4 py-2">
              Our Foundation
            </Badge>
            {/* <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Mission, Vision & Approach
            </h2> */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#c15738] to-[#5c2d23] bg-clip-text text-transparent">
                Mission <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Vission & Approach</span>
              </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#c15738] to-[#5c2d23] mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isMissionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
           <Card className="p-8 bg-white/90 backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-xl hover:-translate-y-2">
  <div className="flex flex-col gap-10">
    {/* --- Our Mission --- */}
    <div>
      <div className="flex items-start gap-6 mb-6">
        <div className="w-16 h-16 bg-gradient-to-r from-[#c15738] to-[#5c2d23] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
          <Target className="text-white h-8 w-8" />
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-3 text-gray-900">Our Mission</h3>
          <p className="text-gray-600 leading-relaxed text-base">
            Transform raw material procurement for the construction industry by leveraging advanced AI and digital innovation to create a transparent, reliable, and cost-efficient marketplace.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2">
        {[
          "AI-Powered Matching",
          "Transparent Pricing",
          "Quality Assurance",
          "Real-time Tracking",
          "Pan-India Network",
          "24/7 Support",
        ].map((item, index) => (
          <motion.div
            key={item}
            className="flex items-center space-x-3 p-3 bg-[#f1eee9] rounded-lg hover:bg-[#ede8e1] transition-colors duration-200"
            initial={{ opacity: 0, y: 20 }}
            animate={isMissionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
          >
            <div className="w-4 h-4 bg-gradient-to-r from-[#c15738] to-[#5c2d23] rounded-full flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-2.5 h-2.5 text-white" />
            </div>
            <span className="text-sm font-medium text-gray-700">{item}</span>
          </motion.div>
        ))}
      </div>
    </div>


    {/* --- Our Approach --- */}
    <div className="flex flex-col lg:flex-row items-start gap-6">
      <div className="w-16 h-16 bg-gradient-to-r from-[#c15738] to-[#5c2d23] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
        <Lightbulb className="text-white h-8 w-8" />
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-bold mb-3 text-gray-900">Our Approach</h3>
        <p className="text-gray-600 leading-relaxed mb-6 text-base">
          We combine cutting-edge AI technology with deep industry expertise to deliver unmatched procurement solutions. Our data-driven approach ensures optimal supplier matching and cost efficiency.
        </p>

      <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 mt-4">
  <div className="flex flex-col items-center justify-center py-3 px-2 bg-gradient-to-r from-[#c15738] to-[#5c2d23] rounded-lg text-white shadow-md hover:shadow-lg transition-all duration-300">
    <div className="text-lg sm:text-xl font-bold leading-tight">99.9%</div>
    <div className="text-[11px] sm:text-xs opacity-90 mt-0.5">Accuracy Rate</div>
  </div>

  <div className="flex flex-col items-center justify-center py-3 px-2 bg-gradient-to-r from-[#c15738] to-[#5c2d23] rounded-lg text-white shadow-md hover:shadow-lg transition-all duration-300">
    <div className="text-lg sm:text-xl font-bold leading-tight">24/7</div>
    <div className="text-[11px] sm:text-xs opacity-90 mt-0.5">AI Support</div>
  </div>
</div>


       
      </div>
    </div>
  </div>
</Card>

            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isMissionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="p-8 bg-white/90 backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 h-full rounded-xl hover:-translate-y-2">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#c15738] to-[#5c2d23] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <TrendingUp className="text-white h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Vision 2030</h3>
                    <p className="text-gray-600 leading-relaxed text-base">
                      Become the world's leading digital marketplace for construction trade, enabling
                      billions in transactions and fostering a fully digital, efficient ecosystem.
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {[
                    "Become #1 AI-Powered Procurement platform in India",
                    "Expand to international markets across Asia-Pacific",
                    "Achieve carbon-neutral operations by 2030",
                    "Enable $10B+ in annual transactions",
                  ].map((goal, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-start space-x-3 p-3 bg-[#f1eee9] rounded-lg hover:bg-[#ede8e1] transition-colors duration-200"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isMissionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                    >
                      <div className="w-4 h-4 bg-gradient-to-r from-[#c15738] to-[#5c2d23] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-2.5 h-2.5 text-white" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{goal}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={officeBuilding}
                    alt="MaterialMatrix modern office building"
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      Our Modern Headquarters
                    </p>
                    <p className="text-xs opacity-90 flex items-center gap-2 mt-1">
                      <Globe className="w-3 h-3" />
                      Mumbai, Maharashtra
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Our Approach Card (Full Width) */}
         
        </div>
      </section>
<ProcurementGrid />

      {/* Core Values Section */}
      <section className="py-20 bg-[#f1eee9]" ref={valuesRef}>
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-0 px-4 py-2">
              Core Values
            </Badge>
            {/* <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              What Drives Us Forward
            </h2> */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#c15738] to-[#5c2d23] bg-clip-text text-transparent">
                What Drives <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Us Forward</span>
              </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#c15738] to-[#5c2d23] mx-auto rounded-full" />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isValuesInView ? "visible" : "hidden"}
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-8 text-center h-full bg-white/70 backdrop-blur-md hover:bg-white/80 hover:shadow-2xl transition-all duration-300 border border-white/20 shadow-lg rounded-xl hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#c15738] to-[#5c2d23] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                    {value.description}
                  </p>

                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 bg-gradient-to-r from-[#c15738] to-[#5c2d23] rounded-full flex items-center justify-center">
                      <CheckCircle className="w-2.5 h-2.5 text-white" />
                    </div>
                    <Badge className="bg-gradient-to-r from-[#c15738] to-[#5c2d23] text-white border-0 px-3 py-1 text-xs">
                      {value.stats}
                    </Badge>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-[#f9f7f6]" ref={achievementsRef}>
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={isAchievementsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-0 px-4 py-2">
              Achievements
            </Badge>
            {/* <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Recognition & Milestones
            </h2> */}
             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#c15738] to-[#5c2d23] bg-clip-text text-transparent">
                 Recognition <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> & Milestones</span>
              </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#c15738] to-[#5c2d23] mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isAchievementsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="p-8 h-full bg-white/70 backdrop-blur-md hover:bg-white/80 hover:shadow-2xl transition-all duration-300 border border-white/20 shadow-lg rounded-xl hover:-translate-y-2">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#c15738] to-[#5c2d23] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {achievement.title}
                    </h3>
                  </div>
                  <div className="space-y-3 ">
                    {achievement.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        className="flex items-start space-x-3 p-3  bg-[#f1eee9] rounded-lg hover:bg-[#ede8e1] transition-colors duration-200 ackdrop-blur-sm rounded-lg border border-white/20"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isAchievementsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + itemIndex * 0.1 }}
                      >
                        <div className="w-4 h-4 bg-gradient-to-r from-[#c15738] to-[#5c2d23] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-2.5 h-2.5 text-white" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-[#c15738] to-[#5c2d23]" ref={statsRef}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Transforming the construction industry one connection at a time
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isStatsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 rounded-xl border border-white/20 shadow-lg hover:-translate-y-2">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-orange-100 font-medium text-sm">{stat.label}</div>
                </Card>
              </motion.div>
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
