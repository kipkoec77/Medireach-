import { DashboardLayout } from "@/components/DashboardLayout";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { UserCheck, Users, Calendar, Stethoscope, AlertCircle } from "lucide-react";

const AdminDashboard = () => {
  return (
    <DashboardLayout
      userRole="admin"
      sidebar={<DashboardSidebar role="admin" />}
    >
      <div className="space-y-6">
        {/* Welcome Section */}
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage MediReach platform</p>
        </div>

        {/* Quick Stats */}
        <div className="grid gap-6 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Pending Applications</CardTitle>
              <AlertCircle className="h-4 w-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">Requires review</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Doctors</CardTitle>
              <Stethoscope className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">487</div>
              <p className="text-xs text-muted-foreground">Verified professionals</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Registered Patients</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8,542</div>
              <p className="text-xs text-muted-foreground">+234 this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Appointments</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12,384</div>
              <p className="text-xs text-muted-foreground">All time</p>
            </CardContent>
          </Card>
        </div>

        {/* Pending Doctor Applications */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Pending Doctor Applications</CardTitle>
            <Badge variant="destructive">12 Pending</Badge>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  name: "Dr. Emily Martinez",
                  specialty: "Pediatrics",
                  experience: "8 years",
                  date: "Dec 15, 2024",
                },
                {
                  name: "Dr. Robert Taylor",
                  specialty: "Cardiology",
                  experience: "12 years",
                  date: "Dec 16, 2024",
                },
                {
                  name: "Dr. Lisa Anderson",
                  specialty: "Dermatology",
                  experience: "6 years",
                  date: "Dec 17, 2024",
                },
              ].map((doctor, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg border border-border p-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                      <UserCheck className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium">{doctor.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {doctor.specialty} • {doctor.experience} experience
                      </p>
                      <p className="text-xs text-muted-foreground">Applied: {doctor.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="text-destructive">
                      Reject
                    </Button>
                    <Button size="sm" variant="default">
                      Approve
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <Button variant="outline" className="w-full">
                View All Applications
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Platform Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm">
                <div className="mt-0.5 h-2 w-2 rounded-full bg-secondary"></div>
                <div>
                  <p className="font-medium">New patient registered</p>
                  <p className="text-muted-foreground">John Smith joined 5 minutes ago</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <div className="mt-0.5 h-2 w-2 rounded-full bg-primary"></div>
                <div>
                  <p className="font-medium">Appointment completed</p>
                  <p className="text-muted-foreground">
                    Dr. Sarah Johnson with Emma Wilson - 15 minutes ago
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <div className="mt-0.5 h-2 w-2 rounded-full bg-accent"></div>
                <div>
                  <p className="font-medium">New doctor application</p>
                  <p className="text-muted-foreground">
                    Dr. Michael Chen applied for verification - 1 hour ago
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
