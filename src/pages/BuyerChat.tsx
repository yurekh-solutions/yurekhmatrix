import { useState, useEffect, useRef } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  ArrowLeft,
  Send,
  Loader,
  ShieldCheck,
  MessageSquare,
  Clock,
} from 'lucide-react';

const getApiUrl = () => {
  if (typeof window !== 'undefined' && window.location.hostname !== 'localhost') {
    return 'https://backendmatrix.onrender.com/api';
  }
  return 'http://localhost:5000/api';
};
const API_URL = getApiUrl();

interface ChatMessage {
  _id: string;
  senderRole: string;
  senderLabel: string;
  message: string;
  isMine: boolean;
  createdAt: string;
}

const BuyerChat = () => {
  const { inquiryId } = useParams<{ inquiryId: string }>();
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email') || '';
  const token = searchParams.get('token') || '';

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const authParams = `email=${encodeURIComponent(email)}&token=${encodeURIComponent(token)}`;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const fetchMessages = async (showLoader = false) => {
    if (!inquiryId || !email || !token) return;
    if (showLoader) setLoading(true);
    try {
      const res = await fetch(`${API_URL}/chat/${inquiryId}?${authParams}`);
      const data = await res.json();
      if (data.success) {
        setMessages(data.messages || []);
        setError('');
        // Mark as read
        fetch(`${API_URL}/chat/${inquiryId}/read?${authParams}`, { method: 'PATCH' }).catch(() => {});
      } else {
        if (showLoader) setError(data.message || 'Failed to load messages');
      }
    } catch {
      if (showLoader) setError('Cannot connect to server');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages(true);
    pollRef.current = setInterval(() => fetchMessages(false), 8000);
    return () => {
      if (pollRef.current) clearInterval(pollRef.current);
    };
  }, [inquiryId, email, token]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || sending) return;

    setSending(true);
    try {
      const res = await fetch(`${API_URL}/chat/${inquiryId}?${authParams}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: newMessage.trim() }),
      });
      const data = await res.json();
      if (data.success) {
        setNewMessage('');
        await fetchMessages(false);
      }
    } catch {
      // silent
    } finally {
      setSending(false);
    }
  };

  const formatTime = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    const today = new Date();
    if (d.toDateString() === today.toDateString()) return 'Today';
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    if (d.toDateString() === yesterday.toDateString()) return 'Yesterday';
    return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  // Group messages by date
  const groupedMessages: { date: string; msgs: ChatMessage[] }[] = [];
  messages.forEach((msg) => {
    const dateKey = formatDate(msg.createdAt);
    const last = groupedMessages[groupedMessages.length - 1];
    if (last && last.date === dateKey) {
      last.msgs.push(msg);
    } else {
      groupedMessages.push({ date: dateKey, msgs: [msg] });
    }
  });

  if (!email || !token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-amber-50 p-4">
        <div className="text-center max-w-md">
          <ShieldCheck className="w-16 h-16 text-primary mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">Access Required</h1>
          <p className="text-muted-foreground mb-6">
            This chat link requires authentication. Please use the link provided in your inquiry tracking page.
          </p>
          <Link to="/track-inquiry">
            <Button className="bg-primary">Track Your Inquiry</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-[#f0ebe5]">
      {/* Header */}
      <div className="bg-white border-b px-4 py-3 flex items-center gap-3 shadow-sm">
        <Link to="/track-inquiry" className="text-muted-foreground hover:text-foreground">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center">
          <ShieldCheck className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <h1 className="font-semibold text-sm truncate">RitzYard Verified Supplier</h1>
          <p className="text-xs text-muted-foreground">Inquiry: {inquiryId}</p>
        </div>
        <Badge className="bg-green-100 text-green-700 border-green-200 text-xs">
          <ShieldCheck className="w-3 h-3 mr-1" />
          Secure
        </Badge>
      </div>

      {/* Privacy Notice */}
      <div className="bg-blue-50 border-b border-blue-100 px-4 py-2 text-center">
        <p className="text-xs text-blue-700">
          <ShieldCheck className="w-3 h-3 inline mr-1" />
          Your phone number is protected. Communicate securely through RitzYard.
        </p>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        {loading ? (
          <div className="flex items-center justify-center h-full">
            <Loader className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <MessageSquare className="w-12 h-12 text-muted-foreground/30 mb-3" />
            <p className="text-muted-foreground text-sm">{error}</p>
            <Button variant="outline" className="mt-4" onClick={() => fetchMessages(true)}>
              Retry
            </Button>
          </div>
        ) : messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <MessageSquare className="w-10 h-10 text-primary/50" />
            </div>
            <h3 className="font-semibold mb-1">No messages yet</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Your matched supplier will message you here. You can also send the first message!
            </p>
          </div>
        ) : (
          groupedMessages.map((group, gi) => (
            <div key={gi}>
              {/* Date separator */}
              <div className="flex items-center justify-center my-4">
                <span className="bg-white/80 text-xs text-muted-foreground px-3 py-1 rounded-full shadow-sm">
                  {group.date}
                </span>
              </div>
              {group.msgs.map((msg) => (
                <div
                  key={msg._id}
                  className={`flex mb-3 ${msg.isMine ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 shadow-sm ${
                      msg.isMine
                        ? 'bg-primary text-white rounded-br-md'
                        : msg.senderRole === 'ritzyard'
                        ? 'bg-blue-100 text-blue-900 rounded-bl-md'
                        : 'bg-white text-foreground rounded-bl-md'
                    }`}
                  >
                    {!msg.isMine && (
                      <p className={`text-xs font-medium mb-1 ${
                        msg.senderRole === 'ritzyard' ? 'text-blue-600' : 'text-primary'
                      }`}>
                        {msg.senderLabel}
                      </p>
                    )}
                    <p className="text-sm whitespace-pre-wrap break-words">{msg.message}</p>
                    <p className={`text-[10px] mt-1 text-right ${
                      msg.isMine ? 'text-white/70' : 'text-muted-foreground'
                    }`}>
                      <Clock className="w-2.5 h-2.5 inline mr-0.5" />
                      {formatTime(msg.createdAt)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="bg-white border-t px-4 py-3">
        <form onSubmit={handleSend} className="flex items-center gap-2">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 h-11 rounded-full bg-gray-50 border-gray-200"
            maxLength={2000}
            disabled={sending}
          />
          <Button
            type="submit"
            size="icon"
            disabled={!newMessage.trim() || sending}
            className="w-11 h-11 rounded-full bg-primary hover:bg-primary/90 shrink-0"
          >
            {sending ? (
              <Loader className="w-4 h-4 animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default BuyerChat;
