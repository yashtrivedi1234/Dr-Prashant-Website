import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Loader2, Trash2, Mail, Search, Users, UserCheck,
  UserMinus, Calendar, X, TrendingUp, AtSign,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

interface Subscriber {
  _id: string;
  email: string;
  subscribedAt: string;
  isActive: boolean;
  createdAt: string;
}

/* ─── Stat Card ──────────────────────────────────────────────── */
function StatCard({ label, value, icon: Icon, gradient, textColor, delay }: {
  label: string; value: number; icon: React.ElementType;
  gradient: string; textColor: string; delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.35, ease: 'easeOut' }}
      className="group bg-white rounded-2xl p-5 border border-[hsl(var(--border))] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={cn('w-11 h-11 rounded-xl flex items-center justify-center text-white shadow-sm', gradient)}>
          <Icon className="w-5 h-5" />
        </div>
        <TrendingUp className="w-4 h-4 text-[hsl(var(--muted-foreground))] opacity-30" />
      </div>
      <p className={cn('text-3xl font-heading font-bold leading-none', textColor)}>{value}</p>
      <p className="text-sm font-body font-medium text-[hsl(var(--muted-foreground))] mt-2">{label}</p>
    </motion.div>
  );
}

/* ─── Status Badge ───────────────────────────────────────────── */
function StatusBadge({ isActive }: { isActive: boolean }) {
  return (
    <span className={cn(
      'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-body font-semibold border',
      isActive
        ? 'bg-emerald-50 text-emerald-600 border-emerald-200'
        : 'bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))] border-[hsl(var(--border))]'
    )}>
      <span className={cn('w-1.5 h-1.5 rounded-full', isActive ? 'bg-emerald-400' : 'bg-[hsl(var(--muted-foreground))]')} />
      {isActive ? 'Active' : 'Inactive'}
    </span>
  );
}

/* ─── Detail Item ────────────────────────────────────────────── */
function DetailItem({ icon: Icon, label, children }: { icon: React.ElementType; label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 rounded-lg bg-[hsl(var(--section-alt))] flex items-center justify-center shrink-0 mt-0.5">
        <Icon className="w-3.5 h-3.5 text-[hsl(var(--primary))]" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[10px] uppercase tracking-wider text-[hsl(var(--muted-foreground))] font-body font-medium">{label}</p>
        <div className="mt-0.5">{children}</div>
      </div>
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────────── */
const AdminNewsletter = () => {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSubscriber, setSelectedSubscriber] = useState<Subscriber | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [isDeleting, setIsDeleting] = useState(false);
  const [stats, setStats] = useState({ totalSubscribers: 0, activeSubscribers: 0, inactiveSubscribers: 0 });
  const { toast } = useToast();

  const fetchSubscribers = async () => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem('adminToken');
      const res = await fetch(`${API_URL}/newsletter`, { headers: { Authorization: `Bearer ${token}` } });
      if (!res.ok) throw new Error('Failed to fetch subscribers');
      const data = await res.json();
      setSubscribers(data.subscribers || []);
    } catch (error) {
      toast({ title: 'Error', description: error instanceof Error ? error.message : 'Failed to fetch', variant: 'destructive' });
    } finally {
      setIsLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const res = await fetch(`${API_URL}/newsletter/stats`, { headers: { Authorization: `Bearer ${token}` } });
      if (!res.ok) return;
      const data = await res.json();
      setStats(data.stats || {});
    } catch { /* silent */ }
  };

  useEffect(() => { fetchSubscribers(); fetchStats(); }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this subscriber? This cannot be undone.')) return;
    try {
      setIsDeleting(true);
      const token = localStorage.getItem('adminToken');
      const res = await fetch(`${API_URL}/newsletter/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error('Failed to delete subscriber');
      toast({ title: 'Deleted', description: 'Subscriber removed successfully.' });
      setSelectedSubscriber(null);
      fetchSubscribers();
      fetchStats();
    } catch (error) {
      toast({ title: 'Error', description: error instanceof Error ? error.message : 'Failed to delete', variant: 'destructive' });
    } finally {
      setIsDeleting(false);
    }
  };

  const filtered = subscribers
    .filter((s) => {
      const matchSearch = s.email.toLowerCase().includes(searchQuery.toLowerCase());
      const matchStatus =
        statusFilter === 'all' ||
        (statusFilter === 'active' && s.isActive) ||
        (statusFilter === 'inactive' && !s.isActive);
      return matchSearch && matchStatus;
    })
    .sort((a, b) => new Date(b.subscribedAt).getTime() - new Date(a.subscribedAt).getTime());

  /* ── Loading ── */
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-64 gap-3">
        <Loader2 className="h-8 w-8 animate-spin text-[hsl(var(--primary))]" />
        <p className="text-sm font-body text-[hsl(var(--muted-foreground))]">Loading subscribers…</p>
      </div>
    );
  }

  const activeRate = stats.totalSubscribers > 0
    ? Math.round((stats.activeSubscribers / stats.totalSubscribers) * 100)
    : 0;

  return (
    <div className="space-y-5 max-w-7xl mx-auto">

      {/* ── Header ── */}
      <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[hsl(var(--foreground))]">Newsletter</h2>
        <p className="text-sm font-body text-[hsl(var(--muted-foreground))] mt-0.5">Manage and monitor newsletter subscriptions</p>
      </motion.div>

      {/* ── Stat Cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        <StatCard label="Total Subscribers"    value={stats.totalSubscribers}    icon={Users}      gradient="gradient-primary" textColor="text-[hsl(var(--foreground))]" delay={0}    />
        <StatCard label="Active Subscribers"   value={stats.activeSubscribers}   icon={UserCheck}  gradient="bg-emerald-500"   textColor="text-emerald-600"             delay={0.06} />
        <StatCard label="Inactive Subscribers" value={stats.inactiveSubscribers} icon={UserMinus}  gradient="bg-slate-400"     textColor="text-[hsl(var(--muted-foreground))]" delay={0.12} />
      </div>

      {/* ── Active Rate Bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-2xl border border-[hsl(var(--border))] shadow-sm px-6 py-4"
      >
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-body font-semibold text-[hsl(var(--foreground))]">Subscriber Health</p>
          <span className="text-sm font-heading font-bold text-emerald-600">{activeRate}% active</span>
        </div>
        <div className="h-2 rounded-full bg-[hsl(var(--muted))] overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${activeRate}%` }}
            transition={{ delay: 0.4, duration: 0.7, ease: 'easeOut' }}
            className="h-full rounded-full bg-emerald-400"
          />
        </div>
        <p className="text-xs font-body text-[hsl(var(--muted-foreground))] mt-1.5">
          {stats.activeSubscribers} of {stats.totalSubscribers} subscribers are currently active
        </p>
      </motion.div>

      {/* ── Filter & Search ── */}
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[hsl(var(--muted-foreground))]" />
          <Input
            placeholder="Search by email…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-10 font-body text-sm bg-white border-[hsl(var(--border))] rounded-xl shadow-sm focus-visible:ring-[hsl(var(--primary)/0.3)]"
          />
        </div>

        {/* Status pills */}
        <div className="flex gap-2">
          {(['all', 'active', 'inactive'] as const).map((s) => {
            const active = statusFilter === s;
            return (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={cn(
                  'px-3 py-2 rounded-xl text-xs font-body font-semibold border transition-all duration-150',
                  active
                    ? 'gradient-primary text-white border-transparent shadow-sm'
                    : 'bg-white text-[hsl(var(--muted-foreground))] border-[hsl(var(--border))] hover:border-[hsl(var(--primary)/0.4)] hover:text-[hsl(var(--primary))]'
                )}
              >
                {s === 'all' ? 'All' : s.charAt(0).toUpperCase() + s.slice(1)}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Table ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="bg-white rounded-2xl border border-[hsl(var(--border))] shadow-sm overflow-hidden"
      >
        {/* Table header */}
        <div className="px-5 py-3 border-b border-[hsl(var(--border))] bg-[hsl(var(--section-alt))] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-[hsl(var(--primary))]" />
            <h3 className="font-heading text-sm font-semibold text-[hsl(var(--foreground))]">All Subscribers</h3>
          </div>
          <span className="text-xs font-body text-[hsl(var(--muted-foreground))]">{filtered.length} shown</span>
        </div>

        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 gap-3">
            <div className="w-12 h-12 rounded-full bg-[hsl(var(--section-alt))] flex items-center justify-center">
              <Mail className="w-5 h-5 text-[hsl(var(--muted-foreground))]" />
            </div>
            <p className="text-sm font-body font-medium text-[hsl(var(--foreground))]">No subscribers found</p>
            <p className="text-xs font-body text-[hsl(var(--muted-foreground))]">Try adjusting your search or filter</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[hsl(var(--border))]">
                  {['Subscriber', 'Status', 'Subscribed', 'Actions'].map(h => (
                    <th key={h} className="px-5 py-3 text-left text-[11px] font-body font-semibold text-[hsl(var(--muted-foreground))] uppercase tracking-wider">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[hsl(var(--border))]">
                {filtered.map((sub) => (
                  <tr key={sub._id} className="hover:bg-[hsl(var(--section-alt)/0.5)] transition-colors group">

                    {/* Email */}
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-white text-xs font-bold shrink-0">
                          {sub.email[0].toUpperCase()}
                        </div>
                        <span className="text-sm font-body font-medium text-[hsl(var(--foreground))] truncate max-w-[220px]">{sub.email}</span>
                      </div>
                    </td>

                    {/* Status */}
                    <td className="px-5 py-3.5">
                      <StatusBadge isActive={sub.isActive} />
                    </td>

                    {/* Date */}
                    <td className="px-5 py-3.5">
                      <p className="text-xs font-body text-[hsl(var(--muted-foreground))]">
                        {new Date(sub.subscribedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </p>
                    </td>

                    {/* Actions */}
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => setSelectedSubscriber(sub)}
                          className="w-8 h-8 rounded-lg flex items-center justify-center border border-[hsl(var(--border))] bg-white hover:border-[hsl(var(--primary)/0.5)] hover:bg-[hsl(var(--primary)/0.05)] transition-all"
                          title="View details"
                        >
                          <Mail className="w-3.5 h-3.5 text-[hsl(var(--primary))]" />
                        </button>
                        <button
                          onClick={() => handleDelete(sub._id)}
                          className="w-8 h-8 rounded-lg flex items-center justify-center border border-[hsl(var(--border))] bg-white hover:border-rose-300 hover:bg-rose-50 transition-all"
                          title="Delete subscriber"
                        >
                          <Trash2 className="w-3.5 h-3.5 text-rose-500" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </motion.div>

      {/* ── Detail Dialog ── */}
      <Dialog open={!!selectedSubscriber} onOpenChange={(open) => { if (!open) setSelectedSubscriber(null); }}>
        <DialogContent className="max-w-sm rounded-2xl border-[hsl(var(--border))] p-0 overflow-hidden [&>button]:hidden">

          {/* Header stripe */}
          <div className="gradient-primary px-6 py-5 flex items-center justify-between">
            <div>
              <DialogTitle className="font-heading text-lg text-white font-semibold">Subscriber Details</DialogTitle>
              <DialogDescription className="text-white/70 font-body text-xs mt-0.5">Full subscription info</DialogDescription>
            </div>
            <button
              onClick={() => setSelectedSubscriber(null)}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>

          {selectedSubscriber && (
            <div className="px-6 py-5 space-y-4">

              {/* Avatar */}
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center text-white text-2xl font-heading font-bold shadow-md">
                  {selectedSubscriber.email[0].toUpperCase()}
                </div>
              </div>

              <div className="space-y-3">
                <DetailItem icon={AtSign} label="Email Address">
                  <p className="text-sm font-body font-semibold text-[hsl(var(--foreground))] break-all">{selectedSubscriber.email}</p>
                </DetailItem>
                <DetailItem icon={UserCheck} label="Status">
                  <div className="mt-1"><StatusBadge isActive={selectedSubscriber.isActive} /></div>
                </DetailItem>
                <DetailItem icon={Calendar} label="Subscribed On">
                  <p className="text-sm font-body font-semibold text-[hsl(var(--foreground))]">
                    {new Date(selectedSubscriber.subscribedAt).toLocaleDateString('en-IN', {
                      weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
                    })}
                  </p>
                </DetailItem>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-1">
                <a
                  href={`mailto:${selectedSubscriber.email}`}
                  className="flex-1 h-10 gradient-primary text-white rounded-xl text-sm font-body font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <Mail className="w-4 h-4" />
                  Send Email
                </a>
                <button
                  onClick={() => handleDelete(selectedSubscriber._id)}
                  disabled={isDeleting}
                  className="w-10 h-10 rounded-xl border border-rose-200 bg-rose-50 hover:bg-rose-100 flex items-center justify-center transition-colors disabled:opacity-50"
                  title="Delete subscriber"
                >
                  {isDeleting ? <Loader2 className="w-4 h-4 animate-spin text-rose-500" /> : <Trash2 className="w-4 h-4 text-rose-500" />}
                </button>
                <button
                  onClick={() => setSelectedSubscriber(null)}
                  className="px-4 h-10 rounded-xl border border-[hsl(var(--border))] text-sm font-body text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--section-alt))] transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminNewsletter;