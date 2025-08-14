import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Clock, Users, Calendar, Plus, Upload, UserPlus, Eye } from "lucide-react";
import StatCard from "@/components/ui/stat-card";

export default function Dashboard() {
  const quickActions = [
    { label: "New Content", icon: Plus, color: "text-university-500" },
    { label: "Upload Media", icon: Upload, color: "text-university-500" },
    { label: "Add User", icon: UserPlus, color: "text-university-500" },
    { label: "Preview Site", icon: Eye, color: "text-university-500" },
  ];

  const recentActivities = [
    {
      type: "approved",
      message: 'Page "Computer Science Department" approved',
      time: "2 hours ago",
      color: "bg-green-100 text-green-600",
    },
    {
      type: "user",
      message: 'New user "John Doe" added',
      time: "4 hours ago",
      color: "bg-blue-100 text-blue-600",
    },
    {
      type: "menu",
      message: "Menu structure updated",
      time: "6 hours ago",
      color: "bg-orange-100 text-orange-600",
    },
  ];

  return (
    <div className="p-4 lg:p-6">
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Pages"
          value="247"
          icon={FileText}
          iconColor="bg-blue-100 text-blue-600"
        />
        <StatCard
          title="Pending Approvals"
          value="12"
          icon={Clock}
          iconColor="bg-orange-100 text-orange-600"
        />
        <StatCard
          title="Active Users"
          value="89"
          icon={Users}
          iconColor="bg-green-100 text-green-600"
        />
        <StatCard
          title="Latest Events"
          value="8"
          icon={Calendar}
          iconColor="bg-purple-100 text-purple-600"
        />
      </div>

      {/* Quick Actions & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4">
              {quickActions.map((action) => {
                const Icon = action.icon;
                return (
                  <Button
                    key={action.label}
                    variant="outline"
                    className="flex flex-col items-center p-4 h-auto space-y-2 hover:bg-slate-50"
                  >
                    <Icon className={`${action.color} text-xl`} />
                    <span className="text-sm font-medium text-slate-700">{action.label}</span>
                  </Button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className={`h-8 w-8 ${activity.color} rounded-full flex items-center justify-center`}>
                    <div className="h-2 w-2 bg-current rounded-full" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-900">{activity.message}</p>
                    <p className="text-xs text-slate-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
