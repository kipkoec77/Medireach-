import { DashboardLayout } from "@/components/DashboardLayout";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Heart, TrendingUp, Bell } from "lucide-react";
import { Link } from "react-router-dom";

const PatientDashboard = () => {
  return (
    <DashboardLayout
      userRole="patient"
      sidebar={<DashboardSidebar role="patient" />}
    >
      <div className="space-y-6">
        {/* Welcome Section */}
        <div>
          <h1 className="text-3xl font-bold">Welcome Back, John!</h1>
          <p className="text-muted-foreground">Here's your health dashboard overview</p>
        </div>

        {/* Quick Stats */}
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Upcoming Appointments</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">Next: Tomorrow at 2:00 PM</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Health Score</CardTitle>
              <Heart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">85%</div>
              <p className="text-xs text-muted-foreground">Good health status</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Goals</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">On track this month</p>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Appointments */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border border-border p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Dr. Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">General Checkup - Tomorrow, 2:00 PM</p>
                  </div>
                </div>
                <Link to="/patient/book-appointment?doctor=dr-sarah-johnson">
                  <Button variant="outline" size="sm">Reschedule</Button>
                </Link>
              </div>

              <div className="flex items-center justify-between rounded-lg border border-border p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                    <Calendar className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium">Dr. Michael Chen</p>
                    <p className="text-sm text-muted-foreground">Cardiology Consultation - Dec 20, 10:00 AM</p>
                  </div>
                </div>
                <Link to="/patient/book-appointment?doctor=dr-michael-chen">
                  <Button variant="outline" size="sm">View Details</Button>
                </Link>
              </div>
            </div>

            <div className="mt-4">
              <Link to="/patient/search">
                <Button className="w-full">Find More Doctors</Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Health Tips */}
        <Card className="border-secondary/20 bg-gradient-to-br from-secondary/5 to-secondary/10">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-secondary" />
              <CardTitle>Health Tip of the Day</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed">
              <strong>Stay Hydrated:</strong> Drinking enough water is essential for your overall health. 
              Aim for 8 glasses (64 ounces) of water per day to maintain proper hydration, support digestion, 
              and keep your skin healthy. Supporting UN SDG 3: Good Health & Well-Being.
            </p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default PatientDashboard;
