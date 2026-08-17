import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { Lock, ArrowLeft, Eye, EyeOff, CheckCircle, AlertCircle } from 'lucide-react';
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

const ResetPassword = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    email: '',
    token: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);
  const [isValidToken, setIsValidToken] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    // Extract email and token from URL
    const email = searchParams.get('email');
    const token = searchParams.get('token');

    if (!email || !token) {
      setIsValidToken(false);
      toast({
        title: 'Invalid Link',
        description: 'The reset link is missing required information',
        variant: 'destructive',
      });
      return;
    }

    setFormData((prev) => ({
      ...prev,
      email: decodeURIComponent(email),
      token,
    }));
  }, [searchParams, toast]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.password || !formData.confirmPassword) {
      toast({
        title: 'Error',
        description: 'Please fill in all password fields',
        variant: 'destructive',
      });
      return;
    }

    if (formData.password.length < 6) {
      toast({
        title: 'Error',
        description: 'Password must be at least 6 characters long',
        variant: 'destructive',
      });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: 'Error',
        description: 'Passwords do not match',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/auth/user/reset-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          token: formData.token,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setResetSuccess(true);
        toast({
          title: 'Success',
          description: 'Your password has been reset. You can now log in.',
        });
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      } else {
        throw new Error(data.message || 'Failed to reset password');
      }
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to reset password',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  if (!isValidToken) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
           style={{ background: 'linear-gradient(140deg, #fef7f3 0%, #f3f0ec 60%, #f8d3b8 100%)' }}>
        <div className="w-full max-w-md relative z-10">
          <div className="bg-white border-2 border-white/60 shadow-2xl rounded-3xl overflow-hidden backdrop-blur-2xl">
            <div className="bg-red-50/60 border-b border-white/20 p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 rounded-2xl bg-red-100 flex items-center justify-center shadow-xl">
                  <AlertCircle className="w-10 h-10 text-red-600" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-red-600 mb-2">Invalid Link</h2>
              <p className="text-sm text-red-500">This password reset link is invalid or has expired</p>
            </div>
            <div className="p-8 text-center space-y-4">
              <p className="text-muted-foreground">Please request a new password reset link from the login page.</p>
              <Button
                onClick={() => navigate('/login')}
                className="w-full h-12 text-white font-semibold"
                style={{ background: 'linear-gradient(135deg, #c15738 0%, #a8421f 50%, #5c2d23 100%)' }}
              >
                Back to Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
          <div className="bg-gradient-to-r from-[#c15738]/10 via-[#a8421f]/10 to-[#5c2d23]/10 border-b border-white/20 p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#c15738] via-[#a8421f] to-[#5c2d23] flex items-center justify-center shadow-xl">
                <Lock className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Create New Password
            </h2>
            <p className="text-muted-foreground text-sm">
              Enter a new password for your RitzYard buyer account.
            </p>
          </div>

          <div className="p-8">
            {!resetSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Display */}
                <div className="bg-muted/50 rounded-lg p-4">
                  <p className="text-xs text-muted-foreground mb-1">Account</p>
                  <p className="text-sm font-semibold text-foreground break-all">{formData.email}</p>
                </div>

                {/* New Password */}
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-foreground font-semibold">New Password</Label>
                  <div className="relative group">
                    <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-br from-[#c15738] to-[#5c2d23] rounded-l-lg flex items-center justify-center group-hover:shadow-lg transition-all z-10">
                      <Lock className="w-5 h-5 text-white drop-shadow-md" />
                    </div>
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter new password (min 6 characters)"
                      value={formData.password}
                      onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
                      className="pl-14 pr-12 h-12 border-2 border-border/50 focus:border-[#c15738] bg-background/50 backdrop-blur-sm rounded-lg"
                      required
                      minLength={6}
                      autoComplete="new-password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-[#a8421f] transition-colors p-2 rounded-lg hover:bg-[#c15738]/10"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="space-y-2">
                  <Label htmlFor="confirm-password" className="text-foreground font-semibold">Confirm Password</Label>
                  <div className="relative group">
                    <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-br from-[#c15738] to-[#5c2d23] rounded-l-lg flex items-center justify-center group-hover:shadow-lg transition-all z-10">
                      <Lock className="w-5 h-5 text-white drop-shadow-md" />
                    </div>
                    <Input
                      id="confirm-password"
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="Re-enter your password"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData((prev) => ({ ...prev, confirmPassword: e.target.value }))}
                      className="pl-14 pr-12 h-12 border-2 border-border/50 focus:border-[#c15738] bg-background/50 backdrop-blur-sm rounded-lg"
                      required
                      minLength={6}
                      autoComplete="new-password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-[#a8421f] transition-colors p-2 rounded-lg hover:bg-[#c15738]/10"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
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
                      Resetting...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Lock className="w-5 h-5" />
                      Reset Password
                    </span>
                  )}
                </Button>

                <div className="rounded-xl p-4 border-2 border-blue-200/50 bg-blue-50/40">
                  <p className="text-xs text-blue-800">
                    ✓ Password must be at least 6 characters<br />
                    ✓ Make sure both passwords match<br />
                    ✓ You'll be able to login immediately after
                  </p>
                </div>
              </form>
            ) : (
              <div className="space-y-6 text-center py-4">
                <div className="flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Password Reset Successful!</h3>
                  <p className="text-sm text-muted-foreground">
                    Your password has been successfully reset. You'll be redirected to login shortly.
                  </p>
                </div>
                <Button
                  onClick={() => navigate('/login')}
                  className="w-full h-12 text-white font-semibold transition-all"
                  style={{ background: 'linear-gradient(135deg, #c15738 0%, #a8421f 50%, #5c2d23 100%)' }}
                >
                  Go to Login
                </Button>
              </div>
            )}
          </div>
        </div>

        {!resetSuccess && (
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
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
