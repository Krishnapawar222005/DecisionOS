"use client";

import { Brain, Sparkles, ShieldAlert } from "lucide-react";

interface AIRiskPanelProps {
  report: string;
}

export default function AIRiskPanel({
  report,
}: AIRiskPanelProps) {
  return (
    <section className="rounded-3xl border border-border bg-card p-8 shadow-sm">

      {/* Header */}
      <div className="flex items-center gap-4">

        <div className="rounded-2xl bg-blue-100 p-4">
          <Brain className="h-8 w-8 text-blue-600" />
        </div>

        <div>
          <h2 className="text-3xl font-bold">
            🔮 AI Predictive Intelligence
          </h2>

          <p className="text-muted-foreground">
            AI forecasts future community conditions using live environmental data.
          </p>
        </div>

      </div>

      {/* Badges */}
      <div className="mt-6 flex flex-wrap gap-3">

        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
          🤖 Powered by Gemini
        </span>

        <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
          🌦 Live Weather
        </span>

        <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700">
          🌍 Live AQI
        </span>

        <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700">
          🔮 6 Hour Prediction
        </span>

      </div>

      {/* AI Report */}
      <div className="mt-8 rounded-2xl border border-border bg-background p-6">

        <div className="mb-4 flex items-center gap-2">

          <Sparkles className="h-5 w-5 text-blue-600" />

          <h3 className="text-xl font-semibold">
            Executive AI Prediction
          </h3>

        </div>

        <pre className="whitespace-pre-wrap font-sans text-sm leading-7 text-foreground">
          {report}
        </pre>

      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">

        <ShieldAlert className="h-4 w-4 text-blue-600" />

        Predictions are generated using Google's Gemini AI from live weather,
        AQI, humidity and wind conditions.

      </div>

    </section>
  );
}