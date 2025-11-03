import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Trash2, Package, ArrowRight, ArrowLeft } from "lucide-react";
import { products } from "@/data/products";
import { toast } from "sonner";
import { sendToWhatsApp, sendEmail } from "@/lib/whatsappIntegration";
import { saveToLocalStorage, downloadCSV } from "@/lib/sheetsIntegration";
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

  // Load cart from sessionStorage on mount
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

      // Send Email
      setTimeout(() => {
        sendEmail(rfqData);
      }, 500);

      // Download CSV/Excel with all data
      setTimeout(() => {
        downloadCSV();
        toast.success("Excel file downloaded successfully!");
      }, 1000);

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
    <div className="min-h-screen ">
      <Navbar />
  <div className="absolute inset-0">
    <div className="absolute top-20 left-10 w-32 h-32 sm:w-48 sm:h-48 bg-primary/10 rounded-full blur-[30px] animate-pulse" />
    <div className="absolute bottom-20 right-10 w-40 h-40 sm:w-56 sm:h-56 bg-secondary/10 rounded-full blur-[80px] animate-pulse delay-1000" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-80 sm:h-80 bg-primary/5 rounded-full blur-[20px] animate-pulse delay-2000" />
  </div>
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  step >= 1 ? "bg-gradient-to-br from-primary to-secondary  text-white" : "glass-card"
                }`}
              >
                1
              </div>
              <div className={`h-1 w-20 ${step >= 2 ? "bg-gradient-primary" : "bg-gradient-to-br from-primary to-secondary "}`}></div>
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  step >= 2 ? "bg-gradient-to-br from-primary to-secondary  text-white" : "bg-[#d09a8b] text-white"
                }`}
              >
                2
              </div>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">
                Request for Quotation - Step {step} of 2
              </h2>
              <p className="text-muted-foreground">
                {step === 1 ? "Review your cart" : "Enter your details"}
              </p>
            </div>
          </div>

          {step === 1 ? (
            /* Step 1: Cart */
            <div className="bg-[#f3e3de] rounded-3xl p-8">
              <h3 className=" text-gradient text-xl font-bold mb-6">Your Cart</h3>

              {cartItems.length > 0 ? (
                <div className="space-y-4 mb-6">
                  {cartItems.map((item, index) => {
                    const product = products.find((p) => p.id === item.productId);
                    return (
                      <div key={index} className="glass-card p-4 flex items-center justify-between ">
                        <div className="flex items-center gap-4">
                          <Package className="w-8 h-8 text-primary" />
                          <div>
                            <h2 className=" text-muted-foreground font-bold">{item.productName}</h2>
                            <div className="flex gap-2 mt-4">
                                      <Badge className="mb-4 bg-primary/10 text-primary border-4">
                              
                                Brand: {item.brand}
                              </Badge>
                                      <Badge className="mb-4 bg-primary/10 text-primary border-4">
                              
                                Grade: {item.grade}
                              </Badge>
                                      <Badge className="mb-4 bg-primary/10 text-primary border-4">

                                {item.quantity} MT
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleRemoveItem(index)}
                          className="text-destructive hover:text-destructive hover:bg-destructive/10"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground mb-4">Your cart is empty</p>
                  <Button onClick={() => navigate("/products")}>Browse Products</Button>
                </div>
              )}

              {cartItems.length > 0 && (
                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => navigate("/products")} className="glass-morphism">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Add More Products
                  </Button>
                  <Button onClick={handleNext} className="bg-gradient-to-br from-primary to-secondary  hover:opacity-90">
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              )}
            </div>
          ) : (
            /* Step 2: Customer Info */
            <div className="glass-card bg-[#f3e3de] p-8">
              <h3 className="text-xl font-bold mb-6">Customer Information</h3>

              <form onSubmit={handleSubmit} className="space-y-5 ">
                <div className="mb-2">

                  <Label  htmlFor="name">
                    Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                    required
                    className="glass-morphism mt-2"
                    placeholder="Your name"
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
                      setCustomerInfo({ ...customerInfo, company: e.target.value })
                    }
                    required
                    className="glass-morphism mt-2"
                    placeholder="Your company name"
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
                      setCustomerInfo({ ...customerInfo, location: e.target.value })
                    }
                    required
                    className="glass-morphism mt-2"
                    placeholder="Delivery location"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={customerInfo.email}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                    className="glass-morphism mt-2"
                    placeholder="Your email"
                  />
                </div>

                <div >

                  <Label htmlFor="phone">
                    Phone <span className="text-destructive">*</span>
                  </Label>
                 
                  <Input
                    id="phone"
                    type="tel"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                    required
                    className="glass-morphism mt-2"
                    placeholder="Your phone number"
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="glass-morphism w-full"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Cart
                  </Button>
                  <Button 
                    type="submit" 
                    className="bg-gradient-to-br from-primary to-secondary  hover:opacity-90 w-full"
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
