"use client";

import { useRouter } from "next/navigation";
import {
  FileText,
  Eye,
  Download,
  Trash2,
  Search,
  Plus,
} from "lucide-react";

const reports = [
  {
    id: 1,
    title: "Fire Incident Report",
    date: "02 Jul 2026",
    risk: "High",
  },
  {
    id: 2,
    title: "Flood Risk Assessment",
    date: "01 Jul 2026",
    risk: "Medium",
  },
  {
    id: 3,
    title: "Electrical Hazard",
    date: "30 Jun 2026",
    risk: "Low",
  },
];

export default function ReportsPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl space-y-8">

        {/* Header */}
        <div className="flex items-center justify-between rounded-3xl border border-border bg-card p-8 shadow-sm">
          <div>
            <h1 className="text-4xl font-bold text-foreground">
              Reports
            </h1>

            <p className="mt-2 text-muted-foreground">
              Manage AI-generated incident reports.
            </p>
          </div>

          <button
            onClick={() => router.push("/incidents")}
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
          >
            <Plus size={18} />
            New Report
          </button>
        </div>

        {/* Search */}
        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3">
            <Search
              size={18}
              className="text-muted-foreground"
            />

            <input
              type="text"
              placeholder="Search reports..."
              className="w-full bg-transparent text-foreground outline-none placeholder:text-muted-foreground"
            />
          </div>
        </div>

        {/* Reports */}
        <div className="space-y-6">

          {reports.map((report) => (
            <div
              key={report.id}
              className="rounded-3xl border border-border bg-card p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center justify-between">

                <div className="flex items-center gap-5">

                  <div className="rounded-2xl bg-blue-500/10 p-4">
                    <FileText
                      size={30}
                      className="text-blue-600"
                    />
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground">
                      {report.title}
                    </h2>

                    <p className="text-muted-foreground">
                      {report.date}
                    </p>

                    <span
                      className={`mt-3 inline-block rounded-full px-4 py-1 text-sm font-semibold ${
                        report.risk === "High"
                          ? "bg-red-500/10 text-red-600"
                          : report.risk === "Medium"
                          ? "bg-yellow-500/10 text-yellow-600"
                          : "bg-green-500/10 text-green-600"
                      }`}
                    >
                      {report.risk} Risk
                    </span>
                  </div>

                </div>

                <div className="flex gap-3">

                  <button
                    onClick={() => router.push(`/reports/${report.id}`)}
                    className="rounded-xl bg-blue-500/10 p-3 transition hover:bg-blue-500/20"
                  >
                    <Eye className="text-blue-600" />
                  </button>

                  <button
                    onClick={() =>
                      alert("Download feature coming soon")
                    }
                    className="rounded-xl bg-green-500/10 p-3 transition hover:bg-green-500/20"
                  >
                    <Download className="text-green-600" />
                  </button>

                  <button
                    onClick={() =>
                      alert("Delete feature coming soon")
                    }
                    className="rounded-xl bg-red-500/10 p-3 transition hover:bg-red-500/20"
                  >
                    <Trash2 className="text-red-600" />
                  </button>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </main>
  );
}