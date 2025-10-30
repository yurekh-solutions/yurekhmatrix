import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, User, LogIn } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useEffect } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 glass backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-white font-bold text-lg">MM</span>
            </div>
            <span className="font-bold text-xl text-gradient">MaterialMatrix</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.href) ? "text-primary" : "text-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            {user ? (
              <>
                <Button variant="ghost" size="icon" asChild>
                  <Link to="/cart">
                    <ShoppingCart className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link to="/dashboard">
                    <User className="h-5 w-5" />
                  </Link>
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" asChild className="hidden md:inline-flex">
                  <Link to="/auth/login">
                    <LogIn className="mr-2 h-4 w-4" />
                    Login
                  </Link>
                </Button>
                <Button variant="default" asChild className="bg-[#c15738]">
                  <Link to="/auth/register">Get Started</Link>
                </Button>
              </>
            )}

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className={`text-lg font-medium transition-colors hover:text-primary ${
                        isActive(link.href) ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  {!user && (
                    <>
                      <Link to="/auth/login" className="pt-4">
                        <Button variant="outline" className="w-full">
                          Login
                        </Button>
                      </Link>
                      <Link to="/auth/register">
                        <Button variant="default" className="w-full">
                          Register
                        </Button>
                      </Link>
                    </>
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-card mt-20">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                  <span className="text-white font-bold text-lg">MM</span>
                </div>
                <span className="font-bold text-xl text-gradient">MaterialMatrix</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your trusted construction procurement platform
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Products</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link to="/products?category=Cement" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Cement
                  </Link>
                </li>
                <li>
                  <Link to="/products?category=Steel" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Steel
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Pune, Maharashtra, India</li>
                <li>soniajaiseal2222@gmail.com</li>
                <li>+91 917021341409</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} MaterialMatrix. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
