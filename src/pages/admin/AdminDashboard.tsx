import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, Calendar, CheckCircle, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DashboardStats {
  totalAppointments: number;
  pendingAppointments: number;
  confirmedAppointments: number;
  completedAppointments: number;
  cancelledAppointments: number;
  upcomingAppointments: number;
}

const AdminDashboard = () => {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        const response = await fetch('http://localhost:5000/api/appointments/stats', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch stats');
        }

        const data = await response.json();
        setStats(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="pt-6">
            <div className="flex items-center text-red-700">
              <AlertCircle className="mr-2 h-5 w-5" />
              Error: {error}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const statCards = [
    {
      title: 'Total Appointments',
      value: stats?.totalAppointments || 0,
      description: 'All appointments',
      icon: Calendar,
      color: 'bg-blue-50 text-blue-600',
    },
    {
      title: 'Pending',
      value: stats?.pendingAppointments || 0,
      description: 'Awaiting confirmation',
      icon: AlertCircle,
      color: 'bg-yellow-50 text-yellow-600',
    },
    {
      title: 'Confirmed',
      value: stats?.confirmedAppointments || 0,
      description: 'Ready for service',
      icon: CheckCircle,
      color: 'bg-green-50 text-green-600',
    },
    {
      title: 'Completed',
      value: stats?.completedAppointments || 0,
      description: 'Finished sessions',
      icon: CheckCircle,
      color: 'bg-purple-50 text-purple-600',
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Section */}
      <div>
        <h2 className="text-3xl font-bold text-slate-900">Dashboard Overview</h2>
        <p className="text-slate-600 mt-1">Welcome to the admin panel. Here's your appointment summary.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-slate-600">
                    {stat.title}
                  </CardTitle>
                  <div className={`p-2 rounded-lg ${stat.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                <p className="text-xs text-slate-500 mt-1">{stat.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Manage your appointments efficiently</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link to="/admin/appointments">
            <Button variant="outline" className="w-full justify-start">
              <Calendar className="mr-2 h-4 w-4" />
              View All Appointments
            </Button>
          </Link>
          <Link to="/admin/appointments?filter=pending">
            <Button variant="outline" className="w-full justify-start">
              <AlertCircle className="mr-2 h-4 w-4" />
              Pending Approvals
            </Button>
          </Link>
          <Link to="/admin/analytics">
            <Button variant="outline" className="w-full justify-start">
              <Calendar className="mr-2 h-4 w-4" />
              View Analytics
            </Button>
          </Link>
        </CardContent>
      </Card>

      {/* Status Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Status Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Pending</span>
              <span className="font-semibold text-yellow-600">{stats?.pendingAppointments || 0}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Confirmed</span>
              <span className="font-semibold text-green-600">{stats?.confirmedAppointments || 0}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Completed</span>
              <span className="font-semibold text-blue-600">{stats?.completedAppointments || 0}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Cancelled</span>
              <span className="font-semibold text-red-600">{stats?.cancelledAppointments || 0}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-slate-900">{stats?.upcomingAppointments || 0}</div>
            <p className="text-sm text-slate-500 mt-2">Appointments in the next 7 days</p>
            <Button variant="link" className="p-0 h-auto mt-2">
              <Link to="/admin/appointments">View upcoming appointments →</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
