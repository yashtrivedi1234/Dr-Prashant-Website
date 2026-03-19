import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trash2, Eye, CheckCircle, AlertCircle, Mail, Phone,
  User, MessageSquare, Tag, Calendar, X, TrendingUp, Inbox,
} from "lucide-react";
import {
  useGetAllContactsQuery,
  useDeleteContactMutation,
  useUpdateContactStatusMutation,
  useGetContactStatsQuery,
} from "@/store/contactApi";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

/* ─── Status Config ──────────────────────────────────────────── */
const STATUS_CONFIG = {
  new:     { label: 'New',     dot: 'bg-sky-400',     bg: 'bg-sky-50',     text: 'text-sky-600',     border: 'border-sky-200',     icon: AlertCircle  },
  read:    { label: 'Read',    dot: 'bg-amber-400',   bg: 'bg-amber-50',   text: 'text-amber-600',   border: 'border-amber-200',   icon: Eye          },
  replied: { label: 'Replied', dot: 'bg-emerald-400', bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200', icon: CheckCircle  },
};

function StatusBadge({ status }: { status: string }) {
  const cfg = STATUS_CONFIG[status as keyof typeof STATUS_CONFIG] ?? STATUS_CONFIG.new;
  const Icon = cfg.icon;
  return (
    <span className={cn('inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-body font-semibold border', cfg.bg, cfg.text, cfg.border)}>
      <span className={cn('w-1.5 h-1.5 rounded-full shrink-0', cfg.dot)} />
      {cfg.label}
    </span>
  );
}

/* ─── Stat Card ──────────────────────────────────────────────── */
function StatCard({ label, value, icon: Icon, gradient, delay }: {
  label: string; value: number; icon: React.ElementType; gradient: string; delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.35, ease: 'easeOut' }}
      className="group relative bg-white rounded-2xl p-5 border border-[hsl(var(--border))] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl" style={{ background: 'currentColor' }} />
      <div className="flex items-start justify-between mb-4">
        <div className={cn('w-11 h-11 rounded-xl flex items-center justify-center text-white shadow-sm', gradient)}>
          <Icon className="w-5 h-5" />
        </div>
        <TrendingUp className="w-4 h-4 text-[hsl(var(--muted-foreground))] opacity-30" />
      </div>
      <p className="text-3xl font-heading font-bold text-[hsl(var(--foreground))] leading-none">{value}</p>
      <p className="text-sm font-body font-medium text-[hsl(var(--muted-foreground))] mt-2">{label}</p>
    </motion.div>
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
const AdminContacts = () => {
  const { toast } = useToast();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedContact, setSelectedContact] = useState<any>(null);
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const { data: contactsData, isLoading, refetch } = useGetAllContactsQuery({ page: currentPage, limit: 10 });
  const { data: statsData } = useGetContactStatsQuery();
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const [updateStatus, { isLoading: isUpdatingStatus }] = useUpdateContactStatusMutation();

  const contacts: any[] = contactsData?.data || [];
  const pagination = contactsData?.pagination;
  const stats = statsData?.data;

  const filtered = statusFilter === 'all'
    ? contacts
    : contacts.filter((c: any) => c.status === statusFilter);

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this contact? This cannot be undone.')) return;
    try {
      await deleteContact(id).unwrap();
      toast({ title: 'Deleted', description: 'Contact removed successfully.' });
      setSelectedContact(null);
      refetch();
    } catch (e: any) {
      toast({ title: 'Error', description: e?.data?.message || 'Failed to delete', variant: 'destructive' });
    }
  };

  const handleStatusUpdate = async (id: string, newStatus: string) => {
    try {
      await updateStatus({ id, status: newStatus }).unwrap();
      toast({ title: 'Status updated', description: `Marked as ${newStatus}.` });
      refetch();
    } catch (e: any) {
      toast({ title: 'Error', description: e?.data?.message || 'Failed to update', variant: 'destructive' });
    }
  };

  const statusCounts = {
    all: contacts.length,
    new: contacts.filter((c: any) => c.status === 'new').length,
    read: contacts.filter((c: any) => c.status === 'read').length,
    replied: contacts.filter((c: any) => c.status === 'replied').length,
  };

  return (
    <div className="space-y-5 max-w-7xl mx-auto">

      {/* ── Page Header ── */}
      <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        <h1 className="font-heading text-2xl sm:text-3xl font-bold text-[hsl(var(--foreground))]">Contact Submissions</h1>
        <p className="text-sm font-body text-[hsl(var(--muted-foreground))] mt-0.5">Manage and respond to patient inquiries</p>
      </motion.div>

      {/* ── Stats ── */}
      {stats && (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <StatCard label="Total Submissions" value={stats.total}            icon={Inbox}         gradient="gradient-primary" delay={0}    />
          <StatCard label="New Messages"      value={stats.byStatus.new}     icon={AlertCircle}   gradient="bg-sky-500"      delay={0.06} />
          <StatCard label="Read"              value={stats.byStatus.read}    icon={Eye}           gradient="bg-amber-400"    delay={0.12} />
          <StatCard label="Replied"           value={stats.byStatus.replied} icon={CheckCircle}   gradient="bg-emerald-500"  delay={0.18} />
        </div>
      )}

      {/* ── Filter Pills ── */}
      <div className="flex flex-wrap gap-2">
        {(['all', 'new', 'read', 'replied'] as const).map((s) => {
          const cfg = s !== 'all' ? STATUS_CONFIG[s] : null;
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
              <span className={cn('ml-0.5 px-1.5 py-0.5 rounded-full text-[10px] font-bold', active ? 'bg-white/20 text-white' : 'bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))]')}>
                {statusCounts[s]}
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Table ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-2xl border border-[hsl(var(--border))] shadow-sm overflow-hidden"
      >
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-16 gap-3">
            <div className="w-8 h-8 border-2 border-[hsl(var(--primary)/0.2)] border-t-[hsl(var(--primary))] rounded-full animate-spin" />
            <p className="text-sm font-body text-[hsl(var(--muted-foreground))]">Loading contacts…</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 gap-3">
            <div className="w-12 h-12 rounded-full bg-[hsl(var(--section-alt))] flex items-center justify-center">
              <Mail className="w-5 h-5 text-[hsl(var(--muted-foreground))]" />
            </div>
            <p className="text-sm font-body font-medium text-[hsl(var(--foreground))]">No contacts found</p>
            <p className="text-xs font-body text-[hsl(var(--muted-foreground))]">Try a different filter</p>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[hsl(var(--section-alt))] border-b border-[hsl(var(--border))]">
                    {['Sender', 'Subject', 'Phone', 'Status', 'Date', 'Actions'].map(h => (
                      <th key={h} className="px-5 py-3 text-left text-[11px] font-body font-semibold text-[hsl(var(--muted-foreground))] uppercase tracking-wider">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[hsl(var(--border))]">
                  {filtered.map((contact: any) => (
                    <tr key={contact._id} className="hover:bg-[hsl(var(--section-alt)/0.5)] transition-colors group">
                      {/* Sender */}
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-white text-xs font-bold shrink-0">
                            {contact.name?.[0]?.toUpperCase() ?? '?'}
                          </div>
                          <div>
                            <p className="text-sm font-body font-semibold text-[hsl(var(--foreground))]">{contact.name}</p>
                            <p className="text-xs font-body text-[hsl(var(--muted-foreground))] truncate max-w-[140px]">{contact.email}</p>
                          </div>
                        </div>
                      </td>

                      {/* Subject */}
                      <td className="px-5 py-3.5 max-w-[180px]">
                        <p className="text-sm font-body text-[hsl(var(--foreground))] truncate">{contact.subject}</p>
                      </td>

                      {/* Phone */}
                      <td className="px-5 py-3.5">
                        <a href={`tel:${contact.phone}`} className="text-sm font-body text-[hsl(var(--primary))] hover:underline">
                          {contact.phone}
                        </a>
                      </td>

                      {/* Status */}
                      <td className="px-5 py-3.5">
                        <StatusBadge status={contact.status} />
                      </td>

                      {/* Date */}
                      <td className="px-5 py-3.5">
                        <p className="text-xs font-body text-[hsl(var(--muted-foreground))]">
                          {new Date(contact.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                        </p>
                      </td>

                      {/* Actions */}
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => setSelectedContact(contact)}
                            className="w-8 h-8 rounded-lg flex items-center justify-center border border-[hsl(var(--border))] bg-white hover:border-[hsl(var(--primary)/0.5)] hover:bg-[hsl(var(--primary)/0.05)] transition-all"
                            title="View details"
                          >
                            <Eye className="w-3.5 h-3.5 text-[hsl(var(--primary))]" />
                          </button>

                          {/* Inline status select */}
                          <select
                            value={contact.status}
                            onChange={(e) => handleStatusUpdate(contact._id, e.target.value)}
                            disabled={isUpdatingStatus}
                            className="h-8 text-xs font-body px-2 rounded-lg border border-[hsl(var(--border))] bg-white text-[hsl(var(--foreground))] hover:border-[hsl(var(--primary)/0.4)] disabled:opacity-50 focus:outline-none focus:ring-1 focus:ring-[hsl(var(--primary)/0.3)] transition-colors cursor-pointer"
                          >
                            <option value="new">New</option>
                            <option value="read">Read</option>
                            <option value="replied">Replied</option>
                          </select>

                          <button
                            onClick={() => handleDelete(contact._id)}
                            disabled={isDeleting}
                            className="w-8 h-8 rounded-lg flex items-center justify-center border border-[hsl(var(--border))] bg-white hover:border-rose-300 hover:bg-rose-50 transition-all disabled:opacity-50"
                            title="Delete"
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

            {/* Pagination */}
            {pagination && pagination.totalPages > 1 && (
              <div className="border-t border-[hsl(var(--border))] px-5 py-3.5 flex items-center justify-between bg-[hsl(var(--section-alt))]">
                <p className="text-xs font-body text-[hsl(var(--muted-foreground))]">
                  Page <span className="font-semibold text-[hsl(var(--foreground))]">{pagination.currentPage}</span> of {pagination.totalPages}
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={pagination.currentPage === 1}
                    className="px-3 py-1.5 text-xs font-body font-medium border border-[hsl(var(--border))] rounded-lg bg-white hover:bg-[hsl(var(--section-alt))] disabled:opacity-40 transition-colors"
                  >
                    ← Prev
                  </button>
                  <button
                    onClick={() => setCurrentPage(p => Math.min(pagination.totalPages, p + 1))}
                    disabled={pagination.currentPage === pagination.totalPages}
                    className="px-3 py-1.5 text-xs font-body font-medium border border-[hsl(var(--border))] rounded-lg bg-white hover:bg-[hsl(var(--section-alt))] disabled:opacity-40 transition-colors"
                  >
                    Next →
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </motion.div>

      {/* ── Details Modal ── */}
      <AnimatePresence>
        {selectedContact && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedContact(null)}
          >
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden"
            >
              {/* Modal header */}
              <div className="gradient-primary px-6 py-5 flex items-center justify-between">
                <div>
                  <h2 className="font-heading text-lg text-white font-semibold">Contact Details</h2>
                  <p className="text-white/70 text-xs font-body mt-0.5">Full submission view</p>
                </div>
                <button
                  onClick={() => setSelectedContact(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>

              {/* Modal body */}
              <div className="px-6 py-5 space-y-4 max-h-[70vh] overflow-y-auto">
                <div className="space-y-3">
                  <DetailItem icon={User} label="Name">
                    <p className="text-sm font-body font-semibold text-[hsl(var(--foreground))]">{selectedContact.name}</p>
                  </DetailItem>
                  <DetailItem icon={Mail} label="Email">
                    <a href={`mailto:${selectedContact.email}`} className="text-sm font-body font-semibold text-[hsl(var(--primary))] hover:underline break-all">
                      {selectedContact.email}
                    </a>
                  </DetailItem>
                  <DetailItem icon={Phone} label="Phone">
                    <a href={`tel:${selectedContact.phone}`} className="text-sm font-body font-semibold text-[hsl(var(--primary))] hover:underline">
                      {selectedContact.phone}
                    </a>
                  </DetailItem>
                  <DetailItem icon={Tag} label="Subject">
                    <p className="text-sm font-body font-semibold text-[hsl(var(--foreground))]">{selectedContact.subject}</p>
                  </DetailItem>
                  <DetailItem icon={Calendar} label="Submitted">
                    <p className="text-sm font-body font-semibold text-[hsl(var(--foreground))]">
                      {new Date(selectedContact.createdAt).toLocaleString('en-IN')}
                    </p>
                  </DetailItem>
                </div>

                {/* Message */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="w-3.5 h-3.5 text-[hsl(var(--primary))]" />
                    <p className="text-[10px] uppercase tracking-wider font-body font-medium text-[hsl(var(--muted-foreground))]">Message</p>
                  </div>
                  <div className="bg-[hsl(var(--section-alt))] rounded-xl p-4 text-sm font-body text-[hsl(var(--foreground))] whitespace-pre-wrap leading-relaxed border border-[hsl(var(--border))]">
                    {selectedContact.message}
                  </div>
                </div>

                {/* Current status */}
                <div className="flex items-center justify-between">
                  <p className="text-xs font-body text-[hsl(var(--muted-foreground))]">Current status</p>
                  <StatusBadge status={selectedContact.status} />
                </div>

                {/* Update status select */}
                <div className="space-y-1.5">
                  <p className="text-[11px] uppercase tracking-wider font-body font-semibold text-[hsl(var(--foreground))]">Update Status</p>
                  <select
                    value={selectedContact.status}
                    onChange={(e) => {
                      handleStatusUpdate(selectedContact._id, e.target.value);
                      setSelectedContact({ ...selectedContact, status: e.target.value });
                    }}
                    disabled={isUpdatingStatus}
                    className="w-full h-10 text-sm font-body px-3 rounded-xl border border-[hsl(var(--border))] bg-white text-[hsl(var(--foreground))] hover:border-[hsl(var(--primary)/0.4)] disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary)/0.2)] transition-colors cursor-pointer"
                  >
                    <option value="new">Mark as New</option>
                    <option value="read">Mark as Read</option>
                    <option value="replied">Mark as Replied</option>
                  </select>
                </div>

                {/* Footer actions */}
                <div className="flex gap-2 pt-1">
                  <a
                    href={`mailto:${selectedContact.email}`}
                    className="flex-1 h-10 gradient-primary text-white rounded-xl text-sm font-body font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                  >
                    <Mail className="w-4 h-4" />
                    Reply via Email
                  </a>
                  <button
                    onClick={() => handleDelete(selectedContact._id)}
                    disabled={isDeleting}
                    className="w-10 h-10 rounded-xl border border-rose-200 bg-rose-50 hover:bg-rose-100 flex items-center justify-center transition-colors disabled:opacity-50"
                    title="Delete contact"
                  >
                    <Trash2 className="w-4 h-4 text-rose-500" />
                  </button>
                  <button
                    onClick={() => setSelectedContact(null)}
                    className="px-4 h-10 rounded-xl border border-[hsl(var(--border))] text-sm font-body text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--section-alt))] transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminContacts;