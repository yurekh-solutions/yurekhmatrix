import { MapPin, Loader2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone, Mail, MessageSquare, Building, Users, TrendingUp, Clock, CheckCircle, Star, Send, Headphones } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/SEOHead";
import AnimatedCounter from "@/components/AnimatedCounter";
import SuccessDialog from "@/components/SucessDialog";
import { toast } from "sonner";
import { GlassCard } from "@/components/ui/glass-card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const contactFormSchema = z.object({
  firstName: z.string()
    .trim()
    .min(1, "First name is required")
    .max(50, "First name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "First name can only contain letters and spaces"),
  lastName: z.string()
    .trim()
    .min(1, "Last name is required")
    .max(50, "Last name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Last name can only contain letters and spaces"),
  email: z.string()
    .trim()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
  phone: z.string()
    .trim()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be less than 15 digits")
    .regex(/^[\+]?[0-9\s\-\(\)]+$/, "Please enter a valid phone number"),
  company: z.string()
    .trim()
    .min(1, "Company name is required")
    .max(100, "Company name must be less than 100 characters"),
  message: z.string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
  additionalInfo: z.string()
    .trim()
    .max(200, "Additional information must be less than 200 characters")
    .optional()
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    additionalInfo: ""
  });
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<Partial<ContactFormData>>({});
  const [showSuccess, setShowSuccess] = useState(false);
  const statsRef = useRef(null);
  const formRef = useRef(null);
    const contactInfoRef = useRef(null);

  const isFormInView = useInView(formRef, { once: true, margin: "-50px" });
  const isStatsInView = useInView(statsRef, { once: true, margin: "-50px" });
  const isContactInfoInView = useInView(contactInfoRef, { once: true, margin: "-50px" });

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (formErrors[field]) {
      setFormErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const responseStats = [
    { label: "Avg Response Time", value: 15, unit: "min", icon: Clock },
    { label: "Customer Satisfaction", value: 98, unit: "%", icon: Star },
    { label: "Issues Resolved", value: 99, unit: "%", icon: CheckCircle },
    { label: "Support Availability", value: 24, unit: "/7", icon: Headphones }
  ];
 const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      value: "+91 9559262525",
      description: "Direct line to our support team",
      available: "24/7 Available",
      action: "tel:+919559262525"
    },
    {
      icon: Mail,
      title: "Email Support", 
      value: "support@ritzyard.ai",
      description: "Detailed inquiries and documentation",
      available: "Response within 1 hour",
      action: "support@ritzyard.ai"
    },
    {
      icon: MapPin,
      title: "Office Location",
      value: "01 RR DM Road Vakola Bridge, Santacurz Mumbai 400055, INDIA",
      description: "Visit our headquarters",
      available: "Mon-Fri: 9AM-6PM",
      action: "https://maps.app.goo.gl/nBjFpHMPRA67dDgBA"
    }
  ];
  const validateForm = (type: string) => {
    try {
      let dataToValidate = { ...formData };
      
      if ((type === "Supplier" || type === "Partnership") && !formData.additionalInfo?.trim()) {
        const fieldName = type === "Supplier" ? "Product Categories" : "Partnership Type";
        toast.error(`${fieldName} is required.`);
        return false;
      }

      contactFormSchema.parse(dataToValidate);

      if (!agreedToPrivacy) {
        toast.error("Please accept the privacy policy to continue.");
        return false;
      }

      setFormErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors: Partial<ContactFormData> = {};
        error.issues.forEach((issue) => {
          const field = issue.path[0] as keyof ContactFormData;
          errors[field] = issue.message;
        });
        setFormErrors(errors);
        
        const firstError = error.issues[0];
        toast.error(firstError.message);
      }
      return false;
    }
  };

  const handleSubmit = async (type: string) => {
    if (!validateForm(type) || isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare WhatsApp message
      let whatsappMessage = `*${type} Enquiry - RitzYard*\n\n`;
      whatsappMessage += `*Contact Details:*\n`;
      whatsappMessage += `Name: ${formData.firstName} ${formData.lastName}\n`;
      whatsappMessage += `Email: ${formData.email}\n`;
      whatsappMessage += `Phone: ${formData.phone}\n`;
      whatsappMessage += `Company: ${formData.company}\n\n`;
      
      if (formData.additionalInfo) {
        const fieldName = type === "Supplier" ? "Product Categories" : 
                         type === "Partnership" ? "Partnership Type" : "Additional Info";
        whatsappMessage += `*${fieldName}:* ${formData.additionalInfo}\n\n`;
      }
      
      whatsappMessage += `*Message:*\n${formData.message}\n\n`;
      whatsappMessage += `_Enquiry Type: ${type}_\n`;
      whatsappMessage += `_Submitted: ${new Date().toLocaleString()}_`;
      
      const encodedWhatsAppMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://wa.me/919559262525?text=${encodedWhatsAppMessage}`;
      
      // Clear form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        additionalInfo: ""
      });
      setAgreedToPrivacy(false);
      setFormErrors({});
      setIsSubmitting(false);
      
      // Open WhatsApp directly
      window.open(whatsappUrl, '_blank');
      
      // Show toast notification
      toast.success("Opening WhatsApp...");
    } catch (error) {
      toast.error("There was an issue preparing your message. Please try again or contact us directly.");
      setIsSubmitting(false);
    }
  };

  const renderFormFields = (tabId: string, type: string) => (
    <div className="space-y-4 md:space-y-6">
      <motion.div 
        className="text-center lg:text-left mb-4 md:mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">{type}</h3>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
          {type === "General Enquiry" && "Have a question? We're here to help with any general inquiries about our platform and services."}
          {type === "Become a Supplier" && "Join our network of trusted suppliers and grow your business with RitzYard."}
          {type === "Partnership" && "Explore partnership opportunities and collaborate with us to revolutionize construction material procurement."}
          {type === "Investor Relations" && "Learn about investment opportunities and our company's growth trajectory."}
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="space-y-2">
          <Label htmlFor={`firstName-${tabId}`} className="text-foreground font-medium text-sm md:text-base">
            First name *
          </Label>
          <Input
            id={`firstName-${tabId}`}
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            className={`glass-morphism h-11 md:h-12 rounded-xl ${formErrors.firstName ? 'border-destructive' : ''}`}
            required
          />
          {formErrors.firstName && (
            <p className="text-destructive text-xs mt-1">{formErrors.firstName}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor={`lastName-${tabId}`} className="text-foreground font-medium text-sm md:text-base">
            Last name *
          </Label>
          <Input
            id={`lastName-${tabId}`}
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            className={`glass-morphism h-11 md:h-12 rounded-xl ${formErrors.lastName ? 'border-destructive' : ''}`}
            required
          />
          {formErrors.lastName && (
            <p className="text-destructive text-xs mt-1">{formErrors.lastName}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="space-y-2">
          <Label htmlFor={`email-${tabId}`} className="text-foreground font-medium text-sm md:text-base">
            Email *
          </Label>
          <Input
            id={`email-${tabId}`}
            type="email"
            placeholder="your.email@company.com"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className={`glass-morphism h-11 md:h-12 rounded-xl ${formErrors.email ? 'border-destructive' : ''}`}
            required
          />
          {formErrors.email && (
            <p className="text-destructive text-xs mt-1">{formErrors.email}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor={`phone-${tabId}`} className="text-foreground font-medium text-sm md:text-base">
            Phone number *
          </Label>
          <Input
            id={`phone-${tabId}`}
            placeholder="+91 12345 67890"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className={`glass-morphism h-11 md:h-12 rounded-xl ${formErrors.phone ? 'border-destructive' : ''}`}
            required
          />
          {formErrors.phone && (
            <p className="text-destructive text-xs mt-1">{formErrors.phone}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor={`company-${tabId}`} className="text-foreground font-medium text-sm md:text-base">
          Company name *
        </Label>
        <Input
          id={`company-${tabId}`}
          placeholder="Your company or organization name"
          value={formData.company}
          onChange={(e) => handleInputChange("company", e.target.value)}
          className={`glass-morphism h-11 md:h-12 rounded-xl ${formErrors.company ? 'border-destructive' : ''}`}
          required
        />
        {formErrors.company && (
          <p className="text-destructive text-xs mt-1">{formErrors.company}</p>
        )}
      </div>

      {(type === "Become a Supplier" || type === "Partnership") && (
        <div className="space-y-2">
          <Label htmlFor={`additionalInfo-${tabId}`} className="text-foreground font-medium text-sm md:text-base">
            {type === "Become a Supplier" ? "Product Categories *" : "Partnership Type *"}
          </Label>
          <Input
            id={`additionalInfo-${tabId}`}
            placeholder={
              type === "Become a Supplier" 
                ? "e.g., Steel, Cement, Construction Equipment" 
                : "e.g., Technology Partner, Distribution Partner"
            }
            value={formData.additionalInfo || ""}
            onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
            className="glass-morphism h-11 md:h-12 rounded-xl"
            required
          />
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor={`message-${tabId}`} className="text-foreground font-medium text-sm md:text-base">
          Message *
        </Label>
        <Textarea
          id={`message-${tabId}`}
          placeholder={`Please provide details about ${
            type === "Become a Supplier" ? "your products and services..." :
            type === "Partnership" ? "your partnership proposal..." :
            type === "Investor Relations" ? "your investment inquiry..." :
            "your inquiry..."
          }`}
          value={formData.message}
          onChange={(e) => handleInputChange("message", e.target.value)}
          className={`glass-morphism min-h-[120px] resize-none rounded-xl ${formErrors.message ? 'border-destructive' : ''}`}
          required
        />
        {formErrors.message && (
          <p className="text-destructive text-xs mt-1">{formErrors.message}</p>
        )}
      </div>

      <div className="space-y-3">
        <div className="flex items-start space-x-3">
          <input 
            type="checkbox" 
            id={`privacy-${tabId}`}
            checked={agreedToPrivacy}
            onChange={(e) => setAgreedToPrivacy(e.target.checked)}
            className="mt-1 rounded border-border accent-primary" 
            required
          />
          <label htmlFor={`privacy-${tabId}`} className="text-xs md:text-sm text-muted-foreground leading-relaxed">
            I confirm that I have read and accepted the privacy policy and agree to the processing of my personal data. *
          </label>
          
        </div>
          <p className="text-xs text-muted-foreground">
          By submitting this form, you agree to our Terms of Service and Privacy Policy. 
          We respect your privacy and will only use your information to respond to your inquiry.
        </p>
      </div>

      <Button 
        onClick={() => handleSubmit(type)}
        disabled={isSubmitting}
        className="w-full h-11 md:h-12 flex items-center justify-center bg-gradient-to-br from-primary to-secondary text-primary-foreground hover:shadow-xl transition-all duration-300 disabled:opacity-50 text-sm md:text-base font-medium rounded-xl"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 md:h-5 md:w-5 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4 md:h-5 md:w-5 mr-2" />
            Send Message
          </>
        )}
      </Button>
    </div>
  );

  return (
    <>
    <Navbar />
      <SEOHead
        title="Contact ritzyard | Construction Material Support & Inquiry India"
        description="Contact ritzyard for construction material procurement support. Get help with quotes, supplier inquiries, bulk orders & material sourcing. 24/7 customer support. WhatsApp & phone support available."
        keywords="contact ritzyard, construction material support India, procurement help, supplier inquiry contact, bulk order support, material sourcing assistance, customer support construction, WhatsApp support construction, construction helpline India, building material inquiry, quote assistance, order tracking support"
        canonicalUrl="https://ritzyard.com/contact"
      />
{/* bg-[#f3f0ec] */}
      <div className="min-h-screen bg-[#f3f0ec]">
        {/* Hero Section */}
        <section className="py-12 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary-glow/5 pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10 mt-16 md:mt-20">
            <motion.div
              className="text-center mb-10 md:mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 md:mb-6 bg-primary/10 text-primary border-primary/30 px-4 md:px-6 py-1.5 md:py-2 text-xs md:text-sm">
                Contact Us
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 px-4">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Get in Touch
                </span>
              </h1>
              <div className="w-20 md:w-32 h-1 bg-gradient-primary mx-auto rounded-full mb-4 md:mb-8" />
              <p className="text-sm md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
                We're here to help with any questions about our products, services, partnerships, 
                or investment opportunities. Our team responds within 15 minutes.
              </p>
            </motion.div>

            {/* Response Time Stats */}
            <div
              className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-10 md:mb-16 px-4"
              ref={statsRef}
            >
              {responseStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-stat-card group"
                >
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <stat.icon className="h-5 w-5 md:h-7 md:w-7 text-primary-foreground" />
                  </div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-1">
                    <AnimatedCounter 
                      end={stat.value} 
                      suffix={stat.unit}
                      duration={2}
                      trigger={isStatsInView}
                    />
                  </div>
                  <p className="text-xs md:text-sm font-medium text-foreground leading-tight">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form and Info Section */}
        <section className="container mx-auto px-4 pb-12 md:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2" ref={formRef}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6 }}
              >
                <Card className=" p-4 md:p-8 rounded-2xl">
                  <div className="mb-6 md:mb-8">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2 md:mb-3">
                      Contact Us 
                    </h2>
                    <p className="text-muted-foreground text-xs md:text-sm lg:text-base">
                      Choose the type of inquiry that best matches your needs for faster, more targeted assistance.
                    </p>
                  </div>
                  
                  <Tabs defaultValue="general" className="w-full">
                    <TabsList className="grid w-full grid-cols-4 mb-6 glass-morphism p-1 h-auto rounded-2xl">
                      <TabsTrigger 
                        value="general" 
                        className="flex flex-col md:flex-row items-center gap-1 md:gap-2 py-2 md:py-2.5 px-2 text-xs md:text-sm rounded-xl data-[state=active]:bg-gradient-to-br data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md"
                      >
                        <MessageSquare className="h-3 w-3 md:h-4 md:w-4" />
                        <span>General</span>
                      </TabsTrigger>
                      <TabsTrigger 
                        value="supplier"
                        className="flex flex-col md:flex-row items-center gap-1 md:gap-2 py-2 md:py-2.5 px-2 text-xs md:text-sm rounded-xl data-[state=active]:bg-gradient-to-br data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md"
                      >
                        <Building className="h-3 w-3 md:h-4 md:w-4" />
                        <span>Supplier</span>
                      </TabsTrigger>
                      <TabsTrigger 
                        value="partnership"
                        className="flex flex-col md:flex-row items-center gap-1 md:gap-2 py-2 md:py-2.5 px-2 text-xs md:text-sm rounded-xl data-[state=active]:bg-gradient-to-br data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md"
                      >
                        <Users className="h-3 w-3 md:h-4 md:w-4" />
                        <span>Partner</span>
                      </TabsTrigger>
                      <TabsTrigger 
                        value="investor"
                        className="flex flex-col md:flex-row items-center gap-1 md:gap-2 py-2 md:py-2.5 px-2 text-xs md:text-sm rounded-xl data-[state=active]:bg-gradient-to-br data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md"
                      >
                        <TrendingUp className="h-3 w-3 md:h-4 md:w-4" />
                        <span>Investor</span>
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="general">
                      {renderFormFields("general", "General Enquiry")}
                    </TabsContent>

                    <TabsContent value="supplier">
                      {renderFormFields("supplier", "Become a Supplier")}
                    </TabsContent>

                    <TabsContent value="partnership">
                      {renderFormFields("partnership", "Partnership")}
                    </TabsContent>

                    <TabsContent value="investor">
                      {renderFormFields("investor", "Investor Relations")}
                    </TabsContent>
                  </Tabs>
                </Card>
              </motion.div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-4 md:space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.6 }}
              >
                {/* <div className="glass-card p-4 md:p-6 rounded-2xl">
                  <h3 className="text-lg md:text-xl font-semibold text-primary mb-4 md:mb-6">Contact Information</h3>
                  
                  <div className="space-y-3 md:space-y-4">
                    <div
                      className="group cursor-pointer"
                      onClick={() => window.open('tel:+919559262525')}
                    >
                      <div className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 rounded-xl glass-morphism group-hover:bg-primary/5 transition-all duration-300">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0 shadow-md">
                          <Phone className="h-5 w-5 md:h-6 md:w-6 text-primary-foreground" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm md:text-base">
                            Phone Support
                          </p>
                          <p className="text-xs md:text-sm text-muted-foreground truncate">
                            +91 9559262525
                          </p>
                          <Badge variant="outline" className="mt-2 text-xs bg-primary/10 text-primary border-primary/30">
                            24/7 Available
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div
                      className="group cursor-pointer"
                      onClick={() => window.open('mailto:yurekhsolutions@gmail.com')}
                    >
                      <div className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 rounded-xl glass-morphism group-hover:bg-primary/5 transition-all duration-300">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0 shadow-md">
                          <Mail className="h-5 w-5 md:h-6 md:w-6 text-primary-foreground" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm md:text-base">
                            Email Support
                          </p>
                          <p className="text-xs md:text-sm text-muted-foreground break-words">
                            support@ritzyard.ai
                          </p>
                          <Badge variant="outline" className="mt-2 text-xs bg-primary/10 text-primary border-primary/30">
                            Response within 1 hour
                          </Badge>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div> */}
                  <div className="space-y-6" ref={contactInfoRef}>
              {/* Contact Methods */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isContactInfoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="p-4 md:p-6 ">
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent  mb-6">Contact Information</h3>
                  
                  <div className="space-y-4 ">
                    {contactMethods.map((method, index) => (
                      <div
                        key={index}
                        className="group cursor-pointer rounded-lg border border-primary/20"
                        onClick={() => method.action && window.open(method.action)}
                      >
                        <div className="flex items-start space-x-4 p-4 rounded-lg glass-morphism group-hover:bg-primary/5 transition-all duration-300">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary  rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                            <method.icon className="h-6 w-6 text-primary-foreground" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                              {method.title}
                            </p>
                            <p className="text-sm text-muted-foreground break-words">
                              {method.value}
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              {method.description}
                            </p>
                            <Badge variant="outline" className="mt-2 text-xs bg-primary/10 text-primary border-primary/30">
                              {method.available}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>

              {/* Business Hours */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isContactInfoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="p-4 md:p-6 rounded-lg border border-primary/20">
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent  mb-6">Business Hours</h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-glass-border">
                      <span className="text-muted-foreground text-sm">Monday - Friday</span>
                      <span className="text-foreground font-medium text-sm">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-glass-border">
                      <span className="text-muted-foreground text-sm">Saturday</span>
                      <span className="text-foreground font-medium text-sm">9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-muted-foreground text-sm">Sunday</span>
                      <span className="text-red-400 font-medium text-sm">Closed</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <p className="text-sm font-medium text-primary mb-2">24/7 Emergency Support</p>
                    <p className="text-xs text-muted-foreground">
                      For urgent platform needs, our AI-powered system and emergency team are available round the clock.
                    </p>
                  </div>
                </Card>
              </motion.div>

              {/* Google Maps */}
             
            </div>
              </motion.div>

             
            </div>
            
          </div>
           <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isContactInfoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card  className="p-4 md:p-6 mt-6">
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">Find Us</h3>
                  
                  <div className="rounded-lg overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.7828982152157!2d72.84476011541492!3d19.08017148708359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9fd9b6f9a07%3A0x65e3a56ebe533fc9!2sVakola%20Bridge!5e0!3m2!1sen!2sin!4v1730096471201!5m2!1sen!2sin"

                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                    />
                  </div>
                  
                  <div className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <p className="text-sm font-medium text-primary mb-2">Office Address</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      01 RR DM Road Vakola Bridge, Santacurz Mumbai 400055, INDIA
                    </p>
                  </div>
                </Card>
              </motion.div>
        </section>

        <SuccessDialog open={showSuccess} onClose={() => setShowSuccess(false)} />
      </div>
      <Footer />
    </>
  );
};

export default Contact;
