import { Outlet, Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  LayoutDashboard,
  Calendar,
  Mail,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  ChevronRight,
  Stethoscope,
  Newspaper,
} from 'lucide-react';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard',    href: '/admin/dashboard',    color: 'text-sky-400' },
  { icon: Calendar,        label: 'Appointments', href: '/admin/appointments', color: 'text-emerald-400' },
  { icon: Mail,            label: 'Contacts',     href: '/admin/contacts',     color: 'text-violet-400' },
  { icon: Newspaper,       label: 'Newsletter',   href: '/admin/newsletter',   color: 'text-cyan-400' },
  { icon: BarChart3,       label: 'Analytics',    href: '/admin/analytics',    color: 'text-amber-400' },
  { icon: Settings,        label: 'Settings',     href: '/admin/settings',     color: 'text-rose-400' },
];

/* ─── Sidebar ──────────────────────────────────────────────── */
function SidebarContent({
  onNavigate,
  adminEmail,
  onLogout,
}: {
  onNavigate?: () => void;
  adminEmail?: string;
  onLogout: () => void;
}) {
  const location = useLocation();
  const isActive = (href: string) => location.pathname === href;

  return (
    <div className="flex flex-col h-full bg-[hsl(var(--topbar))] text-white select-none">
      {/* Brand */}
      <div className="px-6 py-7 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-lg shadow-black/30 shrink-0">
            <Stethoscope className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="font-heading text-lg font-semibold leading-tight">Dr. Prashant</p>
            <p className="text-xs text-white/50 font-body tracking-wide">Admin Panel</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-5 space-y-1 overflow-y-auto">
        <p className="px-3 mb-3 text-[10px] uppercase tracking-widest text-white/30 font-body font-medium">
          Navigation
        </p>
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);
          return (
            <Link key={item.href} to={item.href} onClick={onNavigate}>
              <span
                className={cn(
                  'group relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-body font-medium transition-all duration-200 cursor-pointer',
                  active
                    ? 'bg-white/15 text-white shadow-inner shadow-white/5'
                    : 'text-white/60 hover:text-white hover:bg-white/8'
                )}
              >
                {/* Active pill */}
                {active && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-r-full bg-sky-400" />
                )}

                <span
                  className={cn(
                    'flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200',
                    active ? 'bg-white/10' : 'bg-white/5 group-hover:bg-white/10'
                  )}
                >
                  <Icon className={cn('w-4 h-4', active ? 'text-white' : item.color)} />
                </span>

                <span className="flex-1">{item.label}</span>

                {active && (
                  <ChevronRight className="w-3.5 h-3.5 text-white/40 shrink-0" />
                )}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-3 pb-5 pt-3 border-t border-white/10 space-y-3">
        {/* User info */}
        <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/5">
          <div className="w-8 h-8 rounded-full gradient-soft flex items-center justify-center text-xs font-bold text-white shrink-0">
            {adminEmail?.[0]?.toUpperCase() ?? 'A'}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] text-white/40 font-body">Logged in as</p>
            <p className="text-xs font-semibold text-white truncate font-body">{adminEmail}</p>
          </div>
        </div>

        {/* Logout */}
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-body font-medium text-white/60 hover:text-white hover:bg-white/8 transition-all duration-200 group"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 group-hover:bg-rose-500/20 transition-colors">
            <LogOut className="w-4 h-4 group-hover:text-rose-400 transition-colors" />
          </span>
          Logout
        </button>
      </div>
    </div>
  );
}

/* ─── Top Bar ───────────────────────────────────────────────── */
function TopBar({ onMenuClick }: { onMenuClick: () => void }) {
  const location = useLocation();
  const active = menuItems.find((m) => m.href === location.pathname);

  return (
    <header className="bg-white border-b border-[hsl(var(--border))] px-4 sm:px-6 py-3 flex items-center gap-4 shrink-0">
      {/* Hamburger – mobile only */}
      <button
        onClick={onMenuClick}
        className="md:hidden p-2 rounded-lg hover:bg-[hsl(var(--section-alt))] transition-colors"
        aria-label="Open menu"
      >
        <Menu className="w-5 h-5 text-[hsl(var(--primary))]" />
      </button>

      {/* Page title */}
      <div className="flex items-center gap-2 flex-1 min-w-0">
        {active && (
          <span
            className={cn(
              'hidden sm:flex items-center justify-center w-8 h-8 rounded-lg text-white text-xs shrink-0',
              'gradient-primary'
            )}
          >
            <active.icon className="w-4 h-4" />
          </span>
        )}
        <div>
          <h1 className="font-heading text-lg sm:text-xl font-semibold text-[hsl(var(--foreground))] leading-tight truncate">
            {active?.label ?? 'Admin'}
          </h1>
          <p className="hidden sm:block text-xs text-[hsl(var(--muted-foreground))] font-body leading-none mt-0.5">
            {new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </div>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-2 shrink-0">
        {/* Breadcrumb pill */}
        <span className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[hsl(var(--section-alt))] text-xs font-body font-medium text-[hsl(var(--primary))]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Live
        </span>
      </div>
    </header>
  );
}

/* ─── Layout ────────────────────────────────────────────────── */
const AdminLayout = () => {
  const { logout, adminUser } = useAdminAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setMobileOpen(false);
  };

  return (
    <div className="flex h-screen bg-[hsl(var(--section-alt))] overflow-hidden">
      {/* ── Desktop Sidebar ── */}
      <aside className="hidden md:flex md:w-64 lg:w-72 flex-col shrink-0 shadow-xl shadow-black/10">
        <SidebarContent adminEmail={adminUser?.email} onLogout={handleLogout} />
      </aside>

      {/* ── Mobile Drawer ── */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="left" className="w-72 p-0 border-0">
          <SidebarContent
            adminEmail={adminUser?.email}
            onLogout={handleLogout}
            onNavigate={() => setMobileOpen(false)}
          />
        </SheetContent>
      </Sheet>

      {/* ── Main Column ── */}
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <TopBar onMenuClick={() => setMobileOpen(true)} />

        {/* Scrollable content */}
        <main className="flex-1 overflow-y-auto">
          {/* Inner wrapper with consistent padding */}
          <div className="p-4 sm:p-6 lg:p-8 min-h-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;