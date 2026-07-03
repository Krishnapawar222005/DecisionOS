"use client";

interface AIRiskPanelProps {
  report: string;
}

export default function AIRiskPanel({
  report,
}: AIRiskPanelProps) {
  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm">

      <h2 className="text-2xl font-bold">
        🤖 AI Risk Assessment
      </h2>

      <div className="mt-6 rounded-xl bg-muted p-6 whitespace-pre-wrap leading-7">
        {report || "Generating AI Risk Assessment..."}
      </div>

    </section>
  );
}