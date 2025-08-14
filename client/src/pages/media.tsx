import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Edit, Trash2 } from "lucide-react";

export default function Media() {
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [category, setCategory] = useState("");

  const mediaItems = [
    {
      id: 1,
      title: "Campus Life",
      filename: "campus-life-2024.jpg",
      size: "2.1 MB",
      url: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      alt: "University campus with students",
    },
    {
      id: 2,
      title: "Academic Building",
      filename: "main-building.jpg",
      size: "1.8 MB",
      url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      alt: "University academic building",
    },
    {
      id: 3,
      title: "Graduation 2024",
      filename: "graduation-ceremony.jpg",
      size: "3.2 MB",
      url: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      alt: "University graduation ceremony",
    },
    {
      id: 4,
      title: "Library Interior",
      filename: "library-study-area.jpg",
      size: "2.7 MB",
      url: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      alt: "University library interior",
    },
  ];

  const categories = [
    "Campus Photos",
    "Event Images",
    "Faculty Photos",
    "Student Activities",
    "Videos",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement file upload logic
    console.log("Files to upload:", selectedFiles, "Category:", category);
  };

  return (
    <div className="p-4 lg:p-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 lg:mb-0">Media Gallery</h2>
        <Button className="bg-university-500 hover:bg-university-600">
          <Upload className="mr-2 h-4 w-4" />
          Upload Media
        </Button>
      </div>

      {/* Upload Form */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Upload New Media</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="file-upload">File Upload</Label>
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-4 text-center hover:border-university-500 transition-colors cursor-pointer">
                  <Upload className="mx-auto h-6 w-6 text-slate-400 mb-2" />
                  <p className="text-slate-600 text-sm">Choose files or drag and drop</p>
                  <input
                    type="file"
                    id="file-upload"
                    className="hidden"
                    multiple
                    accept="image/*,video/*"
                    onChange={(e) => setSelectedFiles(e.target.files)}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="media-category">Category</Label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat.toLowerCase().replace(" ", "-")}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button type="submit" className="bg-university-500 hover:bg-university-600">
              Upload Files
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Media Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mediaItems.map((item) => (
          <Card key={item.id} className="overflow-hidden card-hover transition-transform">
            <img 
              src={item.url} 
              alt={item.alt} 
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-4">
              <h4 className="font-medium text-slate-900 mb-1">{item.title}</h4>
              <p className="text-sm text-slate-500 mb-2">{item.filename}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">{item.size}</span>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm" className="text-university-600 hover:text-university-900">
                    <Edit className="h-3 w-3" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-900">
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
