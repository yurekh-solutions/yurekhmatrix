import { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  MessageSquare, Package, Clock, CheckCircle, TrendingUp,
  AlertCircle, LogOut, Send, Loader, Loader2, ShieldCheck,
  X, RefreshCw, User, LayoutDashboard, Settings,
  Phone, Building2, Mail, Edit2, ChevronRight,
  FileText, BarChart3, Calendar, Save, ArrowLeft,
  Search, PlusCircle, Sparkles,
} from 'lucide-react';

const TC = '#c1482b'; // terracotta accent color

const getApiUrl = () => {
  if (import.meta.env.VITE_API_URL) return import.meta.env.VITE_API_URL;
  if (typeof window !== 'undefined' && window.location.hostname !== 'localhost') {
    return 'https://backendmatrix-9q18.onrender.com/api';
  }
  return 'http://localhost:5000/api';
};
const API_URL = getApiUrl();

const STATUS_CONFIG: Record<string, { label: string; color: string; dot: string; icon: any }> = {
  new:          { label: 'Received',     color: 'bg-[#fff8f6] text-[#c1482b] border-[#e8dcd0]',   dot: '#c1482b', icon: Clock },
  under_review: { label: 'Under Review', color: 'bg-[#fef9ec] text-[#92400e] border-[#fde68a]',   dot: '#f59e0b', icon: RefreshCw },
  quoted:       { label: 'Quote Ready',  color: 'bg-[#f0fdf4] text-[#16a34a] border-[#bbf7d0]',   dot: '#22c55e', icon: TrendingUp },
  accepted:     { label: 'Accepted',     color: 'bg-[#f0fdf4] text-[#15803d] border-[#bbf7d0]',   dot: '#10b981', icon: CheckCircle },
  pending:      { label: 'Received',     color: 'bg-[#fff8f6] text-[#c1482b] border-[#e8dcd0]',   dot: '#c1482b', icon: Clock },
  completed:    { label: 'Completed',    color: 'bg-gray-50 text-gray-500 border-gray-200',         dot: '#6b7280', icon: CheckCircle },
  rejected:     { label: 'Rejected',     color: 'bg-red-50 text-red-600 border-red-200',            dot: '#ef4444', icon: AlertCircle },
};

interface Inquiry {
  _id: string;
  inquiryNumber: string;
  type: 'MI' | 'RFQ';
  productName: string;
  category: string;
  quantity: number;
  unit: string;
  budget?: string;
  deliveryLocation: string;
  status: string;
  chatThreadId: string;
  createdAt: string;
  supplierQuotes: any[];
  description?: string;
}

interface ChatMsg {
  _id: string;
  senderRole: string;
  senderLabel: string;
  message: string;
  isMine: boolean;
  createdAt: string;
}

type Tab = 'overview' | 'inquiries' | 'profile';

// ─── EDIT PROFILE MODAL ─────────────────────────────────────────────────────
interface EditModalProps {
  onClose: () => void;
  user: any;
  onSave: (fields: { name: string; phone: string; company: string }) => Promise<void>;
  saving: boolean;
}
const EditProfileModal = ({ onClose, user, onSave, saving }: EditModalProps) => {
  const [name, setName]       = useState(user?.name    || '');
  const [phone, setPhone]     = useState(user?.phone   || '');
  const [company, setCompany] = useState(user?.company || '');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSave({ name: name.trim(), phone: phone.trim(), company: company.trim() });
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-full max-w-md bg-white/95 backdrop-blur-2xl rounded-2xl sm:rounded-3xl shadow-2xl border border-white/60 overflow-hidden max-h-[90vh] overflow-y-auto">
        <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg,#c15738,#d47050,#e07059)' }} />

        <div className="p-5 sm:p-7">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-white shrink-0"
                   style={{ background: 'linear-gradient(135deg,#c15738,#a8421f)' }}>
                <Edit2 className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h2 className="font-extrabold text-lg text-gray-900">Edit Profile</h2>
                <p className="text-xs text-muted-foreground">Update your account details</p>
              </div>
            </div>
            <button onClick={onClose} className="w-8 h-8 rounded-xl flex items-center justify-center hover:bg-gray-100 text-muted-foreground transition-colors shrink-0">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="mb-4 p-3 rounded-xl bg-[#fdf9f7] border border-[#e8dcd0]">
            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider mb-1">Email (cannot be changed)</p>
            <div className="flex items-center gap-2 min-w-0">
              <Mail className="w-4 h-4 text-[#c1482b] shrink-0" />
              <p className="text-sm font-semibold text-gray-700 truncate">{user?.email}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div>
              <label className="text-xs font-bold text-gray-700 mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-primary" /> Full Name
              </label>
              <Input
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Enter your full name"
                className="h-11 rounded-xl border-[#e8dcd0] bg-white focus:border-primary focus:ring-primary/20"
                required
              />
            </div>

            <div>
              <label className="text-xs font-bold text-gray-700 mb-1.5 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-primary" /> Phone Number
              </label>
              <Input
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder="e.g. +91 98765 43210"
                className="h-11 rounded-xl border-[#e8dcd0] bg-white focus:border-primary focus:ring-primary/20"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-gray-700 mb-1.5 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-primary" /> Company / Organisation
              </label>
              <Input
                value={company}
                onChange={e => setCompany(e.target.value)}
                placeholder="Your company name"
                className="h-11 rounded-xl border-[#e8dcd0] bg-white focus:border-primary focus:ring-primary/20"
              />
            </div>

            <div className="flex gap-2.5 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 h-11 rounded-xl border border-gray-200 text-sm font-bold text-gray-600 bg-white hover:bg-gray-50 transition-all"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={saving}
                className="flex-1 h-11 rounded-xl text-sm font-bold text-white shadow-md hover:shadow-lg transition-all disabled:opacity-60 flex items-center justify-center gap-2"
                style={{ background: 'linear-gradient(135deg,#c15738,#a8421f)' }}
              >
                {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                {saving ? 'Saving…' : 'Save Changes'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
const BuyerDashboard = () => {
  const { user, token, logout, updateUser, loading: authLoading } = useAuth();
  const navigate = useNavigate();

  const [activeTab, setActiveTab]         = useState<Tab>('overview');
  const [inquiries, setInquiries]         = useState<Inquiry[]>([]);
  const [loading, setLoading]             = useState(true);
  const [error, setError]                 = useState('');

  // Filter
  const [filterType, setFilterType]       = useState<'all' | 'MI' | 'RFQ'>('all');
  const [search, setSearch]               = useState('');

  // Edit profile modal
  const [editOpen, setEditOpen]           = useState(false);
  const [editSaving, setEditSaving]       = useState(false);
  const [editSuccess, setEditSuccess]     = useState(false);

  // Chat state
  const [chatOpen, setChatOpen]           = useState(false);
  const [activeInquiry, setActiveInquiry] = useState<Inquiry | null>(null);
  const [messages, setMessages]           = useState<ChatMsg[]>([]);
  const [chatLoading, setChatLoading]     = useState(false);
  const [newMsg, setNewMsg]               = useState('');
  const [sending, setSending]             = useState(false);
  const [chatToken, setChatToken]         = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const pollRef        = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (authLoading) return;
    if (!user || !token) { navigate('/login'); return; }
    fetchInquiries();
  }, [user, token, authLoading]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => () => { if (pollRef.current) clearInterval(pollRef.current); }, []);

  // ── Data ─────────────────────────────────────────────────────────────────
  const fetchInquiries = async () => {
    setLoading(true);
    try {
      const res  = await fetch(`${API_URL}/buyer/inquiries`, { headers: { Authorization: `Bearer ${token}` } });
      const data = await res.json();
      if (data.success) { setInquiries(data.inquiries || []); setError(''); }
      else setError(data.message || 'Failed to load inquiries');
    } catch (err) {
      console.error('❌ Fetch error:', err);
      setError('Cannot connect to server');
    }
    finally { setLoading(false); }
  };

  const handleSaveProfile = async (fields: { name: string; phone: string; company: string }) => {
    setEditSaving(true);
    const result = await updateUser(fields);
    setEditSaving(false);
    if (result.success) {
      setEditSuccess(true);
      setEditOpen(false);
      setTimeout(() => setEditSuccess(false), 3000);
    }
  };

  // ── Chat ─────────────────────────────────────────────────────────────────
  const openChat = async (inquiry: Inquiry) => {
    setActiveInquiry(inquiry);
    setChatOpen(true);
    setMessages([]);
    setChatLoading(true);
    try {
      const res  = await fetch(`${API_URL}/chat/${inquiry.chatThreadId}/token`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: user!.email }),
      });
      const data = await res.json();
      if (data.success && data.token) {
        setChatToken(data.token);
        await fetchMessages(inquiry.chatThreadId, data.token);
        if (pollRef.current) clearInterval(pollRef.current);
        pollRef.current = setInterval(() => fetchMessages(inquiry.chatThreadId, data.token, true), 8000);
      } else { setChatLoading(false); }
    } catch { setChatLoading(false); }
  };

  const fetchMessages = async (threadId: string, tkn: string, silent = false) => {
    if (!silent) setChatLoading(true);
    try {
      const params = `email=${encodeURIComponent(user!.email)}&token=${encodeURIComponent(tkn)}`;
      const res    = await fetch(`${API_URL}/chat/${threadId}?${params}`);
      const data   = await res.json();
      if (data.success) {
        setMessages(data.messages || []);
        fetch(`${API_URL}/chat/${threadId}/read?${params}`, { method: 'PATCH' }).catch(() => {});
      }
    } catch { /* silent */ }
    finally { if (!silent) setChatLoading(false); }
  };

  const closeChat = () => {
    setChatOpen(false); setActiveInquiry(null);
    setMessages([]); setChatToken('');
    if (pollRef.current) clearInterval(pollRef.current);
  };

  const sendMessage = async () => {
    if (!newMsg.trim() || !activeInquiry || !chatToken) return;
    setSending(true);
    try {
      const params = `email=${encodeURIComponent(user!.email)}&token=${encodeURIComponent(chatToken)}`;
      const res    = await fetch(`${API_URL}/chat/${activeInquiry.chatThreadId}?${params}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: newMsg.trim() }),
      });
      const data = await res.json();
      if (data.success) { setNewMsg(''); await fetchMessages(activeInquiry.chatThreadId, chatToken, true); }
    } catch { /* silent */ }
    finally { setSending(false); }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  };

  // ── Formatters ────────────────────────────────────────────────────────────
  const fmt      = (d: string) => new Date(d).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
  const fmtDate  = (d: string) => {
    const dt = new Date(d), today = new Date(), yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    if (dt.toDateString() === today.toDateString())     return 'Today';
    if (dt.toDateString() === yesterday.toDateString()) return 'Yesterday';
    return dt.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
  };
  const fmtFull  = (d: string) => new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

  const groupedMsgs: { date: string; msgs: ChatMsg[] }[] = [];
  messages.forEach(msg => {
    const d = fmtDate(msg.createdAt);
    const last = groupedMsgs[groupedMsgs.length - 1];
    if (last && last.date === d) last.msgs.push(msg);
    else groupedMsgs.push({ date: d, msgs: [msg] });
  });

  // ── Derived stats ─────────────────────────────────────────────────────────
  const totalInquiries  = inquiries.length;
  const miCount         = inquiries.filter(i => i.type === 'MI').length;
  const rfqCount        = inquiries.filter(i => i.type === 'RFQ').length;
  const quotedCount     = inquiries.filter(i => i.status === 'quoted' || i.status === 'accepted').length;
  const recentInquiries = useMemo(
    () => [...inquiries].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, 3),
    [inquiries]
  );

  // Filtered list for the inquiries tab
  const filteredInquiries = useMemo(() => {
    let list = [...inquiries].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    if (filterType === 'MI')     list = list.filter(i => i.type === 'MI');
    if (filterType === 'RFQ')    list = list.filter(i => i.type === 'RFQ');
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(i =>
        i.productName.toLowerCase().includes(q) ||
        i.inquiryNumber.toLowerCase().includes(q) ||
        i.category.toLowerCase().includes(q)
      );
    }
    return list;
  }, [inquiries, filterType, search]);

  const userInitial = user?.name?.charAt(0)?.toUpperCase() || 'B';
  const statusCfg   = (s: string) => STATUS_CONFIG[s] || STATUS_CONFIG['new'];

  const TABS: { id: Tab; label: string; icon: any }[] = [
    { id: 'overview',  label: 'Overview',     icon: LayoutDashboard },
    { id: 'inquiries', label: 'Inquiries',    icon: FileText },
    { id: 'profile',   label: 'Profile',      icon: User },
  ];

  // ── Inquiry Card ──────────────────────────────────────────────────────────
  const InquiryCard = ({ inq }: { inq: Inquiry }) => {
    const cfg        = statusCfg(inq.status);
    const StatusIcon = cfg.icon;
    return (
      <div className="glass-card-hover rounded-2xl p-4 sm:p-5 relative overflow-hidden group">
        <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
             style={{ background: 'linear-gradient(90deg,#c15738,#d47050)' }} />

        <div className="flex items-start justify-between gap-3 sm:gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 mb-2 flex-wrap">
              <span className={`text-[10px] sm:text-[11px] font-bold px-2 sm:px-2.5 py-0.5 rounded-full border whitespace-nowrap ${
                inq.type === 'MI'
                  ? 'bg-[#fff8f6] text-[#c1482b] border-[#e8dcd0]'
                  : 'bg-[#fdf9f7] text-[#7c3c2a] border-[#dcc9bc]'
              }`}>
                {inq.type === 'MI' ? '📋 Material Inquiry' : '🛒 RFQ'}
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono text-muted-foreground bg-[#fdf9f7] px-1.5 sm:px-2 py-0.5 rounded-md border border-[#e8dcd0] truncate max-w-[120px]">
                {inq.inquiryNumber}
              </span>
            </div>
            <h3 className="font-bold text-sm sm:text-base text-gray-900 truncate group-hover:text-primary transition-colors">
              {inq.productName}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 line-clamp-1">
              {inq.quantity} {inq.unit}{inq.deliveryLocation ? ` · 📍 ${inq.deliveryLocation}` : ''}
            </p>
            {inq.budget && <p className="text-[11px] sm:text-xs text-muted-foreground mt-0.5">💰 Budget: {inq.budget}</p>}
            <p className="text-[11px] sm:text-xs text-muted-foreground mt-1 flex items-center gap-1">
              <Calendar className="w-3 h-3 shrink-0" />
              <span className="truncate">{fmtFull(inq.createdAt)}</span>
            </p>
            {inq.supplierQuotes?.length > 0 && inq.supplierQuotes[0]?.quotedPrice && (
              <div className="mt-2.5 inline-flex items-center gap-1.5 bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl px-2.5 sm:px-3 py-1 text-xs sm:text-sm font-bold text-[#16a34a]">
                <TrendingUp className="w-3.5 h-3.5" />
                Quote: ₹{Number(inq.supplierQuotes[0].quotedPrice).toLocaleString()}
              </div>
            )}
          </div>

          <div className="flex flex-col items-end gap-2 shrink-0">
            <span className={`inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border whitespace-nowrap ${cfg.color}`}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: cfg.dot }} />
              <StatusIcon className="w-3 h-3" />
              <span className="hidden sm:inline">{cfg.label}</span>
            </span>
            <button
              onClick={() => openChat(inq)}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold text-white transition-all hover:shadow-md hover:scale-105"
              style={{ background: 'linear-gradient(135deg,#c15738 0%,#a8421f 100%)' }}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Chat</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Loading state
  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f4f0ec]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg"
               style={{ background: 'linear-gradient(135deg,#c15738,#a8421f)' }}>
            <Loader2 className="w-7 h-7 animate-spin" />
          </div>
          <p className="text-sm font-medium text-gray-500">Loading your dashboard…</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f4f0ec]">
      <Navbar />

      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 pt-20 sm:pt-24 pb-12 sm:pb-16">

        {/* ── SUCCESS TOAST ─────────────────────────────── */}
        {editSuccess && (
          <div className="mb-4 flex items-center gap-3 bg-[#f0fdf4] border border-[#bbf7d0] rounded-2xl px-4 py-3 shadow-sm animate-in fade-in slide-in-from-top-2 duration-300">
            <CheckCircle className="w-5 h-5 text-[#16a34a] shrink-0" />
            <p className="text-sm font-semibold text-[#15803d]">Profile updated successfully!</p>
          </div>
        )}

        {/* ── PROFILE / WELCOME CARD ──────────────────── */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 overflow-hidden mb-4 sm:mb-5">
          {/* Cover gradient */}
          <div className="h-24 sm:h-32 relative"
               style={{ background: `linear-gradient(135deg, ${TC} 0%, #d66044 50%, #e07059 100%)` }}>
            <div className="absolute inset-0 opacity-10"
                 style={{ backgroundImage: 'radial-gradient(circle at 20px 20px, white 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }} />
            {/* Mobile edit button - top right of cover */}
            <div className="absolute top-3 right-3 flex sm:hidden gap-2">
              <button onClick={() => setEditOpen(true)}
                      className="w-9 h-9 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center text-gray-700 shadow-sm">
                <Edit2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="px-4 sm:px-7 pb-5 sm:pb-6 relative">
            <div className="flex items-start justify-between -mt-10 sm:-mt-14 mb-3 sm:mb-4">
              {/* Avatar */}
              <div className="relative">
                <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl border-[3px] sm:border-4 border-white shadow-lg flex items-center justify-center text-2xl sm:text-4xl font-extrabold text-white"
                     style={{ background: `linear-gradient(135deg, ${TC}, #d47050)` }}>
                  {userInitial}
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-100">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500" />
                </div>
              </div>

              {/* Desktop action buttons */}
              <div className="hidden sm:flex gap-2 mt-2">
                <button onClick={() => setEditOpen(true)}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
                  <Edit2 className="w-4 h-4" /> Edit
                </button>
                <button onClick={() => { logout(); navigate('/'); }}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
                  <LogOut className="w-4 h-4" /> Logout
                </button>
              </div>
            </div>

            {/* Name + welcome line */}
            <div className="mb-1">
              <h1 className="text-lg sm:text-2xl font-extrabold text-gray-900 leading-tight">
                {user?.name}
              </h1>
              <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1.5 mt-0.5">
                <Sparkles className="w-3 h-3 text-amber-500" />
                Welcome back to your procurement dashboard
              </p>
            </div>

            {/* Contact info */}
            <div className="flex flex-wrap gap-x-3 sm:gap-x-4 gap-y-1.5 mb-4 sm:mb-5 mt-2">
              {user?.email && (
                <span className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-600 min-w-0 max-w-full">
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 shrink-0" />
                  <span className="truncate">{user.email}</span>
                </span>
              )}
              {user?.phone && (
                <span className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-600">
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 shrink-0" />{user.phone}
                </span>
              )}
              {user?.company && (
                <span className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-600">
                  <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 shrink-0" />{user.company}
                </span>
              )}
            </div>

            {/* Mobile action buttons */}
            <div className="flex sm:hidden gap-2 mb-4">
              <button onClick={() => setEditOpen(true)}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-full bg-white border border-gray-200 text-xs font-semibold text-gray-700 active:scale-95 transition-all">
                <Edit2 className="w-3.5 h-3.5" /> Edit Profile
              </button>
              <button onClick={() => { logout(); navigate('/'); }}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-full bg-white border border-gray-200 text-xs font-semibold text-gray-600 active:scale-95 transition-all">
                <LogOut className="w-3.5 h-3.5" /> Logout
              </button>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {[
                { val: totalInquiries, lbl: 'INQUIRIES', icon: FileText   },
                { val: miCount,        lbl: 'MATERIAL',  icon: Package    },
                { val: rfqCount,       lbl: 'RFQS',      icon: BarChart3  },
              ].map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={i} className="bg-gradient-to-br from-orange-50/80 to-orange-100/60 rounded-xl sm:rounded-2xl p-3 sm:p-5 text-center border border-orange-100">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-white/90 flex items-center justify-center mx-auto mb-1.5 sm:mb-2 shadow-sm">
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: TC }} />
                    </div>
                    <p className="text-xl sm:text-2xl font-extrabold text-gray-900 leading-none">{s.val}</p>
                    <p className="text-[9px] sm:text-xs font-bold text-gray-500 mt-1 sm:mt-1.5 uppercase tracking-wider">{s.lbl}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── TAB NAV (sticky, mobile-friendly) ────────── */}
        <div className="sticky top-16 sm:top-20 z-30 mb-4 sm:mb-6 -mx-3 sm:mx-0 px-3 sm:px-0">
          <div className="flex gap-1 bg-white/90 backdrop-blur-xl rounded-2xl p-1 sm:p-1.5 shadow-md border border-[#e8dcd0]">
            {TABS.map(tab => {
              const Icon   = tab.icon;
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                    active
                      ? 'text-white shadow-md'
                      : 'text-muted-foreground hover:text-gray-800 hover:bg-[#fdf9f7]'
                  }`}
                  style={active ? { background: 'linear-gradient(135deg,#c15738 0%,#a8421f 100%)' } : {}}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── OVERVIEW TAB ────────────────────────────── */}
        {activeTab === 'overview' && (
          <div className="space-y-4 sm:space-y-5">
            {/* Quick stat cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
              {[
                { label: 'Total',          value: totalInquiries, icon: Package    },
                { label: 'Material Inq.',  value: miCount,        icon: FileText   },
                { label: 'RFQs',           value: rfqCount,       icon: BarChart3  },
              ].map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={i} className="glass-card rounded-xl sm:rounded-2xl p-3.5 sm:p-4">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl flex items-center justify-center mb-2.5 sm:mb-3"
                         style={{ background: 'linear-gradient(135deg,#fff0eb,#ffe0d6)' }}>
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-xl sm:text-2xl font-extrabold text-primary leading-none">{s.value}</p>
                    <p className="text-[11px] sm:text-xs text-muted-foreground mt-1 font-semibold">{s.label}</p>
                  </div>
                );
              })}
            </div>

            {/* Recent inquiries */}
            <div className="glass-card rounded-2xl overflow-hidden">
              <div className="flex items-center justify-between px-4 sm:px-5 py-3.5 sm:py-4 border-b border-[#f0ebe5]">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0"
                       style={{ background: 'linear-gradient(135deg,#c15738,#a8421f)' }}>
                    <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <h2 className="font-bold text-sm sm:text-base text-gray-900">Recent Inquiries</h2>
                </div>
                <button onClick={() => setActiveTab('inquiries')}
                        className="text-[11px] sm:text-xs font-bold text-primary flex items-center gap-1 hover:underline shrink-0">
                  View All <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {loading ? (
                <div className="flex items-center justify-center py-10">
                  <Loader2 className="w-7 h-7 animate-spin text-primary" />
                </div>
              ) : recentInquiries.length === 0 ? (
                <div className="text-center py-10 text-muted-foreground text-sm px-4">
                  <Package className="w-10 h-10 mx-auto mb-2 text-primary/20" />
                  No inquiries yet.{' '}
                  <Link to="/inquiry" className="text-primary font-semibold hover:underline">Submit one →</Link>
                </div>
              ) : (
                <div className="divide-y divide-[#f0ebe5]">
                  {recentInquiries.map(inq => {
                    const cfg = statusCfg(inq.status);
                    return (
                      <div key={inq._id} className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-3.5 hover:bg-[#fff8f6] transition-colors gap-3">
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-xs sm:text-sm text-gray-900 truncate">{inq.productName}</p>
                          <p className="text-[11px] sm:text-xs text-muted-foreground truncate">
                            {inq.inquiryNumber} · {fmtFull(inq.createdAt)}
                          </p>
                        </div>
                        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                          <span className={`text-[10px] font-semibold px-1.5 sm:px-2 py-0.5 rounded-full border whitespace-nowrap ${cfg.color}`}>
                            {cfg.label}
                          </span>
                          <button
                            onClick={() => openChat(inq)}
                            className="w-7 h-7 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform"
                            style={{ background: 'linear-gradient(135deg,#c15738,#a8421f)' }}
                            aria-label="Open chat"
                          >
                            <MessageSquare className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Quick actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              <Link to="/inquiry" className="glass-card-hover rounded-xl sm:rounded-2xl p-4 flex items-center gap-3 group">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 text-white"
                     style={{ background: 'linear-gradient(135deg,#c15738,#a8421f)' }}>
                  <FileText className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-sm text-gray-900 group-hover:text-primary transition-colors">Material Inquiry</p>
                  <p className="text-[11px] sm:text-xs text-muted-foreground">Get quotes for bulk materials</p>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link to="/products" className="glass-card-hover rounded-xl sm:rounded-2xl p-4 flex items-center gap-3 group">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 text-white"
                     style={{ background: 'linear-gradient(135deg,#5c2d23,#7a4a3a)' }}>
                  <Package className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-sm text-gray-900 group-hover:text-primary transition-colors">Browse Products</p>
                  <p className="text-[11px] sm:text-xs text-muted-foreground">Submit RFQ for specific items</p>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
              </Link>
            </div>
          </div>
        )}

        {/* ── INQUIRIES TAB ───────────────────────────── */}
        {activeTab === 'inquiries' && (
          <div>
            {/* Search + Filter bar */}
            <div className="flex flex-col sm:flex-row gap-2.5 mb-3 sm:mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                <Input
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Search inquiries…"
                  className="pl-9 h-10 sm:h-11 rounded-xl bg-white/80 border-[#e8dcd0] focus:border-primary focus:ring-primary/20"
                />
              </div>
              <div className="flex gap-1.5 sm:gap-2 overflow-x-auto pb-1 sm:pb-0 -mx-3 px-3 sm:mx-0 sm:px-0">
                {[
                  { id: 'all',    label: `All (${totalInquiries})` },
                  { id: 'MI',     label: `Material (${miCount})`    },
                  { id: 'RFQ',    label: `RFQ (${rfqCount})`         },
                ].map(f => {
                  const active = filterType === f.id;
                  return (
                    <button
                      key={f.id}
                      onClick={() => setFilterType(f.id as any)}
                      className={`shrink-0 px-3 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-bold border transition-all whitespace-nowrap ${
                        active
                          ? 'text-primary border-primary bg-[#fff8f6]'
                          : 'bg-white/80 border-[#e8dcd0] text-muted-foreground hover:text-primary hover:border-primary hover:bg-[#fff8f6]'
                      }`}
                    >
                      {f.label}
                    </button>
                  );
                })}
                <button
                  onClick={fetchInquiries}
                  className="shrink-0 px-3 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-bold border border-[#e8dcd0] bg-white/80 text-muted-foreground hover:text-primary flex items-center gap-1"
                  aria-label="Refresh"
                >
                  <RefreshCw className="w-3 h-3" /> Refresh
                </button>
              </div>
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-16 sm:py-20">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
            ) : error ? (
              <div className="text-center py-12 sm:py-16 glass-card rounded-2xl px-4">
                <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-3" />
                <p className="text-muted-foreground mb-4 text-sm">{error}</p>
                <Button onClick={fetchInquiries}>Retry</Button>
              </div>
            ) : filteredInquiries.length === 0 ? (
              <div className="text-center py-12 sm:py-16 glass-card rounded-2xl shadow-sm px-4">
                {inquiries.length === 0 ? (
                  <>
                    <Package className="w-14 h-14 sm:w-16 sm:h-16 text-primary/20 mx-auto mb-4" />
                    <h3 className="font-bold text-base sm:text-lg mb-2">No inquiries yet</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm mb-6 max-w-md mx-auto">
                      Submit a material inquiry or RFQ — it will appear here.<br className="hidden sm:block" />
                      Use email: <strong className="break-all">{user?.email}</strong>
                    </p>
                    <div className="flex gap-2.5 sm:gap-3 justify-center flex-wrap">
                      <Link to="/inquiry">
                        <button className="px-5 py-2.5 rounded-xl text-sm font-bold text-white shadow-md"
                                style={{ background: 'linear-gradient(135deg,#c15738,#a8421f)' }}>
                          Submit Inquiry
                        </button>
                      </Link>
                      <Link to="/products">
                        <Button variant="outline">Browse Products</Button>
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <Search className="w-12 h-12 text-primary/20 mx-auto mb-3" />
                    <h3 className="font-bold text-base mb-1">No matches</h3>
                    <p className="text-muted-foreground text-sm">Try a different search or filter</p>
                  </>
                )}
              </div>
            ) : (
              <div className="space-y-2.5 sm:space-y-3">
                {filteredInquiries.map(inq => <InquiryCard key={inq._id} inq={inq} />)}
              </div>
            )}
          </div>
        )}

        {/* ── PROFILE TAB ─────────────────────────────── */}
        {activeTab === 'profile' && (
          <div className="space-y-3.5 sm:space-y-4">
            {/* Account details */}
            <div className="glass-card rounded-2xl overflow-hidden">
              <div className="px-4 sm:px-5 py-3.5 sm:py-4 border-b border-[#f0ebe5] flex items-center justify-between">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0"
                       style={{ background: 'linear-gradient(135deg,#c15738,#a8421f)' }}>
                    <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <h2 className="font-bold text-sm sm:text-base text-gray-900">Account Details</h2>
                </div>
                <button
                  onClick={() => setEditOpen(true)}
                  className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl border border-[#e8dcd0] text-[11px] sm:text-xs font-bold text-primary bg-white hover:bg-[#fff3ef] hover:border-primary transition-all shrink-0"
                >
                  <Edit2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> Edit
                </button>
              </div>
              <div className="p-4 sm:p-5 space-y-2.5 sm:space-y-3">
                {[
                  { icon: User,      label: 'Full Name', value: user?.name,    placeholder: 'Not set' },
                  { icon: Mail,      label: 'Email',     value: user?.email,   placeholder: 'Not set', readonly: true },
                  { icon: Phone,     label: 'Phone',     value: user?.phone,   placeholder: 'Not provided' },
                  { icon: Building2, label: 'Company',   value: user?.company, placeholder: 'Not provided' },
                ].map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <div key={i} className="flex items-center gap-3 p-3 sm:p-3.5 rounded-xl border border-[#f0ebe5] bg-[#fdf9f7] hover:border-[#e0cfc5] transition-colors">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0"
                           style={{ background: 'linear-gradient(135deg,#fff0eb,#ffe0d6)' }}>
                        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[9px] sm:text-[10px] text-muted-foreground font-bold uppercase tracking-wider">{f.label}</p>
                        <p className={`text-xs sm:text-sm font-semibold mt-0.5 truncate ${f.value ? 'text-gray-900' : 'text-gray-400'}`}>
                          {f.value || f.placeholder}
                        </p>
                      </div>
                      {!f.readonly && (
                        <button onClick={() => setEditOpen(true)}
                                className="text-primary hover:text-primary/70 transition-colors shrink-0 p-1">
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Activity summary */}
            <div className="glass-card rounded-2xl p-4 sm:p-5">
              <h3 className="font-bold text-sm text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-primary" /> Activity Summary
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                {[
                  { label: 'Total',          value: totalInquiries },
                  { label: 'Material Inq.',  value: miCount        },
                  { label: 'RFQs',           value: rfqCount       },
                ].map((s, i) => (
                  <div key={i} className="text-center p-3 sm:p-3.5 rounded-xl bg-[#fdf9f7] border border-[#f0ebe5]">
                    <p className="text-xl sm:text-2xl font-extrabold text-primary leading-none">{s.value}</p>
                    <p className="text-[10px] sm:text-[11px] text-muted-foreground mt-1 font-semibold">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Account actions */}
            <div className="glass-card rounded-2xl p-3 sm:p-4 space-y-1">
              <h3 className="font-bold text-sm text-gray-900 mb-2 px-1 sm:px-2 flex items-center gap-2">
                <Settings className="w-4 h-4 text-primary" /> Account Actions
              </h3>
              {[
                { icon: PlusCircle, label: 'Submit New Inquiry', link: '/inquiry'  },
                { icon: Package,    label: 'Browse Products',    link: '/products' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <Link key={i} to={item.link} className="block">
                    <div className="flex items-center justify-between p-3 rounded-xl hover:bg-[#fff8f6] transition-colors cursor-pointer">
                      <div className="flex items-center gap-3 min-w-0">
                        <Icon className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-xs sm:text-sm font-semibold truncate">{item.label}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />
                    </div>
                  </Link>
                );
              })}
              <button onClick={() => { logout(); navigate('/'); }} className="w-full text-left">
                <div className="flex items-center justify-between p-3 rounded-xl hover:bg-red-50 transition-colors">
                  <div className="flex items-center gap-3 min-w-0">
                    <LogOut className="w-4 h-4 text-red-500 shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-red-600">Logout</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />
                </div>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ── CHAT PANEL ──────────────────────────────── */}
      {chatOpen && activeInquiry && (
        <div className="fixed inset-0 z-50 flex items-stretch sm:items-end sm:justify-end">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={closeChat} />
          <div className="relative z-10 w-full sm:w-[440px] h-full sm:h-[90vh] sm:max-h-[90vh] sm:mb-4 sm:mr-4 flex flex-col shadow-2xl rounded-t-2xl sm:rounded-2xl overflow-hidden"
               style={{ background: '#f4f0ec' }}>

            {/* Header */}
            <div className="bg-white/90 backdrop-blur-md border-b border-[#e8dcd0] px-3 sm:px-4 py-3 flex items-center gap-3 shrink-0">
              <button onClick={closeChat} className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors text-muted-foreground sm:hidden shrink-0">
                <ArrowLeft className="w-4 h-4" />
              </button>
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 text-white"
                   style={{ background: 'linear-gradient(135deg,#c15738,#a8421f)' }}>
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-xs sm:text-sm truncate">RitzYard Verified Supplier</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground truncate">
                  {activeInquiry.inquiryNumber} · {activeInquiry.productName}
                </p>
              </div>
              <button onClick={closeChat} className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors text-muted-foreground hidden sm:flex shrink-0">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Product context */}
            <div className="mx-3 mt-3 glass-card rounded-xl p-2.5 sm:p-3 text-[11px] sm:text-xs shrink-0">
              <p className="font-bold text-primary mb-1 flex items-center gap-1 truncate">
                <Package className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                <span className="truncate">{activeInquiry.productName}</span>
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3 text-muted-foreground">
                <span>📦 {activeInquiry.quantity} {activeInquiry.unit}</span>
                {activeInquiry.deliveryLocation && <span>📍 {activeInquiry.deliveryLocation}</span>}
                {activeInquiry.budget && <span>💰 {activeInquiry.budget}</span>}
              </div>
            </div>

            {/* Privacy notice */}
            <div className="mx-3 mt-2 rounded-xl bg-[#fff8f6] border border-[#fde8de] px-3 py-1.5 text-center shrink-0">
              <p className="text-[10px] sm:text-[11px] text-primary font-medium">
                <ShieldCheck className="w-3 h-3 inline mr-1" />
                Your phone number is protected. Chat securely through RitzYard.
              </p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-3 py-3 space-y-1 dark-scrollbar">
              {chatLoading ? (
                <div className="flex items-center justify-center h-full">
                  <Loader className="w-7 h-7 animate-spin text-primary" />
                </div>
              ) : messages.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-8 px-2">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-3"
                       style={{ background: 'linear-gradient(135deg,#fff0eb,#ffe0d6)' }}>
                    <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 text-primary/40" />
                  </div>
                  <p className="font-semibold text-sm mb-1">No messages yet</p>
                  <p className="text-[11px] sm:text-xs text-muted-foreground max-w-[220px]">
                    Your matched supplier will reply here. Send the first message!
                  </p>
                  <div className="mt-4 space-y-2 w-full max-w-xs">
                    {[
                      `Hi, I need ${activeInquiry.quantity} ${activeInquiry.unit} of ${activeInquiry.productName}. Please share your best price.`,
                      'What is the delivery timeline?',
                      'Can you share product specifications?',
                    ].map((s, i) => (
                      <button key={i} onClick={() => setNewMsg(s)}
                              className="w-full text-left text-[11px] sm:text-xs px-3 py-2 rounded-xl bg-white/80 backdrop-blur-sm border border-[#e8dcd0] hover:border-primary hover:text-primary transition-colors">
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                groupedMsgs.map((group, gi) => (
                  <div key={gi}>
                    <div className="flex justify-center my-2.5 sm:my-3">
                      <span className="bg-white/90 text-[10px] sm:text-[11px] text-muted-foreground px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-sm border border-white/50">
                        {group.date}
                      </span>
                    </div>
                    {group.msgs.map((msg) => (
                      <div key={msg._id} className={`flex mb-1.5 sm:mb-2 ${msg.isMine ? 'justify-end' : 'justify-start'}`}>
                        {!msg.isMine && (
                          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center mr-1.5 sm:mr-2 mt-1 flex-shrink-0 text-white text-[10px] sm:text-xs font-bold"
                               style={{ background: msg.senderRole === 'ritzyard' ? '#5c2d23' : 'linear-gradient(135deg,#c15738,#a8421f)' }}>
                            {msg.senderRole === 'ritzyard' ? 'R' : 'S'}
                          </div>
                        )}
                        <div className={`max-w-[78%] sm:max-w-[75%] rounded-2xl px-3 sm:px-4 py-2 sm:py-2.5 shadow-sm ${
                          msg.isMine
                            ? 'text-white rounded-br-md'
                            : msg.senderRole === 'ritzyard'
                            ? 'bg-[#fdf9f7] text-[#5c2d23] rounded-bl-md border border-[#e8dcd0]'
                            : 'bg-white text-foreground rounded-bl-md border border-[#e8dcd0]'
                        }`}
                             style={msg.isMine ? { background: 'linear-gradient(135deg,#c15738,#a8421f)' } : {}}>
                          {!msg.isMine && (
                            <p className="text-[9px] sm:text-[10px] font-bold mb-0.5 text-primary">{msg.senderLabel}</p>
                          )}
                          <p className="text-xs sm:text-sm whitespace-pre-wrap break-words leading-relaxed">{msg.message}</p>
                          <p className={`text-[9px] sm:text-[10px] mt-1 text-right ${msg.isMine ? 'text-white/70' : 'text-muted-foreground'}`}>
                            {fmt(msg.createdAt)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ))
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="bg-white/90 backdrop-blur-md border-t border-[#e8dcd0] px-3 py-2.5 sm:py-3 shrink-0">
              <div className="flex items-center gap-2">
                <Input
                  value={newMsg}
                  onChange={e => setNewMsg(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message…"
                  className="flex-1 h-10 sm:h-11 rounded-full bg-[#fdf9f7] border-[#e8dcd0] focus:border-primary focus:ring-primary/20 text-sm"
                  maxLength={2000}
                  disabled={sending || !chatToken}
                />
                <button
                  onClick={sendMessage}
                  disabled={!newMsg.trim() || sending || !chatToken}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-white shadow-md hover:scale-105 transition-all disabled:opacity-50 disabled:scale-100 flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg,#c15738,#a8421f)' }}
                >
                  {sending ? <Loader className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── EDIT PROFILE MODAL ──────────────────────── */}
      {editOpen && (
        <EditProfileModal
          onClose={() => setEditOpen(false)}
          user={user}
          onSave={handleSaveProfile}
          saving={editSaving}
        />
      )}

      <Footer />
    </div>
  );
};

export default BuyerDashboard;
