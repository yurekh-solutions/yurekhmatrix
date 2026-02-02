// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { ShoppingCart, Menu, X } from "lucide-react";
// import { useState } from "react";

// const Navbar = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [cartCount] = useState(1);

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16 md:h-20">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-2 group">
//             <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-white text-lg md:text-xl shadow-md group-hover:shadow-lg transition-all">
//               MM
//             </div>
//             <span className="text-xl md:text-2xl font-bold text-gradient">
//               RitzYard
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center gap-1">
//             <Link to="/">
//               <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
//                 Home
//               </Button>
//             </Link>
//             <Link to="/about">
//               <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
//                 About Us
//               </Button>
//             </Link>
//             <Link to="/products">
//               <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
//                 Products
//               </Button>
//             </Link>
//             <Link to="/blogs">
//               <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
//                 Blogs
//               </Button>
//             </Link>
//             <Link to="/contact">
//               <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
//                 Contact Us
//               </Button>
//             </Link>
//           </div>

//           {/* Cart & Mobile Menu */}
//           <div className="flex items-center gap-3">
//             {/* Cart */}
//             <div className="relative flex items-center justify-center">
//               <Link to="/rfq">
//                 <Button
//                   variant="ghost"
//                   size="icon"
//                   className="hover:bg-primary/10 relative"
//                 >
//                   <ShoppingCart className="w-5 h-5" />
                 
//                 </Button>
//               </Link>
//             </div>

//             {/* Mobile Menu Button */}
//             <Button
//               variant="ghost"
//               size="icon"
//               className="lg:hidden"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             >
//               {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </Button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <div className="lg:hidden py-4 space-y-2 border-t border-border bg-white shadow-inner">
//             {[
//               { name: "Home", path: "/" },
//               { name: "About Us", path: "/about" },
//               { name: "Products", path: "/products" },
//               { name: "Blogs", path: "/blogs" },
//               { name: "Contact Us", path: "/contact" },
//             ].map((item) => (
//               <Link key={item.path} to={item.path} onClick={() => setMobileMenuOpen(false)}>
//                 <Button variant="ghost" className="w-full justify-start">
//                   {item.name}
//                 </Button>
//               </Link>
//             ))}
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Navbar;
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X, Mic, Store } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const { t } = useTranslation();

  // Load cart count from sessionStorage
  useEffect(() => {
    const updateCartCount = () => {
      const savedCart = sessionStorage.getItem('rfq_cart');
      if (savedCart) {
        try {
          const cart = JSON.parse(savedCart);
          setCartCount(cart.length);
        } catch (error) {
          setCartCount(0);
        }
      } else {
        setCartCount(0);
      }
    };

    // Initial load
    updateCartCount();

    // Listen for custom cart update events
    const handleCartUpdate = () => updateCartCount();
    window.addEventListener('cartUpdated', handleCartUpdate);

    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdate);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-white text-lg md:text-xl shadow-md group-hover:shadow-lg transition-all">
              ry
            </div>
            <span className="text-xl md:text-2xl font-bold text-gradient">
              ritzyard
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <Link to="/">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                {t('nav.home')}
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                {t('nav.about')}
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                {t('nav.products')}
              </Button>
            </Link>
            {/* <Link to="/blogs">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                {t('nav.blogs')}
              </Button>
            </Link> */}
            <Link to="/contact">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                {t('nav.contact')}
              </Button>
            </Link>
            <a href="https://ritzyardseller.com/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground flex items-center gap-2">
                <Store className="w-4 h-4" />
                <span>Seller Portal</span>
              </Button>
            </a>
            {/* <Link to="/milo">
              <Button variant="ghost" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                <Mic className="w-4 h-4" />
                <span>Milo AI</span>
              </Button>
            </Link> */}
          </div>

          {/* Cart, Language & Mobile Menu */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Language Selector */}
            <LanguageSelector />

            {/* Cart */}
            <Link to="/rfq" className="relative inline-block">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10 relative w-10 h-10"
              >
                <ShoppingCart className="w-5 h-5" />
                <span 
                  className={`absolute -top-1 -right-1 bg-gradient-to-br from-primary to-secondary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-md transition-all duration-300 ${
                    cartCount > 0 ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                  }`}
                >
                  {cartCount > 0 ? cartCount : '0'}
                </span>
              </Button>
            </Link>

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
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">{t('nav.home')}</Button>
            </Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">{t('nav.about')}</Button>
            </Link>
            <Link to="/products" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">{t('nav.products')}</Button>
            </Link>
            {/* <Link to="/blogs" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">{t('nav.blogs')}</Button>
            </Link> */}
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">{t('nav.contact')}</Button>
            </Link>
            <a href="https://ritzyardseller.com/" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start flex items-center gap-2">
                <Store className="w-4 h-4" />
                <span>Seller Portal</span>
              </Button>
            </a>
            {/* <Link to="/milo" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start flex items-center gap-2">
                <Mic className="w-4 h-4" />
                <span>Milo AI</span>
              </Button>
            </Link> */}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
