import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAdminAuth } from '@/contexts/AdminAuthContext';
import { LogOut } from 'lucide-react';

const AdminSettings = () => {
  const { adminUser, logout } = useAdminAuth();

  return (
    <div className="p-6 space-y-6 max-w-2xl">
      <div>
        <h2 className="text-3xl font-bold text-slate-900">Settings</h2>
        <p className="text-slate-600 mt-1">Manage your admin account settings</p>
      </div>

      {/* Account Information */}
      <Card>
        <CardHeader>
          <CardTitle>Account Information</CardTitle>
          <CardDescription>Your admin account details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-slate-600 text-sm">Email</label>
            <p className="text-lg font-semibold mt-1">{adminUser?.email}</p>
          </div>
          <div>
            <label className="text-slate-600 text-sm">Role</label>
            <p className="text-lg font-semibold mt-1">Administrator</p>
          </div>
        </CardContent>
      </Card>

      {/* Logout */}
      <Card className="border-red-200 bg-red-50">
        <CardHeader>
          <CardTitle className="text-red-700">Logout</CardTitle>
          <CardDescription>End your current session</CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            variant="destructive"
            onClick={() => {
              logout();
              window.location.href = '/admin/login';
            }}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminSettings;
