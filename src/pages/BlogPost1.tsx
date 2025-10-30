import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import aiProcurementImage from "@/assets/ai-procurement-dashboard.jpg";

const BlogPost1 = () => {
  return (
    <div className="min-h-screen bg-[#f4f0ec]">
      <Navbar />

      <div className="container mt-10  mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-12 sm:pb-16">
        {/* Back Button */}
        <Link to="/blogs" className="inline-block mb-6 sm:mb-8">
          <Button className="bg-gradient-to-br from-primary to-secondary text-primary-foreground font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg shadow-lg border-0 text-sm sm:text-base">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blogs
          </Button>
        </Link>

        {/* Article Header */}
        <Card className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 rounded-2xl border border-primary/10 shadow-lg">
          <Badge className="mb-4 bg-primary/10 text-primary border-0 text-xs sm:text-sm">
            AI & Technology
          </Badge>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
            The Future of AI in Construction Material Procurement
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-sm text-muted-foreground mb-6 sm:mb-8">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Jan 15, 2025
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                5 min read
              </div>
            </div>
            <Button className="sm:ml-auto bg-gradient-to-br from-secondary to-primary text-primary-foreground font-medium px-4 py-2 rounded-lg shadow-md border-0 text-sm">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>

          {/* Featured Image */}
          <div className="aspect-video mb-6 sm:mb-8 rounded-lg overflow-hidden">
            <img
              src={aiProcurementImage}
              alt="AI in Construction Material Procurement"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-6">
              Discover how artificial intelligence is revolutionizing the way construction companies source materials, from automated supplier matching to predictive pricing analytics.
            </p>

            <h2 className="text-2xl font-bold mb-4">The AI Revolution in Construction</h2>
            <p className="mb-6">
              The construction industry is experiencing a digital transformation, and artificial intelligence is at the forefront of this change. Traditional procurement methods, which often rely on manual processes and historical data, are being replaced by intelligent systems that can analyze vast amounts of data in real-time.
            </p>

            <h2 className="text-2xl font-bold mb-4">Key AI Applications in Material Procurement</h2>
            
            <h3 className="text-xl font-semibold mb-3">1. Automated Supplier Matching</h3>
            <p className="mb-4">
              AI algorithms can analyze supplier capabilities, past performance, and current capacity to automatically match construction companies with the most suitable suppliers for their specific needs. This reduces the time spent on vendor research and improves procurement efficiency.
            </p>

            <h3 className="text-xl font-semibold mb-3">2. Predictive Pricing Analytics</h3>
            <p className="mb-4">
              Machine learning models can predict material price fluctuations by analyzing market trends, seasonal patterns, and economic indicators. This enables construction companies to make informed purchasing decisions and optimize their procurement timing.
            </p>

            <h3 className="text-xl font-semibold mb-3">3. Quality Assurance Automation</h3>
            <p className="mb-4">
              AI-powered quality control systems can automatically verify material specifications, certifications, and compliance requirements, reducing the risk of receiving substandard materials and ensuring project quality standards are met.
            </p>

            <h2 className="text-2xl font-bold mb-4">Benefits of AI-Driven Procurement</h2>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">Reduced procurement costs through optimized supplier selection</li>
              <li className="mb-2">Faster decision-making with real-time data analysis</li>
              <li className="mb-2">Improved supplier relationships through data-driven insights</li>
              <li className="mb-2">Enhanced risk management and compliance monitoring</li>
              <li className="mb-2">Better inventory management and demand forecasting</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Implementation Challenges</h2>
            <p className="mb-4">
              While AI offers significant benefits, implementation comes with challenges. Companies need to invest in data infrastructure, train their teams, and ensure data quality. Additionally, integrating AI systems with existing procurement processes requires careful planning and change management.
            </p>

            <h2 className="text-2xl font-bold mb-4">The Road Ahead</h2>
            <p className="mb-6">
              As AI technology continues to evolve, we can expect even more sophisticated applications in construction material procurement. From blockchain-integrated supply chain transparency to IoT-enabled real-time material tracking, the future of construction procurement is becoming increasingly intelligent and efficient.
            </p>

            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Key Takeaway</h3>
              <p className="text-muted-foreground">
                AI is not just a technological upgrade—it's a fundamental shift in how construction companies approach material procurement. Early adopters who embrace these technologies will gain significant competitive advantages in cost efficiency, quality assurance, and project delivery timelines.
              </p>
            </div>
          </div>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPost1;