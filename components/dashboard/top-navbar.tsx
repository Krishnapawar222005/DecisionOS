"use client";

import { Bell, Search } from "lucide-react";

export function TopNavbar() {
  return (
    <header className="flex flex-col gap-4 border-b border-border bg-card p-4 sm:flex-row sm:items-center sm:justify-between sm:p-6">

      {/* Title */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Dashboard
        </h2>
      </div>

      {/* Right Side */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">

        {/* Search */}
        <div className="flex w-full items-center rounded-xl border border-border bg-background px-3 py-2 sm:w-80">

          <Search
            size={18}
            className="text-muted-foreground"
          />

          <input
            type="text"
            placeholder="Search..."
            className="ml-2 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />

        </div>

        {/* Notification */}
        <button
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-border transition hover:bg-accent"
        >
          <Bell size={18} />
        </button>

        {/* Avatar */}
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
          K
        </div>

      </div>

    </header>
  );
}