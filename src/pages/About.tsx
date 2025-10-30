import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Users, Award, TrendingUp, Brain, Shield, Zap, Globe, CheckCircle, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";
import ProcurementHero from "@/components/ProcurementHero";
import ProcurementGrid from "@/components/ProcurementGrid";
import AIFeatureSection from "@/components/AIFeatureSection";
import CarouselCards from "@/components/CarouselCards";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-[#f1eee9]">
      <Navbar />

      {/* Hero */}
      <section
        className="relative pt-32 pb-16 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="bg-gradient-primary border-0 text-white px-4 py-1.5 text-sm mb-4">
            About MaterialMatrix
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Revolutionizing Construction Procurement
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            AI-powered platform connecting builders with verified suppliers across India
          </p>
        </div>
      </section>
                  <ProcurementHero />

<ProcurementGrid />
<AIFeatureSection />
        <CarouselCards />
      {/* Mission & Vision */}


      <Footer />
    </div>
  );
};

export default About;
