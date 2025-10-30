import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Mic,
  TrendingUp,
  Clock,
  Package,
  Users,
  Shield,
  Link as LinkIcon,
  Lightbulb,
  CheckCircle2,
  BarChart3,
  Activity,
  Zap,
  Target,
  FileText,
  Settings,
  Headphones,
  Play 
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
import FAQs from "./FAQQ";

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

  return (
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
            className={`absolute inset-0 black/50 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-20' : 'opacity-0'
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
                className={`absolute inset-0 rounded-2xl transition-opacity duration-1000 ${
                  currentImageIndex % 2 === 0 ? 'opacity-5' : 'opacity-0'
                }`}
                style={{
                  backgroundImage: `url(${aiDashboard})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div
                className={`absolute inset-0 rounded-2xl transition-opacity duration-1000 ${
                  currentImageIndex % 2 === 1 ? 'opacity-5' : 'opacity-0'
                }`}
                style={{
                  backgroundImage: `url(${aiSourcing})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              
              <Card className="relative p-4 sm:p-6 md:p-8 border-2 border-primary/20 shadow-2xl bg-white/98 backdrop-blur-md overflow-hidden">
                {/* Animated gradient border */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 animate-pulse rounded-2xl -z-10"></div>
                
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-primary animate-pulse" />
                    </div>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      Live Analytics
                    </h2>
                  </div>
                  <Badge className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-600 border-green-500/30 text-xs sm:text-sm shadow-lg">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse shadow-lg shadow-green-500/50"></div>
                    LIVE
                  </Badge>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 font-medium">
                  Real-time MaterialMatrix platform insights • Updated every 3 seconds
                </p>

                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <Card className="p-3 sm:p-4 border border-primary/20 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs sm:text-sm text-muted-foreground font-medium">Active Quotes</span>
                      <div className="relative">
                        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/50"></div>
                        <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-500 animate-ping"></div>
                      </div>
                    </div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      {stats.activeQuotes}
                    </div>
                    <div className="text-xs text-green-600 font-medium">↗ Live updates</div>
                  </Card>

                  <Card className="p-3 sm:p-4 border border-primary/20 shadow-lg bg-gradient-to-br from-orange-50 to-amber-50 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs sm:text-sm text-muted-foreground font-medium">Processing</span>
                      <div className="relative">
                        <div className="w-3 h-3 rounded-full bg-orange-500 animate-pulse shadow-lg shadow-orange-500/50"></div>
                        <div className="absolute inset-0 w-3 h-3 rounded-full bg-orange-500 animate-ping"></div>
                      </div>
                    </div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                      {stats.processing}
                    </div>
                    <div className="text-xs text-orange-600 font-medium">⚡ In progress</div>
                  </Card>

                  <Card className="p-3 sm:p-4 border border-primary/20 shadow-lg bg-gradient-to-br from-blue-50 to-cyan-50 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs sm:text-sm text-muted-foreground font-medium">Completed Today</span>
                      <div className="w-3 h-3 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50"></div>
                    </div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      {stats.completedToday}
                    </div>
                    <div className="text-xs text-blue-600 font-medium">✓ Delivered</div>
                  </Card>

                  <Card className="p-3 sm:p-4 border border-primary/20 shadow-lg bg-gradient-to-br from-purple-50 to-indigo-50 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs sm:text-sm text-muted-foreground font-medium">Avg Response</span>
                      <div className="w-3 h-3 rounded-full bg-purple-500 shadow-lg shadow-purple-500/50"></div>
                    </div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                      {stats.avgResponse}<span className="text-sm">min</span>
                    </div>
                    <div className="text-xs text-purple-600 font-medium">⚡ Lightning fast</div>
                  </Card>
                </div>

                <Card className="bg-gradient-to-br from-primary/15 to-secondary/15 border-primary/30 p-3 sm:p-4 mb-4 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      </div>
                      <span className="text-sm sm:text-base font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Market Intelligence
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <span className="text-xs sm:text-sm text-green-600 font-bold">+2.4%</span>
                    </div>
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                    Steel prices trending upward • AI prediction: 95% accuracy
                  </div>
                </Card>

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <Card className="p-3 border border-primary/20 shadow-md bg-gradient-to-br from-slate-50 to-gray-50 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <Package className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                      <span className="text-xs text-muted-foreground font-medium">Total Orders</span>
                    </div>
                    <div className="text-lg sm:text-xl font-bold text-primary">{stats.totalOrders}</div>
                    <div className="text-xs text-green-500 font-medium">+2.4% growth</div>
                  </Card>

                  <Card className="p-3 border border-primary/20 shadow-md bg-gradient-to-br from-slate-50 to-gray-50 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500" />
                      <span className="text-xs text-muted-foreground font-medium">Pending</span>
                    </div>
                    <div className="text-lg sm:text-xl font-bold text-orange-600">{stats.pendingApprovals}</div>
                    <div className="text-xs text-orange-500 font-medium">-3.2% reduced</div>
                  </Card>

                  <Card className="p-3 border border-primary/20 shadow-md bg-gradient-to-br from-slate-50 to-gray-50 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                      <span className="text-xs text-muted-foreground font-medium">Suppliers</span>
                    </div>
                    <div className="text-lg sm:text-xl font-bold text-primary">{stats.suppliers}</div>
                    <div className="text-xs text-green-500 font-medium">+5.1% network</div>
                  </Card>

                  <Card className="p-3 border border-primary/20 shadow-md bg-gradient-to-br from-slate-50 to-gray-50 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500" />
                      <span className="text-xs text-muted-foreground font-medium">Avg. Delivery</span>
                    </div>
                    <div className="text-lg sm:text-xl font-bold text-blue-600">{stats.avgDelivery}<span className="text-xs">days</span></div>
                    <div className="text-xs text-blue-500 font-medium">-1.2% faster</div>
                  </Card>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Products with Images */}
      <section className="py-12 sm:py-16 md:py-20 relative">
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
                      <div className="absolute bottom-4 left-4 right-4">
                        <Button size="sm" className="w-full rounded-full items-center bg-gradient-to-r from-primary to-secondary text-primary-foreground">
                          View Details
                          <ArrowRight className="ml-2 w-4 h-4" />
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
            <section className="py-12 sm:py-16 md:py-20 bg-[#f9f7f6]">
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
            "AI-powered supplier matching that connects you with the best vendors based on your specific requirements and past performance.",
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
        <Card
          key={index}
          className="p-4 sm:p-6 border border-[#b65a33]/30 
                     backdrop-blur-md bg-white/40 
                     shadow-md hover:shadow-[0_0_30px_rgba(182,90,51,0.4)] 
                     transition-all duration-500 ease-in-out 
                     hover:scale-[1.03] rounded-2xl 
                     hover:border-[#b65a33]/50 
                     bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.5),_rgba(234,205,184,0.3))]"
        >
          <div className="space-y-3 sm:space-y-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-md shadow-primary/40">
              <offering.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
            </div>
            <Badge variant="outline" className="text-xs border-primary/20">
              {offering.label}
            </Badge>
            <h3 className="text-lg sm:text-xl font-bold">{offering.title}</h3>
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
      ))}
    </div>
  </div>
</section>
<MarqueeSection/>

      {/* Key Offerings */}


        <Discover />
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
                <div
                  key={index}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 sm:p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-2xl bg-gradient-to-r from-[#c15738] to-[#5c2d23] flex items-center justify-center mb-4 sm:mb-6">
                      <Icon className="h-6 sm:h-8 w-6 sm:w-8 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                      {["Bulk Orders", "Custom Solutions", "Just-in-Time Delivery", "24/7 Support"][index]}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {[
                        "Special pricing for large-scale projects.",
                        "Tailored packages for your large-scale needs.",
                        "Scheduled deliveries with tracking.",
                        "Always-on support from our experts.",
                      ][index]}
                    </p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
      {/* Product Categories */}
     
  <Testimonials />
                <FAQ/>
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
  );
};

export default Index;
