import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Mic, MicOff, Send, Volume2, VolumeX, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import { Badge } from "@/components/ui/badge";
import { getApiUrl } from "@/lib/api"; // Import the API URL helper

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
          ? "Hello! I'm Milo, your smart procurement assistant at RitzYard. How may I help you today?"
          : "नमस्ते! मैं मिलो हूं, RitzYard में आपका स्मार्ट खरीद सहायक। मैं आज आपकी कैसे मदद कर सकता हूं?";
        
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

  // Get AI response - Smart intelligent fallback system
  const getMiloResponse = async (userMessage: string): Promise<string> => {
    // Generate hash for this query
    const queryHash = generateQueryHash(userMessage);
    
    // Check if this is a repeated question
    const isRepeatedQuery = queryHash === lastQueryHash;
    
    console.log('🚀 RitzYard AI processing:', userMessage);
    
    // Build smart context for better responses
    const conversationHistory = messages.slice(-3)
      .map(m => `${m.role === 'user' ? 'User' : 'Milo'}: ${m.content}`)
      .join('\n');
    
    setLastQueryHash(queryHash);
    
    // Smart contextual responses based on keywords (instant, no API needed)
    const lowerMessage = userMessage.toLowerCase();
    
    // Geography questions
    if (lowerMessage.includes('china')) {
      const responses = [
        "China is the world's most populous country and second-largest economy. It's located in East Asia and is known for its rich history, manufacturing prowess, and as a major exporter of construction materials like cement, steel, and TMT bars to countries like India.",
        "China, officially the People's Republic of China, is a major global economic power. Key cities include Beijing (capital), Shanghai (financial hub), and Shenzhen (tech center). It's also a leading supplier of construction materials worldwide.",
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }
    
    if (lowerMessage.includes('dubai')) {
      const responses = [
        "Dubai is the most populous city in the United Arab Emirates (UAE). Famous for the Burj Khalifa (world's tallest building), luxury shopping, and modern architecture. It's a major business and tourism hub in the Middle East.",
        "Dubai is a global city and business hub in the UAE, known for innovation in construction and real estate. Home to landmarks like Palm Jumeirah, Burj Al Arab, and Dubai Mall. A key center for international trade and commerce.",
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }
    
    if (lowerMessage.includes('india')) {
      const responses = [
        "India is the world's largest democracy and seventh-largest country by area. With 1.4+ billion people, it's incredibly diverse with 28 states, multiple languages, and a rapidly growing economy focused on services, manufacturing, and agriculture.",
        "India is a South Asian nation with rich cultural heritage and diversity. Major cities include New Delhi (capital), Mumbai (financial capital), and Bangalore (tech hub). Known for its IT industry, construction boom, and growing infrastructure projects.",
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }
    
    if (lowerMessage.includes('ss') || lowerMessage.includes('stainless steel')) {
      return "SS (Stainless Steel) is a corrosion-resistant alloy containing chromium. Common grades: SS 304 (₹180-220/kg) for general use, SS 316 (₹250-300/kg) for marine/chemical environments. Used in pipes, tanks, utensils, and construction. RitzYard can help source verified SS suppliers. Need a specific grade?";
    }
    
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('मूल्य') || lowerMessage.includes('कीमत')) {
      return "मैं निर्माण सामग्री के लिए रीयल-टाइम मूल्य निर्धारण प्रदान कर सकता हूं। RitzYard 500+ सत्यापित आपूर्तिकर्ताओं से प्रतिस्पर्धी उद्धरण प्रदान करता है। आप किन सामग्रियों के लिए मूल्य निर्धारण की आवश्यकता है? (सीमेंट, स्टील, टीएमटी बार, ईंटें, आदि)";
    }
    
    if (lowerMessage.includes('cement') || lowerMessage.includes('सीमेंट')) {
      return "सीमेंट कई प्रकारों में उपलब्ध है: ओपीसी 43/53 ग्रेड ₹340-420/बैग, पीपीसी ₹320-400/बैग, पीएससी ₹330-410/बैग। ब्रांड: UltraTech, ACC, Ambuja, JK Cement। बल्क ऑर्डर पर 5-12% छूट। विस्तृत उद्धरण चाहिए?";
    }

    if (lowerMessage.includes("steel") || lowerMessage.includes("tmt") || lowerMessage.includes("स्टील")) {
      return "टीएमटी स्टील बार Fe 415, Fe 500, Fe 550 ग्रेड में उपलब्ध हैं। वर्तमान बाजार दरें: 8मिमी ₹52-58/किग्रा, 10मिमी ₹51-57/किग्रा, 12मिमी ₹50-56/किग्रा। शीर्ष ब्रांड: Tata Tiscon, JSW, SAIL। 3-5 दिन में डिलीवरी। उद्धरण चाहिए?";
    }

    if (lowerMessage.includes("brick") || lowerMessage.includes("ईंट")) {
      return "हम आपूर्ति करते हैं: लाल मिट्टी की ईंटें (₹6-9/पीस), फ्लाई एश ईंटें (₹3.5-5.5/पीस), AAC ब्लॉक (₹45-70/ब्लॉक)। न्यूनतम आदेश 5000 पीस, मुफ्त डिलीवरी। कौन सी प्रकार की ईंटें आप चाहते हैं?";
    }

    if (lowerMessage.includes("supplier") || lowerMessage.includes("आपूर्तिकर्ता")) {
      return "RitzYard के पास 28 राज्यों में 500+ सत्यापित आपूर्तिकर्ता हैं। सभी गुणवत्ता जांच से गुजरते हैं, सत्यापित जीएसटी हैं, और 98% समय पर डिलीवरी बनाए रखते हैं। आप क्या सामग्री खरीद रहे हैं?";
    }

    if (lowerMessage.includes("rfq") || lowerMessage.includes("quotation") || lowerMessage.includes("अनुरोध")) {
      return "मैं तुरंत एक RFQ बना सकता हूं! बस मुझे बताएं: 1) सामग्री का प्रकार, 2) आवश्यक मात्रा, 3) डिलीवरी स्थान, 4) समयसीमा। आपको 2 घंटे में कई आपूर्तिकर्ताओं से प्रतिस्पर्धी उद्धरण मिलेंगे।";
    }

    if (lowerMessage.includes("delivery") || lowerMessage.includes("shipping") || lowerMessage.includes("डिलीवरी")) {
      return "RitzYard पूरे भारत में डिलीवरी प्रदान करता है रीयल-टाइम ट्रैकिंग के साथ। मानक डिलीवरी: 3-7 दिन, एक्सप्रेस: 24-48 घंटे (मेट्रो शहर)। ₹50,000 से ऊपर के ऑर्डर पर मुफ्त डिलीवरी। बीमा और गुणवत्ता जांच शामिल। हमें कहां डिलीवर करना चाहिए?";
    }

    if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("नमस्ते")) {
      return "नमस्ते! मैं Milo हूं, आपका एआई खरीद विशेषज्ञ। मैं सामग्री मूल्य निर्धारण, आपूर्तिकर्ता चयन, RFQ निर्माण, डिलीवरी ट्रैकिंग और बाजार बुद्धिमत्ता में आपकी मदद कर सकता हूं। आज आप कौन सी निर्माण सामग्री खोज रहे हैं?";
    }

    if (lowerMessage.includes("thank") || lowerMessage.includes("धन्यवाद")) {
      return "आपका स्वागत है! निर्माण सामग्री, मूल्य निर्धारण, या आपूर्तिकर्ताओं के बारे में कुछ भी पूछने के लिए स्वतंत्र महसूस करें। मैं आपकी खरीद आवश्यकताओं में मदद करने के लिए 24/7 यहां हूं!";
    }

    if (lowerMessage.includes("how are you") || lowerMessage.includes("आप कैसे हैं")) {
      return "मैं बिल्कुल ठीक हूं और आपकी सहायता के लिए तैयार हूं! मेरा एआई निर्माण सामग्री और बाजार प्रवृत्तियों के बारे में लगातार सीख रहा है। मैं आपकी खरीद आवश्यकताओं में क्या मदद कर सकता हूं?";
    }

    return `यह एक दिलचस्प सवाल है। RitzYard के एआई सहायक के रूप में, मैं निर्माण सामग्री खरीद में विशेषज्ञता रखता हूं। मैं आपको मूल्य निर्धारण, आपूर्तिकर्ता, RFQ, डिलीवरी लॉजिस्टिक्स, और बाजार बुद्धिमत्ता में सीमेंट, स्टील, टीएमटी बार, ईंटें, रेत, आदि के लिए मदद कर सकता हूं। क्या आप अपकी विशिष्ट आवश्यकताओं के बारे में और बता सकते हैं?`;
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
      count: contextData.marketInsights?.suppliersCount || 500,
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
                    <p className="text-white/80 text-xs md:text-sm">{language === "en-IN" ? "RitzYard Procurement Expert " : "RitzYard खरीद विशेषज्ञ "}</p>
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
  );
};

export default MiloAI;
