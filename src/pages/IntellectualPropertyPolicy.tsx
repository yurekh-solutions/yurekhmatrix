import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Shield, AlertTriangle, FileText, Scale, Globe, Mail, Phone, MapPin } from "lucide-react";

const IntellectualPropertyPolicy = () => {
  return (
    <>
      <SEOHead
        title="Intellectual Property Policy | IP Rights & Protection - ritzyard"
        description="ritzyard Intellectual Property Policy. Learn about our IP rights, trademark protection, copyright ownership, and content usage guidelines. Protecting innovation in construction procurement."
        keywords="ritzyard intellectual property, IP policy construction, trademark protection, copyright policy India, content usage guidelines, patent protection, trade secrets policy"
        canonicalUrl="https://ritzyard.com/intellectual-property"
      />
    <div className="min-h-screen bg-[#f4f0ec]">
      <Navbar />

      <div className="container mt-10 mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-12 sm:pb-16">
        <Card className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 rounded-2xl border border-primary/10 shadow-lg">
          <div className="text-center mb-6 sm:mb-8">
            <Badge className="mb-4 bg-primary/10 text-primary border-0 text-xs sm:text-sm">
              Legal
            </Badge>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Intellectual Property Policy
            </h1>
          
          </div>

          {/* Quick Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-xl border border-primary/10">
              <Shield className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <p className="font-semibold text-sm">IP Protected</p>
                <p className="text-xs text-muted-foreground">All assets secured</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-xl border border-primary/10">
              <Scale className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <p className="font-semibold text-sm">Legally Enforced</p>
                <p className="text-xs text-muted-foreground">Indian & international law</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-xl border border-primary/10">
              <Globe className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <p className="font-semibold text-sm">Global Scope</p>
                <p className="text-xs text-muted-foreground">Worldwide protection</p>
              </div>
            </div>
          </div>

          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">

            <h2 className="text-xl sm:text-2xl font-bold mb-4">1. Introduction & Scope</h2>
            <p className="mb-4">
              This Intellectual Property Policy ("Policy") governs the ownership, use, protection, and enforcement of all intellectual property rights associated with <strong>RitzYard</strong> (operated by Yurekh Solutions), including but not limited to the website <strong>ritzyard.com</strong>, mobile applications, digital platforms, proprietary software, AI-driven procurement tools, and all associated content and services (collectively, the "Platform").
            </p>
            <p className="mb-6">
              By accessing or using the Platform, you acknowledge and agree to comply with this Policy. This Policy applies to all users, including buyers, suppliers, vendors, partners, employees, contractors, and any third party interacting with the Platform.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold mb-4">2. Ownership of Intellectual Property</h2>

            <h3 className="text-lg sm:text-xl font-semibold mb-3">2.1 RitzYard-Owned IP</h3>
            <p className="mb-4">
              All intellectual property rights in and to the Platform, including without limitation, are exclusively owned by <strong>Yurekh Solutions</strong> (parent company of RitzYard):
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Trademarks:</strong> The name "RitzYard", the RitzYard logo, taglines ("Where Value Meets Velocity"), brand colors, and all associated trade dress</li>
              <li><strong>Copyrights:</strong> All website content, UI/UX designs, page layouts, graphics, illustrations, photographs, icons, audio/video content, and written text</li>
              <li><strong>Software & Code:</strong> Source code, object code, algorithms, databases, APIs, AI models, machine learning systems, and all proprietary technology powering the Platform</li>
              <li><strong>Trade Secrets:</strong> Proprietary procurement algorithms, supplier matching logic, pricing intelligence models, and business processes</li>
              <li><strong>Patents (Pending/Filed):</strong> Any inventions, processes, or technological innovations developed by RitzYard, whether patent-pending or patented</li>
              <li><strong>Domain Names:</strong> ritzyard.com, ritzyardseller.com, and all related domain registrations</li>
            </ul>

            <h3 className="text-lg sm:text-xl font-semibold mb-3">2.2 Third-Party IP</h3>
            <p className="mb-6">
              The Platform may contain trademarks, logos, or content belonging to third parties (e.g., supplier brands, product manufacturer names). Such third-party intellectual property remains the exclusive property of its respective owners. RitzYard does not claim ownership of any third-party IP displayed on the Platform and uses such materials solely under license, fair use, or with appropriate authorization.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold mb-4">3. Trademark Policy</h2>

            <h3 className="text-lg sm:text-xl font-semibold mb-3">3.1 Protected Marks</h3>
            <p className="mb-4">
              The following are registered or common-law trademarks of Yurekh Solutions and are protected under the Trade Marks Act, 1999 (India) and applicable international trademark laws:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>"RitzYard" — word mark and stylized logo</li>
              <li>"Where Value Meets Velocity" — tagline</li>
              <li>"ritz yard" — alternative wordmark</li>
              <li>The RitzYard color scheme, logo, and visual identity system</li>
              <li>"Milo AI" — AI assistant brand</li>
            </ul>

            <h3 className="text-lg sm:text-xl font-semibold mb-3">3.2 Prohibited Uses</h3>
            <p className="mb-4">
              Without prior written consent from RitzYard, you may NOT:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Use RitzYard's trademarks, logos, or trade dress in any commercial or non-commercial context</li>
              <li>Register domain names, social media handles, or business names that are confusingly similar to RitzYard's marks</li>
              <li>Modify, alter, or create derivative versions of RitzYard's logos or branding elements</li>
              <li>Use RitzYard's marks in meta tags, keywords, hidden text, or any SEO manipulation</li>
              <li>Imply sponsorship, endorsement, or affiliation with RitzYard without authorization</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-bold mb-4">4. Copyright Policy</h2>

            <h3 className="text-lg sm:text-xl font-semibold mb-3">4.1 Copyright Ownership</h3>
            <p className="mb-4">
              All original content published on the Platform is protected under the Copyright Act, 1957 (India) and the Berne Convention for the Protection of Literary and Artistic Works. This includes:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Product descriptions, blog posts, guides, and articles</li>
              <li>UI/UX designs, wireframes, and visual interface elements</li>
              <li>Photographs, images, and multimedia content</li>
              <li>Software documentation and technical specifications</li>
              <li>Marketing materials, advertisements, and promotional content</li>
              <li>Database compilations and data arrangements</li>
            </ul>

            <h3 className="text-lg sm:text-xl font-semibold mb-3">4.2 Permitted Uses</h3>
            <p className="mb-4">
              You may access and view the Platform content for personal, non-commercial purposes only. Limited use is permitted under the following conditions:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Personal Use:</strong> You may print or download content for personal reference only</li>
              <li><strong>Attribution:</strong> Any permitted use must include proper attribution to RitzYard with a link to ritzyard.com</li>
              <li><strong>No Modification:</strong> Content must not be altered, edited, or repurposed without written permission</li>
              <li><strong>No Redistribution:</strong> Content must not be republished, sold, licensed, or distributed to third parties</li>
            </ul>

            <h3 className="text-lg sm:text-xl font-semibold mb-3">4.3 DMCA / Copyright Infringement Reporting</h3>
            <p className="mb-4">
              If you believe that content on our Platform infringes your copyright, please submit a written notice to our designated agent containing:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Identification of the copyrighted work you claim has been infringed</li>
              <li>Identification of the material on the Platform that is allegedly infringing, with sufficient detail to locate it</li>
              <li>Your full legal name, address, telephone number, and email address</li>
              <li>A statement that you have a good-faith belief the use is not authorized by the copyright owner</li>
              <li>A statement under penalty of perjury that the information provided is accurate and that you are the copyright owner or authorized to act on behalf of the owner</li>
              <li>Your physical or electronic signature</li>
            </ul>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 sm:p-6 mb-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-800 mb-1">Important Notice</p>
                  <p className="text-sm text-amber-700">
                    Filing a false or misleading copyright infringement claim may result in legal liability. Please ensure all claims are made in good faith and with accurate information.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold mb-4">5. Software & Technology IP</h2>

            <h3 className="text-lg sm:text-xl font-semibold mb-3">5.1 Proprietary Technology</h3>
            <p className="mb-4">
              RitzYard's Platform is powered by proprietary technology, including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>AI-powered supplier matching and recommendation algorithms</li>
              <li>Real-time market pricing intelligence and analytics engines</li>
              <li>Automated procurement workflow and order management systems</li>
              <li>Quality assurance verification and supplier vetting processes</li>
              <li>Milo AI — conversational commerce and voice-based AI assistant</li>
            </ul>

            <h3 className="text-lg sm:text-xl font-semibold mb-3">5.2 Restrictions</h3>
            <p className="mb-4">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Reverse engineer, decompile, disassemble, or attempt to derive the source code of any part of the Platform</li>
              <li>Copy, reproduce, modify, or create derivative works based on the Platform's technology</li>
              <li>Use automated tools, bots, scrapers, or crawlers to extract data or content from the Platform</li>
              <li>Circumvent, disable, or interfere with any security features, DRM, or access controls</li>
              <li>Attempt to access restricted areas, servers, or systems without authorization</li>
              <li>Use the Platform's technology to build a competing product or service</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-bold mb-4">6. User-Generated Content</h2>

            <h3 className="text-lg sm:text-xl font-semibold mb-3">6.1 Content You Submit</h3>
            <p className="mb-4">
              When you submit content to the Platform (including product listings, reviews, feedback, images, or communications), you:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Retain ownership of your original content</li>
              <li>Grant RitzYard a worldwide, non-exclusive, royalty-free, perpetual, irrevocable license to use, reproduce, modify, adapt, publish, translate, distribute, and display such content in connection with the Platform and its services</li>
              <li>Warrant that you own or have the necessary rights to submit such content and that it does not infringe any third-party rights</li>
              <li>Agree that RitzYard may remove or modify user-generated content at its sole discretion</li>
            </ul>

            <h3 className="text-lg sm:text-xl font-semibold mb-3">6.2 Supplier Content</h3>
            <p className="mb-6">
              Suppliers who upload product images, descriptions, certifications, and other materials represent and warrant that they own or have the proper licenses for such content. Suppliers shall indemnify RitzYard against any claims arising from unauthorized use of third-party intellectual property in their submissions.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold mb-4">7. Linking & Framing Policy</h2>
            <p className="mb-4">
              You may link to the publicly accessible pages of ritzyard.com, provided that:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>The link does not portray RitzYard in a false, misleading, defamatory, or otherwise objectionable manner</li>
              <li>The link does not imply sponsorship, endorsement, or affiliation unless expressly authorized</li>
              <li>You do not frame, embed, or mirror any part of the Platform without prior written consent</li>
              <li>Deep linking to specific content pages is permitted for informational purposes with proper attribution</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-bold mb-4">8. Enforcement & Remedies</h2>

            <h3 className="text-lg sm:text-xl font-semibold mb-3">8.1 Monitoring</h3>
            <p className="mb-4">
              RitzYard actively monitors for unauthorized use of its intellectual property and employs industry-standard tools and legal resources to detect and address infringement.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold mb-3">8.2 Consequences of Infringement</h3>
            <p className="mb-4">
              Unauthorized use of RitzYard's intellectual property may result in:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Immediate termination of your account and access to the Platform</li>
              <li>Civil action seeking injunctive relief, damages, and attorney's fees</li>
              <li>Criminal prosecution under applicable intellectual property laws (IT Act, 2000; Copyright Act, 1957; Trade Marks Act, 1999)</li>
              <li>Reporting to relevant authorities and industry organizations</li>
              <li>Blacklisting from all RitzYard services and affiliated platforms</li>
            </ul>

            <h3 className="text-lg sm:text-xl font-semibold mb-3">8.3 Indemnification</h3>
            <p className="mb-6">
              You agree to indemnify, defend, and hold harmless RitzYard, its officers, directors, employees, agents, and affiliates from and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable attorney's fees) arising out of or related to your violation of this Intellectual Property Policy.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold mb-4">9. Governing Law & Jurisdiction</h2>
            <p className="mb-6">
              This Policy shall be governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with this Policy shall be subject to the exclusive jurisdiction of the courts located in <strong>Mumbai, Maharashtra, India</strong>. For international IP disputes, parties may agree to arbitration under the rules of the Indian Arbitration and Conciliation Act, 1996.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold mb-4">10. Amendments</h2>
            <p className="mb-6">
              RitzYard reserves the right to modify, update, or amend this Intellectual Property Policy at any time without prior notice. Changes become effective immediately upon posting on the Platform. Your continued use of the Platform after any modifications constitutes your acceptance of the revised Policy. We recommend reviewing this Policy periodically.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold mb-4">11. Contact Information</h2>
            <p className="mb-4">
              For intellectual property inquiries, infringement reports, licensing requests, or any questions regarding this Policy, please contact us:
            </p>
            <div className="bg-muted p-4 sm:p-6 rounded-lg space-y-3">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary flex-shrink-0" />
                <p><strong>Legal Department:</strong> Yurekh Solutions — RitzYard IP Division</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <p><strong>Email:</strong> legal@ritzyard.ai</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <p><strong>Phone:</strong> +91 9559262525</p>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <p><strong>Address:</strong> 01 RR DM Road Vakola Bridge, Santacruz Mumbai 400055, India</p>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary flex-shrink-0" />
                <p><strong>IP & Copyright Agent:</strong> ip@ritzyard.ai</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <Footer />
    </div>
    </>
  );
};

export default IntellectualPropertyPolicy;
