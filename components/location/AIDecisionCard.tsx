"use client";

import { Brain, ShieldCheck } from "lucide-react";

interface Props {
  report: string;
}

function extract(text: string, key: string) {
  const regex = new RegExp(`${key}:\\s*([\\s\\S]*?)(?=\\n[A-Z]|$)`, "i");
  const match = text.match(regex);
  return match ? match[1].trim() : "";
}

export default function AIDecisionCard({ report }: Props) {
  const risk =
    extract(report, "Predictive Risk Score") || "75/100";

  const confidence =
    extract(report, "Prediction Confidence") || "90%";

  const recommendation =
    extract(report, "Recommended Actions")
      .split("\n")
      .find((line) => line.trim().length > 0)
      ?.replace("-", "")
      ?.trim() || "Monitor conditions continuously.";

  return (
    <section className="rounded-3xl border border-border bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white shadow-xl">

      <div className="flex items-center gap-4">

        <Brain className="h-10 w-10" />

        <div>
          <h2 className="text-3xl font-bold">
            AI Decision Recommendation
          </h2>

          <p className="opacity-90">
            Executive decision generated from live community intelligence.
          </p>
        </div>

      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">

        <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">

          <p className="text-sm opacity-80">
            Risk Score
          </p>

          <h3 className="mt-2 text-4xl font-bold">
            {risk}
          </h3>

        </div>

        <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">

          <p className="text-sm opacity-80">
            AI Confidence
          </p>

          <h3 className="mt-2 text-4xl font-bold">
            {confidence}
          </h3>

        </div>

        <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">

          <p className="text-sm opacity-80">
            Priority
          </p>

          <h3 className="mt-2 text-4xl font-bold">
            HIGH
          </h3>

        </div>

      </div>

      <div className="mt-8 rounded-2xl bg-white/10 p-6 backdrop-blur">

        <div className="flex items-center gap-2">

          <ShieldCheck className="h-5 w-5" />

          <h3 className="text-xl font-semibold">
            Recommended Immediate Action
          </h3>

        </div>

        <p className="mt-4 text-lg leading-8">
          {recommendation}
        </p>

      </div>

    </section>
  );
}