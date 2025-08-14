import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Upload } from "lucide-react";
import DataTable from "@/components/ui/data-table";

export default function Content() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    featuredImage: null as File | null,
  });

  const contentData = [
    {
      title: "Computer Science Department",
      slug: "/departments/computer-science",
      author: "Dr. Smith",
      status: "published",
      lastModified: "2 hours ago",
    },
    {
      title: "University News",
      slug: "/news/latest-updates",
      author: "Jane Doe",
      status: "pending",
      lastModified: "1 day ago",
    },
    {
      title: "Faculty Directory",
      slug: "/faculty",
      author: "Admin User",
      status: "draft",
      lastModified: "3 days ago",
    },
  ];

  const columns = [
    {
      key: "title",
      label: "Title",
      render: (value: string, row: any) => (
        <div>
          <div className="text-sm font-medium text-slate-900">{value}</div>
          <div className="text-sm text-slate-500">{row.slug}</div>
        </div>
      ),
    },
    { key: "author", label: "Author" },
    {
      key: "status",
      label: "Status",
      render: (value: string) => {
        const colors = {
          published: "bg-green-100 text-green-800",
          pending: "bg-yellow-100 text-yellow-800",
          draft: "bg-gray-100 text-gray-800",
        };
        return (
          <Badge className={colors[value as keyof typeof colors] || colors.draft}>
            {value}
          </Badge>
        );
      },
    },
    { key: "lastModified", label: "Last Modified" },
    {
      key: "actions",
      label: "Actions",
      render: () => (
        <div className="space-x-2">
          <Button variant="link" size="sm" className="text-university-600">
            Edit
          </Button>
          <Button variant="link" size="sm" className="text-slate-600">
            View
          </Button>
          <Button variant="link" size="sm" className="text-red-600">
            Delete
          </Button>
        </div>
      ),
    },
  ];

  const filterOptions = [
    { label: "All Status", value: "all" },
    { label: "Published", value: "published" },
    { label: "Draft", value: "draft" },
    { label: "Pending", value: "pending" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement content creation logic
    console.log("Content form submitted:", formData);
    setShowAddForm(false);
    setFormData({ title: "", content: "", featuredImage: null });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-4 lg:p-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 lg:mb-0">Content Management</h2>
        <Button 
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-university-500 hover:bg-university-600"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add New Content
        </Button>
      </div>

      <DataTable
        columns={columns}
        data={contentData}
        searchPlaceholder="Search content..."
        filterOptions={filterOptions}
      />

      {/* Add New Content Form */}
      {showAddForm && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Add New Content</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter page title"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  placeholder="Enter page content..."
                  className="min-h-[200px]"
                  required
                />
                <p className="text-xs text-slate-400 mt-2">
                  Rich text editor integration planned
                </p>
              </div>
              
              <div>
                <Label htmlFor="featured-image">Featured Image</Label>
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-university-500 transition-colors cursor-pointer">
                  <Upload className="mx-auto h-8 w-8 text-slate-400 mb-2" />
                  <p className="text-slate-600">Click to upload or drag and drop</p>
                  <input
                    type="file"
                    id="featured-image"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0] || null;
                      setFormData(prev => ({ ...prev, featuredImage: file }));
                    }}
                  />
                </div>
              </div>
              
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-4 lg:space-y-0">
                <div className="flex space-x-4">
                  <Button type="submit" className="bg-university-500 hover:bg-university-600">
                    Save Draft
                  </Button>
                  <Button type="button" className="bg-green-600 hover:bg-green-700">
                    Publish
                  </Button>
                </div>
                <Button 
                  type="button" 
                  variant="ghost"
                  onClick={() => setShowAddForm(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
