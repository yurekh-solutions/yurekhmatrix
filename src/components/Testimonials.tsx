import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Quote, Star, Building, Factory } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Project Manager",
      company: "Metro Builders Pvt Ltd",
      location: "Mumbai, Maharashtra",
      rating: 4.2,
      text: "MaterialMatrix transformed our procurement process. We reduced material sourcing time by 70% and saved 15% on costs through their AI-powered supplier matching.",
      avatar: "RK",
      type: "builder",
      project: "₹50Cr+ Commercial Complex",
    },
    {
      name: "Priya Sharma",
      role: "Supply Chain Director",
      company: "JSW Steel Solutions",
      location: "Pune, Maharashtra",
      rating: 4,
      text: "The platform's escrow system gave us confidence to work with new builders. Our sales increased 40% in the first quarter, and payment disputes are now zero.",
      avatar: "PS",
      type: "vendor",
      speciality: "TMT & Structural Steel",
    },
    {
      name: "Amit Patel",
      role: "Construction Head",
      company: "Godrej Properties",
      location: "Ahmedabad, Gujarat",
      rating: 5,
      text: "Real-time tracking and quality assurance features helped us deliver projects 20% faster. The AI recommendations always match our exact requirements.",
      avatar: "AP",
      type: "builder",
      project: "₹200Cr+ Residential Township",
    },
    {
      name: "Sunita Reddy",
      role: "Managing Director",
      company: "Deccan Cement & Aggregates",
      location: "Hyderabad, Telangana",
      rating: 4,
      text: "MaterialMatrix connected us with verified builders across South India. Our monthly orders tripled, and the logistics support is exceptional.",
      avatar: "SR",
      type: "vendor",
      speciality: "Cement & Building Materials",
    },
    {
      name: "Vikram Singh",
      role: "Project Director",
      company: "DLF Limited",
      location: "Gurgaon, Haryana",
      rating: 3.5,
      text: "Voice AI feature is a game-changer for urgent requirements. We can place orders while on-site, and the 60-second quote system saves hours of back-and-forth.",
      avatar: "VS",
      type: "builder",
      project: "₹300Cr+ Mixed-Use Development",
    },
    {
      name: "Meera Iyer",
      role: "Business Head",
      company: "Tata Steel Processing",
      location: "Chennai, Tamil Nadu",
      rating: 4.5,
      text: "The platform's market intelligence helped us optimize pricing strategies. Revenue grew 60% while maintaining healthy margins through data-driven insights.",
      avatar: "MI",
      type: "vendor",
      speciality: "Steel Processing & Distribution",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#f7f5f2] relative overflow-hidden">
      {/* Soft gradient background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#c15738]/5 via-transparent to-[#5c2d23]/5" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-[#5c2d23]">
            <span className="bg-gradient-to-r from-[#c15738] to-[#5c2d23] bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-[#c15738] to-[#5c2d23] mx-auto rounded-full mb-4" />
          <p className="text-base sm:text-lg text-[#5c2d23]/80 max-w-2xl mx-auto">
            Hear from our partners who are revolutionizing construction procurement across India
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <GlassCard className="h-full p-5 sm:p-6 lg:p-8 bg-white/60 backdrop-blur-md border border-[#5c2d23]/10 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-500">
                {/* Rating and Type */}
                <div className="flex flex-wrap items-center justify-between mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, starIndex) => {
                      const ratingValue = starIndex + 1;
                      return (
                        <Star
                          key={starIndex}
                          className={`h-4 w-4 sm:h-5 sm:w-5 ${
                            t.rating >= ratingValue
                              ? "text-amber-400 fill-current"
                              : "text-[#5c2d23]/20"
                          }`}
                        />
                      );
                    })}
                  </div>
                  <div className="flex items-center space-x-2">
                    {t.type === "builder" ? (
                      <Building className="h-4 w-4 sm:h-5 sm:w-5 text-[#c15738]" />
                    ) : (
                      <Factory className="h-4 w-4 sm:h-5 sm:w-5 text-[#5c2d23]" />
                    )}
                    <span className="text-xs sm:text-sm font-medium text-[#5c2d23] capitalize">
                      {t.type}
                    </span>
                  </div>
                </div>

                {/* Quote */}
                <div className="relative mb-5">
                  <Quote className="h-5 w-5 sm:h-7 sm:w-7 text-[#c15738]/20 absolute -top-2 -left-1" />
                  <p className="text-sm sm:text-base text-[#5c2d23]/80 leading-relaxed pl-6">
                    “{t.text}”
                  </p>
                </div>

                {/* Profile */}
                <div className="flex items-start space-x-3 mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#c15738] to-[#5c2d23] rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                    {t.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-[#5c2d23] text-sm sm:text-base lg:text-lg">
                      {t.name}
                    </h4>
                    <p className="text-[#c15738] font-medium text-xs sm:text-sm">{t.role}</p>
                    <p className="text-[#5c2d23]/70 text-xs sm:text-sm truncate">
                      {t.company}
                    </p>
                    <p className="text-[10px] sm:text-xs text-[#5c2d23]/60 mt-1">
                      📍 {t.location}
                    </p>
                  </div>
                </div>

                {/* Project or Speciality */}
                <div className="mt-3 pt-3 border-t border-[#5c2d23]/10">
                  {t.type === "builder" ? (
                    <div className="text-xs sm:text-sm font-medium text-[#c15738]">
                      🏗️ {t.project}
                    </div>
                  ) : (
                    <div className="text-xs sm:text-sm font-medium text-[#5c2d23]">
                      ⚡ {t.speciality}
                    </div>
                  )}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
