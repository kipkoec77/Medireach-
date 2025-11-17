import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                <Heart className="h-4 w-4 fill-white text-white" />
              </div>
              <span className="text-lg font-bold">MediReach</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Making quality healthcare accessible to everyone, everywhere. Aligned with UN SDG 3: Good Health & Well-Being.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/#features" className="text-muted-foreground transition-colors hover:text-foreground">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/#how-it-works" className="text-muted-foreground transition-colors hover:text-foreground">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-muted-foreground transition-colors hover:text-foreground">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>

          {/* For Doctors */}
          <div>
            <h3 className="mb-4 font-semibold">For Doctors</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/register" className="text-muted-foreground transition-colors hover:text-foreground">
                  Join as Doctor
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-muted-foreground transition-colors hover:text-foreground">
                  Doctor Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>support@medireach.com</li>
              <li>1-800-MEDIREACH</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} MediReach. All rights reserved. Supporting UN SDG 3.</p>
        </div>
      </div>
    </footer>
  );
};
