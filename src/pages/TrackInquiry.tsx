import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Search,
  Package,
  CheckCircle,
  Clock,
  MessageSquare,
  ShieldCheck,
  ArrowLeft,
  AlertCircle,
  Loader,
  TrendingUp,
} from 'lucide-react';
import ScrollToTop from '@/components/ScrollToTop';

const getApiUrl = () => {
  if (typeof window !== 'undefined' && window.location.hostname !== 'localhost') {
    return 'https://backendmatrix.onrender.com/api';
  }
  return 'http://localhost:5000/api';
};
const API_URL = getApiUrl();

const STATUS_CONFIG: Record<string, { label: string; color: string; icon: any; desc: string }> = {
  new: { label: 'Received', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30', icon: Clock, desc: 'Your inquiry has been received by RitzYard and is being reviewed.' },
  under_review: { label: 'Under Review', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30', icon: Search, desc: 'RitzYard is finding the best verified suppliers for your requirement.' },
  quoted: { label: 'Quote Ready', color: 'bg-green-500/20 text-green-400 border-green-500/30', icon: TrendingUp, desc: 'Verified suppliers have sent quotes! Check below.' },
  negotiating: { label: 'Negotiating', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30', icon: MessageSquare, desc: 'RitzYard is negotiating the best price for you.' },
  accepted: { label: 'Quote Accepted', color: 'bg-green-500/20 text-green-400 border-green-500/30', icon: CheckCircle, desc: 'Your inquiry has been accepted. Order is being processed.' },
  completed: { label: 'Completed', color: 'bg-gray-500/20 text-gray-400 border-gray-500/30', icon: CheckCircle, desc: 'This inquiry has been completed.' },
  rejected: { label: 'Rejected', color: 'bg-red-500/20 text-red-400 border-red-500/30', icon: AlertCircle, desc: 'Unfortunately this inquiry could not be fulfilled. Please contact us.' },
  cancelled: { label: 'Cancelled', color: 'bg-gray-500/20 text-gray-300 border-gray-500/30', icon: AlertCircle, desc: 'This inquiry was cancelled.' },
};

const RITZYARD_WHATSAPP = 'https://wa.me/919136242706';

const TrackInquiry = () => {
  const [searchParams] = useSearchParams();
  const [email, setEmail] = useState(searchParams.get('email') || '');
  const [inquiryNumber, setInquiryNumber] = useState(searchParams.get('inquiry') || '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [inquiryData, setInquiryData] = useState<any>(null);
  const [chatLoading, setChatLoading] = useState(false);

  const doTrack = async (emailVal: string, numVal: string) => {
    setError('');
    setLoading(true);
    try {
      const num = numVal.trim().toUpperCase();
      const endpoint = num.startsWith('RFQ')
        ? `${API_URL}/rfqs/track`
        : `${API_URL}/material-inquiries/track`;
      const res = await fetch(
        `${endpoint}?email=${encodeURIComponent(emailVal.trim())}&inquiryNumber=${encodeURIComponent(num)}`
      );
      const data = await res.json();
      if (data.success) {
        setInquiryData(data.data);
      } else {
        setError(data.message || 'Inquiry not found. Please check your email and inquiry number.');
        setInquiryData(null);
      }
    } catch {
      setError('Failed to fetch inquiry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Auto-submit if URL has email + inquiry params (coming from success page)
  useEffect(() => {
    const urlEmail = searchParams.get('email');
    const urlInquiry = searchParams.get('inquiry');
    if (urlEmail && urlInquiry) {
      doTrack(urlEmail, urlInquiry);
    }
  }, []);

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !inquiryNumber.trim()) {
      setError('Please enter both email and inquiry number.');
      return;
    }
    doTrack(email, inquiryNumber);
  };

  const statusCfg = inquiryData ? (STATUS_CONFIG[inquiryData.status] || STATUS_CONFIG['new']) : null;
  const StatusIcon = statusCfg?.icon;

  const handleOpenChat = async () => {
    if (!inquiryData?.inquiryNumber || !email) return;
    setChatLoading(true);
    try {
      const res = await fetch(`${API_URL}/chat/${inquiryData.inquiryNumber}/token`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = await res.json();
      if (data.success && data.token) {
        window.location.href = `/chat/${inquiryData.inquiryNumber}?email=${encodeURIComponent(email.trim())}&token=${data.token}`;
      } else {
        // Chat not available yet — supplier hasn't been matched
        setError('Chat is not available yet. Your inquiry is being matched to a supplier.');
      }
    } catch {
      setError('Failed to open chat. Please try again.');
    } finally {
      setChatLoading(false);
    }
  };

  return (
    <div className="min-h-screen glass-bg">
      <ScrollToTop />
      <Navbar />

      <div className="max-w-2xl mx-auto px-4 py-10 sm:py-16">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm text-primary font-medium mb-4">
            <Search className="w-4 h-4" />
            Track Your Inquiry
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">Track Your Inquiry</h1>
          <p className="text-muted-foreground text-sm">Enter your email and inquiry number (MI or RFQ) to check status and view quotes.</p>
        </div>

        {/* Search Form */}
        <form onSubmit={handleTrack} className="glass-card p-6 rounded-xl mb-6 space-y-4">
          <div>
            <label className="text-sm font-medium mb-1.5 block">Your Email Address</label>
            <Input
              type="email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-11"
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-1.5 block">Inquiry Number</label>
            <Input
              type="text"
              placeholder="e.g. MI2603000012 or RFQ2503000001"
              value={inquiryNumber}
              onChange={(e) => setInquiryNumber(e.target.value.toUpperCase())}
              className="h-11 font-mono"
            />
            <p className="text-xs text-muted-foreground mt-1">Your inquiry number (starts with MI or RFQ) was shown after you submitted your inquiry.</p>
          </div>
          {error && (
            <div className="flex items-center gap-2 text-sm text-red-500 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              {error}
            </div>
          )}
          <Button type="submit" disabled={loading} className="w-full h-11 bg-primary hover:bg-primary/90">
            {loading ? (
              <><Loader className="w-4 h-4 mr-2 animate-spin" />Checking...</>
            ) : (
              <><Search className="w-4 h-4 mr-2" />Track Inquiry</>
            )}
          </Button>
        </form>

        {/* Results */}
        {inquiryData && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
            {/* Status Card */}
            <div className="glass-card p-5 rounded-xl">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs text-muted-foreground">Inquiry Number</p>
                  <p className="font-mono font-bold text-lg">{inquiryData.inquiryNumber}</p>
                </div>
                {statusCfg && (
                  <Badge className={`${statusCfg.color} border font-medium`}>
                    {statusCfg.label}
                  </Badge>
                )}
              </div>
              {statusCfg && StatusIcon && (
                <div className="flex items-start gap-3 bg-primary/5 border border-primary/10 rounded-lg p-3">
                  <StatusIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">{statusCfg.desc}</p>
                </div>
              )}
            </div>

            {/* Materials Summary */}
            <div className="glass-card p-5 rounded-xl">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Package className="w-4 h-4 text-primary" />
                Your Requirements
              </h3>
              <div className="space-y-2">
                {inquiryData.materials?.map((m: any, i: number) => (
                  <div key={i} className="flex items-center justify-between text-sm py-2 border-b border-border/50 last:border-0">
                    <span className="font-medium">{m.materialName}</span>
                    <span className="text-muted-foreground">{m.quantity} {m.unit}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                Delivery: <span className="text-foreground font-medium">{inquiryData.deliveryLocation}</span>
              </p>
            </div>

            {/* Quotes from suppliers (admin-approved only) */}
            {inquiryData.supplierQuotes && inquiryData.supplierQuotes.filter((q: any) => q.status !== 'rejected').length > 0 ? (
              <div className="glass-card p-5 rounded-xl">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  Quotes Received
                </h3>
                <div className="space-y-3">
                  {inquiryData.supplierQuotes
                    .filter((q: any) => q.status !== 'rejected')
                    .map((q: any, i: number) => (
                      <div key={i} className="border border-green-500/20 rounded-lg p-4 bg-green-500/5">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <p className="font-semibold text-sm flex items-center gap-1">
                              <ShieldCheck className="w-3.5 h-3.5 text-green-500" />
                              {q.supplierName}
                            </p>
                            <p className="text-xs text-muted-foreground">Verified Supplier via RitzYard</p>
                          </div>
                          <div className="text-right">
                            <p className="text-green-500 font-bold text-xl">₹{Number(q.quotedPrice).toLocaleString()}</p>
                            {q.validUntil && (
                              <p className="text-xs text-muted-foreground">
                                Valid till {new Date(q.validUntil).toLocaleDateString()}
                              </p>
                            )}
                          </div>
                        </div>
                        {q.notes && (
                          <p className="text-sm text-muted-foreground bg-background/50 rounded px-3 py-2 mt-2">{q.notes}</p>
                        )}
                        <div className="mt-3 pt-3 border-t border-border/50">
                          <a
                            href={`${RITZYARD_WHATSAPP}?text=${encodeURIComponent(`Hi RitzYard, I want to accept the quote for ₹${Number(q.quotedPrice).toLocaleString()} from ${q.supplierName} for my inquiry #${inquiryData.inquiryNumber}`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white w-full">
                              Accept This Quote via RitzYard
                            </Button>
                          </a>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ) : (
              <div className="glass-card p-5 rounded-xl text-center">
                <Clock className="w-8 h-8 mx-auto text-muted-foreground/50 mb-2" />
                <p className="text-sm font-medium">Quotes are being collected</p>
                <p className="text-xs text-muted-foreground mt-1">RitzYard is reaching out to verified suppliers. You'll be notified once quotes are ready.</p>
              </div>
            )}

            {/* Message Supplier via RitzYard Chat */}
            <div className="glass-card p-5 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Message Your Supplier</p>
                  <p className="text-xs text-muted-foreground">Chat securely through RitzYard — your phone number stays private</p>
                </div>
              </div>
              <Button
                onClick={handleOpenChat}
                disabled={chatLoading}
                className="w-full bg-primary hover:bg-primary/90 text-white mb-2"
              >
                {chatLoading ? (
                  <><Loader className="w-4 h-4 mr-2 animate-spin" />Opening Chat...</>
                ) : (
                  <><MessageSquare className="w-4 h-4 mr-2" />Open Chat with Supplier</>
                )}
              </Button>
              <a
                href={inquiryData.ritzYardWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="w-full border-green-500/40 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 text-xs">
                  <svg className="w-3.5 h-3.5 mr-1.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Need urgent help? WhatsApp RitzYard
                </Button>
              </a>
            </div>

            {/* Track another */}
            <Button
              variant="ghost"
              className="w-full text-muted-foreground"
              onClick={() => { setInquiryData(null); setEmail(''); setInquiryNumber(''); }}
            >
              Track Another Inquiry
            </Button>
          </div>
        )}

        {/* Back link */}
        <div className="mt-8 text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TrackInquiry;
