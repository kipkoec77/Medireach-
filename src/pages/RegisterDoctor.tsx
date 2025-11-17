import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Navbar } from "@/components/Navbar";
import { Heart, CheckCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const SPECIALTIES = [
  "General Practice",
  "Cardiology",
  "Dermatology",
  "Pediatrics",
  "Orthopedics",
  "Psychiatry",
  "Neurology",
  "Gynecology",
  "Ophthalmology",
  "ENT",
];

const RegisterDoctor = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    licenseNumber: "",
    gender: "",
    specialty: "",
    experience: "",
    bio: "",
    hospital: "",
    location: "",
    consultationFee: "",
  });
  
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step < 4) {
      setStep(step + 1);
    } else {
      // Submit application
      toast({
        title: "Application submitted!",
        description: "Your application is under review. We'll notify you once approved.",
      });
      
      navigate("/");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <Navbar variant="public" />
      
      <div className="container mx-auto px-4 py-12">
        <Card className="mx-auto w-full max-w-2xl shadow-elevated">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-secondary-light">
              <Heart className="h-8 w-8 fill-white text-white" />
            </div>
            <CardTitle className="text-2xl">Doctor Application</CardTitle>
            <CardDescription>Step {step} of 4</CardDescription>
            
            {/* Progress Bar */}
            <div className="mx-auto mt-4 flex w-full max-w-xs gap-2">
              {[1, 2, 3, 4].map((s) => (
                <div
                  key={s}
                  className={`h-2 flex-1 rounded-full ${
                    s <= step ? "bg-secondary" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {step === 1 && (
                <>
                  <h3 className="font-semibold">Personal Information</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      placeholder="Dr. Jane Smith"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="dr.smith@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="licenseNumber">Medical License Number</Label>
                    <Input
                      id="licenseNumber"
                      placeholder="MD-123456"
                      value={formData.licenseNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender</Label>
                    <Select
                      value={formData.gender}
                      onValueChange={(value) => setFormData({ ...formData, gender: value })}
                    >
                      <SelectTrigger id="gender">
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <h3 className="font-semibold">Professional Information</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="specialty">Specialty</Label>
                    <Select
                      value={formData.specialty}
                      onValueChange={(value) => setFormData({ ...formData, specialty: value })}
                    >
                      <SelectTrigger id="specialty">
                        <SelectValue placeholder="Select specialty" />
                      </SelectTrigger>
                      <SelectContent>
                        {SPECIALTIES.map((specialty) => (
                          <SelectItem key={specialty} value={specialty}>
                            {specialty}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Input
                      id="experience"
                      type="number"
                      placeholder="5"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Short Bio</Label>
                    <Textarea
                      id="bio"
                      placeholder="Tell us about your experience and expertise..."
                      value={formData.bio}
                      onChange={handleChange}
                      rows={4}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="hospital">Associated Hospital/Clinic</Label>
                    <Input
                      id="hospital"
                      placeholder="City General Hospital"
                      value={formData.hospital}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      placeholder="City, Country"
                      value={formData.location}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="consultationFee">Consultation Fee (USD)</Label>
                    <Input
                      id="consultationFee"
                      type="number"
                      placeholder="50"
                      value={formData.consultationFee}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <h3 className="font-semibold">Availability & Documents</h3>
                  
                  <div className="rounded-lg border border-border bg-muted/50 p-4">
                    <p className="text-sm text-muted-foreground">
                      You'll be able to set your detailed availability schedule after your account is approved.
                      For now, we just need to verify your credentials.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="license">Medical License (Upload)</Label>
                    <Input id="license" type="file" accept=".pdf,.jpg,.png" />
                    <p className="text-xs text-muted-foreground">Upload a copy of your medical license</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="id">ID/Passport (Upload)</Label>
                    <Input id="id" type="file" accept=".pdf,.jpg,.png" />
                    <p className="text-xs text-muted-foreground">Upload a government-issued ID</p>
                  </div>
                </>
              )}

              {step === 4 && (
                <>
                  <h3 className="font-semibold">Review & Submit</h3>
                  
                  <div className="space-y-4 rounded-lg border border-border bg-muted/50 p-4">
                    <div>
                      <p className="text-sm font-medium">Personal Details</p>
                      <p className="text-sm text-muted-foreground">{formData.fullName}</p>
                      <p className="text-sm text-muted-foreground">{formData.email}</p>
                      <p className="text-sm text-muted-foreground">{formData.phone}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium">Professional Details</p>
                      <p className="text-sm text-muted-foreground">{formData.specialty}</p>
                      <p className="text-sm text-muted-foreground">{formData.experience} years experience</p>
                      <p className="text-sm text-muted-foreground">{formData.hospital}</p>
                    </div>

                    <div>
                      <p className="text-sm font-medium">License</p>
                      <p className="text-sm text-muted-foreground">{formData.licenseNumber}</p>
                    </div>
                  </div>

                  <div className="rounded-lg border border-secondary/20 bg-secondary/10 p-4">
                    <div className="flex gap-3">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-secondary" />
                      <div>
                        <p className="text-sm font-medium">What happens next?</p>
                        <p className="text-sm text-muted-foreground">
                          Our team will review your application within 24-48 hours. 
                          You'll receive an email once your account is approved.
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}

              <div className="flex gap-4">
                {step > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(step - 1)}
                    className="flex-1"
                  >
                    Back
                  </Button>
                )}
                
                <Button type="submit" className="flex-1" variant={step === 4 ? "default" : "secondary"}>
                  {step === 4 ? "Submit Application" : "Continue"}
                </Button>
              </div>

              <div className="text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link to="/login" className="text-primary hover:underline">
                  Sign in
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegisterDoctor;
