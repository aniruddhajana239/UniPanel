import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, GripVertical, Edit, Trash2 } from "lucide-react";

export default function MenuManagement() {
  const [formData, setFormData] = useState({
    name: "",
    url: "",
    parentId: "",
    openInNewWindow: false,
  });

  const menuItems = [
    { id: "home", name: "Home", url: "/", parentId: null, order: 0 },
    { id: "about", name: "About", url: "/about", parentId: null, order: 1 },
    { id: "history", name: "History", url: "/about/history", parentId: "about", order: 0 },
    { id: "leadership", name: "Leadership", url: "/about/leadership", parentId: "about", order: 1 },
    { id: "academics", name: "Academics", url: "/academics", parentId: null, order: 2 },
    { id: "contact", name: "Contact", url: "/contact", parentId: null, order: 3 },
  ];

  const parentMenus = menuItems.filter(item => !item.parentId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement menu item creation logic
    console.log("Menu item data:", formData);
    setFormData({ name: "", url: "", parentId: "", openInNewWindow: false });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const renderMenuItem = (item: any, level = 0) => (
    <div key={item.id} className={`${level > 0 ? 'ml-6' : ''}`}>
      <div className="flex items-center p-3 border border-slate-200 rounded-lg bg-slate-50 drag-handle mb-2">
        <GripVertical className="text-slate-400 mr-3 h-4 w-4" />
        <div className="flex-1">
          <span className="font-medium text-slate-900">{item.name}</span>
          <span className="text-sm text-slate-500 ml-2">{item.url}</span>
        </div>
        <div className="flex space-x-2">
          <Button variant="ghost" size="sm" className="text-university-600 hover:text-university-900">
            <Edit className="h-3 w-3" />
          </Button>
          <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-900">
            <Trash2 className="h-3 w-3" />
          </Button>
        </div>
      </div>
      {/* Render child items */}
      {menuItems
        .filter(child => child.parentId === item.id)
        .map(child => renderMenuItem(child, level + 1))}
    </div>
  );

  return (
    <div className="p-4 lg:p-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 lg:mb-0">Menu Management</h2>
        <Button className="bg-university-500 hover:bg-university-600">
          <Plus className="mr-2 h-4 w-4" />
          Add Menu Item
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Current Menu Structure */}
        <Card>
          <CardHeader>
            <CardTitle>Current Menu Structure</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {menuItems
                .filter(item => !item.parentId)
                .map(item => renderMenuItem(item))}
            </div>
          </CardContent>
        </Card>

        {/* Add Menu Item Form */}
        <Card>
          <CardHeader>
            <CardTitle>Add Menu Item</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="menu-name">Menu Name</Label>
                <Input
                  id="menu-name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter menu name"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="menu-url">Link/URL</Label>
                <Input
                  id="menu-url"
                  name="url"
                  value={formData.url}
                  onChange={handleInputChange}
                  placeholder="/page-url or https://external-link.com"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="parent-menu">Parent Menu</Label>
                <Select value={formData.parentId} onValueChange={(value) => 
                  setFormData(prev => ({ ...prev, parentId: value }))
                }>
                  <SelectTrigger>
                    <SelectValue placeholder="-- No Parent (Top Level) --" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">-- No Parent (Top Level) --</SelectItem>
                    {parentMenus.map((menu) => (
                      <SelectItem key={menu.id} value={menu.id}>
                        {menu.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="openInNewWindow"
                  name="openInNewWindow"
                  checked={formData.openInNewWindow}
                  onCheckedChange={(checked) => 
                    setFormData(prev => ({ ...prev, openInNewWindow: checked as boolean }))
                  }
                />
                <Label htmlFor="openInNewWindow" className="text-sm">
                  Open in new window
                </Label>
              </div>
              
              <Button type="submit" className="w-full bg-university-500 hover:bg-university-600">
                Add Menu Item
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
