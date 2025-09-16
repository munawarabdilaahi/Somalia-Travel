import { useState, useEffect, createContext, useContext } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'customer';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const useAuthState = () => {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('auth-user');
    return saved ? JSON.parse(saved) : null;
  });

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock authentication - in real app, this would call an API
    if (email === 'admin@somaliatravel.com' && password === 'admin123') {
      const adminUser: User = {
        id: '1',
        name: 'Admin',
        email: 'admin@somaliatravel.com',
        role: 'admin'
      };
      setUser(adminUser);
      localStorage.setItem('auth-user', JSON.stringify(adminUser));
      return true;
    } else if (email && password) {
      const customerUser: User = {
        id: '2',
        name: 'Customer',
        email: email,
        role: 'customer'
      };
      setUser(customerUser);
      localStorage.setItem('auth-user', JSON.stringify(customerUser));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('auth-user');
  };

  const isAdmin = user?.role === 'admin';

  return {
    user,
    login,
    logout,
    isAdmin,
    AuthContext
  };
};