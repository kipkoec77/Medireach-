import { DashboardLayout } from "@/components/DashboardLayout";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Clock, TrendingUp } from "lucide-react";

const DoctorDashboard = () => {
  return (
    <DashboardLayout
      userRole="doctor"
      sidebar={<DashboardSidebar role="doctor" />}
    >
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold">Welcome, Dr. Smith!</h1>
            <p className="text-muted-foreground">Here's your practice overview</p>
          </div>
          <Badge variant="secondary" className="text-sm">
            Account Approved
          </Badge>
        </div>

        {/* Quick Stats */}
        <div className="grid gap-6 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Today's Appointments</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">4 completed, 4 upcoming</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">127</div>
              <p className="text-xs text-muted-foreground">+12 this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Avg. Consultation</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">32m</div>
              <p className="text-xs text-muted-foreground">Per session</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Rating</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.8</div>
              <p className="text-xs text-muted-foreground">Based on 89 reviews</p>
            </CardContent>
          </Card>
        </div>

        {/* Today's Schedule */}
        <Card>
          <CardHeader>
            <CardTitle>Today's Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { time: "9:00 AM", patient: "Emma Wilson", type: "General Checkup", status: "completed" },
                { time: "10:00 AM", patient: "James Brown", type: "Follow-up", status: "completed" },
                { time: "11:30 AM", patient: "Sarah Davis", type: "New Patient", status: "upcoming" },
                { time: "2:00 PM", patient: "Michael Lee", type: "Consultation", status: "upcoming" },
              ].map((appointment, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg border border-border p-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{appointment.patient}</p>
                      <p className="text-sm text-muted-foreground">
                        {appointment.type} • {appointment.time}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={appointment.status === "completed" ? "secondary" : "default"}
                    >
                      {appointment.status}
                    </Badge>
                    {appointment.status === "upcoming" && (
                      <Button size="sm">View Details</Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="cursor-pointer transition-shadow hover:shadow-card">
            <CardContent className="pt-6">
              <h3 className="mb-2 font-semibold">Manage Availability</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Update your schedule and available time slots
              </p>
              <Button variant="outline" className="w-full">
                Update Schedule
              </Button>
            </CardContent>
          </Card>

          <Card className="cursor-pointer transition-shadow hover:shadow-card">
            <CardContent className="pt-6">
              <h3 className="mb-2 font-semibold">View All Appointments</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                See your complete appointment history
              </p>
              <Button variant="outline" className="w-full">
                View Appointments
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DoctorDashboard;
