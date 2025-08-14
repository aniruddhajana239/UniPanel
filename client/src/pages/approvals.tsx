import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Check, X, User, Clock, Folder } from "lucide-react";

export default function Approvals() {
  const pendingItems = [
    {
      id: 1,
      title: "New Student Orientation Program",
      description: "Comprehensive orientation program details for incoming students including campus tour, academic advising, and registration procedures.",
      author: "Jane Doe",
      submittedTime: "2 hours ago",
      category: "Student Services",
      status: "pending",
    },
    {
      id: 2,
      title: "Faculty Research Publications Update",
      description: "Updated faculty research page featuring recent publications, ongoing projects, and collaboration opportunities.",
      author: "Dr. Smith",
      submittedTime: "1 day ago",
      category: "Research",
      status: "pending",
    },
    {
      id: 3,
      title: "Campus Events Calendar",
      description: "Updated events calendar with upcoming seminars, workshops, and cultural activities for the semester.",
      author: "Events Team",
      submittedTime: "2 days ago",
      category: "Student Life",
      status: "pending",
    },
  ];

  const handleApprove = (id: number) => {
    // TODO: Implement approval logic
    console.log("Approved item:", id);
  };

  const handleReject = (id: number) => {
    // TODO: Implement rejection logic
    console.log("Rejected item:", id);
  };

  const handlePreview = (id: number) => {
    // TODO: Implement preview logic
    console.log("Preview item:", id);
  };

  return (
    <div className="p-4 lg:p-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 lg:mb-0">Pending Approvals</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-slate-600">{pendingItems.length} items pending review</span>
        </div>
      </div>

      {/* Pending Content List */}
      <div className="space-y-4">
        {pendingItems.map((item) => (
          <Card key={item.id}>
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between space-y-4 lg:space-y-0">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                    <Badge className="bg-yellow-100 text-yellow-800">
                      Pending Review
                    </Badge>
                  </div>
                  <p className="text-slate-600 mb-3">{item.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-slate-500">
                    <span className="flex items-center">
                      <User className="mr-1 h-4 w-4" />
                      Submitted by: {item.author}
                    </span>
                    <span className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      {item.submittedTime}
                    </span>
                    <span className="flex items-center">
                      <Folder className="mr-1 h-4 w-4" />
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-2">
                  <Button 
                    variant="outline"
                    onClick={() => handlePreview(item.id)}
                    className="text-university-600 border-university-600 hover:bg-university-50"
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    Preview
                  </Button>
                  <Button 
                    onClick={() => handleApprove(item.id)}
                    className="bg-green-600 text-white hover:bg-green-700"
                  >
                    <Check className="mr-2 h-4 w-4" />
                    Approve
                  </Button>
                  <Button 
                    onClick={() => handleReject(item.id)}
                    className="bg-red-600 text-white hover:bg-red-700"
                  >
                    <X className="mr-2 h-4 w-4" />
                    Reject
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {pendingItems.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <div className="flex flex-col items-center space-y-4">
              <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">All caught up!</h3>
                <p className="text-slate-600">There are no pending approvals at this time.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
