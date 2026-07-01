import { AlertTriangle, CheckCircle, Clock } from "lucide-react";

const incidents = [
  {
    incident: "Flood Warning - Sector 12",
    priority: "High",
    status: "Investigating",
    recommendation: "Deploy response team",
    icon: AlertTriangle,
    color: "text-red-600",
  },
  {
    incident: "Traffic Congestion - MG Road",
    priority: "Medium",
    status: "Monitoring",
    recommendation: "Divert traffic",
    icon: Clock,
    color: "text-amber-600",
  },
  {
    incident: "Air Quality Alert",
    priority: "Low",
    status: "Stable",
    recommendation: "Continue monitoring",
    icon: CheckCircle,
    color: "text-green-600",
  },
];

export function RecentIncidents() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900">
        Recent Incidents
      </h2>

      <p className="mb-6 text-slate-500">
        Latest AI-monitored community incidents.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b text-left">
              <th className="pb-3">Incident</th>
              <th className="pb-3">Priority</th>
              <th className="pb-3">Status</th>
              <th className="pb-3">Recommendation</th>
            </tr>
          </thead>

          <tbody>
            {incidents.map((item) => {
              const Icon = item.icon;

              return (
                <tr key={item.incident} className="border-b">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <Icon className={`h-5 w-5 ${item.color}`} />
                      {item.incident}
                    </div>
                  </td>

                  <td>{item.priority}</td>

                  <td>{item.status}</td>

                  <td>{item.recommendation}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}