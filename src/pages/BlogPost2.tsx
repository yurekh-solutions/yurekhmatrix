import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import tmtBarsImage from "@/assets/ms-tmt-bars.jpg";

const BlogPost2 = () => {
  return (
    <div className="min-h-screen bg-[#f4f0ec]">
      <Navbar />

      <div className="container mt-10 mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-12 sm:pb-16">
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
            Materials Guide
          </Badge>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
            Understanding TMT Steel Grades: A Complete Guide
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-sm text-muted-foreground mb-6 sm:mb-8">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Jan 12, 2025
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                8 min read
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
              src={tmtBarsImage}
              alt="TMT Steel Bars"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-6">
              Everything you need to know about different TMT steel grades, their applications, and how to choose the right grade for your construction project.
            </p>

            <h2 className="text-2xl font-bold mb-4">What is TMT Steel?</h2>
            <p className="mb-6">
              Thermo-Mechanically Treated (TMT) steel bars are high-strength reinforcement bars used in construction. The TMT process involves controlled cooling of hot rolled steel bars, which creates a unique microstructure that provides superior strength, ductility, and corrosion resistance.
            </p>

            <h2 className="text-2xl font-bold mb-4">TMT Steel Grades Explained</h2>
            
            <h3 className="text-xl font-semibold mb-3">Fe 415 Grade</h3>
            <div className="bg-muted p-4 rounded-lg mb-4">
              <p className="mb-2"><strong>Yield Strength:</strong> 415 N/mm²</p>
              <p className="mb-2"><strong>Applications:</strong> Residential buildings, small commercial structures</p>
              <p><strong>Best For:</strong> Low to medium-rise construction projects</p>
            </div>

            <h3 className="text-xl font-semibold mb-3">Fe 500 Grade</h3>
            <div className="bg-muted p-4 rounded-lg mb-4">
              <p className="mb-2"><strong>Yield Strength:</strong> 500 N/mm²</p>
              <p className="mb-2"><strong>Applications:</strong> High-rise buildings, bridges, industrial structures</p>
              <p><strong>Best For:</strong> Heavy-duty construction requiring high strength</p>
            </div>

            <h3 className="text-xl font-semibold mb-3">Fe 500D Grade</h3>
            <div className="bg-muted p-4 rounded-lg mb-4">
              <p className="mb-2"><strong>Yield Strength:</strong> 500 N/mm²</p>
              <p className="mb-2"><strong>Special Feature:</strong> Higher ductility (minimum 16% elongation)</p>
              <p className="mb-2"><strong>Applications:</strong> Earthquake-prone areas, critical structures</p>
              <p><strong>Best For:</strong> Seismic-resistant construction</p>
            </div>

            <h3 className="text-xl font-semibold mb-3">Fe 550 Grade</h3>
            <div className="bg-muted p-4 rounded-lg mb-4">
              <p className="mb-2"><strong>Yield Strength:</strong> 550 N/mm²</p>
              <p className="mb-2"><strong>Applications:</strong> Heavy industrial structures, marine construction</p>
              <p><strong>Best For:</strong> Extreme load-bearing requirements</p>
            </div>

            <h2 className="text-2xl font-bold mb-4">Key Properties of TMT Steel</h2>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2"><strong>High Strength:</strong> Superior tensile and yield strength</li>
              <li className="mb-2"><strong>Excellent Ductility:</strong> Can bend without breaking</li>
              <li className="mb-2"><strong>Corrosion Resistance:</strong> Better protection against rust</li>
              <li className="mb-2"><strong>Weldability:</strong> Easy to weld without losing strength</li>
              <li className="mb-2"><strong>Earthquake Resistance:</strong> Flexible under seismic stress</li>
              <li className="mb-2"><strong>Fire Resistance:</strong> Maintains strength at high temperatures</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">How to Choose the Right Grade</h2>
            
            <h3 className="text-xl font-semibold mb-3">Consider These Factors:</h3>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2"><strong>Building Type:</strong> Residential vs. commercial vs. industrial</li>
              <li className="mb-2"><strong>Load Requirements:</strong> Dead load, live load, and dynamic loads</li>
              <li className="mb-2"><strong>Environmental Conditions:</strong> Coastal areas, earthquake zones</li>
              <li className="mb-2"><strong>Budget Constraints:</strong> Higher grades cost more but offer better performance</li>
              <li className="mb-2"><strong>Local Building Codes:</strong> Compliance with regional standards</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Quality Standards and Certifications</h2>
            <p className="mb-4">
              Always ensure your TMT steel meets Indian Standards (IS 1786:2008) or international equivalents. Look for certifications from Bureau of Indian Standards (BIS) and third-party quality assurance agencies.
            </p>

            <h2 className="text-2xl font-bold mb-4">Storage and Handling Tips</h2>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">Store in dry, covered areas to prevent corrosion</li>
              <li className="mb-2">Keep bars elevated from ground level</li>
              <li className="mb-2">Separate different grades to avoid mixing</li>
              <li className="mb-2">Handle with care to prevent damage to ribs</li>
              <li className="mb-2">Regular inspection for any signs of rust or damage</li>
            </ul>

            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Expert Recommendation</h3>
              <p className="text-muted-foreground">
                For most residential and commercial projects, Fe 500D grade offers the best balance of strength, ductility, and cost-effectiveness. Always consult with a structural engineer to determine the most appropriate grade for your specific project requirements.
              </p>
            </div>
          </div>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPost2;