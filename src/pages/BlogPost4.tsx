import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import qualityControlImage from "@/assets/quality-control.jpg";

const BlogPost4 = () => {
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
            Quality Assurance
          </Badge>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
            Quality Control: Ensuring Material Standards on Site
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-sm text-muted-foreground mb-6 sm:mb-8">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Jan 8, 2025
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                7 min read
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
              src={qualityControlImage}
              alt="Quality Control in Construction"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-6">
              Best practices for implementing quality control measures to ensure all construction materials meet industry standards and specifications.
            </p>

            <h2 className="text-2xl font-bold mb-4">The Importance of Material Quality Control</h2>
            <p className="mb-6">
              Quality control in construction material procurement is not just about meeting specifications—it's about ensuring safety, durability, and long-term performance of structures. Poor quality materials can lead to structural failures, increased maintenance costs, and legal liabilities.
            </p>

            <h2 className="text-2xl font-bold mb-4">Pre-Procurement Quality Planning</h2>
            
            <h3 className="text-xl font-semibold mb-3">Specification Development</h3>
            <p className="mb-4">
              Develop clear, detailed material specifications that include performance requirements, testing standards, and acceptance criteria. Specifications should reference relevant industry standards such as IS codes, ASTM, or BS standards.
            </p>

            <h3 className="text-xl font-semibold mb-3">Supplier Qualification</h3>
            <div className="bg-muted p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">Supplier Assessment Criteria:</h4>
              <ul className="list-disc pl-6">
                <li className="mb-2">Quality management system certifications (ISO 9001)</li>
                <li className="mb-2">Manufacturing facility audits</li>
                <li className="mb-2">Past performance records and references</li>
                <li className="mb-2">Testing laboratory capabilities</li>
                <li className="mb-2">Compliance with environmental and safety standards</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mb-4">Incoming Material Inspection</h2>
            
            <h3 className="text-xl font-semibold mb-3">Visual Inspection Protocols</h3>
            <p className="mb-4">
              Establish systematic visual inspection procedures for all incoming materials. Train inspection personnel to identify common defects, damage during transportation, and non-conforming materials.
            </p>

            <h3 className="text-xl font-semibold mb-3">Documentation and Certification</h3>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Verify material test certificates (MTC)</li>
              <li className="mb-2">Check compliance certificates and approvals</li>
              <li className="mb-2">Maintain traceability records for all materials</li>
              <li className="mb-2">Document any deviations or non-conformances</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Testing and Sampling Procedures</h2>
            
            <h3 className="text-xl font-semibold mb-3">Sampling Plans</h3>
            <p className="mb-4">
              Develop statistically valid sampling plans based on lot sizes, criticality of materials, and risk assessment. Follow standards like IS 1199 for sampling of steel or relevant codes for other materials.
            </p>

            <h3 className="text-xl font-semibold mb-3">Testing Requirements by Material Type</h3>
            
            <div className="bg-muted p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">Steel Materials:</h4>
              <ul className="list-disc pl-6">
                <li className="mb-1">Tensile strength and yield strength tests</li>
                <li className="mb-1">Bend test for ductility</li>
                <li className="mb-1">Chemical composition analysis</li>
                <li className="mb-1">Dimensional checks and weight verification</li>
              </ul>
            </div>

            <div className="bg-muted p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">Cement:</h4>
              <ul className="list-disc pl-6">
                <li className="mb-1">Compressive strength at 3, 7, and 28 days</li>
                <li className="mb-1">Setting time (initial and final)</li>
                <li className="mb-1">Soundness test</li>
                <li className="mb-1">Fineness and specific surface area</li>
              </ul>
            </div>

            <div className="bg-muted p-4 rounded-lg mb-6">
              <h4 className="font-semibold mb-2">Aggregates:</h4>
              <ul className="list-disc pl-6">
                <li className="mb-1">Gradation analysis (sieve analysis)</li>
                <li className="mb-1">Water absorption and specific gravity</li>
                <li className="mb-1">Impact and crushing value tests</li>
                <li className="mb-1">Alkali-silica reactivity testing</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mb-4">Quality Control During Storage</h2>
            
            <h3 className="text-xl font-semibold mb-3">Proper Storage Conditions</h3>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Protect materials from weather exposure</li>
              <li className="mb-2">Maintain proper ventilation and drainage</li>
              <li className="mb-2">Implement FIFO (First In, First Out) inventory rotation</li>
              <li className="mb-2">Segregate different grades and types of materials</li>
              <li className="mb-2">Regular inspection for deterioration or contamination</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Handling Procedures</h3>
            <p className="mb-4">
              Establish proper handling procedures to prevent damage during loading, unloading, and movement within the site. Train personnel on correct lifting techniques and equipment usage.
            </p>

            <h2 className="text-2xl font-bold mb-4">Non-Conformance Management</h2>
            
            <h3 className="text-xl font-semibold mb-3">Identification and Segregation</h3>
            <p className="mb-4">
              Immediately identify and segregate non-conforming materials to prevent their inadvertent use. Use clear marking systems and designated storage areas for rejected materials.
            </p>

            <h3 className="text-xl font-semibold mb-3">Corrective Actions</h3>
            <div className="bg-muted p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">Options for Non-Conforming Materials:</h4>
              <ul className="list-disc pl-6">
                <li className="mb-2">Return to supplier for replacement</li>
                <li className="mb-2">Accept with concessions (if technically acceptable)</li>
                <li className="mb-2">Rework or reprocess (where possible)</li>
                <li className="mb-2">Use in less critical applications (with approval)</li>
                <li className="mb-2">Reject and dispose of safely</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mb-4">Digital Quality Management</h2>
            
            <h3 className="text-xl font-semibold mb-3">Quality Management Software</h3>
            <p className="mb-4">
              Implement digital quality management systems to track inspections, test results, and compliance status. These systems provide real-time visibility and automated reporting capabilities.
            </p>

            <h3 className="text-xl font-semibold mb-3">Mobile Inspection Apps</h3>
            <p className="mb-4">
              Use mobile applications for field inspections, allowing inspectors to capture photos, record measurements, and generate reports directly from the site.
            </p>

            <h2 className="text-2xl font-bold mb-4">Continuous Improvement</h2>
            
            <h3 className="text-xl font-semibold mb-3">Performance Monitoring</h3>
            <p className="mb-4">
              Regularly monitor quality performance metrics such as rejection rates, supplier performance scores, and compliance levels. Use this data to identify improvement opportunities.
            </p>

            <h3 className="text-xl font-semibold mb-3">Training and Competency</h3>
            <p className="mb-6">
              Provide regular training to quality control personnel on new standards, testing procedures, and quality management techniques. Maintain competency records and certification requirements.
            </p>

            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Quality Control Checklist</h3>
              <p className="text-muted-foreground mb-4">
                Essential elements for effective material quality control:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li className="mb-1">Clear specifications and acceptance criteria</li>
                <li className="mb-1">Qualified suppliers and testing laboratories</li>
                <li className="mb-1">Systematic inspection and testing procedures</li>
                <li className="mb-1">Proper documentation and traceability</li>
                <li className="mb-1">Trained and competent quality personnel</li>
                <li className="mb-1">Effective non-conformance management</li>
                <li className="mb-1">Continuous monitoring and improvement</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPost4;