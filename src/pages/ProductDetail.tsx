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
import { ArrowLeft, ShoppingCart, Sparkles, Check, Package, Award, Truck } from "lucide-react";
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
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <Link to="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Generate multiple product images (for demo, we'll use the same image with variations)
  const productImages = [
    product.image,
    product.image,
    product.image,
    product.image,
  ];

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

    // Create cart item
    const cartItem = {
      productId: product.id,
      productName: product.name,
      category: categories.find((c) => c.value === product.category)?.label || product.category,
      brand: selectedBrand,
      grade: selectedGrade,
      quantity: quantity
    };

    // Save to sessionStorage (temporary cart)
    const existingCart = sessionStorage.getItem('rfq_cart');
    const cart = existingCart ? JSON.parse(existingCart) : [];
    cart.push(cartItem);
    sessionStorage.setItem('rfq_cart', JSON.stringify(cart));

    // Show success toast
    toast.success("Product added to cart!");

    // Navigate to RFQ page
    setTimeout(() => {
      navigate('/rfq');
    }, 500);
  };


  return (
    <div className="min-h-screen glass-bg">
      <Navbar />

      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="wave-animation"></div>
        <div className="wave-animation-delay"></div>
      </div>

      <div className="section-padding relative z-10">
        <div className="container mx-auto px-4">
          {/* Breadcrumb & Back Button */}
          <div className="flex items-center gap-4 mb-8">
            <Link to="/products">
              <Button variant="outline" className="glass-morphism">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Products
              </Button>
            </Link>
            <div className="text-sm text-muted-foreground flex items-center gap-2">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span>/</span>
              <Link to="/products" className="hover:text-primary">Products</Link>
              <span>/</span>
              <span className="text-foreground">{product.name}</span>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* Left Column - Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="glass-card overflow-hidden">
                <div className="relative aspect-square">
                  <img
                    src={productImages[selectedImageIndex]}
                    alt={product.name}
                    className="w-full h-full object-cover animate-image-zoom"
                  />
                  <AIBadge className="absolute top-4 right-4" text="AI Quality Verified" />
                </div>
              </div>

              {/* Image Thumbnails */}
              <div className="grid grid-cols-4 gap-4">
                {productImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`glass-card overflow-hidden transition-all duration-300 ${
                      selectedImageIndex === idx
                        ? "ring-2 ring-primary scale-105"
                        : "hover:scale-105"
                    }`}
                  >
                    <div className="aspect-square">
                      <img
                        src={img}
                        alt={`${product.name} ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </button>
                ))}
              </div>

              {/* Product Specifications Card */}
              <div className="glass-card p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Package className="w-5 h-5 text-primary" />
                  Product Specifications
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Category</span>
                    <Badge className="bg-primary/10 text-primary">
                      {categories.find((c) => c.value === product.category)?.label}
                    </Badge>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Availability</span>
                    <span className="text-green-500 font-medium flex items-center gap-1">
                      <Check className="w-4 h-4" />
                      In Stock
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Quality Standard</span>
                    <span className="font-medium flex items-center gap-1">
                      <Award className="w-4 h-4 text-primary" />
                      ISO Certified
                    </span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">Delivery</span>
                    <span className="font-medium flex items-center gap-1">
                      <Truck className="w-4 h-4 text-primary" />
                      Pan India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Product Info */}
            <div className="space-y-6">
              {/* Product Header */}
              <div className="glass-card p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">{product.name}</h1>
                    <Badge className="bg-primary/10 text-primary">
                      {categories.find((c) => c.value === product.category)?.label}
                    </Badge>
                  </div>
                  <AIBadge text="AI Recommended" />
                </div>
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              </div>

              {/* Applications */}
              <div className="glass-card p-6">
                <h3 className="text-xl font-bold mb-4">Applications</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {product.applications.map((app, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 p-3 rounded-lg bg-primary/5 border border-primary/10"
                    >
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="glass-card p-6">
                <h3 className="text-xl font-bold mb-4">Features</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {product.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 p-3 rounded-lg bg-accent/50 border border-border/50"
                    >
                      <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Request Quote Form */}
              <div className="glass-card p-6">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-primary" />
                  Request Quote
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="brand">Select Brand *</Label>
                    <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                      <SelectTrigger id="brand" className="glass-morphism mt-2">
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
                      <SelectTrigger id="grade" className="glass-morphism mt-2">
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
                      className="glass-morphism mt-2"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Minimum order quantity: 1 MT
                    </p>
                  </div>

                  <Button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-primary hover:opacity-90 h-12 text-base font-semibold"
                    disabled={!selectedBrand || !selectedGrade || quantity < 1}
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    Get instant quotes from verified suppliers across World
                  </p>
                </div>
              </div>

              {/* AI-Powered Insights */}
              <div className="glass-card p-6 bg-gradient-to-br from-primary/5 to-transparent border-primary/20">
                <div className="flex items-start gap-3">
                  <div className="icon-circle-lg">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">AI-Powered Procurement</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Get smart recommendations, price comparisons, and automated supplier matching powered by AI.
                    </p>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary" />
                        Instant multi-supplier quotes
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary" />
                        AI-driven price optimization
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary" />
                        Automated quality verification
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center">Related Products</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <Link
                    key={relatedProduct.id}
                    to={`/product/${relatedProduct.id}`}
                    className="glass-card-hover group overflow-hidden"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted rounded-t-2xl">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <Badge className="mb-2 bg-primary/10 text-primary text-xs">
                        {categories.find((c) => c.value === relatedProduct.category)?.label}
                      </Badge>
                      <h3 className="font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {relatedProduct.description}
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
