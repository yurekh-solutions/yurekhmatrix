import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import { useState } from "react";

const FAQs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqCategories = [
    {
      category: "Getting Started",
      faqs: [
        {
          question: "How do I create an account on MaterialMatrix?",
          answer: "To create an account, click the 'Sign Up' button on our homepage, fill in your business details, verify your email address, and complete the onboarding process. Our team will review your application within 24 hours."
        },
        {
          question: "What types of construction materials can I find on the platform?",
          answer: "MaterialMatrix offers a comprehensive range of construction materials including steel products (TMT bars, structural steel, pipes), cement, aggregates, electrical materials, plumbing supplies, and specialized construction equipment."
        },
        {
          question: "Is there a minimum order quantity?",
          answer: "Minimum order quantities vary by supplier and material type. Most suppliers have flexible MOQs, and our platform clearly displays these requirements for each product listing."
        }
      ]
    },
    {
      category: "Procurement Process",
      faqs: [
        {
          question: "How does the AI-powered procurement work?",
          answer: "Our AI analyzes your project requirements, historical data, and market conditions to recommend optimal suppliers, predict pricing trends, and automate routine procurement tasks, saving you time and money."
        },
        {
          question: "Can I track my orders in real-time?",
          answer: "Yes, our platform provides real-time tracking for all orders. You'll receive updates on order confirmation, processing, dispatch, and delivery status through our dashboard and mobile notifications."
        },
        {
          question: "What payment methods are accepted?",
          answer: "We accept various payment methods including bank transfers, credit cards, digital wallets, and trade credit arrangements. Payment terms can be negotiated directly with suppliers."
        }
      ]
    },
    {
      category: "Supplier Network",
      faqs: [
        {
          question: "How are suppliers verified on the platform?",
          answer: "All suppliers undergo a rigorous verification process including business license validation, quality certifications review, financial background checks, and on-site audits for premium suppliers."
        },
        {
          question: "Can I become a supplier on MaterialMatrix?",
          answer: "Yes! We welcome qualified suppliers to join our network. Apply through our 'Become a Supplier' page, complete the verification process, and start connecting with buyers across India."
        },
        {
          question: "How do I rate and review suppliers?",
          answer: "After completing a transaction, you can rate suppliers on delivery time, product quality, communication, and overall experience. Your feedback helps maintain our quality standards."
        }
      ]
    },
    {
      category: "Pricing & Costs",
      faqs: [
        {
          question: "Are there any platform fees for buyers?",
          answer: "Basic platform access is free for buyers. We charge a small transaction fee only on successful orders, which is transparently displayed before checkout."
        },
        {
          question: "How does price optimization work?",
          answer: "Our AI analyzes market trends, seasonal patterns, supplier pricing, and demand forecasts to recommend optimal purchase timing and negotiate better rates on your behalf."
        },
        {
          question: "Can I get bulk pricing discounts?",
          answer: "Yes, many suppliers offer volume discounts. Our platform automatically calculates bulk pricing tiers, and our procurement specialists can negotiate additional discounts for large orders."
        }
      ]
    },
    {
      category: "Quality & Support",
      faqs: [
        {
          question: "What quality assurance measures are in place?",
          answer: "We implement multi-level quality checks including supplier certifications, material testing reports, third-party inspections, and customer feedback systems to ensure consistent quality."
        },
        {
          question: "What if I receive defective materials?",
          answer: "We have a comprehensive return and replacement policy. Report any quality issues within 48 hours of delivery, and we'll coordinate with the supplier for immediate resolution."
        },
        {
          question: "How can I contact customer support?",
          answer: "Our support team is available 24/7 through live chat, phone (+91 91362 42706), email (support@materialmatrix.ai), or through the help center on our platform."
        }
      ]
    }
  ];

  const allFAQs = faqCategories.flatMap((category, categoryIndex) =>
    category.faqs.map((faq, faqIndex) => ({
      ...faq,
      id: categoryIndex * 100 + faqIndex,
      category: category.category
    }))
  );

  const filteredFAQs = searchQuery
    ? allFAQs.filter(
        faq =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allFAQs;

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#f4f0ec]">
      <Navbar />

      <div className="container mt-10 mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-12 sm:pb-16">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-0 text-xs sm:text-sm">
            Support
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8">
            Find quick answers to common questions about MaterialMatrix platform and services
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 rounded-xl border-primary/20"
            />
          </div>
        </div>

        {/* FAQ Categories */}
        {!searchQuery ? (
          <div className="space-y-8 sm:space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">
                  {category.category}
                </h2>
                <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
                  {category.faqs.map((faq, faqIndex) => {
                    const faqId = categoryIndex * 100 + faqIndex;
                    return (
                      <Card key={faqId} className="border border-primary/10 shadow-lg">
                        <button
                          onClick={() => toggleFAQ(faqId)}
                          className="w-full p-4 sm:p-6 text-left flex items-center justify-between"
                        >
                          <h3 className="text-sm sm:text-base font-semibold pr-4">
                            {faq.question}
                          </h3>
                          {openFAQ === faqId ? (
                            <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                          )}
                        </button>
                        {openFAQ === faqId && (
                          <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Search Results */
          <div className="max-w-3xl mx-auto">
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
              Found {filteredFAQs.length} result{filteredFAQs.length !== 1 ? 's' : ''} for "{searchQuery}"
            </p>
            <div className="space-y-3 sm:space-y-4">
              {filteredFAQs.map((faq) => (
                <Card key={faq.id} className="border border-primary/10 shadow-lg">
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full p-4 sm:p-6 text-left flex items-center justify-between"
                  >
                    <div className="pr-4">
                      <Badge className="mb-2 bg-primary/10 text-primary border-0 text-xs">
                        {faq.category}
                      </Badge>
                      <h3 className="text-sm sm:text-base font-semibold">
                        {faq.question}
                      </h3>
                    </div>
                    {openFAQ === faq.id ? (
                      <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                    )}
                  </button>
                  {openFAQ === faq.id && (
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Contact Support */}
        <div className="mt-12 sm:mt-16 text-center">
          <Card className="max-w-2xl mx-auto p-6 sm:p-8 border border-primary/10 shadow-lg">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">
              Still have questions?
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-6">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold rounded-lg shadow-lg text-sm sm:text-base"
              >
                Contact Support
              </a>
              <a
                href="/help-center"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary/20 text-primary font-semibold rounded-lg text-sm sm:text-base"
              >
                Visit Help Center
              </a>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FAQs;