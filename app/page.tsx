import Link from "next/link";
import { ArrowRight, Brain, Shield, BarChart3 } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-100">
      {/* Hero */}
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">

        <div className="mb-6 rounded-full bg-blue-100 p-5">
          <Brain className="h-14 w-14 text-blue-600" />
        </div>

        <h1 className="text-6xl font-extrabold text-slate-900">
          DecisionOS
        </h1>

        <p className="mt-4 text-2xl font-medium text-blue-600">
          Analyze • Predict • Decide
        </p>

        <p className="mt-6 max-w-3xl text-lg text-slate-600">
          An AI-powered Decision Intelligence Platform that helps governments,
          organizations, and emergency response teams analyze incidents,
          predict risks, and generate actionable recommendations using Gemini AI.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
          >
            Launch Dashboard
            <ArrowRight className="h-5 w-5" />
          </Link>

          <Link
            href="/copilot"
            className="rounded-xl border border-blue-600 px-8 py-4 text-lg font-semibold text-blue-600 transition hover:bg-blue-50"
          >
            Try AI Copilot
          </Link>
        </div>

        {/* Features */}
        <div className="mt-20 grid w-full max-w-6xl gap-6 md:grid-cols-3">

          <div className="rounded-3xl bg-white p-8 shadow-sm border">
            <Brain className="mx-auto h-10 w-10 text-blue-600" />
            <h3 className="mt-4 text-xl font-bold">
              AI Decision Support
            </h3>
            <p className="mt-2 text-slate-600">
              Analyze incidents using Gemini AI and receive intelligent recommendations.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm border">
            <BarChart3 className="mx-auto h-10 w-10 text-green-600" />
            <h3 className="mt-4 text-xl font-bold">
              Community Analytics
            </h3>
            <p className="mt-2 text-slate-600">
              Monitor traffic, air quality, alerts, and community health with real-time dashboards.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm border">
            <Shield className="mx-auto h-10 w-10 text-red-600" />
            <h3 className="mt-4 text-xl font-bold">
              Incident Management
            </h3>
            <p className="mt-2 text-slate-600">
              Upload incidents, analyze risks, and generate executive action plans.
            </p>
          </div>

        </div>

      </section>
    </main>
  );
}