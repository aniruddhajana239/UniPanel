import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  iconColor: string;
}

export default function StatCard({ title, value, icon: Icon, iconColor }: StatCardProps) {
  return (
    <Card className="card-hover transition-transform">
      <CardContent className="p-6">
        <div className="flex items-center">
          <div className={`p-3 ${iconColor} rounded-lg`}>
            <Icon className="text-xl" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-slate-600">{title}</p>
            <p className="text-2xl font-bold text-slate-900">{value}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
