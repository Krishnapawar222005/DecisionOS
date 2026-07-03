"use client";

import {
  Thermometer,
  Droplets,
  Wind,
  CloudSun,
} from "lucide-react";

interface WeatherProps {
  temp: number;
  humidity: number;
  wind: number;
  description: string;
}

export default function WeatherCards({
  temp,
  humidity,
  wind,
  description,
}: WeatherProps) {
  const cards = [
    {
      title: "Temperature",
      value: `${temp}°C`,
      icon: Thermometer,
      color: "text-red-500",
    },
    {
      title: "Humidity",
      value: `${humidity}%`,
      icon: Droplets,
      color: "text-blue-500",
    },
    {
      title: "Wind",
      value: `${wind} m/s`,
      icon: Wind,
      color: "text-green-500",
    },
    {
      title: "Condition",
      value: description,
      icon: CloudSun,
      color: "text-yellow-500",
    },
  ];

  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                {card.title}
              </p>

              <Icon className={`h-6 w-6 ${card.color}`} />
            </div>

            <h2 className="mt-5 text-3xl font-bold">
              {card.value}
            </h2>
          </div>
        );
      })}
    </section>
  );
}