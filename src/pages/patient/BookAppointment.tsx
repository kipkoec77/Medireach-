import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  CheckCircle, 
  ArrowLeft,
  MapPin,
  DollarSign,
  Video,
  Building
} from "lucide-react";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";

const TIME_SLOTS = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "02:00 PM", "02:30 PM",
  "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
];

// Mock doctor data - in production, this would come from URL params or API
const MOCK_DOCTOR = {
  name: "Dr. Sarah Johnson",
  specialty: "Cardiology",
  hospital: "City General Hospital",
  location: "New York, NY",
  fee: 75,
  image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
};

const BookAppointment = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [appointmentType, setAppointmentType] = useState<"online" | "in-person">("online");
  const [notes, setNotes] = useState("");

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleNextStep = () => {
    if (step === 1 && !selectedDate) {
      toast({
        title: "Please select a date",
        description: "Choose a date for your appointment",
        variant: "destructive",
      });
      return;
    }
    
    if (step === 2 && !selectedTime) {
      toast({
        title: "Please select a time",
        description: "Choose a time slot for your appointment",
        variant: "destructive",
      });
      return;
    }
    
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handleConfirmBooking = () => {
    // In production, this would make an API call
    toast({
      title: "Appointment booked!",
      description: "Your appointment has been confirmed",
    });
    
    navigate("/patient/booking-success", {
      state: {
        doctor: MOCK_DOCTOR,
        date: selectedDate,
        time: selectedTime,
        type: appointmentType,
        notes,
      },
    });
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <Navbar variant="authenticated" userRole="patient" />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-6">
            <Button
              variant="ghost"
              onClick={() => step > 1 ? setStep(step - 1) : navigate(-1)}
              className="mb-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            
            <h1 className="text-3xl font-bold">Book Appointment</h1>
            <p className="text-muted-foreground">Schedule your consultation with {MOCK_DOCTOR.name}</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Doctor Info Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-20">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full bg-muted">
                    <img
                      src={MOCK_DOCTOR.image}
                      alt={MOCK_DOCTOR.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardTitle>{MOCK_DOCTOR.name}</CardTitle>
                  <CardDescription>{MOCK_DOCTOR.specialty}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <Building className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground" />
                    <span>{MOCK_DOCTOR.hospital}</span>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground" />
                    <span>{MOCK_DOCTOR.location}</span>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <DollarSign className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground" />
                    <span>${MOCK_DOCTOR.fee} per consultation</span>
                  </div>

                  {selectedDate && (
                    <div className="mt-4 rounded-lg border border-primary/20 bg-primary/5 p-3">
                      <p className="mb-1 text-xs font-medium text-primary">Selected Date</p>
                      <p className="font-medium">{format(selectedDate, "MMMM dd, yyyy")}</p>
                      {selectedTime && (
                        <p className="mt-1 text-sm text-muted-foreground">{selectedTime}</p>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Booking Steps */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>
                        {step === 1 && "Select Date"}
                        {step === 2 && "Choose Time Slot"}
                        {step === 3 && "Confirm Details"}
                      </CardTitle>
                      <CardDescription>Step {step} of 3</CardDescription>
                    </div>
                    
                    {/* Progress Indicator */}
                    <div className="flex gap-2">
                      {[1, 2, 3].map((s) => (
                        <div
                          key={s}
                          className={`h-2 w-8 rounded-full ${
                            s <= step ? "bg-primary" : "bg-muted"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Step 1: Date Selection */}
                  {step === 1 && (
                    <div className="space-y-4">
                      <div className="flex justify-center">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={handleDateSelect}
                          disabled={(date) =>
                            date < new Date() || date < new Date(new Date().setHours(0, 0, 0, 0))
                          }
                          className="rounded-md border shadow-soft"
                        />
                      </div>
                      
                      {selectedDate && (
                        <div className="rounded-lg bg-secondary/10 p-4 text-center">
                          <CalendarIcon className="mx-auto mb-2 h-6 w-6 text-secondary" />
                          <p className="font-medium">
                            {format(selectedDate, "EEEE, MMMM dd, yyyy")}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Step 2: Time Slot Selection */}
                  {step === 2 && (
                    <div className="space-y-4">
                      <div>
                        <Label className="mb-3 block">Appointment Type</Label>
                        <div className="grid gap-3 sm:grid-cols-2">
                          <button
                            onClick={() => setAppointmentType("online")}
                            className={`flex items-center gap-3 rounded-lg border-2 p-4 transition-all ${
                              appointmentType === "online"
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            <Video className="h-5 w-5 text-primary" />
                            <div className="text-left">
                              <p className="font-medium">Online</p>
                              <p className="text-xs text-muted-foreground">Video consultation</p>
                            </div>
                          </button>
                          
                          <button
                            onClick={() => setAppointmentType("in-person")}
                            className={`flex items-center gap-3 rounded-lg border-2 p-4 transition-all ${
                              appointmentType === "in-person"
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            <Building className="h-5 w-5 text-primary" />
                            <div className="text-left">
                              <p className="font-medium">In-Person</p>
                              <p className="text-xs text-muted-foreground">At clinic</p>
                            </div>
                          </button>
                        </div>
                      </div>

                      <div>
                        <Label className="mb-3 block">Available Time Slots</Label>
                        <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                          {TIME_SLOTS.map((time) => (
                            <button
                              key={time}
                              onClick={() => handleTimeSelect(time)}
                              className={`rounded-lg border-2 p-3 text-sm font-medium transition-all ${
                                selectedTime === time
                                  ? "border-primary bg-primary text-primary-foreground"
                                  : "border-border hover:border-primary/50 hover:bg-muted"
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>

                      {selectedTime && (
                        <div className="rounded-lg bg-secondary/10 p-4 text-center">
                          <Clock className="mx-auto mb-2 h-6 w-6 text-secondary" />
                          <p className="font-medium">{selectedTime}</p>
                          <p className="text-sm text-muted-foreground">
                            {format(selectedDate!, "MMMM dd, yyyy")}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Step 3: Confirmation */}
                  {step === 3 && (
                    <div className="space-y-6">
                      <div className="rounded-lg border border-border bg-muted/30 p-6 space-y-4">
                        <h3 className="font-semibold">Appointment Summary</h3>
                        
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div>
                            <p className="text-sm text-muted-foreground">Date</p>
                            <p className="font-medium">
                              {format(selectedDate!, "MMMM dd, yyyy")}
                            </p>
                          </div>
                          
                          <div>
                            <p className="text-sm text-muted-foreground">Time</p>
                            <p className="font-medium">{selectedTime}</p>
                          </div>
                          
                          <div>
                            <p className="text-sm text-muted-foreground">Type</p>
                            <Badge variant={appointmentType === "online" ? "default" : "secondary"}>
                              {appointmentType === "online" ? "Online" : "In-Person"}
                            </Badge>
                          </div>
                          
                          <div>
                            <p className="text-sm text-muted-foreground">Consultation Fee</p>
                            <p className="font-medium">${MOCK_DOCTOR.fee}</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="notes">Additional Notes (Optional)</Label>
                        <Textarea
                          id="notes"
                          placeholder="Describe your symptoms or reason for visit..."
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          rows={4}
                        />
                      </div>

                      <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                        <div className="flex gap-3">
                          <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                          <div className="text-sm">
                            <p className="font-medium">Ready to confirm?</p>
                            <p className="text-muted-foreground">
                              You'll receive a confirmation email with appointment details and meeting link.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex gap-3 pt-4">
                    {step > 1 && (
                      <Button
                        variant="outline"
                        onClick={() => setStep(step - 1)}
                        className="flex-1"
                      >
                        Back
                      </Button>
                    )}
                    
                    {step < 3 ? (
                      <Button
                        onClick={handleNextStep}
                        className="flex-1"
                        disabled={
                          (step === 1 && !selectedDate) ||
                          (step === 2 && !selectedTime)
                        }
                      >
                        Continue
                      </Button>
                    ) : (
                      <Button
                        onClick={handleConfirmBooking}
                        className="flex-1"
                      >
                        Confirm Booking
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
