import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Import blog images
import aiProcurementImage from "@/assets/ai-networks.jpg";
import tmtBarsImage from "@/assets/ai-dashboard.jpg";
import costOptimizationImage from "@/assets/ai-dashboaar.jpg";
import qualityControlImage from "@/assets/ai-sourcing-optimization.jpg";
import sustainableMaterialsImage from "@/assets/sourcing-optimizer.png";
import digitalTransformationImage from "@/assets/supplier-verification.jpg"

const blogs = [
  {
    id: 1,
    title: "The Future of AI in Construction Material Procurement",
    excerpt: "Discover how artificial intelligence is revolutionizing the way construction companies source materials, from automated supplier matching to predictive pricing analytics.",
    category: "AI & Technology",
    date: "Jan 15, 2025",
    readTime: "5 min read",
    image: aiProcurementImage
  },
  {
    id: 2,
    title: "Understanding TMT Steel Grades: A Complete Guide",
    excerpt: "Everything you need to know about different TMT steel grades, their applications, and how to choose the right grade for your construction project.",
    category: "Materials Guide",
    date: "Jan 12, 2025",
    readTime: "8 min read",
    image: tmtBarsImage
  },
  {
    id: 3,
    title: "How to Reduce Material Costs in Large Construction Projects",
    excerpt: "Practical strategies and tips for optimizing material procurement costs without compromising on quality in large-scale construction projects.",
    category: "Cost Optimization",
    date: "Jan 10, 2025",
    readTime: "6 min read",
    image: costOptimizationImage
  },
  {
    id: 4,
    title: "Quality Control: Ensuring Material Standards on Site",
    excerpt: "Best practices for implementing quality control measures to ensure all construction materials meet industry standards and specifications.",
    category: "Quality Assurance",
    date: "Jan 8, 2025",
    readTime: "7 min read",
    image: qualityControlImage
  },
  {
    id: 5,
    title: "Sustainable Construction Materials: A Growing Trend",
    excerpt: "Explore eco-friendly alternatives in construction materials and learn how sustainable sourcing can benefit both your project and the environment.",
    category: "Sustainability",
    date: "Jan 5, 2025",
    readTime: "5 min read",
    image: sustainableMaterialsImage
  },
  {
    id: 6,
    title: "Digital Transformation in Construction Supply Chain",
    excerpt: "How digital tools and platforms are streamlining the construction supply chain, from procurement to delivery tracking.",
    category: "Digital Innovation",
    date: "Jan 3, 2025",
    readTime: "6 min read",
    image: digitalTransformationImage
  }
];

const Blogs = () => {
  return (
    <>
      <SEOHead
        title="Construction Industry Blog | Building Materials Guide & Expert Insights - ritzyard"
        description="Expert insights on construction materials, procurement best practices & industry trends. Learn about TMT steel grades, cement types, sustainable materials, AI in construction & cost optimization tips."
        keywords="construction blog India, building materials guide, TMT steel grades explained, cement types comparison, construction procurement tips, AI in construction industry, sustainable construction materials, cost optimization construction, construction industry trends India, material selection guide, building materials news, construction technology updates, infrastructure development India"
        canonicalUrl="https://ritzyard.com/blogs"
      />
    <div className="min-h-screen bg-[#f4f0ec]">
      <Navbar />

      <div className="container mt-10 mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-2">
            Blogs & <span className="text-gradient">Insights</span>
          </h1>
          <div className="w-16 sm:w-24 h-1 bg-gradient-primary mx-auto mb-4"></div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Stay updated with the latest trends, insights, and best practices in construction material procurement
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-lg border border-primary/10 overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video bg-muted overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 sm:p-6">
                <Badge className="mb-3 bg-primary/10 text-primary border-0 text-xs sm:text-sm">
                  {blog.category}
                </Badge>

                <h3 className="text-base sm:text-lg font-bold mb-3 line-clamp-2">
                  {blog.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span className="hidden sm:inline">{blog.date}</span>
                    <span className="sm:hidden">{blog.date.split(' ')[0]} {blog.date.split(' ')[1]}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {blog.readTime}
                  </div>
                </div>

                <Link to={`/blog/${blog.id}`} className="block">
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg shadow-lg border-0 text-sm sm:text-base">
                    <span className="flex items-center justify-center gap-2">
                      <span className="font-medium">Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
    </>
  );
};

export default Blogs;
