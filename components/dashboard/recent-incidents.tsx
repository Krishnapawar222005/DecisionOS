"use client";

import {
  AlertTriangle,
  CheckCircle,
  Wind,
} from "lucide-react";

import { useLiveData } from "@/context/LiveDataContext";

export function RecentIncidents() {
  const { weather, aqi, loading } = useLiveData();

  if (loading || !weather || !aqi) {
    return (
      <section className="rounded-3xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-2xl font-bold">
          Recent Incidents
        </h2>

        <p className="mt-4 text-muted-foreground">
          Loading live incidents...
        </p>
      </section>
    );
  }

  const incidents = [];

  // AQI Alert
  if (aqi.aqi >= 4) {
    incidents.push({
      incident: "Poor Air Quality",
      priority: "High",
      status: "Active",
      recommendation: "Avoid prolonged outdoor activities.",
      icon: AlertTriangle,
      color: "text-red-600",
    });
  } else {
    incidents.push({
      incident: "Air Quality Normal",
      priority: "Low",
      status: "Stable",
      recommendation: "No action required.",
      icon: CheckCircle,
      color: "text-green-600",
    });
  }

  // High Temperature
  if (weather.temp >= 35) {
    incidents.push({
      incident: "High Temperature",
      priority: "Medium",
      status: "Monitoring",
      recommendation: "Stay hydrated and avoid peak sunlight.",
      icon: AlertTriangle,
      color: "text-orange-600",
    });
  }

  // Strong Wind
  if (weather.wind >= 8) {
    incidents.push({
      incident: "Strong Wind Conditions",
      priority: "Medium",
      status: "Monitoring",
      recommendation: "Secure loose outdoor objects.",
      icon: Wind,
      color: "text-blue-600",
    });
  }

  // Always show current weather
  incidents.push({
    incident: weather.description,
    priority: "Info",
    status: "Live",
    recommendation: "Weather conditions are updating in real time.",
    icon: CheckCircle,
    color: "text-blue-600",
  });

  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm">

      <h2 className="text-2xl font-bold">
        Live Incidents & Alerts
      </h2>

      <p className="mb-6 text-muted-foreground">
        AI-generated alerts based on your current location.
      </p>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-border text-left">

              <th className="pb-3">Incident</th>
              <th className="pb-3">Priority</th>
              <th className="pb-3">Status</th>
              <th className="pb-3">Recommendation</th>

            </tr>

          </thead>

          <tbody>

            {incidents.map((item) => {

              const Icon = item.icon;

              return (
                <tr
                  key={item.incident}
                  className="border-b border-border"
                >

                  <td className="py-4">

                    <div className="flex items-center gap-3">

                      <Icon
                        className={`h-5 w-5 ${item.color}`}
                      />

                      {item.incident}

                    </div>

                  </td>

                  <td>{item.priority}</td>

                  <td>{item.status}</td>

                  <td>{item.recommendation}</td>

                </tr>
              );

            })}

          </tbody>

        </table>

      </div>

    </section>
  );
}