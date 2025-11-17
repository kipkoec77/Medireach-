import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Navbar } from "@/components/Navbar";
import { Heart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"patient" | "doctor" | "admin">("patient");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Demo login - in production, this would validate credentials
    if (email && password) {
      localStorage.setItem("userRole", role);
      
      toast({
        title: "Login successful",
        description: `Welcome back!`,
      });

      // Navigate based on role
      if (role === "patient") {
        navigate("/patient/dashboard");
      } else if (role === "doctor") {
        navigate("/doctor/dashboard");
      } else if (role === "admin") {
        navigate("/admin/dashboard");
      }
    } else {
      toast({
        title: "Login failed",
        description: "Please enter your email and password",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <Navbar variant="public" />
      
      <div className="container mx-auto flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12">
        <Card className="w-full max-w-md shadow-elevated">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
              <Heart className="h-8 w-8 fill-white text-white" />
            </div>
            <CardTitle className="text-2xl">Welcome Back</CardTitle>
            <CardDescription>Sign in to access your account</CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">I am a</Label>
                <Select value={role} onValueChange={(value: "patient" | "doctor" | "admin") => setRole(value)}>
                  <SelectTrigger id="role">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="patient">Patient</SelectItem>
                    <SelectItem value="doctor">Doctor</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full">
                Sign In
              </Button>

              <div className="text-center text-sm">
                <Link to="/forgot-password" className="text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>

              <div className="text-center text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link to="/register" className="text-primary hover:underline">
                  Sign up
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
