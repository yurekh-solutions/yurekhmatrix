import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  Globe,
  Shield,
  Zap,
  Bot,
  CheckCircle2,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI-Powered Matching",
    description:
      "Intelligently connects you with top suppliers and buyers that match your business requirements perfectly.",
    image:
      "https://images.unsplash.com/photo-1603791452906-bb6f6b1d9b7c?q=80&w=2000&auto=format&fit=crop",
  },
  {
    icon: TrendingUp,
    title: "Verified Procurement",
    description:
      "Every transaction undergoes multi-layer verification ensuring quality and trust at every step.",
    image:
      "https://images.unsplash.com/photo-1581091870622-1e7ab02f2c9d?q=80&w=2000&auto=format&fit=crop",
  },
  {
    icon: Globe,
    title: "Global Supplier Network",
    description:
      "Connect globally with suppliers from 50+ countries across multiple industries effortlessly.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2000&auto=format&fit=crop",
  },
  {
    icon: Shield,
    title: "Secure Transactions",
    description:
      "We provide bank-grade encryption and fraud protection for all your procurement activities.",
    image:
      "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?q=80&w=2000&auto=format&fit=crop",
  },
  {
    icon: Zap,
    title: "Fast Order Processing",
    description:
      "Automated order handling reduces processing time by 65%, improving operational efficiency.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop",
  },
  {
    icon: Clock,
    title: "Real-Time Analytics",
    description:
      "Get insights into your procurement trends with real-time analytics dashboards.",
    image:
      "https://images.unsplash.com/photo-1556741533-f6acd647c801?q=80&w=2000&auto=format&fit=crop",
  },
  {
    icon: CheckCircle2,
    title: "Quality Assurance",
    description:
      "All suppliers go through strict quality verification ensuring top-grade materials and reliability.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2000&auto=format&fit=crop",
  },
];

const Industry = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-[#f7f5f2]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary border-0 mb-3">
            Procurement Advantages
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose Our Platform
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Explore the powerful tools that make your procurement journey simpler,
            faster, and more secure.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className={`relative group overflow-hidden rounded-2xl border-0 shadow-xl bg-black/80 transition-transform duration-500 ease-out ${
                  hovered === index
                    ? "rotate-1 translate-y-[-5px] scale-[1.03]"
                    : ""
                }`}
              >
                {/* Background Image with Black Overlay */}
                <div className="absolute inset-0">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 transition-opacity duration-500 group-hover:bg-black/70"></div>
                </div>

                {/* Content */}
                <div className="relative p-6 md:p-8 text-white z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/30 p-2.5 rounded-xl backdrop-blur-sm">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* 3D Border Lines (Right + Bottom) */}
                <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-primary transition-all duration-500 group-hover:w-full"></div>
                <div className="absolute bottom-0 right-0 w-[3px] h-0 bg-primary transition-all duration-500 group-hover:h-full"></div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industry;
