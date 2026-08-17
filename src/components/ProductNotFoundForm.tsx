import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { MessageSquare, User, Phone, Mail, Package, FileText, MapPin } from "lucide-react";
import SuccessAnimation from "./SuccessAnimation";
import { toast } from "sonner";
import { API_BASE_URL } from "@/lib/api";

interface ProductNotFoundFormProps {
  searchQuery: string;
}

const ProductNotFoundForm = ({ searchQuery }: ProductNotFoundFormProps) => {
  const [formData, setFormData] = useState({
    productName: searchQuery,
    customerName: "",
    phone: "",
    email: "",
    quantity: "",
    location: "",
    specifications: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [inquiryNumber, setInquiryNumber] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.productName.trim()) {
      newErrors.productName = "Product name is required";
    }
    if (!formData.customerName.trim()) {
      newErrors.customerName = "Your name is required";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = "Please enter a valid 10-digit Indian phone number";
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit to backend Material Inquiry endpoint — the backend handles
      // admin notification, supplier routing, and the buyer confirmation
      // email. No client-side WhatsApp popup needed.
      const qty = Number(formData.quantity) || 1;
      const payload = {
        customerName: formData.customerName,
        email: formData.email || `${formData.phone}@ritzyard.placeholder`,
        phone: formData.phone,
        deliveryLocation: formData.location || 'Not specified',
        materials: [
          {
            materialName: formData.productName,
            category: 'Custom Request',
            specification: formData.specifications || undefined,
            quantity: qty,
            unit: 'piece',
          },
        ],
        additionalRequirements: formData.specifications || undefined,
      };

      const response = await fetch(`${API_BASE_URL}/material-inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Failed to submit inquiry');
      }

      setInquiryNumber(data.data?.inquiryNumber || '');
      setShowSuccess(true);
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      toast.error('Failed to submit inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSuccessComplete = () => {
    setShowSuccess(false);
    setFormData({
      productName: "",
      customerName: "",
      phone: "",
      email: "",
      quantity: "",
      location: "",
      specifications: ""
    });
  };

  if (showSuccess) {
    return (
      <SuccessAnimation
        message={inquiryNumber
          ? `Your product request has been submitted! Inquiry ${inquiryNumber}. Our team will reach out with options shortly.`
          : 'Your product request has been submitted! Our team will reach out with options shortly.'}
        onComplete={handleSuccessComplete}
        duration={4000}
      />
    );
  }

  return (
    <div className="max-w-2xl mx-auto animate-slide-up">
      <Card className="glass-card p-6 sm:p-8 border-2 border-primary/20 shadow-2xl">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageSquare className="w-8 h-8 text-primary-foreground" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Product Not Found?</h3>
          <p className="text-muted-foreground">
            Don't worry! Tell us what you're looking for and we'll get back to you with the best options.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="productName" className="flex items-center gap-2">
              <Package className="w-4 h-4" />
              What product are you looking for? <span className="text-destructive">*</span>
            </Label>
            <Input
              id="productName"
              value={formData.productName}
              onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
              placeholder="e.g., TMT Bars, Cement, Steel Sheets"
              className={`border-primary/20 ${errors.productName ? 'border-destructive' : ''}`}
            />
            {errors.productName && (
              <p className="text-xs text-destructive">{errors.productName}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="customerName" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Your Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="customerName"
              value={formData.customerName}
              onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
              placeholder="Enter your full name"
              className={`border-primary/20 ${errors.customerName ? 'border-destructive' : ''}`}
            />
            {errors.customerName && (
              <p className="text-xs text-destructive">{errors.customerName}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Phone Number <span className="text-destructive">*</span>
            </Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+91 XXXXX XXXXX"
              className={`border-primary/20 ${errors.phone ? 'border-destructive' : ''}`}
            />
            {errors.phone && (
              <p className="text-xs text-destructive">{errors.phone}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your.email@example.com"
              className={`border-primary/20 ${errors.email ? 'border-destructive' : ''}`}
            />
            {errors.email && (
              <p className="text-xs text-destructive">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="quantity" className="flex items-center gap-2">
              <Package className="w-4 h-4" />
              Quantity Required
            </Label>
            <Input
              id="quantity"
              value={formData.quantity}
              onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
              placeholder="e.g., 10 tons, 500 pieces"
              className="border-primary/20"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="location" className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Delivery Location (optional)
            </Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              placeholder="City, state — helps us match the closest supplier"
              className="border-primary/20"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="specifications" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Additional Specifications
            </Label>
            <Textarea
              id="specifications"
              value={formData.specifications}
              onChange={(e) => setFormData({ ...formData, specifications: e.target.value })}
              placeholder="Describe size, grade, brand preference, or any other requirements..."
              className="border-primary/20 min-h-[100px]"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white shadow-lg"
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              "Submitting..."
            ) : (
              <>
                <MessageSquare className="w-5 h-5 mr-2" />
                Submit Product Request
              </>
            )}
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            Your request is queued for supplier matching. We'll notify you once options are available.
          </p>
        </form>
      </Card>
    </div>
  );
};

export default ProductNotFoundForm;
