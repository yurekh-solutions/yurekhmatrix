import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Search, Eye, Plus, ArrowDown, Package, Shield, Zap, Award } from "lucide-react";
import { products, categories } from "@/data/products";
import heroImage from "@/assets/hero-construction.jpg";
import ScrollToTop from "@/components/ScrollToTop";
import ProductNotFoundForm from "@/components/ProductNotFoundForm";
import FloatingActionButtons from "@/components/FloatingActionButtons";
import AnimatedBackground from "@/components/AnimatedBackground";
import heroBg from "@/assets/hero-bg-orange.jpg";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Shuffle function to randomize array
  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Filter products based on search and category
  const filteredProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    // Shuffle products when showing all categories to get a good mix
    if (selectedCategory === "all" && !searchQuery) {
      filtered = shuffleArray(filtered);
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const scrollToCatalog = () => {
    const catalog = document.getElementById('catalog');
    catalog?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      icon: Package,
      title: "100+ Products",
      description: "Comprehensive range"
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "Industry standards"
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Across India"
    },
    {
      icon: Award,
      title: "Best Prices",
      description: "Bulk discounts"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f4f0ec]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-16 sm:pt-20 pb-12 sm:pb-16 overflow-hidden">
        {/* Background Image with Overlay */}
        {/* <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
        </div> */}
          <div 
        className="min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] flex items-center justify-center relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <div className="absolute inset-0 bg-black/80 z-0"></div>
        <AnimatedBackground />
        
        <div className="text-center px-4 py-12 sm:py-16 lg:py-20 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white   mb-4 sm:mb-6 animate-slide-up-fade">
              Our Products
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mt-6 sm:mt-8 lg:mt-10 text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto animate-slide-up-fade animation-delay-200">
              Discover our collection of premium construction materials crafted with excellence
            </p>
            <div className="flex justify-center animate-slide-up-fade animation-delay-400">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}
                className="glass-card border-glass-border text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full
                          hover:bg-primary/20 hover:border-primary/30 interactive-hover
                          transition-all duration-300 hover:shadow-glow backdrop-blur-xl"
              >
                Explore Collection
              </Button>
                {/* <Button
              onClick={scrollToCatalog}
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce-in"
            >
              Explore Collection
              <ArrowDown className="ml-2 w-5 h-5 animate-bounce" />
            </Button> */}
            </div>
          </div>
        </div>
      </div>

      
      </section>

      {/* Products Catalog */}
      <section id="catalog" className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Order Ferrous and Non-Ferrous Commodities
            </h2>
            <p className="text-muted-foreground text-sm">
              Add any commodity you want to enquire about and get instant quotations
            </p>
          </div>

          {/* Search and Filter */}
          <div className="glass-card p-5 mb-8">
            <div className="max-w-3xl mx-auto mb-5">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search products (e.g., TMT, SS, cement)"
                  className="pl-10 h-11 glass-morphism"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  onClick={() => {
                    setSelectedCategory(category.value);
                    setCurrentPage(1);
                  }}
                  variant={selectedCategory === category.value ? "default" : "outline"}
                  className={
                    selectedCategory === category.value
                      ? "bg-gradient-primary border-0"
                      : "glass-morphism"
                  }
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          {paginatedProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
                {paginatedProducts.map((product, index) => (
                  <Card
                    key={product.id}
                    className="group overflow-hidden border border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="relative aspect-square overflow-hidden bg-muted">
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1565888588381-c50f98dbb1f8?auto=format&fit=crop&w=800&q=80';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      <Link to={`/product/${product.id}`}>
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                          <Button 
                            className="bg-gradient-to-r from-primary to-secondary text-white shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                            size="sm"
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
                          </Button>
                        </div>
                      </Link>
                    </div>

                    <div className="p-4 sm:p-5">
                      <Badge className="mb-2 sm:mb-3 bg-primary/10 text-primary border-0 px-2.5 py-0.5 rounded-full text-xs font-medium">
                        {categories.find((c) => c.value === product.category)?.label}
                      </Badge>
                      <h3 className="text-sm sm:text-base font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">{product.name}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 line-clamp-2">{product.description}</p>
                      <Link to={`/rfq?product=${product.id}`}>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="w-full border-primary/20 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white hover:border-transparent transition-all duration-300 text-xs sm:text-sm"
                        >
                          <Plus className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5" />
                          Add to RFQ
                        </Button>
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <Card className="p-4 sm:p-6 border border-primary/10 shadow-lg">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Button
                      variant="outline"
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                      className="border-primary/20 hover:bg-primary/5"
                      size="sm"
                    >
                      &larr;
                    </Button>

                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      const page = i + 1;
                      return (
                        <Button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          variant={currentPage === page ? "default" : "outline"}
                          className={
                            currentPage === page 
                              ? "bg-gradient-to-r from-primary to-secondary text-white border-0" 
                              : "border-primary/20 hover:bg-primary/5"
                          }
                          size="sm"
                        >
                          {page}
                        </Button>
                      );
                    })}

                    <Button
                      variant="outline"
                      onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                      disabled={currentPage === totalPages}
                      className="border-primary/20 hover:bg-primary/5"
                      size="sm"
                    >
                      &rarr;
                    </Button>
                  </div>

                  <div className="text-center text-xs sm:text-sm text-muted-foreground mb-4">
                    Showing {(currentPage - 1) * itemsPerPage + 1}-
                    {Math.min(currentPage * itemsPerPage, filteredProducts.length)} of{" "}
                    {filteredProducts.length} products
                  </div>

                  <div className="flex items-center justify-center gap-2 flex-wrap">
                    <span className="text-xs sm:text-sm text-muted-foreground">Go to page:</span>
                    <Input
                      type="number"
                      min={1}
                      max={totalPages}
                      value={currentPage}
                      onChange={(e) => {
                        const page = parseInt(e.target.value);
                        if (page >= 1 && page <= totalPages) {
                          setCurrentPage(page);
                        }
                      }}
                      className="w-16 sm:w-20 border-primary/20 text-center text-xs sm:text-sm"
                    />
                    <span className="text-xs sm:text-sm text-muted-foreground">of {totalPages}</span>
                  </div>
                </Card>
              )}
            </>
          ) : searchQuery.trim() ? (
            <ProductNotFoundForm searchQuery={searchQuery} />
          ) : (
            <Card className="p-8 sm:p-12 text-center border border-primary/10 shadow-lg">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">No Products Found</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Try adjusting your search or filters.
              </p>
            </Card>
          )}
        </div>
      </section>
  
      <Footer />
      <ScrollToTop />
      <FloatingActionButtons />
    </div>
  );
};

export default Products;
