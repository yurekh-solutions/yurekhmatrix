import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MessageCircle, Phone, Mail, Book, Users, Settings, Shield } from "lucide-react";
import { useState } from "react";

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const helpCategories = [
    {
      icon: Book,
      title: "Getting Started",
      description: "Learn the basics of using RitzYard platform",
      articles: 12,
      color: "bg-gradient-to-br from-primary to-secondary"
    },
    {
      icon: Users,
      title: "Account Management",
      description: "Manage your profile, settings, and preferences",
      articles: 8,
      color: "bg-gradient-to-br from-secondary to-primary"
    },
    {
      icon: Settings,
      title: "Platform Features",
      description: "Explore all the features and capabilities",
      articles: 15,
      color: "bg-gradient-to-br from-secondary to-primary"
    },
    {
      icon: Shield,
      title: "Security & Privacy",
      description: "Learn about our security measures and privacy policies",
      articles: 6,
      color: "bg-gradient-to-br from-secondary to-primary"
    }
  ];

  const popularArticles = [
    "How to create your first material request",
    "Understanding supplier verification process",
    "Setting up automated procurement workflows",
    "Managing your supplier network",
    "Using AI-powered price optimization",
    "Tracking material deliveries in real-time"
  ];

  const contactOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team",
      availability: "24/7 Available",
      action: "Start Chat"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "+91 9559262525",
      availability: "Mon-Fri: 9AM-6PM",
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "support@ritzyard.ai",
      availability: "Response within 1 hour",
      action: "Send Email"
    }
  ];

  return (
    <>
      <SEOHead
        title="Help Center | FAQs & Support Guide - ritzyard"
        description="Get help with ritzyard platform. Find answers to FAQs, user guides, account management, ordering process, supplier verification & more. 24/7 support available."
        keywords="ritzyard help center, construction material FAQs, platform support guide, how to order materials, supplier verification help, account setup guide, procurement support India"
        canonicalUrl="https://ritzyard.com/help"
      />
    <div className="min-h-screen bg-[#f4f0ec]">
      <Navbar />

      <div className="container mt-10 mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-12 sm:pb-16">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-0 text-xs sm:text-sm">
            Help Center
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            How can we <span className="text-gradient">help you?</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8">
            Find answers to your questions, explore our guides, or get in touch with our support team
          </p>

          {/* Search Bar */}
         
        </div>

        {/* Help Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {helpCategories.map((category, index) => (
            <Card key={index} className="p-4 sm:p-6 rounded-2xl border border-primary/10 shadow-lg cursor-pointer transition-all duration-300">
              <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
              <p className="text-xs text-primary font-medium">{category.articles} articles</p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Popular Articles */}
          <div className="lg:col-span-2">
            <Card className="p-4 sm:p-6 lg:p-8 rounded-2xl border border-primary/10 shadow-lg">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Popular Articles</h2>
              <div className="space-y-3 sm:space-y-4">
                {popularArticles.map((article, index) => (
                  <div key={index} className="flex items-center p-3 sm:p-4 rounded-lg border border-primary/10 cursor-pointer transition-colors duration-200">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 sm:mr-4"></div>
                    <span className="text-sm sm:text-base text-foreground">{article}</span>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4 sm:mt-6 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
                View All Articles
              </Button>
            </Card>
          </div>

          {/* Contact Support */}
          <div className="space-y-4 sm:space-y-6">
            <Card className="p-4 sm:p-6 rounded-2xl border border-primary/10 shadow-lg">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Contact Support</h3>
              <div className="space-y-3 sm:space-y-4">
                {contactOptions.map((option, index) => (
                  <div key={index} className="p-3 sm:p-4 rounded-lg border border-primary/10">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                        <option.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm sm:text-base">{option.title}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">{option.description}</p>
                        <p className="text-xs text-primary mt-1">{option.availability}</p>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full mt-3 text-xs sm:text-sm">
                      {option.action}
                    </Button>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Links */}
          
          </div>
        </div>
      </div>

      <Footer />
    </div>
    </>
  );
};

export default HelpCenter;