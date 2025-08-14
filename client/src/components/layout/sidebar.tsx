import { Link, useLocation } from "wouter";
import { 
  BarChart3, 
  FileText, 
  Images, 
  Menu, 
  Users, 
  CheckCircle, 
  Settings, 
  GraduationCap, 
  X,
  Plus,
  Minus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  highContrast: boolean;
  setHighContrast: (value: boolean) => void;
  fontLarge: boolean;
  setFontLarge: (value: boolean) => void;
}

export default function Sidebar({ 
  isOpen, 
  onClose, 
  highContrast, 
  setHighContrast, 
  fontLarge, 
  setFontLarge 
}: SidebarProps) {
  const [location] = useLocation();

  const navigationItems = [
    { href: "/dashboard", label: "Dashboard", icon: BarChart3 },
    { href: "/content", label: "Content", icon: FileText },
    { href: "/media", label: "Media", icon: Images },
    { href: "/menu-management", label: "Menu Management", icon: Menu },
    { href: "/users", label: "Users", icon: Users },
    { href: "/approvals", label: "Approvals", icon: CheckCircle, badge: "3" },
    { href: "/settings", label: "Settings", icon: Settings },
  ];

  const isActive = (href: string) => {
    if (href === "/dashboard") {
      return location === "/" || location === "/dashboard";
    }
    return location === href;
  };

  return (
    <aside className={`fixed left-0 top-0 z-50 h-screen w-64 bg-white border-r border-slate-200 transition-transform duration-300 lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex h-full flex-col">
        {/* Logo Section */}
        <div className="flex h-16 items-center justify-between px-6 border-b border-slate-200">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 bg-university-500 rounded-lg flex items-center justify-center">
              <GraduationCap className="text-white text-sm" />
            </div>
            <span className="font-semibold text-slate-900">University WCMS</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Navigation Menu */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant="ghost"
                  className={`w-full justify-start text-sm font-medium ${
                    isActive(item.href)
                      ? "text-university-700 bg-university-50 hover:bg-university-50"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                  onClick={() => window.innerWidth < 1024 && onClose()}
                >
                  <Icon className={`mr-3 h-4 w-4 ${isActive(item.href) ? "text-university-500" : "text-slate-400"}`} />
                  {item.label}
                  {item.badge && (
                    <span className="ml-auto bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Button>
              </Link>
            );
          })}
        </nav>
        
        {/* Accessibility Controls */}
        <div className="p-4 border-t border-slate-200">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600">High Contrast</span>
              <Switch
                checked={highContrast}
                onCheckedChange={setHighContrast}
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600">Font Size</span>
              <div className="flex space-x-1">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setFontLarge(false)}
                  className="p-1"
                >
                  <Minus className="h-3 w-3" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setFontLarge(true)}
                  className="p-1"
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
