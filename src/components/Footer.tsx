import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const companyLinks = [
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Careers", path: "/careers" },
    { name: "Blogs", path: "/blogs" },
  ];

  const productLinks = [
    { name: "All Products", path: "/products" },
    { name: "Cement", path: "/products?category=Concrete & Cement" },
    { name: "Steel", path: "/products?category=Steel & Metal" },
    { name: "Wood & Timber", path: "/products?category=Wood & Timber" },
  ];

  const supportLinks = [
    { name: "Help Center", path: "/help-center" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "FAQs", path: "/faqs" },
  ];

  return (
    <footer className="bg-gradient-to-br from-secondary to-secondary/90 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center font-bold text-white text-lg">
                MM
              </div>
              <span className="text-xl font-bold">MaterialMatrix</span>
            </Link>
            <p className="text-white/80 text-sm leading-relaxed">
              Your trusted construction procurement platform. Connecting buyers with verified suppliers across India.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Pune, Maharashtra, India</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:support@materialmatrix.ai" className="hover:text-primary transition-colors duration-300">
                  support@materialmatrix.ai
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+919136242706" className="hover:text-primary transition-colors duration-300">
                  +91 91362 42706
                </a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/80 hover:text-white hover:text-primary transition-colors duration-300 text-sm block py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/80 hover:text-white hover:text-primary transition-colors duration-300 text-sm block py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/80 hover:text-white hover:text-primary transition-colors duration-300 text-sm block py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 text-center  text-[#fefefe] text-sm">
        <p>
  © {new Date().getFullYear()} <span className="font-semibold">MaterialMatrix.</span> All rights reserved. Powered by{" "}
  <a
    href="https://yurekh.com"
    target="_blank"
    rel="noopener noreferrer"
    className="font-normal  text-white/60  "
  >
    YUREKH SOLUTIONS
  </a>
</p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
