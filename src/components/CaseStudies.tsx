import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Building, IndianRupee, Clock, TrendingUp, MapPin, Users, Award } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Metro Commercial Complex",
      company: "Prestige Group",
      location: "Bangalore, Karnataka",
      projectValue: "₹250 Crores",
      timeline: "18 Months",
      image: "🏢",
      challenge: "Sourcing specialized steel structures for a high-rise commercial complex with tight delivery schedules.",
      solution: "AI-powered supplier matching connected them with 3 verified structural steel manufacturers within 24 hours.",
      results: [
        { metric: "Cost Savings", value: "₹2.8 Cr", percentage: "22%" },
        { metric: "Time Reduced", value: "45 Days", percentage: "35%" },
        { metric: "Quality Score", value: "98.5%", percentage: "+15%" }
      ],
      materials: ["Structural Steel", "TMT Bars", "Cement", "Glass Facades"],
      testimonial: "
MaterialMatrix reduced our procurement time by 45 days and saved us ₹2.8 crores through competitive pricing.",
      clientName: "Rajesh Menon",
      clientRole: "Project Director"
    },
    {
      title: "Smart City Infrastructure",
      company: "L&T Construction",
      location: "Pune, Maharashtra",
      projectValue: "₹500 Crores",
      timeline: "24 Months",
      image: "🌆",
      challenge: "Massive procurement needs across multiple material categories with stringent quality requirements.",
      solution: "Integrated supply chain management with real-time tracking across 15+ material categories and 50+ suppliers.",
      results: [
        { metric: "Efficiency Gain", value: "40%", percentage: "+40%" },
        { metric: "Supplier Network", value: "127", percentage: "3x" },
        { metric: "On-time Delivery", value: "97.2%", percentage: "+25%" }
      ],
      materials: ["Concrete", "Steel Reinforcement", "Electrical Systems", "Road Materials"],
      testimonial: "The platform's market intelligence helped us optimize procurement across 15 material categories simultaneously.",
      clientName: "Priya Sharma",
      clientRole: "Procurement Head"
    },
    {
      title: "Luxury Residential Township",
      company: "Godrej Properties",
      location: "Gurgaon, Haryana",
      projectValue: "₹180 Crores",
      timeline: "15 Months", 
      image: "🏘️",
      challenge: "Premium materials sourcing with strict quality standards and sustainable certification requirements.",
      solution: "AI-driven quality matching system identified certified green building material suppliers with sustainability credentials.",
      results: [
        { metric: "Green Materials", value: "85%", percentage: "+60%" },
        { metric: "Budget Adherence", value: "102%", percentage: "Within" },
        { metric: "Project Timeline", value: "98%", percentage: "On-track" }
      ],
      materials: ["Eco-friendly Cement", "Recycled Steel", "Energy-efficient Glass", "Sustainable Tiles"],
      testimonial: "Finding LEED-certified suppliers was seamless. The sustainability scoring helped us exceed green building targets.",
      clientName: "Amit Verma",
      clientRole: "Sustainability Manager"
    }
  ];

  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Success Case Studies
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real projects, real results - discover how leading construction companies transformed their procurement
          </p>
        </motion.div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <GlassCard variant="premium" className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8">
                  {/* Project Header */}
                  <div className="lg:col-span-12">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                      <div className="flex items-center space-x-4 mb-4 md:mb-0">
                        <div className="text-5xl">{study.image}</div>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground">{study.title}</h3>
                          <div className="flex items-center space-x-4 text-muted-foreground">
                            <span className="flex items-center space-x-1">
                              <Building className="h-4 w-4" />
                              <span>{study.company}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4" />
                              <span>{study.location}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="text-center p-3 glass-morphism rounded-lg">
                          <div className="text-sm text-muted-foreground">Project Value</div>
                          <div className="font-bold text-primary">{study.projectValue}</div>
                        </div>
                        <div className="text-center p-3 glass-morphism rounded-lg">
                          <div className="text-sm text-muted-foreground">Timeline</div>
                          <div className="font-bold text-accent">{study.timeline}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="lg:col-span-7">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center space-x-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full" />
                          <span>Challenge</span>
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                          <span>Solution</span>
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                      </div>

                      {/* Materials Used */}
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">Materials Procured</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.materials.map((material, matIndex) => (
                            <span 
                              key={matIndex}
                              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                            >
                              {material}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="lg:col-span-5">
                    <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center space-x-2">
                      <Award className="h-5 w-5 text-primary" />
                      <span>Results Achieved</span>
                    </h4>
                    
                    <div className="space-y-4 mb-6">
                      {study.results.map((result, resIndex) => (
                        <motion.div
                          key={resIndex}
                          className="glass-morphism p-4 rounded-lg group hover:border-primary/30 transition-all duration-300"
                          initial={{ opacity: 0, x: 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * resIndex, duration: 0.5 }}
                          viewport={{ once: true }}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-muted-foreground">{result.metric}</span>
                            <span className="text-sm font-semibold text-primary">{result.percentage}</span>
                          </div>
                          <div className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                            {result.value}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Testimonial */}
                    <GlassCard variant="interactive" className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                          {study.clientName.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="flex-1">
                          <p className="text-muted-foreground text-sm leading-relaxed mb-3 italic">
                            "{study.testimonial}"
                          </p>
                          <div>
                            <div className="font-semibold text-foreground text-sm">{study.clientName}</div>
                            <div className="text-xs text-muted-foreground">{study.clientRole}, {study.company}</div>
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <GlassCard variant="premium" className="inline-block p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Combined Impact Across All Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">₹930Cr+</div>
                <div className="text-muted-foreground text-sm">Total Project Value</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">32%</div>
                <div className="text-muted-foreground text-sm">Avg. Cost Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-glow mb-2">78 Days</div>
                <div className="text-muted-foreground text-sm">Time Saved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">98.1%</div>
                <div className="text-muted-foreground text-sm">Success Rate</div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;