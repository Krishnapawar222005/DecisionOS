"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ReportDetailsPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-5xl rounded-3xl border bg-white p-8 shadow-sm">

        <Link
          href="/reports"
          className="mb-6 inline-flex items-center gap-2 text-blue-600"
        >
          <ArrowLeft size={18} />
          Back to Reports
        </Link>

        <h1 className="text-3xl font-bold">
          Incident Report
        </h1>

        <p className="mt-6">
          This is the report details page.
        </p>

      </div>
    </main>
  );
}