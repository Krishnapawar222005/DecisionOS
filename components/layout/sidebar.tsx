"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Bot,
  FileText,
  Settings,
  AlertTriangle,
  Menu,
  X,
} from "lucide-react";

import { Logo } from "@/components/shared/logo";

export function Sidebar() {
  const [open, setOpen] = useState(false);

  const links = [
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      href: "/copilot",
      label: "AI Copilot",
      icon: Bot,
    },
    {
      href: "/incidents",
      label: "Incidents",
      icon: AlertTriangle,
    },
    {
      href: "/reports",
      label: "Reports",
      icon: FileText,
    },
    {
      href: "/settings",
      label: "Settings",
      icon: Settings,
    },
  ];

  return (
    <>
      {/* Mobile Header */}
      <div className="sticky top-0 z-50 flex items-center justify-between border-b bg-card p-4 lg:hidden">
        <Logo />

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 hover:bg-accent"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed
          top-0
          left-0
          z-50
          h-screen
          w-72
          border-r
          border-border
          bg-card
          transition-transform
          duration-300
          lg:static
          lg:translate-x-0
          ${
            open
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        <div className="border-b border-border p-6">
          <Logo />
        </div>

        <nav className="space-y-2 p-4">
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition hover:bg-accent"
              >
                <Icon size={18} />
                {link.label}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}