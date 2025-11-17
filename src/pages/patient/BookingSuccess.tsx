import { useLocation, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Calendar, 
  Clock, 
  Video, 
  Building,
  MapPin,
  Download,
  Mail,
  ArrowRight
} from "lucide-react";
import { format } from "date-fns";

const BookingSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const appointmentData = location.state;

  useEffect(() => {
    // Redirect if no appointment data
    if (!appointmentData) {
      navigate("/patient/dashboard");
    }
  }, [appointmentData, navigate]);

  if (!appointmentData) {
    return null;
  }

  const { doctor, date, time, type, notes } = appointmentData;

  return (
    <div className="min-h-screen bg-muted/30">
      <Navbar variant="authenticated" userRole="patient" />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-3xl">
          {/* Success Animation */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-secondary/10 animate-fade-in">
              <CheckCircle className="h-14 w-14 text-secondary" />
            </div>
            
            <h1 className="mb-2 text-3xl font-bold">Booking Confirmed!</h1>
            <p className="text-lg text-muted-foreground">
              Your appointment has been successfully scheduled
            </p>
          </div>

          {/* Appointment Details Card */}
          <Card className="mb-6 shadow-elevated">
            <CardContent className="p-6">
              <div className="mb-6 flex items-start gap-4 border-b border-border pb-6">
                <div className="h-16 w-16 overflow-hidden rounded-full bg-muted">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <h2 className="mb-1 text-xl font-semibold">{doctor.name}</h2>
                  <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                  <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <Building className="h-4 w-4" />
                    <span>{doctor.hospital}</span>
                  </div>
                </div>
                
                <Badge variant={type === "online" ? "default" : "secondary"}>
                  {type === "online" ? "Online" : "In-Person"}
                </Badge>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold">Appointment Details</h3>
                
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-start gap-3 rounded-lg bg-muted/50 p-4">
                    <Calendar className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Date</p>
                      <p className="font-medium">{format(new Date(date), "EEEE, MMMM dd, yyyy")}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 rounded-lg bg-muted/50 p-4">
                    <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Time</p>
                      <p className="font-medium">{time}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 rounded-lg bg-muted/50 p-4">
                    <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">
                        {type === "online" ? "Video Consultation" : doctor.location}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 rounded-lg bg-muted/50 p-4">
                    {type === "online" ? (
                      <Video className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    ) : (
                      <Building className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    )}
                    <div>
                      <p className="text-sm text-muted-foreground">Consultation Fee</p>
                      <p className="font-medium">${doctor.fee}</p>
                    </div>
                  </div>
                </div>

                {notes && (
                  <div className="rounded-lg border border-border bg-muted/30 p-4">
                    <p className="mb-1 text-sm font-medium">Your Notes</p>
                    <p className="text-sm text-muted-foreground">{notes}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <h3 className="mb-4 font-semibold">What Happens Next?</h3>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    1
                  </div>
                  <div>
                    <p className="font-medium">Confirmation Email</p>
                    <p className="text-sm text-muted-foreground">
                      You'll receive a confirmation email with all appointment details
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    2
                  </div>
                  <div>
                    <p className="font-medium">
                      {type === "online" ? "Meeting Link" : "Clinic Address"}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {type === "online"
                        ? "A video consultation link will be sent 30 minutes before your appointment"
                        : "The clinic address and directions will be included in your email"}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    3
                  </div>
                  <div>
                    <p className="font-medium">Reminder</p>
                    <p className="text-sm text-muted-foreground">
                      We'll send you a reminder 24 hours before your appointment
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="grid gap-4 sm:grid-cols-2">
            <Button variant="outline" className="w-full">
              <Download className="mr-2 h-4 w-4" />
              Download Confirmation
            </Button>
            
            <Button variant="outline" className="w-full">
              <Mail className="mr-2 h-4 w-4" />
              Email Confirmation
            </Button>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link to="/patient/appointments" className="flex-1">
              <Button variant="outline" className="w-full">
                View My Appointments
              </Button>
            </Link>
            
            <Link to="/patient/search" className="flex-1">
              <Button className="w-full">
                Book Another Appointment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Support Note */}
          <div className="mt-8 rounded-lg border border-secondary/20 bg-secondary/5 p-4 text-center">
            <p className="text-sm text-muted-foreground">
              Need to reschedule or cancel?{" "}
              <Link to="/patient/appointments" className="font-medium text-secondary hover:underline">
                Manage appointments
              </Link>{" "}
              or contact{" "}
              <Link to="/patient/support" className="font-medium text-secondary hover:underline">
                support
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSuccess;
