import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Calendar, CheckCircle, AlertCircle, Clock, XCircle, TrendingUp, ArrowRight, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

interface DashboardStats {
  totalAppointments: number;
  pendingAppointments: number;
  confirmedAppointments: number;
  completedAppointments: number;
  cancelledAppointments: number;
  upcomingAppointments: number;
}

/* ─── Stat Card ──────────────────────────────────────────────── */
function StatCard({
  title,
  value,
  description,
  icon: Icon,
  gradient,
  delay = 0,
}: {
  title: string;
  value: number;
  description: string;
  icon: React.ElementType;
  gradient: string;
  delay?: number;
}) {
  return (
    <div
      className="group relative bg-white rounded-2xl p-5 shadow-sm border border-[hsl(var(--border))] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Subtle background glow */}
      <div className={cn('absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl', gradient)} />

      <div className="flex items-start justify-between mb-4">
        <div className={cn('w-11 h-11 rounded-xl flex items-center justify-center text-white shadow-sm', gradient)}>
          <Icon className="w-5 h-5" />
        </div>
        <TrendingUp className="w-4 h-4 text-[hsl(var(--muted-foreground))] opacity-40" />
      </div>

      <p className="text-3xl font-heading font-bold text-[hsl(var(--foreground))] leading-none mb-1">
        {value.toLocaleString()}
      </p>
      <p className="text-sm font-body font-semibold text-[hsl(var(--foreground))] mt-2">{title}</p>
      <p className="text-xs font-body text-[hsl(var(--muted-foreground))] mt-0.5">{description}</p>
    </div>
  );
}

/* ─── Status Row ─────────────────────────────────────────────── */
function StatusRow({
  label,
  value,
  total,
  colorClass,
  bgClass,
}: {
  label: string;
  value: number;
  total: number;
  colorClass: string;
  bgClass: string;
}) {
  const pct = total > 0 ? Math.round((value / total) * 100) : 0;
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-sm font-body">
        <span className="text-[hsl(var(--muted-foreground))]">{label}</span>
        <div className="flex items-center gap-2">
          <span className={cn('font-semibold', colorClass)}>{value}</span>
          <span className="text-[hsl(var(--muted-foreground))] text-xs">({pct}%)</span>
        </div>
      </div>
      <div className="h-1.5 rounded-full bg-[hsl(var(--muted))] overflow-hidden">
        <div
          className={cn('h-full rounded-full transition-all duration-700', bgClass)}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

/* ─── Quick Action Button ────────────────────────────────────── */
function QuickAction({
  to,
  icon: Icon,
  label,
  sub,
  gradient,
}: {
  to: string;
  icon: React.ElementType;
  label: string;
  sub: string;
  gradient: string;
}) {
  return (
    <Link to={to}>
      <div className="group flex items-center gap-4 p-4 rounded-xl border border-[hsl(var(--border))] bg-white hover:border-[hsl(var(--primary)/0.4)] hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
        <div className={cn('w-10 h-10 rounded-lg flex items-center justify-center text-white shrink-0', gradient)}>
          <Icon className="w-4 h-4" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold font-body text-[hsl(var(--foreground))] truncate">{label}</p>
          <p className="text-xs font-body text-[hsl(var(--muted-foreground))] truncate">{sub}</p>
        </div>
        <ArrowRight className="w-4 h-4 text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--primary))] group-hover:translate-x-0.5 transition-all duration-200 shrink-0" />
      </div>
    </Link>
  );
}

/* ─── Main Component ─────────────────────────────────────────── */
const AdminDashboard = () => {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        const response = await fetch(`${API_URL}/appointments/stats`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!response.ok) throw new Error('Failed to fetch stats');
        setStats(await response.json());
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };
    fetchStats();
  }, []);

  /* Loading */
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-64 gap-3">
        <Loader2 className="h-8 w-8 animate-spin text-[hsl(var(--primary))]" />
        <p className="text-sm font-body text-[hsl(var(--muted-foreground))]">Loading dashboard…</p>
      </div>
    );
  }

  /* Error */
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-64 gap-3">
        <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center">
          <AlertCircle className="w-6 h-6 text-red-500" />
        </div>
        <p className="text-sm font-body font-medium text-[hsl(var(--foreground))]">Failed to load dashboard</p>
        <p className="text-xs font-body text-[hsl(var(--muted-foreground))]">{error}</p>
      </div>
    );
  }

  const total = stats?.totalAppointments || 0;

  const statCards = [
    {
      title: 'Total Appointments',
      value: total,
      description: 'All time bookings',
      icon: Calendar,
      gradient: 'gradient-primary',
    },
    {
      title: 'Pending',
      value: stats?.pendingAppointments || 0,
      description: 'Awaiting confirmation',
      icon: Clock,
      gradient: 'bg-amber-400',
    },
    {
      title: 'Confirmed',
      value: stats?.confirmedAppointments || 0,
      description: 'Ready to go',
      icon: CheckCircle,
      gradient: 'bg-emerald-500',
    },
    {
      title: 'Completed',
      value: stats?.completedAppointments || 0,
      description: 'Successfully finished',
      icon: CheckCircle,
      gradient: 'bg-violet-500',
    },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">

      {/* ── Welcome Banner ── */}
      <div className="relative overflow-hidden rounded-2xl gradient-primary p-6 text-white shadow-lg">
        {/* Decorative blob */}
        <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-white/10 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-10 right-20 w-24 h-24 rounded-full bg-white/5 blur-xl pointer-events-none" />

        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-white/70 text-xs font-body uppercase tracking-widest mb-1">Overview</p>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold leading-tight">
              Dashboard
            </h2>
            <p className="text-white/70 text-sm font-body mt-1">
              {new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </div>

          {/* Upcoming pill */}
          <div className="glass-dark rounded-xl px-5 py-3 text-center shrink-0">
            <p className="font-heading text-3xl font-bold">{stats?.upcomingAppointments ?? 0}</p>
            <p className="text-white/70 text-xs font-body mt-0.5">Upcoming (7 days)</p>
          </div>
        </div>
      </div>

      {/* ── Stat Cards ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {statCards.map((s, i) => (
          <StatCard key={s.title} {...s} delay={i * 60} />
        ))}
      </div>

      {/* ── Bottom Grid ── */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">

        {/* Status Summary — wider */}
        <Card className="lg:col-span-3 border-[hsl(var(--border))] shadow-sm rounded-2xl">
          <CardHeader className="pb-3">
            <CardTitle className="font-heading text-base">Status Breakdown</CardTitle>
            <CardDescription className="font-body text-xs">Distribution across appointment states</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <StatusRow label="Pending"   value={stats?.pendingAppointments   || 0} total={total} colorClass="text-amber-500"   bgClass="bg-amber-400" />
            <StatusRow label="Confirmed" value={stats?.confirmedAppointments || 0} total={total} colorClass="text-emerald-600" bgClass="bg-emerald-500" />
            <StatusRow label="Completed" value={stats?.completedAppointments || 0} total={total} colorClass="text-violet-600"  bgClass="bg-violet-500" />
            <StatusRow label="Cancelled" value={stats?.cancelledAppointments || 0} total={total} colorClass="text-rose-500"    bgClass="bg-rose-400" />
          </CardContent>
        </Card>

        {/* Quick Actions — narrower */}
        <Card className="lg:col-span-2 border-[hsl(var(--border))] shadow-sm rounded-2xl">
          <CardHeader className="pb-3">
            <CardTitle className="font-heading text-base">Quick Actions</CardTitle>
            <CardDescription className="font-body text-xs">Jump to key areas</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <QuickAction
              to="/admin/appointments"
              icon={Calendar}
              label="All Appointments"
              sub="View & manage bookings"
              gradient="gradient-primary"
            />
            <QuickAction
              to="/admin/appointments?filter=pending"
              icon={AlertCircle}
              label="Pending Approvals"
              sub="Needs your attention"
              gradient="bg-amber-400"
            />
            <QuickAction
              to="/admin/analytics"
              icon={BarChart3}
              label="Analytics"
              sub="Reports & insights"
              gradient="bg-violet-500"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;