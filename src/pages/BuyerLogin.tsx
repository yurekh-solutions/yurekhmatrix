import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { Eye, EyeOff, Loader2, ShieldCheck, User, Mail, Phone, Building2, Lock } from 'lucide-react';
import ritzyardLogo from '@/assets/RITZYARD3.svg';

const BuyerLogin = () => {
  const { login, signup } = useAuth();
  const navigate = useNavigate();
  const [tab, setTab] = useState<'login' | 'signup'>('login');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [signupForm, setSignupForm] = useState({ name: '', email: '', phone: '', company: '', password: '' });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginForm.email || !loginForm.password) { setError('Please fill all fields'); return; }
    setError(''); setLoading(true);
    const result = await login(loginForm.email, loginForm.password);
    setLoading(false);
    if (result.success) {
      navigate('/dashboard');
    } else {
      setError(result.message || 'Login failed');
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!signupForm.name || !signupForm.email || !signupForm.password) { setError('Name, email and password are required'); return; }
    if (signupForm.password.length < 6) { setError('Password must be at least 6 characters'); return; }
    setError(''); setLoading(true);
    const result = await signup(signupForm.name, signupForm.email, signupForm.password, signupForm.phone, signupForm.company);
    setLoading(false);
    if (result.success) {
      navigate('/dashboard');
    } else {
      setError(result.message || 'Signup failed');
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md overflow-hidden">
              <img src={ritzyardLogo} alt="RitzYard" className="w-full h-full object-cover" />
            </div>
            <div className="text-left">
              <p className="text-2xl font-bold leading-tight notranslate">
                <span className="text-primary">r</span><span className="text-[#452a21]">itz </span><span className="text-[#452a21]">yard</span>
              </p>
              <p className="text-xs text-muted-foreground">Where Value Meets Velocity</p>
            </div>
          </Link>
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm text-primary mb-2">
            <ShieldCheck className="w-4 h-4" />
            Buyer Account — Track all your inquiries
          </div>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Tabs */}
          <div className="grid grid-cols-2 border-b border-gray-100">
            {(['login', 'signup'] as const).map((t) => (
              <button
                key={t}
                onClick={() => { setTab(t); setError(''); }}
                className={`py-4 text-sm font-semibold capitalize transition-colors ${
                  tab === t
                    ? 'text-primary border-b-2 border-primary bg-primary/5'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {t === 'login' ? 'Login' : 'Create Account'}
              </button>
            ))}
          </div>

          <div className="p-6">
            {/* Error */}
            {error && (
              <div className="mb-4 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-2.5">
                {error}
              </div>
            )}

            {/* LOGIN FORM */}
            {tab === 'login' && (
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <Label className="text-sm font-medium flex items-center gap-2 mb-1.5">
                    <Mail className="w-4 h-4 text-primary" /> Email Address
                  </Label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={loginForm.email}
                    onChange={e => setLoginForm({ ...loginForm, email: e.target.value })}
                    className="h-11"
                    required
                  />
                </div>
                <div>
                  <Label className="text-sm font-medium flex items-center gap-2 mb-1.5">
                    <Lock className="w-4 h-4 text-primary" /> Password
                  </Label>
                  <div className="relative">
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      value={loginForm.password}
                      onChange={e => setLoginForm({ ...loginForm, password: e.target.value })}
                      className="h-11 pr-11"
                      required
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3 text-muted-foreground hover:text-foreground">
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
                <Button type="submit" disabled={loading} className="w-full h-11 bg-primary hover:bg-primary/90 text-white font-semibold">
                  {loading ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Logging in...</> : 'Login to My Account'}
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  No account?{' '}
                  <button type="button" onClick={() => setTab('signup')} className="text-primary font-medium hover:underline">
                    Create one free
                  </button>
                </p>
              </form>
            )}

            {/* SIGNUP FORM */}
            {tab === 'signup' && (
              <form onSubmit={handleSignup} className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <Label className="text-sm font-medium flex items-center gap-2 mb-1.5">
                      <User className="w-4 h-4 text-primary" /> Full Name *
                    </Label>
                    <Input
                      placeholder="Your full name"
                      value={signupForm.name}
                      onChange={e => setSignupForm({ ...signupForm, name: e.target.value })}
                      className="h-11"
                      required
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-medium flex items-center gap-2 mb-1.5">
                      <Mail className="w-4 h-4 text-primary" /> Email Address *
                    </Label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      value={signupForm.email}
                      onChange={e => setSignupForm({ ...signupForm, email: e.target.value })}
                      className="h-11"
                      required
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-medium flex items-center gap-2 mb-1.5">
                      <Phone className="w-4 h-4 text-primary" /> Phone (optional)
                    </Label>
                    <Input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={signupForm.phone}
                      onChange={e => setSignupForm({ ...signupForm, phone: e.target.value })}
                      className="h-11"
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-medium flex items-center gap-2 mb-1.5">
                      <Building2 className="w-4 h-4 text-primary" /> Company (optional)
                    </Label>
                    <Input
                      placeholder="Your company name"
                      value={signupForm.company}
                      onChange={e => setSignupForm({ ...signupForm, company: e.target.value })}
                      className="h-11"
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-medium flex items-center gap-2 mb-1.5">
                      <Lock className="w-4 h-4 text-primary" /> Password *
                    </Label>
                    <div className="relative">
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Minimum 6 characters"
                        value={signupForm.password}
                        onChange={e => setSignupForm({ ...signupForm, password: e.target.value })}
                        className="h-11 pr-11"
                        required
                      />
                      <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3 text-muted-foreground hover:text-foreground">
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                </div>
                <Button type="submit" disabled={loading} className="w-full h-11 bg-primary hover:bg-primary/90 text-white font-semibold">
                  {loading ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Creating account...</> : 'Create My Account'}
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  Use the same email you used when submitting inquiries to see your history.
                </p>
              </form>
            )}
          </div>
        </div>

        <div className="text-center mt-6">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyerLogin;
