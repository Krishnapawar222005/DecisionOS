import { ReactNode } from "react";
import { Sidebar } from "./sidebar";

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground lg:flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main
        className="
          flex-1
          overflow-x-hidden
          overflow-y-auto
          p-4
          sm:p-6
          lg:p-8
        "
      >
        {children}
      </main>

    </div>
  );
}