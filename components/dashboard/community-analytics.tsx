"use client";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { getHistory } from "@/lib/history";

export function CommunityAnalytics() {
  const history = getHistory();

  const data = history.map((item: any, index: number) => ({
    reading: index + 1,
    temperature: item.temp,
    humidity: item.humidity,
    aqi: item.aqi,
  }));

  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm">

      <h2 className="text-2xl font-bold">
        Live Community Analytics
      </h2>

      <p className="mb-6 text-muted-foreground">
        Live environmental readings collected from your location
      </p>

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="reading" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="temperature"
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
              dataKey="aqi"
              stroke="#22c55e"
              strokeWidth={3}
              name="AQI"
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </section>
  );
}