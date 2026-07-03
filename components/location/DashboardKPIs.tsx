"use client";

import { getHistory } from "@/lib/history";

interface DashboardKPIsProps {
  temp: number;
  humidity: number;
  wind: number;
  aqi: number;
}

export default function DashboardKPIs({
  temp,
  humidity,
  wind,
  aqi,
}: DashboardKPIsProps) {
  const history = getHistory();

  const cards = [
    {
      title: "🌡 Temperature",
      value: `${temp.toFixed(1)} °C`,
    },
    {
      title: "🌫 AQI",
      value: aqi,
    },
    {
      title: "💧 Humidity",
      value: `${humidity}%`,
    },
    {
      title: "💨 Wind",
      value: `${wind} m/s`,
    },
    {
      title: "📈 Total Readings",
      value: history.length,
    },
    {
      title: "🕒 Last Updated",
      value:
        history.length > 0
          ? history[history.length - 1].time
          : "--",
    },
  ];

  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-2xl border border-border bg-card p-6 shadow-sm"
        >
          <h3 className="text-sm text-muted-foreground">
            {card.title}
          </h3>

          <p className="mt-4 text-3xl font-bold">
            {card.value}
          </p>
        </div>
      ))}
    </section>
  );
}