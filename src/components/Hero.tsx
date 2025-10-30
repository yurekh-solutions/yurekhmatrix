import { Search, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 gradient-hero opacity-95"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>

      <div className="container relative py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Find Quality Construction Materials
            <span className="block mt-2 text-ivory">From Trusted Suppliers</span>
          </h1>

          <p className="text-lg md:text-xl text-ivory/90 max-w-2xl mx-auto">
            Connect with verified suppliers and get instant quotes for cement, steel, bricks, and more. Build better with MaterialMatrix.
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="flex gap-2 p-2 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl">
              <Input
                type="text"
                placeholder="Search for cement, steel, bricks, concrete..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border-0 bg-transparent text-lg focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button type="submit" size="lg" className="px-8 rounded-xl">
                <Search className="mr-2 h-5 w-5" />
                Search
              </Button>
            </div>
          </form>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" variant="secondary" className="group" asChild>
              <a href="/products">
                Browse Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30" asChild>
              <a href="/auth/register?role=seller">
                Become a Seller
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-12 md:h-20" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};
