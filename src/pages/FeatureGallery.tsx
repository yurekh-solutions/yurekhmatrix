import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const FeatureGallery = ({ products }) => {
  // Group products by category
  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) acc[product.category] = [];
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <section className="py-12 bg-[#f9f7f6] sm:py-16 md:py-20 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-slide-up">
          <Badge className="mb-4 bg-primary/10 text-primary border-0">
            Featured Products
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#c15738] to-[#5c2d23] bg-clip-text text-transparent">
            Premium{" "}
            <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Materials
            </span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4"></div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Premium construction materials from verified suppliers with instant quotes and real-time tracking
          </p>
        </div>

        {/* Render each category section */}
        {Object.entries(groupedProducts).map(([category, items], catIndex) => (
          <div key={category} className="mb-12 sm:mb-16 animate-slide-up" style={{ animationDelay: `${catIndex * 0.1}s` }}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-[#5c2d23] capitalize">
                {category.replace("-", " ")}
              </h3>
              <Link to={`/category/${category}`}>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-md"
                >
                  View All
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {items.slice(0, 4).map((product, index) => (
                <Link key={product.id} to={`/product/${product.id}`}>
                  <Card
                    className="group overflow-hidden border border-primary/10 shadow-lg transition-all duration-300 animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500"
                        onError={(e) => {
                          e.target.src =
                            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                          <Button
                            className="bg-gradient-to-r from-primary to-secondary text-white shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                            size="sm"
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <Badge className="mb-2 bg-primary/10 text-primary border-0 text-xs">
                        {product.category.replace("-", " ").toUpperCase()}
                      </Badge>
                      <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-2 line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
                        {product.description}
                      </p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center">
          <Link to="/products">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg"
            >
              View All Products
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeatureGallery;
