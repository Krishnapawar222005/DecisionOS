import Link from "next/link";
import {
  LayoutDashboard,
  Bot,
  FileText,
  Settings,
  AlertTriangle,
} from "lucide-react";

import { Logo } from "@/components/shared/logo";

export function Sidebar() {
  return (
    <aside className="h-screen w-72 border-r bg-white">
      <div className="border-b p-6">
        <Logo />
      </div>

      <nav className="space-y-2 p-4">

        <Link
          href="/dashboard"
          className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition hover:bg-slate-100"
        >
          <LayoutDashboard size={18} />
          Dashboard
        </Link>

        <Link
          href="/copilot"
          className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition hover:bg-slate-100"
        >
          <Bot size={18} />
          AI Copilot
        </Link>

        <Link
          href="/incidents"
          className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition hover:bg-slate-100"
        >
          <AlertTriangle size={18} />
          Incidents
        </Link>

        <Link
          href="/reports"
          className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition hover:bg-slate-100"
        >
          <FileText size={18} />
          Reports
        </Link>

        <Link
          href="/settings"
          className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition hover:bg-slate-100"
        >
          <Settings size={18} />
          Settings
        </Link>

      </nav>
    </aside>
  );
}