import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { AlertCircle, Loader2, Eye, EyeOff, Stethoscope, Lock, Mail } from 'lucide-react';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { cn } from '@/lib/utils';

const AdminLogin = () => {
  const navigate = useNavigate();
  const { login, isLoading, error } = useAdminAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [localError, setLocalError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError(null);
    if (!email || !password) {
      setLocalError('Please fill in all fields');
      return;
    }
    try {
      await login(email, password);
      navigate('/admin/dashboard');
    } catch (err) {
      setLocalError(err instanceof Error ? err.message : 'Login failed');
    }
  };

  const displayError = error || localError;

  return (
    <div className="min-h-screen flex">

      {/* ── Left decorative panel (hidden on mobile) ── */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden gradient-primary flex-col justify-between p-12">
        {/* Blobs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-white/5 blur-2xl pointer-events-none" />
        <div className="absolute top-1/2 -right-12 w-48 h-48 rounded-full bg-white/8 blur-2xl pointer-events-none" />

        {/* Brand */}
        <div className="relative z-10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-white" />
          </div>
          <span className="font-heading text-white text-xl font-semibold">Dr. Prashant</span>
        </div>

        {/* Center copy */}
        <div className="relative z-10">
          <h2 className="font-heading text-4xl font-bold text-white leading-snug mb-4">
            Welcome back,<br />Admin
          </h2>
          <p className="text-white/70 font-body text-base leading-relaxed max-w-xs">
            Manage appointments, track analytics, and keep the clinic running smoothly — all in one place.
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-2 mt-8">
            {['Appointments', 'Analytics', 'Contacts', 'Settings'].map((f) => (
              <span key={f} className="px-3 py-1.5 rounded-full bg-white/15 border border-white/20 text-white/80 text-xs font-body font-medium">
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom tagline */}
        <p className="relative z-10 text-white/40 text-xs font-body">
          © {new Date().getFullYear()} Dr. Prashant Admin Panel
        </p>
      </div>

      {/* ── Right login panel ── */}
      <div className="flex-1 flex items-center justify-center p-6 bg-[hsl(var(--section-alt))]">
        <div className="w-full max-w-sm">

          {/* Mobile brand */}
          <div className="flex lg:hidden items-center gap-3 mb-8 justify-center">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-md">
              <Stethoscope className="w-5 h-5 text-white" />
            </div>
            <span className="font-heading text-[hsl(var(--foreground))] text-xl font-semibold">Dr. Prashant</span>
          </div>

          {/* Heading */}
          <div className="mb-8">
            <h1 className="font-heading text-2xl sm:text-3xl font-bold text-[hsl(var(--foreground))]">Sign in</h1>
            <p className="text-sm font-body text-[hsl(var(--muted-foreground))] mt-1">Enter your credentials to access the admin panel</p>
          </div>

          {/* Error */}
          {displayError && (
            <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-sm font-body mb-5">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{displayError}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Email */}
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-xs font-body font-semibold text-[hsl(var(--foreground))] uppercase tracking-wider">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[hsl(var(--muted-foreground))]" />
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  className="pl-10 h-11 font-body text-sm bg-white border-[hsl(var(--border))] rounded-xl shadow-sm focus-visible:ring-[hsl(var(--primary)/0.3)] disabled:opacity-60"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label htmlFor="password" className="text-xs font-body font-semibold text-[hsl(var(--foreground))] uppercase tracking-wider">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[hsl(var(--muted-foreground))]" />
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                  className="pl-10 pr-11 h-11 font-body text-sm bg-white border-[hsl(var(--border))] rounded-xl shadow-sm focus-visible:ring-[hsl(var(--primary)/0.3)] disabled:opacity-60"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isLoading}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors disabled:opacity-40"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className={cn(
                'w-full h-11 mt-2 rounded-xl text-sm font-body font-semibold text-white',
                'gradient-primary hover:opacity-90 active:opacity-80',
                'shadow-sm hover:shadow-md transition-all duration-200',
                'flex items-center justify-center gap-2',
                'disabled:opacity-60 disabled:cursor-not-allowed'
              )}
            >
              {isLoading ? (
                <><Loader2 className="w-4 h-4 animate-spin" />Signing in…</>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Credentials hint */}
          <div className="mt-6 px-4 py-3.5 rounded-xl bg-white border border-[hsl(var(--border))] shadow-sm">
            <div className="flex items-center gap-2 mb-1">
              <Lock className="w-3.5 h-3.5 text-[hsl(var(--primary))]" />
              <p className="text-xs font-body font-semibold text-[hsl(var(--foreground))]">Admin Credentials</p>
            </div>
            <p className="text-xs font-body text-[hsl(var(--muted-foreground))]">
              Check your environment variables for login credentials.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminLogin;