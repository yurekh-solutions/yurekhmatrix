import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

// Get API URL (matches AuthContext.getApiUrl)
const getApiUrl = () => {
  if (import.meta.env.VITE_API_URL) return import.meta.env.VITE_API_URL;
  if (typeof window !== 'undefined' && window.location.hostname !== 'localhost') {
    return 'https://backendmatrix-9q18.onrender.com/api';
  }
  return 'http://localhost:5000/api';
};

const API_URL = getApiUrl();

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [devResetLink, setDevResetLink] = useState<string | null>(null);

  const isValidEmail = (val: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      toast({
        title: 'Invalid email',
        description: 'Please enter a valid email address.',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/auth/user/forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setEmailSent(true);
        // Dev mode: backend returns the reset link directly (SMTP not configured)
        if (data.devResetLink) {
          setDevResetLink(data.devResetLink);
        }
        toast({
          title: 'Check Your Email',
          description: 'If an account exists, a reset link has been sent',
        });
      } else {
        throw new Error(data.message || 'Failed to send reset email');
      }
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to send reset email',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
         style={{ background: 'linear-gradient(140deg, #fef7f3 0%, #f3f0ec 60%, #f8d3b8 100%)' }}>
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-[0.05]"
             style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #a8421f 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-30 blur-3xl"
             style={{ background: 'radial-gradient(circle, #c15738 0%, transparent 70%)' }} />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full opacity-25 blur-3xl"
             style={{ background: 'radial-gradient(circle, #f8d3b8 0%, transparent 70%)' }} />
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="bg-white border-2 border-white/60 shadow-2xl rounded-3xl overflow-hidden backdrop-blur-2xl">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#c15738]/10 via-[#a8421f]/10 to-[#5c2d23]/10 border-b border-white/20 p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#c15738] via-[#a8421f] to-[#5c2d23] flex items-center justify-center shadow-xl">
                <Mail className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Reset Your Password
            </h2>
            <p className="text-muted-foreground text-sm">
              Enter your account email and we'll send you a link to reset your password.
            </p>
          </div>

          <div className="p-8">
            {!emailSent ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-semibold">Email Address</Label>
                  <div className="relative group">
                    <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-br from-[#c15738] to-[#5c2d23] rounded-l-lg flex items-center justify-center group-hover:shadow-lg transition-all z-10">
                      <Mail className="w-5 h-5 text-white drop-shadow-md" />
                    </div>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-14 h-12 border-2 border-border/50 focus:border-[#c15738] bg-background/50 backdrop-blur-sm rounded-lg"
                      required
                      autoComplete="email"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 text-white font-semibold text-base transition-all duration-300 disabled:opacity-50"
                  style={{ background: 'linear-gradient(135deg, #c15738 0%, #a8421f 50%, #5c2d23 100%)' }}
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Mail className="w-5 h-5" />
                      Send Reset Link
                    </span>
                  )}
                </Button>

                <div className="rounded-xl p-5 border-2 border-blue-200/50 bg-blue-50/40">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Mail className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-blue-900 mb-1">How it works</p>
                      <p className="text-xs text-blue-800 leading-relaxed">
                        Enter the email you used to sign up. We'll send a secure link that
                        lets you set a new password. The link expires in 1 hour.
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            ) : (
              <div className="space-y-6 text-center">
                <div className="flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Check Your Email</h3>
                  <p className="text-sm text-muted-foreground">
                    If an account exists for <strong className="text-foreground">{email}</strong>,
                    we've sent a password reset link.
                  </p>
                </div>

                <div className="bg-amber-50/80 border-2 border-amber-200/80 rounded-lg p-4 backdrop-blur-sm text-left">
                  <p className="text-xs text-amber-800">
                    ⏳ The link expires in 1 hour. If you don't see the email, check your
                    spam folder or try again.
                  </p>
                </div>

                {devResetLink && (
                  <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4 backdrop-blur-sm text-left">
                    <p className="text-xs font-semibold text-blue-900 mb-2">Dev Mode: Email not configured</p>
                    <p className="text-[11px] text-blue-800 mb-2">Click below to test the reset flow:</p>
                    <a
                      href={devResetLink}
                      className="block break-all text-[11px] text-blue-700 underline hover:text-blue-900 bg-white border border-blue-200 rounded p-2 mb-2"
                    >
                      {devResetLink}
                    </a>
                    <Button
                      onClick={() => navigate(devResetLink.replace(/^https?:\/\/[^/]+/, ''))}
                      className="w-full h-9 text-xs bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Open Reset Page
                    </Button>
                  </div>
                )}

                <Button
                  onClick={() => navigate('/login')}
                  className="w-full h-12 text-white font-semibold transition-all"
                  style={{ background: 'linear-gradient(135deg, #c15738 0%, #a8421f 50%, #5c2d23 100%)' }}
                >
                  Back to Login
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Back to Login */}
        <div className="text-center mt-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/login')}
            className="group bg-transparent border-2 border-[#c15738]/40 text-[#a8421f] backdrop-blur-xl px-6 py-3 h-auto rounded-xl shadow-lg hover:bg-[#c15738]/5"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#c15738]/30 to-[#5c2d23]/30 flex items-center justify-center">
                <ArrowLeft className="w-4 h-4 text-[#a8421f]" />
              </div>
              <span className="font-semibold text-sm">Back to Login</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
