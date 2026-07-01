import { LayoutDashboard, Bot, FileText, Settings, AlertTriangle } from "lucide-react";
import { Logo } from "@/components/shared/logo";

export function Sidebar() {
  return (
    <aside className="w-72 h-screen border-r bg-white">
      <div className="p-6 border-b">
        <Logo />
      </div>

      <nav className="p-4 space-y-2">

        <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium hover:bg-slate-100">
          <LayoutDashboard size={18} />
          Dashboard
        </button>

        <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium hover:bg-slate-100">
          <Bot size={18} />
          AI Copilot
        </button>

        <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium hover:bg-slate-100">
          <AlertTriangle size={18} />
          Incidents
        </button>

        <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium hover:bg-slate-100">
          <FileText size={18} />
          Reports
        </button>

        <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium hover:bg-slate-100">
          <Settings size={18} />
          Settings
        </button>

      </nav>
    </aside>
  );
}