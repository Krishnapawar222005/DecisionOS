import { Bell, Search } from "lucide-react";

export function TopNavbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Dashboard
        </h2>
      </div>

      <div className="flex items-center gap-4">

        <div className="flex items-center rounded-lg border px-3 py-2">
          <Search size={18} className="text-slate-400" />

          <input
            placeholder="Search..."
            className="ml-2 outline-none text-sm"
          />
        </div>

        <button className="rounded-lg border p-2 hover:bg-slate-100">
          <Bell size={18} />
        </button>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-semibold">
          K
        </div>

      </div>
    </header>
  );
}