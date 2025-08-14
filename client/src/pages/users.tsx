import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Plus } from "lucide-react";
import DataTable from "@/components/ui/data-table";

export default function Users() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    role: "author",
    status: "active",
  });

  const userData = [
    {
      id: "1",
      fullName: "Admin User",
      email: "admin@university.edu",
      role: "admin",
      status: "active",
      lastLogin: "2 hours ago",
      initials: "AD",
      avatarColor: "bg-university-500",
    },
    {
      id: "2",
      fullName: "Dr. John Smith",
      email: "j.smith@university.edu",
      role: "editor",
      status: "active",
      lastLogin: "1 day ago",
      initials: "JS",
      avatarColor: "bg-green-500",
    },
    {
      id: "3",
      fullName: "Jane Doe",
      email: "jane.doe@university.edu",
      role: "author",
      status: "inactive",
      lastLogin: "1 week ago",
      initials: "JD",
      avatarColor: "bg-purple-500",
    },
  ];

  const columns = [
    {
      key: "user",
      label: "User",
      render: (value: any, row: any) => (
        <div className="flex items-center">
          <Avatar className="h-10 w-10">
            <AvatarFallback className={`${row.avatarColor} text-white font-medium`}>
              {row.initials}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4">
            <div className="text-sm font-medium text-slate-900">{row.fullName}</div>
            <div className="text-sm text-slate-500">{row.email}</div>
          </div>
        </div>
      ),
    },
    {
      key: "role",
      label: "Role",
      render: (value: string) => {
        const colors = {
          admin: "bg-red-100 text-red-800",
          editor: "bg-blue-100 text-blue-800",
          author: "bg-yellow-100 text-yellow-800",
          contributor: "bg-gray-100 text-gray-800",
        };
        return (
          <Badge className={colors[value as keyof typeof colors] || colors.contributor}>
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </Badge>
        );
      },
    },
    {
      key: "status",
      label: "Status",
      render: (value: string) => {
        const colors = {
          active: "bg-green-100 text-green-800",
          inactive: "bg-gray-100 text-gray-800",
        };
        return (
          <Badge className={colors[value as keyof typeof colors]}>
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </Badge>
        );
      },
    },
    { key: "lastLogin", label: "Last Login" },
    {
      key: "actions",
      label: "Actions",
      render: (value: any, row: any) => (
        <div className="space-x-2">
          <Button variant="link" size="sm" className="text-university-600">
            Edit
          </Button>
          <Button variant="link" size="sm" className="text-slate-600">
            View
          </Button>
          {row.status === "active" ? (
            <Button variant="link" size="sm" className="text-red-600">
              Disable
            </Button>
          ) : (
            <Button variant="link" size="sm" className="text-green-600">
              Activate
            </Button>
          )}
        </div>
      ),
    },
  ];

  const filterOptions = [
    { label: "All Roles", value: "all" },
    { label: "Admin", value: "admin" },
    { label: "Editor", value: "editor" },
    { label: "Author", value: "author" },
    { label: "Contributor", value: "contributor" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement user creation logic
    console.log("User form data:", formData);
    setShowAddForm(false);
    setFormData({ fullName: "", email: "", role: "author", status: "active" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-4 lg:p-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 lg:mb-0">User Management</h2>
        <Button 
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-university-500 hover:bg-university-600"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add New User
        </Button>
      </div>

      <DataTable
        columns={columns}
        data={userData}
        searchPlaceholder="Search users..."
        filterOptions={filterOptions}
      />

      {/* Add User Form */}
      {showAddForm && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Add New User</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter full name"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="user@university.edu"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="role">Role</Label>
                  <Select value={formData.role} onValueChange={(value) => 
                    setFormData(prev => ({ ...prev, role: value }))
                  }>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="author">Author</SelectItem>
                      <SelectItem value="editor">Editor</SelectItem>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="contributor">Contributor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label>Status</Label>
                  <RadioGroup
                    value={formData.status}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, status: value }))}
                    className="flex items-center space-x-4 mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="active" id="active" />
                      <Label htmlFor="active">Active</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="inactive" id="inactive" />
                      <Label htmlFor="inactive">Inactive</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
              
              <div className="flex justify-end space-x-4">
                <Button 
                  type="button" 
                  variant="ghost"
                  onClick={() => setShowAddForm(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" className="bg-university-500 hover:bg-university-600">
                  Add User
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
