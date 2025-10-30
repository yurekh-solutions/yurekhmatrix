import { useState } from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { MessageSquare, PackageSearch } from "lucide-react";

interface CustomProductRequestProps {
  searchQuery: string;
}

const CustomProductRequest = ({ searchQuery }: CustomProductRequestProps) => {
  const [formData, setFormData] = useState({
    productName: searchQuery || "",
    customerName: "",
    email: "",
    phone: "",
    quantity: "",
    specifications: "",
  });
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.customerName || !formData.phone || !formData.productName) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill in your name, phone number, and product requirement.",
        variant: "destructive",
      });
      return;
    }

    // Create WhatsApp message
    const message = `*New Product Inquiry*

*Product Required:* ${formData.productName}
*Customer Name:* ${formData.customerName}
*Email:* ${formData.email || "Not provided"}
*Phone:* ${formData.phone}
*Quantity:* ${formData.quantity || "Not specified"}
*Specifications:* ${formData.specifications || "None"}

*Via:* Naaya Construction Website`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/917039047070?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Request Submitted",
      description: "Redirecting you to WhatsApp to complete your inquiry...",
    });

    // Reset form
    setFormData({
      productName: "",
      customerName: "",
      email: "",
      phone: "",
      quantity: "",
      specifications: "",
    });
  };

  return (
    <div className="min-h-[500px] flex items-center justify-center px-4 py-8 sm:py-12">
      <GlassCard variant="premium" className="w-full max-w-2xl p-6 sm:p-8 lg:p-10 animate-fade-in">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-3 sm:p-4 bg-gradient-primary rounded-full animate-pulse-glow">
              <PackageSearch className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-3">
            Product Not Found?
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-xl mx-auto">
            Don't worry! Tell us what you're looking for and we'll get back to you with the best options.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {/* Product Name */}
          <div className="animate-fade-in animation-delay-200">
            <Label htmlFor="productName" className="text-foreground font-medium mb-2 block text-sm sm:text-base">
              What product are you looking for? <span className="text-destructive">*</span>
            </Label>
            <Input
              id="productName"
              name="productName"
              type="text"
              value={formData.productName}
              onChange={handleInputChange}
              placeholder="e.g., TMT Bars, Steel Sheets, Cement"
              className="bg-transparent border-glass-border h-11 sm:h-12 text-sm sm:text-base hover:border-primary/50 transition-smooth"
              required
            />
          </div>

          {/* Customer Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Name */}
            <div className="animate-fade-in animation-delay-200">
              <Label htmlFor="customerName" className="text-foreground font-medium mb-2 block text-sm sm:text-base">
                Your Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="customerName"
                name="customerName"
                type="text"
                value={formData.customerName}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className="bg-transparent border-glass-border h-11 sm:h-12 text-sm sm:text-base hover:border-primary/50 transition-smooth"
                required
              />
            </div>

            {/* Phone */}
            <div className="animate-fade-in animation-delay-200">
              <Label htmlFor="phone" className="text-foreground font-medium mb-2 block text-sm sm:text-base">
                Phone Number <span className="text-destructive">*</span>
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+91 XXXXX XXXXX"
                className="bg-transparent border-glass-border h-11 sm:h-12 text-sm sm:text-base hover:border-primary/50 transition-smooth"
                required
              />
            </div>
          </div>

          {/* Email & Quantity Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Email */}
            <div className="animate-fade-in animation-delay-200">
              <Label htmlFor="email" className="text-foreground font-medium mb-2 block text-sm sm:text-base">
                Email Address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                className="bg-transparent border-glass-border h-11 sm:h-12 text-sm sm:text-base hover:border-primary/50 transition-smooth"
              />
            </div>

            {/* Quantity */}
            <div className="animate-fade-in animation-delay-200">
              <Label htmlFor="quantity" className="text-foreground font-medium mb-2 block text-sm sm:text-base">
                Quantity Required
              </Label>
              <Input
                id="quantity"
                name="quantity"
                type="text"
                value={formData.quantity}
                onChange={handleInputChange}
                placeholder="e.g., 10 tons, 500 pieces"
                className="bg-transparent border-glass-border h-11 sm:h-12 text-sm sm:text-base hover:border-primary/50 transition-smooth"
              />
            </div>
          </div>

          {/* Specifications */}
          <div className="animate-fade-in animation-delay-200">
            <Label htmlFor="specifications" className="text-foreground font-medium mb-2 block text-sm sm:text-base">
              Additional Specifications
            </Label>
            <Textarea
              id="specifications"
              name="specifications"
              value={formData.specifications}
              onChange={handleInputChange}
              placeholder="Describe size, grade, brand preference, or any other requirements..."
              className="bg-transparent border-glass-border min-h-[100px] sm:min-h-[120px] text-sm sm:text-base hover:border-primary/50 transition-smooth resize-none"
              rows={4}
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full  bg-gradient-to-r from-orange-500 to-red-500 hover:scale-105 transition-all duration-300 text-base sm:text-lg font-semibold h-12 sm:h-14 transition-all duration-300 animate-fade-in animation-delay-200"
          >
            <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
            Send Inquiry via WhatsApp
          </Button>

          <p className="text-xs sm:text-sm text-center text-muted-foreground animate-fade-in animation-delay-200">
            Your inquiry will be sent directly to our team via WhatsApp for immediate assistance.
          </p>
        </form>
      </GlassCard>
    </div>
  );
};

export default CustomProductRequest;
