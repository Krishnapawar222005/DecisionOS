"use client";

import { useEffect, useState } from "react";
import {
  Thermometer,
  Wind,
  Droplets,
  Activity,
} from "lucide-react";

import { getWeather } from "@/lib/weather";
import { getAQI } from "@/lib/aqi";

interface WeatherData {
  temp: number;
  humidity: number;
  wind: number;
  description: string;
}

interface AQIData {
  aqi: number;
}

export default function LiveKPICards() {
  const [weather, setWeather] = useState<WeatherData>({
    temp: 0,
    humidity: 0,
    wind: 0,
    description: "",
  });

  const [aqi, setAQI] = useState<AQIData>({
    aqi: 0,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;

      const weatherData = await getWeather(lat, lng);
      setWeather(weatherData);

      const aqiData = await getAQI(lat, lng);
      setAQI(aqiData);
    });
  }, []);

  const cards = [
    {
      title: "Temperature",
      value: `${weather.temp}°C`,
      change: weather.description,
      icon: Thermometer,
    },
    {
      title: "AQI",
      value: `${aqi.aqi}`,
      change:
        aqi.aqi <= 2
          ? "Good"
          : aqi.aqi <= 3
          ? "Moderate"
          : "Poor",
      icon: Activity,
    },
    {
      title: "Humidity",
      value: `${weather.humidity}%`,
      change: "Live",
      icon: Droplets,
    },
    {
      title: "Wind",
      value: `${weather.wind} m/s`,
      change: "Live",
      icon: Wind,
    },
  ];

  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-muted-foreground">
                {card.title}
              </p>

              <Icon className="h-5 w-5 text-blue-600" />
            </div>

            <h3 className="mt-4 text-3xl font-bold">
              {card.value}
            </h3>

            <p className="mt-2 text-sm text-emerald-600">
              {card.change}
            </p>
          </div>
        );
      })}
    </section>
  );
}