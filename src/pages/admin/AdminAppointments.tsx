import { useEffect, useState } from 'react';
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle,
} from '@/components/ui/dialog';
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Loader2, Trash2, Eye, Search, Filter,
  Calendar, Clock, Phone, Mail, User, FileText,
  CheckCircle2, AlertCircle, XCircle, Timer,
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

interface Appointment {
  _id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  notes: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: string;
}

/* ─── Status Config ──────────────────────────────────────────── */
const STATUS_CONFIG = {
  pending:   { label: 'Pending',   icon: Timer,         bg: 'bg-amber-50',   text: 'text-amber-600',   dot: 'bg-amber-400',   border: 'border-amber-200' },
  confirmed: { label: 'Confirmed', icon: CheckCircle2,  bg: 'bg-emerald-50', text: 'text-emerald-600', dot: 'bg-emerald-400', border: 'border-emerald-200' },
  completed: { label: 'Completed', icon: CheckCircle2,  bg: 'bg-violet-50',  text: 'text-violet-600',  dot: 'bg-violet-400',  border: 'border-violet-200' },
  cancelled: { label: 'Cancelled', icon: XCircle,       bg: 'bg-rose-50',    text: 'text-rose-600',    dot: 'bg-rose-400',    border: 'border-rose-200' },
};

function StatusBadge({ status }: { status: string }) {
  const cfg = STATUS_CONFIG[status as keyof typeof STATUS_CONFIG] ?? STATUS_CONFIG.pending;
  return (
    <span className={cn('inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-body font-semibold border', cfg.bg, cfg.text, cfg.border)}>
      <span className={cn('w-1.5 h-1.5 rounded-full', cfg.dot)} />
      {cfg.label}
    </span>
  );
}

/* ─── Detail Row ─────────────────────────────────────────────── */
function DetailItem({ icon: Icon, label, value, className }: { icon: React.ElementType; label: string; value: string; className?: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 rounded-lg bg-[hsl(var(--section-alt))] flex items-center justify-center shrink-0 mt-0.5">
        <Icon className="w-3.5 h-3.5 text-[hsl(var(--primary))]" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[11px] uppercase tracking-wider text-[hsl(var(--muted-foreground))] font-body font-medium">{label}</p>
        <p className={cn('text-sm font-semibold text-[hsl(var(--foreground))] font-body mt-0.5 break-all', className)}>{value}</p>
      </div>
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────────── */
const AdminAppointments = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newStatus, setNewStatus] = useState<string>('');
  const [isUpdating, setIsUpdating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const { toast } = useToast();

  const fetchAppointments = async () => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem('adminToken');
      const res = await fetch(`${API_URL}/appointments`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error('Failed to fetch appointments');
      const data = await res.json();
      setAppointments(data.appointments || []);
    } catch (error) {
      toast({ title: 'Error', description: error instanceof Error ? error.message : 'Failed to fetch', variant: 'destructive' });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => { fetchAppointments(); }, []);

  const handleViewDetails = (apt: Appointment) => {
    setSelectedAppointment(apt);
    setNewStatus(apt.status);
    setIsDialogOpen(true);
  };

  const handleUpdateStatus = async () => {
    if (!selectedAppointment || !newStatus) return;
    try {
      setIsUpdating(true);
      const token = localStorage.getItem('adminToken');
      const res = await fetch(`${API_URL}/appointments/${selectedAppointment._id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ status: newStatus }),
      });
      if (!res.ok) throw new Error('Failed to update');
      toast({ title: 'Status updated', description: `Appointment marked as ${newStatus}.` });
      setIsDialogOpen(false);
      fetchAppointments();
    } catch (error) {
      toast({ title: 'Error', description: error instanceof Error ? error.message : 'Failed to update', variant: 'destructive' });
    } finally {
      setIsUpdating(false);
    }
  };

  const handleDeleteAppointment = async (id: string) => {
    if (!confirm('Delete this appointment? This cannot be undone.')) return;
    try {
      setIsDeleting(true);
      const token = localStorage.getItem('adminToken');
      const res = await fetch(`${API_URL}/appointments/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error('Failed to delete');
      toast({ title: 'Deleted', description: 'Appointment removed successfully.' });
      setIsDialogOpen(false);
      fetchAppointments();
    } catch (error) {
      toast({ title: 'Error', description: error instanceof Error ? error.message : 'Failed to delete', variant: 'destructive' });
    } finally {
      setIsDeleting(false);
    }
  };

  const filtered = appointments
    .filter((apt) => {
      const q = searchQuery.toLowerCase();
      const matchSearch = apt.name?.toLowerCase().includes(q) ||
        apt.email?.toLowerCase().includes(q) ||
        apt.phone?.includes(q);
      const matchStatus = statusFilter === 'all' || apt.status === statusFilter;
      return matchSearch && matchStatus;
    })
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  /* Loading */
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-64 gap-3">
        <Loader2 className="h-8 w-8 animate-spin text-[hsl(var(--primary))]" />
        <p className="text-sm font-body text-[hsl(var(--muted-foreground))]">Loading appointments…</p>
      </div>
    );
  }

  /* Summary counts */
  const counts = {
    all: appointments.length,
    pending: appointments.filter(a => a.status === 'pending').length,
    confirmed: appointments.filter(a => a.status === 'confirmed').length,
    completed: appointments.filter(a => a.status === 'completed').length,
    cancelled: appointments.filter(a => a.status === 'cancelled').length,
  };

  return (
    <div className="space-y-5 max-w-7xl mx-auto">

      {/* ── Page Header ── */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[hsl(var(--foreground))]">Appointments</h2>
          <p className="text-sm font-body text-[hsl(var(--muted-foreground))] mt-0.5">Manage and review all patient bookings</p>
        </div>
        <div className="flex items-center gap-2 text-sm font-body font-medium text-[hsl(var(--muted-foreground))]">
          <span className="px-3 py-1.5 rounded-full bg-white border border-[hsl(var(--border))] shadow-sm">
            {filtered.length} / {counts.all} shown
          </span>
        </div>
      </div>

      {/* ── Quick Filter Pills ── */}
      <div className="flex flex-wrap gap-2">
        {(['all', 'pending', 'confirmed', 'completed', 'cancelled'] as const).map((s) => {
          const cfg = s === 'all' ? null : STATUS_CONFIG[s];
          const active = statusFilter === s;
          return (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={cn(
                'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-body font-semibold border transition-all duration-150',
                active
                  ? 'gradient-primary text-white border-transparent shadow-sm'
                  : 'bg-white text-[hsl(var(--muted-foreground))] border-[hsl(var(--border))] hover:border-[hsl(var(--primary)/0.4)] hover:text-[hsl(var(--primary))]'
              )}
            >
              {cfg && <span className={cn('w-1.5 h-1.5 rounded-full', cfg.dot)} />}
              <span className="capitalize">{s === 'all' ? 'All' : cfg!.label}</span>
              <span className={cn(
                'ml-0.5 px-1.5 py-0.5 rounded-full text-[10px] font-bold',
                active ? 'bg-white/20 text-white' : 'bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))]'
              )}>
                {counts[s]}
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Search Bar ── */}
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[hsl(var(--muted-foreground))]" />
        <Input
          placeholder="Search by name, email or phone…"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 h-10 font-body text-sm bg-white border-[hsl(var(--border))] rounded-xl shadow-sm focus-visible:ring-[hsl(var(--primary)/0.3)]"
        />
      </div>

      {/* ── Table Card ── */}
      <Card className="border-[hsl(var(--border))] shadow-sm rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-[hsl(var(--section-alt))] hover:bg-[hsl(var(--section-alt))] border-b border-[hsl(var(--border))]">
                {['Patient', 'Contact', 'Service', 'Date & Time', 'Status', 'Actions'].map(h => (
                  <TableHead key={h} className="text-xs font-body font-semibold text-[hsl(var(--muted-foreground))] uppercase tracking-wider py-3">
                    {h}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="py-16 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 rounded-full bg-[hsl(var(--section-alt))] flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-[hsl(var(--muted-foreground))]" />
                      </div>
                      <p className="text-sm font-body font-medium text-[hsl(var(--foreground))]">No appointments found</p>
                      <p className="text-xs font-body text-[hsl(var(--muted-foreground))]">Try adjusting your search or filters</p>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                filtered.map((apt) => (
                  <TableRow
                    key={apt._id}
                    className="border-b border-[hsl(var(--border))] hover:bg-[hsl(var(--section-alt)/0.5)] transition-colors group"
                  >
                    {/* Patient */}
                    <TableCell className="py-3.5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-white text-xs font-bold shrink-0">
                          {apt.name?.[0]?.toUpperCase() ?? '?'}
                        </div>
                        <span className="font-body font-semibold text-sm text-[hsl(var(--foreground))]">{apt.name}</span>
                      </div>
                    </TableCell>

                    {/* Contact */}
                    <TableCell className="py-3.5">
                      <div className="space-y-0.5">
                        <p className="text-xs font-body text-[hsl(var(--foreground))]">{apt.email}</p>
                        <p className="text-xs font-body text-[hsl(var(--muted-foreground))]">{apt.phone}</p>
                      </div>
                    </TableCell>

                    {/* Service */}
                    <TableCell className="py-3.5">
                      <span className="text-sm font-body text-[hsl(var(--foreground))]">{apt.service}</span>
                    </TableCell>

                    {/* Date & Time */}
                    <TableCell className="py-3.5">
                      <div className="space-y-0.5">
                        <p className="text-xs font-body font-medium text-[hsl(var(--foreground))]">
                          {new Date(apt.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                        </p>
                        <p className="text-xs font-body text-[hsl(var(--muted-foreground))]">{apt.time}</p>
                      </div>
                    </TableCell>

                    {/* Status */}
                    <TableCell className="py-3.5">
                      <StatusBadge status={apt.status} />
                    </TableCell>

                    {/* Actions */}
                    <TableCell className="py-3.5">
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => handleViewDetails(apt)}
                          className="w-8 h-8 rounded-lg flex items-center justify-center border border-[hsl(var(--border))] bg-white hover:border-[hsl(var(--primary)/0.5)] hover:bg-[hsl(var(--primary)/0.05)] transition-all"
                          title="View details"
                        >
                          <Eye className="w-3.5 h-3.5 text-[hsl(var(--primary))]" />
                        </button>
                        <button
                          onClick={() => handleDeleteAppointment(apt._id)}
                          className="w-8 h-8 rounded-lg flex items-center justify-center border border-[hsl(var(--border))] bg-white hover:border-rose-300 hover:bg-rose-50 transition-all"
                          title="Delete"
                        >
                          <Trash2 className="w-3.5 h-3.5 text-rose-500" />
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </Card>

      {/* ── Detail Dialog ── */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-md rounded-2xl border-[hsl(var(--border))] p-0 overflow-hidden">

          {/* Dialog header stripe */}
          <div className="gradient-primary px-6 py-5">
            <DialogTitle className="font-heading text-lg text-white">Appointment Details</DialogTitle>
            <DialogDescription className="text-white/70 font-body text-xs mt-0.5">
              Review and update this booking
            </DialogDescription>
          </div>

          {selectedAppointment && (
            <div className="px-6 py-5 space-y-5">

              {/* Patient info */}
              <div className="space-y-3">
                <DetailItem icon={User}     label="Patient Name" value={selectedAppointment.name} />
                <DetailItem icon={Mail}     label="Email"        value={selectedAppointment.email} />
                <DetailItem icon={Phone}    label="Phone"        value={selectedAppointment.phone} />
                <DetailItem icon={FileText} label="Service"      value={selectedAppointment.service} />
              </div>

              {/* Date / Time */}
              <div className="flex gap-3">
                <div className="flex-1 bg-[hsl(var(--section-alt))] rounded-xl p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="w-3.5 h-3.5 text-[hsl(var(--primary))]" />
                    <p className="text-[10px] uppercase tracking-wider font-body font-medium text-[hsl(var(--muted-foreground))]">Date</p>
                  </div>
                  <p className="text-sm font-body font-semibold text-[hsl(var(--foreground))]">
                    {new Date(selectedAppointment.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </p>
                </div>
                <div className="flex-1 bg-[hsl(var(--section-alt))] rounded-xl p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="w-3.5 h-3.5 text-[hsl(var(--primary))]" />
                    <p className="text-[10px] uppercase tracking-wider font-body font-medium text-[hsl(var(--muted-foreground))]">Time</p>
                  </div>
                  <p className="text-sm font-body font-semibold text-[hsl(var(--foreground))]">{selectedAppointment.time}</p>
                </div>
              </div>

              {/* Notes */}
              {selectedAppointment.notes && (
                <div className="bg-[hsl(var(--section-alt))] rounded-xl p-3">
                  <p className="text-[10px] uppercase tracking-wider font-body font-medium text-[hsl(var(--muted-foreground))] mb-1.5">Notes</p>
                  <p className="text-sm font-body text-[hsl(var(--foreground))]">{selectedAppointment.notes}</p>
                </div>
              )}

              {/* Current status */}
              <div className="flex items-center justify-between">
                <p className="text-xs font-body text-[hsl(var(--muted-foreground))]">Current status</p>
                <StatusBadge status={selectedAppointment.status} />
              </div>

              {/* Update status */}
              <div className="space-y-2">
                <Label className="text-xs font-body font-semibold text-[hsl(var(--foreground))] uppercase tracking-wider">
                  Update Status
                </Label>
                <Select value={newStatus} onValueChange={setNewStatus}>
                  <SelectTrigger className="rounded-xl border-[hsl(var(--border))] font-body text-sm h-10">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl">
                    {Object.entries(STATUS_CONFIG).map(([val, cfg]) => (
                      <SelectItem key={val} value={val} className="font-body text-sm">
                        <span className="flex items-center gap-2">
                          <span className={cn('w-2 h-2 rounded-full', cfg.dot)} />
                          {cfg.label}
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Action buttons */}
              <div className="flex gap-2 pt-1">
                <Button
                  onClick={handleUpdateStatus}
                  disabled={isUpdating || newStatus === selectedAppointment.status}
                  className="flex-1 gradient-primary text-white rounded-xl h-10 font-body font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {isUpdating ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Saving…</> : 'Save Changes'}
                </Button>
                <button
                  onClick={() => handleDeleteAppointment(selectedAppointment._id)}
                  disabled={isDeleting}
                  className="w-10 h-10 rounded-xl border border-rose-200 bg-rose-50 hover:bg-rose-100 flex items-center justify-center transition-colors disabled:opacity-50"
                  title="Delete appointment"
                >
                  {isDeleting ? <Loader2 className="h-4 w-4 animate-spin text-rose-500" /> : <Trash2 className="h-4 w-4 text-rose-500" />}
                </button>
                <button
                  onClick={() => setIsDialogOpen(false)}
                  className="px-4 h-10 rounded-xl border border-[hsl(var(--border))] text-sm font-body text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--section-alt))] transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminAppointments;