import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Mic, MicOff, Send, Volume2, VolumeX, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { getApiUrl } from "@/lib/api"; // Import the API URL helper
import { getKnowledgeResponse, searchKnowledge } from "@/lib/miloKnowledgeBase"; // Import knowledge base

interface Message {
  role: "user" | "milo";
  content: string;
  timestamp: Date;
}

interface MiloContextData {
  hotProducts?: Record<string, unknown>[];
  marketInsights?: Record<string, unknown>;
  suppliers?: Record<string, unknown>[];
  trainingData?: Record<string, unknown>;
}

interface MarketAnalysis {
  hotProducts: string[];
  priceTrends: Record<string, {trend: string, change: number}>;
  supplierInsights: {count: number, topSuppliers: string[], avgRating: number};
  demandMetrics: {highDemand: string[], mediumDemand: string[], lowDemand: string[]};
}

interface NotificationData {
  type: 'market_alert' | 'price_drop' | 'supplier_update';
  title: string;
  message: string;
  timestamp: Date;
}

interface ConversationContext {
  userType: 'buyer' | 'supplier' | 'unknown';
  materialOfInterest: string[];
  recentQueries: string[];
  sentiment: 'positive' | 'neutral' | 'negative';
}

interface SpeechRecognitionEvent {
  results: {
    [index: number]: {
      [index: number]: {
        transcript: string;
      };
    };
  };
}

interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start: () => void;
  stop: () => void;
  onresult: (event: SpeechRecognitionEvent) => void;
  onerror: () => void;
  onend: () => void;
}

declare global {
  interface Window {
    SpeechRecognition: new () => SpeechRecognition;
    webkitSpeechRecognition: new () => SpeechRecognition;
  }
}

const MiloAI = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [language, setLanguage] = useState<"en-IN" | "hi-IN">("en-IN");
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [contextData, setContextData] = useState<MiloContextData>({})
  const [hasGreeted, setHasGreeted] = useState(false);
  const [marketAnalysis, setMarketAnalysis] = useState<MarketAnalysis | null>(null);
  const [notifications, setNotifications] = useState<NotificationData[]>([]);
  const [conversationContext, setConversationContext] = useState<ConversationContext>({
    userType: 'unknown',
    materialOfInterest: [],
    recentQueries: [],
    sentiment: 'neutral'
  });
  const [responseCache, setResponseCache] = useState<Map<string, string[]>>(new Map());
  const [lastQueryHash, setLastQueryHash] = useState<string>("");
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const synthesisRef = useRef<SpeechSynthesisUtterance | null>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Initialize Speech Recognition
  useEffect(() => {
    if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
      const SpeechRecognitionConstructor = window.webkitSpeechRecognition || window.SpeechRecognition;
      recognitionRef.current = new SpeechRecognitionConstructor();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;

      recognitionRef.current.onresult = (event: SpeechRecognitionEvent) => {
        const transcript = event.results[0][0].transcript;
        setInputText(transcript);
        setIsListening(false);
      };

      recognitionRef.current.onerror = () => {
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  // Load training data on mount
  useEffect(() => {
    const loadMiloTrainingData = async () => {
      try {
        const API_URL = getApiUrl(); // Use the API URL helper
        console.log('📡 Loading Milo training data from:', API_URL);
        const response = await fetch(`${API_URL}/ai/milo/training-data`, {
          mode: 'cors',
          credentials: 'omit',
        });
        if (response.ok) {
          const data = await response.json();
          if (data.success) {
            setContextData(data.data);
            console.log('✅ Milo training data loaded successfully');
          }
        }
      } catch (error) {
        console.log('⚠️ Training data fetch failed, using fallback responses');
      }
    };
    
    loadMiloTrainingData();
  }, []);

  // Greeting on mount - with language switching support AND voice
  useEffect(() => {
    if (!hasGreeted) {
      setTimeout(() => {
        const greetingText = language === "en-IN" 
          ? "Hello! I'm Milo, your smart procurement assistant at ritzyard. How may I help you today?"
          : "नमस्ते! मैं मिलो हूं, ritzyard में आपका स्मार्ट खरीद सहायक। मैं आज आपकी कैसे मदद कर सकता हूं?";
        
        const greeting: Message = {
          role: "milo",
          content: greetingText,
          timestamp: new Date(),
        };
        setMessages([greeting]);
        
        // Speak greeting with slight delay to ensure voice is ready
        setTimeout(() => {
          if (soundEnabled) {
            speakText(greetingText, language);
          }
        }, 500);
        
        setHasGreeted(true);
      }, 1000);
    }
  }, [hasGreeted, language, soundEnabled]);

  // Handle language switching - speak confirmation
  useEffect(() => {
    if (hasGreeted) {
      // Stop any current speech when switching language
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      
      // Announce language change
      const langChangeText = language === "en-IN"
        ? "Switched to English. How can I help you?"
        : "हिंदी में बदल गया। मैं आपकी कैसे मदद कर सकता हूं?";
      
      setTimeout(() => {
        speakText(langChangeText, language);
      }, 300);
    }
  }, [language]);

  // Toggle voice listening
  const toggleListening = () => {
    if (!recognitionRef.current) {
      alert("Speech recognition is not supported in your browser.");
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      recognitionRef.current.lang = language;
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  // Speak text using Web Speech API with MALE voice ONLY
  const speakText = (text: string, lang: string) => {
    if (!soundEnabled) return;
    
    // Cancel any ongoing speech to prevent looping
    window.speechSynthesis.cancel();
    
    synthesisRef.current = new SpeechSynthesisUtterance(text);
    synthesisRef.current.lang = lang;
    synthesisRef.current.rate = 0.95;
    synthesisRef.current.pitch = 0.6; // Lower pitch for male voice
    synthesisRef.current.volume = 1.0;
    
    // FORCE male voice selection - enhanced for Hindi support
    const setMaleVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      const langCode = lang.split("-")[0]; // 'en' or 'hi'
      
      console.log('Available voices:', voices.map(v => `${v.name} (${v.lang})`));
      
      // Priority 1: Find explicit male voice for the language
      let maleVoice = voices.find(voice => {
        const nameLower = voice.name.toLowerCase();
        const langMatch = voice.lang.toLowerCase().startsWith(langCode);
        
        // Male voice indicators (expanded for Hindi)
        const isMale = nameLower.includes('male') || 
                       nameLower.includes('man') ||
                       nameLower.includes('rishi') || // Hindi male
                       nameLower.includes('david') ||
                       nameLower.includes('james') ||
                       nameLower.includes('daniel') ||
                       nameLower.includes('tom') ||
                       nameLower.includes('alex') ||
                       nameLower.includes('google हिन्दी') || // Google Hindi (usually male)
                       (langCode === 'hi' && nameLower.includes('hindi') && !nameLower.includes('female'));
        
        return langMatch && isMale;
      });
      
      // Priority 2: Exclude female voices
      if (!maleVoice) {
        maleVoice = voices.find(voice => {
          const nameLower = voice.name.toLowerCase();
          const langMatch = voice.lang.toLowerCase().startsWith(langCode);
          
          const isFemale = nameLower.includes('female') || 
                          nameLower.includes('woman') ||
                          nameLower.includes('lekha') || // Hindi female
                          nameLower.includes('samantha') ||
                          nameLower.includes('victoria') ||
                          nameLower.includes('kate') ||
                          nameLower.includes('siri') ||
                          nameLower.includes('zira');
          
          return langMatch && !isFemale;
        });
      }
      
      // Priority 3: Any voice matching language
      if (!maleVoice) {
        maleVoice = voices.find(v => v.lang.toLowerCase().startsWith(langCode));
      }
      
      if (maleVoice) {
        synthesisRef.current!.voice = maleVoice;
        console.log('✅ Selected voice:', maleVoice.name, '(', maleVoice.lang, ')');
      } else {
        console.warn('⚠️ No suitable voice found for', lang);
      }
    };

    // Handle voice loading with proper initialization
    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      setMaleVoice();
    } else {
      window.speechSynthesis.onvoiceschanged = () => {
        setMaleVoice();
      };
    }

    synthesisRef.current.onstart = () => setIsSpeaking(true);
    synthesisRef.current.onend = () => {
      setIsSpeaking(false);
      // Ensure speech is fully stopped
      window.speechSynthesis.cancel();
    };
    synthesisRef.current.onerror = () => {
      setIsSpeaking(false);
      window.speechSynthesis.cancel();
    };
    
    // Small delay to ensure voice is set
    setTimeout(() => {
      window.speechSynthesis.speak(synthesisRef.current!);
    }, 100);
  };

  // Smart hash generator for detecting similar queries
  const generateQueryHash = (query: string): string => {
    // Normalize query: lowercase, remove punctuation, trim
    const normalized = query.toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .trim()
      .split(/\s+/)
      .sort() // Sort words to catch reordered questions
      .join(' ');
    return normalized;
  };

  // External AI API for random questions
  const getExternalAIResponse = async (query: string): Promise<string | null> => {
    try {
      // Use DuckDuckGo Instant Answer API (free, no API key needed)
      const searchQuery = encodeURIComponent(query);
      const response = await fetch(`https://api.duckduckgo.com/?q=${searchQuery}&format=json&no_html=1&skip_disambig=1`);
      
      if (response.ok) {
        const data = await response.json();
        
        // Check for abstract answer
        if (data.AbstractText && data.AbstractText.length > 20) {
          return data.AbstractText;
        }
        
        // Check for answer
        if (data.Answer && data.Answer.length > 5) {
          return data.Answer;
        }
        
        // Check for definition
        if (data.Definition && data.Definition.length > 10) {
          return data.Definition;
        }
        
        // Check for related topics
        if (data.RelatedTopics && data.RelatedTopics.length > 0) {
          const topic = data.RelatedTopics[0];
          if (topic.Text && topic.Text.length > 20) {
            return topic.Text;
          }
        }
      }
      return null;
    } catch (error) {
      console.log('External AI fallback failed:', error);
      return null;
    }
  };

  // Get AI response - Smart intelligent fallback system with Knowledge Base
  const getMiloResponse = async (userMessage: string): Promise<string> => {
    // Generate hash for this query
    const queryHash = generateQueryHash(userMessage);
    
    console.log('🚀 ritzyard AI (Milo) processing:', userMessage);
    
    setLastQueryHash(queryHash);
    
    const lowerMessage = userMessage.toLowerCase();
    
    // STEP 1: Check Knowledge Base first for comprehensive answers
    const knowledgeResult = getKnowledgeResponse(userMessage);
    const knowledgeMatch = searchKnowledge(userMessage);
    
    if (knowledgeMatch) {
      console.log('✅ Knowledge base match found:', knowledgeMatch.category);
      let response = knowledgeResult.response;
      if (knowledgeResult.followUp) {
        response += "\n\n" + knowledgeResult.followUp;
      }
      return response;
    }
    
    // STEP 2: Handle common conversational patterns
    
    // Who/What is Milo
    if (lowerMessage.includes('who are you') || lowerMessage.includes('what are you') || lowerMessage.includes('your name') || lowerMessage.includes('introduce yourself')) {
      return "I'm Milo, your AI-powered procurement assistant at ritzyard! 🤖 I can help you with:\n\n• Real-time material pricing (cement, steel, TMT, bricks, sand)\n• Supplier recommendations from 500+ verified suppliers\n• Creating instant RFQs\n• Delivery tracking and logistics\n• Market intelligence and trends\n• Construction tips and advice\n• Material specifications and quality standards\n\nI'm available 24/7 in English and Hindi. What can I help you with today?";
    }
    
    // Greetings
    if (/^(hi|hello|hey|good morning|good afternoon|good evening|namaste|हाय|हेलो|नमस्ते)[!.,]?$/i.test(userMessage.trim())) {
      return "Hello! 👋 I'm Milo, your AI procurement expert at ritzyard. I can help you find the best construction materials at competitive prices. What are you looking for today? You can ask me about:\n\n• Material prices (cement, steel, bricks, sand)\n• Supplier recommendations\n• Quotes and RFQs\n• Delivery information\n• Or anything else!";
    }
    
    // Thank you responses
    if (lowerMessage.includes('thank') || lowerMessage.includes('thanks') || lowerMessage.includes('धन्यवाद') || lowerMessage.includes('शुक्रिया')) {
      return "You're welcome! 😊 I'm always happy to help. Feel free to ask me anything about construction materials, pricing, suppliers, or any other questions. I'm here 24/7 to assist you with your procurement needs!";
    }
    
    // How are you
    if (lowerMessage.includes('how are you') || lowerMessage.includes('how do you do') || lowerMessage.includes('आप कैसे हैं')) {
      return "I'm doing great, thank you for asking! 😊 As an AI assistant, I'm always ready to help. My knowledge is continuously updated with the latest construction material prices and market trends. How can I assist you with your procurement needs today?";
    }
    
    // Goodbye
    if (lowerMessage.includes('bye') || lowerMessage.includes('goodbye') || lowerMessage.includes('see you') || lowerMessage.includes('अलविदा')) {
      return "Goodbye! 👋 Thank you for chatting with me. Remember, I'm available 24/7 whenever you need help with construction materials or procurement. Visit ritzyard.com anytime for the best deals. Take care and happy building!";
    }
    
    // STEP 3: Construction material queries (detailed responses)
    
    // Cement queries
    if (lowerMessage.includes('cement') || lowerMessage.includes('सीमेंट')) {
      return "🏗️ **Cement Types & Prices:**\n\n• **OPC 43 Grade:** ₹340-380/bag - General construction\n• **OPC 53 Grade:** ₹360-420/bag - High strength work\n• **PPC (Pozzolana):** ₹320-400/bag - Plastering, waterproofing\n• **PSC (Slag):** ₹330-410/bag - Mass concreting\n• **White Cement:** ₹550-700/bag - Decorative work\n\n**Top Brands:** UltraTech, ACC, Ambuja, JK Cement, Shree, Dalmia\n\n💡 **Bulk discount:** 5-12% off on 100+ bags\n\nWould you like a quote for a specific type?";
    }
    
    // Steel/TMT queries
    if (lowerMessage.includes('steel') || lowerMessage.includes('tmt') || lowerMessage.includes('rebar') || lowerMessage.includes('स्टील') || lowerMessage.includes('सरिया')) {
      return "🔩 **TMT Steel Bars - Current Prices:**\n\n**By Grade:**\n• Fe 415: ₹48-54/kg\n• Fe 500: ₹50-56/kg (Most Popular)\n• Fe 500D: ₹52-58/kg (Earthquake Resistant)\n• Fe 550: ₹54-60/kg\n\n**By Size (Fe 500):**\n• 8mm: ₹52-58/kg\n• 10mm: ₹51-57/kg\n• 12mm: ₹50-56/kg\n• 16mm: ₹49-55/kg\n\n**Top Brands:** Tata Tiscon, JSW Neosteel, SAIL, Vizag Steel, Kamdhenu\n\n💡 **Bulk discount:** 2-5% off on 5+ tons\n\nWhat grade and size do you need?";
    }
    
    // Brick queries
    if (lowerMessage.includes('brick') || lowerMessage.includes('block') || lowerMessage.includes('ईंट')) {
      return "🧱 **Bricks & Blocks - Prices:**\n\n• **Red Clay Bricks:** ₹6-9/piece - Traditional, good insulation\n• **Fly Ash Bricks:** ₹3.5-5.5/piece - Lightweight, eco-friendly\n• **AAC Blocks:** ₹45-70/block - Best for modern construction\n• **Concrete Blocks:** ₹25-45/block - Strong, durable\n• **Hollow Blocks:** ₹30-50/block - Thermal insulation\n\n**Min Order:** 5000 pieces\n**Free Delivery:** On 10,000+ orders\n\n💡 AAC blocks offer 50% faster construction!\n\nWhich type would you prefer?";
    }
    
    // Sand queries
    if (lowerMessage.includes('sand') || lowerMessage.includes('m sand') || lowerMessage.includes('रेत')) {
      return "🏖️ **Sand Types & Prices:**\n\n• **River Sand:** ₹45-65/cft - Natural, limited availability\n• **M Sand (Zone II):** ₹35-45/cft - For concrete\n• **M Sand (Zone III):** ₹40-50/cft - For plastering\n• **Pit Sand:** ₹30-45/cft - For foundations\n\n💡 **Why M Sand?**\n- Consistent quality\n- Zero impurities\n- Eco-friendly\n- Better availability\n\nM Sand is increasingly preferred due to river sand restrictions.\n\nHow much quantity do you need?";
    }
    
    // Price queries
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('rate') || lowerMessage.includes('कीमत') || lowerMessage.includes('मूल्य')) {
      return "💰 I can provide real-time pricing for all construction materials! Here's a quick overview:\n\n• **Cement:** ₹320-420/bag\n• **TMT Steel:** ₹48-60/kg\n• **Bricks:** ₹4-9/piece\n• **Sand:** ₹35-65/cft\n• **Aggregates:** ₹50-80/cft\n• **Paint:** ₹250-800/litre\n• **Tiles:** ₹25-200/sq.ft\n• **Plywood:** ₹45-150/sq.ft\n\nWhich material do you need specific pricing for? I'll get you the latest rates!";
    }
    
    // Supplier queries
    if (lowerMessage.includes('supplier') || lowerMessage.includes('vendor') || lowerMessage.includes('आपूर्तिकर्ता')) {
      return "🏢 **ritzyard Supplier Network:**\n\n✅ 500+ Verified Suppliers\n✅ 28 Indian States Coverage\n✅ 98% On-time Delivery\n✅ 4.6+ Average Rating\n\n**Verification Process:**\n• GST verification\n• Quality certifications (ISO, BIS)\n• Business documentation\n• Track record assessment\n\n**Top Partners:**\nTata Steel, UltraTech, ACC, JSW, Ambuja\n\nWhat material supplier are you looking for?";
    }
    
    // RFQ/Quote queries
    if (lowerMessage.includes('quote') || lowerMessage.includes('quotation') || lowerMessage.includes('rfq') || lowerMessage.includes('कोटेशन')) {
      return "📋 **Get Instant Quotes!**\n\nI can create an RFQ for you right now! Just tell me:\n\n1️⃣ **Material Type:** (cement, steel, bricks, etc.)\n2️⃣ **Quantity:** (with unit - bags, kg, pieces)\n3️⃣ **Location:** (city/state for delivery)\n4️⃣ **Timeline:** (when do you need it?)\n\n✨ **Benefits:**\n• Get 3-5 competitive quotes\n• Within 2 hours response\n• Best prices guaranteed\n\nJust provide the details and I'll handle the rest!";
    }
    
    // Delivery queries
    if (lowerMessage.includes('delivery') || lowerMessage.includes('shipping') || lowerMessage.includes('डिलीवरी')) {
      return "🚚 **ritzyard Delivery Services:**\n\n**Timeline:**\n• Standard: 3-7 business days\n• Express (Metros): 24-48 hours\n\n**Coverage:** Pan-India (28 states)\n\n**Features:**\n✅ Real-time tracking\n✅ Insurance coverage\n✅ Quality inspection at delivery\n✅ FREE delivery on orders ₹50,000+\n\n**Payment:** Cash on Delivery available under ₹50,000\n\nWhere do you need delivery?";
    }
    
    // STEP 4: General knowledge & miscellaneous
    
    // Math/calculations
    if (lowerMessage.includes('calculate') || lowerMessage.includes('estimation') || lowerMessage.includes('how much') || lowerMessage.includes('quantity')) {
      return "🧮 **Material Calculator:**\n\nI can help estimate material quantities! Common formulas:\n\n• **Cement:** 1 bag = 50kg, covers ~1.25 sq.m plaster\n• **Steel:** 1% of concrete for slabs, 2.5% for columns\n• **Bricks:** ~500 bricks per 100 sq.ft wall\n• **Sand:** 1 cft per 3 bags cement\n• **Paint:** 1L covers ~100-120 sq.ft (2 coats)\n\nTell me your project dimensions (length × width × height) and what you're building, I'll calculate exact quantities!";
    }
    
    // Weather/climate related
    if (lowerMessage.includes('weather') || lowerMessage.includes('monsoon') || lowerMessage.includes('rain')) {
      return "🌧️ **Weather & Construction Tips:**\n\nWeather affects material selection:\n\n• **Rainy Season:** Use quick-setting cement, waterproof additives\n• **Hot Climate:** PPC cement (less heat generation)\n• **Coastal Areas:** SS 316 steel, marine plywood\n• **Cold Regions:** Frost-resistant concrete\n\n**Storage Tips:**\n• Keep cement off ground, covered\n• Store steel under shed\n• Use materials within 3 months\n\nWhat's your location? I can suggest suitable materials.";
    }
    
    // STEP 5: Try external AI for general/random questions
    console.log('🔍 Checking external AI for general knowledge...');
    const externalAnswer = await getExternalAIResponse(userMessage);
    
    if (externalAnswer) {
      console.log('✅ External AI response found');
      // Brand the response as from RitzYard/Milo
      return `Great question! Here's what I found:\n\n${externalAnswer}\n\n---\n💡 *As your ritzyard AI assistant, I can also help with construction materials, pricing, and procurement. Feel free to ask!*`;
    }
    
    // STEP 6: Smart contextual fallback responses for random questions
    const randomResponses = [
      `That's an interesting question! 🤔 While I'm primarily a construction materials expert at ritzyard, I love learning new things!

Could you tell me more about what you're curious about? I might be able to help or point you in the right direction.

**Meanwhile, I can definitely help with:**
• Material prices & specifications
• Supplier recommendations
• RFQ creation
• Construction advice`,
      
      `Interesting! 😊 As Milo from ritzyard, my specialty is construction and procurement, but I enjoy all kinds of questions!

If you have any construction-related queries - materials, pricing, suppliers, or building advice - I'm your expert!

**Quick tip:** Try asking me about cement, steel, bricks, or any building material!`,
      
      `Good question! 🌟 I'm Milo, ritzyard's AI assistant focused on construction materials.

While that's outside my main expertise, I'm always happy to chat! For the best answers on that topic, you might want to search online.

**But for construction needs, I'm here 24/7:**
• Real-time material pricing
• 500+ verified suppliers
• Instant quotes & RFQs`,
      
      `That's a thoughtful question! 💭 I'm specialized in construction and procurement at ritzyard, so that's a bit outside my wheelhouse.\n\nHowever, I'd love to help you with:\n• Material specifications\n• Best prices for cement, steel, bricks\n• Supplier comparisons\n• Delivery estimates\n\nWhat construction material can I assist you with?`
    ];
    
    // Return a random response to keep conversations fresh
    return randomResponses[Math.floor(Math.random() * randomResponses.length)];
  };

  // ENHANCEMENT 1: Analyze market trends and generate recommendations
  const analyzeMarketTrends = (): MarketAnalysis => {
    const hotProducts = (contextData.hotProducts?.slice(0, 5).map((p: Record<string, unknown>) => String(p.category)) || [
      'Cement', 'Steel/TMT', 'Bricks'
    ]) as string[];
    
    const priceTrends: Record<string, {trend: string, change: number}> = {
      'Cement': { trend: 'Stable', change: 0 },
      'Steel': { trend: 'Declining', change: -2.5 },
      'TMT Bars': { trend: 'Stable', change: 0 },
      'Bricks': { trend: 'Rising', change: 1.2 }
    };
    
    const supplierInsights = {
      count: (contextData.marketInsights?.suppliersCount as number) || 500,
      topSuppliers: ['Tata Steel', 'ACC Cement', 'UltraTech', 'JSW Steel', 'Ambuja'],
      avgRating: 4.6
    };
    
    const demandMetrics = {
      highDemand: ['Cement', 'Steel/TMT', 'Bricks'],
      mediumDemand: ['Paint', 'Electrical'],
      lowDemand: ['Specialty Materials']
    };
    
    return {
      hotProducts,
      priceTrends,
      supplierInsights,
      demandMetrics
    };
  };

  // ENHANCEMENT 2: Get better supplier recommendations based on context
  const getSupplierRecommendations = (material: string, quantity: number, location: string): string => {
    const recommendations: Record<string, string> = {
      'Cement': 'For cement in bulk, I recommend UltraTech or ACC. Both offer competitive pricing (₹340-420/bag), certified quality, and deliver within 3-5 days pan-India. Bulk discounts available for 100+ bags.',
      'Steel': 'Top steel suppliers: Tata Tiscon and JSW Neosteel. Current rates: Fe 415 ₹52-58/kg. For bulk orders (5+ tons), expect 2-5% discount. Both brands guarantee quality certifications.',
      'TMT Bars': 'Best TMT suppliers: Tata Tiscon, JSW, SAIL. Grades Fe 500/550 available. Competitive pricing: ₹50-57/kg depending on grade. Priority delivery in metros (24-48 hours).',
      'Bricks': 'Local suppliers recommended for bricks. Red clay (₹6-9/pc), Fly Ash (₹3.5-5.5/pc), AAC Blocks (₹45-70/block). Min order 5000 pcs for free delivery.'
    };
    
    return recommendations[material] || 
      `For ${material}, I recommend requesting quotes from 3-5 suppliers to compare pricing and delivery terms. Our platform has 500+ verified suppliers.`;
  };

  // ENHANCEMENT 3: Send real-time notifications
  const sendNotification = (type: NotificationData['type'], title: string, message: string) => {
    const notification: NotificationData = {
      type,
      title,
      message,
      timestamp: new Date()
    };
    setNotifications(prev => [notification, ...prev].slice(0, 5)); // Keep last 5
  };

  // ENHANCEMENT 4: Analyze user conversation for better context
  const updateConversationContext = (message: string) => {
    const lowerMessage = message.toLowerCase();
    
    // Detect user type
    if (lowerMessage.includes('sell') || lowerMessage.includes('supplier')) {
      setConversationContext(prev => ({...prev, userType: 'supplier'}));
    } else if (lowerMessage.includes('buy') || lowerMessage.includes('need')) {
      setConversationContext(prev => ({...prev, userType: 'buyer'}));
    }
    
    // Track materials of interest
    const materials = ['cement', 'steel', 'tmt', 'brick', 'sand', 'paint', 'electrical'];
    const mentioned = materials.filter(m => lowerMessage.includes(m));
    if (mentioned.length > 0) {
      setConversationContext(prev => ({
        ...prev,
        materialOfInterest: Array.from(new Set([...prev.materialOfInterest, ...mentioned]))
      }));
    }
    
    // Track recent queries
    setConversationContext(prev => ({
      ...prev,
      recentQueries: [message, ...prev.recentQueries].slice(0, 5)
    }));
  };

  // ENHANCEMENT 5: Generate more conversational follow-up questions
  const generateFollowUpQuestion = (topic: string): string => {
    const followUps: Record<string, string[]> = {
      'cement': [
        'Would you like to know about different cement grades and their uses?',
        'Are you interested in bulk pricing for large quantities?',
        'Do you need delivery to a specific location?'
      ],
      'steel': [
        'Which steel grade interests you most - Fe 415, Fe 500, or Fe 550?',
        'What quantity are you planning to order?',
        'Do you prefer any specific steel supplier/brand?'
      ],
      'supplier': [
        'Would you like me to compare quotes from multiple suppliers?',
        'Are you looking for suppliers in a specific region?',
        'Do you have any special requirements or certifications needed?'
      ]
    };
    
    const questions = followUps[topic] || [
      'Would you like more details about this?',
      'Can you provide any specific requirements?',
      'Would you like to compare options?'
    ];
    
    return questions[Math.floor(Math.random() * questions.length)];
  };

  // Send message
  const sendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: inputText,
      timestamp: new Date(),
    };

    // Update conversation context with this message
    updateConversationContext(inputText);

    setMessages((prev) => [...prev, userMessage]);
    const currentInput = inputText;
    setInputText("");
    setIsProcessing(true);

    // Get AI response
    try {
      const miloResponseText = await getMiloResponse(currentInput);
      
      setTimeout(() => {
        const miloMessage: Message = {
          role: "milo",
          content: miloResponseText,
          timestamp: new Date(),
        };
        
        setMessages((prev) => [...prev, miloMessage]);
        setIsProcessing(false);
        
        // Speak response
        speakText(miloResponseText, language);
      }, 800);
    } catch (error) {
      setIsProcessing(false);
      const errorMessage: Message = {
        role: "milo",
        content: "I apologize, I'm having trouble processing that. Please try again or rephrase your question.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  // Handle Enter key
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Reset conversation
  const resetConversation = () => {
    setMessages([]);
    setHasGreeted(false);
    window.speechSynthesis.cancel();
  };

  // Quick material actions
  const quickActions = [
    { label: "TMT Bars", icon: "🔩" },
    { label: "Cement", icon: "🏗️" },
    { label: "Bricks", icon: "🧱" },
  ];

  const handleQuickAction = (material: string) => {
    setInputText(`Tell me about ${material}`);
  };

  return (
    <>
      <SEOHead
        title="Milo AI - Voice Assistant for Construction Materials | AI Chatbot - ritzyard"
        description="Meet Milo - India's first AI voice assistant for construction materials. Get instant answers about material prices, specifications, supplier recommendations & procurement guidance. Voice & text support."
        keywords="Milo AI assistant, construction AI chatbot India, voice assistant building materials, AI material pricing, construction chatbot, smart procurement assistant, material specification AI, supplier recommendation AI, construction voice search, AI procurement guide, instant material answers, construction industry AI, building materials AI assistant"
        canonicalUrl="https://ritzyard.com/milo"
      />
    <div className="min-h-screen bg-gradient-to-br from-[#faf8f6] via-background to-[#f5f1ed] flex flex-col">
      <Navbar />
      <ScrollToTop />
      
      {/* Main Content */}
      <div className="flex-1 container mx-auto px-4 py-6 md:py-8 mt-16 md:mt-20">
        <div className="max-w-5xl mx-auto">
          
          {/* Chat Window */}
          <div className="bg-white dark:bg-card border-2 border-primary/20 rounded-3xl shadow-2xl overflow-hidden flex flex-col" style={{ minHeight: '600px', height: 'calc(100vh - 200px)' }}>
            
            {/* Header */}
            <div className="bg-gradient-to-r from-primary via-primary-glow to-secondary p-4 md:p-5 border-b border-primary/30">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center shadow-xl transition-all duration-300 ${
                      isSpeaking ? 'scale-110 ring-4 ring-white/50' : ''
                    }`}>
                      <span className="text-2xl md:text-3xl">🤖</span>
                    </div>
                    {isSpeaking && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse border-2 border-white" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg md:text-xl">{language === "en-IN" ? "Milo AI Assistant" : "मिलो एआई सहायक"}</h3>
                    <p className="text-white/80 text-xs md:text-sm">{language === "en-IN" ? "ritzyard Procurement Expert " : "ritzyard खरीद विशेषज्ञ "}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  {/* Language Switcher */}
                  <div className="flex bg-white/20 backdrop-blur-sm rounded-full p-1 gap-1">
                    <button
                      onClick={() => setLanguage("en-IN")}
                      className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
                        language === "en-IN" 
                          ? 'bg-white text-primary shadow-lg' 
                          : 'text-white hover:bg-white/10'
                      }`}
                    >
                      English
                    </button>
                    <button
                      onClick={() => setLanguage("hi-IN")}
                      className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
                        language === "hi-IN" 
                          ? 'bg-white text-primary shadow-lg' 
                          : 'text-white hover:bg-white/10'
                      }`}
                    >
                      हिंदी
                    </button>
                  </div>
                  
                  <button
                    onClick={() => setSoundEnabled(!soundEnabled)}
                    className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  >
                    {soundEnabled ? (
                      <Volume2 className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    ) : (
                      <VolumeX className="w-4 h-4 md:w-5 md:h-5 text-white/50" />
                    )}
                  </button>
                </div>
              </div>
              
              {/* Status Bar */}
              <div className="flex items-center gap-2 md:gap-3 mt-3 md:mt-4 flex-wrap">
                <Badge className="bg-white/20 border-white/40 text-white text-xs">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                  {isSpeaking 
                    ? (language === "en-IN" ? '🔊 Milo is speaking...' : '🔊 मिलो बोल रहा है...') 
                    : isProcessing 
                    ? (language === "en-IN" ? '💭 Thinking...' : '💭 सोच रहा है...') 
                    : (language === "en-IN" ? '✨ Ready to help' : '✨ मदद के लिए तैयार')
                  }
                </Badge>
                {soundEnabled && (
                  <Badge className="bg-white/20 border-white/40 text-white text-xs">
                    <Volume2 className="w-3 h-3 mr-1" />
                    {language === "en-IN" ? "Voice Active" : "आवाज़ सक्रिय"}
                  </Badge>
                )}
              </div>
            </div>

            {/* Messages */}
            <div 
              ref={chatContainerRef}
              className="flex-1 overflow-y-auto p-3 md:p-4 lg:p-6 space-y-3 md:space-y-4 bg-gradient-to-br from-background/50 to-muted/30"
              style={{ maxHeight: 'calc(100vh - 400px)' }}
            >
              {messages.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center px-4">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 md:mb-6 animate-float">
                    <span className="text-4xl md:text-5xl">🤖</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gradient mb-2 md:mb-3">
                    {language === "en-IN" ? "Welcome to Milo AI" : "मिलो एआई में आपका स्वागत है"}
                  </h3>
                  <p className="text-muted-foreground mb-4 md:mb-6 max-w-md text-sm md:text-base">
                    {language === "en-IN" 
                      ? "Your intelligent procurement assistant. Ask me anything about materials, pricing, or suppliers!" 
                      : "आपका बुद्धिमान खरीद सहायक। मुझसे सामग्री, मूल्य या आपूर्तिकर्ताओं के बारे में कुछ भी पूछें!"}
                  </p>
                  
                  {/* Quick Actions */}
                  <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
                    {quickActions.map((action, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickAction(action.label)}
                        className="px-3 md:px-4 py-2 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/30 rounded-xl hover:from-primary/20 hover:to-secondary/20 hover:border-primary/50 transition-all duration-200 flex items-center gap-2 text-xs md:text-sm font-medium text-foreground shadow-md hover:shadow-lg"
                      >
                        <span className="text-lg md:text-xl">{action.icon}</span>
                        {action.label}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} animate-slide-up`}
                  >
                    <div className={`max-w-[85%] md:max-w-[75%] ${message.role === "user" ? "" : "flex items-start gap-2"}`}>
                      {message.role === "milo" && (
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0 shadow-lg">
                          <span className="text-lg">🤖</span>
                        </div>
                      )}
                      <div>
                        <div
                          className={`px-4 py-3 rounded-2xl shadow-lg ${
                            message.role === "user"
                              ? "bg-gradient-to-br from-primary to-secondary text-white"
                              : "bg-white dark:bg-card border-2 border-primary/20 text-foreground"
                          }`}
                        >
                          <p className="text-sm md:text-base leading-relaxed whitespace-pre-wrap">{message.content}</p>
                        </div>
                        <div className="flex items-center gap-2 mt-1 px-2">
                          <span className={`text-xs ${
                            message.role === "user" ? "text-muted-foreground" : "text-muted-foreground"
                          }`}>
                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
              
              {isProcessing && (
                <div className="flex justify-start animate-slide-up">
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                      <span className="text-lg">🤖</span>
                    </div>
                    <div className="bg-white dark:bg-card border-2 border-primary/20 rounded-2xl px-4 py-3 shadow-lg">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 md:p-4 lg:p-5 bg-gradient-to-r from-primary/5 to-secondary/5 border-t-2 border-primary/20">
              <div className="flex gap-2 md:gap-3">
                <button
                  onClick={toggleListening}
                  className={`shrink-0 w-11 h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center transition-all shadow-lg ${
                    isListening 
                      ? 'bg-gradient-to-br from-primary to-secondary scale-110 shadow-xl' 
                      : 'bg-white dark:bg-card border-2 border-primary/30 hover:border-primary/50 hover:scale-105'
                  }`}
                >
                  {isListening ? (
                    <MicOff className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  ) : (
                    <Mic className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  )}
                </button>

                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={language === "en-IN" ? "Type your message..." : "अपना संदेश लिखें..."}
                  className="flex-1 px-3 md:px-4 lg:px-5 py-2.5 md:py-3 lg:py-4 bg-white dark:bg-background border-2 border-primary/30 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm md:text-base shadow-md hover:shadow-lg transition-all"
                />

                <button
                  onClick={sendMessage}
                  disabled={!inputText.trim() || isProcessing}
                  className="shrink-0 w-11 h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center hover:scale-105 transition-transform shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
                >
                  <Send className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </button>
              </div>
              
              <div className="flex items-center justify-center gap-3 md:gap-4 mt-2 md:mt-3 text-xs text-muted-foreground flex-wrap">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>{language === "en-IN" ? "Secure" : "सुरक्षित"}</span>
                </div>
                <span>•</span>
                <span>{language === "en-IN" ? "24/7 Available" : "24/7 उपलब्ध"}</span>
                <span>•</span>
                <span className="font-medium text-primary">{language === "en-IN" ? "English Mode" : "हिंदी मोड"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default MiloAI;
