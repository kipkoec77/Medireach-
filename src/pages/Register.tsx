import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Heart, User, Stethoscope } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-muted/30">
      <Navbar variant="public" />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
              <Heart className="h-8 w-8 fill-white text-white" />
            </div>
            <h1 className="mb-2 text-3xl font-bold">Join MediReach</h1>
            <p className="text-muted-foreground">Choose how you want to get started</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Patient Card */}
            <Card 
              className="cursor-pointer transition-all hover:shadow-elevated hover:scale-[1.02]"
              onClick={() => navigate("/register/patient")}
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <User className="h-10 w-10 text-primary" />
                </div>
                <CardTitle>I'm a Patient</CardTitle>
                <CardDescription>
                  Looking for quality healthcare and doctors
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="mb-6 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Search and book appointments with verified doctors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Access virtual consultations from home</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Manage your health records in one place</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Get health tips and reminders</span>
                  </li>
                </ul>
                
                <Button className="w-full" onClick={() => navigate("/register/patient")}>
                  Create Patient Account
                </Button>
              </CardContent>
            </Card>

            {/* Doctor Card */}
            <Card 
              className="cursor-pointer transition-all hover:shadow-elevated hover:scale-[1.02]"
              onClick={() => navigate("/register/doctor")}
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-secondary/10">
                  <Stethoscope className="h-10 w-10 text-secondary" />
                </div>
                <CardTitle>I'm a Doctor</CardTitle>
                <CardDescription>
                  Ready to provide care and expand my practice
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="mb-6 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">✓</span>
                    <span>Reach more patients and grow your practice</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">✓</span>
                    <span>Manage appointments and availability easily</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">✓</span>
                    <span>Offer online and in-person consultations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">✓</span>
                    <span>Build your professional profile</span>
                  </li>
                </ul>
                
                <Button variant="secondary" className="w-full" onClick={() => navigate("/register/doctor")}>
                  Apply as Doctor
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
