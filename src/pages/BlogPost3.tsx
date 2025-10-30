import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import costOptimizationImage from "@/assets/rate-management.jpg";

const BlogPost3 = () => {
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
            Cost Optimization
          </Badge>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
            How to Reduce Material Costs in Large Construction Projects
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-sm text-muted-foreground mb-6 sm:mb-8">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Jan 10, 2025
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                6 min read
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
              src={costOptimizationImage}
              alt="Cost Optimization in Construction"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-6">
              Practical strategies and tips for optimizing material procurement costs without compromising on quality in large-scale construction projects.
            </p>

            <h2 className="text-2xl font-bold mb-4">The Challenge of Material Cost Management</h2>
            <p className="mb-6">
              Material costs typically account for 40-60% of total construction project expenses. In large-scale projects, even small percentage savings can translate to significant cost reductions. However, the challenge lies in achieving these savings without compromising quality, safety, or project timelines.
            </p>

            <h2 className="text-2xl font-bold mb-4">Strategic Procurement Planning</h2>
            
            <h3 className="text-xl font-semibold mb-3">1. Early Material Planning</h3>
            <p className="mb-4">
              Start material planning during the design phase. Early identification of material requirements allows for better negotiation, bulk purchasing opportunities, and avoiding rush orders that typically come with premium pricing.
            </p>

            <h3 className="text-xl font-semibold mb-3">2. Market Analysis and Timing</h3>
            <p className="mb-4">
              Monitor market trends and seasonal price fluctuations. Steel prices, for example, often vary based on global demand and raw material availability. Strategic timing of purchases can result in 10-15% cost savings.
            </p>

            <h3 className="text-xl font-semibold mb-3">3. Bulk Purchasing Strategies</h3>
            <div className="bg-muted p-4 rounded-lg mb-4">
              <ul className="list-disc pl-6">
                <li className="mb-2">Consolidate orders across multiple projects</li>
                <li className="mb-2">Negotiate volume discounts with suppliers</li>
                <li className="mb-2">Consider consortium purchasing with other contractors</li>
                <li className="mb-2">Plan storage and logistics for bulk orders</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mb-4">Supplier Relationship Management</h2>
            
            <h3 className="text-xl font-semibold mb-3">Develop Strategic Partnerships</h3>
            <p className="mb-4">
              Build long-term relationships with reliable suppliers. Strategic partnerships often lead to better pricing, priority delivery, flexible payment terms, and access to new products or technologies.
            </p>

            <h3 className="text-xl font-semibold mb-3">Supplier Diversification</h3>
            <p className="mb-4">
              Maintain relationships with multiple suppliers for critical materials. This provides negotiation leverage and ensures supply continuity even if one supplier faces issues.
            </p>

            <h2 className="text-2xl font-bold mb-4">Value Engineering Approaches</h2>
            
            <h3 className="text-xl font-semibold mb-3">Material Substitution</h3>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Evaluate alternative materials with similar performance</li>
              <li className="mb-2">Consider local materials to reduce transportation costs</li>
              <li className="mb-2">Assess lifecycle costs, not just initial purchase price</li>
              <li className="mb-2">Ensure substitutions meet project specifications and codes</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Standardization Benefits</h3>
            <p className="mb-4">
              Standardize material specifications across projects. This enables bulk purchasing, reduces inventory complexity, and simplifies procurement processes.
            </p>

            <h2 className="text-2xl font-bold mb-4">Technology-Driven Cost Reduction</h2>
            
            <h3 className="text-xl font-semibold mb-3">Digital Procurement Platforms</h3>
            <p className="mb-4">
              Utilize e-procurement platforms to compare prices, automate ordering processes, and maintain transparent supplier relationships. These platforms often provide access to competitive pricing and new suppliers.
            </p>

            <h3 className="text-xl font-semibold mb-3">Inventory Management Systems</h3>
            <p className="mb-4">
              Implement digital inventory management to reduce waste, prevent over-ordering, and optimize material usage. Real-time tracking helps identify cost-saving opportunities.
            </p>

            <h2 className="text-2xl font-bold mb-4">Waste Reduction Strategies</h2>
            
            <div className="bg-muted p-4 rounded-lg mb-6">
              <h4 className="font-semibold mb-2">Key Waste Reduction Tactics:</h4>
              <ul className="list-disc pl-6">
                <li className="mb-2">Accurate quantity estimation and ordering</li>
                <li className="mb-2">Proper material handling and storage</li>
                <li className="mb-2">Recycling and reuse programs</li>
                <li className="mb-2">Just-in-time delivery to reduce storage costs</li>
                <li className="mb-2">Regular waste audits and process improvements</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mb-4">Financial Optimization Techniques</h2>
            
            <h3 className="text-xl font-semibold mb-3">Payment Terms Negotiation</h3>
            <p className="mb-4">
              Negotiate favorable payment terms such as extended payment periods, early payment discounts, or milestone-based payments. This improves cash flow and can reduce overall project costs.
            </p>

            <h3 className="text-xl font-semibold mb-3">Currency and Price Hedging</h3>
            <p className="mb-4">
              For projects with imported materials, consider currency hedging to protect against exchange rate fluctuations. Fixed-price contracts can also provide cost certainty.
            </p>

            <h2 className="text-2xl font-bold mb-4">Quality vs. Cost Balance</h2>
            <p className="mb-6">
              Remember that the cheapest option isn't always the most cost-effective. Consider total cost of ownership, including maintenance, durability, and performance over the project lifecycle.
            </p>

            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Success Metrics</h3>
              <p className="text-muted-foreground mb-4">
                Track these KPIs to measure cost optimization success:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li className="mb-1">Material cost per square foot/meter</li>
                <li className="mb-1">Percentage of budget saved through optimization</li>
                <li className="mb-1">Waste reduction percentage</li>
                <li className="mb-1">Supplier performance ratings</li>
                <li className="mb-1">Time saved in procurement processes</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPost3;