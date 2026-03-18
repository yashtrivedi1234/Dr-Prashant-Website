import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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

const AdminAnalytics = () => {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        const response = await fetch('http://localhost:5000/api/appointments/stats', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch analytics');
        }

        const data = await response.json();
        setAnalytics(data);
      } catch (error) {
        toast({
          title: 'Error',
          description: error instanceof Error ? error.message : 'Failed to fetch analytics',
          variant: 'destructive',
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
      </div>
    );
  }

  if (!analytics) {
    return (
      <div className="p-6">
        <Card>
          <CardContent className="pt-6">
            <p>Unable to load analytics data</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const completionRate =
    analytics.totalAppointments > 0
      ? Math.round((analytics.completedAppointments / analytics.totalAppointments) * 100)
      : 0;

  const cancellationRate =
    analytics.totalAppointments > 0
      ? Math.round((analytics.cancelledAppointments / analytics.totalAppointments) * 100)
      : 0;

  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-slate-900">Analytics</h2>
        <p className="text-slate-600 mt-1">Track appointment trends and performance metrics</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{analytics.totalAppointments}</div>
            <p className="text-xs text-slate-500 mt-1">All time</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">{completionRate}%</div>
            <p className="text-xs text-slate-500 mt-1">{analytics.completedAppointments} completed</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Cancellation Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-600">{cancellationRate}%</div>
            <p className="text-xs text-slate-500 mt-1">{analytics.cancelledAppointments} cancelled</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-yellow-600">{analytics.pendingAppointments}</div>
            <p className="text-xs text-slate-500 mt-1">Awaiting confirmation</p>
          </CardContent>
        </Card>
      </div>

      {/* Status Distribution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Status Distribution</CardTitle>
            <CardDescription>Breakdown by appointment status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Confirmed</span>
                <span className="text-sm font-semibold">{analytics.confirmedAppointments}</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{
                    width:
                      analytics.totalAppointments > 0
                        ? `${(analytics.confirmedAppointments / analytics.totalAppointments) * 100}%`
                        : '0%',
                  }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Completed</span>
                <span className="text-sm font-semibold">{analytics.completedAppointments}</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{
                    width:
                      analytics.totalAppointments > 0
                        ? `${(analytics.completedAppointments / analytics.totalAppointments) * 100}%`
                        : '0%',
                  }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Pending</span>
                <span className="text-sm font-semibold">{analytics.pendingAppointments}</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div
                  className="bg-yellow-500 h-2 rounded-full"
                  style={{
                    width:
                      analytics.totalAppointments > 0
                        ? `${(analytics.pendingAppointments / analytics.totalAppointments) * 100}%`
                        : '0%',
                  }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Cancelled</span>
                <span className="text-sm font-semibold">{analytics.cancelledAppointments}</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div
                  className="bg-red-500 h-2 rounded-full"
                  style={{
                    width:
                      analytics.totalAppointments > 0
                        ? `${(analytics.cancelledAppointments / analytics.totalAppointments) * 100}%`
                        : '0%',
                  }}
                ></div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Services Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Appointments by Service</CardTitle>
            <CardDescription>Most popular services</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {Object.entries(analytics.appointmentsByService)
                .sort(([, a], [, b]) => b - a)
                .map(([service, count]) => (
                  <div key={service}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm">{service}</span>
                      <span className="text-sm font-semibold">{count}</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div
                        className="bg-purple-500 h-2 rounded-full"
                        style={{
                          width:
                            analytics.totalAppointments > 0
                              ? `${(count / analytics.totalAppointments) * 100}%`
                              : '0%',
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Metrics */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Metrics</CardTitle>
          <CardDescription>Key performance indicators</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-sm text-slate-600 mb-2">Avg Completion Time</p>
            <p className="text-2xl font-bold">~5-7 days</p>
            <p className="text-xs text-slate-500 mt-1">From booking to completion</p>
          </div>
          <div>
            <p className="text-sm text-slate-600 mb-2">Success Rate</p>
            <p className="text-2xl font-bold text-green-600">{completionRate}%</p>
            <p className="text-xs text-slate-500 mt-1">Appointments successfully completed</p>
          </div>
          <div>
            <p className="text-sm text-slate-600 mb-2">Booking Efficiency</p>
            <p className="text-2xl font-bold text-blue-600">
              {analytics.totalAppointments > 0 ? ((analytics.confirmedAppointments / analytics.totalAppointments) * 100).toFixed(0) : 0}%
            </p>
            <p className="text-xs text-slate-500 mt-1">Confirmed vs total bookings</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminAnalytics;
