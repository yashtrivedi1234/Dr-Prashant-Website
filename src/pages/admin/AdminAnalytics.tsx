import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Loader2, TrendingUp, CheckCircle2, XCircle, Clock,
  Calendar, Activity, Stethoscope, BarChart3, AlertCircle,
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

interface AnalyticsData {
  totalAppointments: number;
  pendingAppointments: number;
  confirmedAppointments: number;
  completedAppointments: number;
  cancelledAppointments: number;
  appointmentsByService: Record<string, number>;
  appointmentsByStatus: Record<string, number>;
  monthlyAppointments: Array<{ month: string; count: number }>;
}

/* ─── KPI Card ───────────────────────────────────────────────── */
function KpiCard({
  label, value, sub, icon: Icon, gradient, textColor, delay,
}: {
  label: string; value: string | number; sub: string;
  icon: React.ElementType; gradient: string; textColor: string; delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.35, ease: 'easeOut' }}
      className="group relative bg-white rounded-2xl p-5 border border-[hsl(var(--border))] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={cn('w-11 h-11 rounded-xl flex items-center justify-center text-white shadow-sm', gradient)}>
          <Icon className="w-5 h-5" />
        </div>
        <TrendingUp className="w-4 h-4 text-[hsl(var(--muted-foreground))] opacity-30" />
      </div>
      <p className={cn('text-3xl font-heading font-bold leading-none', textColor)}>{value}</p>
      <p className="text-sm font-body font-semibold text-[hsl(var(--foreground))] mt-2">{label}</p>
      <p className="text-xs font-body text-[hsl(var(--muted-foreground))] mt-0.5">{sub}</p>
    </motion.div>
  );
}

/* ─── Progress Bar Row ───────────────────────────────────────── */
function BarRow({
  label, value, total, barColor, index,
}: {
  label: string; value: number; total: number; barColor: string; index: number;
}) {
  const pct = total > 0 ? Math.round((value / total) * 100) : 0;
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
      className="space-y-1.5"
    >
      <div className="flex items-center justify-between text-sm font-body">
        <span className="text-[hsl(var(--foreground))] font-medium">{label}</span>
        <div className="flex items-center gap-2">
          <span className="font-bold text-[hsl(var(--foreground))]">{value}</span>
          <span className="text-[hsl(var(--muted-foreground))] text-xs w-9 text-right">({pct}%)</span>
        </div>
      </div>
      <div className="h-2 rounded-full bg-[hsl(var(--muted))] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ delay: 0.2 + index * 0.06, duration: 0.6, ease: 'easeOut' }}
          className={cn('h-full rounded-full', barColor)}
        />
      </div>
    </motion.div>
  );
}

/* ─── Service Bar ────────────────────────────────────────────── */
const SERVICE_GRADIENTS = [
  'bg-[hsl(var(--primary))]',
  'bg-violet-500',
  'bg-emerald-500',
  'bg-amber-400',
  'bg-rose-500',
  'bg-sky-500',
];

function ServiceBar({ service, count, max, index }: { service: string; count: number; max: number; index: number }) {
  const pct = max > 0 ? (count / max) * 100 : 0;
  const color = SERVICE_GRADIENTS[index % SERVICE_GRADIENTS.length];
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 + index * 0.06, duration: 0.3 }}
      className="flex items-center gap-3"
    >
      <div className={cn('w-2.5 h-2.5 rounded-full shrink-0', color)} />
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-body font-medium text-[hsl(var(--foreground))] truncate pr-2">{service}</span>
          <span className="text-sm font-body font-bold text-[hsl(var(--foreground))] shrink-0">{count}</span>
        </div>
        <div className="h-1.5 rounded-full bg-[hsl(var(--muted))] overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ delay: 0.2 + index * 0.07, duration: 0.6, ease: 'easeOut' }}
            className={cn('h-full rounded-full', color)}
          />
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Monthly Sparkline ──────────────────────────────────────── */
function MonthlyChart({ data }: { data: Array<{ month: string; count: number }> }) {
  if (!data?.length) return null;
  const max = Math.max(...data.map(d => d.count), 1);

  return (
    <div className="flex items-end gap-1.5 h-20">
      {data.map((d, i) => {
        const pct = (d.count / max) * 100;
        return (
          <div key={d.month} className="flex-1 flex flex-col items-center gap-1 group">
            <div className="relative w-full flex items-end justify-center" style={{ height: '60px' }}>
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${Math.max(pct, 4)}%` }}
                transition={{ delay: 0.1 + i * 0.04, duration: 0.5, ease: 'easeOut' }}
                className="w-full rounded-t-md gradient-primary opacity-80 group-hover:opacity-100 transition-opacity"
                style={{ height: `${Math.max(pct, 4)}%` }}
                title={`${d.month}: ${d.count}`}
              />
              {/* Tooltip on hover */}
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 hidden group-hover:flex items-center justify-center bg-[hsl(var(--foreground))] text-white text-[10px] font-body font-semibold px-1.5 py-0.5 rounded whitespace-nowrap z-10">
                {d.count}
              </div>
            </div>
            <span className="text-[9px] font-body text-[hsl(var(--muted-foreground))] leading-none">
              {d.month.slice(0, 3)}
            </span>
          </div>
        );
      })}
    </div>
  );
}

/* ─── Metric Card ────────────────────────────────────────────── */
function MetricCard({ label, value, sub, color }: { label: string; value: string; sub: string; color: string }) {
  return (
    <div className="bg-[hsl(var(--section-alt))] rounded-xl p-4 border border-[hsl(var(--border))]">
      <p className="text-xs font-body text-[hsl(var(--muted-foreground))] uppercase tracking-wider mb-2">{label}</p>
      <p className={cn('text-2xl font-heading font-bold', color)}>{value}</p>
      <p className="text-xs font-body text-[hsl(var(--muted-foreground))] mt-1">{sub}</p>
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────────── */
const AdminAnalytics = () => {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetch_ = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        const res = await fetch(`${API_URL}/appointments/stats`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error('Failed to fetch analytics');
        setAnalytics(await res.json());
      } catch (err) {
        toast({ title: 'Error', description: err instanceof Error ? err.message : 'Failed to fetch analytics', variant: 'destructive' });
      } finally {
        setIsLoading(false);
      }
    };
    fetch_();
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-64 gap-3">
        <Loader2 className="h-8 w-8 animate-spin text-[hsl(var(--primary))]" />
        <p className="text-sm font-body text-[hsl(var(--muted-foreground))]">Loading analytics…</p>
      </div>
    );
  }

  if (!analytics) {
    return (
      <div className="flex flex-col items-center justify-center h-64 gap-3">
        <div className="w-12 h-12 rounded-full bg-[hsl(var(--section-alt))] flex items-center justify-center">
          <AlertCircle className="w-6 h-6 text-[hsl(var(--muted-foreground))]" />
        </div>
        <p className="text-sm font-body font-medium text-[hsl(var(--foreground))]">Unable to load analytics</p>
      </div>
    );
  }

  const total = analytics.totalAppointments;
  const completionRate = total > 0 ? Math.round((analytics.completedAppointments / total) * 100) : 0;
  const cancellationRate = total > 0 ? Math.round((analytics.cancelledAppointments / total) * 100) : 0;
  const confirmationRate = total > 0 ? Math.round((analytics.confirmedAppointments / total) * 100) : 0;

  const serviceEntries = Object.entries(analytics.appointmentsByService ?? {}).sort(([, a], [, b]) => b - a);
  const maxServiceCount = serviceEntries[0]?.[1] ?? 1;

  return (
    <div className="space-y-5 max-w-7xl mx-auto">

      {/* ── Page Header ── */}
      <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[hsl(var(--foreground))]">Analytics</h2>
        <p className="text-sm font-body text-[hsl(var(--muted-foreground))] mt-0.5">Track appointment trends and performance metrics</p>
      </motion.div>

      {/* ── KPI Cards ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <KpiCard label="Total Appointments" value={total}              sub="All time bookings"        icon={Calendar}     gradient="gradient-primary" textColor="text-[hsl(var(--foreground))]" delay={0}    />
        <KpiCard label="Completion Rate"    value={`${completionRate}%`}   sub={`${analytics.completedAppointments} completed`}   icon={CheckCircle2} gradient="bg-emerald-500"   textColor="text-emerald-600"             delay={0.06} />
        <KpiCard label="Cancellation Rate"  value={`${cancellationRate}%`} sub={`${analytics.cancelledAppointments} cancelled`}  icon={XCircle}      gradient="bg-rose-500"      textColor="text-rose-600"                delay={0.12} />
        <KpiCard label="Pending Review"     value={analytics.pendingAppointments}  sub="Awaiting confirmation" icon={Clock}        gradient="bg-amber-400"    textColor="text-amber-500"               delay={0.18} />
      </div>

      {/* ── Middle Row: Status + Services ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

        {/* Status Distribution */}
        <div className="bg-white rounded-2xl border border-[hsl(var(--border))] shadow-sm p-5">
          <div className="flex items-center gap-2 mb-1">
            <Activity className="w-4 h-4 text-[hsl(var(--primary))]" />
            <h3 className="font-heading text-base font-semibold text-[hsl(var(--foreground))]">Status Distribution</h3>
          </div>
          <p className="text-xs font-body text-[hsl(var(--muted-foreground))] mb-4">Breakdown by appointment status</p>
          <div className="space-y-3.5">
            <BarRow label="Confirmed" value={analytics.confirmedAppointments} total={total} barColor="bg-[hsl(var(--primary))]" index={0} />
            <BarRow label="Completed" value={analytics.completedAppointments} total={total} barColor="bg-emerald-500"            index={1} />
            <BarRow label="Pending"   value={analytics.pendingAppointments}   total={total} barColor="bg-amber-400"              index={2} />
            <BarRow label="Cancelled" value={analytics.cancelledAppointments} total={total} barColor="bg-rose-400"               index={3} />
          </div>
        </div>

        {/* Services */}
        <div className="bg-white rounded-2xl border border-[hsl(var(--border))] shadow-sm p-5">
          <div className="flex items-center gap-2 mb-1">
            <Stethoscope className="w-4 h-4 text-[hsl(var(--primary))]" />
            <h3 className="font-heading text-base font-semibold text-[hsl(var(--foreground))]">Appointments by Service</h3>
          </div>
          <p className="text-xs font-body text-[hsl(var(--muted-foreground))] mb-4">Most popular services</p>
          {serviceEntries.length === 0 ? (
            <p className="text-sm font-body text-[hsl(var(--muted-foreground))] text-center py-6">No service data available</p>
          ) : (
            <div className="space-y-3.5">
              {serviceEntries.map(([service, count], i) => (
                <ServiceBar key={service} service={service} count={count} max={maxServiceCount} index={i} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── Monthly Chart ── */}
      {analytics.monthlyAppointments?.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl border border-[hsl(var(--border))] shadow-sm p-5"
        >
          <div className="flex items-center gap-2 mb-1">
            <BarChart3 className="w-4 h-4 text-[hsl(var(--primary))]" />
            <h3 className="font-heading text-base font-semibold text-[hsl(var(--foreground))]">Monthly Appointments</h3>
          </div>
          <p className="text-xs font-body text-[hsl(var(--muted-foreground))] mb-5">Booking volume over time</p>
          <MonthlyChart data={analytics.monthlyAppointments} />
        </motion.div>
      )}

      {/* ── Performance Metrics ── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="bg-white rounded-2xl border border-[hsl(var(--border))] shadow-sm p-5"
      >
        <div className="flex items-center gap-2 mb-1">
          <TrendingUp className="w-4 h-4 text-[hsl(var(--primary))]" />
          <h3 className="font-heading text-base font-semibold text-[hsl(var(--foreground))]">Performance Metrics</h3>
        </div>
        <p className="text-xs font-body text-[hsl(var(--muted-foreground))] mb-4">Key performance indicators</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <MetricCard label="Avg Completion Time" value="~5–7 days"          sub="From booking to completion"          color="text-[hsl(var(--foreground))]" />
          <MetricCard label="Success Rate"         value={`${completionRate}%`}    sub="Appointments successfully completed" color="text-emerald-600"              />
          <MetricCard label="Booking Efficiency"   value={`${confirmationRate}%`}  sub="Confirmed vs total bookings"         color="text-[hsl(var(--primary))]"   />
        </div>
      </motion.div>
    </div>
  );
};

export default AdminAnalytics;