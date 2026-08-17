import { useState, useMemo } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/contexts/AuthContext';
import {
  Eye, EyeOff, Loader2, ShieldCheck, User, Mail, Phone, Building2,
  Lock, Check, X, ArrowRight, Sparkles, MessageSquare, Package,
  TrendingUp, Globe, ChevronLeft, AlertCircle, Star,
} from 'lucide-react';
import { GoogleLogin } from '@react-oauth/google';
import ritzyardLogo from '@/assets/RITZYARD3.svg';

const GOOGLE_CLIENT_ID = (import.meta.env.VITE_GOOGLE_CLIENT_ID as string | undefined) || '';

/* ───────── Password strength ───────── */
const getPasswordStrength = (pwd: string) => {
  if (!pwd) return { score: 0, label: 'Enter a password', color: 'bg-gray-200', text: 'text-gray-400' };
  let score = 0;
  if (pwd.length >= 6) score++;
  if (pwd.length >= 10) score++;
  if (/[A-Z]/.test(pwd) && /[a-z]/.test(pwd)) score++;
  if (/\d/.test(pwd)) score++;
  if (/[^A-Za-z0-9]/.test(pwd)) score++;
  const levels = [
    { label: 'Too weak',  color: 'bg-red-500',   text: 'text-red-500'   },
    { label: 'Weak',      color: 'bg-orange-500', text: 'text-orange-500' },
    { label: 'Fair',      color: 'bg-amber-500',  text: 'text-amber-600' },
    { label: 'Good',      color: 'bg-lime-500',   text: 'text-lime-600'  },
    { label: 'Strong',    color: 'bg-emerald-500',text: 'text-emerald-600' },
    { label: 'Excellent', color: 'bg-emerald-600',text: 'text-emerald-700' },
  ];
  return { score, ...levels[score] };
};

/* ───────── Email validity ───────── */
const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

/* ───────── Marketing panel (left, desktop only) ───────── */
const MarketingPanel = () => {
  const features = [
    { icon: MessageSquare, label: 'Real-time chat with verified suppliers' },
    { icon: TrendingUp,    label: 'Track every inquiry from quote to delivery' },
    { icon: Package,       label: 'Get multiple competing quotes in minutes' },
    { icon: Globe,         label: 'Pan-India supplier network at your fingertips' },
  ];
  const stats = [
    { value: '10K+',  label: 'Verified Suppliers' },
    { value: '50K+',  label: 'Quotes Delivered'   },
    { value: '4.8★',  label: 'Buyer Rating'       },
  ];
  return (
    <div className="relative hidden lg:flex flex-col justify-between p-8 xl:p-10 overflow-hidden text-white"
         style={{ background: 'linear-gradient(140deg, #c15738 0%, #a8421f 55%, #5c2d23 100%)' }}>
      {/* Decorative blobs */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-20 blur-3xl"
           style={{ background: 'radial-gradient(circle, #f8d3b8 0%, transparent 70%)' }} />
      <div className="absolute -bottom-24 -left-12 w-96 h-96 rounded-full opacity-15 blur-3xl"
           style={{ background: 'radial-gradient(circle, #f8d3b8 0%, transparent 70%)' }} />
      <div className="absolute inset-0 opacity-[0.06]"
           style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

      <div className="relative z-10">
        {/* Brand */}
        <Link to="/" className="inline-flex items-center gap-3 mb-7">
          <div className="w-11 h-11 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center overflow-hidden shadow-lg">
            <img src={ritzyardLogo} alt="RitzYard" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-xl font-semibold leading-none tracking-tight">RitzYard</p>
            <p className="text-[11px] text-white/70 mt-1 tracking-wide font-normal">Where Value Meets Velocity</p>
          </div>
        </Link>

        {/* Hero copy */}
        <div className="max-w-md">
          <div className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 text-[11px] font-semibold mb-4">
            <Sparkles className="w-3 h-3 text-white" />
            For Buyers
          </div>
          <h1 className="text-3xl xl:text-4xl font-semibold leading-[1.15] tracking-tight">
            Source materials.<br />
            <span className="text-white/95">Skip the chase.</span>
          </h1>
          <p className="text-white/80 text-sm mt-3 leading-relaxed">
            Post a material inquiry once — get matched, chat and compare quotes from verified Indian suppliers in one place.
          </p>
        </div>

        {/* Features */}
        <ul className="mt-6 space-y-2.5 max-w-md">
          {features.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-2.5">
              <span className="shrink-0 w-6 h-6 rounded-md bg-white/15 border border-white/20 flex items-center justify-center">
                <Icon className="w-3 h-3 text-white" />
              </span>
              <span className="text-[13px] text-white/90 leading-snug">{label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative z-10 space-y-4 mt-6">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-2.5 max-w-md">
          {stats.map(({ value, label }) => (
            <div key={label} className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl px-2.5 py-2.5 text-center">
              <p className="text-lg xl:text-xl font-semibold text-white leading-none">{value}</p>
              <p className="text-[9px] text-white/75 mt-1.5 uppercase tracking-wider font-semibold leading-tight">{label}</p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl p-3.5 max-w-md">
          <div className="flex items-center gap-0.5 mb-1.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-amber-300 text-amber-300" />
            ))}
          </div>
          <p className="text-[12px] text-white/90 leading-relaxed">
            “Got 4 quotes within 30 minutes for 500 kg of cold-rolled steel. Closed the deal without a single phone call.”
          </p>
          <p className="text-[10px] text-white/70 mt-2 font-semibold">— Procurement Lead, Pune</p>
        </div>
      </div>
    </div>
  );
};

/* ───────── Form panel (right) ───────── */
const BuyerLogin = () => {
  const { login, signup, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const [tab, setTab]         = useState<'login' | 'signup'>('login');
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState('');

  const [loginForm,  setLoginForm]  = useState({ email: '', password: '' });
  const [signupForm, setSignupForm] = useState({ name: '', email: '', phone: '', company: '', password: '' });
  const [showPwd,   setShowPwd]   = useState(false);
  const [touched,   setTouched]   = useState<Record<string, boolean>>({});

  const emailValid  = useMemo(() => isValidEmail(loginForm.email),  [loginForm.email]);
  const emailValid2 = useMemo(() => isValidEmail(signupForm.email), [signupForm.email]);
  const pwdStrength = useMemo(() => getPasswordStrength(signupForm.password), [signupForm.password]);

  const switchTab = (t: 'login' | 'signup') => { setTab(t); setError(''); setTouched({}); };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginForm.email || !loginForm.password) { setError('Please fill all fields'); return; }
    setError(''); setLoading(true);
    const result = await login(loginForm.email, loginForm.password);
    setLoading(false);
    if (result.success) navigate('/dashboard');
    else setError(result.message || 'Login failed');
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!signupForm.name || !signupForm.email || !signupForm.password) {
      setError('Name, email and password are required'); return;
    }
    if (!emailValid2) { setError('Please enter a valid email address'); return; }
    if (signupForm.password.length < 6) { setError('Password must be at least 6 characters'); return; }
    setError(''); setLoading(true);
    const result = await signup(signupForm.name, signupForm.email, signupForm.password, signupForm.phone, signupForm.company);
    setLoading(false);
    if (result.success) navigate('/dashboard');
    else setError(result.message || 'Signup failed');
  };

  const handleGoogleSuccess = async (credResponse: any) => {
    const credential: string | undefined = credResponse?.credential;
    if (!credential) { setError('Google sign-in did not return a credential'); return; }
    setError(''); setLoading(true);
    const result = await loginWithGoogle(credential);
    setLoading(false);
    if (result.success) navigate('/dashboard');
    else setError(result.message || 'Google sign-in failed');
  };
  const handleGoogleError = () => setError('Google sign-in was cancelled or failed');

  /* ── Reusable field shell ── */
  const Field = ({
    label, icon: Icon, error: fieldError, success, children,
  }: { label: string; icon: any; error?: string; success?: boolean; children: React.ReactNode }) => (
    <div>
      <label className="text-xs font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5">
        <Icon className="w-3.5 h-3.5 text-primary" /> {label}
      </label>
      <div className="relative">
        {children}
        {(success || fieldError) && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            {success  && <Check className="w-4 h-4 text-emerald-500" />}
            {fieldError && <X className="w-4 h-4 text-red-500" />}
          </div>
        )}
      </div>
      {fieldError && <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{fieldError}</p>}
    </div>
  );

  return (
    <div className="min-h-screen flex bg-[hsl(var(--background))]">
      {/* ─── Marketing (desktop) ─── */}
      <MarketingPanel />

      {/* ─── Form side ─── */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Mobile brand bar */}
        <div className="lg:hidden px-5 pt-6 pb-2 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md overflow-hidden"
                 style={{ background: 'linear-gradient(135deg, #c15738, #a8421f)' }}>
              <img src={ritzyardLogo} alt="RitzYard" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-lg font-bold leading-none">
                <span className="text-primary">R</span>itzYard
              </p>
              <p className="text-[10px] text-muted-foreground mt-0.5">Where Value Meets Velocity</p>
            </div>
          </Link>
          <Link to="/" className="text-xs font-medium text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors">
            <ChevronLeft className="w-3.5 h-3.5" /> Home
          </Link>
        </div>

        {/* Form container */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-10 py-6 lg:py-8">
          <div className="w-full max-w-md animate-slide-up">
            {/* Header */}
            <div className="text-center mb-6">
              <div className="hidden lg:inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 rounded-full px-3 py-1 text-[11px] font-semibold text-primary mb-2.5">
                <ShieldCheck className="w-3.5 h-3.5" /> Buyer Account
              </div>
              <h2 className="text-2xl sm:text-[26px] font-semibold text-gray-900 tracking-tight">
                {tab === 'login' ? 'Welcome back' : 'Create your account'}
              </h2>
              <p className="text-[13px] text-muted-foreground mt-1.5 leading-relaxed">
                {tab === 'login'
                  ? 'Sign in to track all your inquiries and quotes'
                  : 'Get started in under a minute — no credit card needed'}
              </p>
            </div>

            {/* Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              {/* Tabs */}
              <div className="grid grid-cols-2 relative border-b border-gray-100">
                {(['login', 'signup'] as const).map((t) => {
                  const active = tab === t;
                  return (
                    <button
                      key={t}
                      onClick={() => switchTab(t)}
                      className={`relative py-3.5 text-sm font-semibold transition-colors ${
                        active ? 'text-primary' : 'text-muted-foreground hover:text-gray-700'
                      }`}
                    >
                      {t === 'login' ? 'Login' : 'Create Account'}
                      {active && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-0.5 rounded-full bg-primary" />
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="p-5 sm:p-6">
                {/* Error banner */}
                {error && (
                  <div className="mb-4 flex items-start gap-2.5 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-3.5 py-2.5">
                    <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                    <span className="leading-snug">{error}</span>
                  </div>
                )}

                {/* Google sign-in — official <GoogleLogin> uses Google's GSI iframe
                    (no popup, no COOP/COEP issues) and supports shape="pill" for
                    a fully rounded look that matches the RitzYard theme. */}
                {GOOGLE_CLIENT_ID && (
                  <>
                    <div className="w-full flex justify-center [&>div]:w-full [&_iframe]:!w-full">
                      <GoogleLogin
                        onSuccess={handleGoogleSuccess}
                        onError={handleGoogleError}
                        shape="pill"
                        theme="outline"
                        size="large"
                        text={tab === 'login' ? 'continue_with' : 'signup_with'}
                        width={360}
                        logo_alignment="left"
                        useOneTap={false}
                      />
                    </div>
                    <div className="flex items-center gap-3 my-4">
                      <div className="flex-1 h-px bg-gray-200" />
                      <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                        or use email
                      </span>
                      <div className="flex-1 h-px bg-gray-200" />
                    </div>
                  </>
                )}

                {/* LOGIN FORM */}
                {tab === 'login' && (
                  <form onSubmit={handleLogin} className="space-y-4">
                    <Field label="Email Address" icon={Mail}>
                      <Input
                        type="email"
                        placeholder="you@company.com"
                        value={loginForm.email}
                        onChange={e => setLoginForm({ ...loginForm, email: e.target.value })}
                        onBlur={() => setTouched(t => ({ ...t, email: true }))}
                        className={`h-11 rounded-xl pr-10 transition-all ${
                          touched.email && loginForm.email && !emailValid
                            ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20'
                            : 'border-gray-200 focus:border-primary focus:ring-primary/20'
                        }`}
                        required
                        autoComplete="email"
                      />
                    </Field>

                    <Field label="Password" icon={Lock}>
                      <Input
                        type={showPwd ? 'text' : 'password'}
                        placeholder="Enter your password"
                        value={loginForm.password}
                        onChange={e => setLoginForm({ ...loginForm, password: e.target.value })}
                        className="h-11 rounded-xl pr-10 border-gray-200 focus:border-primary focus:ring-primary/20"
                        required
                        autoComplete="current-password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPwd(!showPwd)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                        aria-label={showPwd ? 'Hide password' : 'Show password'}
                      >
                        {showPwd ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </Field>

                    <div className="flex items-center justify-between text-xs">
                      <label className="flex items-center gap-2 text-muted-foreground cursor-pointer select-none">
                        <input type="checkbox" className="w-3.5 h-3.5 rounded border-gray-300 text-primary focus:ring-primary/20" />
                        Remember me
                      </label>
                      <Link to="/forgot-password" className="text-primary font-semibold hover:underline">Forgot password?</Link>
                    </div>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full h-11 rounded-full text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all group"
                      style={{ background: 'linear-gradient(135deg,#c15738,#a8421f)' }}
                    >
                      {loading
                        ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Signing in…</>
                        : <>Sign in
                            <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
                          </>}
                    </Button>

                    <p className="text-center text-sm text-muted-foreground pt-1">
                      Don't have an account?{' '}
                      <button type="button" onClick={() => switchTab('signup')} className="text-primary font-bold hover:underline">
                        Create an account
                      </button>
                    </p>
                  </form>
                )}

                {/* SIGNUP FORM */}
                {tab === 'signup' && (
                  <form onSubmit={handleSignup} className="space-y-3.5">
                    <Field label="Full Name *" icon={User}>
                      <Input
                        placeholder="Your full name"
                        value={signupForm.name}
                        onChange={e => setSignupForm({ ...signupForm, name: e.target.value })}
                        className="h-11 rounded-xl border-gray-200 focus:border-primary focus:ring-primary/20"
                        required
                        autoComplete="name"
                      />
                    </Field>

                    <Field
                      label="Email Address *"
                      icon={Mail}
                      success={touched.email && emailValid2}
                      error={touched.email && signupForm.email && !emailValid2 ? 'Enter a valid email' : undefined}
                    >
                      <Input
                        type="email"
                        placeholder="you@company.com"
                        value={signupForm.email}
                        onChange={e => setSignupForm({ ...signupForm, email: e.target.value })}
                        onBlur={() => setTouched(t => ({ ...t, email: true }))}
                        className={`h-11 rounded-xl pr-10 transition-all ${
                          touched.email && signupForm.email && !emailValid2
                            ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20'
                            : 'border-gray-200 focus:border-primary focus:ring-primary/20'
                        }`}
                        required
                        autoComplete="email"
                      />
                    </Field>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <Field label="Phone (optional)" icon={Phone}>
                        <Input
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={signupForm.phone}
                          onChange={e => setSignupForm({ ...signupForm, phone: e.target.value })}
                          className="h-11 rounded-xl border-gray-200 focus:border-primary focus:ring-primary/20"
                          autoComplete="tel"
                        />
                      </Field>
                      <Field label="Company (optional)" icon={Building2}>
                        <Input
                          placeholder="Your company"
                          value={signupForm.company}
                          onChange={e => setSignupForm({ ...signupForm, company: e.target.value })}
                          className="h-11 rounded-xl border-gray-200 focus:border-primary focus:ring-primary/20"
                          autoComplete="organization"
                        />
                      </Field>
                    </div>

                    <Field label="Password *" icon={Lock}>
                      <Input
                        type={showPwd ? 'text' : 'password'}
                        placeholder="Minimum 6 characters"
                        value={signupForm.password}
                        onChange={e => setSignupForm({ ...signupForm, password: e.target.value })}
                        className="h-11 rounded-xl pr-10 border-gray-200 focus:border-primary focus:ring-primary/20"
                        required
                        autoComplete="new-password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPwd(!showPwd)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                        aria-label={showPwd ? 'Hide password' : 'Show password'}
                      >
                        {showPwd ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </Field>

                    {/* Password strength meter */}
                    {signupForm.password && (
                      <div className="space-y-1.5 -mt-1">
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <div
                              key={i}
                              className={`h-1 flex-1 rounded-full transition-all ${
                                i <= pwdStrength.score ? pwdStrength.color : 'bg-gray-200'
                              }`}
                            />
                          ))}
                        </div>
                        <p className={`text-[11px] font-semibold ${pwdStrength.text}`}>
                          {pwdStrength.label}
                        </p>
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full h-11 rounded-full text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all group mt-2"
                      style={{ background: 'linear-gradient(135deg,#c15738,#a8421f)' }}
                    >
                      {loading
                        ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Creating account…</>
                        : <>Create my account
                            <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
                          </>}
                    </Button>

                    <p className="text-[11px] text-center text-muted-foreground leading-relaxed pt-1">
                      By creating an account, you agree to RitzYard's
                      <br className="hidden sm:block" />{' '}
                      <a href="#" className="text-primary font-semibold hover:underline">Terms</a> and{' '}
                      <a href="#" className="text-primary font-semibold hover:underline">Privacy Policy</a>.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Footer link */}
            <div className="text-center mt-6">
              <Link to="/" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                <ChevronLeft className="w-3.5 h-3.5" /> Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerLogin;
