'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Activity, User, Mail, Phone, Lock, Loader2 } from 'lucide-react';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Registration failed');

      router.push('/login');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a] p-4 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[100px]" />

      <div className="w-full max-w-md z-10">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-blue-600/20">
              <Activity className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white tracking-tight">Create Account</h1>
            <p className="text-slate-400 mt-2">Join the E-Health management system</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-4">
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-3 rounded-lg text-sm text-center">
                {error}
              </div>
            )}

            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-400 uppercase tracking-wider ml-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-3 w-5 h-5 text-slate-500" />
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg py-2.5 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 transition-all placeholder:text-slate-600"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-400 uppercase tracking-wider ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-slate-500" />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg py-2.5 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 transition-all placeholder:text-slate-600"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-400 uppercase tracking-wider ml-1">Mobile Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 w-5 h-5 text-slate-500" />
                <input
                  type="tel"
                  required
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg py-2.5 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 transition-all placeholder:text-slate-600"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-400 uppercase tracking-wider ml-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-5 h-5 text-slate-500" />
                <input
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg py-2.5 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 transition-all placeholder:text-slate-600"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 mt-4 rounded-lg transition-all shadow-lg shadow-blue-600/25 active:scale-[0.98] flex items-center justify-center gap-2"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Create Account'}
            </button>
          </form>

          <p className="text-center text-slate-400 mt-8 text-sm">
            Already have an account?{' '}
            <Link href="/login" className="text-blue-500 hover:text-blue-400 font-medium underline-offset-4 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
