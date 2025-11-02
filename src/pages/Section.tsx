import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Import internal images
import image1 from "@/assets/projects-07.jpg";
import image2 from "@/assets/suppliers-06.jpg";
import image3 from "@/assets/image3.jpeg";
import image4 from "@/assets/image2.jpeg";

const Section = () => {
  const stats = [
    {
      image: image3,
      value: "10,000+",
      label: "Projects Completed",
      description:
        "Successfully delivered construction projects across India with our AI-powered procurement platform",
    },
    {
      image: image2,
      value: "500+",
      label: "Verified Suppliers",
      description:
        "Trusted network of verified suppliers ensuring quality materials and competitive pricing",
    },
    {
      image: image4,
      value: "28",
      label: "States Covered",
      description:
        "Pan-India presence serving construction projects from metros to tier-2 cities",
    },
    {
      image: image1,
      value: "98%",
      label: "Customer Satisfaction",
      description:
        "Exceptional service quality with industry-leading customer satisfaction ratings",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary/5 to-secondary/5 relative overflow-hidden">
      {/* Subtle gradient background overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-0">
            Industry Impact
          </Badge>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#c15738] to-[#5c2d23] bg-clip-text text-transparent">
            Construction{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Procurement
            </span>
          </h2>

          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4"></div>

          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Leading the digital transformation in construction material sourcing
            across India
          </p>
        </div>

        {/* Stats Section */}
        <div className="flex flex-col md:flex-row gap-4 h-[400px]">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group flex-grow transition-all w-full md:w-56 h-full duration-500 hover:w-full rounded-2xl overflow-hidden"
            >
              {/* Background Image */}
              <img
                src={stat.image}
                alt={stat.label}
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />

              {/* Permanent Black Overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/50 transition-all duration-500"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 text-white">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold   bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1 sm:mb-2">
                  {stat.value}
                </div>

                <h3 className="text-sm sm:text-base font-bold text-white mb-5">
                  {stat.label}
                </h3>

                <p className="text-xs sm:text-sm text-white/90 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 leading-relaxed">
                  {stat.description}
                </p>

                {/* <div className="mt-3 sm:mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <Link to="/products">
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      View More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section;
