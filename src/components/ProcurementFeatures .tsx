import { useEffect, useState } from "react";
import { Bot, Zap, Shield, Clock, TrendingUp, Globe, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: Bot,
    title: "AI-Powered Matching",
    description:
      "Our intelligent algorithms match you with the perfect suppliers based on your specific requirements, location, and budget.",
    stat: "98% accuracy",
  },
  {
    icon: Zap,
    title: "Instant RFQ Processing",
    description:
      "Submit your Request for Quotation and receive competitive quotes from verified suppliers in minutes, not days.",
    stat: "10x faster",
  },
  {
    icon: Clock,
    title: "Real-Time Tracking",
    description:
      "Track your materials from order to delivery with live updates, GPS tracking, and automated notifications.",
    stat: "24/7 monitoring",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description:
      "Every material is verified against industry standards with AI-powered quality checks and supplier certifications.",
    stat: "100% verified",
  },
  {
    icon: TrendingUp,
    title: "Smart Analytics",
    description:
      "Make data-driven decisions with predictive insights, market trends, and procurement savings analysis.",
    stat: "35% savings",
  },
  {
    icon: Globe,
    title: "Nationwide Network",
    description:
      "Access 500+ verified suppliers across 28 states with seamless logistics and local expertise.",
    stat: "500+ suppliers",
  },
  {
    icon: Shield,
    title: "Secure Transactions",
    description:
      "Experience safe and encrypted payments with full audit tracking and instant invoice generation.",
    stat: "100% secure",
  },
  {
    icon: Zap,
    title: "Optimized Workflow",
    description:
      "Automate supplier management, RFQ responses, and quality checks for faster project completion.",
    stat: "5x efficiency",
  },
];

const benefits = [
  "Automated supplier verification and quality checks",
  "Real-time pricing and availability updates",
  "Integrated payment and invoice management",
  "Predictive delivery time estimates",
  "Environmental compliance tracking",
  "Multi-site project coordination",
];

const ProcurementFeatures = () => {
  const half = Math.ceil(features.length / 2);
  const firstColumn = features.slice(0, half);
  const secondColumn = features.slice(half);

  // Dynamic counter states
  const [deliveryDays, setDeliveryDays] = useState(0);
  const [companies, setCompanies] = useState(0);

  useEffect(() => {
    // Counter for delivery days (up to 4.2)
    let dayValue = 0;
    const dayInterval = setInterval(() => {
      dayValue += 0.1;
      if (dayValue >= 4.2) {
        clearInterval(dayInterval);
        setDeliveryDays(4.2);
      } else {
        setDeliveryDays(parseFloat(dayValue.toFixed(1)));
      }
    }, 50);

    // Counter for companies (up to 100)
    let companyValue = 0;
    const companyInterval = setInterval(() => {
      companyValue += 1;
      if (companyValue >= 100) {
        clearInterval(companyInterval);
        setCompanies(100);
      } else {
        setCompanies(companyValue);
      }
    }, 30);

    return () => {
      clearInterval(dayInterval);
      clearInterval(companyInterval);
    };
  }, []);

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-background via-muted/30 to-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-primary/10 text-primary border-primary/30 px-4 py-2 text-sm">
                Revolutionary Platform
              </Badge>
              {/* Revolutionize Your Procurement Strategy */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold ">
                Revolutionize Your {""}<br/>
                <span className=" bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mt-2">
                Procurement Strategy 
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                MaterialMatrix leverages cutting-edge AI technology to revolutionize how construction businesses source materials.
                Say goodbye to manual procurement headaches and hello to intelligent automation.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Key Benefits</h3>
              <div className="grid gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dynamic Counter Cards */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent transition-all duration-300">
                  {deliveryDays.toFixed(1)} days
                </div>
                <div className="text-sm text-muted-foreground mt-1">Average delivery time</div>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-secondary/10 to-primary/10 border-secondary/20">
                <div className="text-4xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent transition-all duration-300">
                  {companies}+
                </div>
                <div className="text-sm text-muted-foreground mt-1">Trusted by leading companies</div>
              </Card>
            </div>
          </div>

          {/* Right Marquee Columns */}
          <div className="grid grid-cols-2 gap-4 relative h-[600px] sm:h-[650px] overflow-hidden">
            {/* Column 1 */}
            <div className="space-y-4 animate-marquee">
              {[...firstColumn, ...firstColumn].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group bg-gradient-to-br from-card to-muted/20"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <Badge variant="secondary" className="text-xs font-bold">
                        {feature.stat}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </Card>
                );
              })}
            </div>

            {/* Column 2 (reverse direction) */}
            <div className="space-y-4 animate-marquee-reverse">
              {[...secondColumn, ...secondColumn].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group bg-gradient-to-br from-card to-muted/20"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <Badge variant="secondary" className="text-xs font-bold">
                        {feature.stat}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        @keyframes marquee-reverse {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ProcurementFeatures;
