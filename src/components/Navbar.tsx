import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface NavbarProps {
  variant?: "public" | "authenticated";
  userRole?: "patient" | "doctor" | "admin";
}

export const Navbar = ({ variant = "public", userRole }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    navigate("/");
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
              <Heart className="h-5 w-5 fill-white text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">MediReach</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 md:flex">
            {variant === "public" ? (
              <>
                <Link to="/#features" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                  Features
                </Link>
                <Link to="/#how-it-works" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                  How It Works
                </Link>
                <Link to="/#about" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                  About
                </Link>
                <Link to="/login">
                  <Button variant="ghost">Sign In</Button>
                </Link>
                <Link to="/register">
                  <Button>Get Started</Button>
                </Link>
              </>
            ) : (
              <>
                <span className="text-sm text-muted-foreground">
                  {userRole === "patient" && "Patient Portal"}
                  {userRole === "doctor" && "Doctor Portal"}
                  {userRole === "admin" && "Admin Portal"}
                </span>
                <Button variant="outline" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-border py-4 md:hidden">
            {variant === "public" ? (
              <div className="flex flex-col gap-4">
                <Link
                  to="/#features"
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  to="/#how-it-works"
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  How It Works
                </Link>
                <Link
                  to="/#about"
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full">
                    Sign In
                  </Button>
                </Link>
                <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full">Get Started</Button>
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <Button variant="outline" onClick={handleLogout} className="w-full">
                  Logout
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};
