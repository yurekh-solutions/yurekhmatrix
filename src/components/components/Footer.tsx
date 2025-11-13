import { Link } from "react-router-dom";
import { Package, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="glass-card border-0 border-t border-white/10 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-lg">
                <Package className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient">RitzYard</span>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="https://wa.me/917021341409" className="hover:text-primary transition-colors">
                  +91 70213 41409
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:construction@ritzyard.ai" className="hover:text-primary transition-colors">
                  construction@ritzyard.ai
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Hill View Building, 302, 2, Hill Rd, W, Bandra West, Mumbai, Maharashtra 400050</span>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/blogs" className="hover:text-primary transition-colors">Blogs & Insights</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Products</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/products?category=mild-steel" className="hover:text-primary transition-colors">Mild Steel</Link></li>
              <li><Link to="/products?category=stainless-steel" className="hover:text-primary transition-colors">Stainless Steel</Link></li>
              <li><Link to="/products?category=construction" className="hover:text-primary transition-colors">Construction Materials</Link></li>
              <li><Link to="/products?category=electrical" className="hover:text-primary transition-colors">Electrical Materials</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/contact" className="hover:text-primary transition-colors">Email Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Page</Link></li>
              <li><a href="https://wa.me/917021341409" className="hover:text-primary transition-colors">WhatsApp Support</a></li>
              <li><Link to="/" className="hover:text-primary transition-colors">FAQs</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 RitzYard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
