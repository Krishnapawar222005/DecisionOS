"use client";

import {
  ArrowRight,
  Brain,
  ShieldAlert,
  Wind,
  Thermometer,
  Droplets,
} from "lucide-react";

import { useLiveData } from "@/context/LiveDataContext";

export function AIDecisionCenter() {
  const { weather, aqi, aiReport, loading, refresh } = useLiveData();

  if (loading || !weather || !aqi) {
    return (
      <section className="rounded-3xl border border-border bg-card p-8 shadow-sm">
        <h2 className="text-2xl font-bold">
          AI Decision Center
        </h2>

        <p className="mt-4 text-muted-foreground">
          Loading live AI analysis...
        </p>
      </section>
    );
  }

  let score = 100;

  score -= Math.max(0, weather.temp - 30);

  score -= Math.max(0, aqi.aqi * 5);

  score = Math.max(score, 0);

  const insights = [
    {
      icon: Thermometer,
      title: "Temperature",
      value: `${weather.temp} °C`,
      color: "text-red-500",
    },
    {
      icon: Droplets,
      title: "Humidity",
      value: `${weather.humidity}%`,
      color: "text-blue-500",
    },
    {
      icon: Wind,
      title: "Wind",
      value: `${weather.wind} m/s`,
      color: "text-green-500",
    },
    {
      icon: ShieldAlert,
      title: "AQI",
      value: aqi.aqi,
      color: "text-orange-500",
    },
  ];

  const recommendations =
    aiReport
      ?.split("\n")
      .filter((line) => line.trim().length > 0)
      .slice(0, 5) || [];

  return (
    <section className="rounded-3xl border border-border bg-card p-4 sm:p-6 lg:p-8 shadow-sm">

      {/* Header */}

      <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">

        <div className="flex items-center gap-4">

          <div className="rounded-2xl bg-blue-100 p-3">
            <Brain className="h-8 w-8 text-blue-600" />
          </div>

          <div>

            <h2 className="text-3xl font-bold">
              AI Decision Center
            </h2>

            <p className="text-muted-foreground">
              Live AI-generated environmental analysis
            </p>

          </div>

        </div>

        <div className="rounded-2xl border border-border bg-background px-8 py-5 text-center">

          <p className="text-sm text-muted-foreground">
            Community Score
          </p>

          <h2 className="mt-2 text-5xl font-bold text-blue-600">
            {score}
          </h2>

          <p className="text-sm text-muted-foreground">
            /100
          </p>

        </div>

      </div>

      {/* Content */}

      <div className="mt-10 grid gap-8 lg:grid-cols-2">

        {/* Insights */}

        <div>

          <h3 className="mb-5 text-lg font-semibold">
            Live Insights
          </h3>

          <div className="space-y-4">

            {insights.map((item) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-center justify-between rounded-xl border border-border p-4"
                >

                  <div className="flex items-center gap-3">

                    <Icon className={`h-5 w-5 ${item.color}`} />

                    <span>{item.title}</span>

                  </div>

                  <span className={`font-semibold ${item.color}`}>
                    {item.value}
                  </span>

                </div>
              );

            })}

          </div>

        </div>

        {/* AI Report */}

        <div>

          <h3 className="mb-5 text-lg font-semibold">
            Gemini Recommendations
          </h3>

          <div className="space-y-3">

            {recommendations.map((item, index) => (

              <div
                key={index}
                className="rounded-xl border border-border bg-background p-4"
              >
                ✓ {item}
              </div>

            ))}

          </div>

          <button
            onClick={refresh}
            className="mt-8 flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
          >
            Refresh AI Analysis

            <ArrowRight className="h-4 w-4" />

          </button>

        </div>

      </div>

    </section>
  );
}