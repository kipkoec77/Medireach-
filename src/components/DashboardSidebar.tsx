import { cn } from "@/lib/utils";
import { NavLink } from "./NavLink";
import { 
  LayoutDashboard, 
  Search, 
  Calendar, 
  User, 
  HelpCircle,
  Users,
  UserCheck,
  Stethoscope,
  Clock
} from "lucide-react";

interface SidebarItem {
  icon: any;
  label: string;
  path: string;
}

interface DashboardSidebarProps {
  role: "patient" | "doctor" | "admin";
}

export const DashboardSidebar = ({ role }: DashboardSidebarProps) => {
  const patientItems: SidebarItem[] = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/patient/dashboard" },
    { icon: Search, label: "Find Doctors", path: "/patient/search" },
    { icon: Calendar, label: "My Appointments", path: "/patient/appointments" },
    { icon: User, label: "Profile", path: "/patient/profile" },
    { icon: HelpCircle, label: "Support", path: "/patient/support" },
  ];

  const doctorItems: SidebarItem[] = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/doctor/dashboard" },
    { icon: Calendar, label: "Appointments", path: "/doctor/appointments" },
    { icon: Clock, label: "Availability", path: "/doctor/availability" },
    { icon: User, label: "My Profile", path: "/doctor/profile" },
    { icon: HelpCircle, label: "Support", path: "/doctor/support" },
  ];

  const adminItems: SidebarItem[] = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/admin/dashboard" },
    { icon: UserCheck, label: "Pending Doctors", path: "/admin/pending-doctors" },
    { icon: Stethoscope, label: "Approved Doctors", path: "/admin/approved-doctors" },
    { icon: Users, label: "Users", path: "/admin/users" },
    { icon: Calendar, label: "Appointments", path: "/admin/appointments" },
  ];

  const items = role === "patient" ? patientItems : role === "doctor" ? doctorItems : adminItems;

  return (
    <nav className="space-y-1 p-4">
      {items.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          activeClassName="bg-primary/10 text-primary hover:bg-primary/10 hover:text-primary"
        >
          <item.icon className="h-5 w-5" />
          <span>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
};
