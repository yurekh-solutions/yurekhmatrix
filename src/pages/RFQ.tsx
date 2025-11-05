import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Trash2, Package, ArrowRight, ArrowLeft } from "lucide-react";

import { toast } from "sonner";
import { sendToWhatsApp } from "@/lib/whatsappIntegration";
import { saveToLocalStorage } from "@/lib/sheetsIntegration";
import SuccessAnimation from "@/components/SuccessAnimation";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingActionButtons from "@/components/FloatingActionButtons";

interface RFQItem {
  productId: string;
  productName: string;
  category: string;
  brand: string;
  grade: string;
  quantity: number;
}

const RFQ = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [cartItems, setCartItems] = useState<RFQItem[]>([]);


  useEffect(() => {
    const savedCart = sessionStorage.getItem('rfq_cart');
    if (savedCart) {
      try {
        const cart = JSON.parse(savedCart);
        setCartItems(cart);
      } catch (error) {
        console.error('Failed to load cart:', error);
      }
    }
  }, []);

  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    company: "",
    location: "",
    email: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleRemoveItem = (index: number) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    sessionStorage.setItem('rfq_cart', JSON.stringify(updatedCart));
    toast.success("Item removed from cart");
  };

  const handleNext = () => {
    if (cartItems.length === 0) {
      toast.error("Please add at least one product to your RFQ");
      return;
    }
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerInfo.name || !customerInfo.email || !customerInfo.phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare complete RFQ data with cart items
      const rfqData = {
        type: 'rfq' as const,
        customerName: customerInfo.name,
        company: customerInfo.company,
        location: customerInfo.location,
        email: customerInfo.email,
        phone: customerInfo.phone,
        cartItems: cartItems,
        totalItems: cartItems.length
      };

      // Save EACH product to localStorage for Excel export
      cartItems.forEach(item => {
        saveToLocalStorage({
          source: 'RFQ Page - Complete Submission',
          productName: item.productName,
          productCategory: item.category,
          brand: item.brand,
          grade: item.grade,
          quantity: `${item.quantity} MT`,
          customerName: customerInfo.name,
          customerCompany: customerInfo.company,
          deliveryLocation: customerInfo.location,
          customerEmail: customerInfo.email,
          customerPhone: customerInfo.phone
        });
      });

      // Send to WhatsApp with ALL products + customer info
      sendToWhatsApp(rfqData);

      // Excel download removed - data saved to localStorage for admin access only

      // Clear cart from sessionStorage
      sessionStorage.removeItem('rfq_cart');

      // Show success animation AFTER all operations
      setTimeout(() => {
        setShowSuccess(true);
      }, 1500);

      // Navigate after animation
      setTimeout(() => {
        navigate("/");
      }, 4500);
    } catch (error) {
      console.error('Error submitting RFQ:', error);
      toast.error("Failed to submit RFQ. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showSuccess) {
    return <SuccessAnimation message="RFQ submitted successfully! Opening WhatsApp..." duration={3000} />;
  }
 return (
    <div className="min-h-screen relative">
      <Navbar />

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-24 h-24 sm:w-48 sm:h-48 bg-primary/10 rounded-full blur-[30px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 h-32 sm:w-56 sm:h-56 bg-secondary/10 rounded-full blur-[80px] animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 pt-20 pb-16 mt-10">
        <div className="max-w-3xl mx-auto">
          {/* Progress */}
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  step >= 1
                    ? "bg-gradient-to-br from-primary to-secondary text-white"
                    : "bg-gray-300 text-gray-600"
                }`}
              >
                1
              </div>
              <div
                className={`h-1 w-12 sm:w-20 ${
                  step >= 2
                    ? "bg-gradient-to-r from-primary to-secondary"
                    : "bg-gray-300"
                }`}
              />
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  step >= 2
                    ? "bg-gradient-to-br from-primary to-secondary text-white"
                    : "bg-gray-300 text-gray-600"
                }`}
              >
                2
              </div>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mb-2">
              Request for Quotation – Step {step} of 2
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              {step === 1 ? "Review your cart" : "Enter your details"}
            </p>
          </div>

          {/* Step 1: Cart */}
          {step === 1 ? (
            <div className="rounded-3xl p-4 sm:p-8 shadow-md backdrop-blur-lg bg-[#f3e3de]/40 border border-white/30">

              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-gradient">
                Your Cart
              </h3>

              {cartItems.length > 0 ? (
                <div className="space-y-4 mb-6">
                  {cartItems.map((item, index) => (
                    <div
                      key={index}
                      className="glass-card p-4 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                    >
                      <div className="flex items-center gap-3">
                        <Package className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                        <div>
                          <h2 className="font-semibold text-sm sm:text-base text-muted-foreground">
                            {item.productName}
                          </h2>
                          <div className="flex flex-wrap gap-2 mt-3">
                            <Badge className="bg-primary/10 text-primary border-0 text-xs sm:text-sm">
                              Brand: {item.brand}
                            </Badge>
                            <Badge className="bg-primary/10 text-primary border-0 text-xs sm:text-sm">
                              Grade: {item.grade}
                            </Badge>
                            <Badge className="bg-primary/10 text-primary border-0 text-xs sm:text-sm">
                              {item.quantity} MT
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemoveItem(index)}
                        className="self-end sm:self-center text-destructive hover:bg-destructive/10"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10">
                  <Package className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                  <p className="text-muted-foreground mb-4">
                    Your cart is empty
                  </p>
                  <Button
                    onClick={() => navigate("/products")}
                    className="bg-gradient-to-br from-primary to-secondary text-white"
                  >
                    Browse Products
                  </Button>
                </div>
              )}

              {cartItems.length > 0 && (
                <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 mt-6">
                  <Button
                    variant="outline"
                    onClick={() => navigate("/products")}
                    className="w-full sm:w-auto"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Add More
                  </Button>
                  <Button
                    onClick={handleNext}
                    className="w-full sm:w-auto bg-gradient-to-br from-primary to-secondary hover:opacity-90 text-white"
                  >
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              )}
            </div>
          ) : (
            /* Step 2: Customer Info */
            <div className="rounded-3xl p-4 sm:p-8 shadow-md backdrop-blur-lg bg-[#f3e3de]/40 border border-white/30">

              <h3 className="text-lg sm:text-xl font-bold mb-6">
                Customer Information
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="name">
                    Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    value={customerInfo.name}
                    onChange={(e) =>
                      setCustomerInfo({
                        ...customerInfo,
                        name: e.target.value,
                      })
                    }
                    className="mt-2"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="company">
                    Company <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="company"
                    value={customerInfo.company}
                    onChange={(e) =>
                      setCustomerInfo({
                        ...customerInfo,
                        company: e.target.value,
                      })
                    }
                    className="mt-2"
                    placeholder="Your company name"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="location">
                    Delivery Location <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="location"
                    value={customerInfo.location}
                    onChange={(e) =>
                      setCustomerInfo({
                        ...customerInfo,
                        location: e.target.value,
                      })
                    }
                    className="mt-2"
                    placeholder="Delivery location"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={customerInfo.email}
                    onChange={(e) =>
                      setCustomerInfo({
                        ...customerInfo,
                        email: e.target.value,
                      })
                    }
                    className="mt-2"
                    placeholder="Your email"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">
                    Phone <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={customerInfo.phone}
                    onChange={(e) =>
                      setCustomerInfo({
                        ...customerInfo,
                        phone: e.target.value,
                      })
                    }
                    className="mt-2"
                    placeholder="Your phone number"
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="w-full sm:w-1/2"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Cart
                  </Button>
                  <Button
                    type="submit"
                    className="w-full sm:w-1/2 bg-gradient-to-br from-primary to-secondary hover:opacity-90 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit RFQ"}
                  </Button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>

      <Footer />
      <ScrollToTop />
      <FloatingActionButtons />
    </div>
  );
};

export default RFQ;
