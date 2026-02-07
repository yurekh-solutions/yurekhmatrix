import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Package,
  Phone,
  Mail,
  MapPin,
  User,
  Send,
  CheckCircle2,
  Loader2,
  Shield,
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { toast } from "sonner";

// Dynamic API URL based on environment
const getApiUrl = () => {
  // Check if we're on Vercel (production)
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    console.log('🌐 Current hostname:', hostname);
    
    // Check if running on localhost (development)
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      console.log('💻 Running locally - using localhost backend');
      return 'http://localhost:5000/api';
    }
    
    // Vercel production domains
    if (hostname.includes('vercel.app') || hostname.includes('ritzyard.com')) {
      console.log('✅ Running on Vercel - using production backend');
      return 'https://backendmatrix.onrender.com/api';
    }
  }
  
  // Check if VITE_API_URL is set
  if (import.meta.env.VITE_API_URL) {
    console.log('⚙️ Using VITE_API_URL:', import.meta.env.VITE_API_URL);
    return import.meta.env.VITE_API_URL;
  }
  
  // Default to localhost for development
  console.log('💻 Defaulting to localhost backend');
  return 'http://localhost:5000/api';
};

const API_BASE_URL = getApiUrl();
console.log('📡 API Base URL:', API_BASE_URL);

const MATERIAL_OPTIONS = [
  { value: "tmt-bars", label: "TMT Bars", icon: "🏗️" },
  { value: "ms-hollow", label: "MS Hollow Sections", icon: "⚙️" },
  { value: "plywood", label: "Plywood", icon: "🪵" },
  { value: "tiles", label: "Tiles", icon: "🔲" },
  { value: "sand", label: "Sand", icon: "🏖️" },
  { value: "grit", label: "Grit", icon: "⚫" },
  { value: "brick", label: "Brick", icon: "🧱" },
];

const MaterialInquiry = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [inquiryNumber, setInquiryNumber] = useState('');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    location: "",
    material: "",
    customMaterial: "",
    quantity: "",
    specifications: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Get material name
      const materialName = formData.material === "other" 
        ? formData.customMaterial 
        : MATERIAL_OPTIONS.find((m) => m.value === formData.material)?.label || formData.material;

      // Prepare data for backend API
      const submissionData = {
        customerName: formData.name,
        companyName: formData.company || '',
        email: formData.email,
        phone: formData.phone,
        materials: [{
          materialName: materialName,
          category: 'Construction',
          grade: '',
          specification: formData.specifications || '',
          quantity: parseFloat(formData.quantity.replace(/[^0-9.]/g, '')) || 0,
          unit: 'units',
          targetPrice: undefined,
        }],
        deliveryLocation: formData.location,
        deliveryAddress: '',
        totalEstimatedValue: undefined,
        paymentTerms: '',
        additionalRequirements: formData.specifications || '',
      };

      console.log('📤 Submitting to:', `${API_BASE_URL}/material-inquiries`);
      console.log('📦 Data:', submissionData);

      // Submit to backend with timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

      try {
        const response = await fetch(`${API_BASE_URL}/material-inquiries`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(submissionData),
          signal: controller.signal,
          mode: 'cors',
          credentials: 'omit',
        });
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        console.log('📥 Response:', data);

        if (data.success) {
        setInquiryNumber(data.data.inquiryNumber);
        toast.success('Material inquiry submitted successfully!');
        console.log('✅ SUCCESS! Inquiry Number:', data.data.inquiryNumber);
        console.log('🆔 Database ID:', data.data._id);

        // Format WhatsApp message
        const message = `*MATERIAL INQUIRY REQUEST*
*Inquiry Number:* ${data.data.inquiryNumber}

*Customer Details:*
 Name: ${formData.name}
 Company: ${formData.company || "Not specified"}
 Email: ${formData.email}
 Phone: ${formData.phone}
 Location: ${formData.location}

*Material Requirements:*
 Material: ${materialName}
 Quantity: ${formData.quantity}

*Detailed Specifications:*
${formData.specifications || "No additional specifications"}

_Please provide quotation at your earliest convenience._`;

        const whatsappNumber = "919559434242";
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        // Show success animation
        setShowSuccess(true);

        // Wait for animation and redirect to WhatsApp
        setTimeout(() => {
          window.open(whatsappUrl, "_blank");
          setShowSuccess(false);
          setIsSubmitting(false);

          // Reset form
          setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            location: "",
            material: "",
            customMaterial: "",
            quantity: "",
            specifications: "",
          });
        }, 2500);
        } else {
          throw new Error(data.message || 'Submission failed');
        }
      } catch (fetchError) {
        clearTimeout(timeoutId);
        throw fetchError;
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      console.error('❌ Submission error:', error);
      
      // Specific error messages
      if (errorMessage.includes('aborted')) {
        toast.error('Request timed out. Backend server may be sleeping. Please try again.');
        console.error('⏱️ Request timeout - Backend not responding');
      } else if (errorMessage.includes('fetch') || errorMessage.includes('Failed to fetch')) {
        toast.error('Cannot connect to backend. The server may be waking up. Please wait 30 seconds and try again.');
        console.error('🔌 Network error - Backend unreachable at:', API_BASE_URL);
        console.error('💡 Tip: Render free tier sleeps after inactivity. First request may take 30-60 seconds.');
      } else {
        toast.error('Failed to submit inquiry: ' + errorMessage);
      }
      
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEOHead
        title="Get Instant Quotes for Construction Materials | Material Inquiry - ritzyard"
        description="Submit your construction material inquiry and get instant quotes from verified suppliers. Request quotes for TMT steel, cement, bricks, sand, tiles, plywood, pipes & more. Free quotation within 24 hours."
        keywords="construction material inquiry, get material quotes online, TMT steel quotation, cement price quote, bulk material order India, construction supplier quotes, building material RFQ, request for quotation construction, instant material pricing, wholesale construction quotes, project material estimation, construction cost calculator, bulk order inquiry, material procurement request, free construction quotes India"
        canonicalUrl="https://ritzyard.com/inquiry"
      />

      <div className="min-h-screen bg-[#f4f0ec]">
        <Navbar />
        <ScrollToTop />

        {/* Success Animation Overlay */}
        {showSuccess && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in">
            <Card className="p-8 max-w-md mx-4 text-center bg-white/95 backdrop-blur-md border-0 shadow-2xl animate-scale-in">
              <div className="relative mb-6">
                {/* Confetti particles */}
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 rounded-full animate-confetti"
                    style={{
                      left: "50%",
                      top: "50%",
                      background: `hsl(${i * 30}, 70%, 60%)`,
                      animationDelay: `${i * 0.1}s`,
                      transform: `rotate(${i * 30}deg) translateY(-100px)`,
                    }}
                  />
                ))}

                {/* Success icon */}
                <div className="relative z-10 w-24 h-24 mx-auto bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/50 animate-bounce-in">
                  <CheckCircle2 className="w-14 h-14 text-white" />
                </div>
              </div>

              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Inquiry Submitted!
              </h3>
              {inquiryNumber && (
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-4 mb-4">
                  <p className="text-xs text-gray-600 mb-1 font-medium">Inquiry Number:</p>
                  <p className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">{inquiryNumber}</p>
                </div>
              )}
              <p className="text-lg text-muted-foreground mb-2">
                Thank you, <span className="font-semibold text-primary">{formData.name}</span>!
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Our team will connect with you shortly within an hour.
              </p>

              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Redirecting to WhatsApp...</span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden mt-6">
                <div
                  className="h-full bg-gradient-to-r from-green-500 to-emerald-600 animate-progress"
                  style={{ animationDuration: "2500ms" }}
                />
              </div>
            </Card>

            <style>{`
              @keyframes confetti {
                0% {
                  transform: translate(-50%, -50%) translateY(0) rotate(0deg);
                  opacity: 1;
                }
                100% {
                  transform: translate(-50%, -50%) translateY(-250px) rotate(720deg);
                  opacity: 0;
                }
              }

              @keyframes bounce-in {
                0% {
                  transform: scale(0);
                  opacity: 0;
                }
                50% {
                  transform: scale(1.2);
                }
                100% {
                  transform: scale(1);
                  opacity: 1;
                }
              }

              @keyframes progress {
                from { width: 100%; }
                to { width: 0%; }
              }

              @keyframes fade-in {
                from { opacity: 0; }
                to { opacity: 1; }
              }

              @keyframes scale-in {
                from {
                  transform: scale(0.8);
                  opacity: 0;
                }
                to {
                  transform: scale(1);
                  opacity: 1;
                }
              }

              .animate-confetti {
                animation: confetti 1.8s ease-out forwards;
              }

              .animate-bounce-in {
                animation: bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
              }

              .animate-progress {
                animation: progress linear forwards;
              }

              .animate-fade-in {
                animation: fade-in 0.3s ease-out;
              }

              .animate-scale-in {
                animation: scale-in 0.4s ease-out;
              }
            `}</style>
          </div>
        )}

        {/* Hero Section */}
        <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 overflow-hidden bg-gradient-to-br from-primary/5 via-white to-secondary/5">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 sm:w-48 sm:h-48 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-40 h-40 sm:w-56 sm:h-56 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-10 sm:mb-12 animate-slide-up">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/30 px-6 py-2">
                <Package className="h-4 w-4 mr-2" />
                Material Inquiry
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                Get Instant{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Quotations
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
                Submit your material requirements and our team will connect with you within an hour
                with competitive quotes from verified suppliers.
              </p>
            </div>

            {/* Material Icons Grid */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
              {MATERIAL_OPTIONS.map((material, index) => (
                <div
                  key={material.value}
                  className="group animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-primary/10 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/30 hover:-translate-y-1">
                    <span className="text-2xl group-hover:scale-110 transition-transform">
                      {material.icon}
                    </span>
                    <span className="text-sm font-medium text-foreground/80 group-hover:text-primary transition-colors">
                      {material.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Inquiry Form Section */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="p-6 sm:p-8 md:p-10 lg:p-12 border-0 shadow-2xl bg-white/80 backdrop-blur-md">
                <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
                      <User className="h-6 w-6 text-primary" />
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <div className="space-y-2 group">
                        <Label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                          <User className="h-4 w-4 text-primary" />
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          required
                          className="h-11 sm:h-12 border-primary/20 focus:border-primary"
                        />
                      </div>

                      <div className="space-y-2 group">
                        <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                          <Mail className="h-4 w-4 text-primary" />
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                          className="h-11 sm:h-12 border-primary/20 focus:border-primary"
                        />
                      </div>

                      <div className="space-y-2 group">
                        <Label htmlFor="phone" className="text-sm font-medium flex items-center gap-2">
                          <Phone className="h-4 w-4 text-primary" />
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 98765 43210"
                          required
                          className="h-11 sm:h-12 border-primary/20 focus:border-primary"
                        />
                      </div>

                      <div className="space-y-2 group">
                        <Label htmlFor="company" className="text-sm font-medium flex items-center gap-2">
                          <Building2 className="h-4 w-4 text-primary" />
                          Company Name
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your company name (optional)"
                          className="h-11 sm:h-12 border-primary/20 focus:border-primary"
                        />
                      </div>

                      <div className="space-y-2 md:col-span-2 group">
                        <Label htmlFor="location" className="text-sm font-medium flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          Delivery Location *
                        </Label>
                        <Input
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          placeholder="City, State"
                          required
                          className="h-11 sm:h-12 border-primary/20 focus:border-primary"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Material Requirements */}
                  <div className="border-t border-border pt-6 sm:pt-8">
                    <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
                      <Package className="h-6 w-6 text-primary" />
                      Material Requirements
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="material" className="text-sm font-medium">
                          Select Material Type *
                        </Label>
                        <Select
                          value={formData.material}
                          onValueChange={(value) =>
                            setFormData((prev) => ({ ...prev, material: value, customMaterial: "" }))
                          }
                          required
                        >
                          <SelectTrigger className="h-11 sm:h-12 border-primary/20 focus:border-primary">
                            <SelectValue placeholder="Choose material type" />
                          </SelectTrigger>
                          <SelectContent>
                            {MATERIAL_OPTIONS.map((material) => (
                              <SelectItem key={material.value} value={material.value}>
                                <div className="flex items-center gap-2">
                                  <span>{material.icon}</span>
                                  <span>{material.label}</span>
                                </div>
                              </SelectItem>
                            ))}
                            <div className="border-t border-border my-2" />
                            <SelectItem value="other">
                              <div className="flex items-center gap-2">
                                <span>✨</span>
                                <span>Other (Specify below)</span>
                              </div>
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {formData.material === "other" && (
                        <div className="space-y-2 md:col-span-2 animate-in fade-in">
                          <Label htmlFor="customMaterial" className="text-sm font-medium flex items-center gap-2">
                            <Package className="h-4 w-4 text-primary" />
                            Specify Your Material Type *
                          </Label>
                          <Input
                            id="customMaterial"
                            name="customMaterial"
                            value={formData.customMaterial}
                            onChange={(e) =>
                              setFormData((prev) => ({ ...prev, customMaterial: e.target.value }))
                            }
                            placeholder="Enter the material type you need (e.g., Concrete, Pipes, Hinges, etc.)"
                            required={formData.material === "other"}
                            className="h-11 sm:h-12 border-primary/20 focus:border-primary bg-blue-50/50"
                          />
                          <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                            <span>💡</span> We'll help you source this material from our network
                          </p>
                        </div>
                      )}

                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="quantity" className="text-sm font-medium">
                          Quantity Required *
                        </Label>
                        <Input
                          id="quantity"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleInputChange}
                          placeholder="e.g., 100 MT, 500 sq ft, 10,000 pieces"
                          required
                          className="h-11 sm:h-12 border-primary/20 focus:border-primary"
                        />
                      </div>

                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="specifications" className="text-sm font-medium">
                          Detailed Specifications
                        </Label>
                        <Textarea
                          id="specifications"
                          name="specifications"
                          value={formData.specifications}
                          onChange={handleInputChange}
                          placeholder="Enter any specific requirements, grades, dimensions, or other details..."
                          rows={5}
                          className="resize-none border-primary/20 focus:border-primary"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center pt-6 sm:pt-8">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg transition-all duration-300 px-8 sm:px-12 py-5 sm:py-6 text-base sm:text-lg rounded-xl group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                          Submit Inquiry
                        </>
                      )}
                    </Button>
                  </div>

                  {/* Contact Info */}
                  <div className="text-center pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-3">
                      Need immediate assistance? Contact us directly:
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                      <a
                        href="tel:+919559262525"
                        className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                      >
                        <Phone className="h-4 w-4" />
                        <span className="font-medium">+91 9559262525</span>
                      </a>
                      <a
                        href="https://wa.me/919559262525"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
                      >
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        <span className="font-medium">WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </form>
              </Card>

              {/* Trust Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
                {[
                  { icon: CheckCircle2, title: "Quick Response", desc: "Within 1 hour" },
                  { icon: Shield, title: "Verified Suppliers", desc: "500+ trusted partners" },
                  { icon: Package, title: "Best Prices", desc: "Competitive quotes" },
                ].map((item, index) => (
                  <Card
                    key={index}
                    className="p-6 text-center border-0 shadow-lg bg-white/60 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-14 h-14 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center mb-4 mx-auto">
                      <item.icon className="h-7 w-7 text-white" />
                    </div>
                    <h4 className="font-bold text-lg mb-1 text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default MaterialInquiry;
