import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import digitalTransformationImage from "@/assets/digital-twin.jpg";

const BlogPost6 = () => {
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
            Digital Innovation
          </Badge>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
            Digital Transformation in Construction Supply Chain
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-sm text-muted-foreground mb-6 sm:mb-8">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Jan 3, 2025
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
              src={digitalTransformationImage}
              alt="Digital Transformation in Construction"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-6">
              How digital tools and platforms are streamlining the construction supply chain, from procurement to delivery tracking.
            </p>

            <h2 className="text-2xl font-bold mb-4">The Digital Revolution in Construction</h2>
            <p className="mb-6">
              The construction industry, traditionally slow to adopt new technologies, is experiencing a digital transformation that's reshaping how projects are planned, executed, and managed. Digital tools are revolutionizing supply chain management, making it more efficient, transparent, and responsive to market demands.
            </p>

            <h2 className="text-2xl font-bold mb-4">Key Digital Technologies</h2>
            
            <h3 className="text-xl font-semibold mb-3">Cloud-Based Procurement Platforms</h3>
            <p className="mb-4">
              Modern procurement platforms provide centralized access to supplier networks, automated ordering processes, and real-time price comparisons. These platforms enable construction companies to streamline their procurement workflows and make data-driven purchasing decisions.
            </p>

            <div className="bg-muted p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">Platform Benefits:</h4>
              <ul className="list-disc pl-6">
                <li className="mb-2">24/7 access to supplier catalogs and pricing</li>
                <li className="mb-2">Automated purchase order generation</li>
                <li className="mb-2">Integrated approval workflows</li>
                <li className="mb-2">Spend analytics and reporting</li>
                <li className="mb-2">Supplier performance tracking</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mb-3">Internet of Things (IoT) Integration</h3>
            <p className="mb-4">
              IoT sensors and devices are transforming supply chain visibility by providing real-time data on material location, condition, and usage. Smart sensors can monitor temperature, humidity, and other environmental factors that affect material quality.
            </p>

            <h3 className="text-xl font-semibold mb-3">Blockchain for Supply Chain Transparency</h3>
            <p className="mb-4">
              Blockchain technology creates immutable records of material provenance, ensuring authenticity and traceability throughout the supply chain. This is particularly valuable for high-value materials and compliance-critical applications.
            </p>

            <h2 className="text-2xl font-bold mb-4">Digital Procurement Solutions</h2>
            
            <h3 className="text-xl font-semibold mb-3">E-Procurement Systems</h3>
            <p className="mb-4">
              Electronic procurement systems automate the entire procurement process from requisition to payment. These systems integrate with existing ERP systems and provide comprehensive procurement management capabilities.
            </p>

            <h3 className="text-xl font-semibold mb-3">Supplier Portals</h3>
            <p className="mb-4">
              Dedicated supplier portals facilitate better communication and collaboration between construction companies and their suppliers. These portals enable suppliers to update product information, submit quotes, and track order status in real-time.
            </p>

            <h3 className="text-xl font-semibold mb-3">Mobile Applications</h3>
            <div className="bg-muted p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">Mobile App Features:</h4>
              <ul className="list-disc pl-6">
                <li className="mb-2">On-site material ordering and tracking</li>
                <li className="mb-2">Barcode scanning for inventory management</li>
                <li className="mb-2">Photo-based quality inspections</li>
                <li className="mb-2">Real-time delivery notifications</li>
                <li className="mb-2">Digital signature capture for receipts</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mb-4">Advanced Analytics and AI</h2>
            
            <h3 className="text-xl font-semibold mb-3">Predictive Analytics</h3>
            <p className="mb-4">
              Advanced analytics tools analyze historical data, market trends, and project requirements to predict material needs, optimize inventory levels, and identify potential supply chain disruptions before they occur.
            </p>

            <h3 className="text-xl font-semibold mb-3">Machine Learning Applications</h3>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Demand forecasting based on project schedules</li>
              <li className="mb-2">Supplier performance prediction and risk assessment</li>
              <li className="mb-2">Price optimization and negotiation support</li>
              <li className="mb-2">Quality control through image recognition</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Real-Time Tracking and Visibility</h2>
            
            <h3 className="text-xl font-semibold mb-3">GPS and RFID Tracking</h3>
            <p className="mb-4">
              GPS tracking provides real-time location data for material shipments, while RFID tags enable automatic identification and tracking of individual items throughout the supply chain.
            </p>

            <h3 className="text-xl font-semibold mb-3">Digital Dashboards</h3>
            <p className="mb-4">
              Comprehensive dashboards provide stakeholders with real-time visibility into supply chain performance, including delivery status, inventory levels, and supplier performance metrics.
            </p>

            <h2 className="text-2xl font-bold mb-4">Integration with Project Management</h2>
            
            <h3 className="text-xl font-semibold mb-3">BIM Integration</h3>
            <p className="mb-4">
              Building Information Modeling (BIM) integration allows for automatic material quantity takeoffs and procurement planning based on 3D models. This ensures accurate material requirements and reduces waste.
            </p>

            <h3 className="text-xl font-semibold mb-3">Project Scheduling Synchronization</h3>
            <p className="mb-4">
              Digital supply chain systems can synchronize with project schedules to ensure materials arrive just-in-time, reducing storage costs and minimizing the risk of material damage or theft.
            </p>

            <h2 className="text-2xl font-bold mb-4">Benefits of Digital Transformation</h2>
            
            <div className="bg-muted p-4 rounded-lg mb-6">
              <h4 className="font-semibold mb-2">Operational Benefits:</h4>
              <ul className="list-disc pl-6">
                <li className="mb-2">Reduced procurement cycle times</li>
                <li className="mb-2">Improved inventory accuracy and turnover</li>
                <li className="mb-2">Enhanced supplier collaboration</li>
                <li className="mb-2">Better compliance and audit trails</li>
                <li className="mb-2">Reduced manual errors and paperwork</li>
              </ul>
            </div>

            <div className="bg-muted p-4 rounded-lg mb-6">
              <h4 className="font-semibold mb-2">Financial Benefits:</h4>
              <ul className="list-disc pl-6">
                <li className="mb-2">Lower procurement costs through better negotiation</li>
                <li className="mb-2">Reduced inventory carrying costs</li>
                <li className="mb-2">Minimized project delays and associated costs</li>
                <li className="mb-2">Improved cash flow management</li>
                <li className="mb-2">Better budget control and forecasting</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mb-4">Implementation Challenges</h2>
            
            <h3 className="text-xl font-semibold mb-3">Technology Integration</h3>
            <p className="mb-4">
              Integrating new digital tools with existing systems can be complex and time-consuming. Organizations need to ensure compatibility and data consistency across different platforms.
            </p>

            <h3 className="text-xl font-semibold mb-3">Change Management</h3>
            <p className="mb-4">
              Digital transformation requires significant changes in processes and workflows. Successful implementation depends on effective change management and user adoption strategies.
            </p>

            <h3 className="text-xl font-semibold mb-3">Data Security and Privacy</h3>
            <p className="mb-4">
              Digital systems handle sensitive business and supplier information, making cybersecurity a critical concern. Organizations must implement robust security measures and compliance protocols.
            </p>

            <h2 className="text-2xl font-bold mb-4">Future Outlook</h2>
            
            <h3 className="text-xl font-semibold mb-3">Emerging Technologies</h3>
            <p className="mb-4">
              Future developments in artificial intelligence, augmented reality, and autonomous vehicles will further transform construction supply chains, enabling even greater efficiency and automation.
            </p>

            <h3 className="text-xl font-semibold mb-3">Industry Standardization</h3>
            <p className="mb-6">
              As digital adoption increases, industry standards for data exchange and interoperability will emerge, making it easier for different systems and stakeholders to work together seamlessly.
            </p>

            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Digital Transformation Roadmap</h3>
              <p className="text-muted-foreground mb-4">
                Steps to successfully implement digital supply chain solutions:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li className="mb-1">Assess current processes and identify improvement opportunities</li>
                <li className="mb-1">Define clear objectives and success metrics</li>
                <li className="mb-1">Select appropriate technology solutions and vendors</li>
                <li className="mb-1">Develop implementation plan with phased rollout</li>
                <li className="mb-1">Train staff and manage change effectively</li>
                <li className="mb-1">Monitor performance and continuously optimize</li>
                <li className="mb-1">Scale successful implementations across the organization</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPost6;