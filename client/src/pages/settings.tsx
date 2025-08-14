import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Upload } from "lucide-react";

export default function Settings() {
  const [settings, setSettings] = useState({
    multilingual: true,
    twoFactor: false,
    sessionTimeout: "1-hour",
    contentApproval: true,
    autoBackup: true,
    maintenanceMode: false,
  });

  const [selectedTheme, setSelectedTheme] = useState("university-blue");

  const themeColors = [
    { id: "university-blue", name: "University Blue", color: "bg-university-500", border: "border-university-700" },
    { id: "green", name: "Green", color: "bg-green-500", border: "border-green-700" },
    { id: "purple", name: "Purple", color: "bg-purple-500", border: "border-purple-700" },
    { id: "red", name: "Red", color: "bg-red-500", border: "border-red-700" },
  ];

  const handleToggle = (key: string) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key as keyof typeof prev] }));
  };

  const handleSave = () => {
    // TODO: Implement settings save logic
    console.log("Settings saved:", settings);
  };

  const handleBackupNow = () => {
    // TODO: Implement manual backup logic
    console.log("Manual backup initiated");
  };

  const handleMaintenanceToggle = () => {
    // TODO: Implement maintenance mode logic
    handleToggle("maintenanceMode");
  };

  return (
    <div className="p-4 lg:p-6">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Settings</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* General Settings */}
        <Card>
          <CardHeader>
            <CardTitle>General Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-slate-700">Multilingual Support</p>
                <p className="text-sm text-slate-600">Enable English/Marathi language switching</p>
              </div>
              <Switch
                checked={settings.multilingual}
                onCheckedChange={() => handleToggle("multilingual")}
              />
            </div>
            
            <div>
              <Label className="font-medium text-slate-700 mb-2 block">Site Logo</Label>
              <div className="flex items-center space-x-4">
                <div className="h-16 w-16 bg-university-500 rounded-lg flex items-center justify-center">
                  <GraduationCap className="text-white text-xl" />
                </div>
                <Button variant="outline">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload New Logo
                </Button>
              </div>
            </div>
            
            <div>
              <Label className="font-medium text-slate-700 mb-3 block">Theme Color</Label>
              <div className="flex items-center space-x-4">
                <div className="flex space-x-2">
                  {themeColors.map((theme) => (
                    <button
                      key={theme.id}
                      className={`h-8 w-8 ${theme.color} rounded-full border-2 ${
                        selectedTheme === theme.id ? theme.border : "border-transparent"
                      } hover:${theme.border} transition-colors`}
                      onClick={() => setSelectedTheme(theme.id)}
                    />
                  ))}
                </div>
                <span className="text-sm text-slate-600">
                  {themeColors.find(t => t.id === selectedTheme)?.name}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Security Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-slate-700">Two-Factor Authentication</p>
                <p className="text-sm text-slate-600">Require 2FA for admin accounts</p>
              </div>
              <Switch
                checked={settings.twoFactor}
                onCheckedChange={() => handleToggle("twoFactor")}
              />
            </div>
            
            <div>
              <Label className="font-medium text-slate-700 mb-3 block">Session Timeout</Label>
              <Select value={settings.sessionTimeout} onValueChange={(value) => 
                setSettings(prev => ({ ...prev, sessionTimeout: value }))
              }>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="30-minutes">30 minutes</SelectItem>
                  <SelectItem value="1-hour">1 hour</SelectItem>
                  <SelectItem value="2-hours">2 hours</SelectItem>
                  <SelectItem value="4-hours">4 hours</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-slate-700">Content Approval</p>
                <p className="text-sm text-slate-600">Require approval before publishing</p>
              </div>
              <Switch
                checked={settings.contentApproval}
                onCheckedChange={() => handleToggle("contentApproval")}
              />
            </div>
          </CardContent>
        </Card>

        {/* Backup Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Backup & Maintenance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-slate-700">Automatic Backups</p>
                <p className="text-sm text-slate-600">Daily content and database backups</p>
              </div>
              <Switch
                checked={settings.autoBackup}
                onCheckedChange={() => handleToggle("autoBackup")}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-slate-700">Last Backup</p>
                <p className="text-sm text-slate-500">Today at 3:00 AM</p>
              </div>
              <Button onClick={handleBackupNow} className="bg-university-500 hover:bg-university-600">
                Backup Now
              </Button>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-slate-700">Maintenance Mode</p>
                <p className="text-sm text-slate-500">Temporarily disable public access</p>
              </div>
              <Button 
                variant={settings.maintenanceMode ? "destructive" : "outline"}
                onClick={handleMaintenanceToggle}
              >
                {settings.maintenanceMode ? "Disable" : "Enable"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Save Settings */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Save Changes</h3>
                <p className="text-sm text-slate-500">All settings will be applied immediately</p>
              </div>
              <Button onClick={handleSave} className="bg-university-500 hover:bg-university-600">
                Save All Settings
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function Label({ className, children, ...props }: { className?: string; children: React.ReactNode } & React.LabelHTMLAttributes<HTMLLabelElement>) {
  return <label className={className} {...props}>{children}</label>;
}
