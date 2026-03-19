import { motion } from 'framer-motion';
import { LogOut, User, Shield, Mail, KeyRound, ChevronRight, AlertTriangle } from 'lucide-react';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { cn } from '@/lib/utils';

/* ─── Section wrapper ────────────────────────────────────────── */
function Section({
  icon: Icon, title, description, children, delay = 0,
}: {
  icon: React.ElementType; title: string; description: string;
  children: React.ReactNode; delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.35, ease: 'easeOut' }}
      className="bg-white rounded-2xl border border-[hsl(var(--border))] shadow-sm overflow-hidden"
    >
      {/* Section header */}
      <div className="px-6 py-4 border-b border-[hsl(var(--border))] flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center shrink-0">
          <Icon className="w-4 h-4 text-white" />
        </div>
        <div>
          <h3 className="font-heading text-base font-semibold text-[hsl(var(--foreground))]">{title}</h3>
          <p className="text-xs font-body text-[hsl(var(--muted-foreground))]">{description}</p>
        </div>
      </div>
      {children}
    </motion.div>
  );
}

/* ─── Info row ───────────────────────────────────────────────── */
function InfoRow({ label, value, icon: Icon }: { label: string; value: string; icon: React.ElementType }) {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b border-[hsl(var(--border))] last:border-0 group hover:bg-[hsl(var(--section-alt))] transition-colors">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-[hsl(var(--section-alt))] group-hover:bg-white flex items-center justify-center shrink-0 transition-colors">
          <Icon className="w-3.5 h-3.5 text-[hsl(var(--primary))]" />
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-wider font-body font-medium text-[hsl(var(--muted-foreground))]">{label}</p>
          <p className="text-sm font-body font-semibold text-[hsl(var(--foreground))] mt-0.5">{value}</p>
        </div>
      </div>
      <ChevronRight className="w-4 h-4 text-[hsl(var(--muted-foreground))] opacity-40" />
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────────── */
const AdminSettings = () => {
  const { adminUser, logout } = useAdminAuth();

  const initials = adminUser?.email?.[0]?.toUpperCase() ?? 'A';

  const handleLogout = () => {
    logout();
    window.location.href = '/admin/login';
  };

  return (
    <div className="space-y-5 max-w-2xl">

      {/* ── Page Header ── */}
      <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[hsl(var(--foreground))]">Settings</h2>
        <p className="text-sm font-body text-[hsl(var(--muted-foreground))] mt-0.5">Manage your admin account and preferences</p>
      </motion.div>

      {/* ── Profile Banner ── */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05, duration: 0.35 }}
        className="relative overflow-hidden rounded-2xl gradient-primary p-6 text-white shadow-lg"
      >
        {/* Decorative blobs */}
        <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-white/10 blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 right-16 w-20 h-20 rounded-full bg-white/5 blur-xl pointer-events-none" />

        <div className="relative z-10 flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-2xl font-heading font-bold text-white shadow-lg shrink-0">
            {initials}
          </div>
          <div>
            <p className="text-white/70 text-xs font-body uppercase tracking-widest mb-0.5">Logged in as</p>
            <p className="font-heading text-lg font-bold leading-tight">{adminUser?.email}</p>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-white/70 text-xs font-body">Active session</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Account Information ── */}
      <Section icon={User} title="Account Information" description="Your admin account details" delay={0.1}>
        <InfoRow icon={Mail}    label="Email Address" value={adminUser?.email ?? '—'} />
        <InfoRow icon={Shield}  label="Role"          value="Administrator" />
        <InfoRow icon={KeyRound} label="Access Level" value="Full Access" />
      </Section>

      {/* ── Danger Zone ── */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.35 }}
        className="bg-white rounded-2xl border border-rose-200 shadow-sm overflow-hidden"
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-rose-100 flex items-center gap-3 bg-rose-50/60">
          <div className="w-8 h-8 rounded-lg bg-rose-100 flex items-center justify-center shrink-0">
            <AlertTriangle className="w-4 h-4 text-rose-500" />
          </div>
          <div>
            <h3 className="font-heading text-base font-semibold text-rose-700">Danger Zone</h3>
            <p className="text-xs font-body text-rose-400">Irreversible actions</p>
          </div>
        </div>

        {/* Logout row */}
        <div className="px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-sm font-body font-semibold text-[hsl(var(--foreground))]">End Session</p>
            <p className="text-xs font-body text-[hsl(var(--muted-foreground))] mt-0.5">
              You will be redirected to the login page.
            </p>
          </div>
          <button
            onClick={handleLogout}
            className={cn(
              'inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-body font-semibold text-white',
              'bg-rose-500 hover:bg-rose-600 active:bg-rose-700',
              'shadow-sm hover:shadow-md transition-all duration-200 shrink-0'
            )}
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminSettings;