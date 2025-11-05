import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowLeft,
  ShoppingCart,
  Sparkles,
  Check,
  Package,
  Award,
  Truck,
  Eye
} from "lucide-react";
import { products, categories } from "@/data/products";
import { toast } from "sonner";
import ScrollToTop from "@/components/ScrollToTop";
import AIBadge from "@/components/AIBadge";
import FloatingActionButtons from "@/components/FloatingActionButtons";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);

  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedGrade, setSelectedGrade] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen glass-bg flex items-center justify-center">
        <div className="text-center px-4">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            Product not found
          </h2>
          <Link to="/products">
            <Button className="text-sm sm:text-base">Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const productImages = [product.image, product.image, product.image, product.image];

  const brands = ["JSW Steel", "Tata Steel", "SAIL", "Jindal Steel", "Essar Steel"];
  const grades = ["Grade A", "Grade B", "SS 304", "SS 316", "MS Grade A", "IS 2062"];

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleSubmit = () => {
    if (!selectedBrand || !selectedGrade || quantity < 1) {
      toast.error("Please fill all required fields");
      return;
    }

    const cartItem = {
      productId: product.id,
      productName: product.name,
      category: categories.find((c) => c.value === product.category)?.label || product.category,
      brand: selectedBrand,
      grade: selectedGrade,
      quantity: quantity,
    };

    const existingCart = sessionStorage.getItem("rfq_cart");
    const cart = existingCart ? JSON.parse(existingCart) : [];
    cart.push(cartItem);
    sessionStorage.setItem("rfq_cart", JSON.stringify(cart));

    window.dispatchEvent(new Event("cartUpdated"));
    toast.success("Product added to cart!");
    setTimeout(() => navigate("/rfq"), 500);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-24 h-24 sm:w-48 sm:h-48 bg-primary/10 rounded-full blur-[30px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-28 h-28 sm:w-56 sm:h-56 bg-secondary/10 rounded-full blur-[60px] animate-pulse delay-1000" />
      </div>

      <div className="section-padding relative z-10">
        <div className="container mx-auto px-4 mt-8 sm:mt-10">
          {/* Breadcrumb */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
            <Link to="/products" className="w-fit">
              <Button
                size="sm"
                className="bg-gradient-to-br from-primary to-secondary text-primary-foreground"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Products
              </Button>
            </Link>
            <div className="text-xs sm:text-sm text-muted-foreground flex flex-wrap items-center gap-2">
              <Link to="/" className="hover:text-primary">
                Home
              </Link>
              <span>/</span>
              <Link to="/products" className="hover:text-primary">
                Products
              </Link>
              <span>/</span>
              <span className="text-foreground">{product.name}</span>
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-16">
            {/* Left Column */}
            <div className="space-y-4">
              <div className="glass-card overflow-hidden rounded-xl">
                <div className="relative aspect-square">
                  <img
                    src={productImages[selectedImageIndex]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <AIBadge className="absolute top-4 right-4" text="AI Quality Verified" />
                </div>
              </div>

              {/* Specs */}
              <div className="glass-card p-5 sm:p-6 rounded-xl">
                <h3 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2">
                  <Package className="w-5 h-5 text-primary" />
                  Product Specifications
                </h3>
                <div className="space-y-3 text-sm sm:text-base">
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Category</span>
                    <Badge className="bg-primary/10 text-primary">
                      {categories.find((c) => c.value === product.category)?.label}
                    </Badge>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Availability</span>
                    <span className="text-primary font-medium flex items-center gap-1">
                      <Check className="w-4 h-4" /> In Stock
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Quality</span>
                    <span className="font-medium flex items-center gap-1">
                      <Award className="w-4 h-4 text-primary" /> ISO Certified
                    </span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">Delivery</span>
                    <span className="font-medium flex items-center gap-1">
                      <Truck className="w-4 h-4 text-primary" /> Pan India
                    </span>
                  </div>
                   <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Material Standard</span>
                    <span className="font-medium">IS 2062 / ASTM A36</span>
                  </div>
                    <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Packaging</span>
                    <span className="font-medium">Bundle / Crate</span>
                  </div>
                   <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Testing Certificate</span>
                    <span className="font-medium flex items-center gap-1">
                      <Award className="w-4 h-4 text-primary" />
                      Mill Test Available
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="glass-card p-5 sm:p-6 rounded-xl">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-3">
                  <div>
                    <h6 className="text2xl sm:text-2xl font-bold mb-2">
                      {product.name}
                    </h6>
                    <Badge className="bg-primary/10 text-primary">
                      {categories.find((c) => c.value === product.category)?.label}
                    </Badge>
                  </div>
                  <AIBadge text="AI Recommended" />
                </div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Applications */}
              <div className="glass-card p-5 sm:p-6 rounded-xl">
                <h3 className="text-lg sm:text-xl font-bold mb-4">Applications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.applications.map((app, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 p-3 rounded-lg bg-primary/5 border border-primary/10 text-sm"
                    >
                      <Check className="w-5 h-5 text-primary mt-0.5" />
                      {app}
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="glass-card p-5 sm:p-6 rounded-xl">
                <h3 className="text-lg sm:text-xl font-bold mb-4">Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 p-3 rounded-lg bg-accent/50 border border-border/50 text-sm"
                    >
                      <Sparkles className="w-5 h-5 text-primary mt-0.5" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* RFQ Form */}
              <div className="glass-card p-5 sm:p-6 rounded-xl">
                <h3 className="text-lg sm:text-xl font-bold mb-6 flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-primary" />
                  Request Quote
                </h3>

                <div className="space-y-4 text-sm sm:text-base">
                  <div>
                    <Label htmlFor="brand">Select Brand *</Label>
                    <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                      <SelectTrigger id="brand" className="mt-2 glass-morphism">
                        <SelectValue placeholder="Choose a preferred brand" />
                      </SelectTrigger>
                      <SelectContent>
                        {brands.map((brand) => (
                          <SelectItem key={brand} value={brand}>
                            {brand}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="grade">Select Material Grade *</Label>
                    <Select value={selectedGrade} onValueChange={setSelectedGrade}>
                      <SelectTrigger id="grade" className="mt-2 glass-morphism">
                        <SelectValue placeholder="Choose material specification" />
                      </SelectTrigger>
                      <SelectContent>
                        {grades.map((grade) => (
                          <SelectItem key={grade} value={grade}>
                            {grade}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="quantity">Quantity (Metric Tons) *</Label>
                    <Input
                      id="quantity"
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value))}
                      className="mt-2 glass-morphism"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Minimum order quantity: 1 MT
                    </p>
                  </div>

                  <Button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-primary hover:opacity-90 h-11 sm:h-12 text-sm sm:text-base font-semibold"
                    disabled={!selectedBrand || !selectedGrade || quantity < 1}
                  >
                    <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Add to Cart
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Get instant quotes from verified suppliers worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
                Related Products
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {relatedProducts.map((rp) => (
                  <Link
                    key={rp.id}
                    to={`/product/${rp.id}`}
                    className="glass-card-hover group overflow-hidden rounded-xl"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                      <img
                        src={rp.image}
                        alt={rp.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                                                <Button 
                                                  className="bg-gradient-to-r from-primary to-secondary text-white shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                                                  size="sm"
                                                >
                                                  <Eye className="w-4 h-4 mr-2" />
                                                  View Details
                                                </Button>
                                              </div>
                    </div>
                    <div className="p-4">
                      <Badge className="mb-2 bg-primary/10 text-primary text-xs">
                        {categories.find((c) => c.value === rp.category)?.label}
                      </Badge>
                      <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors text-sm sm:text-base">
                        {rp.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
                        {rp.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
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

export default ProductDetail;
