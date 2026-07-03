"use client";

import { useEffect, useState } from "react";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { getHistory, HistoryRecord } from "@/lib/history";

export default function AnalyticsDashboard() {
  const [history, setHistory] = useState<HistoryRecord[]>([]);

  useEffect(() => {
    const loadHistory = () => {
      setHistory(getHistory());
    };

    loadHistory();

    const interval = setInterval(loadHistory, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm">

      <h2 className="text-2xl font-bold">
        📊 Live Analytics Dashboard
      </h2>

      <p className="mt-2 text-muted-foreground">
        Live weather and AQI history collected by DecisionOS.
      </p>

      <div className="mt-8 h-[450px]">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={history}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="time" />

            <YAxis />

            <Tooltip />

            <Legend />

            <Line
              type="monotone"
              dataKey="temp"
              stroke="#ef4444"
              strokeWidth={3}
              name="Temperature"
            />

            <Line
              type="monotone"
              dataKey="humidity"
              stroke="#3b82f6"
              strokeWidth={3}
              name="Humidity"
            />

            <Line
              type="monotone"
              dataKey="wind"
              stroke="#22c55e"
              strokeWidth={3}
              name="Wind"
            />

            <Line
              type="monotone"
              dataKey="aqi"
              stroke="#eab308"
              strokeWidth={3}
              name="AQI"
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </section>
  );
}