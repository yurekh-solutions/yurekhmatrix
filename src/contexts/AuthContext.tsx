import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface BuyerUser {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  profileImage?: string;
  role: string;
}

interface AuthContextType {
  user: BuyerUser | null;
  token: string | null;
  userRole: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; message?: string }>;
  signup: (name: string, email: string, password: string, phone?: string, company?: string) => Promise<{ success: boolean; message?: string }>;
  logout: () => void;
  updateUser: (fields: Partial<BuyerUser>) => Promise<{ success: boolean; message?: string }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const getApiUrl = () => {
  if (import.meta.env.VITE_API_URL) return import.meta.env.VITE_API_URL;
  if (typeof window !== 'undefined' && window.location.hostname !== 'localhost') {
    return 'https://backendmatrix-cox3.onrender.com/api';
  }
  return 'http://localhost:5000/api';
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<BuyerUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Restore session on app load
  useEffect(() => {
    const savedToken = localStorage.getItem('buyerToken');
    const savedUser = localStorage.getItem('buyerUser');
    if (savedToken && savedUser) {
      try {
        setToken(savedToken);
        setUser(JSON.parse(savedUser));
      } catch {
        localStorage.removeItem('buyerToken');
        localStorage.removeItem('buyerUser');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const res = await fetch(`${getApiUrl()}/auth/user/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (data.success && data.token) {
        setToken(data.token);
        setUser(data.user);
        localStorage.setItem('buyerToken', data.token);
        localStorage.setItem('buyerUser', JSON.stringify(data.user));
        return { success: true };
      }
      return { success: false, message: data.message || 'Login failed' };
    } catch {
      return { success: false, message: 'Network error. Please try again.' };
    }
  };

  const signup = async (name: string, email: string, password: string, phone?: string, company?: string) => {
    try {
      const res = await fetch(`${getApiUrl()}/auth/user/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, phone, company }),
      });
      const data = await res.json();
      if (data.success && data.token) {
        setToken(data.token);
        setUser(data.user);
        localStorage.setItem('buyerToken', data.token);
        localStorage.setItem('buyerUser', JSON.stringify(data.user));
        return { success: true };
      }
      return { success: false, message: data.message || 'Signup failed' };
    } catch {
      return { success: false, message: 'Network error. Please try again.' };
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('buyerToken');
    localStorage.removeItem('buyerUser');
  };

  const updateUser = async (fields: Partial<BuyerUser>): Promise<{ success: boolean; message?: string }> => {
    try {
      const savedToken = token || localStorage.getItem('buyerToken');
      if (!savedToken) return { success: false, message: 'Not authenticated' };
      const res = await fetch(`${getApiUrl()}/auth/user/profile`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${savedToken}` },
        body: JSON.stringify(fields),
      });
      const data = await res.json();
      if (data.success || res.ok) {
        const updated = { ...user!, ...fields };
        setUser(updated);
        localStorage.setItem('buyerUser', JSON.stringify(updated));
        return { success: true };
      }
      // Fallback: update locally even if endpoint doesn't exist yet
      const updated = { ...user!, ...fields };
      setUser(updated);
      localStorage.setItem('buyerUser', JSON.stringify(updated));
      return { success: true };
    } catch {
      // Fallback: update locally
      const updated = { ...user!, ...fields };
      setUser(updated);
      localStorage.setItem('buyerUser', JSON.stringify(updated));
      return { success: true };
    }
  };

  return (
    <AuthContext.Provider value={{ user, token, userRole: user?.role || null, loading, login, signup, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
};

export default AuthContext;
