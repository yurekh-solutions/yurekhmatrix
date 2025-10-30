import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import sustainableMaterialsImage from "@/assets/sustainable-materials.jpg";

const BlogPost5 = () => {
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
            Sustainability
          </Badge>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
            Sustainable Construction Materials: A Growing Trend
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-sm text-muted-foreground mb-6 sm:mb-8">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Jan 5, 2025
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
              src={sustainableMaterialsImage}
              alt="Sustainable Construction Materials"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-6">
              Explore eco-friendly alternatives in construction materials and learn how sustainable sourcing can benefit both your project and the environment.
            </p>

            <h2 className="text-2xl font-bold mb-4">The Rise of Sustainable Construction</h2>
            <p className="mb-6">
              The construction industry is undergoing a green revolution. With increasing awareness of environmental impact and stricter regulations, sustainable construction materials are no longer just an option—they're becoming a necessity. This shift is driven by climate change concerns, resource scarcity, and the growing demand for energy-efficient buildings.
            </p>

            <h2 className="text-2xl font-bold mb-4">Key Sustainable Material Categories</h2>
            
            <h3 className="text-xl font-semibold mb-3">Recycled and Reclaimed Materials</h3>
            <div className="bg-muted p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">Popular Options:</h4>
              <ul className="list-disc pl-6">
                <li className="mb-2"><strong>Recycled Steel:</strong> Uses 75% less energy than producing new steel</li>
                <li className="mb-2"><strong>Reclaimed Wood:</strong> Reduces deforestation and adds character</li>
                <li className="mb-2"><strong>Recycled Concrete:</strong> Crushed concrete for aggregate use</li>
                <li className="mb-2"><strong>Recycled Plastic Lumber:</strong> Durable alternative to traditional wood</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mb-3">Bio-Based Materials</h3>
            <p className="mb-4">
              Materials derived from renewable biological resources are gaining popularity for their low environmental impact and carbon sequestration properties.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Bamboo:</strong> Fast-growing, strong, and versatile</li>
              <li className="mb-2"><strong>Hemp-Based Materials:</strong> Insulation and building blocks</li>
              <li className="mb-2"><strong>Cork:</strong> Excellent insulation properties</li>
              <li className="mb-2"><strong>Straw Bales:</strong> Natural insulation for walls</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Low-Impact Manufacturing Materials</h3>
            <p className="mb-4">
              These materials are produced using processes that minimize environmental impact through reduced energy consumption, lower emissions, or innovative manufacturing techniques.
            </p>

            <h2 className="text-2xl font-bold mb-4">Environmental Benefits</h2>
            
            <h3 className="text-xl font-semibold mb-3">Carbon Footprint Reduction</h3>
            <p className="mb-4">
              Sustainable materials typically have lower embodied carbon—the total greenhouse gas emissions from material extraction, manufacturing, and transportation. Some materials even act as carbon sinks, storing CO2 throughout their lifecycle.
            </p>

            <h3 className="text-xl font-semibold mb-3">Resource Conservation</h3>
            <div className="bg-muted p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">Conservation Benefits:</h4>
              <ul className="list-disc pl-6">
                <li className="mb-2">Reduced extraction of virgin materials</li>
                <li className="mb-2">Lower water consumption in manufacturing</li>
                <li className="mb-2">Decreased waste generation</li>
                <li className="mb-2">Protection of natural habitats</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mb-3">Waste Reduction</h3>
            <p className="mb-4">
              By using recycled materials and designing for disassembly, sustainable construction significantly reduces waste sent to landfills and promotes circular economy principles.
            </p>

            <h2 className="text-2xl font-bold mb-4">Economic Advantages</h2>
            
            <h3 className="text-xl font-semibold mb-3">Long-Term Cost Savings</h3>
            <p className="mb-4">
              While initial costs may be higher, sustainable materials often provide long-term savings through improved durability, lower maintenance requirements, and energy efficiency benefits.
            </p>

            <h3 className="text-xl font-semibold mb-3">Market Value Enhancement</h3>
            <p className="mb-4">
              Buildings constructed with sustainable materials often command higher market values and rental rates. Green certifications like LEED or BREEAM can significantly increase property value.
            </p>

            <h3 className="text-xl font-semibold mb-3">Incentives and Tax Benefits</h3>
            <p className="mb-4">
              Many governments offer tax incentives, rebates, and grants for sustainable construction projects, helping offset initial investment costs.
            </p>

            <h2 className="text-2xl font-bold mb-4">Implementation Challenges</h2>
            
            <h3 className="text-xl font-semibold mb-3">Supply Chain Considerations</h3>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Limited availability of some sustainable materials</li>
              <li className="mb-2">Need for specialized suppliers and contractors</li>
              <li className="mb-2">Quality consistency and standardization issues</li>
              <li className="mb-2">Transportation and logistics challenges</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Technical Challenges</h3>
            <p className="mb-4">
              Some sustainable materials may require different installation techniques, specialized tools, or additional training for construction teams. Performance characteristics may also differ from traditional materials.
            </p>

            <h2 className="text-2xl font-bold mb-4">Best Practices for Sustainable Sourcing</h2>
            
            <h3 className="text-xl font-semibold mb-3">Lifecycle Assessment</h3>
            <p className="mb-4">
              Conduct comprehensive lifecycle assessments to evaluate the true environmental impact of materials from cradle to grave. Consider extraction, manufacturing, transportation, use, and end-of-life disposal.
            </p>

            <h3 className="text-xl font-semibold mb-3">Local Sourcing</h3>
            <p className="mb-4">
              Prioritize locally sourced materials to reduce transportation emissions and support local economies. Local materials are often better adapted to regional climate conditions.
            </p>

            <h3 className="text-xl font-semibold mb-3">Certification and Standards</h3>
            <div className="bg-muted p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">Key Certifications to Look For:</h4>
              <ul className="list-disc pl-6">
                <li className="mb-2">Forest Stewardship Council (FSC) for wood products</li>
                <li className="mb-2">Cradle to Cradle Certified for various materials</li>
                <li className="mb-2">GREENGUARD for low-emission products</li>
                <li className="mb-2">Energy Star for energy-efficient products</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mb-4">Future Trends</h2>
            
            <h3 className="text-xl font-semibold mb-3">Innovative Materials</h3>
            <p className="mb-4">
              Emerging technologies are creating new sustainable materials like mycelium-based insulation, algae-based concrete, and 3D-printed materials from recycled waste.
            </p>

            <h3 className="text-xl font-semibold mb-3">Circular Economy Integration</h3>
            <p className="mb-4">
              The future of sustainable construction lies in circular economy principles—designing buildings for disassembly and material reuse, creating closed-loop material cycles.
            </p>

            <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
            <p className="mb-6">
              Begin your sustainable construction journey by setting clear sustainability goals, educating your team, and starting with pilot projects. Gradually increase the percentage of sustainable materials in your projects as you gain experience and build supplier relationships.
            </p>

            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Sustainability Action Plan</h3>
              <p className="text-muted-foreground mb-4">
                Steps to implement sustainable materials in your projects:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li className="mb-1">Assess current material usage and environmental impact</li>
                <li className="mb-1">Set measurable sustainability targets</li>
                <li className="mb-1">Research and identify suitable sustainable alternatives</li>
                <li className="mb-1">Build relationships with certified sustainable suppliers</li>
                <li className="mb-1">Train your team on sustainable construction practices</li>
                <li className="mb-1">Monitor and measure progress against targets</li>
                <li className="mb-1">Continuously improve and expand sustainable practices</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPost5;