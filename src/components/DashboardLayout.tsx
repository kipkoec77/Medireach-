import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: ReactNode;
  sidebar: ReactNode;
  userRole: "patient" | "doctor" | "admin";
}

export const DashboardLayout = ({ children, sidebar, userRole }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen bg-muted/30">
      <Navbar variant="authenticated" userRole={userRole} />
      
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden w-64 border-r border-border bg-background md:block">
          <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
            {sidebar}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div className="container mx-auto p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};
