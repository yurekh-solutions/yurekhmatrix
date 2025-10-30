import { Link } from "react-router-dom";
import { Hammer, Layers, Box, Droplet } from "lucide-react";

const categories = [
  {
    name: "Cement",
    icon: Layers,
    count: "50+",
    color: "from-terracotta to-terracotta-dark",
  },
  {
    name: "Steel",
    icon: Hammer,
    count: "80+",
    color: "from-earth to-clay",
  },
  {
    name: "Bricks",
    icon: Box,
    count: "36+",
    color: "from-primary to-accent",
  },
  {
    name: "Concrete",
    icon: Droplet,
    count: "25+",
    color: "from-clay to-primary-dark",
  },
];

export const FeaturedCategories = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Popular Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse through our wide selection of construction materials
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              to={`/products?category=${category.name}`}
              className="group"
            >
              <div className="glass card-3d rounded-2xl p-6 md:p-8 text-center space-y-4 hover:shadow-elevated transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`w-16 h-16 md:w-20 md:h-20 mx-auto rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg md:text-xl text-foreground">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {category.count} Products
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
