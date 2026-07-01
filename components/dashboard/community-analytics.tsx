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

const data = [
  { day: "Mon", traffic: 980 },
  { day: "Tue", traffic: 1120 },
  { day: "Wed", traffic: 1090 },
  { day: "Thu", traffic: 1240 },
  { day: "Fri", traffic: 1284 },
  { day: "Sat", traffic: 1180 },
  { day: "Sun", traffic: 1040 },
];

export function CommunityAnalytics() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900">
        Community Analytics
      </h2>

      <p className="mb-6 text-slate-500">
        Traffic trend over the last 7 days
      </p>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="day" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="traffic"
              stroke="#2563eb"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}