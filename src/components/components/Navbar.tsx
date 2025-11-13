import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Package, ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount] = useState(1);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-0 border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 md:gap-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <Package className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <span className="text-lg md:text-xl font-bold text-gradient">RitzYard</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <Link to="/"><Button variant="ghost" className="text-muted-foreground hover:text-foreground">Home</Button></Link>
            <Link to="/about"><Button variant="ghost" className="text-muted-foreground hover:text-foreground">About Us</Button></Link>
            <Link to="/products"><Button variant="ghost" className="text-muted-foreground hover:text-foreground">Products</Button></Link>
            <Link to="/blogs"><Button variant="ghost" className="text-muted-foreground hover:text-foreground">Blogs</Button></Link>
            <Link to="/contact"><Button variant="ghost" className="text-muted-foreground hover:text-foreground">Contact Us</Button></Link>
          </div>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center gap-2">
            <Link to="/rfq">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground rounded-full text-xs flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
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
          <div className="lg:hidden py-4 space-y-2 border-t border-border">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}><Button variant="ghost" className="w-full justify-start">Home</Button></Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)}><Button variant="ghost" className="w-full justify-start">About Us</Button></Link>
            <Link to="/products" onClick={() => setMobileMenuOpen(false)}><Button variant="ghost" className="w-full justify-start">Products</Button></Link>
            <Link to="/blogs" onClick={() => setMobileMenuOpen(false)}><Button variant="ghost" className="w-full justify-start">Blogs</Button></Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}><Button variant="ghost" className="w-full justify-start">Contact Us</Button></Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
