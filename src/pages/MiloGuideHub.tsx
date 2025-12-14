import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, Download, BookOpen, Users, ShoppingCart, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import { getApiUrl } from "@/lib/api"; // Import the API URL helper

const MiloGuideHub = () => {
  const [guides, setGuides] = useState<any>(null);
  const [selectedGuide, setSelectedGuide] = useState<string>("complete");
  const [guideContent, setGuideContent] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [userType, setUserType] = useState<"buyer" | "supplier">("buyer");

  const API_URL = getApiUrl(); // Use the API URL helper

  // Load complete guide
  useEffect(() => {
    const loadCompleteGuide = async () => {
      try {
        const response = await fetch(`${API_URL}/milo/guide/complete`);
        if (response.ok) {
          const data = await response.json();
          setGuides(data.data);
        }
      } catch (error) {
        console.error('Failed to load guide index:', error);
      }
    };

    loadCompleteGuide();
  }, []);

  // Load specific guide
  const loadGuide = async (guideType: string) => {
    setLoading(true);
    try {
      let url = `${API_URL}/milo/guide/${guideType}`;
      if (guideType === "buyer" || guideType === "supplier") {
        url = `${API_URL}/milo/guide/${guideType}`;
      }
      
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setGuideContent(data.data);
        setSelectedGuide(guideType);
      }
    } catch (error) {
      console.error('Failed to load guide:', error);
    } finally {
      setLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    loadGuide(userType);
  }, [userType]);

  const renderGuideContent = () => {
    if (!guideContent) return <div className="text-center py-8">Loading guide...</div>;

    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            {guideContent.title}
          </h1>
          <p className="text-gray-600 text-lg">{guideContent.description}</p>
        </div>

        {/* Sections */}
        {guideContent.sections && Object.entries(guideContent.sections).map(([key, section]: [string, any]) => (
          <Card key={key} className="border-2 border-purple-200">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50">
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-600" />
                {section.title}
              </CardTitle>
              {section.description && (
                <CardDescription className="text-base">{section.description}</CardDescription>
              )}
            </CardHeader>
            <CardContent className="pt-6">
              {/* Steps */}
              {section.steps && (
                <div className="space-y-4">
                  {section.steps.map((step: any, idx: number) => (
                    <div key={idx} className="border-l-4 border-blue-500 pl-4 py-2">
                      <h4 className="font-bold text-lg text-gray-900">
                        {step.step}
                        {step.title && ` - ${step.title}`}
                      </h4>
                      <p className="text-gray-700 mt-1">{step.description}</p>
                      {step.details && <p className="text-sm text-gray-600 mt-2">{step.details}</p>}
                      {step.example && <p className="text-sm bg-blue-50 p-2 rounded mt-2">📌 {step.example}</p>}
                      {step.includes && (
                        <ul className="list-disc list-inside text-sm text-gray-600 mt-2 ml-2">
                          {step.includes.map((item: string, i: number) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      )}
                      {step.documents && (
                        <ul className="list-disc list-inside text-sm text-gray-600 mt-2 ml-2">
                          {step.documents.map((doc: string, i: number) => (
                            <li key={i}>{doc}</li>
                          ))}
                        </ul>
                      )}
                      {step.fields && (
                        <ul className="list-disc list-inside text-sm text-gray-600 mt-2 ml-2">
                          {step.fields.map((field: string, i: number) => (
                            <li key={i}>{field}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Benefits */}
              {section.benefits && (
                <div className="bg-green-50 p-4 rounded-lg mt-4">
                  <h4 className="font-bold text-green-900 mb-2">✅ Benefits</h4>
                  <ul className="space-y-1">
                    {section.benefits.map((benefit: string, idx: number) => (
                      <li key={idx} className="text-green-800">{benefit}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tips */}
              {section.tips && (
                <div className="bg-yellow-50 p-4 rounded-lg mt-4">
                  <h4 className="font-bold text-yellow-900 mb-2">💡 Tips</h4>
                  <ul className="space-y-1">
                    {section.tips.map((tip: string, idx: number) => (
                      <li key={idx} className="text-yellow-800">{tip}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Best Practices */}
              {section.bestPractices && (
                <div className="bg-blue-50 p-4 rounded-lg mt-4">
                  <h4 className="font-bold text-blue-900 mb-2">⭐ Best Practices</h4>
                  <ul className="space-y-1">
                    {section.bestPractices.map((practice: string, idx: number) => (
                      <li key={idx} className="text-blue-800">{practice}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Strategy */}
              {section.strategy && (
                <div className="bg-purple-50 p-4 rounded-lg mt-4">
                  <h4 className="font-bold text-purple-900 mb-2">🎯 Strategy</h4>
                  <ul className="space-y-1">
                    {section.strategy.map((s: string, idx: number) => (
                      <li key={idx} className="text-purple-800">{s}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Feature Lists */}
              {section.features && Array.isArray(section.features) && section.features[0]?.name && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                  {section.features.map((feature: any, idx: number) => (
                    <div key={idx} className="bg-gray-50 p-3 rounded">
                      <h4 className="font-bold text-gray-900">{feature.name}</h4>
                      <p className="text-sm text-gray-700">{feature.description}</p>
                      {feature.benefit && <p className="text-xs text-blue-600 mt-1">💡 {feature.benefit}</p>}
                    </div>
                  ))}
                </div>
              )}

              {/* Checklist */}
              {section.checklist && (
                <div className="space-y-3 mt-4">
                  {section.checklist.map((check: any, idx: number) => (
                    <div key={idx} className="bg-gray-50 p-3 rounded">
                      <h4 className="font-bold text-gray-900">{check.item}</h4>
                      {check.details && (
                        <ul className="list-disc list-inside text-sm text-gray-700 mt-2 ml-2">
                          {check.details.map((detail: string, i: number) => (
                            <li key={i}>{detail}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Other content */}
              {section.list && (
                <ul className="space-y-2">
                  {section.list.map((item: any, idx: number) => (
                    <li key={idx} className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">{item.name || item.title || item}</p>
                        {item.description && <p className="text-sm text-gray-700">{item.description}</p>}
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              {section.info && (
                <div className="bg-blue-50 p-4 rounded-lg">
                  {typeof section.info === 'string' ? (
                    <p className="text-gray-800">{section.info}</p>
                  ) : (
                    <ul className="space-y-2">
                      {section.info.map((item: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-800">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">🤖 Milo Guide Hub</h1>
          <p className="text-xl text-blue-100">Your complete guide to succeeding on RitzYard</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* User Type Selection */}
        <div className="mb-8 flex gap-4">
          <Button 
            onClick={() => setUserType("buyer")}
            className={`px-6 py-3 rounded-lg font-semibold flex items-center gap-2 ${
              userType === "buyer" 
                ? "bg-blue-600 text-white" 
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            <ShoppingCart className="w-5 h-5" />
            I'm a Buyer
          </Button>
          <Button 
            onClick={() => setUserType("supplier")}
            className={`px-6 py-3 rounded-lg font-semibold flex items-center gap-2 ${
              userType === "supplier" 
                ? "bg-purple-600 text-white" 
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            <Zap className="w-5 h-5" />
            I'm a Supplier
          </Button>
        </div>

        {/* Quick Navigation */}
        {guides && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {guides.guides?.map((guide: any) => (
              <Card 
                key={guide.id}
                className="cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => loadGuide(guide.id.replace('{category}', 'cement'))}
              >
                <CardHeader>
                  <CardTitle className="text-lg">{guide.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Read Guide <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Guide Content */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block">
              <div className="animate-spin">⏳</div>
              <p className="text-gray-600 mt-2">Loading guide...</p>
            </div>
          </div>
        ) : (
          renderGuideContent()
        )}
      </div>
    </div>
  );
};

export default MiloGuideHub;
