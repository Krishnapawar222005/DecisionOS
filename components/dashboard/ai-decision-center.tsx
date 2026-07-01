import {
  ArrowRight,
  Brain,
  ShieldAlert,
  TrafficCone,
  Trees,
  Siren,
} from "lucide-react";

const communityScore = 92;

const insights = [
  {
    icon: ShieldAlert,
    title: "Flood Risk",
    value: "Medium",
    color: "text-amber-600",
  },
  {
    icon: TrafficCone,
    title: "Traffic Peak",
    value: "High after 6 PM",
    color: "text-red-600",
  },
  {
    icon: Trees,
    title: "Air Quality",
    value: "Good",
    color: "text-emerald-600",
  },
  {
    icon: Siren,
    title: "Active Alerts",
    value: "12",
    color: "text-blue-600",
  },
];

const actions = [
  "Deploy traffic police near MG Road",
  "Inspect drainage in Sector 12",
  "Monitor AQI in Industrial Area",
];

export function AIDecisionCenter() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      {/* Header */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex items-center gap-4">
          <div className="rounded-2xl bg-blue-100 p-3">
            <Brain className="h-8 w-8 text-blue-600" />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              AI Decision Center
            </h2>

            <p className="mt-1 text-slate-500">
              AI has analyzed today's community data and generated
              recommendations.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-8 py-5 text-center">
          <p className="text-sm text-slate-500">
            Community Score
          </p>

          <h2 className="mt-2 text-5xl font-bold text-blue-600">
            {communityScore}
          </h2>

          <p className="text-sm text-slate-500">
            /100
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mt-10 grid gap-8 lg:grid-cols-2">

        {/* Insights */}
        <div>
          <h3 className="mb-5 text-lg font-semibold text-slate-900">
            Today's AI Insights
          </h3>

          <div className="space-y-4">
            {insights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-center justify-between rounded-xl border border-slate-200 p-4 transition hover:bg-slate-50"
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`h-5 w-5 ${item.color}`} />

                    <span className="font-medium text-slate-700">
                      {item.title}
                    </span>
                  </div>

                  <span className={`font-semibold ${item.color}`}>
                    {item.value}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recommendations */}
        <div>
          <h3 className="mb-5 text-lg font-semibold text-slate-900">
            Recommended Actions
          </h3>

          <div className="space-y-4">
            {actions.map((action) => (
              <div
                key={action}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:bg-slate-100"
              >
                <span className="text-green-600">✓</span>{" "}
                <span className="text-slate-700">{action}</span>
              </div>
            ))}
          </div>

          <button className="mt-8 flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700">
            Generate Executive Action Plan

            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}