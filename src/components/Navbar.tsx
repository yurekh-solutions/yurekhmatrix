import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount] = useState(1);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-white text-lg md:text-xl shadow-md group-hover:shadow-lg transition-all">
              MM
            </div>
            <span className="text-xl md:text-2xl font-bold text-gradient">
              MaterialMatrix
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <Link to="/">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                Home
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                About Us
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                Products
              </Button>
            </Link>
            <Link to="/blogs">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                Blogs
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center gap-3">
            {/* Cart */}
            <div className="relative flex items-center justify-center">
              <Link to="/rfq">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-primary/10 relative"
                >
                  <ShoppingCart className="w-5 h-5" />
                  {cartCount > 0 && (
                    <span
                      className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3
                      w-4 h-4 bg-primary text-white rounded-full text-[10px] flex 
                      items-center justify-center font-semibold z-10 shadow-sm"
                    >
                      {cartCount}
                    </span>
                  )}
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-2 border-t border-border bg-white shadow-inner">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Products", path: "/products" },
              { name: "Blogs", path: "/blogs" },
              { name: "Contact Us", path: "/contact" },
            ].map((item) => (
              <Link key={item.path} to={item.path} onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start">
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
