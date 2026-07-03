"use client";

import { generateExecutiveReport } from "@/lib/report";

interface ExecutiveReportProps {
  weather: {
    temp: number;
    humidity: number;
    wind: number;
    description: string;
  };
  aqi: {
    aqi: number;
    pm25: number;
    pm10: number;
  };
  aiReport: string;
}

export default function ExecutiveReport({
  weather,
  aqi,
  aiReport,
}: ExecutiveReportProps) {
  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm">

      <h2 className="text-2xl font-bold">
        📄 Executive Report
      </h2>

      <p className="mt-3 text-muted-foreground">
        Download a professional report containing live weather,
        air quality and AI risk analysis.
      </p>

      <button
        onClick={() =>
          generateExecutiveReport({
            weather,
            aqi,
            aiReport,
          })
        }
        className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        📥 Download Executive Report
      </button>

    </section>
  );
}