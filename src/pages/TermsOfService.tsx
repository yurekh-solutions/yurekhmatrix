import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const TermsOfService = () => {
  return (
    <>
      <SEOHead
        title="Terms of Service | User Agreement - ritzyard"
        description="ritzyard terms of service and user agreement. Read our terms and conditions for using ritzyard construction material procurement platform."
        keywords="ritzyard terms of service, user agreement, terms and conditions, platform usage rules, construction procurement terms, legal agreement India"
        canonicalUrl="https://ritzyard.com/terms"
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
              Terms of Service
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              Last updated: January 15, 2025
            </p>
          </div>

          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="mb-6">
              By accessing and using RitzYard ("the Platform"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold mb-4">2. Description of Service</h2>
            <p className="mb-4">
              RitzYard is a digital platform that connects construction companies with material suppliers, providing:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>AI-powered material procurement solutions</li>
              <li>Supplier network management</li>
              <li>Price optimization and market intelligence</li>
              <li>Quality control and compliance tracking</li>
              <li>Automated procurement workflows</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-bold mb-4">3. User Accounts</h2>
            <p className="mb-4">
              To access certain features of the Platform, you must register for an account. You agree to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and update your account information</li>
              <li>Keep your password secure and confidential</li>
              <li>Accept responsibility for all activities under your account</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-bold mb-4">4. Acceptable Use</h2>
            <p className="mb-4">
              You agree not to use the Platform to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Transmit harmful or malicious code</li>
              <li>Engage in fraudulent or deceptive practices</li>
              <li>Interfere with the Platform's operation</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-bold mb-4">5. Supplier and Buyer Responsibilities</h2>
            
            <h3 className="text-lg sm:text-xl font-semibold mb-3">Suppliers</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Provide accurate product information and pricing</li>
              <li>Maintain valid certifications and licenses</li>
              <li>Fulfill orders according to agreed terms</li>
              <li>Comply with quality standards and specifications</li>
            </ul>

            <h3 className="text-lg sm:text-xl font-semibold mb-3">Buyers</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Provide clear and accurate requirements</li>
              <li>Make payments according to agreed terms</li>
              <li>Accept deliveries in good faith</li>
              <li>Provide feedback and ratings honestly</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-bold mb-4">6. Payment Terms</h2>
            <p className="mb-4">
              Payment processing is handled through secure third-party providers. By using our payment services, you agree to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Pay all applicable fees and charges</li>
              <li>Provide accurate payment information</li>
              <li>Comply with payment provider terms</li>
              <li>Accept responsibility for payment disputes</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-bold mb-4">7. Intellectual Property</h2>
            <p className="mb-6">
              The Platform and its original content, features, and functionality are owned by RitzYard and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold mb-4">8. Privacy Policy</h2>
            <p className="mb-6">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Platform, to understand our practices.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold mb-4">9. Disclaimers</h2>
            <p className="mb-6">
              The Platform is provided "as is" without warranties of any kind. We do not guarantee the accuracy, completeness, or reliability of any content or information on the Platform.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold mb-4">10. Limitation of Liability</h2>
            <p className="mb-6">
              RitzYard shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the Platform.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold mb-4">11. Termination</h2>
            <p className="mb-6">
              We may terminate or suspend your account and access to the Platform immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold mb-4">12. Changes to Terms</h2>
            <p className="mb-6">
              We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through the Platform.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold mb-4">13. Governing Law</h2>
            <p className="mb-6">
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold mb-4">14. Contact Information</h2>
            <p className="mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-muted p-4 sm:p-6 rounded-lg">
              <p className="mb-2"><strong>Email:</strong> support@ritzyard.ai</p>
              <p className="mb-2"><strong>Phone:</strong> +91 9559262525</p>
              <p><strong>Address:</strong> 01 RR DM Road Vakola Bridge, Santacurz Mumbai 400055, INDIA</p>
            </div>
          </div>
        </Card>
      </div>

      <Footer />
    </div>
    </>
  );
};

export default TermsOfService;