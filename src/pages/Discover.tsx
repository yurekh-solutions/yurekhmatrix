import { useState } from "react";

import React from 'react'
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Package, Truck, Settings, Headphones, Building2, Clock,
  FileText, Shield, TrendingUp, Users, ArrowRight, Play
} from "lucide-react";
import { cn } from "@/lib/utils";

import warehouseHero from "@/assets/hero-procurement.jpg";
import steelMetalImage from "@/assets/steel-metal-materials.jpg";
import cementConcreteImage from "@/assets/cement-concrete.jpg";
import woodTimberImage from "@/assets/wood-timber.jpg";
import constructionDeliveryImage from "@/assets/construction-delivery.jpg";
import customSolutionsImage from "@/assets/custom-solutions.jpg";
import supportTeamImage from "@/assets/support-team.jpg";
import equipmentToolsImage from "@/assets/equipment-tools.jpg";
import electricalPlumbingImage from "@/assets/electrical-plumbing.jpg";
import paintFinishingImage from "@/assets/paint-finishing.jpg";
import roofingInsulationImage from "@/assets/roofing-insulation.jpg";
import safetyEquipmentImage from "@/assets/safety-equipment.jpg";
import fastenersHardwareImage from "@/assets/fasteners-hardware.jpg";


const Discover = () => {
      const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeCard, setActiveCard] = useState<number | null>(null);
const categories = [
    "All",
    "Steel & Metal",
    "Concrete & Cement",
    "Wood & Timber",
    "Equipment & Tools",
    "Electrical & Plumbing",
    "Paint & Finishing"
  ];

  const discoverItems = [
    {
      category: "Steel & Metal",
      image: steelMetalImage,
      title: "Premium Steel Beams & Reinforcement Bars",
      description: "High-grade structural steel for commercial and residential "
    },
    {
      category: "Concrete & Cement",
      image: cementConcreteImage,
      title: "Ready-Mix Concrete & Cement Supplies",
      description: "Quality concrete solutions for strong and durable foundations"
    },
    {
      category: "Wood & Timber",
      image: woodTimberImage,
      title: "Engineered Wood & Lumber Products",
      description: "Premium quality lumber for all your construction needs"
    },
    {
      category: "Equipment & Tools",
      image: equipmentToolsImage,
      title: "Professional Construction Equipment",
      description: "Modern tools and machinery for efficient project execution"
    },
    {
      category: "Electrical & Plumbing",
      image: electricalPlumbingImage,
      title: "Electrical Cables & Plumbing Supplies",
      description: "Complete range of electrical and plumbing materials"
    },
    {
      category: "Paint & Finishing",
      image: paintFinishingImage,
      title: "Premium Paints & Finishing Materials",
      description: "Wide selection of colors and finishes for every project"
    },
    {
      category: "Steel & Metal",
      image: roofingInsulationImage,
      title: "Roofing Materials & Insulation",
      description: "Weatherproof roofing solutions and thermal insulation"
    },
    {
      category: "Equipment & Tools",
      image: safetyEquipmentImage,
      title: "Safety Equipment & Protective Gear",
      description: "Comprehensive safety solutions for construction sites"
    },
    {
      category: "Steel & Metal",
      image: fastenersHardwareImage,
      title: "Fasteners & Hardware Supplies",
      description: "Essential fasteners, screws, bolts, and hardware"
    }
  ];

  const filteredItems = selectedCategory === "All" 
    ? discoverItems 
    : discoverItems.filter(item => item.category === selectedCategory);
  return (
    <div>
      <section className="section-padding py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#c15738] to-[#5c2d23] bg-clip-text text-transparent">
              Discover <span className="text-gradient">the Procurement</span>
            </h2>
                              <div className="w-32 h-1 bg-gradient-to-r from-[#c15738] to-[#5c2d23] mx-auto rounded-full mb-6" />

            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Explore our extensive range of construction materials and solutions
            </p>

            {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
  {categories.map((category) => (
    <Button
      key={category}
      variant={selectedCategory === category ? "default" : "outline"}
      onClick={() => setSelectedCategory(category)}
      className={cn(
        "rounded-full px-6 py-2 transition-all duration-300",
        selectedCategory === category
          ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-105"
          : "border border-primary/10 text-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white"
      )}
    >
      {category}
    </Button>
  ))}
</div>

          </motion.div>

          {/* Discover Grid */}
          <div className="grid grid-cols-1  text-[#673225] sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="glass-card glass-card-hover overflow-hidden cursor-pointer text-[#673225]">
                  <div className="relative h-64 overflow-hidden  ">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover  transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
                    
                    {/* Play Button Overlay */}
                    
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary text-white">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 text-[#673225]">
                    <h3 className="text-lg text-[#673225] font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm  text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Discover
