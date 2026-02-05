import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy | Data Protection & Security - ritzyard"
        description="ritzyard privacy policy. Learn how we collect, use and protect your personal data. Your privacy is our priority. GDPR compliant."
        keywords="ritzyard privacy policy, data protection construction, user data security, privacy terms India, GDPR compliance, personal information protection"
        canonicalUrl="https://ritzyard.com/privacy"
      />
    <div className="min-h-screen bg-[#f4f0ec]">
      <Navbar />

      <div className="container mt-10 mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-12 sm:pb-16">
        <Card className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 rounded-2xl border border-primary/10 shadow-lg">
          <div className="text-center mb-6 sm:mb-8">
            <Badge className="mb-4 bg-primary/10 text-primary border-0 text-xs sm:text-sm">
              Privacy
            </Badge>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              Last updated: January 15, 2025
            </p>
          </div>

          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">1. Information We Collect</h2>

            <h3 className="text-lg sm:text-xl font-semibold mb-3">Personal Information</h3>
            <p className="mb-4">
              We collect information you provide directly to us, such as:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Name, email address, and phone number</li>
              <li>Company information and business details</li>
              <li>Payment and billing information</li>
              <li>Profile information and preferences</li>
              <li>Communications with our support team</li>
            </ul>

            <h3 className="text-lg sm:text-xl font-semibold mb-3">Usage Information</h3>
            <p className="mb-4">
              We automatically collect certain information about your use of our Platform:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Device information (IP address, browser type, operating system)</li>
              <li>Usage patterns and interaction data</li>
              <li>Log files and analytics data</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-bold mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Develop new products and services</li>
              <li>Analyze usage patterns and optimize user experience</li>
              <li>Detect, prevent, and address fraud and security issues</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-bold mb-4">3. Information Sharing</h2>
            <p className="mb-4">
              We may share your information in the following circumstances:
            </p>

            <h3 className="text-lg sm:text-xl font-semibold mb-3">With Your Consent</h3>
            <p className="mb-4">
              We share information when you give us explicit consent to do so.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold mb-3">Service Providers</h3>
            <p className="mb-4">
              We work with third-party service providers who perform services on our behalf, such as:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Payment processing</li>
              <li>Data analytics</li>
              <li>Customer support</li>
              <li>Marketing and advertising</li>
              <li>Cloud hosting and storage</li>
            </ul>

            <h3 className="text-lg sm:text-xl font-semibold mb-3">Legal Requirements</h3>
            <p className="mb-6">
              We may disclose information if required by law or in response to valid legal requests from public authorities.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold mb-4">4. Data Security</h2>
            <p className="mb-4">
              We implement appropriate technical and organizational measures to protect your personal information:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and audits</li>
              <li>Access controls and authentication measures</li>
              <li>Employee training on data protection</li>
              <li>Incident response and breach notification procedures</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-bold mb-4">5. Data Retention</h2>
            <p className="mb-6">
              We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy, unless a longer retention period is required by law.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold mb-4">6. Your Rights</h2>
            <p className="mb-4">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request transfer of your data to another service</li>
              <li><strong>Objection:</strong> Object to processing of your personal information</li>
              <li><strong>Restriction:</strong> Request restriction of processing</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-bold mb-4">7. Cookies and Tracking</h2>
            <p className="mb-4">
              We use cookies and similar technologies to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Remember your preferences and settings</li>
              <li>Analyze site traffic and usage patterns</li>
              <li>Provide personalized content and advertisements</li>
              <li>Improve our services and user experience</li>
            </ul>
            <p className="mb-6">
              You can control cookies through your browser settings, but disabling cookies may affect the functionality of our Platform.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold mb-4">8. International Data Transfers</h2>
            <p className="mb-6">
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information during such transfers.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold mb-4">9. Children's Privacy</h2>
            <p className="mb-6">
              Our Platform is not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold mb-4">10. Changes to This Policy</h2>
            <p className="mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold mb-4">11. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-muted p-4 sm:p-6 rounded-lg">
              <p className="mb-2"><strong>Email:</strong> privacy@ritzyard.ai</p>
              <p className="mb-2"><strong>Phone:</strong> +91 91362 42706</p>
              <p className="mb-2"><strong>Address:</strong> 01 RR DM Road Vakola Bridge, Santacurz Mumbai 400055, INDIA</p>
              <p><strong>Data Protection Officer:</strong> dpo@ritzyard.ai</p>
            </div>
          </div>
        </Card>
      </div>

      <Footer />
    </div>
    </>
  );
};

export default PrivacyPolicy;