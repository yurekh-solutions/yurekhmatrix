import React, { useState, useEffect, useRef } from 'react';
import { Send, Mic, X, Plus, BarChart3, BookOpen, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

interface Message {
  sender: 'user' | 'milo';
  message: string;
  timestamp: Date;
  intent?: string;
}

interface Chat {
  _id: string;
  messages: Message[];
  context: {
    currentPhase: 'onboarding' | 'searching' | 'negotiating' | 'learning' | 'growing';
  };
}

export const MiloChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [chatId, setChatId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState('Guest');
  const [userType, setUserType] = useState<'buyer' | 'supplier'>('buyer');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isRecording, setIsRecording] = useState(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Initialize chat
  useEffect(() => {
    if (isOpen && !chatId) {
      initializeChat();
    }
  }, [isOpen]);

  // Initialize speech recognition
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognitionAPI = (window as unknown as { SpeechRecognition?: SpeechRecognition; webkitSpeechRecognition?: SpeechRecognition }).SpeechRecognition || (window as unknown as { webkitSpeechRecognition?: SpeechRecognition }).webkitSpeechRecognition;
      if (SpeechRecognitionAPI) {
        const recognition = new SpeechRecognitionAPI();
        recognition.onstart = () => setIsRecording(true);
        recognition.onend = () => setIsRecording(false);
        recognition.onresult = (event: SpeechRecognitionEvent) => {
          const transcript = Array.from(event.results)
            .map((result: SpeechRecognitionResult) => result[0].transcript)
            .join('');
          setInputValue(transcript);
        };
        recognitionRef.current = recognition;
      }
    }
  }, []);

  const initializeChat = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/milo/chat/start`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userName,
          userType,
        }),
      });

      const data = await response.json() as { success: boolean; chat: { _id: string; messages: Array<{ sender: string; timestamp: string; intent?: string }> } };
      if (data.success) {
        setChatId(data.chat._id);
        setMessages(
          data.chat.messages.map((m) => ({
            ...m,
            timestamp: new Date(m.timestamp),
            sender: m.sender as 'user' | 'milo',
          }))
        );
      }
    } catch (error) {
      console.error('Error initializing chat:', error);
      toast.error('Failed to initialize Milo chat');
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || !chatId || loading) return;

    const userMessage = inputValue;
    setInputValue('');
    setLoading(true);

    // Add user message to UI
    setMessages((prev) => [
      ...prev,
      {
        sender: 'user',
        message: userMessage,
        timestamp: new Date(),
      },
    ]);

    try {
      const response = await fetch(`${API_BASE_URL}/milo/chat/message`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chatId,
          message: userMessage,
          userId: 'user123', // Replace with actual user ID
          userType,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setMessages((prev) => [
          ...prev,
          {
            sender: 'milo',
            message: data.message,
            timestamp: new Date(),
            intent: data.metadata?.intent,
          },
        ]);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message');
    } finally {
      setLoading(false);
    }
  };

  const handleVoiceInput = () => {
    if (!recognitionRef.current) {
      toast.error('Speech recognition not supported in your browser');
      return;
    }

    if (isRecording) {
      recognitionRef.current.stop();
    } else {
      recognitionRef.current.start();
    }
  };

  const toggleUserType = () => {
    setUserType(userType === 'buyer' ? 'supplier' : 'buyer');
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-orange-500 to-purple-600 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center text-white text-2xl z-40 hover:scale-110"
        title="Open Milo AI Assistant"
      >
        <span>🤖</span>
      </button>
    );
  }

  return (
    <div
      className={`fixed bottom-6 right-6 w-full max-w-sm transition-all duration-300 z-50 ${
        isMinimized ? 'h-14' : 'h-[600px]'
      }`}
    >
      {/* Chat Window */}
      <div className="bg-gradient-to-br from-[#2d1b3d] to-[#1f1529] border border-purple-500/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-full backdrop-blur-xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-purple-600 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-2xl">🤖</div>
            <div>
              <p className="font-bold text-white text-sm">Milo AI Assistant</p>
              <p className="text-xs text-orange-100">Procurement Expert</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="ghost"
              className="text-white hover:bg-white/20"
              onClick={() => setIsMinimized(!isMinimized)}
            >
              {isMinimized ? '▲' : '▼'}
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="text-white hover:bg-white/20"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Mode Toggle */}
            <div className="px-4 py-2 border-b border-purple-500/20 bg-purple-500/5">
              <div className="flex gap-2 items-center justify-between">
                <span className="text-xs text-purple-300">Mode:</span>
                <button
                  onClick={toggleUserType}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                    userType === 'buyer'
                      ? 'bg-orange-500/30 text-orange-300 border border-orange-500/50'
                      : 'bg-purple-500/30 text-purple-300 border border-purple-500/50'
                  }`}
                >
                  {userType === 'buyer' ? '🛒 Buyer' : '🏭 Supplier'}
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-purple-300 text-sm mb-6">
                    👋 Hello! I'm Milo, your procurement assistant
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      className="p-3 rounded-lg bg-purple-500/20 border border-purple-500/30 hover:bg-purple-500/30 transition text-left text-xs"
                      onClick={() => setInputValue('Show me top suppliers')}
                    >
                      <Zap className="w-4 h-4 mb-1 text-orange-400" />
                      Top Suppliers
                    </button>
                    <button
                      className="p-3 rounded-lg bg-purple-500/20 border border-purple-500/30 hover:bg-purple-500/30 transition text-left text-xs"
                      onClick={() => setInputValue('How to grow my business')}
                    >
                      <BarChart3 className="w-4 h-4 mb-1 text-purple-400" />
                      Growth Tips
                    </button>
                    <button
                      className="p-3 rounded-lg bg-purple-500/20 border border-purple-500/30 hover:bg-purple-500/30 transition text-left text-xs"
                      onClick={() => setInputValue('Product recommendations')}
                    >
                      <Plus className="w-4 h-4 mb-1 text-blue-400" />
                      Recommendations
                    </button>
                    <button
                      className="p-3 rounded-lg bg-purple-500/20 border border-purple-500/30 hover:bg-purple-500/30 transition text-left text-xs"
                      onClick={() => setInputValue('Training materials')}
                    >
                      <BookOpen className="w-4 h-4 mb-1 text-green-400" />
                      Training
                    </button>
                  </div>
                </div>
              ) : (
                messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs p-3 rounded-lg text-sm ${
                        msg.sender === 'user'
                          ? 'bg-orange-500/30 text-white border border-orange-500/50'
                          : 'bg-purple-500/30 text-white border border-purple-500/50'
                      }`}
                    >
                      <p>{msg.message}</p>
                      {msg.intent && (
                        <Badge variant="secondary" className="mt-2 text-xs bg-purple-600/50">
                          {msg.intent}
                        </Badge>
                      )}
                    </div>
                  </div>
                ))
              )}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-purple-500/30 border border-purple-500/50 p-3 rounded-lg">
                    <div className="flex gap-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" />
                      <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100" />
                      <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-200" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-purple-500/20 p-4 space-y-3">
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <Input
                  type="text"
                  placeholder="Ask me anything..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  disabled={loading}
                  className="flex-1 bg-purple-500/20 border-purple-500/30 text-white placeholder:text-purple-400"
                />
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  onClick={handleVoiceInput}
                  className={`border-purple-500/30 ${isRecording ? 'bg-red-500/30' : ''}`}
                >
                  <Mic
                    className={`w-4 h-4 ${isRecording ? 'text-red-400 animate-pulse' : 'text-purple-400'}`}
                  />
                </Button>
                <Button
                  type="submit"
                  size="sm"
                  disabled={loading || !inputValue.trim()}
                  className="bg-gradient-to-r from-orange-500 to-purple-600 hover:opacity-90"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MiloChatAssistant;
